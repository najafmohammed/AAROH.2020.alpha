const particlesJSON = {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": false
                
            }
        },
        "color": {
            "value": "#261841"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 1,
                "color": "#610cfd"
              },
              "polygon": {
                "nb_sides": 3
              },
            
        },
        
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 30,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#610cfd",
            "opacity": 0.3,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 10,
            "direction": "left",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 2600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": [
                    "bubble",
                    "repulse"  
                ]
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.7
                }
            },
            "bubble": {
                "distance": 600,
                "size": 12,
                "duration": 1,
                "opacity": 0.8,
                "speed": 1
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 20
            },
            "remove": {
                "particles_nb": 10
            }
        }
    },
    "retina_detect": true
  }
  
  particlesJS("particles-js", particlesJSON)