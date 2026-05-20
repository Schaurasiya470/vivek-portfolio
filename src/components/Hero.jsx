import { motion } from 'framer-motion';
import profileImg from '../assets/profile_image.jpg';

const stats = [
  { val:'2+',   label:'years exp'       },
  { val:'21K+', label:'YT subscribers'  },
  { val:'50+',  label:'brand creatives' },
  { val:'3',    label:'companies'       },
];

const services = ['B2B Sales', 'Performance Marketing', 'Content Strategy', 'SEO / SEM', 'Lead Generation'];

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight:'100vh', display:'flex', alignItems:'center',
      padding:'clamp(80px,14vw,108px) clamp(18px,5vw,52px) 60px',
      position:'relative',
    }}>
      <div style={{ maxWidth:1200, margin:'0 auto', width:'100%' }}>

        {/* top label */}
        {/* <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:.08 }}
          style={{ display:'inline-flex', alignItems:'center', gap:9, marginBottom:28,
                   padding:'5px 14px', borderRadius:20,
                   background:'rgba(245,158,11,0.07)', border:'1px solid rgba(245,158,11,0.18)' }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--amber)', boxShadow:'0 0 7px var(--amber)', animation:'blink 2s ease-in-out infinite' }} />
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--amber)', letterSpacing:'.12em' }}>
            OPEN TO OPPORTUNITIES
          </span>
        </motion.div> */}

        {/* main grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap:'clamp(32px,5vw,64px)', alignItems:'center' }}>

          {/* LEFT */}
          <div>
            {/* headline — editorial italic serif */}
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:.18 }}>
              <h1 style={{ fontFamily:'var(--font-display)', fontWeight:900, lineHeight:1.0, letterSpacing:'-.02em', marginBottom:20 }}>
                <span style={{ display:'block', fontSize:'clamp(14px,2.5vw,18px)', fontWeight:400, fontStyle:'italic', color:'var(--text-muted)', marginBottom:6, letterSpacing:'.05em' }}>
                  Sales & Marketing Professional
                </span>
                <span style={{ display:'block', fontSize:'clamp(44px,7vw,78px)', color:'#e8dcc8' }}>
                  Vivek
                </span>
                <span className="text-gold" style={{ display:'block', fontSize:'clamp(44px,7vw,78px)', fontStyle:'italic' }}>
                  Chaurasiya
                </span>
              </h1>
            </motion.div>

            {/* tagline */}
            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:.3 }}
              style={{ fontSize:'clamp(14px,2vw,16px)', color:'var(--text-secondary)', lineHeight:1.8, maxWidth:500, marginBottom:32 }}>
              I help brands grow online through <span style={{ color:'var(--amber-soft)' }}>data-driven digital strategies</span>,
              compelling content, and targeted advertising. 2+ years building audiences and converting them into customers.
            </motion.p>

            {/* service pills */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.38 }}
              style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:32 }}>
              {services.map((s, i) => (
                <span key={i} className="tag" style={{ fontSize:11 }}>{s}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:.46 }}
              style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="#experience" className="btn-amber">View Experience →</a>
              <a href="https://www.linkedin.com/in/vivekchaurasiya98/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
              <a href="https://www.youtube.com/@TVHSportsSpeak" target="_blank" rel="noreferrer" className="btn-outline">YouTube ↗</a>
            </motion.div>

            {/* stats */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.6 }}
              style={{ display:'flex', gap:'clamp(20px,4vw,36px)', marginTop:40, paddingTop:28, borderTop:'1px solid var(--border)', flexWrap:'wrap' }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="stat-val">{s.val}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', letterSpacing:'.12em', marginTop:4 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — image */}
          <motion.div initial={{ opacity:0, scale:.82 }} animate={{ opacity:1, scale:1 }}
            transition={{ delay:.25, type:'spring', stiffness:72 }}
            style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>

            {/* decorative bracket */}
            <div style={{ position:'absolute', top:-20, left:'50%', transform:'translateX(-50%)', width:'clamp(260px,36vw,330px)', textAlign:'center' }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(80px,12vw,120px)', fontWeight:900, color:'rgba(245,158,11,0.04)', lineHeight:1, userSelect:'none', letterSpacing:'-.05em' }}>VK</div>
            </div>

            <div className="ring-glow" style={{
              width:'clamp(220px,30vw,280px)', height:'clamp(220px,30vw,280px)',
              borderRadius:'50%', border:'2px solid rgba(245,158,11,0.3)',
              overflow:'hidden', position:'relative', zIndex:1,
            }}>
              <img src={profileImg} alt="Vivek Chaurasiya" style={{ width:'100%', height:'100%', objectFit:'cover' }} loading="eager" />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(10,8,5,0.3),transparent)' }} />
            </div>

            {/* floating badge */}
            <div style={{ position:'absolute', bottom:10, right:'clamp(-4px,3vw,-10px)', background:'var(--surface-2)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:10, padding:'9px 14px', backdropFilter:'blur(14px)', zIndex:2 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--amber)', lineHeight:1.7 }}>21K+ YouTube Subs</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', lineHeight:1.7 }}>Meta · Google Ads</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* scroll hint */}
      <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', letterSpacing:'.15em' }}>SCROLL</span>
        <div style={{ width:1, height:40, background:'linear-gradient(to bottom,var(--amber),transparent)', animation:'blink 2s ease-in-out infinite' }} />
      </div>
    </section>
  );
}