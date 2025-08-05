import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';


@Component({
    selector: 'app-formulario',
    imports: [RouterModule, FormsModule, ReactiveFormsModule],
    templateUrl: './formulario.component.html',
    styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  @Input() btnAcao!:string;
  @Input() descTitulo!:string;
  @Input() dadosUsuario : UsuarioListar | null = null


  @Output() onSubmit = new EventEmitter<UsuarioListar>();
  // @Output() aoSalvar = new EventEmitter<UsuarioListar>(); // ✅ nome corrigido

  usuarioForm!:FormGroup;


  ngOnInit(): void {
    
    console.log(3)

    this.usuarioForm = new FormGroup({
        id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
        nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome :''),
        preco: new FormControl(this.dadosUsuario ? this.dadosUsuario.preco :''),
        descricao: new FormControl(this.dadosUsuario ? this.dadosUsuario.descricao :''),
    });
  }

  submit(): void{
    if (this.usuarioForm.valid){
      this.onSubmit.emit(this.usuarioForm.value);
    } else {
      window.alert('Preencha todos os campos corretamente!');
    }
    
  }


}
