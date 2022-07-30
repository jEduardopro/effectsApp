import { createReducer, on } from '@ngrx/store';
import {cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError} from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  id: string,
  user: (Usuario | null),
  loaded: boolean,
  loading: boolean,
  error: any
};

const usuarioInitialState: UsuarioState = {
  id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export const usuarioReducer = createReducer(
  usuarioInitialState,

  on(
    cargarUsuario,
    (state, { id }) => ({
      ...state,
      loading: true,
      id
    }),
  ),

  on(
    cargarUsuarioSuccess,
    (state, { usuario }) => ({
      ...state,
      loading: false,
      loaded: true,
      user: {...usuario}
    }),
  ),

  on(
    cargarUsuarioError,
    (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: payload
    }),
  ),
);

