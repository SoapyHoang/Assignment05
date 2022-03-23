window.addEventListener('load', () => {
    let processForm = () => {
        let inputs = document.querySelectorAll('#ID, #name, #ext, #email, #department, #submit')
        console.log("ID: " + inputs[0].value)
        console.log("Name: " + inputs[1].value)
        console.log("Extension: " + inputs[2].value)
        console.log("Email: " + inputs[3].value)
        console.log("Department: " + inputs[4].value)
    }
    let btn = document.getElementById('empForm')
    btn.addEventListener('submit', (submitForm) => {
        submitForm.preventDefault()
        processForm()
    })
})