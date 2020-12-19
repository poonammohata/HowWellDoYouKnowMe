//importing readline package and chalk
var readlineSync=require('readline-sync');
const chalk=require('chalk');

//list of questions and answers
var list=[
  { "id":"a",
    "question":("What is her favourite color"),
    "option":["pink","red","white","blue"],
    "answer":"white"
  },
  { "id":"b",
    "question":("What do she use the most?"),
    "option":["instagram","youtube","twitter","watsapp"],
    "answer":"youtube"
  },
  { "id":"c",
    "question":("Which ice-cream do she like the most?"),
    "option":["chocolate","vanilla","strawberry","butterscotch"],
    "answer":"vanilla"
  },
  { "id":"d",
    "question":("Would she rather be too busy or bored?"),
    "option":["too busy","too bored"],
    "answer":"too busy"
  },
  { "id":"e",
    "question":("What weather do she prefer?"),
    "option":[("Stormy"),"Snowy","hot","cool"],
    "answer":"cool"
  },
  { "id":"f",
    "question":("If she had a time machine, i would?"),
    "option":["would prefer to meet my ancestors","would prefer to meet my grandchildren"],
    "answer":"would prefer to meet my ancestors"
  },
  { "id":"g",
    "question":("Would she rather live without internet or without cellphone"),
    "option":["without cellphone","without internet"],
    "answer":"without cellphone"
  }
];
//array store scores
var score=[
  {
    name:"poonam",
    score:5
  },
  {
    name:"prachi",
    score:8
  }
]

//function to check highestscore
function highScore(){
  var max=score[0].score;
  for(var i=1;i<score.length;i++){
    if(max<score[i].score){
      max=score[i].score;
    }
  }
  return max;
}
//function to check the person who scored highest score
function highScorePerson(){
  var max=score[0].score;
  var highperson=score[0].name;
  for(var i=1;i<score.length;i++){
    if(max<score[i].score){
      highperson=score[i].name;
    }
  }
  return highperson;
}
//variable count the score
var count=0;

var name=readlineSync.question(chalk.red("What is your name "));
console.log(chalk.red.bold.bgMagenta("\n  Welcome "+name+"  \n"));
console.log(chalk.red("Let's see how much you know Poonam\n"));

//function for qna
function qna(question,answer,option,id){
  console.log(chalk.blue((id+") "+question)));
  var j=0;
  for(var i=0;i<option.length;i++){
    console.log(chalk.blue((++j+". "+option[i])));
  }
  var userans=readlineSync.question(chalk.red("\nenter the correct option "));

  if(option[userans-1]===answer){
    count=count+1;
    console.log(chalk.green("\nYipppi!!, right answer"));
    console.log(chalk.green("you got 1 point"));
    console.log(chalk.rgb(123, 45, 67)("==============================\n"))
  }
  else{
    console.log(chalk.redBright("\nWrong answer"));
    console.log(chalk.redBright("No points"));
    console.log(chalk.rgb(123, 45, 67)("================================\n"))
  }
}


//looping question answer
for(var i=0;i<list.length;i++){
  qna(list[i].question,list[i].answer,list[i].option,list[i].id)
}

var highScore=highScore();
var highScoreName=highScorePerson();

console.log(chalk.red.bold.bgMagenta("  "+name+" your score is "+count+"  "));
console.log(chalk.blue("The highest score is "+highScore+" and it is scored by "+highScoreName))
console.log(chalk.red("if u have beaten the highest score,send the screenshot"));
