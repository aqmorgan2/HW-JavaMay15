const month1 = 23
console.log('month: ', month1)

      //assigned the month to be a constant number between 1 and 12
let arrMonth = [1,2,3,4,5,6,7,8,9,10,11,12]


console.log('\n   The following program creates a sentence based on a given month using the numbers \n', arrMonth)
if (month1 == 1 || month1 == 2 || month1 == 12){
      //here are the statements on WINTER months
  
  console.log('\n It is cold and the Snowman is happy because it is ')
    if (month1 == 12)  {console.log('December \n')}
    else if (month1 == 1) {console.log('January \n')}
    else if (month1 == 2) {console.log('February \n')}
  console.log('Its winter time. \n\n')
} else if (month1 == 3 || month1 == 4 || month1 == 5){
  console.log('It is SPRING time!  Get your seeds planted, weeds pulled, and a raincoat because it is ')
      //here are the statements on SPRING months
  
    if (month1 == 3)  {console.log('March \n')}
    else if (month1 == 4) {console.log('April \n')}
    else if (month1 == 5) {console.log('May \n')}

} else if (month1 == 6 || month1 == 7 || month1 == 8){
  console.log('It is SUMMER time!  Get your bathing suit, lawnmowers, lemonade, grill, and swim trunks because it is ')
      //here are the statements on SUMMER months
  
    if (month1 == 6 || month1 == 7 || month1 == 8)  {console.log('June \n')}
    else if (month1 == 7) {console.log('July \n')}
    else if (month1 == 8) {console.log('August \n')}
console.log('School is out!!  Vacation Time!!! Beach, sun... here we come. \n\n')
} else if (month1 == 9 || month1 == 10 || month1 == 11){
  console.log('It is FALL time!  Get your rake, jackets, wind-breakers because it is ')
  //here are the statements on FALL months
  
    if (month1 == 9) {console.log('September \n')}
    else if (month1 == 10) {console.log('October \n')}
    else if (month1 == 11) {console.log('November \n')}
console.log('School is in its first months/quarter. \n\n')
} else

     //This section is for those values that are invalid  
  if (month1 > 12 || month1 < 1) {console.log(month1, 'is not a valid entry')}

//... NOTE" Still need to develop code for inputs that are decimal values

