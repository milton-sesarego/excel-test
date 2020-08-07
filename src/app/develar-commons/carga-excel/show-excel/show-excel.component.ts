import { Component, OnInit, Input } from '@angular/core';
import { Asset } from '../../develar-entities';

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

}
