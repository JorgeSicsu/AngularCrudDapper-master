import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioListar[] = [];
  usuariosGeral: UsuarioListar[] = [];

  constructor(private serviceUsuario:UsuarioService){}
 
 
  ngOnInit(): void {
    
this.serviceUsuario.GetUsuarios().subscribe(response => {
  this.usuarios = response ?? [];
  this.usuariosGeral = response ?? [];
});

  }

  search(event:Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.usuarios = this.usuariosGeral.filter(usuario =>{
      return usuario.nome.toLowerCase().includes(value);
    })
  }

deletar(id: number | undefined): void {
  if (!id) return;

  const confirmado = window.confirm('Deseja realmente excluir este produto?');

  if (confirmado) {
    this.serviceUsuario.DeletarUsuario(id).subscribe(() => {
      window.location.reload();
    });
  }
}

}
