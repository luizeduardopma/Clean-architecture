const isProduction = () => {
  console.log(process.env.NODE_ENV);
  if ((process.env.NODE_ENV = "development")) return false;
  return true;
};

export { isProduction };
