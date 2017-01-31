# sm-event-emitter
A super small event-emitter for javascript =).

## Install
`npm install --save sm-event-emitter`

## Usage
```js
var EventEmitter = require('sm-event-emitter');

// when NAME_OF_YOUR_EVENT is emitted, the payload function will be called.
// store the eventId to remove when you do not need anymore =).
var eventId = EventEmitter.on('NAME_OF_MY_EVENT', function(payload) {
	console.log(payload);
});

// removing an event subscription
EventEmitter.remove(eventId);

// emitting an event
EventEmitter.emit('NAME_OF_MY_EVENT', { someProp: 123456 });

// clear all listeners
EventEmitter.clear();

// get active listeners
EventEmitter.getListeners();

```

