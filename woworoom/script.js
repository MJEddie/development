const productWrap = document.querySelector('.productWrap');
const productSelect = document.querySelector('.productSelect');
const shoppingCartList = document.querySelector('.shoppingCartList');
const orderBtn = document.querySelector('.orderInfo-btn');

let productList = [];

function getProductList() {
    const URL = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`;
    axios.get(URL)
        .then(function(res) {
            console.log(res);
        })
        .catch(function(err) {
            console.log(err);
        })
}

getProductList();