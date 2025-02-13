import { OrderStatus, TemplateDataModel } from "./dataModels";
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
					city: "New York",
					zipCode: 10001,
					streetName: "5th Avenue",
					streetNumber: "501B",
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
					city: "Toronto",
					zipCode: 23456,
					streetName: "Yonge Street",
					streetNumber: "300C",
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
					city: "Paris",
					zipCode: 75001,
					streetName: "Rue de Rivoli",
					streetNumber: "10A",
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
					city: "Berlin",
					zipCode: 10115,
					streetName: "Unter den Linden",
					streetNumber: "25D",
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
					city: "Rome",
					zipCode: 54321,
					streetName: "Via del Corso",
					streetNumber: "100A",
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
					city: "São Paulo",
					zipCode: 65432,
					streetName: "Avenida Paulista",
					streetNumber: "200B",
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
					city: "Mumbai",
					zipCode: 98765,
					streetName: "Marine Drive",
					streetNumber: "150B",
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
					city: "London",
					zipCode: 34567,
					streetName: "Oxford Street",
					streetNumber: "200C",
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
					city: "Tokyo",
					zipCode: 56789,
					streetName: "Shinjuku Street",
					streetNumber: "50D",
				}
			}
		]
	},
	{
		sku: "SKU1002",
		imageUrl: "products/Android-Tablet-11inch-Depositphotos_41379049_L.jpg",
		productName: "Android Tablet 11 inch",
		category: "Electronics",
		rating: 1.5,
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
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
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
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
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
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
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
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
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
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
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
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
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
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
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
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
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
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
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
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
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
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
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
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
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
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
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
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
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
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
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
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
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
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
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
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
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
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
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
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
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
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
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
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
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
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
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
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
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
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
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
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
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
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
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
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
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
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
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
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
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
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
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
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
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
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
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
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
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
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
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
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
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
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
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
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
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
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
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
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
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
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
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
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
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
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
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
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
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
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
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
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
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
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
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
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
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
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
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
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
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
					city: "Bangalore",
					zipCode: 93345,
					streetName: "Street 47",
					streetNumber: "404A",
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
					city: "Hamburg",
					zipCode: 12710,
					streetName: "Street 47",
					streetNumber: "33B",
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
					city: "Bangalore",
					zipCode: 55326,
					streetName: "Street 15",
					streetNumber: "398C",
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
					city: "Bangalore",
					zipCode: 67187,
					streetName: "Street 40",
					streetNumber: "68A",
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
					city: "Hamburg",
					zipCode: 36934,
					streetName: "Street 32",
					streetNumber: "462C",
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
					city: "Brisbane",
					zipCode: 69061,
					streetName: "Street 42",
					streetNumber: "979A",
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
					city: "Mumbai",
					zipCode: 40350,
					streetName: "Street 38",
					streetNumber: "343B",
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
					city: "Sydney",
					zipCode: 27471,
					streetName: "Street 50",
					streetNumber: "895B",
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
					city: "Paris",
					zipCode: 13811,
					streetName: "Street 29",
					streetNumber: "816A",
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
					city: "Birmingham",
					zipCode: 13264,
					streetName: "Street 5",
					streetNumber: "490B",
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
					city: "Munich",
					zipCode: 30240,
					streetName: "Street 18",
					streetNumber: "606C",
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
					city: "Manchester",
					zipCode: 23659,
					streetName: "Street 31",
					streetNumber: "422C",
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
					city: "Berlin",
					zipCode: 90690,
					streetName: "Street 28",
					streetNumber: "233A",
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
					city: "Hamburg",
					zipCode: 82167,
					streetName: "Street 37",
					streetNumber: "661B",
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
					city: "Brisbane",
					zipCode: 10198,
					streetName: "Street 41",
					streetNumber: "888C",
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
					city: "Lyon",
					zipCode: 64248,
					streetName: "Street 30",
					streetNumber: "963C",
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
					city: "Marseille",
					zipCode: 96708,
					streetName: "Street 46",
					streetNumber: "923B",
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
					city: "Brisbane",
					zipCode: 13581,
					streetName: "Street 2",
					streetNumber: "345A",
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
					city: "Manchester",
					zipCode: 28725,
					streetName: "Street 5",
					streetNumber: "432A",
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
					city: "Paris",
					zipCode: 84535,
					streetName: "Street 43",
					streetNumber: "741A",
				}
			}
		]
	},
	{
		sku: "SKU1005",
		imageUrl: "products/Barcode-reader-Depositphotos_9927983_L.jpg",
		productName: "Barcode Reader",
		category: "Electronics",
		rating: 2,
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
					city: "New York",
					zipCode: 90688,
					streetName: "Street 33",
					streetNumber: "717B",
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
					city: "Munich",
					zipCode: 34472,
					streetName: "Street 2",
					streetNumber: "415A",
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
					city: "Paris",
					zipCode: 62158,
					streetName: "Street 24",
					streetNumber: "419A",
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
					city: "Lyon",
					zipCode: 57141,
					streetName: "Street 40",
					streetNumber: "839C",
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
					city: "Paris",
					zipCode: 95678,
					streetName: "Street 14",
					streetNumber: "297C",
				}
			}
		]
	},
	{
		sku: "SKU1006",
		imageUrl: "products/Barcode-readers-Depositphotos_10803475_L.jpg",
		productName: "Barcode Readers Pack",
		category: "Electronics",
		rating: 4.44,
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
					city: "Sydney",
					zipCode: 45797,
					streetName: "Street 36",
					streetNumber: "49B",
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
					city: "Manchester",
					zipCode: 62471,
					streetName: "Street 18",
					streetNumber: "34C",
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
					city: "Paris",
					zipCode: 77658,
					streetName: "Street 34",
					streetNumber: "635C",
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
					city: "London",
					zipCode: 57877,
					streetName: "Street 40",
					streetNumber: "451A",
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
					city: "Bangalore",
					zipCode: 53308,
					streetName: "Street 29",
					streetNumber: "538A",
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
					city: "Manchester",
					zipCode: 39952,
					streetName: "Street 15",
					streetNumber: "830A",
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
					city: "London",
					zipCode: 89167,
					streetName: "Street 24",
					streetNumber: "282C",
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
					city: "Bangalore",
					zipCode: 29077,
					streetName: "Street 37",
					streetNumber: "784A",
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
					city: "Birmingham",
					zipCode: 57993,
					streetName: "Street 25",
					streetNumber: "445A",
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
					city: "Mumbai",
					zipCode: 25933,
					streetName: "Street 4",
					streetNumber: "888C",
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
					city: "Los Angeles",
					zipCode: 61583,
					streetName: "Street 24",
					streetNumber: "110B",
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
					city: "Bangalore",
					zipCode: 60545,
					streetName: "Street 3",
					streetNumber: "882C",
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
					city: "Delhi",
					zipCode: 55210,
					streetName: "Street 32",
					streetNumber: "769B",
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
					city: "Brisbane",
					zipCode: 28512,
					streetName: "Street 24",
					streetNumber: "20C",
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
					city: "Mumbai",
					zipCode: 31660,
					streetName: "Street 31",
					streetNumber: "847A",
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
					city: "Los Angeles",
					zipCode: 80912,
					streetName: "Street 36",
					streetNumber: "187B",
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
					city: "Sydney",
					zipCode: 64528,
					streetName: "Street 30",
					streetNumber: "733C",
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
					city: "Melbourne",
					zipCode: 56481,
					streetName: "Street 22",
					streetNumber: "718A",
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
					city: "Marseille",
					zipCode: 65465,
					streetName: "Street 39",
					streetNumber: "566C",
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
					city: "Paris",
					zipCode: 25704,
					streetName: "Street 23",
					streetNumber: "283C",
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
					city: "Munich",
					zipCode: 50026,
					streetName: "Street 11",
					streetNumber: "145A",
				}
			}
		]
	},
	{
		sku: "SKU1008",
		imageUrl: "products/Canon_Depositphotos_1793394_L.jpg",
		productName: "Canon Photo Camera",
		category: "Photography",
		rating: 2.95,
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
					city: "Bangalore",
					zipCode: 48193,
					streetName: "Street 28",
					streetNumber: "927C",
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
					city: "Manchester",
					zipCode: 64564,
					streetName: "Street 1",
					streetNumber: "101A",
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
					city: "Lyon",
					zipCode: 25197,
					streetName: "Street 36",
					streetNumber: "689B",
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
					city: "Hamburg",
					zipCode: 77659,
					streetName: "Street 48",
					streetNumber: "298C",
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
					city: "Mumbai",
					zipCode: 43864,
					streetName: "Street 25",
					streetNumber: "886A",
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
					city: "Birmingham",
					zipCode: 44788,
					streetName: "Street 10",
					streetNumber: "286C",
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
					city: "Brisbane",
					zipCode: 55589,
					streetName: "Street 16",
					streetNumber: "476C",
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
					city: "Marseille",
					zipCode: 13725,
					streetName: "Street 39",
					streetNumber: "596A",
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
					city: "New York",
					zipCode: 24178,
					streetName: "Street 36",
					streetNumber: "411C",
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
					city: "Birmingham",
					zipCode: 61522,
					streetName: "Street 10",
					streetNumber: "989A",
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
					city: "Sydney",
					zipCode: 90362,
					streetName: "Street 35",
					streetNumber: "936B",
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
					city: "Manchester",
					zipCode: 13065,
					streetName: "Street 6",
					streetNumber: "842A",
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
					city: "Manchester",
					zipCode: 29470,
					streetName: "Street 29",
					streetNumber: "309B",
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
					city: "Hamburg",
					zipCode: 89980,
					streetName: "Street 19",
					streetNumber: "272C",
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
					city: "Marseille",
					zipCode: 36154,
					streetName: "Street 41",
					streetNumber: "809C",
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
					city: "Manchester",
					zipCode: 24916,
					streetName: "Street 18",
					streetNumber: "566C",
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
					city: "Brisbane",
					zipCode: 90965,
					streetName: "Street 6",
					streetNumber: "964B",
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
					city: "Berlin",
					zipCode: 98612,
					streetName: "Street 24",
					streetNumber: "690C",
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
					city: "Los Angeles",
					zipCode: 72475,
					streetName: "Street 40",
					streetNumber: "650A",
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
					city: "New York",
					zipCode: 32513,
					streetName: "Street 25",
					streetNumber: "978B",
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
					city: "Birmingham",
					zipCode: 69174,
					streetName: "Street 24",
					streetNumber: "332C",
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
					city: "Sydney",
					zipCode: 74616,
					streetName: "Street 43",
					streetNumber: "207A",
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
					city: "Mumbai",
					zipCode: 24632,
					streetName: "Street 25",
					streetNumber: "955B",
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
					city: "Los Angeles",
					zipCode: 15521,
					streetName: "Street 30",
					streetNumber: "317B",
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
					city: "Marseille",
					zipCode: 71557,
					streetName: "Street 15",
					streetNumber: "920C",
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
					city: "Los Angeles",
					zipCode: 72193,
					streetName: "Street 11",
					streetNumber: "674A",
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
					city: "Delhi",
					zipCode: 88176,
					streetName: "Street 50",
					streetNumber: "3A",
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
					city: "Melbourne",
					zipCode: 62414,
					streetName: "Street 41",
					streetNumber: "953A",
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
					city: "London",
					zipCode: 21662,
					streetName: "Street 47",
					streetNumber: "44B",
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
					city: "Manchester",
					zipCode: 90760,
					streetName: "Street 22",
					streetNumber: "673A",
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
					city: "Hamburg",
					zipCode: 61832,
					streetName: "Street 25",
					streetNumber: "567A",
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
					city: "Marseille",
					zipCode: 24503,
					streetName: "Street 45",
					streetNumber: "119A",
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
					city: "Paris",
					zipCode: 68399,
					streetName: "Street 2",
					streetNumber: "633C",
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
					city: "Manchester",
					zipCode: 14988,
					streetName: "Street 37",
					streetNumber: "484A",
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
					city: "Sydney",
					zipCode: 77388,
					streetName: "Street 43",
					streetNumber: "136C",
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
					city: "Bangalore",
					zipCode: 73213,
					streetName: "Street 49",
					streetNumber: "794C",
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
					city: "Sydney",
					zipCode: 57275,
					streetName: "Street 24",
					streetNumber: "234A",
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
					city: "Bangalore",
					zipCode: 79583,
					streetName: "Street 18",
					streetNumber: "755A",
				}
			}
		]
	},
	{
		sku: "SKU1010",
		imageUrl: "products/Crivit_jacket-2899728_1920-2.jpg",
		productName: "Crivit Jacket",
		category: "Clothing",
		rating: 2,
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
					city: "Berlin",
					zipCode: 27505,
					streetName: "Street 10",
					streetNumber: "563B",
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
					city: "Brisbane",
					zipCode: 93375,
					streetName: "Street 17",
					streetNumber: "78C",
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
					city: "Marseille",
					zipCode: 62807,
					streetName: "Street 28",
					streetNumber: "938C",
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
					city: "Mumbai",
					zipCode: 73766,
					streetName: "Street 3",
					streetNumber: "909C",
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
					city: "Hamburg",
					zipCode: 36571,
					streetName: "Street 5",
					streetNumber: "720C",
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
					city: "Chicago",
					zipCode: 62595,
					streetName: "Street 45",
					streetNumber: "798A",
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
					city: "Hamburg",
					zipCode: 28594,
					streetName: "Street 12",
					streetNumber: "252A",
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
					city: "Hamburg",
					zipCode: 36641,
					streetName: "Street 3",
					streetNumber: "716B",
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
					city: "Los Angeles",
					zipCode: 70091,
					streetName: "Street 38",
					streetNumber: "471C",
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
					city: "London",
					zipCode: 28881,
					streetName: "Street 31",
					streetNumber: "286B",
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
					city: "Chicago",
					zipCode: 22399,
					streetName: "Street 37",
					streetNumber: "15B",
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
					city: "Manchester",
					zipCode: 69481,
					streetName: "Street 28",
					streetNumber: "930B",
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
					city: "Delhi",
					zipCode: 31863,
					streetName: "Street 35",
					streetNumber: "331C",
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
					city: "Birmingham",
					zipCode: 47952,
					streetName: "Street 34",
					streetNumber: "510C",
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
					city: "Melbourne",
					zipCode: 31080,
					streetName: "Street 36",
					streetNumber: "455C",
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
					city: "Chicago",
					zipCode: 92086,
					streetName: "Street 46",
					streetNumber: "988A",
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
					city: "Los Angeles",
					zipCode: 18884,
					streetName: "Street 18",
					streetNumber: "125C",
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
					city: "Hamburg",
					zipCode: 58190,
					streetName: "Street 41",
					streetNumber: "747A",
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
					city: "Hamburg",
					zipCode: 48132,
					streetName: "Street 22",
					streetNumber: "167C",
				}
			}
		]
	},
	{
		sku: "SKU1012",
		imageUrl: "products/dyson_hairdryer_Depositphotos_653422044_L.jpg",
		productName: "Dyson Hairdryer Purple",
		category: "Home Appliances",
		rating: 1.95,
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
					city: "Sydney",
					zipCode: 75331,
					streetName: "Street 15",
					streetNumber: "767A",
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
					city: "Delhi",
					zipCode: 64266,
					streetName: "Street 26",
					streetNumber: "934B",
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
					city: "Hamburg",
					zipCode: 16147,
					streetName: "Street 33",
					streetNumber: "673A",
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
					city: "Bangalore",
					zipCode: 12465,
					streetName: "Street 6",
					streetNumber: "709A",
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
					city: "Brisbane",
					zipCode: 53012,
					streetName: "Street 50",
					streetNumber: "810C",
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
					city: "Berlin",
					zipCode: 57310,
					streetName: "Street 44",
					streetNumber: "922B",
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
					city: "Berlin",
					zipCode: 52783,
					streetName: "Street 36",
					streetNumber: "231A",
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
					city: "New York",
					zipCode: 90045,
					streetName: "Street 23",
					streetNumber: "461A",
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
					city: "Bangalore",
					zipCode: 62629,
					streetName: "Street 7",
					streetNumber: "740A",
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
					city: "Marseille",
					zipCode: 64364,
					streetName: "Street 27",
					streetNumber: "87A",
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
					city: "Berlin",
					zipCode: 15440,
					streetName: "Street 19",
					streetNumber: "147B",
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
					city: "Los Angeles",
					zipCode: 42093,
					streetName: "Street 4",
					streetNumber: "26A",
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
					city: "Chicago",
					zipCode: 30378,
					streetName: "Street 47",
					streetNumber: "674A",
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
					city: "Chicago",
					zipCode: 59151,
					streetName: "Street 30",
					streetNumber: "924B",
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
					city: "Birmingham",
					zipCode: 95591,
					streetName: "Street 41",
					streetNumber: "541A",
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
					city: "Delhi",
					zipCode: 55370,
					streetName: "Street 22",
					streetNumber: "916A",
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
					city: "Birmingham",
					zipCode: 66758,
					streetName: "Street 17",
					streetNumber: "599C",
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
					city: "Munich",
					zipCode: 17616,
					streetName: "Street 43",
					streetNumber: "688C",
				}
			}
		]
	},
	{
		sku: "SKU1013",
		imageUrl: "products/dyson_hairdryer_Depositphotos_751409932_L.jpg",
		productName: "Dyson Hairdryer Gold",
		category: "Home Appliances",
		rating: 4.7,
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
					city: "Los Angeles",
					zipCode: 91387,
					streetName: "Street 28",
					streetNumber: "582B",
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
					city: "Lyon",
					zipCode: 66151,
					streetName: "Street 8",
					streetNumber: "840A",
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
					city: "Marseille",
					zipCode: 96467,
					streetName: "Street 6",
					streetNumber: "175A",
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
					city: "Delhi",
					zipCode: 78201,
					streetName: "Street 6",
					streetNumber: "90B",
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
					city: "Lyon",
					zipCode: 80238,
					streetName: "Street 4",
					streetNumber: "132B",
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
					city: "Berlin",
					zipCode: 26324,
					streetName: "Street 33",
					streetNumber: "199B",
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
					city: "Hamburg",
					zipCode: 11926,
					streetName: "Street 39",
					streetNumber: "681C",
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
					city: "Manchester",
					zipCode: 32182,
					streetName: "Street 17",
					streetNumber: "759C",
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
					city: "Sydney",
					zipCode: 60858,
					streetName: "Street 36",
					streetNumber: "897B",
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
					city: "Melbourne",
					zipCode: 70966,
					streetName: "Street 4",
					streetNumber: "42B",
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
					city: "Hamburg",
					zipCode: 30896,
					streetName: "Street 50",
					streetNumber: "565A",
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
					city: "Delhi",
					zipCode: 19822,
					streetName: "Street 32",
					streetNumber: "147A",
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
					city: "Delhi",
					zipCode: 52866,
					streetName: "Street 39",
					streetNumber: "19C",
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
					city: "Marseille",
					zipCode: 48901,
					streetName: "Street 22",
					streetNumber: "979C",
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
					city: "Berlin",
					zipCode: 29242,
					streetName: "Street 13",
					streetNumber: "208B",
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
					city: "Manchester",
					zipCode: 21401,
					streetName: "Street 20",
					streetNumber: "360C",
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
					city: "London",
					zipCode: 67334,
					streetName: "Street 40",
					streetNumber: "250A",
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
					city: "London",
					zipCode: 61914,
					streetName: "Street 33",
					streetNumber: "374B",
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
					city: "Melbourne",
					zipCode: 53088,
					streetName: "Street 7",
					streetNumber: "726B",
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
					city: "Melbourne",
					zipCode: 68754,
					streetName: "Street 49",
					streetNumber: "852B",
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
					city: "Hamburg",
					zipCode: 62569,
					streetName: "Street 1",
					streetNumber: "557B",
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
					city: "Paris",
					zipCode: 80236,
					streetName: "Street 22",
					streetNumber: "182B",
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
					city: "Melbourne",
					zipCode: 42584,
					streetName: "Street 37",
					streetNumber: "883C",
				}
			}
		]
	},
	{
		sku: "SKU1014",
		imageUrl: "products/dyson_vacuum_appliance-2255_1920.jpg",
		productName: "Dyson Vacuum Cleaner",
		category: "Home Appliances",
		rating: 4.5,
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
					city: "Mumbai",
					zipCode: 42881,
					streetName: "Street 38",
					streetNumber: "366B",
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
					city: "Birmingham",
					zipCode: 40163,
					streetName: "Street 4",
					streetNumber: "800A",
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
					city: "Bangalore",
					zipCode: 95499,
					streetName: "Street 36",
					streetNumber: "576A",
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
					city: "Sydney",
					zipCode: 10032,
					streetName: "Street 47",
					streetNumber: "848C",
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
					city: "New York",
					zipCode: 97615,
					streetName: "Street 18",
					streetNumber: "232B",
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
					city: "Birmingham",
					zipCode: 22032,
					streetName: "Street 30",
					streetNumber: "346B",
				}
			}
		]
	},
	{
		sku: "SKU1015",
		imageUrl: "products/earphone-2640990_1920.jpg",
		productName: "Earphones Black",
		category: "Accessories",
		rating: 4.1,
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
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
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
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
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
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
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
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
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
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
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
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
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
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
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
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
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
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
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
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
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
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
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
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
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
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
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
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
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
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
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
					city: "Los Angeles",
					zipCode: 88056,
					streetName: "Street 31",
					streetNumber: "863C",
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
					city: "Delhi",
					zipCode: 32539,
					streetName: "Street 16",
					streetNumber: "453A",
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
					city: "Manchester",
					zipCode: 51789,
					streetName: "Street 21",
					streetNumber: "912C",
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
					city: "Los Angeles",
					zipCode: 75943,
					streetName: "Street 10",
					streetNumber: "21A",
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
					city: "Bangalore",
					zipCode: 91277,
					streetName: "Street 40",
					streetNumber: "671A",
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
					city: "Bangalore",
					zipCode: 58801,
					streetName: "Street 48",
					streetNumber: "855A",
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
					city: "Chicago",
					zipCode: 59822,
					streetName: "Street 5",
					streetNumber: "212A",
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
					city: "Munich",
					zipCode: 95627,
					streetName: "Street 47",
					streetNumber: "438A",
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
					city: "Birmingham",
					zipCode: 67887,
					streetName: "Street 16",
					streetNumber: "341C",
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
					city: "Berlin",
					zipCode: 99025,
					streetName: "Street 20",
					streetNumber: "413A",
				}
			}
		]
	},
	{
		sku: "SKU1017",
		imageUrl: "products/Gaggia-coffee-machine-Depositphotos_171399082_L.jpg",
		productName: "Gaggia Coffee Machine",
		category: "Home Appliances",
		rating: 4,
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
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
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
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
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
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
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
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
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
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
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
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
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
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
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
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
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
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
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
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
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
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
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
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
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
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
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
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
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
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
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
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
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
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
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
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
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
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
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
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
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
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
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
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
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
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
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
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
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
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
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
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
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
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
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
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
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
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
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
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
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
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
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
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
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
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
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
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
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
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
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
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
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
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
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
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
				}
			}
		]
	},
	{
		sku: "SKU1018",
		imageUrl: "products/HP_laptop_black-5141242_1920.jpg",
		productName: "HP Laptop 15 inch",
		category: "Electronics",
		rating: 3.95,
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
					city: "Sydney",
					zipCode: 91450,
					streetName: "Street 7",
					streetNumber: "200C",
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
					city: "New York",
					zipCode: 97901,
					streetName: "Street 18",
					streetNumber: "78A",
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
					city: "Delhi",
					zipCode: 82888,
					streetName: "Street 44",
					streetNumber: "340A",
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
					city: "Munich",
					zipCode: 86191,
					streetName: "Street 46",
					streetNumber: "2A",
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
					city: "Lyon",
					zipCode: 34426,
					streetName: "Street 20",
					streetNumber: "482B",
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
					city: "Chicago",
					zipCode: 99385,
					streetName: "Street 36",
					streetNumber: "279C",
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
					city: "Los Angeles",
					zipCode: 79567,
					streetName: "Street 23",
					streetNumber: "677A",
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
					city: "Sydney",
					zipCode: 90686,
					streetName: "Street 15",
					streetNumber: "251C",
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
					city: "Sydney",
					zipCode: 85309,
					streetName: "Street 47",
					streetNumber: "63C",
				}
			}
		]
	},
	{
		sku: "SKU1019",
		imageUrl: "products/iPad-Pro-Depositphotos_241726176_L.jpg",
		productName: "iPad Pro 12.9 inch",
		category: "Electronics",
		rating: 3.2,
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
					city: "Bangalore",
					zipCode: 48193,
					streetName: "Street 28",
					streetNumber: "927C",
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
					city: "Manchester",
					zipCode: 64564,
					streetName: "Street 1",
					streetNumber: "101A",
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
					city: "Lyon",
					zipCode: 25197,
					streetName: "Street 36",
					streetNumber: "689B",
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
					city: "Hamburg",
					zipCode: 77659,
					streetName: "Street 48",
					streetNumber: "298C",
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
					city: "Mumbai",
					zipCode: 43864,
					streetName: "Street 25",
					streetNumber: "886A",
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
					city: "Birmingham",
					zipCode: 44788,
					streetName: "Street 10",
					streetNumber: "286C",
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
					city: "Brisbane",
					zipCode: 55589,
					streetName: "Street 16",
					streetNumber: "476C",
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
					city: "Marseille",
					zipCode: 13725,
					streetName: "Street 39",
					streetNumber: "596A",
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
					city: "New York",
					zipCode: 24178,
					streetName: "Street 36",
					streetNumber: "411C",
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
					city: "Birmingham",
					zipCode: 61522,
					streetName: "Street 10",
					streetNumber: "989A",
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
					city: "Sydney",
					zipCode: 90362,
					streetName: "Street 35",
					streetNumber: "936B",
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
					city: "Manchester",
					zipCode: 13065,
					streetName: "Street 6",
					streetNumber: "842A",
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
					city: "Manchester",
					zipCode: 29470,
					streetName: "Street 29",
					streetNumber: "309B",
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
					city: "Hamburg",
					zipCode: 89980,
					streetName: "Street 19",
					streetNumber: "272C",
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
					city: "Marseille",
					zipCode: 36154,
					streetName: "Street 41",
					streetNumber: "809C",
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
					city: "Manchester",
					zipCode: 24916,
					streetName: "Street 18",
					streetNumber: "566C",
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
					city: "Brisbane",
					zipCode: 90965,
					streetName: "Street 6",
					streetNumber: "964B",
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
					city: "Berlin",
					zipCode: 98612,
					streetName: "Street 24",
					streetNumber: "690C",
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
					city: "Los Angeles",
					zipCode: 72475,
					streetName: "Street 40",
					streetNumber: "650A",
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
					city: "New York",
					zipCode: 32513,
					streetName: "Street 25",
					streetNumber: "978B",
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
					city: "Birmingham",
					zipCode: 69174,
					streetName: "Street 24",
					streetNumber: "332C",
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
					city: "Sydney",
					zipCode: 74616,
					streetName: "Street 43",
					streetNumber: "207A",
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
					city: "Mumbai",
					zipCode: 24632,
					streetName: "Street 25",
					streetNumber: "955B",
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
					city: "Los Angeles",
					zipCode: 15521,
					streetName: "Street 30",
					streetNumber: "317B",
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
					city: "Marseille",
					zipCode: 71557,
					streetName: "Street 15",
					streetNumber: "920C",
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
					city: "Los Angeles",
					zipCode: 72193,
					streetName: "Street 11",
					streetNumber: "674A",
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
					city: "Delhi",
					zipCode: 88176,
					streetName: "Street 50",
					streetNumber: "3A",
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
					city: "Melbourne",
					zipCode: 62414,
					streetName: "Street 41",
					streetNumber: "953A",
				}
			}
		]
	},
	{
		sku: "SKU1020",
		imageUrl: "products/iphone-X-2854322_1920.jpg",
		productName: "iPhone X 256 GB",
		category: "Electronics",
		rating: 3,
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
					city: "Bangalore",
					zipCode: 93345,
					streetName: "Street 47",
					streetNumber: "404A",
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
					city: "Hamburg",
					zipCode: 12710,
					streetName: "Street 47",
					streetNumber: "33B",
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
					city: "Bangalore",
					zipCode: 55326,
					streetName: "Street 15",
					streetNumber: "398C",
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
					city: "Bangalore",
					zipCode: 67187,
					streetName: "Street 40",
					streetNumber: "68A",
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
					city: "Hamburg",
					zipCode: 36934,
					streetName: "Street 32",
					streetNumber: "462C",
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
					city: "Brisbane",
					zipCode: 69061,
					streetName: "Street 42",
					streetNumber: "979A",
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
					city: "Mumbai",
					zipCode: 40350,
					streetName: "Street 38",
					streetNumber: "343B",
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
					city: "Sydney",
					zipCode: 27471,
					streetName: "Street 50",
					streetNumber: "895B",
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
					city: "Paris",
					zipCode: 13811,
					streetName: "Street 29",
					streetNumber: "816A",
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
					city: "Birmingham",
					zipCode: 13264,
					streetName: "Street 5",
					streetNumber: "490B",
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
					city: "Munich",
					zipCode: 30240,
					streetName: "Street 18",
					streetNumber: "606C",
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
					city: "Manchester",
					zipCode: 23659,
					streetName: "Street 31",
					streetNumber: "422C",
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
					city: "Berlin",
					zipCode: 90690,
					streetName: "Street 28",
					streetNumber: "233A",
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
					city: "Hamburg",
					zipCode: 82167,
					streetName: "Street 37",
					streetNumber: "661B",
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
					city: "Brisbane",
					zipCode: 10198,
					streetName: "Street 41",
					streetNumber: "888C",
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
					city: "Lyon",
					zipCode: 64248,
					streetName: "Street 30",
					streetNumber: "963C",
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
					city: "Marseille",
					zipCode: 96708,
					streetName: "Street 46",
					streetNumber: "923B",
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
					city: "Brisbane",
					zipCode: 13581,
					streetName: "Street 2",
					streetNumber: "345A",
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
					city: "Manchester",
					zipCode: 28725,
					streetName: "Street 5",
					streetNumber: "432A",
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
					city: "Paris",
					zipCode: 84535,
					streetName: "Street 43",
					streetNumber: "741A",
				}
			}
		]
	},
	{
		sku: "SKU1021",
		imageUrl: "products/JBL_speaker-5800162_1920-2.jpg",
		productName: "JBL Speaker",
		category: "Electronics",
		rating: 1.88,
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
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
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
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
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
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
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
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
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
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
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
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
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
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
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
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
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
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
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
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
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
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
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
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
				}
			}
		]
	},
	{
		sku: "SKU1022",
		imageUrl: "products/Kitchen-Multicooker-Depositphotos_35751187_L.jpg",
		productName: "Kitchen Multicooker",
		category: "Home Appliances",
		rating: 4.89,
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
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
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
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
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
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
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
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
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
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
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
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
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
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
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
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
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
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
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
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
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
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
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
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
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
					city: "New York",
					zipCode: 10001,
					streetName: "5th Avenue",
					streetNumber: "501B",
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
					city: "Toronto",
					zipCode: 23456,
					streetName: "Yonge Street",
					streetNumber: "300C",
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
					city: "Paris",
					zipCode: 75001,
					streetName: "Rue de Rivoli",
					streetNumber: "10A",
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
					city: "Berlin",
					zipCode: 10115,
					streetName: "Unter den Linden",
					streetNumber: "25D",
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
					city: "Rome",
					zipCode: 54321,
					streetName: "Via del Corso",
					streetNumber: "100A",
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
					city: "São Paulo",
					zipCode: 65432,
					streetName: "Avenida Paulista",
					streetNumber: "200B",
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
					city: "Mumbai",
					zipCode: 98765,
					streetName: "Marine Drive",
					streetNumber: "150B",
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
					city: "London",
					zipCode: 34567,
					streetName: "Oxford Street",
					streetNumber: "200C",
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
					city: "Tokyo",
					zipCode: 56789,
					streetName: "Shinjuku Street",
					streetNumber: "50D",
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
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
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
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
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
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
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
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
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
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
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
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
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
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
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
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
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
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
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
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
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
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
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
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
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
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
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
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
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
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
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
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
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
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
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
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
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
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
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
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
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
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
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
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
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
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
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
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
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
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
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
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
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
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
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
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
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
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
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
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
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
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
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
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
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
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
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
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
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
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
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
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
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
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
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
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
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
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
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
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
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
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
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
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
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
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
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
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
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
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
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
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
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
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
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
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
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
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
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
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
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
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
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
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
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
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
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
					city: "Sydney",
					zipCode: 91450,
					streetName: "Street 7",
					streetNumber: "200C",
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
					city: "New York",
					zipCode: 97901,
					streetName: "Street 18",
					streetNumber: "78A",
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
					city: "Delhi",
					zipCode: 82888,
					streetName: "Street 44",
					streetNumber: "340A",
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
					city: "Munich",
					zipCode: 86191,
					streetName: "Street 46",
					streetNumber: "2A",
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
					city: "Lyon",
					zipCode: 34426,
					streetName: "Street 20",
					streetNumber: "482B",
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
					city: "Chicago",
					zipCode: 99385,
					streetName: "Street 36",
					streetNumber: "279C",
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
					city: "Los Angeles",
					zipCode: 79567,
					streetName: "Street 23",
					streetNumber: "677A",
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
					city: "Sydney",
					zipCode: 90686,
					streetName: "Street 15",
					streetNumber: "251C",
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
					city: "Sydney",
					zipCode: 85309,
					streetName: "Street 47",
					streetNumber: "63C",
				}
			}
		]
	},
	{
		sku: "SKU1027",
		imageUrl: "products/Merrel-shoes-584850_1920.jpg",
		productName: "Merrel Shoes",
		category: "Footwear",
		rating: 2.5,
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
					city: "New York",
					zipCode: 90688,
					streetName: "Street 33",
					streetNumber: "717B",
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
					city: "Munich",
					zipCode: 34472,
					streetName: "Street 2",
					streetNumber: "415A",
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
					city: "Paris",
					zipCode: 62158,
					streetName: "Street 24",
					streetNumber: "419A",
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
					city: "Lyon",
					zipCode: 57141,
					streetName: "Street 40",
					streetNumber: "839C",
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
					city: "Paris",
					zipCode: 95678,
					streetName: "Street 14",
					streetNumber: "297C",
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
					city: "New York",
					zipCode: 10001,
					streetName: "5th Avenue",
					streetNumber: "501B",
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
					city: "Toronto",
					zipCode: 23456,
					streetName: "Yonge Street",
					streetNumber: "300C",
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
					city: "Paris",
					zipCode: 75001,
					streetName: "Rue de Rivoli",
					streetNumber: "10A",
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
					city: "Berlin",
					zipCode: 10115,
					streetName: "Unter den Linden",
					streetNumber: "25D",
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
					city: "Rome",
					zipCode: 54321,
					streetName: "Via del Corso",
					streetNumber: "100A",
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
					city: "São Paulo",
					zipCode: 65432,
					streetName: "Avenida Paulista",
					streetNumber: "200B",
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
					city: "Mumbai",
					zipCode: 98765,
					streetName: "Marine Drive",
					streetNumber: "150B",
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
					city: "London",
					zipCode: 34567,
					streetName: "Oxford Street",
					streetNumber: "200C",
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
					city: "Tokyo",
					zipCode: 56789,
					streetName: "Shinjuku Street",
					streetNumber: "50D",
				}
			}
		]
	},
	{
		sku: "SKU1029",
		imageUrl: "products/Monitor-curved-27inch-Depositphotos_282647566_L.jpg",
		productName: "Monitor Curved 27 inch",
		category: "Electronics",
		rating: 2.5,
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
					city: "Sydney",
					zipCode: 75331,
					streetName: "Street 15",
					streetNumber: "767A",
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
					city: "Delhi",
					zipCode: 64266,
					streetName: "Street 26",
					streetNumber: "934B",
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
					city: "Hamburg",
					zipCode: 16147,
					streetName: "Street 33",
					streetNumber: "673A",
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
					city: "Bangalore",
					zipCode: 12465,
					streetName: "Street 6",
					streetNumber: "709A",
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
					city: "Brisbane",
					zipCode: 53012,
					streetName: "Street 50",
					streetNumber: "810C",
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
					city: "Berlin",
					zipCode: 57310,
					streetName: "Street 44",
					streetNumber: "922B",
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
					city: "Berlin",
					zipCode: 52783,
					streetName: "Street 36",
					streetNumber: "231A",
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
					city: "New York",
					zipCode: 90045,
					streetName: "Street 23",
					streetNumber: "461A",
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
					city: "Bangalore",
					zipCode: 62629,
					streetName: "Street 7",
					streetNumber: "740A",
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
					city: "Marseille",
					zipCode: 64364,
					streetName: "Street 27",
					streetNumber: "87A",
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
					city: "Berlin",
					zipCode: 15440,
					streetName: "Street 19",
					streetNumber: "147B",
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
					city: "Los Angeles",
					zipCode: 42093,
					streetName: "Street 4",
					streetNumber: "26A",
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
					city: "Chicago",
					zipCode: 30378,
					streetName: "Street 47",
					streetNumber: "674A",
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
					city: "Chicago",
					zipCode: 59151,
					streetName: "Street 30",
					streetNumber: "924B",
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
					city: "Birmingham",
					zipCode: 95591,
					streetName: "Street 41",
					streetNumber: "541A",
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
					city: "Delhi",
					zipCode: 55370,
					streetName: "Street 22",
					streetNumber: "916A",
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
					city: "Birmingham",
					zipCode: 66758,
					streetName: "Street 17",
					streetNumber: "599C",
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
					city: "Munich",
					zipCode: 17616,
					streetName: "Street 43",
					streetNumber: "688C",
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
					city: "Mumbai",
					zipCode: 42881,
					streetName: "Street 38",
					streetNumber: "366B",
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
					city: "Birmingham",
					zipCode: 40163,
					streetName: "Street 4",
					streetNumber: "800A",
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
					city: "Bangalore",
					zipCode: 95499,
					streetName: "Street 36",
					streetNumber: "576A",
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
					city: "Sydney",
					zipCode: 10032,
					streetName: "Street 47",
					streetNumber: "848C",
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
					city: "New York",
					zipCode: 97615,
					streetName: "Street 18",
					streetNumber: "232B",
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
					city: "Birmingham",
					zipCode: 22032,
					streetName: "Street 30",
					streetNumber: "346B",
				}
			}
		]
	},
	{
		sku: "SKU1031",
		imageUrl: "products/Nike_footwear-5408643_1920.jpg",
		productName: "Nike Air Footwear",
		category: "Footwear",
		rating: 4.5,
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
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
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
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
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
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
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
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
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
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
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
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
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
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
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
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
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
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
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
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
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
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
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
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
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
					city: "Mumbai",
					zipCode: 31660,
					streetName: "Street 31",
					streetNumber: "847A",
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
					city: "Los Angeles",
					zipCode: 80912,
					streetName: "Street 36",
					streetNumber: "187B",
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
					city: "Sydney",
					zipCode: 64528,
					streetName: "Street 30",
					streetNumber: "733C",
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
					city: "Melbourne",
					zipCode: 56481,
					streetName: "Street 22",
					streetNumber: "718A",
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
					city: "Marseille",
					zipCode: 65465,
					streetName: "Street 39",
					streetNumber: "566C",
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
					city: "Paris",
					zipCode: 25704,
					streetName: "Street 23",
					streetNumber: "283C",
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
					city: "Munich",
					zipCode: 50026,
					streetName: "Street 11",
					streetNumber: "145A",
				}
			}
		]
	},
	{
		sku: "SKU1033",
		imageUrl: "products/PC-Mouse-wired-Depositphotos_12621359_L.jpg",
		productName: "PC Mouse Wired",
		category: "Accessories",
		rating: 2,
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
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
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
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
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
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
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
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
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
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
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
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
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
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
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
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
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
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
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
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
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
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
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
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
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
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
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
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
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
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
				}
			}
		]
	},
	{
		sku: "SKU1034",
		imageUrl: "products/Pencil-Depositphotos_293936972_L.jpg",
		productName: "Pencil",
		category: "Office Supplies",
		rating: 3.35,
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
					city: "Sydney",
					zipCode: 42853,
					streetName: "King's Road",
					streetNumber: "97C",
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
					city: "Helsinki",
					zipCode: 48272,
					streetName: "Queen Street",
					streetNumber: "271B",
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
					city: "São Paulo",
					zipCode: 66311,
					streetName: "Queen Street",
					streetNumber: "381A",
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
					city: "Paris",
					zipCode: 82134,
					streetName: "High Street",
					streetNumber: "199C",
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
					city: "Rome",
					zipCode: 60751,
					streetName: "Main Street",
					streetNumber: "289D",
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
					city: "Amsterdam",
					zipCode: 11840,
					streetName: "High Street",
					streetNumber: "381B",
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
					city: "Bucharest",
					zipCode: 84647,
					streetName: "Sunset Blvd",
					streetNumber: "98D",
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
					city: "Helsinki",
					zipCode: 12744,
					streetName: "Market Street",
					streetNumber: "245D",
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
					city: "Helsinki",
					zipCode: 92963,
					streetName: "Sunset Blvd",
					streetNumber: "98A",
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
					city: "Helsinki",
					zipCode: 69822,
					streetName: "Broadway",
					streetNumber: "378A",
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
					city: "Copenhagen",
					zipCode: 81197,
					streetName: "High Street",
					streetNumber: "77C",
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
					city: "Mumbai",
					zipCode: 74221,
					streetName: "King's Road",
					streetNumber: "104B",
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
					city: "London",
					zipCode: 80946,
					streetName: "Broadway",
					streetNumber: "232A",
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
					city: "Athens",
					zipCode: 25316,
					streetName: "Queen Street",
					streetNumber: "117C",
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
					city: "Amsterdam",
					zipCode: 85226,
					streetName: "Market Street",
					streetNumber: "174C",
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
					city: "Helsinki",
					zipCode: 22228,
					streetName: "Sunset Blvd",
					streetNumber: "107D",
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
					city: "Bucharest",
					zipCode: 95317,
					streetName: "Market Street",
					streetNumber: "436B",
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
					city: "Sydney",
					zipCode: 67622,
					streetName: "Market Street",
					streetNumber: "167C",
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
					city: "Tokyo",
					zipCode: 51645,
					streetName: "Queen Street",
					streetNumber: "381B",
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
					city: "Sydney",
					zipCode: 98659,
					streetName: "Market Street",
					streetNumber: "382D",
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
					city: "Sydney",
					zipCode: 22221,
					streetName: "King's Road",
					streetNumber: "1D",
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
					city: "Amsterdam",
					zipCode: 11251,
					streetName: "King's Road",
					streetNumber: "184C",
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
					city: "Toronto",
					zipCode: 66743,
					streetName: "Broadway",
					streetNumber: "386D",
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
					city: "São Paulo",
					zipCode: 99082,
					streetName: "Broadway",
					streetNumber: "388D",
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
					city: "Helsinki",
					zipCode: 15493,
					streetName: "High Street",
					streetNumber: "66A",
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
					city: "Paris",
					zipCode: 68614,
					streetName: "King's Road",
					streetNumber: "244A",
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
					city: "Tokyo",
					zipCode: 53175,
					streetName: "King's Road",
					streetNumber: "305A",
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
					city: "Amsterdam",
					zipCode: 12081,
					streetName: "Market Street",
					streetNumber: "367D",
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
					city: "Rome",
					zipCode: 69350,
					streetName: "King's Road",
					streetNumber: "4C",
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
					city: "Rome",
					zipCode: 54889,
					streetName: "Main Street",
					streetNumber: "148D",
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
					city: "Berlin",
					zipCode: 86283,
					streetName: "Market Street",
					streetNumber: "95B",
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
					city: "Toronto",
					zipCode: 63241,
					streetName: "Broadway",
					streetNumber: "418A",
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
					city: "Brussels",
					zipCode: 57995,
					streetName: "Main Street",
					streetNumber: "128C",
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
					city: "Bucharest",
					zipCode: 72211,
					streetName: "Queen Street",
					streetNumber: "29B",
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
					city: "Beijing",
					zipCode: 74156,
					streetName: "Queen Street",
					streetNumber: "312A",
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
					city: "Toronto",
					zipCode: 29440,
					streetName: "King's Road",
					streetNumber: "237C",
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
					city: "Beijing",
					zipCode: 76065,
					streetName: "Sunset Blvd",
					streetNumber: "97A",
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
					city: "Athens",
					zipCode: 45400,
					streetName: "Queen Street",
					streetNumber: "84A",
				}
			}
		]
	},
	{
		sku: "SKU1035",
		imageUrl: "products/Post-it-notes-Depositphotos_2275156_L.jpg",
		productName: "Post-it Notes",
		category: "Office Supplies",
		rating: 3.95,
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
					city: "Paris",
					zipCode: 35865,
					streetName: "Street 26",
					streetNumber: "522C",
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
					city: "London",
					zipCode: 36767,
					streetName: "Street 7",
					streetNumber: "940C",
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
					city: "Brisbane",
					zipCode: 47835,
					streetName: "Street 17",
					streetNumber: "419A",
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
					city: "Melbourne",
					zipCode: 85925,
					streetName: "Street 3",
					streetNumber: "770B",
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
					city: "Los Angeles",
					zipCode: 93388,
					streetName: "Street 28",
					streetNumber: "761B",
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
					city: "Berlin",
					zipCode: 71586,
					streetName: "Street 2",
					streetNumber: "998A",
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
					city: "Delhi",
					zipCode: 90446,
					streetName: "Street 47",
					streetNumber: "891B",
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
					city: "Bangalore",
					zipCode: 59128,
					streetName: "Street 25",
					streetNumber: "440A",
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
					city: "Los Angeles",
					zipCode: 50312,
					streetName: "Street 11",
					streetNumber: "544A",
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
					city: "Bangalore",
					zipCode: 84053,
					streetName: "Street 3",
					streetNumber: "388A",
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
					city: "Berlin",
					zipCode: 95270,
					streetName: "Street 42",
					streetNumber: "726A",
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
					city: "Marseille",
					zipCode: 20613,
					streetName: "Street 6",
					streetNumber: "335A",
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
					city: "Munich",
					zipCode: 90375,
					streetName: "Street 39",
					streetNumber: "439B",
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
					city: "Melbourne",
					zipCode: 12756,
					streetName: "Street 50",
					streetNumber: "811A",
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
					city: "Lyon",
					zipCode: 74206,
					streetName: "Street 49",
					streetNumber: "531C",
				}
			}
		]
	},
	{
		sku: "SKU1036",
		imageUrl: "products/Print-paper-Depositphotos_191385040_L.jpg",
		productName: "Print Paper Pack",
		category: "Office Supplies",
		rating: 4.05,
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
					city: "Los Angeles",
					zipCode: 88056,
					streetName: "Street 31",
					streetNumber: "863C",
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
					city: "Delhi",
					zipCode: 32539,
					streetName: "Street 16",
					streetNumber: "453A",
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
					city: "Manchester",
					zipCode: 51789,
					streetName: "Street 21",
					streetNumber: "912C",
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
					city: "Los Angeles",
					zipCode: 75943,
					streetName: "Street 10",
					streetNumber: "21A",
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
					city: "Bangalore",
					zipCode: 91277,
					streetName: "Street 40",
					streetNumber: "671A",
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
					city: "Bangalore",
					zipCode: 58801,
					streetName: "Street 48",
					streetNumber: "855A",
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
					city: "Chicago",
					zipCode: 59822,
					streetName: "Street 5",
					streetNumber: "212A",
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
					city: "Munich",
					zipCode: 95627,
					streetName: "Street 47",
					streetNumber: "438A",
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
					city: "Birmingham",
					zipCode: 67887,
					streetName: "Street 16",
					streetNumber: "341C",
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
					city: "Berlin",
					zipCode: 99025,
					streetName: "Street 20",
					streetNumber: "413A",
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
					city: "Sydney",
					zipCode: 45797,
					streetName: "Street 36",
					streetNumber: "49B",
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
					city: "Manchester",
					zipCode: 62471,
					streetName: "Street 18",
					streetNumber: "34C",
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
					city: "Paris",
					zipCode: 77658,
					streetName: "Street 34",
					streetNumber: "635C",
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
					city: "London",
					zipCode: 57877,
					streetName: "Street 40",
					streetNumber: "451A",
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
					city: "Bangalore",
					zipCode: 53308,
					streetName: "Street 29",
					streetNumber: "538A",
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
					city: "Manchester",
					zipCode: 39952,
					streetName: "Street 15",
					streetNumber: "830A",
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
					city: "London",
					zipCode: 89167,
					streetName: "Street 24",
					streetNumber: "282C",
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
					city: "Bangalore",
					zipCode: 29077,
					streetName: "Street 37",
					streetNumber: "784A",
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
					city: "Birmingham",
					zipCode: 57993,
					streetName: "Street 25",
					streetNumber: "445A",
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
					city: "Mumbai",
					zipCode: 25933,
					streetName: "Street 4",
					streetNumber: "888C",
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
					city: "Los Angeles",
					zipCode: 61583,
					streetName: "Street 24",
					streetNumber: "110B",
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
					city: "Bangalore",
					zipCode: 60545,
					streetName: "Street 3",
					streetNumber: "882C",
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
					city: "Delhi",
					zipCode: 55210,
					streetName: "Street 32",
					streetNumber: "769B",
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
					city: "Brisbane",
					zipCode: 28512,
					streetName: "Street 24",
					streetNumber: "20C",
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
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
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
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
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
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
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
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
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
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
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
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
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
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
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
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
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
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
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
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
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
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
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
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
				}
			}
		]
	},
	{
		sku: "SKU1039",
		imageUrl: "products/Sony_Alpha7_camera-275007_1920.jpg",
		productName: "Sony Alpha 7",
		category: "Photography",
		rating: 2.8,
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
					city: "Chicago",
					zipCode: 22399,
					streetName: "Street 37",
					streetNumber: "15B",
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
					city: "Manchester",
					zipCode: 69481,
					streetName: "Street 28",
					streetNumber: "930B",
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
					city: "Delhi",
					zipCode: 31863,
					streetName: "Street 35",
					streetNumber: "331C",
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
					city: "Birmingham",
					zipCode: 47952,
					streetName: "Street 34",
					streetNumber: "510C",
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
					city: "Melbourne",
					zipCode: 31080,
					streetName: "Street 36",
					streetNumber: "455C",
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
					city: "Chicago",
					zipCode: 92086,
					streetName: "Street 46",
					streetNumber: "988A",
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
					city: "Los Angeles",
					zipCode: 18884,
					streetName: "Street 18",
					streetNumber: "125C",
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
					city: "Hamburg",
					zipCode: 58190,
					streetName: "Street 41",
					streetNumber: "747A",
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
					city: "Hamburg",
					zipCode: 48132,
					streetName: "Street 22",
					streetNumber: "167C",
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
					city: "London",
					zipCode: 21662,
					streetName: "Street 47",
					streetNumber: "44B",
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
					city: "Manchester",
					zipCode: 90760,
					streetName: "Street 22",
					streetNumber: "673A",
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
					city: "Hamburg",
					zipCode: 61832,
					streetName: "Street 25",
					streetNumber: "567A",
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
					city: "Marseille",
					zipCode: 24503,
					streetName: "Street 45",
					streetNumber: "119A",
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
					city: "Paris",
					zipCode: 68399,
					streetName: "Street 2",
					streetNumber: "633C",
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
					city: "Manchester",
					zipCode: 14988,
					streetName: "Street 37",
					streetNumber: "484A",
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
					city: "Sydney",
					zipCode: 77388,
					streetName: "Street 43",
					streetNumber: "136C",
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
					city: "Bangalore",
					zipCode: 73213,
					streetName: "Street 49",
					streetNumber: "794C",
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
					city: "Sydney",
					zipCode: 57275,
					streetName: "Street 24",
					streetNumber: "234A",
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
					city: "Bangalore",
					zipCode: 79583,
					streetName: "Street 18",
					streetNumber: "755A",
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
					city: "Los Angeles",
					zipCode: 91387,
					streetName: "Street 28",
					streetNumber: "582B",
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
					city: "Lyon",
					zipCode: 66151,
					streetName: "Street 8",
					streetNumber: "840A",
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
					city: "Marseille",
					zipCode: 96467,
					streetName: "Street 6",
					streetNumber: "175A",
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
					city: "Delhi",
					zipCode: 78201,
					streetName: "Street 6",
					streetNumber: "90B",
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
					city: "Lyon",
					zipCode: 80238,
					streetName: "Street 4",
					streetNumber: "132B",
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
					city: "Berlin",
					zipCode: 26324,
					streetName: "Street 33",
					streetNumber: "199B",
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
					city: "Hamburg",
					zipCode: 11926,
					streetName: "Street 39",
					streetNumber: "681C",
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
					city: "Manchester",
					zipCode: 32182,
					streetName: "Street 17",
					streetNumber: "759C",
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
					city: "Sydney",
					zipCode: 60858,
					streetName: "Street 36",
					streetNumber: "897B",
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
					city: "Melbourne",
					zipCode: 70966,
					streetName: "Street 4",
					streetNumber: "42B",
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
					city: "Hamburg",
					zipCode: 30896,
					streetName: "Street 50",
					streetNumber: "565A",
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
					city: "Delhi",
					zipCode: 19822,
					streetName: "Street 32",
					streetNumber: "147A",
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
					city: "Delhi",
					zipCode: 52866,
					streetName: "Street 39",
					streetNumber: "19C",
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
					city: "Marseille",
					zipCode: 48901,
					streetName: "Street 22",
					streetNumber: "979C",
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
					city: "Berlin",
					zipCode: 29242,
					streetName: "Street 13",
					streetNumber: "208B",
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
					city: "Manchester",
					zipCode: 21401,
					streetName: "Street 20",
					streetNumber: "360C",
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
					city: "London",
					zipCode: 67334,
					streetName: "Street 40",
					streetNumber: "250A",
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
					city: "London",
					zipCode: 61914,
					streetName: "Street 33",
					streetNumber: "374B",
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
					city: "Melbourne",
					zipCode: 53088,
					streetName: "Street 7",
					streetNumber: "726B",
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
					city: "Melbourne",
					zipCode: 68754,
					streetName: "Street 49",
					streetNumber: "852B",
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
					city: "Hamburg",
					zipCode: 62569,
					streetName: "Street 1",
					streetNumber: "557B",
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
					city: "Paris",
					zipCode: 80236,
					streetName: "Street 22",
					streetNumber: "182B",
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
					city: "Melbourne",
					zipCode: 42584,
					streetName: "Street 37",
					streetNumber: "883C",
				}
			}
		]
	},
	{
		sku: "SKU1042",
		imageUrl: "products/Speaker_Depositphotos_252611752_L.jpg",
		productName: "Speaker Bluetooth",
		category: "Electronics",
		rating: 3.5,
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
					city: "New York",
					zipCode: 90688,
					streetName: "Street 33",
					streetNumber: "717B",
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
					city: "Munich",
					zipCode: 34472,
					streetName: "Street 2",
					streetNumber: "415A",
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
					city: "Paris",
					zipCode: 62158,
					streetName: "Street 24",
					streetNumber: "419A",
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
					city: "Lyon",
					zipCode: 57141,
					streetName: "Street 40",
					streetNumber: "839C",
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
					city: "Paris",
					zipCode: 95678,
					streetName: "Street 14",
					streetNumber: "297C",
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
					city: "Chicago",
					zipCode: 22399,
					streetName: "Street 37",
					streetNumber: "15B",
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
					city: "Manchester",
					zipCode: 69481,
					streetName: "Street 28",
					streetNumber: "930B",
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
					city: "Delhi",
					zipCode: 31863,
					streetName: "Street 35",
					streetNumber: "331C",
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
					city: "Birmingham",
					zipCode: 47952,
					streetName: "Street 34",
					streetNumber: "510C",
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
					city: "Melbourne",
					zipCode: 31080,
					streetName: "Street 36",
					streetNumber: "455C",
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
					city: "Chicago",
					zipCode: 92086,
					streetName: "Street 46",
					streetNumber: "988A",
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
					city: "Los Angeles",
					zipCode: 18884,
					streetName: "Street 18",
					streetNumber: "125C",
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
					city: "Hamburg",
					zipCode: 58190,
					streetName: "Street 41",
					streetNumber: "747A",
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
					city: "Hamburg",
					zipCode: 48132,
					streetName: "Street 22",
					streetNumber: "167C",
				}
			}
		]
	},
	{
		sku: "SKU1044",
		imageUrl: "products/T-Shirt-gray-Depositphotos_138950992_L.jpg",
		productName: "T-Shirt Gray",
		category: "Clothing",
		rating: 4.5,
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
					city: "Berlin",
					zipCode: 83148,
					streetName: "Street 38",
					streetNumber: "633A",
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
					city: "Manchester",
					zipCode: 76342,
					streetName: "Street 3",
					streetNumber: "638A",
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
					city: "Delhi",
					zipCode: 27770,
					streetName: "Street 47",
					streetNumber: "329B",
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
					city: "Birmingham",
					zipCode: 77913,
					streetName: "Street 33",
					streetNumber: "336C",
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
					city: "Chicago",
					zipCode: 64938,
					streetName: "Street 17",
					streetNumber: "633A",
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
					city: "Marseille",
					zipCode: 24765,
					streetName: "Street 12",
					streetNumber: "319C",
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
					city: "Sydney",
					zipCode: 75331,
					streetName: "Street 15",
					streetNumber: "767A",
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
					city: "Delhi",
					zipCode: 64266,
					streetName: "Street 26",
					streetNumber: "934B",
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
					city: "Hamburg",
					zipCode: 16147,
					streetName: "Street 33",
					streetNumber: "673A",
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
					city: "Bangalore",
					zipCode: 12465,
					streetName: "Street 6",
					streetNumber: "709A",
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
					city: "Brisbane",
					zipCode: 53012,
					streetName: "Street 50",
					streetNumber: "810C",
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
					city: "Berlin",
					zipCode: 57310,
					streetName: "Street 44",
					streetNumber: "922B",
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
					city: "Berlin",
					zipCode: 52783,
					streetName: "Street 36",
					streetNumber: "231A",
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
					city: "New York",
					zipCode: 90045,
					streetName: "Street 23",
					streetNumber: "461A",
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
					city: "Bangalore",
					zipCode: 62629,
					streetName: "Street 7",
					streetNumber: "740A",
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
					city: "Marseille",
					zipCode: 64364,
					streetName: "Street 27",
					streetNumber: "87A",
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
					city: "Berlin",
					zipCode: 15440,
					streetName: "Street 19",
					streetNumber: "147B",
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
					city: "Los Angeles",
					zipCode: 42093,
					streetName: "Street 4",
					streetNumber: "26A",
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
					city: "Chicago",
					zipCode: 30378,
					streetName: "Street 47",
					streetNumber: "674A",
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
					city: "Chicago",
					zipCode: 59151,
					streetName: "Street 30",
					streetNumber: "924B",
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
					city: "Birmingham",
					zipCode: 95591,
					streetName: "Street 41",
					streetNumber: "541A",
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
					city: "Delhi",
					zipCode: 55370,
					streetName: "Street 22",
					streetNumber: "916A",
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
					city: "Birmingham",
					zipCode: 66758,
					streetName: "Street 17",
					streetNumber: "599C",
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
					city: "Munich",
					zipCode: 17616,
					streetName: "Street 43",
					streetNumber: "688C",
				}
			}
		]
	},
	{
		sku: "SKU1046",
		imageUrl: "products/vacuum-cleaner-8114145-2.jpg",
		productName: "Vacuum Cleaner Robot",
		category: "Home Appliances",
		rating: 2.5,
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
					city: "Bangalore",
					zipCode: 48193,
					streetName: "Street 28",
					streetNumber: "927C",
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
					city: "Manchester",
					zipCode: 64564,
					streetName: "Street 1",
					streetNumber: "101A",
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
					city: "Lyon",
					zipCode: 25197,
					streetName: "Street 36",
					streetNumber: "689B",
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
					city: "Hamburg",
					zipCode: 77659,
					streetName: "Street 48",
					streetNumber: "298C",
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
					city: "Mumbai",
					zipCode: 43864,
					streetName: "Street 25",
					streetNumber: "886A",
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
					city: "Birmingham",
					zipCode: 44788,
					streetName: "Street 10",
					streetNumber: "286C",
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
					city: "Brisbane",
					zipCode: 55589,
					streetName: "Street 16",
					streetNumber: "476C",
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
					city: "Marseille",
					zipCode: 13725,
					streetName: "Street 39",
					streetNumber: "596A",
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
					city: "New York",
					zipCode: 24178,
					streetName: "Street 36",
					streetNumber: "411C",
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
					city: "Birmingham",
					zipCode: 61522,
					streetName: "Street 10",
					streetNumber: "989A",
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
					city: "Sydney",
					zipCode: 90362,
					streetName: "Street 35",
					streetNumber: "936B",
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
					city: "Manchester",
					zipCode: 13065,
					streetName: "Street 6",
					streetNumber: "842A",
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
					city: "Manchester",
					zipCode: 29470,
					streetName: "Street 29",
					streetNumber: "309B",
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
					city: "Hamburg",
					zipCode: 89980,
					streetName: "Street 19",
					streetNumber: "272C",
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
					city: "Marseille",
					zipCode: 36154,
					streetName: "Street 41",
					streetNumber: "809C",
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
					city: "Manchester",
					zipCode: 24916,
					streetName: "Street 18",
					streetNumber: "566C",
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
					city: "Brisbane",
					zipCode: 90965,
					streetName: "Street 6",
					streetNumber: "964B",
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
					city: "Berlin",
					zipCode: 98612,
					streetName: "Street 24",
					streetNumber: "690C",
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
					city: "Los Angeles",
					zipCode: 72475,
					streetName: "Street 40",
					streetNumber: "650A",
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
					city: "New York",
					zipCode: 32513,
					streetName: "Street 25",
					streetNumber: "978B",
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
					city: "Birmingham",
					zipCode: 69174,
					streetName: "Street 24",
					streetNumber: "332C",
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
					city: "Sydney",
					zipCode: 74616,
					streetName: "Street 43",
					streetNumber: "207A",
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
					city: "Mumbai",
					zipCode: 24632,
					streetName: "Street 25",
					streetNumber: "955B",
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
					city: "Los Angeles",
					zipCode: 15521,
					streetName: "Street 30",
					streetNumber: "317B",
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
					city: "Marseille",
					zipCode: 71557,
					streetName: "Street 15",
					streetNumber: "920C",
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
					city: "Los Angeles",
					zipCode: 72193,
					streetName: "Street 11",
					streetNumber: "674A",
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
					city: "Delhi",
					zipCode: 88176,
					streetName: "Street 50",
					streetNumber: "3A",
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
					city: "Melbourne",
					zipCode: 62414,
					streetName: "Street 41",
					streetNumber: "953A",
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
					city: "Sydney",
					zipCode: 45797,
					streetName: "Street 36",
					streetNumber: "49B",
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
					city: "Manchester",
					zipCode: 62471,
					streetName: "Street 18",
					streetNumber: "34C",
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
					city: "Paris",
					zipCode: 77658,
					streetName: "Street 34",
					streetNumber: "635C",
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
					city: "London",
					zipCode: 57877,
					streetName: "Street 40",
					streetNumber: "451A",
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
					city: "Bangalore",
					zipCode: 53308,
					streetName: "Street 29",
					streetNumber: "538A",
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
					city: "Manchester",
					zipCode: 39952,
					streetName: "Street 15",
					streetNumber: "830A",
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
					city: "London",
					zipCode: 89167,
					streetName: "Street 24",
					streetNumber: "282C",
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
					city: "Bangalore",
					zipCode: 29077,
					streetName: "Street 37",
					streetNumber: "784A",
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
					city: "Birmingham",
					zipCode: 57993,
					streetName: "Street 25",
					streetNumber: "445A",
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
					city: "Mumbai",
					zipCode: 25933,
					streetName: "Street 4",
					streetNumber: "888C",
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
					city: "Los Angeles",
					zipCode: 61583,
					streetName: "Street 24",
					streetNumber: "110B",
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
					city: "Bangalore",
					zipCode: 60545,
					streetName: "Street 3",
					streetNumber: "882C",
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
					city: "Delhi",
					zipCode: 55210,
					streetName: "Street 32",
					streetNumber: "769B",
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
					city: "Brisbane",
					zipCode: 28512,
					streetName: "Street 24",
					streetNumber: "20C",
				}
			}
		]
	},
	{
		sku: "SKU1048",
		imageUrl: "products/Winter-Jacket-Depositphotos_89349846_L.jpg",
		productName: "Winter Jacket",
		category: "Clothing",
		rating: 4.65,
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
					city: "Berlin",
					zipCode: 27505,
					streetName: "Street 10",
					streetNumber: "563B",
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
					city: "Brisbane",
					zipCode: 93375,
					streetName: "Street 17",
					streetNumber: "78C",
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
					city: "Marseille",
					zipCode: 62807,
					streetName: "Street 28",
					streetNumber: "938C",
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
					city: "Mumbai",
					zipCode: 73766,
					streetName: "Street 3",
					streetNumber: "909C",
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
					city: "Hamburg",
					zipCode: 36571,
					streetName: "Street 5",
					streetNumber: "720C",
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
					city: "Chicago",
					zipCode: 62595,
					streetName: "Street 45",
					streetNumber: "798A",
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
					city: "Hamburg",
					zipCode: 28594,
					streetName: "Street 12",
					streetNumber: "252A",
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
					city: "Hamburg",
					zipCode: 36641,
					streetName: "Street 3",
					streetNumber: "716B",
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
					city: "Los Angeles",
					zipCode: 70091,
					streetName: "Street 38",
					streetNumber: "471C",
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
					city: "London",
					zipCode: 28881,
					streetName: "Street 31",
					streetNumber: "286B",
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
					city: "Rome",
					zipCode: 90156,
					streetName: "High Street",
					streetNumber: "127B",
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
					city: "Copenhagen",
					zipCode: 24877,
					streetName: "High Street",
					streetNumber: "217B",
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
					city: "Mumbai",
					zipCode: 10185,
					streetName: "Market Street",
					streetNumber: "294C",
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
					city: "Warsaw",
					zipCode: 98568,
					streetName: "Market Street",
					streetNumber: "97A",
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
					city: "Paris",
					zipCode: 54673,
					streetName: "Sunset Blvd",
					streetNumber: "118D",
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
					city: "Berlin",
					zipCode: 56840,
					streetName: "High Street",
					streetNumber: "307A",
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
					city: "Tokyo",
					zipCode: 31900,
					streetName: "Market Street",
					streetNumber: "117A",
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
					city: "Toronto",
					zipCode: 57467,
					streetName: "King's Road",
					streetNumber: "132D",
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
					city: "Mumbai",
					zipCode: 19866,
					streetName: "High Street",
					streetNumber: "31B",
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
					city: "Amsterdam",
					zipCode: 67201,
					streetName: "Broadway",
					streetNumber: "74D",
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
					city: "Brussels",
					zipCode: 42714,
					streetName: "Sunset Blvd",
					streetNumber: "173D",
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
					city: "Paris",
					zipCode: 25553,
					streetName: "Market Street",
					streetNumber: "471D",
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
					city: "Delhi",
					zipCode: 31202,
					streetName: "Street 22",
					streetNumber: "277A",
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
					city: "Berlin",
					zipCode: 96042,
					streetName: "Street 21",
					streetNumber: "917C",
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
					city: "Chicago",
					zipCode: 47082,
					streetName: "Street 21",
					streetNumber: "89A",
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
					city: "Birmingham",
					zipCode: 19592,
					streetName: "Street 14",
					streetNumber: "270B",
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
					city: "Manchester",
					zipCode: 40094,
					streetName: "Street 47",
					streetNumber: "204C",
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
					city: "London",
					zipCode: 11622,
					streetName: "Street 25",
					streetNumber: "301C",
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
					city: "Hamburg",
					zipCode: 98706,
					streetName: "Street 42",
					streetNumber: "789B",
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
					city: "Munich",
					zipCode: 35172,
					streetName: "Street 50",
					streetNumber: "45A",
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
					city: "Delhi",
					zipCode: 95695,
					streetName: "Street 4",
					streetNumber: "30A",
				}
			}
		]
	}
];


