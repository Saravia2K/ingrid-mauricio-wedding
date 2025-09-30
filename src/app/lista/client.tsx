"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import Auth from "./components/auth";
import Table from "./components/table";

import { Guest } from "@/types/guest";

export default function ListaPageClient({ guests }: ListaPageClientProps) {
  const [authorized, setAuthorized] = useState(false);

  if (!authorized) return <Auth onAuthSuccess={() => setAuthorized(true)} />;
  return (
    <Box p={5}>
      <Table guests={guests} />
    </Box>
  );
}

export type TableGuestsListItem = Guest & { companions: Guest[] };

type ListaPageClientProps = {
  guests: TableGuestsListItem[];
};
