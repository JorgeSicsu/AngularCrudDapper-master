import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioListar } from '../../models/Usuario';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
    selector: 'app-editar',
    imports: [FormularioComponent, CommonModule],
    templateUrl: './editar.component.html',
    styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  btnAcao = "Editar";
  descTitulo = "Editar Produtos"
  usuario!: UsuarioListar;

  constructor(private usuarioService:UsuarioService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(){
      console.log(1)
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.usuarioService.GetUsuarioId(id).subscribe(response => {
          this.usuario = response;
          console.log('Produto carregado para edição:', this.usuario); //
      });

  }

  editarUsuario(usuario:UsuarioListar){

  const confirmado = window.confirm('Deseja realmente alterar este produto?');
  //window.alert(JSON.stringify(usuario));
  if (confirmado) {
    this.usuarioService.EditarUsuario(usuario).subscribe(response => {
    this.router.navigate(['/']);
    })
  }

  }

}
