const axios = require('axios');

export default {
  async getRestaurants(ctx) {
    try {
      const response = await axios.get(
        'https://namastedev.com/api/v1/listRestaurants'
      );
      ctx.body = response.data;
    } catch (err) {
      ctx.throw(500, 'Error fetching restaurants');
    }
  },

  async getRestaurantMenu(ctx) {
    const { id } = ctx.params;

    try {
      const response = await axios.get(
        `https://namastedev.com/api/v1/listRestaurantMenu/${id}`
      );
      ctx.body = response.data;
    } catch (err) {
      ctx.throw(500, 'Error fetching menu');
    }
  },
};
