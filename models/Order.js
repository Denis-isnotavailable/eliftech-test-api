const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    requisites: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    dishList: {
        shopId: {
            type: String,
            required: true,
        },
        dishes: [{
            dishId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        }],
        totalPrice: {
            type: Number,
            required: true,
        }
    }
}, { versionKey: false, timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;







// const dataOrders = [
//     {
//         id: 1,
//         requisites: {
//             name: "user",
//             email: "user@gmail.com",
//             phone: "+380957777777",
//             address: "adress"
//         },
//         dishList: {
//             shopId: 1,
//             dishId: [{dishId: 12, quantity: 2}]
//         }
//     },
// ];