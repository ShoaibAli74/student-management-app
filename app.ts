#! /usr/bin/env node
import inquirer from "inquirer"

const randomnumber: number = Math.floor(10000+Math.random() *90000)

let myBalance : number =0;

let answer= await inquirer.prompt(
[
    {
        name: "students",
        type:  "input",
        message:"Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        }
    },
    {
        name:"courses",
        type:"list",
        message:"select the course to enrolled",
        choices:["html", "javascript", "python", "Typescript", "c++"]
    }
]
);

const coursefee: {[key: string]:number}= {
    "html":1500,
    "javascript": 2500,
    "python": 3000,
    "Typescript":2000,
    "c++": 1600,
}

console.log(`\ncoursefee : ${coursefee[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
            name:"payment",
            type:"list",
            message:"select payment method",
            choices:["easypaisa", "jazzcah", "ubank"]

        },
        {
            name:"amount",
            type:"input",
            message:"transfer money:",
            validate : function (value){
              if(value.trim() !== "") {
                return true
              }
              {
                return "please enter a non-empty value.";
              }
            },
        }
    ]
);

console.log(`\n You select payment method ${paymentType.payment}\n`)

const coursefees =coursefee[answer.courses];
const paymentamount = parseFloat(paymentType.amount)

if(coursefees === paymentamount) {
    console.log(`congratulations you have successfully enrolled in ${answer.courses}.\n`);
} else {
    console.log("invalid amount due to course\n")
};
