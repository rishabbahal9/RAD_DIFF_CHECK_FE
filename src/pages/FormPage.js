import React from "react";
import { Container, TextField, Button } from "@mui/material";

const FormPage = (props) => {
  return (
    <>
      <Container style={{marginTop: "20px"}}>
        <TextField
          id="outlined-basic"
          label="Template Id"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Report"
          multiline
          rows={20}
          fullWidth
          style={{marginTop: "20px"}}
        />
        <Button style={{marginTop: "20px", textAlign: "left"}} variant="contained">Submit</Button>
      </Container>
    </>
  );
};

export default FormPage;
