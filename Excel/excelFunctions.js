//npm install exceljs

var Excel = require('exceljs');

// let workbook = new Excel.Workbook();
// workbook = workbook.xlsx.readFile('Production_estimator.xlsx'); // replace question_39869739.xls with your file
// let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
export async function writeCell() {
    let workbook = new Excel.Workbook();
    workbook = await workbook.xlsx.readFile('./Production_estimator.xlsx'); // replace question_39869739.xls with your file
    let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
    worksheet.getRow('4').getCell('D').value = 18; // replace rowNumber and cellNumber with the row and cell you want to modify
    workbook.xlsx.writeFile('Production_estimator_copy.xlsx');
}

export async function readCell(){
    let workbook = new Excel.Workbook();
    workbook = await workbook.xlsx.readFile('Production_estimator.xlsx'); // replace question_39869739.xls with your file
    //promise(workbook)
    let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
    const cell = worksheet.getRow('4').getCell('D').value
    console.log(cell);
}

//writeCell();
readCell();