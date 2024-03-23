def is_prime(n, i=2):
    if n <= 2:
        return n == 2
    if n % i == 0:
        return False
    if i * i > n:
        return True
    return is_prime(n, i + 1)

def generate_prime(start,end):
    curr=start
    def inner_func():
        for i in range(curr,end):
            if(is_prime(i)):
                print(i)
                curr=i
            else:
                raise error
    return inner_func

prime = generate_prime(21,39)
print(prime())
print(prime())
print(prime())
print(prime())