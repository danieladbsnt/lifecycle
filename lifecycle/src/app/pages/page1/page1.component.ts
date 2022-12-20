import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html'
})
export class Page1Component implements OnInit, OnChanges, DoCheck, 
                                       AfterContentInit, AfterContentChecked, 
                                       AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Fernando';
  segundos: number = 0;
  timeSubscription!: Subscription;

  constructor() {
    console.log('constructor');
   }
   
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timeSubscription.unsubscribe();
    console.log('timer limpio');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timeSubscription = interval(1000).subscribe(i => {
      this.segundos = i;
    })
  }

  guardar() {
    console.log('ho');
  }

}
