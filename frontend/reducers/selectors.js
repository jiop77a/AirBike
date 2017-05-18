import { values } from 'lodash';

export const selectFeaturedBikes = ({ bikes }) => {
  let featuredArr = [];
  values(bikes).forEach(bike => {
    if (bike.featured) {
      featuredArr.push(bike);
    }
  });
  return featuredArr;
};
