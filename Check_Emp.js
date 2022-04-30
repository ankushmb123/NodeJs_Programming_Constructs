//UC1 - Check Employee is present or Absent

/*
const Is_ABSENT=0;
let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==Is_ABSENT)
{
    console.log("Empl is Absent");

}
else{
    console.log("Empl is Present");
}




//  UC2 - Calculate Daily Employee Wage based on part time or full time work

let empHRs=0;

let empCheck=Math.floor(MAth.random()*10%3);

switch(empCheck)
{
    case IS_PART_TIME:
          empHrs = PART_TIME_HOURS;
          break;
        
    case IS_FULL_TIME:
    empHrs = FULL_TIME_HOURS;
    break;
  default:
      empHrs=0;

}

let empWage= empHrs*WAGE_PER_HOUR;
console.log("EmpWage: "+empWage);




//  UC3 - Refactor the Code to write a function to get work hours

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;

function getWorkingHours(empCheck)
{
  switch(empCheck)
   {
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;
   }
}
let empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HOUR;
console.log("EmpWage:"+empWage);



//UC4 Calculate Wage For month

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

}
}
const NUM_OF_WORKING_DAYS=2;

let empHrs=0;

for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
}

let empWage=empHrs*WAGE_PER_HOUR;




//UC5  While_loop  Calculate Wages till a condition of total working hours of 160 or max ormax days of 20 is reached for a month.
 
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
switch(empCheck)
   {
    case IS_PART_TIME:
        return PART_TIME_HOURS;

    case IS_FULL_TIME:
          return FULL_TIME_HOURS;
    default:
        return 0;

   }
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS =20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() *10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 - Total Days: " + totalWorkingDays +
    "Total Hrs: " +totalEmpHrs +" Emp Wage: " +empWage);


*/

     
    // UC6 -Store the Daily Wage along with the Total Wage

const IS_PART_TIME = 1;      const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;   const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
let totalEmpHrs=0, empWorkingDays=0;
let dailyWageArray=new Array();         //UC6- store daily wage
let empWage=0, dailyWage=0;
//Calculate Wages till a condition
while(totalEmpHrs<=MAX_HRS_IN_MONTH && empWorkingDays<MAX_WORKING_DAYS)
{
    empWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;  //gives 0,1 or 2
    let workingHrs = GetEmpWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs +  workingHrs ;  //function call
    empWage = totalEmpHrs * WAGE_PER_HOUR;   //calculate from returned value
    //for wage per day
    dailyWage = workingHrs * WAGE_PER_HOUR;
    dailyWageArray.push(dailyWage);
}

console.log("\nTotal working Days : "+empWorkingDays+" | Total working hours : "+totalEmpHrs+" | Month's Total Employee Wage : "+empWage);
console.log("Daily wage : "+dailyWageArray)

function GetEmpWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;   //4
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;   //8
        default:
            return 0;
    }
}