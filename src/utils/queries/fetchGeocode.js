export const fetchGeocode = async ({ queryKey }) => {
  const locations = queryKey[1];

  if (!locations.startAddress || !locations.endAddress) {
    return "";
  }

  const response1 = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${locations.startAddress.replace(
      " ",
      "+"
    )}&apiKey=${import.meta.env.VITE_HERE_API_KEY}`
  );

  const response2 = await fetch(
    `https://geocode.search.hereapi.com/v1/geocode?q=${locations.endAddress.replace(
      " ",
      "+"
    )}&apiKey=${import.meta.env.VITE_HERE_API_KEY}`
  );

  if (!response1.ok || !response2.ok) {
    throw new Error("something get wrong");
  }

  const data1 = await response1.json();
  const data2 = await response2.json();

  return [data1.items[0].position, data2.items[0].position];
};
