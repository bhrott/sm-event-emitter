const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

let _listeners = [];

export default class EventEmitter {
	static on(eventName = '', listener = () =>{}) {
		let eventId = guid();

		_listeners.push({
			eventName,
			eventId,
			listener
		});

		return eventId;
	}

	static remove(eventId) {
		_listeners = _listeners.filter(event => event.eventId !== eventId);
	}

	static emit(eventName = '', payload = {}) {
		_listeners
			.filter(event => event.eventName === eventName)
			.forEach(event => {
				event.listener(payload);
			});
	}
}
