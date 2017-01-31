var EventEmitter = require('../index');

test('event must be fired and received', function() {
    EventEmitter.on('test', function(payload) {
        EventEmitter.clear();
        expect(payload).toBe(1); 
    });

    EventEmitter.emit('test', 1);
});

test('after adding 2 events, getListener must return 2 objects', function() {
    EventEmitter.on('test', function(payload) {});
    EventEmitter.on('test', function(payload) {});

    var listeners = EventEmitter.getListeners();
    expect(listeners.length).toBe(2);

    EventEmitter.clear();
});

test('create and remove event', function() {
    var eventId = EventEmitter.on('test', function(payload) {});
    var afterRegisterListener = EventEmitter.getListeners().length;

    EventEmitter.remove(eventId);
    var afterRemoveListerner = EventEmitter.getListeners().length;

    expect(afterRegisterListener).toBe(1);
    expect(afterRemoveListerner).toBe(0);
});