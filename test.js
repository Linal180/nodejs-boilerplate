// const restaurant = {
//     _id: ObjectId("restaurant_id"),
//     name: "Restaurant Name",
//     location: "Restaurant Location",
//     contact_info: "Restaurant Contact Information",
//     menus: [
//       {
//         menu_name: "Desi Karahi",
//         description: "This dish is made with tender and juicy chicken that is cooked in a rich tomato-based gravy made",
//         submenus: [
//           {
//             submenu_name: "Submenu 1",
//             description: "Submenu 1 Description",
//             items: [
//               {
//                 item_name: "Item 1",
//                 description: "Item 1 Description",
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//               {
//                 item_name: "Item 2",
//                 description: "Item 2 Description",
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//             ],
//           },
//           {
//             submenu_name: "Submenu 2",
//             description: "Submenu 2 Description",
//             items: [
//               {
//                 item_name: "Item 3",
//                 description: "Item 3 Description",
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//               {
//                 item_name: "Item 4",
//                 description: "Item 4 Description",
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         menu_name: "Menu 2",
//         description: "Menu 2 Description",
//         submenus: [
//           // Submenus and items for Menu 2
//         ],
//       },
//     ],
//   };


// const restaurant = {
//     _id: ObjectId("restaurant_id"),
//     name: "Restaurant Name",
//     location: "Restaurant Location",
//     contact_info: "Restaurant Contact Information",
//     menus: [
//       {
//         menu_name: "Desi Karahi",
//         description: "This dish is made with tender and juicy chicken that is cooked in a rich tomato-based gravy made",
//         submenus: [
//           {
//             submenu_name: "Submenu 1",
//             description: "Submenu 1 Description",
//             items: [
//               {
//                 item_name: "Item 1",
//                 description: "Item 1 Description",
//                 variations: [
//                   {
//                     variation_name: "Spice Level",
//                     options: ["Mild", "Medium", "Spicy"],
//                   },
//                 ],
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//               {
//                 item_name: "Item 2",
//                 description: "Item 2 Description",
//                 variations: [
//                   {
//                     variation_name: "Spice Level",
//                     options: ["Mild", "Medium", "Spicy"],
//                   },
//                 ],
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//             ],
//           },
//           {
//             submenu_name: "Submenu 2",
//             description: "Submenu 2 Description",
//             items: [
//               {
//                 item_name: "Item 3",
//                 description: "Item 3 Description",
//                 variations: [
//                   {
//                     variation_name: "Spice Level",
//                     options: ["Mild", "Medium", "Spicy"],
//                   },
//                 ],
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//               {
//                 item_name: "Item 4",
//                 description: "Item 4 Description",
//                 variations: [
//                   {
//                     variation_name: "Spice Level",
//                     options: ["Mild", "Medium", "Spicy"],
//                   },
//                 ],
//                 prices: [
//                   { weight: "1kg", price: 100 },
//                   { weight: "2kg", price: 300 },
//                   { weight: "3kg", price: 500 },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         menu_name: "Menu 2",
//         description: "Menu 2 Description",
//         submenus: [
//           // Submenus and items for Menu 2
//         ],
//       },
//     ],
//   };
  

const restaurant = {
    _id: ObjectId("restaurant_id"),
    name: "Restaurant Name",
    location: "Restaurant Location",
    contact_info: "Restaurant Contact Information",
    catalogs: [
      {
        catalog_name: "Chicken",
        description: "This dish is made with tender and juicy chicken that is cooked in a rich tomato-based gravy made with.",
        image:[],
        categories: [
          {
            category_name: "Desi Chicken Karahi",
            image:[],

            subcategories: [
              {
                subcategory_name: "Chicken Couurma",
                products: [
                  {
                    product_name: "Desi Karahi",
                    description: "This dish is made with tender and juicy chicken that is cooked in a rich tomato-based gravy made.",
                    variations: [
                      {
                        variation_name: "Color",
                        options: ["Red", "Yellow", "Green"],
                      },
                      {
                        variation_name: "Size",
                        options: ["Small", "Medium", "Large"],
                      },
                      {
                        variation_name: "Weight",
                        options: ["1kg", "2kg", "3kg"],
                      },
                    ],
                    prices: [
                      { variation: "Red - Small - 1kg", price: 100 },
                      { variation: "Red - Small - 2kg", price: 200 },
                      // Add more pricing options for variations
                    ],
                  },
                  // Add more products with variations
                ],
              },
              {
                subcategory_name: "Beverages",
                products: [
                  {
                    product_name: "Soda",
                    description: "Refreshing soda in various flavors.",
                    variations: [
                      {
                        variation_name: "Flavor",
                        options: ["Cola", "Lemon-Lime", "Orange"],
                      },
                      {
                        variation_name: "Size",
                        options: ["Small", "Medium", "Large"],
                      },
                    ],
                    prices: [
                      { variation: "Cola - Small", price: 2 },
                      { variation: "Lemon-Lime - Small", price: 2 },
                      // Add more pricing options for variations
                    ],
                  },
                  // Add more beverage products with variations
                ],
              },
            ],
          },
          {
            category_name: "Clothing",
            subcategories: [
              // Subcategories and clothing products
            ],
          },
        ],
      },
      {
        catalog_name: "Specials Catalog",
        description: "This catalog includes special promotional items.",
        // Add categories, subcategories, and products for the specials catalog
      },
      // Add more catalogs with different types of products
    ],
  };
  