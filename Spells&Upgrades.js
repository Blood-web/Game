var nr ="notready";
var Spelltext="";



// Main spell function//
// Fire, Arx, Ice, Earth//

function castspell(type, sub ){
    Spelltext=BM[type]['L'][0];
  
if(BM[type]['L'][3].classList.contains(Spelltext+"cooldown")) return alert(Spelltext+" Spell failed, Class list contains cooldown");
else if(BM[type]['M'][7].includes(nr))  return alert(Spelltext+" Contains not ready") 
else if(mana.player < BM[type]['M'][9] || mana.player==0){return alert(Spelltext+" Spell failed - No mana");}
 //Cast//
else if(!BM[type]['M'][7].includes(nr) && mana.player >= BM[type]['M'][9]){
incspellcounters(type);
console.log("Spell cast: " +Spelltext);
BoardS2=Spelltext+" Cast"; 
//Minus mana plus val//
mana.player-=BM[type]['M'][9];
click+= (BM[type]['M'][2]+1)*(prestige.level+100)*(Sorcerer.M[3]+1); 
cooldown(type);
console.error("Cast has passed");
    }

}

function incspellcounters(type){
    Sorcerer.M[4]++; Sorcerer.M[5]++;
    BM[type]['M'][5]++; BM[type]['M'][6]++;
}

function cooldown(type, timer){
    let str = (''.concat(type,'ballcooldown'))
    console.log('Cooldown Beggining: '+str);
    message.innerText=type+" Cooldown";
    document.getElementById(Spelltext+'img').classList.add((Spelltext+'cooldown'));
    if(type==undefined){ console.error("Cooldown type error");}
     window[str]();
}


var buyautos = document.getElementById('buyauto');

const DBZ = {
    lvl: 0,
    upg$: 600000,

    Utitle:document.getElementById('DBZtitle'),
    U$: document.getElementById('DBZ$'),
    Udesc: document.getElementById("DBZdesc"),
    Uimg:document.getElementById("DBZimg"),

}
const Shift= {
    lvl: 0,
    upg$: 600000,

    Utitle:document.getElementById('shifterytitle'),
    U$: document.getElementById('shiftery$'),
    Udesc: document.getElementById("shifterydesc"),
    Uimg:document.getElementById("shifteryimg"),

}


const mana = {
    level: 0, upg$: 0, player: 0, max: 1000,
    regen: 0, regentotal: 0,

    multilvl: 0, allspellsupg$: 0, smv: 1,
    baseupg: 0, baseupg$: 9999999,
    flow$: 0, flowlvl: 0,
    maxlvl: 0, maxinc: 100, maxupg$: 0,
    PRlvl: 0, reduction: 0, PR$: 0,
    duplicater: 0,
    runcount: 0,

    levelcounter: document.getElementById("manalevelcounter"),
    regencounter: document.getElementById("manaregencounter"),
    count: document.getElementById('playermanacount'),
    maxc: document.getElementById('manamaxcount'),
    img: document.getElementById("metergain"),
    btn: document.getElementById("manabutton"),
    master: document.getElementById("abvmana"),
    p2: document.getElementById("manaupgcost"),
    range: document.getElementById("manabar"),
    top: document.getElementById("manatop"),
    upgrade: "notready",
    status: "notready",
    truestatus: "",
}
const base10 = {
    lvl:0, upg$:0,  cap:0,
    Utitle:document.getElementById('b10title'),
    U$: document.getElementById('b10$'),
    Udesc: document.getElementById("b10desc"),
    Uimg:document.getElementById("b10img"),
}
const Manamax ={
    lvl:0, upg$:0,  cap:0,
    Utitle:document.getElementById('manamaxtitle'),
    U$: document.getElementById('manamax$'),
    Udesc: document.getElementById("MMupgdesc"),
    Uimg:document.getElementById("manamaximg"),
}
const Manaflow ={
    lvl:0, upg$:0,  cap:0,
    Utitle:document.getElementById('manaftitle'),
    U$: document.getElementById('manaf$'),
    Udesc: document.getElementById("manafdesc"),
    Uimg:document.getElementById("manafimg"),
}
const Manareduc ={
    lvl:0, upg$:0,
    Utitle:document.getElementById('Mredtitle'),
    U$: document.getElementById('Mred$'),
    Udesc: document.getElementById("Mreddesc"),
    Uimg:document.getElementById("Mredimg"),
}

const allspells ={
lvl:0, multi:0, upg$:0,
Utitle:document.getElementById("allspellstitle"),
Uimg:document.getElementById("allspellsimg"),
U$:document.getElementById("allspells$"),
Udesc:document.getElementById("allspellsdesc"),
}
const duplicator={
    lvl:0, upg$:0,
    Utitle:document.getElementById("dupetitle"),
    Uimg:document.getElementById("dupeimg"),
    U$:document.getElementById("dprice"),
    Udesc:document.getElementById("dupedesc"),
}

var blastauto;2
const blast = {
    lvl: 0, ULlvl: 0,
    upg$: 0, unlock$: 0,
    manainc: 0, clickinc: 0, rageinc: 0,
    castcount: 0, auto: "", TD:"",

    levelcounter: document.getElementById("manalevelcounter"),
    regencounter: document.getElementById("manaregencounter"),
    count: document.getElementById('playermanacount'),
    maxc: document.getElementById('manamaxcount'),
    img: document.getElementById("Mblast"),
    btn: document.getElementById("manabutton"),
    master: document.getElementById("abvMblast"),
    p: document.getElementById("mBprice"),
    top: document.getElementById("mBlasttop"),
    upgrade: "notready",
    status: "notready",
    truestatus: "",

    Utitle:document.getElementById('tdblast'),
    U$: document.getElementById('pblast'),
    Udesc: document.getElementById("blastdesc"),
    Uimg:document.getElementById("menuimgBlast"),
}

//RAGE//
var ragetimer;
const rage = {
    active: false,
    ULlvl:0, UL$:0,
    level: 0, regen: 0,
    player: 0, cap: 333,
    upg$: 6000000000,
    mana$: 100, reduction: 0, re$: 0, relvl: 0,
    runcount: 0,
    capcount: document.getElementById("ragecap"),
    runcounter: document.getElementById("rageruncounter"),
    cc: document.getElementById('rageupgcost'),
    mcc: document.getElementById('ragemanacost'),
    levelcounter: document.getElementById("ragelevelcounter"),
    count: document.getElementById('playerragecounter'),
    img: document.getElementById("rage"),
    top: document.getElementById("ragetop"),
    btn: document.getElementById("ragebutton"),
    master: document.getElementById("abvrage"),
    upgrade: "",
    status: "basicbitch",
    truestatus: "",
}
const rageUL={
    Utitle:document.getElementById('rageultitle'),
    U$: document.getElementById('rageulprice'),
    Udesc: document.getElementById("rageuldesc"),
    Uimg:document.getElementById("rageunlock"),
}
const Ragered={
    Utitle:document.getElementById('rageredtitle'),
    U$: document.getElementById('ragered$'),
    Udesc: document.getElementById("ragereddesc"),
    Uimg:document.getElementById("rageredimg"),
}

//Boxmain Spells//
//document.getElementById("Earthballimg").addEventListener("click",castspell(Earth,'Earth'));
document.getElementById("Fireballimg").addEventListener("click",castspell('Fire'));




//##########################################################################//
//######################## AUTO CLICKER ######################################//
//###################################################################################//

function buyauto() {
    BM['Main']['M'][4]++;
    if (click < BM['Auto']['M'][1]) {
        alert('no coins'); idj++;
    }
    else if (click > BM['Auto']['M'][1] && BM['Auto']['M'][0] == 0) {
        BM['Auto']['M'][0]++; click -= BM['Auto']['M'][1];
        myVar = setInterval(autocps, 1000);
        console.log("buyautoupgrade");
        updateautoclicker(); updateclick(); levelup();
    }
    else if (click > BM['Auto']['M'][1] && BM['Auto']['M'][0] != 0) {
        BM['Auto']['M'][0]++; click -= BM['Auto']['M'][1];
        console.log("buyautoupgrade");
        updateclick(); updateautoclicker(); levelup();
    }
}

function setstatusauto() {
    updateautoclicker();
    if (BM['Auto']['M'][0] != 0) {
        BM['Auto']['M'][8] = "running";
        BM['Auto']['L'][1].style.display ="";
        updatetile('Auto','+', BM);
    }
    else if (BM['Auto']['M'][8] == "basicbitch" && BM['Main']['M'][4] >= 100) {
        BM['Auto']['M'][8] = "unlocked";
        BM['Auto']['L'][4].style.opacity =1;
        BM['Auto']['L'][1].style.opacity = 0.9;
        BM['Auto']['L'][1].style.display ="";
        BM['Auto']['L'][3].src = "Logs/MenuMix/Clicker/ac.png";
    }
    else if (BM['Auto']['M'][8] == "basicbitch") {
        BM['Auto']['L'][1].style.display ="none";
    }
}

function updateautoclicker() {
    BM['Auto']['M'][1] = (BM['Auto']['M'][0] + 1 + 103) * (BM['Auto']['M'][0] + 1) * (BM['Auto']['M'][0] + 1) * 3.78;
    number = BM['Auto']['M'][1]; gennumberconverter(); 
    
}

function autocps() {
    updateautoclicker();
    auto.runcount++;
    //if upg do//
    
    if (MenuUpglvl.C[2] != 0 || duplicator.lvl != 0) {
        click += 1 + ((BM['Auto']['M'][0] + auto.helpertotal) * (BM['Main']['M'][3] + 1));
    }
    else { click += BM['Auto']['M'][0]; }
    updateclick();
}

//###############   MENU ##########//
// R1C6 - autoclick helper//

function upgradeautohelper() {
    updatemenuachelper();
    if (click >= auto.helper$ && MenuUpglvl.C[2] < 3) {
        MenuUpglvl.C[2]++;
    }
    else if (click < auto.helper$) { alert(nm); }
    updatemenuachelper();
}
var helpo = "swim";
function updatemenuachelper() {
    if (MenuUpglvl.C[2] == 0) { auto.help = 0; helpo = 10; auto.Uimg.src=Logs.acCD}
    else if (MenuUpglvl.C[2] == 1) { auto.help = 10; helpo = 5; auto.Uimg.src=Logs.ac}
    else if (MenuUpglvl.C[2] == 2) { auto.help = 5; helpo = 2; auto.Uimg.src=Logs.acauto}
    else if (MenuUpglvl.C[2] == 3) { auto.help = 2; helpo = 2; auto.Uimg.src=Logs.acM}
    auto.helper$ = (10000 * (MenuUpglvl.C[2] + 1)) * ((MenuUpglvl.C[2] + 1) ** (MenuUpglvl.C[2] + 1) * (10000 * (MenuUpglvl.C[2] + 1)));

    if (click < auto.helper$ && MenuUpglvl.C[2]==0){
        upgradehider(auto);
    } 
    else if(click>=auto.helper$ &&MenuUpglvl.C[2]==0){
        auto.Utitle.innerText="Unlock Auto Helper";
        auto.Uimg.src=Logs.ac;

    }
    else if (MenuUpglvl.C[2] < 3 &&MenuUpglvl.C[2]!=0) {
        auto.Utitle.innerText="Autoclick helper";
        auto.Udesc.innerText = "For every " + helpo + " autoclick levels get 1 helper";
        number = auto.helper$; gennumberconverter(); auto.U$.innerText = number + AU;
    }
    else {
        menumaxer(auto.U$, auto.Uimg); auto.Udesc = " Every two AC levels get 1 helper";
    } updateautoclicker(); 
}
//######################################################################################//
//#####################   MMMAAANNNAA     ###################//
//#########################################################//
//MANA//
function incrementandsetmana() {
    mana.player += (mana.level + prestige.level + (mana.baseupg * 10)) * (duplicator.lvl + 1); 
    mana.player = Math.floor(mana.player);
    mana.regentotal += (mana.level + (mana.baseupg) * 10) * (duplicator.lvl + 1);
    mana.runcount++;
  setstatusmana();
    mana.range.innerText = "";
    if (mana.player >= mana.max) {
        mana.player = mana.max;
        idj++;
        mana.range.style.color = "white"; mana.range.style.webkitTextStroke = "0.1vh black";
        mana.range.innerText = "Mana is full, You should probably cast something";
    }
    else if(mana.player ==NaN){
        mana.player=0; alert("Mana reset");
    }  
}
//***********************//
// Upgrade mana gain  needs work//
function mps() {
    if (manatimer != "setInterval(incrementandsetmana,1000)") { manatimer = setInterval(incrementandsetmana, 1000); mana.img.classList.add("manaCD"); }
}
function upgrademana() {
    if (click >= mana.upg$ && mana.level == 0) {
        click -= mana.upg$;
        mana.level++;

        mana.top.innerText = "+" + mana.level;
        mps();
    }
    else if (click >= mana.upg$) {
        click -= mana.upg$;
        mana.level++;
        incrementandsetmana();
        mana.top.innerText = "+" + mana.level;
    }
    else if (click <= mana.upg$) {
        console.log(" Upgrade failed " + click + "/" + mana.upg$);
    } else {
        console.log(Avar);
    }
}

function setstatusmana() {
    updatemana();
    manacostcheck();
}
function manacostcheck() {
    if (click < mana.upg$ && mana.level == 0) {
        mana.master.style.opacity = 0; mana.upgrade = "notready";
    }
    else if (click < mana.upg$) {
        mana.btn.style.opacity = 0.7;
    }
    else if (click >= mana.upg$) {
        mana.upgrade = "ready"; mana.master.style.opacity = 1; mana.btn.style.opacity = 1; mana.img.style.opacity = 1;
    }
    else if (click >= mana.upg$) {
        mana.btn.style.opacity = 1; mana.upgrade = "ready";
    }
}

function updatemana() {
    if(mana.player==NaN){mana.player=0;}
  mana.reduction = (mana.PRlvl * 10) + mana.PRlvl;
    mana.upg$ = (((mana.level ** mana.level) + 1000 / (mana.reduction + 1)) + 1);
    updatemenumanamax(); updatemenuallspells(); updatemenuMana();
    number = mana.upg$; gennumberconverter(); mana.p2.innerText = number;
    mana.regencounter.innerText = mana.regentotal;
    mana.levelcounter.innerText = mana.level;
    mana.range.style.width = (mana.player / mana.max * 100).toFixed(2) + "%";
    mana.range.value = mana.player;
    mana.count.innerText = mana.player;
    mana.maxc.innerText = mana.max;
}

//##########################################################//
//######################  Mana  ############################//
//##########################################################//

function unlockmanablast() {
    if (blast.ULlvl == 0 && click >= blast.unlock$) {
        click -= blast.unlock$; blast.ULlvl++;
        console.log("Manablast has been unlocked");
    }
    else if (blast.ULlvl < 3 && click >= blast.unlock$) {
        click -= blast.unlock$; blast.ULlvl++;
        console.log("Manablast max upgrade")
    }
    else if (click <= blast.upg$) { alert(nm); }
    updateMblast();
}
function upgradeMblast() {
    if (click >= blast.upg$) {
        click -= blast.upg$; blast.lvl++;
    }
    updateMblast();
}
function BLAST() {
    updateMblast();
    if (!blast.img.classList.contains("blastcooldown")) {
        blast.castcount++;
        mana.player += blast.manainc;
        if (blast.ULlvl >= 2) {
            click += blast.clickinc;
            rage.player + blast.rageinc;
        }
        setblastCD();
    } else if(blast.auto=="run"){
        boardS2="Failing Blast, Auto error";
    }
    else { BoardS2="Blast fail"; }
}
function setblastCD() {
    Logs.bl = blast.img.src;
    if (!blast.img.classList.contains("blastcooldown")) {
        blast.img.classList.add("blastcooldown");
        blast.img.src = Logs.MblastCD;
        clearblastCD();
    }
}
function clearblastCD() {
    if (blast.img.classList.contains("blastcooldown")) {
        setTimeout(function () {
            blast.img.classList.remove("blastcooldown");
            blast.img.src = Logs.bl;
        }, 10000);

    }
    else {
        alert("no blast to clear");
    }
}

function autoblast() {
    if (blast.auto != "run" && blast.ULlvl == 3) {
        blast.auto = "run"; updateMblast();
    }
    else {BLAST();}
}
function cancelautoblast() {
    blast.auto = "";
    blastauto = clearInterval(blast);
}
var MBMT=document.getElementById("MblastT");
var MBR=document.getElementById("MBR");

MBR.addEventListener("click", blastswitch);

function blastswitch(){
    current = MBR.classList;

    if(current=="mana"){
        MBR.classList="rage";
    }
    else if(current=="rage"){  MBR.classList="click"; 
    }
    else if(current=="click") {MBR.classList="mana";}
        blast.status=current; updateMblast();
}
function updateMblast() {
    blast.manainc = (1+blast.lvl) * (1 + prestige.level) * (BM['Main']['M'][3] + 1) * (blast.lvl+1);
    blast.clickinc = (1+blast.lvl) * (1 + prestige.level) * (BM['Main']['M'][3] + 1) * 1000*(1+blast.lvl);
    blast.rageinc = (blast.lvl * 5) * (1 + prestige.level);
    
    //Top bar Mblast//
    if(blast.status=="mana" || blast.status==undefined){
        MBR.onclick="blastswitch(rage)";
        number=blast.manainc;   gennumberconverter(); MBMT.innerText=number; 
    }
    else if(blast.status=="rage"){ MBR.onclick="blastswitch(click)";
    number=blast.rageinc;   gennumberconverter(); MBMT.innerText=number; 
    }
    else if(blast.status=="click"){MBR.onclick="blastswitch(mana)";
        number = blast.clickinc; gennumberconverter(); MBMT.innerText= number;  MBRT.innerText=blast.rageinc;
    }

    //if not CD check level and image//
    if (!blast.img.classList.contains("blastcooldown")) {
        if (blast.ULlvl <= 0) { blast.img.src = Logs.lc; }
        else if (blast.ULlvl == 1) { blast.img.src = Logs.blastimg1; }
        else if (blast.ULlvl >= 2) { blast.img.src = Logs.rageblast; }
    }
    else if( !blast.img.classList.contains("blastcooldown") && blast.auto=="run"){
        BLAST();
    }

    checkMblastcosts(); checkMblastunlock();
}

function checkMblastcosts() {
    blast.upg$ = (3 * (1 + blast.lvl * (1 + blast.lvl) * (blast.lvl + 100000) * blast.lvl + 30000) * blast.lvl *blast.lvl)+5000*(blast.lvl+1);
    number = blast.upg$; gennumberconverter();
    blast.p.innerText = number + AU;

    if (click >= blast.upg$) {
        blast.btn.style.opacity = 1;
        blast.upgrade = "ready";
    }
}

const elem = document.createElement("span");

function checkMblastunlock() {
    blast.unlock$ = 7 * (blast.ULlvl + 1540000) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1) * (blast.ULlvl + 1);
    number = blast.unlock$; gennumberconverter();
    //--updt - updt - chckifUL$= - runauto--//
    if (blast.ULlvl == 0 && click<blast.unlock$) {
        upgradehider(blast); blast.master.style.display="none";
        }
   else  if (blast.ULlvl == 0) {
        blast.Uimg.src = Logs.blastimg1;
        blast.U$.innerText = number + AU;
        blast.Utitle.innerText = "Unlock ManaBlast";
        blast.master.style.display = "none";
    }
    else if (blast.ULlvl == 1 && !blast.img.classList.contains("blastcooldown")) {
        blast.Utitle.innerText = "RGB Mana Blast";
        blast.Udesc.innerText = "Mana blast will generate a trio of Mana, Rage and Clicks ";
        blast.U$.innerText = number;
        blast.Uimg.src = Logs.rageblast;

        blast.img.src = Logs.blastimg1;
        blast.img.style.border = "2px blue, 2px blue, 2px red";
        blast.master.style.display = "";
    }
    else if (blast.ULlvl == 2 && !blast.img.classList.contains("blastcooldown")) {
        blast.Uimg.src = Logs.rageauto;
        blast.Utitle.innerText = "Auto-RGB Blast";
        blast.Udesc.innerText = "Mana blast will generate a trio of Mana, Rage and Clicks.. and cast itself! ";
        blast.U$.innerText = number;

        blast.img.src = Logs.rageblast;
        blast.master.style.display = "";
    }
    else if (blast.ULlvl == 3 && blast.U$.style.webkitTextStroke != "1px gold") { menumaxer(blast.U$, blast.Uimg); }
    else if (blast.ULlvl == 3) {
        blast.Uimg.src = Logs.blastmax;
        runMblastauto();
    }
}

//######################################################################################//
//#####################   FFIIRREE     ###################//
//#########################################################//
/*cast - setstatus - counter - upgrade - mupgrade $check*/

function Fireballcooldown(){
    BM['Fire']['M'][7] = "notready";
    setTimeout(function () {
            document.getElementById("Fireballimg").classList.remove("Fireballcooldown");
            BM['Fire']['M'][7] = "ready";
   }, 5000);
}
function setstatusfire() {
    tilecostcheck('Fire');
    BM['Fire']['M'][2]=BM['Fire']['M'][0]*(MenuUpglvl['S'][0]+1)*1000; 
       if (BM['Main']['M'][4] <= 15) {
       return BM['Fire']['L'][1].style.display = "none"; 
        //fireball not unlocked//
    }   
    else if (BM['Fire']['M'][0]==0 ) {
        //fire unlock - runs until cast//
        BM['Fire']['L'][1].style.display = "";
        BM['Fire']['M'][0]=1;         BM['Fire']['L'][3].src = Logs.Fx1;
        BM['Fire']['M'][7] = "x1";
    }

    else if (!BM['Fire']['L'][3].classList.contains("cooldown") && mana.player >= BM['Fire']['M'][9]) {
       //Main Ready//
        BM['Fire']['L'][3].style.opacity = 1;
        BM['Fire']['M'][7] = "ready";  
    }
    else if (BM['Fire']['L'][3].classList.contains("firecooldown") || mana.player <= BM['Fire']['M'][9]) {
        BM['Fire']['L'][3].style.opacity = 0.6;
        //absolutefalse//   
    }
    else {
        return console.log("failed to set fireball status");   
    }   

updatetile('Fire',"+",Sorcerer);
}


// Theres an Arc//
//####################################################################//
//#############              Arc             ############################//
//####################################################################//
BM['Arc']['L'][2].addEventListener("click", preArccast);
function preArccast() {
    if (BM['Arc']['M'][7] = "ready" && MenuUpglvl.S[1] == true) {
        Arcauto();
    }
    else { castspell(Arc); }
}


function Arcballcooldown() {
    if (MenuUpglvl.S[1] == false) {
        setTimeout(function () {
            BM['Arc']['L'][3].src = Logs.ArcCD; message.innerText = "Arcball - 1S Cooldown";
        }, 50);
        setTimeout(function () {
            BM['Arc']['L'][3].classList.remove("Arcballcooldown");
            BM['Arc']['L'][3].src = Logs.Arc; message.innerText = "Arcball can be used again";
        }, 1000);
    }
    else if (MenuUpglvl.S[1] == true) {
        setTimeout(function () {
            BM['Arc']['L'][3].classList.remove("Arcballcooldown");
        }, 1000);
    }
}


function setstatusArc() {
    BM['Arc']['M'][1] = (BM['Arc']['M'][0] + 1) * 1000 * (BM['Arc']['M'][0] + MenuUpglvl.S[1] + 1);
    BM['Arc']['M'][9] = 1 + BM['Arc']['M'][0] * (prestige.level + 1); 
    tilecostcheck('Arc');

    if (mana.level == 0) {return BM['Arc']['L'][1].style.display = "none";}

    BM['Arc']['L'][1].style.display = "";

    if (BM['Arc']['M'][7] == "" && mana.level != 0) { 
        BM['Arc']['M'][0]++;
        BM['Arc']['L'][3].src = Logs.Arc;
        BM['Arc']['M'][7] = "await";
        //1st unlock//
    }
    else if (BM['Arc']['M'][7] == "await" ) {
     if( mana.player > BM['Arc']['M'][9]){  BM['Arc']['L'][3].src = Logs.Arc;
        BM['Arc']['M'][7] = "ready";}
        return
    }
    else if (BM['Arc']['L'][2].classList.contains("cooldown") || mana.player <= BM['Arc']['M'][9]) {
        BM['Arc']['L'][3].opacity = 0.7;
        BM['Arc']['M'][7] = "notready";
        //absolutefalse either// 
    }
    else if (!BM['Arc']['L'][2].classList.contains("cooldown") && mana.player >= BM['Arc']['M'][9]) {
        //absolute true, no cd + mana//
        BM['Arc']['L'][2].style.opacity = 1;
        BM['Arc']['M'][7] = "ready"; 
        if (MenuUpglvl.S[1] == true && BM['Arc']['M'][7] != "run") { 
        BM['Arc']['L'][3].src=Logs.Arcau; BM['Arc']['M'][7] == "run" }
    }
    updatetile('Arc','-',Sorcerer);
}

function Arcballupgrade() {
    setstatusArc();
    if (BM['Arc']['L'][3].style.opacity >= 1 && click >= BM['Arc']['M'][1]) {
        click -= BM['Arc']['M'][1];
        BM['Arc']['M'][0]++;
        incrementandset();
    }
    else {
        console.log("Arcballupgfail: " + "click=" + click + " :cost=" + BM['Arc']['M'][1]);
        idj++;
    }
}
//######## MENU #######//

function Arcauto() {
    //Checks for auto then runs cast till mana out//
    console.log("Arcauto cycle");
    if (BM['Arc']['M'][7] != "running" && MenuUpglvl.S[1] == true) {
        alert("Arc auto beginth");
        Arcautotimer = setInterval(Arcballcast, 1200);
        BM['Arc']['M'][7] = "running";
        console.log("ärcaneautocast");
    }
    else {
        cancelArcauto();
    }
}
function cancelArcauto() {
    alert("Cancelling Arc auto");
    clearInterval(Arcautotimer);
    if (BM['Arc']['M'][7] = "running") { BM['Arc']['M'][7] = "run"; }
    console.log("ending auto cast");
}


//##############################################################################################################################//
//                 iceball                    //
//###########################################################################################//

function icecooldown() {
   
    setstatusice()
    setTimeout(function () {
        message.innerText = "Iceshower 10S - Cooldown";
    }, 60);
    setTimeout(function () {
        BM['Ice']['L'][3].classList.remove("Iceballcooldown");
        message.innerText = "ice can be used again";
    }, 10000);
}
function setstatusice() {
    BM['Ice']['M'][9] = Math.round((290 + BM['Ice']['M'][1] + BM['Ice']['M'][1]) * ((BM['Ice']['M'][1] + 1) / 2));
    BM['Ice']['M'][1] = (BM['Ice']['M'][1] + 1 + BM['Ice']['M'][1]) * 49000;

    tilecostcheck('Ice');

    if(BM['Ice']['M'][0]==0 && Sorcerer['M'][4] < 100  ){ return  BM['Ice']['L'][1].style.display = "none";  }
    
    BM['Ice']['L'][1].style.display = "";

    if (BM['Ice']['M'][0] < 1) {
        BM['Ice']['M'][0]++; 
        return;
        //unlocked//  
    }

     if (!BM['Ice']['L'][3].classList.contains("icecooldown") && mana.player >= BM['Ice']['M'][9]) {
        BM['Ice']['L'][3].style.opacity = 1;
        BM['Ice']['M'][7] = "ready";
        BM['Ice']['L'][3].src= Logs.i1;
    }
    else if (BM['Ice']['L'][3].classList.contains("icecooldown") || mana.player <= BM['Ice']['M'][9]) {
        BM['Ice']['M'][7] = "notready";
        BM['Ice']['L'][3].style.opacity = 0.7;
    }
    updatetile('Ice');
}


function updatemenuice(){
 /*   ice.wall$=(prestige.level+1)*333000;
    if(ice.walllvl==0 && click<ice.upg$){
        upgradehider2(13);
    }
    else if(ice.walllvl==0 &&click>=ice.upg$){
        MuT.TT13.innerText="Unlock \n IceWall";
        number =ice.wall$; gennumberconverter(); MuT.T$13.innerText=number+AU;
        MuT.Td13.innerText="Cast a 60 Second Shield";
        MuT.Ti13.src=Logs.iW;
    }
    else if(ice.walllvl==1){
        MuT.Ti13.src=Logs.iWM;
        menumaxer(MuT.T$13,MuT.Ti13);
    }*/
}
//###################################//
//                EARTH SPELL         //
//###############################//


var magnitude;
function generatemagnitude() {
   // magnitude = randomnum(BM['Earth']['M']agmin, BM['Earth']['M']agmax);
    console.log("mag +" + magnitude);
}
function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Earthballcooldown() {
    setTimeout(function () {
        document.getElementById("earthball").classList.remove("Earthballcooldown");
        BM['Earth']['M'][7] = "ready";
        message.innerText = "Earth cast ready";
    setstatusearth();
    }, 10000);
}
function setstatusearth() {
    BM['Earth']['L'][1].style.display="";
    
    //val//  
    BM['Earth']['M'][2]=(BM['Earth']['M'][0]+1)*1000*(BM['Earth']['M'][0]+1);
    tilecostcheck('Earth', BM);

    if (BM['Earth']['M'][7] == "" && mana.player >= BM['Earth']['M'][9]) {
        BM['Earth']['M'][7] = "castready";
        BM['Earth']['L'][1].style.display = "";
        BM['Earth']['L'][3].style.opacity = 1;
    }
    else if (mana.player >= BM['Earth']['M'][3] && !BM['Earth']['L'][3].classList.contains("earthcooldown")) {
        //Mana and NO CD//
        BM['Earth']['M'][7] = "castready";
    }
    else if (BM['Earth']['M'][0] < 1  ) {
        //Unlock//
        BM['Earth']['M'][7]="unlocked";
        BM['Earth']['M'][0]++;updatetile(Earth);
        BM['Earth']['L'][3].src = lockpng;
    }
    else if (BM['Earth']['L'][3].classList.contains("earthcooldown") || mana.player <= BM['Earth']['M'][3]) {
        //absoulte false == AVAR//
        BM['Earth']['L'][3].style.opacity = 0.9;
        BM['Earth']['M'][7] = "notready";
    }
    else {
        console.log("Earth failed to set status");
    }
}

//##########################################################//
//######################  RAAGEE ############################//
//##########################################################//
function rps() {
    incrementandsetrage();
}
function incrementandsetrage() {
    rage.player += rage.level;
    rage.runcount++;
    if (rage.player >= rage.cap) { rage.player = rage.cap; }
    else if (rage.player == null) { rage.player = 0; rage.level = 0; }
    setstatusrage();
}
function startrage() { if (rage.level >= 1) { clearInterval(ragetimer); ragetimer = setInterval(rps, 5000); } setstatusrage(); }
function upgraderage() {
    if (click >= MenuUpg$.C[7] && mana.player >= rage.mana$) {
        rage.level++;
        click -= MenuUpg$.C[7]; mana.max -= rage.mana$;

        setstatusrage();
    }
}
function setstatusrage() {
    updateragecounters();
    if (rage.level == 0) { rage.master.style.display = "none"; rage.btn.style.display = "none"; }
    else if (click >= MenuUpg$.C[7] && mana.max >= rage.mana$) {
        rage.upgrade = "ready"; rage.btn.style.opacity = 1; rage.btn.style.display = "";
    }
}
function updateragecounters() {

    if (rage.level == 1) {
        rage.master.style.opacity = 1; rage.master.style.display = "";
        MenuUpg$.C[7] = (rage.level + 1) * 1000000 * ((rage.level + 1) * (rage.level + 1)) * (rage.level + 1) * (10 * (rage.level + rage.level)); rage.img.style.display = "";
    }

    rage.top.innerText = '+' + rage.level;

    rage.mana$ = rage.level * 100 * (rage.level + rage.level) + (rage.level * 10) / (rage.reduction + 1);
    rage.capcount.innertext = rage.cap;
    rage.count.innerText = rage.player;
    rage.levelcounter.innerText = rage.level;
    rage.runcounter.innerText = rage.runcount;
    number = MenuUpg$.C[7]; gennumberconverter(); rage.cc.innerText = number;
    rage.mcc.innerText = rage.mana$;
}

//Rage meter//

function ragemeter() {
    if (mana.player >= 10000 && click >= 20000) {
        mana.player -= 10000;
        click -= 10000;
        startrage();
        console.log('rage has started');
    }
    else {
        console.log('norage');
    }

    function startrage() {
        rage++;

        setTimeout(function () {

            startrage();
        }, 1000);
    }
}





//################################################################//
//                  Menu Main Upgrades                           //
function buyupgrade(n, type){ 
console.log(n+type['text']);
if( type == null|| n == null){return alert('Buy upgrade failed to lock variable -type ::'+ type+" -n ::"+n);}

let char = type['text'].charAt(0);
if(click <= MenuUpg$[char][(n)]){return alert(nm);}
if(MenuUpglvl[char][(n)] || MenuUpglvl[char][(n)]=='Max'){return alert("Upgrade N/A - Maxxed");}

//Main
click -= MenuUpg$[char][(n)]; MenuUpglvl[char][(n)]++;
type['M'][4]++;  type['M'][5]++; 

//Check bank
if (type=="Banker"){
incandset(Banker,2); updateMenu(currenttype);
 return;
}
//Else    
incandset(Banker,1); incandset(type,100*(prestige.level+1));    
updateMenu(currenttype); 
}




//                  Upgrades - Clickster                          //


//11 Baseclick 0//
function upgbaseclick10(){
    if(click>= MenuUpg$.C[0] && MenuUpglvl.C[0]<1 ){
        buyupgrade(0,Clickster); }
    else if(click< MenuUpg$.C[0]) {alert(nm);}
    else if( MenuUpglvl.C[0]>=1) {alert(upgm);}
    updatemenuclick10();
}
function updatemenuclick10(){
    mo = (prestige.level+1)*10;
    
    MenuUpg$.C[0]=((MenuUpglvl.C[0]+1)*100)*(mo)*(prestige.level+1);
    
    MenuUpgM.C[0]=1;
    if(MenuUpglvl.C[0] >= MenuUpgM.C[0] ||MenuUpglvl.C[0] =='Max' ){ MenuUpglvl.C[0] =='Max'; return setUpgtile('fow', 11,"Base Click +"+mo, "Increases Base click Value by +"+mo, Logs.ptcM );}
    

    if(click<MenuUpg$.C[0] && BM['Main']['M'][3] <1){return setUpgtile('hidden',11,"Do the Bare Minimum");}  
   
    if(click >= MenuUpg$.C[0] && MenuUpglvl.C[0]==0){ setUpgtile('rev', 11,"Base Click +"+mo, "Increases Base click Value by +"+mo, Logs.ptc );}
}

// 12 Click Cooldown 1 //

function updateCcd(){
    MenuUpg$.C[1]=((MenuUpglvl.C[1]+MenuUpglvl.C[1]+1)*156)*10+4300000;
    if(click<MenuUpg$.C[1] && MenuUpglvl.C[1]==0){
        upgradehider2(12);
    }
    else if(click >= MenuUpg$.C[1]){
        number=MenuUpg$.C[0]; gennumberconverter();
        setUpgtile('rev',12,"No more CD!", "No more Cooldown on Click",Logs.Ccd );
    } 
}
//13 Auto unlock//
function unlockautoclicker(){
    if (click >= MenuUpg$.C[2] && MenuUpglvl.C[2]<3){
        buyupgrade(2, Clickster);
    }
    else if(click< MenuUpg$.C[2]){
        alert(nm);
    }
    else{alert(upgm);}
    updatemenuautoUL();
}
function updatemenuautoUL(){
    MenuUpg$.C[2]=((MenuUpglvl.C[2]+1)*10000)*(MenuUpglvl.C[2]+1);
if (click < MenuUpg$.C[2] && MenuUpglvl.C[2]==0){ return setUpgtile('hidden', 13, "Hatch a pet");}
else if (click >= MenuUpg$.C[2] && MenuUpglvl.C[2]==0){
    setUpgtile('rev',13,"Unlock Auto Scratcher", "Unlock the AutoScratcher", Logs.ac);
}
else if( MenuUpglvl.C[2]==1){
    setUpgtile('fow',13," Auto Scratcher", "Unlock the AutoScratcher", Logs.ac );
    }
}


// 14 Trio //
document.getElementById("Clickerimg").addEventListener("dblclick", Trioclick);

function Trioclick(){
    if(Clickster.Trio[2]==false && MenuUpglvl.C[3]>0){
  click+=(BM['Main']['M'][1]+1)*3; Clickster.Trio[2]=true;
  setTimeout(() => {
      Clickster.Trio[2]=false;
  }, Clickster.Trio[3]);
  alert("Triplle 2");
}   else if(Clickster.Trio[2]==true){
    BoardS2="Failed Tri click CD";
}
}
function unlocktrioclick(){
    if (click >= MenuUpg$.C[3]){
        buyupgrade(3, Clickster);}
    else {
        alert("Cannot Upgrade trio Click");
    }
    updatemenutrioclick();
}
function updatemenutrioclick(){
    MenuUpg$.C[3]=(MenuUpglvl.C[3]+1)*1000*170000*(prestige.level+1);
    number=MenuUpg$.C[3]; gennumberconverter();
    if (click <= MenuUpg$.C[3] && MenuUpglvl.C[3]<1){
       setUpgtile('hidden',14,"Reach 333 Total Clicks"); }
    else if(click >= MenuUpg$.C[3] && MenuUpglvl.C[3]==0){
        setUpgtile('rev' , 14 , "Unlock Tri Click" , "Score three hits on the chest at once! \n Cooldown: "+Clickster.Trio[3]/10+"Seconds",Logs.bweb); }
    else if(MenuUpglvl.C[3]==1 ){
        setUpgtile('fow' , 14 , "Tri Click" , "Score three hits on the chest at once! \n Cooldown:"+Clickster.Trio[3]/10+"Seconds",Logs.bweb); }
}
// 15 Lucky Click //
function unlockluckyclick(){
    if(click>= MenuUpg$.C[4]){
        buyupgrade(4, Clickster);

    }
    else if(click <= MenuUpg$.C[4]){
        alert(nm);
    }
}
function updatemenuLuckyclick(){
    MenuUpg$.C[4]=(MenuUpg$.C[4]+1)*10003*(MenuUpg$.C[4]+1)*(prestige.level+1);
    if(click <= MenuUpg$.C[4] && MenuUpglvl.C[4]<=0){
        setUpgtile('hidden',15,"Are you felling Lucky?");
    }
    else if(MenuUpglvl.C[4]==1){
        setUpgtile('rev', 15, "Lucky Click!",  "Every 50000, ", Logs.bweb )
    }
    else if(MenuUpglvl.C[4]==3){
        setUpgtile('fow', 15, "Lucky Click!",  "Every 50000, ", Logs.bweb );
    }
}

// 21 - SHIFTERY 5 //
function upgshiftery() {
    if (click >= MenuUpg$.C[5]) {
        buyupgrade(5, Clickster);
        StartShift();
    }
    menushiftupdate();
}

function menushiftupdate() {
    MenuUpg$.C[5]=(prestige.level+1)*555000000000;
    if (MenuUpglvl.C[5] == 0 && click< MenuUpg$.C[5]) {
      return  setUpgtile('hidden',21,"Increase Party points");
    } 
    else if (MenuUpglvl.C[5] == 0) {
        setUpgtile( 'fow' , 21 , "Unlock Shiftery" , MenuUpg$.C[5] , "Increase bonus by shifting through colours",Logs.shift, Sorcerer) 
    } 
    else if (MenuUpglvl.C[5] == 1) {   setUpgtile(21, "Shiftery",MenuUpg$.C[5],"Increase bonus by shifting through colours",Logs.shiftM, Sorcerer , 'fow')  }
}
//22 Chest buster 6//

function unlockdbzbuster() {
    if (click >= Mpres.dbz$ && MenuUpglvl.C[6] < 1) {
        click -= Mpres.dbz$; MenuUpglvl.C[6]++;
    }
    else if (click <= Mpres.dbz$) { alert(nm); }
    else { alert(upgm); }
    updatemenudbzbuster();
}
function updatemenudbzbuster() {
    MenuUpg$.C[6]= (MenuUpglvl.C[6] + 1) + 4000000 * (prestige.level+1) * 42; 

    if (prestige.level< 1 && MenuUpglvl.C[6]< 1){ return setUpgtile('hidden', 22 , "Prestige Once");}
    else if (MenuUpglvl.C[6]< 1) { setUpgtile('rev' , 22 , "Chest Buster" , " The chest weakens as you get closer to prestige, giving you more gold", Logs.chestv3); } 
    else if (MenuUpglvl.C[6] >= 1) { setUpgtile('fow' , 22 , "Chest Buster" , " The chest weakens as you get closer to prestige, giving you more gold \nCurrent:"+difference(prestige.prog,prestige.req), Logs.chestv3 ); }
}
function BZbuster() {
    if (prestige.unlocked == true || MenuUpglvl.C[6] > 0) {
        //SHUFFLES Background//
        difference(prestige.prog, prestige.req);
        //IF ready//
        if (prestige.unlocked == false) {
            prestige.bar.style.display = "none";
            menu.return.style.backgroundImage = Mpres.Dlock
        }
        else if (result <= 25) { menu.return.style.backgroundImage = Mpres.D1; }
        // if less than 30%//
        else if (result <= 50) { menu.return.style.backgroundImage = Mpres.D2; }
        //if less than 60%//
        else if (result <= 75) { menu.return.style.backgroundImage = Mpres.D3; }
        // under 100% //
        else if (result <= 99) { menu.return.style.backgroundImage = "url(../goldpile.jpg)"; }
        else if (result >= 100) {
            menu.return.style.backgroundImage = "url(../bg.jpg)";
        } console.log(result + " BBZ diff");
    }
    else if (prestige.unlocked == false || MenuUpglvl.C[6] == 0) { BoardS2 = "Failed DBZ"; }

}
function difference(a, b) {
    result = ((a / b) * 100).toFixed(2);
}

// 23  RAGE  7 //
function unlockrage() {
    if (click >= MenuUpg$.C[7] && MenuUpglvl.C[7] < 2) {
       buyupgrade(7, Clickster);
        updateRageMenu(); setstatusrage(); startrage();
    }
    else { alert(upgm); }
}
var rm = Ragered.U$;
var rmimg = Ragered.Uimg;
//Rage-Menu//
//23 //
function updateRageMenu() { 
    //21 Unlock//
    MenuUpg$.C[7]=(prestige.level+1)*600000000*(MenuUpglvl.C[7]+1)**(MenuUpglvl.C[7]+1);
    if(MenuUpglvl.C[7]==0 && click<MenuUpg$.C[7]){
        upgradehider2('hidden',23,"Get angry");
    }
    else if (MenuUpglvl.C[5] == 0) {
        setUpgtile('rev' , 23 , "Unlock Rage" ,  "Unlock rage generator and new upgrades!",Logs.rageB );}
    else if (MenuUpglvl.C[5] == 1) {
        setUpgtile('fow' , 23 , "Rage" , "Unlock rage generator and new upgrades!",Logs.rageB, );
    }
    //Reduction//
    MenuUpg$.C[9] = (MenuUpglvl.C[9] + 1) * 1543209 * +800000 * (1 + rage.level);
     if (MenuUpglvl.C[9] ==0 && click<MenuUpg$.C[9]) {setUpgtile('hidden', 25 , "Unlock Rage");}
    else if (MenuUpglvl.C[9] < 9 && MenuUpglvl.C[7]!=2) {Ragered.Utitle.innerText="Rage "+AU+"cost Reduction"; Ragered.Uimg.src=Logs.rageReda; number = MenuUpg$.C[9]; gennumberconverter(); Ragered.U$.innerText = number +AU; }
    else if(MenuUpglvl.C[9]<9 &&MenuUpglvl.C[7]==2){ setUpgtile('rev', 25 , "Rage Cost Reduction", MenuUpg$.C[7],"Rage cost reduction",Logs.rageRedaM,"ragemanacostupg()")}
    else if (MenuUpglvl.C[9] >= 9 &&MenuUpglvl.C[7]==1) {Ragered.Utitle.innerText="Rage Cost Reduction"; Ragered.Uimg.src=Logs.rageRedaM; menumaxer(rm, rmimg); }
    else if (MenuUpglvl.C[9] >= 9 &&MenuUpglvl.C[7]==2) {Ragered.Utitle.innerText=""; Ragered.Uimg.src=Logs.rageRedbM; menumaxer(rm, rmimg); }
}

// 24 rage manacost//
function ragemanacostupg() {
    if (click >= MenuUpg$.C[9] && MenuUpglvl.C[9] < 9) {
        click -= MenuUpg$.C[9]; MenuUpglvl.C[9]++;
    }
    else if (click <= MenuUpg$.C[9]) { alert(nm); idj++; }
    else { alert(upgm); updatemenuragereduction(); } updatemenuragereduction();
}


//## MENU 2 ## //
//Sorcerer Menu UPG//



//Button 11 fireball multi 0Sorcerer// 
function updatemenuFireball() {
    MenuUpg$.S[0] = (MenuUpglvl.S[0] + 1) + 5400 * (MenuUpglvl.S[0] + 1) ** (MenuUpglvl.S[0] + 1);
 
    if( MenuUpglvl.S[0] == 0&& click<=MenuUpg$.S[0]) {
        setUpgtile('hidden',11,"Get more $$$");
        BM['Fire']['L'][3].src=Logs.Fx1;
    }
    if (MenuUpglvl.S[0] == 0) {
        setUpgtile('rev', 11, "FireSplit (x2)","Your fire splits and deals twice as much damage" + "\n(Slight Mana increase)",Logs.Fx2, );
        BM['Fire']['M'][7] = "x1";BM['Fire']['L'][3].src=Logs.Fx1;
    }
    else if (MenuUpglvl.S[0] == 1) {
        setUpgtile('rev', 11, "FireTrio (x3)","Your fire splits and deals Thrice! as much damage" + "\n(Slight Mana increase)",Logs.Fx3, );
        BM['Fire']['M'][7] = "x2";
        BM['Fire']['L'][3].src=Logs.Fx2;
    } else if (MenuUpglvl.S[0] == 2) {
        setUpgtile('rev', 11, "FireBarrage (x5)","Your fire now splits 5 times and deals 5x as much damage" + "\n(Small Mana Cost increase)",Logs.Fx5, );
        BM['Fire']['M'][7] = "x3";BM['Fire']['L'][3].src=Logs.Fx3;
    }
    else if (MenuUpglvl.S[0] == 3) {
        setUpgtile('rev', 11, "FireStorm (x7)","Your fire becomes uncontrollable and deals twice as much damage" + "\n(Moderate Mana cost increase)",Logs.Fx7, );
        BM['Fire']['M'][7] = "x5";
        BM['Fire']['L'][3].src=Logs.Fx5;}
    else if (MenuUpglvl.S[0] == 4) {
        setUpgtile('rev', 11, "FireMayhem (x?)","All control is lost, Fireball casts between 9 and 19 orbs an will decide to cast itself for free occasionally" + "\n (Large Mana cost increase)",Logs.FxM,);
        BM['Fire']['M'][7] = "x7";
        BM['Fire']['L'][3].src=Logs.Fx7;
    } else if (MenuUpglvl.S[0] == "max") {
        setUpgtile('fow', 11, "FireKing (x?)","Fireball casts between 9 and 19 orbs and will occasionally cast itself for free \n Enjoy the Chaos! ",Logs.Fxmax, );
        BM['Fire']['M'][7] = "xmayhem";BM['Fire']['L'][3].src=Logs.Fxmax;
    } 
}

//Button2 Arc Auto //
// Button 2 Arcauto//

function updatemenuArcauto() {
MenuUpg$.S[1] = 10e12;

if (MenuUpglvl.S[1]==0 && click<MenuUpg$.S[1]){return setUpgtile('hidden',12,"Cast Arc spell X more times");}
if (MenuUpglvl.S[1] == 0){ return setUpgtile('rev',12,"🔒 Arc Auto", "Arc spell Automatically casts itself",Logs.Arcau)}
setUpgtile('fow',12,"Arc Auto", "Arc spell now Automatically casts itself",Logs.Arcauto);
}

//14 Earth
function updatemenuearth() {
    Sorcerer.Earth[0] = (Sorcerer.Earth[1]+1) * 15 + 100;
    //earthupg.magmincounter.innerText = BM['Earth']['M']agmin;
    if(Sorcerer.Earth[1] ==0 && click< Sorcerer.Earth[0]){
        setUpgtile('hidden',14, "Cast 14 nature spells");
    }
    else if(Sorcerer.Earth[1]==0){
        number= Sorcerer.Earth[0]; gennumberconverter();
        setUpgtile('rev',14,"Unlock EarthQuake", "Be one with Nature",Logs.equake);
    }
    else if(Sorcerer.Earth[1]==1){
        setUpgtile('fow',14,"EarthQuake", "Be one with Nature",Logs.equake);
    }
}

//15 All spells S4 //

function updatemenuallspells() {

    mana.smv = (((mana.multilvl / 10 + mana.smv) + mana.smv) / 10);
    mana.smv.toFixed();
    Sorcerer.SpellMulti[2]=(MenuUpglvl.S[4]/10);

    document.getElementById("allspellscounter").innerText = player.allspells + 1;
    MenuUpg$.S[4] = (MenuUpglvl.S[4] + 1) * 1000000 * (MenuUpglvl.S[4] + 1);
    if(menu.currentupgtab=="Sorcerer"){
    if (click < MenuUpg$.S[4] &&MenuUpglvl.S[4]==0){
        setUpgtile('hidden',15," Cast x more spells");
    }
    else if (click>=MenuUpg$.S[4]||MenuUpglvl.S[4]< 99) {
        setUpgtile('rev',15,"All Spells","Increases the power of all spells by "+Sorcerer.SpellMulti[2]+"%",Logs.allspells, ); 
} }
}
// Sorcerer Row2 //

// button1 manaregen +10;//
function menuplus10manaupg() {
    if (click >= MenuUpg$.S[5] && MenuUpglvl.S[5] != 1) {
        MenuUpglvl.S[5]=1;
        incrementandsetmana();
}
    else {
      alert(upgm);   idj++;
    } updatemenuMana();
}

function updatemenuplus10mana(){
    MenuUpg$.S[5] = (MenuUpglvl.S[5]+1)*52*1000*(prestige.level+1);  

if(MenuUpglvl.S[5] ==0 && click< MenuUpg$.S[5]) return setUpgtile('hidden',21,"Cast 100 spells");

if(MenuUpglvl.S[5] ==0 && click>=MenuUpg$.S[5]){ return setUpgtile('rev',21," Base regen++", 'Increases base mna regen by +10',Logs.mana)}

}
// ROW 2 C @ ManaOverlflow//
//level1 overflow, lvl2, unlock with rage level5//
function unlockmanaoverflow() {
    if (click >= Manaflow.upg$ && Manaflow.lvl < 1) {
        click -= Manaflow.upg$;
        Manaflow.lvl++; menumaxer(Manaflow.U$, Manaflow.Uimg);
    }
    else if (Manaflow.lvl < 2 && click >= Manaflow.upg$) {
        click -= Manaflow.upg$;
        Manaflow.lvl++;
    }
    updatemanaoverflow();
}
function setmanaflow() {

}

function updatemanaoverflow() {
    MenuUpg$.S[8]=(prestige.level+1)*5060+4000000000;
    if (Manaflow.lvl == 0 && mana.player<1000) {  return upgradehider2(24,"Reaach 100 mana");}
    
    if (Manaflow.lvl == 0) { setUpgtile(24,'Unlock Mana Overflow',0,"Converts Excess Mana to gold",Logs.Mflow1,Sorcerer);
        Manaflow.upg$ = (Manaflow.lvl + 1) ** (Manaflow.lvl + 1) * 10000000;
        number = Manaflow.upg$; gennumberconverter(); Manaflow.U$.innerText = number;
        Manaflow.Udesc.innerText = "Unlocks Mana overflow, Converting excess mana into 💰";
    }
    else if (Manaflow.lvl == 1 && rage.level < 5) {  Manaflow.Uimg.src=Logs.Mflow2; }
    else if (Manaflow.lvl == 1 && rage.level >= 5) {
        Manaflow.upg$ = (Manaflow.lvl + 1) ** (Manaflow.lvl + 1) * 10000000000;
        number = Manaflow.upg$; gennumberconverter(); Manaflow.U$.innerText = number;
        Manaflow.U$.backgroundColor = "none"; Manaflow.U$.style.boxShadow = "0";
    }
}
// row2 button 5 Max mana inc//
function menumaxmanainc() {
    if (click >= MenuUpg$.S[6]) {
        buyupgrade(6, Sorcerer);
        updatemenumanamax();
        updatetext();
    }
    else {
        console.log(nm); alert('nm'); idj++;
    }
}
function updatemenumanamax() {
    mana.max = (MenuUpglvl.S[6] * 100) + 1000;
    MenuUpg$.S[6] = 2500 * ((MenuUpglvl.S[6] + 1) * 2.3) * (MenuUpglvl.S[6] + 1);
if(menu.currentupgtab=="Sorcerer"){
    if (click <MenuUpg$.S[6] &&MenuUpglvl.S[6]<1){
       return setUpgtile('hidden',25,"Reach 100 total mana regen per second"); }
    else if (MenuUpglvl.S[6]>0){
        setUpgtile('rev',25,"Increase Max mana", "Manamaximum" + '\n' + "Current:" + mana.max + '\n' + " New:" + (mana.max + mana.maxinc), Logs.ManaMax);}
    }
}
//Row 3 c3 Manacost reduction//

function menuupgmana$() {
    if (click >= mana.PR$ && mana.PRlvl < 9) {
        mana.PRlvl++; click -= mana.PR$; updatemana(); 
       
    } else if (click <= mana.PR$) { alert(nm); }
    else { alert("Menu UPG MANA PRICE REDUCTION ERROR"); }
    updateMenu('mana','upg$');
}
function updatemenuMana() {
    mana.PR$ = ((((mana.PRlvl * 1000) + 1) * 2 * (mana.PRlvl + 1)) * 1000000000) * mana.PRlvl * mana.reduction + (100000000000000000 * ((mana.PRlvl + 1) ** (mana.PRlvl + 1))) + (100000000000000000000 * (mana.PRlvl + 1)) * 2;
    number = mana.PR$; gennumberconverter(); Manareduc.U$.innerText = number + '💰';
    Manareduc.Udesc.innerText = "Decrease mana upgrade cost  Current:" + mana.reduction + '%' + " Next:" + (mana.reduction + 11) + " Max:99";
    MenuUpg$.S[5]=40000000*(prestige.level+1)*(prestige.level+1);
   /* if(menu.currentupgtab=="Sorcerer"){
    if (MenuUpglvl.S[5] == 0 && click<MenuUpg$.S[5]) {
        upgradehider2(21,"Reach 10 Mana per second");}
    else if (MenuUpglvl.S[5] == 0 &&click>MenuUpg$.S[5]) { base10.Uimg.src=Logs.manareg; number = MenuUpg$.S[5]; gennumberconverter(); base10.U$.innerText = number + '💰'; }
    else if (MenuUpglvl.S[5] == 1) { base10.Uimg.src=Logs.manaregM; menumaxer(base10.U$, base10.Uimg);  }
   
    if (mana.PRlvl ==0 &&click<mana.PR$) {
        upgradehider(Manareduc);
}
    else if (mana.PRlvl <9) {
        Manareduc.Utitle.innerText="Mana Cost Reduction";
        Manareduc.Uimg.src=Logs.manared;
    }
    else if (mana.PRlvl == 9) {
        Manareduc.Uimg.src=Logs.manaredM;
        mana.reduction == 99; menumaxer(Manareduc.U$, Manareduc.Uimg);
        Manareduc.Udesc.innerText = "Decreases Mana Upgrade cost by " + mana.reduction + '%';
    }}*/
}





var dupe$ = 100e24;
function unlockduplicater() {
    if (click >= dupe$) {
        click -= dupe$; duplicator.lvl++;
        menumaxer(duplicator.U$, duplicator.Uimg); menuUpdDuper();
    }
    else if (click < dupe$) { alert(nm); }
    else { alert(upgm); }
}
function menuUpdDuper() {
    MenuUpg$.S[11]= (MenuUpglvl.S[11]+1) * 1037 * (prestige.level+1) * 56 + 20000000000;

    if (duplicator.lvl == 0 &&click<dupe$){
        setUpgtile('hidden',35," Reach Prestige 10 - DUPER");
    }
    else if (duplicator.lvl == 0 && click >= dupe$) { 
        setUpgtile('rev',35," Unlock Duplicator ", "Multiply Click and spell income by X5!",Logs.dupe); 
    }
    else if (duplicator.lvl >= 1) { 
        setUpgtile('fow',35," Duplicator ", "Multiply Click and spell income by X"+MenuUpglvl[11]*5,Logs.dupeM); 
    }
}
