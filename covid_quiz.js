
var name = prompt("Quel est votre nom?")

var q1 ="Est-ce que vous tousser?"

var q2 ="Est-ce que vous avez le corps chaud?"

var q3 ="Est-ce que vous arrivez à sentir?"

var q4 ="Est-ce que vous avez le goût?"

var question_array = [q1, q2, q3, q4]

let r1, r2 , r3 , r4

let question_ans = [r1, r2, r3, r4]

  for(i=0; i<question_array.length; i++)
  {
   var ans = prompt(question_array[i]+ " Mettez 1 pour oui et 0 pour non.")
   question_ans[i] = ans
  }
  console.log(name+ "Votre réponse est " +question_ans)

  console.log("Calculons le Ration:")
  let sum = 0
  for(i=0; i<question_ans.length;i++)
  {
    sum += parseInt(question_ans[i])
  }
  console.log("La somme de vos réponses est:" +sum)
  console.log(name+ "Votre ratio est: ")
  let ratio = 0
  ratio = (sum/question_ans.length)*100
  console.log(ratio)
  if(ratio = 0)
  {
    console.log(name+ "Vous est pas en danger ")
  }else if(ratio < 50)
  {
    console.log(name+ "Confinez-vous pendant 3 jours")
  }else{
    console.log(name+ "Allez vite dans un centre de santé!!!")
  }