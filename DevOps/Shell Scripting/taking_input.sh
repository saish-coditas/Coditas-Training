read name
read age
echo "Hello ${name}, your age is ${age}"
read -p "Enter Number 1: " number1
read -p "Enter Number 2: " number2
read -p "Enter Password: " -s pass
echo "Number1 is ${number1} and Number2 is ${number2} and password is ${pass}"
sum=number1+number2
diff=number1-number2
prod=number1*number2
divide=number1/number2
echo "Sum = ${sum}"
echo "Diff = ${diff}"
echo "Prod = ${prod}"
echo "Divide = ${divide}"