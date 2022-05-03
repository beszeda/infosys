import { Component, OnInit } from '@angular/core';
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
  constructor(private munkasService: MunkasServiceService) { }

  ngOnInit(): void {
this.munkas$ =this.fetchAll();

  }

  fetchAll(): Observable<Munkas[]>{
    return this.munkasService.getMunkas();
  }

}
