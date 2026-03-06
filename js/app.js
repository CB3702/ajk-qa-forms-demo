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
        { id: "benchmarkNotes", label: "Benchmark Notes", type: "textarea", rows: 4, full: true, placeholder: "Record benchmark observations and acceptance basis." },
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
    {
      code: "F06",
      title: "Drop Hammer Test Record",
      note: "BRE drop hammer / screed strength testing.",
      fields: [
        { id: "date", label: "Test Date", type: "date" },
        { id: "inspector", label: "Tested By", type: "text", placeholder: "Enter name" },
        { id: "deviceRef", label: "Device Ref", type: "text", placeholder: "BRE tester reference" },
        { id: "sampleLocation", label: "Test Location", type: "text", placeholder: "Room / test point" },
        { id: "resultValue", label: "Measured Result", type: "text", placeholder: "Enter reading / category" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Test Notes", type: "textarea", rows: 5, full: true, placeholder: "Record readings and compliance." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record re-test or remedial action." }
      ]
    },
    {
      code: "F07",
      title: "Curing Access Log",
      note: "Curing and trafficking control log.",
      fields: [
        { id: "date", label: "Log Date", type: "date" },
        { id: "inspector", label: "Supervisor", type: "text", placeholder: "Enter name" },
        { id: "accessStatus", label: "Access Condition", type: "select", options: ["Controlled", "Unauthorised Access", "Restricted"] },
        { id: "protectionStatus", label: "Protection Status", type: "select", options: ["Intact", "Damaged", "Not In Place"] },
        { id: "status", label: "Overall Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Log Notes", type: "textarea", rows: 5, full: true, placeholder: "Record curing, trafficking and protection observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record access control or remedial action." }
      ]
    },
    {
      code: "F08",
      title: "Post Pour Inspection",
      note: "Initial post-pour visual inspection.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "surfaceCondition", label: "Surface Condition", type: "select", options: ["Good", "Minor Issue", "Defect Present"] },
        { id: "cracking", label: "Cracking / Defect", type: "select", options: ["None", "Minor", "Significant"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record finish, defects and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record remedial action or monitoring." }
      ]
    },
    {
      code: "F09",
      title: "Material Delivery Log",
      note: "Material receipt and delivery verification.",
      fields: [
        { id: "date", label: "Delivery Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "deliveryRef", label: "Delivery / Ticket Ref", type: "text", placeholder: "Enter delivery note / ticket ref" },
        { id: "materialType", label: "Material Type", type: "text", placeholder: "Enter material description" },
        { id: "status", label: "Delivery Status", type: "select", options: ["pass", "fail"], labels: { pass: "Accepted", fail: "Rejected / Quarantined" } },
        { id: "checks", label: "Delivery Notes", type: "textarea", rows: 5, full: true, placeholder: "Record delivery condition, quantity and traceability." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record rejection, quarantine or further checks." }
      ]
    },
    {
      code: "F10",
      title: "Calibration / Equipment Check",
      note: "Equipment and calibration control.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "deviceRef", label: "Equipment / Device Ref", type: "text", placeholder: "Enter equipment ID / serial no." },
        { id: "calibrationStatus", label: "Calibration Status", type: "select", options: ["Current", "Expired", "Not Verified"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Compliant", fail: "Non-Compliant" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record calibration dates, condition and findings." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record equipment replacement or escalation." }
      ]
    },
    {
      code: "F11",
      title: "Area Readiness Review",
      note: "Area readiness prior to progression.",
      hold: true,
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "readinessStatus", label: "Area Readiness", type: "select", options: ["Ready", "Ready with Comments", "Not Ready"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail", "hold"], labels: { pass: "Ready", fail: "Not Ready", hold: "Hold Point" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record outstanding items and readiness observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record closure actions or approvals required." }
      ]
    },
    {
      code: "F12",
      title: "Final Release / Sign-Off",
      note: "Final package release.",
      hold: true,
      fields: [
        { id: "date", label: "Release Date", type: "date" },
        { id: "inspector", label: "Released By", type: "text", placeholder: "Enter name" },
        { id: "releaseStatus", label: "Release Status", type: "select", options: ["Released", "Released with Comments", "Not Released"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold"], labels: { pass: "Released", hold: "Hold Point" } },
        { id: "checks", label: "Release Notes", type: "textarea", rows: 5, full: true, placeholder: "Record final checks and release basis." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record residual actions or approvals." }
      ]
    }
  ],
  cb: [
    {
      code: "F00",
      title: "Benchmark Acceptance",
      note: "Initial cradle and batten benchmark approval.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRef", label: "Area Reference", type: "text", placeholder: "Block / level / area ref" },
        { id: "benchmarkOutcome", label: "Benchmark Outcome", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "checks", label: "Benchmark Notes", type: "textarea", rows: 5, full: true, placeholder: "Record system build-up and benchmark observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approval conditions or further action." }
      ]
    },
    {
      code: "F01",
      title: "Area Release Check",
      note: "Area released and ready for works.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRelease", label: "Area Release", type: "select", options: ["Released", "Not Released"] },
        { id: "accessStatus", label: "Access / Logistics", type: "select", options: ["Available", "Restricted", "Blocked"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record area readiness and restrictions." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record access or coordination actions." }
      ]
    },
    {
      code: "F02",
      title: "Material Delivery Log",
      note: "Materials received and checked.",
      fields: [
        { id: "date", label: "Delivery Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "deliveryRef", label: "Delivery Ref", type: "text", placeholder: "Enter delivery note / ticket ref" },
        { id: "materialType", label: "Material Type", type: "text", placeholder: "Enter material description" },
        { id: "status", label: "Delivery Status", type: "select", options: ["pass", "fail"], labels: { pass: "Accepted", fail: "Rejected" } },
        { id: "checks", label: "Delivery Notes", type: "textarea", rows: 5, full: true, placeholder: "Record condition, quantity and traceability." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record quarantine or replacement action." }
      ]
    },
    {
      code: "F03",
      title: "Substrate / Support Condition Check",
      note: "Base condition suitable for install.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "substrate", label: "Base Condition", type: "select", options: ["Acceptable", "Minor Issue", "Unacceptable"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record substrate and support condition." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record remedial works or further checks." }
      ]
    },
    {
      code: "F04",
      title: "Setting Out Hold Point",
      note: "Set-out checked before installation continues.",
      hold: true,
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "designRef", label: "Setting Out Ref", type: "text", placeholder: "Drawing / design reference" },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Approved", hold: "Hold Point", fail: "Rejected" } },
        { id: "checks", label: "Set-Out Notes", type: "textarea", rows: 5, full: true, placeholder: "Record datum, alignment and set-out observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approvals or amendments required." }
      ]
    },
    {
      code: "F05",
      title: "Fixing / Anchorage Check",
      note: "Fixing and anchorage compliance review.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "fixingType", label: "Fixing / Anchorage Type", type: "text", placeholder: "Enter fixing type / system" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Compliant", fail: "Non-Compliant" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record fixing centres, anchorages and compliance." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record non-conformance or remedial action." }
      ]
    },
    {
      code: "F06",
      title: "Level Check Record",
      note: "Level and tolerance checks.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "sampleLocation", label: "Check Location", type: "text", placeholder: "Room / point checked" },
        { id: "resultValue", label: "Measured Value", type: "text", placeholder: "Enter level result" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Within Tolerance", fail: "Outside Tolerance" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record tolerance measurements and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record rectification or re-check action." }
      ]
    },
    {
      code: "F07",
      title: "Installation Inspection",
      note: "Cradle and batten installation record.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "installStage", label: "Installation Stage", type: "select", options: ["Started", "In Progress", "Complete"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Installation Notes", type: "textarea", rows: 5, full: true, placeholder: "Record installation quality and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snagging or remedial actions." }
      ]
    },
    {
      code: "F08",
      title: "Flatness / Plane Check",
      note: "Installed batten plane verification.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "sampleLocation", label: "Check Location", type: "text", placeholder: "Room / area checked" },
        { id: "resultValue", label: "Measured Result", type: "text", placeholder: "Enter deviation / tolerance result" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Within Tolerance", fail: "Outside Tolerance" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record plane and flatness observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record corrective action or re-check." }
      ]
    },
    {
      code: "F09",
      title: "Moisture / Timber Condition Check",
      note: "Timber moisture and storage condition.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "resultValue", label: "Moisture / Condition Result", type: "text", placeholder: "Enter reading / observation" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record moisture content and storage condition." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record quarantine or storage action." }
      ]
    },
    {
      code: "F10",
      title: "Protection / Post Install Review",
      note: "Protection and post-install controls.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "protectionStatus", label: "Protection Status", type: "select", options: ["In Place", "Damaged", "Not In Place"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record protection, access and condition." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record replacement or further protection action." }
      ]
    },
    {
      code: "F11",
      title: "Pre-Finish Readiness",
      note: "Hold point before finishes proceed.",
      hold: true,
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "readinessStatus", label: "Readiness Status", type: "select", options: ["Ready", "Ready with Comments", "Not Ready"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Ready", hold: "Hold Point", fail: "Not Ready" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record readiness and outstanding items." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approvals or closure action." }
      ]
    },
    {
      code: "F12",
      title: "Final Release / Sign-Off",
      note: "Final package release.",
      hold: true,
      fields: [
        { id: "date", label: "Release Date", type: "date" },
        { id: "inspector", label: "Released By", type: "text", placeholder: "Enter name" },
        { id: "releaseStatus", label: "Release Status", type: "select", options: ["Released", "Released with Comments", "Not Released"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold"], labels: { pass: "Released", hold: "Hold Point" } },
        { id: "checks", label: "Release Notes", type: "textarea", rows: 5, full: true, placeholder: "Record final release basis." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record residual actions or approvals." }
      ]
    }
  ],
  raf: [
    {
      code: "F00",
      title: "Benchmark Acceptance",
      note: "Initial RAF benchmark approval.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRef", label: "Area Reference", type: "text", placeholder: "Block / level / area ref" },
        { id: "benchmarkOutcome", label: "Benchmark Outcome", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "checks", label: "Benchmark Notes", type: "textarea", rows: 5, full: true, placeholder: "Record benchmark observations and acceptance basis." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approval conditions or further action." }
      ]
    },
    {
      code: "F01",
      title: "Area Release Check",
      note: "Area available and ready for raised floor works.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRelease", label: "Area Release", type: "select", options: ["Released", "Not Released"] },
        { id: "accessStatus", label: "Access / Logistics", type: "select", options: ["Available", "Restricted", "Blocked"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record area availability and constraints." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record access or coordination action." }
      ]
    },
    {
      code: "F02",
      title: "Material Delivery Log",
      note: "Panels, pedestals and components checked on delivery.",
      fields: [
        { id: "date", label: "Delivery Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "deliveryRef", label: "Delivery Ref", type: "text", placeholder: "Enter delivery note / ticket ref" },
        { id: "materialType", label: "Material Type", type: "text", placeholder: "Enter material description" },
        { id: "status", label: "Delivery Status", type: "select", options: ["pass", "fail"], labels: { pass: "Accepted", fail: "Rejected" } },
        { id: "checks", label: "Delivery Notes", type: "textarea", rows: 5, full: true, placeholder: "Record quantity, condition and traceability." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record replacement or quarantine action." }
      ]
    },
    {
      code: "F03",
      title: "Substrate Readiness",
      note: "Substrate suitability and cleanliness check.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "substrate", label: "Substrate Condition", type: "select", options: ["Acceptable", "Minor Issue", "Unacceptable"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record cleanliness, readiness and constraints." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record preparatory or remedial action." }
      ]
    },
    {
      code: "F04",
      title: "Datum / Setting Out Hold Point",
      note: "Set-out and datum approval before install.",
      hold: true,
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "designRef", label: "Datum / Drawing Ref", type: "text", placeholder: "Enter drawing / set-out reference" },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Approved", hold: "Hold Point", fail: "Rejected" } },
        { id: "checks", label: "Set-Out Notes", type: "textarea", rows: 5, full: true, placeholder: "Record datum and set-out observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approvals or amendments required." }
      ]
    },
    {
      code: "F05",
      title: "Pedestal Fixing Check",
      note: "Pedestal fixing and layout verification.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "fixingType", label: "Fixing Type / Layout", type: "text", placeholder: "Enter fixing / layout reference" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Compliant", fail: "Non-Compliant" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record pedestal fixing and layout compliance." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record remedial or review action." }
      ]
    },
    {
      code: "F06",
      title: "Level Check Record",
      note: "Finished floor level checks.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "sampleLocation", label: "Check Location", type: "text", placeholder: "Room / point checked" },
        { id: "resultValue", label: "Measured Level", type: "text", placeholder: "Enter measured result" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Within Tolerance", fail: "Outside Tolerance" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record levels and compliance." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record re-check or rectification action." }
      ]
    },
    {
      code: "F07",
      title: "Service Coordination Check",
      note: "Interface with services below floor.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "coordinationStatus", label: "Service Coordination", type: "select", options: ["Clear", "Minor Conflict", "Major Conflict"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Coordinated", fail: "Conflict Identified" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record service interfaces and coordination issues." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record coordination actions or escalation." }
      ]
    },
    {
      code: "F08",
      title: "Panel Installation Record",
      note: "Panel installation and alignment record.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "installStage", label: "Installation Stage", type: "select", options: ["Started", "In Progress", "Complete"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Installation Notes", type: "textarea", rows: 5, full: true, placeholder: "Record panel alignment and installation observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snagging or corrective actions." }
      ]
    },
    {
      code: "F09",
      title: "Final Inspection",
      note: "Completion inspection and defect review.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "completionStatus", label: "Completion Status", type: "select", options: ["Complete", "Complete with Snags", "Incomplete"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Defects Identified" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record final inspection and defects." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snag closure or further action." }
      ]
    },
    {
      code: "F10",
      title: "Protection Review",
      note: "Post-installation protection and access control.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "protectionStatus", label: "Protection Status", type: "select", options: ["In Place", "Damaged", "Not In Place"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record protection and access controls." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record replacement or protection action." }
      ]
    },
    {
      code: "F11",
      title: "Area Readiness for Next Trade",
      note: "Hold point before handover onward.",
      hold: true,
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "readinessStatus", label: "Readiness Status", type: "select", options: ["Ready", "Ready with Comments", "Not Ready"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Ready", hold: "Hold Point", fail: "Not Ready" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record readiness and outstanding items." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approvals or close-out action." }
      ]
    },
    {
      code: "F12",
      title: "Final Release / Sign-Off",
      note: "Final package release.",
      hold: true,
      fields: [
        { id: "date", label: "Release Date", type: "date" },
        { id: "inspector", label: "Released By", type: "text", placeholder: "Enter name" },
        { id: "releaseStatus", label: "Release Status", type: "select", options: ["Released", "Released with Comments", "Not Released"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold"], labels: { pass: "Released", hold: "Hold Point" } },
        { id: "checks", label: "Release Notes", type: "textarea", rows: 5, full: true, placeholder: "Record final release observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record residual actions or approvals." }
      ]
    }
  ],
  hw: [
    {
      code: "F00",
      title: "Benchmark Acceptance",
      note: "Hardwood benchmark approval.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRef", label: "Area Reference", type: "text", placeholder: "Block / level / area ref" },
        { id: "benchmarkOutcome", label: "Benchmark Outcome", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "checks", label: "Benchmark Notes", type: "textarea", rows: 5, full: true, placeholder: "Record benchmark lay pattern and quality observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approval conditions or further action." }
      ]
    },
    {
      code: "F01",
      title: "Area Release Check",
      note: "Area available and released for hardwood works.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRelease", label: "Area Release", type: "select", options: ["Released", "Not Released"] },
        { id: "accessStatus", label: "Access / Logistics", type: "select", options: ["Available", "Restricted", "Blocked"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record area readiness and access restrictions." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record coordination or enabling actions." }
      ]
    },
    {
      code: "F02",
      title: "Material Delivery Log",
      note: "Boards, adhesives and trims checked on arrival.",
      fields: [
        { id: "date", label: "Delivery Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "deliveryRef", label: "Delivery Ref", type: "text", placeholder: "Enter delivery note / ticket ref" },
        { id: "materialType", label: "Material Type", type: "text", placeholder: "Enter material description" },
        { id: "status", label: "Delivery Status", type: "select", options: ["pass", "fail"], labels: { pass: "Accepted", fail: "Rejected" } },
        { id: "checks", label: "Delivery Notes", type: "textarea", rows: 5, full: true, placeholder: "Record quantity, condition and traceability." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record rejection or replacement action." }
      ]
    },
    {
      code: "F03",
      title: "Substrate Readiness",
      note: "Substrate condition and readiness verification.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "substrate", label: "Substrate Condition", type: "select", options: ["Acceptable", "Minor Issue", "Unacceptable"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record substrate readiness and suitability." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record preparation or remedial action." }
      ]
    },
    {
      code: "F04",
      title: "Moisture / Environment Hold Point",
      note: "Moisture and environmental sign-off.",
      hold: true,
      fields: [
        { id: "date", label: "Test Date", type: "date" },
        { id: "inspector", label: "Tested By", type: "text", placeholder: "Enter name" },
        { id: "resultValue", label: "Moisture / Environmental Reading", type: "text", placeholder: "Enter reading / condition" },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Acceptable", hold: "Hold Point", fail: "Unacceptable" } },
        { id: "checks", label: "Test Notes", type: "textarea", rows: 5, full: true, placeholder: "Record moisture and environmental observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record drying, re-test or release action." }
      ]
    },
    {
      code: "F05",
      title: "Setting Out Approval",
      note: "Setting out and orientation check.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "designRef", label: "Setting Out Ref", type: "text", placeholder: "Drawing / lay pattern ref" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Approved", fail: "Rejected" } },
        { id: "checks", label: "Set-Out Notes", type: "textarea", rows: 5, full: true, placeholder: "Record direction, pattern and margin checks." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record amendments or approvals required." }
      ]
    },
    {
      code: "F06",
      title: "Adhesive / Fixing Check",
      note: "Adhesive and fixing compliance record.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "fixingType", label: "Adhesive / Fixing Type", type: "text", placeholder: "Enter product / fixing system" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Compliant", fail: "Non-Compliant" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record adhesive / fixing compliance." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record corrective action or review." }
      ]
    },
    {
      code: "F07",
      title: "Installation Inspection",
      note: "Ongoing installation QA record.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "installStage", label: "Installation Stage", type: "select", options: ["Started", "In Progress", "Complete"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Installation Notes", type: "textarea", rows: 5, full: true, placeholder: "Record fit, finish and workmanship observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snagging or corrective action." }
      ]
    },
    {
      code: "F08",
      title: "Detail / Threshold Check",
      note: "Thresholds, margins and local details review.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "sampleLocation", label: "Detail Location", type: "text", placeholder: "Threshold / perimeter / local detail" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Detail Notes", type: "textarea", rows: 5, full: true, placeholder: "Record margins, thresholds and local detail observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record detail adjustments or rectification." }
      ]
    },
    {
      code: "F09",
      title: "Protection Review",
      note: "Installed floor protection and traffic control.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "protectionStatus", label: "Protection Status", type: "select", options: ["In Place", "Damaged", "Not In Place"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record protection and access arrangements." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record replacement or traffic control action." }
      ]
    },
    {
      code: "F10",
      title: "Substrate Readiness Review",
      note: "Secondary readiness / interface check.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "substrate", label: "Interface Condition", type: "select", options: ["Acceptable", "Minor Issue", "Unacceptable"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Ready", fail: "Not Ready" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record interface or readiness observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record enabling or remedial works." }
      ]
    },
    {
      code: "F11",
      title: "Hardwood Installation Record",
      note: "Primary installation record.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "installStage", label: "Installation Status", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Accepted", hold: "Hold Point", fail: "Rejected" } },
        { id: "checks", label: "Installation Notes", type: "textarea", rows: 5, full: true, placeholder: "Record primary installation quality and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snag closure or approvals required." }
      ]
    },
    {
      code: "F12",
      title: "Final Sign-Off",
      note: "Completion hold point and release.",
      hold: true,
      fields: [
        { id: "date", label: "Release Date", type: "date" },
        { id: "inspector", label: "Released By", type: "text", placeholder: "Enter name" },
        { id: "releaseStatus", label: "Release Status", type: "select", options: ["Released", "Released with Comments", "Not Released"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold"], labels: { pass: "Released", hold: "Hold Point" } },
        { id: "checks", label: "Release Notes", type: "textarea", rows: 5, full: true, placeholder: "Record sign-off basis and final observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record residual actions or approvals." }
      ]
    }
  ],
  tiling: [
    {
      code: "F00",
      title: "Benchmark Acceptance",
      note: "Tiling benchmark approval.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRef", label: "Area Reference", type: "text", placeholder: "Block / level / area ref" },
        { id: "benchmarkOutcome", label: "Benchmark Outcome", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "checks", label: "Benchmark Notes", type: "textarea", rows: 5, full: true, placeholder: "Record benchmark setting out and finish observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record approval conditions or further action." }
      ]
    },
    {
      code: "F01",
      title: "Area Release Check",
      note: "Area release and access readiness.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "areaRelease", label: "Area Release", type: "select", options: ["Released", "Not Released"] },
        { id: "accessStatus", label: "Access / Logistics", type: "select", options: ["Available", "Restricted", "Blocked"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record area readiness and access constraints." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record enabling or coordination action." }
      ]
    },
    {
      code: "F02",
      title: "Material Delivery Log",
      note: "Tiles, adhesive, grout and trims checked on arrival.",
      fields: [
        { id: "date", label: "Delivery Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "deliveryRef", label: "Delivery Ref", type: "text", placeholder: "Enter delivery note / ticket ref" },
        { id: "materialType", label: "Material Type", type: "text", placeholder: "Enter material description" },
        { id: "status", label: "Delivery Status", type: "select", options: ["pass", "fail"], labels: { pass: "Accepted", fail: "Rejected" } },
        { id: "checks", label: "Delivery Notes", type: "textarea", rows: 5, full: true, placeholder: "Record quantity, batch and condition." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record quarantine or replacement action." }
      ]
    },
    {
      code: "F03",
      title: "Substrate Readiness",
      note: "Substrate suitability for tile installation.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "substrate", label: "Substrate Condition", type: "select", options: ["Acceptable", "Minor Issue", "Unacceptable"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record substrate readiness and suitability." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record preparation or remedial action." }
      ]
    },
    {
      code: "F04",
      title: "Setting Out Hold Point",
      note: "Setting out approval before installation.",
      hold: true,
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "designRef", label: "Setting Out Ref", type: "text", placeholder: "Drawing / tile layout ref" },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Approved", hold: "Hold Point", fail: "Rejected" } },
        { id: "checks", label: "Set-Out Notes", type: "textarea", rows: 5, full: true, placeholder: "Record setting out, joints and layout." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record amendments or approvals required." }
      ]
    },
    {
      code: "F05",
      title: "Adhesive / Primer Check",
      note: "Primer and adhesive system verification.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "fixingType", label: "Primer / Adhesive Type", type: "text", placeholder: "Enter product / system" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Compliant", fail: "Non-Compliant" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record system compliance and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record replacement or corrective action." }
      ]
    },
    {
      code: "F06",
      title: "Tile Batch / Shade Review",
      note: "Batch, shade and blend consistency check.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "batchRef", label: "Batch / Shade Ref", type: "text", placeholder: "Enter batch / shade reference" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record visual blend and batch observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record segregation or replacement action." }
      ]
    },
    {
      code: "F07",
      title: "Level / Lippage Check",
      note: "Level and lippage compliance review.",
      fields: [
        { id: "date", label: "Check Date", type: "date" },
        { id: "inspector", label: "Checked By", type: "text", placeholder: "Enter name" },
        { id: "sampleLocation", label: "Check Location", type: "text", placeholder: "Area / point checked" },
        { id: "resultValue", label: "Measured Result", type: "text", placeholder: "Enter level / lippage result" },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Within Tolerance", fail: "Outside Tolerance" } },
        { id: "checks", label: "Check Notes", type: "textarea", rows: 5, full: true, placeholder: "Record lippage and level observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record corrective action or re-check." }
      ]
    },
    {
      code: "F08",
      title: "Installation Inspection",
      note: "Main installation QA record.",
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "installStage", label: "Installation Stage", type: "select", options: ["Started", "In Progress", "Complete"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Pass", fail: "Fail" } },
        { id: "checks", label: "Installation Notes", type: "textarea", rows: 5, full: true, placeholder: "Record tile installation and workmanship observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snagging or corrective action." }
      ]
    },
    {
      code: "F09",
      title: "Grout / Finish Review",
      note: "Grout, finish and detailing check.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "finishStatus", label: "Finish Quality", type: "select", options: ["Acceptable", "Minor Issue", "Defect Present"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record grout, finish and detail observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record remedial action." }
      ]
    },
    {
      code: "F10",
      title: "Protection Review",
      note: "Protection and access control after install.",
      fields: [
        { id: "date", label: "Review Date", type: "date" },
        { id: "inspector", label: "Reviewed By", type: "text", placeholder: "Enter name" },
        { id: "protectionStatus", label: "Protection Status", type: "select", options: ["In Place", "Damaged", "Not In Place"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "fail"], labels: { pass: "Acceptable", fail: "Issue Identified" } },
        { id: "checks", label: "Review Notes", type: "textarea", rows: 5, full: true, placeholder: "Record protection and traffic control." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record replacement or further protection action." }
      ]
    },
    {
      code: "F11",
      title: "Tile Installation Record",
      note: "Primary installation record.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Inspector / Supervisor", type: "text", placeholder: "Enter name" },
        { id: "installStage", label: "Installation Status", type: "select", options: ["Accepted", "Accepted with Comments", "Rejected"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold", "fail"], labels: { pass: "Accepted", hold: "Hold Point", fail: "Rejected" } },
        { id: "checks", label: "Installation Notes", type: "textarea", rows: 5, full: true, placeholder: "Record primary installation quality and observations." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record snag closure or approvals required." }
      ]
    },
    {
      code: "F12",
      title: "Final Inspection",
      note: "Completion and release.",
      hold: true,
      fields: [
        { id: "date", label: "Inspection Date", type: "date" },
        { id: "inspector", label: "Released By", type: "text", placeholder: "Enter name" },
        { id: "releaseStatus", label: "Release Status", type: "select", options: ["Released", "Released with Comments", "Not Released"] },
        { id: "status", label: "Result", type: "select", options: ["pass", "hold"], labels: { pass: "Released", hold: "Hold Point" } },
        { id: "checks", label: "Inspection Notes", type: "textarea", rows: 5, full: true, placeholder: "Record final inspection and release basis." },
        { id: "followUp", label: "Actions / Follow-Up", type: "textarea", rows: 4, full: true, placeholder: "Record residual actions or approvals." }
      ]
    }
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

function renderField(field) {
  const fullClass = field.full ? "full" : "";
  const value = getDefaultFieldValue(field);

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

  const dynamicWrap = document.getElementById("dynamicFormFields");
  dynamicWrap.innerHTML = (currentForm.fields || []).map(renderField).join("");

  showView("entry");
}

function getFieldValue(fieldId) {
  const el = document.getElementById(`dyn_${fieldId}`);
  return el ? el.value : "";
}

function submitEntry() {
  if (!currentProject || !currentScope || !currentLocation || !currentForm) return;

  const dynamicValues = {};
  (currentForm.fields || []).forEach(field => {
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
      title: `${currentForm.code} ${currentForm.title} issue`,
      assigned: currentUser,
      locationName: currentLocation.name,
      scope: currentScope,
      status: recordStatus,
      notes: dynamicValues.followUp || ""
    });
  }

  safeSave();
  alert("Record submitted.");
  selectProject(currentProject.id);
}

function init() {
  seedData();
  buildLoginUsers();
  showView("login");
}

init();