const productWrap = document.querySelector('.productWrap');
const productSelect = document.querySelector('.productSelect');
const shoppingCartList = document.querySelector('.shoppingCartList');
const orderBtn = document.querySelector('.orderInfo-btn');

let productList = [];

// get product list
function getProductList() {
    const URL = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`;
    axios.get(URL)
        .then(function(res) {
            productList = res.data.products;
            renderProductList(productList);
        })
        .catch(function(err) {
            console.log(err);
        })
}

getProductList();

// Render
function renderProductList(data) {
    let str = '';
    data.forEach(list => {
        str += `<li class="productCard">
                <h4 class="productType">新品</h4>
                <img src="${list.images}" alt="">
                <a href="#" class="addCardBtn" data-id="${list.id}">加入購物車</a>
                <h3 data-title="${list.title}">${list.title}</h3>
                <del class="originPrice">NT$ ${toThousand(list.origin_price)}</del>
                <p class="nowPrice">NT$ ${toThousand(list.price)}</p>
            </li>`
    });
    productWrap.innerHTML = str;
}