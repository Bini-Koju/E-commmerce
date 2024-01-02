let bagItemObjects;
let deliveryCharge = 50;
onload();

function onload() {
    loadBagItems();
    displayBagItems();
    displayBagSummary();
}

function loadBagItems() {
    bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < item.length; i++) {
            if (itemId == item[i].id) {
                return item[i];
            }
        }
    });
}


function displayBagItems() {
    let containerElement = document.querySelector(".bagContainer");
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateHtml(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}


function generateHtml(item) {
    return `  
    <div class="bagItemContainer">
        <div class="bagImage">
            <img src="./${item.itemimage}" alt="">
        </div>

        <div class="bagDetails">
            <div class="company">${item.company}</div>
            <div class="itemName">${item.itemName}</div>
            <div class="priceContainer">
                <span class="currentPrice">Rs ${item.currentPrice}</span>
                <span class="originalPrice">Rs ${item.originalPrice}</span>
                <span class="discount">(${item.discount}%off)</span>
            </div>

            <div class="returnPeriod">
                <span class="returnPeriodDays">${item.returnPeriod}days</span> return available
            </div>
            <div class="deliveryDate">
                Delivery upto:
                <span class="delivery-details-days">${item.deliveryDate}</span>
            </div>
        </div>
        <button class="removeCart" onclick="removeFromBag(${item.id})">X </button>
    </div>
`;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItems();
    displayBagItems();
    displayBagIcon();
    displayBagSummary();
}

function displayBagSummary() {
    let bagSummary = document.querySelector('.bagSummary');
    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.originalPrice;
        totalDiscount += bagItem.originalPrice - bagItem.currentPrice;
    });

    let finalPrice = totalMRP - totalDiscount + deliveryCharge;


    bagSummary.innerHTML = `
      <div class="bagDetailsContainer">
      <div class="priceHeader">PRICE DETAILS (${totalItem} Items) </div>
      <div class="priceItem">
        <span class="priceItemTag">Total MRP</span>
        <span class="priceItemValue">Rs ${totalMRP}</span>
      </div>
      <div class="priceItem">
        <span class="priceItemTag">Discount on MRP</span>
        <span class="priceItemValue priceAfterDiscount">-Rs ${totalDiscount}</span>
      </div>
      <div class="priceItem">
        <span class="priceItemTag">Delivery charge</span>
        <span class="priceItemValue">Rs 50</span>
      </div>
      <hr>
      <div class="priceFooter">
        <span class="priceItemTag">Total Amount</span>
        <span class="priceItemValue">₹${finalPrice}</span>
      </div>
     </div>
    <button class="orderBtn">PLACE ORDER</button>
    `;
}