# generic function - 2 inputs (name & password)
# to validate ur inputs
# name just alphabets
# password (min length, max length)


from typing import TypeVar
T = TypeVar('T') 
def parent_lib(input1: T, input2: T) -> T:
    def validate_name():
        for character in input1:
            if not(int(character)>=65 and int(character)<=90) or (int(character)>=97 and int(character)<=122):
                return False
        return True      
    def validate_pass():
        if len(input2)>10:
            return True
        return False
    
    name_validation = validate_name()
    password_validation = validate_pass()
    if name_validation and password_validation:
        return True
    return False

    #Add your functions here as required...

print(parent_lib("Saish","oiobfbasj%21"))






def validate(input, *pipeline):
    for validator in pipeline:
        if not validator(input):
            return False
        else:
            return True
    
validators = {
    "is_string": lambda input: type(input) == str,
    "is_integer": lambda input: type(input) == int,
}   


validate("Saish", validators["is_string"], validators["has_length"])
