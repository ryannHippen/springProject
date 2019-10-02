package com.spring.project.group6.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.project.group6.model.File;


public interface FileRepository extends JpaRepository<File, Long> {
 
}
