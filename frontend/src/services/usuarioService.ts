import { api } from '@/lib/api';

export const obtenerUsuarios = () =>
  api('/api/usuarios');

export const crearUsuario = (data: {
  nombre: string;
  apellido: string;
  email: string;
  telefono: number;
  contraseña: string;
  confirmar: string;
  rol: 'USUARIO' | 'ADMIN';
}) => api('/api/usuarios', 'POST', data);
