import EventEmitter from 'eventEmmiter.class';
import EventListener from 'eventListener.class';

export default class EventGateway {
    constructor(EventEmitter, EventListener) {
        this.eventEmitter = new EventEmitter();
        this.eventListeners = new EventListener(this.eventEmitter);
    }

    emit(eventName, data) {
        this.eventEmitter.emit(eventName, data)
    }

    when(eventName, callback) {
        return this.eventListeners.when(eventName, callback);
    }
}
