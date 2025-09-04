"use client";

import { Button } from "@mui/material";

export default function WhiteButton({ text, onClick }: MapButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        textTransform: "none",
        backgroundColor: "#fff",
        color: "var(--brown)",
        fontFamily: "Playfair Display",
        borderRadius: "2px",
      }}
    >
      {text}
    </Button>
  );
}

type MapButtonProps = {
  text: string;
  onClick?: () => void;
};
