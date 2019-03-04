jQuery(function ($) {

	

  $(document).mousemove(function (e) {
		var x=e.pageX;
		var y=e.pageY;

		var x1= -57+x/90;
		var x2= -63+x/60;
		var x3= -50+x/90;
		var x4= -52+x/60;


		var y1= -85+y/60;
		var y2= 37+y/50;
		var y3= -19+y/60;
		var y4= -94+y/50;


		$(".coin-tr").css({"right":x1+'px',"top":y1+'px'});
		$(".coin-tl").css({"left":x2+'px',"top":y2+'px'});
		$(".coin-br").css({"right":x3+'px',"bottom":y3+'px'});
		$(".coin-bl").css({"left":x4+'px',"bottom":y4+'px'});

	});






	$(".spin").on('click', function (event) {

	if (spinNum == 0) {
		if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
		{
		 	$(".roulette-big").css({'transform-origin':'50% 50%'});
			$(".roulette-small").css({'transform-origin':'50% 50%'});
		}
		$(this).css({'pointer-events':'none'})
		// remove default spinning wheel
		$(".roulette-big").removeClass("rot-clock");
		$(".roulette-small").removeClass("rot-counter-clock");
		// big roulette spin
		function getFraction(n) {
		  var s = String(n);
		  return s.slice(s.indexOf('.'));
		}
		var degVal = Math.floor(Math.random() * 1440) + 1080,
			// prizeVal = degVal % 360,
			prizeVal = 0,
			time = 8500,
			numOfSegments = 5,
			segmentVal = 360 / numOfSegments;
		
		prizeVal = degVal / 360;
		prizeVal = getFraction(prizeVal);
		prizeVal = prizeVal * 360;

		// small roulette spin
		var prizeVal2 = 0,
			numOfSegments2 = 3,
			segmentVal2 = 360 / numOfSegments2;
		prizeVal2 = degVal / 360;
			console.log(prizeVal2);
		prizeVal2 = getFraction(prizeVal2);
			console.log(prizeVal2);
		prizeVal2 = prizeVal2 * 360;
	
		console.log(prizeVal2);
		console.log(degVal);


		// prize on big roulette
		if (prizeVal <= segmentVal) {
			console.log("588 积分");
			$(".p-rmb").text("588 积分");
		} else if (prizeVal <= segmentVal * 2 && prizeVal >= 72) {
			console.log("88 RMB");
			$(".p-rmb").text("88 RMB");
		} else if (prizeVal <= segmentVal * 3 && prizeVal >= 144) {
			console.log("68 RMB");
			$(".p-rmb").text("68 RMB");
		} else if (prizeVal <= segmentVal * 4 && prizeVal >= 216) {
			console.log("38 RMB");
			$(".p-rmb").text("38 RMB");
		} else if (prizeVal <= segmentVal * 5 && prizeVal >= 288) {
			console.log("18 RMB");
			$(".p-rmb").text("18 RMB");
		}

		// spin on big roulette
		function spin() {
			var $myElm = $(".roulette-big");

			function rotate(degrees) {
				$myElm.css({
					'-webkit-transform': 'rotate(' + degrees + 'deg)',
					'-moz-transform': 'rotate(' + degrees + 'deg)',
					'-ms-transform': 'rotate(' + degrees + 'deg)',
					'transform': 'rotate(' + degrees + 'deg)'
				});

			}
			$({
				deg: 0
			}).animate({
				deg: degVal
			}, {
				duration: time,
				easing: "easeOutCubic",
				step: function (now) {
					var deg = now;
					rotate(deg);


				}
			});
		}

		// prize on small roulette
		if (prizeVal2 <= segmentVal2) {
			console.log("violet");
			$(".p-text").html("今日在实验室馆<br>投注额超过三千元<br><span class='amt'>就送您</span>");
		} else if (prizeVal2 <= segmentVal2 * 2 && prizeVal2 >= 120) {
			console.log("blue");
			$(".p-text").html("今日在中国澳门馆<br>投注额超过五千元 <br><span class='amt'>就送您</span>");
		} else if (prizeVal2 <= segmentVal2 * 3 && prizeVal2 >= 240) {
			console.log("red");
			$(".p-text").html(" 今日在APP累积<br>存款200元以上<br><span class='amt'>就送您</span>");
		}
		// spin on small roulette
		function spin2() {
			var $myElm = $(".roulette-small");

			function rotate2(degrees) {
				$myElm.css({
					'-webkit-transform': 'rotate(-' + degrees + 'deg)',
					'-moz-transform': 'rotate(-' + degrees + 'deg)',
					'-ms-transform': 'rotate(-' + degrees + 'deg)',
					'transform': 'rotate(-' + degrees + 'deg)'
				});

			}
			$({
				deg: 0
			}).animate({
				deg: degVal
			}, {
				duration: time,
				easing: "easeOutCubic",
				step: function (now) {
					var deg = now;
					rotate2(deg);
				}
			});
			var audio = new Audio('audio/spinsound.mp3');	
			audio.play();
		}

		spin();
		spin2();
		// show prize
		setTimeout(function () {
			// close current active popup
			$(".pop-rules").fadeOut();
			$(".pop,.pop-prize").fadeIn();
			$(".spin").css({'pointer-events':'auto'})
		}, time)
	}
		// spin once only
		spinNum = 1;
	});




	

	var spinNum = 0;

	jQuery.easing['jswing'] = jQuery.easing['swing'];
	jQuery.extend(jQuery.easing, {

		// easeInOutQuart: function (x, t, b, c, d) {
		// 	if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		// 	return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		// }
		 easeOutCubic: function (t) { return (--t)*t*t+1 }
	});



	//pop rules
	$(".btn-activity").on('click', function (event) {
		$(".pop,.pop-rules").fadeIn();
	});
	// close popup
	$(".pop-close,.pop-close2").on('click', function (event) {
		$(".pop,.pop-prize,.pop-rules").fadeOut();
	});

	// car animation
	function randRange(data) {
		var newTime = data[Math.floor(data.length * Math.random())];
		return newTime;
	}

	function toggleSomething() {
		var timeArray = new Array(1000, 2000, 3000, 4000, 1500, 2500, 3500, 4500);

		// do stuff, happens to use jQuery here (nothing else does)
		$(".car").animate({
			left: "110%"
		}, Math.floor(Math.random() * 5000) + 2000, function () {
			$(".car").delay(Math.floor(Math.random() * 3000) + 1000).queue(function (next) {
				$(this).css({
					'left': '-210px'
				});
				next();
			});
		})

		clearInterval(timer);
		timer = setInterval(toggleSomething, randRange(timeArray));
	}

	var timer = setInterval(toggleSomething, 1000);


    // BGM
     $('<embed id="bgm" src="audio/bg.mp3"></embed>').prependTo('body');
    var bgm = setInterval(function(){
      $("#bgm").remove();
      $('<embed id="bgm" src="audio/bg.mp3"></embed>').prependTo('body');
    }, 34000 );

    $(".sound").on('click', function(event) {
      $("embed#bgm").remove();
      clearInterval(bgm);
      if($(this).hasClass('soundOn')){
        $(this).addClass('soundOff');
        $(this).removeClass('soundOn');
        $("audio").get(0).pause();
      }
      else{
        $(this).addClass('soundOn');
        $(this).removeClass('soundOff');
        $("audio").get(0).play();
      }
    });



      function linesLoop() {
    var lineWrap = $(".line-wrap"),
      count = 0,
      lines = [];

    function createLine() {
      count++;
      
      var i = count;

      lines[i] = {};
      lines[i].x = Math.random() * 100;
      lines[i].y = 0;
      lines[i].width = 1 + Math.round(Math.random() * 2);
      lines[i].height = 200 + Math.round(Math.random() * 600);
      lines[i].obj = $(
        '<div id="'+i+'" class="line"><div class="line-inner"></div></div>'
      ).appendTo(lineWrap);

      lines[i].obj.css({
        left: lines[i].x + "%",
        top: lines[i].y + "%",
        width: lines[i].height + "px",
        height: lines[i].width + "px"
      });
      
      // if (i % 10 === 0) {
        
      // }
lines[i].obj.addClass('green');
      setTimeout(function() {
        var toRemove = lines[i].obj;
        toRemove.addClass("animate");
        setTimeout(function() {
          toRemove.remove();
        }, 2000);
      }, 200);
    }

    setInterval(function() {
      createLine();
    }, 250);
  }

  linesLoop();



});


// particles

particlesJS("particles-js", {
  particles: {
    number: {
      value: 135,
      density: { enable: true, value_area: 710.2328774690454 }
    },
    color: { value: "#fff4c5" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.40246529723245905,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 0,
      color: "#ffffff",
      opacity: 0.36076771369474264,
      width: 0
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 641.3648243462092 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);





