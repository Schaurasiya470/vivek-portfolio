import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '📺',
    title: 'YouTube — 21,000+ Subscribers',
    desc: 'Grew TVH Sports Speak channel to 21K+ subscribers organically through consistent content creation and YouTube SEO. Zero paid promotion — pure strategy.',
    color: '#f59e0b',
    tag: 'Organic Growth',
  },
  {
    icon: '🎨',
    title: '50+ Brand Creatives Designed',
    desc: 'Designed logos, event posters, and social media assets for clients and college events. Visual storytelling that drives engagement.',
    color: '#fb7185',
    tag: 'Design',
  },
  {
    icon: '🎤',
    title: 'Community Builder',
    desc: 'Built a loyal online community around sports content — demonstrating hands-on skills in digital promotion, audience retention, and brand positioning.',
    color: '#fbbf24',
    tag: 'Community',
  },
  {
    icon: '🏆',
    title: 'Consistent Sales Target Achiever',
    desc: 'Consistently hit monthly B2B sales targets at Justdial and IndiaMART — backed by structured prospecting, consultative selling, and strong follow-up.',
    color: '#34d399',
    tag: 'Sales',
  },
];

export default function Achievements() {
  return (
    <section className="section-pad">
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          {/* <p className="label" style={{ marginBottom:7 }}>05 — Achievements</p> */}
          <h2 style={{ fontSize:'clamp(28px,4vw,50px)', fontWeight:900, color:'#e8dcc8', letterSpacing:'-.02em', lineHeight:1.1 }}>
            Results That <span className="text-gold" style={{ fontStyle:'italic' }}>Speak Loudest</span>
          </h2>
          <div style={{ width:56, height:2, background:'linear-gradient(90deg,var(--amber),transparent)', borderRadius:1, marginTop:14 }} />
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap:20 }}>
          {achievements.map((a, i) => (
            <motion.div key={i} className="card card-lift" style={{ padding:'24px 22px' }}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*.08 }}>
              <div style={{ height:2, background:`linear-gradient(90deg,${a.color},transparent)`, borderRadius:1, marginBottom:18 }} />
              <div style={{ fontSize:28, marginBottom:12 }}>{a.icon}</div>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10, flexWrap:'wrap' }}>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:16, fontWeight:700, color:'#e8dcc8', lineHeight:1.2 }}>{a.title}</h3>
              </div>
              <p style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.75, marginBottom:14 }}>{a.desc}</p>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:9, padding:'3px 9px', borderRadius:3, background:`${a.color}12`, border:`1px solid ${a.color}25`, color:a.color, letterSpacing:'.1em' }}>
                {a.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}