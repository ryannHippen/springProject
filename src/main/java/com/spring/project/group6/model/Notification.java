package com.spring.project.group6.model;

public class Notification {
	//test
	private String messageBody;
	private String messageHeader;
	public Notification(String messageBody, String messageHeader) {
		super();
		this.messageBody = messageBody;
		this.messageHeader = messageHeader;
	}
	public String getMessageBody() {
		return messageBody;
	}
	public void setMessageBody(String messageBody) {
		this.messageBody = messageBody;
	}
	public String getMessageHeader() {
		return messageHeader;
	}
	public void setMessageHeader(String messageHeader) {
		this.messageHeader = messageHeader;
	}
	
	@Override
	public String toString() {
		return "Notification [messageBody=" + messageBody + ", messageHeader=" + messageHeader + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((messageBody == null) ? 0 : messageBody.hashCode());
		result = prime * result + ((messageHeader == null) ? 0 : messageHeader.hashCode());
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
		Notification other = (Notification) obj;
		if (messageBody == null) {
			if (other.messageBody != null)
				return false;
		} else if (!messageBody.equals(other.messageBody))
			return false;
		if (messageHeader == null) {
			if (other.messageHeader != null)
				return false;
		} else if (!messageHeader.equals(other.messageHeader))
			return false;
		return true;
	}
	
	
	

}
