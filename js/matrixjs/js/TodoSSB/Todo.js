//--- persistence ------------------------------------------------------

const TODO_LS_PREFIX = "todos-MatrixJS.";

class Todo extends MXStorable {
    constructor(islots) {
        super( Object.assign( { lsPrefix: TODO_LS_PREFIX},
            islots,
            { title: cI(islots.title),
                completed: cI(islots.completed || false)}))
    }
    static storableProperties () {
        return ["title", "completed"].concat(super.storableProperties());
    }
    static mxLoad() {
        return mkm( null, 'Todo',
            { itemsRaw: cI( MXStorable.loadAllItems( Todo, TODO_LS_PREFIX)
                .sort( (a,b) => a.created < b.created ? -1 : 1)|| []),

                items: cF( c => c.md.itemsRaw.filter( td => !td.deleted)),

                routeItems: cF( c => {
                    let selection = todoRoute.v;
                    return c.md.items
                        .filter( td => selection==='All'
                            || xor( selection==='Active', td.completed))
                        .sort( (a,b) => a.created < b.created ? -1 : 1)}),

                empty: cF( c => c.md.items.length === 0)})
    }
}

const todoRoute = cFI( c=> {let r = localStorage.getObject("todo-matrix.route");
        return r === null ? "All" : r;},
    { observer: (n, md, newv ) =>
        localStorage.setObject("todo-matrix.route", newv)});

const Todos = Todo.mxLoad();
