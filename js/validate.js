// JavaScript Document
function validate()

    {

    if ((document.feedback.txtname.value==2)||(document.feedback.txtdesignation.value=="")||(document.feedback.txtcompany.value=="")||(document.feedback.txtaddress.value=="")||(document.feedback.txtphone.value=="")||(document.feedback.txtemail.value=="")||(document.feedback.textarea.value==""))
	
    {

    alert ("You must fill in all of the required .fields!")

    return false

    }

    else

    return true

    }
 
