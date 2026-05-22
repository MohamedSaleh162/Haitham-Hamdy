
// Cursor glow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
},{passive:true});

// Nav scroll shrink
window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled', scrollY > 60);
},{passive:true});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('in'), i*100);
      ro.unobserve(e.target);
    }
  });
},{threshold:.1});
revealEls.forEach(el=>ro.observe(el));

// Active nav
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(scrollY>=s.offsetTop-160)cur=s.id});
  navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});

// Hamburger
const burger=document.getElementById('burger');
const drawer=document.getElementById('drawer');
burger.addEventListener('click',()=>{
  const open=drawer.classList.toggle('open');
  burger.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
});
function closeDrawer(){
  drawer.classList.remove('open');
  burger.classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});

// Form
function sendMsg(btn){
  btn.textContent='Sent! ✓';
  btn.style.background='var(--green)';
  btn.style.color='#080c14';
  btn.disabled=true;
  setTimeout(()=>{
    btn.textContent='Send Message →';
    btn.style.background='';
    btn.style.color='';
    btn.disabled=false;
  },3000);
}
