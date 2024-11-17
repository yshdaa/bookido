#ifndef USER_H
#define USER_H

#include <string>

class User {
protected:
    std::string username;
    std::string password;

public:
    User(const std::string& user, const std::string& pass) : username(user), password(pass) {}
    
    // Getter for username
    std::string getUsername() const {
        return username;
    }

    virtual void displayInfo() = 0; // Pure virtual function for polymorphism
};

#endif // USER_H