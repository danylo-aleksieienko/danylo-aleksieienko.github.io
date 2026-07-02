(function() {

    document.addEventListener("DOMContentLoaded", function(event) { 
        let button = document.getElementById("btn");
        button.onclick = () => document.getElementById('demo').innerHTML = Date();
    
        alert(button.innerHTML);
      });


   

   // document.getElementById('demo').innerHTML = Date()


})();