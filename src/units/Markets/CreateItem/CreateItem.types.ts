export interface ICreateItemForm {
  contents: string;
  name: string;
  price: number;
  remarks: string;
  images: string[];
  tags: string[];
  address: string;
  addressDetail: string;
  zipcode: string;
  lat: number;
  lng: number;
}
