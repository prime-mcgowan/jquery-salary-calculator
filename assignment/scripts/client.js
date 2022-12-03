
let employee = []

/*  {first: '',
    last: '',
    id: [],
    title: '',
    salary: []}
*/


$(document).ready(onReady);


function onReady(){
    renderEmployeeList()
//Make a click handler for the #submitEmployeeInfoButton
$('#submitEmployeeInfoButton').on('click', addEmployeeInfo);
//Make a click handler for the .deleteEmployeeInfoButton
$('body').on('click', '.deleteEmployeeInfobutton', deleteEmployeeInfo)
}


//Function to delete an employee and their information 
function deleteEmployeeInfo() {
    $(this).parent().parent().remove;//I may need more parents???
}


////////// START RENDER EMPLOYEE FUNCION /////////

//Function to render the employee information
function renderEmployeeList () {
$('#employeeData').empty();
for(let i=0; i<employee.length; i++){
    $('#employeeData').append(`
<tr>
    <td>${employee[i].first}</td>
    <td>${employee[i].last}</td>
    <td>${employee[i].id}</td>
    <td>${employee[i].title}</td>
    <td>${employee[i].salary}</td>
</tr>
    `)
}
}////////// END RENDER EMPLOYEE FUNCION /////////


//Using the stored information, calculate monthly costs 
//and append this to the to DOM. 
//Monthly costs start at 0
//As an employee is added...their salary needs to be added to the monthly costs number

function calculateMonthlyCosts () {
    sum = 0;
    for(let i=0; i<employee.length; i++)
    sum += employee[i].salary;

    return sum;
}

//If the total monthly cost exceeds $20,000, add a 
//red background color to the total monthly cost.

let monthlyCost = 0;
let maxMonthlyCost = 200000;

function changeMonthlyCostsFontColor() { 
if (maxMonthlyCost > 20000) {
    $('.amount').append(`
        <h2> class = "totalMonthlyCostText"</h2>
    `)
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