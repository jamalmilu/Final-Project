function compute()
{
    var principal = document.getElementById("principal").value;
 validateprincipal(principal);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";
}   
function validateprincipal(principal)
{   if(!principal || principal<1)
    {alert("Enter a positive number");
    document.getElementById("principal").focus();
}

}
function ratechange()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
    //p = document.getElementById("principal").value;
    
