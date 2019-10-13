$(function(){
  $('.navbar').sticky({ topSpacing:0 });

  $('#storyCarousel').owlCarousel({
    items:1,
    dots:true,
    nav:false,
    margin:10,
    stagePadding:10,
    responsiveClass:true
  });

    /* ---- particles.js config ---- */

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  var countDownDate = new Date("Dec 25, 2019 18:30:00").getTime();
  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("mins").innerHTML = minutes;
      document.getElementById("secs").innerHTML = seconds;
      
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("days").innerHTML = "EXPIRED";
      }
  }, 1000);

  $('.home-inner').waypoint(function(){
    $('.home-content').addClass('animated fadeInLeft slow');
  },{offset:'100%'});
  $('.countdown-inner').waypoint(function(){
    $('#headingCountdown').addClass('animated bounceInDown faster');
    $('.list-countdown').addClass('animated bounceInUp faster');
  },{offset: '100%'});
  $('.bride-inner').waypoint(function(){
    $('.bride-content').addClass('animated fadeInLeft');
  },{offset:'100%'});
  $('.story-inner').waypoint(function(){
    $('#headingStory').addClass('animated bounceInUp');
    $('#storyCarousel').addClass('animated fadeInLeft slow');
  },{offset:'100%'});
  $('.event-inner').waypoint(function(){
    $('#headingEvent').addClass('animated bounceInUp');
    $('.card-event').addClass('animated fadeInRight slow');
  },{offset:'100%'});
  $('.bridemaid-inner').waypoint(function(){
    $('#hedingBridemaid').addClass('animated bounceInUp');
    $('#animateBridemaid').addClass('animated fadeInLeft slow');
  },{offset:'100%'});
  $('.gallery-inner').waypoint(function(){
    $('#headingGallery').addClass('animated bounceInUp');
    $('#animateGallery').addClass('animated fadeInRight slow');
  },{offset:'100%'});
});