/*
To Do:


*/

let employee = []

    /*{first: '',
    last: '',
    id: [],
    title: '',
    salary: []
}
*/


$(document).ready(onReady);


function onReady(){
    renderEmployeeList()
//Make a click handler for the #submitEmployeeInfoButton
$('#submitEmployeeInfoButton').on('click', addEmployeeInfo);
//Make a click handler for the .deleteEmployeeInfoButton
//$('body').on('click', '.deleteEmployeeInfobutton', deleteEmployeeInfo)
}



////////// DELETING /////////

//Function to delete an employee and their information 

//Function to render the employee list after deletion



////////// ADDING /////////

//Function to render the employee information
function renderEmployeeList () {
$('#employeeData').empty();
for(let i=0; i<employee.length; i++){
    $('#employeeData').append(`

   <td> ${employee[i].first}</td>
    <td>${employee[i].last}</td>
    <td>${employee[i].id}</td>
    <td>${employee[i].title}</td>
    <td>${employee[i].salary}</td>

    `)
}
}

//Function to add new employee and their information
function addEmployeeInfo() {

//Get input values
let newFirst = $('#firstNameInput').val();
let newLast = $('#lastNameInput').val();
let newId = $('#idInput').val();
let newTitle = $('#titleInput').val();
let newAnnualSalary = $('#annualSalaryInput').val();

//Create new employeeInfo object
let newEmployeeInfo = {
    first:  (newFirst),
    last:   (newLast),
    id:     Number(newId),
    title:  (newTitle),
    salary: Number(newAnnualSalary)
}

//Add to array
employee.push(newEmployeeInfo);
renderEmployeeList();

//Set inputs back to empty 
$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#annualSalaryInput').val('');

}//ends addEmployeeInfo function