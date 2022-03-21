const $ul = $(".ul")
const $text = $(".text-input")
const $submit = $(".submit")
let obj = {
    skills: []
}

const handleSubmit = (e) => {
    e.preventDefault()
    //input made to variable
    const newSkill = $text.val()
    //push input variable to obj skills array
    obj.skills.push(newSkill)
    //create new li
    const $li = $("<li>")
    //add class for styling to li
    $li.addClass("li-color")
    //create new variable to hold li with newSkill and X button
    const buttonLi = $li.html(`<button>X</button> ${newSkill}`)
    //append buttonLi to ul
    $ul.append(buttonLi)
    //clear input
    $text.val('')
    //add class to button for style
    $("button").addClass("button-color")
    
    //save to local storage
    saveData()
    
    //use buttonLi for removing li and button all at once in deleting event listener 
    buttonLi.on("click", (e) => {
        buttonLi.remove()
    })
}
//used declarative to be able to use in handleSubmit
//save to local storage
function saveData() {
    //change obj to string
    const string = JSON.stringify(obj)
    //yes!
    console.log(string)
    window.localStorage.setItem("data", string)
}
//load local storage 
const loadData = ()=>{
    //get data from localStorage
    const getLocal = window.localStorage.getItem("data")
    if (getLocal) {
        const loaded = JSON.parse(getLocal)
        const arr = loaded.skills
        arr.forEach((item) => {
            console.log(item)
            obj.skills.push(item)
            const $li = $("<li>")
            $li.addClass("li-color")
            const buttonLi = $li.html(`<button class="button-color">X</button> ${item}`)
            $ul.append(buttonLi)
            buttonLi.on("click", (e) => {
                buttonLi.remove()
                console.log(arr)
            })
        
        })
    }
}
loadData()
$submit.on("click", handleSubmit)
