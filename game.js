
//Dev var//
let click = 0;
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



//Menu $:cost;, UPG:upgmenu;,//
const menu = {
    o:false,
    open: " ",
    return: document.getElementById("main"),
    fieldset: document.getElementById("hiddenwrap"),
    menutab: document.getElementById("menutab"),
    statstab: document.getElementById("statstab"),
    stats: document.getElementById("stats"), statTC: "",
    statstext: document.getElementById("statstext"),
    creditstab: document.getElementById("creditstab"),
    upgtab: document.getElementById("upgtab"),

    headmenu:document.getElementById("KatzeMenu"),
    headmenuframe:document.getElementById("HeadMenuOverlay"),
    currentupgtab:"none",
    subdiv:document.getElementById("menusubsetdiv"),
    Clickster:document.getElementById("MSBtn1"),
    Sorcerer:document.getElementById("MSBtn2"),
    Banker:document.getElementById("MSBtn3"),

    KatLI:document.getElementById("LKimg"),
    KatLT:document.getElementById("LKT"),
    KatLbar:document.getElementById("LKbar"),
    KatLTT:document.getElementById("LKTT"),
    currentSubCat:"none",
    KatRI:document.getElementById("RKimg"),
    KatRT:document.getElementById("RKT"),
    KatRbar:document.getElementById("RKbar"),
    KatRTT:document.getElementById("RKTT"),
  

    upgT: document.getElementById('upgradetable'),
    upgtext: document.getElementById("upgradetext"),
    pULtab: document.getElementById("prestigelock"),
    ptab: document.getElementById("prestigetab"),
    prestiget: document.getElementById("prestigetable"),
    prestigetext: document.getElementById("prestigetabbtntext"),

    upgTab: 0,
    statsTab: 0,
    menuTab: 0,
    prestigeTab: 0,
    exitsTab: 0,}

const MuT ={
    //Row 1//
D1:document.getElementById("upgTDrow1"),
TA11:document.getElementById("TA11"), TT11:document.getElementById("TT11"),Ti11:document.getElementById("Ti11"),T$11:document.getElementById("T$11"),Td11:document.getElementById("Td11"),
TA12:document.getElementById("TA12"), TT12:document.getElementById("TT12"),Ti12:document.getElementById("Ti12"),T$12:document.getElementById("T$12"),Td12:document.getElementById("Td12"),
TA13:document.getElementById("TA13"), TT13:document.getElementById("TT13"),Ti13:document.getElementById("Ti13"),T$13:document.getElementById("T$13"),Td13:document.getElementById("Td13"),
TA14:document.getElementById("TA14"), TT14:document.getElementById("TT14"),Ti14:document.getElementById("Ti14"),T$14:document.getElementById("T$14"),Td14:document.getElementById("Td14"),
TA15:document.getElementById("TA15"), TT15:document.getElementById("TT15"),Ti15:document.getElementById("Ti15"),T$15:document.getElementById("T$15"),Td15:document.getElementById("Td15"),
    //row 2//
D2:document.getElementById("upgTDrow2"),
TA21:document.getElementById("TA21"), TT21:document.getElementById("TT21"),Ti21:document.getElementById("Ti21"),T$21:document.getElementById("T$21"),Td21:document.getElementById("Td21"),
TA22:document.getElementById("TA22"), TT22:document.getElementById("TT22"),Ti22:document.getElementById("Ti22"),T$22:document.getElementById("T$22"),Td22:document.getElementById("Td22"),
TA23:document.getElementById("TA23"), TT23:document.getElementById("TT23"),Ti23:document.getElementById("Ti23"),T$23:document.getElementById("T$23"),Td23:document.getElementById("Td23"),
TA24:document.getElementById("TA24"), TT24:document.getElementById("TT24"),Ti24:document.getElementById("Ti24"),T$24:document.getElementById("T$24"),Td24:document.getElementById("Td24"),
TA25:document.getElementById("TA25"), TT25:document.getElementById("TT25"),Ti25:document.getElementById("Ti25"),T$25:document.getElementById("T$25"),Td25:document.getElementById("Td25"),
    //Row 3// 
D3:document.getElementById("upgTDrow3"),   
TA31:document.getElementById("TA31"), TT31:document.getElementById("TT31"),Ti31:document.getElementById("Ti31"),T$31:document.getElementById("T$31"),Td31:document.getElementById("Td31"),
TA32:document.getElementById("TA32"), TT32:document.getElementById("TT32"),Ti32:document.getElementById("Ti32"),T$32:document.getElementById("T$32"),Td32:document.getElementById("Td32"),
TA33:document.getElementById("TA33"), TT33:document.getElementById("TT33"),Ti33:document.getElementById("Ti33"),T$33:document.getElementById("T$33"),Td33:document.getElementById("Td33"),
TA34:document.getElementById("TA34"), TT34:document.getElementById("TT34"),Ti34:document.getElementById("Ti34"),T$34:document.getElementById("T$34"),Td34:document.getElementById("Td34"),
TA35:document.getElementById("TA35"), TT35:document.getElementById("TT35"),Ti35:document.getElementById("Ti35"),T$35:document.getElementById("T$35"),Td35:document.getElementById("Td35"),
     
}
const player = {
    id: "stri",
    allspells: 0,
    clickmulti: 0,
    TotalSpells:[0,0,0]
}
//Boxmain//
const auto = {
    text:"auto",
    level: 0, upg$: 100,
    help: 0, helperlvl: 0, helper$: 0, helpertotal: 0,
    runcount: 0,
    cc: document.getElementById('autocost'),
    levelcounter: document.getElementById("autolevelcounter"),
    count: document.getElementById('autoclickercount'),
    top: document.getElementById("autotop"),
    image: document.getElementById("buyauto"),
    btn: document.getElementById("autobutton"),
    master: document.getElementById("abvauto"),
    status: "basicbitch",
    truestatus: "",

    Utitle:document.getElementById('achtitle'),
    U$: document.getElementById('ach$'),
    Udesc: document.getElementById("achdesc"),
    Uimg:document.getElementById("achimg"),
}
//Fireball//
const fire = {
    text:"Fire",
    M:[0,0,0,0,0,0,0,"","",0,0],  
    cc: document.getElementById('fireballcastcost'),
    img: document.getElementById("fireball"),
    btn: document.getElementById("fbbutton"),
    master: document.getElementById("abvfire"),
    p4: document.getElementById("button4txt"),
    counter: document.getElementById('firecounter'),
    levelcounter: document.getElementById('firelevel'),
    status: "basicbitch",
    cast: "notready",

    truestatus: "",

    //upg//
    
    Udesc: document.getElementById('fireupgdesc'),
    Utitle: document.getElementById('titler1c1'),
    Uimg: document.getElementById('tdr1c1'),
    U$: document.getElementById('pr1c1'),

}
//arc//
var arcautotimer = "";
const arc = {
    text:"Arc",
    M:[0,0,0,0,0,0,0,"","",0,0],  
    cc: document.getElementById("arccastcost"),
    img: document.getElementById("arcball"),
    btn: document.getElementById("arcbutton"),
    master: document.getElementById("abvarc"),
    p6: document.getElementById("button6txt"),
    counter: document.getElementById('arccounter'),
    levelcounter: document.getElementById('arclevel'),

    arc: "",
    cast: "notready",
    upgrade: "notready",
    status: "basicbitch",
    truestatus: "",

}

//ICE//
const ice = {
    text:"Ice",
    M:[0,0,0,0,0,0,0,"","",0,0],  
    cc: document.getElementById('icecastcost'),
    image: document.getElementById("iceball"),
    btn: document.getElementById("icebutton"),
    master: document.getElementById("abvice"),
    p3: document.getElementById("button3txt"),
    counter: document.getElementById('icecounter'),
    levelcounter: document.getElementById('icelevel'),
    truestatus:"",
}

//EARTH//
var earthcd;
const earth = { 
    M:[0,0,0,0,0,0,0,"basicbitch","",0,0],
    currentimg:"",

    TT:document.getElementById('earthtop'),
    cc: document.getElementById('earthcastcost'),
    img: document.getElementById("earthball"),
    btn: document.getElementById("earthbtn"),
    master: document.getElementById("abvearth"),
    p7: document.getElementById("button7txt"),
    counter: document.getElementById('earthcounter'),
    levelcounter: document.getElementById('earthlevel'),

    upgrade: "notready",
    status: "notready",
    cast: "notready",
    truestatus: "",
}

//Katze//
const Clickster={
    text:"Clickster",
    M:[0,0,'1000','0',0,0,0,0,0],
    
    C10:[0,0],
    CD:[0,0],
    Auto:['0','0'], 
    Trio:['0','0',false,'10000'],
    Luck:['0','0',false,'50000'],

    Dbz:['0','0'],
    Cmulti:['0','0','0'],

    Rage:[0,0]
}
const Sorcerer={
    text:"Sorcerer",
    M:[0,0,0,0,0,0,0,0,0],
   Fireball:['0','0','100','0'],
   Arc:['3','4'],
   Ice:['3','4'],
   Earth:['0','0'],
   SpellMulti:['0','0','0'],
   Cmulti:['0','0','0'],
};

const Banker = {
    text : "Banker",
    M:[0,0,0,0,0],

}

const MenuUpglvl = {
    C:[ 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, ],
    S:[ 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, ],
    B:[ 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, ],  
};
const MenuUpg$ = {
    C:[ 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, ],
    S:[ 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, ],
    B:[ 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, ],  
}
var ClicksterKey=
[MenuUpg$.C[0],MenuUpg$.C[1],MenuUpg$.C[2],MenuUpg$.C[1], MenuUpglvl.C[6], Clickster.Cmulti[1],


];


const gem = {
    gems: 0,
    gemtimer: 0,

    mine$:0,
    mineLvl:0,
    mineMaxLevel:0,
}
const gemupgsheet = {
    Utitle:document.getElementById('GemMinetitle'),
    U$: document.getElementById('GemMine$'),
    Udesc: document.getElementById("GemMinedesc"),
    Uimg:document.getElementById("GemMineimg"),
}

const Logs = {
    lc: "Logs/Clicker/lq.png",
    bl: "", bweb:"bweb.ico",
    chestv3:"Logs/Chest/chestv3.png", chestv3M:"Logs/Chest/chestv3M.png",
    blastimg1: "Logs/Blast/Mblast1.png", MblastCD: "Logs/Blast/Mblast2.png",
    rageblast: "Logs/Blast/yragemb.png", rageauto: "Logs/Blast/rauto.png",
    blastmax: "Logs/Blast/raM.png",
    //Clicker//
    ptc:"Logs/Clicker/ptc.png", Ccd:"Logs/Clicker/nCD.png",
    mc: "Logs/Clicker/mc.png", mcCD: "Logs/Clicker/mcCD.png",
    mcrage: "Logs/Clicker/rclick.png", mcrageCD: "",
    rageB:"Logs/Rage/rageballeye.png",    rageBM:"Logs/Rage/rageballeyemax.png",

    ac: "Logs/Clicker/ac.png", acCD: "Logs/Clicker/acCD.png",
    acauto: "Logs/Clicker/acauto.png", acM:"Logs/Clicker/acautomax.png",
    //spells//
    //arc//
    arc: "Logs/Arc/arc.png", arcCD: "Logs/Arc/arcCD.png",
    arcau:"Logs/Arc/arcauto.png", arcauCD:"Logs/Arc/arcauto.png",
    aauM:"Logs/Arc/arcautoM.png",
    //fire//
    Fx1: "Logs/Fire/x1fireball.png", Fx2: "Logs/Fire/x2fireball.png", Fx3: "Logs/Fire/x3fireball.png",
    Fx5: "Logs/Fire/x5fireball.png", Fx7: "Logs/Fire/x7fireball.png", FxM: "Logs/Fire/xmayhemfireball.png",
    Fxmax: "Logs/Fire/xmaxfireball.png",
    //ice//
    i1: "Logs/Ice/i1.jpg", iCD: "Logs/Ice/iCD.png",
    iW: "Logs/Ice/Ishield.png", iWM: "Logs/Ice/IshieldM.png",
    //earth//
    e1:"Logs/Earth/earthg.png",  eCD:"Logs/Earth/earthgrow.png",
    equake:"Logs/Earth/equ.png", equakeM:"Logs/Earth/equM.png",

    //menu//
    //Kat//
    Sorcerer:"Logs/K/Sorcerer.png", Clickster:"g.png", Banker:"Logs/K/Banker.png",
    allspells:"Logs/MenuMix/allspells.png",
    manareg:"Logs/Mana/Manaregenp10.png" , manaregM:"Logs/Mana/mp10M.png",
   
    Mflow1:"Logs/Mana/MFG.png",   Mflow2:"Logs/Mana/MFGR.png",
    MfM:"Logs/Mana/MFGRM.png",
    ManaMax:"Logs/Mana/max.png",
    shift:"Logs/Chest/shift.png", shiftM:"Logs/Chest/shiftM.png", 

    NoP$:"Logs/Prestige/noP.png",NoP$M:"Logs/Prestige/noPM.png",
    manared:"Logs/Mana/reduction.png", manaredM:"Logs/Mana/reductionM.png",

    rageReda:"Logs/Rage/reduction.png", rageRedaM:"Logs/Rage/reductionM.png",
    rageRedb:"Logs/Rage/RageMred.png", rageRedbM:"Logs/Rage/RageMredM.png",

    Gmine:"Logs/MenuMix/GemM.png", GmineM:"Logs/MenuMix/GemMM.png", 
    dupe:"Logs/MenuMix/duplicator.png", dupeM:"Logs/MenuMix/duplicator.png",
}
//PRESTIGE VARIABLEs//
const prestige = {
    level: 0, prog: 0, req: 1000, clickval: 0,
    unlock$: 0,
    totalPP: 0,
    PPinc: 3,
    multi: 1,

    PPmenu: "emptystring",

    progcount: document.getElementById('prestigeprogress'),
    capcount: document.getElementById('prestigecap'),
    levelcount: document.getElementById("prestigelevelcount"),
    bar: document.getElementById('prestigebar'),
    overlay: document.getElementById("prestige"),
    menuOverlay: document.getElementById("prestigeovermenu"),
    pF: document.getElementById("Prestigeinload"),
    stat: document.getElementById("prestige_of"),
    Ybtn: document.getElementById("prestigeY"),
    Nbtn: document.getElementById("prestigeN"),
    unlocked: false,
    truestatus: "",
}
//MPres = menu prestige//
const Mpres = {
    Ubtn:document.getElementById("presUbtn"),
    Sbtn:document.getElementById("presSbtn"),

    title: document.getElementById("prestitle"),
    ptitle: document.getElementById("prestitlebody"),
    btn: document.getElementById("presbodybtn"),
    //unlock//
    div1: document.getElementById("prestigec1"),
    div2: document.getElementById("prestigec2"),
    div3: document.getElementById("prestigec3"),

    dbz: "dbzbuster", dbzlvl: 0, dbz$: 40300000000000000,
    D1: "url(Logs/Chest/chestultra.png)", D2: "url(Logs/Chest/chestS2cropped.png)",
    D3: "url(Logs/Chest/chestv3.png)", Dlock: "url(Logs/Chest/Lockchest.png)",

    table: document.getElementById("prestigetable"),
    prestigetext: document.getElementById("prestigetabbtntext"),
}
const PresForev={
    lvl:0, upg$:0,
    Utitle:document.getElementById('PresForevtitle'),
    U$: document.getElementById('PresForev$'),
    Udesc: document.getElementById("PresForevdesc"),
    Uimg:document.getElementById("PresForevimg"),
}
var prestigeboard = [
    "0", "0", "0", "0", "0", "0",
    "0", "0", "0", "0", "0", "0",
    "0", "0", "0", "0", "0", "0",
    "0", "0", "0", "0", "0", "0",
];
const playerstats = {
    totalclicks: document.getElementById("tc#"),
    mcupg: document.getElementById("mcupg#"),
    multiplier: document.getElementById("multi#"),
    spellcount: document.getElementById("tcCast"),
    achievement: document.getElementById("ACH"),
    status: "",
}

var myVar;
var manatimer;

///scorecounters///

var message = document.getElementById('messages');
var messagetimer;


var p8 = document.getElementById('button8txt');
let p8val = 1000;

const Di = {
    all: "0",
    cost: "",
    pUscale: 0,
}
var pmulti = document.getElementById("setpmultitxt");

//Clicker Btn
var clicker = {
    text:"Clicker",
    currentimg:"Logs/Clicker/tp.png",
    M:[1,0,0,0,0,0,0,"","",0,0],
    truestatus:"",
    btn:document.getElementById("clickerbtn"),
    img:document.getElementById("clickerimg"),
    cc:document.getElementById("clicker$"),
    TT:document.getElementById("clickertop"),
    Master:document.getElementById("abvclick"),
}

var clc = {
    ico:document.getElementById("clickico"),
    true: "g",
    top: document.getElementById("clickertop"),
    imgmaster: "Truelog",
    scorecounter: document.getElementById("scorecounter"),
    tcounter: document.getElementById("TCcounter"),
    multicounter: document.getElementById("multicounter"),

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
document.getElementById("earthball").addEventListener("click",castspell(earth,'Earth'));
document.getElementById("fireball").addEventListener("click",castspell(fire, 'Fire'));





//BARS//

var Pleveltext = document.getElementById('levelt');

var range = document.getElementById('myrange');

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
    localStorage.setItem("score", click); localStorage.setItem("tc", clicker.M[4]);
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
    clicker.M[4] = localStorage.getItem("tc");
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
    clicker.M[4] += levelupvar;
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
    updatemana();
    updateautoclicker();
    updatefirecounter();
    updateice();
    setstatusearth();
    updateMblast();

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
function selftest() {
    setstatus();
    updatetext();
if(Debug==true){
    console.log("Debug stats:" + '\n' + "Setstatus:Selftest: " + '\n' +
        '\n' + boardS+ '\n'
        + '\n'+boardS2 + 
        "\nMenu:"+menu.open +" Submenu:"+ menu.currentupgtab
        +"\n\n :Clicker:= " + clicker.truestatus+
        "\n :Autoclicker:=" + auto.truestatus
        + '\n' + " :Multiplier =" + clicker.M[3] + " AutoClvl =" + '\n'

        + '\n' + ":Spells:" + '\n' +
        "Spellmultiplier " + player.allspells + '\n' +
        " :Mana:= " + mana.truestatus + '\n'
        + '\n' + " :Fireball:= " + fire.truestatus + '\n'
        + '\n' + " :arc:=" + arc.truestatus + '\n'
        + '\n' + " :Ice:=" + ice.truestatus + '\n'
        + '\n' + " :Earth:=" + earth.truestatus + '\n'
        + '\n' + ":Prestige= " + prestige.unlocked + " " + prestige.truestatus + '\n'
        + '\n ' + prestigeboard + '\n'

        + '\n' + " :Rage=  relvl :" + MenuUpglvl.C[9]);
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

function setstatus() {
    //autoclicker//
    setstatusauto();
    //MANA//
    setstatusmana();
    //Rage//
    setstatusrage();
    //FIRE//
    setstatusfire();
    //ARC//
    setstatusarc();
    //ICE//
    setstatusice();
    //EARTH//
    setstatusearth();

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



function setcost(price,location,multi){
    if(multi==0 || multi==undefined){
    number =price; gennumberconverter();
    location.innerText="-"+number+AU;
    }
    if(ErrorEvent==true){alert("setcostfail");}
}
//##########################################################################//
//######################## CLICKER ######################################//
//###################################################################################//
clicker.img.addEventListener("mousedown", clickunder);
clicker.img.addEventListener("mouseup", clickover);

function clickunder() {
    clicker.imgmaster = clicker.img.src;
if (rage.active == false) {
        clicker.img.src = Logs.mcCD;
        boardS = "Player is holding click";
    }
else if (rage.active == true) {
        clicker.img.src = Logs.mcCD;
        boardS = "Player is holding click";
        setTimeout(function () {
            rage.chargecount++;
        }, 100);
    }

}
function clickover() {
    boardS = "Player has released click";
    clicker.img.src = clicker.imgmaster;
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
    click += (clicker.M[2]) ;
    click = Math.floor(click);
    incandset("Clickster",1);
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
    clicker.M[1]=2*(clicker.M[0]+1)*3+12*(prestige.level+1)*(clicker.M[0]+clicker.M[0])+13 ;
    clicker.M[2] =Math.floor((clicker.M[0]) * (rage.active + 1) * (prestige.level+1) * 1.01);
   
    clicker.M[5] = ((clicker.M[3]+1)) * (clicker.M[1]+1);    
    updatetile(clicker, '+');
    scorenumberconvertor(); clc.scorecounter.innerText = score + AU;
//img//
    if (rage.active == true && boardS != "Player is holding click") {
        clicker.img.src = Logs.mcrage;
        clicker.img.style.background = "white";
        clicker.img.border = "3px solid "; clicker.img.style.borderColor = "red";
    }
    else if (rage.active == false && boardS != "Player is holding click") {
        clicker.img.src = Logs.mc;
        clicker.img.style.background = "repeating-linear-gradient(40deg, blue,red)";
        clicker.img.border = "2px solid black";
    }
    //bkg/counters//
    BZbuster();
    clc.tcounter.innerText = clicker.M[4];
    clc.multicounter.innerText = clicker.M[2];
    clc.true = "Upg$/Lvl/Multi/PTC/TC/: "+clicker.M.join("/");
}

function generateclickico(){clc.ico.style.display="block";
    clc.ico.innerText="+"+clicker.M[2];
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
if(click>=(type['M'][1]*multi)){
click-=type['M'][1]*multi;
incupgcounters(type,sub);
}
else if(click<type['M'][1]){
    if(bmbuy>0){
    alert("Upg failed, no money");
}}
bmbuy++;
}

function incupgcounters(type,sub){
    type['M'][0]++; type['M'][5]++;
    if(sub!="Banker"){sub['M']+10;
    updateclick();
}}
function costcheck(type) {
    number = type['M'][1];

    if (click<=type['M'][1] || type['M'][0]<0 ){
        type['M'][8]==nr; 
        if(type['M'][0] <1 && type['M'][5] <1){
            type['btn'].style.display="none";
        }
        else if( type['M'][1]>0 ){ type['btn'].style.display="";}
    }
    else if (click>=type['M'][1] || type['M'][0]>0){
        if(click>=type['M'][1] && type['M'][0]>=1){
        type['btn'].style.display="";
        type['btn'].style.opacity=1;
        }
        else if ((click<=type['M'][1]) )
        type['M'][8]=="notready"; type['btn'].style.opacity=0.7;
    }
}
var nr ="notready";


function castspell(type, ){
    text=type['text'];
//check cd//
if(type['img'].classList.contains("cooldown")){
alert(text+"Spell failed, Class list contains cooldown");}
//Check ready//
else if(type['M'][7].includes(nr)){
alert(text+" Contains not ready"); }
//  check mana cost //
else if(mana.player < type['M'][9]){alert(text+" Spell failed  No mana");}
 //Cast//
else if(!type['M'][7].includes(nr) && mana.player >= type['M'][9]){
incspellcounters(type);
console.log("Spell cast: " +text);
BoardS2=text+" Cast"; 

if (type==earth){  generatemagnitude(); }
if (type==ice){     }
if (type==arc){     }
if (type==fire){  text="fire";  }
//Minus mana plus val//
mana.player-=type['M'][9];
click+= (type['M'][2]+1)*(prestige.level+100)*(Sorcerer.M[3]+1); 
type['img'].classList.add(text+'cooldown');
cooldown(type, text);
}
setstatus();
}

function incspellcounters(type){
    Sorcerer.M[4]++; Sorcerer.M[5]++;
    type['M'][5]++; type['M'][6]++;
}

function cooldown(type,text,timer){
    message.innerText=text+" Cooldown";
    type['img'].classList.add((text+'Cooldown'));
    if (type==earth){ earthcooldown();}
    else if (type==ice){ icecooldown();}
    else if (type==arc){ arccooldown();}
    else if (type==fire){ firecooldown();} 
}

function updatetile(type, op){
   
type['truestatus']="Level:"+type['M'][0]+" Upg$:"+type['M'][1]+" Val:"+type['M'][2]+" CurrentUpg:"+type['M'][3]+
    " TotalUpg:"+type['M'][4]+" CurrentCasts:"+type['M'][5]+" TotalCasts:"+type['M'][6]+" Status:"+type['M'][7]+
    " Upgstatus:"+type['M'][8]+" Cast$:"+type['M'][9];

if(type['M'][0]>=1){
    if(op==undefined){op="NotDefined";}
    number = type['M'][1]; gennumberconverter();
    type['cc'].innerText = number+AU;
    type['img'].src=type['currentimg'];
    type['TT'].innerText=op+type['M'][2];
    if(click>=type['M'][1]){
        type['btn'].style.opactiy==1;
}
    else if(click<type['M'][1]){
        type['btn'].style.opactiy==0.7;
}
}   
//If not lvl 1, no display//
else if(type['M'][0]<1){
    type['Master'].style.display="none";
}
}

//##########################################################################//
//######################## AUTO CLICKER ######################################//
//###################################################################################//

function buyauto() {
    clicker.M[4]++;
    if (click < auto.upg$) {
        alert('no coins'); idj++;
    }
    else if (click > auto.upg$ && auto.level == 0) {
        auto.level++; click -= auto.upg$;
        myVar = setInterval(autocps, 1000);
        console.log("buyautoupgrade");
        updateautoclicker(); updateclick(); levelup();
    }
    else if (click > auto.upg$ && auto.level != 0) {
        auto.level++; click -= auto.upg$;
        console.log("buyautoupgrade");
        updateclick(); updateautoclicker(); levelup();
    }
}

function setstatusauto() {
    updateautoclicker();
    if (auto.level != 0) {
        auto.status = "running";
        auto.image.style.opacity = 1;
    }
    else if (auto.status == "basicbitch" && clicker.M[4] >= 500) {
        auto.status = "unlocked";
        auto.master.style.opacity = 0.9;
        auto.image.style.opacity = 0.9;
        auto.image.src = "Logs/Clicker/ac.png";
    }
    else if (auto.status == "basicbitch") {
        auto.master.style.opacity = 0;
    }
}

function updateautoclicker() {
    auto.upg$ = (auto.level + 1 + 103) * (auto.level + 1) * (auto.level + 1) * 3.78;
    number = auto.upg$; gennumberconverter(); auto.cc.innerText = number;

    if (MenuUpglvl.C[2] > 0) { auto.helpertotal = Math.floor(auto.level / auto.help); }
    if (click < auto.upg$) { auto.btn.style.opacity = 0.7; }
    else if (click > auto.upg$) { auto.btn.style.opacity = 1; }
    auto.top.innerText = (auto.helpertotal + auto.level) + '🖱';
    auto.truestatus = " " + auto.level + " " + auto.upg$ + " " + MenuUpglvl.C[2] + " " + auto.helpertotal +
        " " + auto.runcount;
}

function autocps() {
    updateautoclicker();
    auto.runcount++;
    //if upg do//
    if (MenuUpglvl.C[2] != 0 || duplicator.lvl != 0) {
        click += 1 + ((auto.level + auto.helpertotal) * (clicker.M[3] + 1));
    }
    else { click += auto.level; }
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
    blast.manainc = (1+blast.lvl) * (1 + prestige.level) * (clicker.M[3] + 1) * (blast.lvl+1);
    blast.clickinc = (1+blast.lvl) * (1 + prestige.level) * (clicker.M[3] + 1) * 1000*(1+blast.lvl);
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


function firecooldown(){
    fire.M[7] = "notready";
    setTimeout(function () {
            document.getElementById("fireball").classList.remove("firecooldown");
            fire.M[7] = "ready";
            message.innerText = fire.status + "Fireball Cooldown is over";
        }, 5000);
}
function setstatusfire() {
    updatefirecounter();
    firecostcheck(); 
    if (clicker.M[4] <= 15) {
        fire.img.src = Logs.lc;
        fire.master.style.display = "none"; 
        //fireball not unlocked//
    }
    else if (fire.master.style.display == "none" && clicker.M[4] >= 5) {
        //fire unlock - runs once//
        fire.img.style.opacity = 0.7; fire.master.style.display = "";
        fire.cc.innerText = fire.M[9];
        //alert('fireball has been unlocked');//
        fire.status = "unlocked";
    }
    else if (fire.status == "unlocked" && mana.level != 0) {

        fire.img.style.opacity = 0.7;
        fire.master.style.display = "";
        fire.btn.style.opacity = 1;
        fire.status = "x1";
        fire.img.src=Logs.Fx1;
        message.innerText="Mana has been unlocked, try casting a fireball";
        //1st unlock//
    }
    else if (!fire.img.classList.contains("firecooldown") && mana.player >= fire.M[9]) {
        fire.img.style.opacity = 1;
        fire.M[7] = "ready";
        message.innerText = "Fireballready";
    }
    else if (fire.img.classList.contains("firecooldown") || mana.player <= fire.M[9]) {
        fire.img.style.opacity = 0.9;
        //absolutefalse//   
    }
    else {
        console.log("failed to set fireball status");
    }
if (fire.M[0]>=1){
    updatetile(fire,"+");
}

}

function updatefirecounter() {
    firecostcheck();

    fire.counter.innerText = fire.M[5];
    fire.levelcounter.innerText = fire.M[0];
    fire.cc.innerText = fire.M[9];
   
}

function fireballupgrade() {
    firecostcheck();
    if (fire.btn.style.opacity >= 1 && click >= fire.M[1]) {
        boxmainbuy(fire,Sorcerer);
        incrementandset();
        setstatusfire();
    }
    else {
        console.log("fireballupgfail: " + "click=" + click + " :cost=" + fire.M[1]);
        idj++;
    }
}

//Checs click against upgreade cost//
function firecostcheck() {
    fire.M[9]=((prestige.level+fire.M[0])*1)+10;
    if (fire.M[5] == 0 || mana.level == 0) {
        fire.btn.style.display = "none";
        fire.M[8] = "notready";
    }
    else if (click < fire.M[1]) {
        fire.btn.style.opacity = 0.7;
        fire.M[8] = "notready";
        fire.btn.style.display = "inline-block";
    }
    else if (click >= fire.M[1]) {
        fire.btn.style.opacity = 1;
        fire.M[8] = "ready";
        fire.btn.style.display = "inline-block";
    }
}


// Theres an Arc//
//####################################################################//
//#############              ARC             ############################//
//####################################################################//
arc.img.addEventListener("click", prearccast);
function prearccast() {
    if (arc.cast = "ready" && MenuUpglvl.S[1] == true) {
        arcauto();
    }
    else { castspell(arc); }
}


function arccooldown() {
    arc.img.classList.add("arccooldown");
    if (MenuUpglvl.S[1] == false) {
        arc.img.style.opacity = 0;
        setTimeout(function () {
            arc.img.src = Logs.arcCD; message.innerText = "arcball - 1S Cooldown";
        }, 50);
        setTimeout(function () {
            arc.img.classList.remove("arccooldown");
            arc.img.src = Logs.arc; message.innerText = "arcball can be used again";
            arc.img.style.opacity = 1;
        }, 1000);
    }
    else if (MenuUpglvl.S[1] == true) {
        setTimeout(function () {
            arc.img.classList.remove("arccooldown");
        }, 1000);
    }

}
function setstatusarc() {
    arccostcheck();
    updatearccounter();

    if (mana.level == 0) {
        arc.img.src = Logs.lc;
        arc.master.style.display = "none";
        // arcball not unlocked//
    }
    else if (arc.M[7] == "basicbitch" && mana.level != 0) {
        arc.master.style.opacity = 1;
        setUpgtile();
        arc.btn.style.display = "none";
        arc.img.style.opacity = 0.7;
        arc.img.src = Logs.arcim1;
        arc.cc.innerText = arc.M[9];
        arc.M[7] = "await";
        //   alert('arc has been unlocked, try casting ');//
        //1st unlock//
    }
    else if (arc.M[7] == "await" && mana.player > arc.M[9]) {
        arc.img.style.opacity = 1;
        arc.M[7] = "";
        arc.img.src = Logs.arc;
        arc.cast = "ready";
    }
    else if (arc.img.classList.contains("arccooldown") || mana.player <= arc.M[9]) {
        arc.img.opacity = 0.9;
        arc.cast = "notready";
        //absolutefalse either// 
    }
    else if (!arc.img.classList.contains("arccooldown") && mana.player >= arc.M[9]) {
        //absolute true, no cd + mana//
        arc.img.style.opacity = 1;
        arc.cast = "ready"; if (MenuUpglvl.S[1] == true && arc.M[7] != "running") { 
            arc.img.src=Logs.arcau; arc.M[7] == "run" }
    }
    else {
        console.log("couldnt set arc status");
    }
}

function arcballupgrade() {
    setstatusarc();
    if (arc.btn.style.opacity >= 1 && click >= arc.M[1]) {
        click -= arc.M[1];
        arc.M[0]++;
        incrementandset();
    }
    else {
        console.log("arcballupgfail: " + "click=" + click + " :cost=" + arc.M[1]);
        idj++;
    }
}

function arccostcheck() {
    arc.M[1] = (arc.M[0] + 1) * 1000 * (arc.M[0] + MenuUpglvl.S[1] + 1);
    if (arc.castcounter == 0 || mana.level == 0) {
        arc.btn.style.opacity = 0;
        arc.upgrade = "notready";
        arc.btn.style.display = "none";
    }
    else if (click < arc.M[1]) {
        arc.btn.style.opacity = 0.7; arc.upgrade == "notready";
        arc.btn.style.display = "inline-block";
    }
    else if (click >= arc.M[1] && mana.level >= 1) {
        arc.upgrade = "ready"; arc.btn.style.display = "inline-block";
        arc.btn.style.opacity = 1;
    }
}

function updatearccounter() {
    //update arc counters//
    arc.truestatus = " level: " + arc.M[0] + " " + arc.cast + " val: " + arc.val +
        " cast#: " + arc.castcounter + " upg$: " + arc.M[1] + " cast$: " + arc.M[9] +
        " upg: " + arc.upgrade + " class: " + arc.img.classList + " status: " + arc.M[7] + '\n' + " src: " + arc.img.src;
    arc.counter.innerText = arc.castcounter;

    arc.M[9] = 1 + arc.M[0] * (prestige.level + 1);
    arc.cc.innerText = arc.M[9];
    number = arc.M[1]; gennumberconverter(); arc.p6.innerText = number;
}


//######## MENU #######//

function arcauto() {
    //Checks for auto then runs cast till mana out//
    console.log("arcauto cycle");
    if (arc.M[7] != "running" && MenuUpglvl.S[1] == true) {
        alert("arc auto beginth");
        arcautotimer = setInterval(arcballcast, 1200);
        arc.M[7] = "running";
        console.log("ärcaneautocast");
    }
    else {
        cancelarcauto();
    }
}
function cancelarcauto() {
    alert("Cancelling Arc auto");
    clearInterval(arcautotimer);
    if (arc.M[7] = "running") { arc.M[7] = "run"; }
    console.log("ending auto cast");
}


//##############################################################################################################################//
//                 iceball                    //
//###########################################################################################//
function iceballcast() {
    setstatusice()
    if (ice.image.classList.contains("icecooldown") || mana.player < ice.cast$) {
        console.log('Ice castfail' + Avar); idj++;
    } else if (ice.cast == "ready" && mana.player >= ice.cast$) {
        ice.castcounter++;
        click += ice.val;
        mana.player -= ice.cast$;//fee//
        console.log("ice cast");
        updateclick();
        icecooldown();
    }
    else {
        console.log('failed ice cast -variable?-');
        return;
    }
}

function icecooldown() {

    ice.image.classList.add("icecooldown");
    setstatusice()
    setTimeout(function () {
        message.innerText = "Iceshower 10S - Cooldown";
    }, 60);

    setTimeout(function () {
        ice.image.classList.remove("icecooldown");
        updateice();
        message.innerText = "ice can be used again";
    }, 10000);
}
function setstatusice() {
    updateice();
    icecostcheck();

    if (clicker.M[4] >= 100 && ice.status == "basicbitch") {
        ice.status = "";
        ice.master.style.opacity = 0.9;
        //unlocked//
    }
    else if (ice.status == "basicbitch") {
        ice.cast = "notready";
        ice.master.style.opacity = 0;
    }
    else if (!ice.image.classList.contains("icecooldown") && mana.player >= ice.cast$) {
        ice.image.style.opacity = 1;
        ice.cast = "ready";
    }
    else if (ice.image.classList.contains("icecooldown") || mana.player <= ice.cast$) {
        ice.cast = "notready";
        ice.image.style.opacity = 0.9;
    }
}
function icecostcheck() {
    ice.btn.style.opacity = 0;
    if (ice.castcounter == 0 || mana.level == 0) {
        ice.upgrade = "notready";
        ice.btn.style.display = "none";
    }
    else if (click < ice.upg$) {
        ice.btn.style.opacity = 0.7; ice.upgrade == "notready";
        ice.btn.style.display = "inline-block";
    }
    else if (click >= ice.upg$ && mana.level >= 1) {
        ice.upgrade = "ready"; ice.btn.style.display = "inline-block";
        ice.btn.style.opacity = 1;
    }
}
function upgradeice() {
    if (click >= ice.upg$) {
        ice.level++
        click -= ice.upg$;
    }
}
function updateice() {
    ice.cast$ = Math.round((290 + ice.level + ice.level) * ((ice.level + 1) / 2));
    ice.cc.innerText = ice.cast$;
    ice.upg$ = (ice.level + 1 + ice.level) * 49000;
    number = ice.upg$; gennumberconverter(); ice.p3.innerText = number;

    ice.truestatus = "Level: " + ice.level + " " + ice.cast + " Val: " + ice.val +
        " Cast#: " + ice.castcounter + " Upg$: " + ice.upg$ + " cast$:" + ice.cast$ +
        " upg: " + ice.upgrade + " Class: " + ice.image.classList + " status: " + ice.status + '\n' + " src: " + ice.image.src;


    number = ice.upg$; gennumberconverter(); ice.p3.innerText = number;
}
function updatemenuice(){
    ice.wall$=(prestige.level+1)*333000;
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
    }
}
//###################################//
//                EARTH SPELL         //
//###############################//
function upgradeEarth(){
    if(click >= earth.M[1]){
        boxmainbuy(earth,Sorcerer)
        earth.M[0]++; click -= earth.M[1];
    }
    setstatusearth();
}

var magnitude;
function generatemagnitude() {
    magnitude = randomnum(earth.magmin, earth.magmax);
    console.log("mag +" + magnitude);
}
function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function earthcooldown() {
    setstatusearth();

    setTimeout(function () {
        document.getElementById("earthball").classList.remove("earthcooldown");
        earth.cast = "ready";
        message.innerText = "Earth cast ready";
    setstatusearth();
    }, 10000);
}
function setstatusearth() {
    earth.master.style.display="";
    costcheck(earth);earth.counter.innerText = earth.M[4];
    //val//  
    earth.M[2]=(earth.M[0]+1)*1000*(earth.M[0]+1);
    if (earth.M[7] == "unlocked" && mana.player >= earth.M[3]) {
        earth.M[7] = "castready";
        earth.currentimg = Logs.e1 ;
        earth.master.style.display = "";
        earth.img.style.opacity = 1;
    }
    else if (mana.player >= earth.M[3] && !earth.img.classList.contains("earthcooldown")) {
        //Mana and NO CD//
        earth.M[7] = "castready";
    }
    else if (earth.M[0] < 1  ) {
        //Unlock//
        earth.M[7]="unlocked";
        earth.M[0]++;updatetile(earth);
        earth.img.src = lockpng;
    }
    else if (earth.img.classList.contains("earthcooldown") || mana.player <= earth.M[3]) {
        //absoulte false == AVAR//
        earth.img.style.opacity = 0.9;
        earth.cast = "notready";
    }
    else {
        console.log("Earth failed to set status");
    }
}

//Button 4 EarthUPG//
function menuearthupg() {
    if (click >= earthupg.upg$ && earthupg.level == 0) {
        Sorcerer.Earth[1]++;
        earth.magmin++;
        updatemenuearth();
    }
}
function updatemenuearth() {
    Sorcerer.Earth[0] = (Sorcerer.Earth[1]+1) * 15 + 100;
    earthupg.magmincounter.innerText = earth.magmin;
    if(Sorcerer.Earth[1] ==0 && click< Sorcerer.Earth[0]){
        upgradehider2(14, "Cast 14 nature spells");
    }
    else if(Sorcerer.Earth[1]==0){
        number= Sorcerer.Earth[0]; gennumberconverter();
        setUpgtile(14,"Unlock EarthQuake", number,"Be one with Nature",Logs.equake, "menuearthupg()");
    }
    else if(Sorcerer.Earth[1]==1){
        setUpgtile(14,"EarthQuake", number,"Be one with Nature",Logs.equake, "menuearthupg()", 'fow');
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


//button3 Ice shield//



//Menu Upgrades Unlisted//

blast.ULlvl=2;

//RESET//
function resetboard() {
    //Keepers//

    //TC, Prestige, spells cast, other trackers//
    try {
        prestigeboard.fill(0);
        Object.keys(clicker).forEach(key => clicker[key] = 0);
    }
    catch (err) {
        alert("Critical prestige failure, reloading window");
        window.location.reload(true);
    }
    alert(Object.values(clicker) + "\n" + Object.values(prestige));
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
        console.log(clicker.M[3] + ' level = ' + prestige.level + '. user has prestiged');
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
    setUpgtile(15,"Unlock Gem mine");
    number=MenuUpg$.B[4]; gennumberconverter();
    gemupgsheet.U$.innerText=number+AU; gemupgsheet.Uimg.src=Logs.Gmine;
    gemupgsheet.Utitle.innerText="Unlock \n GemMine";
}
else if(gem.mineLvl==1){
    menumaxer(gemupgsheet.U$, gemupgsheet.Uimg);
    gemupgsheet.Uimg.src=Logs.GmineM;
    gemupgsheet.Utitle.innerText="GemMine";
}}
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
 updateMenucat();
 updatemenuscore();     
//MuT.D2.style.display="none";//
 MuT.D3.style.display="none"; 
document.getElementById("upgradetable").classList="hiddentab "+menu;
if(menu=="Clickster" ||menu==undefined){  MuT.D2.style.display=""; 
    // Row1 - 2 - 3 // 
    updatemenuclick10(); updateCcd(); updatemenuautoUL(); updatemenutrioclick(); updatemenuLuckyclick(); 
    menushiftupdate(); updatemenudbzbuster(); updateRageMenu();
    if(Clickster.M[0]>=1){
    MuT.D2.style.display="";
    menushiftupdate(); updatemenudbzbuster(); updateRageMenu();
    }
    else if (Clickster.M[0]>5) {
        MuT.D3.style.display="";
       menuUpdDuper(); 
}           
    updatemenuprestigeUL();  }
else if (menu=="Sorcerer"){  
    updatemenufireball(); updatemenuarcauto(); updatemenuice(); updatemenuearth(); updatemenuallspells();   
    if (Sorcerer.M[0]>=1){
    MuT.D2.style.display="";
    updatemenuMana(); updatemanaoverflow(); updatemenumanamax();  updatemenuMana(); 

    }
    else if (Sorcerer.M[0]>5) {
        MuT.D3.style.display="";
    }     
}
else if(menu=="Banker"){if (variant=="all"||variant==undefined){
 updateGmine(); }}
else if(menu=="click"){if(variant=="all"||variant==undefined){ updatemenuachelper();menuUpdDuper();   }}
else if(menu=="misc"){if(variant=="all"||variant==undefined){   updatemenudbzbuster(); menushiftupdate(); ;
        }} updateMenucat();
}


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

function updatemenuscore(){
    document.getElementById("menuscore").innerText=score+AU;
}
//Open UpGRADES//
function flipupgtab(tab) {
    closealltabs()
    clicker.M[4]++; 
    if (tab=="Clickster"||tab==undefined &&menu.currentupgtab!="Clickster") { 
        menu.upgTab++;   tab='Clickster';
        upgtabactive(tab); menu.currentupgtab=tab;  updateMenu(tab);
         console.log('Open Upgrade menu');
    }
    else if(tab=="Sorcerer" && menu.currentupgtab!="Sorcerer"){
        menu.upgTab++;
        upgtabactive(tab);  menu.currentupgtab=tab; updateMenu(tab);
    }
    else if(tab=="Banker" && menu.currentupgtab!="Banker"){
        menu.upgTab++;
        upgtabactive(tab);  menu.currentupgtab=tab; updateMenu(tab);
    }
    else if(menu.open=="upg" || tab==menu.currentupgtab ) { 
        closemenu(); console.log('closefrom upg'); alert("na"); 
    }
menu.upgtab.classList.add(selec);}

function upgtabactive(tab) {
    menu.upgT.style.display = ""; menu.subdiv.style.display = "inline";
    if (menu.open!="upg" ||tab == "Clickster"){ menu.open = "upg";
        menu.Clickster.classList.add(Sselec);
        menu.upgT.style.zIndex = 2;
    }
    else if(tab=="Sorcerer" && menu.currentupgtab!=tab){
            menu.Sorcerer.classList.add(Sselec); updateMenu(tab);
        }
    else if(tab=="Banker" && menu.currentupgtab!=tab){
            menu.Banker.classList.add(Sselec); updateMenu(tab);
    }  
    else if(menu.currentupgtab==tab){
        closemenu();
    }
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
    menu.statstab.classList.add("selected");
    menu.open = "stats";
    menu.stats.style.display = "";
    menu.stats.style.opacity = 1; menu.stats.style.zIndex = 2;
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
    StatImg.setAttribute("src", "Logs/K/"+cat[i]+".png");
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
function closestats() {
    if(menu.open=="stats"){
    menu.statstab.classList="";

    menu.stats.style.opacity = 0;
    menu.stats.style.zindex = 0;
    menu.stats.style.display = "none";
}
else{console.log("failed to close stats");}}

/*function updatesubMenucat(cat){
    if(cat==null){cat="Banker";}
    menu.currentSubCat=cat;
    menu.KatRTT.innerText=menu.currentSubCat;
    checkcatprogress();
    sorc="Logs/K/"+menu.currentSubCat+".png";
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
        menu.KatLTT.innerText=menu.currentupgtab;
        //updatesubMenucat();//
        showkatze();
        
        menu.KatLI.src="Logs/K/"+menu.currentupgtab+".png";
    if(menu.currentupgtab=="Clickster"){  
        Clickster.M[3]=Clickster.Cmulti[2];
        difference(Clickster.M[1],Clickster.M[2]);
        menu.KatLT.innerText=" Lvl: "+Clickster.M[0]+'\n'+"Bonus: +"+Clickster.M[3]+"%";
        menu.KatLbar.style.backgroundColor="gold";
    }
    else if(menu.currentupgtab=="Sorcerer"){  
        Sorcerer.M[3]=Sorcerer.Cmulti[2];
        difference(Sorcerer.M[1],Sorcerer.M[2]);
        menu.KatLT.innerText=" Lvl: "+Sorcerer.M[0]+'\n'+"Bonus: +"+Sorcerer.M[3]+"%";
        menu.KatLbar.style.backgroundColor="blue";
    }    
    else if(menu.currentupgtab=="Banker"){  
   
        difference(Banker.M[1],Banker.M[2]);
        menu.KatLT.innerText=" Lvl: "+Banker.M[0]+'\n'+"Bonus: +"+Banker.M[3]+"%";
        menu.KatLbar.style.backgroundColor="goldenrod";
        }   
menu.KatLbar.style.width=result+"%";
}}
function hidekatze(){
    menu.subdiv.style.display="none";
    document.getElementById("MenuKat").style.opacity="0";
}
function showkatze(){
    document.getElementById("MenuKat").style.opacity="1";
    menu.subdiv.style.display="";
}
//Menu tile set//
function buyupgrade(n, type){
let char = type.charAt(0);

if(click >= MenuUpg$[char][(n)]){
    //Clickster Upgrades//
    if (type=="Clickster"){
        Clickster.M[4]++;  Clickster.M[5]++;
        MenuUpglvl.C[(n)]++; click-=MenuUpg$.C[(n)];
        incandset("Banker",1); 
    }
    //Sorcerer
    else if (type=="Sorcerer"){
        Sorcerer.M[4]++; Sorcerer.M[5]++;
        MenuUpglvl.S[(n)]++; click-=MenuUpg$.S[(n)]; 
        incandset("Banker",1); 
    }
    else if (type=="Banker"){
        Banker.M[4]++; Banker.M[5]++;
        MenuUpglvl.B[(n)]++; click-=MenuUpg$.B[(n)]; 
    }
    incandset(type,100*(prestige.level+1));
    updateMenu(type);
    }
else if(click <= MenuUpg$[char][(n)]){alert(nm);}
}
    

function upgradehider2(num, des){
    if(des==undefined){des="???";}
    document.getElementById("TT"+num).innerText="???";
    document.getElementById("Ti"+num).src=Logs.lc;
    document.getElementById("T$"+num).innerText="???";
    document.getElementById("Td"+num).innerText="\n "+des;
    document.getElementById("Td"+num).classList.add("reqdesc");
    menumaxer(num,'rev');
 
}
function setUpgtile(num, t1,price,t3,img,func,mode){   
    document.getElementById("Td"+num).classList.remove("reqdesc");
    document.getElementById("TT"+num).innerText=t1;
    document.getElementById("Ti"+num).src=img;
    number = price; gennumberconverter();
    document.getElementById("T$"+num).innerText=number+AU;
    document.getElementById("Td"+num).innerText=t3;
    document.getElementById("Ti"+num).setAttribute('onclick',func);
    if(mode==undefined || mode =="rev"){menumaxer(num, 'rev');}
    else if(mode=="fow"){menumaxer(num, mode);}
}
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
    if(type=="Clickster"){
        Clickster.M[1]=(Clickster.M[1]+number);
     }
    else if(type=="Sorcerer"){
        Sorcerer.M[1]=(Sorcerer.M[1]+number);
    }
    else if(type=="Banker"){
        Banker.M[1]=(Banker.M[1]+number);
    }
    updatetext();    
    checkcatprogress();
    updateMenucat();

}
function checkcatprogress(){
     Clickster.M[2]=(Clickster.M[0]+1)*1000*(Clickster.M[0]+1);
     Sorcerer.M[2]=(Sorcerer.M[0]+1)*1000*(Sorcerer.M[0]+1);
     Banker.M[2]=(Banker.M[0]+1)*10*(Banker.M[0]+1)**(Banker.M[0]+1);

       if(Clickster.M[1]>= Clickster.M[2]){ Clickster.M[1]=0; Clickster.M[0]++; checkcatprogress();}
       else if(Sorcerer.M[1]>= Sorcerer.M[2]){ Sorcerer.M[1]=0; Sorcerer.M[0]++; checkcatprogress();}
       else if(Banker.M[1]>= Banker.M[2]){ Banker.M[1]=Banker.M[1]-Banker.M[2]; Banker.M[0]++; checkcatprogress();}
    }

//Clickster Upg//

// 11  BC+10  0 //
function upgbaseclick10(){
    if(click>= MenuUpg$.C[0] && MenuUpglvl.C[0]<1 ){
        buyupgrade(0,"Clickster",MenuUpg$.C[0]); }
    else if(click< MenuUpg$.C[0]) {alert(nm);}
    else if( MenuUpglvl.C[0]>=1) {alert(upgm);}
    updatemenuclick10();
}
function updatemenuclick10(){
    mo = (prestige.level+1)*10;
    MenuUpg$.C[0]=((MenuUpglvl.C[0]+1)*100)*(mo)*(prestige.level+1);
    
    if(click<MenuUpg$.C[0] && clicker.M[3] <1){
        upgradehider2(11,"Do the Bare Minimum");
    }  
    else if(MenuUpglvl.C[0] >= 1){
        setUpgtile(11,"Base Click +"+mo, number , "Increases Base click Value by +"+mo, Logs.ptc,"upgbaseclick10()", 'fow' );
     
    }
    else if(click >= MenuUpg$.C[0] && MenuUpglvl.C[0]==0){
        number=MenuUpg$.C[0]; gennumberconverter();
        setUpgtile(11,"Base Click +"+mo, number , "Increases Base click Value by +"+mo, Logs.ptc,"upgbaseclick10()", 'rev' );
    }
  
}

// 12 Click Cooldown 1 //
function upgradeCcd(){
    if(click >= MenuUpg$.C[1]){
        buyupgrade(1,"Clickster", Cl1ickster.CD[1]);
    }
    else if(click < MenuUpg$.C[1]){
        alert(nm);
    }
}
function updateCcd(){
    MenuUpg$.C[1]=((MenuUpglvl.C[1]+MenuUpglvl.C[1]+1)*156)*10+4300000;
    if(click<MenuUpg$.C[1] && MenuUpglvl.C[1]==0){
        upgradehider2(12);
    }
    else if(click >= MenuUpg$.C[1]){
        number=MenuUpg$.C[0]; gennumberconverter();
        setUpgtile(12,"No more CD!", number , "No more Cooldown on Click", Logs.Ccd, 'upgradeCcd()' );
    } 
}
//13 Auto unlock//
function unlockautoclicker(){
    if (click >= MenuUpg$.C[2] && MenuUpglvl.C[2]<3){
        buyupgrade(2, "Clickster", MenuUpg$.C[2]);
    }
    else if(click< MenuUpg$.C[2]){
        alert(nm);
    }
    else{alert(upgm);}
    updatemenuautoUL();
}
function updatemenuautoUL(){
    MenuUpg$.C[2]=((MenuUpglvl.C[2]+1)*10000)*(MenuUpglvl.C[2]+1);
if (click < MenuUpg$.C[2] && MenuUpglvl.C[2]==0){
    upgradehider2(13, "Hatch a pet");
}
else if (click >= MenuUpg$.C[2] && MenuUpglvl.C[2]==0){
    number = MenuUpg$.C[2]; gennumberconverter();
    setUpgtile(13,"Unlock Auto Scratcher", number, "Unlock the AutoScratcher", Logs.ac, "unlockautoclicker()");
}
else if( MenuUpglvl.C[2]==1){
    setUpgtile(13,"Unlock Auto Scratcher", number, "Unlock the AutoScratcher", Logs.ac, "unlockautoclicker()", true, "fow");
}
}
// 14 Trio //
document.getElementById("clickerimg").addEventListener("dblclick", Trioclick);

function Trioclick(){
    if(Clickster.Trio[2]==false && MenuUpglvl.C[3]>0){
  click+=(clicker.M[1]+1)*3; Clickster.Trio[2]=true;
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
        buyupgrade(3,"Clickster", MenuUpg$.C[3]);}
    else {
        alert("Cannot Upgrade trio Click");
    }
    updatemenutrioclick();
}
function updatemenutrioclick(){
    MenuUpg$.C[3]=(MenuUpglvl.C[3]+1)*1000*170000*(prestige.level+1);
    number=MenuUpg$.C[3]; gennumberconverter();
    if (click <= MenuUpg$.C[3] && MenuUpglvl.C[3]<1){
       upgradehider2(14,"Reach 333 Total Clicks");
    }else if(click >= MenuUpg$.C[3] && MenuUpglvl.C[3]==0){
        setUpgtile("14","Unlock Tri Click",number,"Score three hits on the chest at once! \n Cooldown: "+Clickster.Trio[3]/10+"Seconds",Logs.bweb,"unlocktrioclick()");
    }
    else if(MenuUpglvl.C[3]==1 ){
          setUpgtile("14","Tri Click",number,"Score three hits on the chest at once! \n Cooldown:"+Clickster.Trio[3]/10+"Seconds",Logs.bweb,"unlocktrioclick()");
        menumaxer("14", "fow");
    }
}
// 15 Lucky Click //
function unlockluckyclick(){
    if(click>= MenuUpg$.C[4]){
        buyupgrade(4, "Clickster", Clickseter.Luck[0]);

    }
    else if(click <= MenuUpg$.C[4]){
        alert(nm);
    }
}
function updatemenuLuckyclick(){
    MenuUpg$.C[4]=(MenuUpg$.C[4]+1)*10003*(MenuUpg$.C[4]+1)*(prestige.level+1);
    if(click <= MenuUpg$.C[4] && MenuUpglvl.C[4]<=0){
        upgradehider2(15,"Are you felling Lucky?");
    }
    else if(MenuUpglvl.C[4]>1){
        setUpgtile(15, "Lucky Click!", number, "Every 50000, ", Logs.bweb, "unlockluckyclick()", "fow");
        menumaxer(15, "fow");
    }
    else if(Clickster){
        setUpgtile("15", "Lucky Click!", number, "Every 50000, ", Logs.bweb, "unlockluckyclick()", "fow");
    }
}

// 21 - SHIFTERY 5 //
function upgshiftery() {
    if (click >= MenuUpg$.C[5]) {
        buyupgrade(5,"Clickster");
        StartShift();
    }
    menushiftupdate();
}

function menushiftupdate() {
    MenuUpg$.C[5]=(prestige.level+1)*555000000000;
    if (MenuUpglvl.C[5] == 0 && click< MenuUpg$.C[5]) {
        upgradehider2(21,"Increase Party points");
    } 
    else if (MenuUpglvl.C[5] == 0) {
        setUpgtile(21, "Unlock Shiftery",MenuUpg$.C[5],"Increase bonus by shifting through colours",Logs.shift,"upgshiftery()") 
    } 
    else if (MenuUpglvl.C[5] == 1) {   setUpgtile(21, "Shiftery",MenuUpg$.C[5],"Increase bonus by shifting through colours",Logs.shiftM,"upgshiftery()" , 'fow')  }
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
    
    if (prestige.level< 1 && MenuUpglvl.C[6]< 1){
        upgradehider2(22,"Prestige Once");
    }
    else if (MenuUpglvl.C[6]< 1) {
        setUpgtile(22,"Chest Buster",MenuUpg$.C[6]," The chest weakens as you get closer to prestige, giving you more gold", Logs.chestv3, "unlock")
    } else if (MenuUpglvl.C[6] >= 1) {
        setUpgtile(22,"Chest Buster",MenuUpg$.C[6]," The chest weakens as you get closer to prestige, giving you more gold \nCurrent:"+difference(prestige.prog,prestige.req), Logs.chestv3, "unlock", 'fow')

    }
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
        buyupgrade(7,"Clickster");
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
        upgradehider2(23,"Get angry");
    }
    else if (MenuUpglvl.C[5] == 0) {
        setUpgtile(23,"Unlock Rage", MenuUpg$.C[7], "Unlock rage generator and new upgrades!",Logs.rageB,"unlockrage()" );
    }
    else if (MenuUpglvl.C[5] == 1) {
        setUpgtile(23,"Rage", MenuUpg$.C[7], "Unlock rage generator and new upgrades!",Logs.rageB,"unlockrage()", "fow" );
    }
    //Reduction//
    MenuUpg$.C[9] = (MenuUpglvl.C[9] + 1) * 1543209 * +800000 * (1 + rage.level);
     if (MenuUpglvl.C[9] ==0 && click<MenuUpg$.C[9]) {upgradehider2(25,"Unlock Rage");}
    else if (MenuUpglvl.C[9] < 9 && MenuUpglvl.C[7]!=2) {Ragered.Utitle.innerText="Rage "+AU+"cost Reduction"; Ragered.Uimg.src=Logs.rageReda; number = MenuUpg$.C[9]; gennumberconverter(); Ragered.U$.innerText = number +AU; }
    else if(MenuUpglvl.C[9]<9 &&MenuUpglvl.C[7]==2){ setUpgtile(25,"Rage Cost Reduction", MenuUpg$.C[7],"Rage cost reduction",Logs.rageRedaM,"ragemanacostupg()")}
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

//Button 1 fireball multi//
function menufireballupgrade() {
    if (click < MenuUpg$.S[0]) {
        alert("Cant upgrade fireball"); idj++;
    }
    else if (click >= MenuUpg$.S[0] && MenuUpglvl.S[0] == 4) {
        click -= MenuUpg$.S[0];
      
        MenuUpglvl.S[0] = "max";
    }
    else if (click >= MenuUpg$.S[0] && MenuUpglvl.S[0] != "max") {
      buyupgrade(0, "Sorcerer", MenuUpg$.S[0]);
    }
    else { boardS2 = "Fireball trying upgrade /fail"; }
    console.log('menu fireball upgrade complete'); 
    updateMenu('Sorcerer');

}
function updatemenufireball() {

    MenuUpg$.S[0] = (MenuUpglvl.S[0] + 1) + 5400 * (MenuUpglvl.S[0] + 1) ** (MenuUpglvl.S[0] + 1);

    number = MenuUpg$.S[0]; gennumberconverter();
    MuT.T$11.innerText = number + AU;
    if( MenuUpglvl.S[0] == 0&&click<=MenuUpg$.S[0]) {
        upgradehider2('11');
        fire.status = "x1";
        fire.img.src=Logs.Fx1;
    }
    else if (MenuUpglvl.S[0] == 0) {
        setUpgtile(11, "FireSplit (x2)",number,"Your fire splits and deals twice as much damage" + "\n(Slight Mana increase)",Logs.Fx2, "menufireballupgrade()");
        fire.status = "x1";fire.img.src=Logs.Fx1;
    }
    else if (MenuUpglvl.S[0] == 1) {
        MuT.Ti11.src = Logs.Fx3;
        setUpgtile(11, "FireTrio (x3)",number,"Your fire splits and deals Thrice! as much damage" + "\n(Slight Mana increase)",Logs.Fx3, "menufireballupgrade()");
        fire.status = "x2";
        fire.img.src=Logs.Fx2;
    } else if (MenuUpglvl.S[0] == 2) {
        MuT.Ti11.src = Logs.Fx5;
        setUpgtile(11, "FireBarrage (x5)",number,"Your fire now splits 5 times and deals 5x as much damage" + "\n(Small Mana Cost increase)",Logs.Fx5, "menufireballupgrade()");
   
        MuT.T$11.innerText = MenuUpg$.S[0];

        fire.status = "x3";fire.img.src=Logs.Fx3;
    }
    else if (MenuUpglvl.S[0] == 3) {
        MuT.Ti11.src = Logs.Fx7;
        setUpgtile(11, "FireStorm (x7)",number,"Your fire becomes uncontrollable and deals twice as much damage" + "\n(Moderate Mana cost increase)",Logs.Fx7, "menufireballupgrade()");
        fire.status = "x5";
        fire.img.src=Logs.Fx5;}
    else if (MenuUpglvl.S[0] == 4) {
        MuT.Ti11.src = Logs.FxM;
        setUpgtile(11, "FireMayhem (x?)",number,"All control is lost, Fireball casts between 9 and 19 orbs an will decide to cast itself for free occasionally" + "\n (Large Mana cost increase)",Logs.FxM, "menufireballupgrade()");
        MuT.TT11.innerText = "Fire Mayhem";
        MuT.Td11.innerText = "" + '\n' + "(Moderate mana castcost increase)";
        fire.status = "x7";
        fire.img.src=Logs.Fx7;
    } else if (MenuUpglvl.S[0] == "max") {
        MuT.TT11.innerText = "Fire King";
        setUpgtile(11, "FireKing (x?)","","Fireball casts between 9 and 19 orbs and will occasionally cast itself for free \n Enjoy the Chaos! ",Logs.Fxmax, "menufireballupgrade()", 'fow');
        menumaxer(11,"fow");
        fire.status = "xmayhem";fire.img.src=Logs.Fxmax;
    } 
}

//Button2 Arc Auto //
// Button 2 arcauto//
function upgarcautocast() {
    if (click >= MenuUpg$.S[1]) {
        buyupgrade(1,Sorcerer);
  
    }
    else {
        alert("no money");
        idj++;
    }
}
function updatemenuarcauto() {
    MenuUpg$.S[1] = 10e12;
    MuT.Ti12.src=Logs.arcau;

    if (MenuUpglvl.S[1]==0 && click<=MenuUpg$.S[1]){
        upgradehider2(12);
}
    else if (MenuUpglvl.S[1] == 1) {
        MuT.Ti12.src=Logs.aauM;
        menumaxer(MuT.T$12, MuT.Ti12);
    }
}

//15 All spells S4 //
function upgmenuallspells() {
    if (click >= MenuUpg$.S[4]) {
        buyupgrade(4,"Sorcerer");
    }
}
function updatemenuallspells() {

    mana.smv = (((mana.multilvl / 10 + mana.smv) + mana.smv) / 10);
    mana.smv.toFixed();
    Sorcerer.SpellMulti[2]=(MenuUpglvl.S[4]/10);

    document.getElementById("allspellscounter").innerText = player.allspells + 1;
    MenuUpg$.S[4] = (MenuUpglvl.S[4] + 1) * 1000000 * (MenuUpglvl.S[4] + 1+MenuUpglvl.S[4]);
    if(menu.currentupgtab=="Sorcerer"){
    if (click < MenuUpg$.S[4] &&MenuUpglvl.S[4]==0){
        upgradehider2(15,"Req: Cast x more spells");
    }
    else if (click>=MenuUpg$.S[4]||MenuUpglvl.S[4]< 99) {
        setUpgtile(15,"All Spells", number,"Increases the power of all spells by "+Sorcerer.SpellMulti[2]+"%",Logs.allspells,"upgmenuallspells()",'rev' ); 
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
    Manaflow.upg$=(prestige.level+1)*5060000+4000000000;
    if (Manaflow.lvl == 0 && click <Manaflow.upg$) { 
        upgradehider(Manaflow);
    }
    else if (Manaflow.lvl == 0) { Manaflow.Uimg.src=Logs.Mflow1;
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
        buyupgrade(6,"Sorcerer");
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
        upgradehider2(25,"Reach 100 total mana regen per second"); 
    }
    else if (MenuUpglvl.S[6]>0){
        setUpgtile(25,"Increase Max mana", MenuUpg$.S[6],"Manamaximum" + '\n' + "Current:" + mana.max + '\n' + " New:" + (mana.max + mana.maxinc),Logs.ManaMax,"menumanamaxinc()",'rev');
    }
}}
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
    if(menu.currentupgtab=="Sorcerer"){
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
    }}
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
    if (duplicator.lvl == 0 &&click<dupe$){
        upgradehider(duplicator);
    }
    else if (duplicator.lvl == 0 && click >= dupe$) { 
        duplicator.Utitle.innerText+"Unlock Duplicator";
        duplicator.Uimg.src=Logs.dupe;
        number = dupe$; gennumberconverter(); duplicator.U$.innerText = number + '💰';
        duplicator.Udesc.innerText=" 5X Multiplier (Forever)"; }
    else if (duplicator.lvl >= 1) { 
        duplicator.Uimg.src=Logs.dupeM;
        duplicator.Udesc.innerText=(5*duplicator.lvl)+"  Multiplier (Forever)";}
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
}}
function closealltabs() {
    closeprestige();
    closeupgrades(); closeupgtabs();
    closestats(); 
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
