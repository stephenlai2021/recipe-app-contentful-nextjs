const withPWA = require("next-pwa");

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  target: "serverless",
  pwa: {
    dest: "public",
  },
};
