import { Component, OnInit } from '@angular/core';
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
  constructor(private munkaService: MunkaServiceService) { }

  ngOnInit(): void {
this.munka$ =this.fetchAll();

  }

  fetchAll(): Observable<Munka[]>{
    return this.munkaService.getMunka();
  }

}
