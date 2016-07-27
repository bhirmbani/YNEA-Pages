// carousel
carousel = (function(){
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var box = document.querySelector('#carousel-box');
  // var inner = document.querySelector('.content-inner');
  var next = document.querySelector('#right');
  var prev = document.querySelector('#left');
  var items = box.querySelectorAll('section');
  var counter = 0;
  var amount = items.length;
  var current = items[1];


  function navigate(direction) {
    current.classList.remove('active');
    current.classList.add('content-header');
    counter = counter + direction;
    if(direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    else if(direction === 1 && !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('active');
  }
  next.addEventListener('click', function(ev){
    navigate(1);
      current.classList.remove('content-header');

  });
  prev.addEventListener('click', function(ev){
    navigate(-1);
    current.classList.remove('content-header');
  });
  navigate(0);
})();


window.onload = function move() {
    var elem = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
};
