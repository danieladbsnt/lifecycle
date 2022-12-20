import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html'
})
export class ShowNameComponent implements OnInit, OnChanges {

  @Input() nombre!: string;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
  }

}
