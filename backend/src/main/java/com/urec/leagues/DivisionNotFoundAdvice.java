package com.urec.leagues;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DivisionNotFoundAdvice {
    @ExceptionHandler(DivisionNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String teamNotFoundHandler(DivisionNotFoundException ex)    {
        return  ex.getMessage();
    }
}
