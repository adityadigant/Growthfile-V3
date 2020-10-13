var load_front = function(event) {
    var image_front = document.getElementById('output_front');
    image_front.src = URL.createObjectURL(event.target.files[0]);
  };

  var load_back = function(event) {
    var image_back = document.getElementById('output_back');
    image_back.src = URL.createObjectURL(event.target.files[0]);
  };