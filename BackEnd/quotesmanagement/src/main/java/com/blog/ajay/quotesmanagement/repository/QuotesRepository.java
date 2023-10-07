package com.blog.ajay.quotesmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blog.ajay.quotesmanagement.entity.Quotes;

@Repository
public interface QuotesRepository extends JpaRepository<Quotes, Long>{

}
