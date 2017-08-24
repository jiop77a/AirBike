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

export const selectAllBikes = ({ bikes }) => values(bikes);

export const selectBookings = ({ bookings }) => values(bookings);

// export const getAverageRating = ({ reviews }) => {
//   let ratings = [];
//   for (let review in values(reviews)) {
//     ratings.push(review.rating);
//   }
//   let sum = ratings.reduce((acc, el) => acc + el);
//   return sum / ratings.length;
// };
