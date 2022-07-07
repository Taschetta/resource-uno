const sass = require('sass')
const path = require('node:path')

module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('source/**/*.png')

  eleventyConfig.addTemplateFormats('scss')

  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: (inputContent, inputPath) => {
      const parsed = path.parse(inputPath)

      if(parsed.name.startsWith('_')) {
        return;
      }
      
      const result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || '.'
        ]
      })

      return async () => {
        return result.css
      }
    }
  })

  return {
    dir: {
      input: 'source',
      output: 'public',
      layouts: '_layouts',
    }
  }  
}