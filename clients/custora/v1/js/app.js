galaxy = new function() {
  var SCREEN_WIDTH = 960;
  var SCREEN_HEIGHT = 550;

  var orbitAlpha, orbitBeta, orbitGamma, canvas, context;
  
  colors = ['247, 76, 98', '255, 255, 255', '190, 115, 253', '248, 160, 172', '240, 220, 192'];

  var particles = [];
  var segmentAlpha = [];
  var segmentBeta = [];
  var killFlag = 0;
  var opacityFlag = 0;
  var textFlag = 0;
  var riskFlag = 0;
  var riskTextFlag = 0;

  var mouseX = 150;
  var mouseY = 275;

  this.init = function() {
    canvas = document.querySelector("#galaxy");

    if (canvas && canvas.getContext) {
      context = canvas.getContext('2d');

          //retina canvas
      if(window.devicePixelRatio >= 2){
        canvas.width = SCREEN_WIDTH*window.devicePixelRatio;
        canvas.height = SCREEN_HEIGHT*window.devicePixelRatio;
        canvas.style.width = "960px";
        canvas.style.height = "570px";
        context.scale(window.devicePixelRatio,window.devicePixelRatio);
      } 

      else {
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        canvas.style.width = "960px";
        canvas.style.height = "570px";
        canvas.style.position = 'relative';
      }      

      document.addEventListener('mousedown', documentMouseDownHandler, false);

      orbitAlpha = new Cursor();
      orbitAlpha.position.x = SCREEN_WIDTH/2;
      orbitAlpha.position.y = SCREEN_HEIGHT/2;
      createParticles(orbitAlpha.position, 500, particles);
      
      orbitBeta = new Cursor();
      orbitBeta.position.x = SCREEN_WIDTH/2;
      orbitBeta.position.y = SCREEN_HEIGHT/2;

      orbitGamma = new Cursor();
      orbitGamma.position.x = 810;
      orbitGamma.position.y = 275;

      setInterval(loop, 1000/40);
    }
  }

  function createParticles(pos, amt, stack) {
    for (var i = 0; i < amt; i++) {
      var p = new Particle();
      p.position.x = pos.x;
      p.position.y = pos.y;
      p.shift.x = pos.x;
      p.shift.y = pos.y;

      stack.push(p);
    }
  }


  function documentMouseDownHandler(event) {

  }



  onePercent = function() {
  	$("html, body").animate({ scrollTop: 0 }, "fast");
  	killFlag = 1;
  	textFlag = 1;
  }

  risk = function() {
  	$("html, body").animate({ scrollTop: 0 }, "fast");
  	riskFlag = 1;
  	riskTextFlag =1;
  }

  function loop() {

    var particle;
    var i, j, ilen, jlen;
    
    orbitBeta.position.x += (mouseX - orbitBeta.position.x)*.2;
    orbitBeta.position.y += (mouseY - orbitBeta.position.y)*.2;

 /////////////////////////
    if (killFlag == 1){
      
    orbitAlpha.orbit = 85;
    orbitBeta.orbit = 20;


      

      if (particles.length >= 400){
      	particles.splice(0,100);
	  }
      
      createParticles(orbitBeta.position, 100, segmentAlpha);
      killFlag = 0;
      
    }

    if (riskFlag ==1) {
    	orbitAlpha.orbit -= 15;
    	orbitGamma.orbit = 40;

      if (particles.length >= 300){
      	particles.splice(0,50);
	  }

	  createParticles(orbitGamma.position, 200, segmentBeta);
      riskFlag = 0;

    }
 //////////////////////////

    context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    context.strokeStyle = 'rgba(255,255,255, .3)';
    context.moveTo(570,470);
	context.lineTo(600, 500);
	context.lineTo(708, 500);
	context.stroke();
	context.closePath();

 	context.fillStyle = '#FFF';
    context.beginPath();
    context.font = "12px Antenna-Light, Verdana, Serif";
    context.fillText("CUSTOMERS", 626, 493);
    context.closePath();

    if (textFlag == 1){
    	context.strokeStyle = 'rgba(255,255,255, .3)';
   	    context.moveTo(50,200);
	    context.lineTo(130, 200);
	    context.lineTo(145, 220);
	    context.stroke();
	    context.closePath();

     	context.fillStyle = '#FFF';
   		context.beginPath();
   		context.font = "12px Antenna-Light, Verdana, Serif";
   		context.fillText("TOP 1%", 50, 195);
   		context.closePath();
    }

    if (riskTextFlag == 1){
    	context.strokeStyle = 'rgba(255,255,255, .3)';
   	    context.moveTo(660,170);
	    context.lineTo(765, 170);
	    context.lineTo(790, 195);
	    context.stroke();
	    context.closePath();

   		context.fillStyle = '#FFF';
   		context.beginPath();
   		context.font = "12px Antenna-Light, Verdana, Serif";
   		context.fillText("CHURN RISK", 660, 165);
   		context.closePath();
    }

    particleEngine(particles, 0, orbitAlpha, colors[1]);
    particleEngine(segmentAlpha, 0, orbitBeta, colors[0]);
    particleEngine(segmentBeta, 0, orbitGamma, colors[2]);

  }
  

  function particleEngine(particles, offset, cursor, color) {

      var particle;
      var i, j, ilen, jlen;

      for (i = 0, ilen = particles.length; i < ilen; i++) {
        particle = particles[i];

        particle.angle += particle.speed * 2;

        particle.shift.x += (cursor.position.x - particle.shift.x) * particle.speed;
        particle.shift.y += (cursor.position.y - particle.shift.y) * particle.speed;

        particle.position.x = offset + particle.shift.x + Math.sin(i + particle.angle) * (particle.orbit * particle.force);
        particle.position.y = offset + particle.shift.y + Math.cos(i + particle.angle) * (particle.orbit * particle.force);

        particle.orbit += (cursor.orbit - particle.orbit) * 0.01;

        //Shine
        if (opacityFlag == 0){
        	particle.opacity += Math.random() * 0.01;
        	if (particle.opacity >= 1){opacityFlag = 1;}
        }     
        else if (opacityFlag == 1) {
        	particle.opacity -= Math.random() * 0.01;
        	if (particle.opacity <= 0.2){opacityFlag = 0;}
        }


	
        context.beginPath();
        context.fillStyle = 'rgba(' + color + ', ' + particle.opacity +')';
        context.arc(particle.position.x, particle.position.y, particle.size/2, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
   
      }
    } //galaxy

}


function Particle() {
  this.size = 2 + Math.random() * 4;
  this.position = {
    x: 0,
    y: 0
  };
  this.shift = {
    x: 0,
    y: 0
  };
  this.angle = 0;
  this.speed = 0.002 + Math.random() * 0.01;
  this.force = -(Math.random() * 2);
  this.orbit = 1;
  this.opacity = Math.random() + .2;
}

function Cursor() {
  this.orbit = 110;
  this.position = {
    x: 0,
    y: 0
  };
}

galaxy.init();