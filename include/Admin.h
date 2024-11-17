#ifndef ADMIN_H
#define ADMIN_H

#include "User.h"

class Admin : public User {
public:
    Admin(const std::string& user, const std::string& pass) : User(user, pass) {}

    void displayInfo() override {
        std::cout << "Admin Username: " << username << std::endl;
    }
};

#endif // ADMIN_H