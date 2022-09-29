 let fruits;
 
 
 async function renderFruits(filter) {
    const fruitsWrapper = document.querySelector('.fruits');

    fruitsWrapper.classList += ' fruits__loading'
    if (!fruits) {
        fruits = await getFruits();
    }
  
    fruitsWrapper.classList.remove('fruits__loading')


    if (filter === 'LOW_TO_HIGH') {
        fruits.sort((a, b) => a.originalPrice - b.originalPrice); 
    }else if (filter === 'HIGH_TO_LOW') {
        fruits.sort((a, b) => b.originalPrice - a.originalPrice); 
    }else if (filter === 'Rating') {
        fruits.sort((a, b) => b.rating - a.rating); 
    }


    const fruitsHtml = fruits.map((fruit) => {
        return `<div class="fruit">
        <figure class="fruit__img--wrapper">
            <img class="fruit__img" src="${fruit.url}" alt="">
        </figure>
            <div class="fruit__title">
                ${fruit.title}
                </div>
            <div class="fruit__ratings">
                ${ratingsHTML(fruit.rating)}
            </div>
            <div class="fruit__price">
                <span>$${fruit.originalPrice.toFixed(2)}</span>
                <div>
                <span"> Type: ${fruit.type}
                </div>
                </div>
                    </div>`;
})
.join("");

fruitsWrapper.innerHTML = fruitsHtml;

}

function ratingsHTML(rating) {
    let ratingHTML = "";
    for (let i = 0; i < Math.floor(rating); ++i){
        ratingHTML += '<i class="fas fa-star"></i>';
    }if (!Number.isInteger(rating)) {
        ratingHTML += '<i class="fas fa-star-half"></i>';
    }
    return ratingHTML;
}

function filterFruits(event) {
    renderFruits(event.target.value);
}
setTimeout(() => {
    renderFruits();
});
renderFruits();


function getFruits() {
   return new Promise((resolve) =>{
      setTimeout(() => {
        resolve([
            {
                id:1,
                title: "Flare Fruit",
                url: "./assets/Flare.jpg",
                originalPrice: 800,
                salePrice: 229.95,
                rating: 4.5,
                type: "Logia"
            },
            {
                id: 2,
                title: "Pheonix",
                url: "./assets/pheonix.jpg",
                originalPrice: 1000,
                salePrice: 240.95,
                rating: 5.0,
                type: "Logia"
    
            },
            {
                id: 3,
                title: "Operational Fruit",
                url: "./assets/heart.jpg",
                originalPrice: 800,
                salePrice: 300.95,
                rating: 5.0,
                type: "Paramecia"
            },
            {
                id: 4,
                title: "Flower Fruit",
                url: "./assets/flower.jpg",
                originalPrice: 600,
                salePrice: 220.95,
                rating: 3,
                type: "Paramecia"
    
            },
            {
                id: 5,
                title: "Stone Fruit",
                url: "./assets/stone.jpg",
                originalPrice: 700,
                salePrice: 230.95,
                rating: 4,
                type: "Paramecia"
    
            },
            {
                id: 6,
                title: "Ice Fruit",
                url: "./assets/ice.jpg",
                originalPrice: 950,
                salePrice: 450.95,
                rating: 5.0,
                type: "Paramecia"
    
    
            },
            {
                id: 7,
                title: "Lava Fruit",
                url: "./assets/lava.jpg",
                originalPrice: 950,
                salePrice: 450.95,
                rating: 4.5,
                type: "Logia"
    
            },
            {
                id: 8,
                title: "Springy Fruit",
                url: "./assets/mochi.jpg",
                originalPrice: 900,
                salePrice: 450.95,
                rating: 5.0,
                type: "Logia"
    
            },
           
        ]);
      }, 1000);
    });
}
