"use client";

import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const redirecionar = () => {
    console.log("CPF:", cpf);
    console.log("Senha:", senha);

    router.push("/home");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col items-center rounded-xl border bg-amber-50 p-8">
        <div className="mb-4 text-xl font-bold">Login</div>

        <TextField
          variant="standard"
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="mb-4"
        />

        <TextField
          variant="standard"
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="mb-8"
        />

        <div className="mt-6">
          <Button onClick={redirecionar} variant="contained">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
