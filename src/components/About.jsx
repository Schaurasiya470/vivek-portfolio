import { motion } from 'framer-motion';

const cards = [
  { icon:'🎓', title:'Education',    desc:'BBA — Meerut Institute of Technology',    sub:'CCS University · 73.2% · 2022–2025' },
  { icon:'📍', title:'Location',     desc:'Delhi, India',                             sub:'Open to remote & hybrid opportunities' },
  { icon:'🎯', title:'Speciality',   desc:'Performance Marketing & B2B Sales',       sub:'Meta Ads · Google Ads · Lead Generation' },
  { icon:'📺', title:'Content Creator', desc:'21,000+ YouTube Subscribers',          sub:'TVH Sports Speak · Organic growth' },
];

const what = [
  { icon:'✅', text:'Lead Generation & B2B Outreach' },
  { icon:'✅', text:'SEO/SEM Strategy & Execution' },
  { icon:'✅', text:'Social Media Marketing & Content Strategy' },
  { icon:'✅', text:'Email Marketing & Display Ad Campaigns' },
  { icon:'✅', text:'Google Analytics Reporting & Insights' },
  { icon:'✅', text:'Video Content Creation & Brand Storytelling' },
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ maxWidth:1200, margin:'0 auto' }}>
      <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.55 }}>

        <div style={{ marginBottom:52 }}>
          {/* <p className="label" style={{ marginBottom:7 }}>01 — Who I Am</p> */}
          <h2 style={{ fontSize:'clamp(28px,4vw,50px)', fontWeight:900, color:'#e8dcc8', letterSpacing:'-.02em', lineHeight:1.1 }}>
            The Story<br /><span className="text-gold" style={{ fontStyle:'italic' }}>Behind the Brand</span>
          </h2>
          <div style={{ width:56, height:2, background:'linear-gradient(90deg,var(--amber),transparent)', borderRadius:1, marginTop:14 }} />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap:40, alignItems:'start' }}>

          {/* left — bio */}
          <div>
            <p style={{ fontSize:'clamp(14px,2vw,15px)', color:'var(--text-secondary)', lineHeight:1.9, marginBottom:20 }}>
              BBA graduate with <span style={{ color:'var(--amber-soft)' }}>2+ years of hands-on experience</span> in B2B Sales, Digital Marketing, and Client Relationship Management across three companies — Bhagya Laxmi Industry, Justdial, and IndiaMART.
            </p>
            <p style={{ fontSize:'clamp(14px,2vw,15px)', color:'var(--text-secondary)', lineHeight:1.9, marginBottom:28 }}>
              What sets me apart? I didn't just study marketing — I <em style={{ color:'#e8dcc8' }}>built</em> an audience of 21,000+ subscribers on YouTube from scratch through consistent content and organic strategy. That's real-world proof that I understand what converts.
            </p>

            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--amber)', letterSpacing:'.15em', marginBottom:14 }}>WHAT I BRING</p>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {what.map((w, i) => (
                <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                  <span style={{ fontSize:12, color:'var(--amber)', flexShrink:0, marginTop:2 }}>{w.icon}</span>
                  <p style={{ fontSize:13, color:'var(--text-secondary)', lineHeight:1.6 }}>{w.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right — cards */}
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            {cards.map((c, i) => (
              <motion.div key={i} className="card card-lift" style={{ padding:'14px 18px', display:'flex', gap:13 }}
                initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*.08 }}>
                <span style={{ fontSize:18, flexShrink:0, marginTop:2 }}>{c.icon}</span>
                <div>
                  <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--amber)', letterSpacing:'.13em', marginBottom:3 }}>{c.title}</p>
                  <p style={{ fontFamily:'var(--font-display)', fontSize:13, fontWeight:700, color:'#e8dcc8', marginBottom:2 }}>{c.desc}</p>
                  <p style={{ fontSize:11, color:'var(--text-muted)', lineHeight:1.5 }}>{c.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* currently upskilling */}
            <motion.div className="card" style={{ padding:'16px 18px', background:'rgba(245,158,11,0.04)', borderColor:'rgba(245,158,11,0.14)' }}
              initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:.4 }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--amber)', letterSpacing:'.14em', marginBottom:10 }}>CURRENTLY UPSKILLING</p>
              {['Performance Marketing (Meta Ads, Google Ads)', 'Paid Social Campaigns & Funnel Strategy', 'Analytics & Conversion Rate Optimization (CRO)'].map((s, i) => (
                <div key={i} style={{ display:'flex', gap:8, alignItems:'center', marginBottom:6 }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'var(--amber)', flexShrink:0 }} />
                  <p style={{ fontSize:12, color:'var(--text-secondary)' }}>{s}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}