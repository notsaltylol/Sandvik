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

WaterFall["F6"] = (D16)=>{return D16;}
WaterFall["F7"] = (D16)=>{return WaterFall["F6"](D16)/60.0;}

WaterFall["G6"] = 21.5
WaterFall["G7"] = WaterFall["G6"]/60.0;

WaterFall["H6"] = 26.25
WaterFall["H7"] = WaterFall["H6"]/60.0;

WaterFall["K6"] = ((D6, D7)=>{return D6+D7;})
WaterFall["K7"] = (D6, D7, D16)=>{return WaterFall["F6"](D16)/WaterFall["K6"](D6, D7)}

WaterFall["N6"] = ((D6,D7)=>{return D6+D7;})
WaterFall["N7"] = ((D6,D7)=>{
    return WaterFall["G6"]/WaterFall["N6"](D6, D7);
})

WaterFall["F8"] = (D6, D7, D16)=>{return WaterFall["K6"](D6, D7)/WaterFall["F7"](D16)}
WaterFall["G8"] = (D6, D7)=>{
    return WaterFall["N6"](D6,D7)/WaterFall["G7"];
}

WaterFall["H8"] = (D6, D7)=>{
    return WaterFall["N6"](D6,D7)/WaterFall["H7"];
}

WaterFall["F9"] = 120
WaterFall["F10"] = 60
WaterFall["F11"] = 120
WaterFall["F12"] = 60
WaterFall["F13"] = 60
WaterFall["F14"] = 420
WaterFall["F15"] = 7
WaterFall["F16"] = (D6, D7, D16)=> {return WaterFall["F15"] + WaterFall["F8"](D6, D7, D16)}

WaterFall["G9"] = 0
WaterFall["G10"] = 60
WaterFall["G11"] = 120
WaterFall["G12"] = 60
WaterFall["G13"] = 60
WaterFall["G14"] = 300
WaterFall["G15"] = 5
WaterFall["G16"] = (D6, D7)=>{
    return WaterFall["G15"]-WaterFall["G8"](D6, D7)
}

WaterFall["H9"] = 0
WaterFall["H10"] = 60
WaterFall["H11"] = 120
WaterFall["H12"] = 60
WaterFall["H13"] = 60
WaterFall["H14"] = 300
WaterFall["H15"] = 5
WaterFall["H16"] = (D6, D7)=>{
    return WaterFall["H15"]-WaterFall["H8"](D6, D7)
}

WaterFall["K8"] = (D6, D7, D16)=>{return WaterFall["K7"](D6, D7, D16)*WaterFall["F15"]}
WaterFall["N8"] = (D6, D7)=>{
    return WaterFall["N7"](D6, D7)*WaterFall["G15"]
}

WaterFall["F21"] = (D15)=>{return D15/60.8;}
WaterFall["F22"] = ((D14)=>{return D14/WaterFall["B12"];})
WaterFall["F20"] = (D15, D16)=>{return WaterFall["F21"](D15)/WaterFall["F6"](D16)}

WaterFall["G21"] = WaterFall["B31"]/2
WaterFall["G22"] = (D16)=>{return WaterFall["F6"](D16)*WaterFall["G21"]}

WaterFall["H21"] = (D15, D16)=>{return (WaterFall["G21"]-WaterFall["F21"](D15))*WaterFall["F6"](D16)}
WaterFall["I21"] = (D14, D16)=>{return WaterFall["F22"](D14)/WaterFall["G22"](D16)}

WaterFall["N11"] = (D6, D7, D16)=>{
    return WaterFall["F16"](D6, D7, D16)-WaterFall["G16"](D6, D7)
}

WaterFall["N12"] = (D6, D7, D16)=>{
    return WaterFall["N11"](D6, D7, D16)*WaterFall["F7"](D16)
}

WaterFall["N13"] = (D6, D7, D16)=>{
    return WaterFall["N12"](D6, D7, D16)/WaterFall["F6"](D16)
}

WaterFall["N15"] = (D6, D7)=>{
    return WaterFall["G16"](D6, D7)-WaterFall["H16"](D6, D7)
}

WaterFall["N16"] = (D6, D7)=>{
    return WaterFall["N15"](D6, D7)*WaterFall["H7"]
}

WaterFall["N17"] = (D6, D7)=>{
    return WaterFall["N16"](D6, D7)/WaterFall["F10"]
}

WaterFall["N20"] = (D15, D16)=>{return Math.round(WaterFall["F20"](D15, D16)*WaterFall["B12"])}

WaterFall["H23"] = (D6, D7, D16)=>{
    return WaterFall["G22"](D16)*WaterFall["N13"](D6, D7, D16)
}

WaterFall["G23"] = (D6, D7, D16)=> {
    return WaterFall["G22"](D16)+WaterFall["H23"](D6, D7, D16)
}
WaterFall["G24"] = (D6, D7, D16)=>{
    return (WaterFall["G23"](D6, D7, D16)+WaterFall["I24"](D6, D7))+WaterFall["G23"](D6, D7, D16)
}

WaterFall["H24"] = (D6, D7, D16)=> {
    return WaterFall["G24"](D6, D7, D16)-WaterFall["G23"](D6, D7, D16)
}

WaterFall["N21"] = (D16)=>{return Math.round(WaterFall["G22"](D16)*WaterFall["B12"])}
WaterFall["N22"] = (D6, D7, D16)=> {
    return Math.round(WaterFall["G23"](D6, D7, D16)*WaterFall["B12"]);
}
WaterFall["N23"] = (D6, D7, D16)=>{
    return Math.round(WaterFall["G24"](D6, D7, D16)*WaterFall["B12"]);
}
WaterFall["N24"] = (D6, D7, D16)=>{ return Math.round(WaterFall["N23"](D6, D7, D16))}

WaterFall["P20"] = (D15, D16)=>{return WaterFall["N20"](D15, D16)}
WaterFall["P21"] = (D15, D16)=>{return WaterFall["N21"](D16)-WaterFall["N20"](D15, D16)}
WaterFall["P22"] = (D16, D6, D7)=> {return WaterFall["N22"](D6, D7, D16)-WaterFall["N21"](D16)}
WaterFall["P23"] = (D6, D7, D16)=> { return WaterFall["N23"](D6, D7, D16)-WaterFall["N22"](D6, D7, D16)}

WaterFall["N29"] = ((D15, D16, D4, D5, D8)=>{return Math.round(D4*D5*D8*WaterFall["N20"](D15, D16));})
WaterFall["N30"] = ((D16, D4, D5, D8)=>{return Math.round(D4*D5*D8*WaterFall["N21"](D16));})
WaterFall["N31"] = ((D16, D6, D7, D4, D5, D8)=>{return Math.round(D4*D5*D8* WaterFall["N22"](D6, D7, D16));}) 
WaterFall["N32"] = ((D16, D6, D7, D4, D5, D8)=>{return Math.round(D4*D5*D8*WaterFall["N23"](D6, D7, D16));})
WaterFall["N33"] = ((D16, D6, D7, D4, D5, D8)=>{return Math.round(D4*D5*D8* WaterFall["N24"](D6, D7, D16));})

WaterFall["P29"] =(D15, D16, D4, D5, D8)=>{return WaterFall["N29"](D15, D16, D4, D5, D8)}
WaterFall["P30"] = (D15, D16, D4, D5, D8)=>{return WaterFall["N30"](D16, D4, D5, D8)-WaterFall["N29"](D15, D16, D4, D5, D8)}
WaterFall["P31"] = (D16, D6, D7, D4, D5, D8)=>{return WaterFall["N31"](D16, D6, D7, D4, D5, D8)-WaterFall["N30"](D16, D4, D5, D8)}
WaterFall["P32"] = (D16, D6, D7, D4, D5, D8)=>{return WaterFall["N32"](D16, D6, D7, D4, D5, D8) - WaterFall["N31"](D16, D6, D7, D4, D5, D8)}

WaterFall["I23"] = (D6, D7, D16)=> {
    return WaterFall["H23"](D6, D7, D16)/WaterFall["G22"](D16)
}

WaterFall["I24"] = (D6, D7)=>{
    return WaterFall["N17"](D6, D7);
}

WaterFall["F29"] = ((D15, D16, D4, D5, D8)=>{return D4*D5*D8*WaterFall["F20"](D15, D16);})
WaterFall["F31"] = ((D12)=>{return D12/WaterFall["B12"]})
WaterFall["G31"] = ((D16, D4, D5, D8)=>{return D4*D5*D8*WaterFall["G22"](D16);})
WaterFall["G32"] = ((D16, D6, D7, E10)=>{return E10*WaterFall["G23"](D6, D7, D16);})
WaterFall["G33"] = ((D16, D6, D7, D4, D5, D8)=>{return D4*D5*D8*WaterFall["G24"](D6, D7, D16);})

WaterFall["H31"] = (D15, D16, D4, D5, D8)=>{return WaterFall["G31"]-WaterFall["F29"](D15, D16, D4, D5, D8)}
WaterFall["H32"] = (D16, D6, D7, E10)=>{return WaterFall["G32"](D16, D6, D7, E10)-WaterFall["G31"]}
WaterFall["H33"] = (D16, D6, D7, D4, D5, D8, E10)=>{return WaterFall["G33"](D16, D6, D7, D4, D5, D8)-WaterFall["G32"](D16, D6, D7, E10)}

WaterFall["I31"] = (D15, D16, D4, D5, D8)=>{return WaterFall["F29"](D15, D16, D4, D5, D8)/WaterFall["G31"]}
WaterFall["I32"] = (D16, D6, D7, E10)=>{return WaterFall["H32"](D16, D6, D7, E10)/WaterFall["G31"]}
WaterFall["I33"] = (D6, D7)=>{
    return WaterFall["I24"](D6, D7);
}




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

