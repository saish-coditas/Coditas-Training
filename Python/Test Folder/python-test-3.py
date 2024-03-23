components_dict = {
    "company": "coditassolutionsllp",
    "type": "Team Lead",
    "profile-id": "48572000002316017"
}

def delete_profile(component_dict):
    user_type = component_dict["type"]
    authorized = ["L&D Associate Director", "Administrator", "Team Lead"]
    if user_type in authorized:
        call_admin()
    else:
        call_user()
    # endpoint_dict = {
    #     "user": call_user,
    #     "admin": call_admin,
    # }
    # endpoint_dict[user_type]()

def call_user():
    print("Cannot delete")

def call_admin():
    print("Can delete")

delete_profile(components_dict)

random_list = [[1,2,3],[4,5],[6]]
all_numbers = [item for item in random_list]
print(all_numbers)

random_list = [[1,2,3],[4,5],[6,7,8,9]]
output = [[2],[4],[6,8]]
# all_numbers = 
even_numbers = [[value for value in array if value%2==0] for array in random_list]
print(even_numbers)

# prime_numbers = [value for value in range(30,41) if value% range(2,value)]
# print(prime_numbers)

people = [
    {"name": "Alice", "friend_list": ["Bob", "Charlie"], "age": 30, "location": {"city": "New York", "country": "USA"}},
    {"name": "Bob", "friend_list": ["Alice", "David"], "age": 25, "location": {"city": "London", "country": "UK"}},
    {"name": "Charlie", "friend_list": ["Alice", "Emily"], "age": 28, "location": {"city": "Paris", "country": "France"}},
    {"name": "David", "friend_list": ["Bob", "Emily"], "age": 32, "location": {"city": "Berlin", "country": "Germany"}},
    {"name": "Emily", "friend_list": ["Charlie", "David"], "age": 27, "location": {"city": "Madrid", "country": "Spain"}},
]

names = [person for person in people if "Alice" in person["friend_list"] and person["location"]["city"]=="Paris"]
print(names)