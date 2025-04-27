package com.urec.leagues;

public class LeagueNotFoundException extends RuntimeException {
    LeagueNotFoundException(Long id)    {
        super("Could not find league: " + id);
    }
}
