export default function Background() {
  return (
    <div style={{ position:'fixed', inset:0, zIndex:-10, overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 45% at 60% -5%, rgba(245,158,11,0.09), transparent)' }} />
      <div className="orb-a" style={{ position:'absolute', width:700, height:700, top:-200, left:-200, background:'radial-gradient(circle,rgba(245,158,11,0.07),transparent 70%)', borderRadius:'50%' }} />
      <div className="orb-b" style={{ position:'absolute', width:550, height:550, bottom:-100, right:-100, background:'radial-gradient(circle,rgba(251,113,133,0.06),transparent 70%)', borderRadius:'50%' }} />
      {/* diagonal lines */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:.3 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(245,158,11,0.04)" strokeWidth="1"/>
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(245,158,11,0.03)" strokeWidth="1"/>
      </svg>
    </div>
  );
}