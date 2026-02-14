const { createStrapi } = require('@strapi/strapi');
const fs = require('fs');
const path = require('path');

(async () => {
  const app = await createStrapi().load();

  const filePath = path.join(__dirname, '../restaurant.json');
  const rawData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const item of rawData) {
    const info = item.info;

    await app.documents('api::restaurant.restaurant').create({
      data: {
        resId: info.resId,
        name: info.name,
        cloudinaryImageId: info.cloudinaryImageId,
        locality: info.locality,
        areaName: info.areaName,
        costForTwo: info.costForTwo,
        cuisines: info.cuisines,
        avgRating: info.avgRating,
        avgRatingString: info.avgRatingString,
        totalRatingsString: info.totalRatingsString,
        veg: info.veg,
        deliveryTime: info.sla?.deliveryTime,
        lastMileTravel: info.sla?.lastMileTravel,
        slaString: info.sla?.slaString,
        discountHeader: info.aggregatedDiscountInfoV3?.header,
        discountSubHeader: info.aggregatedDiscountInfoV3?.subHeader
      }
    });
  }

  console.log(`✅ Inserted ${rawData.length} restaurants`);
  process.exit(0);
})();
