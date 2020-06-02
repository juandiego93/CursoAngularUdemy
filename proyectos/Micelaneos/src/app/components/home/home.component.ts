import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` 
  <app-ng-style></app-ng-style>
  <hr>
  <h3>CSS Scope</h3>
  <app-css></app-css>
  <p>
    Hello World - This is a App with Angular
  </p>
  <hr>
  <app-clases></app-clases>
   <p appResaltado>
    Hola mundo
  </p>
  <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() { 
    console.log('ngOnInit');    
  }
  ngOnChanges() { 
    console.log('ngOnChanges');    
  }
  ngDoCheck() { 
    console.log('ngDoCheck');    
  }
  ngAfterContentInit() { 
    console.log('ngAfterContentInit');    
  }
  ngAfterContentChecked() { 
    console.log('ngAfterContentChecked');    
  }
  ngAfterViewInit() { 
    console.log('ngAfterViewInit');    
  }
  ngAfterViewChecked() { 
    console.log('ngAfterViewChecked');    
  }
  ngOnDestroy() { 
    console.log('ngOnDestroy');    
  }

}
