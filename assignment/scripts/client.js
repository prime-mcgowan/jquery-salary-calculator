/*
To Do:


*/

let employeeInfo = []   


$(document).ready(onReady);


function onReady(){
    console.log('in onReady Function')
//Make a click handler for the #submitEmployeeInfoButton
//$('#submitEmployeeInfoButton').on('click', addEmployeeInfo);
//Make a click handler for the .deleteEmployeeInfoButton
//$('body').on('click', '.deleteEmployeeInfobutton', deleteEmployeeInfo)
}



////////// DELETING /////////

//Function to delete an employee and their information 

//Function to render the employee list



////////// ADDING /////////

//Function to render the employee information


//Function to add new employee and their information

function addEmployeeInfo() {
    
//Get input values
let newFirstName = $('firstNameInput').val();
let newLastName = $('lastNameInput').val();
let newId = $('idInput').val();
let newTitle = $('titleInput').val();
let newAnnualSalary = $('annualSalaryInput').val();

//Create new employeeInfo object
let newEmployeeInfo = {
    first:  (newFirstName),
    last:   (newLastName),
    id:     Number(newId),
    title:  (newTitle),
    salary: Number(newAnnualSalary)
}

//Add to array
employeeInfo.push(newEmployeeInfo);
//renderEmployeeList();

//Set inputs back to empty 
$('firstNameInput').val('');
$('lastNameInput').val('');
$('idInput').val('');
$('titleInput').val('');
$('annualSalaryInput').val('');

} //ends addEmployeeInfo function