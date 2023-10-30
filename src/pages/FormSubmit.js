import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactDiffViewer from "react-diff-viewer";
import { Container, CssBaseline, Button } from "@mui/material";

import * as logger from "./../utils/logger";

const FormSubmit = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [templateContent, setTemplateContent] = useState(undefined);
  const [userContent, setUserContent] = useState(undefined);
  
  useEffect(() => {
    const data = location.state;
    logger.log(data);
    // Setting component state
    setTemplateContent(data?.templateReport);
    logger.log("data?.formData?.reportText")
    logger.log(data?.reportText)
    setUserContent(data?.reportText);
  }, []);

  const returnMethod = () => {
    navigate("/");
  };

  return (
    <>
      <Container
        style={{
          marginTop: "20px",
          margin: "auto",
          padding: "0px",
        }}
        background="primary"
      >
        <CssBaseline />
        <div style={{textAlign: "center"}}>
          <h3>Differences</h3>
        </div>
        <div style={{ margin: "20px", textAlign: "left" }}>
          <Button onClick={returnMethod}>Return</Button>
        </div>
        {userContent && templateContent && (
          <ReactDiffViewer
            oldValue={templateContent}
            newValue={userContent}
            splitView={true}
            useDarkTheme
          />
        )}
      </Container>
    </>
  );
};

export default FormSubmit;
