let item = [
    {
        id: "390",
        itemimage: "images/ladies/1.jpg",
        rating: {
            stars: 3.5,
            noOfReview: 1200,
        },
        company: "zara",
        itemName: "floral lehenga",
        currentPrice: 3150,
        originalPrice: 3500,
        discount: 10,
        returnPeriod: 7,
        deliveryDate: "10 Jan 2024",
    },

    {
        id: "391",
        itemimage: "images/ladies/2.jpg",
        rating: {
            stars: 3.5,
            noOfReview: 1200,
        },
        company: "fashioonsetgo",
        itemName: "Black One piece",
        currentPrice: 2000,
        originalPrice: 1800,
        discount: 10,
        returnPeriod: 14,
        deliveryDate: "13 Jan 2024",
    },

    {
        id: "392",
        itemimage: "images/ladies/9.jpg",
        rating: {
            stars: 4.5,
            noOfReview: 10,
        },
        company: "Delight fashion",
        itemName: "Cami Top",
        currentPrice: 1000,
        originalPrice: 800,
        discount: 20,
        returnPeriod: 5,
        deliveryDate: "10 Feb 2024",
    },

    {
        id: "393",
        itemimage: "images/ladies/8.jpg",
        rating: {
            stars: 3.5,
            noOfReview: 1200,
        },
        company: "Supreme",
        itemName: "Wide Jeans",
        currentPrice: 1407,
        originalPrice: 1599,
        discount: 12,
        returnPeriod: 7,
        deliveryDate: "11 Jan 2024",
    },
    {
        id: "394",
        itemimage: "images/boys/4.jpg",
        rating: {
            stars: 3.0,
            noOfReview: 200,
        },
        company: "addidas",
        itemName: "Indian Cricket ODI Jersey",
        currentPrice: 999,
        originalPrice: 999,
        discount: 0,
        returnPeriod: 7,
        deliveryDate: "25 Jan 2024",
    },
    {
        id: "395",
        itemimage: "images/boys/5.jpg",
        rating: {
            stars: 3.5,
            noOfReview: 1200,
        },
        company: "roadster",
        itemName: "Pure Cotton T-shirt",
        currentPrice: 489,
        originalPrice: 1399,
        discount: 65,
        returnPeriod: 9,
        deliveryDate: "22 Feb 2024",
    },
    {
        id: "396",
        itemimage: "images/ladies/6.jpg",
        rating: {
            stars: 4.5,
            noOfReview: 1200,
        },
        company: "zara",
        itemName: "Black High Heels",
        currentPrice: 3150,
        originalPrice: 3500,
        discount: 10,
        returnPeriod: 7,
        deliveryDate: "16 Jan 2024",
    },
    {
        id: "397",
        itemimage: "images/boys/6.jpg",
        rating: {
            stars: 5.0,
            noOfReview: 4560,
        },
        company: "nike",
        itemName: "Men ReactX Running Shoes",
        currentPrice: 9700,
        originalPrice: 9700,
        discount: 0,
        returnPeriod: 7,
        deliveryDate: "10 Jan 2024",
    },

    {
        id: "398",
        itemimage: "images/boys/8.jpg",
        rating: {
            stars: 4.5,
            noOfReview: 200,
        },
        company: "Nivea",
        itemName: "Men Fresh Deodrant 150ml",
        currentPrice: 140,
        originalPrice: 280,
        discount: 50,
        returnPeriod: 15,
        deliveryDate: "27 Jan 2024",
    },

];

let bagItems;
whileLoad();

function whileLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItems();
    displayBagCount();
}

function displayItems() {
    let itemsCOntainerElement = document.getElementById("container");
    if (!itemsCOntainerElement) {
        return;
    }
    let innerHTML = ""
    item.forEach(item => {
        innerHTML +=
            `<div class="itemContainer">
<img class="itemImg" src=${item.itemimage} alt="">
<div class="rating">
    ${item.rating.stars} &#9733 | ${item.rating.noOfReview}
</div>
<div class="company">${item.company}</div>
<div class="itemName">${item.itemName}</div>
<div class="price">
    <span class="currentPrice">Rs ${item.currentPrice}</span>
    <span class="originalPrice">Rs ${item.originalPrice}</span>
    <span class="discount">(${item.discount}%off)</span>
</div>
<button class="addBtn" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`

    });


    itemsCOntainerElement.innerHTML = innerHTML;

}


function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    displayBagCount();
}

function displayBagCount() {
    let bagItemCount = document.querySelector(".bagItems")
    bagItemCount.innerText = bagItems.length;

}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bagItems');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}


