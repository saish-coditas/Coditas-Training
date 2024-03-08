message = "This is a message for"
name = "Saish"
concat_message = message+" "+name
print(concat_message)
new_message = f"{message} {name}"
print(new_message)

sentence = "Hi! My name is Saish"
print(sentence.__len__())
print(len(sentence))
print(str.__len__(sentence))

word="bottle"
  #   012345
  #  -654321

print(word[0:5:2]) #btl
print(word[-6::2]) #btl
print(word[0:-1:2]) #btl
print(word[-6:5:2]) #btl

print(word[3::1]) #tle
print(word[-3::1]) #tle
print(word[-3:-1:1]) #tl

print(word[-2::-2]) #ltb
print(word[-2:-7:-2]) #ltb
print(word[4:-7:-2]) #ltb
print(word[4::-2]) #ltb

list1 = [1,23,4]
list1.pop(1)
print(list1)