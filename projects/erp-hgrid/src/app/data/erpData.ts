import { CountryFlag, OrderStatus, TemplateDataModel } from "./dataModels";
import { TREND_DATA } from "./productOrdersTrendsData";

export const InventoryList: TemplateDataModel[] = [
	{
		sku: "SKU1001",
		imageUrl: "products/adidas-sports-shoes-4762266_1920.jpg",
		productName: "Adidas Sports Shoes",
		category: "Footwear",
		rating: 3.5,
		grossPrice: 49.99,
		netPrice: 53.24,
    salesTrendData: TREND_DATA[0],
		orders: [
			{
				orderId: 1234,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
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
				orderId: 2345,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 23456,
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
				orderId: 3456,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-03",
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
				orderId: 4567,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
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
				orderId: 5678,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54321,
					streetName: "Via del Corso",
					streetNumber: "100A",
					customer: "Luca Rossi",
					contactLinks: {
						email: "luca.rossi@example.com",
						linkedin: "https://linkedin.com/in/luca-rossi"
					}
				}
			},
			{
				orderId: 6789,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 65432,
					streetName: "Avenida Paulista",
					streetNumber: "200B",
					customer: "Carlos Silva",
					contactLinks: {
						email: "carlos.silva@example.com",
						linkedin: "https://linkedin.com/in/carlos-silva"
					}
				}
			},
			{
				orderId: 7890,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 98765,
					streetName: "Marine Drive",
					streetNumber: "150B",
					customer: "Amit Mehta",
					contactLinks: {
						email: "amit.mehta@example.com",
						linkedin: "https://linkedin.com/in/amit-mehta"
					}
				}
			},
			{
				orderId: 8901,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "United Kingdom",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 34567,
					streetName: "Oxford Street",
					streetNumber: "200C",
					customer: "Elizabeth Brown",
					contactLinks: {
						email: "elizabeth.brown@example.com",
						linkedin: "https://linkedin.com/in/elizabeth-brown"
					}
				}
			},
			{
				orderId: 9012,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 56789,
					streetName: "Shinjuku Street",
					streetNumber: "50D",
					customer: "Hiroshi Tanaka",
					contactLinks: {
						email: "hiroshi.tanaka@example.com",
						linkedin: "https://linkedin.com/in/hiroshi-tanaka"
					}
				}
			}
		]
	},
	{
		sku: "SKU1002",
		imageUrl: "products/Android-Tablet-11inch-Depositphotos_41379049_L.jpg",
		productName: "Android Tablet 11 inch",
		category: "Electronics",
		rating: 5,
		grossPrice: 111.99,
		netPrice: 127.79,
    salesTrendData: TREND_DATA[1],
		orders: [
			{
				orderId: 3668,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 9088,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 2986,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 2306,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 6001,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 5064,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 8908,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 3992,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7454,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 7439,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 7884,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			},
			{
				orderId: 1217,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
					customer: "Customer 13",
					contactLinks: {
						email: "customer13@example.com",
						linkedin: "https://linkedin.com/in/customer13"
					}
				}
			},
			{
				orderId: 2222,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
					customer: "Customer 14",
					contactLinks: {
						email: "customer14@example.com",
						linkedin: "https://linkedin.com/in/customer14"
					}
				}
			},
			{
				orderId: 2341,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
					customer: "Customer 15",
					contactLinks: {
						email: "customer15@example.com",
						linkedin: "https://linkedin.com/in/customer15"
					}
				}
			},
			{
				orderId: 6504,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
					customer: "Customer 16",
					contactLinks: {
						email: "customer16@example.com",
						linkedin: "https://linkedin.com/in/customer16"
					}
				}
			},
			{
				orderId: 3384,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
					customer: "Customer 17",
					contactLinks: {
						email: "customer17@example.com",
						linkedin: "https://linkedin.com/in/customer17"
					}
				}
			},
			{
				orderId: 5184,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
					customer: "Customer 18",
					contactLinks: {
						email: "customer18@example.com",
						linkedin: "https://linkedin.com/in/customer18"
					}
				}
			},
			{
				orderId: 8824,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
					customer: "Customer 19",
					contactLinks: {
						email: "customer19@example.com",
						linkedin: "https://linkedin.com/in/customer19"
					}
				}
			},
			{
				orderId: 6498,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
					customer: "Customer 20",
					contactLinks: {
						email: "customer20@example.com",
						linkedin: "https://linkedin.com/in/customer20"
					}
				}
			},
			{
				orderId: 5649,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 9539,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 3984,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 4042,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 1922,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			},
			{
				orderId: 8364,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 4856,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 3730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 2312,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 6716,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 8911,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 9728,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 3961,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 4159,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 7266,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 9165,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 5787,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 3379,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			}
		]
	},
	{
		sku: "SKU1003",
		imageUrl: "products/Apple-Magic-Mouse-Depositphotos_2984466_L.jpg",
		productName: "Apple Magic Mouse",
		category: "Accessories",
		rating: 3.5,
		grossPrice: 119.99,
		netPrice: 127.79,
    salesTrendData: TREND_DATA[2],
		orders: [
			{
				orderId: 6636,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 1757,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 9540,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5072,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Poland",
					countryFlag: CountryFlag.POLAND,
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 6883,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 7779,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 3356,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 7814,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7978,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 9865,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 2538,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			}
		]
	},
	{
		sku: "SKU1004",
		imageUrl: "products/ballpoint-pen-273656_1920.jpg",
		productName: "Ballpoint Pen",
		category: "Office Supplies",
		rating: 5,
		grossPrice: 13.99,
		netPrice: 14.9,
    salesTrendData: TREND_DATA[3],
		orders: [
			{
				orderId: 1367,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 93345,
					streetName: "Street 47",
					streetNumber: "404A",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 6198,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-08",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 12710,
					streetName: "Street 47",
					streetNumber: "33B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 2070,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 55326,
					streetName: "Street 15",
					streetNumber: "398C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 7536,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 67187,
					streetName: "Street 40",
					streetNumber: "68A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 5478,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-17",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 36934,
					streetName: "Street 32",
					streetNumber: "462C",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 3333,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-05",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 69061,
					streetName: "Street 42",
					streetNumber: "979A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 8446,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 40350,
					streetName: "Street 38",
					streetNumber: "343B",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 1720,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 27471,
					streetName: "Street 50",
					streetNumber: "895B",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 9331,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 13811,
					streetName: "Street 29",
					streetNumber: "816A",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 3556,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 13264,
					streetName: "Street 5",
					streetNumber: "490B",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 7227,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-26",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 30240,
					streetName: "Street 18",
					streetNumber: "606C",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 3204,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 23659,
					streetName: "Street 31",
					streetNumber: "422C",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			},
			{
				orderId: 9396,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 90690,
					streetName: "Street 28",
					streetNumber: "233A",
					customer: "Customer 13",
					contactLinks: {
						email: "customer13@example.com",
						linkedin: "https://linkedin.com/in/customer13"
					}
				}
			},
			{
				orderId: 4507,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 82167,
					streetName: "Street 37",
					streetNumber: "661B",
					customer: "Customer 14",
					contactLinks: {
						email: "customer14@example.com",
						linkedin: "https://linkedin.com/in/customer14"
					}
				}
			},
			{
				orderId: 3512,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 10198,
					streetName: "Street 41",
					streetNumber: "888C",
					customer: "Customer 15",
					contactLinks: {
						email: "customer15@example.com",
						linkedin: "https://linkedin.com/in/customer15"
					}
				}
			},
			{
				orderId: 2045,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 64248,
					streetName: "Street 30",
					streetNumber: "963C",
					customer: "Customer 16",
					contactLinks: {
						email: "customer16@example.com",
						linkedin: "https://linkedin.com/in/customer16"
					}
				}
			},
			{
				orderId: 9911,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-05",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 96708,
					streetName: "Street 46",
					streetNumber: "923B",
					customer: "Customer 17",
					contactLinks: {
						email: "customer17@example.com",
						linkedin: "https://linkedin.com/in/customer17"
					}
				}
			},
			{
				orderId: 8937,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 13581,
					streetName: "Street 2",
					streetNumber: "345A",
					customer: "Customer 18",
					contactLinks: {
						email: "customer18@example.com",
						linkedin: "https://linkedin.com/in/customer18"
					}
				}
			},
			{
				orderId: 4707,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 28725,
					streetName: "Street 5",
					streetNumber: "432A",
					customer: "Customer 19",
					contactLinks: {
						email: "customer19@example.com",
						linkedin: "https://linkedin.com/in/customer19"
					}
				}
			},
			{
				orderId: 3482,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 84535,
					streetName: "Street 43",
					streetNumber: "741A",
					customer: "Customer 20",
					contactLinks: {
						email: "customer20@example.com",
						linkedin: "https://linkedin.com/in/customer20"
					}
				}
			}
		]
	},
	{
		sku: "SKU1005",
		imageUrl: "products/Barcode-reader-Depositphotos_9927983_L.jpg",
		productName: "Barcode Reader",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 31.48,
		netPrice: 33.53,
    salesTrendData: TREND_DATA[4],
		orders: [
			{
				orderId: 3988,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 90688,
					streetName: "Street 33",
					streetNumber: "717B",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 1482,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 34472,
					streetName: "Street 2",
					streetNumber: "415A",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 5765,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 62158,
					streetName: "Street 24",
					streetNumber: "419A",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 3864,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-12"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 57141,
					streetName: "Street 40",
					streetNumber: "839C",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 3396,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "2024-12-12",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 95678,
					streetName: "Street 14",
					streetNumber: "297C",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			}
		]
	},
	{
		sku: "SKU1006",
		imageUrl: "products/Barcode-readers-Depositphotos_10803475_L.jpg",
		productName: "Barcode Readers Pack",
		category: "Electronics",
		rating: 5,
		grossPrice: 56.33,
		netPrice: 59.99,
    salesTrendData: TREND_DATA[5],
		orders: [
			{
				orderId: 9976,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 45797,
					streetName: "Street 36",
					streetNumber: "49B",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 5062,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 62471,
					streetName: "Street 18",
					streetNumber: "34C",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 4640,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 77658,
					streetName: "Street 34",
					streetNumber: "635C",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 4810,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 57877,
					streetName: "Street 40",
					streetNumber: "451A",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 4241,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 53308,
					streetName: "Street 29",
					streetNumber: "538A",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 9070,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-14",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 39952,
					streetName: "Street 15",
					streetNumber: "830A",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 7654,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 89167,
					streetName: "Street 24",
					streetNumber: "282C",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 7647,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 29077,
					streetName: "Street 37",
					streetNumber: "784A",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 5360,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 57993,
					streetName: "Street 25",
					streetNumber: "445A",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 4032,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 25933,
					streetName: "Street 4",
					streetNumber: "888C",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 3391,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 61583,
					streetName: "Street 24",
					streetNumber: "110B",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 6604,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 60545,
					streetName: "Street 3",
					streetNumber: "882C",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 6012,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 55210,
					streetName: "Street 32",
					streetNumber: "769B",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			},
			{
				orderId: 4584,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 28512,
					streetName: "Street 24",
					streetNumber: "20C",
					customer: "Customer 39",
					contactLinks: {
						email: "customer39@example.com",
						linkedin: "https://linkedin.com/in/customer39"
					}
				}
			}
		]
	},
	{
		sku: "SKU1007",
		imageUrl: "products/Black-espresso-maker-Depositphotos_166033946_L.jpg",
		productName: "Black Espresso Maker",
		category: "Home Appliances",
		rating: 3.5,
		grossPrice: 109.99,
		netPrice: 117.14,
    salesTrendData: TREND_DATA[6],
		orders: [
			{
				orderId: 4922,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 31660,
					streetName: "Street 31",
					streetNumber: "847A",
					customer: "Customer 40",
					contactLinks: {
						email: "customer40@example.com",
						linkedin: "https://linkedin.com/in/customer40"
					}
				}
			},
			{
				orderId: 4303,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 80912,
					streetName: "Street 36",
					streetNumber: "187B",
					customer: "Customer 41",
					contactLinks: {
						email: "customer41@example.com",
						linkedin: "https://linkedin.com/in/customer41"
					}
				}
			},
			{
				orderId: 3985,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 64528,
					streetName: "Street 30",
					streetNumber: "733C",
					customer: "Customer 42",
					contactLinks: {
						email: "customer42@example.com",
						linkedin: "https://linkedin.com/in/customer42"
					}
				}
			},
			{
				orderId: 8594,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 56481,
					streetName: "Street 22",
					streetNumber: "718A",
					customer: "Customer 43",
					contactLinks: {
						email: "customer43@example.com",
						linkedin: "https://linkedin.com/in/customer43"
					}
				}
			},
			{
				orderId: 7481,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "2024-12-07",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 65465,
					streetName: "Street 39",
					streetNumber: "566C",
					customer: "Customer 44",
					contactLinks: {
						email: "customer44@example.com",
						linkedin: "https://linkedin.com/in/customer44"
					}
				}
			},
			{
				orderId: 3509,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25704,
					streetName: "Street 23",
					streetNumber: "283C",
					customer: "Customer 45",
					contactLinks: {
						email: "customer45@example.com",
						linkedin: "https://linkedin.com/in/customer45"
					}
				}
			},
			{
				orderId: 5440,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 50026,
					streetName: "Street 11",
					streetNumber: "145A",
					customer: "Customer 46",
					contactLinks: {
						email: "customer46@example.com",
						linkedin: "https://linkedin.com/in/customer46"
					}
				}
			}
		]
	},
	{
		sku: "SKU1008",
		imageUrl: "products/Canon_Depositphotos_1793394_L.jpg",
		productName: "Canon Photo Camera",
		category: "Photography",
		rating: 5,
		grossPrice: 119.99,
		netPrice: 127.79,
    salesTrendData: TREND_DATA[7],
		orders: [
			{
				orderId: 8235,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 48193,
					streetName: "Street 28",
					streetNumber: "927C",
					customer: "Customer 47",
					contactLinks: {
						email: "customer47@example.com",
						linkedin: "https://linkedin.com/in/customer47"
					}
				}
			},
			{
				orderId: 1643,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 64564,
					streetName: "Street 1",
					streetNumber: "101A",
					customer: "Customer 48",
					contactLinks: {
						email: "customer48@example.com",
						linkedin: "https://linkedin.com/in/customer48"
					}
				}
			},
			{
				orderId: 1786,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-12",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 25197,
					streetName: "Street 36",
					streetNumber: "689B",
					customer: "Customer 49",
					contactLinks: {
						email: "customer49@example.com",
						linkedin: "https://linkedin.com/in/customer49"
					}
				}
			},
			{
				orderId: 9206,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-27",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 77659,
					streetName: "Street 48",
					streetNumber: "298C",
					customer: "Customer 50",
					contactLinks: {
						email: "customer50@example.com",
						linkedin: "https://linkedin.com/in/customer50"
					}
				}
			},
			{
				orderId: 9578,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 43864,
					streetName: "Street 25",
					streetNumber: "886A",
					customer: "Customer 51",
					contactLinks: {
						email: "customer51@example.com",
						linkedin: "https://linkedin.com/in/customer51"
					}
				}
			},
			{
				orderId: 1032,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 44788,
					streetName: "Street 10",
					streetNumber: "286C",
					customer: "Customer 52",
					contactLinks: {
						email: "customer52@example.com",
						linkedin: "https://linkedin.com/in/customer52"
					}
				}
			},
			{
				orderId: 6207,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 55589,
					streetName: "Street 16",
					streetNumber: "476C",
					customer: "Customer 53",
					contactLinks: {
						email: "customer53@example.com",
						linkedin: "https://linkedin.com/in/customer53"
					}
				}
			},
			{
				orderId: 3624,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-18",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 13725,
					streetName: "Street 39",
					streetNumber: "596A",
					customer: "Customer 54",
					contactLinks: {
						email: "customer54@example.com",
						linkedin: "https://linkedin.com/in/customer54"
					}
				}
			},
			{
				orderId: 7800,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 24178,
					streetName: "Street 36",
					streetNumber: "411C",
					customer: "Customer 55",
					contactLinks: {
						email: "customer55@example.com",
						linkedin: "https://linkedin.com/in/customer55"
					}
				}
			},
			{
				orderId: 5870,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 61522,
					streetName: "Street 10",
					streetNumber: "989A",
					customer: "Customer 56",
					contactLinks: {
						email: "customer56@example.com",
						linkedin: "https://linkedin.com/in/customer56"
					}
				}
			},
			{
				orderId: 4421,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 90362,
					streetName: "Street 35",
					streetNumber: "936B",
					customer: "Customer 57",
					contactLinks: {
						email: "customer57@example.com",
						linkedin: "https://linkedin.com/in/customer57"
					}
				}
			},
			{
				orderId: 5625,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 13065,
					streetName: "Street 6",
					streetNumber: "842A",
					customer: "Customer 58",
					contactLinks: {
						email: "customer58@example.com",
						linkedin: "https://linkedin.com/in/customer58"
					}
				}
			},
			{
				orderId: 8127,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-23",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 29470,
					streetName: "Street 29",
					streetNumber: "309B",
					customer: "Customer 59",
					contactLinks: {
						email: "customer59@example.com",
						linkedin: "https://linkedin.com/in/customer59"
					}
				}
			},
			{
				orderId: 9174,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 89980,
					streetName: "Street 19",
					streetNumber: "272C",
					customer: "Customer 60",
					contactLinks: {
						email: "customer60@example.com",
						linkedin: "https://linkedin.com/in/customer60"
					}
				}
			},
			{
				orderId: 4493,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-13",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 36154,
					streetName: "Street 41",
					streetNumber: "809C",
					customer: "Customer 61",
					contactLinks: {
						email: "customer61@example.com",
						linkedin: "https://linkedin.com/in/customer61"
					}
				}
			},
			{
				orderId: 5009,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 24916,
					streetName: "Street 18",
					streetNumber: "566C",
					customer: "Customer 62",
					contactLinks: {
						email: "customer62@example.com",
						linkedin: "https://linkedin.com/in/customer62"
					}
				}
			},
			{
				orderId: 1558,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 90965,
					streetName: "Street 6",
					streetNumber: "964B",
					customer: "Customer 63",
					contactLinks: {
						email: "customer63@example.com",
						linkedin: "https://linkedin.com/in/customer63"
					}
				}
			},
			{
				orderId: 3924,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-27",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 98612,
					streetName: "Street 24",
					streetNumber: "690C",
					customer: "Customer 64",
					contactLinks: {
						email: "customer64@example.com",
						linkedin: "https://linkedin.com/in/customer64"
					}
				}
			},
			{
				orderId: 9712,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 72475,
					streetName: "Street 40",
					streetNumber: "650A",
					customer: "Customer 65",
					contactLinks: {
						email: "customer65@example.com",
						linkedin: "https://linkedin.com/in/customer65"
					}
				}
			},
			{
				orderId: 8561,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 32513,
					streetName: "Street 25",
					streetNumber: "978B",
					customer: "Customer 66",
					contactLinks: {
						email: "customer66@example.com",
						linkedin: "https://linkedin.com/in/customer66"
					}
				}
			},
			{
				orderId: 7830,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-13",
					dateDelivered: "2024-12-16"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 69174,
					streetName: "Street 24",
					streetNumber: "332C",
					customer: "Customer 67",
					contactLinks: {
						email: "customer67@example.com",
						linkedin: "https://linkedin.com/in/customer67"
					}
				}
			},
			{
				orderId: 5213,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-27",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 74616,
					streetName: "Street 43",
					streetNumber: "207A",
					customer: "Customer 68",
					contactLinks: {
						email: "customer68@example.com",
						linkedin: "https://linkedin.com/in/customer68"
					}
				}
			},
			{
				orderId: 8044,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 24632,
					streetName: "Street 25",
					streetNumber: "955B",
					customer: "Customer 69",
					contactLinks: {
						email: "customer69@example.com",
						linkedin: "https://linkedin.com/in/customer69"
					}
				}
			},
			{
				orderId: 1811,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 15521,
					streetName: "Street 30",
					streetNumber: "317B",
					customer: "Customer 70",
					contactLinks: {
						email: "customer70@example.com",
						linkedin: "https://linkedin.com/in/customer70"
					}
				}
			},
			{
				orderId: 4143,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 71557,
					streetName: "Street 15",
					streetNumber: "920C",
					customer: "Customer 71",
					contactLinks: {
						email: "customer71@example.com",
						linkedin: "https://linkedin.com/in/customer71"
					}
				}
			},
			{
				orderId: 8851,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 72193,
					streetName: "Street 11",
					streetNumber: "674A",
					customer: "Customer 72",
					contactLinks: {
						email: "customer72@example.com",
						linkedin: "https://linkedin.com/in/customer72"
					}
				}
			},
			{
				orderId: 1463,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 88176,
					streetName: "Street 50",
					streetNumber: "3A",
					customer: "Customer 73",
					contactLinks: {
						email: "customer73@example.com",
						linkedin: "https://linkedin.com/in/customer73"
					}
				}
			},
			{
				orderId: 5092,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-28",
					dateShipped: "2024-12-31",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 62414,
					streetName: "Street 41",
					streetNumber: "953A",
					customer: "Customer 74",
					contactLinks: {
						email: "customer74@example.com",
						linkedin: "https://linkedin.com/in/customer74"
					}
				}
			}
		]
	},
	{
		sku: "SKU1009",
		imageUrl: "products/climbing-boots-2558324_1920.jpg",
		productName: "Climbing Boots",
		category: "Footwear",
		rating: 3.5,
		grossPrice: 129.99,
		netPrice: 138.44,
    salesTrendData: TREND_DATA[8],
		orders: [
			{
				orderId: 7944,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-20",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 21662,
					streetName: "Street 47",
					streetNumber: "44B",
					customer: "Customer 75",
					contactLinks: {
						email: "customer75@example.com",
						linkedin: "https://linkedin.com/in/customer75"
					}
				}
			},
			{
				orderId: 7125,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 90760,
					streetName: "Street 22",
					streetNumber: "673A",
					customer: "Customer 76",
					contactLinks: {
						email: "customer76@example.com",
						linkedin: "https://linkedin.com/in/customer76"
					}
				}
			},
			{
				orderId: 1422,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 61832,
					streetName: "Street 25",
					streetNumber: "567A",
					customer: "Customer 77",
					contactLinks: {
						email: "customer77@example.com",
						linkedin: "https://linkedin.com/in/customer77"
					}
				}
			},
			{
				orderId: 9538,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-17",
					dateDelivered: "2024-12-19"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 24503,
					streetName: "Street 45",
					streetNumber: "119A",
					customer: "Customer 78",
					contactLinks: {
						email: "customer78@example.com",
						linkedin: "https://linkedin.com/in/customer78"
					}
				}
			},
			{
				orderId: 1636,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 68399,
					streetName: "Street 2",
					streetNumber: "633C",
					customer: "Customer 79",
					contactLinks: {
						email: "customer79@example.com",
						linkedin: "https://linkedin.com/in/customer79"
					}
				}
			},
			{
				orderId: 4791,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 14988,
					streetName: "Street 37",
					streetNumber: "484A",
					customer: "Customer 80",
					contactLinks: {
						email: "customer80@example.com",
						linkedin: "https://linkedin.com/in/customer80"
					}
				}
			},
			{
				orderId: 2516,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 77388,
					streetName: "Street 43",
					streetNumber: "136C",
					customer: "Customer 81",
					contactLinks: {
						email: "customer81@example.com",
						linkedin: "https://linkedin.com/in/customer81"
					}
				}
			},
			{
				orderId: 7434,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 73213,
					streetName: "Street 49",
					streetNumber: "794C",
					customer: "Customer 82",
					contactLinks: {
						email: "customer82@example.com",
						linkedin: "https://linkedin.com/in/customer82"
					}
				}
			},
			{
				orderId: 5352,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 57275,
					streetName: "Street 24",
					streetNumber: "234A",
					customer: "Customer 83",
					contactLinks: {
						email: "customer83@example.com",
						linkedin: "https://linkedin.com/in/customer83"
					}
				}
			},
			{
				orderId: 7485,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 79583,
					streetName: "Street 18",
					streetNumber: "755A",
					customer: "Customer 84",
					contactLinks: {
						email: "customer84@example.com",
						linkedin: "https://linkedin.com/in/customer84"
					}
				}
			}
		]
	},
	{
		sku: "SKU1010",
		imageUrl: "products/Crivit_jacket-2899728_1920-2.jpg",
		productName: "Crivit Jacket",
		category: "Clothing",
		rating: 5,
		grossPrice: 62.99,
		netPrice: 67.08,
    salesTrendData: TREND_DATA[9],
		orders: [
			{
				orderId: 8610,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 27505,
					streetName: "Street 10",
					streetNumber: "563B",
					customer: "Customer 85",
					contactLinks: {
						email: "customer85@example.com",
						linkedin: "https://linkedin.com/in/customer85"
					}
				}
			},
			{
				orderId: 3826,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 93375,
					streetName: "Street 17",
					streetNumber: "78C",
					customer: "Customer 86",
					contactLinks: {
						email: "customer86@example.com",
						linkedin: "https://linkedin.com/in/customer86"
					}
				}
			},
			{
				orderId: 2466,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 62807,
					streetName: "Street 28",
					streetNumber: "938C",
					customer: "Customer 87",
					contactLinks: {
						email: "customer87@example.com",
						linkedin: "https://linkedin.com/in/customer87"
					}
				}
			},
			{
				orderId: 8572,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 73766,
					streetName: "Street 3",
					streetNumber: "909C",
					customer: "Customer 88",
					contactLinks: {
						email: "customer88@example.com",
						linkedin: "https://linkedin.com/in/customer88"
					}
				}
			},
			{
				orderId: 6930,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 36571,
					streetName: "Street 5",
					streetNumber: "720C",
					customer: "Customer 89",
					contactLinks: {
						email: "customer89@example.com",
						linkedin: "https://linkedin.com/in/customer89"
					}
				}
			},
			{
				orderId: 3676,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-09",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 62595,
					streetName: "Street 45",
					streetNumber: "798A",
					customer: "Customer 90",
					contactLinks: {
						email: "customer90@example.com",
						linkedin: "https://linkedin.com/in/customer90"
					}
				}
			},
			{
				orderId: 4534,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 28594,
					streetName: "Street 12",
					streetNumber: "252A",
					customer: "Customer 91",
					contactLinks: {
						email: "customer91@example.com",
						linkedin: "https://linkedin.com/in/customer91"
					}
				}
			},
			{
				orderId: 3791,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-27",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 36641,
					streetName: "Street 3",
					streetNumber: "716B",
					customer: "Customer 92",
					contactLinks: {
						email: "customer92@example.com",
						linkedin: "https://linkedin.com/in/customer92"
					}
				}
			},
			{
				orderId: 3334,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 70091,
					streetName: "Street 38",
					streetNumber: "471C",
					customer: "Customer 93",
					contactLinks: {
						email: "customer93@example.com",
						linkedin: "https://linkedin.com/in/customer93"
					}
				}
			},
			{
				orderId: 3153,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-22",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 28881,
					streetName: "Street 31",
					streetNumber: "286B",
					customer: "Customer 94",
					contactLinks: {
						email: "customer94@example.com",
						linkedin: "https://linkedin.com/in/customer94"
					}
				}
			}
		]
	},
	{
		sku: "SKU1011",
		imageUrl: "products/Down-Winter-Jacket-Depositphotos_58152061_L.jpg",
		productName: "Down Winter Jacket",
		category: "Clothing",
		rating: 3.5,
		grossPrice: 68.98,
		netPrice: 73.46,
    salesTrendData: TREND_DATA[10],
		orders: [
			{
				orderId: 7443,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 22399,
					streetName: "Street 37",
					streetNumber: "15B",
					customer: "Customer 95",
					contactLinks: {
						email: "customer95@example.com",
						linkedin: "https://linkedin.com/in/customer95"
					}
				}
			},
			{
				orderId: 3912,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 69481,
					streetName: "Street 28",
					streetNumber: "930B",
					customer: "Customer 96",
					contactLinks: {
						email: "customer96@example.com",
						linkedin: "https://linkedin.com/in/customer96"
					}
				}
			},
			{
				orderId: 3934,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-12",
					dateDelivered: "2024-12-19"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 31863,
					streetName: "Street 35",
					streetNumber: "331C",
					customer: "Customer 97",
					contactLinks: {
						email: "customer97@example.com",
						linkedin: "https://linkedin.com/in/customer97"
					}
				}
			},
			{
				orderId: 3976,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 47952,
					streetName: "Street 34",
					streetNumber: "510C",
					customer: "Customer 98",
					contactLinks: {
						email: "customer98@example.com",
						linkedin: "https://linkedin.com/in/customer98"
					}
				}
			},
			{
				orderId: 8593,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 31080,
					streetName: "Street 36",
					streetNumber: "455C",
					customer: "Customer 99",
					contactLinks: {
						email: "customer99@example.com",
						linkedin: "https://linkedin.com/in/customer99"
					}
				}
			},
			{
				orderId: 4771,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 92086,
					streetName: "Street 46",
					streetNumber: "988A",
					customer: "Customer 100",
					contactLinks: {
						email: "customer100@example.com",
						linkedin: "https://linkedin.com/in/customer100"
					}
				}
			},
			{
				orderId: 2767,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 18884,
					streetName: "Street 18",
					streetNumber: "125C",
					customer: "Customer 101",
					contactLinks: {
						email: "customer101@example.com",
						linkedin: "https://linkedin.com/in/customer101"
					}
				}
			},
			{
				orderId: 2706,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-18"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 58190,
					streetName: "Street 41",
					streetNumber: "747A",
					customer: "Customer 102",
					contactLinks: {
						email: "customer102@example.com",
						linkedin: "https://linkedin.com/in/customer102"
					}
				}
			},
			{
				orderId: 7416,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 48132,
					streetName: "Street 22",
					streetNumber: "167C",
					customer: "Customer 103",
					contactLinks: {
						email: "customer103@example.com",
						linkedin: "https://linkedin.com/in/customer103"
					}
				}
			}
		]
	},
	{
		sku: "SKU1012",
		imageUrl: "products/dyson_hairdryer_Depositphotos_653422044_L.jpg",
		productName: "Dyson Hairdryer Purple",
		category: "Home Appliances",
		rating: 5,
		grossPrice: 119.99,
		netPrice: 127.79,
    salesTrendData: TREND_DATA[11],
		orders: [
			{
				orderId: 6652,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 75331,
					streetName: "Street 15",
					streetNumber: "767A",
					customer: "Customer 104",
					contactLinks: {
						email: "customer104@example.com",
						linkedin: "https://linkedin.com/in/customer104"
					}
				}
			},
			{
				orderId: 2521,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 64266,
					streetName: "Street 26",
					streetNumber: "934B",
					customer: "Customer 105",
					contactLinks: {
						email: "customer105@example.com",
						linkedin: "https://linkedin.com/in/customer105"
					}
				}
			},
			{
				orderId: 2535,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 16147,
					streetName: "Street 33",
					streetNumber: "673A",
					customer: "Customer 106",
					contactLinks: {
						email: "customer106@example.com",
						linkedin: "https://linkedin.com/in/customer106"
					}
				}
			},
			{
				orderId: 9916,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 12465,
					streetName: "Street 6",
					streetNumber: "709A",
					customer: "Customer 107",
					contactLinks: {
						email: "customer107@example.com",
						linkedin: "https://linkedin.com/in/customer107"
					}
				}
			},
			{
				orderId: 8230,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 53012,
					streetName: "Street 50",
					streetNumber: "810C",
					customer: "Customer 108",
					contactLinks: {
						email: "customer108@example.com",
						linkedin: "https://linkedin.com/in/customer108"
					}
				}
			},
			{
				orderId: 2420,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 57310,
					streetName: "Street 44",
					streetNumber: "922B",
					customer: "Customer 109",
					contactLinks: {
						email: "customer109@example.com",
						linkedin: "https://linkedin.com/in/customer109"
					}
				}
			},
			{
				orderId: 1921,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: "2025-01-01"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 52783,
					streetName: "Street 36",
					streetNumber: "231A",
					customer: "Customer 110",
					contactLinks: {
						email: "customer110@example.com",
						linkedin: "https://linkedin.com/in/customer110"
					}
				}
			},
			{
				orderId: 2259,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 90045,
					streetName: "Street 23",
					streetNumber: "461A",
					customer: "Customer 111",
					contactLinks: {
						email: "customer111@example.com",
						linkedin: "https://linkedin.com/in/customer111"
					}
				}
			},
			{
				orderId: 7327,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 62629,
					streetName: "Street 7",
					streetNumber: "740A",
					customer: "Customer 112",
					contactLinks: {
						email: "customer112@example.com",
						linkedin: "https://linkedin.com/in/customer112"
					}
				}
			},
			{
				orderId: 2897,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 64364,
					streetName: "Street 27",
					streetNumber: "87A",
					customer: "Customer 113",
					contactLinks: {
						email: "customer113@example.com",
						linkedin: "https://linkedin.com/in/customer113"
					}
				}
			},
			{
				orderId: 3625,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-28"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 15440,
					streetName: "Street 19",
					streetNumber: "147B",
					customer: "Customer 114",
					contactLinks: {
						email: "customer114@example.com",
						linkedin: "https://linkedin.com/in/customer114"
					}
				}
			},
			{
				orderId: 4623,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 42093,
					streetName: "Street 4",
					streetNumber: "26A",
					customer: "Customer 115",
					contactLinks: {
						email: "customer115@example.com",
						linkedin: "https://linkedin.com/in/customer115"
					}
				}
			},
			{
				orderId: 8901,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-18",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 30378,
					streetName: "Street 47",
					streetNumber: "674A",
					customer: "Customer 116",
					contactLinks: {
						email: "customer116@example.com",
						linkedin: "https://linkedin.com/in/customer116"
					}
				}
			},
			{
				orderId: 5637,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 59151,
					streetName: "Street 30",
					streetNumber: "924B",
					customer: "Customer 117",
					contactLinks: {
						email: "customer117@example.com",
						linkedin: "https://linkedin.com/in/customer117"
					}
				}
			},
			{
				orderId: 1445,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "2024-12-07",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 95591,
					streetName: "Street 41",
					streetNumber: "541A",
					customer: "Customer 118",
					contactLinks: {
						email: "customer118@example.com",
						linkedin: "https://linkedin.com/in/customer118"
					}
				}
			},
			{
				orderId: 6701,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 55370,
					streetName: "Street 22",
					streetNumber: "916A",
					customer: "Customer 119",
					contactLinks: {
						email: "customer119@example.com",
						linkedin: "https://linkedin.com/in/customer119"
					}
				}
			},
			{
				orderId: 7463,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 66758,
					streetName: "Street 17",
					streetNumber: "599C",
					customer: "Customer 120",
					contactLinks: {
						email: "customer120@example.com",
						linkedin: "https://linkedin.com/in/customer120"
					}
				}
			},
			{
				orderId: 9730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 17616,
					streetName: "Street 43",
					streetNumber: "688C",
					customer: "Customer 121",
					contactLinks: {
						email: "customer121@example.com",
						linkedin: "https://linkedin.com/in/customer121"
					}
				}
			}
		]
	},
	{
		sku: "SKU1013",
		imageUrl: "products/dyson_hairdryer_Depositphotos_751409932_L.jpg",
		productName: "Dyson Hairdryer Gold",
		category: "Home Appliances",
		rating: 3.5,
		grossPrice: 159.99,
		netPrice: 170.39,
    salesTrendData: TREND_DATA[12],
		orders: [
			{
				orderId: 9561,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-25",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 91387,
					streetName: "Street 28",
					streetNumber: "582B",
					customer: "Customer 122",
					contactLinks: {
						email: "customer122@example.com",
						linkedin: "https://linkedin.com/in/customer122"
					}
				}
			},
			{
				orderId: 8125,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 66151,
					streetName: "Street 8",
					streetNumber: "840A",
					customer: "Customer 123",
					contactLinks: {
						email: "customer123@example.com",
						linkedin: "https://linkedin.com/in/customer123"
					}
				}
			},
			{
				orderId: 4099,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 96467,
					streetName: "Street 6",
					streetNumber: "175A",
					customer: "Customer 124",
					contactLinks: {
						email: "customer124@example.com",
						linkedin: "https://linkedin.com/in/customer124"
					}
				}
			},
			{
				orderId: 8574,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 78201,
					streetName: "Street 6",
					streetNumber: "90B",
					customer: "Customer 125",
					contactLinks: {
						email: "customer125@example.com",
						linkedin: "https://linkedin.com/in/customer125"
					}
				}
			},
			{
				orderId: 4715,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 80238,
					streetName: "Street 4",
					streetNumber: "132B",
					customer: "Customer 126",
					contactLinks: {
						email: "customer126@example.com",
						linkedin: "https://linkedin.com/in/customer126"
					}
				}
			},
			{
				orderId: 8293,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 26324,
					streetName: "Street 33",
					streetNumber: "199B",
					customer: "Customer 127",
					contactLinks: {
						email: "customer127@example.com",
						linkedin: "https://linkedin.com/in/customer127"
					}
				}
			},
			{
				orderId: 9076,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 11926,
					streetName: "Street 39",
					streetNumber: "681C",
					customer: "Customer 128",
					contactLinks: {
						email: "customer128@example.com",
						linkedin: "https://linkedin.com/in/customer128"
					}
				}
			},
			{
				orderId: 4983,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 32182,
					streetName: "Street 17",
					streetNumber: "759C",
					customer: "Customer 129",
					contactLinks: {
						email: "customer129@example.com",
						linkedin: "https://linkedin.com/in/customer129"
					}
				}
			},
			{
				orderId: 6099,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 60858,
					streetName: "Street 36",
					streetNumber: "897B",
					customer: "Customer 130",
					contactLinks: {
						email: "customer130@example.com",
						linkedin: "https://linkedin.com/in/customer130"
					}
				}
			},
			{
				orderId: 4264,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-18"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 70966,
					streetName: "Street 4",
					streetNumber: "42B",
					customer: "Customer 131",
					contactLinks: {
						email: "customer131@example.com",
						linkedin: "https://linkedin.com/in/customer131"
					}
				}
			},
			{
				orderId: 8253,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 30896,
					streetName: "Street 50",
					streetNumber: "565A",
					customer: "Customer 132",
					contactLinks: {
						email: "customer132@example.com",
						linkedin: "https://linkedin.com/in/customer132"
					}
				}
			},
			{
				orderId: 2983,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 19822,
					streetName: "Street 32",
					streetNumber: "147A",
					customer: "Customer 133",
					contactLinks: {
						email: "customer133@example.com",
						linkedin: "https://linkedin.com/in/customer133"
					}
				}
			},
			{
				orderId: 5742,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 52866,
					streetName: "Street 39",
					streetNumber: "19C",
					customer: "Customer 134",
					contactLinks: {
						email: "customer134@example.com",
						linkedin: "https://linkedin.com/in/customer134"
					}
				}
			},
			{
				orderId: 9410,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 48901,
					streetName: "Street 22",
					streetNumber: "979C",
					customer: "Customer 135",
					contactLinks: {
						email: "customer135@example.com",
						linkedin: "https://linkedin.com/in/customer135"
					}
				}
			},
			{
				orderId: 8172,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 29242,
					streetName: "Street 13",
					streetNumber: "208B",
					customer: "Customer 136",
					contactLinks: {
						email: "customer136@example.com",
						linkedin: "https://linkedin.com/in/customer136"
					}
				}
			},
			{
				orderId: 7632,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 21401,
					streetName: "Street 20",
					streetNumber: "360C",
					customer: "Customer 137",
					contactLinks: {
						email: "customer137@example.com",
						linkedin: "https://linkedin.com/in/customer137"
					}
				}
			},
			{
				orderId: 9684,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 67334,
					streetName: "Street 40",
					streetNumber: "250A",
					customer: "Customer 138",
					contactLinks: {
						email: "customer138@example.com",
						linkedin: "https://linkedin.com/in/customer138"
					}
				}
			},
			{
				orderId: 7610,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 61914,
					streetName: "Street 33",
					streetNumber: "374B",
					customer: "Customer 139",
					contactLinks: {
						email: "customer139@example.com",
						linkedin: "https://linkedin.com/in/customer139"
					}
				}
			},
			{
				orderId: 9776,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 53088,
					streetName: "Street 7",
					streetNumber: "726B",
					customer: "Customer 140",
					contactLinks: {
						email: "customer140@example.com",
						linkedin: "https://linkedin.com/in/customer140"
					}
				}
			},
			{
				orderId: 5449,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 68754,
					streetName: "Street 49",
					streetNumber: "852B",
					customer: "Customer 141",
					contactLinks: {
						email: "customer141@example.com",
						linkedin: "https://linkedin.com/in/customer141"
					}
				}
			},
			{
				orderId: 4074,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 62569,
					streetName: "Street 1",
					streetNumber: "557B",
					customer: "Customer 142",
					contactLinks: {
						email: "customer142@example.com",
						linkedin: "https://linkedin.com/in/customer142"
					}
				}
			},
			{
				orderId: 6561,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 80236,
					streetName: "Street 22",
					streetNumber: "182B",
					customer: "Customer 143",
					contactLinks: {
						email: "customer143@example.com",
						linkedin: "https://linkedin.com/in/customer143"
					}
				}
			},
			{
				orderId: 4630,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 42584,
					streetName: "Street 37",
					streetNumber: "883C",
					customer: "Customer 144",
					contactLinks: {
						email: "customer144@example.com",
						linkedin: "https://linkedin.com/in/customer144"
					}
				}
			}
		]
	},
	{
		sku: "SKU1014",
		imageUrl: "products/dyson_vacuum_appliance-2255_1920.jpg",
		productName: "Dyson Vacuum Cleaner",
		category: "Home Appliances",
		rating: 5,
		grossPrice: 465,
		netPrice: 495.23,
    salesTrendData: TREND_DATA[13],
		orders: [
			{
				orderId: 2287,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 42881,
					streetName: "Street 38",
					streetNumber: "366B",
					customer: "Customer 145",
					contactLinks: {
						email: "customer145@example.com",
						linkedin: "https://linkedin.com/in/customer145"
					}
				}
			},
			{
				orderId: 2776,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 40163,
					streetName: "Street 4",
					streetNumber: "800A",
					customer: "Customer 146",
					contactLinks: {
						email: "customer146@example.com",
						linkedin: "https://linkedin.com/in/customer146"
					}
				}
			},
			{
				orderId: 6417,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-28",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 95499,
					streetName: "Street 36",
					streetNumber: "576A",
					customer: "Customer 147",
					contactLinks: {
						email: "customer147@example.com",
						linkedin: "https://linkedin.com/in/customer147"
					}
				}
			},
			{
				orderId: 7110,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 10032,
					streetName: "Street 47",
					streetNumber: "848C",
					customer: "Customer 148",
					contactLinks: {
						email: "customer148@example.com",
						linkedin: "https://linkedin.com/in/customer148"
					}
				}
			},
			{
				orderId: 5102,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 97615,
					streetName: "Street 18",
					streetNumber: "232B",
					customer: "Customer 149",
					contactLinks: {
						email: "customer149@example.com",
						linkedin: "https://linkedin.com/in/customer149"
					}
				}
			},
			{
				orderId: 5524,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 22032,
					streetName: "Street 30",
					streetNumber: "346B",
					customer: "Customer 150",
					contactLinks: {
						email: "customer150@example.com",
						linkedin: "https://linkedin.com/in/customer150"
					}
				}
			}
		]
	},
	{
		sku: "SKU1015",
		imageUrl: "products/earphone-2640990_1920.jpg",
		productName: "Earphones Black",
		category: "Accessories",
		rating: 3.5,
		grossPrice: 59.99,
		netPrice: 63.89,
    salesTrendData: TREND_DATA[14],
		orders: [
			{
				orderId: 6975,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
					customer: "Customer 151",
					contactLinks: {
						email: "customer151@example.com",
						linkedin: "https://linkedin.com/in/customer151"
					}
				}
			},
			{
				orderId: 1891,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-30"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
					customer: "Customer 152",
					contactLinks: {
						email: "customer152@example.com",
						linkedin: "https://linkedin.com/in/customer152"
					}
				}
			},
			{
				orderId: 4289,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
					customer: "Customer 153",
					contactLinks: {
						email: "customer153@example.com",
						linkedin: "https://linkedin.com/in/customer153"
					}
				}
			},
			{
				orderId: 8229,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-15",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
					customer: "Customer 154",
					contactLinks: {
						email: "customer154@example.com",
						linkedin: "https://linkedin.com/in/customer154"
					}
				}
			},
			{
				orderId: 9112,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
					customer: "Customer 155",
					contactLinks: {
						email: "customer155@example.com",
						linkedin: "https://linkedin.com/in/customer155"
					}
				}
			},
			{
				orderId: 7250,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
					customer: "Customer 156",
					contactLinks: {
						email: "customer156@example.com",
						linkedin: "https://linkedin.com/in/customer156"
					}
				}
			},
			{
				orderId: 8168,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
					customer: "Customer 157",
					contactLinks: {
						email: "customer157@example.com",
						linkedin: "https://linkedin.com/in/customer157"
					}
				}
			},
			{
				orderId: 3975,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
					customer: "Customer 158",
					contactLinks: {
						email: "customer158@example.com",
						linkedin: "https://linkedin.com/in/customer158"
					}
				}
			},
			{
				orderId: 9222,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
					customer: "Customer 159",
					contactLinks: {
						email: "customer159@example.com",
						linkedin: "https://linkedin.com/in/customer159"
					}
				}
			},
			{
				orderId: 5077,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-09",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
					customer: "Customer 160",
					contactLinks: {
						email: "customer160@example.com",
						linkedin: "https://linkedin.com/in/customer160"
					}
				}
			},
			{
				orderId: 2800,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
					customer: "Customer 161",
					contactLinks: {
						email: "customer161@example.com",
						linkedin: "https://linkedin.com/in/customer161"
					}
				}
			},
			{
				orderId: 3284,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
					customer: "Customer 162",
					contactLinks: {
						email: "customer162@example.com",
						linkedin: "https://linkedin.com/in/customer162"
					}
				}
			},
			{
				orderId: 8060,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
					customer: "Customer 163",
					contactLinks: {
						email: "customer163@example.com",
						linkedin: "https://linkedin.com/in/customer163"
					}
				}
			},
			{
				orderId: 4043,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-08",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
					customer: "Customer 164",
					contactLinks: {
						email: "customer164@example.com",
						linkedin: "https://linkedin.com/in/customer164"
					}
				}
			},
			{
				orderId: 9002,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
					customer: "Customer 165",
					contactLinks: {
						email: "customer165@example.com",
						linkedin: "https://linkedin.com/in/customer165"
					}
				}
			}
		]
	},
	{
		sku: "SKU1016",
		imageUrl: "products/EPSON_printer-1516580_1920-2.jpg",
		productName: "Epson Laser Printer",
		category: "Electronics",
		rating: 5,
		grossPrice: 199.99,
		netPrice: 212.99,
    salesTrendData: TREND_DATA[9],
		orders: [
			{
				orderId: 9046,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 88056,
					streetName: "Street 31",
					streetNumber: "863C",
					customer: "Customer 166",
					contactLinks: {
						email: "customer166@example.com",
						linkedin: "https://linkedin.com/in/customer166"
					}
				}
			},
			{
				orderId: 5568,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 32539,
					streetName: "Street 16",
					streetNumber: "453A",
					customer: "Customer 167",
					contactLinks: {
						email: "customer167@example.com",
						linkedin: "https://linkedin.com/in/customer167"
					}
				}
			},
			{
				orderId: 6837,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 51789,
					streetName: "Street 21",
					streetNumber: "912C",
					customer: "Customer 168",
					contactLinks: {
						email: "customer168@example.com",
						linkedin: "https://linkedin.com/in/customer168"
					}
				}
			},
			{
				orderId: 2939,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 75943,
					streetName: "Street 10",
					streetNumber: "21A",
					customer: "Customer 169",
					contactLinks: {
						email: "customer169@example.com",
						linkedin: "https://linkedin.com/in/customer169"
					}
				}
			},
			{
				orderId: 1498,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-09",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 91277,
					streetName: "Street 40",
					streetNumber: "671A",
					customer: "Customer 170",
					contactLinks: {
						email: "customer170@example.com",
						linkedin: "https://linkedin.com/in/customer170"
					}
				}
			},
			{
				orderId: 1572,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 58801,
					streetName: "Street 48",
					streetNumber: "855A",
					customer: "Customer 171",
					contactLinks: {
						email: "customer171@example.com",
						linkedin: "https://linkedin.com/in/customer171"
					}
				}
			},
			{
				orderId: 2335,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 59822,
					streetName: "Street 5",
					streetNumber: "212A",
					customer: "Customer 172",
					contactLinks: {
						email: "customer172@example.com",
						linkedin: "https://linkedin.com/in/customer172"
					}
				}
			},
			{
				orderId: 2112,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-21",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 95627,
					streetName: "Street 47",
					streetNumber: "438A",
					customer: "Customer 173",
					contactLinks: {
						email: "customer173@example.com",
						linkedin: "https://linkedin.com/in/customer173"
					}
				}
			},
			{
				orderId: 5538,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 67887,
					streetName: "Street 16",
					streetNumber: "341C",
					customer: "Customer 174",
					contactLinks: {
						email: "customer174@example.com",
						linkedin: "https://linkedin.com/in/customer174"
					}
				}
			},
			{
				orderId: 3407,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-20",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 99025,
					streetName: "Street 20",
					streetNumber: "413A",
					customer: "Customer 175",
					contactLinks: {
						email: "customer175@example.com",
						linkedin: "https://linkedin.com/in/customer175"
					}
				}
			}
		]
	},
	{
		sku: "SKU1017",
		imageUrl: "products/Gaggia-coffee-machine-Depositphotos_171399082_L.jpg",
		productName: "Gaggia Coffee Machine",
		category: "Home Appliances",
		rating: 3.5,
		grossPrice: 499,
		netPrice: 531.44,
    salesTrendData: TREND_DATA[1],
		orders: [
			{
				orderId: 3668,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 9088,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 2986,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 2306,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 6001,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 5064,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 8908,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 3992,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7454,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 7439,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 7884,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			},
			{
				orderId: 1217,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
					customer: "Customer 13",
					contactLinks: {
						email: "customer13@example.com",
						linkedin: "https://linkedin.com/in/customer13"
					}
				}
			},
			{
				orderId: 2222,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
					customer: "Customer 14",
					contactLinks: {
						email: "customer14@example.com",
						linkedin: "https://linkedin.com/in/customer14"
					}
				}
			},
			{
				orderId: 2341,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
					customer: "Customer 15",
					contactLinks: {
						email: "customer15@example.com",
						linkedin: "https://linkedin.com/in/customer15"
					}
				}
			},
			{
				orderId: 6504,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
					customer: "Customer 16",
					contactLinks: {
						email: "customer16@example.com",
						linkedin: "https://linkedin.com/in/customer16"
					}
				}
			},
			{
				orderId: 3384,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
					customer: "Customer 17",
					contactLinks: {
						email: "customer17@example.com",
						linkedin: "https://linkedin.com/in/customer17"
					}
				}
			},
			{
				orderId: 5184,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
					customer: "Customer 18",
					contactLinks: {
						email: "customer18@example.com",
						linkedin: "https://linkedin.com/in/customer18"
					}
				}
			},
			{
				orderId: 8824,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
					customer: "Customer 19",
					contactLinks: {
						email: "customer19@example.com",
						linkedin: "https://linkedin.com/in/customer19"
					}
				}
			},
			{
				orderId: 6498,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
					customer: "Customer 20",
					contactLinks: {
						email: "customer20@example.com",
						linkedin: "https://linkedin.com/in/customer20"
					}
				}
			},
			{
				orderId: 5649,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 9539,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 3984,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 4042,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 1922,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			},
			{
				orderId: 8364,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 4856,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 3730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 2312,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 6716,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 8911,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 9728,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 3961,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 4159,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 7266,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 9165,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 5787,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 3379,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			}
		]
	},
	{
		sku: "SKU1018",
		imageUrl: "products/HP_laptop_black-5141242_1920.jpg",
		productName: "HP Laptop 15 inch",
		category: "Electronics",
		rating: 5,
		grossPrice: 349,
		netPrice: 371.69,
    salesTrendData: TREND_DATA[0],
		orders: [
			{
				orderId: 9494,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-28"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 91450,
					streetName: "Street 7",
					streetNumber: "200C",
					customer: "Customer 176",
					contactLinks: {
						email: "customer176@example.com",
						linkedin: "https://linkedin.com/in/customer176"
					}
				}
			},
			{
				orderId: 1227,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 97901,
					streetName: "Street 18",
					streetNumber: "78A",
					customer: "Customer 177",
					contactLinks: {
						email: "customer177@example.com",
						linkedin: "https://linkedin.com/in/customer177"
					}
				}
			},
			{
				orderId: 6851,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 82888,
					streetName: "Street 44",
					streetNumber: "340A",
					customer: "Customer 178",
					contactLinks: {
						email: "customer178@example.com",
						linkedin: "https://linkedin.com/in/customer178"
					}
				}
			},
			{
				orderId: 5647,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 86191,
					streetName: "Street 46",
					streetNumber: "2A",
					customer: "Customer 179",
					contactLinks: {
						email: "customer179@example.com",
						linkedin: "https://linkedin.com/in/customer179"
					}
				}
			},
			{
				orderId: 3651,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-05",
					dateDelivered: "2024-12-14"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 34426,
					streetName: "Street 20",
					streetNumber: "482B",
					customer: "Customer 180",
					contactLinks: {
						email: "customer180@example.com",
						linkedin: "https://linkedin.com/in/customer180"
					}
				}
			},
			{
				orderId: 3704,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-15",
					dateDelivered: "2024-12-17"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 99385,
					streetName: "Street 36",
					streetNumber: "279C",
					customer: "Customer 181",
					contactLinks: {
						email: "customer181@example.com",
						linkedin: "https://linkedin.com/in/customer181"
					}
				}
			},
			{
				orderId: 3696,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 79567,
					streetName: "Street 23",
					streetNumber: "677A",
					customer: "Customer 182",
					contactLinks: {
						email: "customer182@example.com",
						linkedin: "https://linkedin.com/in/customer182"
					}
				}
			},
			{
				orderId: 5334,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 90686,
					streetName: "Street 15",
					streetNumber: "251C",
					customer: "Customer 183",
					contactLinks: {
						email: "customer183@example.com",
						linkedin: "https://linkedin.com/in/customer183"
					}
				}
			},
			{
				orderId: 2110,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-13",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 85309,
					streetName: "Street 47",
					streetNumber: "63C",
					customer: "Customer 184",
					contactLinks: {
						email: "customer184@example.com",
						linkedin: "https://linkedin.com/in/customer184"
					}
				}
			}
		]
	},
	{
		sku: "SKU1019",
		imageUrl: "products/iPad-Pro-Depositphotos_241726176_L.jpg",
		productName: "iPad Pro 12.9 inch",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 448,
		netPrice: 477.12,
    salesTrendData: TREND_DATA[7],
		orders: [
			{
				orderId: 8235,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 48193,
					streetName: "Street 28",
					streetNumber: "927C",
					customer: "Customer 47",
					contactLinks: {
						email: "customer47@example.com",
						linkedin: "https://linkedin.com/in/customer47"
					}
				}
			},
			{
				orderId: 1643,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 64564,
					streetName: "Street 1",
					streetNumber: "101A",
					customer: "Customer 48",
					contactLinks: {
						email: "customer48@example.com",
						linkedin: "https://linkedin.com/in/customer48"
					}
				}
			},
			{
				orderId: 1786,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-12",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 25197,
					streetName: "Street 36",
					streetNumber: "689B",
					customer: "Customer 49",
					contactLinks: {
						email: "customer49@example.com",
						linkedin: "https://linkedin.com/in/customer49"
					}
				}
			},
			{
				orderId: 9206,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-27",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 77659,
					streetName: "Street 48",
					streetNumber: "298C",
					customer: "Customer 50",
					contactLinks: {
						email: "customer50@example.com",
						linkedin: "https://linkedin.com/in/customer50"
					}
				}
			},
			{
				orderId: 9578,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 43864,
					streetName: "Street 25",
					streetNumber: "886A",
					customer: "Customer 51",
					contactLinks: {
						email: "customer51@example.com",
						linkedin: "https://linkedin.com/in/customer51"
					}
				}
			},
			{
				orderId: 1032,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 44788,
					streetName: "Street 10",
					streetNumber: "286C",
					customer: "Customer 52",
					contactLinks: {
						email: "customer52@example.com",
						linkedin: "https://linkedin.com/in/customer52"
					}
				}
			},
			{
				orderId: 6207,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 55589,
					streetName: "Street 16",
					streetNumber: "476C",
					customer: "Customer 53",
					contactLinks: {
						email: "customer53@example.com",
						linkedin: "https://linkedin.com/in/customer53"
					}
				}
			},
			{
				orderId: 3624,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-18",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 13725,
					streetName: "Street 39",
					streetNumber: "596A",
					customer: "Customer 54",
					contactLinks: {
						email: "customer54@example.com",
						linkedin: "https://linkedin.com/in/customer54"
					}
				}
			},
			{
				orderId: 7800,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 24178,
					streetName: "Street 36",
					streetNumber: "411C",
					customer: "Customer 55",
					contactLinks: {
						email: "customer55@example.com",
						linkedin: "https://linkedin.com/in/customer55"
					}
				}
			},
			{
				orderId: 5870,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 61522,
					streetName: "Street 10",
					streetNumber: "989A",
					customer: "Customer 56",
					contactLinks: {
						email: "customer56@example.com",
						linkedin: "https://linkedin.com/in/customer56"
					}
				}
			},
			{
				orderId: 4421,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 90362,
					streetName: "Street 35",
					streetNumber: "936B",
					customer: "Customer 57",
					contactLinks: {
						email: "customer57@example.com",
						linkedin: "https://linkedin.com/in/customer57"
					}
				}
			},
			{
				orderId: 5625,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 13065,
					streetName: "Street 6",
					streetNumber: "842A",
					customer: "Customer 58",
					contactLinks: {
						email: "customer58@example.com",
						linkedin: "https://linkedin.com/in/customer58"
					}
				}
			},
			{
				orderId: 8127,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-23",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 29470,
					streetName: "Street 29",
					streetNumber: "309B",
					customer: "Customer 59",
					contactLinks: {
						email: "customer59@example.com",
						linkedin: "https://linkedin.com/in/customer59"
					}
				}
			},
			{
				orderId: 9174,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 89980,
					streetName: "Street 19",
					streetNumber: "272C",
					customer: "Customer 60",
					contactLinks: {
						email: "customer60@example.com",
						linkedin: "https://linkedin.com/in/customer60"
					}
				}
			},
			{
				orderId: 4493,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-13",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 36154,
					streetName: "Street 41",
					streetNumber: "809C",
					customer: "Customer 61",
					contactLinks: {
						email: "customer61@example.com",
						linkedin: "https://linkedin.com/in/customer61"
					}
				}
			},
			{
				orderId: 5009,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 24916,
					streetName: "Street 18",
					streetNumber: "566C",
					customer: "Customer 62",
					contactLinks: {
						email: "customer62@example.com",
						linkedin: "https://linkedin.com/in/customer62"
					}
				}
			},
			{
				orderId: 1558,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 90965,
					streetName: "Street 6",
					streetNumber: "964B",
					customer: "Customer 63",
					contactLinks: {
						email: "customer63@example.com",
						linkedin: "https://linkedin.com/in/customer63"
					}
				}
			},
			{
				orderId: 3924,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-27",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 98612,
					streetName: "Street 24",
					streetNumber: "690C",
					customer: "Customer 64",
					contactLinks: {
						email: "customer64@example.com",
						linkedin: "https://linkedin.com/in/customer64"
					}
				}
			},
			{
				orderId: 9712,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 72475,
					streetName: "Street 40",
					streetNumber: "650A",
					customer: "Customer 65",
					contactLinks: {
						email: "customer65@example.com",
						linkedin: "https://linkedin.com/in/customer65"
					}
				}
			},
			{
				orderId: 8561,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 32513,
					streetName: "Street 25",
					streetNumber: "978B",
					customer: "Customer 66",
					contactLinks: {
						email: "customer66@example.com",
						linkedin: "https://linkedin.com/in/customer66"
					}
				}
			},
			{
				orderId: 7830,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-13",
					dateDelivered: "2024-12-16"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 69174,
					streetName: "Street 24",
					streetNumber: "332C",
					customer: "Customer 67",
					contactLinks: {
						email: "customer67@example.com",
						linkedin: "https://linkedin.com/in/customer67"
					}
				}
			},
			{
				orderId: 5213,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-27",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 74616,
					streetName: "Street 43",
					streetNumber: "207A",
					customer: "Customer 68",
					contactLinks: {
						email: "customer68@example.com",
						linkedin: "https://linkedin.com/in/customer68"
					}
				}
			},
			{
				orderId: 8044,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 24632,
					streetName: "Street 25",
					streetNumber: "955B",
					customer: "Customer 69",
					contactLinks: {
						email: "customer69@example.com",
						linkedin: "https://linkedin.com/in/customer69"
					}
				}
			},
			{
				orderId: 1811,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 15521,
					streetName: "Street 30",
					streetNumber: "317B",
					customer: "Customer 70",
					contactLinks: {
						email: "customer70@example.com",
						linkedin: "https://linkedin.com/in/customer70"
					}
				}
			},
			{
				orderId: 4143,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 71557,
					streetName: "Street 15",
					streetNumber: "920C",
					customer: "Customer 71",
					contactLinks: {
						email: "customer71@example.com",
						linkedin: "https://linkedin.com/in/customer71"
					}
				}
			},
			{
				orderId: 8851,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 72193,
					streetName: "Street 11",
					streetNumber: "674A",
					customer: "Customer 72",
					contactLinks: {
						email: "customer72@example.com",
						linkedin: "https://linkedin.com/in/customer72"
					}
				}
			},
			{
				orderId: 1463,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 88176,
					streetName: "Street 50",
					streetNumber: "3A",
					customer: "Customer 73",
					contactLinks: {
						email: "customer73@example.com",
						linkedin: "https://linkedin.com/in/customer73"
					}
				}
			},
			{
				orderId: 5092,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-28",
					dateShipped: "2024-12-31",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 62414,
					streetName: "Street 41",
					streetNumber: "953A",
					customer: "Customer 74",
					contactLinks: {
						email: "customer74@example.com",
						linkedin: "https://linkedin.com/in/customer74"
					}
				}
			}
		]
	},
	{
		sku: "SKU1020",
		imageUrl: "products/iphone-X-2854322_1920.jpg",
		productName: "iPhone X 256 GB",
		category: "Electronics",
		rating: 5,
		grossPrice: 1026,
		netPrice: 1092.69,
    salesTrendData: TREND_DATA[3],
		orders: [
			{
				orderId: 1367,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 93345,
					streetName: "Street 47",
					streetNumber: "404A",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 6198,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-08",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 12710,
					streetName: "Street 47",
					streetNumber: "33B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 2070,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 55326,
					streetName: "Street 15",
					streetNumber: "398C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 7536,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 67187,
					streetName: "Street 40",
					streetNumber: "68A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 5478,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-17",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 36934,
					streetName: "Street 32",
					streetNumber: "462C",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 3333,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-05",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 69061,
					streetName: "Street 42",
					streetNumber: "979A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 8446,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 40350,
					streetName: "Street 38",
					streetNumber: "343B",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 1720,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 27471,
					streetName: "Street 50",
					streetNumber: "895B",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 9331,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 13811,
					streetName: "Street 29",
					streetNumber: "816A",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 3556,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 13264,
					streetName: "Street 5",
					streetNumber: "490B",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 7227,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-26",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 30240,
					streetName: "Street 18",
					streetNumber: "606C",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 3204,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 23659,
					streetName: "Street 31",
					streetNumber: "422C",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			},
			{
				orderId: 9396,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 90690,
					streetName: "Street 28",
					streetNumber: "233A",
					customer: "Customer 13",
					contactLinks: {
						email: "customer13@example.com",
						linkedin: "https://linkedin.com/in/customer13"
					}
				}
			},
			{
				orderId: 4507,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 82167,
					streetName: "Street 37",
					streetNumber: "661B",
					customer: "Customer 14",
					contactLinks: {
						email: "customer14@example.com",
						linkedin: "https://linkedin.com/in/customer14"
					}
				}
			},
			{
				orderId: 3512,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 10198,
					streetName: "Street 41",
					streetNumber: "888C",
					customer: "Customer 15",
					contactLinks: {
						email: "customer15@example.com",
						linkedin: "https://linkedin.com/in/customer15"
					}
				}
			},
			{
				orderId: 2045,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 64248,
					streetName: "Street 30",
					streetNumber: "963C",
					customer: "Customer 16",
					contactLinks: {
						email: "customer16@example.com",
						linkedin: "https://linkedin.com/in/customer16"
					}
				}
			},
			{
				orderId: 9911,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-05",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 96708,
					streetName: "Street 46",
					streetNumber: "923B",
					customer: "Customer 17",
					contactLinks: {
						email: "customer17@example.com",
						linkedin: "https://linkedin.com/in/customer17"
					}
				}
			},
			{
				orderId: 8937,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 13581,
					streetName: "Street 2",
					streetNumber: "345A",
					customer: "Customer 18",
					contactLinks: {
						email: "customer18@example.com",
						linkedin: "https://linkedin.com/in/customer18"
					}
				}
			},
			{
				orderId: 4707,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 28725,
					streetName: "Street 5",
					streetNumber: "432A",
					customer: "Customer 19",
					contactLinks: {
						email: "customer19@example.com",
						linkedin: "https://linkedin.com/in/customer19"
					}
				}
			},
			{
				orderId: 3482,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 84535,
					streetName: "Street 43",
					streetNumber: "741A",
					customer: "Customer 20",
					contactLinks: {
						email: "customer20@example.com",
						linkedin: "https://linkedin.com/in/customer20"
					}
				}
			}
		]
	},
	{
		sku: "SKU1021",
		imageUrl: "products/JBL_speaker-5800162_1920-2.jpg",
		productName: "JBL Speaker",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 89.95,
		netPrice: 95.8,
    salesTrendData: TREND_DATA[2],
		orders: [
			{
				orderId: 6636,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 1757,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 9540,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5072,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Poland",
					countryFlag: CountryFlag.POLAND,
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 6883,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 7779,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 3356,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 7814,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7978,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 9865,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 2538,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			}
		]
	},
	{
		sku: "SKU1022",
		imageUrl: "products/Kitchen-Multicooker-Depositphotos_35751187_L.jpg",
		productName: "Kitchen Multicooker",
		category: "Home Appliances",
		rating: 5,
		grossPrice: 39.99,
		netPrice: 42.59,
    salesTrendData: TREND_DATA[2],
		orders: [
			{
				orderId: 6636,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 1757,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 9540,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5072,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Poland",
					countryFlag: CountryFlag.POLAND,
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 6883,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 7779,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 3356,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 7814,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7978,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 9865,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 2538,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			}
		]
	},
	{
		sku: "SKU1023",
		imageUrl: "products/laptop_Depositphotos_2996767_L.jpg",
		productName: "Laptop 13 inch",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 315,
		netPrice: 335.48,
    salesTrendData: TREND_DATA[0],
		orders: [
			{
				orderId: 1234,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
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
				orderId: 2345,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 23456,
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
				orderId: 3456,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
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
				orderId: 4567,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
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
				orderId: 5678,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54321,
					streetName: "Via del Corso",
					streetNumber: "100A",
					customer: "Luca Rossi",
					contactLinks: {
						email: "luca.rossi@example.com",
						linkedin: "https://linkedin.com/in/luca-rossi"
					}
				}
			},
			{
				orderId: 6789,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 65432,
					streetName: "Avenida Paulista",
					streetNumber: "200B",
					customer: "Carlos Silva",
					contactLinks: {
						email: "carlos.silva@example.com",
						linkedin: "https://linkedin.com/in/carlos-silva"
					}
				}
			},
			{
				orderId: 7890,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 98765,
					streetName: "Marine Drive",
					streetNumber: "150B",
					customer: "Amit Mehta",
					contactLinks: {
						email: "amit.mehta@example.com",
						linkedin: "https://linkedin.com/in/amit-mehta"
					}
				}
			},
			{
				orderId: 8901,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "United Kingdom",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 34567,
					streetName: "Oxford Street",
					streetNumber: "200C",
					customer: "Elizabeth Brown",
					contactLinks: {
						email: "elizabeth.brown@example.com",
						linkedin: "https://linkedin.com/in/elizabeth-brown"
					}
				}
			},
			{
				orderId: 9012,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 56789,
					streetName: "Shinjuku Street",
					streetNumber: "50D",
					customer: "Hiroshi Tanaka",
					contactLinks: {
						email: "hiroshi.tanaka@example.com",
						linkedin: "https://linkedin.com/in/hiroshi-tanaka"
					}
				}
			}
		]
	},
	{
		sku: "SKU1024",
		imageUrl: "products/laptop_Depositphotos_6271974_L.jpg",
		productName: "Laptop Workstation 15 inch",
		category: "Electronics",
		rating: 5,
		grossPrice: 699,
		netPrice: 744.44,
    salesTrendData: TREND_DATA[14],
		orders: [
			{
				orderId: 6975,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
					customer: "Customer 151",
					contactLinks: {
						email: "customer151@example.com",
						linkedin: "https://linkedin.com/in/customer151"
					}
				}
			},
			{
				orderId: 1891,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-30"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
					customer: "Customer 152",
					contactLinks: {
						email: "customer152@example.com",
						linkedin: "https://linkedin.com/in/customer152"
					}
				}
			},
			{
				orderId: 4289,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
					customer: "Customer 153",
					contactLinks: {
						email: "customer153@example.com",
						linkedin: "https://linkedin.com/in/customer153"
					}
				}
			},
			{
				orderId: 8229,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-15",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
					customer: "Customer 154",
					contactLinks: {
						email: "customer154@example.com",
						linkedin: "https://linkedin.com/in/customer154"
					}
				}
			},
			{
				orderId: 9112,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
					customer: "Customer 155",
					contactLinks: {
						email: "customer155@example.com",
						linkedin: "https://linkedin.com/in/customer155"
					}
				}
			},
			{
				orderId: 7250,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
					customer: "Customer 156",
					contactLinks: {
						email: "customer156@example.com",
						linkedin: "https://linkedin.com/in/customer156"
					}
				}
			},
			{
				orderId: 8168,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
					customer: "Customer 157",
					contactLinks: {
						email: "customer157@example.com",
						linkedin: "https://linkedin.com/in/customer157"
					}
				}
			},
			{
				orderId: 3975,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
					customer: "Customer 158",
					contactLinks: {
						email: "customer158@example.com",
						linkedin: "https://linkedin.com/in/customer158"
					}
				}
			},
			{
				orderId: 9222,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
					customer: "Customer 159",
					contactLinks: {
						email: "customer159@example.com",
						linkedin: "https://linkedin.com/in/customer159"
					}
				}
			},
			{
				orderId: 5077,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-09",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
					customer: "Customer 160",
					contactLinks: {
						email: "customer160@example.com",
						linkedin: "https://linkedin.com/in/customer160"
					}
				}
			},
			{
				orderId: 2800,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
					customer: "Customer 161",
					contactLinks: {
						email: "customer161@example.com",
						linkedin: "https://linkedin.com/in/customer161"
					}
				}
			},
			{
				orderId: 3284,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
					customer: "Customer 162",
					contactLinks: {
						email: "customer162@example.com",
						linkedin: "https://linkedin.com/in/customer162"
					}
				}
			},
			{
				orderId: 8060,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
					customer: "Customer 163",
					contactLinks: {
						email: "customer163@example.com",
						linkedin: "https://linkedin.com/in/customer163"
					}
				}
			},
			{
				orderId: 4043,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-08",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
					customer: "Customer 164",
					contactLinks: {
						email: "customer164@example.com",
						linkedin: "https://linkedin.com/in/customer164"
					}
				}
			},
			{
				orderId: 9002,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
					customer: "Customer 165",
					contactLinks: {
						email: "customer165@example.com",
						linkedin: "https://linkedin.com/in/customer165"
					}
				}
			}
		]
	},
	{
		sku: "SKU1025",
		imageUrl: "products/Macbook_Depositphotos_205657722_L-2.jpg",
		productName: "MacBook Pro 15 inch",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 1211.53,
		netPrice: 1290.28,
    salesTrendData: TREND_DATA[1],
		orders: [
			{
				orderId: 3668,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 9088,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 2986,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 2306,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 6001,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 5064,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 8908,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 3992,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7454,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 7439,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 7884,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			},
			{
				orderId: 1217,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
					customer: "Customer 13",
					contactLinks: {
						email: "customer13@example.com",
						linkedin: "https://linkedin.com/in/customer13"
					}
				}
			},
			{
				orderId: 2222,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
					customer: "Customer 14",
					contactLinks: {
						email: "customer14@example.com",
						linkedin: "https://linkedin.com/in/customer14"
					}
				}
			},
			{
				orderId: 2341,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
					customer: "Customer 15",
					contactLinks: {
						email: "customer15@example.com",
						linkedin: "https://linkedin.com/in/customer15"
					}
				}
			},
			{
				orderId: 6504,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
					customer: "Customer 16",
					contactLinks: {
						email: "customer16@example.com",
						linkedin: "https://linkedin.com/in/customer16"
					}
				}
			},
			{
				orderId: 3384,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
					customer: "Customer 17",
					contactLinks: {
						email: "customer17@example.com",
						linkedin: "https://linkedin.com/in/customer17"
					}
				}
			},
			{
				orderId: 5184,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
					customer: "Customer 18",
					contactLinks: {
						email: "customer18@example.com",
						linkedin: "https://linkedin.com/in/customer18"
					}
				}
			},
			{
				orderId: 8824,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
					customer: "Customer 19",
					contactLinks: {
						email: "customer19@example.com",
						linkedin: "https://linkedin.com/in/customer19"
					}
				}
			},
			{
				orderId: 6498,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
					customer: "Customer 20",
					contactLinks: {
						email: "customer20@example.com",
						linkedin: "https://linkedin.com/in/customer20"
					}
				}
			},
			{
				orderId: 5649,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 9539,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 3984,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 4042,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 1922,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			},
			{
				orderId: 8364,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 4856,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 3730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 2312,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 6716,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 8911,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 9728,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 3961,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 4159,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 7266,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 9165,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 5787,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 3379,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			}
		]
	},
	{
		sku: "SKU1026",
		imageUrl: "products/Markers-pack-Depositphotos_113646792_L.jpg",
		productName: "Markers 4-pack",
		category: "Office Supplies",
		rating: 5,
		grossPrice: 7.95,
		netPrice: 8.47,
    salesTrendData: TREND_DATA[10],
		orders: [
			{
				orderId: 9494,
				status: OrderStatus.DELIVERED,
				delivery: {
          dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-28"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 91450,
					streetName: "Street 7",
					streetNumber: "200C",
					customer: "Customer 176",
					contactLinks: {
						email: "customer176@example.com",
						linkedin: "https://linkedin.com/in/customer176"
					}
				}
			},
			{
				orderId: 1227,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 97901,
					streetName: "Street 18",
					streetNumber: "78A",
					customer: "Customer 177",
					contactLinks: {
						email: "customer177@example.com",
						linkedin: "https://linkedin.com/in/customer177"
					}
				}
			},
			{
				orderId: 6851,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 82888,
					streetName: "Street 44",
					streetNumber: "340A",
					customer: "Customer 178",
					contactLinks: {
						email: "customer178@example.com",
						linkedin: "https://linkedin.com/in/customer178"
					}
				}
			},
			{
				orderId: 5647,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 86191,
					streetName: "Street 46",
					streetNumber: "2A",
					customer: "Customer 179",
					contactLinks: {
						email: "customer179@example.com",
						linkedin: "https://linkedin.com/in/customer179"
					}
				}
			},
			{
				orderId: 3651,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-05",
					dateDelivered: "2024-12-14"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 34426,
					streetName: "Street 20",
					streetNumber: "482B",
					customer: "Customer 180",
					contactLinks: {
						email: "customer180@example.com",
						linkedin: "https://linkedin.com/in/customer180"
					}
				}
			},
			{
				orderId: 3704,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-15",
					dateDelivered: "2024-12-17"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 99385,
					streetName: "Street 36",
					streetNumber: "279C",
					customer: "Customer 181",
					contactLinks: {
						email: "customer181@example.com",
						linkedin: "https://linkedin.com/in/customer181"
					}
				}
			},
			{
				orderId: 3696,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 79567,
					streetName: "Street 23",
					streetNumber: "677A",
					customer: "Customer 182",
					contactLinks: {
						email: "customer182@example.com",
						linkedin: "https://linkedin.com/in/customer182"
					}
				}
			},
			{
				orderId: 5334,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 90686,
					streetName: "Street 15",
					streetNumber: "251C",
					customer: "Customer 183",
					contactLinks: {
						email: "customer183@example.com",
						linkedin: "https://linkedin.com/in/customer183"
					}
				}
			},
			{
				orderId: 2110,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-13",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 85309,
					streetName: "Street 47",
					streetNumber: "63C",
					customer: "Customer 184",
					contactLinks: {
						email: "customer184@example.com",
						linkedin: "https://linkedin.com/in/customer184"
					}
				}
			}
		]
	},
	{
		sku: "SKU1027",
		imageUrl: "products/Merrel-shoes-584850_1920.jpg",
		productName: "Merrel Shoes",
		category: "Footwear",
		rating: 3.5,
		grossPrice: 120,
		netPrice: 127.8,
    salesTrendData: TREND_DATA[4],
		orders: [
			{
				orderId: 3988,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 90688,
					streetName: "Street 33",
					streetNumber: "717B",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 1482,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 34472,
					streetName: "Street 2",
					streetNumber: "415A",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 5765,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 62158,
					streetName: "Street 24",
					streetNumber: "419A",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 3864,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-12"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 57141,
					streetName: "Street 40",
					streetNumber: "839C",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 3396,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "2024-12-12",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 95678,
					streetName: "Street 14",
					streetNumber: "297C",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			}
		]
	},
	{
		sku: "SKU1028",
		imageUrl: "products/Microwave-Depositphotos_26880443_L.jpg",
		productName: "Microwave 20 l",
		category: "Home Appliances",
		rating: 5,
		grossPrice: 129.99,
		netPrice: 138.44,
    salesTrendData: TREND_DATA[0],
		orders: [
			{
				orderId: 1234,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
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
				orderId: 2345,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 23456,
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
				orderId: 3456,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
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
				orderId: 4567,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
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
				orderId: 5678,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54321,
					streetName: "Via del Corso",
					streetNumber: "100A",
					customer: "Luca Rossi",
					contactLinks: {
						email: "luca.rossi@example.com",
						linkedin: "https://linkedin.com/in/luca-rossi"
					}
				}
			},
			{
				orderId: 6789,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 65432,
					streetName: "Avenida Paulista",
					streetNumber: "200B",
					customer: "Carlos Silva",
					contactLinks: {
						email: "carlos.silva@example.com",
						linkedin: "https://linkedin.com/in/carlos-silva"
					}
				}
			},
			{
				orderId: 7890,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 98765,
					streetName: "Marine Drive",
					streetNumber: "150B",
					customer: "Amit Mehta",
					contactLinks: {
						email: "amit.mehta@example.com",
						linkedin: "https://linkedin.com/in/amit-mehta"
					}
				}
			},
			{
				orderId: 8901,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "United Kingdom",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 34567,
					streetName: "Oxford Street",
					streetNumber: "200C",
					customer: "Elizabeth Brown",
					contactLinks: {
						email: "elizabeth.brown@example.com",
						linkedin: "https://linkedin.com/in/elizabeth-brown"
					}
				}
			},
			{
				orderId: 9012,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 56789,
					streetName: "Shinjuku Street",
					streetNumber: "50D",
					customer: "Hiroshi Tanaka",
					contactLinks: {
						email: "hiroshi.tanaka@example.com",
						linkedin: "https://linkedin.com/in/hiroshi-tanaka"
					}
				}
			}
		]
	},
	{
		sku: "SKU1029",
		imageUrl: "products/Monitor-curved-27inch-Depositphotos_282647566_L.jpg",
		productName: "Monitor Curved 27 inch",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 179.99,
		netPrice: 191.69,
    salesTrendData: TREND_DATA[11],
		orders: [
			{
				orderId: 6652,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 75331,
					streetName: "Street 15",
					streetNumber: "767A",
					customer: "Customer 104",
					contactLinks: {
						email: "customer104@example.com",
						linkedin: "https://linkedin.com/in/customer104"
					}
				}
			},
			{
				orderId: 2521,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 64266,
					streetName: "Street 26",
					streetNumber: "934B",
					customer: "Customer 105",
					contactLinks: {
						email: "customer105@example.com",
						linkedin: "https://linkedin.com/in/customer105"
					}
				}
			},
			{
				orderId: 2535,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 16147,
					streetName: "Street 33",
					streetNumber: "673A",
					customer: "Customer 106",
					contactLinks: {
						email: "customer106@example.com",
						linkedin: "https://linkedin.com/in/customer106"
					}
				}
			},
			{
				orderId: 9916,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 12465,
					streetName: "Street 6",
					streetNumber: "709A",
					customer: "Customer 107",
					contactLinks: {
						email: "customer107@example.com",
						linkedin: "https://linkedin.com/in/customer107"
					}
				}
			},
			{
				orderId: 8230,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 53012,
					streetName: "Street 50",
					streetNumber: "810C",
					customer: "Customer 108",
					contactLinks: {
						email: "customer108@example.com",
						linkedin: "https://linkedin.com/in/customer108"
					}
				}
			},
			{
				orderId: 2420,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 57310,
					streetName: "Street 44",
					streetNumber: "922B",
					customer: "Customer 109",
					contactLinks: {
						email: "customer109@example.com",
						linkedin: "https://linkedin.com/in/customer109"
					}
				}
			},
			{
				orderId: 1921,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: "2025-01-01"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 52783,
					streetName: "Street 36",
					streetNumber: "231A",
					customer: "Customer 110",
					contactLinks: {
						email: "customer110@example.com",
						linkedin: "https://linkedin.com/in/customer110"
					}
				}
			},
			{
				orderId: 2259,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 90045,
					streetName: "Street 23",
					streetNumber: "461A",
					customer: "Customer 111",
					contactLinks: {
						email: "customer111@example.com",
						linkedin: "https://linkedin.com/in/customer111"
					}
				}
			},
			{
				orderId: 7327,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 62629,
					streetName: "Street 7",
					streetNumber: "740A",
					customer: "Customer 112",
					contactLinks: {
						email: "customer112@example.com",
						linkedin: "https://linkedin.com/in/customer112"
					}
				}
			},
			{
				orderId: 2897,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 64364,
					streetName: "Street 27",
					streetNumber: "87A",
					customer: "Customer 113",
					contactLinks: {
						email: "customer113@example.com",
						linkedin: "https://linkedin.com/in/customer113"
					}
				}
			},
			{
				orderId: 3625,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-28"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 15440,
					streetName: "Street 19",
					streetNumber: "147B",
					customer: "Customer 114",
					contactLinks: {
						email: "customer114@example.com",
						linkedin: "https://linkedin.com/in/customer114"
					}
				}
			},
			{
				orderId: 4623,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 42093,
					streetName: "Street 4",
					streetNumber: "26A",
					customer: "Customer 115",
					contactLinks: {
						email: "customer115@example.com",
						linkedin: "https://linkedin.com/in/customer115"
					}
				}
			},
			{
				orderId: 8901,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-18",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 30378,
					streetName: "Street 47",
					streetNumber: "674A",
					customer: "Customer 116",
					contactLinks: {
						email: "customer116@example.com",
						linkedin: "https://linkedin.com/in/customer116"
					}
				}
			},
			{
				orderId: 5637,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 59151,
					streetName: "Street 30",
					streetNumber: "924B",
					customer: "Customer 117",
					contactLinks: {
						email: "customer117@example.com",
						linkedin: "https://linkedin.com/in/customer117"
					}
				}
			},
			{
				orderId: 1445,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "2024-12-07",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 95591,
					streetName: "Street 41",
					streetNumber: "541A",
					customer: "Customer 118",
					contactLinks: {
						email: "customer118@example.com",
						linkedin: "https://linkedin.com/in/customer118"
					}
				}
			},
			{
				orderId: 6701,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 55370,
					streetName: "Street 22",
					streetNumber: "916A",
					customer: "Customer 119",
					contactLinks: {
						email: "customer119@example.com",
						linkedin: "https://linkedin.com/in/customer119"
					}
				}
			},
			{
				orderId: 7463,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 66758,
					streetName: "Street 17",
					streetNumber: "599C",
					customer: "Customer 120",
					contactLinks: {
						email: "customer120@example.com",
						linkedin: "https://linkedin.com/in/customer120"
					}
				}
			},
			{
				orderId: 9730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 17616,
					streetName: "Street 43",
					streetNumber: "688C",
					customer: "Customer 121",
					contactLinks: {
						email: "customer121@example.com",
						linkedin: "https://linkedin.com/in/customer121"
					}
				}
			}
		]
	},
	{
		sku: "SKU1030",
		imageUrl: "products/Nike_Depositphotos_146077297_L.jpg",
		productName: "Nike Sneakers Black",
		category: "Footwear",
		rating: 5,
		grossPrice: 75,
		netPrice: 79.88,
    salesTrendData: TREND_DATA[13],
		orders: [
			{
				orderId: 2287,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 42881,
					streetName: "Street 38",
					streetNumber: "366B",
					customer: "Customer 145",
					contactLinks: {
						email: "customer145@example.com",
						linkedin: "https://linkedin.com/in/customer145"
					}
				}
			},
			{
				orderId: 2776,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 40163,
					streetName: "Street 4",
					streetNumber: "800A",
					customer: "Customer 146",
					contactLinks: {
						email: "customer146@example.com",
						linkedin: "https://linkedin.com/in/customer146"
					}
				}
			},
			{
				orderId: 6417,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-28",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 95499,
					streetName: "Street 36",
					streetNumber: "576A",
					customer: "Customer 147",
					contactLinks: {
						email: "customer147@example.com",
						linkedin: "https://linkedin.com/in/customer147"
					}
				}
			},
			{
				orderId: 7110,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 10032,
					streetName: "Street 47",
					streetNumber: "848C",
					customer: "Customer 148",
					contactLinks: {
						email: "customer148@example.com",
						linkedin: "https://linkedin.com/in/customer148"
					}
				}
			},
			{
				orderId: 5102,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 97615,
					streetName: "Street 18",
					streetNumber: "232B",
					customer: "Customer 149",
					contactLinks: {
						email: "customer149@example.com",
						linkedin: "https://linkedin.com/in/customer149"
					}
				}
			},
			{
				orderId: 5524,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 22032,
					streetName: "Street 30",
					streetNumber: "346B",
					customer: "Customer 150",
					contactLinks: {
						email: "customer150@example.com",
						linkedin: "https://linkedin.com/in/customer150"
					}
				}
			}
		]
	},
	{
		sku: "SKU1031",
		imageUrl: "products/Nike_footwear-5408643_1920.jpg",
		productName: "Nike Air Footwear",
		category: "Footwear",
		rating: 3.5,
		grossPrice: 115,
		netPrice: 122.48,
    salesTrendData: TREND_DATA[2],
		orders: [
			{
				orderId: 6636,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 1757,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 9540,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5072,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Poland",
					countryFlag: CountryFlag.POLAND,
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 6883,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 7779,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 3356,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 7814,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7978,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 9865,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 2538,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			}
		]
	},
	{
		sku: "SKU1032",
		imageUrl: "products/Nike_sneakers-5408646_1920.jpg",
		productName: "Nike Sneakers White",
		category: "Footwear",
		rating: 5,
		grossPrice: 85.99,
		netPrice: 91.58,
    salesTrendData: TREND_DATA[6],
		orders: [
			{
				orderId: 4922,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 31660,
					streetName: "Street 31",
					streetNumber: "847A",
					customer: "Customer 40",
					contactLinks: {
						email: "customer40@example.com",
						linkedin: "https://linkedin.com/in/customer40"
					}
				}
			},
			{
				orderId: 4303,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 80912,
					streetName: "Street 36",
					streetNumber: "187B",
					customer: "Customer 41",
					contactLinks: {
						email: "customer41@example.com",
						linkedin: "https://linkedin.com/in/customer41"
					}
				}
			},
			{
				orderId: 3985,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 64528,
					streetName: "Street 30",
					streetNumber: "733C",
					customer: "Customer 42",
					contactLinks: {
						email: "customer42@example.com",
						linkedin: "https://linkedin.com/in/customer42"
					}
				}
			},
			{
				orderId: 8594,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 56481,
					streetName: "Street 22",
					streetNumber: "718A",
					customer: "Customer 43",
					contactLinks: {
						email: "customer43@example.com",
						linkedin: "https://linkedin.com/in/customer43"
					}
				}
			},
			{
				orderId: 7481,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "2024-12-07",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 65465,
					streetName: "Street 39",
					streetNumber: "566C",
					customer: "Customer 44",
					contactLinks: {
						email: "customer44@example.com",
						linkedin: "https://linkedin.com/in/customer44"
					}
				}
			},
			{
				orderId: 3509,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25704,
					streetName: "Street 23",
					streetNumber: "283C",
					customer: "Customer 45",
					contactLinks: {
						email: "customer45@example.com",
						linkedin: "https://linkedin.com/in/customer45"
					}
				}
			},
			{
				orderId: 5440,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 50026,
					streetName: "Street 11",
					streetNumber: "145A",
					customer: "Customer 46",
					contactLinks: {
						email: "customer46@example.com",
						linkedin: "https://linkedin.com/in/customer46"
					}
				}
			}
		]
	},
	{
		sku: "SKU1033",
		imageUrl: "products/PC-Mouse-wired-Depositphotos_12621359_L.jpg",
		productName: "PC Mouse Wired",
		category: "Accessories",
		rating: 3.5,
		grossPrice: 13.99,
		netPrice: 14.9,
    salesTrendData: TREND_DATA[14],
		orders: [
			{
				orderId: 6975,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
					customer: "Customer 151",
					contactLinks: {
						email: "customer151@example.com",
						linkedin: "https://linkedin.com/in/customer151"
					}
				}
			},
			{
				orderId: 1891,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-30"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
					customer: "Customer 152",
					contactLinks: {
						email: "customer152@example.com",
						linkedin: "https://linkedin.com/in/customer152"
					}
				}
			},
			{
				orderId: 4289,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
					customer: "Customer 153",
					contactLinks: {
						email: "customer153@example.com",
						linkedin: "https://linkedin.com/in/customer153"
					}
				}
			},
			{
				orderId: 8229,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-15",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
					customer: "Customer 154",
					contactLinks: {
						email: "customer154@example.com",
						linkedin: "https://linkedin.com/in/customer154"
					}
				}
			},
			{
				orderId: 9112,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
					customer: "Customer 155",
					contactLinks: {
						email: "customer155@example.com",
						linkedin: "https://linkedin.com/in/customer155"
					}
				}
			},
			{
				orderId: 7250,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
					customer: "Customer 156",
					contactLinks: {
						email: "customer156@example.com",
						linkedin: "https://linkedin.com/in/customer156"
					}
				}
			},
			{
				orderId: 8168,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
					customer: "Customer 157",
					contactLinks: {
						email: "customer157@example.com",
						linkedin: "https://linkedin.com/in/customer157"
					}
				}
			},
			{
				orderId: 3975,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
					customer: "Customer 158",
					contactLinks: {
						email: "customer158@example.com",
						linkedin: "https://linkedin.com/in/customer158"
					}
				}
			},
			{
				orderId: 9222,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
					customer: "Customer 159",
					contactLinks: {
						email: "customer159@example.com",
						linkedin: "https://linkedin.com/in/customer159"
					}
				}
			},
			{
				orderId: 5077,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-09",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
					customer: "Customer 160",
					contactLinks: {
						email: "customer160@example.com",
						linkedin: "https://linkedin.com/in/customer160"
					}
				}
			},
			{
				orderId: 2800,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
					customer: "Customer 161",
					contactLinks: {
						email: "customer161@example.com",
						linkedin: "https://linkedin.com/in/customer161"
					}
				}
			},
			{
				orderId: 3284,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
					customer: "Customer 162",
					contactLinks: {
						email: "customer162@example.com",
						linkedin: "https://linkedin.com/in/customer162"
					}
				}
			},
			{
				orderId: 8060,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
					customer: "Customer 163",
					contactLinks: {
						email: "customer163@example.com",
						linkedin: "https://linkedin.com/in/customer163"
					}
				}
			},
			{
				orderId: 4043,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-08",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
					customer: "Customer 164",
					contactLinks: {
						email: "customer164@example.com",
						linkedin: "https://linkedin.com/in/customer164"
					}
				}
			},
			{
				orderId: 9002,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
					customer: "Customer 165",
					contactLinks: {
						email: "customer165@example.com",
						linkedin: "https://linkedin.com/in/customer165"
					}
				}
			}
		]
	},
	{
		sku: "SKU1034",
		imageUrl: "products/Pencil-Depositphotos_293936972_L.jpg",
		productName: "Pencil",
		category: "Office Supplies",
		rating: 5,
		grossPrice: 0.89,
		netPrice: 0.95,
    salesTrendData: TREND_DATA[1],
		orders: [
			{
				orderId: 3668,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 9088,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 2986,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 2306,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 6001,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 5064,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 8908,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 3992,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7454,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 7439,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 7884,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			},
			{
				orderId: 1217,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
					customer: "Customer 13",
					contactLinks: {
						email: "customer13@example.com",
						linkedin: "https://linkedin.com/in/customer13"
					}
				}
			},
			{
				orderId: 2222,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
					customer: "Customer 14",
					contactLinks: {
						email: "customer14@example.com",
						linkedin: "https://linkedin.com/in/customer14"
					}
				}
			},
			{
				orderId: 2341,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
					customer: "Customer 15",
					contactLinks: {
						email: "customer15@example.com",
						linkedin: "https://linkedin.com/in/customer15"
					}
				}
			},
			{
				orderId: 6504,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
					customer: "Customer 16",
					contactLinks: {
						email: "customer16@example.com",
						linkedin: "https://linkedin.com/in/customer16"
					}
				}
			},
			{
				orderId: 3384,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
					customer: "Customer 17",
					contactLinks: {
						email: "customer17@example.com",
						linkedin: "https://linkedin.com/in/customer17"
					}
				}
			},
			{
				orderId: 5184,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
					customer: "Customer 18",
					contactLinks: {
						email: "customer18@example.com",
						linkedin: "https://linkedin.com/in/customer18"
					}
				}
			},
			{
				orderId: 8824,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
					customer: "Customer 19",
					contactLinks: {
						email: "customer19@example.com",
						linkedin: "https://linkedin.com/in/customer19"
					}
				}
			},
			{
				orderId: 6498,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
					customer: "Customer 20",
					contactLinks: {
						email: "customer20@example.com",
						linkedin: "https://linkedin.com/in/customer20"
					}
				}
			},
			{
				orderId: 5649,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 9539,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 3984,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 4042,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Brazil",
					countryFlag: CountryFlag.BRAZIL,
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 1922,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Finland",
					countryFlag: CountryFlag.FINLAND,
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			},
			{
				orderId: 8364,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 4856,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 3730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 2312,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 6716,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 8911,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 9728,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 3961,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 4159,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Romania",
					countryFlag: CountryFlag.ROMANIA,
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 7266,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 9165,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 5787,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "China",
					countryFlag: CountryFlag.CHINA,
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 3379,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Greece",
					countryFlag: CountryFlag.GREECE,
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			}
		]
	},
	{
		sku: "SKU1035",
		imageUrl: "products/Post-it-notes-Depositphotos_2275156_L.jpg",
		productName: "Post-it Notes",
		category: "Office Supplies",
		rating: 3.5,
		grossPrice: 3.59,
		netPrice: 3.82,
    salesTrendData: TREND_DATA[14],
		orders: [
			{
				orderId: 6975,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
					customer: "Customer 151",
					contactLinks: {
						email: "customer151@example.com",
						linkedin: "https://linkedin.com/in/customer151"
					}
				}
			},
			{
				orderId: 1891,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-30"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
					customer: "Customer 152",
					contactLinks: {
						email: "customer152@example.com",
						linkedin: "https://linkedin.com/in/customer152"
					}
				}
			},
			{
				orderId: 4289,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
					customer: "Customer 153",
					contactLinks: {
						email: "customer153@example.com",
						linkedin: "https://linkedin.com/in/customer153"
					}
				}
			},
			{
				orderId: 8229,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-15",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
					customer: "Customer 154",
					contactLinks: {
						email: "customer154@example.com",
						linkedin: "https://linkedin.com/in/customer154"
					}
				}
			},
			{
				orderId: 9112,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
					customer: "Customer 155",
					contactLinks: {
						email: "customer155@example.com",
						linkedin: "https://linkedin.com/in/customer155"
					}
				}
			},
			{
				orderId: 7250,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
					customer: "Customer 156",
					contactLinks: {
						email: "customer156@example.com",
						linkedin: "https://linkedin.com/in/customer156"
					}
				}
			},
			{
				orderId: 8168,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
					customer: "Customer 157",
					contactLinks: {
						email: "customer157@example.com",
						linkedin: "https://linkedin.com/in/customer157"
					}
				}
			},
			{
				orderId: 3975,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
					customer: "Customer 158",
					contactLinks: {
						email: "customer158@example.com",
						linkedin: "https://linkedin.com/in/customer158"
					}
				}
			},
			{
				orderId: 9222,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
					customer: "Customer 159",
					contactLinks: {
						email: "customer159@example.com",
						linkedin: "https://linkedin.com/in/customer159"
					}
				}
			},
			{
				orderId: 5077,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-09",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
					customer: "Customer 160",
					contactLinks: {
						email: "customer160@example.com",
						linkedin: "https://linkedin.com/in/customer160"
					}
				}
			},
			{
				orderId: 2800,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
					customer: "Customer 161",
					contactLinks: {
						email: "customer161@example.com",
						linkedin: "https://linkedin.com/in/customer161"
					}
				}
			},
			{
				orderId: 3284,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
					customer: "Customer 162",
					contactLinks: {
						email: "customer162@example.com",
						linkedin: "https://linkedin.com/in/customer162"
					}
				}
			},
			{
				orderId: 8060,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
					customer: "Customer 163",
					contactLinks: {
						email: "customer163@example.com",
						linkedin: "https://linkedin.com/in/customer163"
					}
				}
			},
			{
				orderId: 4043,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-08",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
					customer: "Customer 164",
					contactLinks: {
						email: "customer164@example.com",
						linkedin: "https://linkedin.com/in/customer164"
					}
				}
			},
			{
				orderId: 9002,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
					customer: "Customer 165",
					contactLinks: {
						email: "customer165@example.com",
						linkedin: "https://linkedin.com/in/customer165"
					}
				}
			}
		]
	},
	{
		sku: "SKU1036",
		imageUrl: "products/Print-paper-Depositphotos_191385040_L.jpg",
		productName: "Print Paper Pack",
		category: "Office Supplies",
		rating: 5,
		grossPrice: 7.42,
		netPrice: 7.9,
    salesTrendData: TREND_DATA[8],
		orders: [
			{
				orderId: 9046,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 88056,
					streetName: "Street 31",
					streetNumber: "863C",
					customer: "Customer 166",
					contactLinks: {
						email: "customer166@example.com",
						linkedin: "https://linkedin.com/in/customer166"
					}
				}
			},
			{
				orderId: 5568,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 32539,
					streetName: "Street 16",
					streetNumber: "453A",
					customer: "Customer 167",
					contactLinks: {
						email: "customer167@example.com",
						linkedin: "https://linkedin.com/in/customer167"
					}
				}
			},
			{
				orderId: 6837,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 51789,
					streetName: "Street 21",
					streetNumber: "912C",
					customer: "Customer 168",
					contactLinks: {
						email: "customer168@example.com",
						linkedin: "https://linkedin.com/in/customer168"
					}
				}
			},
			{
				orderId: 2939,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 75943,
					streetName: "Street 10",
					streetNumber: "21A",
					customer: "Customer 169",
					contactLinks: {
						email: "customer169@example.com",
						linkedin: "https://linkedin.com/in/customer169"
					}
				}
			},
			{
				orderId: 1498,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-09",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 91277,
					streetName: "Street 40",
					streetNumber: "671A",
					customer: "Customer 170",
					contactLinks: {
						email: "customer170@example.com",
						linkedin: "https://linkedin.com/in/customer170"
					}
				}
			},
			{
				orderId: 1572,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 58801,
					streetName: "Street 48",
					streetNumber: "855A",
					customer: "Customer 171",
					contactLinks: {
						email: "customer171@example.com",
						linkedin: "https://linkedin.com/in/customer171"
					}
				}
			},
			{
				orderId: 2335,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 59822,
					streetName: "Street 5",
					streetNumber: "212A",
					customer: "Customer 172",
					contactLinks: {
						email: "customer172@example.com",
						linkedin: "https://linkedin.com/in/customer172"
					}
				}
			},
			{
				orderId: 2112,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-21",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 95627,
					streetName: "Street 47",
					streetNumber: "438A",
					customer: "Customer 173",
					contactLinks: {
						email: "customer173@example.com",
						linkedin: "https://linkedin.com/in/customer173"
					}
				}
			},
			{
				orderId: 5538,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 67887,
					streetName: "Street 16",
					streetNumber: "341C",
					customer: "Customer 174",
					contactLinks: {
						email: "customer174@example.com",
						linkedin: "https://linkedin.com/in/customer174"
					}
				}
			},
			{
				orderId: 3407,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-20",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 99025,
					streetName: "Street 20",
					streetNumber: "413A",
					customer: "Customer 175",
					contactLinks: {
						email: "customer175@example.com",
						linkedin: "https://linkedin.com/in/customer175"
					}
				}
			}
		]
	},
	{
		sku: "SKU1037",
		imageUrl: "products/Samsung-Tablet_black-4766996_1920.jpg",
		productName: "Samsung Tablet 11 inch",
		category: "Electronics",
		rating: 3.5,
		grossPrice: 189.71,
		netPrice: 202.04,
    salesTrendData: TREND_DATA[5],
		orders: [
			{
				orderId: 9976,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 45797,
					streetName: "Street 36",
					streetNumber: "49B",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 5062,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 62471,
					streetName: "Street 18",
					streetNumber: "34C",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 4640,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 77658,
					streetName: "Street 34",
					streetNumber: "635C",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 4810,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 57877,
					streetName: "Street 40",
					streetNumber: "451A",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 4241,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 53308,
					streetName: "Street 29",
					streetNumber: "538A",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 9070,
				status: OrderStatus.DELIVERED,
				delivery: {
          dateOrdered: "2024-12-10",
					dateShipped: "2024-12-14",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 39952,
					streetName: "Street 15",
					streetNumber: "830A",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 7654,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 89167,
					streetName: "Street 24",
					streetNumber: "282C",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 7647,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 29077,
					streetName: "Street 37",
					streetNumber: "784A",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 5360,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 57993,
					streetName: "Street 25",
					streetNumber: "445A",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 4032,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 25933,
					streetName: "Street 4",
					streetNumber: "888C",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 3391,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 61583,
					streetName: "Street 24",
					streetNumber: "110B",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 6604,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 60545,
					streetName: "Street 3",
					streetNumber: "882C",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 6012,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 55210,
					streetName: "Street 32",
					streetNumber: "769B",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			},
			{
				orderId: 4584,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 28512,
					streetName: "Street 24",
					streetNumber: "20C",
					customer: "Customer 39",
					contactLinks: {
						email: "customer39@example.com",
						linkedin: "https://linkedin.com/in/customer39"
					}
				}
			}
		]
	},
	{
		sku: "SKU1038",
		imageUrl: "products/Scanner-Depositphotos_7372129_XL.jpg",
		productName: "Scanner",
		category: "Electronics",
		rating: 5,
		grossPrice: 194,
		netPrice: 206.61,
    salesTrendData: TREND_DATA[2],
		orders: [
			{
				orderId: 6636,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 1757,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 9540,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5072,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Poland",
					countryFlag: CountryFlag.POLAND,
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 6883,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 7779,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 3356,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 7814,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7978,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 9865,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 2538,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			}
		]
	},
	{
		sku: "SKU1039",
		imageUrl: "products/Sony_Alpha7_camera-275007_1920.jpg",
		productName: "Sony Alpha 7",
		category: "Photography",
		rating: 3.5,
		grossPrice: 799.99,
		netPrice: 851.99,
    salesTrendData: TREND_DATA[10],
		orders: [
			{
				orderId: 7443,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 22399,
					streetName: "Street 37",
					streetNumber: "15B",
					customer: "Customer 95",
					contactLinks: {
						email: "customer95@example.com",
						linkedin: "https://linkedin.com/in/customer95"
					}
				}
			},
			{
				orderId: 3912,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 69481,
					streetName: "Street 28",
					streetNumber: "930B",
					customer: "Customer 96",
					contactLinks: {
						email: "customer96@example.com",
						linkedin: "https://linkedin.com/in/customer96"
					}
				}
			},
			{
				orderId: 3934,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-12",
					dateDelivered: "2024-12-19"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 31863,
					streetName: "Street 35",
					streetNumber: "331C",
					customer: "Customer 97",
					contactLinks: {
						email: "customer97@example.com",
						linkedin: "https://linkedin.com/in/customer97"
					}
				}
			},
			{
				orderId: 3976,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 47952,
					streetName: "Street 34",
					streetNumber: "510C",
					customer: "Customer 98",
					contactLinks: {
						email: "customer98@example.com",
						linkedin: "https://linkedin.com/in/customer98"
					}
				}
			},
			{
				orderId: 8593,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 31080,
					streetName: "Street 36",
					streetNumber: "455C",
					customer: "Customer 99",
					contactLinks: {
						email: "customer99@example.com",
						linkedin: "https://linkedin.com/in/customer99"
					}
				}
			},
			{
				orderId: 4771,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 92086,
					streetName: "Street 46",
					streetNumber: "988A",
					customer: "Customer 100",
					contactLinks: {
						email: "customer100@example.com",
						linkedin: "https://linkedin.com/in/customer100"
					}
				}
			},
			{
				orderId: 2767,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 18884,
					streetName: "Street 18",
					streetNumber: "125C",
					customer: "Customer 101",
					contactLinks: {
						email: "customer101@example.com",
						linkedin: "https://linkedin.com/in/customer101"
					}
				}
			},
			{
				orderId: 2706,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-18"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 58190,
					streetName: "Street 41",
					streetNumber: "747A",
					customer: "Customer 102",
					contactLinks: {
						email: "customer102@example.com",
						linkedin: "https://linkedin.com/in/customer102"
					}
				}
			},
			{
				orderId: 7416,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 48132,
					streetName: "Street 22",
					streetNumber: "167C",
					customer: "Customer 103",
					contactLinks: {
						email: "customer103@example.com",
						linkedin: "https://linkedin.com/in/customer103"
					}
				}
			}
		]
	},
	{
		sku: "SKU1040",
		imageUrl: "products/Sony_Alpha7_camera-4833557_1920-2.jpg",
		productName: "Sony Alpha 7 III",
		category: "Photography",
		rating: 5,
		grossPrice: 1799.99,
		netPrice: 1916.99,
    salesTrendData: TREND_DATA[8],
		orders: [
			{
				orderId: 7944,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-20",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 21662,
					streetName: "Street 47",
					streetNumber: "44B",
					customer: "Customer 75",
					contactLinks: {
						email: "customer75@example.com",
						linkedin: "https://linkedin.com/in/customer75"
					}
				}
			},
			{
				orderId: 7125,
				status: OrderStatus.DELIVERED,
				delivery: {
          dateOrdered: "2024-12-21",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 90760,
					streetName: "Street 22",
					streetNumber: "673A",
					customer: "Customer 76",
					contactLinks: {
						email: "customer76@example.com",
						linkedin: "https://linkedin.com/in/customer76"
					}
				}
			},
			{
				orderId: 1422,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 61832,
					streetName: "Street 25",
					streetNumber: "567A",
					customer: "Customer 77",
					contactLinks: {
						email: "customer77@example.com",
						linkedin: "https://linkedin.com/in/customer77"
					}
				}
			},
			{
				orderId: 9538,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-17",
					dateDelivered: "2024-12-19"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 24503,
					streetName: "Street 45",
					streetNumber: "119A",
					customer: "Customer 78",
					contactLinks: {
						email: "customer78@example.com",
						linkedin: "https://linkedin.com/in/customer78"
					}
				}
			},
			{
				orderId: 1636,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 68399,
					streetName: "Street 2",
					streetNumber: "633C",
					customer: "Customer 79",
					contactLinks: {
						email: "customer79@example.com",
						linkedin: "https://linkedin.com/in/customer79"
					}
				}
			},
			{
				orderId: 4791,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 14988,
					streetName: "Street 37",
					streetNumber: "484A",
					customer: "Customer 80",
					contactLinks: {
						email: "customer80@example.com",
						linkedin: "https://linkedin.com/in/customer80"
					}
				}
			},
			{
				orderId: 2516,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 77388,
					streetName: "Street 43",
					streetNumber: "136C",
					customer: "Customer 81",
					contactLinks: {
						email: "customer81@example.com",
						linkedin: "https://linkedin.com/in/customer81"
					}
				}
			},
			{
				orderId: 7434,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 73213,
					streetName: "Street 49",
					streetNumber: "794C",
					customer: "Customer 82",
					contactLinks: {
						email: "customer82@example.com",
						linkedin: "https://linkedin.com/in/customer82"
					}
				}
			},
			{
				orderId: 5352,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 57275,
					streetName: "Street 24",
					streetNumber: "234A",
					customer: "Customer 83",
					contactLinks: {
						email: "customer83@example.com",
						linkedin: "https://linkedin.com/in/customer83"
					}
				}
			},
			{
				orderId: 7485,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 79583,
					streetName: "Street 18",
					streetNumber: "755A",
					customer: "Customer 84",
					contactLinks: {
						email: "customer84@example.com",
						linkedin: "https://linkedin.com/in/customer84"
					}
				}
			}
		]
	},
	{
		sku: "SKU1041",
		imageUrl: "products/Sony_lens-274986_1920.jpg",
		productName: "Sony Lens 55 mm",
		category: "Photography",
		rating: 3.5,
		grossPrice: 898,
		netPrice: 956.37,
    salesTrendData: TREND_DATA[12],
		orders: [
			{
				orderId: 9561,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-25",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 91387,
					streetName: "Street 28",
					streetNumber: "582B",
					customer: "Customer 122",
					contactLinks: {
						email: "customer122@example.com",
						linkedin: "https://linkedin.com/in/customer122"
					}
				}
			},
			{
				orderId: 8125,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 66151,
					streetName: "Street 8",
					streetNumber: "840A",
					customer: "Customer 123",
					contactLinks: {
						email: "customer123@example.com",
						linkedin: "https://linkedin.com/in/customer123"
					}
				}
			},
			{
				orderId: 4099,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 96467,
					streetName: "Street 6",
					streetNumber: "175A",
					customer: "Customer 124",
					contactLinks: {
						email: "customer124@example.com",
						linkedin: "https://linkedin.com/in/customer124"
					}
				}
			},
			{
				orderId: 8574,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 78201,
					streetName: "Street 6",
					streetNumber: "90B",
					customer: "Customer 125",
					contactLinks: {
						email: "customer125@example.com",
						linkedin: "https://linkedin.com/in/customer125"
					}
				}
			},
			{
				orderId: 4715,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 80238,
					streetName: "Street 4",
					streetNumber: "132B",
					customer: "Customer 126",
					contactLinks: {
						email: "customer126@example.com",
						linkedin: "https://linkedin.com/in/customer126"
					}
				}
			},
			{
				orderId: 8293,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 26324,
					streetName: "Street 33",
					streetNumber: "199B",
					customer: "Customer 127",
					contactLinks: {
						email: "customer127@example.com",
						linkedin: "https://linkedin.com/in/customer127"
					}
				}
			},
			{
				orderId: 9076,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 11926,
					streetName: "Street 39",
					streetNumber: "681C",
					customer: "Customer 128",
					contactLinks: {
						email: "customer128@example.com",
						linkedin: "https://linkedin.com/in/customer128"
					}
				}
			},
			{
				orderId: 4983,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 32182,
					streetName: "Street 17",
					streetNumber: "759C",
					customer: "Customer 129",
					contactLinks: {
						email: "customer129@example.com",
						linkedin: "https://linkedin.com/in/customer129"
					}
				}
			},
			{
				orderId: 6099,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 60858,
					streetName: "Street 36",
					streetNumber: "897B",
					customer: "Customer 130",
					contactLinks: {
						email: "customer130@example.com",
						linkedin: "https://linkedin.com/in/customer130"
					}
				}
			},
			{
				orderId: 4264,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-18"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 70966,
					streetName: "Street 4",
					streetNumber: "42B",
					customer: "Customer 131",
					contactLinks: {
						email: "customer131@example.com",
						linkedin: "https://linkedin.com/in/customer131"
					}
				}
			},
			{
				orderId: 8253,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 30896,
					streetName: "Street 50",
					streetNumber: "565A",
					customer: "Customer 132",
					contactLinks: {
						email: "customer132@example.com",
						linkedin: "https://linkedin.com/in/customer132"
					}
				}
			},
			{
				orderId: 2983,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 19822,
					streetName: "Street 32",
					streetNumber: "147A",
					customer: "Customer 133",
					contactLinks: {
						email: "customer133@example.com",
						linkedin: "https://linkedin.com/in/customer133"
					}
				}
			},
			{
				orderId: 5742,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 52866,
					streetName: "Street 39",
					streetNumber: "19C",
					customer: "Customer 134",
					contactLinks: {
						email: "customer134@example.com",
						linkedin: "https://linkedin.com/in/customer134"
					}
				}
			},
			{
				orderId: 9410,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 48901,
					streetName: "Street 22",
					streetNumber: "979C",
					customer: "Customer 135",
					contactLinks: {
						email: "customer135@example.com",
						linkedin: "https://linkedin.com/in/customer135"
					}
				}
			},
			{
				orderId: 8172,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 29242,
					streetName: "Street 13",
					streetNumber: "208B",
					customer: "Customer 136",
					contactLinks: {
						email: "customer136@example.com",
						linkedin: "https://linkedin.com/in/customer136"
					}
				}
			},
			{
				orderId: 7632,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 21401,
					streetName: "Street 20",
					streetNumber: "360C",
					customer: "Customer 137",
					contactLinks: {
						email: "customer137@example.com",
						linkedin: "https://linkedin.com/in/customer137"
					}
				}
			},
			{
				orderId: 9684,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 67334,
					streetName: "Street 40",
					streetNumber: "250A",
					customer: "Customer 138",
					contactLinks: {
						email: "customer138@example.com",
						linkedin: "https://linkedin.com/in/customer138"
					}
				}
			},
			{
				orderId: 7610,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 61914,
					streetName: "Street 33",
					streetNumber: "374B",
					customer: "Customer 139",
					contactLinks: {
						email: "customer139@example.com",
						linkedin: "https://linkedin.com/in/customer139"
					}
				}
			},
			{
				orderId: 9776,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 53088,
					streetName: "Street 7",
					streetNumber: "726B",
					customer: "Customer 140",
					contactLinks: {
						email: "customer140@example.com",
						linkedin: "https://linkedin.com/in/customer140"
					}
				}
			},
			{
				orderId: 5449,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 68754,
					streetName: "Street 49",
					streetNumber: "852B",
					customer: "Customer 141",
					contactLinks: {
						email: "customer141@example.com",
						linkedin: "https://linkedin.com/in/customer141"
					}
				}
			},
			{
				orderId: 4074,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 62569,
					streetName: "Street 1",
					streetNumber: "557B",
					customer: "Customer 142",
					contactLinks: {
						email: "customer142@example.com",
						linkedin: "https://linkedin.com/in/customer142"
					}
				}
			},
			{
				orderId: 6561,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 80236,
					streetName: "Street 22",
					streetNumber: "182B",
					customer: "Customer 143",
					contactLinks: {
						email: "customer143@example.com",
						linkedin: "https://linkedin.com/in/customer143"
					}
				}
			},
			{
				orderId: 4630,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 42584,
					streetName: "Street 37",
					streetNumber: "883C",
					customer: "Customer 144",
					contactLinks: {
						email: "customer144@example.com",
						linkedin: "https://linkedin.com/in/customer144"
					}
				}
			}
		]
	},
	{
		sku: "SKU1042",
		imageUrl: "products/Speaker_Depositphotos_252611752_L.jpg",
		productName: "Speaker Bluetooth",
		category: "Electronics",
		rating: 5,
		grossPrice: 39.99,
		netPrice: 42.59,
    salesTrendData: TREND_DATA[4],
		orders: [
			{
				orderId: 3988,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 90688,
					streetName: "Street 33",
					streetNumber: "717B",
					customer: "Customer 21",
					contactLinks: {
						email: "customer21@example.com",
						linkedin: "https://linkedin.com/in/customer21"
					}
				}
			},
			{
				orderId: 1482,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 34472,
					streetName: "Street 2",
					streetNumber: "415A",
					customer: "Customer 22",
					contactLinks: {
						email: "customer22@example.com",
						linkedin: "https://linkedin.com/in/customer22"
					}
				}
			},
			{
				orderId: 5765,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 62158,
					streetName: "Street 24",
					streetNumber: "419A",
					customer: "Customer 23",
					contactLinks: {
						email: "customer23@example.com",
						linkedin: "https://linkedin.com/in/customer23"
					}
				}
			},
			{
				orderId: 3864,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-12"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 57141,
					streetName: "Street 40",
					streetNumber: "839C",
					customer: "Customer 24",
					contactLinks: {
						email: "customer24@example.com",
						linkedin: "https://linkedin.com/in/customer24"
					}
				}
			},
			{
				orderId: 3396,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-09",
					dateShipped: "2024-12-12",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 95678,
					streetName: "Street 14",
					streetNumber: "297C",
					customer: "Customer 25",
					contactLinks: {
						email: "customer25@example.com",
						linkedin: "https://linkedin.com/in/customer25"
					}
				}
			}
		]
	},
	{
		sku: "SKU1043",
		imageUrl: "products/T-shirt-blue-Depositphotos_163437494_L.jpg",
		productName: "T-Shirt Blue",
		category: "Clothing",
		rating: 3.5,
		grossPrice: 14,
		netPrice: 14.91,
    salesTrendData: TREND_DATA[10],
		orders: [
			{
				orderId: 7443,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 22399,
					streetName: "Street 37",
					streetNumber: "15B",
					customer: "Customer 95",
					contactLinks: {
						email: "customer95@example.com",
						linkedin: "https://linkedin.com/in/customer95"
					}
				}
			},
			{
				orderId: 3912,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 69481,
					streetName: "Street 28",
					streetNumber: "930B",
					customer: "Customer 96",
					contactLinks: {
						email: "customer96@example.com",
						linkedin: "https://linkedin.com/in/customer96"
					}
				}
			},
			{
				orderId: 3934,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-12",
					dateDelivered: "2024-12-19"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 31863,
					streetName: "Street 35",
					streetNumber: "331C",
					customer: "Customer 97",
					contactLinks: {
						email: "customer97@example.com",
						linkedin: "https://linkedin.com/in/customer97"
					}
				}
			},
			{
				orderId: 3976,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 47952,
					streetName: "Street 34",
					streetNumber: "510C",
					customer: "Customer 98",
					contactLinks: {
						email: "customer98@example.com",
						linkedin: "https://linkedin.com/in/customer98"
					}
				}
			},
			{
				orderId: 8593,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 31080,
					streetName: "Street 36",
					streetNumber: "455C",
					customer: "Customer 99",
					contactLinks: {
						email: "customer99@example.com",
						linkedin: "https://linkedin.com/in/customer99"
					}
				}
			},
			{
				orderId: 4771,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 92086,
					streetName: "Street 46",
					streetNumber: "988A",
					customer: "Customer 100",
					contactLinks: {
						email: "customer100@example.com",
						linkedin: "https://linkedin.com/in/customer100"
					}
				}
			},
			{
				orderId: 2767,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-05",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 18884,
					streetName: "Street 18",
					streetNumber: "125C",
					customer: "Customer 101",
					contactLinks: {
						email: "customer101@example.com",
						linkedin: "https://linkedin.com/in/customer101"
					}
				}
			},
			{
				orderId: 2706,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-18"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 58190,
					streetName: "Street 41",
					streetNumber: "747A",
					customer: "Customer 102",
					contactLinks: {
						email: "customer102@example.com",
						linkedin: "https://linkedin.com/in/customer102"
					}
				}
			},
			{
				orderId: 7416,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 48132,
					streetName: "Street 22",
					streetNumber: "167C",
					customer: "Customer 103",
					contactLinks: {
						email: "customer103@example.com",
						linkedin: "https://linkedin.com/in/customer103"
					}
				}
			}
		]
	},
	{
		sku: "SKU1044",
		imageUrl: "products/T-Shirt-gray-Depositphotos_138950992_L.jpg",
		productName: "T-Shirt Gray",
		category: "Clothing",
		rating: 5,
		grossPrice: 13.99,
		netPrice: 14.9,
    salesTrendData: TREND_DATA[13],
		orders: [
			{
				orderId: 4614,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 83148,
					streetName: "Street 38",
					streetNumber: "633A",
					customer: "Customer 197",
					contactLinks: {
						email: "customer197@example.com",
						linkedin: "https://linkedin.com/in/customer197"
					}
				}
			},
			{
				orderId: 8873,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 76342,
					streetName: "Street 3",
					streetNumber: "638A",
					customer: "Customer 198",
					contactLinks: {
						email: "customer198@example.com",
						linkedin: "https://linkedin.com/in/customer198"
					}
				}
			},
			{
				orderId: 1026,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 27770,
					streetName: "Street 47",
					streetNumber: "329B",
					customer: "Customer 199",
					contactLinks: {
						email: "customer199@example.com",
						linkedin: "https://linkedin.com/in/customer199"
					}
				}
			},
			{
				orderId: 7383,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 77913,
					streetName: "Street 33",
					streetNumber: "336C",
					customer: "Customer 200",
					contactLinks: {
						email: "customer200@example.com",
						linkedin: "https://linkedin.com/in/customer200"
					}
				}
			},
			{
				orderId: 6821,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-07",
					dateDelivered: "2024-12-28"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 64938,
					streetName: "Street 17",
					streetNumber: "633A",
					customer: "Customer 201",
					contactLinks: {
						email: "customer201@example.com",
						linkedin: "https://linkedin.com/in/customer201"
					}
				}
			},
			{
				orderId: 8946,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 24765,
					streetName: "Street 12",
					streetNumber: "319C",
					customer: "Customer 187",
					contactLinks: {
						email: "customer187@example.com",
						linkedin: "https://linkedin.com/in/customer187"
					}
				}
			}
		]
	},
	{
		sku: "SKU1045",
		imageUrl: "products/T-Shirt-red-Depositphotos_138951004_L.jpg",
		productName: "T-Shirt Red",
		category: "Clothing",
		rating: 3.5,
		grossPrice: 13.99,
		netPrice: 14.9,
    salesTrendData: TREND_DATA[11],
		orders: [
			{
				orderId: 6652,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "2024-12-14",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 75331,
					streetName: "Street 15",
					streetNumber: "767A",
					customer: "Customer 104",
					contactLinks: {
						email: "customer104@example.com",
						linkedin: "https://linkedin.com/in/customer104"
					}
				}
			},
			{
				orderId: 2521,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 64266,
					streetName: "Street 26",
					streetNumber: "934B",
					customer: "Customer 105",
					contactLinks: {
						email: "customer105@example.com",
						linkedin: "https://linkedin.com/in/customer105"
					}
				}
			},
			{
				orderId: 2535,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: "2024-12-24"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 16147,
					streetName: "Street 33",
					streetNumber: "673A",
					customer: "Customer 106",
					contactLinks: {
						email: "customer106@example.com",
						linkedin: "https://linkedin.com/in/customer106"
					}
				}
			},
			{
				orderId: 9916,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 12465,
					streetName: "Street 6",
					streetNumber: "709A",
					customer: "Customer 107",
					contactLinks: {
						email: "customer107@example.com",
						linkedin: "https://linkedin.com/in/customer107"
					}
				}
			},
			{
				orderId: 8230,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 53012,
					streetName: "Street 50",
					streetNumber: "810C",
					customer: "Customer 108",
					contactLinks: {
						email: "customer108@example.com",
						linkedin: "https://linkedin.com/in/customer108"
					}
				}
			},
			{
				orderId: 2420,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 57310,
					streetName: "Street 44",
					streetNumber: "922B",
					customer: "Customer 109",
					contactLinks: {
						email: "customer109@example.com",
						linkedin: "https://linkedin.com/in/customer109"
					}
				}
			},
			{
				orderId: 1921,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: "2025-01-01"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 52783,
					streetName: "Street 36",
					streetNumber: "231A",
					customer: "Customer 110",
					contactLinks: {
						email: "customer110@example.com",
						linkedin: "https://linkedin.com/in/customer110"
					}
				}
			},
			{
				orderId: 2259,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "2024-12-29",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 90045,
					streetName: "Street 23",
					streetNumber: "461A",
					customer: "Customer 111",
					contactLinks: {
						email: "customer111@example.com",
						linkedin: "https://linkedin.com/in/customer111"
					}
				}
			},
			{
				orderId: 7327,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 62629,
					streetName: "Street 7",
					streetNumber: "740A",
					customer: "Customer 112",
					contactLinks: {
						email: "customer112@example.com",
						linkedin: "https://linkedin.com/in/customer112"
					}
				}
			},
			{
				orderId: 2897,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-10",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 64364,
					streetName: "Street 27",
					streetNumber: "87A",
					customer: "Customer 113",
					contactLinks: {
						email: "customer113@example.com",
						linkedin: "https://linkedin.com/in/customer113"
					}
				}
			},
			{
				orderId: 3625,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-28"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 15440,
					streetName: "Street 19",
					streetNumber: "147B",
					customer: "Customer 114",
					contactLinks: {
						email: "customer114@example.com",
						linkedin: "https://linkedin.com/in/customer114"
					}
				}
			},
			{
				orderId: 4623,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 42093,
					streetName: "Street 4",
					streetNumber: "26A",
					customer: "Customer 115",
					contactLinks: {
						email: "customer115@example.com",
						linkedin: "https://linkedin.com/in/customer115"
					}
				}
			},
			{
				orderId: 8901,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-18",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 30378,
					streetName: "Street 47",
					streetNumber: "674A",
					customer: "Customer 116",
					contactLinks: {
						email: "customer116@example.com",
						linkedin: "https://linkedin.com/in/customer116"
					}
				}
			},
			{
				orderId: 5637,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 59151,
					streetName: "Street 30",
					streetNumber: "924B",
					customer: "Customer 117",
					contactLinks: {
						email: "customer117@example.com",
						linkedin: "https://linkedin.com/in/customer117"
					}
				}
			},
			{
				orderId: 1445,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "2024-12-07",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 95591,
					streetName: "Street 41",
					streetNumber: "541A",
					customer: "Customer 118",
					contactLinks: {
						email: "customer118@example.com",
						linkedin: "https://linkedin.com/in/customer118"
					}
				}
			},
			{
				orderId: 6701,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 55370,
					streetName: "Street 22",
					streetNumber: "916A",
					customer: "Customer 119",
					contactLinks: {
						email: "customer119@example.com",
						linkedin: "https://linkedin.com/in/customer119"
					}
				}
			},
			{
				orderId: 7463,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 66758,
					streetName: "Street 17",
					streetNumber: "599C",
					customer: "Customer 120",
					contactLinks: {
						email: "customer120@example.com",
						linkedin: "https://linkedin.com/in/customer120"
					}
				}
			},
			{
				orderId: 9730,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-03",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 17616,
					streetName: "Street 43",
					streetNumber: "688C",
					customer: "Customer 121",
					contactLinks: {
						email: "customer121@example.com",
						linkedin: "https://linkedin.com/in/customer121"
					}
				}
			}
		]
	},
	{
		sku: "SKU1046",
		imageUrl: "products/vacuum-cleaner-8114145-2.jpg",
		productName: "Vacuum Cleaner Robot",
		category: "Home Appliances",
		rating: 5,
		grossPrice: 249.99,
		netPrice: 266.24,
    salesTrendData: TREND_DATA[7],
		orders: [
			{
				orderId: 8235,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 48193,
					streetName: "Street 28",
					streetNumber: "927C",
					customer: "Customer 47",
					contactLinks: {
						email: "customer47@example.com",
						linkedin: "https://linkedin.com/in/customer47"
					}
				}
			},
			{
				orderId: 1643,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 64564,
					streetName: "Street 1",
					streetNumber: "101A",
					customer: "Customer 48",
					contactLinks: {
						email: "customer48@example.com",
						linkedin: "https://linkedin.com/in/customer48"
					}
				}
			},
			{
				orderId: 1786,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-02",
					dateShipped: "2024-12-12",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Lyon",
					zipCode: 25197,
					streetName: "Street 36",
					streetNumber: "689B",
					customer: "Customer 49",
					contactLinks: {
						email: "customer49@example.com",
						linkedin: "https://linkedin.com/in/customer49"
					}
				}
			},
			{
				orderId: 9206,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-27",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 77659,
					streetName: "Street 48",
					streetNumber: "298C",
					customer: "Customer 50",
					contactLinks: {
						email: "customer50@example.com",
						linkedin: "https://linkedin.com/in/customer50"
					}
				}
			},
			{
				orderId: 9578,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-25",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 43864,
					streetName: "Street 25",
					streetNumber: "886A",
					customer: "Customer 51",
					contactLinks: {
						email: "customer51@example.com",
						linkedin: "https://linkedin.com/in/customer51"
					}
				}
			},
			{
				orderId: 1032,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 44788,
					streetName: "Street 10",
					streetNumber: "286C",
					customer: "Customer 52",
					contactLinks: {
						email: "customer52@example.com",
						linkedin: "https://linkedin.com/in/customer52"
					}
				}
			},
			{
				orderId: 6207,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-19",
					dateShipped: "2024-12-22",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 55589,
					streetName: "Street 16",
					streetNumber: "476C",
					customer: "Customer 53",
					contactLinks: {
						email: "customer53@example.com",
						linkedin: "https://linkedin.com/in/customer53"
					}
				}
			},
			{
				orderId: 3624,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-18",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 13725,
					streetName: "Street 39",
					streetNumber: "596A",
					customer: "Customer 54",
					contactLinks: {
						email: "customer54@example.com",
						linkedin: "https://linkedin.com/in/customer54"
					}
				}
			},
			{
				orderId: 7800,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-18",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 24178,
					streetName: "Street 36",
					streetNumber: "411C",
					customer: "Customer 55",
					contactLinks: {
						email: "customer55@example.com",
						linkedin: "https://linkedin.com/in/customer55"
					}
				}
			},
			{
				orderId: 5870,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 61522,
					streetName: "Street 10",
					streetNumber: "989A",
					customer: "Customer 56",
					contactLinks: {
						email: "customer56@example.com",
						linkedin: "https://linkedin.com/in/customer56"
					}
				}
			},
			{
				orderId: 4421,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 90362,
					streetName: "Street 35",
					streetNumber: "936B",
					customer: "Customer 57",
					contactLinks: {
						email: "customer57@example.com",
						linkedin: "https://linkedin.com/in/customer57"
					}
				}
			},
			{
				orderId: 5625,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 13065,
					streetName: "Street 6",
					streetNumber: "842A",
					customer: "Customer 58",
					contactLinks: {
						email: "customer58@example.com",
						linkedin: "https://linkedin.com/in/customer58"
					}
				}
			},
			{
				orderId: 8127,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-23",
					dateDelivered: "2024-12-25"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 29470,
					streetName: "Street 29",
					streetNumber: "309B",
					customer: "Customer 59",
					contactLinks: {
						email: "customer59@example.com",
						linkedin: "https://linkedin.com/in/customer59"
					}
				}
			},
			{
				orderId: 9174,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 89980,
					streetName: "Street 19",
					streetNumber: "272C",
					customer: "Customer 60",
					contactLinks: {
						email: "customer60@example.com",
						linkedin: "https://linkedin.com/in/customer60"
					}
				}
			},
			{
				orderId: 4493,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-13",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 36154,
					streetName: "Street 41",
					streetNumber: "809C",
					customer: "Customer 61",
					contactLinks: {
						email: "customer61@example.com",
						linkedin: "https://linkedin.com/in/customer61"
					}
				}
			},
			{
				orderId: 5009,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 24916,
					streetName: "Street 18",
					streetNumber: "566C",
					customer: "Customer 62",
					contactLinks: {
						email: "customer62@example.com",
						linkedin: "https://linkedin.com/in/customer62"
					}
				}
			},
			{
				orderId: 1558,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-11",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 90965,
					streetName: "Street 6",
					streetNumber: "964B",
					customer: "Customer 63",
					contactLinks: {
						email: "customer63@example.com",
						linkedin: "https://linkedin.com/in/customer63"
					}
				}
			},
			{
				orderId: 3924,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-27",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 98612,
					streetName: "Street 24",
					streetNumber: "690C",
					customer: "Customer 64",
					contactLinks: {
						email: "customer64@example.com",
						linkedin: "https://linkedin.com/in/customer64"
					}
				}
			},
			{
				orderId: 9712,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 72475,
					streetName: "Street 40",
					streetNumber: "650A",
					customer: "Customer 65",
					contactLinks: {
						email: "customer65@example.com",
						linkedin: "https://linkedin.com/in/customer65"
					}
				}
			},
			{
				orderId: 8561,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-27",
					dateShipped: "2024-12-30",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "New York",
					zipCode: 32513,
					streetName: "Street 25",
					streetNumber: "978B",
					customer: "Customer 66",
					contactLinks: {
						email: "customer66@example.com",
						linkedin: "https://linkedin.com/in/customer66"
					}
				}
			},
			{
				orderId: 7830,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "2024-12-13",
					dateDelivered: "2024-12-16"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 69174,
					streetName: "Street 24",
					streetNumber: "332C",
					customer: "Customer 67",
					contactLinks: {
						email: "customer67@example.com",
						linkedin: "https://linkedin.com/in/customer67"
					}
				}
			},
			{
				orderId: 5213,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-27",
					dateDelivered: "2024-12-29"
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 74616,
					streetName: "Street 43",
					streetNumber: "207A",
					customer: "Customer 68",
					contactLinks: {
						email: "customer68@example.com",
						linkedin: "https://linkedin.com/in/customer68"
					}
				}
			},
			{
				orderId: 8044,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-26",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 24632,
					streetName: "Street 25",
					streetNumber: "955B",
					customer: "Customer 69",
					contactLinks: {
						email: "customer69@example.com",
						linkedin: "https://linkedin.com/in/customer69"
					}
				}
			},
			{
				orderId: 1811,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 15521,
					streetName: "Street 30",
					streetNumber: "317B",
					customer: "Customer 70",
					contactLinks: {
						email: "customer70@example.com",
						linkedin: "https://linkedin.com/in/customer70"
					}
				}
			},
			{
				orderId: 4143,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-04",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 71557,
					streetName: "Street 15",
					streetNumber: "920C",
					customer: "Customer 71",
					contactLinks: {
						email: "customer71@example.com",
						linkedin: "https://linkedin.com/in/customer71"
					}
				}
			},
			{
				orderId: 8851,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 72193,
					streetName: "Street 11",
					streetNumber: "674A",
					customer: "Customer 72",
					contactLinks: {
						email: "customer72@example.com",
						linkedin: "https://linkedin.com/in/customer72"
					}
				}
			},
			{
				orderId: 1463,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-11",
					dateDelivered: "2024-12-13"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 88176,
					streetName: "Street 50",
					streetNumber: "3A",
					customer: "Customer 73",
					contactLinks: {
						email: "customer73@example.com",
						linkedin: "https://linkedin.com/in/customer73"
					}
				}
			},
			{
				orderId: 5092,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-28",
					dateShipped: "2024-12-31",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Melbourne",
					zipCode: 62414,
					streetName: "Street 41",
					streetNumber: "953A",
					customer: "Customer 74",
					contactLinks: {
						email: "customer74@example.com",
						linkedin: "https://linkedin.com/in/customer74"
					}
				}
			}
		]
	},
	{
		sku: "SKU1047",
		imageUrl: "products/video-game-console-2202582_1920.jpg",
		productName: "Video Game Console",
		category: "Gaming",
		rating: 3.5,
		grossPrice: 265.88,
		netPrice: 283.16,
    salesTrendData: TREND_DATA[5],
		orders: [
			{
				orderId: 9976,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Sydney",
					zipCode: 45797,
					streetName: "Street 36",
					streetNumber: "49B",
					customer: "Customer 26",
					contactLinks: {
						email: "customer26@example.com",
						linkedin: "https://linkedin.com/in/customer26"
					}
				}
			},
			{
				orderId: 5062,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 62471,
					streetName: "Street 18",
					streetNumber: "34C",
					customer: "Customer 27",
					contactLinks: {
						email: "customer27@example.com",
						linkedin: "https://linkedin.com/in/customer27"
					}
				}
			},
			{
				orderId: 4640,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 77658,
					streetName: "Street 34",
					streetNumber: "635C",
					customer: "Customer 28",
					contactLinks: {
						email: "customer28@example.com",
						linkedin: "https://linkedin.com/in/customer28"
					}
				}
			},
			{
				orderId: 4810,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 57877,
					streetName: "Street 40",
					streetNumber: "451A",
					customer: "Customer 29",
					contactLinks: {
						email: "customer29@example.com",
						linkedin: "https://linkedin.com/in/customer29"
					}
				}
			},
			{
				orderId: 4241,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 53308,
					streetName: "Street 29",
					streetNumber: "538A",
					customer: "Customer 30",
					contactLinks: {
						email: "customer30@example.com",
						linkedin: "https://linkedin.com/in/customer30"
					}
				}
			},
			{
				orderId: 9070,
				status: OrderStatus.DELIVERED,
				delivery: {
          dateOrdered: "2024-12-10",
					dateShipped: "2024-12-14",
					dateDelivered: "2024-12-20"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 39952,
					streetName: "Street 15",
					streetNumber: "830A",
					customer: "Customer 31",
					contactLinks: {
						email: "customer31@example.com",
						linkedin: "https://linkedin.com/in/customer31"
					}
				}
			},
			{
				orderId: 7654,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 89167,
					streetName: "Street 24",
					streetNumber: "282C",
					customer: "Customer 32",
					contactLinks: {
						email: "customer32@example.com",
						linkedin: "https://linkedin.com/in/customer32"
					}
				}
			},
			{
				orderId: 7647,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-19",
					dateDelivered: "2024-12-21"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 29077,
					streetName: "Street 37",
					streetNumber: "784A",
					customer: "Customer 33",
					contactLinks: {
						email: "customer33@example.com",
						linkedin: "https://linkedin.com/in/customer33"
					}
				}
			},
			{
				orderId: 5360,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-23",
					dateShipped: "2024-12-26",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 57993,
					streetName: "Street 25",
					streetNumber: "445A",
					customer: "Customer 34",
					contactLinks: {
						email: "customer34@example.com",
						linkedin: "https://linkedin.com/in/customer34"
					}
				}
			},
			{
				orderId: 4032,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 25933,
					streetName: "Street 4",
					streetNumber: "888C",
					customer: "Customer 35",
					contactLinks: {
						email: "customer35@example.com",
						linkedin: "https://linkedin.com/in/customer35"
					}
				}
			},
			{
				orderId: 3391,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-20",
					dateShipped: "2024-12-23",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 61583,
					streetName: "Street 24",
					streetNumber: "110B",
					customer: "Customer 36",
					contactLinks: {
						email: "customer36@example.com",
						linkedin: "https://linkedin.com/in/customer36"
					}
				}
			},
			{
				orderId: 6604,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Bangalore",
					zipCode: 60545,
					streetName: "Street 3",
					streetNumber: "882C",
					customer: "Customer 37",
					contactLinks: {
						email: "customer37@example.com",
						linkedin: "https://linkedin.com/in/customer37"
					}
				}
			},
			{
				orderId: 6012,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-13",
					dateShipped: "2024-12-16",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 55210,
					streetName: "Street 32",
					streetNumber: "769B",
					customer: "Customer 38",
					contactLinks: {
						email: "customer38@example.com",
						linkedin: "https://linkedin.com/in/customer38"
					}
				}
			},
			{
				orderId: 4584,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-08",
					dateShipped: "2024-12-11",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 28512,
					streetName: "Street 24",
					streetNumber: "20C",
					customer: "Customer 39",
					contactLinks: {
						email: "customer39@example.com",
						linkedin: "https://linkedin.com/in/customer39"
					}
				}
			}
		]
	},
	{
		sku: "SKU1048",
		imageUrl: "products/Winter-Jacket-Depositphotos_89349846_L.jpg",
		productName: "Winter Jacket",
		category: "Clothing",
		rating: 5,
		grossPrice: 89.99,
		netPrice: 95.84,
    salesTrendData: TREND_DATA[9],
		orders: [
			{
				orderId: 8610,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 27505,
					streetName: "Street 10",
					streetNumber: "563B",
					customer: "Customer 85",
					contactLinks: {
						email: "customer85@example.com",
						linkedin: "https://linkedin.com/in/customer85"
					}
				}
			},
			{
				orderId: 3826,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-12",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Australia",
					countryFlag: CountryFlag.AUSTRALIA,
					city: "Brisbane",
					zipCode: 93375,
					streetName: "Street 17",
					streetNumber: "78C",
					customer: "Customer 86",
					contactLinks: {
						email: "customer86@example.com",
						linkedin: "https://linkedin.com/in/customer86"
					}
				}
			},
			{
				orderId: 2466,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Marseille",
					zipCode: 62807,
					streetName: "Street 28",
					streetNumber: "938C",
					customer: "Customer 87",
					contactLinks: {
						email: "customer87@example.com",
						linkedin: "https://linkedin.com/in/customer87"
					}
				}
			},
			{
				orderId: 8572,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-21",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 73766,
					streetName: "Street 3",
					streetNumber: "909C",
					customer: "Customer 88",
					contactLinks: {
						email: "customer88@example.com",
						linkedin: "https://linkedin.com/in/customer88"
					}
				}
			},
			{
				orderId: 6930,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-16",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-27"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 36571,
					streetName: "Street 5",
					streetNumber: "720C",
					customer: "Customer 89",
					contactLinks: {
						email: "customer89@example.com",
						linkedin: "https://linkedin.com/in/customer89"
					}
				}
			},
			{
				orderId: 3676,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-09",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 62595,
					streetName: "Street 45",
					streetNumber: "798A",
					customer: "Customer 90",
					contactLinks: {
						email: "customer90@example.com",
						linkedin: "https://linkedin.com/in/customer90"
					}
				}
			},
			{
				orderId: 4534,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-17",
					dateShipped: "2024-12-20",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 28594,
					streetName: "Street 12",
					streetNumber: "252A",
					customer: "Customer 91",
					contactLinks: {
						email: "customer91@example.com",
						linkedin: "https://linkedin.com/in/customer91"
					}
				}
			},
			{
				orderId: 3791,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-24",
					dateShipped: "2024-12-27",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 36641,
					streetName: "Street 3",
					streetNumber: "716B",
					customer: "Customer 92",
					contactLinks: {
						email: "customer92@example.com",
						linkedin: "https://linkedin.com/in/customer92"
					}
				}
			},
			{
				orderId: 3334,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-17",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Los Angeles",
					zipCode: 70091,
					streetName: "Street 38",
					streetNumber: "471C",
					customer: "Customer 93",
					contactLinks: {
						email: "customer93@example.com",
						linkedin: "https://linkedin.com/in/customer93"
					}
				}
			},
			{
				orderId: 3153,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-22",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 28881,
					streetName: "Street 31",
					streetNumber: "286B",
					customer: "Customer 94",
					contactLinks: {
						email: "customer94@example.com",
						linkedin: "https://linkedin.com/in/customer94"
					}
				}
			}
		]
	},
	{
		sku: "SKU1049",
		imageUrl: "products/xbox-1200296_1920.jpg",
		productName: "Xbox",
		category: "Gaming",
		rating: 3.5,
		grossPrice: 529.99,
		netPrice: 423.99,
    salesTrendData: TREND_DATA[2],
		orders: [
			{
				orderId: 6636,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Italy",
					countryFlag: CountryFlag.ITALY,
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
					customer: "Customer 1",
					contactLinks: {
						email: "customer1@example.com",
						linkedin: "https://linkedin.com/in/customer1"
					}
				}
			},
			{
				orderId: 1757,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Denmark",
					countryFlag: CountryFlag.DENMARK,
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
					customer: "Customer 2",
					contactLinks: {
						email: "customer2@example.com",
						linkedin: "https://linkedin.com/in/customer2"
					}
				}
			},
			{
				orderId: 9540,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
					customer: "Customer 3",
					contactLinks: {
						email: "customer3@example.com",
						linkedin: "https://linkedin.com/in/customer3"
					}
				}
			},
			{
				orderId: 5072,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Poland",
					countryFlag: CountryFlag.POLAND,
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
					customer: "Customer 4",
					contactLinks: {
						email: "customer4@example.com",
						linkedin: "https://linkedin.com/in/customer4"
					}
				}
			},
			{
				orderId: 6883,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
					customer: "Customer 5",
					contactLinks: {
						email: "customer5@example.com",
						linkedin: "https://linkedin.com/in/customer5"
					}
				}
			},
			{
				orderId: 5508,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
					customer: "Customer 6",
					contactLinks: {
						email: "customer6@example.com",
						linkedin: "https://linkedin.com/in/customer6"
					}
				}
			},
			{
				orderId: 7779,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "Japan",
					countryFlag: CountryFlag.JAPAN,
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
					customer: "Customer 7",
					contactLinks: {
						email: "customer7@example.com",
						linkedin: "https://linkedin.com/in/customer7"
					}
				}
			},
			{
				orderId: 3356,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Canada",
					countryFlag: CountryFlag.CANADA,
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
					customer: "Customer 8",
					contactLinks: {
						email: "customer8@example.com",
						linkedin: "https://linkedin.com/in/customer8"
					}
				}
			},
			{
				orderId: 7814,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: "2024-12-06"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
					customer: "Customer 9",
					contactLinks: {
						email: "customer9@example.com",
						linkedin: "https://linkedin.com/in/customer9"
					}
				}
			},
			{
				orderId: 7978,
				status: OrderStatus.PACKED,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Netherlands",
					countryFlag: CountryFlag.NETHERLANDS,
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
					customer: "Customer 10",
					contactLinks: {
						email: "customer10@example.com",
						linkedin: "https://linkedin.com/in/customer10"
					}
				}
			},
			{
				orderId: 9865,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Belgium",
					countryFlag: CountryFlag.BELGIUM,
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
					customer: "Customer 11",
					contactLinks: {
						email: "customer11@example.com",
						linkedin: "https://linkedin.com/in/customer11"
					}
				}
			},
			{
				orderId: 2538,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-01",
					dateShipped: "2024-12-03",
					dateDelivered: ""
				},
				orderInformation: {
					country: "France",
					countryFlag: CountryFlag.FRANCE,
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
					customer: "Customer 12",
					contactLinks: {
						email: "customer12@example.com",
						linkedin: "https://linkedin.com/in/customer12"
					}
				}
			}
		]
	},
	{
		sku: "SKU1050",
		imageUrl: "products/Xbox_controller_gamepad-6646645_1920-2.jpg",
		productName: "Xbox Controller",
		category: "Gaming",
		rating: 5,
		grossPrice: 189.98,
		netPrice: 202.33,
    salesTrendData: TREND_DATA[0],
		orders: [
			{
				orderId: 3489,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-22",
					dateShipped: "2024-12-25",
					dateDelivered: ""
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 31202,
					streetName: "Street 22",
					streetNumber: "277A",
					customer: "Customer 188",
					contactLinks: {
						email: "customer188@example.com",
						linkedin: "https://linkedin.com/in/customer188"
					}
				}
			},
			{
				orderId: 5969,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-14",
					dateShipped: "2024-12-17",
					dateDelivered: "2024-12-22"
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Berlin",
					zipCode: 96042,
					streetName: "Street 21",
					streetNumber: "917C",
					customer: "Customer 189",
					contactLinks: {
						email: "customer189@example.com",
						linkedin: "https://linkedin.com/in/customer189"
					}
				}
			},
			{
				orderId: 1943,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-15",
					dateShipped: "2024-12-18",
					dateDelivered: ""
				},
				orderInformation: {
					country: "USA",
					countryFlag: CountryFlag.US,
					city: "Chicago",
					zipCode: 47082,
					streetName: "Street 21",
					streetNumber: "89A",
					customer: "Customer 190",
					contactLinks: {
						email: "customer190@example.com",
						linkedin: "https://linkedin.com/in/customer190"
					}
				}
			},
			{
				orderId: 8683,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-04",
					dateShipped: "2024-12-28",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Birmingham",
					zipCode: 19592,
					streetName: "Street 14",
					streetNumber: "270B",
					customer: "Customer 191",
					contactLinks: {
						email: "customer191@example.com",
						linkedin: "https://linkedin.com/in/customer191"
					}
				}
			},
			{
				orderId: 1895,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: "2024-12-26"
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "Manchester",
					zipCode: 40094,
					streetName: "Street 47",
					streetNumber: "204C",
					customer: "Customer 192",
					contactLinks: {
						email: "customer192@example.com",
						linkedin: "https://linkedin.com/in/customer192"
					}
				}
			},
			{
				orderId: 1586,
				status: OrderStatus.IN_TRANSIT,
				delivery: {
					dateOrdered: "2024-12-07",
					dateShipped: "2024-12-13",
					dateDelivered: ""
				},
				orderInformation: {
					country: "UK",
					countryFlag: CountryFlag.UK,
					city: "London",
					zipCode: 11622,
					streetName: "Street 25",
					streetNumber: "301C",
					customer: "Customer 193",
					contactLinks: {
						email: "customer193@example.com",
						linkedin: "https://linkedin.com/in/customer193"
					}
				}
			},
			{
				orderId: 5748,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-10",
					dateShipped: "2024-12-13",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Hamburg",
					zipCode: 98706,
					streetName: "Street 42",
					streetNumber: "789B",
					customer: "Customer 194",
					contactLinks: {
						email: "customer194@example.com",
						linkedin: "https://linkedin.com/in/customer194"
					}
				}
			},
			{
				orderId: 8685,
				status: OrderStatus.CUSTOMS,
				delivery: {
					dateOrdered: "2024-12-21",
					dateShipped: "2024-12-24",
					dateDelivered: ""
				},
				orderInformation: {
					country: "Germany",
					countryFlag: CountryFlag.GERMANY,
					city: "Munich",
					zipCode: 35172,
					streetName: "Street 50",
					streetNumber: "45A",
					customer: "Customer 195",
					contactLinks: {
						email: "customer195@example.com",
						linkedin: "https://linkedin.com/in/customer195"
					}
				}
			},
			{
				orderId: 7449,
				status: OrderStatus.DELIVERED,
				delivery: {
					dateOrdered: "2024-12-06",
					dateShipped: "2024-12-10",
					dateDelivered: "2024-12-23"
				},
				orderInformation: {
					country: "India",
					countryFlag: CountryFlag.INDIA,
					city: "Delhi",
					zipCode: 95695,
					streetName: "Street 4",
					streetNumber: "30A",
					customer: "Customer 196",
					contactLinks: {
						email: "customer196@example.com",
						linkedin: "https://linkedin.com/in/customer196"
					}
				}
			}
		]
	}
];

 InventoryList.forEach((item: TemplateDataModel) => {
  const lastItemIndex = item.salesTrendData.length - 1;
  item.unitsSold = item.salesTrendData[lastItemIndex].unitsSold;
});


