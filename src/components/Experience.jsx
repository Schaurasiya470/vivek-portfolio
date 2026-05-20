import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Sales & Business Development Executive',
    company: 'IndiaMART InterMesh Limited',
    type: 'Full-time · Delhi, India',
    period: 'Nov 2025 – Mar 2026',
    color: '#f59e0b',
    bullets: [
      "Managed complete B2B sales cycle — from lead sourcing to deal closure — for SME clients on India's largest B2B marketplace.",
      'Generated and qualified leads through digital channels, cold outreach, and referrals with a strong conversion rate.',
      'Recommended suitable IndiaMART packages to clients based on their business needs, contributing to revenue growth.',
      'Supported client onboarding and follow-up processes, improving overall customer satisfaction.',
    ],
  },
  {
    role: 'Certified Internet Consultant (CIC)',
    company: 'Justdial Pvt. Ltd.',
    type: 'Full-time · Delhi, India',
    period: 'Jun 2025 – Nov 2025',
    color: '#fb7185',
    bullets: [
      "Pitched and onboarded B2B clients onto Justdial's digital platform, consistently achieving monthly sales targets.",
      'Identified high-potential business verticals through structured prospecting and needs-based selling.',
      'Maintained strong client relationships post-sale to ensure satisfaction and long-term account retention.',
    ],
  },
  {
    role: 'B2B Sales & Digital Marketing Consultant',
    company: 'Bhagya Laxmi Industry',
    type: 'Consulting · Meerut, India',
    period: 'Feb 2024 – Jun 2025',
    color: '#fbbf24',
    bullets: [
      'Generated B2B leads and converted prospects through targeted outreach and consultative sales approach.',
      'Executed social media campaigns across Instagram and Facebook, increasing brand visibility and engagement.',
      'Designed logos, promotional posters, and social media creatives for clients and brand events.',
      'Conducted market research to identify business opportunities and refine outreach strategies.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          {/* <p className="label" style={{ marginBottom:7 }}>03 — Experience</p> */}
          <h2 style={{ fontSize:'clamp(28px,4vw,50px)', fontWeight:900, color:'#e8dcc8', letterSpacing:'-.02em', lineHeight:1.1 }}>
            Where I've <span className="text-gold" style={{ fontStyle:'italic' }}>Delivered</span>
          </h2>
          <div style={{ width:56, height:2, background:'linear-gradient(90deg,var(--amber),transparent)', borderRadius:1, marginTop:14 }} />
        </motion.div>

        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', left:4, top:8, bottom:8, width:1, background:'var(--border)' }} />

          <div style={{ display:'flex', flexDirection:'column', gap:28 }}>
            {experiences.map((e, i) => (
              <motion.div key={i} initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay:i*.1 }}
                style={{ display:'flex', gap:24 }}>

                {/* dot */}
                <div style={{ flexShrink:0, paddingTop:6 }}>
                  <div className="tline-dot" style={{ background:e.color, boxShadow:`0 0 10px ${e.color}55` }} />
                </div>

                {/* card */}
                <div className="card" style={{ flex:1, padding:'clamp(18px,4vw,26px)' }}>
                  <div style={{ height:2, background:`linear-gradient(90deg,${e.color},transparent)`, borderRadius:1, marginBottom:18, width:48 }} />

                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:10, marginBottom:14 }}>
                    <div>
                      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(15px,2.5vw,18px)', fontWeight:700, color:'#e8dcc8', marginBottom:3 }}>{e.role}</h3>
                      <p style={{ fontSize:13, color:e.color, fontWeight:600, marginBottom:2 }}>{e.company}</p>
                      <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)' }}>{e.type}</p>
                    </div>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:10, padding:'4px 11px', borderRadius:6, background:`${e.color}10`, border:`1px solid ${e.color}25`, color:e.color, flexShrink:0 }}>
                      {e.period}
                    </span>
                  </div>

                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:9 }}>
                    {e.bullets.map((b, j) => (
                      <li key={j} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                        <span style={{ color:e.color, flexShrink:0, marginTop:4, fontSize:10 }}>▸</span>
                        <p style={{ fontSize:'clamp(12px,1.8vw,13px)', color:'var(--text-secondary)', lineHeight:1.75 }}>{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}