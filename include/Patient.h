#ifndef PATIENT_H
#define PATIENT_H

#include "User.h"

class Patient : public User {
private:
    std::string medicalHistory;

public:
    Patient(const std::string& user, const std::string& pass)
        : User(user, pass), medicalHistory("") {}

    void addMedicalHistory(const std::string& history) {
        medicalHistory += history + "\n";
    }

    void displayInfo() override {
        std::cout << "Patient Username: " << username << std::endl;
        std::cout << "Medical History: " << medicalHistory << std::endl;
    }
};

#endif // PATIENT_H