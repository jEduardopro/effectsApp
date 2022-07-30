import * as usuarioActions from '../actions/usuario.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {


  constructor(
    private action$: Actions,
    private usuariosService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(
    () => this.action$.pipe(
      ofType(usuarioActions.cargarUsuario),
      mergeMap((action) => this.usuariosService.getUser(action.id).pipe(
          map(user => usuarioActions.cargarUsuarioSuccess({ usuario: user }) ),
          catchError((error) => of(usuarioActions.cargarUsuarioError({payload: error})) )
        )
      )
    )
  );


}
