export const tonHoleCalculation = (bench, burden, spacing, rockDensityTon) => {
    return Math.round(bench * burden * spacing * rockDensityTon);
};

export const drillingIndexCalculation = (burden, spacing, rockDensityTon) =>  {
    return Math.round(burden * spacing * rockDensityTon); 
};

export const H10_func = (L10, D11) => {
    if (D11 != 0){
        return Math.round(L10/D11);
    }
    return -1;
}

export const I10_func = (J10, K10) => {
    return Math.round(J10 * K10);
}

export const H11_func = (I11, D7, D6) => {
    if ((D7 + D6) != 0){
        return Math.round(I11/(D7 + D6));
    }
    return -1;
}