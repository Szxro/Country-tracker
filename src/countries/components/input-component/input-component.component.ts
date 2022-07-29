import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styles: [
  ]
})
export class InputComponentComponent implements OnInit {

  arg:string='';
  dbouncer:Subject<string>=new Subject();

  @Output()onSend:EventEmitter<string>=new EventEmitter();
  @Output()onDebounce:EventEmitter<string>=new EventEmitter();

  ngOnInit(): void {
    this.dbouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value =>this.onDebounce.emit(value));
  }

  sendData():void{
    this.onSend.emit(this.arg);
  }

  keyPress():void{
   this.dbouncer
   .next(this.arg);
  }
}
