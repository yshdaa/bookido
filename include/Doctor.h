#ifndef DOCTOR_H
#define DOCTOR_H

#include "User.h"

class Doctor : public User {
private:
    std::string specialization;

public:
    Doctor(const std::string& user, const std::string& pass, const std::string& spec)
        : User(user, pass), specialization(spec) {}

    void displayInfo() override {
        std::cout << "Doctor Username: " << username << ", Specialization: " << specialization << std::endl;
    }
};

#endif // DOCTOR_H