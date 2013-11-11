var topic9 = {};
topic9.indexedDB = {};

topic9.indexedDB.db = null;

topic9.indexedDB.open = function () {
    var version = 1;
    var request = indexedDB.open("textArea", version);

    // We can only create Object stores in a versionchange transaction.
    request.onupgradeneeded = function (e) {
        var db = e.target.result;

        // A versionchange transaction is started automatically.
        e.target.transaction.onerror = topic9.indexedDB.onerror;

        if (db.objectStoreNames.contains("textArea")) {
            db.deleteObjectStore("textArea");
        }

        var store = db.createObjectStore("textArea",
          { keyPath: "id", autoIncrement: true });
    };

    request.onsuccess = function (e) {
        topic9.indexedDB.db = e.target.result;
        topic9.indexedDB.getTextAreaValue();
    };

    request.onerror = topic9.indexedDB.onerror;
};

topic9.indexedDB.add = function (text) {

    var db = topic9.indexedDB.db;
    topic9.indexedDB.delete(1);
    var trans = db.transaction(["textArea"], "readwrite");
    var store = trans.objectStore("textArea");
    var request = store.put({ "text": text });

    request.onsuccess = function (e) {
        topic9.indexedDB.getTextAreaValue();
    };

    request.onerror = function (e) {
        console.log(e.value);
    };
};

topic9.indexedDB.getTextAreaValue = function () {
    $textAreaIndexed.val('');

    var db = topic9.indexedDB.db;
    var trans = db.transaction(["textArea"], "readwrite");
    var store = trans.objectStore("textArea");

    // Get everything in the store;
    var keyRange = IDBKeyRange.lowerBound(0);
    var cursorRequest = store.openCursor(keyRange);

    cursorRequest.onsuccess = function (e) {
        var result = e.target.result;
        if (!!result == false)
            return;

        $textAreaIndexed.val(result.value.text);
        result.continue();
    };

    cursorRequest.onerror = topic9.indexedDB.onerror;
};

topic9.indexedDB.delete = function () {
    var db = topic9.indexedDB.db;
    var trans = db.transaction(["textArea"], "readwrite");
    var store = trans.objectStore("textArea");

    trans.objectStore("textArea").clear();
};

$(document).ready(function () {
    $textAreaLocalStorage = $('#textAreaLocalStorage');
    $textAreaIndexed = $('#textAreaIndexed');
    $buttonLocalStorage = $('#buttonLocalStorage');
    $buttonIndexed = $('#buttonIndexed');
    $deleteLocalStorage = $('#deleteLocalStorage');
    $deleteIndexed = $('#deleteIndexed');

    var holder = document.getElementById('drop_zone'),
    state = document.getElementById('status');

    if (typeof window.FileReader === 'undefined') {
        state.className = 'fail';
    } else {
        state.className = 'success';
        state.innerHTML = 'File API & FileReader available';
    }

    holder.ondragover = function () {
        this.className = 'hover';
        return false;
    };
    holder.ondragend = function () {
        this.className = '';
        return false;
    };
    holder.ondrop = function (e) {
        this.className = '';
        e.preventDefault();

        var file = e.dataTransfer.files[0],
            reader = new FileReader();
        reader.onload = function (event) {
            console.log(event.target);
            holder.innerText = event.target.result;
        };
        console.log(file);
        reader.readAsText(file);

        return false;
    };

    topic9.indexedDB.open();
    
    

    if (window.localStorage.getItem('textAreaLocalStorage') !== null) {
        $textAreaLocalStorage.val(window.localStorage.getItem('textAreaLocalStorage'));
    }
    
    $buttonLocalStorage.on('click', function () {
        console.log($textAreaLocalStorage.val());
        window.localStorage.setItem('textAreaLocalStorage', $textAreaLocalStorage.val());

    });

    $buttonIndexed.on('click', function () {
        topic9.indexedDB.add($textAreaIndexed.val(), 1);

    });

    $deleteLocalStorage.on('click', function () {
        localStorage.clear();

    });

    $deleteIndexed.on('click', function () {
        topic9.indexedDB.delete();

    });

    

})