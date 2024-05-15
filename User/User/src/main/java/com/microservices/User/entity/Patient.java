package com.microservices.User.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Patient {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private String name;
 private String contactInformation;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getContactInformation() {
	return contactInformation;
}
public void setContactInformation(String contactInformation) {
	this.contactInformation = contactInformation;
}
public Patient(Long id, String name, String contactInformation) {
	super();
	this.id = id;
	this.name = name;
	this.contactInformation = contactInformation;
}
@Override
public String toString() {
	return "Patient [id=" + id + ", name=" + name + ", contactInformation=" + contactInformation + "]";
}
public Patient() {
	super();
	// TODO Auto-generated constructor stub
}

 
 
}
