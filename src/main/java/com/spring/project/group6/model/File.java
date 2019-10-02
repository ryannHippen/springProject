package com.spring.project.group6.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.type.BlobType;

@Entity
public class File {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fileId;
	private BlobType file;
	
	public File() {
		super();
	}
	
	
	public File(int fileId, BlobType file) {
		super();
		this.fileId = fileId;
		this.file = file;
	}

	public int getFileId() {
		return fileId;
	}

	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

	public BlobType getFile() {
		return file;
	}

	public void setFile(BlobType file) {
		this.file = file;
	}

	@Override
	public String toString() {
		return "File [fileId=" + fileId + ", file=" + file + "]";
	}
	
	
	
}
