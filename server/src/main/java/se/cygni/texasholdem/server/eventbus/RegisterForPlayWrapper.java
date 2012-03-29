package se.cygni.texasholdem.server.eventbus;

import org.codemonkey.swiftsocketserver.ClientContext;

import se.cygni.texasholdem.communication.message.request.TexasRequest;

public class RegisterForPlayWrapper {

    private final ClientContext clientContext;
    private final TexasRequest request;

    public RegisterForPlayWrapper(final ClientContext clientContext,
            final TexasRequest request) {

        this.clientContext = clientContext;
        this.request = request;
    }

    public ClientContext getClientContext() {

        return clientContext;
    }

    public TexasRequest getRequest() {

        return request;
    }

}