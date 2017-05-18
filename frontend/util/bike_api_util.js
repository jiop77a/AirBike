
export const fetchBikes = data => (
  $.ajax({
    method: 'GET',
    url: 'api/bikes',
    data
  })
);

export const fetchBike = id => (
  $.ajax({
    method: 'GET',
    url: `api/bikes/${id}`
  })
);
