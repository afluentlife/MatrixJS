const TODO_LS_PREFIX = "todos-ConnectJS.";

class Todo extends Model {
    constructor(islots) {
        ast( islots.text, 'new Todo: text property is required');
        let netSlots = Object.assign({dbKey: TODO_LS_PREFIX + uuidv4()
                , text: cI( islots.text)
                , created: Date.now()
                , completed: cI( islots.completed || null)
                , deleted: cI( islots.deleted || null)}
            , islots);

        super(null, null, netSlots, false);
        if ( !islots.dbKey) { // ie, if not being instantiated from DB JSON
            this.store();
        }
    }
    static fromJSON ( json) {
        return new Todo( json )
    }
    static load (dbKey) {
        return new Todo( localStorage.getObject( dbKey))
    }

    // no matter what changed, re-write the whole thing...
    // todo try with anon fn as obs
    static obsTodoChange ( slot, todo, newv, priorv, c) {
        todo.store();
    }    slotObserverResolve(slot) { return Todo.obsTodoChange }

    static loadAllItems() {
        // load all items into model so various widgets can watch via Cell dependencies
        return mkm( null, 'Todo'
                , { itemsRaw: cI( Object.keys(localStorage)
                                    .filter( k => k.startsWith(TODO_LS_PREFIX))
                                    .map( Todo.load) || [])
                    , items: cF( c => c.md.itemsRaw.filter( td => !td.deleted))})
    }
    store () {
        localStorage.setObject( this.dbKey, this.toJSON());
    }
    toJSON () {
        return  { dbKey: this.dbKey
            , text: this.text
            , created: this.created
            , completed: this.completed
            , deleted: this.deleted }
    }
}