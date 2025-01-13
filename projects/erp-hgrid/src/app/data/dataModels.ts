/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/naming-convention */

interface DeliveryDetails {
  dateOrdered: string | null;
  dateShipped: string | null;
  dateDelivered: string | null;
}

interface ContactDetails {
  email: string;
  linkedin: string;
  phone?: string;
}

export interface OrderDetails {
  country: string;
  countryFlag: CountryFlag;
  city: string;
  zipCode: number;
  streetName: string;
  streetNumber: string;
  customer: string;
  contactLinks: ContactDetails;
}

interface Order {
  orderId: number;
  status: OrderStatus;
  delivery: DeliveryDetails;
  orderInformation: OrderDetails;
}

export interface DataPoint {
  label: number | string;
  value: number | string;
}

export interface TemplateDataModel {
  sku: string;
  imageUrl: string;
  productName: string;
  category: string;
  rating: number;
  unitsSold: number;
  grossPrice: number;
  netPrice: number;
  totalNetProfit?: number;
  salesTrendData:DataPoint[];
  orders: Order[];
}

export enum OrderStatus  {
  PACKED = "Packed",
  IN_TRANSIT = "In Transit",
  CUSTOMS = "Customs",
  DELIVERED = "Delivered"
}

export enum CountryFlag {
  AUSTRALIA = "country-flags/Australia.svg",
  BELGIUM = "country-flags/Belgium.svg",
  BRAZIL = "country-flags/Brazil.svg",
  BULGARIA = "country-flags/Bulgaria.svg",
  CANADA = "country-flags/Canada.svg",
  CHINA = "country-flags/China.svg",
  DENMARK = "country-flags/Denmark.svg",
  FINLAND = "country-flags/Finland.svg",
  FRANCE = "country-flags/France.svg",
  GERMANY = "country-flags/Germany.svg",
  GREECE = "country-flags/Greece.svg",
  INDIA = "country-flags/India.svg",
  ITALY = "country-flags/Italy.svg",
  JAPAN = "country-flags/Japan.svg",
  NETHERLANDS = "country-flags/Netherlands.svg",
  POLAND = "country-flags/Poland.svg",
  ROMANIA = "country-flags/Romania.svg",
  UK = "country-flags/United Kingdom.svg",
  US = "country-flags/United States.svg",
  URUGUAY = "country-flags/Uruguay.svg"
}
