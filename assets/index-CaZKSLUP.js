(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const f="modulepreload",y=function(t){return"/riverst/"+t},g={},b=function(e,i,a){let o=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(i.map(l=>{if(l=y(l),l in g)return;g[l]=!0;const u=l.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":f,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((h,v)=>{d.addEventListener("load",h),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return o.then(s=>{for(const c of s||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})},w=[{id:"playground",title:"Free-Style Interaction",description:"Open-ended conversation with an AI avatar — no script, no curriculum. Perfect for exploring what Riverst can do.",icon:"🗣️",tags:["Playground","Open-ended"]},{id:"kiva-vocab",title:"KIVA Vocabulary Learning",description:"Children discover new words through fun, guided play with an avatar. Part of the KIVA (Knowledge Integration and Vocabulary Acquisition) research program.",icon:"📚",tags:["Education","Children","Vocabulary"]},{id:"audiobook",title:"Audiobook Companion",description:"Follow along with an audiobook while an avatar provides visual cues and comprehension support that goes beyond just listening.",icon:"🎧",tags:["Reading","Comprehension"]},{id:"esl-vocab",title:"English for Italian Speakers",description:"Guided vocabulary acquisition for Italian speakers learning English — powered by a patient, interactive avatar tutor.",icon:"🇺🇸",tags:["Language Learning","ESL"]},{id:"isl-vocab",title:"Italian for English Speakers",description:"Guided vocabulary acquisition for English speakers learning Italian — powered by a patient, interactive avatar tutor.",icon:"🇮🇹",tags:["Language Learning","Italian"]}],E=[{id:"platform-overview",title:"Riverst Platform Demo",description:"See Riverst in action — build, run, and analyze an avatar conversation.",youtubeId:"PLACEHOLDER",posterUrl:null},{id:"kiva-activity",title:"KIVA Vocabulary Activity",description:"Watch a child vocabulary learning session powered by Riverst and KIVA.",youtubeId:"PLACEHOLDER",posterUrl:null},{id:"session-summary",title:"Session Summary & Analysis",description:"How Riverst automatically processes and visualizes conversation analytics.",youtubeId:"PLACEHOLDER",posterUrl:null}],p={paragraphs:["Background content coming soon. The project team will provide this text before launch."],citations:[]},L=[{id:"team-member-1",name:"Satrajit Ghosh",role:"Principal Investigator",institution:"Massachusetts Institute of Technology",photoUrl:"/team/satra_about_photo.png",profileLink:"https://satra.cogitatum.org/"},{id:"team-member-2",name:"Ola Ozernov-Palchik",role:"Principal Investigator",institution:"Boston University",photoUrl:"/team/ola_about_photo.jpg",profileLink:"https://www.bu.edu/wheelock/profile/ola-ozernov-palchik/"},{id:"team-member-3",name:"Fabio Catania",role:"Postdoctoral Associate",institution:"Now at Apple",photoUrl:"/team/fabio_catania_about_photo.jpg",profileLink:null},{id:"team-member-4",name:"Jordan Wilke",role:"Technical Associate",institution:"Massachusetts Institute of Technology",photoUrl:"/team/jordan_wilke_about_photo.jpeg",profileLink:null}];function k(){const t=document.querySelectorAll('.nav-link[href^="#"]'),e=document.querySelectorAll("section[id]"),i=new IntersectionObserver(a=>{a.forEach(o=>{if(o.isIntersecting){const r=o.target.getAttribute("id");t.forEach(s=>{const c=s.getAttribute("href")===`#${r}`;s.classList.toggle("active",c)})}})},{rootMargin:`-${I()}px 0px -60% 0px`,threshold:0});e.forEach(a=>i.observe(a))}function I(){const t=document.querySelector(".site-header");return t?t.offsetHeight:64}function A(){const t=document.querySelector(".nav-hamburger"),e=document.getElementById("nav-links");!t||!e||(t.addEventListener("click",()=>{const i=e.classList.toggle("open");t.setAttribute("aria-expanded",String(i))}),e.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{e.classList.remove("open"),t.setAttribute("aria-expanded","false")})}),document.addEventListener("click",i=>{!t.contains(i.target)&&!e.contains(i.target)&&(e.classList.remove("open"),t.setAttribute("aria-expanded","false"))}))}function $(){const t=document.getElementById("hero");if(!t)return;t.innerHTML=`
    <div class="hero-inner">
      <img
        src="/riverst/logo/riverst_black.svg"
        alt="Riverst"
        class="hero-logo"
        width="200"
        height="56"
      />
      <h1 id="hero-heading" class="hero-heading">
        Build. Run. Analyze.
      </h1>
      <p class="hero-tagline">
        An open-source platform for interactive user–avatar conversations,
        powered by real-time AI voice and WebRTC.
      </p>
      <div class="hero-ctas">
        <a href="#demo" class="btn btn-primary btn-large" id="hero-demo-cta">
          Watch Demo
        </a>
        <button
          id="hero-try-live"
          class="btn btn-secondary btn-large"
          type="button"
        >
          Try Live Demo
        </button>
        <a
          href="https://github.com/sensein/riverst"
          class="btn btn-ghost btn-large"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Riverst on GitHub (opens in new tab)"
        >
          View on GitHub
        </a>
      </div>
      <div class="hero-screenshot">
        <img
          src="/riverst/screenshots/fabio_says_hi.png"
          alt="A Riverst avatar session in progress — the Fabio avatar speaks to a user via WebRTC in a browser-based interface"
          width="800"
          loading="eager"
        />
      </div>
    </div>
  `;const e=document.getElementById("hero-try-live");e&&e.addEventListener("click",()=>{const i=document.getElementById("demo");i&&i.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{const a=document.getElementById("demo-cta-btn");a&&!a.hidden&&a.click()},600)})}function _(){const t=document.getElementById("background-content");if(!t)return;const e=p.paragraphs.map(a=>`<p>${n(a)}</p>`).join("");let i="";p.citations&&p.citations.length>0&&(i=`
      <div class="background-citations">
        <p class="background-citations-title">References</p>
        <ol>${p.citations.map(o=>`<li><a href="${n(o.url)}" target="_blank" rel="noopener noreferrer">${n(o.text)}</a></li>`).join("")}</ol>
      </div>
    `),t.innerHTML=e+i}function P(){const t=document.getElementById("activities-grid");t&&(t.innerHTML=w.map(e=>`
      <article class="activity-card" role="listitem">
        <div class="activity-icon" aria-hidden="true">${e.icon}</div>
        <h3 class="activity-title">${n(e.title)}</h3>
        <p class="activity-description">${n(e.description)}</p>
        <div class="activity-tags" aria-label="Tags">
          ${e.tags.map(i=>`<span class="tag">${n(i)}</span>`).join("")}
        </div>
      </article>
    `).join(""))}function S(){const t=document.getElementById("video-grid");t&&(t.innerHTML=E.map((e,i)=>{const a=!e.youtubeId||e.youtubeId==="PLACEHOLDER",o=["/riverst/screenshots/fabio_says_hi.png","/riverst/screenshots/session_summary_example.png","/riverst/screenshots/automated_audio_analysis.png"],r=e.posterUrl||o[i]||o[0];return a?`
          <div class="video-item" role="listitem">
            <div class="video-wrapper">
              <div class="video-placeholder" aria-label="${n(e.title)} — coming soon">
                <div class="video-placeholder-icon" aria-hidden="true">▶️</div>
                <p class="video-placeholder-label">Coming soon</p>
              </div>
              <img
                class="video-poster"
                src="${n(r)}"
                alt=""
                aria-hidden="true"
                style="opacity:0.25"
              />
            </div>
            <p class="video-title">${n(e.title)}</p>
            <p class="video-description">${n(e.description)}</p>
          </div>
        `:`
        <div class="video-item" role="listitem">
          <div class="video-wrapper">
            <img
              class="video-poster"
              src="${n(r)}"
              alt=""
              aria-hidden="true"
            />
            <iframe
              src="https://www.youtube.com/embed/${encodeURIComponent(e.youtubeId)}"
              title="${n(e.title)}"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p class="video-title">${n(e.title)}</p>
          <p class="video-description">${n(e.description)}</p>
        </div>
      `}).join(""),t.querySelectorAll(".video-wrapper iframe").forEach(e=>{e.addEventListener("load",()=>{e.classList.add("loaded");const i=e.previousElementSibling;i&&i.classList.contains("video-poster")&&(i.style.opacity="0")})}))}function R(){const t=document.getElementById("team-grid");t&&(t.innerHTML=L.map(e=>`
      <article class="team-card" role="listitem">
        ${e.photoUrl?`<img
                class="team-photo"
                src="${n("/riverst/"+e.photoUrl.replace(/^\//,""))}"
                alt="Photo of ${n(e.name)}"
                width="96"
                height="96"
                loading="lazy"
              />`:`<div class="team-photo-placeholder" role="img" aria-label="${n(e.name)} — no photo available">👤</div>`}
        <p class="team-name">${n(e.name)}</p>
        <p class="team-role">${n(e.role)}</p>
        <p class="team-institution">${n(e.institution)}</p>
        ${e.profileLink?`<a
                href="${n(e.profileLink)}"
                class="team-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View ${n(e.name)}'s profile (opens in new tab)"
              >View Profile</a>`:""}
      </article>
    `).join(""))}function n(t){return typeof t!="string"?"":t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}async function H(){try{const{initWidget:t,triggerAuth:e}=await b(async()=>{const{initWidget:o,triggerAuth:r}=await import("./demo-widget-Pl0fzPKA.js");return{initWidget:o,triggerAuth:r}},[]),i=document.getElementById("talkinghead-canvas-container");i&&t(i);const a=document.getElementById("demo-cta-btn");a&&a.addEventListener("click",()=>{e()})}catch(t){console.error("Failed to load demo widget:",t)}}document.addEventListener("DOMContentLoaded",()=>{$(),_(),P(),S(),R(),k(),A(),H()});
