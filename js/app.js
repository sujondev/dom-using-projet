
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
    return getElementById
}

document.getElementById('calculate-total').addEventListener('click', function () {
    const newperPlayerAmount = getInputFeildById('per-player')
    const currentTotalExpense = newperPlayerAmount * 5
    setValueByid('total-expenses', currentTotalExpense)
})

document.getElementById('final-total').addEventListener('click', function () {
    const getManagerFeild = getInputFeildById('manager-feild')
    const getCoachFeild = getInputFeildById('coach-feild')
    const newTotalExpense = getElementById('total-expenses')
    const finalTotalExpense = getManagerFeild + getCoachFeild + newTotalExpense;
    setValueByid('final-expense', finalTotalExpense)

})



