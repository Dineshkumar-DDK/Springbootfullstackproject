package com.blog.ajay.quotesmanagement.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.blog.ajay.quotesmanagement.dto.QuotesDto;
import com.blog.ajay.quotesmanagement.entity.Message;
import com.blog.ajay.quotesmanagement.entity.Quotes;

public interface QuotesService {
	public QuotesDto insertQuotes(QuotesDto quotesDto);
	public List<Quotes> getQuotes();
	public ResponseEntity<QuotesDto> getQuotesById(long id);
	public Message deleteQuoteById(long id);
}
