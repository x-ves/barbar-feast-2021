module.exports = {
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  },
  pluginOptions: {
    i18n: {
      locale: "et",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
};
