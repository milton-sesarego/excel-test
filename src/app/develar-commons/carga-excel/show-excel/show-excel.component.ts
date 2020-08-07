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
  excelRows: Array<Object>[] = [];
  columnsToDisplay: Array<Number>;

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

          console.log("workbook", workbook);
          const worksheet = workbook.getWorksheet(1);
          console.log('rowCount: ', worksheet.rowCount);
          self.columnsToDisplay= new Array(worksheet.columnCount);

          worksheet.eachRow(function (row, rowNumber) {
            self.excelRows.push(Object(row.values));
            console.log(self.excelRows);
            
          });
        });
    });
  }
}
