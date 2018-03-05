
function myFunction() {
    document.getElementById("myForm").reset();
}

function check_info(){
	var first_name= document.getElementById("fname").value;
	var last_name= document.getElementById("lname").value;
	var gender= document.getElementById("gender").value;
	var age = document.getElementById("age").value;
	var email_add= document.getElementById("email").value;
	var web_add= document.getElementById("webad").value;
	var comment= document.getElementById("subject").value;

	document.getElementById('input_fname').innerHTML = first_name;
	document.getElementById('input_lname').innerHTML = last_name;
	document.getElementById('input_gender').innerHTML = gender;
	document.getElementById('input_age').innerHTML = age;
	document.getElementById('input_email').innerHTML = email_add;
	document.getElementById('input_webad').innerHTML = web_add;
	document.getElementById('input_subject').innerHTML = comment;
	


}

