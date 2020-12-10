export let ProdEst = new Map();
//ProdEst is a Map which contains function definitions.
//Each cell in the Excel file has a function associated with it
//These functions belong to the file Production_estimator.exsl and the tab Summary
//All functions which have division include an if statement to ensure that a 
    //divide by 0 exception does not occur


ProdEst["D11"] = (bench, burden, spacing, rockDensityTon) => {
    return Math.round(bench * burden * spacing * rockDensityTon);
};

ProdEst["D10"] = (burden, spacing, rockDensityTon) =>  {
    return Math.round(burden * spacing * rockDensityTon); 
};

ProdEst["H10"] = (L10, D11) => {
    if (D11 != 0){
        return Math.round(L10/D11);
    }
    return -1;
}
ProdEst["H11"] = (I11, D7, D6) => {
    if ((D7 + D6) != 0){
        return Math.round(I11/(D7 + D6));
    }
    return -1;
}
ProdEst["H12"] = (I12, D7, D6) => {
    if ((D7+D6) === 0){
        return -1;
    }
    return Math.round((I12/(D7+D6)));
}
ProdEst["H13"] = (I13, D7, D6) => {
    if ((D7+D6) === 0){
        return -1;
    }
    return Math.round(I13/(D7+D6));
}
ProdEst["H14"] = (I14, D7, D6) => {
    if ((D7+D6) === 0){
        return -1;
    }
    return Math.round(I14/(D7+D6))
}

ProdEst["I10"] = (J10, K10) => {
    return Math.round(J10 * K10);
}
ProdEst["I11"] = (J11, K11) => {
    return Math.round(J11*K11);
}
ProdEst["I12"] = (J12, K12) => {
    return Math.round(J12*K12);
}
ProdEst["I13"] = (J13,K13) => {
    return Math.round(J13*K13);
}
ProdEst["I14"] = (J14,K14) => {
    return Math.round(J14*K14);
}

ProdEst["J11"] = (D15) => {
    return D15;
}
//*********************************************************************************************** */
ProdEst["J12"] = (WaterFallInfo_B32,WaterFallInfo_B12) => {
    return Math.round(WaterFallInfo_B32*WaterFallInfo_B12);
}
//************************************************************************************************* */
ProdEst["J13"] = ProdEst["J12"]
ProdEst["J14"] = ProdEst["J12"]

ProdEst["K11"] = (D16) => {
    return Math.round(D16);
}
ProdEst["K12"] = ProdEst["K11"] 
ProdEst["K13"] = ProdEst["K11"] 

ProdEst["K14"] = (K13,N14) => {
    return Math.round((K13*N14)+K13);
}

ProdEst["L10"] = (D12) => {
    return D12;
}
ProdEst["L11"] = (H11,D11) => {
    return Math.round(H11*D11);
}
ProdEst["L12"] = (H12, D11) => {
    return Math.round(H12*D11);
}
ProdEst["L13"] = (I13, D10) => {
    return Math.round(I13*D10);
}
ProdEst["L14"] = (I14,D10) => {
    return Math.round(I14*D10);
}

ProdEst["M10"] = () => {
    return 100;
}
ProdEst["M11"] = (L11,L10) => {
    if (L10 == 0){
        return -1;
    }
    return L11/L10;
}
ProdEst["M12"] = (L12, L10) => {
    if (L10 == 0){
        return -1;
    }
    return L12/L10;
}
ProdEst["M13"] = (L13,L10) => {
    if (L10 == 0){
        return -1;
    }
    return L13/L10;
}
ProdEst["M14"] = (L14,L10) => {
    if (L10 == 0){
        return -1;
    }
    return L14/L10;
}
