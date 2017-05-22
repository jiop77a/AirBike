
export const fetchBikes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/bikes',
  })
);

export const fetchBike = id => (
  $.ajax({
    method: 'GET',
    url: `api/bikes/${id}`
  })
);


export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
);

export const destroyReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`
  })
);
