"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Popup from "../components/Popup";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-teal-400 pt-16">
      <Navbar />

      <main className="flex flex-col items-center px-4">
        <div className="relative text-center text-white">
          <h1 className="mt-8 text-2xl font-semibold">Bem-vindo(a)!</h1>
          <div className="mt-5 flex items-center justify-center gap-2 text-xl">
            <span>Acompanhe postagens sobre pássaros no Twitter</span>

            <button
              onClick={() => setOpen((prev) => !prev)}
              className="transition hover:translate-x-1"
              aria-label="Pop up redes sociais"
            >
              +
            </button>
          </div>

          <Popup open={open} />
        </div>

        <div className="mb-14 mt-8 w-full max-w-4xl rounded-xl bg-white p-6 shadow-lg">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}
