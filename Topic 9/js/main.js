var topic9 = {};

var square = {
    'x': 50,
    'y': 50,
    'width': 100,
    'height': 100,
    'fill': '#000000'
};

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

function getColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



$(document).ready(function () {
    $textAreaLocalStorage = $('#textAreaLocalStorage');
    $textAreaIndexed = $('#textAreaIndexed');
    $buttonLocalStorage = $('#buttonLocalStorage');
    $buttonIndexed = $('#buttonIndexed');
    $deleteLocalStorage = $('#deleteLocalStorage');
    $deleteIndexed = $('#deleteIndexed');
    $buttonSocket = $('#buttonSocket');

    /*
    * CANVAS
    */
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(450, 50);
    context.lineWidth = Math.floor((Math.random() * 10) + 1);

    // set line color
    context.strokeStyle = getColor();
    context.stroke();

    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 75;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 1.9 * Math.PI;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = Math.floor((Math.random() * 15) + 1);;

    // line color
    context.strokeStyle = getColor();
    context.stroke();

    context.beginPath();
    context.moveTo(188, 130);
    context.bezierCurveTo(140, 10, 388, 10, 388, 170);
    context.lineWidth = Math.floor((Math.random() * 9) + 1);;

    // line color
    context.strokeStyle = getColor();
    context.stroke();

    /*
    * END CANVAS
    */


    /*
    * CANVAS WITH ANIMATION
    */
    var canvasAnimate = document.getElementById('canvasAnimate');

    if (canvasAnimate.getContext) {
        var contextAnimate = canvasAnimate.getContext('2d');


        var requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                return setTimeout(callback, 1);
            };

        var render = function () {
            contextAnimate.clearRect(0, 0, canvas.width, canvas.height);
            contextAnimate.beginPath();
            contextAnimate.rect(square.x, square.y, square.width, square.height);
            contextAnimate.fillStyle = square.fill;
            contextAnimate.fill();
            requestAnimationFrame(render);
        };

        render();

        var animate = function (prop, val, duration) {
            var start = new Date().getTime();
            var end = start + duration;
            var current = square[prop];
            var distance = val - current;

            var step = function () {
                // Get our current progres
                var timestamp = new Date().getTime();
                var progress = Math.min((duration - (end - timestamp)) / duration, 1);

                // Update the square's property
                square[prop] = current + (distance * progress);

                // If the animation hasn't finished, repeat the step.
                if (progress < 1) requestAnimationFrame(step);
            };

            // Start the animation
            return step();
        };

        animate('x', 0, 1000);
    }

    /*
    * END CANVAS WITH ANIMATION
    */
    var holder = document.getElementById('drop_zone'),
    state = document.getElementById('status');

    if (typeof window.FileReader === 'undefined') {
        state.className = 'fail';
    } else {
        state.className = 'success';
        state.innerHTML = 'Drop your text file here';
    }

    holder.ondragover = function () {
        //this.className = 'hover';
        return false;
    };
    holder.ondragend = function () {
        //this.className = '';
        return false;
    };
    holder.ondrop = function (e) {
        //this.className = '';
        e.preventDefault();

        var file = e.dataTransfer.files[0],
            reader = new FileReader();
        reader.onload = function (event) {
            console.log(event.target);
            $textAreaLocalStorage.val(event.target.result);
            $textAreaIndexed.val(event.target.result);
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

    $buttonSocket.on('click', function () {
        if ("WebSocket" in window) {
            // Let us open a web socket
            var ws = new WebSocket("ws://echo.websocket.org");
            ws.onopen = function () {
                // Web Socket is connected, send data using send()
                ws.send($textAreaLocalStorage.val());
                alert("The text in the Loal Storage Textarea is sent.");
            };
            ws.onmessage = function (evt) {
                var received_msg = evt.data;
                alert("Message received: " + received_msg);
            };
            ws.onclose = function () {
                // websocket is closed.
                alert("Connection is closed...");
            };
        }
        else {
            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }

    });

    

})