const Shop = require('./models/Shop');
const Order = require('./models/Order');

const getAllShops = async (req, res) => {
    try {        
        const data = await Shop.find();   
        
        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e.message);
    }
}

const addShop = async (req, res) => {
    try {
        
    } catch (e) {
        console.log(e);
    }
}

const addOrder = async (req, res) => {
    try {
        const { requisites, dishList } = req.body;
        
        const data = await Order.create({ requisites, dishList });

        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e);
    }
}

const getAllOrders = async (req, res) => {
    try {
        const data = await Order.find();   
        
        res.json({ status: 'success', data });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getAllShops,
    addShop,
    addOrder,
    getAllOrders
}


// const shopname = "Mc Chicken";
//         const menu = [
//             {
//                 dishName: "Mc Chicken Burger 1",
//                 price: 100,
//                 img: "https://www.gastronom.ru/binfiles/images/20191205/b543df50.jpg"
//             },
//             {
//                 dishName: "Mc Chicken Burger 2",
//                 price: 200,
//                 img: "https://www.gastronom.ru/binfiles/images/20160203/b267a543.jpg"
//             },
//             {
//                 dishName: "Mc Chicken Burger 3",
//                 price: 100,
//                 img: "https://xcook.info/wp-content/cache/thumb/7d/261e49d78a8ad7d_750x375.jpg"
//             },
//             {
//                 dishName: "Mc Chicken Burger 4",
//                 price: 200,
//                 img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_vFC8Lzn-1gZ1O93a6-gY5r2Fgs25opqkAvhJ5l-swelLi9Cj3R9pnwWezI5pAGxPdY&usqp=CAU"
//             },
//         ];
//         const newShop = new Shop({shopname, menu});
//         await newShop.save();



        // const requisites = {
        //     name: "user",
        //     email: "user@gmail.com",
        //     phone: "+380957777777",
        //     address: "adress"
        // };
        // const dishList = {
        //     shopId: "646dec0ad578ee079bae1034",
        //     totalPrice: 200,
        //     dishes: [{dishId: "646dec0ad578ee079bae1035", quantity: 2}]
        // }