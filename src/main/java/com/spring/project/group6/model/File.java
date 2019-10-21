package com.spring.project.group6.model;

import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
// @JsonSerialize
public class File {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fileId;
	private Blob file;
	private String filepath;
	
	public File() {
		super();
	}
	
	
	public String getFilepath() {
		return filepath;
	}


	public void setFilepath(String filepath) {
		this.filepath = filepath;
	}


	public File(int fileId, Blob file, String filepath) {
		super();
		this.fileId = fileId;
		this.file = file;
		this.filepath = filepath;
	}

	public int getFileId() {
		return fileId;
	}

	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

	public Blob getFile() {
		return file;
	}

	public void setFile(Blob file) {
		this.file = file;
	}

	@Override
	public String toString() {
		return "File [fileId=" + fileId + ", file=" + file + "]";
	}
	
	
	
}
