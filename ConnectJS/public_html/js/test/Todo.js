/**
 * Created by kennetht2 on 7/4/17.
 */

function storageTest () {
    clg('storageTest entry');
    localStorage.clear();

    clg('after clear '+localStorageLoad(TODO_LS_PREFIX).length);

    let booya = new Todo({text: "booya"});

    clg( 'booya '+ JSON.stringify( booya.toJSON()));

    booya.completed = Date.now();

    let bya2 = JSON.parse( localStorage.getItem(booya.dbKey));
    clg('JSON hunh ' + bya2['completed']);
    clg('JSON hunh2 ' + bya2.completed);
    clg( ' bya2 gotten '+ JSON.stringify( bya2 ));

    let booya2 = Todo.fromJSON( bya2);
    clg( 'completed booya2 '+ JSON.stringify( booya2.toJSON()));

    booya2.deleted = Date.now();
    let bya3 = JSON.parse( localStorage.getItem(booya.dbKey));
    clg( 'deleted bya3 gotten '+ JSON.stringify( bya3));

    let booya3 = Todo.fromJSON( bya3);
    clg( 'deleted booya3 '+ JSON.stringify( booya3.toJSON()));

    let bingo = new Todo({text: "bingo"});
    clg( 'bingo '+ JSON.stringify( bingo.toJSON()));

    clg('got two? '+localStorageLoad(TODO_LS_PREFIX).length);

    let mdb = Todo.loadAllItems();

    clg('mdb items '+ mdb.items.length);

    mdb.items.map( i => clg( 'reread todo '+ JSON.stringify( i.toJSON())));
}