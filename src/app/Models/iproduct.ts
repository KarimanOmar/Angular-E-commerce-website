import { DiscountOffers } from 'src/app/Models/discount-offers';

export interface IProduct {

  id: number
  Name: string
  Quantity: number
  Price: number
  totalPrice: number
  Img: string
  CateogryID: Number
  Discount: DiscountOffers
  productNumber: number
  Material: string;
  details?: string;
}
