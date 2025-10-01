"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import Auth from "./components/auth";
import Table from "./components/table";

import { Guest } from "@/types/guest";

export default function ListaPageClient({ guests }: ListaPageClientProps) {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!sessionStorage) return;

    setAuthorized(sessionStorage.getItem("admin-logged-in") == "1");
  }, []);

  if (!authorized) return <Auth onAuthSuccess={() => setAuthorized(true)} />;
  return (
    <Box p={5} height="100%">
      <Table guests={guests} />
    </Box>
  );
}

export type TableGuestsListItem = Guest & { companions: Guest[] };

type ListaPageClientProps = {
  guests: TableGuestsListItem[];
};
