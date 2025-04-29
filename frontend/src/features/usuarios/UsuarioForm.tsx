'use client';
import { useState } from 'react';
import { crearUsuario } from '@/services/usuarioService';

export default function UsuarioForm({ onSuccess }: { onSuccess: () => void }) {
    type Rol = 'USUARIO' | 'ADMIN';

    const [form, setForm] = useState<{
      nombre: string;
      apellido: string;
      email: string;
      telefono: string;
      contraseña: string;
      confirmar: string;
      rol: Rol;
    }>({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      contraseña: '',
      confirmar: '',
      rol: 'USUARIO',
    });
    
      

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await crearUsuario({ ...form, telefono: Number(form.telefono) });
    setForm({ nombre: '', apellido: '', email: '', telefono: '', contraseña: '', confirmar: '', rol: 'USUARIO' });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" required />
      <input name="contraseña" value={form.contraseña} onChange={handleChange} placeholder="Contraseña" required />
      <input name="confirmar" value={form.confirmar} onChange={handleChange} placeholder="Confirmar" required />
      <select name="rol" value={form.rol} onChange={handleChange} className="col-span-2">
        <option value="USUARIO">USUARIO</option>
        <option value="ADMIN">ADMIN</option>
      </select>
      <button type="submit" className="col-span-2 bg-blue-600 text-white p-2 rounded">Crear Usuario</button>
    </form>
  );
}
