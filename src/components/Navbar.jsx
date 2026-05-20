import { useState, useEffect } from 'react';

const links = [
  ['#home','About'],['#skills','Skills'],['#experience','Experience'],
  ['#youtube','Content'],['#contact','Contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });

    const mq = window.matchMedia('(max-width:767px)');
    setIsMobile(mq.matches);
    const onMq = e => { setIsMobile(e.matches); if (!e.matches) setOpen(false); };
    mq.addEventListener('change', onMq);
    return () => { window.removeEventListener('scroll', onScroll); mq.removeEventListener('change', onMq); };
  }, []);

  return (
    <nav style={{
      position:'fixed', top:0, width:'100%', zIndex:9000,
      height:60, padding:'0 clamp(18px,5vw,40px)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      borderBottom: scrolled ? '1px solid rgba(245,158,11,0.1)' : '1px solid transparent',
      background: scrolled ? 'rgba(10,8,5,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      transition:'all .3s',
    }}>
      {/* Logo */}
      <a href="#home" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
        <div style={{ width:34, height:34, borderRadius:8, background:'linear-gradient(135deg,#f59e0b,#fb7185)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:13, color:'#000', fontStyle:'italic' }}>V</div>
        <div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:15, color:'#e8dcc8', lineHeight:1, fontStyle:'italic' }}>Vivek</div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:8, color:'var(--amber)', letterSpacing:'.15em', lineHeight:1 }}>CHAURASIYA</div>
        </div>
      </a>

      {/* Desktop */}
      {!isMobile && (
        <>
          <div style={{ display:'flex', gap:28 }}>
            {links.map(([href, label]) => <a key={href} href={href} className="nav-link">{label}</a>)}
          </div>
          <a href="mailto:chaurasiyav7615@gmail.com" className="btn-amber" style={{ padding:'7px 18px', fontSize:11 }}>Let's Talk →</a>
        </>
      )}

      {/* Mobile burger */}
      {isMobile && (
        <button onClick={() => setOpen(o => !o)} style={{ background:'none', border:'1px solid var(--border)', borderRadius:8, color:'#e8dcc8', fontSize:18, cursor:'pointer', width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center' }}>
          {open ? '✕' : '☰'}
        </button>
      )}

      {/* Mobile drawer */}
      {isMobile && open && (
        <div style={{ position:'absolute', top:60, left:0, right:0, background:'rgba(10,8,5,0.97)', borderBottom:'1px solid rgba(245,158,11,0.1)', padding:'22px clamp(18px,5vw,40px)', display:'flex', flexDirection:'column', gap:18 }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
               style={{ fontFamily:'var(--font-mono)', fontSize:14, color:'var(--text-muted)', textDecoration:'none', padding:'6px 0', borderBottom:'1px solid var(--border)', letterSpacing:'.06em' }}
               onMouseEnter={e => e.currentTarget.style.color='var(--amber-soft)'}
               onMouseLeave={e => e.currentTarget.style.color='var(--text-muted)'}
            >{label}</a>
          ))}
          <a href="mailto:chaurasiyav7615@gmail.com" className="btn-amber" style={{ textAlign:'center', marginTop:4 }}>Let's Talk →</a>
        </div>
      )}
    </nav>
  );
}