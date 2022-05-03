import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Munkas } from '../models/Munkas';
import { MunkasServiceService } from '../services/munkas-service.service';
@Component({
  selector: 'app-munkas',
  templateUrl: './munkas.component.html',
  styleUrls: ['./munkas.component.css']
})
export class MunkasComponent implements OnInit {
  munkas$! : Observable<Munkas[]>;
  form!: FormGroup;
  constructor(private munkasService: MunkasServiceService, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
this.munkas$ =this.fetchAll();

this.form = new FormGroup(
  {
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    oraber: new FormControl(),
    szakkepzetseg: new FormControl(),
    statusz: new FormControl()
  }
);

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fetchAll(): Observable<Munkas[]>{
    return this.munkasService.getMunkas();
  }


  delMunkas(id: Pick<Munkas, 'id'>): void {

    this.munkasService.delMunkas(id).subscribe(() => (
      this.munkas$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.munkasService.addMunkas(this.form.value).subscribe(() => (
      this.munkas$ = this.fetchAll()
    ));
  }

}
