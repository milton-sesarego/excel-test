import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../../develar-entities';
import * as Excel from 'exceljs'

@Component({
  selector: 'show-excel',
  templateUrl: './show-excel.component.html',
  styleUrls: ['./show-excel.component.scss']
})
export class ShowExcelComponent implements OnInit {
  @Input() asset: Asset;

  constructor() { }

  ngOnInit(): void {
  }

  readExcel(event) {
        const workbook = new Excel.Workbook();
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
          throw new Error('Cannot use multiple files');
        }

        /**
         * Final Solution For Importing the Excel FILE
         */

        const arryBuffer = new Response(target.files[0]).arrayBuffer();
        arryBuffer.then(function (data) {
          workbook.xlsx.load(data)
            .then(function () {

              // play with workbook and worksheet now
              console.log(workbook);
              const worksheet = workbook.getWorksheet(1);
              console.log('rowCount: ', worksheet.rowCount);
              worksheet.eachRow(function (row, rowNumber) {
                console.log('Row: ' + rowNumber + ' Value: ' + row.values);
              });

            });
        });
      }

}
