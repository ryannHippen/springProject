package com.spring.project.group6.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Evaluation {
	
	@Id
	private Long evaluationId;	
	

	private String reviewer;
	private String customerFeedback;
	private int rating;
	private String technologies;
	private String interviewDate;
	
	private Long profileProfileId;
	
	/*
	 * @OneToOne private Profile profile;
	 */
	
	public Evaluation() {
		super();
	}
	
	public Evaluation(Long evaluationId, String reviewer, String customerFeedback, int rating,
			String technologies, String interviewDate, Long profileProfileId) {
		super();
		this.evaluationId = evaluationId;
		//this.profile = profile;
		this.reviewer = reviewer;
		this.customerFeedback = customerFeedback;
		this.rating = rating;
		this.technologies = technologies;
		this.interviewDate = interviewDate;
		this.profileProfileId = profileProfileId;
	}

	public Long getEvaluationId() {
		return evaluationId;
	}

	public void setEvaluationId(Long evaluationId) {
		this.evaluationId = evaluationId;
	}

	/*
	 * public Profile getProfile() { return profile; }
	 * 
	 * public void setProfile(Profile profile) { this.profile = profile; }
	 */
	public String getReviewer() {
		return reviewer;
	}

	public void setReviewer(String reviewer) {
		this.reviewer = reviewer;
	}

	public String getCustomerFeedback() {
		return customerFeedback;
	}

	public void setCustomerFeedback(String customerFeedback) {
		this.customerFeedback = customerFeedback;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getTechnologies() {
		return technologies;
	}

	public void setTechnologies(String technologies) {
		this.technologies = technologies;
	}

	public String getInterviewDate() {
		return interviewDate;
	}

	public void setInterviewDate(String interviewDate) {
		this.interviewDate = interviewDate;
	}
	


	public Long getProfileProfileId() {
		return profileProfileId;
	}

	public void setProfileProfileId(Long profileProfileId) {
		this.profileProfileId = profileProfileId;
	}

	/*
	 * public Profile getProfile() { return profile; }
	 * 
	 * public void setProfile(Profile profile) { this.profile = profile; }
	 */

	@Override
	public String toString() {
		return "Evaluation [evaluationId=" + evaluationId + ", reviewer=" + reviewer
				+ ", customerFeedback=" + customerFeedback + ", rating=" + rating + ", technologies=" + technologies
				+ ", interviewDate=" + interviewDate + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((customerFeedback == null) ? 0 : customerFeedback.hashCode());
		result = prime * result + ((evaluationId == null) ? 0 : evaluationId.hashCode());
		result = prime * result + ((interviewDate == null) ? 0 : interviewDate.hashCode());
		//result = prime * result + ((profile == null) ? 0 : profile.hashCode());
		result = prime * result + rating;
		result = prime * result + ((reviewer == null) ? 0 : reviewer.hashCode());
		result = prime * result + ((technologies == null) ? 0 : technologies.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Evaluation other = (Evaluation) obj;
		if (customerFeedback == null) {
			if (other.customerFeedback != null)
				return false;
		} else if (!customerFeedback.equals(other.customerFeedback))
			return false;
		if (evaluationId == null) {
			if (other.evaluationId != null)
				return false;
		} else if (!evaluationId.equals(other.evaluationId))
			return false;
		if (interviewDate == null) {
			if (other.interviewDate != null)
				return false;
		} else if (!interviewDate.equals(other.interviewDate))
			return false;
		/*
		 * if (profile == null) { if (other.profile != null) return false; } else if
		 * (!profile.equals(other.profile)) return false;
		 */
		if (rating != other.rating)
			return false;
		if (reviewer == null) {
			if (other.reviewer != null)
				return false;
		} else if (!reviewer.equals(other.reviewer))
			return false;
		if (technologies == null) {
			if (other.technologies != null)
				return false;
		} else if (!technologies.equals(other.technologies))
			return false;
		return true;
	}
	
	

}
