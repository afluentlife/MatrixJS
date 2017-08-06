(ns todo.todo
  (:require
    [clojure.string :as str]
    [tiltontec.cell.base :refer [unbound ia-type]]
    [tiltontec.cell.core
           :refer-macros [c? c?n] :refer [c-in ]]
    [tiltontec.cell.observer :refer [observe-by-type]]
    [tiltontec.model.core :as md :refer [make md-get md-reset!]]
    [tiltontec.util.core :as util :refer [pln now map-to-json json-to-map uuidv4]]
    [tiltontec.tag.html :refer [io-upsert io-read io-find io-truncate]]))

(def TODO_LS_PREFIX "todos-matrixjs.")

(declare td-upsert)

(defn make-todo
      "Make a matrix todo either on initial entry or on page load when
      pulling localStorage into the matrix"
  [islots]
  (let [net-slots (merge
            {:type ::todo
             :id (str TODO_LS_PREFIX (uuidv4))
             :created (now)}
            islots
            {:title (c-in (:title islots))
             :completed (c-in (:completed islots false))
             :deleted (or (:deleted islots)
                   (c-in nil))})
    todo (apply md/make (flatten (into [] net-slots)))]

    (when-not (:id islots)
      ;; no id means is it not being instantiated from localStorage
      (td-upsert todo))
    todo))

;;; --- straight accessors (but establishing dependency if hit within formulae)

(defn td-title [td]
  (md-get td :title))

(defn td-id [td]
  (md-get td :id))

(defn td-completed [td]
  (md-get td :completed))

;;; --- utilities converting between td, json, and map ----------------

(defn td-to-map [todo]
  (into {} (for [k [:id :created :title :completed :deleted]]
             [k (md-get todo k)])))

(defn td-to-json [todo]
  (map-to-json (td-to-map todo)))

(defn td-from-json [json]
  (make-todo (assoc (json-to-map json)
               :par :todo-42)))

;; -- new/update --

(defn td-upsert [td]
  (io-upsert (td-id td)
             (.stringify js/JSON
                         (td-to-json td))))

;; -- readers --

(defn td-load [id]
  (td-from-json
    (.parse js/JSON
            (io-read id))))

(defn td-load-all []
  ;; (io-truncate TODO_LS_PREFIX)
  (md/make ::todo-list
           :par :todo-42-top
           :items-raw (c?n (doall (map td-load (io-find TODO_LS_PREFIX))))
           :items (c? (doall (remove #(md-get % :deleted) (md-get me :items-raw))))))

;;; --- the matrix incarnation of localStorage --

(def gTodo (atom nil))

;; --- dependency-establishing accessors ---------------------

(defn gItems-raw []
  (md-get @gTodo :items-raw))

(defn gTodo-items []
  (md-get @gTodo :items))

(defn gTodo-lookup [id]
  (some (fn [td] (when (= id (td-id td)) td))
                 (gTodo-items)))

;; --- dataflow triggering mutations --------------

(defn td-delete [td]
  (md-reset! td :deleted (now)))

(defn td-toggle-completed [event id]
  (let [td (some (fn [td] (when (= id (td-id td)) td))
          (gTodo-items))]
    (assert td (str "td-toggle-completed cannot find " id))
    (md-reset! td :completed (when-not (td-completed td) (now)))))

(defn td-clear-completed [e]
  (doall
    (map td-delete  (filter td-completed (gTodo-items)))))

(defn td-delete-by-key [event id]
  (td-delete (gTodo-lookup id)))

;; --- dataflow observer propgates mutations to localStorage --------------

(defmethod observe-by-type [::todo.todo/todo] [slot me new-val old-val c]
   ;; regardless of which slot changed, update td instance
   (when-not (= old-val unbound)
             (td-upsert me)))


