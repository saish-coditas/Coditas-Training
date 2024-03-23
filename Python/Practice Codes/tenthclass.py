#Decorators

# def outer_func(operation):
#     def inner_func():
#         return operation
#     return inner_func

# def operation():
#     print("This is a function")

# outer_func(operation)


def check_authorization(func):
    authorized = ["L&D Head", "Administrator", "Team Lead"]
    def inner_func(*args):
        print("Checking authorization...")
        if args[0] in authorized:
            result = func(*args)
            return result
        else:
            print("Not authorized")
    return inner_func

@check_authorization
def delete_user(user_type, user_name):
    print("User",user_name,"deleted")
    return True

delete_user("Administrator", "11642749")


# def calculate_time(func):
#     import time
#     def inner_func(*args,**kwargs):
#         start_time = time.time()
#         result = func(*args,**kwargs)
#         end_time = time.time()
#         print(f"Function executed in {end_time-start_time}")
#         return result
#     return inner_func


# @calculate_time
# def calculate_something(n):
#     for i in range(n):
#         pass
#     return n*n

# calculate_something(1000000)

# def decorator_func(cb):
#     def inner_func(*args, **kwargs):
#         result = cb(*args, **kwargs)
#         return result
#     return inner_func
    
# @decorator_func
# def print_name(name):
#     return name
# print_name("Saish")


def check_authorization(authorized):
    def inner_func(*args):
        print("Checking authorization...")
        if args[0] in authorized:
            result = func(*args)
            return result
        else:
            print("Not authorized")
    return inner_func

@check_authorization(["L&D Head", "Administrator", "Team Lead"])
def delete_user(user_type, user_name):
    print("User",user_name,"deleted")
    return True

delete_user("Administrator", "11642749")