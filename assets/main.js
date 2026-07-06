// ── MANHENG GLOBAL JS ──

const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
});
(function animRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,[data-hover]').forEach(el=>{
  el.addEventListener('mouseenter',()=>ring.classList.add('big'));
  el.addEventListener('mouseleave',()=>ring.classList.remove('big'));
});

const nav = document.getElementById('mainNav');
function updateNav(){
  const y = window.scrollY;
  nav.classList.toggle('solid', y > 60);
  if(nav.dataset.light !== undefined) nav.classList.toggle('light', y < 60);
}
window.addEventListener('scroll', updateNav, {passive:true});
updateNav();

const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('on'); });
},{threshold:0.07, rootMargin:'0px 0px -40px 0px'});
reveals.forEach(r=>revealObs.observe(r));

function submitForm(bodyId, successId){
  document.getElementById(bodyId).style.display='none';
  document.getElementById(successId).style.display='block';
}

const yr = document.getElementById('footerYear');
if(yr) yr.textContent = new Date().getFullYear();
