import { motion } from 'framer-motion';

// Recent-ish sports content videos from TVH Sports Speak channel
// const videos = [
//   {
//     id: 'TVHSportsSpeak',
//     title: 'TVH Sports Speak — Channel',
//     embedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=TVHSportsSpeak',
//     isChannel: true,
//   },
// ];

// Key channel metrics / highlights
const highlights = [
  { val:'21K+', label:'Subscribers',     icon:'👥' },
  { val:'100%', label:'Organic Growth',  icon:'🌱' },
  { val:'Sports', label:'Niche Content', icon:'⚽' },
  { val:'SEO',   label:'YouTube Strategy', icon:'🔍' },
];

// Featured videos — embed by video ID (replace with real IDs from his channel)
// const featured = [
//   { id: 'dQw4w9WgXcQ', title: 'Featured Video 1' }, // placeholder — replace with real
//   { id: 'dQw4w9WgXcQ', title: 'Featured Video 2' }, // placeholder — replace with real
// ];

export default function YouTube() {
  return (
    <section id="youtube" className="section-pad" style={{ background:'rgba(17,14,8,0.6)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>

        {/* header */}
        <motion.div initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:52 }}>
          {/* <p className="label" style={{ marginBottom:7 }}>04 — Content Creation</p> */}
          <h2 style={{ fontSize:'clamp(28px,4vw,50px)', fontWeight:900, color:'#e8dcc8', letterSpacing:'-.02em', lineHeight:1.1 }}>
            21K+ Subscribers &<br /><span className="text-gold" style={{ fontStyle:'italic' }}>Growing Organically</span>
          </h2>
          <div style={{ width:56, height:2, background:'linear-gradient(90deg,var(--amber),transparent)', borderRadius:1, marginTop:14 }} />
          <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'var(--text-secondary)', lineHeight:1.8, maxWidth:560, marginTop:16 }}>
            Built a sports content community of 21,000+ subscribers from scratch — proving real-world expertise in YouTube SEO, audience engagement, and content strategy that converts viewers into loyal followers.
          </p>
        </motion.div>

        {/* stats bar */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}
          style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:16, marginBottom:48 }}>
          {highlights.map((h, i) => (
            <div key={i} className="card" style={{ padding:'18px 20px', textAlign:'center' }}>
              <div style={{ fontSize:24, marginBottom:8 }}>{h.icon}</div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(20px,3vw,28px)', fontWeight:900, color:'var(--amber-soft)', lineHeight:1 }}>{h.val}</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:9, color:'var(--text-muted)', letterSpacing:'.12em', marginTop:4 }}>{h.label}</div>
            </div>
          ))}
        </motion.div>

        {/* main content grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap:28, alignItems:'start' }}>

          {/* channel embed */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--amber)', letterSpacing:'.14em', marginBottom:12 }}>CHANNEL</p>
            <div style={{ position:'relative', borderRadius:12, overflow:'hidden', border:'1px solid var(--border)', background:'var(--surface-1)', aspectRatio:'16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/gisowZrycVo?si=RYTQ-6WOnRJmjZBW"
                title="TVH Sports Speak Channel"
                style={{ width:'100%', height:'100%', border:'none', display:'block' }}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', marginTop:10, lineHeight:1.6 }}>
              TVH Sports Speak — Sports commentary, analysis & storytelling
            </p>
          </motion.div>

          {/* right — what this proves */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}>
            <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--amber)', letterSpacing:'.14em', marginBottom:16 }}>WHAT THIS PROVES</p>

            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[
                { title:'YouTube SEO Mastery',      desc:'Grew to 21K+ subscribers purely through organic search optimization — no paid promotion.' },
                { title:'Consistent Content Engine', desc:'Maintained a regular upload schedule, proving discipline and long-term content planning skills.' },
                { title:'Audience Psychology',       desc:'Deep understanding of what keeps viewers engaged — directly applicable to brand marketing.' },
                { title:'Video Production',          desc:'End-to-end video creation: scripting, recording, editing, and publishing for a niche audience.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding:'14px 18px' }}>
                  <div style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                    <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--amber)', flexShrink:0, marginTop:6 }} />
                    <div>
                      <p style={{ fontFamily:'var(--font-display)', fontSize:14, fontWeight:700, color:'#e8dcc8', marginBottom:4 }}>{item.title}</p>
                      <p style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://www.youtube.com/@TVHSportsSpeak" target="_blank" rel="noreferrer"
               className="btn-amber" style={{ display:'inline-block', marginTop:20, textDecoration:'none' }}>
              Visit Channel ↗
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}