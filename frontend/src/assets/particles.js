import '@/styles/color.css';
const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color');
const secondaryColor = getComputedStyle(document.body).getPropertyValue('--primary-dark-color');

const particulesConfig = {
	"background": {
		"color": {
			"value": primaryColor
		},
		"position": "100%",
		"repeat": "no-repeat",
		"size": "cover"
	},
	"backgroundMask": {
		"cover": {
			"color": {
				"value": secondaryColor
			},
			"opacity": 1
		},
		"enable": false
	},
	"fullScreen": {
		"zIndex": 1
	},
	"fpsLimit": 60,
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": false,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 200,
				"size": 10,
				"duration": 2,
				"opacity": 8,
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
	"particles": {
		"number": {
			"value": 170,
			"density": {
				"enable": true,
				"value_area": 1972.8691040806818
			}
		},
		"color": {
			"value": getComputedStyle(document.body).getPropertyValue('--secondary-color')
		},
		"shape": {
			"type": "polygon",
			"stroke": {
				"width": 0,
				"color": secondaryColor
			},
			"polygon": {
				"nb_sides": 8
			},
			"image": {
				"src": "",
				"width": 100,
				"height": 100
			}
		},
		"links": {
			"color": {
				"value": secondaryColor
			},
			"distance": 150,
			"enable": true,
			"opacity": 0.4
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": true,
				"speed": 4.155844155844156,
				"opacity_min": 0.5,
				"sync": true
			}
		},
		"repulse": {
			"random": {
				"enable": true
			}
		},
		"size": {
			"value": 8,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": true,
			"straight": true,
			"out_mode": "bounce",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"pauseOnBlur": false
}

export default particulesConfig;
