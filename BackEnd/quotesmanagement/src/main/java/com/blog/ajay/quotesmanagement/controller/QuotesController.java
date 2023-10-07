package com.blog.ajay.quotesmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.blog.ajay.quotesmanagement.dto.QuotesDto;
import com.blog.ajay.quotesmanagement.entity.Message;
import com.blog.ajay.quotesmanagement.entity.Quotes;
import com.blog.ajay.quotesmanagement.service.QuotesService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin("*")
public class QuotesController {
@Autowired 
private QuotesService quotesService;

@PostMapping("/Quotes")
public QuotesDto insertQuotes(@RequestBody QuotesDto quotesDto) {
	return quotesService.insertQuotes(quotesDto);
}
@GetMapping("/Quotes")
public List<Quotes> getQuotes(){
	return quotesService.getQuotes();
}
@GetMapping("/Quotes/{id}")
public ResponseEntity<QuotesDto> getQuotesById(@Valid @PathVariable long id){
	return quotesService.getQuotesById(id);
	
}
@DeleteMapping("/Quotes/{id}")
public Message deleteQuotes(@Valid @PathVariable long id) {
	return quotesService.deleteQuoteById(id);
}
}
