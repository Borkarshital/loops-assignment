
var emp_list = []

function getFullName() {

       

        var fname = document.getElementById("emp-name").value;

        var lname = document.getElementById("emp-name-1").value;
        
       var full_name = fname + lname

       emp_list.push(full_name)

       var str = ""

       for(var idx=0; idx < emp_list.length; idx++) {

         str = str + `<p> ${emp_list[idx]} </p>`
       }


        var d = document.getElementById ("list-1");

        d.innerHTML = str


}









