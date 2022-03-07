import {getData} from './getData.js'

const wishList = ['idd001', 'idd034' ,'idd023' ,'idd099'];
const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd045',
        count: 1
    },
    {
        id: 'idd095',
        count: 2
    },
]

export const loadData = () => {

    if(location.search){
        const search  = decodeURI(location.search) ;
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];
        if(prop === 's') {
            getData.search(value, (data) => console.log(data))
        } else if (prop === 'wishlist'){
            getData.wishList(wishList, (data) => console.log(data))
        } else if(prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data))
        }
    }

    if(location.hash){
        getData.item(location.hash.substring(1), (data) => console.log(data))
    }

    if(location.pathname.includes('cart')) { //Корзина
        getData.cart(cartList, (data) => console.log(data))
    }  
}