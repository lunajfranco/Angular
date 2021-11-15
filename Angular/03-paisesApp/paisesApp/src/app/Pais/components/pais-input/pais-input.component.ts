import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

@Output() onEnter: EventEmitter<string> = new EventEmitter();
@Output() onDebounce: EventEmitter<string> = new EventEmitter();

@Input() placeholder: string = '';

termino: string = ""; 
onDebouncer: Subject<string> = new Subject();

ngOnInit(): void {
  this.onDebouncer
  .pipe(debounceTime(300))
  .subscribe(valor => {
    this.onDebounce.emit( valor )
  });
}

  buscar() {
    this.onEnter.emit(this.termino);
}
  teclaPresionada() {
    this.onDebouncer.next( this.termino );
  }
}
