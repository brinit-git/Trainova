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

function words(el,make){
  var i=0;
  (function walk(n){[].slice.call(n.childNodes).forEach(function(c){
    if(c.nodeType===3){
      var f=d.createDocumentFragment();
      c.textContent.split(/(\s+)/).forEach(function(w){
        if(!w)return;
        if(!w.trim()){f.appendChild(d.createTextNode(' '));return}
        f.appendChild(make(w,i++));
      });
      n.replaceChild(f,c);
    }else if(c.nodeType===1&&c.tagName!=='BR')walk(c);
  })})(el);
  return i;
}
function mask(w,i){
  var s=d.createElement('span'),k=d.createElement('i');
  s.className='w';k.style.setProperty('--i',i);k.textContent=w;
  s.appendChild(k);
  return s;
}
function fill(w,i){
  var s=d.createElement('span');
  s.className='nw';s.style.setProperty('--i',i);s.textContent=w;
  return s;
}

if(!calm){
  d.querySelectorAll('.hero .quote,.hero .ph1').forEach(function(el){
    words(el,mask);
    el.classList.add('split');
  });

  var neck=d.querySelector('.neck');
  if(neck)(function(){
    var hero=d.querySelector('.hero-stage'),grid=hero.querySelector('.hero-grid'),intro=grid.firstElementChild,log=hero.querySelector('.log'),hot=hero.querySelector('.hot');
    var one=function(s){return neck.querySelector(s)},all=function(s){return [].slice.call(neck.querySelectorAll(s))};
    var bridge=one('.neck-bridge'),bLine=bridge.querySelector('.line'),bTip=bridge.querySelector('.tip'),bHalo=bridge.querySelector('.halo'),bSeed=bridge.querySelector('.seed'),bGrad=bridge.querySelector('linearGradient');
    var track=one('.neck-track'),stage=one('.neck-stage'),svg=one('.neck-svg'),inner=stage.querySelector('.wrap'),eyebrow=stage.querySelector('.eyebrow');
    var spine=svg.querySelector('.spine'),sTip=svg.querySelector('.tip'),sHalo=svg.querySelector('.halo'),pinch=svg.querySelector('.pinch'),ring=svg.querySelector('.ring');
    var ribs=all('.rib'),nods=all('.nod'),lines=all('.neck-lines li'),open=all('.neck-open i');
    var read=one('.neck-read'),h2=read.querySelector('h2'),body=one('.neck-body');
    var m={},shifts=[];

    lines.forEach(function(li){li.style.setProperty('--n',words(li,mask))});
    h2.style.setProperty('--n',words(h2,fill));
    body.style.setProperty('--n',words(body,fill));

    function cl(v){return v<0?0:v>1?1:v}
    function ease(v){return v*v*(3-2*v)}
    function pageTop(el){var y=0;while(el){y+=el.offsetTop;el=el.offsetParent}return y}
    function pageLeft(el){var x=0;while(el){x+=el.offsetLeft;el=el.offsetParent}return x}
    function at(c,x,y){c.setAttribute('cx',x);c.setAttribute('cy',y)}
    function seg(p,a,b){
      if(b<=a){p.style.opacity=0;return}
      p.style.opacity='';p.style.strokeDasharray=(b-a)+' 2';p.style.strokeDashoffset=-a;
    }

    function layout(){
      var w=stage.offsetWidth,h=stage.offsetHeight,small=w<=860,ox=inner.offsetLeft;
      var cx=w/2,sx=small?ox+parseFloat(getComputedStyle(inner).paddingLeft)+6:cx,py=small?h-54-30:h*.93;
      m.h=h;m.top=pageTop(neck);m.end=m.top+neck.offsetHeight;m.range=track.offsetHeight-2*h;m.open=Math.hypot(Math.max(cx,w-cx),py)+4;m.cx=cx;m.py=py;
      m.h2t=pageTop(h2);m.h2h=h2.offsetHeight;m.bt=pageTop(body);m.bh=body.offsetHeight;

      var from=log&&log.offsetParent&&hot?[pageLeft(log),pageTop(hot)+hot.offsetHeight/2,false]:[sx,pageTop(grid)+grid.offsetHeight+8,true];
      var span=m.top-from[1]+24,y0=24,run=from[0]-sx;
      bridge.style.top=-span+'px';bridge.style.height=span+'px';
      var d0=from[2]?'M'+sx+' '+y0+'V'+span:'M'+from[0]+' '+y0+'C'+(from[0]-run*.8)+' '+y0+' '+sx+' '+(y0+(span-y0)*.3)+' '+sx+' '+span;
      bLine.setAttribute('d',d0);
      bGrad.setAttribute('x1',from[0]);bGrad.setAttribute('y1',y0);bGrad.setAttribute('x2',sx);bGrad.setAttribute('y2',span);
      at(bSeed,from[0],y0);
      m.bLen=bLine.getTotalLength();

      spine.setAttribute('d',small?'M'+sx+' 0V'+(py-40)+'Q'+sx+' '+py+' '+(sx+40)+' '+py+'H'+cx:'M'+sx+' 0V'+py);
      m.sLen=spine.getTotalLength();
      at(pinch,cx,py);at(ring,cx,py);

      shifts=lines.map(function(li,i){
        var left=!small&&i%2===0,x=small?sx:ox+li.offsetLeft+(left?li.offsetWidth+12:-12),y=li.offsetTop+li.offsetHeight/2,edge=small?sx+18:(left?x-12:x+12);
        ribs[i].setAttribute('d',small?'M'+x+' '+y+'V'+(py-40)+'Q'+x+' '+py+' '+(x+40)+' '+py+'H'+cx:'M'+x+' '+y+'C'+(x+(cx-x)*.45)+' '+y+' '+cx+' '+(py-(py-y)*.5)+' '+cx+' '+py);
        at(nods[i],x,y);
        return [cx-edge,py-y];
      });
      m.far=null;
      paint();
    }

    function paint(){
      var far=y>m.end;
      if(far&&m.far)return;
      m.far=far;

      var s=cl(y/m.top),p=.1+.9*cl(y/(m.top*.62)),pt=bLine.getPointAtLength(m.bLen*p);
      seg(bLine,0,p);
      at(bTip,pt.x,pt.y);at(bHalo,pt.x,pt.y);
      bTip.style.opacity=bHalo.style.opacity=p<1?'':0;
      intro.style.opacity=s?1-s*.8:'';
      intro.style.transform=s?'translateY('+(-s*56)+'px)':'';

      var t=(y-m.top)/m.range,sp=cl((t+.16)/.24),pull=0,fed=0,tip=spine.getPointAtLength(m.sLen*sp);
      seg(spine,0,sp);
      at(sTip,tip.x,tip.y);at(sHalo,tip.x,tip.y);
      sTip.style.opacity=sHalo.style.opacity=sp>0&&sp<1?'':0;

      lines.forEach(function(li,i){
        var begin=-.12+i*.1,q=cl((t-begin)/.11),rib=cl((t-begin-.04)/.1);
        var dim=i<lines.length-1?cl((t-begin-.1)/.06)*(1-cl((t-.5)/.05)):0;
        var c=cl((t-.56-i*.012)/.13),e=c*c*c,sh=shifts[i];
        li.style.setProperty('--q',q);
        li.style.opacity=q?(1-.56*dim)*(1-cl((c-.7)/.3)):0;
        li.style.transform=e?'translate('+sh[0]*e+'px,'+sh[1]*e+'px) scale('+(1-.95*e)+')':'';
        seg(ribs[i],e,rib);
        nods[i].style.opacity=q&&!c?1:0;
        fed+=rib;pull+=e;
      });

      var o=cl((t-.72)/.28),lit=sp===1?1:0;
      pinch.setAttribute('r',lit?3.5+fed*1.1+pull*1.6:0);
      ring.style.display=lit?'':'none';
      eyebrow.style.opacity=1-cl((t-.56)/.1);
      stage.style.setProperty('--g',cl((fed+pull*2)/12));
      open[0].style.clipPath='circle('+m.open*ease(cl(o/.84))+'px at '+m.cx+'px '+m.py+'px)';
      open[1].style.clipPath='circle('+m.open*ease(cl((o-.16)/.84))+'px at '+m.cx+'px '+m.py+'px)';

      h2.style.setProperty('--f',cl((y+m.h*.92-m.h2t)/(m.h*.3+m.h2h)));
      body.style.setProperty('--f',cl((y+m.h*.95-m.bt)/(m.h*.23+m.bh)));
    }

    var y=scrollY,raf=0;
    function frame(){
      raf=0;
      y+=(scrollY-y)*.16;
      if(Math.abs(scrollY-y)<.5)y=scrollY;else raf=requestAnimationFrame(frame);
      paint();
    }
    addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(frame)},{passive:true});
    var ro=new ResizeObserver(layout);
    [hero,stage,read].forEach(function(el){ro.observe(el)});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(layout);
  })();

  d.querySelectorAll('.flow').forEach(function(f){
    var one=function(s){return f.querySelector(s)};
    var stage=one('.flow-stage'),view=one('.flow-view'),track=one('.flow-track'),svg=one('.flow-line'),base=one('.base'),ink=one('.ink'),tip=one('.tip'),halo=one('.halo');
    var cards=[].slice.call(f.querySelectorAll('.flow-list li')).concat(one('.flow-end')),nods=[].slice.call(f.querySelectorAll('.nod'));
    var wide=matchMedia('(min-width:861px) and (min-height:620px),(max-width:860px) and (min-height:500px)');
    var pin,dist,x0,x1,flat,mid,amp,xs=[],lens=[],cur=0,last=-1,raf=0;
    function cl(v){return v<0?0:v>1?1:v}
    function wave(x){
      var e=1-cl((x-x0)/(flat-x0));
      return mid+amp*e*Math.sqrt(e)*(Math.sin(x*.05)*.5+Math.sin(x*.131+1)*.3+Math.sin(x*.29)*.2);
    }
    function layout(){
      pin=wide.matches;
      f.classList.add('flow-on');
      f.classList.toggle('flow-pin',pin);
      view.tabIndex=pin?-1:0;
      dist=Math.max(track.offsetWidth-view.clientWidth,0);
      f.style.height=pin?stage.offsetHeight+dist+'px':'';
      xs=cards.map(function(c){return c.offsetLeft+parseFloat(getComputedStyle(c).paddingLeft)});
      x0=xs[0];x1=xs[xs.length-1];flat=xs[3];
      mid=svg.clientHeight/2;amp=mid-13;
      var line='',px=x0,py=wave(x0),len=0;
      lens=[];
      for(var x=x0;x<x1+3;x+=3){
        var xx=Math.min(x,x1),yy=wave(xx);
        line+=(line?'L':'M')+xx+' '+yy.toFixed(1);
        len+=Math.hypot(xx-px,yy-py);
        lens.push(len);
        px=xx;py=yy;
      }
      base.setAttribute('d',line);ink.setAttribute('d',line);
      nods.forEach(function(n,i){n.setAttribute('cx',xs[i]);n.setAttribute('cy',wave(xs[i]))});
      last=-1;
      paint(cur=goal());
    }
    function goal(){return dist?cl((pin?-f.getBoundingClientRect().top:view.scrollLeft)/dist):0}
    function paint(t){
      if(t===last)return;
      last=t;
      track.style.transform=pin?'translate3d('+(-t*dist)+'px,0,0)':'';
      var x=x0+t*(x1-x0),y=wave(x),all=lens[lens.length-1],now=0;
      ink.style.strokeDasharray=lens[Math.round((x-x0)/3)]/all+' 2';
      tip.setAttribute('cx',x);tip.setAttribute('cy',y);halo.setAttribute('cx',x);halo.setAttribute('cy',y);
      xs.forEach(function(v,i){if(x>=v-1)now=i});
      cards.forEach(function(c,i){c.classList.toggle('on',i<=now);c.classList.toggle('now',i===now);nods[i].classList.toggle('on',i<=now)});
    }
    function frame(){
      raf=0;
      var g=goal();
      cur+=(g-cur)*.16;
      if(Math.abs(g-cur)<.0005)cur=g;else raf=requestAnimationFrame(frame);
      paint(cur);
    }
    function kick(){if(!raf)raf=requestAnimationFrame(frame)}
    addEventListener('scroll',kick,{passive:true});
    view.addEventListener('scroll',kick,{passive:true});
    one('.flow-end').addEventListener('focusin',function(){if(pin)scrollTo(0,f.getBoundingClientRect().top+scrollY+dist)});
    var ro=new ResizeObserver(layout);
    ro.observe(view);ro.observe(stage);
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(layout);
  });

  d.querySelectorAll('.film').forEach(function(f){
    var body=f.querySelector('.film-body'),p=0,g=0,raf=0;
    body.style.setProperty('--n',words(body,fill));
    function cl(v){return v<0?0:v>1?1:v}
    function frame(){
      var h=innerHeight,a=f.getBoundingClientRect(),b=body.getBoundingClientRect();
      var tp=cl((h*.95-a.top)/(h*.8)),tg=cl((h*.98-b.top)/(h*.08+b.height));
      p+=(tp-p)*.14;g+=(tg-g)*.14;
      if(Math.abs(tp-p)<.002&&Math.abs(tg-g)<.002){p=tp;g=tg;raf=0}else raf=requestAnimationFrame(frame);
      f.style.setProperty('--p',p);
      body.style.setProperty('--f',g);
    }
    addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(frame)},{passive:true});
    addEventListener('resize',function(){if(!raf)raf=requestAnimationFrame(frame)});
    frame();
  });

  d.querySelectorAll('.st-list').forEach(function(s){
    var rows=[].slice.call(s.children),raf=0;
    function cl(v){return v<0?0:v>1?1:v}
    function frame(){
      raf=0;
      rows.forEach(function(li,i){
        if(rows[i+1])li.style.setProperty('--c',cl(1-(rows[i+1].getBoundingClientRect().top-li.getBoundingClientRect().top)/li.offsetHeight));
      });
    }
    function kick(){if(!raf)raf=requestAnimationFrame(frame)}
    addEventListener('scroll',kick,{passive:true});
    addEventListener('resize',kick);
    frame();
  });

  d.querySelectorAll('.quiet').forEach(function(f){
    var one=function(s){return f.querySelector(s)},all=function(s){return [].slice.call(f.querySelectorAll(s))};
    var track=one('.quiet-track'),stage=one('.quiet-stage'),copy=one('.quiet-copy'),h2=one('h2'),list=one('.quiet-lines'),cta=one('.cta');
    var phone=one('.qp'),num=one('.qp-n'),empty=one('.qp-empty'),sun=one('.qh i');
    var calls=all('.qp-list li'),lines=all('.quiet-lines li');
    var small,dy=0,k=1,cur=0,last=-1,left=-1,raf=0;
    lines.forEach(function(li){li.style.setProperty('--n',words(li,mask))});
    function cl(v){return v<0?0:v>1?1:v}
    function ease(v){return v*v*(3-2*v)}
    function layout(){
      small=stage.offsetWidth<=860;
      phone.style.top=small?list.offsetTop+list.offsetHeight+16+'px':'';
      dy=small?0:copy.clientHeight/2-h2.offsetTop-h2.offsetHeight/2;
      k=small?1:Math.max(1,Math.min(1.35,list.offsetWidth/h2.offsetWidth));
      last=-1;
      paint(cur=goal());
    }
    function goal(){var r=track.getBoundingClientRect();return cl(-r.top/(r.height-stage.offsetHeight))}
    function paint(t){
      if(t===last)return;
      last=t;
      var n=0,s=ease(cl((t-.14)/.12)),o=cl((t-.88)/.07);
      calls.forEach(function(c,i){
        var v=ease(cl((t-.02-i*.032)/.05));
        c.style.transform=v?'translate3d('+v*115+'%,0,0) rotate('+v*5+'deg)':'';
        c.style.opacity=1-v;
        if(v<.5)n++;
      });
      if(n!==left){left=n;num.textContent=n;phone.classList.toggle('buzz',n>0);phone.style.setProperty('--h',n/calls.length)}
      empty.style.opacity=cl((t-.2)/.04);
      h2.style.transform=s<1&&dy?'translate3d(0,'+dy*(1-s)+'px,0) scale('+(1+(k-1)*(1-s))+')':'';
      lines.forEach(function(li,i){
        var b=.22+i*.14,q=cl((t-b)/.09),end=i===lines.length-1;
        li.style.setProperty('--q',q);
        li.style.opacity=!q?0:end?1:small?1-cl((t-b-.11)/.04):1-.45*cl((t-b-.14)/.06);
      });
      stage.style.setProperty('--l',ease(cl((t-.22)/.6)));
      sun.style.transform='translate3d(0,'+(102-ease(cl((t-.8)/.18))*67)+'%,0)';
      phone.style.transform='translate3d(0,'+ease(cl((t-.74)/.14))*60+'px,0)';
      phone.style.opacity=1-cl((t-.74)/.1);
      cta.style.opacity=o;
      cta.style.transform='translateY('+(1-o)*14+'px)';
      cta.style.pointerEvents=o?'':'none';
      stage.style.setProperty('--g',cl((t-.3)/.6));
    }
    function frame(){
      raf=0;
      var g=goal();
      cur+=(g-cur)*.16;
      if(Math.abs(g-cur)<.0005)cur=g;else raf=requestAnimationFrame(frame);
      paint(cur);
    }
    addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(frame)},{passive:true});
    cta.addEventListener('focusin',function(){scrollTo(0,track.getBoundingClientRect().bottom+scrollY-stage.offsetHeight)});
    new ResizeObserver(layout).observe(stage);
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(layout);
  });

  d.querySelectorAll('.who').forEach(function(f){
    var one=function(s){return f.querySelector(s)},all=function(s){return [].slice.call(f.querySelectorAll(s))};
    var track=one('.who-track'),stage=one('.who-stage'),pic=one('.who-pic'),read=one('.who-read'),num=one('.who-n'),bub=one('.who-bub'),me=one('.me');
    var panes=all('.who-panes i'),rows=all('.who-chain li:not(.me)');
    var wide=matchMedia('(min-width:861px) and (min-height:640px)');
    var pin,cur=0,left=-1,raf=0;
    read.style.setProperty('--n',words(read,fill));
    function cl(v){return v<0?0:v>1?1:v}
    function ease(v){return v*v*(3-2*v)}
    function goal(){
      if(pin){var r=track.getBoundingClientRect();return cl(-r.top/(r.height-stage.offsetHeight))}
      var p=pic.getBoundingClientRect();
      return cl((innerHeight*.72-p.top)/(p.height*.9));
    }
    function paint(t){
      var h=innerHeight,n=0,on=cl((t-.7)/.08),o=cl((t-.84)/.08);
      var e=cl(pin?(h-track.getBoundingClientRect().top)/(h*.92):(h-pic.getBoundingClientRect().top)/(h*.6));
      f.style.setProperty('--e',ease(e));
      f.style.setProperty('--e2',t);
      f.style.setProperty('--p',.6+.4*cl((t-.68)/.14));
      f.style.setProperty('--on',on);
      panes.forEach(function(c,i){
        var b=.02+i*.17,v=ease(cl((t-b)/.17));
        c.style.transform=v?'translate3d('+v*104+'%,0,0)':'';
        c.style.visibility=v===1?'hidden':'';
        rows[i].style.setProperty('--s',cl((t-b-.05)/.12));
        if(v<.5)n++;
      });
      if(n!==left){left=n;num.textContent=n}
      read.style.setProperty('--f',pin?cl((t-.56)/.34):cl((h*.98-read.getBoundingClientRect().top)/(h*.08+read.offsetHeight)));
      bub.style.opacity=o;
      bub.style.transform=o<1?'translateY('+(1-o)*18+'px) scale('+(.96+o*.04)+')':'';
      bub.style.pointerEvents=o?'':'none';
      me.style.transform=on<1?'translateY('+(1-on)*10+'px)':'';
    }
    function layout(){
      pin=wide.matches;
      f.classList.add('who-on');
      f.classList.toggle('who-pin',pin);
      paint(cur=goal());
    }
    function frame(){
      raf=0;
      var g=goal();
      cur+=(g-cur)*.16;
      if(Math.abs(g-cur)<.0005)cur=g;else raf=requestAnimationFrame(frame);
      paint(cur);
    }
    addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(frame)},{passive:true});
    function toEnd(){if(pin)scrollTo(0,track.getBoundingClientRect().bottom+scrollY-stage.offsetHeight)}
    read.addEventListener('focusin',toEnd);
    bub.addEventListener('focusin',toEnd);
    new ResizeObserver(layout).observe(stage);
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(layout);
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
        var t=e.target,gap=t.closest('.chain')?170:60,dl=Math.min(k++,7)*gap;
        t.style.transitionDelay=dl+'ms';
        t.classList.add('in');
        io.unobserve(t);
        setTimeout(function(){t.classList.remove('rv','in');t.style.transitionDelay=''},1500+dl);
      });
    },{rootMargin:'0px 0px -7% 0px'});
    d.querySelectorAll('.band h2,.band .eyebrow,.band .lead,.two .prose>*,.said li,.scenes li>*,.steps li,.wounds li,.card,.plan,.faq details,.chain li,.doc,figure,.ticks li,.crosses li,.vid video,.closer,.tm,.logos-head,.band .cta,.lead-sec .mad,.lead-sec fieldset,.table').forEach(function(t){
      if(t.closest('.hero,.who,.article .prose')||t.matches('.tm:not(:first-child)'))return;
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

d.querySelectorAll('.film').forEach(function(f){
  var v=f.querySelector('video'),off;
  function lit(on){clearTimeout(off);f.classList.toggle('on',on)}
  v.addEventListener('play',function(){lit(true)});
  v.addEventListener('pause',function(){clearTimeout(off);off=setTimeout(function(){if(v.paused)lit(false)},500)});
  v.addEventListener('ended',function(){
    v.load();
    lit(false);
  });
  if(window.IntersectionObserver)new IntersectionObserver(function(es){if(!es[0].isIntersecting&&!v.paused)v.pause()},{threshold:.2}).observe(v);
});
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
