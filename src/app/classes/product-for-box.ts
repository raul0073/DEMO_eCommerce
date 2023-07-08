export class ProductForBox {
    constructor(public id: string,
        public thumbnail: string,
         public title: string, 
         public description: string,
         public brand: string,
         public price: number,
         public rating: number,
         public discountPercentage: number,
         public img2: string,
         public category: string,
         public qty: number = 0

        ) {
        this.id = id
        this.thumbnail = thumbnail
        this.title = title
        this.description = description
        this.brand = brand
        this.price = price
        this.rating = rating
        this.discountPercentage = discountPercentage
        this.img2 = img2
        this.category = category
        this.qty = qty
    }
}
