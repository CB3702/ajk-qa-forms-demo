
const SCREED_FORMS = [

  {id:'F00',title:'Benchmark Acceptance',hold:true,qitp:'PRC-05',freq:'First Pour Only',
   desc:'Benchmark pour inspection. Method, finish, thickness and curing accepted as project standard before production pours begin.',
   sections:[
    {title:'Pour Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'weather',label:'Weather',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
    ]},
    {title:'Material Confirmation',num:'02',fields:[
      {id:'cement_ok',label:'Cement grade matches approved submittal',type:'yn',hint:'BS EN 197-1',req:true},
      {id:'fibre_ok',label:'Fibre type & dosage confirmed',type:'yn',hint:'EN 14889-2',req:true},
      {id:'additive_ok',label:'Additive type confirmed',type:'yn',hint:'Approved TDS',req:true},
      {id:'water_ok',label:'Water source verified',type:'yn',hint:'BS EN 1008',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Verification',num:'03',fields:[
      {id:'substrate_prep',label:'Substrate prepared per F01',type:'yn',req:true},
      {id:'membrane_inst',label:'Membrane correctly installed',type:'yn',req:true},
      {id:'thickness_ctrl',label:'Thickness control demonstrated',type:'yn',req:true},
      {id:'compaction',label:'Compaction adequate',type:'yn',req:true},
      {id:'joint_form',label:'Joint formation correct',type:'yn',req:true},
      {id:'install_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Declaration',num:'04',fields:[
      {id:'outcome',label:'Benchmark Outcome',type:'select',opts:['Accepted – Production Pours May Proceed','Accepted Subject to Minor Rectification','Rejected – Further Benchmark Required'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_rep',label:'AJK Contracts / Design Rep',type:'text',req:true},
      {id:'mpx_pm',label:'MPX Package Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Additional Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F01',title:'Pre-Pour Checklist',hold:false,qitp:'SC-01 to SC-06',freq:'Every Pour',
   desc:'Complete before every screed pour. Covers area release, substrate inspection, slip membrane and insulation checks.',
   sections:[
    {title:'Pour Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'pour_num',label:'Pour Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'weather',label:'Weather',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Rep',type:'text',req:true},
    ]},
    {title:'Area Release',num:'02',fields:[
      {id:'area_release',label:'Formal Area Release Received',type:'yn',hint:'MPX Area Release Confirmed',req:true},
      {id:'no_trades',label:'No conflicting trades present',type:'yn',req:true},
      {id:'access_ok',label:'Access & logistics confirmed',type:'yn',req:true},
      {id:'area_comments',label:'Comments',type:'textarea',full:true},{id:'area_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Substrate Inspection',num:'03',fields:[
      {id:'sub_clean',label:'Substrate clean',type:'yn',hint:'Free of debris, laitance, contamination',req:true},
      {id:'no_water',label:'No standing water',type:'yn',req:true},
      {id:'levels_ok',label:'Levels within tolerance',type:'yn',req:true},
      {id:'services_ok',label:'Services pressure tested',type:'yn',hint:'Confirmed by others',req:true},
      {id:'upstands_ok',label:'Perimeter upstands correct',type:'yn',req:true},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},{id:'sub_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Slip Membrane',num:'04',fields:[
      {id:'mem_type',label:'Correct membrane type',type:'yn',req:true},{id:'mem_undamaged',label:'Membrane undamaged',type:'yn',req:true},
      {id:'laps_150',label:'Laps minimum 150mm',type:'yn',req:true},{id:'laps_taped',label:'Laps taped / sealed',type:'yn',req:true},
      {id:'upstands_mem',label:'Upstands maintained',type:'yn',req:true},
      {id:'mem_comments',label:'Comments',type:'textarea',full:true},{id:'mem_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Insulation',num:'05',fields:[
      {id:'ins_thickness',label:'Insulation thickness compliant',type:'yn',req:true},
      {id:'ins_condition',label:'Insulation condition good',type:'yn',req:true},
      {id:'buildup_ok',label:'Overall build-up depth achievable',type:'yn',req:true},
      {id:'ins_measured',label:'Measured Thickness (mm)',type:'number'},
      {id:'ins_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Supervisor Declaration',num:'06',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_name',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'overall_status',label:'Overall Form Status',type:'select',opts:['All Items Compliant','Minor Issues Noted — Works May Proceed','HOLD — Do Not Proceed'],req:true,full:true},
      {id:'notes',label:'Additional Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F02',title:'Batching Record Sheet',hold:false,qitp:'SC-07 to SC-09',freq:'Every Pour',
   desc:'Record each batch during the pour. Cement, sand, water, additive and fibre quantities. Deviations >±5% must be rejected.',
   sections:[
    {title:'Pour Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'pour_num',label:'Pour Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'weather',label:'Weather',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
      {id:'mix_ref',label:'Mix Design Reference',type:'text',req:true},{id:'strength_class',label:'Compressive Strength Class',type:'text',req:true},
      {id:'batch_supervisor',label:'Batching Supervisor',type:'text',req:true},
    ]},
    {title:'Material Verification',num:'02',fields:[
      {id:'cement_type',label:'Cement type verified',type:'yn',req:true},{id:'cement_batch',label:'Cement batch recorded',type:'yn',req:true},
      {id:'sand_source',label:'Sand source confirmed',type:'yn',req:true},{id:'additive_type',label:'Additive type confirmed',type:'yn',req:true},
      {id:'fibre_type',label:'Fibre type confirmed',type:'yn',req:true},{id:'water_source',label:'Water source verified',type:'yn',req:true},
    ]},
    {title:'Batch Records',num:'03',fields:[{id:'batch_table',label:'Batch Log',type:'batch_table',full:true}]},
    {title:'Non-Conformance Record',num:'04',fields:[{id:'nc_table',label:'Rejected Batches',type:'nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'qa_manager',label:'AJK QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Additional Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F03',title:'Thickness Level Log',hold:false,qitp:'SC-08, TC-01',freq:'Every Pour',
   desc:'Thickness and level checks during placement. Record per room. Non-conformances must be corrected before compaction.',
   sections:[
    {title:'Pour Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'pour_num',label:'Pour Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},{id:'design_thick',label:'Design Thickness (mm)',type:'number',req:true},
      {id:'datum_ref',label:'Datum Reference',type:'text',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Measurement Log',num:'02',fields:[{id:'thickness_table',label:'Thickness Measurements',type:'thickness_table',full:true}]},
    {title:'Non-Conformance',num:'03',fields:[{id:'nc_thick_table',label:'Non-Conformance Actions',type:'nc_thick_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F04',title:'SR Test Record',hold:true,qitp:'TC-02',freq:'On Completion',
   desc:'Surface regularity straightedge testing to BS 8204-1. HOLD POINT — area must pass SR class before floor finish installation.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'sr_class',label:'Specified SR Class',type:'select',opts:['SR1 (±3mm)','SR2 (±5mm)','SR3 (±10mm)'],req:true},
      {id:'max_dev',label:'Max Permitted Deviation (mm)',type:'number',req:true},{id:'tested_by',label:'Tested By',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Straightedge Test Log',num:'03',fields:[{id:'sr_table',label:'Test Readings',type:'sr_table',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'sr_nc_table',label:'Non-Conformance Actions',type:'sr_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall SR Test Result',type:'select',opts:['PASS — Area Compliant with Specified SR Class','FAIL — Rectification Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F05',title:'Moisture Test Report',hold:true,qitp:'TC-04',freq:'Pre-Finish',
   desc:'Hygrometer RH testing to BS 8203. HOLD POINT — screed must meet RH limit before floor finish installation proceeds.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'pour_date',label:'Date Screed Poured',type:'date',req:true},{id:'age_days',label:'Age of Screed (Days)',type:'number',req:true},
      {id:'rh_limit',label:'Specified RH Limit (%)',type:'number',req:true},{id:'finish_type',label:'Floor Finish Type',type:'text',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},{id:'hygro_serial',label:'Hygrometer Serial No.',type:'text',req:true},
      {id:'calib_ref',label:'Calibration Certificate Ref',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Hygrometer Test Log',num:'03',fields:[{id:'rh_table',label:'RH Test Readings',type:'rh_table',full:true}]},
    {title:'Non-Compliant Results',num:'04',fields:[{id:'rh_nc_table',label:'Non-Compliant Actions',type:'rh_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall Moisture Test Result',type:'select',opts:['PASS — All Areas Within RH Limit','FAIL — Remedial Drying Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F06',title:'Drop Hammer Test Record',hold:false,qitp:'TC-03',freq:'On Completion',
   desc:'BRE drop hammer ISCR testing to BS 8204-1 Annex D. Categories A (≤2mm), B (≤3mm), C (≤4mm).',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'pour_date',label:'Date Screed Poured',type:'date',req:true},{id:'age_days',label:'Age (Days)',type:'number',req:true},
      {id:'screed_cat',label:'Category',type:'select',opts:['A Heavy Duty (≤2mm)','B Medium Duty (≤3mm)','C Light Duty (≤4mm)'],req:true},
      {id:'min_iscr',label:'Min ISCR Requirement (mm)',type:'number',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},{id:'bre_serial',label:'BRE Tester Serial No.',type:'text',req:true},
      {id:'calib_ref',label:'Calibration Certificate Ref',type:'text',req:true},
    ]},
    {title:'Drop Hammer Test Log',num:'02',fields:[{id:'dh_table',label:'Test Readings',type:'dh_table',full:true}]},
    {title:'Declaration',num:'03',fields:[
      {id:'overall_result',label:'Overall Result',type:'select',opts:['PASS — All Results Within ISCR Limit','FAIL — Remedial Works Required'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F07',title:'Curing Access Log',hold:false,qitp:'SC-11',freq:'Daily During Cure',
   desc:'Daily curing monitoring. Ambient temperature, weather conditions, trafficking and curing protection integrity.',
   sections:[
    {title:'Pour Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'pour_date',label:'Date Screed Poured',type:'date',req:true},
      {id:'min_cure',label:'Min. Curing Period (days)',type:'number',req:true},{id:'cure_method',label:'Curing Method',type:'text',req:true},
      {id:'release_date',label:'Release Date Eligible',type:'date',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Daily Curing Log',num:'02',fields:[{id:'curing_table',label:'Daily Monitoring Records',type:'curing_table',full:true}]},
    {title:'Minimum Curing Confirmation',num:'03',fields:[
      {id:'req_days',label:'Required Minimum Days',type:'number',req:true},{id:'actual_days',label:'Actual Days Achieved',type:'number',req:true},
      {id:'cure_compliant',label:'Curing Period Compliant',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F08',title:'Post Pour Inspection',hold:false,qitp:'SC-10, PC-01',freq:'Every Pour',
   desc:'Visual inspection within 24–48 hours of pour. Surface uniformity, shrinkage cracks, edge integrity and defect log.',
   sections:[
    {title:'Inspection Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'pour_date',label:'Pour Date',type:'date',req:true},
      {id:'inspection_date',label:'Inspection Date',type:'date',req:true},{id:'hours_since',label:'Hours Since Pour',type:'number',req:true},
      {id:'inspector',label:'Inspector',type:'text',req:true},
      {id:'weather',label:'Weather During Pour',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
    ]},
    {title:'Visual Inspection Checklist',num:'02',fields:[
      {id:'surface_uniform',label:'Surface uniformity — no segregation',type:'yn',req:true},
      {id:'surface_laitance',label:'Surface laitance within tolerance',type:'yn',req:true},
      {id:'shrinkage_cracks',label:'Plastic shrinkage cracks within tolerance',type:'yn',req:true},
      {id:'edge_integrity',label:'Edge integrity — no edge breakdown',type:'yn',req:true},
      {id:'joint_formation',label:'Joint formation clean and controlled',type:'yn',req:true},
      {id:'no_contamination',label:'No surface contamination',type:'yn',req:true},
      {id:'visual_comments',label:'Comments',type:'textarea',full:true},{id:'visual_photo',label:'Photo References',type:'text',full:true},
    ]},
    {title:'Defect Log',num:'03',fields:[{id:'defect_table',label:'Defects Identified',type:'defect_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'outcome',label:'Inspection Outcome',type:'select',opts:['Compliant','Requires Remedial Works','Escalated to NCR'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F09',title:'Material Delivery Log',hold:false,qitp:'MC-01 to MC-05',freq:'Every Delivery',
   desc:'Log every material delivery. Material type, batch number, DoP/TDS check, storage location and traceability.',
   sections:[
    {title:'Delivery Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'supplier',label:'Supplier',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'logged_by',label:'Logged By',type:'text',req:true},
    ]},
    {title:'Delivery Log',num:'02',fields:[{id:'delivery_table',label:'Deliveries Received',type:'delivery_table',full:true}]},
    {title:'Rejected Materials',num:'03',fields:[{id:'rejected_table',label:'Rejected Materials',type:'rejected_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F10',title:'Calibration Register',hold:false,qitp:'PRC-04, TC-03, TC-04',freq:'Periodic',
   desc:'Equipment calibration status register. All hygrometers, BRE testers and inspection equipment must be in-date.',
   sections:[
    {title:'Register Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'maintained_by',label:'Maintained By',type:'text',req:true},{id:'review_date',label:'Last Review Date',type:'date',req:true},
    ]},
    {title:'Equipment Register',num:'02',fields:[{id:'equip_table',label:'Equipment',type:'equip_table',full:true}]},
    {title:'Out of Calibration Record',num:'03',fields:[{id:'oc_table',label:'Out of Calibration / Quarantine',type:'oc_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'qa_manager',label:'QA Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'all_calibrated',label:'All equipment in-date',type:'yn',req:true,full:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F11',title:'QA Pack Index',hold:true,qitp:'TC-05',freq:'On Completion',
   desc:'Confirms all F00–F10 records are complete and signed. All hold points closed. HOLD POINT before Aconex submission.',
   sections:[
    {title:'Pack Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',val:'TVC-AJK-EE-ZZ-QP-X-00007',req:true},
      {id:'pour_num',label:'Pour Number',type:'text',req:true},{id:'block',label:'Block / Plot',type:'text',req:true},
      {id:'level',label:'Level',type:'text',req:true},{id:'completion_date',label:'Date of Completion',type:'date',req:true},
      {id:'compiled_by',label:'Compiled By',type:'text',req:true},
    ]},
    {title:'Inspection Records Checklist',num:'02',fields:[
      {id:'f00_incl',label:'F00 Benchmark Acceptance (if applicable)',type:'yn'},
      {id:'f01_incl',label:'F01 Pre-Pour Checklist',type:'yn',req:true},
      {id:'f02_incl',label:'F02 Batching Record Sheet',type:'yn',req:true},
      {id:'f03_incl',label:'F03 Thickness Level Log',type:'yn',req:true},
      {id:'f04_incl',label:'F04 SR Test Record (HOLD)',type:'yn',req:true},
      {id:'f05_incl',label:'F05 Moisture Test Report (HOLD)',type:'yn',req:true},
      {id:'f06_incl',label:'F06 Drop Hammer Test',type:'yn'},
      {id:'f07_incl',label:'F07 Curing Access Log',type:'yn',req:true},
      {id:'f08_incl',label:'F08 Post Pour Inspection',type:'yn',req:true},
      {id:'f09_incl',label:'F09 Material Delivery Log',type:'yn',req:true},
      {id:'f10_incl',label:'F10 Calibration Register',type:'yn',req:true},
    ]},
    {title:'Hold Point Confirmation',num:'03',fields:[
      {id:'hp_prc05',label:'PRC-05 Benchmark Accepted',type:'yn',req:true},
      {id:'hp_tc02',label:'TC-02 Surface Regularity Compliant',type:'yn',req:true},
      {id:'hp_tc04',label:'TC-04 Moisture Criteria Achieved',type:'yn',req:true},
      {id:'hp_tc05',label:'TC-05 QA Pack Compiled',type:'yn',req:true},
    ]},
    {title:'Submission & Declaration',num:'04',fields:[
      {id:'aconex_mail',label:'Aconex Mail Type',type:'text',req:true},{id:'aconex_ref',label:'Aconex Reference No.',type:'text',req:true},
      {id:'submit_date',label:'Date Submitted',type:'date',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'contracts_mgr',label:'AJK Contracts Manager',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F12',title:'Area Handover Certificate',hold:true,qitp:'Handover',freq:'Final Handover',
   desc:'Formal area release to Multiplex. All QITP tests passed and hold points closed. Screed released for floor finish installation.',
   sections:[
    {title:'Handover Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',val:'TVC-AJK-EE-ZZ-QP-X-00007',req:true},
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'pour_nums',label:'Pour Numbers',type:'text',req:true},
      {id:'screed_complete',label:'Date of Screed Completion',type:'date',req:true},
      {id:'handover_date',label:'Date of Handover Inspection',type:'date',req:true},
    ]},
    {title:'Compliance Summary',num:'02',fields:[
      {id:'c_thickness',label:'F03 — Thickness ≥ Design Minimum',type:'yn',req:true},
      {id:'c_sr',label:'F04 — SR Class Achieved',type:'yn',req:true},
      {id:'c_moisture',label:'F05 — Moisture ≤ Specified RH',type:'yn',req:true},
      {id:'c_dh',label:'F06 — Drop Hammer Within ISCR Limit',type:'yn'},
      {id:'c_cure',label:'F07 — Minimum Curing Period Achieved',type:'yn',req:true},
      {id:'c_postpour',label:'F08 — No Unresolved Defects',type:'yn',req:true},
      {id:'c_qapack',label:'F11 — QA Pack Submitted via Aconex',type:'yn',req:true},
    ]},
    {title:'Area Condition',num:'03',fields:[
      {id:'no_contamination',label:'Surface free from contamination',type:'yn',req:true},
      {id:'no_water',label:'No standing water',type:'yn',req:true},
      {id:'no_cracking',label:'No visible cracking beyond tolerance',type:'yn',req:true},
      {id:'no_laitance',label:'No laitance beyond acceptable limits',type:'yn',req:true},
      {id:'no_loading',label:'No premature loading damage',type:'yn',req:true},
      {id:'suitable_finish',label:'Area suitable for floor finish installation',type:'yn',req:true},
    ]},
    {title:'Declaration',num:'04',fields:[
      {id:'outstanding',label:'Outstanding Items',type:'select',opts:['No outstanding defects','Minor snags listed in notes (non-structural)','NCRs raised and closed'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_qa',label:'AJK QA Manager',type:'text',req:true},
      {id:'mpx_rep',label:'MPX Representative',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Notes / Snag List',type:'textarea',full:true},
    ]},
  ]},
];

const CB_FORMS = [

  {id:'F00',title:'Benchmark Acceptance',hold:true,qitp:'PRC-05, PRC-06',freq:'First Install Only',
   desc:'Benchmark installation inspection. Material, method, level and walk test accepted as project standard before production installs begin.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'weather',label:'Weather',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
    ]},
    {title:'Material Confirmation',num:'02',fields:[
      {id:'batten_grade',label:'Batten species and grade match approved submittal',type:'yn',hint:'BS 8201 / Approved submittal',req:true},
      {id:'batten_mc',label:'Batten moisture content within specification',type:'yn',hint:'Typically 12–18% MC',req:true},
      {id:'cradle_type',label:'Cradle type and load rating confirmed',type:'yn',hint:'As per approved submittal',req:true},
      {id:'fixing_spec',label:'Fixing type, diameter and length confirmed',type:'yn',hint:'As per specification and drawings',req:true},
      {id:'dpm_ok',label:'DPM / acoustic layer confirmed (if applicable)',type:'yn',hint:'As per approved submittal'},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Verification',num:'03',fields:[
      {id:'substrate_prep',label:'Substrate prepared in accordance with F01',type:'yn',req:true},
      {id:'membrane_inst',label:'Membrane correctly installed',type:'yn',hint:'150mm laps / upstands',req:true},
      {id:'cradle_level',label:'Cradle levelling method demonstrated',type:'yn',hint:'Laser level / datum',req:true},
      {id:'batten_fix',label:'Batten fixing centres correct',type:'yn',hint:'As per specification',req:true},
      {id:'perimeter_gap',label:'Perimeter gap maintained',type:'yn',req:true},
      {id:'install_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Level Compliance',num:'04',fields:[
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},{id:'design_buildup',label:'Design Build-Up',type:'text',req:true},
      {id:'datum_ref',label:'Datum Reference Used',type:'text',req:true},
      {id:'cb_benchmark_level',label:'Level Check Summary',type:'cb_benchmark_level',full:true},
    ]},
    {title:'Surface Regularity & Walk Test',num:'05',fields:[
      {id:'sr_class',label:'Specified SR Class',type:'text',req:true},{id:'sr_deviation',label:'Permitted Deviation (mm)',type:'number',req:true},
      {id:'cb_benchmark_sr',label:'SR Test Log',type:'cb_benchmark_sr',full:true},
      {id:'walk_test_ok',label:'Walk test — no squeaking or movement',type:'yn',hint:'No movement, rocking or squeaking',req:true},
      {id:'walk_comments',label:'Walk Test Comments',type:'textarea',full:true},
    ]},
    {title:'Declaration',num:'06',fields:[
      {id:'outcome',label:'Benchmark Outcome',type:'select',opts:['Accepted – Production Installs May Proceed','Accepted Subject to Minor Rectification','Rejected – Further Benchmark Required'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_rep',label:'AJK Contracts / Design Rep',type:'text',req:true},
      {id:'mpx_pm',label:'MPX Package Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Additional Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F01',title:'Pre-Installation Checklist',hold:false,qitp:'PRC-06, MC-03, SC-01 to SC-03',freq:'Every Installation',
   desc:'Complete before every cradle & batten installation. Area release, substrate, membrane and material on-site checks.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Apartment / Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'weather',label:'Weather Conditions',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Rep',type:'text',req:true},
    ]},
    {title:'Area Release',num:'02',fields:[
      {id:'area_release',label:'Formal Area Release Received',type:'yn',hint:'MPX Area Release Confirmed',req:true},
      {id:'no_trades',label:'No conflicting trades present',type:'yn',req:true},
      {id:'access_ok',label:'Access & logistics confirmed',type:'yn',hint:'Delivery and access route agreed',req:true},
      {id:'area_comments',label:'Comments',type:'textarea',full:true},{id:'area_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Substrate Inspection',num:'03',fields:[
      {id:'sub_clean',label:'Substrate clean',type:'yn',hint:'Free of debris, laitance, contamination',req:true},
      {id:'no_water',label:'No standing water',type:'yn',req:true},
      {id:'sub_levels',label:'Substrate levels within tolerance',type:'yn',hint:'Falls / build-up achievable for design FFL',req:true},
      {id:'services_ok',label:'Services pressure tested',type:'yn',hint:'Confirmed by others',req:true},
      {id:'perimeter_ok',label:'Perimeter zone clear',type:'yn',hint:'Perimeter gap achievable as specified',req:true},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},{id:'sub_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Membrane / Acoustic Layer',num:'04',fields:[
      {id:'mem_type',label:'Correct membrane type',type:'yn',req:true},{id:'mem_undamaged',label:'Membrane undamaged',type:'yn',req:true},
      {id:'laps_150',label:'Laps minimum 150mm',type:'yn',req:true},{id:'acoustic_ok',label:'Acoustic layer undamaged (if applicable)',type:'yn'},
      {id:'upstands_ok',label:'Upstands maintained',type:'yn',req:true},
      {id:'mem_comments',label:'Comments',type:'textarea',full:true},{id:'mem_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Materials On Site',num:'05',fields:[
      {id:'cradles_ok',label:'Cradles on site — correct type',type:'yn',hint:'As per approved submittal',req:true},
      {id:'battens_ok',label:'Battens on site — correct species/grade',type:'yn',hint:'Species, grade, MC confirmed',req:true},
      {id:'fixings_ok',label:'Fixings on site — correct specification',type:'yn',hint:'Type, diameter, length confirmed',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Supervisor Declaration',num:'06',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_name',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'overall_status',label:'Overall Form Status',type:'select',opts:['All Items Compliant','Minor Issues Noted — Works May Proceed','HOLD — Do Not Proceed'],req:true,full:true},
      {id:'notes',label:'Additional Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F02',title:'Material & Installation Record',hold:false,qitp:'MC-01, MC-02, MC-04, SC-04, SC-05',freq:'Every Installation',
   desc:'Material traceability and installation record. Cradle centres, fixing centres, batten MC, FFL achieved and SR checks per area.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'weather',label:'Weather',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
      {id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},{id:'submittal_ref',label:'Approved Technical Submittal Ref',type:'text',req:true},
      {id:'supervisor',label:'Installation Supervisor',type:'text',req:true},
    ]},
    {title:'Material Verification',num:'02',fields:[
      {id:'batten_grade',label:'Batten species and grade',type:'yn',hint:'BS 8201 / Approved Submittal',req:true},
      {id:'batten_batch',label:'Batten batch / delivery ref recorded',type:'yn',req:true},
      {id:'cradle_type',label:'Cradle type and batch confirmed',type:'yn',req:true},
      {id:'fixing_spec',label:'Fixing type and specification confirmed',type:'yn',req:true},
      {id:'dpm_ok',label:'DPM / acoustic layer confirmed (if applicable)',type:'yn'},
      {id:'mc_check',label:'Moisture content check (battens)',type:'yn',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Record',num:'03',fields:[{id:'cb_install_rec',label:'Installation Log per Area',type:'cb_install_rec',full:true}]},
    {title:'Non-Conformance Record',num:'04',fields:[{id:'cb_install_nc',label:'Non-Conformances',type:'cb_install_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'walk_ok',label:'Walk test completed — no squeaking or movement',type:'yn',req:true},
      {id:'fixings_flush',label:'All fixings driven flush',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F03',title:'Level Log',hold:false,qitp:'SC-06, TC-01, TC-02',freq:'Every Installation',
   desc:'Level checks during cradle & batten installation. Record per room. Non-conformances must be corrected before proceeding.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},{id:'design_thick',label:'Design Cradle & Batten Thickness',type:'text',req:true},
      {id:'datum_ref',label:'Datum Reference Used',type:'text',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Level Measurement Log',num:'03',fields:[{id:'level_check',label:'Level Measurements',type:'level_check',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'level_nc',label:'Non-Conformance Actions',type:'level_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F04',title:'SR Test Record',hold:true,qitp:'SC-07, TC-01',freq:'On Completion',
   desc:'Surface regularity straightedge testing to BS 8201. HOLD POINT — area must pass SR class before floor finish installation.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'sr_class',label:'Specified SR Class',type:'select',opts:['SR1 (±3mm)','SR2 (±5mm)','SR3 (±10mm)'],req:true},
      {id:'max_dev',label:'Max Permitted Deviation (mm)',type:'number',req:true},{id:'tested_by',label:'Tested By',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_sr_summary',label:'Room Summary',type:'room_sr_summary',full:true}]},
    {title:'Straightedge Test Log',num:'03',fields:[{id:'sr_table',label:'Test Readings',type:'sr_table',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'sr_nc_table',label:'Non-Conformance Actions',type:'sr_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall SR Test Result',type:'select',opts:['PASS — Area Compliant with Specified SR Class','FAIL — Rectification Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F05',title:'Moisture Test Report',hold:true,qitp:'TC-03',freq:'Pre-Finish',
   desc:'Moisture content testing to BS 8203. HOLD POINT — batten MC must be within specified limit before floor finish proceeds.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'install_date',label:'Date Cradle & Batten Installed',type:'date',req:true},
      {id:'age_days',label:'Age of C&B (Days)',type:'number',req:true},
      {id:'mc_limit',label:'Specified MC Limit (%)',type:'number',req:true},{id:'finish_type',label:'Floor Finish Type',type:'text',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},{id:'meter_serial',label:'Moisture Meter Serial No.',type:'text',req:true},
      {id:'calib_ref',label:'Calibration Certificate Ref',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_mc_summary',label:'Room Summary',type:'room_mc_summary',full:true}]},
    {title:'Moisture Content Test Log',num:'03',fields:[{id:'mc_table',label:'MC Test Readings',type:'mc_table',full:true}]},
    {title:'Non-Compliant Results',num:'04',fields:[{id:'mc_nc_table',label:'Non-Compliant Actions',type:'mc_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall Moisture Test Result',type:'select',opts:['PASS — All Areas Within MC Limit','FAIL — Remedial Drying Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F06',title:'Walk Test / Stability Record',hold:false,qitp:'TC-04',freq:'On Completion',
   desc:'Walk test and stability checks. No squeaking, no movement, no rocking cradles. Tests to QITP TC-04.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'install_date',label:'Date C&B Installed',type:'date',req:true},
      {id:'age_days',label:'Age (Days)',type:'number',req:true},
      {id:'cb_cat',label:'Specified C&B Category',type:'select',opts:['A Heavy Duty','B Medium Duty','C Light Duty'],req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_walk_summary',label:'Room Summary',type:'room_walk_summary',full:true}]},
    {title:'Walk Test Log',num:'03',fields:[{id:'walk_table',label:'Walk Test Readings',type:'walk_table',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'walk_nc',label:'Non-Conformance / Remedial Record',type:'walk_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall Walk Test Result',type:'select',opts:['PASS — No Squeaking or Movement','FAIL — Remedial Works Required'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F07',title:'Protection Log',hold:false,qitp:'SC-09, TC-04',freq:'Daily During Protection',
   desc:'Daily monitoring of protection period. Trafficking, batten condition, cradle stability. Complete every day during protection period.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Date C&B Installed',type:'date',req:true},
      {id:'min_protect',label:'Specified Minimum Protection Period',type:'text',req:true},
      {id:'protect_method',label:'Protection Method',type:'text',req:true},
      {id:'release_date',label:'Release Date Eligible',type:'date',req:true},
      {id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Daily Protection Monitoring Log',num:'02',fields:[{id:'protection_daily',label:'Daily Monitoring Records',type:'protection_daily',full:true}]},
    {title:'Premature Loading Check',num:'03',fields:[{id:'premature_check',label:'Premature Loading Records',type:'premature_check',full:true}]},
    {title:'Minimum Protection Confirmation',num:'04',fields:[
      {id:'req_period',label:'Required Minimum Period',type:'text',req:true},{id:'actual_period',label:'Actual Period Achieved',type:'text',req:true},
      {id:'period_compliant',label:'Protection Period Compliant',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F08',title:'Post Installation Inspection',hold:false,qitp:'SC-10, PC-01',freq:'Every Installation',
   desc:'Visual inspection within 24–48 hours of installation. Batten condition, cradle condition, fixings, membrane and level check.',
   sections:[
    {title:'Inspection Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Installation Date',type:'date',req:true},
      {id:'inspection_date',label:'Inspection Date',type:'date',req:true},{id:'hours_since',label:'Hours Since Installation',type:'number',req:true},
      {id:'inspector',label:'Inspector',type:'text',req:true},
      {id:'weather',label:'Weather During Installation',type:'select',opts:['Dry','Cloudy','Light Rain','Heavy Rain','Cold (<5°C)','Hot (>25°C)'],req:true},
    ]},
    {title:'Visual Inspection Checklist',num:'02',fields:[
      {id:'batten_ok',label:'Batten condition — no splits, damage or defects',type:'yn',req:true},
      {id:'cradle_ok',label:'Cradle condition — all stable and undamaged',type:'yn',req:true},
      {id:'fixings_ok',label:'Fixings condition — flush, none missing',type:'yn',req:true},
      {id:'membrane_ok',label:'Membrane integrity (if applicable)',type:'yn'},
      {id:'perimeter_ok',label:'Perimeter gap maintained as specified',type:'yn',req:true},
      {id:'protection_ok',label:'Protection in place — signage and barriers installed',type:'yn',req:true},
      {id:'visual_comments',label:'Comments',type:'textarea',full:true},{id:'visual_photo',label:'Photo References',type:'text',full:true},
    ]},
    {title:'Level Check',num:'03',fields:[{id:'post_level_check',label:'Level Check Records',type:'post_level_check',full:true}]},
    {title:'Defect Log',num:'04',fields:[{id:'defect_table',label:'Defects Identified',type:'defect_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'outcome',label:'Inspection Outcome',type:'select',opts:['Compliant','Requires Remedial Works','Escalated to NCR'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F09',title:'Material Delivery Log',hold:false,qitp:'MC-01, MC-02, MC-03, MC-07, MC-08',freq:'Every Delivery',
   desc:'Log every material delivery. Traceability from delivery to installation area maintained for all battens, cradles and fixings.',
   sections:[
    {title:'Delivery Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'supplier',label:'Supplier',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'logged_by',label:'Logged By',type:'text',req:true},
    ]},
    {title:'Delivery Log',num:'02',fields:[{id:'delivery_table',label:'Deliveries Received',type:'delivery_table',full:true}]},
    {title:'Batch Allocation to Installation Areas',num:'03',fields:[{id:'batch_alloc',label:'Batch Allocation',type:'batch_alloc',full:true}]},
    {title:'Rejected Materials',num:'04',fields:[{id:'rejected_table',label:'Rejected Materials',type:'rejected_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F10',title:'Calibration Register',hold:false,qitp:'PRC-04, TC-03, TC-04',freq:'Periodic',
   desc:'Equipment calibration register. All moisture meters, straightedges and test equipment must be within certification period.',
   sections:[
    {title:'Register Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'maintained_by',label:'Maintained By',type:'text',req:true},{id:'review_date',label:'Last Review Date',type:'date',req:true},
    ]},
    {title:'Equipment Register',num:'02',fields:[{id:'equip_table',label:'Equipment',type:'equip_table',full:true}]},
    {title:'Out of Calibration Record',num:'03',fields:[{id:'oc_table',label:'Out of Calibration / Quarantine',type:'oc_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'qa_manager',label:'QA Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'all_calibrated',label:'All equipment calibrated and in-date',type:'yn',req:true,full:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F11',title:'QA Pack Index',hold:true,qitp:'TC-05',freq:'On Completion',
   desc:'Confirms all F00–F10 records are complete and signed. All hold points closed. HOLD POINT before Aconex submission.',
   sections:[
    {title:'Pack Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',val:'TVC-AJK-EE-ZZ-QP-X-43010',req:true},
      {id:'install_num',label:'Installation Reference',type:'text',req:true},{id:'block',label:'Block / Plot',type:'text',req:true},
      {id:'level',label:'Level',type:'text',req:true},{id:'completion_date',label:'Date of Completion',type:'date',req:true},
      {id:'compiled_by',label:'Compiled By',type:'text',req:true},
    ]},
    {title:'Inspection Records Checklist',num:'02',fields:[
      {id:'f00_incl',label:'F00 Benchmark Acceptance (if applicable)',type:'yn'},
      {id:'f01_incl',label:'F01 Pre-Installation Checklist',type:'yn',req:true},
      {id:'f02_incl',label:'F02 Material and Installation Record',type:'yn',req:true},
      {id:'f03_incl',label:'F03 Level Log',type:'yn',req:true},
      {id:'f04_incl',label:'F04 SR Test Record (HOLD)',type:'yn',req:true},
      {id:'f05_incl',label:'F05 Moisture Test Report (HOLD)',type:'yn',req:true},
      {id:'f06_incl',label:'F06 Walk Test / Stability Record',type:'yn',req:true},
      {id:'f07_incl',label:'F07 Protection Log',type:'yn',req:true},
      {id:'f08_incl',label:'F08 Post Installation Inspection',type:'yn',req:true},
      {id:'f09_incl',label:'F09 Material Delivery Log',type:'yn',req:true},
      {id:'f10_incl',label:'F10 Calibration Register',type:'yn',req:true},
    ]},
    {title:'Hold Point Confirmation',num:'03',fields:[
      {id:'hp_prc05',label:'PRC-05 Benchmark Accepted',type:'yn',req:true},
      {id:'hp_sc07',label:'SC-07 Surface Regularity Compliant',type:'yn',req:true},
      {id:'hp_tc03',label:'TC-03 Batten MC Within Specification',type:'yn',req:true},
      {id:'hp_tc04',label:'TC-04 Walk Test Completed',type:'yn',req:true},
      {id:'hp_tc05',label:'TC-05 QA Pack Compiled',type:'yn',req:true},
    ]},
    {title:'Material Traceability Confirmation',num:'04',fields:[
      {id:'del_logged',label:'All delivery tickets logged',type:'yn',req:true},
      {id:'batch_trace',label:'Batch numbers traceable to installation area',type:'yn',req:true},
      {id:'dop_incl',label:'DoP / TDS included in pack',type:'yn',req:true},
      {id:'calib_incl',label:'Calibration certificates included',type:'yn',req:true},
      {id:'ncr_incl',label:'NCRs (if any) attached',type:'yn'},
    ]},
    {title:'Submission & Declaration',num:'05',fields:[
      {id:'aconex_mail',label:'Aconex Mail Type',type:'text',req:true},{id:'aconex_ref',label:'Aconex Reference No.',type:'text',req:true},
      {id:'submit_date',label:'Date Submitted',type:'date',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'contracts_mgr',label:'AJK Contracts Manager',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F12',title:'Area Handover Certificate',hold:true,qitp:'Handover',freq:'Final Handover',
   desc:'Formal area release to Multiplex. All QITP tests passed and hold points closed. C&B released for floor finish installation.',
   sections:[
    {title:'Handover Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',val:'TVC-AJK-EE-ZZ-QP-X-43010',req:true},
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'install_nums',label:'Installation Numbers',type:'text',req:true},
      {id:'cb_complete',label:'Date of C&B Completion',type:'date',req:true},
      {id:'handover_date',label:'Date of Handover Inspection',type:'date',req:true},
    ]},
    {title:'Compliance Summary',num:'02',fields:[
      {id:'c_level',label:'F03 — Level Verification FFL Within Tolerance',type:'yn',req:true},
      {id:'c_sr',label:'F04 — Surface Regularity SR Class Achieved',type:'yn',req:true},
      {id:'c_mc',label:'F05 — Batten Moisture Content Within MC Limit',type:'yn',req:true},
      {id:'c_walk',label:'F06 — Walk Test No Squeak or Movement',type:'yn',req:true},
      {id:'c_protect',label:'F07 — Protection Period Achieved',type:'yn',req:true},
      {id:'c_postinstall',label:'F08 — No Unresolved Defects',type:'yn',req:true},
      {id:'c_qapack',label:'F11 — QA Record Pack Submitted via Aconex',type:'yn',req:true},
    ]},
    {title:'Area Condition at Handover',num:'03',fields:[
      {id:'no_contamination',label:'Surface free from contamination',type:'yn',req:true},
      {id:'no_water',label:'No standing water',type:'yn',req:true},
      {id:'no_batten_damage',label:'No visible batten damage',type:'yn',req:true},
      {id:'no_loose_fixings',label:'No loose or missing fixings',type:'yn',req:true},
      {id:'no_loading_damage',label:'No premature loading damage observed',type:'yn',req:true},
      {id:'suitable_finish',label:'Area suitable for floor finish installation',type:'yn',req:true},
    ]},
    {title:'Declaration',num:'04',fields:[
      {id:'outstanding',label:'Outstanding Items',type:'select',opts:['No outstanding defects','Minor snags listed in notes (non-structural)','NCRs raised and closed'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_qa',label:'AJK QA Manager',type:'text',req:true},
      {id:'mpx_rep',label:'MPX Representative',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Notes / Snag List',type:'textarea',full:true},
    ]},
  ]},
];

const RAF_FORMS = [

  {id:'F00',title:'Benchmark Acceptance',hold:true,qitp:'PRC-05',freq:'First Install Only',
   desc:'Benchmark panel and pedestal installation. Load class, level, SR and walk test accepted as project standard before production installation.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
    ]},
    {title:'Material Confirmation',num:'02',fields:[
      {id:'panel_type',label:'Panel type and load class confirmed',type:'yn',hint:'BS EN 12825 Class A–F / Approved submittal',req:true},
      {id:'ped_type',label:'Pedestal type and load rating confirmed',type:'yn',hint:'As per approved submittal',req:true},
      {id:'stringer_ok',label:'Stringer / cable management confirmed (if applicable)',type:'yn'},
      {id:'finish_ok',label:'Panel finish type confirmed',type:'yn',hint:'Approved submittal',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Verification',num:'03',fields:[
      {id:'substrate_prep',label:'Substrate prepared per F01',type:'yn',req:true},
      {id:'ped_spacing',label:'Pedestal spacing matches approved drawings',type:'yn',req:true},
      {id:'ped_fixed',label:'Pedestal base plates fixed and torqued',type:'yn',req:true},
      {id:'panel_seated',label:'Panels correctly seated and locked',type:'yn',req:true},
      {id:'cut_supported',label:'Cut panels supported on additional pedestals',type:'yn',req:true},
      {id:'access_ok',label:'Access panel locations correct',type:'yn'},
      {id:'install_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Level & SR Compliance',num:'04',fields:[
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},{id:'nominal_void',label:'Nominal Void Height (mm)',type:'number',req:true},
      {id:'datum_ref',label:'Datum Reference',type:'text',req:true},
      {id:'raf_benchmark_level',label:'Level Check Summary',type:'raf_benchmark_level',full:true},
      {id:'sr_class',label:'Specified SR Class',type:'select',opts:['SR1 (±3mm)','SR2 (±5mm)','SR3 (±10mm)'],req:true},
      {id:'raf_benchmark_sr',label:'SR Test Summary',type:'raf_benchmark_sr',full:true},
    ]},
    {title:'Load & Walk Test',num:'05',fields:[
      {id:'load_class',label:'Specified Load Class (BS EN 12825)',type:'select',opts:['Class 1 (1.5 kN/m²)','Class 2 (2.0 kN/m²)','Class 3 (3.0 kN/m²)','Class 4 (4.5 kN/m²)','Class 5 (7.5 kN/m²)','Class 6 (12.0 kN/m²)'],req:true,full:true},
      {id:'load_test_ok',label:'Load test passed for specified class',type:'yn',req:true},
      {id:'walk_test_ok',label:'Walk test — no rocking, rattling or deflection >3mm',type:'yn',req:true},
      {id:'test_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Declaration',num:'06',fields:[
      {id:'outcome',label:'Benchmark Outcome',type:'select',opts:['Accepted – Production Installs May Proceed','Accepted Subject to Minor Rectification','Rejected – Further Benchmark Required'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_pm',label:'MPX Package Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F01',title:'Pre-Installation Checklist',hold:false,qitp:'PRC-06, SC-01 to SC-03',freq:'Every Installation',
   desc:'Complete before every RAF installation. Substrate integrity, underfloor services sign-off, area release and material checks.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Rep',type:'text',req:true},
    ]},
    {title:'Area Release',num:'02',fields:[
      {id:'area_release',label:'Formal Area Release Received',type:'yn',req:true},
      {id:'no_trades',label:'No conflicting trades present',type:'yn',req:true},
      {id:'services_clear',label:'Underfloor services installed and signed off by M&E',type:'yn',req:true},
      {id:'access_ok',label:'Access and logistics confirmed',type:'yn',req:true},
      {id:'area_comments',label:'Comments',type:'textarea',full:true},{id:'area_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Substrate Inspection',num:'03',fields:[
      {id:'sub_clean',label:'Substrate clean and free of debris',type:'yn',req:true},
      {id:'no_damp',label:'No dampness or standing water',type:'yn',req:true},
      {id:'sub_level',label:'Substrate levels within tolerance for void height',type:'yn',req:true},
      {id:'sub_strength',label:'Substrate structural capacity confirmed',type:'yn',hint:'BS 6399-1 / structural engineer confirmation',req:true},
      {id:'dpc_ok',label:'DPC / vapour barrier in place (if specified)',type:'yn'},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},{id:'sub_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Materials On Site',num:'04',fields:[
      {id:'panels_ok',label:'Panels on site — correct type / load class',type:'yn',req:true},
      {id:'peds_ok',label:'Pedestals on site — correct type / height range',type:'yn',req:true},
      {id:'stringers_ok',label:'Stringers on site (if applicable)',type:'yn'},
      {id:'edge_trims_ok',label:'Edge trims and ramps on site (if applicable)',type:'yn'},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Supervisor Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_name',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'overall_status',label:'Overall Form Status',type:'select',opts:['All Items Compliant','Minor Issues Noted — Works May Proceed','HOLD — Do Not Proceed'],req:true,full:true},
      {id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F02',title:'Material & Installation Record',hold:false,qitp:'MC-01, SC-04, SC-05',freq:'Every Installation',
   desc:'Panel, pedestal and stringer installation record. Heights, seating, SR checks and batch traceability per area.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Install Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'submittal_ref',label:'Approved Technical Submittal Ref',type:'text',req:true},
      {id:'supervisor',label:'Installation Supervisor',type:'text',req:true},
    ]},
    {title:'Material Verification',num:'02',fields:[
      {id:'panel_batch',label:'Panel batch / delivery ref recorded',type:'yn',req:true},
      {id:'panel_class_ok',label:'Panel load class matches specification',type:'yn',hint:'BS EN 12825',req:true},
      {id:'ped_batch',label:'Pedestal batch recorded',type:'yn',req:true},
      {id:'ped_load_ok',label:'Pedestal load rating confirmed',type:'yn',req:true},
      {id:'finish_match',label:'Panel finish matches approved submittal',type:'yn',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Record',num:'03',fields:[{id:'raf_install_rec',label:'Installation Log per Area',type:'raf_install_rec',full:true}]},
    {title:'Non-Conformance Record',num:'04',fields:[{id:'raf_install_nc',label:'Non-Conformances',type:'raf_install_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'all_locked',label:'All panels correctly seated and locked',type:'yn',req:true},
      {id:'cut_supported',label:'All cut panels supported on extra pedestals',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F03',title:'Level & Void Height Log',hold:false,qitp:'SC-06, TC-01',freq:'Every Installation',
   desc:'FFL and void height checks throughout installation. Pedestal adjustments and level compliance recorded per room. Ref BS EN 12825.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Install Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},{id:'nominal_void',label:'Nominal Void Height (mm)',type:'number',req:true},
      {id:'min_void',label:'Min. Permitted Void Height (mm)',type:'number',req:true},
      {id:'datum_ref',label:'Datum Reference',type:'text',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Level & Void Height Log',num:'03',fields:[{id:'raf_level_log',label:'Level Measurements',type:'raf_level_log',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'level_nc',label:'Non-Conformance Actions',type:'level_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F04',title:'SR Test Record',hold:true,qitp:'TC-02',freq:'On Completion',
   desc:'Surface regularity straightedge testing to BS EN 12825. HOLD POINT — area must pass SR class before floor finish or occupation.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'sr_class',label:'Specified SR Class',type:'select',opts:['SR1 (±3mm)','SR2 (±5mm)','SR3 (±10mm)'],req:true},
      {id:'max_dev',label:'Max Permitted Deviation (mm)',type:'number',req:true},
      {id:'load_class',label:'Panel Load Class',type:'text',req:true},{id:'tested_by',label:'Tested By',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_sr_summary',label:'Room Summary',type:'room_sr_summary',full:true}]},
    {title:'Straightedge Test Log',num:'03',fields:[{id:'sr_table',label:'Test Readings',type:'sr_table',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'sr_nc_table',label:'Non-Conformance Actions',type:'sr_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall SR Test Result',type:'select',opts:['PASS — Area Compliant with Specified SR Class','FAIL — Rectification Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F05',title:'Load Test Record',hold:true,qitp:'TC-03',freq:'On Completion',
   desc:'Point load and UDL testing to BS EN 12825. HOLD POINT — floor must pass specified load class before handover to principal contractor.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'load_class',label:'Specified Load Class',type:'select',opts:['Class 1 (1.5 kN/m²)','Class 2 (2.0 kN/m²)','Class 3 (3.0 kN/m²)','Class 4 (4.5 kN/m²)','Class 5 (7.5 kN/m²)','Class 6 (12.0 kN/m²)'],req:true,full:true},
      {id:'point_load',label:'Specified Point Load (kN)',type:'number',req:true},
      {id:'udl',label:'Specified UDL (kN/m²)',type:'number',req:true},
      {id:'max_deflect',label:'Max Permitted Deflection (mm)',type:'number',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},{id:'equip_ref',label:'Test Equipment Reference',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Load Test Log',num:'03',fields:[{id:'raf_load_log',label:'Load Test Readings',type:'raf_load_log',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'raf_load_nc',label:'Non-Conformance Actions',type:'raf_load_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall Load Test Result',type:'select',opts:['PASS — All Areas Meet Specified Load Class','FAIL — Remedial Works Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F06',title:'Panel Integrity & Walk Test',hold:false,qitp:'TC-04',freq:'On Completion',
   desc:'Panel seating, locking, deflection and audible walk test to BS EN 12825. No rocking, rattling or excessive deflection permitted.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'install_date',label:'Date Installed',type:'date',req:true},{id:'tested_by',label:'Tested By',type:'text',req:true},
      {id:'load_class',label:'Panel Load Class',type:'text',req:true},{id:'max_deflect',label:'Max Permitted Deflection (mm)',type:'number',req:true,hint:'Typically 3mm under point load'},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_walk_summary',label:'Room Summary',type:'room_walk_summary',full:true}]},
    {title:'Walk Test Log',num:'03',fields:[{id:'raf_walk_log',label:'Panel Integrity & Walk Test Records',type:'raf_walk_log',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'walk_nc',label:'Non-Conformance / Remedial Record',type:'walk_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall Walk Test Result',type:'select',opts:['PASS — No Rocking, Rattling or Excessive Deflection','FAIL — Remedial Works Required'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F07',title:'Protection Log',hold:false,qitp:'SC-09',freq:'Daily During Protection',
   desc:'Daily monitoring during protection period. Trafficking, panel condition and protection integrity recorded.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Date Installed',type:'date',req:true},
      {id:'protect_method',label:'Protection Method',type:'text',req:true},{id:'release_date',label:'Release Date Eligible',type:'date',req:true},
      {id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Daily Protection Log',num:'02',fields:[{id:'protection_daily',label:'Daily Monitoring Records',type:'protection_daily',full:true}]},
    {title:'Premature Loading Check',num:'03',fields:[{id:'premature_check',label:'Premature Loading Records',type:'premature_check',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'period_compliant',label:'Protection Period Compliant',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F08',title:'Post Installation Inspection',hold:false,qitp:'SC-10, PC-01',freq:'Every Installation',
   desc:'Post-installation visual inspection. Panel condition, pedestal stability, edge trims, access panels and defect log.',
   sections:[
    {title:'Inspection Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Installation Date',type:'date',req:true},
      {id:'inspection_date',label:'Inspection Date',type:'date',req:true},{id:'inspector',label:'Inspector',type:'text',req:true},
    ]},
    {title:'Visual Inspection Checklist',num:'02',fields:[
      {id:'panels_undamaged',label:'Panel surfaces clean and undamaged',type:'yn',req:true},
      {id:'panels_seated',label:'All panels correctly seated — no proud edges',type:'yn',req:true},
      {id:'panels_locked',label:'All panels locked / secured',type:'yn',req:true},
      {id:'peds_stable',label:'All pedestals stable — no rocking',type:'yn',req:true},
      {id:'edge_trims_ok',label:'Edge trims correctly installed',type:'yn'},
      {id:'access_ok',label:'Access panels operational and correctly located',type:'yn'},
      {id:'void_clear',label:'Underfloor void clear of debris',type:'yn',req:true},
      {id:'protection_ok',label:'Protection and signage in place',type:'yn',req:true},
      {id:'visual_comments',label:'Comments',type:'textarea',full:true},{id:'visual_photo',label:'Photo References',type:'text',full:true},
    ]},
    {title:'Defect Log',num:'03',fields:[{id:'defect_table',label:'Defects Identified',type:'defect_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'outcome',label:'Inspection Outcome',type:'select',opts:['Compliant','Requires Remedial Works','Escalated to NCR'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F09',title:'Material Delivery Log',hold:false,qitp:'MC-01 to MC-05',freq:'Every Delivery',
   desc:'Log all panel, pedestal, stringer and accessory deliveries. DoP/TDS confirmation, batch traceability and storage records.',
   sections:[
    {title:'Delivery Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'supplier',label:'Supplier',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'logged_by',label:'Logged By',type:'text',req:true},
    ]},
    {title:'Delivery Log',num:'02',fields:[{id:'delivery_table',label:'Deliveries Received',type:'delivery_table',full:true}]},
    {title:'Batch Allocation',num:'03',fields:[{id:'batch_alloc',label:'Batch Allocation to Installation Areas',type:'batch_alloc',full:true}]},
    {title:'Rejected Materials',num:'04',fields:[{id:'rejected_table',label:'Rejected Materials',type:'rejected_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F10',title:'Calibration Register',hold:false,qitp:'PRC-04, TC-02, TC-03',freq:'Periodic',
   desc:'Calibration register for levels, straightedges, load test equipment and all measurement instruments used in RAF installation.',
   sections:[
    {title:'Register Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'maintained_by',label:'Maintained By',type:'text',req:true},{id:'review_date',label:'Last Review Date',type:'date',req:true},
    ]},
    {title:'Equipment Register',num:'02',fields:[{id:'equip_table',label:'Equipment',type:'equip_table',full:true}]},
    {title:'Out of Calibration Record',num:'03',fields:[{id:'oc_table',label:'Out of Calibration / Quarantine',type:'oc_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'qa_manager',label:'QA Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'all_calibrated',label:'All equipment calibrated and in-date',type:'yn',req:true,full:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F11',title:'QA Pack Index',hold:true,qitp:'TC-05',freq:'On Completion',
   desc:'Confirms all F00–F10 records complete and signed. All hold points closed. HOLD POINT before Aconex submission.',
   sections:[
    {title:'Pack Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',req:true},
      {id:'install_num',label:'Installation Reference',type:'text',req:true},{id:'block',label:'Block / Plot',type:'text',req:true},
      {id:'level',label:'Level',type:'text',req:true},{id:'completion_date',label:'Date of Completion',type:'date',req:true},
      {id:'compiled_by',label:'Compiled By',type:'text',req:true},
    ]},
    {title:'Inspection Records Checklist',num:'02',fields:[
      {id:'f00_incl',label:'F00 Benchmark Acceptance (if applicable)',type:'yn'},
      {id:'f01_incl',label:'F01 Pre-Installation Checklist',type:'yn',req:true},
      {id:'f02_incl',label:'F02 Material and Installation Record',type:'yn',req:true},
      {id:'f03_incl',label:'F03 Level and Void Height Log',type:'yn',req:true},
      {id:'f04_incl',label:'F04 SR Test Record (HOLD)',type:'yn',req:true},
      {id:'f05_incl',label:'F05 Load Test Record (HOLD)',type:'yn',req:true},
      {id:'f06_incl',label:'F06 Panel Integrity and Walk Test',type:'yn',req:true},
      {id:'f07_incl',label:'F07 Protection Log',type:'yn',req:true},
      {id:'f08_incl',label:'F08 Post Installation Inspection',type:'yn',req:true},
      {id:'f09_incl',label:'F09 Material Delivery Log',type:'yn',req:true},
      {id:'f10_incl',label:'F10 Calibration Register',type:'yn',req:true},
    ]},
    {title:'Hold Point Confirmation',num:'03',fields:[
      {id:'hp_benchmark',label:'Benchmark Accepted (F00)',type:'yn',req:true},
      {id:'hp_sr',label:'SR Test Compliant (F04)',type:'yn',req:true},
      {id:'hp_load',label:'Load Test Passed (F05)',type:'yn',req:true},
      {id:'hp_qapack',label:'QA Pack Compiled (F11)',type:'yn',req:true},
    ]},
    {title:'Submission & Declaration',num:'04',fields:[
      {id:'aconex_mail',label:'Aconex Mail Type',type:'text',req:true},{id:'aconex_ref',label:'Aconex Reference No.',type:'text',req:true},
      {id:'submit_date',label:'Date Submitted',type:'date',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'contracts_mgr',label:'AJK Contracts Manager',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F12',title:'Area Handover Certificate',hold:true,qitp:'Handover',freq:'Final Handover',
   desc:'Formal area release to Multiplex. All QITP tests passed and hold points closed. RAF released for occupation or finish works.',
   sections:[
    {title:'Handover Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',req:true},
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'install_nums',label:'Installation Numbers',type:'text',req:true},
      {id:'install_complete',label:'Date of RAF Completion',type:'date',req:true},
      {id:'handover_date',label:'Date of Handover Inspection',type:'date',req:true},
    ]},
    {title:'Compliance Summary',num:'02',fields:[
      {id:'c_level',label:'F03 — Level / Void Height Within Tolerance',type:'yn',req:true},
      {id:'c_sr',label:'F04 — SR Class Achieved',type:'yn',req:true},
      {id:'c_load',label:'F05 — Load Class Test Passed',type:'yn',req:true},
      {id:'c_walk',label:'F06 — Panel Integrity Walk Test Passed',type:'yn',req:true},
      {id:'c_protect',label:'F07 — Protection Period Achieved',type:'yn',req:true},
      {id:'c_postinstall',label:'F08 — No Unresolved Defects',type:'yn',req:true},
      {id:'c_qapack',label:'F11 — QA Pack Submitted via Aconex',type:'yn',req:true},
    ]},
    {title:'Area Condition at Handover',num:'03',fields:[
      {id:'panels_clean',label:'Panel surfaces clean and undamaged',type:'yn',req:true},
      {id:'panels_seated',label:'All panels correctly seated and locked',type:'yn',req:true},
      {id:'access_clear',label:'Access panels operational',type:'yn'},
      {id:'void_clear',label:'Underfloor void clear of debris',type:'yn',req:true},
      {id:'no_loading_dmg',label:'No premature loading damage',type:'yn',req:true},
      {id:'suitable_use',label:'Area suitable for intended use / finish works',type:'yn',req:true},
    ]},
    {title:'Declaration',num:'04',fields:[
      {id:'outstanding',label:'Outstanding Items',type:'select',opts:['No outstanding defects','Minor snags listed in notes (non-structural)','NCRs raised and closed'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_qa',label:'AJK QA Manager',type:'text',req:true},
      {id:'mpx_rep',label:'MPX Representative',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Notes / Snag List',type:'textarea',full:true},
    ]},
  ]},
];

const HW_FORMS = [

  {id:'F00',title:'Benchmark Acceptance',hold:true,qitp:'PRC-05',freq:'First Install Only',
   desc:'Benchmark board installation. Species, grade, fixing method, acclimatisation, finish and appearance accepted as project standard.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'rh_percent',label:'Ambient RH (%)',type:'number',req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
    ]},
    {title:'Material Confirmation',num:'02',fields:[
      {id:'species_ok',label:'Species and grade match approved submittal',type:'yn',hint:'BS EN 13226 / BS EN 13227 / Approved submittal',req:true},
      {id:'mc_range',label:'Board MC within acclimatisation target range',type:'yn',hint:'Target 8–12% MC — BS 8201',req:true},
      {id:'finish_ok',label:'Surface finish / coating confirmed',type:'yn',hint:'Approved TDS / VOC compliance per specification',req:true},
      {id:'adhesive_ok',label:'Adhesive type and class confirmed',type:'yn',hint:'BS EN 14293 / approved TDS'},
      {id:'underlay_ok',label:'Underlay / acoustic mat confirmed (if applicable)',type:'yn'},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Substrate Acceptance',num:'03',fields:[
      {id:'sub_rh',label:'Substrate RH within adhesive limit',type:'yn',hint:'Typically ≤75% RH / BS 8203',req:true},
      {id:'sub_sr',label:'Substrate SR within tolerance',type:'yn',hint:'SR2 or better — BS 8201',req:true},
      {id:'sub_clean',label:'Substrate clean and primed (if required)',type:'yn',req:true},
      {id:'sub_mc_ok',label:'Substrate MC within limit',type:'yn',hint:'≤5% MC for sand/cement screed',req:true},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Method Verification',num:'04',fields:[
      {id:'laying_pattern',label:'Laying pattern as per approved drawings',type:'yn',req:true},
      {id:'expansion_ok',label:'Expansion gaps maintained at perimeter and fixed objects',type:'yn',hint:'Typically 10–15mm / BS 8201',req:true},
      {id:'fixing_method',label:'Fixing method correct — adhesive / secret nail / float',type:'yn',req:true},
      {id:'stagger_ok',label:'Board end-joint stagger meets minimum requirement',type:'yn',hint:'Min 300mm stagger / BS 8201',req:true},
      {id:'install_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Appearance & Walk Test',num:'05',fields:[
      {id:'finish_uniform',label:'Finish uniform — no sanding marks or sheen variation',type:'yn',req:true},
      {id:'no_gaps',label:'No unacceptable gaps between boards',type:'yn',hint:'BS 8201 tolerance',req:true},
      {id:'colour_ok',label:'Colour and grain consistent with approved sample board',type:'yn',req:true},
      {id:'walk_test',label:'Walk test — no squeaking or board movement',type:'yn',req:true},
      {id:'bench_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Declaration',num:'06',fields:[
      {id:'outcome',label:'Benchmark Outcome',type:'select',opts:['Accepted – Production Installs May Proceed','Accepted Subject to Minor Rectification','Rejected – Further Benchmark Required'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_pm',label:'MPX Package Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F01',title:'Pre-Installation Checklist',hold:false,qitp:'PRC-06, SC-01 to SC-03',freq:'Every Installation',
   desc:'Complete before every hardwood installation. Substrate MC/RH, acclimatisation period, area climate stability and material checks.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Apartment / Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'rh_ambient',label:'Ambient RH (%)',type:'number',req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Rep',type:'text',req:true},
    ]},
    {title:'Area Release & Climate',num:'02',fields:[
      {id:'area_release',label:'Formal Area Release Received',type:'yn',req:true},
      {id:'no_wet_trades',label:'No wet trades or moisture-generating works present',type:'yn',hint:'Area closed to wet works — BS 8201',req:true},
      {id:'hvac_stable',label:'HVAC / climate control at operational settings',type:'yn',hint:'Stable ambient conditions for acclimatisation',req:true},
      {id:'access_ok',label:'Access and logistics confirmed',type:'yn',req:true},
      {id:'area_comments',label:'Comments',type:'textarea',full:true},{id:'area_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Substrate Inspection',num:'03',fields:[
      {id:'sub_clean',label:'Substrate clean and free of contamination',type:'yn',req:true},
      {id:'sub_rh_ok',label:'Substrate RH within adhesive TDS limit',type:'yn',hint:'≤75% RH — BS 8203 / adhesive TDS',req:true},
      {id:'sub_mc_ok',label:'Substrate MC within limit',type:'yn',hint:'≤5% MC for sand/cement screed',req:true},
      {id:'sub_sr_ok',label:'Substrate SR within tolerance for hardwood',type:'yn',hint:'SR2 or better — BS 8201',req:true},
      {id:'sub_primed',label:'Substrate primed as required by adhesive TDS',type:'yn'},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},{id:'sub_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Acclimatisation Check',num:'04',fields:[
      {id:'acclim_period',label:'Minimum acclimatisation period achieved',type:'yn',hint:'Min 48–72 hrs in situ at operational conditions — BS 8201',req:true},
      {id:'board_mc_ok',label:'Board MC within target range',type:'yn',hint:'Target 8–12% MC',req:true},
      {id:'measured_mc',label:'Measured Board MC (%)',type:'number',req:true},
      {id:'acclim_temp',label:'Acclimatisation Ambient Temp (°C)',type:'number',req:true},
      {id:'acclim_rh',label:'Acclimatisation Ambient RH (%)',type:'number',req:true},
      {id:'acclim_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Materials On Site',num:'05',fields:[
      {id:'boards_ok',label:'Boards on site — correct species / grade / batch',type:'yn',req:true},
      {id:'adhesive_ok',label:'Adhesive on site — correct type / in-date',type:'yn',req:true},
      {id:'underlay_ok',label:'Underlay on site (if applicable)',type:'yn'},
      {id:'fixings_ok',label:'Secret nails / staples on site (if applicable)',type:'yn'},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Supervisor Declaration',num:'06',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_name',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'overall_status',label:'Overall Form Status',type:'select',opts:['All Items Compliant','Minor Issues Noted — Works May Proceed','HOLD — Do Not Proceed'],req:true,full:true},
      {id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F02',title:'Installation Record',hold:false,qitp:'SC-04, SC-05, MC-01',freq:'Every Installation',
   desc:'Board installation record. Laying direction, expansion gaps, board MC at point of laying, adhesive coverage and fixing method per room.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Install Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'submittal_ref',label:'Approved Technical Submittal Ref',type:'text',req:true},
      {id:'supervisor',label:'Installation Supervisor',type:'text',req:true},
    ]},
    {title:'Material Verification',num:'02',fields:[
      {id:'species_batch',label:'Species / batch / delivery ref recorded',type:'yn',req:true},
      {id:'grade_match',label:'Grade and finish match approved submittal',type:'yn',req:true},
      {id:'adhesive_batch',label:'Adhesive batch and expiry date recorded',type:'yn',req:true},
      {id:'mc_recorded',label:'Board MC recorded at point of laying',type:'yn',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Record',num:'03',fields:[{id:'hw_install_rec',label:'Installation Log per Room',type:'hw_install_rec',full:true}]},
    {title:'Non-Conformance Record',num:'04',fields:[{id:'hw_install_nc',label:'Non-Conformances',type:'hw_install_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'gaps_ok',label:'All perimeter and fixed-object expansion gaps maintained',type:'yn',req:true},
      {id:'adhesive_cov',label:'Adhesive coverage ≥80% confirmed throughout',type:'yn',hint:'BS EN 14293 / adhesive TDS',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F03',title:'Level & Lippage Log',hold:false,qitp:'SC-06, TC-01',freq:'Every Installation',
   desc:'FFL and board-to-board lippage checks. Level compliance and lippage between adjacent boards recorded per room. Ref BS 8201.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Install Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},
      {id:'max_lippage',label:'Max Permitted Lippage (mm)',type:'number',req:true,hint:'Typically 1mm BS 8201 / confirm per spec'},
      {id:'datum_ref',label:'Datum Reference',type:'text',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Level & Lippage Log',num:'03',fields:[{id:'level_check',label:'Level and Lippage Measurements',type:'level_check',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'level_nc',label:'Non-Conformance Actions',type:'level_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F04',title:'SR Test Record',hold:true,qitp:'TC-02',freq:'Post-Installation',
   desc:'Surface regularity straightedge testing to BS 8201. HOLD POINT — floor must meet SR class and lippage limits before sanding / finishing commences.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'sr_class',label:'Specified SR Class',type:'select',opts:['SR1 (±3mm)','SR2 (±5mm)','SR3 (±10mm)'],req:true},
      {id:'max_dev',label:'Max Permitted SR Deviation (mm)',type:'number',req:true},
      {id:'max_lippage',label:'Max Permitted Lippage (mm)',type:'number',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_sr_summary',label:'Room Summary',type:'room_sr_summary',full:true}]},
    {title:'SR & Lippage Test Log',num:'03',fields:[{id:'hw_sr_table',label:'Test Readings',type:'hw_sr_table',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'sr_nc_table',label:'Non-Conformance Actions',type:'sr_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall SR Test Result',type:'select',opts:['PASS — Compliant with SR Class and Lippage Limits','FAIL — Rectification Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F05',title:'Moisture Content Test Report',hold:true,qitp:'TC-03',freq:'Pre-Sanding / Pre-Finish',
   desc:'Board MC testing before sanding and finish coats. HOLD POINT — MC must be stable and within target range before any sanding or finishing works begin.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'install_date',label:'Date Flooring Installed',type:'date',req:true},
      {id:'age_days',label:'Age Since Installation (Days)',type:'number',req:true},
      {id:'target_mc',label:'Target Board MC (%)',type:'number',req:true,hint:'Target 8–12% / confirm per species and finish TDS'},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'rh_ambient',label:'Ambient RH (%)',type:'number',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},{id:'meter_serial',label:'Moisture Meter Serial No.',type:'text',req:true},
      {id:'calib_ref',label:'Calibration Certificate Ref',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_mc_summary',label:'Room Summary',type:'room_mc_summary',full:true}]},
    {title:'MC Test Log',num:'03',fields:[{id:'mc_table',label:'MC Test Readings',type:'mc_table',full:true}]},
    {title:'Non-Compliant Results',num:'04',fields:[{id:'mc_nc_table',label:'Non-Compliant Actions',type:'mc_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall MC Test Result',type:'select',opts:['PASS — Board MC Stable and Within Target Range','FAIL — Further Conditioning Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F06',title:'Sanding & Finishing Record',hold:false,qitp:'TC-04',freq:'Per Sanding Cycle',
   desc:'Sanding grit progression, finish coat sequence, cure times and ambient conditions recorded per room. Finish system verified against approved TDS.',
   sections:[
    {title:'Room Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'rh_ambient',label:'Ambient RH (%)',type:'number',req:true},
      {id:'finish_system',label:'Approved Finish System / Product',type:'text',req:true},{id:'operator',label:'Operator',type:'text',req:true},
    ]},
    {title:'Sanding Record',num:'02',fields:[{id:'hw_sanding_rec',label:'Sanding Log',type:'hw_sanding_rec',full:true}]},
    {title:'Finish Coat Application Record',num:'03',fields:[{id:'hw_finish_rec',label:'Finish Application Log',type:'hw_finish_rec',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'appearance_ok',label:'Final appearance uniform and as per approved benchmark',type:'yn',req:true},
      {id:'cure_ok',label:'Final coat fully cured per TDS before light trafficking',type:'yn',req:true},
      {id:'no_marks',label:'No sanding marks, sheen variation or finish defects',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F07',title:'Protection Log',hold:false,qitp:'SC-09',freq:'Daily During Protection',
   desc:'Daily monitoring during protection period. Trafficking, finish cure status, ambient conditions and protection integrity recorded.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Date Installed',type:'date',req:true},
      {id:'protect_method',label:'Protection Method',type:'text',req:true},{id:'min_protect',label:'Min. Protection Period',type:'text',req:true},
      {id:'release_date',label:'Release Date Eligible',type:'date',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Daily Protection Log',num:'02',fields:[{id:'hw_protection_log',label:'Daily Monitoring Records',type:'hw_protection_log',full:true}]},
    {title:'Declaration',num:'03',fields:[
      {id:'period_compliant',label:'Protection Period Compliant',type:'yn',req:true},
      {id:'finish_cured',label:'Finish coat fully cured before protection removal',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F08',title:'Post Installation Inspection',hold:false,qitp:'SC-10, PC-01',freq:'Every Installation',
   desc:'Post-installation visual inspection. Board condition, gaps, finish uniformity, lippage and defect log.',
   sections:[
    {title:'Inspection Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Installation Date',type:'date',req:true},
      {id:'inspection_date',label:'Inspection Date',type:'date',req:true},{id:'inspector',label:'Inspector',type:'text',req:true},
    ]},
    {title:'Visual Inspection Checklist',num:'02',fields:[
      {id:'boards_undamaged',label:'Board surfaces clean and undamaged',type:'yn',req:true},
      {id:'no_gaps',label:'No unacceptable gaps between boards',type:'yn',hint:'BS 8201 tolerance',req:true},
      {id:'lippage_ok',label:'Lippage within permitted tolerance',type:'yn',req:true},
      {id:'expansion_ok',label:'Expansion gaps maintained and covered by trims',type:'yn',req:true},
      {id:'finish_uniform',label:'Finish uniform — no sanding marks or sheen variation',type:'yn',req:true},
      {id:'walk_ok',label:'Walk test — no squeaking or board movement',type:'yn',req:true},
      {id:'protection_ok',label:'Protection and signage in place',type:'yn',req:true},
      {id:'visual_comments',label:'Comments',type:'textarea',full:true},{id:'visual_photo',label:'Photo References',type:'text',full:true},
    ]},
    {title:'Defect Log',num:'03',fields:[{id:'defect_table',label:'Defects Identified',type:'defect_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'outcome',label:'Inspection Outcome',type:'select',opts:['Compliant','Requires Remedial Works','Escalated to NCR'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F09',title:'Material Delivery Log',hold:false,qitp:'MC-01 to MC-05',freq:'Every Delivery',
   desc:'Log all board, adhesive, finish system and accessory deliveries. Batch traceability, DoP and storage records.',
   sections:[
    {title:'Delivery Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'supplier',label:'Supplier',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'logged_by',label:'Logged By',type:'text',req:true},
    ]},
    {title:'Delivery Log',num:'02',fields:[{id:'delivery_table',label:'Deliveries Received',type:'delivery_table',full:true}]},
    {title:'Batch Allocation',num:'03',fields:[{id:'batch_alloc',label:'Batch Allocation to Rooms',type:'batch_alloc',full:true}]},
    {title:'Rejected Materials',num:'04',fields:[{id:'rejected_table',label:'Rejected Materials',type:'rejected_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F10',title:'Calibration Register',hold:false,qitp:'PRC-04, TC-03',freq:'Periodic',
   desc:'Calibration register for moisture meters, hygrometers and all measurement equipment used in hardwood flooring works.',
   sections:[
    {title:'Register Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'maintained_by',label:'Maintained By',type:'text',req:true},{id:'review_date',label:'Last Review Date',type:'date',req:true},
    ]},
    {title:'Equipment Register',num:'02',fields:[{id:'equip_table',label:'Equipment',type:'equip_table',full:true}]},
    {title:'Out of Calibration Record',num:'03',fields:[{id:'oc_table',label:'Out of Calibration / Quarantine',type:'oc_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'qa_manager',label:'QA Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'all_calibrated',label:'All equipment calibrated and in-date',type:'yn',req:true,full:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F11',title:'QA Pack Index',hold:true,qitp:'TC-05',freq:'On Completion',
   desc:'Confirms all F00–F10 records complete and signed. All hold points closed. HOLD POINT before Aconex submission.',
   sections:[
    {title:'Pack Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',req:true},
      {id:'install_num',label:'Installation Reference',type:'text',req:true},{id:'block',label:'Block / Plot',type:'text',req:true},
      {id:'level',label:'Level',type:'text',req:true},{id:'completion_date',label:'Date of Completion',type:'date',req:true},
      {id:'compiled_by',label:'Compiled By',type:'text',req:true},
    ]},
    {title:'Inspection Records Checklist',num:'02',fields:[
      {id:'f00_incl',label:'F00 Benchmark Acceptance (if applicable)',type:'yn'},
      {id:'f01_incl',label:'F01 Pre-Installation Checklist',type:'yn',req:true},
      {id:'f02_incl',label:'F02 Installation Record',type:'yn',req:true},
      {id:'f03_incl',label:'F03 Level and Lippage Log',type:'yn',req:true},
      {id:'f04_incl',label:'F04 SR Test Record (HOLD)',type:'yn',req:true},
      {id:'f05_incl',label:'F05 Moisture Content Test Report (HOLD)',type:'yn',req:true},
      {id:'f06_incl',label:'F06 Sanding and Finishing Record',type:'yn',req:true},
      {id:'f07_incl',label:'F07 Protection Log',type:'yn',req:true},
      {id:'f08_incl',label:'F08 Post Installation Inspection',type:'yn',req:true},
      {id:'f09_incl',label:'F09 Material Delivery Log',type:'yn',req:true},
      {id:'f10_incl',label:'F10 Calibration Register',type:'yn',req:true},
    ]},
    {title:'Hold Point Confirmation',num:'03',fields:[
      {id:'hp_benchmark',label:'Benchmark Accepted (F00)',type:'yn',req:true},
      {id:'hp_sr',label:'SR Test Compliant (F04)',type:'yn',req:true},
      {id:'hp_mc',label:'Board MC Stable and Within Target (F05)',type:'yn',req:true},
      {id:'hp_qapack',label:'QA Pack Compiled (F11)',type:'yn',req:true},
    ]},
    {title:'Submission & Declaration',num:'04',fields:[
      {id:'aconex_mail',label:'Aconex Mail Type',type:'text',req:true},{id:'aconex_ref',label:'Aconex Reference No.',type:'text',req:true},
      {id:'submit_date',label:'Date Submitted',type:'date',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'contracts_mgr',label:'AJK Contracts Manager',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F12',title:'Area Handover Certificate',hold:true,qitp:'Handover',freq:'Final Handover',
   desc:'Formal area release to Multiplex. All QITP tests passed and hold points closed. Hardwood flooring released for occupation.',
   sections:[
    {title:'Handover Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',req:true},
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'install_nums',label:'Installation Numbers',type:'text',req:true},
      {id:'install_complete',label:'Date of Flooring Completion',type:'date',req:true},
      {id:'handover_date',label:'Date of Handover Inspection',type:'date',req:true},
    ]},
    {title:'Compliance Summary',num:'02',fields:[
      {id:'c_level',label:'F03 — Level / Lippage Within Tolerance',type:'yn',req:true},
      {id:'c_sr',label:'F04 — SR Class Achieved',type:'yn',req:true},
      {id:'c_mc',label:'F05 — Board MC Stable and Within Target',type:'yn',req:true},
      {id:'c_finish',label:'F06 — Sanding and Finishing Record Complete',type:'yn',req:true},
      {id:'c_protect',label:'F07 — Protection Period Achieved',type:'yn',req:true},
      {id:'c_postinstall',label:'F08 — No Unresolved Defects',type:'yn',req:true},
      {id:'c_qapack',label:'F11 — QA Pack Submitted via Aconex',type:'yn',req:true},
    ]},
    {title:'Area Condition at Handover',num:'03',fields:[
      {id:'boards_clean',label:'Board surfaces clean and undamaged',type:'yn',req:true},
      {id:'finish_cured',label:'Finish coat fully cured and uniform',type:'yn',req:true},
      {id:'no_gaps',label:'No unacceptable gaps or lippage present',type:'yn',req:true},
      {id:'trims_ok',label:'Expansion gaps covered by trims / threshold strips',type:'yn',req:true},
      {id:'no_loading_dmg',label:'No premature loading damage',type:'yn',req:true},
      {id:'suitable_occ',label:'Area suitable for occupation',type:'yn',req:true},
    ]},
    {title:'Declaration',num:'04',fields:[
      {id:'outstanding',label:'Outstanding Items',type:'select',opts:['No outstanding defects','Minor snags listed in notes (non-structural)','NCRs raised and closed'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_qa',label:'AJK QA Manager',type:'text',req:true},
      {id:'mpx_rep',label:'MPX Representative',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Notes / Snag List',type:'textarea',full:true},
    ]},
  ]},
];

const TILING_FORMS = [

  {id:'F00',title:'Benchmark Acceptance',hold:true,qitp:'PRC-05',freq:'First Install Only',
   desc:'Benchmark tile installation. Tile type, adhesive class, joint width, grout, lippage and finish accepted as project standard.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'sub_temp',label:'Substrate Temp (°C)',type:'number',req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
    ]},
    {title:'Material Confirmation',num:'02',fields:[
      {id:'tile_type',label:'Tile type / format / classification confirmed',type:'yn',hint:'BS EN ISO 13006 Group / Approved submittal',req:true},
      {id:'adhesive_class',label:'Adhesive type and class confirmed',type:'yn',hint:'BS EN 12004 — C1/C2/D1/D2/F/S1/S2',req:true},
      {id:'grout_type',label:'Grout type and class confirmed',type:'yn',hint:'BS EN 13888 — CG1/CG2/RG/FJ',req:true},
      {id:'movement_spec',label:'Movement joint specification confirmed',type:'yn',hint:'BS 5385 — max 4.5m internal bays',req:true},
      {id:'primer_ok',label:'Primer type confirmed (if specified)',type:'yn'},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Substrate Acceptance',num:'03',fields:[
      {id:'sub_rh',label:'Substrate RH within adhesive TDS limit',type:'yn',hint:'≤75% RH unless C2/D2/FJ specified — BS 5385',req:true},
      {id:'sub_sr',label:'Substrate SR within tolerance for tile format',type:'yn',hint:'SR2 for tiles >400mm — BS 5385',req:true},
      {id:'sub_clean',label:'Substrate clean, dust-free and primed',type:'yn',req:true},
      {id:'sub_strength',label:'Structural integrity confirmed',type:'yn',req:true},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Verification',num:'04',fields:[
      {id:'layout_ok',label:'Setting out confirmed per approved layout drawing',type:'yn',req:true},
      {id:'notch_trowel',label:'Correct notched trowel used — full bed achieved',type:'yn',hint:'≥80% coverage dry / BS 5385-3',req:true},
      {id:'back_butter',label:'Back buttering applied (large format / natural stone)',type:'yn'},
      {id:'joint_width',label:'Joint widths correct and consistent per drawing',type:'yn',req:true},
      {id:'movement_joints',label:'Movement joints at correct locations and centres',type:'yn',hint:'Max 4.5m internal / at perimeter / column bases',req:true},
      {id:'lippage_ok',label:'Lippage within permitted tolerance',type:'yn',hint:'Max 2mm BS 5385 / confirm per spec',req:true},
      {id:'install_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Grouting Verification',num:'05',fields:[
      {id:'cure_wait_ok',label:'Adhesive cure period achieved before grouting',type:'yn',hint:'Min 24–48hrs or per adhesive TDS',req:true},
      {id:'grout_mix_ok',label:'Grout mixed to correct W:P ratio',type:'yn',hint:'Per grout TDS',req:true},
      {id:'colour_ok',label:'Grout colour matches approved sample',type:'yn',req:true},
      {id:'joints_full',label:'All joints fully filled and tooled',type:'yn',req:true},
      {id:'movement_sealed',label:'Movement joints sealed with compatible sealant — not grout',type:'yn',hint:'BS EN ISO 11600 / BS 5385',req:true},
      {id:'grout_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Declaration',num:'06',fields:[
      {id:'outcome',label:'Benchmark Outcome',type:'select',opts:['Accepted – Production Installs May Proceed','Accepted Subject to Minor Rectification','Rejected – Further Benchmark Required'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_pm',label:'MPX Package Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F01',title:'Pre-Installation Checklist',hold:false,qitp:'PRC-06, SC-01 to SC-03',freq:'Every Installation',
   desc:'Complete before every tiling installation. Substrate RH/SR, setting out, area release, UFH commissioning and material checks.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Apartment / Area Reference',type:'text',req:true},{id:'install_num',label:'Installation Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'sub_temp',label:'Substrate Temp (°C)',type:'number',req:true},
      {id:'supervisor',label:'Trade Supervisor',type:'text',req:true},{id:'mpx_rep',label:'MPX Rep',type:'text',req:true},
    ]},
    {title:'Area Release',num:'02',fields:[
      {id:'area_release',label:'Formal Area Release Received',type:'yn',req:true},
      {id:'no_trades',label:'No conflicting trades present',type:'yn',req:true},
      {id:'ufh_ok',label:'Underfloor heating commissioned, tested and at tiling temp (if applicable)',type:'yn',hint:'UFH must be run-in and at correct temp before tiling — BS 5385',},
      {id:'access_ok',label:'Access and logistics confirmed',type:'yn',req:true},
      {id:'area_comments',label:'Comments',type:'textarea',full:true},{id:'area_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Substrate Inspection',num:'03',fields:[
      {id:'sub_clean',label:'Substrate clean and dust-free',type:'yn',req:true},
      {id:'sub_rh_ok',label:'Substrate RH within adhesive TDS limit',type:'yn',req:true},
      {id:'sub_sr_ok',label:'Substrate SR within tolerance for specified tile format',type:'yn',req:true},
      {id:'sub_primed',label:'Substrate primed as specified',type:'yn'},
      {id:'movement_marked',label:'Movement and expansion joint locations marked out',type:'yn',req:true},
      {id:'sub_comments',label:'Comments',type:'textarea',full:true},{id:'sub_photo',label:'Photo Reference',type:'text',full:true},
    ]},
    {title:'Setting Out Confirmation',num:'04',fields:[
      {id:'layout_confirmed',label:'Setting out confirmed against approved layout drawing',type:'yn',req:true},
      {id:'cut_tiles_ok',label:'Cut tile sizes acceptable — min 1/3 tile at perimeter',type:'yn',hint:'No slivers permitted — BS 5385',req:true},
      {id:'datum_snapped',label:'Datum lines snapped, checked and agreed',type:'yn',req:true},
      {id:'so_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Materials On Site',num:'05',fields:[
      {id:'tiles_ok',label:'Tiles on site — correct type / batch / shade batch',type:'yn',req:true},
      {id:'adhesive_ok',label:'Adhesive on site — correct class / in-date',type:'yn',req:true},
      {id:'grout_ok',label:'Grout on site — correct class / colour',type:'yn',req:true},
      {id:'sealant_ok',label:'Movement joint sealant on site — correct colour / type',type:'yn',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Supervisor Declaration',num:'06',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_name',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'overall_status',label:'Overall Form Status',type:'select',opts:['All Items Compliant','Minor Issues Noted — Works May Proceed','HOLD — Do Not Proceed'],req:true,full:true},
      {id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F02',title:'Tiling Installation Record',hold:false,qitp:'SC-04, SC-05, MC-01',freq:'Every Installation',
   desc:'Tile, adhesive and grout installation record. Coverage, joint widths, lippage, shade batches and movement joints per area.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Install Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'submittal_ref',label:'Approved Technical Submittal Ref',type:'text',req:true},
      {id:'supervisor',label:'Installation Supervisor',type:'text',req:true},
    ]},
    {title:'Material Verification',num:'02',fields:[
      {id:'tile_batch',label:'Tile batch and shade batch recorded',type:'yn',req:true},
      {id:'tile_class_ok',label:'Tile classification matches specification',type:'yn',hint:'BS EN ISO 13006',req:true},
      {id:'adhesive_batch',label:'Adhesive batch and expiry date recorded',type:'yn',req:true},
      {id:'grout_batch',label:'Grout batch and expiry date recorded',type:'yn',req:true},
      {id:'mat_comments',label:'Comments',type:'textarea',full:true},
    ]},
    {title:'Installation Record',num:'03',fields:[{id:'tiling_install_rec',label:'Tiling Installation Log per Area',type:'tiling_install_rec',full:true}]},
    {title:'Non-Conformance Record',num:'04',fields:[{id:'tiling_install_nc',label:'Non-Conformances',type:'tiling_install_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'coverage_ok',label:'Adhesive coverage ≥80% confirmed throughout (≥95% wet areas)',type:'yn',hint:'BS 5385 / BS EN 12004',req:true},
      {id:'movement_ok',label:'All movement and expansion joints installed correctly',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F03',title:'Level & Lippage Log',hold:false,qitp:'SC-06, TC-01',freq:'Every Installation',
   desc:'FFL and tile-to-tile lippage checks. Level compliance and lippage between adjacent tiles recorded per room. Ref BS 5385.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_num',label:'Install Number',type:'text',req:true},
      {id:'date',label:'Date',type:'date',req:true},{id:'drawing_ref',label:'Drawing Reference',type:'text',req:true},
      {id:'design_ffl',label:'Design FFL',type:'text',req:true},
      {id:'max_lippage',label:'Max Permitted Lippage (mm)',type:'number',req:true,hint:'Typically 2mm — BS 5385'},
      {id:'datum_ref',label:'Datum Reference',type:'text',req:true},{id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Level & Lippage Log',num:'03',fields:[{id:'tiling_level_log',label:'Level and Lippage Measurements',type:'tiling_level_log',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'level_nc',label:'Non-Conformance Actions',type:'level_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F04',title:'SR Test Record',hold:true,qitp:'TC-02',freq:'On Completion',
   desc:'Surface regularity straightedge testing to BS 5385. HOLD POINT — floor must meet SR class and lippage limits before handover.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'sr_class',label:'Specified SR Class',type:'select',opts:['SR1 (±3mm)','SR2 (±5mm)','SR3 (±10mm)'],req:true},
      {id:'max_dev',label:'Max Permitted SR Deviation (mm)',type:'number',req:true},
      {id:'max_lippage',label:'Max Permitted Lippage (mm)',type:'number',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_sr_summary',label:'Room Summary',type:'room_sr_summary',full:true}]},
    {title:'SR & Lippage Test Log',num:'03',fields:[{id:'tiling_sr_log',label:'Test Readings',type:'tiling_sr_log',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'sr_nc_table',label:'Non-Conformance Actions',type:'sr_nc_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall SR Test Result',type:'select',opts:['PASS — Compliant with SR Class and Lippage Limits','FAIL — Rectification Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F05',title:'Adhesive Bond Strength Test',hold:true,qitp:'TC-03',freq:'On Completion',
   desc:'Pull-off adhesion testing to BS EN 1348 and BS 5385. HOLD POINT — bond strength must meet adhesive class minimum before handover.',
   sections:[
    {title:'Test Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'test_date',label:'Date of Test',type:'date',req:true},
      {id:'tile_age',label:'Age Since Tiling (Days)',type:'number',req:true},
      {id:'adhesive_class',label:'Adhesive Class',type:'select',opts:['C1 Normal Set (≥0.5 N/mm²)','C2 Improved (≥1.0 N/mm²)','C2F Fast Set (≥1.0 N/mm²)','C2S1 Deformable (≥1.0 N/mm²)','C2S2 Highly Deformable (≥1.0 N/mm²)','D1 Dispersion (≥1.0 N/mm²)','D2 Improved Dispersion (≥1.0 N/mm²)'],req:true,full:true},
      {id:'min_strength',label:'Min. Specified Bond Strength (N/mm²)',type:'number',req:true},
      {id:'tested_by',label:'Tested By',type:'text',req:true},{id:'equip_ref',label:'Test Equipment Reference',type:'text',req:true},
      {id:'calib_ref',label:'Calibration Certificate Ref',type:'text',req:true},
    ]},
    {title:'Room Summary',num:'02',fields:[{id:'room_summary',label:'Room Summary',type:'room_summary',full:true}]},
    {title:'Pull-Off Test Log',num:'03',fields:[{id:'tiling_bond_log',label:'Bond Strength Test Readings',type:'tiling_bond_log',full:true}]},
    {title:'Non-Conformance',num:'04',fields:[{id:'tiling_bond_nc',label:'Non-Conformance Actions',type:'tiling_bond_nc',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'overall_result',label:'Overall Bond Strength Test Result',type:'select',opts:['PASS — All Areas Meet Minimum Bond Strength','FAIL — Remedial Works Required','FAIL — Area Rejected'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F06',title:'Grout & Movement Joint Record',hold:false,qitp:'TC-04',freq:'Per Grouting Cycle',
   desc:'Grout application, joint filling, movement joint and sealant installation record per area. Ref BS EN 13888 and BS 5385.',
   sections:[
    {title:'Area Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'amb_temp',label:'Ambient Temp (°C)',type:'number',req:true},{id:'sub_temp',label:'Substrate Temp (°C)',type:'number',req:true},
      {id:'adhesive_cured',label:'Adhesive cure period achieved before grouting',type:'yn',hint:'Per adhesive TDS — typically 24–48hrs / BS 5385',req:true},
      {id:'operator',label:'Operator',type:'text',req:true},
    ]},
    {title:'Grout Application Record',num:'02',fields:[{id:'grout_rec',label:'Grout Application Log',type:'grout_rec',full:true}]},
    {title:'Movement Joint Record',num:'03',fields:[{id:'movement_joint_rec',label:'Movement Joint Installation Log',type:'movement_joint_rec',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'joints_full',label:'All tile joints fully grouted and tooled',type:'yn',req:true},
      {id:'movement_sealed',label:'All movement joints sealed with compatible sealant (not grout)',type:'yn',req:true},
      {id:'grout_cured',label:'Grout fully cured before trafficking — per grout TDS',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F07',title:'Protection Log',hold:false,qitp:'SC-09',freq:'Daily During Protection',
   desc:'Daily monitoring during tile cure and protection period. Trafficking, grout cure status, surface condition and protection integrity.',
   sections:[
    {title:'Installation Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Date Tiled',type:'date',req:true},
      {id:'grout_date',label:'Date Grouted',type:'date',req:true},
      {id:'min_cure',label:'Min. Protection / Cure Period',type:'text',req:true},
      {id:'protect_method',label:'Protection Method',type:'text',req:true},{id:'release_date',label:'Release Date Eligible',type:'date',req:true},
      {id:'supervisor',label:'Supervisor',type:'text',req:true},
    ]},
    {title:'Daily Protection Log',num:'02',fields:[{id:'protection_daily',label:'Daily Monitoring Records',type:'protection_daily',full:true}]},
    {title:'Declaration',num:'03',fields:[
      {id:'period_compliant',label:'Cure and Protection Period Compliant',type:'yn',req:true},
      {id:'grout_cured',label:'Grout confirmed fully cured before protection removal',type:'yn',req:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'mpx_qa',label:'MPX QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F08',title:'Post Installation Inspection',hold:false,qitp:'SC-10, PC-01',freq:'Every Installation',
   desc:'Post-installation visual inspection. Tile condition, grout, lippage, tap test for hollow tiles, movement joints and defect log.',
   sections:[
    {title:'Inspection Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'area_ref',label:'Area Reference',type:'text',req:true},{id:'install_date',label:'Installation Date',type:'date',req:true},
      {id:'inspection_date',label:'Inspection Date',type:'date',req:true},{id:'inspector',label:'Inspector',type:'text',req:true},
    ]},
    {title:'Visual Inspection Checklist',num:'02',fields:[
      {id:'tiles_undamaged',label:'Tile surfaces clean, undamaged and matching approved sample',type:'yn',req:true},
      {id:'no_hollow',label:'No hollow or debonded tiles (tap test)',type:'yn',hint:'BS 5385 tap test methodology — 100% check',req:true},
      {id:'lippage_ok',label:'Lippage within permitted tolerance throughout',type:'yn',req:true},
      {id:'grout_full',label:'Grout joints fully filled, consistent colour and tooled',type:'yn',req:true},
      {id:'movement_ok',label:'Movement joints correctly installed and sealed',type:'yn',req:true},
      {id:'edge_trims_ok',label:'Edge trims and threshold strips correctly installed',type:'yn'},
      {id:'protection_ok',label:'Protection in place',type:'yn',req:true},
      {id:'visual_comments',label:'Comments',type:'textarea',full:true},{id:'visual_photo',label:'Photo References',type:'text',full:true},
    ]},
    {title:'Defect Log',num:'03',fields:[{id:'defect_table',label:'Defects Identified',type:'defect_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'outcome',label:'Inspection Outcome',type:'select',opts:['Compliant','Requires Remedial Works','Escalated to NCR'],req:true,full:true},
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F09',title:'Material Delivery Log',hold:false,qitp:'MC-01 to MC-05',freq:'Every Delivery',
   desc:'Log all tile, adhesive, grout, sealant and accessory deliveries. Shade batch traceability, DoP confirmation and storage records.',
   sections:[
    {title:'Delivery Details',num:'01',fields:[
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'supplier',label:'Supplier',type:'text',req:true},{id:'date',label:'Date',type:'date',req:true},
      {id:'logged_by',label:'Logged By',type:'text',req:true},
    ]},
    {title:'Delivery Log',num:'02',fields:[{id:'delivery_table',label:'Deliveries Received',type:'delivery_table',full:true}]},
    {title:'Batch Allocation',num:'03',fields:[{id:'batch_alloc',label:'Batch Allocation to Installation Areas',type:'batch_alloc',full:true}]},
    {title:'Rejected Materials',num:'04',fields:[{id:'rejected_table',label:'Rejected Materials',type:'rejected_table',full:true}]},
    {title:'Declaration',num:'05',fields:[
      {id:'supervisor_name',label:'AJK Site Supervisor',type:'text',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F10',title:'Calibration Register',hold:false,qitp:'PRC-04, TC-03, TC-05',freq:'Periodic',
   desc:'Calibration register for pull-off bond testers, hygrometers, thermometers and all test equipment used in tiling works.',
   sections:[
    {title:'Register Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'maintained_by',label:'Maintained By',type:'text',req:true},{id:'review_date',label:'Last Review Date',type:'date',req:true},
    ]},
    {title:'Equipment Register',num:'02',fields:[{id:'equip_table',label:'Equipment',type:'equip_table',full:true}]},
    {title:'Out of Calibration Record',num:'03',fields:[{id:'oc_table',label:'Out of Calibration / Quarantine',type:'oc_table',full:true}]},
    {title:'Declaration',num:'04',fields:[
      {id:'qa_manager',label:'QA Manager',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'all_calibrated',label:'All equipment calibrated and in-date',type:'yn',req:true,full:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F11',title:'QA Pack Index',hold:true,qitp:'TC-05',freq:'On Completion',
   desc:'Confirms all F00–F10 records complete and signed. All hold points closed. HOLD POINT before Aconex submission.',
   sections:[
    {title:'Pack Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',req:true},
      {id:'install_num',label:'Installation Reference',type:'text',req:true},{id:'block',label:'Block / Plot',type:'text',req:true},
      {id:'level',label:'Level',type:'text',req:true},{id:'completion_date',label:'Date of Completion',type:'date',req:true},
      {id:'compiled_by',label:'Compiled By',type:'text',req:true},
    ]},
    {title:'Inspection Records Checklist',num:'02',fields:[
      {id:'f00_incl',label:'F00 Benchmark Acceptance (if applicable)',type:'yn'},
      {id:'f01_incl',label:'F01 Pre-Installation Checklist',type:'yn',req:true},
      {id:'f02_incl',label:'F02 Tiling Installation Record',type:'yn',req:true},
      {id:'f03_incl',label:'F03 Level and Lippage Log',type:'yn',req:true},
      {id:'f04_incl',label:'F04 SR Test Record (HOLD)',type:'yn',req:true},
      {id:'f05_incl',label:'F05 Adhesive Bond Strength Test (HOLD)',type:'yn',req:true},
      {id:'f06_incl',label:'F06 Grout and Movement Joint Record',type:'yn',req:true},
      {id:'f07_incl',label:'F07 Protection Log',type:'yn',req:true},
      {id:'f08_incl',label:'F08 Post Installation Inspection',type:'yn',req:true},
      {id:'f09_incl',label:'F09 Material Delivery Log',type:'yn',req:true},
      {id:'f10_incl',label:'F10 Calibration Register',type:'yn',req:true},
    ]},
    {title:'Hold Point Confirmation',num:'03',fields:[
      {id:'hp_benchmark',label:'Benchmark Accepted (F00)',type:'yn',req:true},
      {id:'hp_sr',label:'SR Test and Lippage Compliant (F04)',type:'yn',req:true},
      {id:'hp_bond',label:'Adhesive Bond Strength Test Passed (F05)',type:'yn',req:true},
      {id:'hp_qapack',label:'QA Pack Compiled (F11)',type:'yn',req:true},
    ]},
    {title:'Submission & Declaration',num:'04',fields:[
      {id:'aconex_mail',label:'Aconex Mail Type',type:'text',req:true},{id:'aconex_ref',label:'Aconex Reference No.',type:'text',req:true},
      {id:'submit_date',label:'Date Submitted',type:'date',req:true},{id:'qa_manager',label:'QA Manager',type:'text',req:true},
      {id:'contracts_mgr',label:'AJK Contracts Manager',type:'text',req:true},{id:'mpx_rep',label:'MPX Representative',type:'text',req:true},
      {id:'decl_date',label:'Declaration Date',type:'date',req:true},{id:'notes',label:'Notes',type:'textarea',full:true},
    ]},
  ]},
  {id:'F12',title:'Area Handover Certificate',hold:true,qitp:'Handover',freq:'Final Handover',
   desc:'Formal area release to Multiplex. All QITP tests passed and hold points closed. Tiling released for occupation.',
   sections:[
    {title:'Handover Details',num:'01',fields:[
      {id:'pkg_ref',label:'Package Reference',type:'text',val:'E901E',req:true},
      {id:'qitp_ref',label:'QITP Reference',type:'text',req:true},
      {id:'block',label:'Block / Plot',type:'text',req:true},{id:'level',label:'Level',type:'text',req:true},
      {id:'install_nums',label:'Installation Numbers',type:'text',req:true},
      {id:'install_complete',label:'Date of Tiling Completion',type:'date',req:true},
      {id:'handover_date',label:'Date of Handover Inspection',type:'date',req:true},
    ]},
    {title:'Compliance Summary',num:'02',fields:[
      {id:'c_level',label:'F03 — Level / Lippage Within Tolerance',type:'yn',req:true},
      {id:'c_sr',label:'F04 — SR Class Achieved',type:'yn',req:true},
      {id:'c_bond',label:'F05 — Bond Strength Test Passed',type:'yn',req:true},
      {id:'c_grout',label:'F06 — Grout and Movement Joints Complete',type:'yn',req:true},
      {id:'c_protect',label:'F07 — Protection and Cure Period Achieved',type:'yn',req:true},
      {id:'c_postinstall',label:'F08 — No Unresolved Defects',type:'yn',req:true},
      {id:'c_qapack',label:'F11 — QA Pack Submitted via Aconex',type:'yn',req:true},
    ]},
    {title:'Area Condition at Handover',num:'03',fields:[
      {id:'tiles_clean',label:'Tile surfaces clean and undamaged',type:'yn',req:true},
      {id:'no_hollow',label:'No hollow or debonded tiles',type:'yn',req:true},
      {id:'grout_ok',label:'Grout consistent, fully cured and complete',type:'yn',req:true},
      {id:'movement_ok',label:'Movement joints sealed and complete',type:'yn',req:true},
      {id:'no_loading_dmg',label:'No premature loading damage',type:'yn',req:true},
      {id:'suitable_occ',label:'Area suitable for occupation',type:'yn',req:true},
    ]},
    {title:'Declaration',num:'04',fields:[
      {id:'outstanding',label:'Outstanding Items',type:'select',opts:['No outstanding defects','Minor snags listed in notes (non-structural)','NCRs raised and closed'],req:true,full:true},
      {id:'ajk_supervisor',label:'AJK Site Supervisor',type:'text',req:true},{id:'ajk_qa',label:'AJK QA Manager',type:'text',req:true},
      {id:'mpx_rep',label:'MPX Representative',type:'text',req:true},{id:'decl_date',label:'Declaration Date',type:'date',req:true},
      {id:'notes',label:'Notes / Snag List',type:'textarea',full:true},
    ]},
  ]},
];

const FORM_LIBRARY = {
  screed: SCREED_FORMS,
  cb: CB_FORMS,
  raf: RAF_FORMS,
  hw: HW_FORMS,
  tiling: TILING_FORMS
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
    <div class="stat-card"><h4>Total Records</h4><div class="value">${total}</div></div>
    <div class="stat-card pass"><h4>Pass</h4><div class="value">${passes}</div></div>
    <div class="stat-card fail"><h4>Fail</h4><div class="value">${fails}</div></div>
    <div class="stat-card hold"><h4>Hold Points</h4><div class="value">${holds}</div></div>
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
  if (assignedFilter === "me") projectActions = projectActions.filter(a => a.assignedTo === currentUser);
  if (statusFilter === "open") projectActions = projectActions.filter(a => a.actionStatus === "open");
  else if (statusFilter === "in_progress") projectActions = projectActions.filter(a => a.actionStatus === "in_progress");
  else if (statusFilter === "closed") projectActions = projectActions.filter(a => a.actionStatus === "closed");
  else if (statusFilter === "overdue") projectActions = projectActions.filter(a => isOverdue(a));
  return projectActions.sort((a, b) => b.id - a.id);
}

function renderActionCards() {
  const wrap = document.getElementById("actionCards");
  wrap.innerHTML = "";
  const projectActions = getFilteredActions();
  if (projectActions.length === 0) {
    wrap.innerHTML = `<div class="select-card"><div class="select-card-top"><h4>No matching actions</h4><p>No actions match the current filters.</p></div></div>`;
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
  if (action.actionStatus === "open") action.actionStatus = "in_progress";
  else if (action.actionStatus === "in_progress") action.actionStatus = "closed";
  else action.actionStatus = "open";
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
  document.getElementById("formContextText").textContent = `${currentProject.name} · ${SCOPE_META[currentScope].title} · ${currentLocation.name}`;
  renderFormCards();
  renderLocationHistory();
  showView("forms");
}

function renderFormCards() {
  const wrap = document.getElementById("formCards");
  wrap.innerHTML = "";
  const items = FORM_LIBRARY[currentScope] || [];
  items.forEach((item, index) => {
    const metaBits = [];
    if (item.qitp) metaBits.push(`QITP: ${item.qitp}`);
    if (item.freq) metaBits.push(`Frequency: ${item.freq}`);
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${item.id || item.code} · ${item.title}</h4>
          <p>${item.desc || item.note || ""}</p>
          ${metaBits.length ? `<p>${metaBits.join(" · ")}</p>` : ""}
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
  const history = forms.filter(f => String(f.project) === String(currentProject.id) && String(f.location) === String(currentLocation.id)).sort((a, b) => b.id - a.id);
  if (history.length === 0) {
    wrap.innerHTML = `<div class="select-card"><div class="select-card-top"><h4>No records yet</h4><p>No inspection history has been recorded for this location.</p></div></div>`;
    return;
  }
  history.forEach(record => {
    const d = (record.fieldData && (record.fieldData.date || record.fieldData.test_date || record.fieldData.inspection_date || record.fieldData.review_date || record.fieldData.decl_date || record.fieldData.handover_date || record.fieldData.completion_date)) || "Not set";
    wrap.innerHTML += `
      <div class="select-card">
        <div class="select-card-top">
          <h4>${record.type}</h4>
          <p>Status: ${formatRecordStatus(record.status)}</p>
          <p>User: ${record.user || "Not set"}</p>
          <p>Date: ${d}</p>
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
  const reqMark = field.req ? ' <span class="req">*</span>' : '';
  const hint = field.hint ? `<div class="f-hint">${field.hint}</div>` : "";

  if (field.type === 'yn' || field.type === 'checkbox') {
    const checked = value ? 'checked' : '';
    return `
      <div class="${fullClass}">
        <label style="display:flex;align-items:flex-start;gap:10px;margin:0 0 14px;font-size:14px;font-weight:600;color:#1f2933;">
          <input id="dyn_${field.id}" data-field-id="${field.id}" type="checkbox" ${checked} style="width:auto;min-height:auto;margin-top:2px;" />
          <span>${field.label}${reqMark}</span>
        </label>
        ${hint}
      </div>
    `;
  }

  if (field.type === 'select-users') {
    const options = users.map(u => {
      const selected = String(value) === String(u.name) ? 'selected' : '';
      return `<option value="${u.name}" ${selected}>${u.name}</option>`;
    }).join('');
    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}${reqMark}</label>
        ${hint}
        <select id="dyn_${field.id}" data-field-id="${field.id}">${options}</select>
      </div>
    `;
  }

  if (field.type === 'select') {
    const opts = field.opts || field.options || [];
    const options = opts.map(opt => {
      const label = field.labels && field.labels[opt] ? field.labels[opt] : opt;
      const selected = String(value) === String(opt) ? 'selected' : '';
      return `<option value="${opt}" ${selected}>${label}</option>`;
    }).join('');
    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}${reqMark}</label>
        ${hint}
        <select id="dyn_${field.id}" data-field-id="${field.id}">${options}</select>
      </div>
    `;
  }

  if (field.type === 'textarea') {
    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}${reqMark}</label>
        ${hint}
        <textarea id="dyn_${field.id}" data-field-id="${field.id}" rows="${field.rows || 4}" placeholder="${field.placeholder || ''}">${value || ''}</textarea>
      </div>
    `;
  }

  if (!(field.type === 'text' || field.type === 'date' || field.type === 'number')) {
    return `
      <div class="${fullClass}">
        <label class="field-label" for="dyn_${field.id}">${field.label}${reqMark}</label>
        ${hint}
        <textarea id="dyn_${field.id}" data-field-id="${field.id}" rows="8" placeholder="Structured entry for ${field.type}">${value || ''}</textarea>
      </div>
    `;
  }

  return `
    <div class="${fullClass}">
      <label class="field-label" for="dyn_${field.id}">${field.label}${reqMark}</label>
      ${hint}
      <input id="dyn_${field.id}" data-field-id="${field.id}" type="${field.type || 'text'}" value="${value || ''}" placeholder="${field.placeholder || ''}" />
    </div>
  `;
}

function getCommonActionFields() {
  return [
    { id: 'actionAssignee', label: 'Assign Action To', type: 'select-users', full: false },
    { id: 'actionDueDate', label: 'Action Due Date', type: 'date', full: false },
    { id: 'actionStatus', label: 'Action Status', type: 'select', options: ['open','in_progress','closed'], labels: { open:'Open', in_progress:'In Progress', closed:'Closed' }, full: false }
  ];
}

function getDefaultFieldValue(field) {
  if (field.val !== undefined) return field.val;
  if (['date','test_date','inspection_date','review_date','decl_date','completion_date','handover_date','pour_date','release_date','submit_date'].includes(field.id)) {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
  if (['inspector','supervisor','tested_by','logged_by','compiled_by','maintained_by'].includes(field.id)) return currentUser || '';
  if (field.id === 'status') return currentForm && currentForm.hold ? 'hold' : 'pass';
  if (field.id === 'actionAssignee') return currentUser || '';
  if (field.id === 'actionDueDate') { const due = new Date(); due.setDate(due.getDate()+3); return due.toISOString().split('T')[0]; }
  if (field.id === 'actionStatus') return 'open';
  if (field.type === 'yn' || field.type === 'checkbox') return false;
  return '';
}

function openFormEntry(formIndex) {
  const items = FORM_LIBRARY[currentScope] || [];
  currentForm = items[formIndex];
  if (!currentForm) return;
  document.getElementById('entryContextText').textContent = `${currentProject.name} · ${SCOPE_META[currentScope].title} · ${currentLocation.name} · ${currentForm.id || currentForm.code}`;
  document.getElementById('ctxProject').textContent = currentProject.name;
  document.getElementById('ctxScope').textContent = SCOPE_META[currentScope].title;
  document.getElementById('ctxLocation').textContent = currentLocation.name;
  document.getElementById('ctxForm').textContent = `${currentForm.id || currentForm.code} · ${currentForm.title}`;
  document.getElementById('ctxUser').textContent = currentUser || '—';
  document.getElementById('entryFormTitle').textContent = `${currentForm.id || currentForm.code} · ${currentForm.title}`;
  const holdWarning = document.getElementById('holdWarning');
  if (currentForm.hold) holdWarning.classList.remove('hidden');
  else holdWarning.classList.add('hidden');

  const dynamicWrap = document.getElementById('dynamicFormFields');
  dynamicWrap.innerHTML = '';
  const sections = currentForm.sections || [{ title:'Inspection Record', num:'01', fields: currentForm.fields || [] }];
  sections.forEach(section => {
    dynamicWrap.innerHTML += `
      <div class="full" style="margin-bottom:16px;">
        <div style="padding:10px 12px;background:#24364d;color:#fff;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
          ${section.num || ''} · ${section.title}
        </div>
        <div class="form-grid" style="padding-top:14px;">
          ${(section.fields || []).map(renderField).join('')}
        </div>
      </div>
    `;
  });

  dynamicWrap.innerHTML += `
    <div class="full" style="margin-top:8px;margin-bottom:16px;">
      <div style="padding:10px 12px;background:#24364d;color:#fff;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">
        Action Management
      </div>
      <div class="form-grid" style="padding-top:14px;">
        ${getCommonActionFields().map(renderField).join('')}
      </div>
    </div>
  `;

  showView('entry');
}

function getFieldValue(fieldId, fieldType = null) {
  const el = document.getElementById(`dyn_${fieldId}`);
  if (!el) return '';
  if (fieldType === 'yn' || fieldType === 'checkbox') return el.checked;
  return el.value;
}

function inferRecordStatus(dynamicValues) {
  const statusFields = ['status','overall_status','overall_result','outcome','releaseStatus','benchmarkOutcome'];
  let statusValue = '';
  for (const k of statusFields) {
    if (dynamicValues[k]) { statusValue = dynamicValues[k]; break; }
  }
  const text = String(statusValue).toLowerCase();
  if (text.includes('hold')) return 'hold';
  if (text.includes('fail') || text.includes('reject') || text.includes('not proceed') || text.includes('not released') || text.includes('remedial')) return 'fail';
  const manual = dynamicValues.status;
  if (manual === 'hold') return 'hold';
  const sections = currentForm.sections || [{fields: currentForm.fields || []}];
  const boolFields = sections.flatMap(s => s.fields || []).filter(f => f.type === 'yn' || f.type === 'checkbox');
  if (boolFields.length) {
    const allChecked = boolFields.every(f => dynamicValues[f.id] === true);
    if (!allChecked && manual === 'pass') return currentForm.hold ? 'hold' : 'fail';
    if (allChecked && !manual) return 'pass';
    if (!allChecked && !manual) return currentForm.hold ? 'hold' : 'fail';
  }
  if (manual) return manual;
  if (currentForm.hold) return 'hold';
  return 'pass';
}

function submitEntry() {
  if (!currentProject || !currentScope || !currentLocation || !currentForm) return;
  const allFields = [
    ...((currentForm.sections || [{fields: currentForm.fields || []}]).flatMap(section => section.fields || [])),
    ...getCommonActionFields()
  ];
  const dynamicValues = {};
  allFields.forEach(field => { dynamicValues[field.id] = getFieldValue(field.id, field.type); });
  const recordStatus = inferRecordStatus(dynamicValues);

  const record = {
    id: Date.now(),
    project: currentProject.id,
    projectName: currentProject.name,
    scope: currentScope,
    scopeTitle: SCOPE_META[currentScope].title,
    type: `${currentForm.id || currentForm.code} · ${currentForm.title}`,
    location: currentLocation.id,
    locationName: currentLocation.name,
    status: recordStatus,
    user: currentUser,
    formCode: currentForm.id || currentForm.code,
    formTitle: currentForm.title,
    fieldData: dynamicValues
  };
  forms.push(record);

  if (recordStatus !== 'pass') {
    actions.push({
      id: Date.now() + 1,
      project: currentProject.id,
      scope: currentScope,
      scopeTitle: SCOPE_META[currentScope].title,
      location: currentLocation.id,
      locationName: currentLocation.name,
      sourceForm: `${currentForm.id || currentForm.code} · ${currentForm.title}`,
      title: `${currentForm.id || currentForm.code} ${currentForm.title} issue`,
      assignedTo: dynamicValues.actionAssignee || currentUser,
      createdBy: currentUser,
      createdDate: dynamicValues.date || dynamicValues.test_date || dynamicValues.inspection_date || dynamicValues.review_date || dynamicValues.decl_date || dynamicValues.handover_date || dynamicValues.completion_date || '',
      dueDate: dynamicValues.actionDueDate || '',
      actionStatus: dynamicValues.actionStatus || 'open',
      status: recordStatus,
      notes: dynamicValues.followUp || dynamicValues.notes || ''
    });
  }

  safeSave();
  alert('Record submitted.');
  selectLocation(currentLocation.id);
  showView('forms');
}

function init() {
  seedData();
  buildLoginUsers();
  showView('login');
}

init();
