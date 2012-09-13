// Snapshot of events from server for a (short) game round
var gameRoundEvents = [
    {"type":"se.cygni.texasholdem.communication.message.response.RegisterForPlayResponse", "requestId":"c9362fad-037c-4dfb-af79-489504bc91da", "sessionId":"2c62334b-6896-4d3c-ab44-29a5b9d83bf9"},
    {"players":[
        {"name":"Crazy_5", "chipCount":10000},
        {"name":"Crazy_6", "chipCount":10000},
        {"name":"Crazy_7", "chipCount":10000},
        {"name":"Raiser_8", "chipCount":10000},
        {"name":"Hellmuth_9", "chipCount":10000},
        {"name":"sdsdsd", "chipCount":10000}
    ], "smallBlindAmount":5, "bigBlindAmount":10, "dealer":{"name":"Crazy_5", "chipCount":10000}, "smallBlindPlayer":{"name":"Crazy_7", "chipCount":10000}, "bigBlindPlayer":{"name":"Crazy_6", "chipCount":10000}, "tableId":2, "type":"se.cygni.texasholdem.communication.message.event.PlayIsStartedEvent"},
    {"card":{"rank":"NINE", "suit":"HEARTS"}, "type":"se.cygni.texasholdem.communication.message.event.YouHaveBeenDealtACardEvent"},
    {"card":{"rank":"KING", "suit":"DIAMONDS"}, "type":"se.cygni.texasholdem.communication.message.event.YouHaveBeenDealtACardEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9995}, "smallBlind":5, "type":"se.cygni.texasholdem.communication.message.event.PlayerBetSmallBlindEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9990}, "bigBlind":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerBetBigBlindEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9990}, "callBet":5, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9990}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Hellmuth_9", "chipCount":10000}, "investmentInPot":0, "type":"se.cygni.texasholdem.communication.message.event.PlayerFoldedEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"f4be32e0-2694-4f59-bf68-eaf2fd8628ce", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CALL", "amount":10},
        {"actionType":"ALL_IN", "amount":10000},
        {"actionType":"RAISE", "amount":20}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9980}, "raiseBet":20, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9970}, "raiseBet":30, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9970}, "callBet":20, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9970}, "type":"se.cygni.texasholdem.communication.message.event.PlayerCheckedEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9970}, "callBet":20, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9970}, "callBet":20, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"3380e3cd-b33a-47f2-ab4a-766c2fcd7019", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CALL", "amount":10},
        {"actionType":"ALL_IN", "amount":9980},
        {"actionType":"RAISE", "amount":20}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9960}, "raiseBet":20, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9960}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9960}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9960}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9960}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"b7799d1c-b0e6-4930-8100-cd9a44955ebf", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CHECK", "amount":0},
        {"actionType":"ALL_IN", "amount":9960},
        {"actionType":"RAISE", "amount":10}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9950}, "raiseBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9950}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9950}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9950}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9950}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"bb3b958f-3ed4-4d9d-9b4e-9c1b103f15d4", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CHECK", "amount":0},
        {"actionType":"ALL_IN", "amount":9950},
        {"actionType":"RAISE", "amount":10}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9940}, "raiseBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9940}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9940}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9940}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9940}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"9ebedb4a-79ba-4e40-a508-9192fd7276b3", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CHECK", "amount":0},
        {"actionType":"ALL_IN", "amount":9940},
        {"actionType":"RAISE", "amount":10}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9930}, "raiseBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9930}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9930}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9930}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9930}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"a535029a-8e93-458b-8d42-2f04e9fa840b", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CHECK", "amount":0},
        {"actionType":"ALL_IN", "amount":9930},
        {"actionType":"RAISE", "amount":10}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9920}, "raiseBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9920}, "callBet":10, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":9910}, "raiseBet":20, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_7", "chipCount":9900}, "raiseBet":30, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Raiser_8", "chipCount":9900}, "callBet":30, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"c5fb0601-b73d-4211-b073-ba5fd79449a7", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CALL", "amount":20},
        {"actionType":"ALL_IN", "amount":9920},
        {"actionType":"RAISE", "amount":30}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":9890}, "raiseBet":30, "type":"se.cygni.texasholdem.communication.message.event.PlayerRaisedEvent"},
    {"player":{"name":"Crazy_5", "chipCount":9890}, "callBet":30, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_6", "chipCount":0}, "allInAmount":9910, "type":"se.cygni.texasholdem.communication.message.event.PlayerWentAllInEvent"},
    {"player":{"name":"Crazy_7", "chipCount":0}, "callBet":9900, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Raiser_8", "chipCount":0}, "callBet":9900, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"type":"se.cygni.texasholdem.communication.message.request.ActionRequest", "sessionId":null, "requestId":"1b255da0-2394-4225-bca6-af8e808c1f92", "possibleActions":[
        {"actionType":"FOLD", "amount":0},
        {"actionType":"CALL", "amount":9890},
        {"actionType":"ALL_IN", "amount":9890}
    ]},
    {"player":{"name":"sdsdsd", "chipCount":0}, "callBet":9890, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"player":{"name":"Crazy_5", "chipCount":0}, "callBet":9890, "type":"se.cygni.texasholdem.communication.message.event.PlayerCalledEvent"},
    {"card":{"rank":"ACE", "suit":"SPADES"}, "type":"se.cygni.texasholdem.communication.message.event.CommunityHasBeenDealtACardEvent"},
    {"card":{"rank":"TEN", "suit":"HEARTS"}, "type":"se.cygni.texasholdem.communication.message.event.CommunityHasBeenDealtACardEvent"},
    {"card":{"rank":"KING", "suit":"CLUBS"}, "type":"se.cygni.texasholdem.communication.message.event.CommunityHasBeenDealtACardEvent"},
    {"card":{"rank":"SIX", "suit":"SPADES"}, "type":"se.cygni.texasholdem.communication.message.event.CommunityHasBeenDealtACardEvent"},
    {"card":{"rank":"ACE", "suit":"DIAMONDS"}, "type":"se.cygni.texasholdem.communication.message.event.CommunityHasBeenDealtACardEvent"},
    {"wonAmount":0, "yourChipAmount":0, "type":"se.cygni.texasholdem.communication.message.event.YouWonAmountEvent"},
    {"playersShowDown":[
        {"player":{"name":"sdsdsd", "chipCount":0}, "hand":{"cards":[
            {"rank":"ACE", "suit":"DIAMONDS"},
            {"rank":"ACE", "suit":"SPADES"},
            {"rank":"KING", "suit":"CLUBS"},
            {"rank":"KING", "suit":"DIAMONDS"},
            {"rank":"TEN", "suit":"HEARTS"}
        ], "pokerHand":"TWO_PAIRS"}, "wonAmount":0},
        {"player":{"name":"Crazy_6", "chipCount":0}, "hand":{"cards":[
            {"rank":"ACE", "suit":"DIAMONDS"},
            {"rank":"ACE", "suit":"SPADES"},
            {"rank":"KING", "suit":"CLUBS"},
            {"rank":"TEN", "suit":"HEARTS"},
            {"rank":"EIGHT", "suit":"HEARTS"}
        ], "pokerHand":"ONE_PAIR"}, "wonAmount":0},
        {"player":{"name":"Crazy_5", "chipCount":0}, "hand":{"cards":[
            {"rank":"ACE", "suit":"DIAMONDS"},
            {"rank":"ACE", "suit":"SPADES"},
            {"rank":"KING", "suit":"CLUBS"},
            {"rank":"JACK", "suit":"HEARTS"},
            {"rank":"TEN", "suit":"HEARTS"}
        ], "pokerHand":"ONE_PAIR"}, "wonAmount":0},
        {"player":{"name":"Hellmuth_9", "chipCount":10000}, "hand":{"cards":[
            {"rank":"ACE", "suit":"DIAMONDS"},
            {"rank":"ACE", "suit":"SPADES"},
            {"rank":"TEN", "suit":"DIAMONDS"},
            {"rank":"TEN", "suit":"HEARTS"},
            {"rank":"KING", "suit":"CLUBS"}
        ], "pokerHand":"TWO_PAIRS"}, "wonAmount":0},
        {"player":{"name":"Crazy_7", "chipCount":50000}, "hand":{"cards":[
            {"rank":"ACE", "suit":"DIAMONDS"},
            {"rank":"ACE", "suit":"HEARTS"},
            {"rank":"ACE", "suit":"SPADES"},
            {"rank":"KING", "suit":"CLUBS"},
            {"rank":"KING", "suit":"HEARTS"}
        ], "pokerHand":"FULL_HOUSE"}, "wonAmount":50000},
        {"player":{"name":"Raiser_8", "chipCount":0}, "hand":{"cards":[
            {"rank":"ACE", "suit":"DIAMONDS"},
            {"rank":"KING", "suit":"CLUBS"},
            {"rank":"QUEEN", "suit":"SPADES"},
            {"rank":"JACK", "suit":"SPADES"},
            {"rank":"TEN", "suit":"HEARTS"}
        ], "pokerHand":"STRAIGHT"}, "wonAmount":0}
    ], "type":"se.cygni.texasholdem.communication.message.event.ShowDownEvent"},
    {"players":[
        {"name":"Crazy_5", "chipCount":0},
        {"name":"Crazy_6", "chipCount":0},
        {"name":"Crazy_7", "chipCount":50000},
        {"name":"Raiser_8", "chipCount":0},
        {"name":"Hellmuth_9", "chipCount":10000},
        {"name":"sdsdsd", "chipCount":0}
    ], "type":"se.cygni.texasholdem.communication.message.event.TableIsDoneEvent"}

];
