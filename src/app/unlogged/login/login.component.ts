import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AmplifyService } from '../../app-service/amplify.service';
import { UserService } from '../../app-service/user.service';
import swal from'sweetalert2';
import { RestManagerService } from 'src/app/app-service/rest-manager.service';
import { REST } from 'src/app/app-service/rest-connections.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public hide=true;

  public myForm: FormGroup = this.fb.group({
    username: ['brandon.alvarez@acreditame.com', [ Validators.required, Validators.email ]],
    password: ['@Test987654321', [ Validators.required, Validators.minLength(3)]]
  });

  constructor( private fb: FormBuilder,
              private amplify: AmplifyService,
              private userService:UserService,
              private restService: RestManagerService,
              ) {}

  onSubmit():void{
    if (this.myForm.invalid) {
      swal.fire('Advertencia', 'Valide datos de formulario.', 'warning');
      this.myForm.reset({ username: '', password: '' });
      return;
    }    
    //Proceso de Login
    this.amplify.signIn(
        this.myForm.value['username'], 
        this.myForm.value['password']).then(ampUser => {
          try{
            const userId: string = ampUser.attributes['custom:uuid'];
            this.restService.getObjectById(REST.service.console, 'user/login', userId).subscribe(
            (response:any) => {
              if(response!=null && response['status']['id']==1){
                this.userService.setUserData(response, userId);
                location.reload();
              }else{
                swal.fire('Acceso invalido', 'Valida tus credenciales', 'error');
              }             
            }, (error:string) => {
              console.error(JSON.stringify(error));
              swal.fire('Acceso invalido', 'Valida tus credenciales', 'error');
            });
          }catch(e){
            swal.fire('Acceso invalido', 'Valida tus credenciales', 'error');
          }
        }).catch(err=>{
          swal.fire('Advertencia', 'No se pudo realizar login.', 'warning')
        });
  }
}
