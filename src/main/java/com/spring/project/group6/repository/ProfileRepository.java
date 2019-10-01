package com.spring.project.group6.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.project.group6.model.Profile;


public interface ProfileRepository extends JpaRepository<Profile, Long> {
 
}
