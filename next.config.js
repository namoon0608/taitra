/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n,
    env: {
        customKey: "https://ewsadm.taiwantradeshows.com.tw/api/",
        imgKey: "https://ewsadm.taiwantradeshows.com.tw/",
    },
};

module.exports = nextConfig;
