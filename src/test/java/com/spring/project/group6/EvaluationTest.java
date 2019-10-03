package com.spring.project.group6;

import org.springframework.stereotype.Component;

import com.spring.project.group6.model.Evaluation;
import com.spring.project.group6.model.Profile;
import com.spring.project.group6.service.EvaluationService;
import com.spring.project.group6.service.ProfileService;

@Component
public class EvaluationTest {

	public static void main(String[] args) {
		
		Evaluation eval = new Evaluation();
		eval.setCustomerFeedback("customer feedback");
		eval.setInterviewDate("today");
		Profile prof = new Profile();
		
		
		prof.setAbout("about me");
		prof.setEmail("email");
		prof.setFirstName("First Name");
		prof.setLastName("Last Name");
		ProfileService ps = new ProfileService();
		System.out.println(prof.getAbout());
		ps.save(prof);
		
		eval.setProfile(prof);
		
		eval.setRating(1);
		eval.setReviewer("Reviewer");
		eval.setTechnologyMap("technology mapping");
		EvaluationService es = new EvaluationService();
		es.save(eval);

	}

}
