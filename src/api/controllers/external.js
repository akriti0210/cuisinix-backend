const axios = require("axios");

module.exports = {
  // NamasteDev API
  // async getRestaurantMenu(ctx) {
  //   const { restaurantId } = ctx.params;

  //   try {
  //     const response = await axios.get(
  //       `https://namastedev.com/api/v1/listRestaurantMenu/${restaurantId}`
  //     );

  //     ctx.send(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     ctx.throw(500, "Failed to fetch restaurant menu");
  //   }
  // },

  // // Swiggy API
  // async getRestaurantList(ctx) {

  //   try {
  //     const res = await axios.get(
  //       `http://localhost:1337/api/listRestaurant`
  //     );

  //     ctx.send(res.data);
  //   } catch (err) {
  //     ctx.throw(500, "Swiggy API failed");
  //   }
  // },
};
