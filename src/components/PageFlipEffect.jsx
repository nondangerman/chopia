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
              <h1>{page.img}</h1>
            </Grid>
            <Grid
              xs={12}
              item
              alignContent={"center"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant={"h6"}>{page.description}</Typography>
            </Grid>
          </Grid>
          <Typography style={{ textAlign: "center" }} variant={"subtitle2"}>
            {page.content}
          </Typography>
        </Page>
      ))}
    </PageContainer>
  );
}

export default PageFlipEffect;
