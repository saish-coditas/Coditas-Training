number: int
# print(number) #will throw error (no hoisting)
number = 10
print(number)

#Variable values are mutable
teacher_name: str = "Aniruddha"
teacher_name = "Aarti"
print(teacher_name)

#Datatypes are for show
prime_number: int = 7
prime_number = "11"

#datatypes
integer: int = 10
decimal: float = 12.5
age: int = 22
price: float = 100.5
name: str = "Saish"

single_quotes = 'this is a string'
double_quotes = "this is also a string"
multi_line_string = """Hi!
this is a multiline
string"""

print(type(single_quotes))
print(type(double_quotes))
print(type(multi_line_string))

is_python: bool = False
is_javascript: bool = True
print(type(is_python))
print(type(is_javascript))

null_value = None #Never do this
print(type(null_value))

#Collection datatypes
#list (array), dictionary (object), tuples

#Lists
numbers: list[int] = [1,2,3,4,5]
strings: list[str] = ["a","b","c","d"]

from typing import Any
anything: list[Any] = [True, None, 1, 2.5, [1,2,3], "Saish"]
print(anything)

#Tuples
number: tuple[float, int, str] = (2.5,10,'Hello')
print(type(number))

#Dictionary
my_info: dict[str, int] = {
    "my_age": 22,
    "my_salary":11000,
    "months":6,
    "employee_id":5597
}

from typing import TypedDict
class Person(TypedDict):
    name:str
    age:int
    is_married:bool

person: dict[Person]={
    "name":"Saish",
    "age":22,
    "is_married":False
}

#Using Union
from typing import Union, Optional
college:dict[str,Union[str,int,bool]]={
    "name":"PCCOE",
    "established_year":1996,
    "is_private":True,
}