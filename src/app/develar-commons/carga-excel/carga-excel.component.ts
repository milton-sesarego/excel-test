import { Component, OnInit } from '@angular/core';
import { Asset, assetModel } from '../develar-entities';
import { Observable ,  Subject } from 'rxjs';

@Component({
  selector: 'carga-excel',
  templateUrl: './carga-excel.component.html',
  styleUrls: ['./carga-excel.component.scss']
})
export class CargaExcelComponent implements OnInit {
  assets: Asset[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  assetUpload(loader: Subject<Asset>){
    loader.subscribe(asset => {
      this.assets.unshift(asset);
      console.log(asset)
    });
  }

  addExternalAsset(loader: Subject<Asset>){
    loader.subscribe(url =>{
      let asset = assetModel.initNewExternalAsset(url);
      this.assets.unshift(asset);
    })
  }

}
