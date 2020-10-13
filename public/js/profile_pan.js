var load_front = function(event) {
    var image = document.getElementById('output_pan');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.width="100%";
    image.style.height= "206px";
    image.style.margin="0";
    
  };