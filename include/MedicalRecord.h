#ifndef MEDICALRECORD_H
#define MEDICALRECORD_H

#include <string>

class MedicalRecord {
private:
    std::string patientName;
    std::string diagnosis;
    std::string treatment;

public:
    MedicalRecord(const std::string& patient, const std::string& diag, const std::string& treat)
        : patientName(patient), diagnosis(diag), treatment(treat) {}

    void displayRecord() {
        std::cout << "Patient: " << patientName << std::endl;
        std::cout << "Diagnosis: " << diagnosis << std::endl;
        std::cout << "Treatment: " << treatment << std::endl;
    }
};

#endif // MEDICALRECORD_H