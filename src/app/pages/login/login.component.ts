import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceuserService } from 'src/app/services/serviceuser.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public formLogin !: FormGroup
  token="true";
  datos:any[]=[]
  constructor(private formBuilder: FormBuilder, private servicio:ServiceuserService,
    private router:Router){}


  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
    
  }

  enviar(){
    console.log(this.formLogin.value)
    this.servicio.getUser().subscribe(res =>{
      this.datos = res

    if(this.formLogin.valid){
      for(let data of this.datos){

        if(data.username == this.formLogin.value.username && data.email == this.formLogin.value.password){
         
          Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Estas Logeado',
                showConfirmButton: false,
                timer: 1500
              })
              localStorage.setItem('logeado',this.token)
              this.router.navigate(['home'])
  
        }
      }
      }else{
        Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No debe haber campos vacios',
              footer: '<a href="">Why do I have this issue?</a>'
            })
      }

    }
    
    )
    
    console.log(this.datos) 
   
  }
}
