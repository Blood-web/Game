//Shiftery Link to fieldset//

g = 0;

max=12;
var run;
console.log("peepee");
function shiftery() {
var L = document.getElementById('wave');
    if (g == 0) { L.style.background = "linear-gradient( 40deg, #ddaadd, #11ffad)";  
        incg();  }

    else if (g == 1){L.style.background = ('linear-gradient( 240deg, #11aa55, #29ace0)');

        incg() ; }
    else if (g == 2) {L.style.background = ('linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)');
        incg();    }
    else if (g == 3) {L.style.background = ('radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)');
        incg();   }
    else if (g == 4) {L.style.background = ('repeating-conic-gradient(red 10%, yellow 20%)');
        incg();  }
    else if (g == 5) {L.style.background = ('linear-gradient(to bottom, #6666ff 0%, #3333ff 90%, transparent 100%)');
        incg(); }
    else if (g == 6) {L.style.background = ('linear-gradient( 120deg, #2acaea, #ffff33, #ff71ce, #01cdfe, #05ffa1, #b967ff, #fffb96)');
        incg() ;}
    else if (g == 7) {L.style.background = ('radial-gradient(circle, #ff0000, #bf0000, #800000, #400000, #000000, #200000)');
        incg(); } 
    else if (g == 8) {L.style.background = ('repeating-conic-gradient(red 10%, yellow 20%)');
        incg(); }
    else if (g ==9) {L.style.background = ('repeating-radial-gradient( #0bd3d3, #f890e7, #ffffff, #d0d0d0, #000000)');
        incg();  }
    else if (g==10) {L.style.background = ('linear-gradient(#2a6496, #fff  70%, #011852)');
        incg();}
    else if (g==11) {L.style.background = ('radial-gradient(40px circle, orange,gray)');
        incg();}
    else if (g==12) {L.style.background = ('linear-gradient(120deg, red,orange, green)');
        incg();}
    
    }
//Inc the var//
function incg(){ g++;

if (g>=max){g=0;}}



function StartShift(){ 
   run=setInterval(shiftery,5000);
    shiftery();
    console.log("shiftery begin. G="+g);}

function killshiftery(){
    clearInterval(run);
alert("CUNT");}