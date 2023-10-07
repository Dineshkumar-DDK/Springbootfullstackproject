package com.blog.ajay.quotesmanagement.config;

public class ResourceNotFoundException extends RuntimeException{
	public ResourceNotFoundException(String msg) {
		super(msg);
	}
	public ResourceNotFoundException() {
		
	}
}
