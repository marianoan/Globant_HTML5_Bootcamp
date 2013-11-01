var Observer = (function () {
    var subscribers = {
        any: [] // event type: subscribers
    };
    
    return {
        subscribe: function (fn, type) {
            console.log(type);
            console.log(subscribers);
            type = type || 'any';
            if (!subscribers[type]) {
                subscribers[type] = [];
            }
            subscribers[type].push(fn);
        },
        /*
        subscribe: function (event, callback) {
            if (typeof callback !== 'function') throw new Error('Callback must be a function');

            if (!cache[event]) {
                cache[event] = [];
            }

            cache[event].push(callback);
        },*/

        unsubscribe: function (fn, type) {
            this.visitSubscribers('unsubscribe', fn, type);
        },

        publish: function (publication, type) {
            this.visitSubscribers('publish', publication, type);
        },

        visitSubscribers: function (action, arg, type) {
            var pubtype = type || 'any',
                //subscribers = this.subscribers[pubtype],
                i,
                max = subscribers[pubtype].length;

            for (i = 0; i < max; i += 1) {
                if (action === 'publish') {
                    subscribers[pubtype][i](arg);
                } else {
                    if (subscribers[pubtype][i] === arg) {
                        subscribers[pubtype].splice(i, 1);
                    }
                }
            }
        }
    }
});