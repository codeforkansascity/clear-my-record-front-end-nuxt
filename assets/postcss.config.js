// Added this while trying to get Bootstrap scss to compile per https://gist.github.com/benmccallum/33ff008660218a578fc27fd33f51d1c1
// but think it is in the wrong location


// This will be merged with Nuxt's defaults as you can see in their source:
// https://github.com/nuxt/nuxt.js/blob/c55df0796832339f6c132fb76a266acc6b9f249b/lib/common/options.js#L94

// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    'precss': { },
    'autoprefixer': { }
  }
}
