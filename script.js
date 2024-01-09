//your JS code here. If required.

function func() {
	let fname = document.forms["form1"]["First Name"].value;
	let lname = document.forms["form1"]["Last Name"].value;
	let pname = document.forms["form1"]["Phone Number"].value;
	let ename = document.forms["form1"]["Email ID""].value;

	alert("First Name": fname + '\n'
		  + "Last Name": lname + '\n' +
		 "Phone Number": pname + '\n'
		  + "Email ID": ename)
}