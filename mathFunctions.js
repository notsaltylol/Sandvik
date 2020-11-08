export const ftToMeters = (ft) => {
    return ft * 0.3048;
}

export const metersToFeet = (m) => {
    return m * 3.28;
}

export const DrillingIndex = (D11, D7) => {
    return D11/D7;
}

export const TonHole = (D7, D4, D5, D8) => {
    return D7*D4*D5*D8;
}