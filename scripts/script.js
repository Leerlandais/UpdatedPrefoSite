document.addEventListener("DOMContentLoaded", function() { 



    var buttonQ1 = document.getElementById("q1");
    buttonQ1.addEventListener('click', function() {
        document.getElementById("intanswerJD").innerHTML = "New text!";
   //     document.getElementById("intanswerMC").innerHTML = "New text!";
        console.log("Button clicked");
    })


});