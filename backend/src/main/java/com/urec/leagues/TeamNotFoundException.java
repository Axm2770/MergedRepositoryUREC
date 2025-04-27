package com.urec.leagues;

public class TeamNotFoundException extends RuntimeException {
    TeamNotFoundException(Long id)    {
        super("Could not find team: " + id);
    }
}
