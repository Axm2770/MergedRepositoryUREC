package com.urec.leagues;

public class DivisionNotFoundException extends RuntimeException {
    DivisionNotFoundException(Long id)    {
        super("Could not find division: " + id);
    }
}
