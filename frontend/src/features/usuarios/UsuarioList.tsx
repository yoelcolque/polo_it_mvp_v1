'use client';
import { useEffect, useState } from 'react';
import { obtenerUsuarios } from '@/services/usuarioService';

export default function UsuarioList({ refresh }: { refresh: boolean }) {
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    obtenerUsuarios().then(setUsuarios);
  }, [refresh]);

  return (
    <ul className="space-y-2 mt-4">
      {usuarios.map((u) => (
        <li key={u.id} className="border p-2 rounded shadow">
          {u.nombre} {u.apellido} — {u.email}
        </li>
      ))}
    </ul>
  );
}
