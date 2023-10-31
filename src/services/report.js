import axios from "axios";

import * as logger from "./../utils/logger";

export const getTemplateFromId = async (templateId) => {
  logger.log("Get template service method");
  logger.log("Received templateId: " + templateId);

  try {
    const response = await axios({
      method: "get",
      url: process.env.REACT_APP_BACKEND_LINK + `/get-report-template/${templateId}`,
    });
    return response.data.content;
  } catch (error) {
    logger.error(error);
    throw Error(error.message);
  }
};
