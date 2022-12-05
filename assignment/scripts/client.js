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
$('.employeeData').empty();  //employeeData is what I labeled my table

//I want my employee array to be looped through and when that happens
//I'm asking the computer to append(add) the new input information
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

    //calculate monthly costs 
    //Monthly costs start at 0
    //As an employee is added...their salary 
    //needs to be added to the monthly costs number

    //I want my monthlyCost to be equal to an employee's salary diveded by12
    monthlyCost = employee[i].salary / 12;
    //My totalMonthlyCost is set as a global variable = 0
    //I am asking the computer to add the newly calculated
    //monthlyCost to the totalMonthlyCost variable
    totalMonthlyCost += monthlyCost;
}
    //I am asking jquerry to target my class .monthlyCost and turn
    //it into the number that was calculated above
    $('.monthlyCost').text(Number(`${totalMonthlyCost}`));

    
    //If the total monthly cost exceeds $20,000, add a 
    //red background color to the total monthly cost.
    maxMonthlyCost = 20000;
    if ( totalMonthlyCost > maxMonthlyCost ) {
        console.log('in tmc');
       $('.monthlyCost').css(`background-color`, `red`);
        //(`class = monthlyCost`);
        //css("background-color", "red")   
    }
}////////// END RENDER EMPLOYEE FUNCION /////////


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
//The new employee information is being sent to my employee array
employee.push(newEmployeeInfo);
renderEmployeeList();  //???Why do I need render here

//Set inputs back to empty 
//Once I hit the submit button the data that was just typed
//in will be gone and my placeholders will there
$('#firstNameInput').val('');
$('#lastNameInput').val('');
$('#idInput').val('');
$('#titleInput').val('');
$('#annualSalaryInput').val('');

}////////END ADD NEW EMPLOYEE FUNCTION////////