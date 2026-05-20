import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const groups = [
  { label:'Performance Marketing', icon:'🎯', skills:[{n:'Meta Ads (FB/IG)',l:82},{n:'Google Ads',l:75},{n:'YouTube Marketing',l:88},{n:'Email Marketing',l:72}] },
  { label:'Content & SEO',         icon:'✍️', skills:[{n:'Content Strategy',l:85},{n:'SEO / SEM',l:78},{n:'Video Creation',l:84},{n:'Brand Storytelling',l:80}] },
  { label:'Sales & CRM',           icon:'🤝', skills:[{n:'B2B Lead Generation',l:88},{n:'Consultative Selling',l:85},{n:'CRM Tools',l:76},{n:'Client Retention',l:82}] },
  { label:'Analytics & Design',    icon:'📊', skills:[{n:'Google Analytics',l:74},{n:'Social Media Mgmt',l:86},{n:'Canva / Creatives',l:80},{n:'Reporting',l:72}] },
];

const logos = [
  { n:'Google Ads',   s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { n:'YouTube',      s:'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
  { n:'Meta',         s:'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { n:'Instagram',    s:'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
  { n:'LinkedIn',     s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
  { n:'Canva',        s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  // { n:'Analytics',    s:'https://upload.wikimedia.org/wikipedia/commons/8/89/Google_Analytics_logo_2021.svg' },
  { n:'WordPress',    s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  // { n:'Mailchimp',    s:'https://upload.wikimedia.org/wikipedia/commons/e/e1/Mailchimp_Logo-Horizontal_Black.svg' },
  { n:'Notion',       s:'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { n:'HubSpot',      s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
  { n:'Figma',        s:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
];

const doubled = [...logos, ...logos];

function SkillBar({ level, delay }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        controls.start({ scaleX: level / 100, transition: { delay, duration: .9, ease:'easeOut' } });
        obs.disconnect();
      }
    }, { threshold: .1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [controls, level, delay]);

  return (
    <div ref={ref} className="skill-bar">
      <motion.div className="skill-fill" initial={{ scaleX:0 }} animate={controls} />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background:'rgba(17,14,8,0.6)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:48 }}>
          {/* <p className="label" style={{ marginBottom:7 }}>02 — Skills</p> */}
          <h2 style={{ fontSize:'clamp(28px,4vw,50px)', fontWeight:900, color:'#e8dcc8', letterSpacing:'-.02em', lineHeight:1.1 }}>
            Tools of the <span className="text-gold" style={{ fontStyle:'italic' }}>Trade</span>
          </h2>
          <div style={{ width:56, height:2, background:'linear-gradient(90deg,var(--amber),transparent)', borderRadius:1, marginTop:14 }} />
        </motion.div>

        {/* skill bars grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,230px),1fr))', gap:18, marginBottom:48 }}>
          {groups.map((g, gi) => (
            <motion.div key={gi} className="card" style={{ padding:'20px 22px' }}
              initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:gi*.07 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18 }}>
                <span style={{ fontSize:14 }}>{g.icon}</span>
                <h3 style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:700, color:'#e8dcc8' }}>{g.label}</h3>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:13 }}>
                {g.skills.map((s, i) => (
                  <div key={i}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-secondary)' }}>{s.n}</span>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>{s.l}%</span>
                    </div>
                    <SkillBar level={s.l} delay={i*.08+.1} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* logo marquee */}
        <div style={{ overflow:'hidden', position:'relative', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'18px 0' }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:64, zIndex:2, background:'linear-gradient(90deg,rgba(10,8,5,1),transparent)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', right:0, top:0, bottom:0, width:64, zIndex:2, background:'linear-gradient(270deg,rgba(10,8,5,1),transparent)', pointerEvents:'none' }} />
          <div className="marquee-track">
            {doubled.map((t, i) => (
              <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6, padding:'0 24px', borderRight:'1px solid var(--border)', flexShrink:0 }}>
                <img src={t.s} alt={t.n} width={32} height={32} loading="lazy" style={{ width:32, height:32, objectFit:'contain', opacity:.75 }} />
                <span style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', whiteSpace:'nowrap' }}>{t.n}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}