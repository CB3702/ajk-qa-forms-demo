function init(){

let userSelect=document.getElementById("userSelect")

users.forEach(u=>{
let o=document.createElement("option")
o.text=u.name
userSelect.add(o)
})

renderProjects()
renderLocations()
renderDashboard()

}

function createProject(){

let name=document.getElementById("projectName").value

projects.push({
id:Date.now(),
name:name
})

saveData()
renderProjects()

}

function renderProjects(){

let select=document.getElementById("projectSelect")
select.innerHTML=""

projects.forEach(p=>{
let o=document.createElement("option")
o.value=p.id
o.text=p.name
select.add(o)
})

}

function createLocation(){

let project=document.getElementById("projectSelect").value
let name=document.getElementById("locationName").value

locations.push({
id:Date.now(),
project:project,
name:name
})

saveData()
renderLocations()

}

function renderLocations(){

let select=document.getElementById("locationSelect")
select.innerHTML=""

locations.forEach(l=>{
let o=document.createElement("option")
o.value=l.id
o.text=l.name
select.add(o)
})

}

function submitForm(){

let form={
id:Date.now(),
scope:document.getElementById("scopeSelect").value,
type:document.getElementById("formType").value,
location:document.getElementById("locationSelect").value,
status:document.getElementById("statusSelect").value,
user:document.getElementById("userSelect").value
}

forms.push(form)

if(form.status!=="pass"){

actions.push({
title:form.type+" issue",
assigned:form.user,
status:"open"
})

}

saveData()
renderDashboard()

}

function renderDashboard(){

let stats=document.getElementById("stats")

let holds=forms.filter(f=>f.status==="hold").length
let fails=forms.filter(f=>f.status==="fail").length

stats.innerHTML=`
Open Hold Points: ${holds}<br>
Failed Forms: ${fails}
`

let actionDiv=document.getElementById("actions")

actionDiv.innerHTML=""

actions.forEach(a=>{
actionDiv.innerHTML+=`
<div>${a.title} — ${a.assigned}</div>
`
})

}

init()