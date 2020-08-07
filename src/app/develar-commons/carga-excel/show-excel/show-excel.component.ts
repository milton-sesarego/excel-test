import { Component, OnInit , OnChanges, Input} from '@angular/core';
import { Asset } from '../../develar-entities';
import * as Excel from 'exceljs/dist/exceljs.min.js'

@Component({
  selector: 'show-excel',
  templateUrl: './show-excel.component.html',
  styleUrls: ['./show-excel.component.scss']
})
export class ShowExcelComponent implements OnInit {
  @Input() asset: Asset;
  excelRows: Array<Object> = [];
  columnsToDisplay: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  readExcel(event) {
    
    const workbook = new Excel.Workbook();
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }

    const arryBuffer = new Response(target.files[0]).arrayBuffer();
    var self=this
    arryBuffer.then(function (data) {
      workbook.xlsx.load(data)
        .then(function () {

          const worksheet = workbook.getWorksheet(1);
          console.log('rowCount: ', worksheet.rowCount);
          
          for ( const x of Array(worksheet.columnCount).keys()){
            self.columnsToDisplay.push(String.fromCharCode('A'.charCodeAt(0)+x));
          }

          worksheet.eachRow(function (row, rowNumber) {
            var obj = {}
            row.values.forEach((d,i)=>{
              if(i!=0){
                obj[self.columnsToDisplay[i-1]] = d
              }
            })
            self.excelRows.push(obj);
          
          });
          console.log(self.excelRows)
        });
    });
  }
}
