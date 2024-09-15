export async function getCars({ model, manufacture, year, fuel, limit }) {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model || "corolla"}&make=${manufacture || ""}&fuel_type=${fuel || ""}&year=${year || ""}&limit=${limit || 10}`;
  const header = {
    "x-rapidapi-key": "2443de23e8msh6ee49910b317087p1609c4jsne841ed712e6a",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const res = await fetch(url, {
    headers: header,
  });
  const data = await res.json();

  return data;
}

export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export function getImageCar(car, angle) {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  url.searchParams.append("customer", `hrjavascript-mastery`);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angel", `${angle}`);
  return `${url}`;
}

export function generationSearchParams(type, value) {
  const searchParams = new URLSearchParams(window.location.search);
  if (value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }
  return `${window.location.pathname}?${searchParams}#AllCar`;
}
