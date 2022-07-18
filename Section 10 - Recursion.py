# #Recursion - Intro
# ball = False
# def open_gift_box():
#     if ball:
#         return ball
#     open_gift_box()

#Recursion - Call Stack
def funcThree(): 
    print ('Three')

def funcTwo():
    funcThree()   
    print ('Two')

def funcOne():
    funcTwo()   
    print ('One')

funcOne()

#Recursion - Factorial
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

print(factorial(4))
