const displayMessage = isLogin?(age>18?(!isSuspended?"Login":"Account is suspended"):"Minor"):"Failed login";
switch(day)
{
    case 'Monday':
        console.log("Basics of JS");
        break;
    case 'Tuesday':
        console.log("Types of Operators");
        break;
    case 'Wednesday':
        console.log("Assigment Operators");
        break;
    case 'Thursday':
        console.log("Conditional Statements");
        break;
    case 'Friday':
        console.log("Functions");
        break;
    default:
        console.log("Holiday");
        break;
}

const age = 89;
const minimunAgeAllowedInSectionOne = 18;
const minimunAgeAllowedInSectionTwo = 24;

if(age >= minimunAgeAllowedInSectionTwo)
{
    console.log("Allowed in section 1");
}
else if(age >= minimunAgeAllowedInSectionOne)
{
    console.log("Allowed in section 2");
}
else
{
    console.log("Not allowed in both");
}

//Above if-elseif-else using ternary
const allowance = age>=minimunAgeAllowedInSectionTwo?"Allowed in section 2":age>=minimunAgeAllowedInSectionOne?"Allowed in section 1":"Not allowed in both";
//const allowance2 = age>=minimunAgeAllowedInSectionOne?"a"; //Only if condition in ternary operator won't be executed