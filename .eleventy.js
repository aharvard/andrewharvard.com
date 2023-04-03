const CleanCSS = require('clean-css');
const Terser = require('terser');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({'src/public': '/'});

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Returns work items, sorted by display order
  eleventyConfig.addCollection('work', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });

  eleventyConfig.addFilter('jsmin', function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log('Terser error: ', minified.error);
      return code;
    }
    return minified.code;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
