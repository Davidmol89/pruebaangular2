import { Component, Input, signal, SimpleChange } from '@angular/core';
import { repeat } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
@Input({required: true}) duration = 0;
@Input({required: true}) message = '';
counter =signal(0);
counterRef:number|undefined;


constructor() {
  console.log('constructor');
}

ngOnChanges(changes:SimpleChange) {
  //before and during the first render
  console.log('ngOnChanges');
  //console.log('-',repeat(10));
  console.log(changes);
  //const duration = changes['duration'];
  //if (duration && duration.currentValue !== duration.previousValue) {
  //  this.doSomething();
  //}
}

ngOnInit() {
  //after the first render
  console.log('ngOnInit');
  console.log('Duration:', this.duration);
  console.log('Message:', this.message);
  this.counterRef= window.setInterval(() => {
    console.log('Interval running');
    this.counter.update(statePrev => statePrev + 1);
  },1000)
}
ngAfterViewInit() {
  //after the first render and after the view is initialized
  console.log('ngAfterViewInit');
}
ngOnDestroy() {
  //when the component is destroyed
  console.log('ngOnDestroy');
  window.clearInterval(this.counterRef);
}
doSomething() {
  console.log('Doing something');
}
}
