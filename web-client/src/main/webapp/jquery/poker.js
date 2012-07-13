var pokerClient = function (spec) {
    "use strict";

    var socket = $.atmosphere;

    var player = null;

    var validateJson = function (json) {
        if (!json.type) {
            console.log("JSON must contain type: \n"+jQuery.stringifyJSON(json));
            alert("JSON must contain type: \n"+jQuery.stringifyJSON(json));
            return false;
        }

        var isRequest = json.type.split('.').reverse()[1] === 'request';

        if (isRequest && !json.requestId) {
            console.log("JSON must contain requestId: \n"+jQuery.stringifyJSON(json));
            alert("JSON must contain requestId: \n"+jQuery.stringifyJSON(json));
            return false;
        }

        return true;
    };

    // Below is code that can be re-used -->

    // We are now ready to cut the request
    // TODO: parse document.location.toString() and replace poker.html with /poker
    var request = { url: spec.url,
        contentType: "application/json",
        logLevel: 'debug',
        headers:  { "connectionId" : ""+new Date().getTime() }, // skall vara unikt för varje spelare/connection
        transport: 'websocket',
        fallbackTransport: 'long-polling'};


    request.onOpen = function(response) {
        spec.onConnectionOpen && spec.onConnectionOpen(response);
    };

    // For demonstration of how you can customize the fallbackTransport based on the browser -->
    request.onTransportFailure = function(errorMsg, request) {
    	//alert('onTransportFailure: '+errorMsg);
        jQuery.atmosphere.info(errorMsg);
        if ( window.EventSource ) {
            request.fallbackTransport = "sse";
        }
        spec.onTransportFailure && spec.onTransportFailure(errorMsg, request);
    };

    request.onReconnect = function (request, response) {
        socket.info("Reconnecting");
    };

    request.onMessage = function (response) {
        var message = response.responseBody;
        try {
            var json = jQuery.parseJSON(message);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message);
            return;
        }
        try {
            if (validateJson(json) && player) {
                var clazz = json.type.split('.').pop();
                spec.onMessage && spec.onMessage(clazz);

                var actionRequest = (clazz === 'ActionRequest');
                if (actionRequest) {
                    if (!player.actionRequestHandler) {
                        console.log('Player handler for '+clazz+' missing.');
                    } else {
                        var actionResponse = player.actionRequestHandler(json);
                        if (actionResponse) {
                            spec.actionResponseCallback && spec.actionResponseCallback(actionResponse);
                            console.log('### handler response for '+clazz+' is: '+jQuery.stringifyJSON(actionResponse));
                            subSocket.push(jQuery.stringifyJSON(actionResponse));
                        }
                    }
                } else {
                    var handler = player.eventHandlers['on'+clazz];
                    if (!handler) {
                        console.log('Player handler for '+clazz+' missing.');
                    } else {
                        handler(json);
                    }
                }
            } else {
                console.log('Invalid JSON:'+jQuery.stringifyJSON(actionResponse)+' or no player.');
            }    
        } catch (e) {
            console.log('error: '+e.toString());
            return;
        }

    };

    request.onError = function(response) {
        spec.onError && spec.onError(response);

    };

    var subSocket = socket.subscribe(request);
    
    return {
        register: function(myPlayer) {
            player = myPlayer;
            var stringifyJSON = jQuery.stringifyJSON({
                "name":playerName,
                "type":"se.cygni.texasholdem.communication.message.request.RegisterForPlayRequest"});
            subSocket.push(stringifyJSON);
            }
    };
};

