var event = Event.default();

event.when('try', function(data){
    console.log('try',data);
})

event.emit('try', {hasDone: true})