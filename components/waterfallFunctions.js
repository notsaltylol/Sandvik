export let WaterFall = new Map();
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
for(let i = 0; i < letters.length; i++){
    for(let j = 0;  j < numbers.length; j++){
        let name = letters[i] + numbers[j];
        WaterFall[name] = -1;
    }
}


WaterFall["B9"] = 12;
WaterFall["B10"] =  365*24;
WaterFall["B11"] = WaterFall["B10"]/12;
WaterFall["B12"] = WaterFall["B11"]/WaterFall["B9"];

WaterFall["B15"] = 0.88;
WaterFall["C15"] =WaterFall["B15"];

WaterFall["B16"] =  12;
WaterFall["C16"] =  WaterFall["B16"]

WaterFall["B17"] =  (WaterFall["B16"]*60)-((WaterFall["B16"]*60)*WaterFall["B15"]);
WaterFall["C17"] =  WaterFall["B17"] 

WaterFall["B18"] = 15;
WaterFall["C18"] = WaterFall["B18"]

WaterFall["B19"] = 15;
WaterFall["C19"] = WaterFall["B19"]

WaterFall["B20"] = 15;
WaterFall["C20"] = WaterFall["B20"]

WaterFall["B21"] = 15;
WaterFall["C21"] = WaterFall["B21"]

WaterFall["B22"] = 15;
WaterFall["C22"] = WaterFall["B22"]

WaterFall["B23"] = 30;
WaterFall["C23"] = WaterFall["B23"]

WaterFall["B24"] = 15;
WaterFall["C24"] = WaterFall["B24"]

WaterFall["B26"] = 60;
WaterFall["B27"] = 2;

WaterFall["B25"] =  WaterFall["B27"]*WaterFall["B26"]/7;
WaterFall["C25"] =  0;

WaterFall["B28"] =  WaterFall["B16"]-(WaterFall["B17"]+WaterFall["B18"]+WaterFall["B19"]+WaterFall["B20"]+WaterFall["B21"]+WaterFall["B22"]+WaterFall["B23"]+WaterFall["B24"]+WaterFall["B25"])/60;
WaterFall["C28"] =  WaterFall["C16"]-(WaterFall["C17"]+WaterFall["C18"]+WaterFall["C19"]+WaterFall["C20"]+WaterFall["C21"]+WaterFall["C22"]+WaterFall["C23"]+WaterFall["C24"]+WaterFall["C25"])/60;

WaterFall["B29"] = WaterFall["B16"];
WaterFall["B31"] = WaterFall["C28"] + WaterFall["B28"];
WaterFall["B32"] = WaterFall["B31"]/2;
WaterFall["B33"] = ((WaterFall["B9"]*60)-108)/60
WaterFall["B34"] = WaterFall["B32"]/WaterFall["B33"];

WaterFall["F6"] = (penRate)=>{return penRate;}
WaterFall["F7"] = WaterFall["F6"]/60.0;

WaterFall["G6"] = 21.5
WaterFall["G7"] = WaterFall["G6"]/60.0;

WaterFall["H6"] = 26.25
WaterFall["H7"] = WaterFall["H6"]/60.0;

WaterFall["K6"] = ((depth, proposedHole)=>{return depth+proposedHole;})
WaterFall["K7"] = WaterFall["F6"]/WaterFall["K6"]

WaterFall["N6"] = ((depth, proposedHole)=>{return depth+proposedHole;});
WaterFall["N7"] = WaterFall["G6"]/WaterFall["N6"]

WaterFall["F8"] = WaterFall["K6"]/WaterFall["F7"]
WaterFall["G8"] = WaterFall["N6"]/WaterFall["G7"]
WaterFall["H8"] = WaterFall["N6"]/WaterFall["H7"]

WaterFall["F9"] = 120
WaterFall["F10"] = 60
WaterFall["F11"] = 120
WaterFall["F12"] = 60
WaterFall["F13"] = 60
WaterFall["F14"] = 420
WaterFall["F15"] = 7
WaterFall["F16"] = WaterFall["F15"] + WaterFall["F8"]

WaterFall["G9"] = 0
WaterFall["G10"] = 60
WaterFall["G11"] = 120
WaterFall["G12"] = 60
WaterFall["G13"] = 60
WaterFall["G14"] = 300
WaterFall["G15"] = 5
WaterFall["G16"] = WaterFall["G15"] + WaterFall["G8"]

WaterFall["H9"] = 0
WaterFall["H10"] = 60
WaterFall["H11"] = 120
WaterFall["H12"] = 60
WaterFall["H13"] = 60
WaterFall["H14"] = 300
WaterFall["H15"] = 5
WaterFall["H16"] = WaterFall["H15"] + WaterFall["H8"]

WaterFall["K8"] = WaterFall["K7"]*WaterFall["F15"]
WaterFall["N8"] = WaterFall["N7"]*WaterFall["G15"]

WaterFall["F21"] = (utilizedHours)=>{return utilizedHours/60.8;}
WaterFall["F22"] = ((MMonth)=>{return MMonth;})/WaterFall["B12"]
WaterFall["F20"] = WaterFall["F21"]/WaterFall["F6"]

WaterFall["G21"] = WaterFall["B31"]/2
WaterFall["G22"] = WaterFall["F6"]*WaterFall["G21"]

WaterFall["H21"] = (WaterFall["G21"]-WaterFall["F21"])*WaterFall["F6"]
WaterFall["I21"] = WaterFall["F22"]/WaterFall["G22"]

WaterFall["N11"] = WaterFall["F16"]-WaterFall["G16"]
WaterFall["N12"] = WaterFall["N11"]*WaterFall["F7"]
WaterFall["N13"] = WaterFall["N12"]/WaterFall["F6"]
WaterFall["N15"] = WaterFall["G16"]-WaterFall["H16"]
WaterFall["N16"] = WaterFall["N15"]*WaterFall["H7"]
WaterFall["N17"] = WaterFall["N16"]/WaterFall["F10"]
WaterFall["N20"] = WaterFall["F20"]*WaterFall["B12"]

WaterFall["H23"] = WaterFall["G22"]*WaterFall["N13"]
WaterFall["G23"] = WaterFall["G22"]+WaterFall["H23"]
WaterFall["G24"] = (WaterFall["G23"]+WaterFall["I24"])+WaterFall["G23"]
WaterFall["H24"] = WaterFall["G24"]-WaterFall["G23"]

WaterFall["N21"] = WaterFall["G22"]*WaterFall["B12"]
WaterFall["N22"] = WaterFall["G23"]*WaterFall["B12"]
WaterFall["N23"] = WaterFall["G24"]*WaterFall["B12"]
WaterFall["N24"] = WaterFall["N23"]

WaterFall["P20"] = WaterFall["N20"]
WaterFall["P21"] = WaterFall["N21"]-WaterFall["N20"]
WaterFall["P22"] = WaterFall["N22"]-WaterFall["N21"]
WaterFall["P23"] = WaterFall["N23"]-WaterFall["N22"]

WaterFall["N29"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;}) * WaterFall["N20"]
WaterFall["N30"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;}) * WaterFall["N21"]
WaterFall["N31"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;}) * WaterFall["N22"]
WaterFall["N32"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;}) * WaterFall["N23"]
WaterFall["N33"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;}) * WaterFall["N24"]

WaterFall["P29"] = WaterFall["N29"]
WaterFall["P30"] = WaterFall["N30"]-WaterFall["N29"]
WaterFall["P31"] = WaterFall["N31"]-WaterFall["N30"]
WaterFall["P32"] = WaterFall["N32"] - WaterFall["N31"]

WaterFall["I23"] = WaterFall["H23"]/WaterFall["G22"]
WaterFall["I24"] = WaterFall["N17"]

WaterFall["F29"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;})*WaterFall["F20"]
WaterFall["F31"] = ((numHoles)=>{return numHoles})/WaterFall["B12"]
WaterFall["G31"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;})*WaterFall["G22"]
WaterFall["G32"] = ((ProdE10)=>{return ProdE10;})*WaterFall["G23"]
WaterFall["G33"] = ((ProdD4, ProdD5, ProdD8)=>{return ProdD4*ProdD5*ProdD8;})*WaterFall["G24"]

WaterFall["H31"] = WaterFall["G31"]-WaterFall["F29"]
WaterFall["H32"] = WaterFall["G32"]-WaterFall["G31"]
WaterFall["H33"] = WaterFall["G33"]-WaterFall["G32"]

WaterFall["I31"] = WaterFall["F29"]/WaterFall["G31"]
WaterFall["I32"] = WaterFall["H32"]/WaterFall["G31"]
WaterFall["I33"] = WaterFall["I24"]




// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}
// WaterFall["B"] = () => {return ;}

