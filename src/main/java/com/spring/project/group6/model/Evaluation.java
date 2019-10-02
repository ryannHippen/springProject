package com.spring.project.group6.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Evaluation {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long evaluationId;
	private Long profileId;
	private String reviewer;
	private String customerFeedback;
	private int rating;
	private String technologyMap;
	private String interviewDate;
	
	public Evaluation(Long evaluationId, Long profileId, String reviewer, String customerFeedback, int rating,
			String technologyMap, String interviewDate) {
		super();
		this.evaluationId = evaluationId;
		this.profileId = profileId;
		this.reviewer = reviewer;
		this.customerFeedback = customerFeedback;
		this.rating = rating;
		this.technologyMap = technologyMap;
		this.interviewDate = interviewDate;
	}

	public Long getEvaluationId() {
		return evaluationId;
	}

	public void setEvaluationId(Long evaluationId) {
		this.evaluationId = evaluationId;
	}

	public Long getProfileId() {
		return profileId;
	}

	public void setProfileId(Long profileId) {
		this.profileId = profileId;
	}

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

	public String getTechnologyMap() {
		return technologyMap;
	}

	public void setTechnologyMap(String technologyMap) {
		this.technologyMap = technologyMap;
	}

	public String getInterviewDate() {
		return interviewDate;
	}

	public void setInterviewDate(String interviewDate) {
		this.interviewDate = interviewDate;
	}

	@Override
	public String toString() {
		return "Evaluation [evaluationId=" + evaluationId + ", profileId=" + profileId + ", reviewer=" + reviewer
				+ ", customerFeedback=" + customerFeedback + ", rating=" + rating + ", technologyMap=" + technologyMap
				+ ", interviewDate=" + interviewDate + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((customerFeedback == null) ? 0 : customerFeedback.hashCode());
		result = prime * result + ((evaluationId == null) ? 0 : evaluationId.hashCode());
		result = prime * result + ((interviewDate == null) ? 0 : interviewDate.hashCode());
		result = prime * result + ((profileId == null) ? 0 : profileId.hashCode());
		result = prime * result + rating;
		result = prime * result + ((reviewer == null) ? 0 : reviewer.hashCode());
		result = prime * result + ((technologyMap == null) ? 0 : technologyMap.hashCode());
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
		if (profileId == null) {
			if (other.profileId != null)
				return false;
		} else if (!profileId.equals(other.profileId))
			return false;
		if (rating != other.rating)
			return false;
		if (reviewer == null) {
			if (other.reviewer != null)
				return false;
		} else if (!reviewer.equals(other.reviewer))
			return false;
		if (technologyMap == null) {
			if (other.technologyMap != null)
				return false;
		} else if (!technologyMap.equals(other.technologyMap))
			return false;
		return true;
	}
	
	

}
