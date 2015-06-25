requirejs.config({
  baseUrl: '.'
, paths: {
    'react': './bower_components/react/react.min'
  , 'jquery': './bower_components/jquery/dist/jquery.min'
  , 'marked': './bower_components/marked/marked.min'
  }
, shim: {
    'jquery': {
      exports: '$'
    }
  , 'react': {
      exports: 'React'
    }
  }
})

requirejs(['./news-reader'])