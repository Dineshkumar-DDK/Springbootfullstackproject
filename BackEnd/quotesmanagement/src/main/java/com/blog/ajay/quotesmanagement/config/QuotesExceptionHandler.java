package com.blog.ajay.quotesmanagement.config;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class QuotesExceptionHandler {
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(ResourceNotFoundException.class)
	public @ResponseBody ExceptionResponse handleResourceException(ResourceNotFoundException ex) {
		ExceptionResponse errormsg = new ExceptionResponse();
		errormsg.setErrorMessage(ex.getMessage());
		return errormsg;
	}
}
