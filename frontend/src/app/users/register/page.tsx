'use client';

import UsuarioForm from "@/features/usuarios/UsuarioForm";

export default function RegisterUserPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Registrar Usuario</h1>
      <UsuarioForm onSuccess={() => alert('Usuario registrado con éxito')} />
    </main>
  );
}
