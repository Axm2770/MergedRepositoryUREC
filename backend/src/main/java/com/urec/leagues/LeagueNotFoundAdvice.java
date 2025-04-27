package com.urec.leagues;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/*
* Handler for when LeagueController.one is called and does not find a league
* Used to render the HTTP 404 error
* */
@RestControllerAdvice
public class LeagueNotFoundAdvice {
    @ExceptionHandler(LeagueNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String leagueNotFoundHandler(LeagueNotFoundException ex)    {
        return  ex.getMessage();
    }
}
