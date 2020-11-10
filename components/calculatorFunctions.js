export const tonHoleCalculation = (bench, burden, spacing, rockDensityTon) => {
    return Math.round(bench * burden * spacing * rockDensityTon);
};

export const drillingIndexCalculation = (burden, spacing, rockDensityTon) =>  {
    return Math.round(burden * spacing * rockDensityTon); 
};