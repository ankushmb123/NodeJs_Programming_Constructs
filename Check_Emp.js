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
*/



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