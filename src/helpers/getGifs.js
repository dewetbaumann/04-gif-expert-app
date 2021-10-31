export const getGifs = async ( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=AhoDiakIuTdGRfc1Q9xoWJ4QTTrkf6ZB`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((elements) => {
        return {
            id: elements.id,
            title: elements.title,
            url: elements.images.downsized.url,
        }
    })

    return gifs;
}