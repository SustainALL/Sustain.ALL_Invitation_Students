// ============================================================
// SUSTAIN.ALL — project data & interactivity (student site)
// ============================================================

// Paste the Google Apps Script "Web app" URL here (ends in /exec).
// Until this is filled in, the form shows an error instead of
// submitting anywhere. See the chat / README for setup steps.
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRd3kGW45ggyaN5FwPpCxtQnOQ-RonvA2ODnE07M7sANm2OshWVJBs0nwrEjZFEssv/exec";

const STAGES = ["Concept", "Pre-Prototype", "Prototype", "Pre-Pilot", "Pilot"];

// maps each cluster name to its category, for colour-coding tags/chips
const CLUSTER_CATEGORY = {
  "AI, Data & Digital Sustainability": "enabler",
  "Sustainable Finance": "enabler",
  "Governance & Leadership": "enabler",
  "Circular Economy": "cluster",
  "Mobility & Smart Cities": "cluster",
  "Climate & Energy": "cluster",
  "Biodiversity & Food Systems": "cluster",
  "Water & Land Systems": "cluster",
  "People, Society & Wellbeing": "human",
  "Culture & Transformation": "human",
  "Education": "human"
};
function tagClassFor(cluster){
  return "tag-" + (CLUSTER_CATEGORY[cluster] || "all");
}

const PROJECTS = [
 
const projects = [
  {
    id: "impact",
    title: "Sustain.Impact",
    cluster: "AI, Data & Digital Sustainability",
    partner: "Dr. Kristina Fajga, Science & Startups",
    challenge: "TU Berlin has an opportunity to make the environmental impact of campus projects more measurable, comparable, and visible across faculties.",
    solution: "A public website that collects project data, uses AI to generate sustainability scores out of 100, and showcases results by faculty.",
    development: "This semester, the team successfully developed the scoring logic, built the data pipeline, and launched a live webpage hosted on GitHub.",
    stage: 2, // Prototype
    further: "Enhancing fairness in AI scoring, incorporating feedback, and preparing a pilot program aligned with EU data-protection requirements.",
    link: "https://i-tup.github.io/frontend/",
    linkLabel: "View live prototype"
  },
  {
    id: "finance",
    title: "Sustain.Finance",
    cluster: "Sustainable Finance",
    partner: null,
    challenge: "Student-led impact projects can benefit from faster, more accessible funding opportunities tailored to smaller amounts (€500–€2,500).",
    solution: "A streamlined TU Impact Fund offering rolling micro-grants through a simple one-page application, making funding more accessible for student initiatives.",
    development: "Designed a five-member allocation committee, developed a €15,000 pilot budget, and identified ESG-focused donor pipelines.",
    stage: 3, // Pre-Pilot
    further: "Establishing the donation directive, connecting with a foundation representative, and engaging prospective first donors.",
    link: "https://drive.google.com/file/d/1ka_4O3YXpg0b6CQhG9QZ1MOVutRq1tVX/view?usp=sharing",
    linkLabel: "View project files"
  },
  {
    id: "circularity-textile",
    title: "Sustain.Circularity — Textile",
    cluster: "Circular Economy",
    partner: "Anett Hein & Julia Krzyslak, Zentrale Beschaffung",
    challenge: "Institutional textiles, including contaminated materials, offer opportunities to develop safe and coordinated pathways for material recovery.",
    solution: "A structured routing framework that categorises used campus textiles and directs suitable materials toward safe downcycling and recycling pathways.",
    development: "Mapped textile materials, established connections with external recycling companies, and developed a pilot proposal.",
    stage: 3, // Pre-Pilot
    further: "Aligning internal budgets, implementing the pilot, and evaluating recycled-material quality and economic feasibility.",
    link: "https://docs.google.com/presentation/d/1nbzGQc3WowczfXzN0nqcEMnAVZIyF7PX/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "circularity-it",
    title: "Sustain.Circularity — IT",
    cluster: "Circular Economy",
    partner: null,
    challenge: "Existing campus electronics offer valuable potential for extending device lifespans, reducing resource consumption, and improving procurement efficiency.",
    solution: "An internal IT matchmaking platform that guides staff to request available refurbished TU hardware before purchasing new devices.",
    development: "Identified key stakeholders and designed user-friendly website wireframes featuring practical hardware search filters.",
    stage: 0, // Concept
    further: "Collaborating with the IT department on preliminary hardware inspections and integrating the platform into official university procurement and financing processes.",
    link: "https://docs.google.com/presentation/d/17TS0B-vTxgyZk8tjge8UisuwYLZveDgJ/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "mobility",
    title: "Sustain.Mobility",
    cluster: "Mobility & Smart Cities",
    partner: "Dr. Michael Hüllenkrämer, K4-Stabsstelle SDU & Gloria Karcher, Stabsstelle Nachhaltigkeit",
    challenge: "Campus navigation presents an opportunity to enhance orientation, accessibility, and convenience through real-time, multilingual digital guidance.",
    solution: "TUB-Navi, a centralised navigation app combining indoor and outdoor maps with live updates on accessible routes, bike parking, and EV charging.",
    development: "Validated user interest through surveys, mapped stakeholders, analysed existing navigation apps, and designed a static prototype.",
    stage: 1, // Pre-Prototype
    further: "Developing a functional Figma prototype, establishing data partnerships, and preparing a pilot connected to a gamified mobility challenge.",
    link: "https://docs.google.com/presentation/d/1Q2khaSVovK6SpqVj5Hpw782yMjK2jyj2/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "energy",
    title: "Sustain.Energy",
    cluster: "Climate & Energy",
    partner: "Bengisu Berispek, Sustain.ALL Transformation Hub",
    challenge: "Greater visibility into campus energy use and room occupancy offers opportunities to optimise heating, lighting, and overall building efficiency.",
    solution: "An energy-visualisation dashboard paired with an open-source IoT system that uses ceiling radar to align HVAC operation with actual room occupancy.",
    development: "Created a monthly energy dashboard prototype for the library and mapped a zero-e-waste hardware integration matrix.",
    stage: 0, // Concept (& dashboard prototype)
    further: "Expanding smart-meter coverage, developing an automated data pipeline, and piloting containerised local server infrastructure.",
    link: "https://drive.google.com/file/d/1MWUYYiTqSbNV0n85_zbeOujzClAn2b61/view?usp=sharing",
    linkLabel: "View project files"
  },
  {
    id: "partx",
    title: "Sustain.PartX",
    cluster: "People, Society & Wellbeing",
    partner: "Bengisu Berispek, Sustain.ALL Transformation Hub",
    challenge: "TU Berlin's diverse sustainability initiatives provide an opportunity to make participation more accessible, engaging, and rewarding for students.",
    solution: "A gamified platform that brings together sustainability opportunities, simplifies participation, and motivates positive behavioural change through tangible rewards.",
    development: "Mapped stakeholders, surveyed students to understand participation barriers, and designed a static web interface.",
    stage: 1, // Pre-Prototype
    further: "Transforming the static interface into a functional platform that responds directly to student feedback and encourages broader participation.",
    link: "https://docs.google.com/presentation/d/1FQZWyR3iE4tRxksJK1CLRpaK4_Pwx5jl/edit?usp=sharing",
    linkLabel: "View project deck"
  },
  {
    id: "food",
    title: "Sustain.Food",
    cluster: "People, Society & Wellbeing",
    partner: null,
    challenge: "With food systems contributing roughly 34% of global greenhouse-gas emissions, student meal choices present a meaningful opportunity to encourage more sustainable eating habits.",
    solution: "EcoLens, a gamified mobile app that translates official food data into sustainability points and rewards eco-friendly cafeteria choices through interactive leaderboards.",
    development: "Built a live interactive demo, developed the sustainability scoring logic, and completed a technical API and cost-feasibility analysis.",
    stage: 2, // Prototype
    further: "Building data partnerships with Studierendenwerk, securing pilot funding, and preparing the app for deployment among students.",
    link: "https://www.youtube.com/watch?app=desktop&v=VjhzTcMpEts&ra=m",
    linkLabel: "Watch video demo"
  },
  {
    id: "hub",
    title: "Sustain.Hub",
    cluster: "Culture & Transformation",
    partner: "Dr. Michael Wilmes, Präsidialamt",
    challenge: "Underused cafeteria spaces and existing furniture offer an opportunity to create flexible, resource-efficient environments for interdisciplinary student collaboration.",
    solution: "Transforming former cafeteria spaces into circular co-creation hubs by repurposing existing furniture into flexible, modular systems.",
    development: "Conducted site visits, surveyed student needs, researched best practices, and developed a circular design framework.",
    stage: 0, // Concept
    further: "Developing modular furniture prototypes, organising a student makeathon, and conducting a comparative life-cycle assessment.",
    link: "https://docs.google.com/presentation/d/1KXeZOZTSBWGOFCtnigPAbYpxDoKr3Q0Q/edit?usp=sharing",
    linkLabel: "View project deck"
  }
];
// ------------------------------------------------------------
// Community events — edit this list to add/remove events.
// Each one just needs a date, title, short description, and a
// link (point it at wherever you're taking registrations —
// a Google Form, Eventbrite, a simple mailto:, etc).
// ------------------------------------------------------------
const EVENTS = [
  {
    id: "Hackathon: Bodies in Digital Contexts",
    date: "Friday, October 30, 16:00-20:00",
    title: "Hackathon: Bodies in Digital Contexts",
    description: "The kick-off event serves as an opportunity for participants to get to know one another and provides an introduction to the topic of the body within digital contexts.Students, as well as faculty members and external partners, will present project ideas, research questions, datasets, or technological challenges.",
    location: "Location: ECDF, Wilhelmstraße 67, 10117 Berlin",
    link: "https://docs.google.com/spreadsheets/d/1vNlJtw589dcxLDiG6c4MJilsvVbFYzLuaGRQbR-vJrg/edit?gid=1830914630#gid=1830914630",
    linkLabel: "Sign Up",
  },
  {
    id: "upcoming",
    date: "Stay Tuned",
    title: "Community Meeting",
    description: "An informal meeting to discuss the latest developments in the Sustain.ALL community as well as engage the community.",
    link: "https://docs.google.com/spreadsheets/d/1vNlJtw589dcxLDiG6c4MJilsvVbFYzLuaGRQbR-vJrg/edit?gid=675946585#gid=675946585",
    linkLabel: "Sign Up"
  }
];

function eventCardHTML(ev){
  return `
    <article class="pcard">
      <div class="pcard-top">
        <span class="tag tag-all">${ev.date}</span>
      </div>
      <h3>${ev.title}</h3>
      <p class="pcard-challenge">${ev.description}</p>
      <p class="pcard-challenge">${ev.location}</p>
      <a class="pcard-more" href="${ev.link}" target="_blank" rel="noopener" style="margin-top:auto;">${ev.linkLabel} →</a>
    </article>`;
}

function stepperHTML(stageIndex){
  const segs = STAGES.map((s, i) => `<span class="stepper-seg ${i <= stageIndex ? 'done' : ''}"></span>`).join("");
  return `
    <div class="stepper">
      <div class="stepper-track">${segs}</div>
      <div class="stepper-label">${STAGES[stageIndex]} <span>· Current Maturity</span></div>
    </div>`;
}

function cardHTML(p){
  return `
    <article class="pcard" data-cluster="${p.cluster}" data-id="${p.id}" tabindex="0">
      <div class="pcard-top">
        <span class="tag ${tagClassFor(p.cluster)}">${p.cluster}</span>
        <span class="origin">${STAGES[p.stage]}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="pcard-challenge">${p.challenge}</p>
      ${stepperHTML(p.stage)}
      <p class="pcard-partner">${p.partner ? `Partner: <b>${p.partner}</b>` : `<b> Student Initiative</b>`}</p>
      <span class="pcard-more">Read the full story →</span>
    </article>`;
}

function modalHTML(p){
  return `
    <button class="modal-close" id="modalClose" aria-label="Close">&times;</button>
    <span class="tag ${tagClassFor(p.cluster)}">${p.cluster}</span>
    <h3>${p.title}</h3>
    ${p.partner ? `<p class="pcard-partner">Partner: <b>${p.partner}</b></p>` : `<p class="pcard-partner"><b> Student Initiative</b></p>`}
    ${stepperHTML(p.stage)}
    <div class="modal-row">
      <h5>The challenge</h5>
      <p>${p.challenge}</p>
    </div>
    <div class="modal-row">
      <h5>The proposed solution</h5>
      <p>${p.solution}</p>
    </div>
    <div class="modal-row">
      <h5>Progress so far</h5>
      <p>${p.development}</p>
    </div>
    <div class="modal-row">
      <h5>Next steps</h5>
      <p>${p.further}</p>
    </div>
    ${p.link ? `<a class="modal-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel} ↗</a>` : ""}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.getElementById("cardGrid");
  const filterRow = document.getElementById("filterRow");
  const clusterGrid = document.getElementById("clusterGrid");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  // render cards
  function renderCards(filter){
    const list = filter && filter !== "all" ? PROJECTS.filter(p => p.cluster === filter) : PROJECTS;
    cardGrid.innerHTML = list.map(cardHTML).join("");
    cardGrid.querySelectorAll(".pcard").forEach(card => {
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.addEventListener("keypress", (e) => { if(e.key === "Enter") openModal(card.dataset.id); });
    });
  }
  renderCards("all");

  // render community events
  const eventGrid = document.getElementById("eventGrid");
  if(eventGrid){
    eventGrid.innerHTML = EVENTS.map(eventCardHTML).join("");
  }

  // filter buttons (challenges section)
  filterRow.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterRow.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
      clusterGrid.querySelectorAll(".cluster-chip").forEach(c => c.classList.remove("active"));
      const match = clusterGrid.querySelector(`[data-cluster="${btn.dataset.filter}"]`);
      if(match) match.classList.add("active");
    });
  });

  // cluster chips scroll to + filter challenges
  clusterGrid.querySelectorAll(".cluster-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const cluster = chip.dataset.cluster;
      clusterGrid.querySelectorAll(".cluster-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterRow.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      const match = filterRow.querySelector(`[data-filter="${cluster}"]`);
      if(match) match.classList.add("active");
      renderCards(cluster);
      document.getElementById("challenges").scrollIntoView({ behavior: "smooth" });
    });
  });

  // modal
  function openModal(id){
    const p = PROJECTS.find(x => x.id === id);
    if(!p) return;
    modalContent.innerHTML = modalHTML(p);
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("modalClose").addEventListener("click", closeModal);
  }
  function closeModal(){
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  modalOverlay.addEventListener("click", (e) => { if(e.target === modalOverlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeModal(); });

  // mobile nav
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  // "Join us" form — sends data to a Google Apps Script web app,
  // which appends a row to a connected Google Sheet.
  const joinForm = document.getElementById("joinForm");
  const joinSuccess = document.getElementById("joinSuccess");
  if(joinForm){
    joinForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // honeypot check — real users never fill this hidden field
      if(joinForm.querySelector('[name="bot-field"]').value){
        return;
      }

      if(!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.startsWith("PASTE_")){
        alert("Form isn't connected yet — add your Google Apps Script URL to GOOGLE_SCRIPT_URL in script.js.");
        return;
      }

      const submitBtn = joinForm.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = "Sending…";
      submitBtn.disabled = true;

      try{
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors", // Apps Script web apps don't return CORS headers;
                            // the request still lands and doPost() still runs.
          body: new FormData(joinForm)
        });
        joinForm.style.display = "none";
        joinSuccess.classList.add("show");
      }catch(err){
        alert("Something went wrong sending that — please try again in a moment.");
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
      }
    });
  }
});


