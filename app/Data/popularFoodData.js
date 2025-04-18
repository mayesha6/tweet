import Burger from '@/public/img/food-burger.jpeg'
import Chicken from '@/public/img/food-chicken.jpeg'
import Kabab from '@/public/img/food-kabab.jpeg'
import Pizza from '@/public/img/food-pizza.jpeg'
const popularFoodData = [
    {
        id: 1,
        title:'Burger with Emmental Cheese',
        shopName: 'Burger King',
        deliveryDuration: '30 min',
        deliveryCharge: 2,
        regularPrice: 49.99,
        discount: 30,
        // price: regularPrice - ((discount*regularPrice)/100),
        rating: 4.6,
        image: Burger     
    },
    {
        id: 2,
        title:'Tandoori Chicken ',
        shopName: 'Burger King',
        deliveryDuration: '30 min',
        deliveryCharge: 2,
        regularPrice: 49.99,
        discount: 30,
        // price: regularPrice - ((discount*regularPrice)/100),
        rating: 4.6,
        image: Chicken     
    },
    {   
        id: 3,  
        title:'Döner Kebab ',
        shopName: 'Burger King',
        deliveryDuration: '30 min',
        deliveryCharge: 2,
        regularPrice: 49.99,
        discount: 30,
        // price: regularPrice - ((discount*regularPrice)/100),
        rating: 4.6,
        image: Kabab     
    },
    {
        id: 4,
        title:'Pepperoni Pizza Slice',
        shopName: 'Burger King',
        deliveryDuration: '30 min',
        deliveryCharge: 2,
        regularPrice: 49.99,
        discount: 30,
        // price: regularPrice - ((discount*regularPrice)/100),
        rating: 4.6,
        image: Pizza     
    }
]
export default popularFoodData
