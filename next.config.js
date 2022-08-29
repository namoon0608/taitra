/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const API_URL = "http://ewsadm.taiwantradeshows.com.tw/api/";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    env: {
        customKey: "https://ewsadm.taiwantradeshows.com.tw/api/",
    },
};

module.exports = nextConfig;
