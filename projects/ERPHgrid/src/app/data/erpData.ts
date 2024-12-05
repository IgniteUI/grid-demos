import { CountryFlag, OrderStatus, TemplateDataModel } from "./dataModels";

export const InventoryList: TemplateDataModel[] = [{
    sku: "SKU1001",
    imageUrl: "assets/images/products/adidas-sports-shoes.jpg",
    productName: "Adidas Sports Shoes",
    category: "Footwear",
    rating: 3.5,
    unitsSold: 20,
    grossPrice: 49.99,
    netPrice: 39.99,
    orders: [
      {
        orderId: 1234,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-15",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United States",
            countryFlag: CountryFlag.US,
            city: "New York",
            zipCode: 10001,
            streetName: "5th Avenue",
            streetNumber: "501B",
            customer: "Joseph King",
            contactLinks: {
                email: "joseph.king@example.com",
                linkedin: "https://linkedin.com/in/joseph-king"
            }
        }
    },
    {
        orderId: 1235,
        status: OrderStatus.IN_TRANSIT,
        delivery: {
            dateOrdered: "2024-01-10",
            dateShipped: "2024-01-12",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 12345,
            streetName: "Yonge Street",
            streetNumber: "300C",
            customer: "Emma Taylor",
            contactLinks: {
                email: "emma.taylor@example.com",
                linkedin: "https://linkedin.com/in/emma-taylor"
            }
        }
    },
    {
        orderId: 1236,
        status: OrderStatus.CUSTOMS,
        delivery: {
            dateOrdered: "2024-01-05",
            dateShipped: "2024-01-08",
            dateDelivered: ""
        },
        orderInformation: {
            country: "France",
            countryFlag: CountryFlag.FRANCE,
            city: "Paris",
            zipCode: 75001,
            streetName: "Rue de Rivoli",
            streetNumber: "10A",
            customer: "Pierre Dubois",
            contactLinks: {
                email: "pierre.dubois@example.com",
                linkedin: "https://linkedin.com/in/pierre-dubois"
            }
        }
    },
    {
        orderId: 1237,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-01",
            dateShipped: "2024-01-03",
            dateDelivered: "2024-01-07"
        },
        orderInformation: {
            country: "Germany",
            countryFlag: CountryFlag.GERMANY,
            city: "Berlin",
            zipCode: 10115,
            streetName: "Unter den Linden",
            streetNumber: "25D",
            customer: "Hans Müller",
            contactLinks: {
                email: "hans.muller@example.com",
                linkedin: "https://linkedin.com/in/hans-muller"
            }
        }
    },
    {
        orderId: 2463,
        status: OrderStatus.IN_TRANSIT,
        delivery: {
            dateOrdered: "2024-01-15",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Italy",
            countryFlag: CountryFlag.ITALY,
            city: "Rome",
            zipCode: 100001,
            streetName: "Street 0",
            streetNumber: "100A",
            customer: "Customer 0",
            contactLinks: {
                email: "customer0@example.com",
                linkedin: "https://linkedin.com/in/customer0"
            }
        }
    },
    {
        orderId: 8001,
        status: OrderStatus.CUSTOMS,
        delivery: {
            dateOrdered: "2024-01-15",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 100001,
            streetName: "Street 0",
            streetNumber: "100A",
            customer: "Customer 0",
            contactLinks: {
                email: "customer0@example.com",
                linkedin: "https://linkedin.com/in/customer0"
            }
        }
    }
    ]
}];
