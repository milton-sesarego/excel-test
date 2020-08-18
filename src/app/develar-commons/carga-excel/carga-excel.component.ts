import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { Asset, assetModel } from '../develar-entities';
import { Observable ,  Subject } from 'rxjs';
import * as Excel from 'exceljs'

@Component({
  selector: 'carga-excel',
  templateUrl: './carga-excel.component.html',
  styleUrls: ['./carga-excel.component.scss']
})
export class CargaExcelComponent implements OnInit {
  // upload component
  asset: Asset; 
  assets: Asset[] = []; 

  @Output() dataEmitter = new EventEmitter();
  dataArray: Array<object> = [];
  columnsToDisplay: Array<string> = [];
  firstRowAsHeader: boolean = false;
  workbook;
  arryBuffer;
  fileName;

  constructor() { }

  ngOnInit(): void {
    this.workbook = new Excel.Workbook();
  }

  uploadFile(event) {
    const target: DataTransfer = <DataTransfer>(event.target);

    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    this.fileName = target.files[0].name
    this.arryBuffer = new Response(target.files[0]).arrayBuffer();
    this.loadData();
  }

  loadData(){
    var self=this

    this.arryBuffer.then(function (data) {
      self.workbook.xlsx.load(data)
        .then(loadData);
    });

    function loadData(){
      const worksheet = self.workbook.getWorksheet(1);
      
      // if (!self.firstRowAsHeader){
        for ( const x of Array(worksheet.columnCount).keys()){
          self.columnsToDisplay.push(String.fromCharCode('A'.charCodeAt(0)+x));
        }
      // }else{
      //   for ( const x of Array(worksheet.columnCount).keys()){
      //     self.columnsToDisplay.push(worksheet.getRow(1).values[x+1]);
      //   }
      // }
      var minRowNumber = 0
      if (self.firstRowAsHeader){
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
          self.dataArray.push(obj);
        }
      });
    }
  }

  clearData(){
    this.columnsToDisplay = []
    this.dataArray = []
  }

  setFirstRowAsHeader(value: boolean){
    this.firstRowAsHeader = value;
    if (this.arryBuffer){
      this.clearData()
      this.loadData();
    }
  }

  returnData(){
    this.dataEmitter.emit(this.dataArray);
  }

  // upload component

  assetUpload(loader: Subject<Asset>){
    loader.subscribe(asset => {
      this.assets.unshift(asset);
      console.log(asset)
      this.asset= asset;
    });
  }

  addExternalAsset(loader: Subject<Asset>){
    loader.subscribe(url =>{
      let asset = assetModel.initNewExternalAsset(url);
      this.assets.unshift(asset);
      this.asset = asset;
    })
  }
}
