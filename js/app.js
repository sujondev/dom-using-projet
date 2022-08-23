
function addTocart(getTheCart) {
    const playerName = getTheCart.parentNode.parentNode.children[0].innerText
    const btn = getTheCart;

    const playerObj = {
        playerName: playerName,
    }
    if (arr.length <= 4) {
        arr.push(playerObj)
        cartItemset(arr)
        btn.disabled = true;
        return
    }
    else {
        alert('add 5 item')
        return
    }
}

document.getElementById('calculate-total').addEventListener('click', function () {
    const newperPlayerAmount = getInputFeildById('per-player')
    const currentTotalExpense = newperPlayerAmount * arr.length
    setValueByid('total-expenses', currentTotalExpense)
})

document.getElementById('final-total').addEventListener('click', function () {
    const getManagerFeild = getInputFeildById('manager-feild')
    const getCoachFeild = getInputFeildById('coach-feild')
    const newTotalExpense = getElementById('total-expenses')
    const finalTotalExpense = getManagerFeild + getCoachFeild + newTotalExpense;
    setValueByid('final-expense', finalTotalExpense)

})



