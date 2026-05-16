import { useState } from "react";

// ─── DATI FINTI PER PREVIEW ───────────────────────────────────────────────────

const KPIS = [
  { l:"Checklist oggi",     v:"5/7",  sub:"completate" },
  { l:"Carnet da incassare",v:"€320", sub:"in sospeso" },
  { l:"Task da fare",       v:"3",    sub:"assegnati" },
  { l:"Contratti attivi",   v:"2",    sub:"in corso" },
];

const NAV_ITEMS = ["🏠 Home","📱 App","📣 Social","📊 Contabilità","🗓️ Turni","🆕 Contratti","✅ Task"];

const TASKS = [
  { t:"Aggiornare menù Sushi Royal", user:"App Manager", color:"#60a5fa", done:false },
  { t:"Post Instagram promo estate",  user:"Social",      color:"#a78bfa", done:true  },
  { t:"Fattura Morando giugno",        user:"Contabilità", color:"#34d399", done:false },
];

// ─── TEMA 1: AURORA — gradienti morbidi, sfondo scuro viola/indaco ───────────

function Tema1(){
  const [sel,setSel]=useState(0);
  return (
    <div style={{ background:"#0d0f1a", minHeight:420, borderRadius:16, overflow:"hidden", fontFamily:"'DM Sans',sans-serif", border:"1px solid #1a1d30" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#1a1040 0%,#0d1a2e 100%)", padding:"0 20px", borderBottom:"1px solid #2a1f50", display:"flex", alignItems:"center", justifyContent:"space-between", height:48 }}>
        <span style={{ fontWeight:800, fontSize:17, background:"linear-gradient(90deg,#a78bfa,#60a5fa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>TeamHub</span>
        <div style={{ display:"flex", gap:4 }}>
          {NAV_ITEMS.slice(0,5).map((n,i)=>(
            <button key={i} onClick={()=>setSel(i)} style={{ padding:"4px 10px", borderRadius:6, border:"none", cursor:"pointer", fontSize:11, fontWeight:600, fontFamily:"inherit",
              background:sel===i?"rgba(167,139,250,0.2)":"transparent",
              color:sel===i?"#a78bfa":"#4b5563" }}>
              {n}
            </button>
          ))}
        </div>
        <div style={{ width:30,height:30,borderRadius:"50%",background:"linear-gradient(135deg,#a78bfa,#60a5fa)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:800 }}>A</div>
      </div>
      {/* Contenuto */}
      <div style={{ padding:20 }}>
        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:18, fontWeight:800, color:"#f1f0ff", marginBottom:2, fontFamily:"'Syne',sans-serif" }}>
            Ciao, <span style={{ background:"linear-gradient(90deg,#a78bfa,#60a5fa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Admin</span> 👋
          </div>
          <div style={{ color:"#4b5563", fontSize:12 }}>mercoledì 13 maggio 2026</div>
        </div>
        {/* KPI */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10, marginBottom:20 }}>
          {KPIS.map((k,i)=>{
            const colors=["#a78bfa","#60a5fa","#fb923c","#34d399"];
            return (
              <div key={i} style={{ background:`linear-gradient(135deg,${colors[i]}18,${colors[i]}08)`, border:`1px solid ${colors[i]}30`, borderRadius:12, padding:"12px 14px" }}>
                <div style={{ color:"#6b7280",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6 }}>{k.l}</div>
                <div style={{ color:colors[i],fontSize:22,fontWeight:800 }}>{k.v}</div>
                <div style={{ color:"#374151",fontSize:10,marginTop:2 }}>{k.sub}</div>
              </div>
            );
          })}
        </div>
        {/* Task */}
        <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid #1a1d30", borderRadius:12, padding:14 }}>
          <div style={{ color:"#6b7280",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10 }}>Task recenti</div>
          {TASKS.map((t,i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:i<TASKS.length-1?"1px solid #1a1d30":"none" }}>
              <div style={{ width:8,height:8,borderRadius:"50%",background:t.done?"#374151":t.color,flexShrink:0 }}/>
              <span style={{ color:t.done?"#374151":"#d1d5db",fontSize:13,textDecoration:t.done?"line-through":"none",flex:1 }}>{t.t}</span>
              <span style={{ background:t.color+"22",color:t.color,fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:8 }}>{t.user}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TEMA 2: CLEAN LIGHT — chiaro, moderno, professionale ────────────────────

function Tema2(){
  const [sel,setSel]=useState(0);
  return (
    <div style={{ background:"#f8fafc", minHeight:420, borderRadius:16, overflow:"hidden", fontFamily:"'DM Sans',sans-serif", border:"1px solid #e2e8f0" }}>
      {/* Sidebar */}
      <div style={{ display:"flex", height:420 }}>
        <div style={{ width:180, background:"#fff", borderRight:"1px solid #e2e8f0", padding:"16px 0", flexShrink:0 }}>
          <div style={{ padding:"0 16px 16px", borderBottom:"1px solid #f1f5f9", marginBottom:8 }}>
            <span style={{ fontWeight:800, fontSize:16, color:"#1e293b", fontFamily:"'Syne',sans-serif" }}>Team<span style={{ color:"#6366f1" }}>Hub</span></span>
          </div>
          {NAV_ITEMS.map((n,i)=>(
            <button key={i} onClick={()=>setSel(i)} style={{ display:"flex",alignItems:"center",gap:8,width:"100%",padding:"8px 16px",border:"none",cursor:"pointer",textAlign:"left",fontFamily:"inherit",fontSize:13,fontWeight:sel===i?600:400,
              background:sel===i?"#eef2ff":"transparent",
              color:sel===i?"#6366f1":"#64748b",
              borderRight:sel===i?"2px solid #6366f1":"2px solid transparent" }}>
              {n}
            </button>
          ))}
          <div style={{ position:"absolute", bottom:16, padding:"0 16px" }}>
            <div style={{ display:"flex",alignItems:"center",gap:8,padding:"8px 10px",background:"#f8fafc",borderRadius:8 }}>
              <div style={{ width:28,height:28,borderRadius:"50%",background:"#6366f1",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12,fontWeight:800 }}>A</div>
              <div><div style={{ color:"#1e293b",fontSize:12,fontWeight:600 }}>Admin</div><div style={{ color:"#94a3b8",fontSize:10 }}>Amministratore</div></div>
            </div>
          </div>
        </div>
        {/* Main */}
        <div style={{ flex:1, padding:20, overflowY:"auto" }}>
          <div style={{ marginBottom:20 }}>
            <h2 style={{ color:"#1e293b",margin:"0 0 2px",fontSize:18,fontWeight:800,fontFamily:"'Syne',sans-serif" }}>Buongiorno, Admin 👋</h2>
            <p style={{ color:"#94a3b8",margin:0,fontSize:12 }}>mercoledì 13 maggio 2026</p>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:20 }}>
            {KPIS.map((k,i)=>{
              const colors=["#6366f1","#3b82f6","#f59e0b","#10b981"];
              return (
                <div key={i} style={{ background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,padding:"14px 16px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ color:"#94a3b8",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6 }}>{k.l}</div>
                  <div style={{ color:colors[i],fontSize:24,fontWeight:800 }}>{k.v}</div>
                  <div style={{ color:"#cbd5e1",fontSize:10,marginTop:2 }}>{k.sub}</div>
                </div>
              );
            })}
          </div>
          <div style={{ background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,padding:14,boxShadow:"0 1px 3px rgba(0,0,0,0.04)" }}>
            <div style={{ color:"#94a3b8",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10 }}>Task recenti</div>
            {TASKS.map((t,i)=>(
              <div key={i} style={{ display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:i<TASKS.length-1?"1px solid #f1f5f9":"none" }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:t.done?"#e2e8f0":t.color,flexShrink:0 }}/>
                <span style={{ color:t.done?"#cbd5e1":"#334155",fontSize:13,textDecoration:t.done?"line-through":"none",flex:1 }}>{t.t}</span>
                <span style={{ background:t.color+"18",color:t.color,fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:6 }}>{t.user}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TEMA 3: SLATE BOLD — scuro neutro, accenti forti, tipografia grande ──────

function Tema3(){
  const [sel,setSel]=useState(0);
  return (
    <div style={{ background:"#111318", minHeight:420, borderRadius:16, overflow:"hidden", fontFamily:"'DM Sans',sans-serif", border:"1px solid #1e2028" }}>
      {/* Header */}
      <div style={{ background:"#111318", padding:"0 24px", borderBottom:"2px solid #1e2028", display:"flex", alignItems:"center", justifyContent:"space-between", height:52 }}>
        <span style={{ fontWeight:800, fontSize:18, color:"#fff", fontFamily:"'Syne',sans-serif", letterSpacing:"-0.03em" }}>TEAM<span style={{ color:"#f97316" }}>HUB</span></span>
        <div style={{ display:"flex", gap:2 }}>
          {NAV_ITEMS.slice(0,5).map((n,i)=>(
            <button key={i} onClick={()=>setSel(i)} style={{ padding:"5px 12px", borderRadius:4, border:"none", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"inherit", letterSpacing:"0.05em", textTransform:"uppercase",
              background:sel===i?"#f97316":"transparent",
              color:sel===i?"#fff":"#4b5563" }}>
              {n.replace(/[^\w\s]/g,"").trim()}
            </button>
          ))}
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:8 }}>
          <div style={{ width:8,height:8,borderRadius:"50%",background:"#22c55e" }}/>
          <span style={{ color:"#6b7280",fontSize:12,fontWeight:600 }}>ADMIN</span>
        </div>
      </div>
      {/* Contenuto */}
      <div style={{ padding:24 }}>
        <div style={{ marginBottom:24, display:"flex", alignItems:"flex-end", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:28, fontWeight:800, color:"#fff", letterSpacing:"-0.03em", fontFamily:"'Syne',sans-serif", lineHeight:1 }}>
              BUONGIORNO<span style={{ color:"#f97316" }}>.</span>
            </div>
            <div style={{ color:"#374151", fontSize:12, fontWeight:600, marginTop:4, textTransform:"uppercase", letterSpacing:"0.1em" }}>MER 13 MAGGIO 2026</div>
          </div>
          <div style={{ background:"#f97316", borderRadius:8, padding:"6px 14px" }}>
            <span style={{ color:"#fff", fontSize:12, fontWeight:700 }}>ADMIN</span>
          </div>
        </div>
        {/* KPI */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:20 }}>
          {KPIS.map((k,i)=>{
            const colors=["#f97316","#60a5fa","#a78bfa","#34d399"];
            return (
              <div key={i} style={{ background:"#1a1c23", borderRadius:8, padding:"14px", borderTop:`3px solid ${colors[i]}` }}>
                <div style={{ color:"#374151",fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8 }}>{k.l}</div>
                <div style={{ color:"#fff",fontSize:26,fontWeight:800,letterSpacing:"-0.02em" }}>{k.v}</div>
                <div style={{ color:colors[i],fontSize:10,fontWeight:600,marginTop:4 }}>{k.sub}</div>
              </div>
            );
          })}
        </div>
        {/* Task */}
        <div style={{ background:"#1a1c23", borderRadius:8, padding:16 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
            <div style={{ color:"#374151",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em" }}>TASK RECENTI</div>
            <div style={{ background:"#f97316",borderRadius:4,padding:"2px 8px" }}><span style={{ color:"#fff",fontSize:10,fontWeight:700 }}>3 ATTIVI</span></div>
          </div>
          {TASKS.map((t,i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:i<TASKS.length-1?"1px solid #1e2028":"none" }}>
              <div style={{ width:3,height:32,borderRadius:2,background:t.done?"#374151":t.color,flexShrink:0 }}/>
              <span style={{ color:t.done?"#374151":"#e5e7eb",fontSize:13,fontWeight:t.done?400:600,textDecoration:t.done?"line-through":"none",flex:1 }}>{t.t}</span>
              <span style={{ color:t.color,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em" }}>{t.user}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────

export default function App(){
  const [active,setActive]=useState(null);

  return (
    <div style={{ minHeight:"100vh", background:"#080a0f", padding:24, fontFamily:"system-ui,sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>

      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <h1 style={{ color:"#f9fafb", fontFamily:"system-ui", fontSize:22, fontWeight:700, margin:"0 0 8px" }}>Proposte grafiche TeamHub</h1>
          <p style={{ color:"#6b7280", fontSize:14, margin:0 }}>Clicca su una proposta per vederla in primo piano</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:24 }}>

          {/* Proposta 1 */}
          <div onClick={()=>setActive(active===1?null:1)} style={{ cursor:"pointer" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
              <div>
                <div style={{ color:"#f9fafb",fontWeight:700,fontSize:14 }}>1 — Aurora</div>
                <div style={{ color:"#6b7280",fontSize:12 }}>Gradienti viola/blu, dark raffinato</div>
              </div>
              {active===1&&<span style={{ background:"#a78bfa",color:"#fff",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:6 }}>SELEZIONATA</span>}
            </div>
            <div style={{ transform:active===1?"scale(1.02)":"scale(1)", transition:"transform .2s", boxShadow:active===1?"0 0 0 2px #a78bfa":"none", borderRadius:16 }}>
              <Tema1/>
            </div>
          </div>

          {/* Proposta 2 */}
          <div onClick={()=>setActive(active===2?null:2)} style={{ cursor:"pointer" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
              <div>
                <div style={{ color:"#f9fafb",fontWeight:700,fontSize:14 }}>2 — Clean Light</div>
                <div style={{ color:"#6b7280",fontSize:12 }}>Chiaro, sidebar, stile gestionale</div>
              </div>
              {active===2&&<span style={{ background:"#6366f1",color:"#fff",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:6 }}>SELEZIONATA</span>}
            </div>
            <div style={{ transform:active===2?"scale(1.02)":"scale(1)", transition:"transform .2s", boxShadow:active===2?"0 0 0 2px #6366f1":"none", borderRadius:16 }}>
              <Tema2/>
            </div>
          </div>

          {/* Proposta 3 */}
          <div onClick={()=>setActive(active===3?null:3)} style={{ cursor:"pointer" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
              <div>
                <div style={{ color:"#f9fafb",fontWeight:700,fontSize:14 }}>3 — Slate Bold</div>
                <div style={{ color:"#6b7280",fontSize:12 }}>Dark neutro, accenti arancio, deciso</div>
              </div>
              {active===3&&<span style={{ background:"#f97316",color:"#fff",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:6 }}>SELEZIONATA</span>}
            </div>
            <div style={{ transform:active===3?"scale(1.02)":"scale(1)", transition:"transform .2s", boxShadow:active===3?"0 0 0 2px #f97316":"none", borderRadius:16 }}>
              <Tema3/>
            </div>
          </div>

        </div>

        {active&&<div style={{ marginTop:24,background:"#0f1624",border:"1px solid #1e2d40",borderRadius:12,padding:"14px 20px",textAlign:"center" }}>
          <p style={{ color:"#9ca3af",fontSize:13,margin:0 }}>
            Hai selezionato la proposta <strong style={{ color:"#f9fafb" }}>{active === 1?"Aurora":active===2?"Clean Light":"Slate Bold"}</strong>.
            Dimmi se vuoi applicarla all'app, oppure se vuoi combinare elementi di più proposte.
          </p>
        </div>}
      </div>
    </div>
  );
}
