import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-options-list',
  templateUrl: './options-list.component.html',
  styleUrls: ['./options-list.component.scss']
})
export class OptionsListComponent implements OnInit {

  @Input() titulo: string;
  @Input() itemsList: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
