const endPoint = "https://api.giphy.com/v1/gifs/search";
const api_key = "HUmIgy8FKt1tFPBIA8qnWc4C48Nq8pSx";
const limit = 20;

export const getGifs = async (category) => {
  const url = `${endPoint}?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};