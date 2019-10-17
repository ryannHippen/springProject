package com.spring.project.group6.model;

import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.hibernate.type.BlobType;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;


@Entity
// @JsonSerialize
public class File {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fileId;
	
	@Lob
    byte[] file;
	// private BlobType file;
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


	public File(int fileId, byte[] file, String filepath) {
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

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	@Override
	public String toString() {
		return "File [fileId=" + fileId + ", file=" + file + "]";
	}
	
	
	
}
