def validate_email(email):
    if email.count("@") != 1:
        return False
    
    local_part, domain = email.split("@")
    
    if not local_part or not domain:
        return False
    
    if "." not in domain:
        return False
    
    if domain.startswith(".") or domain.endswith("."):
        return False
    
    return True

# Test it
print(validate_email("test@example.com"))
print(validate_email("user@domain"))
print(validate_email("userdomain.com"))
print(validate_email("user@.com"))
