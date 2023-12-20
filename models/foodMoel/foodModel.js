import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  colorVariations: [String],
  sizes: [String],
  hooded: Boolean,
  fabric: String,
  prices: [
    {
      size: String,
      price: Number,
    },
  ],
  // Define other product attributes here
});

// Define the subcategory schema
const subcategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory' // Reference to the Subcategory model
  }],
  products: [productSchema],
});

// Create a model based on the subcategory schema
const SubcategoryModel = mongoose.model("Subcategory", subcategorySchema);

// Define the food model schema
const foodModelSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory' // Reference to the Subcategory model
  }],
});

export default mongoose.model("foodModel", foodModelSchema);





// import mongoose from "mongoose";
// const foodModel = new mongoose.Schema({
//     category: {
//       type: String,
//       required: true,
//     },
//     subcategories: [
//       {
//         type: this, // This allows for recursive embedding of subcategories
//       },
//     ],
//     products: [
//       {
//         name: {
//           type: String,
//           required: true,
//         },
//         colorVariations: [String],
//         sizes: [String],
//         hooded: Boolean,
//         fabric: String,
//         prices: [
//           {
//             size: String,
//             price: Number,
//           },
//         ],
//         // Define other product attributes here
//       },
//     ],
//   });



//   export default mongoose.model("foodModel",foodModel)






// export const foodModel =mongoose.Schema(
//     {
//         "category": "Apparel",
//         "subcategories": [
//           {
//             "category": "Men",
//             "subcategories": [
//               {
//                 "category": "Pants",
//                 "subcategories": [
//                   {
//                     "category": "Jeans",
//                     "subcategories": [
//                       {
//                         "category": "Slim Fit Jeans",
//                         "products": []
//                       },
//                       {
//                         "category": "Bootcut Jeans",
//                         "products": []
//                       },
//                       {
//                         "category": "Straight Leg Jeans",
//                         "products": []
//                       }
//                     ]
//                   },
//                   {
//                     "category": "Chinos",
//                     "products": []
//                   },
//                   {
//                     "category": "Formal Pants",
//                     "products": []
//                   }
//                 ]
//               },
//               {
//                 "category": "Shirts",
//                 "subcategories": [
//                   {
//                     "category": "T-Shirts",
//                     "products": []
//                   },
//                   {
//                     "category": "Dress Shirts",
//                     "products": []
//                   },
//                   {
//                     "category": "Polo Shirts",
//                     "products": []
//                   }
//                 ]
//               },
//               {
//                 "category": "Suits",
//                 "subcategories": [
//                   {
//                     "category": "Business Suits",
//                     "products": []
//                   },
//                   {
//                     "category": "Casual Suits",
//                     "products": []
//                   },
//                   {
//                     "category": "Tuxedos",
//                     "products": []
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "category": "Women",
//             "subcategories": [
//               {
//                 "category": "Dresses",
//                 "subcategories": [
//                   {
//                     "category": "Long Dresses",
//                     "subcategories": [
//                       {
//                         "category": "Evening Gowns",
//                         "products": []
//                       },
//                       {
//                         "category": "Maxi Dresses",
//                         "products": []
//                       },
//                       {
//                         "category": "Summer Dresses",
//                         "products": []
//                       }
//                     ]
//                   },
//                   {
//                     "category": "Short Dresses",
//                     "products": []
//                   },
//                   {
//                     "category": "Evening Gowns",
//                     "products": []
//                   }
//                 ]
//               },
//               {
//                 "category": "Shorts",
//                 "subcategories": [
//                   {
//                     "category": "Denim Shorts",
//                     "products": []
//                   },
//                   {
//                     "category": "Athletic Shorts",
//                     "products": []
//                   },
//                   {
//                     "category": "Skirts",
//                     "products": []
//                   }
//                 ]
//               },
//               {
//                 "category": "Handbags",
//                 "subcategories": [
//                   {
//                     "category": "Tote Bags",
//                     "products": []
//                   },
//                   {
//                     "category": "Clutches",
//                     "products": []
//                   },
//                   {
//                     "category": "Shoulder Bags",
//                     "products": []
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
      
// )

// export const foodModel2 = mongoose.Schema(
//     {
//         "category": "Fashion",
//         "subcategories": [
//           {
//             "category": "Apparel",
//             "subcategories": [
//               {
//                 "category": "Outwears",
//                 "subcategories": [
//                   {
//                     "category": "Jackets",
//                     "products": [
//                       {
//                         "name": "Product Name",
//                         "colorVariations": ["Red", "Blue", "Black"],
//                         "sizes": ["S", "M", "L", "XL"],
//                         "hooded": true,
//                         "fabric": "Polyester",
//                         "prices": [
//                           {
//                             "size": "S",
//                             "price": 59.99
//                           },
//                           {
//                             "size": "M",
//                             "price": 64.99
//                           },
//                           {
//                             "size": "L",
//                             "price": 69.99
//                           }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     "category": "Vests",
//                     "products": []
//                   }
//                 ]
//               },
//               {
//                 "category": "Bottom Wears",
//                 "subcategories": [
//                   {
//                     "category": "Jeans",
//                     "products": [
//                       {
//                         "name": "Product Name",
//                         "colorVariations": ["Blue", "Black", "Gray"],
//                         "sizes": ["28", "30", "32", "34"],
//                         "fabric": "Denim",
//                         "prices": [
//                           {
//                             "size": "28",
//                             "price": 49.99
//                           },
//                           {
//                             "size": "30",
//                             "price": 54.99
//                           },
//                           {
//                             "size": "32",
//                             "price": 59.99
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           },
//           {
//             "category": "Non-Apparel",
//             "subcategories": [
//               {
//                 "category": "Footwear",
//                 "subcategories": [
//                   {
//                     "category": "Sneakers",
//                     "products": []
//                   },
//                   {
//                     "category": "Heels",
//                     "products": []
//                   }
//                 ]
//               },
//               {
//                 "category": "Accessories",
//                 "subcategories": [
//                   {
//                     "category": "Sunglasses",
//                     "products": []
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
      
// )


// const categorySchema = new mongoose.Schema({
//     category: {
//       type: String,
//       required: true,
//     },
//     subcategories: [
//       {
//         type: categorySchema, // This allows for recursive embedding of subcategories
//       },
//     ],
//     products: [
//       {
//         name: {
//           type: String,
//           required: true,
//         },
//         // Define other product attributes here
//       },
//     ],
//   });


//   const mongoose = require("mongoose");



//   a flexible schema that allows for a fully recursive structure for categories and subcategories.  Define the subcategory schema
// const subcategorySchema = new mongoose.Schema({
//   category: {
//     type: String,
//     required: true,
//   },
//   subcategories: [
//     {
//       type: this, // This allows for recursive embedding of subcategories
//     },
//   ],
//   products: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       // Define other product attributes here
//     },
//   ],
// });







  
  // Create a model based on the subcategory schema
//   const SubcategoryModel2 = mongoose.model("Subcategory2", subcategorySchema2);
  
//   module.exports = SubcategoryModel;

//   const dummyData = [
//     {
//       category: "Outwears",
//       subcategories: [
//         {
//           category: "Jackets",
//           products: [
//             {
//               name: "Red Jacket",
//               colorVariations: ["Red"],
//               sizes: ["S", "M", "L", "XL"],
//               hooded: true,
//               fabric: "Polyester",
//               prices: [
//                 { size: "S", price: 59.99 },
//                 { size: "M", price: 64.99 },
//                 { size: "L", price: 69.99 },
//               ],
//             },
//             {
//               name: "Blue Jacket",
//               colorVariations: ["Blue"],
//               sizes: ["S", "M", "L", "XL"],
//               hooded: true,
//               fabric: "Polyester",
//               prices: [
//                 { size: "S", price: 59.99 },
//                 { size: "M", price: 64.99 },
//                 { size: "L", price: 69.99 },
//               ],
//             },
//           ],
//         },
//         {
//           category: "Vests",
//           products: [
//             {
//               name: "Black Vest",
//               colorVariations: ["Black"],
//               sizes: ["S", "M", "L", "XL"],
//               hooded: false,
//               fabric: "Nylon",
//               prices: [
//                 { size: "S", price: 29.99 },
//                 { size: "M", price: 34.99 },
//                 { size: "L", price: 39.99 },
//               ],
//             },
//             {
//               name: "Gray Vest",
//               colorVariations: ["Gray"],
//               sizes: ["S", "M", "L", "XL"],
//               hooded: false,
//               fabric: "Nylon",
//               prices: [
//                 { size: "S", price: 29.99 },
//                 { size: "M", price: 34.99 },
//                 { size: "L", price: 39.99 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ];



// Create a model based on the subcategory schema
// const SubcategoryModel = mongoose.model("Subcategory", subcategorySchema);


// module.exports = SubcategoryModel;
