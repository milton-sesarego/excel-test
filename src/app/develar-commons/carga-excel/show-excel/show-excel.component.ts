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
  dataRows: Array<Object> = [];
  columnsToDisplay: Array<string> = [];
  primeraFilaComoHeader: boolean = false;
  workbook;
  arryBuffer;
  constructor() { }

  ngOnInit(): void {
    this.workbook = new Excel.Workbook();
  }

  setHeader(value: boolean){
    this.primeraFilaComoHeader = value;
    if (this.arryBuffer){
      this.clearData()
      this.loadXLSX();
    }
  }
  
  clearData(){
    this.columnsToDisplay = []
    this.dataRows = []
  }

  uploadFile(event) {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    this.arryBuffer = new Response(target.files[0]).arrayBuffer();
    this.loadXLSX();
  }

  loadXLSX(){
    var self=this

    this.arryBuffer.then(function (data) {
      self.workbook.xlsx.load(data)
        .then(loadData);
    });

    function loadData(){
      const worksheet = self.workbook.getWorksheet(1);
      console.log('rowCount: ', worksheet.rowCount);
      
      if (!self.primeraFilaComoHeader){
        for ( const x of Array(worksheet.columnCount).keys()){
          self.columnsToDisplay.push(String.fromCharCode('A'.charCodeAt(0)+x));
        }
      }else{
        for ( const x of Array(worksheet.columnCount).keys()){
          self.columnsToDisplay.push(worksheet.getRow(1).values[x+1]);
        }
      }
      var minRowNumber = 0
      if (self.primeraFilaComoHeader){
        minRowNumber = 1;
      }
      worksheet.eachRow(function (row, rowNumber) {
        if (rowNumber>minRowNumber){
          var obj = {}
          row.values.forEach((d,i)=>{
            if(i!=0){
              obj[self.columnsToDisplay[i-1]] = d
            }
          })
          self.dataRows.push(obj);
        }
      });
    }
  } 
}
