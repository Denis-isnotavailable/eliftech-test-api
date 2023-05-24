const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopname: {
      type: String,
      required: [true, 'Set shop name'],
    },
    menu: [{
        dishName: {
            type: String,
            required: [true, 'Set dish name'],
        },
        price: {
            type: Number,
            required: [true, 'Set dish price'],
        },
        img: {
            type: String
        }
    }]
}, { versionKey: false, timestamps: true });

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;






// const dataShops = [
//   {
//     id: 1,
//     name: "shop one",
//     menu: [
//       {
//         id: 11,
//         dishName: "burger 1",
//         price: 11,
//         img: "link"
//       },
//       {
//         id: 12,
//         dishName: "burger 2",
//         price: 12,
//         img: "link"
//       },
//       {
//         id: 13,
//         dishName: "burger 3",
//         price: 13,
//         img: "link"
//       },      
//     ]    
//   },
  
// ];

