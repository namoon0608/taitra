/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const API_URL = "https://anbon.vip/twtc_hydropower/api/";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    env: {
        customKey: "https://anbon.vip/twtc_hydropower/api/",
    },
};

module.exports = nextConfig;
