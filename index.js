var cheerio = require('cheerio');

module.exports = function(Plugin) {
  Plugin.event.file.afterRender(function(file, renderedFile) {
    if (file && renderedFile) {
      var $ = cheerio.load(renderedFile);
      var p = $('p').first().contents();
      file.data.excerpt = $.html(p).trim();
    }
  });
};
