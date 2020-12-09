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

