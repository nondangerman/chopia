import React, { useState } from "react";
import { Paper, Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSwipeable } from "react-swipeable";

const PageContainer = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  width: "100%",
  height: "40rem",
  position: "relative",
  overflow: "hidden",
}));

const Page = styled(Paper)(({ theme, isActive }) => ({
  width: "100%",
  height: "100%",
  position: isActive ? "relative" : "absolute",
  backfaceVisibility: "hidden",
  transformStyle: "preserve-3d",
  transform: isActive ? "rotateY(0deg)" : "rotateY(-180deg)",
  transition: "transform 1s",
  top: 0,
  left: 0,
}));

function PageFlipEffect() {
  const pages = [
    { content: "Página 1", backgroundColor: "lightblue" },
    { content: "Página 2", backgroundColor: "lightcoral" },
    { content: "Página 3", backgroundColor: "lightgreen" },
    { content: "Página 4", backgroundColor: "gray" },
  ];

  const totalPages = pages.length;

  const [currentPage, setCurrentPage] = useState(0);

  // Configura los manejadores de deslizamiento
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentPage((prevPage) =>
        prevPage < totalPages - 1 ? prevPage + 1 : prevPage
      );
    },
    onSwipedRight: () => {
      setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  // Opcionalmente, oculta los botones en dispositivos móviles
  const isMobile = window.innerWidth <= 768;

  return (
    <PageContainer {...handlers}>
      {pages.map((page, index) => (
        <Page
          key={index}
          isActive={index === currentPage}
          sx={{
            backgroundColor: page.backgroundColor,
            zIndex: totalPages - index,
          }}
        >
          <Grid
            xs={12}
            container
            sx={{
              backgroundColor: "red",
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
              height: "90%",
            }}
          >
            <Grid xs={12} item alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
              <h1>hola</h1>
            </Grid>
          </Grid>
          <h2 style={{ textAlign: "center" }}>{page.content}</h2>
        </Page>
      ))}
    </PageContainer>
  );
}

export default PageFlipEffect;
