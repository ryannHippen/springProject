package com.spring.project.group6.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.project.group6.model.Profile;


public interface ProfileRepository extends JpaRepository<Profile, Long> {
	
	@Query("select p from Profile p where p.firstName like %:name%")
	List<Profile> getByQuery(String name);
 
}
