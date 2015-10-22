var cheerio = require('cheerio');

module.exports = function(Plugin) {
  Plugin.event.file.beforeRender(function(file) {
    if (file.collectionIds.has('post')) {
      var $ = cheerio.load(file.data.content);
      var p = $('p').first();
      file.data.excerpt = $.html(p).trim();
    }
  });
};
