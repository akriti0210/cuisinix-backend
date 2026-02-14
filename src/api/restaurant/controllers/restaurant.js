'use strict';

module.exports = {
  async customRestaurantList(ctx) {
    const restaurants = await strapi.entityService.findMany(
      'api::restaurant.restaurant',
      { fields: ['*'] }
    );

    const formatted = restaurants.map((r) => ({
      info: {
        resId: String(r.resId),
        name: r.name,
        cloudinaryImageId: r.cloudinaryImageId,
        locality: r.locality,
        areaName: r.areaName,
        costForTwo: r.costForTwo,
        cuisines: r.cuisines,
        avgRating: r.avgRating,
        avgRatingString: r.avgRatingString,
        totalRatingsString: r.totalRatingsString,
        veg: r.veg,
        sla: {
          deliveryTime: r.deliveryTime,
          lastMileTravel: r.lastMileTravel,
          slaString: r.slaString,
        },
        aggregatedDiscountInfoV3: {
          header: r.discountHeader,
          subHeader: r.discountSubHeader,
        },
      },
    }));

    ctx.body = {
      status: true,
      message: "Restaurant List fetched successfully",
      data: {
        data: {
          cards: [
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: formatted,
                    },
                  },
                },
              },
            },
          ],
        },
      },
    };
  },
};
