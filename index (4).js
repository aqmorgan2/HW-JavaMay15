//*** EXTRA CREDIT*** "3 Random Numbers" 
//March 15 HW - Arusha Morgan

//Create three random variable numbers
//   If third number is between the first two, log 'between'
//   If the third number is outside the first, two log 'outside'
//   If the third number equals the first or second numbers log 'the third number equals the first/second number'

let numA = 1, numB = 1, numC = 1

console.log('num1 = ', numA, ', num2 =', numB, ', num3 =', numC, ' \n\n')

//The 1st & 2nd # are equal to each other & the 3rd is not
if (numA == numB && numC > numA)
{
  console.log(numC, ' is OUTSIDE of ', numA, ' and ', numB)
}

if (numA == numB && numC < numA)
{
  console.log(numC, ' is OUTSIDE of ', numA, ' and ', numB)
}

if (numA == numB && numB == numC)
{console.log(numA, numB, numC, ' are all the same value.')}

    //3rd # is equal to the 1st or 2nd #
if (numC == numA || numC == numB)
{ 
    if (numC == numA && numC > numB)
  {console.log('\n The 3rd number ', numC, ' is equal to ', numA)}
  
  if (numC == numB && numC > numA)
  {console.log('\n The 3rd number ', numC, ' is equal to ', numB)}
}

     //3rd # is between the 1st and 2nd #s
if (numA > numB || numB > numA) 
{
    if(numC < numA && numC > numB)
  {
    console.log('The 3rd number ', numC, ' is between ', numA, ' and ', numB)
  } else if(numC > numA && numC < numB)
          {
          console.log('The 3rd number ', numC, ' is between ', numA, ' and ', numB)
          } else console.log('The 3rd number ', numC, ' is outside of ', numA, ' and ', numB)
 
}



