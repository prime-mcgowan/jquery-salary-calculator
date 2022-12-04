console.log('i am on line 1 of js');
let employee = [];
let totalMonthlyCost = 0;


/*  {first: '',
    last: '',
    id: [],
    title: '',
    salary: []}
*/


$(document).ready(onReady);


function onReady(){
    console.log('i am in onReady');
   
//Make a click handler for the #submitEmployeeInfoButton
$('#submitEmployeeInfoButton').on('click', addEmployeeInfo);
//Make a click handler for the .deleteEmployeeInfoButton
$('body').on('click', '.deleteEmployeeInfoButton', deleteEmployeeInfo)
}


//Function to delete an employee and their information 
function deleteEmployeeInfo() {
    console.log('i am in deleteEmployeeInfo');
    $(this).parent().parent().remove();
   
}



////////// START RENDER EMPLOYEE FUNCION /////////

//Function to render the employee information
function renderEmployeeList () {
    console.log('i am in renderEmployeeList');
totalMonthlyCost = 0;
$('.employeeData').empty();
for(let i=0; i<employee.length; i++){
    $('.employeeData').append(`
    <tr>
        <td>${employee[i].first}</td>
        <td>${employee[i].last}</td>
        <td>${employee[i].id}</td>
        <td>${employee[i].title}</td>
        <td>${employee[i].salary}</td>
        <td><button class="deleteEmployeeInfoButton">Delete</button></td>
    </tr>
    `)
    monthlyCost = employee[i].salary / 12;
    totalMonthlyCost += monthlyCost;
}

    $('.monthlyCost').text(Number(`${totalMonthlyCost}`));
}////////// END RENDER EMPLOYEE FUNCION /////////


//If the total monthly cost exceeds $20,000, add a 
//red background color to the total monthly cost.

maxMonthlyCost = 20000;
function changeMonthlyCostsFontColor() { 
if ( totalMonthlyCost > maxMonthlyCost ) {
    $('.monthlyCost').append(``)
    //css("background-color", "red")
}
}


////////START ADD NEW EMPLOYEE FUNCTION////////

//Function to add new employee and their information
function addEmployeeInfo() {

//Get input values
let newFirst = $('#firstNameInput').val();
let newLast = $('#lastNameInput').val();
let newId = $('#idInput').val();
let newTitle = $('#titleInput').val();
let newAnnualSalary = $('#annualSalaryInput').val();

//calculate monthly costs 
//Monthly costs start at 0
//As an employee is added...their salary 
//needs to be added to the monthly costs number

//function to calculate annual


//for of loop 


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

}////////END ADD NEW EMPLOYEE FUNCTION////////