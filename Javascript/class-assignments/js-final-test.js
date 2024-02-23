// const stockPrices = [7,1,5,3,6,4];
// const stockPriceClone = JSON.parse(JSON.stringify(stockPrices));
// stockPriceClone.sort();

// let maxStockPrice = stockPriceClone[stockPriceClone.length-1];
// let minStockPrice = stockPriceClone[0];
// let maxProfit=0;

// for(let priceIndex = 0; priceIndex<stockPrices.length; priceIndex++)
// {
//     if(stockPrices[0].)
// }

const image = [[1,1,1],[1,1,0],[1,0,1]];
const originalImageClone = JSON.parse(JSON.stringify(image));
function floodFill(originalImageClone, sr, sc, modifiedColor)
{
    const currentPixelColor = originalImageClone[sr][sc];

    if(originalImageClone[sr+1][sc] === currentPixelColor && sr+1<=image.length)
    {
        floodFill(image,sr+1, sc, modifiedColor);
        image[sr+1][sc] = modifiedColor;
    }
    if(originalImageClone[sr][sc+1] === currentPixelColor && sc+1<=image.length)
    {
        floodFill(image,sr, sc+1, modifiedColor);
        image[sr][sc+1] = modifiedColor;
    }
    if(originalImageClone[sr-1][sc]  === currentPixelColor && sr-1>=0)
    {
        floodFill(image,sr-1, sc, modifiedColor);
        image[sr-1][sc] = modifiedColor;
    }
    if(originalImageClone[sr][sc-1]  === currentPixelColor && sc-1>=0)
    {
        floodFill(image,sr, sc-1, modifiedColor);
        image[sr][sc-1] = modifiedColor;
    }
    return image;
}
const modifiedImage = floodFill(image,1,1,2);
console.log(modifiedImage);

