# my_list :list[dict]=[
#     {
#         "name":"shreya"
#     },
#     {
#         "name":"anirudh"
#     },
#     {
#         "name":"yash"
#     }
# ] 

# my_list.pop(1)
# my_list.insert(1,{"name":"A"})
# my_list.remove({"name":"yash"})
# print (my_list)



odd=[1,3,5]
even=[2,4,6]
a,*odd=odd
new_array=[*odd,*even]

print(new_array)

# import copy
# shubham=[["aa"],["bb"],'ss','saih']
# neha= copy.deepcopy(shubham)
# neha[0][0]="saiss"
# print (neha)
# print(shubham)
# # neha[0][0]= "cc"
# # print(neha)
# # 
# array=[1,2,3,4]
# # c,*rest =array
# # *rest,c =array
# # *rest,c,*a=array //
# print(c,rest)
