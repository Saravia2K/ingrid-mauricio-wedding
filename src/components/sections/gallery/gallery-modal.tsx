"use client";

import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Box, IconButton, Modal, Paper, useTheme } from "@mui/material";
import { IoIosCloseCircle } from "react-icons/io";

import styles from "./gallery.module.scss";

export default function GalleryModal({
  photos,
  open,
  onClose,
}: GalleryModalProps) {
  const [selectedImage, setSelectedImage] = useState<StaticImageData>();

  return (
    <Modal open={open} onClose={onClose}>
      <React.Fragment>
        <CloseBtn onClick={onClose} />
        <Box
          component={Paper}
          position="absolute"
          display="grid"
          top="50%"
          left="50%"
          width="90%"
          height="90%"
          py={2}
          px={1}
          sx={{
            transform: "translate(-50%, -50%)",
            overflowX: "hidden",
            overflowY: "auto",
          }}
          className={styles.modal}
        >
          <Box width="100%" height="100%" sx={{ columnCount: 2, columnGap: 1 }}>
            {photos.map((p, i) => (
              <Image
                key={i}
                src={p}
                alt=""
                className={styles["gallery-img"]}
                onClick={() => setSelectedImage(p)}
              />
            ))}
          </Box>
          <Modal
            open={selectedImage != undefined}
            onClose={() => setSelectedImage(undefined)}
          >
            <React.Fragment>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt=""
                  className={styles["selected-img"]}
                />
              )}
            </React.Fragment>
          </Modal>
        </Box>
      </React.Fragment>
    </Modal>
  );
}

const CloseBtn = ({ onClick }: CloseBtnProps) => {
  const theme = useTheme();
  const tabletQuery = theme.breakpoints.up(768);

  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: 25,
        right: 5,
        p: 0,
        zIndex: 2,
        color: "#fff",
        [`${tabletQuery}`]: {
          right: 23,
        },
      }}
    >
      <IoIosCloseCircle style={{ fontSize: "2rem" }} />
    </IconButton>
  );
};

type GalleryModalProps = {
  photos: StaticImageData[];
  open: boolean;
  onClose: () => void;
};

type CloseBtnProps = {
  onClick: () => void;
};
