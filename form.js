// function validateForm(){
//     //alert("hari athule");
//     document.getElementById("euid").innerHTML = "The Submit button now works as it should.";
// }

// document.querySelector(".button").onsubmit = function display(){
//     alert("hari athule");
//     var a = document.querySelector(".euid").value;
//     console.log(a);
//     }

var namepattern=/^[a-zA-Z]+$/ //name
var phonepattern = /^\d{10}$/ //phone number
var emailpattern =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/
//var emailpattern2 =/^[a-zA-Z][a-zA-Z0-9_]*(\.[a-zA-Z0-9_]+)*$/
var numbers = /^[0-9]/; //userid

function validateForm(){
   
    /*-----------------
    USER ID
    ------------------*/
    var x=document.forms["nes"]["uid"]; 
    if (x.value=="")
   {
    
    document.getElementById('euid').innerHTML="Please enter a User ID.";
    document.getElementById('euid').style.display = "grid";

    //when user miss, outline color becomes red
    document.getElementById('uid').style.outlineColor = "rgb(194, 8, 8)";

    x.focus();
    return false;
   }
   else if(userid_validation(x,5,12)==false)
   {
    //Red colors wenawa
    document.getElementById('uid').style.outlineColor = "rgb(194, 8, 8)";
    document.getElementById('uid').style.color = "rgb(194, 8, 8)";

    x.focus();
    return false
   }

    //Apahu green colors wenawa when user enter a valid input
    document.getElementById('uid').style.outlineColor = "rgb(4 168 80)";
    document.getElementById('uid').style.color = "black";

    document.getElementById('euid').innerHTML='';
    document.getElementById('euid').style.display = "none";
    /*---------------------end userid-----------------------*/


    /*-----------------
    PASSWORD
    ------------------*/
    var x=document.forms["nes"]["password"]; 
    if (x.value=="")
   {
    //when user miss, outline color becomes red
    document.getElementById('password').style.outlineColor = "rgb(194, 8, 8)";

    document.getElementById('epaz').innerHTML="Please enter a Password.";
    document.getElementById('epaz').style.display = "grid";
    x.focus();
    return false;
   }
   else if(password_validation(x,5,12)==false)
   {
    //Red colors wenawa
    document.getElementById('password').style.outlineColor = "rgb(194, 8, 8)";
    document.getElementById('password').style.color = "rgb(194, 8, 8)";

    x.focus();
    return false
   }
    //Apahu green colors wenawa when user enter a valid input
    document.getElementById('password').style.outlineColor = "rgb(4 168 80)";
    document.getElementById('password').style.color = "black";

    document.getElementById('epaz').innerHTML='';
    document.getElementById('epaz').style.display = "none";
    /*---------------------end password-----------------------*/


    /*-----------------
    NAME
    ------------------*/
    var x=document.forms["nes"]["name1"];
    if (x.value=="")
    {
        //alert("test");

        //when user miss, outline color becomes red
        document.getElementById('name1').style.outlineColor = "rgb(194, 8, 8)";

        document.getElementById('ename').innerHTML="Please enter your name.";
        document.getElementById('ename').style.display = "grid";
        x.focus();
        return false;
    }
    else if ((!namepattern.test(x.value)))
    {

        //no need red font color because value eka " " (0) wena nisa
        document.getElementById('name1').style.outlineColor = "rgb(194, 8, 8)";

        document.getElementById('ename').innerHTML="Please enter only alphabets without space";
        document.getElementById('ename').style.display = "grid";

        x.value="";
        x.focus(); 
        return false;
    }
    //Apahu green colors wenawa when user enter a valid input
    document.getElementById('name1').style.outlineColor = "rgb(4 168 80)";
    document.getElementById('name1').style.color = "black";

    document.getElementById('ename').innerHTML='';
    document.getElementById('ename').style.display = "none";
    /*---------------------end name-----------------------*/

    
    /*-----------------
    country
    ------------------*/
    var country=document.nes.country.value;
    //console.log(country);
    if(!validcountry(country))
    {
        //when user miss, outline color becomes red
        document.getElementById('country').focus(); //not working :(
        document.getElementById('country').style.outlineColor = "rgb(194, 8, 8)";

        document.getElementById('ecountry').innerHTML="Please select a Country.";
        document.getElementById('ecountry').style.display = "grid";
        return false;
    }
    //Apahu green colors wenawa when user enter a valid input
    document.getElementById('country').style.outlineColor = "rgb(4 168 80)";

    document.getElementById('ecountry').innerHTML="";
    document.getElementById('ecountry').style.display = "none";
     /*---------------------end country-----------------------*/


    /*-----------------
    email
    ------------------*/
    var x=document.forms["nes"]["email"]; 
    if(x.value=="")
    {
        //when user miss, outline color becomes red
        document.getElementById('email').style.outlineColor = "rgb(194, 8, 8)";

        document.getElementById('eemail').innerHTML="Please enter your email.";
        document.getElementById('eemail').style.display = "grid";
        x.focus();
        return false;
    }
    else if(!emailpattern.test(x.value))
    {
        //Red colors wenawa
        document.getElementById('email').style.outlineColor = "rgb(194, 8, 8)";
        document.getElementById('email').style.color = "rgb(194, 8, 8)";

        document.getElementById('eemail').innerHTML="Please enter a valid emai address.";
        document.getElementById('eemail').style.display = "grid";
        x.value="";
        x.focus();
        return false;
    }
    //Apahu green colors wenawa when user enter a valid input
    document.getElementById('email').style.outlineColor = "rgb(4 168 80)";
    document.getElementById('email').style.color = "black";

    document.getElementById('eemail').innerHTML="";
    document.getElementById('eemail').style.display = "none";

    /*---------------------end email-----------------------*/


    /*-----------------
    Gender
    ------------------*/
    if((document.nes.sex[0].checked==false) && (document.nes.sex[1].checked==false))
    {
        //alert("radio button athule");
        document.nes.sex[0].focus();
        document.getElementById('esex').innerHTML='Please select a gender.';
        document.getElementById('esex').style.display = "grid";
        return false;
    }
    document.getElementById('esex').innerHTML='';
    document.getElementById('esex').style.display = "none";
    /*---------------------gender-----------------------*/


    /*-----------------
    Language
    ------------------*/
    if((document.nes.lan[0].checked==false) && (document.nes.lan[1].checked==false))
    {
        //alert("checkbox athule");
        document.nes.sex[0].focus();
        document.getElementById('elan').innerHTML='Please select Your Language.';
        document.getElementById('elan').style.display = "grid";
        return false;
    }
    if((document.nes.lan[0].checked==true) && (document.nes.lan[1].checked==true))
    {
        document.nes.sex[0].focus();
        document.getElementById('elan').innerHTML='Please select only one Language option.';
        document.getElementById('elan').style.display = "grid";
        return false;
    }
    document.getElementById('elan').innerHTML='';
    document.getElementById('elan').style.display = "none"
    /*---------------------Language-----------------------*/


    document.getElementById('ebtn').innerHTML='Your Informations were carefully recorded. Thanks for visiting';
    document.getElementById('ebtn').style.display = "grid";

    
    return false; // harinm meka true karanna one form eka post wennanm But testing nisa input eka reset wena eka nawaththanna false kale

    
}


/*------------------------
Functions
-----------------------*/

function validcountry(country){
    if(country == "0")
    {
        return false;
    }
    else{
        return true;
    }
}
function userid_validation(uid,mx,my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) 
    {
        document.getElementById('euid').innerHTML="Length should be between "+mx+" to "+my+"<br> you have entered "+ uid.value.length +" characters";
        document.getElementById('euid').style.display = "grid";
        return false; 
    }
    else {
        return true; 
    }
}   
function password_validation(uid,mx,my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) 
    {
        document.getElementById('epaz').innerHTML="Length should be between "+mx+" to "+my+"<br> you have entered "+ uid.value.length +" characters";
        document.getElementById('epaz').style.display = "grid";
        return false; 
    }
    else {
        return true; 
    }
}


