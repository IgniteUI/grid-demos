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

interface OrderDetails {
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
    AUSTRALIA = "assets/images/country-flags/Australia.svg",
    BELGIUM = "assets/images/country-flags/Belgium.svg",
    BRAZIL = "assets/images/country-flags/Brazil.svg",
    BULGARIA = "assets/images/country-flags/Bulgaria.svg",
    CANADA = "assets/images/country-flags/Canada.svg",
    CHINA = "assets/images/country-flags/China.svg",
    DENMARK = "assets/images/country-flags/Denmark.svg",
    FINLAND = "assets/images/country-flags/Finland.svg",
    FRANCE = "assets/images/country-flags/France.svg",
    GERMANY = "assets/images/country-flags/Germany.svg",
    GREECE = "assets/images/country-flags/Greece.svg",
    INDIA = "assets/images/country-flags/India.svg",
    ITALY = "assets/images/country-flags/Italy.svg",
    JAPAN = "assets/images/country-flags/Japan.svg",
    NETHERLANDS = "assets/images/country-flags/Netherlands.svg",
    POLAND = "assets/images/country-flags/Poland.svg",
    ROMANIA = "assets/images/country-flags/Romania.svg",
    UK = "assets/images/country-flags/United Kingdom.svg",
    US = "assets/images/country-flags/United States.svg",
    URUGUAY = "assets/images/country-flags/Uruguay.svg"
}
