
//Dev var//

idjcounter = 0;
idj = idjcounter;
let AU = '💰';
var setcore;
var h6 = document.getElementById("h6");
function scorepersecon() {
    setcore = click;
    setTimeout(function () {
        setcore -= click; number = setcore * -1; gennumberconverter(); if (number < 0) { number = 0; } h6.innerText = (number) + ":Coins per second";
        scorepersecon();
    }, 1000);
}

[]

function setstatus() {
//autoclicker//
    setstatusauto();
//MANA//
    setstatusmana();
//Rage//
    setstatusrage();
    //FIRE//
    setstatusfire();
//Arc//
    setstatusArc();
    //ICE//
    setstatusice();
    //EARTH//
    setstatusearth();
}
//sHORTHAND STRINGS//
var Avar = "Critical failure";
var nm = "No money, purchase failed";
var upgm = "Upgraed Maxed!!";




// FUNCTIONS //

function save() {
    saveclick();
    saveprestige();
    savespellstate()

    console.log("Saved state");
}
function saveclick() {
    localStorage.setItem("score", click); localStorage.setItem("tc", BM['Main']['M'][4]);
}
function saveprestige() {
    localStorage.setItem("Pstatus", JSON.stringify(prestige.truestatus)); console.log(localStorage.getItem("Pstatus").length)
}
function savespellstate() {
    savemana();
}
function savemana() {
    localStorage.setItem("Mlevel", mana.level);
    localStorage.setItem("Mruncount", mana.runcount);
    localStorage.setItem("Mmax", mana.max);
    localStorage.setItem("Maxupglevel", MenuUpglvl.S[6]);
}
function load() {
    loadprestige();
    loadclick();
    loadmana();
    console.log('Load state');
}
function loadclick() {
    click = localStorage.getItem("score");
    BM['Main']['M'][4] = localStorage.getItem("tc");
}
function loadprestige() {
    prestige.level = tokenspilt[0]; prestige.req = tokenspilt[2];
    prestige.prog = tokenspilt[1]; updateprestigecounter();
}
function loadmana() {
    mana.level = tokenspilt[3]; mana.runcount = tokenspilt[4];
    mana.max = localStorage.getItem("Mmax"); MenuUpglvl.S[6] = localStorage.getItem("Maxupglevel");
    updatemana();
}
//DEV//
var scheat;
var cheat = 1000000;
function pluscheat() {

    click += cheat;
    cheat = cheat * 2 + cheat * (cheat + 1);
    mana.player+=mana.max;
    scheat = cheat;
    number = scheat; gennumberconverter(); p8.innerText = number + '💰';
    document.getElementById("sampsbutton").innerText = "+" + number;
    message.innerText = "Cheat used! +" + number;

    console.log('çheat used - 10000');
    levelup(levelupvar = 1000);
    incrementandset();
    incrementandsetmana();
    updatetext();
}
var levelupvar = 0;
function levelup(levelupvar) {
    prestige.prog += levelupvar;
    BM['Main']['M'][4] += levelupvar;
    clicker.Ptc += levelupvar;


    if (prestige.prog >= prestige.req) {
        prestige.prog = prestige.req;
        prestige.boo = 1;
    }
    else {
        return;
    } document.getElementById("prestigebar").value = prestige.prog; updateprestigecounter();
}


function updatetext() {
    updateprestigecounter();
    updateclick();
    updateautoclicker();
    setstatusearth();
}







//DEV, sep by **//


function selftestini() {
    selftest();

    setTimeout(function () {
        selftestini();
    }, 1000);
}
var boardS;
var boardS2;

//Logs totalclickcount,score,prestigelvl,rage//
var lastMessage="";
var xm=0;
function selftest() {
    setstatus();
    updatetext();

    if(messages.innerText!=""){
        if(lastMessage==messages.innerText.val){ x++;
            if(lastMessage!=messages.innerText){}
    }
    if(xm=5){messages.innerText="";}
}
if(Debug==true){
    console.log("%cDebug stats:\n" +  "%cSetstatus:Selftest: \n"  +
        '\n' + boardS+ '\n'
        + '\n'+boardS2 + 
        "\n%cMenu:"+menu.open +" Submenu:"+ menu.currentupgtab
        +"\n\n :Clicker:= " + BM['Main']['M'][8]+
        "\n\n :Autoclicker:=" +BM['Auto']['M'][8]
        + "\n \n :Multiplier =" + BM['Main']['M'][3] + " AutoClvl =" + '\n'

        + '\n' + ":Spells:" + '\n' +
        "Spellmultiplier " + player.allspells + '\n' +
        " :Mana:= " + mana.truestatus + '\n'
        + '\n' + " :Fireball= " + BM['Fire']['M'][8]+ '\n'
        + '\n' + " :Arc:=" + BM['Arc']['M'][8]+ '\n'
        + '\n' + " :Ice:=" +BM['Ice']['M'][8] + '\n'
        + '\n' + " :Earth:=" +BM['Earth']['M'][8] + '\n'
        + '\n' + ":Prestige= " + prestige.unlocked + " " + prestige.truestatus + '\n'
        + '\n ' + prestigeboard + '\n'

        + '\n' + " :Rage=  relvl :" + MenuUpglvl.C[9]
        +'\n\n:Cat status:'+'\n :Clickster:= '+ Clickster['M']
        +'\n :Sorcerer:= '+Sorcerer['M']
        +'\n :Banker:= '+Banker['M']        ,
        " font-size:50px; font=weight:bold; color:red; text-decoration:underline;  background-color:#00000055;",
        "color:green",'color:white; ');
}}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(ndom() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function scorenumberconvertor() {
    if (click <= 99999) {
        score = click;
    }
    else if (click < 1000000) {
        score = (click / 1000).toFixed(2) + "K";
    }
    else if (click < 1000000000) {
        score = (click / 1000000).toFixed(2) + "M";
    }
    else if (click < 1000000000000) {
        score = (click / 1000000000).toFixed(2) + "B";
    }
    else if (click < 100000000000000) {
        score = (click / 100000000000).toFixed(2) + "T";
    }
    else if (click < 10000000000000000) {
        score = (click / 10000000000000).toFixed(2) + "Qua";
    }
    else if (click < 1000000000000000000) {
        score = (click / 1000000000000000).toFixed(2) + "Qui";
    }
    else if (click < 10000000000000000000) {
        score = (click / 10000000000000000).toFixed(2) + "Sex";
    }
    else if (click < 10000000000000000000000) {
        score = (click / 10000000000000000000).toFixed(2) + "Sep";
    }
    else if (click < 10000000000000000000000000) {
        score = (click / 10000000000000000000000).toFixed(2) + "Oct";
    }
    else if (click < 10000000000000000000000000000) {
        score = (click / 10000000000000000000000000).toFixed(2) + "Non";
    }
    else if (click < 10000000000000000000000000000000) {
        score = (click / 10000000000000000000000000000).toFixed(2) + "Dec";
    }
    else { score = click };
}
function gennumberconverter() {
    if (number < 1e4) { number = number; }
    else if (number < 0) { number = 0; }
    else if (number < 1e6) { number = (number / 1000).toFixed(1) + "K"; }
    else if (number < 1e9) { number = (number / 1000000).toFixed(1) + "M"; }
    else if (number < 1e12) { number = (number / 1000000000).toFixed(1) + "B"; }
    else if (number < 1e15) { number = (number / 1000000000000).toFixed(1) + "T"; }
    else if (number < 1e18) { number = (number / 1000000000000000).toFixed(1) + "Qua"; }
    else if (number < 1e21) { number = (number / 1000000000000000000).toFixed(1) + "Qui"; }
    else if (number < 1e24) { number = (number / 1000000000000000000000).toFixed(1) + "Sex"; }
    else if (number < 1e27) { number = (number / 1000000000000000000000000).toFixed(1) + "Oct"; }
    else if (number < 1e400) { number = (number / 1000).toFixed(1) + "wow"; }
    else if (number == undefined) { BoarsS = "gen number fail"; }
}




function getcost(cost, multi) {
    multi = Di.all;
    if (multi == "0") {
        cost = cost;
    }
    else if (multi != "0") {
        cost = (cost * multi) + ((cost * multi) / 10);
    }
    number = cost; gennumberconverter();
    return number;
}
function setpmulti() {
    Di.pUscale++;
    if (Di.pUscale == "1") {
        Di.all = "10";
    }
    else if (Di.pUscale == "2") {
        Di.all = "100";
    }
    else { Di.pUscale = "0"; Di.all = "1"; }
    updp$multi();
}
function updp$multi() {
    pmulti.innerText = ("Buy " + 'x' + Di.all);
}



//##########################################################################//
//######################## CLICKER ######################################//
//###################################################################################//
BM['Main']['L'][3].addEventListener("mousedown", clickunder);
BM['Main']['L'][3].addEventListener("mouseup", clickover);

function clickunder() {
 
if (rage.active == false) {
        BM['Main']['L'][3].src = Logs.mcCD;
        boardS = "Player is holding click";
    }
else if (rage.active == true) {
        BM['Main']['L'][3].src = Logs.mcCD;
        boardS = "Player is holding click";
        setTimeout(function () {
            rage.chargecount++;
        }, 100);
    }

}
function clickover() {
    boardS = "Player has released click";
    BM['Main']['L'][3].src = Logs.Ccd;
    generateclickico();
    mainclick();
}
//CLicker MAIN//
function mainclick() {
    incrementandset();
    incandsetPrestige(1);
    setstatus();
    selftest();
    updatetext();

}
//Main inc function, reg click, log score//
//incprestigebar//
function incrementandset() {
    click += (BM['Main']['M'][2]) ;
    click = Math.floor(click);
    incandset(Clickster,1);
    updateclick();
}

function clickreset() {
    click = 0;
    click+=startcoins;
 updateclick();
}
function updateclick() {
    if (click == null) { click = 0; }
    //$//
    BM['Main']['M'][1]=2*(BM['Main']['M'][0]+1)*3+12*(prestige.level+1)*(BM['Main']['M'][0]+BM['Main']['M'][0])+13 ;
    BM['Main']['M'][2] =Math.floor((BM['Main']['M'][0]) * (rage.active + 1) * (prestige.level+1) * 1.01);
   
    BM['Main']['M'][5] = ((BM['Main']['M'][3]+1)) * (BM['Main']['M'][1]+1);    
    updatetile(['Main'], '+',BM);
    scorenumberconvertor(); clc.scorecounter.innerText = score + AU;
//img//
    if (rage.active == true && boardS != "Player is holding click") {
        BM['Main']['L'][3].src = Logs.mcrage;
        BM['Main']['L'][3].style.background = "white";
        BM['Main']['L'][3].border = "3px solid "; BM['Main']['L'][3].style.borderColor = "red";
    }
    else if (rage.active == false && boardS != "Player is holding click") {
        BM['Main']['L'][3].src = Logs.mc;
        BM['Main']['L'][3].style.background = "repeating-linear-gradient(40deg, blue,red)";
        BM['Main']['L'][3].border = "2px solid black";
    }
    //bkg/counters//
    BZbuster();
    clc.tcounter.innerText = BM['Main']['M'][4];
    clc.multicounter.innerText = BM['Main']['M'][2];
    clc.true = "Upg$/Lvl/Multi/PTC/TC/: "+clicker.M.join("/");
}

function generateclickico(){clc.ico.style.display="block";
    clc.ico.innerText="+"+BM['Main']['M'][2];
    clc.ico.style.marginLeft=randomnum(50,500)+"px";
    clc.ico.style.marginTop=randomnum(50,500)+"px";
    clc.ico.backgroundColor="red";
    removeclickico();
}
var clcM;
function removeclickico(){
if (clcM!="CD"){
clcM="CD";
setTimeout(() => {
clcM="";    clc.ico.style.display="none";
}, 1000);}
}


//MENU LOWER BOX//
var bmbuy=0;

//BUY//
function boxmainbuy(type,sub,multi){
if (multi==undefined || multi=="0"){multi=1;}

if(click>=(BM[type]['M'][1]*multi)){
click-=BM[type]['M'][1]*multi;
incupgcounters(type,sub);
}
else if(click<BM[type]['M'][1]){
    if(bmbuy>0){
   return alert("Upg failed, no money");
}}
bmbuy++;
}

function incupgcounters(type,sub){
    BM[type]['M'][0]++; BM[type]['M'][5]++;
    if(sub!="Banker"){sub['M']+10;
    updateclick();
}}

var nr ="notready";

function updateallboxmain(){

    updatetile('Main',"+",BM);
    updatetile('Auto',"+", BM);
    updatetile('Fire',"-",BM);
    updatetile('Arc',"-",BM);
    updatetile('Ice','-',BM);
}

function updatetile(type, op, sub){
   if(sub== undefined ){sub='Spells';}
BM[type]['M'][8]=["Level:"+BM[type]['M'][0]+" Upg$:"+BM[type]['M'][1]+" Val:"+BM[type]['M'][2]+" CurrentUpg:"+BM[type]['M'][3]+
    " TotalUpg:"+BM[type]['M'][4]+" CurrentCasts:"+BM[type]['M'][5]+" TotalCasts:"+BM[type]['M'][6]+" Status:"+BM[type]['M'][7]+
    " UpgReady:"+BM[type]['M'][10]+" Cast$:"+BM[type]['M'][9]];

//If not lvl 1, no display//
if(BM[type]['M'][0]<1){
    return BM[type]['L'][1].style.display="none";
}
    if(op==undefined){op="NotDefined";}
    number = BM[type]['M'][1]; gennumberconverter();
    BM[type]['L'][5].innerText = number+AU;

    BM[type]['L'][2].innerText=op+BM[type]['M'][2];
    if(click>=BM[type]['M'][1]){
        BM[type]['L'][4].style.opactiy==1;
    }
    else if(click<BM[type]['M'][1]){
        BM[type]['L'][4].style.opactiy==0.7;
    }  
}

//Checs click against upgreade cost//
function tilecostcheck(type,extraUpgVariable) {
    BM[type]['M'][1]=(BM[type]['M'][0]+1)*100*(prestige.level+1);
    BM[type]['M'][9]=((BM[type]['M'][0]+prestige.level + 1)*1) + 10;
    if(extraUpgVariable!=undefined){BM[type]['M'][1]*extraUpgVariable; }

BM[type]['L'][4].style.display = "inline-block";
    if (BM[type]['M'][5] == 0 || mana.level == 0) {
        BM[type]['L'][4].style.display = "none";
        BM[type]['M'][10] = false;
        BM[type]['L'][2].innerText="";
        return
    }
    
    if (click < BM[type]['M'][1]) {
        BM[type]['L'][4].style.opacity = 0.7;
        BM[type]['M'][10] = false;
        return
    }
    else if (click >= BM[type]['M'][1]) {
        BM[type]['L'][4].style.opacity = 1;
        BM[type]['M'][10] = true;
    }
}


//RESET//
function resetboard() {
    //Keepers//

    //TC, Prestige, spells cast, other trackers//
    try {
        prestigeboard.fill(0);
        Object.keys(BM).forEach(key => BM[key] = 0);
    }
    catch (err) {
        alert("Critical prestige failure, reloading window");
        window.location.reload(true);
    }
    alert(Object.values(BM) + "\n" + Object.values(prestige));
    updatetext();
}

//#########################################//
//Prestige//
function incandsetPrestige(val){
    if(prestige.unlocked==true){
        if(val==undefined){
            prestige.prog++;
        }
        else{prestige.prog+=val;}
    } updateprestige();
}
function ULprestige() {
    if (click >= prestige.unlock$) {
        click -= prestige.unlock$; prestige.bar.style.display = "";
        prestige.unlocked = true; flipprestigetab(); startflash(2);
    }
    else { alert(nm); }
}

function instprestige() {
    levelup(prestige.req);
}


//P inc +1, Multiplier x Plevel //
function Prestige() {
    if (prestige.prog >= prestige.req && prestige.unlocked == true) {
        //..Level UP prestige//
        prestige.unlocked = false; prestige.prog = 0; prestige.level++;
        prestige.multi += prestige.clickval;
        resetboard();
        updateprestige();
        console.log(BM['Main']['M'][3] + ' level = ' + prestige.level + '. user has prestiged');
    }
    else {
        console.log(prestige.level + 'insufficient for prestige');
    }
}
function updateprestige() {
    updateprestigecounter();
    updateprestigemenu(); updateprestext();
}

function updateprestigecounter() {

    if (prestige.level == null) { prestige.level = 0; }
    if(prestige.unlocked==false && PresForev.lvl==1){ prestige.menuOverlay.style.display="block";  prestige.unlocked=true;}
    //lock//
    if (prestige.unlocked == false) {
        prestige.menuOverlay.style.display="none"; 
        prestige.unlock$ = (prestige.level + 1) * (prestige.level + 1) * (prestige.level + 1) * 1000000000 * (prestige.level + prestige.level + 1) * (prestige.level + 1);
        number = prestige.unlock$; gennumberconverter();
        prestige.prog = 0; prestige.bar.style.display = "none";
        if (click >= prestige.unlock$ && !prestige.overlay.classList.contains("PrestFlash")) {prestige.menuOverlay.style.display="block";  startflash(2); }
    }
    //Unlock//
    else if (prestige.unlocked == true && menu.dbzlvl == 0) {
        prestige.menuOverlay.style.display="block"; 
        prestige.clickval = Math.round(clicker.Ptc / (prestige.level + 1) / 1000);

    }
    //unlcok++shiftery//
    else if (prestige.unlocked == true && menu.dbzlvl >= 1) {
        prestige.menuOverlay.style.display="block"; 
        BZbuster(); prestige.bar.style.width = result + "%";

    }
    //sub checks//
    if (prestige.prog >= prestige.req && prestige.unlocked == true) {
        prestige.prog == prestige.req;
        startflash(1);
    }

    updateprestext();
}

function updateprestext() {
    //True//
    prestige.truestatus = prestige.level + " " + prestige.prog + " " + prestige.req + " " + prestige.totalPP + " " + prestige.PPinc + " " + prestige.PPmenu;
    //COST CALC//
    prestige.req = ((prestige.level + 1) * 1057 * (prestige.level + 1) * (prestige.level + 1));


    prestige.pF.innerText = "Prestiging increases base click value by:" + (14 + ((clicker.Ptc / prestige.level) / 13330)).toFixed(2);
    //BAR//
    prestige.levelcount.innerText = prestige.level; prestige.progcount.innerText = prestige.prog;
    prestige.bar.value = prestige.prog; difference(prestige.prog, prestige.req); prestige.bar.style.width = result + "%";
    prestige.bar.max = prestige.req;
    prestige.capcount.innerText = prestige.req; prestige.multi = Math.round((prestige.level + 1) * 0.14) / 100;
    //prestige TAB//
    prestige.stat.innerText = prestige.prog + "/" + prestige.req; document.getElementById("bannerlevel").innerText = prestige.level;
    //
}

function updatemenuprestigeUL(){
    if (click<prestige.UL$ && PresForev.lvl!=1){
        upgradehider(PresForev);
    }
    else if(PresForev.lvl==1){
        menumaxer()
    }
}

var pflash;
function startflash(type) {
    if (type == 1) {
        pflash = setInterval(flashprestige, 1000);
    } else if (type == 2) {
        flashprestigeUL();
    }
}
function flashprestige() {
    console.log("flashprrestige");
    if (prestige.unlocked == true && prestige.bar.style.backgroundColor != "goldenrod") {
        prestige.bar.style.boxShadow = "gold 2px 2px 6px"; prestige.bar.style.backgroundColor = "goldenrod"; prestige.bar.border = "2px dashed gold";
        prestige.overlay.style.boxShadow = "0 10px 20px #ffd700, 0 6px 6px #daa520 ";
        prestige.overlay.style.backgroundColor = "#ffd70055";
    }
    else if (prestige.bar.style.backgroundColor == "goldenrod" && prestige.unlocked == true) {
        prestige.bar.style.boxShadow = "4px 4px 8px goldenrod"; prestige.bar.style.backgroundColor = "gold";
        prestige.overlay.style.boxShadow = "0 6px 10px #daa520, 0 10px 15px #ffd700 ";
        prestige.overlay.style.backgroundColor = "#ffd70055";
    }
}

function flashprestigeUL() {

    if (prestige.unlocked == false && click>= prestige.unlock$) {
       if (!prestige.overlay.classList.contains("PrestigeFlash")){
         prestige.overlay.classList.add("PrestigeFlash");} }
    else if (prestige.unlocked == false && click<=prestige.unlock$) {
       prestige.overlay.classList.remove("PrestigeFlash");
    }
    else if (prestige.unlocked == true || prestige.bar.style.display != "none") {
      prestige.overlay.classList.remove("PrestigeFlash");
    }
}
function prestigeboardinc(id, price, oard) {
    prestigeboard[id]++;
    click -= price;
    localStorage.setItem("boardstate", JSON.stringify(prestigeboard));
    var storedboard = JSON.parse(localStorage.getItem("boardstate"));
    console.log(storedboard);
}


var pd;
var p = 0;

//#################################//
//#### DIAMONDS ####//
//####################//
function updateDiamondsMenu(){
    updateGmine();
 
}

function updateGmine(){
    MenuUpg$.B[4]=(prestige.level+1)*100*1000000; 
    
if (gem.mineLvl==0 && click<MenuUpg$.B[4] ){ number=MenuUpg$.B[4]; gennumberconverter();
    upgradehider2(15,"Acquire a Diamond");
}
else if(gem.mineLvl==0 && click>= MenuUpg$.B[4]){

    number=MenuUpg$.B[4]; gennumberconverter();
    gemupgsheet.U$.innerText=number+AU; gemupgsheet.Uimg.src=Logs.Gmine;
    gemupgsheet.Utitle.innerText="Unlock \n GemMine";
}
else if(gem.mineLvl==1){
    menumaxer(gemupgsheet.U$, gemupgsheet.Uimg);
    gemupgsheet.Uimg.src=Logs.GmineM;
    gemupgsheet.Utitle.innerText="GemMine";
    }
}

//##############################################################################//
//stat Card move//

function movecard() {
    var card = document.getElementById("card");
    var cardwrap = document.getElementById("cardwrap");
    var cardbutton = document.getElementById("cardbutton");
    if (cardbutton.style.opacity =="0.9") {

        cardbutton.style.float = "left";
        cardwrap.style.backgroundColor = "#00000000";
        card.style.border = "0"; card.style.display = "none";
        cardbutton.style.transform = "rotate(-90deg)"; cardbutton.style.height = "10vh";
        cardbutton.style.width = "10vh";
        cardbutton.style.opacity = 1;
    }
    else {
        cardwrap.style.left = "1vw"; card.style.opacity = 1; cardwrap.style.backgroundColor = "#faf"; card.style.border = "ridge 2px aqua "; card.style.display = "contents";
        cardbutton.style.opacity = 0.9; cardbutton.style.height = "5vh"; cardbutton.style.width = "5vh"; cardbutton.style.transform = "rotate(90deg)"; cardbutton.style.float = "right";
    }
}


//##############################//
//############### MENU ##########//
//##############################//
//Menu// 
var textsdf;
document.getElementById("Katzeimg").addEventListener("click", switchHeadmenu);
function switchHeadmenu(){

if(menu.headmenu.style.backgroundColor!="gold"){
    menu.headmenu.style.backgroundColor="gold";
    menu.headmenuframe.style.display="inline-block";
    }
else if(menu.headmenu.style.backgroundColor=="gold"){
    menu.headmenu.style.backgroundColor="white";
    menu.headmenuframe.style.display="none"; 
    }
}



function updateMenu(menu, variant){   

 updatemenuscore();     
MuT.D2.style.display="none";
MuT.D3.style.display="none"; 
document.getElementById("upgradetable").classList="hiddentab "+menu;
if(menu=="Clickster" ||menu==undefined){  MuT.D2.style.display=""; 
  
    updatemenuclick10(); updateCcd(); updatemenuautoUL(); updatemenutrioclick(); updatemenuLuckyclick(); 
    ;
    if(Clickster.M[0]>=1){
    MuT.D2.style.display="";
    menushiftupdate(); updatemenudbzbuster(); updateRageMenu();menushiftupdate(); updatemenudbzbuster(); 
    }
    else if (Clickster.M[0]>5) {
        MuT.D3.style.display="";
       menuUpdDuper();   updateRageMenu()
}           
    updatemenuprestigeUL();  }
else if (menu=="Sorcerer"){  
    updatemenuFireball(); updatemenuArcauto(); updatemenuice(); updatemenuearth(); updatemenuallspells();   
    
    if (Sorcerer.M[0]>=1){
    MuT.D2.style.display="";
    updatemenuMana(); updatemanaoverflow(); updatemenumanamax();  updatemenuMana(); 
    }
    else if (Sorcerer.M[0]>5) {
        MuT.D3.style.display="";
    }    
}
else if(menu=="Banker"){if (variant=="all"||variant==undefined){
 //updateGmine(); 
}}
else if(menu=="click"){if(variant=="all"||variant==undefined){ updatemenuachelper();menuUpdDuper();   }}
else if(menu=="misc"){if(variant=="all"||variant==undefined){   updatemenudbzbuster(); menushiftupdate(); ;
        }} 
updateMenucat(); 
}





//Open - close//
var boo;
function openmenu(sar) {
    if (menu.o==false){
    menu.fieldset.style.display = "inline-block";
    menu.fieldset.style.zIndex = 2; 
    menu.return.style.display="none"; menu.o=true;
    }
    else if(menu.o==true){alert("Menu try launch");}
    if (sar=="stats"){ 
        flipstatstab(); closeupgrades();
    }
    if (sar=="menu"){ 
        flipmenutab(); closeupgrades();
    }
    else if(sar=="upg"){
        flipupgtab();closeprestige();
    }
    else if(sar=="Prestige"){
        flipprestigetab();closeupgrades();
    }
}
function Resetmenufield() {
    closemenu(); openmenu();
}

//##########################//
//ENND UPGRADES//
//Menuclaer//


function closemenu() {
    if(menu.o==true){
    menu.exits++;
    menu.fieldset.style.zIndex = -1;
    menu.fieldset.style.display = "none";
    menu.return.style.display="";
    
    menu.o = false; closealltabs();
    menu.open="";
    setstatus();
    console.log("Closeall");
    }
}
function closealltabs() {
    closeprestige();
    closeupgrades(); closeupgtabs();
    closemenutab('Stats'); closemenutab('Menu');
}

function updatemenuscore(){
    document.getElementById("menuscore").innerText=score+AU;
}

//Open menu //

function flipmenutab(){
    if (menu.open!="menu"){
        menu.menuTab++;
        menutabactive();
        console.log("Open Menu");
    }
    else {closemenu();console.log("menu close from menu");}
}

function menutabactive() {
    if(menu.open!="menu"){
    closealltabs();
    menu.Menutab.classList.add("selected");
    menu.open = "menu";
    menu.MenutabL.style.display = "";
    menu.MenutabL.style.opacity = 1; 
    }
}


function closemenutab(type) {    
    menu[type+'tab'].classList="";
    menu[type+'tabL'].style.opacity = 0;
    menu[type+'tabL'].style.zindex = 0;
    menu[type+'tabL'].style.display = "none";
}
//else{console.log("failed to close menu" +type);}}

//Open UpGRADES//
function flipupgtab(tab) {
    closealltabs();
    BM['Main']['M'][4]++; 

if (tab==undefined) { tab='Clickster';}
    //Closes if open //
if(menu.open=="upg" && tab==menu.currentupgtab ) { 
        closemenu(); console.log('closefrom upg'); return alert("UPGRADE STILLOPEN"); 
    }

menu.upgTab++;    
console.log('Open Upgrade menu'+tab); currenttype=tab;
upgtabactive(tab);   
menu.upgtab.classList.add(selec);

}

function upgtabactive(tab) {
    menu.upgT.style.display = ""; menu.subdiv.style.display = "inline";
    
   if(menu.currentupgtab==tab){
       return closemenu();
    }
    menu[tab].classList.add(Sselec);
    menu.open = "upg"; menu.currentupgtab=tab; 
    updateMenu(tab);
}  

function closeupgrades() {
   hidekatze();
    if(menu.open=="upg"){
    menu.upgtab.classList="";
    menu.upgT.style.display = "none";
    menu.upgT.style.zIndex = 0;
    menu.upgtab.style.boxShadow = "0";}
    closeupgtabs();
}
function closeupgtabs() {
   
    menu.subdiv.style.display="none";
    menu.currentupgtab="none";
    menu.Clickster.classList="";  menu.Sorcerer.classList="";  menu.Banker.classList="";
}


 //Open STATS//
function flipstatstab() {
    if (menu.open!="stats") {
        menu.statsTab++;
        statstabactive();
        console.log('Open Stats');
    }
    else { closemenu(); menu.exitsTab++; console.log('close from stats'); }
}


function statstabactive() {
    if(menu.open!="stats"){
    closealltabs();
    CatstatGenerator("Clickster");
    menu.Statstab.classList.add("selected");
    menu.open = "stats";
    menu.StatstabL.style.display = "";
    menu.StatstabL.style.opacity = 1; menu.StatstabL.style.zIndex = 2;
}}

//My first functioning for loop//
// Creates Cat stat bars //
var KStext= "Lvl"+prestige.lvl+" jdjdj";




function CatstatGenerator(){
checkcatprogress();
var cat = ["Clickster","Banker","Sorcerer","Banker1"];
var KStext=["Totalclicks:"+Clickster.M[5]+" Totalclicks this prestige:"+Clickster.M[4]
];
var KStextlevel = [Clickster.M[0],Banker.M[0],Sorcerer.M[0]];
var KSprog = [Clickster.M[1],Banker.M[1],Sorcerer.M[1]];
var KSreq =  [Clickster.M[2],Banker.M[2],Sorcerer.M[2]];
var KSbonus =[Clickster.M[3],Banker.M[3],Sorcerer.M[3]];

for (let i = 0; i < cat.length; i++) {lorom = cat[i];
var DivText=document.createTextNode(cat[i]);
var StatDiv= document.createElement("div"); var NewDiv= document.createElement("div");
var StatImg=document.createElement("img");  var Span=document.createElement("span");    
const BR=document.createElement("br");
    StatDiv.setAttribute("id", "StatDiv"+i);
    StatDiv.setAttribute("class", "StatDiv");
    StatImg.setAttribute("src", "Logs/Kat/"+cat[i]+".png");
    StatImg.setAttribute("class","statimgs");
    //img & title //
    StatDiv.appendChild(StatImg);StatDiv.appendChild(BR);
    StatDiv.appendChild(DivText);StatDiv.appendChild(BR.cloneNode());
    
    DivText =  document.createTextNode("Level: "+ KStextlevel[i]);
    StatDiv.appendChild(DivText);StatDiv.appendChild(BR.cloneNode());
    
    Span.setAttribute("class","spanbar");
    NewDiv.setAttribute("id", "Kspan"+[i]);
    NewDiv.setAttribute("class", "Kspan");
    difference(KSprog[i],KSreq[i]);
    NewDiv.style.width=result+"%";
    Span.appendChild(NewDiv);
    StatDiv.appendChild(Span);

    DivText =  document.createTextNode("Bonus: "+ KSbonus[i]+"%");
    StatDiv.appendChild(DivText);StatDiv.appendChild(BR.cloneNode());

    document.getElementById("stats").appendChild(StatDiv);

} 

}


/*function updatesubMenucat(cat){
    if(cat==null){cat="Banker";}
    menu.currentSubCat=cat;
    menu.KatRTT.innerText=menu.currentSubCat;
    checkcatprogress();
    sorc="Logs/Kat/"+menu.currentSubCat+".png";
    menu.KatRI.src=sorc;

    if(cat=="Banker"){
    difference(Banker.M[1],Banker.M[2]);
    menu.KatRT.innerText=" Lvl: "+Banker.M[0]+'\n'+"Bonus: +"+Banker.M[3]+"%";
    menu.KatRbar.style.backgroundColor="gold";
}
 menu.KatRbar.style.width=result+"%";

}*/



function updateMenucat(){
    checkcatprogress();
if(menu.open=="upg"){
const c=menu.currentupgtab; let z;
menu.KatLTT.innerText=c;  menu.KatLI.src="Logs/Kat/"+c+"/0Kat.png";
if(menu.currentupgtab=="Clickster"){  z = Clickster; menu.KatLbar.style.backgroundColor="gold";}
if(menu.currentupgtab=="Sorcerer"){ z = Sorcerer;  menu.KatLbar.style.backgroundColor="blue";}    
if(menu.currentupgtab=="Banker"){z = Banker;  menu.KatLbar.style.backgroundColor="goldenrod";}  

//updatesubMenucat();/
    showkatze();
  
console.log(c+''+z);
difference(z['M'][1],z['M'][2]);
z['M'][3] = z['M'][0]*10
menu.KatLT.innerText=" Lvl: "+z['M'][0]+'\n'+"Bonus: +"+z['M'][3]+"%";  
menu.KatLbar.style.width=result+"%";
    }
}

function hidekatze(){
    menu.subdiv.style.display="none";
    document.getElementById("MenuKat").style.opacity="0";
}
function showkatze(){
    document.getElementById("MenuKat").style.opacity="1";
    menu.subdiv.style.display="";
}




//Menu tile set/ 
//Self call UH@only
function upgradehider2(num, des){
    if(des==undefined){des="???";}
    document.getElementById("TT"+num).innerText="???";
    document.getElementById("Ti"+num).src=Logs.lc;
    document.getElementById("T$"+num).innerText="???";
    document.getElementById("Td"+num).innerText="\n "+des;
    document.getElementById("Td"+num).classList.add("reqdesc");
    menumaxer(num,'rev');
}

let syox="";
let newnum=0;

function setUpgtile(mode, num, t1,t3,img){ 
    
    //Check Critical Requirements
    if (mode=="hidden"){ return upgradehider2(num,t1); }
    if (img==null){img = Logs.lc;}

    //True Number
    newnum = MuT['O'+num]; 

    document.getElementById("Td"+num).classList.remove("reqdesc");
    document.getElementById("TT"+num).innerText=t1;
    document.getElementById("Ti"+num).src=img;
    number = MenuUpg$[currenttype.charAt(0)][newnum]; gennumberconverter();
    document.getElementById("T$"+num).innerText=number+AU;
    document.getElementById("Td"+num).innerText=t3;
    syox=currenttype['text'];

   //Set function, (0, Clickster)
    MuT["Ti"+num].setAttribute('onclick', "buyupgrade("+newnum+','+currenttype+")");
    
    //Recursion
    if(mode==undefined || mode =="rev"){menumaxer(num, 'rev');}
    else if(mode=="fow"){menumaxer(num, mode);
    }
    if(Debug==true){
    console.log('Upgrade tile ' +num+ " '"+t1+"' "+ 'has been set'
    +'\nLevel: '+MenuUpglvl[currenttype.charAt(0)][newnum]+' Ugrade cost:'+number );
    }
}

function checkcatprogress(){
const cat =[Clickster,Sorcerer,Banker];

    Clickster.M[2]=(Clickster.M[0]+1)*1000*(Clickster.M[0]+1);
    Sorcerer.M[2]=(Sorcerer.M[0]+1)*1000*(Sorcerer.M[0]+1);
    Banker.M[2]=(Banker.M[0]+1)*10*(Banker.M[0]+1)**(Banker.M[0]+1);

     for (let i =0; i < cat.length; i++){
       const c = cat[i];
        console.log(c['text']+" :: "+c['M']);
        c['M'][3]=c['M'][0]*10;
        if(c['M'][1] >= c['M'][2]){
           c['M'][0]++; c['M'][1]=0;
           console.log(c['text']+" Has leveled up!");
        }
    }
}

//Menu MAXXER
function menumaxer(num, mode) {
    if(mode=="fow"|| mode ==undefined){
    document.getElementById("Td"+num).border="2px solid gold";
    document.getElementById("Ti"+num).style.boxShadow="2px 17px 28px gold";
    document.getElementById("T$"+num).classList="MaXXed";
    document.getElementById("T$"+num).innerText="Upgrade-Maxxed!";
} else if(mode=="rev"){
    document.getElementById("Td"+num).border="none";
    document.getElementById("Ti"+num).style.boxShadow="none";
    document.getElementById("T$"+num).classList="";
}}


 


//#####################################//
function incandset(type, val){
    number=val;
    type['M'][1]=type['M'][1]+number;

    checkcatprogress();
}

//
//Open PRESTIGE//
var p;
function flipprestigetab() {
    updateprestige();
    if (menu.open != "Prestige" && prestige.unlocked == true) {
        p = "Prestige"; prestigetabactive(p);
        console.log('Open Prestige');
    }
    else if (prestige.unlocked == false && menu.open != "Prestige") {
        p = "Unlock Prestige"; prestigetabactive(p);
        console.log("Open prestige UL");
    }
    else if(menu.open=="Prestige") { alert("double open prestig"); closemenu(); console.log("menu close from stats"); }
}

var selec = "selected";
var Sselec= "subselected"
function closeprestige() {
    if (menu.open=="Prestige") {
        menu.ptab.classList="";
        Mpres.table.style.display = "none";
        Mpres.table.style.zIndex = 0; Mpres.div1.style.display = "none"; Mpres.div2.style.display = "none"; Mpres.div3.style.display = "none";
    }
    else {
        console.log("cant  closing prestige"); menu.ptab.classList.toggle(selec);
    }
}






function prestigetabactive(p) {closealltabs();
    menu.ptab.classList=selec;
    menu.open = "Prestige";
    updateprestigecounter();updateprestigemenu();resetprestigeTabs();
    Mpres.table.style.zindex = 2; Mpres.table.style.display = "";
    Mpres.btn.style.display = "";
    if (p == "Prestige" && prestige.unlocked == true) {

        Mpres.title.classList = "presSelected";
        Mpres.ptitle.innerText = "You currently have \n" + prestige.prog + '/' + prestige.req;
        Mpres.btn.innerText = "Prestige";
        Mpres.div2.style.display = "";
    }
    else if(p==null){}
    else if (p == "Unlock Prestige" || prestige.unlocked == false) {
        Mpres.title.classList = "presSelected";
        p = "ULprestige()"; Mpres.btn.setAttribute("onClick", "ULprestige();");
        number = prestige.unlock$; gennumberconverter(); Mpres.btn.innerText = "Unlock" + '\n' + number + AU;
        Mpres.ptitle.innerText = "It Will Cost " + " (" + number + AU + ') ' + " to unlock prestige, \n";
        Mpres.div1.innerText = "Upon doing so you will begin to gain prestige power \n" +
            "(Your Prestige value will be rectoactively counted)";
        Mpres.div1.style.display = "";
    }
    else if (p == "u" && prestige.level >= 1) {
        Mpres.div1.style.display = ""; Mpres.div3.style.display = "";
        Mpres.div1.innerText = "Spend your Prestige Points on Powerful Upgrades";
        Mpres.Ubtn.classList = "presSelected";
    }
    else if (p == "s") {
        Mpres.Sbtn.classList = "presSelected"; Mpres.div1.style.display = ""; Mpres.div1.innerText = "Track your prestige progress:";
        Mpres.div2.style.display = "";
    }
}
function clearmpresdiv(){

  Mpres.div1.style.display = "none";
  Mpres.div2.style.display = "none";
  Mpres.div3.style.display = "none";}
function resetprestigeTabs(){
    Mpres.title.classList="prestitlebtns";
    Mpres.Ubtn.classList="prestitlebtns";
    Mpres.Sbtn.classList="prestitlebtns";
    clearmpresdiv();
}
function updateprestigemenu() {

    if (prestige.unlocked == true &&prestige.level==0) {  Mpres.title.innerText = "Prestige";
        menu.ptab.backgroundImage = "none"; 
        Mpres.btn.style.width = "40%";
    }
    else if(prestige.unlocked == true &&prestige.level>0 ){Mpres.Sbtn.style.display="";
        Mpres.title.innerText = "Prestige"; Mpres.Ubtn.style.display="";
        menu.ptab.backgroundColor = "#af16a655";
        Mpres.btn.style.width = "40%";
    }
    else if (prestige.unlocked == false && prestige.level==0) { Mpres.title.innerText = "Unlock Prestige";
        Mpres.title.style.fontSize="4.6vmin";
        menu.ptab.backgroundImage = "url('http://clipart-library.com/data_images/13248.jpg')";
        Mpres.Ubtn.style.display="none"; Mpres.Sbtn.style.display="none";
    }
}
function updatestatmenutext() {
    menu.statTC.innerText = "Total Spells cast:" + mana.level + " ";
}

function upgradehider(title){
    title.Utitle.innerText="???";
    title.Uimg.src=Logs.lc;
    title.U$.innerText=("???"+AU);
    title.Udesc.innerText="???";
}

var h1 = document.getElementById("h1");
ht = "headtitle"; h0 = "ht"; ti = document.getElementById("title");
function showtitle() {
    if (h1.classList == ht) {
        ti.style.display = "none";
        h1.classList.add(h0); h1.classList.remove(ht);
    }
    else {
        ti.style.display = "";
        h1.classList.add(ht); h1.classList.remove(h0);
    }
}
var ipsol=document.getElementById("intro");
var itxt=document.getElementById("introText");
function startintro(){
    i=ipsol;
    i.style.display="";
    itxt.innerText="Welcome";
    setTimeout(()=>{itxt.innerText="Welcome\n To Bloodworks Latest Game";
    setTimeout(() => { iLogo.innerText="IDLECLICKER! \n";
    setTimeout(() => { i.classList="Logs";
    setTimeout(() => { i.classList.remove("Logs"); i.style.display="none";},5000);
} ,10000);},10000);
    
    },10000);
}
function skipintro(){
    i.classList.remove("Logs"); i.style.display="none";
}
