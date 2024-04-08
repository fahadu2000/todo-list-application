#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let todolist = [];
let conditions = true;

console.log(chalk.bgWhiteBright.bold("\n \t Wellcom to CodeWithFahad - Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgGreenBright("Enter Your New Task:")
        }
    ]);
    todolist.push(addTask.task)
    console.log(`${addTask.task} Task added in todo list successfully`);

    let addMoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do You Want to Add More Task ?",
            default: "false"
        }
    ]);
    conditions = addMoretask.addmore 
}
console.log("Your Updated Todo-list:" , todolist);