import productsList from "./products.json" with { type: "json" };
export function getProductSortedByPrice() {
    productsList.forEach((e, b) => console.log(e, b));
    const resul = productsList.sort((a, b) => a.price - b.price);
    return resul;
}
