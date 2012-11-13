package se.cygni.texasholdem.communication.netty;

public final class JsonDelimiter {

    private JsonDelimiter() {
    }

    public static byte[] delimiter() {
        return new byte[]{'_', '-', '^', 'e', 'm', 'i', 'l', '^', '-', '_'};
    }
}
