export default  class EventListener {
    constructor(subject) {
        this.subject = subject;
    }

    when(eventName, callback) {
        return this.subject.addListener(eventName, (data) => {
            callback(data);
        });
    }
}
