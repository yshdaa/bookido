#ifndef APPOINTMENT_H
#define APPOINTMENT_H

#include <string>

class Appointment {
private:
    std::string patientName;
    std::string doctorName;
    std::string dateTime;

public:
    Appointment(const std::string& patient, const std::string& doctor, const std::string& date)
        : patientName(patient), doctorName(doctor), dateTime(date) {}

    void displayAppointment() {
        std::cout << "Appointment - Patient: " << patientName 
                  << ", Doctor: " << doctorName 
                  << ", Date & Time: " << dateTime << std::endl;
    }
};

#endif // APPOINTMENT_H