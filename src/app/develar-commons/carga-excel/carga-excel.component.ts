import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { Asset, assetModel } from '../develar-entities';
import { Observable ,  Subject } from 'rxjs';

import jsPDF from 'jspdf';


@Component({
  selector: 'carga-excel',
  templateUrl: './carga-excel.component.html',
  styleUrls: ['./carga-excel.component.scss']
})
export class CargaExcelComponent implements OnInit {
  assets: Asset[] = [];
  asset: Asset;

  @ViewChild('content', {static: false}) content: ElementRef;


  public downloadPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

  constructor() { }

  ngOnInit(): void {
  }

  assetUpload(loader: Subject<Asset>){
    loader.subscribe(asset => {
      this.assets.unshift(asset);
      console.log(asset)
      this.asset = asset
    });
  }

  addExternalAsset(loader: Subject<Asset>){
    loader.subscribe(url =>{
      let asset = assetModel.initNewExternalAsset(url);
      this.assets.unshift(asset);
      console.log(asset)
      this.asset = asset

    })
  }

}
