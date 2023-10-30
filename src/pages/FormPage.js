import React, { useState } from "react";
import { Container, TextField, Button, CssBaseline } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as reportService from "./../services/report";

import * as logger from "./../utils/logger";

const FormPage = (props) => {
  const navigate = useNavigate();
  //Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const [reportText, setReportText] = useState(undefined);
  
  const textChangeEvent = (event) => {
    logger.log("event");
    logger.log(event.target.value);
    setReportText(event.target.value);
  };

  const handleSubmitForm = async (formData) => {
    logger.log("HandleSubmitMethod");
    logger.log(formData);
    const templateReport = await reportService.getTemplateFromId(
      formData.templateId
    );
    logger.log(templateReport);
    navigate("/submit", {
      state: {
        formData: formData,
        templateReport: templateReport,
        reportText: String.raw`${reportText}`,
      },
    });
  };

  return (
    <>
      <Container
        style={{ marginTop: "20px" }}
        component="form"
        onSubmit={handleSubmit((data) => handleSubmitForm(data))}
        maxWidth="sm"
        background="primary"
      >
        <CssBaseline />
        <TextField
          id="outlined-basic"
          label="Template Id"
          variant="outlined"
          fullWidth
          {...register("templateId", { required: true })}
          error={Boolean(errors.templateId)}
          helperText={errors.templateId ? "Error: TemplateId required" : ""}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Report"
          multiline
          rows={20}
          fullWidth
          style={{ marginTop: "20px" }}
          // {...register("userReportContent", { required: true })}
          // error={Boolean(errors.userReportContent)}
          // helperText={
          //   errors.userReportContent ? "Error: Report content required" : ""
          // }
          onChange={(event) => {
            textChangeEvent(event);
          }}
        />

        <Button
          style={{ marginTop: "20px", textAlign: "left" }}
          variant="contained"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          style={{ margin: "auto", marginTop: "20px", textAlign: "left" }}
          variant="outlined"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button>
      </Container>
    </>
  );
};

export default FormPage;
