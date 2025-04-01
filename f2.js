var myLinks = [
"http://mp.musz.info",
"http://cv.musz.info",
"http://gfivyrc.s602.xrea.com",
"http://redp.s1009.xrea.com",
"http://it.alrau.com",
"http://it.ivyrc.com",  
"http://ce.ivyrc.com",
"http://fappening.ivyrc.com",
"http://br.ivyrc.com", 
"http://tnayr.s1007.xrea.com",
"http://lrmusz.s1007.xrea.com",
"http://celebfq.blogspot.com/?m=1", 
"https://dlmusz.blogspot.com/?m=1", 
"https://tntita.blogspot.com/?m=1", 
"https://sdfsefds.blogspot.com/?m=1", 
"https://hihantwe.blogspot.com/?m=1", 
"https://yaswpra.blogspot.com/?m=1", 
"https://cealr.blogspot.com/?m=1", 
"https://sowildpthi.blogspot.com/?m=1", 
"https://wissindo.blogspot.com/?m=1", 
"https://nycmetropolitan.blogspot.com/?m=1", 
"https://tnayrc.blogspot.com/?m=1", 
"http://indoviral.doorblog.jp", 
"http://myrf.doorblog.jp", 
"https://spichen.blogspot.com/?m=1", 
"https://2danbi.blogspot.com/?m=1", 
"https://celebalt.blogspot.com/?m=1", 
"https://yomich.blogspot.com/?m=1", 
"https://padxfi.blogspot.com/?m=1", 
"https://waremp3.blogspot.com/?m=1",
"https://celebruu.blogspot.com/?m=1",
"https://meggiita.blogspot.com/?m=1",
"https://kbjblogmusz.blogspot.com/?m=1"
]
var myLinks1 = myLinks.sort( () => (Math.random() - .5) ).slice(0, 10);
var myLinks2 = myLinks.sort( () => (Math.random() - .5) ).slice(0, 10);
function openMultipleLinks(links) {
  for (var i = 0; i < links.length; i ++) {
    window.open(links[i]);
  } 
}
