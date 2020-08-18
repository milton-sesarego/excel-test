import { Component, OnInit , OnChanges,  EventEmitter, Input, Output} from '@angular/core';
import { Asset } from '../../develar-entities';

@Component({
  selector: 'show-excel',
  templateUrl: './show-excel.component.html',
  styleUrls: ['./show-excel.component.scss']
})
export class ShowExcelComponent implements OnInit {
  @Output() firstRowAsHeader = new EventEmitter();
  @Input() data: Array<object> = [];
  @Input() columnsToDisplay: Array<string> = [];
  @Input() fileName: string;
  
  constructor() { }

  ngOnInit(){
  
  }

  setHeader(value: boolean){
    this.firstRowAsHeader.emit(value);
  }
  
  
}
