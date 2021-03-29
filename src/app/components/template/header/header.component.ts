import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public counter$: Observable<any>;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
  }

  increment() {
    this.counter = this.counter + 1
  }


  decrement() {
    this.counter = this.counter - 1

  }
}
