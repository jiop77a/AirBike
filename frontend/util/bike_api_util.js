
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
