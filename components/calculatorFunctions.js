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