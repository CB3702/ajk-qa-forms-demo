const FORM_LIBRARY = {
  screed: [
    { code: "F00", title: "Benchmark Acceptance", note: "Hold point before production works." },
    { code: "F01", title: "Pre Pour Checklist", note: "Pre-start release and area checks." },
    { code: "F04", title: "SR Test Record", note: "Surface regularity inspection." },
    { code: "F05", title: "Moisture Test Report", note: "Pre-finish hold point." }
  ],
  cb: [
    { code: "F00", title: "Benchmark Acceptance", note: "Initial system benchmark approval." },
    { code: "F06", title: "Level Check Record", note: "Set-out and level confirmation." },
    { code: "F07", title: "Installation Inspection", note: "Cradle and batten installation check." }
  ],
  raf: [
    { code: "F00", title: "Benchmark Acceptance", note: "Initial raised access floor benchmark." },
    { code: "F08", title: "Panel Installation Record", note: "Panel and pedestal installation." },
    { code: "F09", title: "Final Inspection", note: "Completion and readiness review." }
  ],
  hw: [
    { code: "F00", title: "Benchmark Acceptance", note: "Hold point benchmark approval." },
    { code: "F10", title: "Substrate Readiness", note: "Pre-installation substrate checks." },
    { code: "F11", title: "Hardwood Installation Record", note: "Installation stage QA." },
    { code: "F12", title: "Final Sign-Off", note: "Completion hold point." }
  ],
  tiling: [
    { code: "F00", title: "Benchmark Acceptance", note: "Initial benchmark and approval." },
    { code: "F11", title: "Tile Installation Record", note: "Daily installation QA." },
    { code: "F12", title: "Final Inspection", note: "Completion and release." }
  ]
};

let currentUser = null;
let currentProject = null;

/* ---------- SAFE DEFAULTS ---------- */
if (typeof users === "undefined" || !Array.isArray(users)) {
  users = [
    { name: "Chris" },
    { name: "Matt" },
    { name: "Rafal" }
  ];
}

if (typeof projects === "undefined" || !Array.isArray(projects)) {
  projects = [];
}

if (typeof locations === "undefined" || !Array.isArray(locations)) {
  locations = [];
}

if (typeof forms === "undefined" || !Array.isArray(forms)) {
  forms = [];
}

if (typeof actions === "undefined" || !Array.isArray(actions)) {
  actions = [];
}

function safeSave(){
  if (typeof saveData === "function") {
    saveData();
  } else {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("locations", JSON.stringify(locations));
    localStorage.setItem("forms", JSON.stringify(forms));
    localStorage.setItem("actions", JSON.stringify(actions));
  }
}

function seedData(){
  if (users.length === 0) {
    users.push(
      { name: "Chris" },
      { name: "Matt" },
      { name: "Rafal" }
    );
  }

  if (projects.length === 0) {
    projects.push(
      { id: 1, name: "Television Centre Phase 2", code: "TVC2 / E901E", package: "Multiplex" },
      { id: 2, name: "AJK Internal Demo Project", code: "DEMO / 001", package: "Internal" }
    );
  }

  if (locations.length === 0) {
    locations.push(
      { id: 101, project: 1, name: "Plot E - Level 03 - Apartment E3-12 - Living Room" },
      { id: 102, project: 1, name: "Plot E - Level 03 - Apartment E3-12 - Hallway" },
      { id: 103, project: 1, name: "Plot G - Level 02 - Apartment G2-08 - Kitchen" },
      { id: 104, project: 1, name: "Townhouse 02 - LG - Main Room" },
      { id: 201, project: 2, name: "Demo Area - Level 01 - Room A" }
    );
  }

  safeSave();
}

function showView(name){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-" + name);
  if (target) target.classList.add("active");
}

function buildLoginUsers(){
  const loginUser = document.getElementById("loginUser");
  if (!loginUser) return;

  loginUser.innerHTML = "";

  users.forEach(u => {
    const o = document.createElement("option");
    o.value = u.name;
    o.text = u.name;
    loginUser.add(o);
  });
}

function login(){
  const loginUserEl = document.getElementById("loginUser");
  const selectedUser = loginUserEl ? loginUserEl.value : "";

  if (!selectedUser) {
    alert("Select a user.");
    return;
  }

  currentUser = selectedUser;

  const welcome = document.getElementById("welcomeText");
  if (welcome) welcome.textContent = "Welcome, " + currentUser;

  renderProjectCards();
  showView("projects");
}

function logout(){
  currentUser = null;
  currentProject = null;
  showView("login");
}

function renderProjectCards(){
  const wrap = document.getElementById("projectCards");
  if (!wrap) return;

  wrap.innerHTML = "";

  projects.forEach(project => {
    wrap.innerHTML += `
      <div class="project-card">
        <div class="project-card-top">
          <h4>${project.name}</h4>
          <p>${project.code || "Project Code"} · ${project.package || "Package"}</p>
        </div>
        <div class="project-card-body">
          <button class="btn btn-primary" onclick="selectProject(${project.id})">Open Project</button>
        </div>
      </div>
    `;
  });
}

function selectProject(projectId){
  currentProject = projects.find(p => String(p.id) === String(projectId));

  if (!currentProject) {
    alert("Project not found.");
    return;
  }

  const title = document.getElementById("projectTitle");
  const subtitle = document.getElementById("projectSubtitle");
  const heroNote = document.getElementById("heroProjectNote");
  const activeUserChip = document.getElementById("activeUserChip");

  if (title) title.textContent = currentProject.name;
  if (subtitle) subtitle.textContent = (currentProject.code || "Package") + " · " + (currentProject.package || "");
  if (heroNote) heroNote.textContent = currentProject.code || "Live project";
  if (activeUserChip) activeUserChip.textContent = currentUser || "User";

  renderLocations();
  renderFormsList();
  renderDashboard();

  showView("dashboard");
}

function renderLocations(){
  const select = document.getElementById("locationSelect");
  if (!select || !currentProject) return;

  select.innerHTML = "";

  const filtered = locations.filter(l => String(l.project) === String(currentProject.id));

  if (filtered.length === 0) {
    const o = document.createElement("option");
    o.value = "";
    o.text = "No rooms / areas loaded";
    select.add(o);
    return;
  }

  filtered.forEach(l => {
    const o = document.createElement("option");
    o.value = l.id;
    o.text = l.name;
    select.add(o);
  });
}

function renderFormsList(){
  const scopeEl = document.getElementById("scopeSelect");
  const list = document.getElementById("formsList");
  if (!scopeEl || !list) return;

  const scope = scopeEl.value;
  list.innerHTML = "";

  const items = FORM_LIBRARY[scope] || [];

  items.forEach(item => {
    list.innerHTML += `
      <div class="form-item">
        <div class="form-item-title">${item.code} · ${item.title}</div>
        <div class="form-item-meta">${item.note}</div>
      </div>
    `;
  });
}

function submitForm(){
  if (!currentProject) {
    alert("Select a project first.");
    return;
  }

  const locationSelect = document.getElementById("locationSelect");
  if (!locationSelect || !locationSelect.value) {
    alert("No room / area available.");
    return;
  }

  const status = document.getElementById("statusSelect").value;
  const scope = document.getElementById("scopeSelect").value;
  const type = document.getElementById("formType").value;
  const locationName = locationSelect.selectedOptions[0].text;

  const form = {
    id: Date.now(),
    project: currentProject.id,
    projectName: currentProject.name,
    scope: scope,
    type: type,
    location: locationSelect.value,
    locationName: locationName,
    status: status,
    user: currentUser
  };

  forms.push(form);

  if (status !== "pass") {
    actions.push({
      id: Date.now() + 1,
      project: currentProject.id,
      title: type + " issue",
      assigned: currentUser,
      locationName: locationName,
      scope: scope,
      status: status === "hold" ? "hold" : "fail"
    });
  }

  safeSave();
  renderDashboard();
}

function renderDashboard(){
  if (!currentProject) return;

  const projectForms = forms.filter(f => String(f.project) === String(currentProject.id));
  const projectActions = actions.filter(a => String(a.project) === String(currentProject.id));

  const total = projectForms.length;
  const passes = projectForms.filter(f => f.status === "pass").length;
  const fails = projectForms.filter(f => f.status === "fail").length;
  const holds = projectForms.filter(f => f.status === "hold").length;

  const stats = document.getElementById("stats");
  if (stats) {
    stats.innerHTML = `
      <div class="stat-card">
        <h4>Total Records</h4>
        <div class="value">${total}</div>
      </div>
      <div class="stat-card pass">
        <h4>Pass</h4>
        <div class="value">${passes}</div>
      </div>
      <div class="stat-card fail">
        <h4>Fail</h4>
        <div class="value">${fails}</div>
      </div>
      <div class="stat-card hold">
        <h4>Hold Points</h4>
        <div class="value">${holds}</div>
      </div>
    `;
  }

  const actionWrap = document.getElementById("actions");
  if (!actionWrap) return;

  actionWrap.innerHTML = "";

  if (projectActions.length === 0) {
    actionWrap.innerHTML = `<div class="empty-state">No open actions recorded for this project.</div>`;
    return;
  }

  projectActions.slice().reverse().forEach(a => {
    const klass = a.status === "hold" ? "hold" : "fail";
    const label = a.status === "hold" ? "Hold Point" : "Fail";

    actionWrap.innerHTML += `
      <div class="action-item ${klass}">
        <div class="action-top">
          <div class="action-title">${a.title}</div>
          <div class="badge ${klass}">${label}</div>
        </div>
        <div class="action-meta">
          Assigned to: <strong>${a.assigned}</strong><br>
          Location: <strong>${a.locationName}</strong><br>
          Scope: <strong>${a.scope}</strong>
        </div>
      </div>
    `;
  });
}

document.addEventListener("change", function(e){
  if (e.target && e.target.id === "scopeSelect") {
    renderFormsList();
  }
});

function init(){
  seedData();
  buildLoginUsers();
  showView("login");
}

init();