'use client';
import { useState } from 'react';
import UsuarioForm from './UsuarioForm';
import UsuarioList from './UsuarioList';

export default function UsuariosPage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <main className="p-6 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
      <UsuarioForm onSuccess={() => setRefresh(!refresh)} />
      <UsuarioList refresh={refresh} />
    </main>
  );
}
