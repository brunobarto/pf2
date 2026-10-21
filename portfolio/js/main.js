/* ---------- DATA ---------- */
const skills = [
 // technical
 {s:'Pi',n:'Payment Integration',t:'tech',l:92,d:'Connecting payment gateways, POS and PSP APIs (cards, wallets, SEPA) to business systems.',b:'Faster go-live, fewer failed payments and clean checkout flows.'},
 {s:'Tp',n:'Transaction Processing',t:'tech',l:90,d:'Authorisation, capture, refund, settlement and chargeback flows handled end to end.',b:'Reliable, traceable transactions and quicker issue resolution.'},
 {s:'Rc',n:'Reconciliation',t:'tech',l:88,d:'Matching bank, PSP and sales records to catch gaps automatically.',b:'Accurate books and early detection of leaks or duplicates.'},
 {s:'Ds',n:'Database Security',t:'tech',l:86,d:'Role-based access, encryption, backups, audit logs and least-privilege design.',b:'Lower breach risk and easier compliance audits.'},
 {s:'Sq',n:'SQL',t:'tech',l:92,d:'Complex queries, joins, window functions, indexing and optimisation.',b:'Fast answers from large financial datasets.'},
 {s:'Py',n:'Python',t:'tech',l:80,d:'Pandas scripts, automation and data pipelines for finance and sales.',b:'Manual tasks replaced by repeatable automation.'},
 {s:'Bi',n:'Dashboards / BI',t:'tech',l:88,d:'Excel, Power BI and visual reporting on KPIs, margins and cash flow.',b:'Leaders see what matters, in one screen.'},
 {s:'Fd',n:'Fraud Detection',t:'tech',l:78,d:'Spotting anomalies: velocity, odd amounts, refund patterns.',b:'Protects revenue and customer trust.'},
 {s:'Ap',n:'REST APIs',t:'tech',l:82,d:'Consuming and testing JSON APIs, webhooks, authentication, error handling.',b:'Smooth system integrations with fewer surprises.'},
 {s:'Pc',n:'PCI DSS Awareness',t:'tech',l:76,d:'Handling cardholder data under PCI DSS and GDPR principles.',b:'Compliant processes by design.'},
 {s:'Gt',n:'Git & GitHub',t:'tech',l:80,d:'Version control, branches, pull requests and documentation.',b:'Traceable, collaborative technical work.'},
 {s:'Ts',n:'Technical Support',t:'tech',l:90,d:'Diagnosing incidents, reading logs, documenting fixes, escalating properly.',b:'Short resolution times and reusable knowledge base.'},
 {s:'So',n:'Sales Operations',t:'tech',l:92,d:'Stock, pricing, supplier flow, POS and sales performance in a records store.',b:'Higher margin, healthier inventory, smoother operations.'},
 {s:'Cr',n:'CRM & Customer Data',t:'tech',l:84,d:'Customer segmentation, loyalty and purchase-history analysis.',b:'More repeat customers and targeted campaigns.'},
 {s:'Xl',n:'Advanced Excel',t:'tech',l:94,d:'Pivot tables, Power Query, financial modelling and macros.',b:'Quick analyses, no waiting for IT.'},
 {s:'Kp',n:'KPI Design',t:'tech',l:86,d:'Defining metrics that link sales actions to financial results.',b:'Teams that steer by facts, not feelings.'},
 // soft
 {s:'Co',n:'Communication',t:'soft',l:92,d:'Explaining technical or financial topics clearly to any audience.',b:'Alignment between business, finance and tech.'},
 {s:'Ps',n:'Problem Solving',t:'soft',l:90,d:'Structured root-cause thinking under pressure.',b:'Issues fixed once, not repeatedly.'},
 {s:'Em',n:'Customer Empathy',t:'soft',l:94,d:'Listening first, then solving what the customer actually needs.',b:'Better satisfaction and retention.'},
 {s:'Ri',n:'Rigor',t:'soft',l:92,d:'Attention to detail with numbers, money and sensitive data.',b:'Trustworthy figures and fewer costly errors.'},
 {s:'Ld',n:'Leadership',t:'soft',l:80,d:'Coaching sales staff, setting priorities and owning results.',b:'Motivated teams with clear goals.'},
 {s:'Ad',n:'Adaptability',t:'soft',l:88,d:'Learning new tools and switching context quickly.',b:'Fast ramp-up on any stack or process.'},
 {s:'Tw',n:'Teamwork',t:'soft',l:90,d:'Collaborating across sales, finance, IT and suppliers.',b:'Smooth delivery and shared ownership.'},
 {s:'Tm',n:'Time Management',t:'soft',l:86,d:'Prioritising incidents, reporting deadlines and daily operations.',b:'Reliable delivery, even in peak periods.'}
];

const projects = [
 {t:'Payment Gateway Integration',d:'Integration of a payment provider with POS and e-shop, including webhooks and error handling.',tags:['API','Payments','JavaScript'],gh:'[github.com](https://github.com/YOUR-USERNAME/payment-integration)',live:'[your-username.github.io](https://YOUR-USERNAME.github.io/payment-integration)'},
 {t:'Transaction Reconciliation Tool',d:'Automated matching of bank, PSP and sales data with anomaly reports.',tags:['Python','SQL','Finance'],gh:'[github.com](https://github.com/YOUR-USERNAME/reconciliation-tool)',live:'[your-username.github.io](https://YOUR-USERNAME.github.io/reconciliation-tool)'},
 {t:'Secure Database Blueprint',d:'Role-based access, encryption and audit logging templates for sensitive data.',tags:['SQL','Security','PCI DSS'],gh:'[github.com](https://github.com/YOUR-USERNAME/secure-db)',live:'[your-username.github.io](https://YOUR-USERNAME.github.io/secure-db)'},
 {t:'Records Store Sales Dashboard',d:'Interactive dashboard: best sellers, margins, stock rotation, customer loyalty.',tags:['BI','Sales Ops','Dashboard'],gh:'[github.com](https://github.com/YOUR-USERNAME/records-dashboard)',live:'[your-username.github.io](https://YOUR-USERNAME.github.io/records-dashboard)'}
];

/* ---------- HELPERS ---------- */
const $ = s => document.querySelector(s);
const root = document.documentElement;

/* ---------- INTRO LAMP ---------- */
(function intro(){
  document.body.classList.add('loading');
  const fill=$('#fill'), halo=$('#halo'), pct=$('#pct'), el=$('#intro');
  let p=0;
  const tick=()=>{
    p+=Math.random()*2.2+.6; if(p>100)p=100;
    fill.setAttribute('y',190-p*1.5);
    halo.style.opacity=p/100*.8;
    pct.textContent=Math.floor(p);
    if(p<100) requestAnimationFrame(tick);
    else setTimeout(()=>{el.classList.add('done');document.body.classList.remove('loading');startReveal();},500);
  };
  tick();
})();

/* ---------- THEME ---------- */
(function theme(){
  const saved=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  root.dataset.theme=saved;
  $('#theme').onclick=()=>{
    const n=root.dataset.theme==='dark'?'light':'dark';
    root.dataset.theme=n; localStorage.setItem('theme',n);
  };
})();

/* ---------- PARTICLES ---------- */
(function particles(){
  const c=$('#bg'),x=c.getContext('2d');
  let w,h,ps=[],m={x:-999,y:-999};
  const resize=()=>{w=c.width=innerWidth;h=c.height=innerHeight;
    ps=Array.from({length:Math.min(110,Math.floor(w*h/14000))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*2+1}));};
  addEventListener('resize',resize);resize();
  addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY});
  addEventListener('mouseleave',()=>{m.x=m.y=-999});
  (function loop(){
    x.clearRect(0,0,w,h);
    const col=getComputedStyle(root).getPropertyValue('--particle');
    for(const p of ps){
      const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);
      if(d<140){const f=(140-d)/140;p.vx+=dx/d*f*.6;p.vy+=dy/d*f*.6;}
      p.vx*=.97;p.vy*=.97;
      p.x+=p.vx+(Math.random()-.5)*.1;p.y+=p.vy+(Math.random()-.5)*.1;
      if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
      x.fillStyle=`rgba(${col},.55)`;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();
    }
    for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){
      const d=Math.hypot(ps[i].x-ps[j].x,ps[i].y-ps[j].y);
      if(d<90){x.strokeStyle=`rgba(${col},${.18*(1-d/90)})`;x.beginPath();x.moveTo(ps[i].x,ps[i].y);x.lineTo(ps[j].x,ps[j].y);x.stroke();}
    }
    requestAnimationFrame(loop);
  })();
})();

/* ---------- MESH SPHERE LOGO ---------- */
(function logo(){
  const c=$('#logo'),x=c.getContext('2d'),R=36,cx=48,cy=48;
  const lat=7,lon=10,pts=[];
  for(let i=0;i<=lat;i++){const a=Math.PI*i/lat-Math.PI/2;
    for(let j=0;j<lon;j++){const b=2*Math.PI*j/lon;
      pts.push([Math.cos(a)*Math.cos(b),Math.sin(a),Math.cos(a)*Math.sin(b)]);}}
  let t=0;
  (function draw(){
    t+=.012;x.clearRect(0,0,96,96);
    const acc=getComputedStyle(root).getPropertyValue('--accent').trim();
    const cs=Math.cos(t),sn=Math.sin(t),ct=Math.cos(.4),st=Math.sin(.4);
    const P=pts.map(([px,py,pz])=>{
      let X=px*cs+pz*sn,Z=-px*sn+pz*cs,Y=py*ct-Z*st;Z=py*st+Z*ct;
      return [cx+X*R,cy+Y*R,Z];});
    x.lineWidth=1;
    for(let i=0;i<=lat;i++)for(let j=0;j<lon;j++){
      const a=i*lon+j,links=[i*lon+(j+1)%lon];
      if(i<lat)links.push((i+1)*lon+j);
      for(const b of links){
        x.strokeStyle=acc;x.globalAlpha=.25+.55*((P[a][2]+P[b][2])/4+.5);
        x.beginPath();x.moveTo(P[a][0],P[a][1]);x.lineTo(P[b][0],P[b][1]);x.stroke();}
    }
    x.globalAlpha=1;x.fillStyle=acc;
    for(const p of P){x.beginPath();x.arc(p[0],p[1],1.3+p[2]*.6,0,7);x.fill();}
    requestAnimationFrame(draw);
  })();
})();

/* ---------- PERIODIC TABLE ---------- */
const table=$('#table');
const tileHTML=(k,i)=>`<span class="n">${i+1}</span><span class="s">${k.s}</span><span class="m">${k.n}</span>`;
skills.forEach((k,i)=>{
  const b=document.createElement('button');
  b.className=`tile ${k.t}`;b.innerHTML=tileHTML(k,i);
  b.setAttribute('aria-label',`${k.n} — open details`);
  b.onclick=()=>openModal(k,i);
  table.appendChild(b);
});

/* ---------- MODAL ---------- */
const modal=$('#modal');let lastFocus;
function openModal(k,i){
  lastFocus=document.activeElement;
  $('#mTile').className=`tile big-tile ${k.t}`;$('#mTile').innerHTML=tileHTML(k,i);
  $('#mCat').textContent=k.t==='tech'?'Technical skill':'Soft skill';
  $('#mTitle').textContent=k.n;$('#mDesc').textContent=k.d;$('#mBring').textContent=k.b;
  $('#mUrl').textContent=`skills/${k.n.toLowerCase().replace(/[^a-z]+/g,'-')}.exe`;
  $('#mLvl').textContent=`Proficiency: ${k.l}%`;$('#mBar').style.width='0';
  modal.hidden=false;requestAnimationFrame(()=>{modal.classList.add('open');$('#mBar').style.width=k.l+'%';});
  $('#mClose').focus();
}
function closeModal(){modal.classList.remove('open');setTimeout(()=>{modal.hidden=true;lastFocus&&lastFocus.focus();},300);}
$('#mClose').onclick=closeModal;
modal.onclick=e=>{if(e.target===modal)closeModal();};
addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal();});

/* ---------- PROJECTS ---------- */
$('#projectGrid').innerHTML=projects.map((p,i)=>`
 <article class="card reveal">
  <span class="num">0${i+1}</span><h3>${p.t}</h3><p>${p.d}</p>
  <div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
  <div class="links"><a href="${p.gh}" target="_blank" rel="noopener">GitHub ↗</a><a href="${p.live}" target="_blank" rel="noopener">Live site ↗</a></div>
 </article>`).join('');

/* ---------- SCROLL REVEAL + PROGRESS ---------- */
function startReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
  }),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const tio=new IntersectionObserver(es=>{
    if(es[0].isIntersecting){
      document.querySelectorAll('.tile').forEach((t,i)=>setTimeout(()=>t.classList.add('in'),i*45));
      tio.disconnect();
    }
  },{threshold:.1});
  tio.observe(table);
}
addEventListener('scroll',()=>{
  const h=document.documentElement;
  $('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
},{passive:true});
