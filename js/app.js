// const selectButtons = document.getElementsByClassName('btn')
// for (const selectButton of selectButtons) {
//     selectButton.addEventListener('click', function (event) {

//     })
// }
function getInputFeildById(inputFeildId) {
    const getInputFeild = document.getElementById(inputFeildId)
    const getInputFeildString = getInputFeild.value;
    const getInputFeildValue = parseFloat(getInputFeildString);
    return getInputFeildValue
}

function getElementById(elementId) {
    const getElementId = document.getElementById(elementId);
    const elementIdString = getElementId.innerText;
    const elementIdValue = parseFloat(elementIdString)
    return elementIdValue
}



