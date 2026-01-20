module.exports = async () => ({
  year: new Date().getFullYear(),
  environment: process.env.NODE_ENV,
});