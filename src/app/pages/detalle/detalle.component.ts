import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceuserService } from 'src/app/services/serviceuser.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{

  id=""
  datos:any[]=[]
  constructor(private servicio:ServiceuserService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
  this.servicio.getUser().subscribe(res=>{
    this.datos = res
    this.id = String(this.route.snapshot.paramMap.get('id'));

    

  })
}

}
