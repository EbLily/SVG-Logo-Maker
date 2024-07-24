inquirer = require(`inquirer`);
fs = require(`fs`);

const {Circle, Square,Triangle} = require("./lib/shapes");
path = require(`path`);


function start(){
inquirer.prompt([
    {
        type:"list",
        name:"shape",
        message:"What shape would you like?",
        choices:["Circle","Square","Triangle"]
    },
    {
        type:"input",
        name:"shapeColor",
        message:"What color would you like the shape to be?",
    },
    {
        type:"input",
        name:"text",
        message:"Type three characters for shape",
    },
    
    {
        type:"input",
        name:"textColor",
        message:"What color would you like your text?",
    }
]).then((response)=>{
 let shapeChoice;
 switch(response.shape){
 case "Circle":
    shapeChoice = new Circle();
    break;
case "Square":
    shapeChoice = new Square();
    break;
case "Triangle":
    shapeChoice = new Triangle();

 }

 shapeChoice.setColor(response.shapeColor)
 shapeChoice.setText(response.text)
 shapeChoice.setTextColor(response.textColor)
 if (response.text >3 ){
   console.log("must be less than three characters")
 }else{
    fs.writeFile("logo.svg",shapeChoice.render(),(err,result)=>{
        err?console.error(err):console.log("logo Generated")
    })
 }
})





}
start()

