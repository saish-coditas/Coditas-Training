def add(num1, num2):
    return num1+ num2

def sub(num1: int, num2: int) -> int:
    return num1-num2

print(add(5,9))
print(sub(5,9))

def multiply(num1: float, num2: float) -> float:
    return num1*num2

print(multiply(5.0,9.0))
add_fn = add
print(add_fn(10,4))
print(add)
print(add_fn)

#Lambdas
from typing import Callable
divide: Callable[[int,int],int] = lambda n1, n2 : n1/n2
"""param: n1 int, param: n2 int"""
print(divide(10,2))

from typing import TypeVar

#Generics
T = TypeVar('T')
def findLike(arr: list[T], number: T) -> T | None:
    for item in arr:
        if item==number:
            return item

found = findLike([1,2,3,4,5], 3)

#Loan Factory Question
def loan_factory(rate_of_interest):
    def calculator(p,n,rate_of_interest):
        return p*n*rate_of_interest/100
    
    return calculator

car_loan_calc = loan_factory(8)
home_loan_calc = loan_factory(10)
personal_loan_calc = loan_factory(12)

print(car_loan_calc(10000,5,10))
#car_loan_calc(10)

#Closures
X=10
def outer(num1):
    #global X
    X=27
    print("5",X)#5,27
    def inner(num2):
        nonlocal X
        X=50
        print("1",X) #50
        #print("2",X)
        return X+num1+num2
    print("3",X)#27
    return inner

outer_call = outer(10)
inner_call = outer_call(5)
print(inner_call) #65
print("4",X) #10