export default {
  routes: [
    {
      method: 'GET',
      path: '/restaurants',
      handler: 'restaurant.getRestaurants',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/restaurant-menu/:id',
      handler: 'restaurant.getRestaurantMenu',
      config: {
        auth: false,
      },
    },
  ],
};