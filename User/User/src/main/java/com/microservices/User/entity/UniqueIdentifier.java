package com.microservices.User.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class UniqueIdentifier {

	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private Long patientId;

	    private String identifier;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Long getPatientId() {
			return patientId;
		}

		public void setPatientId(Long patientId) {
			this.patientId = patientId;
		}

		public String getIdentifier() {
			return identifier;
		}

		public void setIdentifier(String identifier) {
			this.identifier = identifier;
		}

		@Override
		public String toString() {
			return "UniqueIdentifier [id=" + id + ", patientId=" + patientId + ", identifier=" + identifier + "]";
		}

		public UniqueIdentifier(Long id, Long patientId, String identifier) {
			super();
			this.id = id;
			this.patientId = patientId;
			this.identifier = identifier;
		}

		public UniqueIdentifier() {
			super();
			// TODO Auto-generated constructor stub
		}
	
	    
	    
	    
}
