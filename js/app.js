const FORM_LIBRARY = {
  screed: [
    { code: "F00", title: "Benchmark Acceptance", note: "Initial benchmark approval before production works.", hold: true },
    { code: "F01", title: "Pre Pour Checklist", note: "Area release, substrate, membrane and insulation checks." },
    { code: "F02", title: "Batching Record Sheet", note: "Material batching and mix control log." },
    { code: "F03", title: "Thickness Level Log", note: "Thickness and level checks during placement." },
    { code: "F04", title: "SR Test Record", note: "Surface regularity testing.", hold: true },
    { code: "F05", title: "Moisture Test Report", note: "Moisture test and pre-finish release.", hold: true },
    { code: "F06", title: "Drop Hammer Test Record", note: "BRE drop hammer / screed strength testing." },
    { code: "F07", title: "Curing Access Log", note: "Curing and trafficking control log." },
    { code: "F08", title: "Post Pour Inspection", note: "Initial post-pour visual inspection." },
    { code: "F09", title: "Material Delivery Log", note: "Material receipt and delivery verification." },
    { code: "F10", title: "Calibration / Equipment Check", note: "Equipment and calibration control." },
    { code: "F11", title: "Area Readiness Review", note: "Area readiness prior to progression.", hold: true },
    { code: "F12", title: "Final Release / Sign-Off", note: "Final package release.", hold: true }
  ],
  cb: [
    { code: "F00", title: "Benchmark Acceptance", note: "Initial cradle and batten benchmark approval.", hold: true },
    { code: "F01", title: "Area Release Check", note: "Area released and ready for works." },
    { code: "F02", title: "Material Delivery Log", note: "Materials received and checked." },
    { code: "F03", title: "Substrate / Support Condition Check", note: "Base condition suitable for install." },
    { code: "F04", title: "Setting Out Hold Point", note: "Set-out checked before installation continues.", hold: true },
    { code: "F05", title: "Fixing / Anchorage Check", note: "Fixing and anchorage compliance review." },
    { code: "F06", title: "Level Check Record", note: "Level and tolerance checks." },
    { code: "F07", title: "Installation Inspection", note: "Cradle and batten installation record." },
    { code: "F08", title: "Flatness / Plane Check", note: "Installed batten plane verification." },
    { code: "F09", title: "Moisture / Timber Condition Check", note: "Timber moisture and storage condition." },
    { code: "F10", title: "Protection / Post Install Review", note: "Protection and post-install controls." },
    { code: "F11", title: "Pre-Finish Readiness", note: "Hold point before finishes proceed.", hold: true },
    { code: "F12", title: "Final Release / Sign-Off", note: "Final package release.", hold: true }
  ],
  raf: [
    { code: "F00", title: "Benchmark Acceptance", note: "Initial RAF benchmark approval.", hold: true },
    { code: "F01", title: "Area Release Check", note: "Area available and ready for raised floor works." },
    { code: "F02", title: "Material Delivery Log", note: "Panels, pedestals and components checked on delivery." },
    { code: "F03", title: "Substrate Readiness", note: "Substrate suitability and cleanliness check." },
    { code: "F04", title: "Datum / Setting Out Hold Point", note: "Set-out and datum approval before install.", hold: true },
    { code: "F05", title: "Pedestal Fixing Check", note: "Pedestal fixing and layout verification." },
    { code: "F06", title: "Level Check Record", note: "Finished floor level checks." },
    { code: "F07", title: "Service Coordination Check", note: "Interface with services below floor." },
    { code: "F08", title: "Panel Installation Record", note: "Panel installation and alignment record." },
    { code: "F09", title: "Final Inspection", note: "Completion inspection and defect review." },
    { code: "F10", title: "Protection Review", note: "Post-installation protection and access control." },
    { code: "F11", title: "Area Readiness for Next Trade", note: "Hold point before handover onward.", hold: true },
    { code: "F12", title: "Final Release / Sign-Off", note: "Final package release.", hold: true }
  ],
  hw: [
    { code: "F00", title: "Benchmark Acceptance", note: "Hardwood benchmark approval.", hold: true },
    { code: "F01", title: "Area Release Check", note: "Area available and released for hardwood works." },
    { code: "F02", title: "Material Delivery Log", note: "Boards, adhesives and trims checked on arrival." },
    { code: "F03", title: "Substrate Readiness", note: "Substrate condition and readiness verification." },
    { code: "F04", title: "Moisture / Environment Hold Point", note: "Moisture and environmental sign-off.", hold: true },
    { code: "F05", title: "Setting Out Approval", note: "Setting out and orientation check." },
    { code: "F06", title: "Adhesive / Fixing Check", note: "Adhesive and fixing compliance record." },
    { code: "F07", title: "Installation Inspection", note: "Ongoing installation QA record." },
    { code: "F08", title: "Detail / Threshold Check", note: "Thresholds, margins and local details review." },
    { code: "F09", title: "Protection Review", note: "Installed floor protection and traffic control." },
    { code: "F10", title: "Substrate Readiness Review", note: "Secondary readiness / interface check." },
    { code: "F11", title: "Hardwood Installation Record", note: "Primary installation record.", hold: true },
    { code: "F12", title: "Final Sign-Off", note: "Completion hold point and release.", hold: true }
  ],
  tiling: [
    { code: "F00", title: "Benchmark Acceptance", note: "Tiling benchmark approval.", hold: true },
    { code: "F01", title: "Area Release Check", note: "Area release and access readiness." },
    { code: "F02", title: "Material Delivery Log", note: "Tiles, adhesive, grout and trims checked on arrival." },
    { code: "F03", title: "Substrate Readiness", note: "Substrate suitability for tile installation." },
    { code: "F04", title: "Setting Out Hold Point", note: "Setting out approval before installation.", hold: true },
    { code: "F05", title: "Adhesive / Primer Check", note: "Primer and adhesive system verification." },
    { code: "F06", title: "Tile Batch / Shade Review", note: "Batch, shade and blend consistency check." },
    { code: "F07", title: "Level / Lippage Check", note: "Level and lippage compliance review." },
    { code: "F08", title: "Installation Inspection", note: "Main installation QA record." },
    { code: "F09", title: "Grout / Finish Review", note: "Grout, finish and detailing check." },
    { code: "F10", title: "Protection Review", note: "Protection and access control after install." },
    { code: "F11", title: "Tile Installation Record", note: "Primary installation record.", hold: true },
    { code: "F12", title: "Final Inspection", note: "Completion and release.", hold: true }
  ]
};

const SCOPE_META = {
  screed: { title: "Screed", note: "Sub-floor screed works and testing." },
  cb: { title: "Cradle & Batten", note: "Cradle and batten installation package." },
  raf: { title: "Raised Access Floor", note: "Raised floor support and panel system." },
  hw: { title: "Hardwood Flooring", note: "Hardwood flooring installation package." },
  tiling: { title: "Tiling", note: "Floor tiling package and finish controls." }
};

let currentUser = null;
let currentProject = null;
let currentScope = null;
let currentLocation = null;
let currentForm = null;

if (typeof users === "undefined" || !Array.isArray(users)) users = [{ name: "Chris" }, { name: "Matt" }, { name: "Rafal" }];
if (typeof projects === "undefined" || !Array.isArray(projects)) projects = [];
if (typeof locations === "undefined" || !Array.isArray(locations)) locations = [];
if (typeof forms === "undefined" || !Array.isArray(forms)) forms = [];
if (typeof actions === "undefined" || !Array.isArray(actions)) actions = [];

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
  document.getElementById("welcomeText").textContent = "Welcome, " + currentUser;
  renderProjectCards();
  showView("projects");
}

function logout(){
  currentUser = null;
  currentProject = null;
  currentScope = null;
  currentLocation = null;
  currentForm = null;
  showView("login");
}

function renderProjectCards(){
  const wrap = document.getElementById("projectCards");
  wrap.innerHTML = "";

  projects.forEach(project => {
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${project.name}</h4>
          <p>${project.code || "Project Code"} · ${project.package || "Package"}</p>
        </div>
        <div class="select-card-body">
          <button class="btn btn-primary" onclick="selectProject(${project.id})">Open Project</button>
        </div>
      </div>
    `;
  });
}

function selectProject(projectId){
  currentProject = projects.find(p => String(p.id) === String(projectId));
  if (!currentProject) return;

  document.getElementById("overviewProjectTitle").textContent = currentProject.name;
  document.getElementById("overviewProjectSub").textContent = `${currentProject.code || ""} · ${currentProject.package || ""}`;
  document.getElementById("summaryProjectName").textContent = currentProject.name;
  document.getElementById("summaryProjectCode").textContent = currentProject.code || "—";
  document.getElementById("summaryProjectPackage").textContent = currentProject.package || "—";
  document.getElementById("summaryUser").textContent = currentUser || "—";

  renderOverviewStats();
  showView("overview");
}

function renderOverviewStats(){
  const wrap = document.getElementById("overviewStats");
  const projectForms = forms.filter(f => String(f.project) === String(currentProject.id));

  const total = projectForms.length;
  const passes = projectForms.filter(f => f.status === "pass").length;
  const fails = projectForms.filter(f => f.status === "fail").length;
  const holds = projectForms.filter(f => f.status === "hold").length;

  wrap.innerHTML = `
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

function goToScopes(){
  if (!currentProject) return;

  document.getElementById("scopeProjectTitle").textContent = `${currentProject.name} · ${currentProject.code || ""}`;
  renderScopeCards();
  showView("scopes");
}

function renderScopeCards(){
  const wrap = document.getElementById("scopeCards");
  wrap.innerHTML = "";

  Object.keys(SCOPE_META).forEach(key => {
    const scope = SCOPE_META[key];
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${scope.title}</h4>
          <p>${scope.note}</p>
        </div>
        <div class="select-card-body">
          <button class="btn btn-primary" onclick="selectScope('${key}')">Select Scope</button>
        </div>
      </div>
    `;
  });
}

function selectScope(scopeKey){
  currentScope = scopeKey;
  currentLocation = null;
  currentForm = null;
  document.getElementById("locationContextText").textContent = `${currentProject.name} · ${SCOPE_META[scopeKey].title}`;
  renderLocationCards();
  showView("locations");
}

function renderLocationCards(){
  const wrap = document.getElementById("locationCards");
  wrap.innerHTML = "";

  const filtered = locations.filter(l => String(l.project) === String(currentProject.id));

  filtered.forEach(location => {
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${location.name}</h4>
          <p>${SCOPE_META[currentScope].title}</p>
        </div>
        <div class="select-card-body">
          <button class="btn btn-primary" onclick="selectLocation(${location.id})">Select Location</button>
        </div>
      </div>
    `;
  });
}

function selectLocation(locationId){
  currentLocation = locations.find(l => String(l.id) === String(locationId));
  if (!currentLocation) return;

  document.getElementById("formContextText").textContent =
    `${currentProject.name} · ${SCOPE_META[currentScope].title} · ${currentLocation.name}`;

  renderFormCards();
  showView("forms");
}

function renderFormCards(){
  const wrap = document.getElementById("formCards");
  wrap.innerHTML = "";

  const items = FORM_LIBRARY[currentScope] || [];

  items.forEach((item, index) => {
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${item.code} · ${item.title}</h4>
          <p>${item.note}</p>
          ${item.hold ? `<span class="form-note hold">Hold Point</span>` : ``}
        </div>
        <div class="select-card-body">
          <button class="btn btn-primary" onclick="openFormEntry(${index})">Open Form</button>
        </div>
      </div>
    `;
  });
}

function openFormEntry(formIndex){
  const items = FORM_LIBRARY[currentScope] || [];
  currentForm = items[formIndex];

  if (!currentForm) return;

  document.getElementById("entryContextText").textContent =
    `${currentProject.name} · ${SCOPE_META[currentScope].title} · ${currentLocation.name} · ${currentForm.code}`;

  document.getElementById("ctxProject").textContent = currentProject.name;
  document.getElementById("ctxScope").textContent = SCOPE_META[currentScope].title;
  document.getElementById("ctxLocation").textContent = currentLocation.name;
  document.getElementById("ctxForm").textContent = `${currentForm.code} · ${currentForm.title}`;
  document.getElementById("ctxUser").textContent = currentUser || "—";
  document.getElementById("entryFormTitle").textContent = `${currentForm.code} · ${currentForm.title}`;

  const holdWarning = document.getElementById("holdWarning");
  if (currentForm.hold) {
    holdWarning.classList.remove("hidden");
    document.getElementById("entryStatus").value = "hold";
  } else {
    holdWarning.classList.add("hidden");
    document.getElementById("entryStatus").value = "pass";
  }

  document.getElementById("entryDate").valueAsDate = new Date();
  document.getElementById("entryInspector").value = currentUser || "";
  document.getElementById("entryReference").value = "";
  document.getElementById("entryChecks").value = "";
  document.getElementById("entryActions").value = "";

  showView("entry");
}

function submitEntry(){
  if (!currentProject || !currentScope || !currentLocation || !currentForm) return;

  const status = document.getElementById("entryStatus").value;
  const record = {
    id: Date.now(),
    project: currentProject.id,
    projectName: currentProject.name,
    scope: currentScope,
    scopeTitle: SCOPE_META[currentScope].title,
    type: `${currentForm.code} · ${currentForm.title}`,
    location: currentLocation.id,
    locationName: currentLocation.name,
    status: status,
    user: currentUser,
    date: document.getElementById("entryDate").value,
    inspector: document.getElementById("entryInspector").value,
    reference: document.getElementById("entryReference").value,
    checks: document.getElementById("entryChecks").value,
    followUp: document.getElementById("entryActions").value
  };

  forms.push(record);

  if (status !== "pass") {
    actions.push({
      id: Date.now() + 1,
      project: currentProject.id,
      title: `${currentForm.code} ${currentForm.title} issue`,
      assigned: currentUser,
      locationName: currentLocation.name,
      scope: currentScope,
      status: status,
      notes: record.followUp
    });
  }

  safeSave();
  alert("Record submitted.");
  selectProject(currentProject.id);
}

function init(){
  seedData();
  buildLoginUsers();
  showView("login");
}

init();