let users = JSON.parse(localStorage.getItem("users")) || [
{name:"Chris"},
{name:"Matt"},
{name:"Rafal"}
]

let projects = JSON.parse(localStorage.getItem("projects")) || []

let locations = JSON.parse(localStorage.getItem("locations")) || []

let forms = JSON.parse(localStorage.getItem("forms")) || []

let actions = JSON.parse(localStorage.getItem("actions")) || []

function saveData(){
localStorage.setItem("users",JSON.stringify(users))
localStorage.setItem("projects",JSON.stringify(projects))
localStorage.setItem("locations",JSON.stringify(locations))
localStorage.setItem("forms",JSON.stringify(forms))
localStorage.setItem("actions",JSON.stringify(actions))
}