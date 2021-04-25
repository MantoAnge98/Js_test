array = [1, 25, 50, 2, 3, 6, 7]
  let a = 0
  let max = 0 

for (i = 0; i < (array.length); i++)
{
  if (array[i] > array[i+1])
  {
    a = array[i]
    if(a> max){
       max = max
    }
    else
      max = a
  }   
  else
    a = array[i+1]
    if(a > max){
      max = a
    } 
    else
      max = max
  i++
}
console.log("Max is"+ max)