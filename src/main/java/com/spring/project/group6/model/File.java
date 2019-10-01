package com.spring.project.group6.model;

import org.hibernate.type.BlobType;

public class File {

	private int fileId;
	private BlobType file;
	
	
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
