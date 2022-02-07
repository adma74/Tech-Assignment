STORE N WITH ANY NUMBER
STORE i WITH 0

WHILE i LESS THAN N 
  STORE currentValue WITH i PLUS 1
  IF (currentValue MODULUS BY 3 EQUAL 0)
     DISPLAY "Fizz"
  ELSE IF (currentValue MODULUS BY 5 EQUAL 0)
     DISPLAY "Buzz"
  ELSE IF (currentValue MODULUS BY 3 EQUAL 0 and currentValue MODULUS BY 5 EQUAL 0)
     DISPLAY "FizzBuzz"
  ELSE
     DISPLAY currentValue
  End IF
  SET i WITH i PLUS 1
END WHILE