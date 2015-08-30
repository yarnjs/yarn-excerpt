var cheerio = require('cheerio');

module.exports = function(Plugin) {
  Plugin.event.file.beforeRender(function(file) {
    if (file.collectionNames.has('post')) {
      var $ = cheerio.load(file.data.content);
      var p = $('p').first();
      file.data.excerpt = $.html(p).trim();
    }
  });
};
