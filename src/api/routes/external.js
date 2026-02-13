module.exports = {
  routes: [
    {
      method: "GET",
      path: "/listRestaurant",
      handler: "external.getRestaurantList",
      config: { auth: false },
    },
    {
      method: "GET",
      path: "/listRestaurantMenu",
      handler: "external.getRestaurantMenu",
      config: { auth: false },
    },
  ],
};
