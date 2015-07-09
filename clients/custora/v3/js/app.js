// Custora Segment Builder Prototype v0.3
// Particle Orbit Generator & Custom Dropdown Dashboard
// Demo of Particle Orbit - http://codepen.io/achariam/details/oXGEgJ/

galaxy = new function() {
    var SCREEN_WIDTH = 960;
    var SCREEN_HEIGHT = 570;

    var orbitAlpha, orbitBeta, orbitGamma, canvas, context;

    var colors = ['247, 76, 98', '255, 255, 255', '190, 115, 253', '248, 160, 172', '240, 220, 192'];
    var particles = [];
    var segmentAlpha = [];
    var segmentBeta = [];

    var OnePercentFlag = 0;
    var opacityFlag = 0;
    var OnePercentTextFlag = 0;
    var riskFlag = 0;
    var riskTextFlag = 0;

    var totalCustomers = 58939933;
    var totalSegment = 0;

    var mouseX = 230;
    var mouseY = 285;

    this.init = function() {
        canvas = document.querySelector("#galaxy");

        if (canvas && canvas.getContext) {
            context = canvas.getContext('2d');

            //Fix resolution for Retina devices
            if (window.devicePixelRatio >= 2) {
                canvas.width = SCREEN_WIDTH * window.devicePixelRatio;
                canvas.height = SCREEN_HEIGHT * window.devicePixelRatio;
                canvas.style.width = "960px";
                canvas.style.height = "570px";
                context.scale(window.devicePixelRatio, window.devicePixelRatio);
            } else {
                canvas.width = SCREEN_WIDTH;
                canvas.height = SCREEN_HEIGHT;
                canvas.style.width = "960px";
                canvas.style.height = "570px";
                canvas.style.position = 'relative';
            }

            document.addEventListener('mousedown', documentMouseDownHandler, false);

            //initialize orbits

            orbitAlpha = new Cursor();
            orbitAlpha.position.x = 480;
            orbitAlpha.position.y = 285;
            createParticles(orbitAlpha.position, 500, particles, 0, 1);

            orbitBeta = new Cursor();
            orbitBeta.position.x = 230;
            orbitBeta.position.y = 285;

            orbitGamma = new Cursor();
            orbitGamma.position.x = 230;
            orbitGamma.position.y = 285;

            setInterval(loop, 1000 / 40);
        }
    }

    //
    //Flagging functions for the dropdown that toggles the current animation state
    //
    onePercent = function() {
        //  $("html, body").animate({ scrollTop: 0 }, "fast");
        OnePercentFlag = 1;
        OnePercentTextFlag = 1;
    }

    risk = function() {
        //  $("html, body").animate({ scrollTop: 0 }, "fast");
        riskFlag = 1;
        riskTextFlag = 1;
    }

    //
    //Main Loop
    //
    function loop() {

        var particle;
        var i, j, ilen, jlen;

        //Mouse tracking offset for testing
        orbitBeta.position.x += (mouseX - orbitBeta.position.x) * 1;
        orbitBeta.position.y += (mouseY - orbitBeta.position.y) * 1;

        //Flag to control 1st Orbit State
        if (OnePercentFlag == 1) {

            orbitAlpha.orbit = 75;
            orbitBeta.orbit = 20;

            totalCustomers -= 78900
            totalSegment += 78900


            if (particles.length >= 400) {
                particles.splice(0, 100);
            }

            createParticles(orbitAlpha.position, 100, segmentAlpha, 0, 1);
            orbitAlpha.position.x = 700;
            orbitAlpha.position.y = 285;
            OnePercentFlag = 0;

        }

        //Flag to control 2nd Orbit State
        if (riskFlag == 1) {
            orbitAlpha.orbit = 80;
            orbitGamma.orbit = 40;

            totalCustomers -= 245000
            totalSegment += 245000

            if (particles.length >= 300) {
                particles.splice(0, 50);
            }

            createParticles(orbitAlpha.position, 200, segmentBeta, .7, 1.5);
            orbitAlpha.position.x = 700;
            orbitAlpha.position.y = 285;
            riskFlag = 0;

        }

        //Clear animation
        context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

        //Logic to move Customer text when orbit changes
        if ((OnePercentTextFlag == 0) && (riskTextFlag == 0)) {
            context.strokeStyle = 'rgba(255,255,255, .3)';
            context.moveTo(570, 480);
            context.lineTo(600, 510);
            context.lineTo(708, 510);
            context.stroke();
            context.closePath();

            context.fillStyle = '#FFF';
            context.beginPath();
            context.font = "12px Antenna-Light, Verdana, Serif";
            context.fillText("CUSTOMERS", 626, 505);
            context.closePath();
        } else {
            context.strokeStyle = 'rgba(255,255,255, .3)';
            context.moveTo(710, 440);
            context.lineTo(730, 470);
            context.lineTo(848, 470);
            context.stroke();
            context.closePath();

            context.fillStyle = '#FFF';
            context.beginPath();
            context.font = "12px Antenna-Light, Verdana, Serif";
            context.fillText("CUSTOMERS", 768, 465);
            context.closePath();
        }

        //Total Customer & Segment Text Counters
        context.fillStyle = '#FFF';
        context.beginPath();
        context.font = "12px Antenna-Light, Verdana, Serif";
        context.fillText("TOTAL CUSTOMERS", 620, 28);
        context.fillText("TOTAL SEGMENT", 800, 28);
        context.fillText(totalCustomers, 622, 48);
        context.fillText(totalSegment, 802, 48);
        context.closePath();


        //Top 1% Orbit Text
        if (OnePercentTextFlag == 1) {
            context.strokeStyle = 'rgba(255,255,255, .3)';
            context.moveTo(50, 200);
            context.lineTo(130, 200);
            context.lineTo(200, 265);
            context.stroke();
            context.closePath();

            context.fillStyle = '#FFF';
            context.beginPath();
            context.font = "12px Antenna-Light, Verdana, Serif";
            context.fillText("TOP 1%", 50, 195);
            context.closePath();
        }

        //Churn Risk Orbit Text
        if (riskTextFlag == 1) {
            context.strokeStyle = 'rgba(255,255,255, .3)';
            context.moveTo(240, 410);
            context.lineTo(260, 440);
            context.lineTo(378, 440);
            context.stroke();
            context.closePath();

            context.fillStyle = '#FFF';
            context.beginPath();
            context.font = "12px Antenna-Light, Verdana, Serif";
            context.fillText("CHURN RISK", 298, 435);
            context.closePath();
        }

        //Animate Orbits
        particleEngine(particles, 0, orbitAlpha, colors[1]);
        particleEngine(segmentAlpha, 0, orbitBeta, colors[0]);
        particleEngine(segmentBeta, 0, orbitGamma, colors[2]);

    }

    //
    //Controls and animates particles
    //
    function particleEngine(particles, offset, cursor, color) {

        var particle;
        var i, j, ilen, jlen;

        for (i = 0, ilen = particles.length; i < ilen; i++) {
            //Particle orbit calculations
            particle = particles[i];

            particle.angle += particle.speed * 2;

            particle.shift.x += (cursor.position.x - particle.shift.x) * particle.speed;
            particle.shift.y += (cursor.position.y - particle.shift.y) * particle.speed;

            particle.position.x = offset + particle.shift.x + Math.sin(i + particle.angle) * (particle.orbit * particle.force);
            particle.position.y = offset + particle.shift.y + Math.cos(i + particle.angle) * (particle.orbit * particle.force);

            particle.orbit += (cursor.orbit - particle.orbit) * 0.01;

            //Toggle Particle Opacity Randomly
            if (opacityFlag == 0) {
                particle.opacity += Math.random() * 0.01;
                if (particle.opacity >= 1) {
                    opacityFlag = 1;
                }
            } else if (opacityFlag == 1) {
                particle.opacity -= Math.random() * 0.01;
                if (particle.opacity <= 0.2) {
                    opacityFlag = 0;
                }
            }

            //Draw particles on canvas
            context.beginPath();
            context.fillStyle = 'rgba(' + color + ', ' + particle.opacity + ')';
            context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }
    }

}//galaxy

//
// Particle Specs
//
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
    this.speed = 0.002 + Math.random() * 0.012;
    this.force = -(Math.random() * 2);
    this.orbit = 1;
    this.opacity = Math.random() + .2;
}

//
// Cursor — to mark initial orbit variables and for mouse tracking
//
function Cursor() {
    this.orbit = 130;
    this.position = {
        x: 0,
        y: 0
    };
}

//
// Custom Checkbox for Controls
//
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

//
//Random Number Generator
//
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

//
//Particle creator
//
function createParticles(pos, amt, stack, forcemin, forcemax) {
    for (var i = 0; i < amt; i++) {
        var p = new Particle();
        p.position.x = pos.x;
        p.position.y = pos.y;
        p.shift.x = pos.x;
        p.shift.y = pos.y;
        p.force = -(getRandom(forcemin, forcemax) * 2);

        stack.push(p);
    }
}

//
//Mouse handler for testing
//
function documentMouseDownHandler(event) {
    //for testing mouse tracking
}

galaxy.init();