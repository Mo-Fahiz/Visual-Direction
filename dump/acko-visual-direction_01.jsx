import { useState } from "react";

// ═══════════════════════════════════════
// ACKO VISUAL DIRECTION v3.0
// Showreel format — feel first, rules second
// ═══════════════════════════════════════

const P50="#F5F3FF",P100="#EAEAFD",P200="#D9D8FC",P400="#9B8FF6",P600="#6841E6",P700="#582FD2",P800="#4E29BB",P950="#241362";
const G50="#FBFBFB",G100="#F5F5F5",G200="#E0E0E1",G300="#B7B7B8",G450="#605F63",G550="#333333",G700="#141414",G800="#0A0A0A";
const O50="#FFF3E5",O100="#FFE5CC",O500="#FF8D28",O600="#EB740A",O800="#8D4301";
const GN50="#F0FDF4",GN100="#DCFCE7",GN600="#16A34A",GN700="#15803D";
const R50="#FEF2F2",R100="#FEE2E2",R600="#DC2626";

const CAT_AUTO={name:"Auto",color:"#F4A024",label:"Sunshade",light:"#FFF8E7"};
const CAT_HEALTH={name:"Health",color:"#EC5FAB",label:"Vivid Cerise",light:"#FDF2F8"};
const CAT_LIFE={name:"Life",color:"#1EB7E7",label:"Picton Blue",light:"#EEFAFF"};
const CAT_TRAVEL={name:"Travel",color:"#55B94D",label:"Leafy Green",light:"#F3FFF2"};

// ═══ Image placeholder ═══
function ImageFrame({aspect="16/9",description,mood,brief,color="#1a1a1a",textColor="#fff",overlay=true,children}){
  return(
    <div style={{position:"relative",width:"100%",aspectRatio:aspect,borderRadius:"20px",overflow:"hidden",background:color}}>
      {/* Atmospheric gradient */}
      <div style={{position:"absolute",inset:0,background:`linear-gradient(135deg, ${color} 0%, ${color}DD 40%, ${color}99 100%)`}}/>
      {/* Grain texture overlay */}
      <div style={{position:"absolute",inset:0,opacity:0.04,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",backgroundSize:"128px"}}/>
      {/* Content */}
      <div style={{position:"relative",height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"32px"}}>
        {children}
        {overlay && <div style={{marginTop:"auto"}}>
          <div style={{display:"inline-block",padding:"4px 12px",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(8px)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.1)",marginBottom:"8px"}}>
            <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)"}}>Image placeholder</div>
          </div>
          <div style={{fontSize:"14px",fontWeight:600,color:textColor,marginBottom:"4px"}}>{description}</div>
          <div style={{fontSize:"12px",color:"rgba(255,255,255,0.5)",lineHeight:1.5,maxWidth:"500px"}}>{brief}</div>
          {mood && <div style={{display:"flex",gap:"6px",marginTop:"10px",flexWrap:"wrap"}}>
            {mood.map((m,i)=><span key={i} style={{padding:"3px 10px",borderRadius:"100px",fontSize:"10px",fontWeight:500,background:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.5)",border:"1px solid rgba(255,255,255,0.08)"}}>{m}</span>)}
          </div>}
        </div>}
      </div>
    </div>
  );
}

// ═══ Video placeholder ═══
function VideoFrame({description,brief,aspect="16/9"}){
  return(
    <div style={{position:"relative",width:"100%",aspectRatio:aspect,borderRadius:"20px",overflow:"hidden",background:"#0a0a0a",border:`1px solid ${G200}`}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 30% 50%, #241362 0%, #0a0a0a 70%)"}}/>
      <div style={{position:"relative",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px"}}>
        {/* Play button */}
        <div style={{width:"64px",height:"64px",borderRadius:"50%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",backdropFilter:"blur(8px)"}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="rgba(255,255,255,0.8)"/></svg>
        </div>
        <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:"8px"}}>Video placeholder</div>
        <div style={{fontSize:"14px",fontWeight:600,color:"#fff",textAlign:"center",marginBottom:"4px"}}>{description}</div>
        <div style={{fontSize:"12px",color:"rgba(255,255,255,0.4)",textAlign:"center",maxWidth:"400px",lineHeight:1.5}}>{brief}</div>
      </div>
    </div>
  );
}

function Chip({children,bg=G100,color=G550}){return <span style={{display:"inline-block",padding:"4px 12px",borderRadius:"9999px",fontSize:"12px",fontWeight:500,background:bg,color,marginRight:"6px",marginBottom:"6px"}}>{children}</span>}
function DoBlock({children}){return <div style={{padding:"16px",background:GN50,borderRadius:"12px",border:`1px solid ${GN100}`}}><div style={{fontSize:"11px",fontWeight:600,color:GN700,marginBottom:"8px"}}>DO</div><div style={{fontSize:"13px",color:G550,lineHeight:1.6}}>{children}</div></div>}
function DontBlock({children}){return <div style={{padding:"16px",background:R50,borderRadius:"12px",border:`1px solid ${R100}`}}><div style={{fontSize:"11px",fontWeight:600,color:R600,marginBottom:"8px"}}>DON'T</div><div style={{fontSize:"13px",color:G550,lineHeight:1.6}}>{children}</div></div>}

// ═══════════════════════════════════════
// SCENE 1: OPENING — THE FEELING
// ═══════════════════════════════════════
function OpeningScene(){
  return(
    <div style={{background:"#0a0a0a",padding:"0"}}>
      {/* Hero image */}
      <div style={{position:"relative",minHeight:"90vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"64px"}}>
        <ImageFrame aspect="auto" color="#1a1418" overlay={false}>
          <div style={{minHeight:"70vh",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
            <div style={{display:"inline-block",padding:"4px 12px",background:"rgba(255,255,255,0.06)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.08)",marginBottom:"16px",width:"fit-content"}}>
              <div style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)"}}>Hero image — Documentary warm mode</div>
            </div>
            <div style={{fontSize:"12px",color:"rgba(255,255,255,0.3)",maxWidth:"520px",lineHeight:1.5,marginBottom:"16px"}}>
              Prompt: Indian family in their car, late afternoon sunlight through windshield, candid laughter, warm color grade, shot on 50mm f/2.8, slight film grain, backseat visible with child, real middle-class sedan, natural not posed
            </div>

            <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:P400,marginBottom:"16px"}}>ACKO · Visual direction</div>
            <h1 style={{fontSize:"clamp(48px, 8vw, 96px)",fontWeight:700,lineHeight:0.92,letterSpacing:"-3px",color:"#fff",margin:"0 0 24px",maxWidth:"800px"}}>
              Precise when you're choosing.<br/>
              <span style={{color:O500}}>Warm when you need us.</span>
            </h1>
            <p style={{fontSize:"20px",color:"rgba(255,255,255,0.5)",margin:0,maxWidth:"520px",lineHeight:1.5}}>
              This is how ACKO looks, feels, and shows up — across every screen, every creative, every moment.
            </p>
          </div>
        </ImageFrame>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SCENE 2: THE FOUR MOMENTS (FILM STRIP)
// ═══════════════════════════════════════
function FilmStrip(){
  const moments=[
    {
      number:"01",
      line:"You read every word. You understand every rupee.",
      principle:"Clear over clever",
      imgDesc:"Customer reading policy on phone",
      imgBrief:"Close-up of hands holding phone showing ACKO app with clean policy summary. Kitchen table, morning chai visible. Warm natural light. Focus on the clarity of the screen content. Indian home setting.",
      mood:["morning light","close-up hands","kitchen table","readable screen"],
      color:"#0C2E2A",
      accent:"#0F766E",
    },
    {
      number:"02",
      line:"One question. Everything else, we handle.",
      principle:"Effortless by default",
      imgDesc:"Simple car number entry moment",
      imgBrief:"Over-shoulder shot of person entering car number plate on phone. The car is visible in background, parked on a residential Indian street. Shallow DOF. The phone screen is bright and minimal. Quick, effortless moment.",
      mood:["over-shoulder","residential street","shallow DOF","quick moment"],
      color:"#0C1A3D",
      accent:"#1D4ED8",
    },
    {
      number:"03",
      line:"When it matters most, you hear a real voice.",
      principle:"Present when it matters",
      imgDesc:"Support call during a claim",
      imgBrief:"Woman on phone call at a hospital or car repair context, looking relieved. Expression is calm, not distressed. Late afternoon light. Someone is helping. The mood is 'you're not alone.' Warm, empathetic, documentary style.",
      mood:["relief expression","warm afternoon","phone call","empathetic"],
      color:"#2A1A0A",
      accent:O600,
    },
    {
      number:"04",
      line:"Your morning. One card. No noise.",
      principle:"Respectful of time",
      imgDesc:"Calm morning notification",
      imgBrief:"Phone on a bedside table or breakfast setup showing a single ACKO notification card. Morning light, clean composition. The feeling is calm and organized. Indian home, real textures. The notification is the only thing asking for attention.",
      mood:["morning light","single notification","breakfast","calm"],
      color:"#1A0F2E",
      accent:P600,
    },
  ];

  return(
    <div style={{background:"#0a0a0a",padding:"80px 64px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:"48px"}}>Four moments that define the brand</div>
        
        <div style={{display:"flex",flexDirection:"column",gap:"48px"}}>
          {moments.map((m,i)=>(
            <div key={m.number}>
              <ImageFrame aspect="21/9" description={m.imgDesc} brief={m.imgBrief} mood={m.mood} color={m.color}>
                <div style={{position:"absolute",top:"32px",left:"32px"}}>
                  <div style={{fontSize:"14px",fontWeight:600,color:m.accent,marginBottom:"8px"}}>{m.number}</div>
                  <div style={{fontSize:"clamp(28px, 4vw, 48px)",fontWeight:700,color:"#fff",lineHeight:1.1,letterSpacing:"-1px",maxWidth:"500px"}}>{m.line}</div>
                  <div style={{fontSize:"13px",color:"rgba(255,255,255,0.4)",marginTop:"12px"}}>{m.principle}</div>
                </div>
              </ImageFrame>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SCENE 3: BRAND VIDEO MOMENT
// ═══════════════════════════════════════
function BrandVideoScene(){
  return(
    <div style={{background:"#0a0a0a",padding:"0 64px 80px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <VideoFrame
          description="ACKO Brand Reel — 60 seconds"
          brief="A montage cutting between all four moments: the clarity of reading a policy, the speed of buying in 3 steps, the warmth of a support call, the calm of a morning renewal card. Music: confident but warm. Ends on the ACKO logo with 'Welcome Change.'"
        />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// TRANSITION: FROM FEELING TO SYSTEM
// ═══════════════════════════════════════
function TransitionScene(){
  return(
    <div style={{background:"#fff",padding:"120px 64px",textAlign:"center"}}>
      <div style={{maxWidth:"640px",margin:"0 auto"}}>
        <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:P600,marginBottom:"16px"}}>From feeling to system</div>
        <h2 style={{fontSize:"48px",fontWeight:700,lineHeight:1.05,letterSpacing:"-1.5px",color:G800,margin:"0 0 20px"}}>Now, the rules that<br/>make it repeatable.</h2>
        <p style={{fontSize:"16px",color:G450,lineHeight:1.6,margin:0}}>Everything above is the feeling. Everything below is how you achieve it — consistently, whether the work is done by a designer, an AI tool, or a new team member on their first day.</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SCENE 4: PRINCIPLES WITH VISUAL EXAMPLES
// ═══════════════════════════════════════

function ClearNot(){return <div style={{background:"#fff",borderRadius:"16px",padding:"20px",width:"280px",border:`1px solid ${G200}`}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"10px"}}><div><div style={{fontSize:"10px",color:G300,marginBottom:"3px"}}>PREMIUM PLUS SHIELD PRO</div><div style={{fontSize:"15px",fontWeight:700,color:G800}}>Comprehensive Coverage*</div></div><div style={{background:"linear-gradient(135deg,#F59E0B,#EF4444)",color:"#fff",fontSize:"9px",fontWeight:700,padding:"3px 8px",borderRadius:"4px",whiteSpace:"nowrap"}}>BESTSELLER!</div></div>
  <div style={{fontSize:"24px",fontWeight:800,color:G800}}>₹4,999<span style={{fontSize:"11px",color:G300}}>*</span></div>
  <div style={{fontSize:"9px",color:G300,marginBottom:"10px"}}>*T&C apply. Starting price. Final premium may vary.</div>
  <div style={{fontSize:"10px",color:G450,lineHeight:1.5,padding:"10px",background:G100,borderRadius:"8px",marginBottom:"10px"}}>Subject to IDV, NCB, zero-dep rider exclusions as per clause 4.2(b). Coverage terms governed by master policy document.</div>
  <button style={{width:"100%",padding:"10px",background:P600,color:"#fff",border:"none",borderRadius:"9999px",fontSize:"12px",fontWeight:600,cursor:"pointer"}}>Buy now →</button>
</div>}

function ClearYes(){return <div style={{background:"#fff",borderRadius:"16px",padding:"20px",width:"280px",border:"1px solid #D1FAE5"}}>
  <div style={{fontSize:"10px",fontWeight:600,color:GN700,letterSpacing:"0.06em",marginBottom:"4px"}}>CAR INSURANCE</div>
  <div style={{fontSize:"17px",fontWeight:700,color:G800,lineHeight:1.3,marginBottom:"14px"}}>Full coverage for your Swift</div>
  <div style={{display:"flex",alignItems:"baseline",gap:"4px",marginBottom:"4px"}}><span style={{fontSize:"28px",fontWeight:700,color:G800}}>₹4,999</span><span style={{fontSize:"13px",color:G450}}>/ year</span></div>
  <div style={{fontSize:"12px",color:GN600,fontWeight:500,marginBottom:"16px"}}>Your final price. No hidden fees.</div>
  {["Covers theft, accidents, natural damage","Zero-depreciation included","24/7 roadside help"].map((t,i)=><div key={i} style={{display:"flex",gap:"8px",alignItems:"start",marginBottom:"8px",fontSize:"12px",color:G550}}><svg width="14" height="14" viewBox="0 0 14 14" style={{flexShrink:0,marginTop:"2px"}}><circle cx="7" cy="7" r="7" fill={GN100}/><path d="M4 7l2 2 4-4" stroke={GN700} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>{t}</div>)}
</div>}

function EffortNot(){return <div style={{background:"#fff",borderRadius:"16px",padding:"18px",width:"280px",border:`1px solid ${G200}`}}>
  <div style={{fontSize:"13px",fontWeight:700,color:G800,marginBottom:"12px"}}>Buy car insurance (Step 1 of 7)</div>
  {["Full name","Father's full name","Date of birth","Gender","Marital status","Occupation","Annual income","PAN number"].map((f,i)=><div key={i} style={{marginBottom:"6px"}}><div style={{fontSize:"9px",color:G450,marginBottom:"2px"}}>{f} <span style={{color:R600}}>*</span></div><div style={{height:"22px",background:G100,border:`1px solid ${G200}`,borderRadius:"6px"}}/></div>)}
</div>}

function EffortYes(){return <div style={{background:"#fff",borderRadius:"16px",padding:"20px",width:"280px",border:`1px solid ${P200}`}}>
  <div style={{display:"flex",gap:"4px",marginBottom:"16px"}}><div style={{flex:1,height:"3px",background:P600,borderRadius:"2px"}}/><div style={{flex:1,height:"3px",background:P600,borderRadius:"2px"}}/><div style={{flex:1,height:"3px",background:G200,borderRadius:"2px"}}/></div>
  <div style={{fontSize:"11px",color:G450,marginBottom:"4px"}}>Step 2 of 3</div>
  <div style={{fontSize:"18px",fontWeight:700,color:G800,marginBottom:"4px",lineHeight:1.3}}>What's your car number?</div>
  <div style={{fontSize:"12px",color:G450,marginBottom:"16px"}}>We'll fetch the rest automatically.</div>
  <div style={{padding:"14px 16px",border:`2px solid ${P600}`,borderRadius:"12px",marginBottom:"14px",background:P50}}>
    <div style={{fontSize:"10px",color:P600,fontWeight:600,marginBottom:"2px",letterSpacing:"0.04em"}}>CAR NUMBER</div>
    <div style={{fontSize:"20px",fontWeight:700,color:G800,letterSpacing:"0.08em",fontFamily:"monospace"}}>KL 10 AB 1234</div>
  </div>
  <div style={{padding:"10px 12px",background:GN50,border:`1px solid ${GN100}`,borderRadius:"10px",display:"flex",alignItems:"center",gap:"8px"}}>
    <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="7" fill={GN600}/><path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
    <div style={{fontSize:"12px",color:GN700}}>Maruti Swift VXi · 2022 · detected</div>
  </div>
</div>}

function PresentNot(){return <div style={{background:"#fff",borderRadius:"16px",padding:"20px",width:"280px",border:`1px solid ${G200}`}}>
  <div style={{fontSize:"10px",color:G300,marginBottom:"4px",letterSpacing:"0.04em"}}>TICKET #CLM-887341-XZ</div>
  <div style={{fontSize:"14px",fontWeight:700,color:G800,marginBottom:"14px"}}>Status: UNDER PROCESSING</div>
  <div style={{padding:"12px",background:G100,border:`1px solid ${G200}`,borderRadius:"8px",fontSize:"10px",color:G450,lineHeight:1.5,marginBottom:"16px"}}>Your claim has been submitted successfully. TAT: 7–14 business days. For queries, contact support@example.com quoting the ticket ID.</div>
  <div style={{height:"6px",background:G200,borderRadius:"3px",marginBottom:"8px"}}><div style={{width:"30%",height:"100%",background:G300,borderRadius:"3px"}}/></div>
  <div style={{fontSize:"10px",color:G300}}>30% complete</div><div style={{height:"80px"}}/>
</div>}

function PresentYes(){return <div style={{background:"#fff",borderRadius:"16px",padding:"20px",width:"280px",border:`1px solid ${O100}`}}>
  <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"}}>
    <div style={{width:"36px",height:"36px",borderRadius:"50%",background:O50,display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2C5 2 2 5 2 9c0 2 1 4 2 5l-1 2 3-1c1 1 2 1 3 1 4 0 7-3 7-7s-3-7-7-7z" stroke={O600} strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
    <div><div style={{fontSize:"14px",fontWeight:600,color:G800}}>We've got this, Fahiz.</div><div style={{fontSize:"11px",color:O800}}>Your claim is in progress</div></div>
  </div>
  <div style={{padding:"14px",background:O50,borderRadius:"12px",marginBottom:"14px"}}>
    <div style={{fontSize:"11px",color:O800,marginBottom:"10px",fontWeight:500}}>What's happening right now</div>
    {[{l:"Claim received",d:true},{l:"Documents verified",d:true},{l:"Surveyor arrives tomorrow",d:false,a:true},{l:"Payout to your account",d:false}].map((s,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:i<3?"10px":0}}>
      <div style={{width:"16px",height:"16px",borderRadius:"50%",background:s.d?O600:s.a?"#fff":G200,border:s.a?`2px solid ${O600}`:"none",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        {s.d&&<svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>}
        {s.a&&<div style={{width:"6px",height:"6px",borderRadius:"50%",background:O600}}/>}
      </div>
      <div style={{fontSize:"12px",color:s.d||s.a?G800:G300,fontWeight:s.a?600:400}}>{s.l}</div>
    </div>)}
  </div>
  <div style={{fontSize:"12px",color:G550,lineHeight:1.5}}>Priya from our team will call you by 3pm today.</div>
</div>}

function RespNot(){return <div style={{background:"#fff",borderRadius:"16px",padding:"16px",width:"280px",border:`1px solid ${G200}`}}>
  <div style={{padding:"12px",background:"linear-gradient(135deg,#F59E0B,#EF4444)",borderRadius:"10px",color:"#fff",marginBottom:"8px"}}><div style={{fontSize:"11px",fontWeight:700}}>🔥 LIMITED TIME!</div><div style={{fontSize:"10px"}}>Upgrade to Premium NOW</div></div>
  <div style={{padding:"12px",background:"#DBEAFE",borderRadius:"10px",marginBottom:"8px"}}><div style={{fontSize:"11px",fontWeight:700,color:"#1E40AF"}}>💎 New: Health Insurance</div><div style={{fontSize:"10px",color:"#1E40AF"}}>Get covered today!</div></div>
  <div style={{padding:"12px",background:"#FEF3C7",borderRadius:"10px",marginBottom:"12px"}}><div style={{fontSize:"11px",fontWeight:700,color:"#92400E"}}>⭐ Refer & earn ₹500</div></div>
  <div style={{fontSize:"11px",color:G300,textAlign:"center",padding:"12px 0"}}>Your policy · Tap to view</div>
</div>}

function RespYes(){return <div style={{background:"#fff",borderRadius:"16px",padding:"20px",width:"280px",border:`1px solid ${P200}`}}>
  <div style={{fontSize:"11px",color:G450,marginBottom:"4px"}}>Good morning, Fahiz</div>
  <div style={{fontSize:"17px",fontWeight:700,color:G800,marginBottom:"16px",lineHeight:1.3}}>Your car insurance renews in 12 days</div>
  <div style={{padding:"14px",background:P50,borderRadius:"12px",marginBottom:"14px"}}>
    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"6px"}}><div style={{fontSize:"11px",color:P600}}>This year's price</div><div style={{fontSize:"11px",color:GN600,fontWeight:600}}>₹400 less</div></div>
    <div style={{fontSize:"24px",fontWeight:700,color:G800}}>₹4,599</div>
    <div style={{fontSize:"11px",color:G450}}>Same cover. No claims bonus applied.</div>
  </div>
  <button style={{width:"100%",padding:"12px",background:P600,color:"#fff",border:"none",borderRadius:"9999px",fontSize:"13px",fontWeight:600,cursor:"pointer",marginBottom:"8px"}}>Renew in one tap</button>
  <div style={{fontSize:"11px",color:G450,textAlign:"center"}}>Or review details · Takes 30 seconds</div>
</div>}

function PrincipleRow({number,title,tagline,desc,accent,accentSoft,accentBg,thisEx,notEx,imgDesc,imgBrief,imgMood,imgColor}){
  return(
    <div style={{marginBottom:"80px"}}>
      {/* Full-bleed image for this principle */}
      <ImageFrame aspect="21/9" description={imgDesc} brief={imgBrief} mood={imgMood} color={imgColor}/>
      
      <div style={{padding:"40px 0 0"}}>
        <div style={{display:"flex",alignItems:"baseline",gap:"16px",marginBottom:"8px"}}>
          <span style={{fontSize:"14px",fontWeight:600,color:accent}}>{number}</span>
          <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:accent}}>{tagline}</span>
        </div>
        <h3 style={{fontSize:"32px",fontWeight:700,color:G800,margin:"0 0 8px",letterSpacing:"-0.5px"}}>{title}</h3>
        <p style={{fontSize:"15px",color:G450,margin:"0 0 28px",lineHeight:1.6,maxWidth:"640px"}}>{desc}</p>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
              <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill={R100}/><path d="M6 6l6 6M12 6l-6 6" stroke={R600} strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:R600}}>Not this</span>
            </div>
            <div style={{background:G100,padding:"32px",borderRadius:"20px",border:`1px solid ${G200}`,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"380px"}}>{notEx}</div>
          </div>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
              <svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="9" fill={accentSoft}/><path d="M5.5 9l2.5 2.5 5-5" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              <span style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:accent}}>This</span>
            </div>
            <div style={{background:accentBg,padding:"32px",borderRadius:"20px",border:`1px solid ${accentSoft}`,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"380px"}}>{thisEx}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PrinciplesScene(){
  return(
    <div style={{background:"#FAFAF8",padding:"80px 64px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:P600,marginBottom:"8px"}}>Part 2</div>
        <h2 style={{fontSize:"40px",fontWeight:700,lineHeight:1.05,letterSpacing:"-1px",color:G800,margin:"0 0 12px"}}>Principles in action</h2>
        <p style={{fontSize:"15px",color:G450,margin:"0 0 48px",lineHeight:1.6,maxWidth:"640px"}}>Each principle shown through a real-world moment, then proven through a product artifact.</p>

        <PrincipleRow number="01" title="Clear over clever" tagline="Transparent. Plain. Understood." desc="Use plain language, avoid hidden terms, and be transparent about what is possible and what is not. If a claim gets rejected, the customer understands and appreciates why." accent="#0F766E" accentSoft="#D1FAE5" accentBg="#F0FDF4" thisEx={<ClearYes/>} notEx={<ClearNot/>} imgDesc="Customer reading policy details in natural setting" imgBrief="Couple sitting on sofa reading phone together, ACKO policy visible on screen. Living room of a middle-class Indian apartment. Evening lamp light. The mood is trust and understanding. Shot at eye level, not from above." imgMood={["evening lamp","couple reading","eye level","trust"]} imgColor="#0C2E2A"/>

        <PrincipleRow number="02" title="Effortless by default" tagline="Simple. Not simplified." desc="No one should feel lost, confused, or stuck in loading loops. Purchasing, navigating and comparing — all of it should feel simple without dumbing things down." accent="#1D4ED8" accentSoft="#DBEAFE" accentBg="#EFF6FF" thisEx={<EffortYes/>} notEx={<EffortNot/>} imgDesc="Three-step purchase in a real moment" imgBrief="Young professional standing next to their car, phone in hand, completing purchase. The car number plate is visible. Urban Indian residential street. Quick, casual moment — not a photoshoot. Bright daylight." imgMood={["quick moment","daylight","casual","urban street"]} imgColor="#0C1A3D"/>

        <PrincipleRow number="03" title="Present when it matters" tagline="Calm. Human. There." desc="ACKO doesn't disappear after the sale. Whether it's a hospital visit, a claim, or an emergency, the customer feels supported and cared for." accent={O600} accentSoft={O100} accentBg={O50} thisEx={<PresentYes/>} notEx={<PresentNot/>} imgDesc="Support moment during a claim" imgBrief="Woman on a phone call in a garage or hospital waiting area, expression showing relief. Soft natural light. The phone call is the story — someone is helping. Warm, documentary-style. Not staged." imgMood={["relief","phone call","garage/hospital","documentary"]} imgColor="#2A1A0A"/>

        <PrincipleRow number="04" title="Respectful of time" tagline="Context. Clarity. Zero friction." desc="No forced purchases, no overselling, no repetitive tasks. The product remembers context, shows the right info at the right time, and saves you time." accent={P600} accentSoft={P100} accentBg={P50} thisEx={<RespYes/>} notEx={<RespNot/>} imgDesc="Morning routine with one calm notification" imgBrief="Phone on wooden breakfast table next to chai and newspaper. Screen shows one ACKO renewal card. Morning light from a window. Indian kitchen/dining area. The feeling is calm start to the day." imgMood={["morning chai","one notification","wooden table","calm"]} imgColor="#1A0F2E"/>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SCENE 5: FUNDAMENTALS — THE SYSTEM
// ═══════════════════════════════════════

function FundamentalsScene(){
  const cats=[CAT_AUTO,CAT_HEALTH,CAT_LIFE,CAT_TRAVEL];
  return(
    <div style={{background:"#fff",padding:"80px 64px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}}>
        <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:P600,marginBottom:"8px"}}>Part 3</div>
        <h2 style={{fontSize:"40px",fontWeight:700,lineHeight:1.05,letterSpacing:"-1px",color:G800,margin:"0 0 12px"}}>Fundamentals</h2>
        <p style={{fontSize:"15px",color:G450,margin:"0 0 64px",lineHeight:1.6,maxWidth:"640px"}}>The building blocks. Color, type, icons, imagery, composition. Each connects back to the principles above.</p>

        {/* ═══ 3.1 COLOR ═══ */}
        <div style={{marginBottom:"80px"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:"12px",marginBottom:"8px"}}><span style={{fontSize:"14px",fontWeight:600,color:P600}}>3.1</span><h3 style={{fontSize:"24px",fontWeight:700,color:G800,margin:0}}>Color</h3></div>
          <p style={{fontSize:"14px",color:G450,lineHeight:1.6,margin:"0 0 24px",maxWidth:"600px"}}>Purple is the brand. Category colors identify verticals. Everything else is neutral.</p>

          {/* Brand purple */}
          <div style={{padding:"24px",background:G50,borderRadius:"16px",border:`1px solid ${G200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"12px",fontWeight:600,color:G800,marginBottom:"14px"}}>Brand purple — the constant</div>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
              {[{n:"50",h:P50},{n:"100",h:P100},{n:"200",h:P200},{n:"400",h:P400},{n:"600",h:P600},{n:"700",h:P700},{n:"800",h:P800},{n:"950",h:P950}].map(c=>(
                <div key={c.n} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"}}>
                  <div style={{width:40,height:40,borderRadius:"10px",background:c.h,border:c.h===P50?`1px solid ${G200}`:"none"}}/>
                  <div style={{fontSize:"10px",fontWeight:600,color:G550}}>{c.n}</div>
                  <div style={{fontSize:"9px",color:G300,fontFamily:"monospace"}}>{c.h}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Category colors */}
          <div style={{padding:"24px",background:"#fff",borderRadius:"16px",border:`1px solid ${G200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"12px",fontWeight:600,color:G800,marginBottom:"6px"}}>Category colors — one per vertical</div>
            <div style={{fontSize:"12px",color:G450,marginBottom:"14px"}}>Each category blends its color with purple. Not interchangeable between verticals.</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"12px"}}>
              {cats.map(c=>(
                <div key={c.name} style={{padding:"16px",background:c.light,borderRadius:"12px",borderTop:`3px solid ${c.color}`}}>
                  <div style={{width:"28px",height:"28px",borderRadius:"8px",background:c.color,marginBottom:"10px"}}/>
                  <div style={{fontSize:"14px",fontWeight:600,color:G800,marginBottom:"2px"}}>{c.name}</div>
                  <div style={{fontSize:"11px",color:G450}}>{c.label}</div>
                  <div style={{fontSize:"10px",color:G300,fontFamily:"monospace"}}>{c.color}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution band */}
          <div style={{padding:"24px",background:P50,borderRadius:"16px",border:`1px solid ${P200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"12px",fontWeight:600,color:G800,marginBottom:"14px"}}>Color distribution band — every creative follows this</div>
            <div style={{display:"flex",gap:"6px",height:"56px",borderRadius:"12px",overflow:"hidden"}}>
              <div style={{flex:"45",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,color:G450}}>40–60% Background</div>
              <div style={{flex:"20",background:CAT_AUTO.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,color:"#fff"}}>20% Headline</div>
              <div style={{flex:"10",background:G800,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,color:"#fff"}}>10% Body</div>
              <div style={{flex:"10",background:P400,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,color:"#fff"}}>10% CTA</div>
            </div>
          </div>

          {/* Category creative examples */}
          <div style={{marginBottom:"16px"}}>
            <ImageFrame aspect="21/9" description="Category creative examples — all four verticals" brief="A horizontal layout showing four creative executions side by side: Auto (Sunshade border, warm family-in-car photo), Health (Cerise border, yoga/wellness photo), Life (Picton border, father-child moment), Travel (Green border, beach/adventure). Each follows the distribution band. Purple CTA consistent across all." mood={["four creatives","side by side","distribution band applied","category colors"]} color="#1a1a1a"/>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <DoBlock>Purple CTAs across all categories. Category color for headlines and accents. Grey-100 for product surfaces. Purple 400 (#9B8FF6) for CTA elements in creatives.</DoBlock>
            <DontBlock>Don't swap category colors. Don't use gradients in product UI. Don't use category colors as background washes in product — reserve for creatives and care moments.</DontBlock>
          </div>
        </div>

        {/* ═══ 3.2 TYPOGRAPHY ═══ */}
        <div style={{marginBottom:"80px"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:"12px",marginBottom:"8px"}}><span style={{fontSize:"14px",fontWeight:600,color:P600}}>3.2</span><h3 style={{fontSize:"24px",fontWeight:700,color:G800,margin:0}}>Typography</h3></div>
          <p style={{fontSize:"14px",color:G450,lineHeight:1.6,margin:"0 0 24px",maxWidth:"600px"}}>Two systems. Gotham for brand. Euclid Circular B for product. Same hierarchy, different contexts.</p>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"}}>
            <div style={{padding:"24px",background:P950,borderRadius:"16px",color:"#fff"}}>
              <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:P400,marginBottom:"12px"}}>Brand & marketing</div>
              <div style={{fontSize:"36px",fontWeight:800,lineHeight:1.1,marginBottom:"8px",letterSpacing:"-1px"}}>Gotham</div>
              <div style={{fontSize:"13px",color:P200,lineHeight:1.5}}>Headlines in Black, sub-headlines in Medium, body in Book, disclaimers in Light. Kerning -20 across all weights.</div>
            </div>
            <div style={{padding:"24px",background:"#fff",borderRadius:"16px",border:`1px solid ${G200}`}}>
              <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:P600,marginBottom:"12px"}}>Product & digital</div>
              <div style={{fontSize:"36px",fontWeight:700,lineHeight:1.1,marginBottom:"8px",letterSpacing:"-1px",color:G800}}>Euclid Circular B</div>
              <div style={{fontSize:"13px",color:G450,lineHeight:1.5}}>Five weights: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700). Sentence case everywhere.</div>
            </div>
          </div>

          {/* Specimen */}
          <div style={{padding:"32px",background:G50,borderRadius:"20px",border:`1px solid ${G200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:G300,marginBottom:"24px"}}>Product specimen — Euclid Circular B</div>
            <div style={{fontSize:"48px",fontWeight:700,color:G800,letterSpacing:"-1.5px",lineHeight:1.1,marginBottom:"16px"}}>Insurance that<br/>respects you.</div>
            <div style={{fontSize:"24px",fontWeight:600,color:G800,letterSpacing:"-0.3px",lineHeight:1.3,marginBottom:"16px"}}>Your car is covered. No asterisks.</div>
            <div style={{fontSize:"16px",color:G450,lineHeight:1.6,maxWidth:"520px"}}>ACKO covers what matters — theft, accidents, natural damage — and tells you exactly what's included.</div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <DoBlock>Sentence case in product UI. Medium (500) for emphasis — not Bold. Semibold (600) for headings. Bold (700) only for display. Gotham Black for marketing headlines with -20 kerning.</DoBlock>
            <DontBlock>Don't use Gotham in product UI. Don't use Euclid in print. Don't use Title Case. Don't go below 11px. Don't use ALL CAPS except in Badge components.</DontBlock>
          </div>
        </div>

        {/* ═══ 3.3 ICONOGRAPHY ═══ */}
        <div style={{marginBottom:"80px"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:"12px",marginBottom:"8px"}}><span style={{fontSize:"14px",fontWeight:600,color:P600}}>3.3</span><h3 style={{fontSize:"24px",fontWeight:700,color:G800,margin:0}}>Iconography</h3></div>
          <p style={{fontSize:"14px",color:G450,lineHeight:1.6,margin:"0 0 6px",maxWidth:"600px"}}>Line-first, friendly-rounded. Hugeicons "Stroke Rounded" as benchmark.</p>
          <div style={{display:"inline-block",padding:"4px 12px",background:O50,borderRadius:"8px",border:`1px solid ${O100}`,fontSize:"11px",color:O800,marginBottom:"24px"}}>Phase 1 — deep research pending</div>

          {/* Icon personality visual */}
          <ImageFrame aspect="3/1" description="Icon specimen sheet" brief="A grid showing 16-20 ACKO icons in Stroke Rounded style: home, car, health cross, shield, phone, document, check, clock, location, user, rupee, camera, bell, settings, search, arrow. 1.5px stroke at 24px. Monochrome grey on white grid. One row below shows the same icons in duotone (purple-100 fill + purple-600 stroke) for primary/featured states." mood={["icon grid","1.5px stroke","monochrome + duotone","24px base"]} color="#1a1a1a"/>
          <div style={{height:"16px"}}/>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"12px",marginBottom:"16px"}}>
            {[{t:"Friendly",w:"Rounded terminals and joins. Approachable, not childish."},{t:"Precise",w:"Consistent stroke, grid-aligned. Signals attention to detail."},{t:"Functional",w:"Every icon explains something. No decorative filler."},{t:"Quiet",w:"Monochrome default. Duotone purple for featured states only."}].map((p,i)=>(
              <div key={i} style={{padding:"16px",background:G50,borderRadius:"12px",border:`1px solid ${G200}`}}>
                <div style={{fontSize:"13px",fontWeight:600,color:G800,marginBottom:"4px"}}>{p.t}</div>
                <div style={{fontSize:"12px",color:G450,lineHeight:1.5}}>{p.w}</div>
              </div>
            ))}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <DoBlock>1.5px stroke at 24px. Monochrome by default. Duotone for primary states. Arrows for actions, chevrons for reveals. Pair with labels.</DoBlock>
            <DontBlock>Don't mix libraries. Don't use filled in default state. Don't use sharp corners. Don't exceed 32px for UI icons.</DontBlock>
          </div>
        </div>

        {/* ═══ 3.4 IMAGERY ═══ */}
        <div style={{marginBottom:"80px"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:"12px",marginBottom:"8px"}}><span style={{fontSize:"14px",fontWeight:600,color:P600}}>3.4</span><h3 style={{fontSize:"24px",fontWeight:700,color:G800,margin:0}}>Imagery</h3></div>
          <p style={{fontSize:"14px",color:G450,lineHeight:1.6,margin:"0 0 24px",maxWidth:"600px"}}>Photography for human moments. Illustration for concepts. Three modes, one prompt architecture.</p>

          {/* Three modes with image placeholders */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginBottom:"24px"}}>
            {[
              {title:"Documentary warm",when:"Claims, support, emergencies",desc:"Indian family at dining table reviewing documents together, warm evening light from a window, candid composition, slight film grain",mood:["warm","candid","evening light","film grain"],color:"#2A1A0A",accent:O600,accentSoft:O50},
              {title:"Editorial bright",when:"Marketing, landing pages, campaigns",desc:"Young Indian couple on a scooter in golden hour, lifestyle editorial feel, bright exposure, rule of thirds, real Indian city street",mood:["golden hour","editorial","bright","lifestyle"],color:"#1A0F2E",accent:P600,accentSoft:P50},
              {title:"Product contextual",when:"Car, home, device pages",desc:"Maruti Swift parked on a residential Chennai street, tight framing, car is the subject but environment tells the story, clean background, natural afternoon light",mood:["environmental","tight frame","product in scene","afternoon"],color:"#0C2E2A",accent:"#0F766E",accentSoft:GN50},
            ].map((m,i)=>(
              <div key={i}>
                <ImageFrame aspect="4/5" description={m.title} brief={m.desc} mood={m.mood} color={m.color}/>
                <div style={{padding:"16px 0"}}>
                  <div style={{fontSize:"14px",fontWeight:600,color:G800,marginBottom:"4px"}}>{m.title}</div>
                  <div style={{fontSize:"12px",color:G450,lineHeight:1.5}}>{m.when}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt architecture */}
          <div style={{padding:"24px",background:G50,borderRadius:"16px",border:`1px solid ${G200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"12px",fontWeight:600,color:G800,marginBottom:"14px"}}>Prompt architecture — every ACKO image uses this structure</div>
            <div style={{padding:"16px",background:"#fff",borderRadius:"12px",border:`1px solid ${G200}`,fontFamily:"monospace",fontSize:"12px",color:G550,lineHeight:1.8}}>
              <span style={{color:P600}}>[subject]</span> · <span style={{color:O600}}>[setting]</span> · <span style={{color:GN600}}>[light]</span> · <span style={{color:G450}}>[camera]</span> · <span style={{color:"#0F766E"}}>[composition]</span> · <span style={{color:G300}}>[treatment]</span>
            </div>
          </div>

          {/* Negative anchors */}
          <div style={{padding:"24px",background:"#fff",borderRadius:"16px",border:`1px solid ${G200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"12px",fontWeight:600,color:G800,marginBottom:"6px"}}>Negative anchors — include in every prompt</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}}>
              {["no stock aesthetic","no corporate smiles","no studio lighting","no white background","no oversaturation","no wide-angle distortion","no symmetrical composition","no generic features","no impossible settings","no flat neutral grade"].map((n,i)=><Chip key={i} bg={R50} color={R600}>{n}</Chip>)}
            </div>
          </div>

          {/* Illustration placeholder */}
          <ImageFrame aspect="3/1" description="Illustration style specimen" brief="A horizontal strip showing 4-5 concept illustrations: 'how a claim works' (timeline with icons), 'what's covered' (shield with check marks), 'how FASTag settles' (process flow). Line-dominant, 1.5px stroke matching icon weight. Strategic fills in Orange-100 and Purple-100 on Grey-50 background. Characters as faceless silhouettes. Clean, explanatory, not decorative." mood={["line illustration","1.5px stroke","explanatory","faceless silhouettes"]} color="#1a1a1a"/>
          <div style={{height:"16px"}}/>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <DoBlock>Indian cultural context in every prompt. Natural light, warm tones. Rule of thirds. Category color in creative borders per distribution band. Illustration stroke matches icon weight (1.5px).</DoBlock>
            <DontBlock>No AI faces for testimonials. No 3D isometric. No faceless-pastel stock style. No photography in claims where authenticity matters. No images without cultural specificity.</DontBlock>
          </div>
        </div>

        {/* ═══ 3.5 COMPOSITION ═══ */}
        <div style={{marginBottom:"40px"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:"12px",marginBottom:"8px"}}><span style={{fontSize:"14px",fontWeight:600,color:P600}}>3.5</span><h3 style={{fontSize:"24px",fontWeight:700,color:G800,margin:0}}>Composition</h3></div>
          <p style={{fontSize:"14px",color:G450,lineHeight:1.6,margin:"0 0 24px",maxWidth:"600px"}}>Whitespace is a trust signal. It says "we're confident, we don't need to shout."</p>

          {/* Layout comparison */}
          <ImageFrame aspect="21/9" description="Layout comparison — cluttered vs. composed" brief="Split-screen showing two mobile app screens side by side. Left: a cluttered home screen with multiple cards, banners, badges, competing CTAs (the anti-pattern). Right: the same content reorganized with one primary card, generous whitespace, clear hierarchy, single CTA (the ACKO way). Both screens show real ACKO-like content." mood={["split screen","mobile UI","cluttered vs calm","one primary action"]} color="#1a1a1a"/>
          <div style={{height:"16px"}}/>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"16px"}}>
            {[
              {r:"One thing per screen",d:"Every screen has one primary action. Others are secondary or ghost.",w:"Effortless by default"},
              {r:"Generous whitespace",d:"64px between sections. 32px subsections. 24px between cards.",w:"Respectful of time"},
              {r:"Consistent hierarchy",d:"Headline → price → three points → one action. Repeats everywhere.",w:"Clear over clever"},
            ].map((r,i)=><div key={i} style={{padding:"20px",background:G50,borderRadius:"16px",border:`1px solid ${G200}`}}>
              <div style={{fontSize:"14px",fontWeight:600,color:G800,marginBottom:"6px"}}>{r.r}</div>
              <div style={{fontSize:"12px",color:G450,lineHeight:1.5,marginBottom:"10px"}}>{r.d}</div>
              <div style={{fontSize:"11px",color:P600,fontWeight:500}}>{r.w}</div>
            </div>)}
          </div>

          {/* Logo */}
          <div style={{padding:"24px",background:"#fff",borderRadius:"16px",border:`1px solid ${G200}`,marginBottom:"16px"}}>
            <div style={{fontSize:"12px",fontWeight:600,color:G800,marginBottom:"6px"}}>Logo rules</div>
            <div style={{fontSize:"12px",color:G450,marginBottom:"14px"}}>Symbol + wordmark is locked. Clear space = height of 'K'. White logo on dark/category backgrounds.</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"16px"}}>
              {[{l:"Horizontal print",v:"50mm"},{l:"Horizontal digital",v:"150px"},{l:"Vertical print",v:"25mm"},{l:"Vertical digital",v:"75px"}].map((s,i)=>(
                <div key={i} style={{textAlign:"center",padding:"16px",background:G50,borderRadius:"10px"}}>
                  <div style={{fontSize:"20px",fontWeight:700,color:G800}}>{s.v}</div>
                  <div style={{fontSize:"11px",color:G450}}>{s.l} min</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            <DoBlock>Pill buttons (9999px). 20px card radii. Nested radius (inner = outer − padding). Full-bleed for marketing heroes only. Color distribution band in all creatives.</DoBlock>
            <DontBlock>Don't tilt, crop, or squeeze the logo. Don't change the wordmark font. Don't use logo on same-shade purple. Don't break hierarchy without reason.</DontBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// CLOSING SCENE
// ═══════════════════════════════════════
function ClosingScene(){
  return(
    <div style={{background:"#0a0a0a",padding:"80px 64px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto",textAlign:"center"}}>
        <VideoFrame
          description="ACKO — Welcome Change"
          brief="Closing brand film. 30 seconds. Cuts between: a clear policy screen, a three-step purchase, a warm support call, a calm morning notification. Each moment holds for 5 seconds. Ends with ACKO logo on white. 'Welcome Change' tagline fades in below."
          aspect="16/9"
        />
        <div style={{marginTop:"48px"}}>
          <div style={{fontSize:"11px",fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:"8px"}}>The standard we measure against</div>
          <div style={{fontSize:"32px",fontWeight:700,color:"#fff",letterSpacing:"-0.5px"}}>Precise when you're choosing.<br/><span style={{color:O500}}>Warm when you need us.</span></div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// MAIN
// ═══════════════════════════════════════
export default function ACKOVisualDirection(){
  return(
    <div style={{background:"#FAFAF8",minHeight:"100vh",fontFamily:"'Euclid Circular B',-apple-system,BlinkMacSystemFont,sans-serif",color:G800}}>
      <OpeningScene/>
      <FilmStrip/>
      <BrandVideoScene/>
      <TransitionScene/>
      <PrinciplesScene/>
      <FundamentalsScene/>
      <ClosingScene/>

      {/* Footer */}
      <div style={{borderTop:`1px solid ${G200}`,padding:"32px 64px",background:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{fontSize:"11px",color:G450,letterSpacing:"0.1em",textTransform:"uppercase"}}>ACKO Visual Design · 2026</div>
        <div style={{fontSize:"11px",color:G300}}>Living document · Updated quarterly · Phase 2: Icon library, serif pairing, product marketing integration</div>
      </div>
    </div>
  );
}
