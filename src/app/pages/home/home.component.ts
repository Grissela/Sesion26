import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceuserService } from 'src/app/services/serviceuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  datos:any[]=[];
  
 constructor(private servicio:ServiceuserService, private router:Router){}
 ngOnInit(): void {
   this.servicio.getUser().subscribe(res =>{
    this.datos = res

   })
 }

 


}
