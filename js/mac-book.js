// declaration
const totalPrice = document.getElementById('total-price');
const grandTotalPrice = document.getElementById('grand-total-price');
const warningMsg = document.getElementById('snackbar');
const promoInput = document.getElementById('promo-input');
const promoSubmit = document.getElementById('promo-submit');

// fetch memory-cost and storage-cost
function getCost(hardwire, cost) {
    const memoryStorageCost = document.getElementById(hardwire + '-cost');
    memoryStorageCost.innerText = cost;
    getTotalCost();
}

// fetch delivery-charge
function deliveryCharge(charge) {
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = charge;
    getTotalCost();
}

// calculate total-price
function calculateTotal() {
    const memory = parseFloat(document.getElementById('memory-cost').innerText);
    const storage = parseFloat(document.getElementById('storage-cost').innerText);
    const delivery = parseFloat(document.getElementById('delivery-charge').innerText);
    let total = memory + storage + delivery;
    return total;
}

// return total-price
function getTotalCost() {
    totalPrice.innerText = 1299 + calculateTotal();
    grandTotalPrice.innerText = 1299 + calculateTotal();
}

// promo-code discount
let count = parseFloat(document.getElementById('try-left').innerText);
promoInput.addEventListener('keyup', function () {
    if (promoInput.value == 'stevekaku') {
        promoSubmit.removeAttribute('disabled');
        promoSubmit.addEventListener('click', function () {
            if (count > 0) {
                let totalValue = parseFloat(grandTotalPrice.innerText);
                const discount = totalValue / 5;
                totalValue -= discount;
                grandTotalPrice.innerText = totalValue;
                console.log(totalValue);
                count--;
                promoInput.disabled = true;
                promoInput.value = '';
                document.getElementById('try-left').innerText = count;
            }
            else {
                warningMessage();
            }
        })
    }
    else {
        promoSubmit.setAttribute('disabled', true);
    }
})

// warning message of coupon-code usage
function warningMessage() {
    warningMsg.style.visibility = 'visible';
    warningMsg.className = "show";
    promoSubmit.setAttribute('disabled', true);
    setTimeout(function () {
        warningMsg.style.visibility = 'hidden';
        warningMsg.className = "";
    }, 6000);
}

// getElementById
document.getElementById('8gb').addEventListener('click', function () {
    getCost('memory', 0);
})
document.getElementById('16gb').addEventListener('click', function () {
    getCost('memory', 180);
})
document.getElementById('256gb').addEventListener('click', function () {
    getCost('storage', 0);
})
document.getElementById('512gb').addEventListener('click', function () {
    getCost('storage', 100);
})
document.getElementById('1tb').addEventListener('click', function () {
    getCost('storage', 180);
})
document.getElementById('prime-delivery').addEventListener('click', function () {
    deliveryCharge(0);
})
document.getElementById('delivery-charge-button').addEventListener('click', function () {
    deliveryCharge(20);
})