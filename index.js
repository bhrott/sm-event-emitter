function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

var _listeners = [];

module.exports = {
    /**
     * Register a listener to event emit
     * @param eventName {String} the name of the event.
     * @param listener {Function} the function that be callen when the eventName is emitted.
     * 
     * @returns {String} the id of the event. This is used to remove then if you want.
     */
    on: function(eventName, listener) {
        var eventId = guid();

        _listeners.push({
            eventName: eventName,
            eventId: eventId,
            listener: listener
        });

        return eventId;
    },

    /**
     * Remove an listener
     * @param eventId {String} the event id of the listener that must be removed.
     */
    remove: function(eventId) {
        _listeners = _listeners.filter(function(event) {
            return event.eventId !== eventId;
        });
    },

    /**
     * Emit a event o listeners.
     * @param eventName {String} the name of the event.
     * @param payload {Any} the object to pass to the listeners.
     */
    emit: function(eventName, payload) {
        _listeners
            .filter(function(event) {
                return event.eventName === eventName
            })
            .forEach(function(event) {
                event.listener(payload);
            });
    },

    /**
     * Get all created listeners.
     * @returns {Array<Object>} the listeners.
     */
    getListeners: function() {
        return _listeners;
    },

    /**
     * Remove all listeners.
     */
    clear: function() {
        _listeners = [];
    }
}