def validate(input, *pipeline):
    for validator in pipeline:
        if not validator(input):
            print(f"Error at {validator}")
            return False
    return True

def check_type(dt):
    return lambda input1: type(input1) == dt

def check_length(length):
    return lambda input2: len((str(input2))) == length

validators = {
    "is_string": check_type(str),
    "is_integer": check_type(int),
    "has_length": check_length
    #More such functions...
}   

print(validate(25, validators["is_integer"], lambda x:x%2==0)) #False
print(validate("Saish", validators["is_string"], validators["has_length"](5))) #True
print(validate(1234567, validators["is_integer"], validators["has_length"](7))) #True