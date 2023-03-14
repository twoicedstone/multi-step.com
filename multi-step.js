const displayWindow = document.querySelector(".display-window");
const personalInfo = document.querySelector(".step-one");
const selectPlan = document.querySelector(".step-two");
const pickAddons = document.querySelector(".step-three");
const finishingUp = document.querySelector(".step-four");
const thankYou = document.querySelector(".step-five");

displayWindow.innerHTML = personalInfo.innerHTML;
document.querySelector(".number1").focus();
document.querySelector(".number1").style.outline = "none";

function nextPage1() {
	displayWindow.innerHTML = personalInfo.innerHTML;
	document.querySelector(".step-change1").style.display ="flex";
	document.querySelector(".step-change2").style.display ="none";
	document.querySelector(".step-change3").style.display ="none";
	document.querySelector(".step-change4").style.display ="none";
	document.querySelector(".number1").focus();
	window.location.reload();
}

function nextPage2() {
	displayWindow.innerHTML = selectPlan.innerHTML;
	document.querySelector(".step-change2").style.display ="flex";
	document.querySelector(".step-change1").style.display ="none";
	document.querySelector(".step-change3").style.display ="none";
	document.querySelector(".step-change4").style.display ="none";
	document.querySelector(".number2").focus();
}

function nextPage3() {
	displayWindow.innerHTML = pickAddons.innerHTML;
	document.querySelector(".step-change3").style.display ="flex";
	document.querySelector(".step-change2").style.display ="none";
	document.querySelector(".step-change1").style.display ="none";
	document.querySelector(".step-change4").style.display ="none";
	document.querySelector(".number3").focus();
	
}

function nextPage4() {
	displayWindow.innerHTML = finishingUp.innerHTML;
	document.querySelector(".step-change4").style.display ="flex";
	document.querySelector(".step-change3").style.display ="none";
	document.querySelector(".step-change1").style.display ="none";
	document.querySelector(".step-change2").style.display ="none";
	document.querySelector(".number4").focus();
	
}

function confirmPage() {
	displayWindow.innerHTML = thankYou.innerHTML;
	document.getElementById("bottom").style.display = "none";
	
}

/*   Go Back  */

function previousPage1() {
	displayWindow.innerHTML = personalInfo.innerHTML;
	document.querySelector(".step-change1").style.display ="flex";
	document.querySelector(".step-change2").style.display ="none";
	document.querySelector(".number1").focus();
	window.location.reload();
	}

function previousPage2() {
	displayWindow.innerHTML = selectPlan.innerHTML;
	document.querySelector(".step-change2").style.display ="flex";
	document.querySelector(".step-change3").style.display ="none";
	document.querySelector(".number2").focus();
}

function previousPage3() {
	displayWindow.innerHTML = pickAddons.innerHTML;
	document.querySelector(".step-change3").style.display ="flex";
	document.querySelector(".step-change4").style.display ="none";
	document.querySelector(".number3").focus();
}

/*  Period Switch  */

function periodswitch() {
	document.getElementById("monthly").style.display = "none";
	document.getElementById("yearly").style.display = "flex";
	document.querySelector(".yearly-plan").style.display = "flex";
	document.querySelector(".monthly-plan").style.display = "none";
	document.querySelector(".pick-yearly").style.display = "block";
	document.querySelector(".pick-monthly").style.display = "none";
	document.querySelector(".finish-yearly").style.display = "block";
	document.querySelector(".finish-monthly").style.display = "none";
}

function periodswitch1() {
	document.getElementById("monthly").style.display = "flex";
	document.getElementById("yearly").style.display = "none";
	document.querySelector(".yearly-plan").style.display = "none";
	document.querySelector(".monthly-plan").style.display = "flex";
	document.querySelector(".pick-yearly").style.display = "none";
	document.querySelector(".pick-monthly").style.display = "block";
	document.querySelector(".finish-yearly").style.display = "none";
	document.querySelector(".finish-monthly").style.display = "block";
}

/*   Pick add-ons   */

function selecter1() {
	document.querySelector(".select1").style.backgroundColor = "hsl(243, 100%, 62%)";
	document.querySelector(".add-ons1").style.backgroundColor = "hsl(217, 100%, 97%)";
	document.querySelector(".add-ons1").style.borderColor = "hsl(243, 100%, 62%)";
}

function selecter2() {
	document.querySelector(".select2").style.backgroundColor = "hsl(243, 100%, 62%)";
	document.querySelector(".add-ons2").style.backgroundColor = "hsl(217, 100%, 97%)";
	document.querySelector(".add-ons2").style.borderColor = "hsl(243, 100%, 62%)";
}

function selecter3() {
	document.querySelector(".select3").style.backgroundColor = "hsl(243, 100%, 62%)";
	document.querySelector(".add-ons3").style.backgroundColor = "hsl(217, 100%, 97%)";
	document.querySelector(".add-ons3").style.borderColor = "hsl(243, 100%, 62%)";
}

function selecter4() {
	document.querySelector(".select4").style.backgroundColor = "hsl(243, 100%, 62%)";
	document.querySelector(".add-onsA").style.backgroundColor = "hsl(217, 100%, 97%)";
	document.querySelector(".add-onsA").style.borderColor = "hsl(243, 100%, 62%)";
}

function selecter5() {
	document.querySelector(".select5").style.backgroundColor = "hsl(243, 100%, 62%)";
	document.querySelector(".add-onsB").style.backgroundColor = "hsl(217, 100%, 97%)";
	document.querySelector(".add-onsB").style.borderColor = "hsl(243, 100%, 62%)";
}

function selecter6() {
	document.querySelector(".select6").style.backgroundColor = "hsl(243, 100%, 62%)";
	document.querySelector(".add-onsC").style.backgroundColor = "hsl(217, 100%, 97%)";
	document.querySelector(".add-onsC").style.borderColor = "hsl(243, 100%, 62%)";
}




/* ============= FORM VALIDATION STARTS ============= */

var errorName = document.getElementById("error-name");
var  errorPhone = document.getElementById("error-phone");
var  errorEmail = document.getElementById("error-email");

function verifyName() {

	var userName = document.getElementById("username").value;

	if (userName == "") {
		errorName.innerHTML = "This field is required";
		document.getElementById("username").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const nRegex = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

	if (nRegex.test(userName) === false) {
		errorName.innerHTML = "Enter full name";
		document.getElementById("username").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	errorName.innerHTML = "";
	document.getElementById("username").style.border = "1px solid green";
	return true;

}


function verifyPhone() {

	var userNumber = document.getElementById("userphone").value;

	if (userNumber == "") {
		errorPhone.innerHTML = "This field is required";
		document.getElementById("userphone").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const pRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

	if (pRegex.test(userNumber) === false) {
		errorPhone.innerHTML = "Invalid";
		document.getElementById("userphone").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	errorPhone.innerHTML = "";
	document.getElementById("userphone").style.border = "1px solid green";
	return true;

}


function verifyEmail() {

	var userEmail = document.getElementById("useremail").value;

	if (userEmail == "") {
		errorEmail.innerHTML = "This field is required";
		document.getElementById("useremail").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	} 

	const eRegex = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

	if (eRegex.test(userEmail) === false) {
		errorEmail.innerHTML = "Invalid";
		document.getElementById("useremail").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	else {
		errorEmail.innerHTML = "";
		document.getElementById("useremail").style.border = "1px solid green";
		return true;
	}

}

function nextPage2() {

	if ((!verifyName() || !verifyEmail() || !verifyPhone()) === true) {
		return false;
	}

	else {
		errorName.innerHTML = "";
		errorPhone.innerHTML = "";
		errorEmail.innerHTML = "";
		displayWindow.innerHTML = selectPlan.innerHTML;
		document.querySelector(".step-change2").style.display ="flex";
		document.querySelector(".step-change1").style.display ="none";
		document.querySelector(".step-change3").style.display ="none";
		document.querySelector(".step-change4").style.display ="none";
		document.querySelector(".number2").focus();
		return true;
	}
}

	/* ============= FORM VALIDATION ENDS ============= */
