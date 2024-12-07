import React, { useState } from "react";
import { Paper, Button, Box, Grid, Typography, TextField } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import { pages } from "./pages";
import { Page, PageContainer } from "./styles/pageStyles";

function PageFlipEffect() {
  const totalPages = pages.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const correctPassword = "1234"; // Cambia esto por la contraseña deseada

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

  // Manejo de autenticación
  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 90); // Posición horizontal aleatoria (0-90%)
    const randomY = Math.floor(Math.random() * 90); // Posición vertical aleatoria (0-90%)
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Paper
          sx={{
            padding: "2rem",
            textAlign: "center",
            width: "300px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Iniciar sesión
          </Typography>
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "1rem" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
          >
            Entrar
          </Button>
        </Paper>
      </Box>
    );
  }

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
                sx={{ mt: "1rem" }}
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
                {page.img ? (
                  <>
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
                    {!page.last ? (
                      <>
                        <Typography
                          sx={{
                            background: "#c4f5c6",
                            mt: "3rem",
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
                      </>
                    ) : (
                      <>
                        <Grid
                          container
                          sx={{
                            position: "relative",
                            padding: "1rem",
                            mt: "2rem",
                          }}
                        >
                          <Grid item xs={6}>
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() =>
                                setCurrentPage((prevPage) =>
                                  prevPage < totalPages - 1
                                    ? prevPage + 1
                                    : prevPage
                                )
                              }
                            >
                              SI
                            </Button>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            sx={{
                              position: "relative", // Inicialmente relativo para alinearse con el botón SI
                            }}
                          >
                            <Button
                              variant="contained"
                              color="error"
                              onClick={moveNoButton}
                              sx={{
                                position:
                                  noButtonPosition.x === 0 &&
                                  noButtonPosition.y === 0
                                    ? "relative"
                                    : "absolute",
                                top: `${noButtonPosition.y}%`,
                                left: `${noButtonPosition.x}%`,
                                transform:
                                  noButtonPosition.x === 0 &&
                                  noButtonPosition.y === 0
                                    ? "none"
                                    : "translate(-50%, -50%)",
                              }}
                            >
                              NO
                            </Button>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </Grid>
            </Grid>
          )}
        </Page>
      ))}
    </PageContainer>
  );
}

export default PageFlipEffect;
