(function(){
var d=document;
var calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var hover=matchMedia('(hover:hover)').matches;
var head=d.querySelector('.top'),bar=d.querySelector('.bar'),ind=d.querySelector('.ind');
var megas=[].slice.call(d.querySelectorAll('.has-mega'));
var burger=d.querySelector('.burger'),bs=burger.querySelector('summary');
var timer;

d.addEventListener('click',function(e){
  var inside=e.target.closest('.has-mega');
  megas.forEach(function(l){if(l!==inside)set(l,false)});
  var a=e.target.closest('a');
  if(a&&window.gtag){
    if(a.href.indexOf('wa.me')>-1)gtag('event','whatsapp_click',{page:location.pathname});
    if(a.href.indexOf('tel:')===0)gtag('event','phone_click',{page:location.pathname});
  }
});

function state(){head.classList.toggle('menu',!!d.querySelector('.has-mega.open,.burger[open]'))}
function set(li,on){li.classList.toggle('open',on);li.querySelector('.lnk').setAttribute('aria-expanded',on?'true':'false');state();if(!on&&!d.querySelector('.has-mega.open,.lnk:hover'))ind.classList.remove('on')}
function point(a){
  var r=a.getBoundingClientRect(),b=bar.getBoundingClientRect();
  if(!ind.classList.contains('on')){ind.style.transition='none'}
  ind.style.width=r.width+'px';ind.style.height=r.height+'px';
  ind.style.transform='translate('+(r.left-b.left)+'px,'+(r.top-b.top)+'px)';
  ind.offsetWidth;
  ind.style.transition='';ind.classList.add('on');
}
megas.forEach(function(li){
  var b=li.querySelector('.lnk');
  b.addEventListener('click',function(e){if(hover&&e.detail>0)return;set(li,!li.classList.contains('open'))});
  if(hover){
    li.addEventListener('mouseenter',function(){clearTimeout(timer);megas.forEach(function(l){if(l!==li)set(l,false)});set(li,true);point(b)});
    li.addEventListener('mouseleave',function(){timer=setTimeout(function(){set(li,false)},180)});
  }
  li.addEventListener('focusout',function(e){if(e.relatedTarget&&!li.contains(e.relatedTarget))set(li,false)});
});
d.querySelectorAll('.links>li>a.lnk').forEach(function(a){
  a.addEventListener('mouseenter',function(){clearTimeout(timer);megas.forEach(function(l){set(l,false)});point(a)});
});
d.querySelector('.links').addEventListener('mouseleave',function(){if(!d.querySelector('.has-mega.open'))ind.classList.remove('on')});

function shut(){
  if(calm){burger.open=false;return}
  burger.classList.add('closing');
  setTimeout(function(){burger.open=false;burger.classList.remove('closing')},230);
}
bs.addEventListener('click',function(e){if(burger.open){e.preventDefault();shut()}});
burger.addEventListener('toggle',function(){bs.setAttribute('aria-label',burger.open?'Close menu':'Open menu');head.classList.remove('hide');state()});
addEventListener('pageshow',function(){burger.open=false;megas.forEach(function(l){set(l,false)})});
d.addEventListener('keydown',function(e){
  if(e.key!=='Escape')return;
  megas.forEach(function(l){if(l.classList.contains('open')){set(l,false);l.querySelector('.lnk').focus()}});
  if(burger.open){shut();bs.focus()}
});
head.addEventListener('focusin',function(){head.classList.remove('hide')});

var last=scrollY,busy=false;
function onScroll(){
  var y=scrollY;
  head.classList.toggle('stuck',y>24);
  if(!head.classList.contains('menu')&&Math.abs(y-last)>6){
    head.classList.toggle('hide',y>last&&y>480);
    last=y;
  }
  busy=false;
}
addEventListener('scroll',function(){if(!busy){busy=true;requestAnimationFrame(onScroll)}},{passive:true});
onScroll();

var toc=d.querySelectorAll('.toc a');
if(toc.length&&window.IntersectionObserver){
  var spy=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting)toc.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)});
  })},{rootMargin:'-18% 0px -72% 0px'});
  toc.forEach(function(a){var h=d.getElementById(a.getAttribute('href').slice(1));if(h)spy.observe(h)});
  toc[0].classList.add('on');
}

if(!calm){
  d.querySelectorAll('.hero .quote,.hero .ph1').forEach(function(el){
    var i=0;
    (function walk(n){[].slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){
        var f=d.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(function(w){
          if(!w)return;
          if(!w.trim()){f.appendChild(d.createTextNode(' '));return}
          var s=d.createElement('span'),k=d.createElement('i');
          s.className='w';k.style.setProperty('--i',i++);k.textContent=w;
          s.appendChild(k);f.appendChild(s);
        });
        n.replaceChild(f,c);
      }else if(c.nodeType===1&&c.tagName!=='BR')walk(c);
    })})(el);
    el.classList.add('split');
  });

  var count=d.querySelector('.log-head span:last-child');
  if(count){
    var m=count.textContent.match(/^(.*?)(\d+)$/);
    if(m){
      var n=+m[2];count.textContent=m[1]+'0';
      for(var c=1;c<=n;c++)(function(v){setTimeout(function(){count.textContent=m[1]+v},700+(v-1)*420+200)})(c);
    }
  }

  if(window.IntersectionObserver){
    var io=new IntersectionObserver(function(es){
      var k=0;
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        var t=e.target,gap=t.closest('.chain,.after')?170:60,dl=Math.min(k++,7)*gap;
        t.style.transitionDelay=dl+'ms';
        t.classList.add('in');
        io.unobserve(t);
        setTimeout(function(){t.classList.remove('rv','in');t.style.transitionDelay=''},1500+dl);
      });
    },{rootMargin:'0px 0px -7% 0px'});
    d.querySelectorAll('.band h2,.band .eyebrow,.band .lead,.two .prose>*,.said li,.scenes li>*,.steps li,.wounds li,.after li,.card,.plan,.faq details,.chain li,.doc,figure,.ticks li,.crosses li,.vid video,.closer,.tm,.logos-head,.band .cta,.lead-sec .mad,.lead-sec fieldset,.table').forEach(function(t){
      if(t.closest('.hero,.article .prose'))return;
      t.classList.add('rv');io.observe(t);
    });
    d.querySelectorAll('.article .prose>.doc,.article .prose>.tablewrap').forEach(function(t){t.classList.add('rv');io.observe(t)});
  }

  if(hover)d.addEventListener('pointermove',function(e){
    var c=e.target.closest&&e.target.closest('a.card,.plan');
    if(!c)return;
    var r=c.getBoundingClientRect();
    c.style.setProperty('--x',e.clientX-r.left+'px');
    c.style.setProperty('--y',e.clientY-r.top+'px');
  },{passive:true});
}

d.querySelectorAll('.mq-pause').forEach(function(b){
  b.addEventListener('click',function(){
    var on=d.getElementById(b.getAttribute('aria-controls')).classList.toggle('paused');
    b.setAttribute('aria-pressed',on?'true':'false');
    b.textContent=on?'Play':'Pause';
  });
});
d.querySelectorAll('.tms-nav').forEach(function(n){
  var t=n.parentNode.querySelector('.tms');
  n.addEventListener('click',function(e){
    var b=e.target.closest('button');
    if(!b)return;
    var w=t.clientWidth+14,max=t.scrollWidth-t.clientWidth-2,x=t.scrollLeft;
    t.scrollTo({left:b.dataset.d==='1'?(x>=max?0:x+w):(x<=2?max+2:x-w),behavior:calm?'auto':'smooth'});
  });
});
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
