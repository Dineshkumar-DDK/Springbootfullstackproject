package com.blog.ajay.quotesmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.blog.ajay.quotesmanagement.config.ResourceNotFoundException;
import com.blog.ajay.quotesmanagement.dto.QuotesDto;
import com.blog.ajay.quotesmanagement.entity.Message;
import com.blog.ajay.quotesmanagement.entity.Quotes;
import com.blog.ajay.quotesmanagement.repository.QuotesRepository;
@Service
public class QuotesServiceImpl implements QuotesService {
@Autowired
private QuotesRepository quotesRepository;

//Insert the quotes
@Override
public QuotesDto insertQuotes(QuotesDto quotesDto) {
	// TODO Auto-generated method stub
	Quotes quotes = new Quotes() ;
	quotes.setTitle(quotesDto.getTitle());
	quotes.setQuote(quotesDto.getQuote());
	Quotes quotesResult=quotesRepository.save(quotes);
	QuotesDto quotesDtoResult= new QuotesDto();
	quotesDtoResult.setId(quotesResult.getId());
	quotesDtoResult.setTitle(quotesResult.getTitle());
	quotesDtoResult.setQuote(quotesResult.getQuote());
	
	return  quotesDtoResult;
}
//Get the quotes
@Override
public List<Quotes> getQuotes() {
	// TODO Auto-generated method stub
	return quotesRepository.findAll();
}
//Get Specific quotes
@Override
public ResponseEntity<QuotesDto> getQuotesById(long id) {
	Quotes quotes = quotesRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException());
	QuotesDto quotesDto = new QuotesDto();
	quotesDto.setId(quotes.getId());
	quotesDto.setTitle(quotes.getTitle());
	quotesDto.setQuote(quotes.getQuote());
	
	return ResponseEntity.ok(quotesDto);
}
//Delete Specific Quotes
@Override
public Message deleteQuoteById(long id) {
	// TODO Auto-generated method stub
	Optional<Quotes> found = quotesRepository.findById(id);
	Message msg = new Message();
	boolean flag=found.isEmpty();
	if(!flag) {
		quotesRepository.deleteById(id);
		msg.setMessage("successfully deleted");
	}
	else {
		throw new ResourceNotFoundException("Id not found");
	}
	return msg;
}
//Update Specific Quotes
	
	
}
