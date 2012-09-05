$(function () {
    "use strict";


    var header = $('#header');
    var content = $('#content');
    var input = $('#input');
    var status = $('#status');
    var messagelog = $('#messagelog');
    var state = $('#state');

    var enableMessagelog = false; // TODO: checkbox value instead

    var spec = {
        url:'http://localhost:8080/poker',

        actionResponseCallback:function (actionResponse) {
            addMessage(actionResponse.type, actionResponse.action.actionType, 'green', new Date());
        },
        onConnectionOpen:function (response) {
            content.html($('<p>', { text:'Poker connected using ' + response.transport }));
            input.removeAttr('disabled').focus();
            status.text('Spelarnamn:');
        },
        onTransportFailure:function (errorMsg, request) {
            header.html($('<h3>', { text:'Transport failure:' + errorMsg + ' Default transport is WebSocket, fallback is ' + request.fallbackTransport }));
        },
        onError:function (response) {
            content.html($('<p>', { text:'Sorry, but there\'s some problem with your '
                + 'socket or the server is down' }));
        },
        onMessage:function (clazz) {
            addMessage(clazz, "", 'blue', new Date());
        },
        onPlayerState:function (playerState) {
            state.text('amount: '+playerState.amount);
            var msg = playerState.newMessages.pop();
            if (msg) {
                content.html($('<p>', { text : msg }));
            }
        }
    };

    function addMessage(author, message, color, datetime) {
        if (enableMessagelog) {
            messagelog.append('<p><span style="color:' + color + '">' + author + '</span> @ ' +
                +datetime.getMinutes() + ':' + datetime.getSeconds()
                + ': ' + message + '</p>');
                
        }
    }


    var player = null;
    var client = pokerClient(spec); // från pokerClient.js

    $('#button').click(function () {
        // starta
        var name = input.val();
        var room = $('#room').val();
        player = pokerPlayer(name); // från pokerPlayer.js
        client.register(player, room);
    });


});
