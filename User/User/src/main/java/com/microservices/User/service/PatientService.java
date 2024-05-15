package com.microservices.User.service;

import com.microservices.User.entity.Patient;

public interface PatientService {

 Patient registerPatient(Patient patient);

 Patient getPatientDetails(Long patientId);

 Patient updatePatientDetails(Long patientId, Patient updatedPatient);
}
