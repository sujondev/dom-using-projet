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

function setValueByid(elementId, value) {
    const getElementById = document.getElementById(elementId)
    getElementById.innerText = value;
}

document.getElementById('calculate-total').addEventListener('click', function () {
    const newperPlayerAmount = getInputFeildById('per-player')
    const currentTotalExpense = newperPlayerAmount * 5
    const prevTotalExpense = getElementById('total-expenses')
    setValueByid('total-expenses', currentTotalExpense)
})




