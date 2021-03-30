import { Decrement } from './../../../ngrx';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Increment } from 'src/app/ngrx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public counter$!: Observable<any>;

  constructor(private store: Store<{ counter: number }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(
      select('counter')
    )
  }

  increment() {
    this.store.dispatch(new Increment())
  }


  decrement() {
    this.store.dispatch(new Decrement())
  }
}
