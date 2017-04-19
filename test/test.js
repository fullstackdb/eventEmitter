'use strict';

var expect = require('chai').expect;
var event = require('../index');

describe('#tiny Event Emitter', function() {
    it('should have emit method', function() {
        expect(event.default().emit).to.exist;
    });

    it('should have when method', function() {
        expect(event.default().emit).to.exist;
    });

    it('should react to event', function(done) {
        var localEvent = event.default();
        localEvent.when('tryLocalEvent', function(data){
            done();
        })
        localEvent.emit('tryLocalEvent', {hasDone: true})
    });

    it('should send data via event', function(done) {
        var localEvent = event.default();
        localEvent.when('trySomeEvent', function(data) {
            if (data.hasDone) {
                done();
            }
        })
        localEvent.emit('trySomeEvent', {hasDone: true})
    });

    it('fetched data should be equel to sended', function(done) {
        var localEvent = event.default();
        var someData = {hasDone: true};
        localEvent.when('tryAnotherLocalEvent', function(data) {
            if (data === someData) {
                done();
            }
        })
        localEvent.emit('tryAnotherLocalEvent', someData)
    });
    it('should have emit method', function() {
        expect(event.default().emit).to.exist;
    });

    it('should have when method', function() {
        expect(event.default().emit).to.exist;
    });

    it('should react to event', function(done) {
        var localEvent = event.default();
        localEvent.when('tryLocalEvent', function(data){
            done();
        })
        localEvent.emit('tryLocalEvent', {hasDone: true})
    });

    it('should send data via event', function(done) {
        var localEvent = event.default();
        localEvent.when('trySomeEvent', function(data) {
            if (data.hasDone) {
                done();
            }
        })
        localEvent.emit('trySomeEvent', {hasDone: true})
    });

    it('fetched data should be equel to sended', function(done) {
        var localEvent = event.default();
        var someData = {hasDone: true};
        localEvent.when('tryAnotherLocalEvent', function(data) {
            if (data === someData) {
                done();
            }
        })
        localEvent.emit('tryAnotherLocalEvent', someData)
    });
});
