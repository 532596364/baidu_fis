/******************************定位资源**************************/
fis.match('*.{png,js,css}', {
  release: '/static/$0'
});

// 添加md5戳：对 js、css、png 图片引用 URL 添加 md5 戳：
fis.match('*.{js,css,png}', {
  useHash: true
});

 // fis-optimizer-uglify-js 插件进行压缩，已内置
fis.match('*.js', {
 
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// fis.match('*.html', {
//   //fis-optimizer-html-minifier 插件进行压缩
//   optimizer: fis.plugin('html-minifier')
// });


//合并打包需加
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

//css打包配置
fis.match('*.css', {
  packTo: '/pkg/aio.css'
});

//js打包配置
fis.match('*.js', {
  packTo: '/pkg/aio.js'
});



// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});




// fis.match('*.html', {
//   //fis-optimizer-html-minifier 插件进行压缩
//   optimizer: fis.plugin('html-minifier')
// });



// // 所有的 js
// fis.match('**.js', {
//     //发布到/static/js/xxx目录下
//     release : '/static/js$0'
// });

// // 所有的 css
// fis.match('**.css', {
//     //发布到/static/css/xxx目录下
//     release : '/static/css$0'
// });

// // 所有image目录下的.png，.gif文件
// fis.match('/images/(*.{png,gif})', {
//     //发布到/static/pic/xxx目录下
//     release: '/static/pic/$1$2'
// });

//css打包配置
// fis.match('*.css', {
//   packTo: '/static/aio.css'
// });
// fis.match('::package', {
//   packager: fis.plugin('map', {
//     '/static/css/aio.css': '/css/**.css'
//   })
// });
//js打包配置
// fis.match('*.js', {
//   packTo: '/static/aio.js'
// });
// fis.match('::package', {
//   packager: fis.plugin('map', {
//     '/static/js/aio.js': '/js/**.js'
//   })
// });

// fis.media('debug').match('*.{js,css,png}', {
//   release: '/static/$0',
//   useHash: false,
//   useSprite: false,
//   optimizer: null
// })










/******************************定位资源**************************/
// fis.match('**.js', {
//     release : '/static/js$0'
// });
// fis.match('**.css', {
//     release : '/static/css$0'
// });
// fis.match('/img/(*.{png,gif})', {
//     release: '/static/pic/$1$2'
// });

