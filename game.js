
//Dev var//
idjcounter = 0;
idj = idjcounter;

var totalclicks = 0;

let score = 1;
let rage = 0;

var Pbar = document.getElementById('prestigebar');
const prestige = {
    level:0,
    prog:0,
    req:1000,
    counter: document.getElementById('prestigeprogress'),
}

var prestigecap =document.getElementById('prestigecap');
var prestigeprogresscounter=document.getElementById('prestigeprogress');

const playerstats = {
    totalclicks: document.getElementById("tc#"),
    mcupg: document.getElementById("mcupg#"),
    multiplier: document.getElementById("multi#"),
    spellcount: document.getElementById("tcCast"),
    achievement: document.getElementById("ACH"),
}

var myVar;
var timerz;
///scorecounters///
var display = document.getElementById('scorecounter');
var message = document.getElementById('messages');


var groupstatus="defualt";
var p8 = document.getElementById('button8txt');
let p8val = 1000;

//up img ids//
var upGimg = document.getElementById('upgimg');

//low img ids//
//button cost labels//
let click = 0;

const clicker={
    totalclicks:0,
    level:0,
    multi:1,
    upg$:100,
    image:document.getElementById("clicker"),
    scorecounter:document.getElementById("scorecounter"),
    tcounter:document.getElementById("TCcounter"),
    multicounter:document.getElementById("multicounter"),
}
var paramC = 5; //click upgrade//
var p0 = document.getElementById('button0txt');



var Rage =document.getElementById('rage');
var param0 =10000; //Rage ini click cost//
var p1 = document.getElementById('button1txt');

var buyautos = document.getElementById('buyauto');

const auto ={
    level:0,
    value:1,
    upgcost:100,
    cc:document.getElementById('autocost'),
}
var p2 = document.getElementById('button2txt');
const mana = {
    upgradecost: 250,
    manamax:  1000,
    player: 0,  
    
    regencost:100,
    level:0,
    count: document.getElementById('manacount'),
    maxc: document.getElementById('manamaxcount'),
    image: document.getElementById("metergain"),
    p2:document.getElementById("button2txt")
}




var Iceball = document.getElementById('iceball');
var param3 = 1300; //iceball var//
var p3 = document.getElementById('button3txt');


//Fireball vars status is 1x,2x, x3, x5, x7 or mayhem //
const fire = {
    castcost:10,   
    upgradecost: 10,
    val: 5,
    level:0,
    castcounter:0,
    cc: document.getElementById('fireballcastcost'),
    image:document.getElementById("fireball"),
    btn: document.getElementById("fbbutton"),
    master: document.getElementById("abvfire"),
    p4:document.getElementById("button4txt"),
    counter:document.getElementById('firecounter'),
    levelcounter:document.getElementById('firelevel'),
                
    status:"basicbitch",
    cast:"notready",
    upgrade:"notready",
    truestatus:"",
}
const fireupgrade = {
    level:0,
    $: 7500,
    x1ballimg:"../Logs/x1fireball.png",
    x2ballimg:"../Logs/x2fireball.png",
    x3ballimg:"../Logs/x3fireball.png",
    x5ballimg:"../Logs/x5fireball.png",
    x7ballimg:"../Logs/x7fireball.png",
    mayhemballimg:"../Logs/mayhemfireball.png",
    description:document.getElementById('fireupgdesc'),
    title:document.getElementById('titler1c1'), 
    image: document.getElementById('tdr1c1'),
    price: document.getElementById('pr1c1'),

}


var Arcaneball = document.getElementById('arcaneball');
var param6 = 38 ;//arcanebase var//
var p6 = document.getElementById('button6txt');
var arcaneballcastcost=param6;
var arcaneballval =5;

const arcane = {
    level:0,
    val:20,
    cast$:15,
    upgrade$: 50,
    castcounter:0,
    cc:document.getElementById("arcaneballcastcost"),
    image:document.getElementById("arcaneball"),
    btn:document.getElementById("arcbutton"),

}


var Earthball= document.getElementById('earthball');
var p7 = document.getElementById('button7txt');

//BARS//
//Menu c:cost;, UPG:upgmenu;,//
const menu = {
    return:document.getElementById("main"),
    fieldset:document.getElementById("hiddenwrap"),
    statstab:document.getElementById("statstab"),
    stats:document.getElementById("stats"),
    statstext:document.getElementById("statstext"),
    upgtab:document.getElementById("upgtab"),
    upgT:document.getElementById('upgradetable'),
    upgtext:document.getElementById("upgradetext"),
    prestigetab:document.getElementById("prestigetab"),
    prestiget:document.getElementById("prestigetable"),
    prestigetext:document.getElementById("prestigetext"),
    
    //times openend//
    upgO:0,
    statsO:0,
    menoO:0,
    prestigeO:0,
    exits:0,

}
var Pleveltext = document.getElementById('levelt');

var range = document.getElementById('myrange');




//sHORTHAND STRINGS//

var Avar = "Critical failure";


//DEV//
function pluscheat(){
    totalclicks+=100;
    click+=100000;
    mana+=1000;
    prestige.prog+=1000;   
    message.innerText = "Cheat used! -10,000";
    console.log('çheat used - 10000');
    totalclickinc();
    incrementandset();
    incrementandsetmana();
}

function upgrademc(){
    if (click>= clicker.upg$){
        clicker.multi++;
        clicker.upg$*=1.3;
        clicker.level++;
    }
}
//Main inc function, reg click, log score//
//incprestigebar//
function mainclick(){
    levelup();
    incrementandset();
    selftest();  
}
function incrementandset(){
    click++;
    click *+ clicker.multi;
    click = Math.floor(click);
    updateclick();
}

function updateclick(){
    clicker.scorecounter.innerText=click;
    clicker.tcounter.innerText=clicker.totalclicks;
    clicker.multicounter.innerText=clicker.multi;  
}

//MANA//
function incrementandsetmana(){
        mana.player++;

        mana.player=Math.round(mana.player *10)/10;
        p2.innerText = mana.upgradecost;
        mana.count.innerText=mana.player;
        mana.maxc.innerText=mana.manamax;
      
    if (mana.player >= mana.manamax){
        mana.player= mana.manamax;   
    }
    }
// tOTAL cLICK INCREMENTER//
var totalclickcount = document.getElementById("TCcounter");
function totalclickinc() {
    levelup();
    totalclicks++;
    totalclickcount.innerText = totalclicks;
    
}
//Sets prestige condiitons//
    function levelup(){
        
        prestige.prog++;
        prestigecap.innerText= prestige.req; 
        prestigeprogresscounter.innerText = prestige.prog;
        Pbar.value=prestige.prog;
        if(prestige.prog > prestige.req){
            prestige.prog = prestige.req;
            
        }
        else{
            return;
        }
    }

//Prestige//
function instprestige(){
    prestige.prog+=prestige.req;
}
//P inc +1, Multiplier x Plevel //
function Prestige(){
     if (prestige.prog >= prestige.req) {
        prestige.prog-=prestige.req;
        prestige.req*+1.57 ; 
        prestige.req = Math.round(prestige.req);
        prestige.level++;

        Pleveltext.innerText = prestige.level;
        
        multi += prestige.level * 0.51;
        multi = Math.floor(multi *100)/100;
        levelup();
        console.log( multiplier + ' level = ' + prestige.level + '. user has prestiged');
     }        
     else {
         console.log(prestige.level + 'insufficient for prestige')
     }
    }
//DEV, sep by **//



function updatetext(){
    updateclick();
    
    mana.maxc.innerText=mana.manamax;
    p2.innerText=fire.upgradecost;
    p8.innerText=param3;

}

function selftestini(){
    
    selftest();
setTimeout(function(){
selftestini();
},1000);    }

//Logs totalclickcount,score,prestigelvl,rage//
function selftest(){
    setstatus();
    updatetext();

console.log("Setstatus:Selftest: "+'\n'
+"  :Totalclicks= "+totalclicks+" :score= "+click
+'\n'+"  :Multiplier = "+ clicker.multi+" AutoClvl= "+

+'\n'+" :Spells:"+'\n'+
"  :Mana= "+mana.player+"/"+mana.manamax + "  Upgradecost= "+mana.upgradecost+ '\n'+

"Fireball status:"+fire.truestatus+'\n'+ " castcount="+fire.castcounter
+'\n'+"Castcost= " +fire.castcost+ " upgcost= "+fire.upgradecost
 +'\n'+"value= "+fire.val+" Fireball src="
+'\n'+fire.image.src+
'\n'+"Menu upg level"+fireupgrade.level+

'\n'+"  :Prestige= "+prestige.level+" :PrestigeProg= "+prestige.prog+" / "+prestige.req +'\n'+

"  :Rage= "+rage);  
}

function setstatus() {
    //FIRE//
   setstatusfire();


}


 

//***********************//


// Upgrade mana gain //
function upgrademana(){
    
if (click >= mana.upgradecost){
    click-=mana.upgradecost;
    mana.upgradecost*=1.3;
    mana.level++;
    mana.upgradecost= Math.round(mana.upgradecost);
    p2.innerText=mana.upgradecost;

    incrementandsetmana();
    incrementandset();
    setmana();
}
else if(click <=mana.upgradecost) {
    console.log(" Upgrade failed "+click+"/"+mana.upgradecost);
}else{
    console.log(Avar);
}
}

//Initiates timer meter gain adds 1pt per sec, updates text//
//bluedoes nothing//
// if always gonna look to run, will fail unless upgrade//

//Meter only runs if background image is correct//

function setmana(){ 

if (mana.image.src = "../Logs/mfireball.png" && mana.image.style.opacity == 1) {
    mana.image.src = "../Logs/mfireballblue.png";
    mana.image.style.opacity = 0.7 ;
    setTimeout(function(){
        incrementandsetmana();
        setmana();
    },1000); 
}
else if (mana.image.src ="../Logs/mfireballblue.png" && mana.image.style.opacity <= 1) {
    mana.image.src="../Logs/mfireballblue.png";
    setTimeout(function(){
        setmana();
        incrementandsetmana();
    },1000);  
}
else {   
    console.log('code failure');   
}
}
function buyauto(){
  totalclicks++;
  
  if (click < auto.upgcost)  {
    alert('no coins');
    idj++;
}
else  if (click > auto.upgcost){
    myVar = setInterval(cps,1000); //Auto completion 
    click -= auto.upgcost;     
    auto.upgcost *=  1.38 ;
    auto.upgcost = Math.round(auto.upgradecost);
    auto.cc.innerText = "(" + auto.upgcost +  ")";
    
    
    console.log(click + param1  + "buyautoupgrade");
    incrementandset();   
    levelup(); 
}}

// THIS SHIT HOT//
//######################################################################################//
//#####################   FFIIRREE     ###################//
//#########################################################//


/*FIIIIIRRRRREE*/
function fireballcast(){
    setstatusfire();
    totalclicks++;
    //check for cooldown and mana//
    if (fire.cast=="notready"){
    console.log(fire.status+'Fireball failed -timer-');idj++;
}
    else if (fire.image.classList.contains("firecooldown") && mana.player <= fire.castcost ){
       console.log(fire.status +"!!!" + Avar);idj++; 
    }
    else if (mana.player>=fire.castcost && fire.cast=="ready" ){     
    fire.castcounter++;
    click += fire.val;
    fire.cast="notready";
    fire.image.classList.add("firecooldown");
    mana.player -= fire.castcost; //fee//
    console.log(fire.status+"fireballcast: "+" minus mana-"+fire.castcost+" +val- "+fire.val);
    //Waits a little then does://
    setTimeout(function(){
    message.innerText = fire.status+"Fireball 5s cooldown";    
    setstatusfire();
    incrementandset();
    levelup();
    },50);
    setTimeout(function(){
        document.getElementById("fireball").classList.remove("firecooldown");   
       fire.cast="ready"; 
        message.innerText = fire.status+"Fireball Cooldown is over";
    },5000);
}
   else {console.log('fireball failed -variable?-');return;}
}


function setstatusfire(){
    updatefirecounter();
    firecostcheck();
    
    if (fire.status=="basicbitch" && totalclicks <=50) {
        fire.image.src="../Logs/lock.png";
        fire.master.style.opacity=0;
        //fireball not unlocked//
    }
   else if (fire.status=="basicbitch" && totalclicks>=50 ){
        //fire unlock - runs once//
        fire.image.style.opacity=0.7;
        fire.master.style.opacity=0.7;
        fire.cc.innerText = fire.castcost;
        alert('fireball has been unlocked');
        fire.status="unlocked";
    }
    else if(fire.status=="unlocked" && mana.level != 0 ){
        fire.image.style.opacity=0.7;
        fire.master.style.opacity=1;
        fire.btn.style.opacity=1;
        fire.image.src=fireupgrade.x1ballimg;
        fire.status="await";
     alert('Mana has been unlocked, try casting a fireball');
        //1st unlock//
    }   
     else if(fire.status=="await" & mana.player>=fire.castcost){
        fire.image.style.opacity=1;
        fire.status="1x";
        fire.cast="ready";
    }
    else if(fire.image.classList.contains("firecooldown") || mana.player <= fire.castcost){
        fire.image.opacity=0.9;
        console.log("mana is below or fire is on cooldown");
        //absolutefalse//
    } 
    else if(fire.cast=="ready" && mana.player>= fire.castcost){
        fire.image.style.opacity=1;
        fire.cast="ready";
        message.innerText="Fireballready";
    }   
    
}


//Cast cooldown % fireball && Meteor shower//
// capital letters for calling ids//
function updatefirecounter(){

    fire.truestatus=fire.level+fire.cast+fire.status;
    fire.counter.innerText=fire.Castcounter;
    fire.levelcounter.innerText=fire.status+fire.level;
    fire.p4.innerText=fire.upgradecost;
    fire.cc.innerText=fire.castcost; 
}

function fireballupgrade(){
    setstatusfire();
    if (fire.btn.style.opacity >=1 && click >= fire.upgradecost){
    click-=fire.upgradecost;

    fire.castcost*=1.3;
    fire.castcost = Math.round(fire.castcost);
    fire.val*=1.3;
    fire.val = Math.round(fire.val);
    fire.upgradecost*=1.3;
    fire.upgradecost = Math.round(fire.upgradecost);
    
    
    fire.level++;
    incrementandset();
    setstatusfire();
}
else {
    console.log("fireballupgfail: "+"click="+click+" :cost="+ fire.upgradecost);
    idj++;
}
}
//Upgrades sheet//
function menufireballupgrade(){
 
    if(click >=fireupgrade.$ && fireupgrade.level ==0){
        click -=fireupgrade.$;
        fire.upgrade.$=7500;  
        fire.castcost+=10;
        fire.val*=2;
        fireupgrade.level++;
      //Updates div in load order, title img descri//
        fireupgrade.title.innerText="FireShower (x3)";
        fireupgrade.image.src=fireupgrade.x3ballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="New fire desc1"+"click test="+click;
        
        fire.image.src=fireupgrade.x2ballimg; 
        fire.status="2x";
        incrementandset();
        console.log('fireball has been upgraded');
    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==1){
        click -=fireupgrade.$;
        fire.upgrade.$=40000;  
        fire.castcost+10;
        fire.val*=1.55;
        fireupgrade.level++;
      //Updates div in load order, title img descri//
        fireupgrade.title.innerText="FireShower (x5)";
        fireupgrade.image.src=fireupgrade.x5ballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="New fire desc2"+"click test="+click;
        
        fire.image.src=fireupgrade.x3ballimg; 
        fire.status="3x";
        incrementandset();
        console.log('fireball has been upgraded');

    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==2){
        click -=fireupgrade.$;
        fire.upgrade.$=100000;  
        fire.castcost*2;
        fire.val*=1.66;
        fireupgrade.level++;
      //Updates div in load order, title img descri//
        fireupgrade.title.innerText="FireShower (x7)";
        fireupgrade.image.src=fireupgrade.x7ballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="New fire desc"+"click test="+click;
        fire.image.src=fireupgrade.x5ballimg; 
        fire.status="5x";
        incrementandset();
        console.log('fireball has been upgraded');

    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==3){
        click -=fireupgrade.$;
        fireupgrade.$=500000;  
        fire.castcost*3;
        fire.val*=1.33;
        fireupgrade.level++;
     
        fireupgrade.title.innerText="Fireball (Mayhem)";
        fireupgrade.image.src=fireupgrade.mayhemballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description.innerText="New fire desc"+"click test="+click;
        
        fire.image.src=fireupgrade.x7ballimg; 
        fire.status="7x";
        incrementandset();
        console.log('fireball has been upgraded');

    }
    else if(click>=fireupgrade.$ && fireupgrade.level ==4){
        click -=fireupgrade.$;
        fireupgrade.$="Max";  
        fire.castcost*3;
        fire.val*=1.33;
        fireupgrade.level="max";
     
        fireupgrade.title.innerText="Fireball (Mayhem)";
        fireupgrade.image.src=fireupgrade.mayhemballimg;
        fireupgrade.price.innerText=fireupgrade.$;
        fireupgrade.description="New fire desc"+"click test="+click;
        
        fire.image.src=fireupgrade.mayhemballimg; 
        fireupgrade.level="max";
        incrementandset();
        console.log('fireball has been upgraded');

    }
    else{
        alert("Cant upgrade fireball");
        idj++;
    }      
}
//Checs click against upgreade cost//
function firecostcheck(){
    if (click < fire.upgradecost && mana.level == 0 ){
        fire.btn.style.opacity=0; 
        fire.upgrade="notready";
    }
    else if(click >= fire.upgradecost && mana.level>=1){
        fire.upgrade="ready";
        fire.btn.style.opacity=1;
    }
    else if (click >= fire.upgradecost){
    fire.btn.style.opacity=1;
    fire.upgrade="ready";
}}
//####################################################################//
//####################################################################//
//####################################################################//


//iceball//
function iceball(){
    if (Iceball.style.opacity >= 1 && mana.player >= 100){ 
     click += 50;
     level.value += 5; //Prestige increment//
     mana.player -= 100;//fee//
     display.innerText = click;
     setTimeout(function(){
     message.innerText = "Meteor Shower 5S - Cooldown";
     },50);
     Iceball.style.opacity = 0;
     setTimeout(function(){
         Iceball.style.opacity=("1");
         message.innerText = "Meteor can be used again";
     },5000);
    }  
    else if (Iceball.style.opacity < 1 && mana.player < 100) {
        console.log('Cast 50' + Avar);
    }
    else if (Iceball.style.opacity < 1) {
        console.log('Cast 50 failed -timer-');
    }
    else if (mana.player < 100) {
        console.log('Cast 50 failure -no mana-');
    }
    else {
        console.log('failed Meter-S -variable?-');
        return;    
    }
}
var Arcaneball = document.getElementById('arcaneball');
var param6 = 38 ;//arcanebase var//
var p6 = document.getElementById('button6txt');
var arcaneballcastcost=param6;
var arcaneballval =12;
function arcaneball(){
    if (Arcaneball.style.opacity >= 1 && mana.player >= arcaneballcastcost){ 
     click += arcaneballval;
     level.value += 5 ; //Prestige increment//
     mana.player -= arcaneballcastcost;//fee//
     display.innerText = click;

     setTimeout(function(){
     message.innerText = "Arcaneball - 8S Cooldown";
     },50);
     Arcaneball.style.opacity = 0;
     setTimeout(function(){
         Arcaneball.style.opacity=("1");
         message.innerText = "Arcaneball can be used again";
     },8000);
    }  
    else if (Arcaneball.style.opacity < 1 && mana.player < arcaneballcastcost) {
        console.log('Arcane ' + Avar);
    }
    else if (Arcaneball.style.opacity < 1) {
        console.log('Arcane failed -timer-');
    }
    else if (mana.player < arcaneballcastcost) {
        console.log(' Arcane failure -no mana-');
    }
    else {
        console.log('failed Arcane -variable?-');
        return;    
    }
}
 
//param 2 is auto upgrade variable, needs to round with *1.1//
//buyautos links butt//
// j//





function cps() {
    incrementandset();
}

//Prestige vars//



   


//Rage meter//

function ragemeter(){
    if (mana.player >= 10000 && click >= 20000 ){
        mana.player-=10000;
        click -=10000;
        startrage();
        console.log('rage has started');
}
    else{
        console.log('norage');
    }

function startrage(){
    rage++;
       
    setTimeout(function(){
    
        startrage();
    },1000);}
}
//Moving elements//


function openmenu(){
    closemenu();
    menu.fieldset.style.opacity=1;
    menu.fieldset.style.zIndex=1;
    menu.return.style.opacity=0;
    menu.return.style.zIndex=0;
}
//Open UOGRADES//
function flipupgtab() {
totalclicks++;
if (menu.upgT.style.opacity <= 0){
    closealltabs();
    openmenu();
    upgtabactive();
    console.log('Open Upgrade menu');
}
else {closemenu(); console.log('closefrom upg');}  }
//Open STATS//
function flipstatstab(){
if (menu.stats.style.opacity <= 0){
    closealltabs();
    openmenu();
    statstabactive();
    console.log('Open Stats');
}
else { closemenu(); console.log('close from stats');} }
//Open PRESTIGE//
function flipprestigetab(){
    if (menu.prestiget.style.opacity<=0){
        closealltabs();
        openmenu();
        prestigetabactive(); 
        console.log('Open Prestige');     

    }
    else{closemenu();console.log("menu close from stats");}}

function closemenu(){
    menu.exits++;
    menu.fieldset.style.opacity=0;
    menu.fieldset.style.zIndex=0;
    menu.return.style.opacity=1;
    menu.return.style.zIndex=1; 
    console.log("Closeall");
    closealltabs(); 
}
function closealltabs(){ 
    closeprestige();
    closeupgrades();
    closestats();
    
}
function closeprestige(){
    menu.prestiget.style.zIndex=0;
    menu.prestiget.style.opacity=0;
    menu.prestigetab.style.boxShadow="0";
    menu.prestigetext.style.color="#000";    }
function closeupgrades(){
    menu.upgT.style.opacity=0;
    menu.upgT.style.zIndex=0;
    menu.upgtab.style.boxShadow="0";
  
   
}
function closestats(){
    menu.statstab.style.backgroundColor="gray";
    menu.stats.style.opacity=0;
    menu.stats.style.zindex=0;
}
function upgtabactive(){
    menu.upgO++;
    menu.upgtab.style.boxShadow="  5px 10px 18px green ";

    menu.upgT.style.opacity = 1;
    menu.upgT.style.zIndex = 1;}
function statstabactive(){
    menu.statsO++;
    menu.statstab.style.backgroundColor="#000";

    menu.stats.style.opacity = 1;
    menu.stats.style.zIndex = 1;
}
function prestigetabactive(){
    menu.prestigeO++;
    menu.prestigetab.style.boxShadow="5px 10px 18px 10px  black";
    menu.prestigetab.style.backgroundColor="#090a00";
    menu.prestiget.style.zIndex = 1;
    menu.prestiget.style.opacity = 1;
}
 


// Jumper game.//
var character = 
document.getElementById("character"); 
var block = document.getElementById("block");
function jump () {
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    
}

//ifdead alert//
/*var checkDead = setInterval(function(){
    
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && characterTop>=180){
        block.style.animation = "none";
        block.style.display = "none";
        alert("    Insertion = True , Victory = False. Maybe you like penis up the bum, to each their own...");
        
    }  },10);
*/