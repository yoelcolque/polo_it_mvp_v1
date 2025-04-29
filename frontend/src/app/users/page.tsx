'use client';

import { useState } from "react";
import UsuarioList from "@/features/usuarios/UsuarioList";

export default function ListaUsuariosPage() {
  const [refresh, setRefresh] = useState(false);

  return (
    <main className="p-6">
      <UsuarioList refresh={refresh} />
      <button onClick={() => setRefresh(!refresh)} className="mt-4 text-blue-600 underline">
        Actualizar
      </button>
    </main>
  );
}
