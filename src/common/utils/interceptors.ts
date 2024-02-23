export const reqestInterceptor = (config: any) => {
  return config;
}

export const reqestErrorInterceptor = (error: any) => Promise.reject(error);
export const responeInterceptor = (response: any) => response;

export const responseErrorInterceptor = (error: any) => {
  const { response } = error;
  if (response && response.data.error) {
    const { message, code, detalis } = response.data.error;
    const errorTitle = message ? message :  "Application Error";
    const errorCode = code ? code : "Error Code";
    const errorDetails = detalis ? detalis : "Unknown Error";

    console.log({
      title: errorTitle,
      content: errorDetails,
      code: errorCode,
    });
  }
  else {
    console.log("Unknown Error");
  }
  Promise.reject(error);
};
