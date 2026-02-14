import type { Schema, Struct } from '@strapi/strapi';

export interface RestaurantAggregatedDiscountInfoV3
  extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_aggregated_discount_info_v3s';
  info: {
    displayName: 'discount';
  };
  attributes: {
    header: Schema.Attribute.String;
    subHeader: Schema.Attribute.String;
  };
}

export interface RestaurantSla extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_slas';
  info: {
    displayName: 'sla';
  };
  attributes: {
    deliveryTime: Schema.Attribute.Integer;
    lastMileTravel: Schema.Attribute.Decimal;
    slaString: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'restaurant.aggregated-discount-info-v3': RestaurantAggregatedDiscountInfoV3;
      'restaurant.sla': RestaurantSla;
    }
  }
}
