var load_front = function(event) {
    var image_front = document.getElementById('output_front');
    image_front.src = URL.createObjectURL(event.target.files[0]);
    image_front.style.width="100%";
    image_front.style.height= "206px";
    image_front.style.margin="0";
  };

  var load_back = function(event) {
    var image_back = document.getElementById('output_back');
    image_back.src = URL.createObjectURL(event.target.files[0]);
    image_back.style.width="100%";
    image_back.style.height= "206px";
    image_back.style.margin="0";
  };