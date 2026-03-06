const GENERIC_FIELDS = [
  { id: "date", label: "Inspection Date", type: "date" },
  { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
  { id: "reference", label: "Reference", type: "text", placeholder: "Drawing ref / area ref / batch ref" },
  {
    id: "status",
    label: "Result",
    type: "select",
    options: ["pass", "fail", "hold"],
    labels: { pass: "Pass", fail: "Fail", hold: "Hold Point" }
  },
  {
    id: "checks",
    label: "Inspection Notes",
    type: "textarea",
    rows: 5,
    full: true,
    placeholder: "Record the principal checks completed, observations and issues."
  },
  {
    id: "followUp",
    label: "Actions / Follow-Up",
    type: "textarea",
    rows: 4,
    full: true,
    placeholder: "Record follow-up, rectification, escalation or next action."
  }
];

function makeGenericScopeForms(scopeTitle) {
  return [
    { code: "F00", title: "Benchmark Acceptance", note: `${scopeTitle} benchmark approval.`, hold: true, fields: GENERIC_FIELDS },
    { code: "F01", title: "Area Release Check", note: `Area release for ${scopeTitle.toLowerCase()} works.`, fields: GENERIC_FIELDS },
    { code: "F02", title: "Material Delivery Log", note: `Material receipt and verification for ${scopeTitle.toLowerCase()}.`, fields: GENERIC_FIELDS },
    { code: "F03", title: "Substrate / Readiness Check", note: "Substrate and readiness review.", fields: GENERIC_FIELDS },
    { code: "F04", title: "Setting Out Hold Point", note: "Setting out approval before progression.", hold: true, fields: GENERIC_FIELDS },
    { code: "F05", title: "System Check", note: "System-specific compliance check.", fields: GENERIC_FIELDS },
    { code: "F06", title: "Level / Tolerance Record", note: "Tolerance and level verification.", fields: GENERIC_FIELDS },
    { code: "F07", title: "Installation Inspection", note: "Main installation QA record.", fields: GENERIC_FIELDS },
    { code: "F08", title: "Detail Check", note: "Local detail and interface review.", fields: GENERIC_FIELDS },
    { code: "F09", title: "Protection Review", note: "Protection and post-install review.", fields: GENERIC_FIELDS },
    { code: "F10", title: "Secondary Review", note: "Secondary readiness / interface review.", fields: GENERIC_FIELDS },
    { code: "F11", title: "Area Readiness Review", note: "Hold point prior to progression.", hold: true, fields: GENERIC_FIELDS },
    { code: "F12", title: "Final Release / Sign-Off", note: "Final release and sign-off.", hold: true, fields: GENERIC_FIELDS }
  ];
}

const FORM_LIBRARY = {
  screed: [
    {
      code: "F00",
      title: "Benchmark Acceptance",
      note: "Initial benchmark approval before production works.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRef", label: "Area Reference", type: "text", placeholder: "Block / level / area ref" },
        { id: "benchmarkOutcome", label: "Benchmark Outcome", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "checks", label: "Benchmark Notes", type: "textarea", rows: 5, full: true, placeholder: "Record benchmark observations and acceptance basis." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record any approval condition or further action." }
      ]
    },
    {
      code: "F01",
      title: "Pre Pour Checklist",
      note: "Area release, substrate, membrane and insulation checks.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRelease", label: "Area Release", type: "select", options: ["Released", "Not Released"] },
        { id: "substrate", label: "Substrate Condition", type: "select", options: ["Acceptable", "Minor Issue", "Unacceptable"] },
        { id: "membrane", label: "Slip Membrane", type: "select", options: ["Installed", "Incomplete", "Not Installed"] },
        { id: "insulation", label: "Insulation Build-Up", type: "select", options: ["Compliant", "Non-Compliant", "N/A"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail", "hold"], labels: { pass: "Pass", fail: "Fail", hold: "Hold Point" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record the principal checks completed and any issues noted." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record rectification, escalation or next action." }
      ]
    },
    {
      code: "F02",
      title: "Batching Record Sheet",
      note: "Material batching and mix control log.",
      fields: [
        { id: "date", label: "Batch Date", type: "date" },
        { id: "inspector", label: "Supervisor", type: "text", placeholder: "Enter name" },
        { id: "mixRef", label: "Mix Reference", type: "text", placeholder: "Mix design / approved reference" },
        { id: "batchNo", label: "Batch Number", type: "text", placeholder: "Enter batch no." },
        { id: "status", label: "Batch Status", type: "select", options: ["pass", "fail"], labels: { pass: "Accepted", fail: "Rejected" } },
        { id: "checks", label: "Batch Notes", type: "textarea", rows: 5, full: true, placeholder: "Record quantities, compliance and deviations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record rejected batch actions or further review." }
      ]
    },
    {
      code: "F03",
      title: "Thickness Level Log",
      note: "Thickness and level checks during placement.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "designRef", label: "Design / Datum Reference", type: "text", placeholder: "FFL / thickness reference" },
        { id: "sampleLocation", label: "Sample Location", type: "text", placeholder: "Room / point checked" },
        { id: "resultValue", label: "Measured Value", type: "text", placeholder: "Enter measured thickness / level" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Within Tolerance", fail: "Outside Tolerance" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record measurements and tolerance observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record corrective action or re-check requirement." }
      ]
    },
    {
      code: "F04",
      title: "SR Test Record",
      note: "Surface regularity testing.",
      hold: true,
      fields: [
        { id: "date", label: "Test Date", type: "date" },
        { id: "inspector", label: "Tested By", type: "text", placeholder: "Enter name" },
        { id: "srClass", label: "Specified SR Class", type: "select", options: ["SR1", "SR2", "SR3"] },
        { id: "sampleLocation", label: "Test Location", type: "text", placeholder: "Room / area / test point" },
        { id: "resultValue", label: "Measured Deviation", type: "text", placeholder: "e.g. 3mm" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail", "hold"], labels: { pass: "Pass", fail: "Fail", hold: "Hold Point" } },
        { id: "checks", label: "Test Notes", type: "textarea", rows: 5, full: true, placeholder: "Record straightedge results and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record rectification, re-test or approval action." }
      ]
    },
    {
      code: "F05",
      title: "Moisture Test Report",
      note: "Moisture test and pre-finish release.",
      hold: true,
      fields: [
        { id: "date", label: "Test Date", type: "date" },
        { id: "inspector", label: "Tested By", type: "text", placeholder: "Enter name" },
        { id: "deviceRef", label: "Device / Hygrometer Ref", type: "text", placeholder: "Enter device reference" },
        { id: "sampleLocation", label: "Test Location", type: "text", placeholder: "Room / area / point" },
        { id: "resultValue", label: "Measured RH / Moisture", type: "text", placeholder: "e.g. 75% RH" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail", "hold"], labels: { pass: "Pass", fail: "Fail", hold: "Hold Point" } },
        { id: "checks", label: "Test Notes", type: "textarea", rows: 5, full: true, placeholder: "Record readings, ambient conditions and acceptance basis." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record drying, re-test or release action." }
      ]
    },
    { code: "F06", title: "Drop Hammer Test Record", note: "BRE drop hammer / screed strength testing.", fields: GENERIC_FIELDS },
    { code: "F07", title: "Curing Access Log", note: "Curing and trafficking control log.", fields: GENERIC_FIELDS },
    { code: "F08", title: "Post Pour Inspection", note: "Initial post-pour visual inspection.", fields: GENERIC_FIELDS },
    { code: "F09", title: "Material Delivery Log", note: "Material receipt and delivery verification.", fields: GENERIC_FIELDS },
    { code: "F10", title: "Calibration / Equipment Check", note: "Equipment and calibration control.", fields: GENERIC_FIELDS },
    { code: "F11", title: "Area Readiness Review", note: "Area readiness prior to progression.", hold: true, fields: GENERIC_FIELDS },
    { code: "F12", title: "Final Release / Sign-Off", note: "Final package release.", hold: true, fields: GENERIC_FIELDS }
  ],
  cb: makeGenericScopeForms("Cradle & Batten"),
  raf: makeGenericScopeForms("Raised Access Floor"),
  hw: makeGenericScopeForms("Hardwood Flooring"),
  tiling: makeGenericScopeForms("Tiling")
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

function safeSave() {
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

function seedData() {
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

function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById("view-" + name);
  if (target) target.classList.add("active");
}

function buildLoginUsers() {
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

function login() {
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

function logout() {
  currentUser = null;
  currentProject = null;
  currentScope = null;
  currentLocation = null;
  currentForm = null;
  showView("login");
}

function renderProjectCards() {
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

function selectProject(projectId) {
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

function renderOverviewStats() {
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

function goToActions() {
  if (!currentProject) return;
  document.getElementById("actionsContextText").textContent = `${currentProject.name} · ${currentProject.code || ""}`;
  renderActionCards();
  showView("actions");
}

function isOverdue(action) {
  if (!action.dueDate) return false;
  if (action.actionStatus === "closed") return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(action.dueDate);
  due.setHours(0, 0, 0, 0);

  return due < today;
}

function formatActionStatus(status) {
  if (status === "open") return "Open";
  if (status === "in_progress") return "In Progress";
  if (status === "closed") return "Closed";
  return status;
}

function getFilteredActions() {
  const statusFilter = document.getElementById("actionFilterStatus")?.value || "all";
  const assignedFilter = document.getElementById("actionFilterAssigned")?.value || "all";

  let projectActions = actions.filter(a => String(a.project) === String(currentProject.id));

  if (assignedFilter === "me") {
    projectActions = projectActions.filter(a => a.assignedTo === currentUser);
  }

  if (statusFilter === "open") {
    projectActions = projectActions.filter(a => a.actionStatus === "open");
  } else if (statusFilter === "in_progress") {
    projectActions = projectActions.filter(a => a.actionStatus === "in_progress");
  } else if (statusFilter === "closed") {
    projectActions = projectActions.filter(a => a.actionStatus === "closed");
  } else if (statusFilter === "overdue") {
    projectActions = projectActions.filter(a => isOverdue(a));
  }

  return projectActions.sort((a, b) => b.id - a.id);
}

function renderActionCards() {
  const wrap = document.getElementById("actionCards");
  wrap.innerHTML = "";

  const projectActions = getFilteredActions();

  if (projectActions.length === 0) {
    wrap.innerHTML = `
      <div class="select-card">
        <div class="select-card-top">
          <h4>No matching actions</h4>
          <p>No actions match the current filters.</p>
        </div>
      </div>
    `;
    return;
  }

  projectActions.forEach(action => {
    const overdueText = isOverdue(action) ? `<p><strong>Overdue:</strong> Yes</p>` : "";
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${action.title}</h4>
          <p>${action.locationName}</p>
          <p>Assigned to: ${action.assignedTo || "Not set"}</p>
          <p>Due: ${action.dueDate || "Not set"}</p>
          <p>Status: ${formatActionStatus(action.actionStatus || "open")}</p>
          <p>Source: ${action.sourceForm || "Record"}</p>
          ${overdueText}
        </div>
        <div class="select-card-body">
          <button class="btn btn-primary" onclick="cycleActionStatus(${action.id})">Update Status</button>
        </div>
      </div>
    `;
  });
}

function cycleActionStatus(actionId) {
  const action = actions.find(a => String(a.id) === String(actionId));
  if (!action) return;

  if (action.actionStatus === "open") {
    action.actionStatus = "in_progress";
  } else if (action.actionStatus === "in_progress") {
    action.actionStatus = "closed";
  } else {
    action.actionStatus = "open";
  }

  safeSave();
  renderActionCards();
}

function goToScopes() {
  if (!currentProject) return;

  document.getElementById("scopeProjectTitle").textContent = `${currentProject.name} · ${currentProject.code || ""}`;
  renderScopeCards();
  showView("scopes");
}

function renderScopeCards() {
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

function selectScope(scopeKey) {
  currentScope = scopeKey;
  currentLocation = null;
  currentForm = null;
  document.getElementById("locationContextText").textContent = `${currentProject.name} · ${SCOPE_META[scopeKey].title}`;
  renderLocationCards();
  showView("locations");
}

function renderLocationCards() {
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

function selectLocation(locationId) {
  currentLocation = locations.find(l => String(l.id) === String(locationId));
  if (!currentLocation) return;

  document.getElementById("formContextText").textContent =
    `${currentProject.name} · ${SCOPE_META[currentScope].title} · ${currentLocation.name}`;

  renderFormCards();
  renderLocationHistory();
  showView("forms");
}

function renderFormCards() {
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

function renderLocationHistory() {
  const wrap = document.getElementById("locationHistoryCards");
  wrap.innerHTML = "";

  const history = forms
    .filter(f =>
      String(f.project) === String(currentProject.id) &&
      String(f.location) === String(currentLocation.id)
    )
    .sort((a, b) => b.id - a.id);

  if (history.length === 0) {
    wrap.innerHTML = `
      <div class="select-card">
        <div class="select-card-top">
          <h4>No records yet</h4>
          <p>No inspection history has been recorded for this location.</p>
        </div>
      </div>
    `;
    return;
  }

  history.forEach(record => {
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${record.type}</h4>
          <p>Status: ${formatRecordStatus(record.status)}</p>
          <p>User: ${record.user || "Not set"}</p>
          <p>Date: ${(record.fieldData && record.fieldData.date) || "Not set"}</p>
        </div>
      </div>
    `;
  });
}

function formatRecordStatus(status) {
  if (status === "pass") return "Pass";
  if (status === "fail") return "Fail";
  if (status === "hold") return "Hold Point";
  return status;
}

function renderField(field) {
  const fullClass = field.full ? "full" : "";
  const value = getDefaultFieldValue(field);

  if (field.type === "select-users") {
    const options = users.map(u => {
      const selected = String(value) === String(u.name) ? "selected" : "";
      return `<option value="${u.name}" ${selected}>${u.name}</option>`;
    }).join("");

    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}</label>
        <select id="dyn_${field.id}" data-field-id="${field.id}">
          ${options}
        </select>
      </div>
    `;
  }

  if (field.type === "select") {
    const options = field.options.map(opt => {
      const label = field.labels && field.labels[opt] ? field.labels[opt] : opt;
      const selected = String(value) === String(opt) ? "selected" : "";
      return `<option value="${opt}" ${selected}>${label}</option>`;
    }).join("");

    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}</label>
        <select id="dyn_${field.id}" data-field-id="${field.id}">
          ${options}
        </select>
      </div>
    `;
  }

  if (field.type === "textarea") {
    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}</label>
        <textarea id="dyn_${field.id}" data-field-id="${field.id}" rows="${field.rows || 4}" placeholder="${field.placeholder || ""}">${value || ""}</textarea>
      </div>
    `;
  }

  return `
    <div class="${fullClass}">
      <label class="field-label" for="dyn_${field.id}">${field.label}</label>
      <input id="dyn_${field.id}" data-field-id="${field.id}" type="${field.type || "text"}" value="${value || ""}" placeholder="${field.placeholder || ""}" />
    </div>
  `;
}

function getCommonActionFields() {
  return [
    {
      id: "actionAssignee",
      label: "Assign Action To",
      type: "select-users",
      full: false
    },
    {
      id: "actionDueDate",
      label: "Action Due Date",
      type: "date",
      full: false
    },
    {
      id: "actionStatus",
      label: "Action Status",
      type: "select",
      options: ["open", "in_progress", "closed"],
      labels: { open: "Open", in_progress: "In Progress", closed: "Closed" },
      full: false
    }
  ];
}

function getDefaultFieldValue(field) {
  if (field.id === "date") {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  if (field.id === "inspector") {
    return currentUser || "";
  }

  if (field.id === "status") {
    if (currentForm && currentForm.hold) return "hold";
    return "pass";
  }

  if (field.id === "actionAssignee") {
    return currentUser || "";
  }

  if (field.id === "actionDueDate") {
    const due = new Date();
    due.setDate(due.getDate() + 3);
    return due.toISOString().split("T")[0];
  }

  if (field.id === "actionStatus") {
    return "open";
  }

  return "";
}

function openFormEntry(formIndex) {
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
  } else {
    holdWarning.classList.add("hidden");
  }

  const allFields = [...(currentForm.fields || []), ...getCommonActionFields()];
  const dynamicWrap = document.getElementById("dynamicFormFields");
  dynamicWrap.innerHTML = allFields.map(renderField).join("");

  showView("entry");
}

function getFieldValue(fieldId) {
  const el = document.getElementById(`dyn_${fieldId}`);
  return el ? el.value : "";
}

function submitEntry() {
  if (!currentProject || !currentScope || !currentLocation || !currentForm) return;

  const allFields = [...(currentForm.fields || []), ...getCommonActionFields()];
  const dynamicValues = {};

  allFields.forEach(field => {
    dynamicValues[field.id] = getFieldValue(field.id);
  });

  const recordStatus = dynamicValues.status || (currentForm.hold ? "hold" : "pass");

  const record = {
    id: Date.now(),
    project: currentProject.id,
    projectName: currentProject.name,
    scope: currentScope,
    scopeTitle: SCOPE_META[currentScope].title,
    type: `${currentForm.code} · ${currentForm.title}`,
    location: currentLocation.id,
    locationName: currentLocation.name,
    status: recordStatus,
    user: currentUser,
    formCode: currentForm.code,
    formTitle: currentForm.title,
    fieldData: dynamicValues
  };

  forms.push(record);

  if (recordStatus !== "pass") {
    actions.push({
      id: Date.now() + 1,
      project: currentProject.id,
      scope: currentScope,
      scopeTitle: SCOPE_META[currentScope].title,
      location: currentLocation.id,
      locationName: currentLocation.name,
      sourceForm: `${currentForm.code} · ${currentForm.title}`,
      title: `${currentForm.code} ${currentForm.title} issue`,
      assignedTo: dynamicValues.actionAssignee || currentUser,
      createdBy: currentUser,
      createdDate: dynamicValues.date || "",
      dueDate: dynamicValues.actionDueDate || "",
      actionStatus: dynamicValues.actionStatus || "open",
      status: recordStatus,
      notes: dynamicValues.followUp || ""
    });
  }

  safeSave();
  alert("Record submitted.");
  selectLocation(currentLocation.id);
  showView("forms");
}

function init() {
  seedData();
  buildLoginUsers();
  showView("login");
}

init();