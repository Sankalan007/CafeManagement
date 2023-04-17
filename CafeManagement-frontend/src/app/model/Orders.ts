import Order from './Order';

export default interface Orders {
  createdBy: string;
  email: string;
  firstName: string;
  lastName: string;
  orderType: string;
  paymentMethod: string;
  productDetail: Order[];
  totalAmount: number;
}
