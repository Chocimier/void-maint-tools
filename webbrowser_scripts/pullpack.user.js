// ==UserScript==
// @name     pullpack
// @version  1
// @grant    none
// @include  https://github.com/*/*/pull/*
// ==/UserScript==

(function(){
  var wrap = function(span, title){
    var user = span.title.split('/')[0]
    var branch = span.title.split(':')[1]
    var url = 'git@github.com:' + span.title.replace(/:.*/, '')
    var pkgname = (
      title
      .replace(/new package:(.+)-[^-]*\d[^-]*\s*$/i, '$1')
      .replace(/:.*/, '')
      .replace(/\[.+?\]/g, '')
      .replace(/\s/g, '')
    )
    var cloneP = document.createElement('p')
    var cloneCode = document.createElement('code')
    cloneCode.textContent = `pullpack -r ${user} -b ${branch} -u ${url} -p ${pkgname}`
    cloneP.appendChild(cloneCode)
    span.parentNode.insertBefore(cloneP, null)
  };
  var title = document.querySelector('.js-issue-title').textContent
  var spans = document.querySelectorAll('span.head-ref')
  for (var i = 0; i < spans.length; ++i) {
    wrap(spans[i], title)
  }
})();
