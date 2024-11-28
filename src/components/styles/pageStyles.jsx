import { Paper, Button, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useSwipeable } from "react-swipeable";

export const PageContainer = styled(Box)(({ theme }) => ({
  perspective: "1000px",
  width: "100%",
  height: "40rem",
  position: "relative",
  overflow: "hidden",
}));

export const Page = styled(Paper)(({ theme, isActive }) => ({
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
