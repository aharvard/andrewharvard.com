const CleanCSS = require('clean-css');
const Terser = require('terser');
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
const {DateTime} = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({'src/public': '/'});

  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter('asPostDate', dateObj => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Returns work items, sorted by display order
  eleventyConfig.addCollection('portfolio', collection => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob('./src/portfolio/*.md'),
    );
  });

  eleventyConfig.addCollection('featured', collection =>
    sortByDisplayOrder(collection.getFilteredByTag('featured')),
  );

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
