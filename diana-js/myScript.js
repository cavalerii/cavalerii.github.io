var nume = ""
var age = ""
var color = ""

function askForName() {
	nume = prompt("Introduceti numele:")
	document.getElementById("nume_user").innerHTML = "Salut, " + nume + "!"
}

function askForAge() {
	 age = prompt("Introduceti varsta")
	document.getElementById("varsta_user").innerHTML = age + " ani"
}

function askForColor() {
	 color = prompt("Introdu culoarea preferata")
	document.getElementById("culoare").innerHTML = "Culoare preferata: " + color
}

function resumeUser() {
	document.getElementById("rezumat").innerHTML = "Esti " + nume + ". Ai " + age + " ani. Culoarea ta preferata este " + color + " ."
}


