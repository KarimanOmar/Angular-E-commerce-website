// 1.	Add a custom service ‘Products Service’:
// a.	In the service add these functions (Depending on the classes you created before):
// i)	getProductsByCatID(catID): Products []
// ii)	getProductByID(prodID): Product




import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Models/discount-offers';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  public ProductList: IProduct[];
  public ClientName: String;
  public Cardnumber: String;
  constructor() {
    this.Cardnumber = '0000000000000000';
    this.ClientName = 'ahmed';
    this.ProductList = [
      {
        id: 1,
        Name: 'Meadow Wooden Top Side Table',
        Quantity: 1,
        Price: 1.199,
        totalPrice: 1.199,
        Img: 'https://media.homecentre.com/i/homecentre/163906878-163906878-HC13042022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 1,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 2,
        Name: 'Assel Wooden Top Coffee Table',
        Quantity: 0,
        Price: 2.799,
        totalPrice: 2.799,
        Img: 'https://media.homecentre.com/i/homecentre/163906875-163906875-HC13042022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 1,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 3,
        Name: 'Weyline Side Table',
        Quantity: 2,
        Price: 3.999,
        totalPrice: 3.999,
        Img: 'https://media.homecentre.com/i/homecentre/159592027-159592027-HCB1183OCT17_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 1,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 4,
        Name: ' Octon Nesting Tables - Set of 2',
        Quantity: 9,
        Price: 3.999,
        totalPrice: 3.999,
        Img: 'https://media.homecentre.com/i/homecentre/162121654-162121654-HC161219_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 1,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 5,
        Name: 'Meadow Wooden Top Coffee Table',
        Quantity: 8,
        Price: 1.799,
        totalPrice: 1.799,
        Img: 'https://media.homecentre.com/i/homecentre/163906877-163906877-HC13042022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 1,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 6,
        Name: ' Meadow Wooden Top Side Table',
        Quantity: 8,
        Price: 1.199,
        totalPrice: 1.199,
        Img: 'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 1,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 7,
        Name: ' Dayton 3-Piece Tea Table Set',
        Quantity: 10,
        Price: 13.769,
        totalPrice: 13.769,
        Img: 'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 2,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 8,
        Name: ' Mystique 2-Seater Mirror Top Tea Set',
        Quantity: 3,
        Price: 19.999,
        totalPrice: 19.999,
        Img: 'https://media.homecentre.com/i/homecentre/159638444-159638444-HC030319_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 2,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 9,
        Name: 'Valentina 10-Seater Wooden Top Dining Set',
        Quantity: 12,
        Price: 84.999,
        totalPrice: 84.999,
        Img: 'https://media.homecentre.com/i/homecentre/162780147-162780147-HC19102020_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 2,
        Discount: DiscountOffers.tenPercent,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 10,
        Name: 'Casablanca 8-Seater Mirror Top Dining Set',
        Quantity: 14,
        Price: 87.999,
        totalPrice: 87.999,
        Img: 'https://media.homecentre.com/i/homecentre/160321461-160321461-HC020518_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 2,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 11,
        Name: ' Meadow Wooden Top Side Table',
        Quantity: 1,
        Price: 28.949,
        totalPrice: 28.949,
        Img: 'https://media.homecentre.com/i/homecentre/160921626-160921626-HC011018_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 2,
        Discount: DiscountOffers.tenPercent,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 12,
        Name: ' Meadow Wooden Top Side Table',
        Quantity: 16,
        Price: 57.999,
        totalPrice: 57.999,
        Img: 'https://media.homecentre.com/i/homecentre/164434415-164434415-HC06072022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 2,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 13,
        Name: 'Espresso TV Unit',
        Quantity: 5,
        Price: 8.999,
        totalPrice: 8.999,
        Img: 'https://media.homecentre.com/i/homecentre/165358428-165358428-HC10022023_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 3,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 14,
        Name: ' Clover TV Unit',
        Quantity: 3,
        Price: 9.99,
        totalPrice: 9.99,
        Img: 'https://media.homecentre.com/i/homecentre/159662344-159662344-HCB1129SEP17_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 3,
        Discount: DiscountOffers.tenPercent,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 15,
        Name: 'Eterno TV Unit',
        Quantity: 8,
        Price: 29.999,
        totalPrice: 29.999,
        Img: 'https://media.homecentre.com/i/homecentre/159664038-159664038-HCB1423MAR18_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 3,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 16,
        Name: 'Accent TV Unit',
        Quantity: 3,
        Price: 22.999,
        totalPrice: 22.999,
        Img: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 3,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 17,
        Name: 'Dublin Wall Unit',
        Quantity: 6,
        Price: 24.999,
        totalPrice: 24.999,
        Img: 'https://media.homecentre.com/i/homecentre/155418292-155418292-HC020518_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 3,
        Discount: DiscountOffers.NoDiscount,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
      {
        id: 18,
        Name: 'Coby Extendable TV Unit',
        Quantity: 7,
        Price: 27.549,
        totalPrice: 27.549,
        Img: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c',
        CateogryID: 3,
        Discount: DiscountOffers.FifteenPercent,
        productNumber: 0,
        Material: "Wood",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"

      },
    ];
  }
  getAllProduct(): IProduct[] {
    return this.ProductList;
  }
  performfilter(filterValue: string): IProduct[] {
    filterValue = filterValue.toLowerCase();
    return this.ProductList.filter((prd: IProduct) =>
      prd.Name.toLowerCase().includes(filterValue)
    );
  }
  performfilterByCaticory(filterValue: number): IProduct[] {
    return this.ProductList.filter(
      (prd: IProduct) => prd.CateogryID == filterValue
    );
  }
  performfilterByPrice(filterValue: number): IProduct[] {
    return this.ProductList.filter((prd: IProduct) => prd.Price == filterValue);
  }
  getProductByID(productID: number): IProduct | undefined {
    return this.ProductList.find((pro) => pro.id == productID);
  }
  getProductsByCatID(): number[] {
    return this.ProductList.map((pro) => pro.id);
  }
}
// [
//   {
//     "id": 1,
//     "Name": "Meadow Wooden Top Side Table",
//     "Quantity": 1,
//     "Price": 1.199,
//     "totalPrice": 1.199,
//     "Img": "https://media.homecentre.com/i/homecentre/163906878-163906878-HC13042022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 1,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 2,
//     "Name": "Assel Wooden Top Coffee Table",
//     "Quantity": 0,
//     "Price": 2.799,
//     "totalPrice": 2.799,
//     "Img": "https://media.homecentre.com/i/homecentre/163906875-163906875-HC13042022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 1,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 3,
//     "Name": "Weyline Side Table",
//     "Quantity": 2,
//     "Price": 3.999,
//     "totalPrice": 3.999,
//     "Img": "https://media.homecentre.com/i/homecentre/159592027-159592027-HCB1183OCT17_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 1,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 4,
//     "Name": " Octon Nesting Tables - Set of 2",
//     "Quantity": 9,
//     "Price": 3.999,
//     "totalPrice": 3.999,
//     "Img": "https://media.homecentre.com/i/homecentre/162121654-162121654-HC161219_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 1,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 5,
//     "Name": "Meadow Wooden Top Coffee Table",
//     "Quantity": 8,
//     "Price": 1.799,
//     "totalPrice": 1.799,
//     "Img": "https://media.homecentre.com/i/homecentre/163906877-163906877-HC13042022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 1,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 6,
//     "Name": " Meadow Wooden Top Side Table",
//     "Quantity": 8,
//     "Price": 1.199,
//     "totalPrice": 1.199,
//     "Img": "https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 1,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 7,
//     "Name": " Dayton 3-Piece Tea Table Set",
//     "Quantity": 10,
//     "Price": 13.769,
//     "totalPrice": 13.769,
//     "Img": "https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 2,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 8,
//     "Name": " Mystique 2-Seater Mirror Top Tea Set",
//     "Quantity": 3,
//     "Price": 19.999,
//     "totalPrice": 19.999,
//     "Img": "https://media.homecentre.com/i/homecentre/159638444-159638444-HC030319_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 2,
//     "Discount": "10%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 9,
//     "Name": "Valentina 10-Seater Wooden Top Dining Set",
//     "Quantity": 12,
//     "Price": 84.999,
//     "totalPrice": 84.999,
//     "Img": "https://media.homecentre.com/i/homecentre/162780147-162780147-HC19102020_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 2,
//     "Discount": "10%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 10,
//     "Name": "Casablanca 8-Seater Mirror Top Dining Set",
//     "Quantity": 14,
//     "Price": 87.999,
//     "totalPrice": 87.999,
//     "Img": "https://media.homecentre.com/i/homecentre/160321461-160321461-HC020518_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 2,
//     "Discount": "10%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 11,
//     "Name": " Meadow Wooden Top Side Table",
//     "Quantity": 1,
//     "Price": 28.949,
//     "totalPrice": 28.949,
//     "Img": "https://media.homecentre.com/i/homecentre/160921626-160921626-HC011018_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 2,
//     "Discount": "15%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 12,
//     "Name": " Meadow Wooden Top Side Table",
//     "Quantity": 16,
//     "Price": 57.999,
//     "totalPrice": 57.999,
//     "Img": "https://media.homecentre.com/i/homecentre/164434415-164434415-HC06072022_01-2100.jpg?$prodimg-d-sqr-4$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 2,
//     "Discount": "15%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 13,
//     "Name": "Espresso TV Unit",
//     "Quantity": 5,
//     "Price": 8.999,
//     "totalPrice": 8.999,
//     "Img": "https://media.homecentre.com/i/homecentre/165358428-165358428-HC10022023_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 3,
//     "Discount": "15%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 14,
//     "Name": " Clover TV Unit",
//     "Quantity": 3,
//     "Price": 9.99,
//     "totalPrice": 9.99,
//     "Img": "https://media.homecentre.com/i/homecentre/159662344-159662344-HCB1129SEP17_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 3,
//     "Discount": "15%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 15,
//     "Name": "Eterno TV Unit",
//     "Quantity": 8,
//     "Price": 29.999,
//     "totalPrice": 29.999,
//     "Img": "https://media.homecentre.com/i/homecentre/159664038-159664038-HCB1423MAR18_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 3,
//     "Discount": "15%",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 16,
//     "Name": "Accent TV Unit",
//     "Quantity": 3,
//     "Price": 22.999,
//     "totalPrice": 22.999,
//     "Img": "https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 3,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 17,
//     "Name": "Dublin Wall Unit",
//     "Quantity": 6,
//     "Price": 24.999,
//     "totalPrice": 24.999,
//     "Img": "https://media.homecentre.com/i/homecentre/155418292-155418292-HC020518_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 3,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   },
//   {
//     "id": 18,
//     "Name": "Coby Extendable TV Unit",
//     "Quantity": 7,
//     "Price": 27.549,
//     "totalPrice": 27.549,
//     "Img": "https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?$prodimg-d-sqr-3$&$quality-standard$&fmt=auto&sm=c",
//     "CateogryID": 3,
//     "Discount": "NoDiscount",
//     "productNumber": 0,
//     "Material": "Wood",
//     "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Sed utperspiciatis unde omnis iste natus error sit voluptatem accusa doloremque laudantium, totam rem aperiam"
//   }
// ]
