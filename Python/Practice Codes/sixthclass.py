#Create a sample tuple in python
names = (("Saish",22),("Shubham",22),("Rahul",20))
names += (("Shreya",21),)
print(names)

names = (("Saish",22),("Shubham",22),("Rahul",20))
names = (("Shreya",21),)+names
print(names)

names = (("Saish",22),("Shubham",22),("Rahul",20))
names = names[:2]+(("Shreya",21),)+names[2:]
print(names)

names = (("Saish",22),("Shubham",22),("Shreya",21),("Rahul",20))
names = names[1:]
print(names)

names = (("Saish",22),("Shubham",22),("Shreya",21),("Rahul",20))
names = names[:3]
print(names)

names = (("Saish",22),("Shubham",22),("Shreya",21),("Rahul",20))
names = names[:2]+names[3:]
print(names)

