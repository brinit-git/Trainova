(function(){
var d=document;
d.addEventListener('click',function(e){
  d.querySelectorAll('.nav details[open],.burger[open]').forEach(function(x){if(!x.contains(e.target))x.open=false});
  var a=e.target.closest&&e.target.closest('a');
  if(a&&window.gtag){
    if(a.href.indexOf('wa.me')>-1)gtag('event','whatsapp_click',{page:location.pathname});
    if(a.href.indexOf('tel:')===0)gtag('event','phone_click',{page:location.pathname});
  }
});
d.querySelectorAll('.nav details').forEach(function(x){x.addEventListener('toggle',function(){if(x.open)d.querySelectorAll('.nav details').forEach(function(y){if(y!==x)y.open=false})})});
d.querySelectorAll('form[data-wa]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=function(n){return f.elements[n].value.trim()};
    var needs=[].map.call(f.querySelectorAll('[name=need]:checked'),function(c){return '- '+c.value}).join('\n');
    var text='Hi Anas, I’m '+v('name')+' from '+v('biz')+'. We have '+v('size')+'.\n\n'+(needs?'Right now:\n'+needs+'\n\n':'')+(f.dataset.ask||'I’d like a free business audit.')+' Please reach me on '+v('phone')+'.\n\n(Sent from '+f.dataset.wa+')';
    if(window.gtag)gtag('event','generate_lead',{page:location.pathname});
    window.open(f.action+'?text='+encodeURIComponent(text),'_blank','noopener');
  });
});
})();
