//npm install exceljs

var Excel = require('exceljs');

//import * as RNFS from 'react-native-fs';

// let workbook = new Excel.Workbook();
// workbook = workbook.xlsx.readFile('Production_estimator.xlsx'); // replace question_39869739.xls with your file
// let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
// export async function writeCell() {
    
//     let workbook = new Excel.Workbook();
//     workbook = await workbook.xlsx.readFile('./Production_estimator.xlsx'); // replace question_39869739.xls with your file
//     let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
//     worksheet.getRow('4').getCell('D').value = 18; // replace rowNumber and cellNumber with the row and cell you want to modify
//     workbook.xlsx.writeFile('Production_estimator_copy.xlsx');
// }

// export async function readCell(){
//     const uri = FileSystem.cacheDirectory + 'Production_estimator.xlsx';

//     let workbook = new Excel.Workbook();
//     workbook = await workbook.xlsx.readFile(uri); // replace question_39869739.xls with your file
//     let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
//     const cell = worksheet.getRow('4').getCell('D').value
//     console.log(cell);
//     return cell;
// }

function openExcel(){
    return new Promise( (resolve, reject) => {
        let error = true;

        

        if (!error){
            let workbook = new Excel.Workbook()
            workbook = workbook.xlsx.readFile('./Production_estimator.xlsx'); // replace question_39869739.xls with your file
            resolve(workbook)
        }
        else{
            reject();
        }
        
    });
}

  function readCell(workbook){
    //console.log(typeof workbook)
    

    return new Promise( (resolve, reject) => { 
        let error = true;
        if (!error){
            let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
            const cell = worksheet.getRow('4').getCell('D').value
            resolve(cell);
        }
        else{
            reject('fail');
        }
    })
}


// writeCell();
// readCell();