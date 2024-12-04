import React, { useState } from "react";
import { Paper, Button, Box, Grid, Typography } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import { pages } from "./pages";
import { Page, PageContainer } from "./styles/pageStyles";

function PageFlipEffect() {
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
          {page.first ? (
            <Grid
              sx={{
                backgroundImage: `url(${page.img})`,
                backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
                backgroundPosition: "center", // Centra la imagen
                height: "45rem", // Ajusta la altura según tus necesidades
                width: "100%", // Ajusta el ancho al contenedor
                padding: "2rem",
                
              }}
            >
              <Grid
                xs={12}
                item
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{mt:'1rem'}}
              >
                <Typography variant={"h4"}>{page.title}</Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid
              xs={12}
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                height: "90%",
              }}
            >
              <Grid
                xs={12}
                item
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography variant={"h4"}>{page.title}</Typography>
              </Grid>
              <Grid
                xs={12}
                item
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Box
                  sx={{
                    width: 300, // Ancho fijo
                    height: 300, // Alto fijo
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    margin: "1rem auto",
                  }}
                >
                  <img
                    src={page.img}
                    alt={page.title} // Texto alternativo
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain", // Ajusta la imagen dentro del contenedor
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Grid>

              <Grid
                xs={12}
                item
                alignContent={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Typography
                  sx={{
                    background: "#c4f5c6",
                    borderRadius: "20px", // Bordes redondeados
                    padding: "1rem", // Espaciado interno
                    position: "relative", // Necesario para usar pseudo-elementos
                    boxShadow: `
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 -4px 8px rgba(0, 0, 0, 0.1),
      8px 0 8px rgba(0, 0, 0, 0.1),
      -8px 0 8px rgba(0, 0, 0, 0.1)
    `,
                    "&:before": {
                      content: "''",
                      position: "absolute",
                      top: "-10px",
                      left: "-10px",
                      right: "-10px",
                      bottom: "-10px",
                      borderRadius: "30px",
                      background: "white",
                      zIndex: -1,
                      boxShadow: `
        0 4px 10px rgba(0, 0, 0, 0.2),
        0 -4px 10px rgba(0, 0, 0, 0.2),
        4px 0 10px rgba(0, 0, 0, 0.2),
        -4px 0 10px rgba(0, 0, 0, 0.2)
      `,
                    },
                  }}
                  variant="h6"
                >
                  {page.description}
                </Typography>
              </Grid>
            </Grid>
          )}
          {/* <Typography style={{ textAlign: "center" }} variant={"subtitle2"}>
            {page.content}
          </Typography> */}
        </Page>
      ))}
    </PageContainer>
  );
}

export default PageFlipEffect;
