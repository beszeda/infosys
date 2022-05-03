import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
//import { Gep } from 'backend/src/entity/Gep';
import { Observable } from 'rxjs';
import { Gep } from '../models/Gep';
import { GepServiceService } from '../services/gep-service.service';

@Component({
  selector: 'app-gep',
  templateUrl: './gep.component.html',
  styleUrls: ['./gep.component.css']
})
export class GepComponent implements OnInit {
  gepek$!: Observable<Gep[]>;
  form!: FormGroup;

  constructor(private gepService: GepServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gepek$ = this.fetchAll();

    this.form = new FormGroup(
      {
        id: new FormControl(),
        tipus: new FormControl()
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  fetchAll(): Observable<Gep[]> {
    console.log("asdasd ");
    return this.gepService.getGepek();
  }

  delGep(id: Pick<Gep, 'id'>): void {
    console.log("asd");
    this.gepService.delGepek(id);
  }

  getId(): Observable<Gep> {
    console.log("grne");
    return this.getId();
  }

  onSubmit(): void {
    this.gepService.addGepek(this.form.value).subscribe(() => (
      this.gepek$ = this.fetchAll()
    ));
  }


}
