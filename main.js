// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
//
// ======================================================================================================
// ======================================================================================================
//
let dummyjsonURL;

// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
    //
    let totalCarts = 0;
    let skipCartsLimit = 0;
    //
    function cartsFunc (skipCount) {
        //Код для пагінації
        if (skipCount >= totalCarts) {
            skipCount = 0;
            skipCartsLimit = 0;
        } else if (skipCount < 0) {
            skipCount = totalCarts - 10;
            skipCartsLimit = totalCarts - 10;
        } else {
            skipCartsLimit = skipCount;
        }
        //
        dummyjsonURL = new URL('https://dummyjson.com');
        dummyjsonURL.pathname += 'carts';
        dummyjsonURL.searchParams.set('limit', '10');
        //Пагінація
        //
        //
        dummyjsonURL.searchParams.set('skip', `${skipCount}`);
        //
        fetch(dummyjsonURL)
            .then(value => value.json())
            .then(carts => {
                //
            const {carts:cartsList} = carts;
            let task1Box = document.getElementById('task1-box');
            task1Box.innerHTML = '';
            //
            //
            for (const cart of cartsList) {
                let cartBox = document.createElement('div');
                cartBox.classList.add('border');
                cartBox.classList.add('margin-bottom');
                let h3 = document.createElement('h3');
                h3.innerText = `discountedTotal: ${cart.discountedTotal}, id: ${cart.id}, userId: ${cart.userId};`;
                let p = document.createElement('p');
                p.innerText = `total: ${cart.total}, totalProducts: ${cart.totalProducts}, totalQuantity: ${cart.totalQuantity};`;
                let cartProductsBlock = document.createElement(`div`);
                    cartProductsBlock.classList.add('cartProductsBlock');
                    const {products} = cart;
                for (const product of products) {
                        let cartProductBlock = document.createElement(`div`);
                        cartProductBlock.classList.add('cartProductBlock');
                        let img = document.createElement(`img`);
                        img.src = product.thumbnail;
                        let h4Product = document.createElement('h4');
                        h4Product.innerText = `title: ${product.title}`;
                        let pProduct = document.createElement('p');
                        pProduct.innerText = `quantity: ${product.quantity}, price: ${product.price}, discountedTotal: ${product.discountedTotal}`;
                        cartProductBlock.append(img, h4Product, pProduct);
                        cartProductsBlock.appendChild(cartProductBlock);
                    }
                //
                cartBox.append(h3, p, cartProductsBlock);
                task1Box.appendChild(cartBox);
            }
            totalCarts = carts.total;
        })
    }
    //
    cartsFunc(0);
    //
    //Пагінація
    let task1PrevButton = document.getElementById('task1-prevPage');
    task1PrevButton.onclick = function () {
        cartsFunc(skipCartsLimit - 10);
    }
    let task1NextButton = document.getElementById('task1-nextPage');
    task1NextButton.onclick = function () {
        cartsFunc(skipCartsLimit + 10);
    }


//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
    let totalRecipes = 0;
    let skipRecipesLimit = 0;
//
function recipesFunc (skipCount) {
    //Код для пагінації
    if (skipCount >= totalRecipes) {
        skipCount = 0;
        skipRecipesLimit = 0;
    } else if (skipCount < 0) {
        skipCount = totalRecipes - 10;
        skipRecipesLimit = totalRecipes - 10;
    } else {
        skipRecipesLimit = skipCount;
    }
    //
    dummyjsonURL = new URL('https://dummyjson.com');
    dummyjsonURL.pathname += 'recipes';
    dummyjsonURL.searchParams.set('limit', '10');
    //
    dummyjsonURL.searchParams.set('skip', `${skipCount}`);
    //
    //
    fetch(dummyjsonURL)
        .then(res => res.json())
        .then(recipesObj => {
            let {recipes} = recipesObj;
            let task2Box = document.getElementById('task2-box');
            task2Box.innerHTML = '';
            //
            for (const recipe of recipes) {
            let recipeBlock = document.createElement('div');
            recipeBlock.classList.add('recipeBlock');
            let recipeImg = document.createElement('img');
            let recipeHeaderh4 = document.createElement('h4');
            let recipeP = document.createElement('p');
            recipeImg.src = recipe.image;
            recipeImg.classList.add('img-width');
            recipeHeaderh4.innerText = `${recipe.name}`;
            recipeP.innerText = `cookTimeMinutes: ${recipe.cookTimeMinutes}`;
            //
                let ingredientsUl = document.createElement('ul');
                let {ingredients} = recipe;
                for (const ingredient of ingredients) {
                    let ingredientLi = document.createElement('li');
                    ingredientLi.innerText = `${ingredient}`;
                    ingredientsUl.appendChild(ingredientLi);
                }
            //
                recipeBlock.append(recipeImg, recipeHeaderh4, recipeP, ingredientsUl);
                task2Box.appendChild(recipeBlock);
            }
            //
            totalRecipes = recipesObj.total;
        });
}
//
    recipesFunc(skipRecipesLimit);
//
// Ще додав пагінацію.
    let task2PrevButton = document.getElementById('task2-prevPage');
    task2PrevButton.onclick = function () {
        recipesFunc(skipRecipesLimit - 10);
    }
    let task2NextButton = document.getElementById('task2-nextPage');
    task2NextButton.onclick = function () {
        recipesFunc(skipRecipesLimit + 10);
    }
