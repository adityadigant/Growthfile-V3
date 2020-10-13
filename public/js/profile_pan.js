var load_front = function(event) {
    var image = document.getElementById('output_pan');
    image.src = URL.createObjectURL(event.target.files[0]);
  };