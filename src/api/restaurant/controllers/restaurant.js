import axios from 'axios';

export default {
  async getRestaurants(ctx) {
    try {
      console.log("Calling external API...");

      const response = await axios.get(
        "https://namastedev.com/api/v1/listRestaurants",
        {
          headers: {
            "User-Agent": "Mozilla/5.0",
            Accept: "application/json",
          },
          timeout: 10000,
        }
      );

      ctx.body = response.data;
    } catch (err) {
      console.error("AXIOS ERROR:");
      console.error("Message:", err.message);
      console.error("Code:", err.code);
      console.error("Response:", err.response?.data);

      ctx.throw(500, "Error fetching restaurants");
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
