module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/restaurants/listRestaurants',
      handler: 'restaurant.customRestaurantList',
      config: { auth: false },
    },
  ],
};
