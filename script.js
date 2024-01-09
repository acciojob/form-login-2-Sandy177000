//your JS code here. If required.

function func() {
	let fname = document.forms["form1"]["fname"].value;
	let lname = document.forms["form1"]["lname"].value;
	let pname = document.forms["form1"]["pname"].value;
	let ename = document.forms["form1"]["ename"].value;

	alert("First Name": fname + '\n'
		  + "Last Name": lname + '\n' +
		 "Phone Number": pname + '\n'
		  + "Email ID": ename)
}