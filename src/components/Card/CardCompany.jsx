import { Box } from "@mui/material";
import React from "react";

export default function CardCompany({ image, title, cashback }) {
  return (
    <Box
      className="rounded"
      boxShadow={2}
      bgcolor="white"
      minWidth="14vw"
      p="3vh"
    >
      <Box display="flex" justifyContent="center">
        <img alt={title} src={image} height="100px" />
      </Box>
      <div className="d-flex justify-content-center">
        <h5>{title}</h5>
      </div>
      <div className="d-flex justify-content-center">
        <p style={{ color: "blue" }}>{cashback} </p>
      </div>
    </Box>
  );
}
