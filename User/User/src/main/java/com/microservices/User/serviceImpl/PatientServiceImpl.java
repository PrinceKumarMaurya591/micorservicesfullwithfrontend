package com.microservices.User.serviceImpl;

//PatientServiceImpl.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservices.User.entity.Patient;
import com.microservices.User.repo.PatientRepository;
import com.microservices.User.service.PatientService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientRepository patientRepository;

	@Override
	public Patient registerPatient(Patient patient) {
		// Additional logic for registration, validation, etc.
		return patientRepository.save(patient);
	}

	@Override
	public Patient getPatientDetails(Long patientId) {
		return patientRepository.findById(patientId)
				.orElseThrow(() -> new EntityNotFoundException("Patient not found with id: " + patientId));
	}

	@Override
	public Patient updatePatientDetails(Long patientId, Patient updatedPatient) {
		Patient existingPatient = getPatientDetails(patientId);
		// Update relevant details
		existingPatient.setName(updatedPatient.getName());
		existingPatient.setContactInformation(updatedPatient.getContactInformation());
		// Additional update logic
		return patientRepository.save(existingPatient);
	}
}
