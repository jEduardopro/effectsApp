import * as usuariosActions from './../actions/usuarios.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {


  constructor(
    private action$: Actions,
    private usuariosService: UsuarioService
  ) {}

  // first effect
  cargarUsuarios$ = createEffect(

    () => this.action$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() => this.usuariosService.getUsers().pipe(
          map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) ),
          catchError((error) => of(usuariosActions.cargarUsuariosError({payload: error})) )
        )
      )
    )
  );


}
