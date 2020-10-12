var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  function employeedetails(){
      document.getElementById("employee_details").style.display="block";

      document.getElementById("wrapper").style.display="none";
  }

  function showprofile(){
    document.getElementById("wrapper").style.display="block";
    
    document.getElementById("employee_details").style.display="none";

    document.getElementById("edit_profile").style.display="none";
  }

  function editdetails(){
    document.getElementById("edit_profile").style.display="block";

    document.getElementById("wrapper").style.display="none";
}