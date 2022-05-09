import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Munka } from 'backend/src/entity/Munka';
//import { Feladat } from 'backend/src/entity/Feladat';
import { Observable } from 'rxjs';
import {Feladat} from '../models/Feladat';
import { MunkaComponent } from '../munka/munka.component';
import { MunkaServiceService } from '../services/munka-service.service';
import { FeladatServiceService } from '../services/feladat-service.service';
import { MunkasServiceService } from '../services/munkas-service.service';


@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent implements OnInit {
  feladat$! : Observable<Feladat[]>;
  form!: FormGroup;
  munka$!: Observable<Munka[]>;

  constructor(private feladatService: FeladatServiceService,  private formBuilder: FormBuilder, private munkaservice: MunkaServiceService) { }

  ngOnInit(): void {
    this.feladat$ = this.fetchAll();

    this.munka$ = this.munkaservice.getMunka();

    this.form = new FormGroup(
      {
       id: new FormControl(),
       nev: new FormControl(),
       munkaid: new FormControl()
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  fetchAll(): Observable<Feladat[]>{
    console.log(this.feladatService.getFeladat());
    return this.feladatService.getFeladat();
  }

  delFeladat(id: Pick<Feladat, 'id'>): void {

    this.feladatService.delFeladat(id).subscribe(() => (
      this.feladat$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.feladatService.addFeladat(this.form.value, Number(this.form.value.munkaid)).subscribe(() => (
      this.feladat$ = this.fetchAll(),
      this.munka$ = this.munkaservice.getMunka(),

      console.log(typeof Number(this.form.value.munkaid))
    ));
  }




}
