let click = 0;
 //   Main:[M=[0,1,2,3,4,5,6,"Status","Truestatus",9,10],
 //   L: [ 'Name',
//Span//        Docget(Name + Master),
//Cast//        Docget(Name + CC), 
//Img//        Docget(Name + img),
//Btn/Upg$//       Docget(Name + btn), Docget(Name + txt),

const BM = {
 Test:{M : [1,2,3,4,5,6,7,"","",10,false]},

    Main:{M : [1,0,0,0,0,0,0,"","",0,false],
    L : ["Clicker",
        document.getElementById("ClickerMaster"),
        document.getElementById("ClickerCC"), 
        document.getElementById("Clickerimg"),
        document.getElementById("Clickerbtn"), document.getElementById("Clickertxt"), ]},
     
    Auto:{M : [0,0,0,0,0,0,0,"","",0,false],
    L : ["Auto Clicker",
        document.getElementById("AutoMaster"),
        document.getElementById("AutoCC"),
        document.getElementById("Autoimg"),
        document.getElementById("Autobtn"),  document.getElementById("Autotxt"), ]},
    
    Rage:{M : [0,0,0,0,0,0,0,"","",0,false],
        L : ["Rage",
        document.getElementById("RageMaster"),
        document.getElementById("RageCC"),
        document.getElementById("Rageimg"),
        document.getElementById("Ragebtn"),  document.getElementById("Ragetxt"), ]},

//SPells

    Fire:{ M : [0,0,0,0,0,0,0,"","",0,false],
    L : ["Fireball",
        document.getElementById("FireballMaster"),
        document.getElementById("FireballCC"), 
        document.getElementById("Fireballimg"),
        document.getElementById("Fireballbtn"), document.getElementById("Fireballtxt"), ]},
     
    Arc:{M : [0,0,0,0,0,0,0,"","",0,false],
    L : ["Arcball",
        document.getElementById("ArcballMaster"),
        document.getElementById("ArcballCC"),
        document.getElementById("Arcballimg"),
        document.getElementById("Arcballbtn"),  document.getElementById("Arcballtxt"), ]},
    
    Ice:{M : [0,0,0,0,0,0,0,"","",0,false],
        L : ["Iceball",
        document.getElementById("IceballMaster"),
        document.getElementById("IceballCC"),
        document.getElementById("Iceballimg"),
        document.getElementById("Iceballbtn"),  document.getElementById("Iceballtxt"), ]},

    Earth:{M : [0,0,0,0,0,0,0,"","",0,false],
    L : ["Earthball",
        document.getElementById("EarthballMaster"),
        document.getElementById("EarthballCC"),
        document.getElementById("Earthballimg"),
        document.getElementById("Earthballbtn"),  document.getElementById("Earthballtxt"), ]},
    
}
var currenttype='';
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
}

const Banker = {
    text : "Banker",
    
    M:[0,0,0,0,0,0,0,0],

    Wallt:[0,0],
    Harvest:[0,0],


    Reduc:[0,0],
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
const MenuUpgM = {
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



//Need format section//

//Menu $:cost;, UPG:upgmenu;,//
const MenuTabs= ['Menu','Upgrades','Stats',];
const menu = {
    o:false,
    open: " ",
    return: document.getElementById("main"),
    fieldset: document.getElementById("hiddenwrap"),
    Menutab: document.getElementById("menutab"),
    MenutabL: document.getElementById("menutable"),

    Statstab: document.getElementById("statstab"),
    StatstabL: document.getElementById("stats"), 
    statTC: "",

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
O11:0, TA11:document.getElementById("TA11"), TT11:document.getElementById("TT11"),Ti11:document.getElementById("Ti11"),T$11:document.getElementById("T$11"),Td11:document.getElementById("Td11"),
O12:1, TA12:document.getElementById("TA12"), TT12:document.getElementById("TT12"),Ti12:document.getElementById("Ti12"),T$12:document.getElementById("T$12"),Td12:document.getElementById("Td12"),
O13:2, TA13:document.getElementById("TA13"), TT13:document.getElementById("TT13"),Ti13:document.getElementById("Ti13"),T$13:document.getElementById("T$13"),Td13:document.getElementById("Td13"),
O14:3, TA14:document.getElementById("TA14"), TT14:document.getElementById("TT14"),Ti14:document.getElementById("Ti14"),T$14:document.getElementById("T$14"),Td14:document.getElementById("Td14"),
O15:4, TA15:document.getElementById("TA15"), TT15:document.getElementById("TT15"),Ti15:document.getElementById("Ti15"),T$15:document.getElementById("T$15"),Td15:document.getElementById("Td15"),
    //row 2//
D2:document.getElementById("upgTDrow2"),
O21:5, TA21:document.getElementById("TA21"), TT21:document.getElementById("TT21"),Ti21:document.getElementById("Ti21"),T$21:document.getElementById("T$21"),Td21:document.getElementById("Td21"),
O22:6, TA22:document.getElementById("TA22"), TT22:document.getElementById("TT22"),Ti22:document.getElementById("Ti22"),T$22:document.getElementById("T$22"),Td22:document.getElementById("Td22"),
O23:7, TA23:document.getElementById("TA23"), TT23:document.getElementById("TT23"),Ti23:document.getElementById("Ti23"),T$23:document.getElementById("T$23"),Td23:document.getElementById("Td23"),
O24:8, TA24:document.getElementById("TA24"), TT24:document.getElementById("TT24"),Ti24:document.getElementById("Ti24"),T$24:document.getElementById("T$24"),Td24:document.getElementById("Td24"),
O25:9, TA25:document.getElementById("TA25"), TT25:document.getElementById("TT25"),Ti25:document.getElementById("Ti25"),T$25:document.getElementById("T$25"),Td25:document.getElementById("Td25"),
    //Row 3// 
D3:document.getElementById("upgTDrow3"),   
O31:10, TA31:document.getElementById("TA31"), TT31:document.getElementById("TT31"),Ti31:document.getElementById("Ti31"),T$31:document.getElementById("T$31"),Td31:document.getElementById("Td31"),
O32:11, TA32:document.getElementById("TA32"), TT32:document.getElementById("TT32"),Ti32:document.getElementById("Ti32"),T$32:document.getElementById("T$32"),Td32:document.getElementById("Td32"),
O33:12, TA33:document.getElementById("TA33"), TT33:document.getElementById("TT33"),Ti33:document.getElementById("Ti33"),T$33:document.getElementById("T$33"),Td33:document.getElementById("Td33"),
O34:13, TA34:document.getElementById("TA34"), TT34:document.getElementById("TT34"),Ti34:document.getElementById("Ti34"),T$34:document.getElementById("T$34"),Td34:document.getElementById("Td34"),
O35:14, TA35:document.getElementById("TA35"), TT35:document.getElementById("TT35"),Ti35:document.getElementById("Ti35"),T$35:document.getElementById("T$35"),Td35:document.getElementById("Td35"),
     
}
const player = {
    id: "stri",
    allspells: 0,
    clickmulti: 0,
    TotalSpells:[0,0,0]
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
    lc: "Logs/MenuMix/Clicker/lq.png",
    bl: "", bweb:"bweb.ico",
    chestv3:"Logs/MenuMix/Chest/chestv3.png", chestv3M:"Logs/MenuMix/Chest/chestv3M.png",
    blastimg1: "Logs/Blast/Mblast1.png", MblastCD: "Logs/Blast/Mblast2.png",
    rageblast: "Logs/Blast/yragemb.png", rageauto: "Logs/Blast/rauto.png",
    blastmax: "Logs/Blast/raM.png",
    
//  Clickster
    ptc:"Logs/Kat/Clickster/ptc.png", ptcM:'Logs/Kat/Clickster/ptcM.png',
    
    Ccd:"Logs/MenuMix/Clicker/nCD.png",
    mc: "Logs/MenuMix/Clicker/mc.png", mcCD: "Logs/MenuMix/Clicker/mcCD.png",
    mcrage: "Logs/MenuMix/Clicker/rclick.png", mcrageCD: "",
    rageB:"Logs/Rage/rageballeye.png",    rageBM:"Logs/Rage/rageballeyemax.png",

    ac: "Logs/MenuMix/Clicker/ac.png", acCD: "Logs/MenuMix/Clicker/acCD.png",
    acauto: "Logs/MenuMix/Clicker/acauto.png", acM:"Logs/MenuMix/Clicker/acautomax.png",
    //spells//
    //Arc//
    Arc: "Logs/Arc/arc.png", ArcCD: "Logs/arc/ArcCD.png",
    ArcauCD:"Logs/Arc/arcauto.png",
    
    //fireKat/Sorcerer/0
    Fx1: "Logs/MenuMix/Fire/x1fireball.png",
    //ice//
    i1: "Logs/Ice/i1.jpg", iCD: "Logs/Ice/iCD.png",
  
    //earth//
    e1:"Logs/Earth/earthg.png",  eCD:"Logs/Earth/earthgrow.png",
    equake:"Logs/Earth/equ.png", equakeM:"Logs/Earth/equM.png",

    //menu//
    //Kat//
    Sorcerer:"Logs/Kat/Sorcerer.png", Clickster:"g.png", Banker:"Logs/Kat/Banker.png",
    //clickster

    //Sorcerer 
//Fire 11
    Fxa: "Logs/MenuMix/Fire/"+BM.Fire.M[7]+"fireball.png", 
    
    Fx2: "Logs/Kat/Sorcerer/0/x2fireball.png", Fx3: "Logs/Kat/Sorcerer/0/x3fireball.png",
    Fx5: "Logs/Kat/Sorcerer/0/x5fireball.png", Fx7: "Logs/Kat/Sorcerer/0/x7fireball.png", FxM: "Logs/Kat/Sorcerer/0/xmayhemfireball.png",
    Fxmax: "Logs/Kat/Sorcerer/0/xmaxfireball.png",
//Arc Auto 12
    Arcau:"Logs/Arc/arcauto.png",aauM:"Logs/Kat/Sorcerer/1/arcautoM.png",
//IceWall 13
    iW: "Logs/Kat/2/Ishield.png", iWM: "Logs/Kat/2/IshieldM.png",
//Earth
//AllSpells 15
    allspells:"Logs/MenuMix/allspells.png",
    manareg:"Logs/MenuMix/Mana/Manaregenp10.png" , manaregM:"Logs/MenuMix/Mana/mp10M.png",
   
    Mflow1:"Logs/MenuMix/Mana/MFG.png",   Mflow2:"Logs/MenuMix/Mana/MFGR.png",
    MfM:"Logs/MenuMix/Mana/MFGRM.png",
    ManaMax:"Logs/MenuMix/Mana/max.png",
    shift:"Logs/MenuMix/Chest/shift.png", shiftM:"Logs/MenuMix/Chest/shiftM.png", 

    NoP$:"Logs/Prestige/noP.png",NoP$M:"Logs/Prestige/noPM.png",
    manared:"Logs/MenuMix/Mana/reduction.png", manaredM:"Logs/MenuMix/Mana/reductionM.png",

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
    D1: "url(Logs/MenuMix/Chest/chestultra.png)", D2: "url(Logs/MenuMix/Chest/chestS2cropped.png)",
    D3: "url(Logs/MenuMix/Chest/chestv3.png)", Dlock: "url(Logs/MenuMix/Chest/Lockchest.png)",

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
    currentimg:"Logs/MenuMix/Clicker/tp.png",
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

//BARS//

var Pleveltext = document.getElementById('levelt');

var range = document.getElementById('myrange');
