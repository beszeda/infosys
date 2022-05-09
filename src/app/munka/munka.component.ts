import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Munka } from '../models/Munka';
import { MunkaServiceService } from '../services/munka-service.service';
@Component({
  selector: 'app-munka',
  templateUrl: './munka.component.html',
  styleUrls: ['./munka.component.css']
})
export class MunkaComponent implements OnInit {
 
  munka$! : Observable<Munka[]>;
  form!: FormGroup;
  static munkaService: MunkaServiceService;

  constructor(private munkaService: MunkaServiceService,  private formBuilder: FormBuilder) { }




  ngOnInit(): void {
    this.munka$ = this.fetchAll();
    

    this.form = new FormGroup(
      {
       id: new FormControl(),
       tipus: new FormControl(),
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  fetchAll(): Observable<Munka[]>{
    return this.munkaService.getMunka();
  }




  delMunka(id: Pick<Munka, 'id'>): void {

    this.munkaService.delMunka(id).subscribe(() => (
      this.munka$ = this.fetchAll()
    ));
  }

  onSubmit(): void {
    this.munkaService.addMunka(this.form.value).subscribe(() => (
      this.munka$ = this.fetchAll()
    ));
  }




}
