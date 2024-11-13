function validate() {
	var a = document.forms['form']['name'].value;
	if (a == "") {
		alert("Name is required");
	}
	var b = document.forms['form']['password'].value;
	if (b == "") {
		alert("Password is required");
	}
	if ( a != '' && b != '') {
		alert("Data validated Successfully");
	}
}