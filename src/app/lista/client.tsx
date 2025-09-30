"use client";

import { useState } from "react";
import Auth from "./auth";
import { Guest } from "@/types/guest";

export default function ListaPageClient({ guests }: ListaPageClientProps) {
  const [authorized, setAuthorized] = useState(false);

  if (!authorized) return <Auth onAuthSuccess={() => setAuthorized(true)} />;
  return <h1>Tabla sexosa</h1>;
}

type ListaPageClientProps = {
  guests: (Guest & { companions: Guest[] })[];
};
