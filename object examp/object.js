var student={

    name: "shital",

    address: "pune",


}
console.log(student)

function addproperty() {

    var u_key = document.getElementById("key-name").value;

    var u_value = document.getElementById("object-value").value;

    student[u_key] = u_value;



    console.log(student)


}




