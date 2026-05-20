import { motion } from 'framer-motion';
import { FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const contacts = [
  { icon:<FaEnvelope size={16}/>, label:'EMAIL',  value:'chaurasiyav7615@gmail.com', href:'mailto:chaurasiyav7615@gmail.com', color:'#f59e0b' },
  { icon:<FaPhone    size={16}/>, label:'PHONE',  value:'+91 98012 37617',            href:'tel:+919801237617',               color:'#fb7185' },
];
const socials = [
  { icon:<FaLinkedin size={20}/>, label:'LinkedIn', sub:'vivekchaurasiya98', href:'https://www.linkedin.com/in/vivekchaurasiya98/', color:'#60a5fa' },
  { icon:<FaYoutube  size={20}/>, label:'YouTube',  sub:'TVH Sports Speak',  href:'https://www.youtube.com/@TVHSportsSpeak',        color:'#f87171' },
];

const services = [
  'Performance Marketing Campaigns',
  'B2B Lead Generation',
  'Social Media Strategy',
  'YouTube Growth Consulting',
  'Brand Creative Design',
  'Content Strategy',
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="section-pad" style={{ background:'rgba(17,14,8,0.6)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>

          {/* heading */}
          <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ textAlign:'center', marginBottom:56 }}>
            {/* <p className="label" style={{ marginBottom:7 }}>06 — Contact</p> */}
            <h2 style={{ fontSize:'clamp(28px,5vw,60px)', fontWeight:900, color:'#e8dcc8', letterSpacing:'-.02em', lineHeight:1.1 }}>
              Let's Grow Your<br /><span className="text-gold" style={{ fontStyle:'italic' }}>Brand Together</span>
            </h2>
            <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'var(--text-secondary)', marginTop:18, maxWidth:440, margin:'18px auto 0', lineHeight:1.75 }}>
              Open to freelance projects, digital marketing collaborations, and performance marketing opportunities. Let's talk results.
            </p>
          </motion.div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap:20 }}>

            {/* col 1 — direct contact */}
            <motion.div className="card" style={{ padding:'clamp(20px,4vw,28px)' }}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.06 }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--amber)', letterSpacing:'.15em', marginBottom:18 }}>REACH ME</p>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {contacts.map((c, i) => (
                  <a key={i} href={c.href} style={{ display:'flex', alignItems:'center', gap:13, textDecoration:'none', padding:'12px 15px', borderRadius:10, background:`${c.color}07`, border:`1px solid ${c.color}18`, transition:'all .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background=`${c.color}12`; e.currentTarget.style.borderColor=`${c.color}28`; }}
                    onMouseLeave={e => { e.currentTarget.style.background=`${c.color}07`; e.currentTarget.style.borderColor=`${c.color}18`; }}>
                    <div style={{ width:34, height:34, borderRadius:9, background:`${c.color}12`, display:'flex', alignItems:'center', justifyContent:'center', color:c.color, flexShrink:0 }}>{c.icon}</div>
                    <div>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:c.color, letterSpacing:'.12em', marginBottom:2 }}>{c.label}</p>
                      <p style={{ fontSize:'clamp(11px,2vw,13px)', color:'#e8dcc8' }}>{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ marginTop:18 }}>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--amber)', letterSpacing:'.15em', marginBottom:12 }}>SOCIALS</p>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {socials.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noreferrer" className="card-lift"
                       style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none', padding:'11px 14px', borderRadius:10, background:'var(--surface-2)', border:'1px solid var(--border)' }}>
                      <span style={{ color:s.color }}>{s.icon}</span>
                      <div>
                        <p style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:600, color:'#e8dcc8', lineHeight:1 }}>{s.label}</p>
                        <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', marginTop:3 }}>{s.sub}</p>
                      </div>
                      <span style={{ color:'var(--text-muted)', fontSize:12, marginLeft:'auto' }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* col 2 — services */}
            <motion.div className="card" style={{ padding:'clamp(20px,4vw,28px)' }}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.12 }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--amber)', letterSpacing:'.15em', marginBottom:18 }}>OPEN FOR</p>
              <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
                {services.map((s, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:8, background:'rgba(245,158,11,0.04)', border:'1px solid rgba(245,158,11,0.1)' }}>
                    <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--amber)', flexShrink:0 }} />
                    <span style={{ fontSize:13, color:'var(--text-secondary)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* col 3 — CTA */}
            <motion.div className="card" style={{ padding:'clamp(20px,4vw,28px)', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, position:'relative', overflow:'hidden' }}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.18 }}>
              <div style={{ position:'absolute', width:260, height:260, top:-80, left:'50%', transform:'translateX(-50%)', background:'radial-gradient(circle,rgba(245,158,11,0.07),transparent)', borderRadius:'50%', pointerEvents:'none' }} />
              <div style={{ fontSize:40 }}>🚀</div>
              <div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(18px,3vw,22px)', fontWeight:800, color:'#e8dcc8', fontStyle:'italic', lineHeight:1.2, marginBottom:8 }}>Ready to Drive Results</h3>
                <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>
                  Whether it's scaling your brand online or cracking new B2B markets — let's build something that converts.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, width:'100%' }}>
                <a href="mailto:chaurasiyav7615@gmail.com" className="btn-amber" style={{ textAlign:'center', width:'100%' }}>Send Email ✉️</a>
                <a href="https://www.linkedin.com/in/vivekchaurasiya98/" target="_blank" rel="noreferrer" className="btn-outline" style={{ textAlign:'center', width:'100%', textDecoration:'none' }}>Connect on LinkedIn →</a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:'1px solid var(--border)', background:'rgba(10,8,5,0.7)', backdropFilter:'blur(12px)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'clamp(20px,4vw,32px) clamp(18px,5vw,52px)', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap:24, alignItems:'center' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:9, marginBottom:10 }}>
              <div style={{ width:30, height:30, borderRadius:7, background:'linear-gradient(135deg,#f59e0b,#fb7185)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontWeight:900, fontSize:12, color:'#000', fontStyle:'italic' }}>V</div>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, color:'#e8dcc8', fontStyle:'italic' }}>Vivek Chaurasiya</span>
            </div>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', lineHeight:1.6 }}>
              Sales & Digital Marketing Professional · Delhi 🇮🇳
            </p>
          </div>
          <div style={{ display:'flex', gap:'clamp(16px,3vw,28px)', flexWrap:'wrap' }}>
            {[['#about','About'],['#skills','Skills'],['#experience','Experience'],['#youtube','Content'],['#contact','Contact']].map(([h,l]) => (
              <a key={h} href={h} className="nav-link" style={{ fontSize:11 }}>{l}</a>
            ))}
          </div>
          <div style={{ textAlign:'right' }}>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>© {new Date().getFullYear()} Vivek Chaurasiya</p>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', marginTop:3, opacity:.5 }}>Built with React & ☕</p>
          </div>
        </div>
      </footer>
    </>
  );
}