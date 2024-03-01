weight = float(input("Enter Weight: "))
choice = input("(K)gs or (L)bs: ");
if choice == 'K' or choice == 'k':
    weight_in_kgs = weight*0.453592; # Converting to KGs
    print("Weight (in kgs): "+str(weight_in_kgs))
elif choice == 'L' or choice == 'l':
    weight_in_lbs = weight*2.20; # Converting to Lbs
    print("Weight (in lbs): "+str(weight_in_lbs))
else:
    print("Invalid Input")

print()