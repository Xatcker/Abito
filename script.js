const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');

const cardWrapper = document.querySelector('.content-main_list');

const cardArray = [
    {
        id: 0,
        title: 'Пвх один',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 1,
        title: 'Пвх три',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    },
    {
        id: 2,
        title: 'Пвх сыр',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    }
    ,
    {
        id: 3,
        title: 'Пвх 4 материал 2й сорт',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    }
    ,
    {
        id: 4,
        title: 'Пвх 5 материал 2й сорт',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    }
    ,
    {
        id: 5,
        title: 'Пвх 6 материал 2й сорт',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    }
    ,
    {
        id: 6,
        title: 'Пвх материал 1й сорт',
        price: '176 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png'
    }
];




const render = (cardList) => {
    cardWrapper.innerHTML = ''
  cardList.forEach((item, idx) => {
    
    
    cardWrapper.insertAdjacentHTML('beforeend', 
        `<a href="./product.html" class="content-main_list-item">
                                    <div class="content-main_list-item--img">
                                        <img src="${item.img}" alt="card-img">
                                    </div>
                                    <h5 class="content-main_list-item--title">${item.title}</h5>
                                    <strong class="content-main_list-item--price">${item.price}</strong>
                                    <div class="content-main_list-item--desc-box">
                                        <span class="content-main_list-item--desc">${item.address}</span>
                                        <span class="content-main_list-item--desc">${item.date}</span>
                                    </div>
                                </a>`);
  });
};





cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'


const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
})




