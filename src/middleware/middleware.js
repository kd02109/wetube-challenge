export const urlLogger = (req, res, next) => {
  console.log("Path: ", req.path);
  return next();
};

export const timeLogger = (req, res, next) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  console.log(`Date: ${year}.${month + 1}.${day}`);
  return next();
};

export const securityLogger = (req, res, next) => {
  const { protocol } = req;
  let secureStatus;
  if (protocol === "http") {
    secureStatus = "Insecure";
  } else if (protocol === "https") {
    secureStatus = "Secure";
  }
  console.log(secureStatus);
  return next();
};

export const protectorMiddelware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.status(404).redirect("/");
  }
  return next();
};

export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  return next();
};
