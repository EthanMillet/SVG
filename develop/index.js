var inquirer = require('inquirer');
var fs = require('fs')
var triangle = require('./lib/triangle')
var circle = require('./lib/circle')
var square = require('./lib/square')

const questions = [ {name:'text',
        message: 'Give 3 letters to be placed in the logo.',
        default: null},
 
        {name: 'textColor',
        message: "What color is the text? (hex or keyword)",
        default: null},       
        
        {type: "list",
        name: 'shape',
        message: 'What shape will the logo be?',
        choices: ["triangle", "circle", "square"],
        default: null}, 

        {name: "color",
        message: 'What color is the shape? (hex or keyword)',
        default: null}]

inquirer
    .prompt(questions)
    .then((answers) => {
        var shape;
        if(answers.shape == "circle") {
            shape = new circle();
        }else if(answers.shape == "square") {
            shape = new square();
        }else {
            shape = new triangle();
        }
        fs.writeFile('logo.svg',
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${shape.render()} fill="${shape.setColor(answers.color)}"/>
      
        <${shape.text()} fill="${shape.setTextColor(answers.textColor)}">${answers.text}</text>
      
      </svg>`,
        function (err) {
        if (err) throw err;
        console.log('Generated logo.svg');
        })
    })


