package com.microservices.User.serviceImpl;



import java.util.UUID;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservices.User.entity.UniqueIdentifier;
import com.microservices.User.repo.UniqueIdentifierRepository;
import com.microservices.User.service.UniqueIdentifierService;

@Service
public class UniqueIdentifierServiceImpl implements UniqueIdentifierService {

    @Autowired
    private UniqueIdentifierRepository uniqueIdentifierRepository;

    @Override
    public String generateUniqueIdentifier(Long patientId) {
        // Generate a unique identifier logic (e.g., using UUID)
        String uniqueIdentifier = UUID.randomUUID().toString();

        // Save the identifier for future reference
        UniqueIdentifier identifierEntity = new UniqueIdentifier();
        identifierEntity.setPatientId(patientId);
        identifierEntity.setIdentifier(uniqueIdentifier);
        
        try {
            uniqueIdentifierRepository.save(identifierEntity);
            return uniqueIdentifier;
        } catch (Exception e) {
            // Handle exception or log the error
            throw new RuntimeException("Error generating and saving unique identifier", e);
        }
    }
}
