const famousFood = [
    '牛肉麵',
    '小籠包',
    '滷肉飯',
    '大腸麵線',
    '蚵仔煎',
    '臭豆腐',
    '雞排',
    '珍珠奶茶',
    '刨冰',
    '鳳梨酥'
];
const orderItems = [];
const listItems = [];
let dragStartIndex;
creatList();

function creatList() {
    [...famousFood]
    .map(data => ({ value: data, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(data => data.value)
        .forEach((food, index) => {
            const orderItem = $('<li></li>').attr('data-index', index);
            orderItem.html(`
            <span class="number">${index + 1}</span>
            `)
            const listItem = $('<li></li>').attr('data-index', index);
            listItem.html(`
            <div class="draggable">
                <p class="food-name">${food}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
            `);
            listItems.push(listItem[0]);
            $('#order-list').append(orderItem);
            $('#draggable-list').append(listItem[0]);
        })
}

function checkOrder() {
    listItems.forEach((listItem, index) => {
        const foodName = listItem.querySelector('.draggable').innerText.trim()

        if (foodName !== famousFood[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    });
}


$('#draggable-list').sortable({
    start: function(e, ui) {
        $(this).attr('data-index', ui.item.index());
    },
    update: function(e, ui) {
        const newIndex = ui.item.index();
        const oldIndex = +$(this).attr('data-index');
        console.log(newIndex, oldIndex)
        const foodName = ui.item.text().trim();
        ui.item.attr('data-index', newIndex)
        if (foodName !== famousFood[newIndex]) {
            ui.item.find('p').css('color', '#ff3838')
        } else {
            ui.item.find('p').css('color', ' #3ae374')
        }
    }
})

$('#draggable-list').disableSelection();

$('#check').click(checkOrder);