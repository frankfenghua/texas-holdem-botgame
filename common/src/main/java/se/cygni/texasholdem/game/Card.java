package se.cygni.texasholdem.game;

import java.util.EnumMap;
import java.util.Map;

import se.cygni.texasholdem.game.definitions.Rank;
import se.cygni.texasholdem.game.definitions.Suit;

public class Card {

    private final Rank rank;
    private final Suit suit;

    private Card(final Rank rank, final Suit suit) {

        this.rank = rank;
        this.suit = suit;
    }

    public Rank rank() {

        return rank;
    }

    public Suit suit() {

        return suit;
    }

    private static Map<Suit, Map<Rank, Card>> table =
            new EnumMap<Suit, Map<Rank, Card>>(Suit.class);

    static {
        for (final Suit suit : Suit.values()) {

            final Map<Rank, Card> suitTable = new EnumMap<Rank, Card>(
                    Rank.class);
            for (final Rank rank : Rank.values())
                suitTable.put(rank, new Card(rank, suit));

            table.put(suit, suitTable);
        }
    }

    public static Card valueOf(final Rank rank, final Suit suit) {

        return table.get(suit).get(rank);
    }

    @Override
    public int hashCode() {

        final int prime = 31;
        int result = 1;
        result = prime * result + ((rank == null) ? 0 : rank.hashCode());
        result = prime * result + ((suit == null) ? 0 : suit.hashCode());
        return result;
    }

    @Override
    public boolean equals(final Object obj) {

        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        final Card other = (Card) obj;
        if (rank != other.rank)
            return false;
        if (suit != other.suit)
            return false;
        return true;
    }

    @Override
    public String toString() {

        return rank.getName() + " of " + suit;
    }
}