var cheerio = require('cheerio');

module.exports = function(Plugin, options) {
  Plugin.event.file.afterRender(function(file, renderedFile) {

    if (file && renderedFile) {
      let fd = file.data;
      var $ = cheerio.load(renderedFile);
      var p = $('p').first().contents();

      // Clean text, or html enhanced text
      options.textOnly ?
        fd.excerpt = $.text(p).trim():
        fd.excerpt = $.html(p).trim();

      // Limits the excerpt length to your specified amount
      if (options.charLimit && fd.excerpt.length > options.charLimit) {
        fd.excerpt = fd.excerpt.substring(0, options.charLimit - 3) + "...";
      }
    }
  });
};
