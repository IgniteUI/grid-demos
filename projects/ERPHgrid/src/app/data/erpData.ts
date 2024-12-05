import { CountryFlag, OrderStatus, TemplateDataModel } from "./dataModels";
import { TREND_DATA } from "./productOrdersTrendsData";

export const InventoryList: TemplateDataModel[] = [{
    sku: "SKU1001",
    imageUrl: "assets/images/products/adidas-sports-shoes.jpg",
    productName: "Adidas Sports Shoes",
    category: "Footwear",
    rating: 3.5,
    unitsSold: 20,
    grossPrice: 49.99,
    netPrice: 39.99,
    salesTrendData: TREND_DATA[0],
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
}, {
    sku: "SKU1002",
    imageUrl: "assets/images/products/Android-Tablet-11inch-Depositphotos.jpg",
    productName: "Android Tablet 11Inch Depositphotos",
    category: "Electronics",
    rating: 5.0,
    unitsSold: 40,
    grossPrice: 59.99,
    netPrice: 47.99,
    salesTrendData: TREND_DATA[1],
    orders: [{
        orderId: 2,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-16",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 10001,
            streetName: "Street 1",
            streetNumber: "101A",
            customer: "Customer 1",
            contactLinks: {
                email: "customer1@example.com",
                linkedin: "https://linkedin.com/in/customer1"
            }
        }
    },
    {
      orderId: 1238,
      status: OrderStatus.PACKED,
      delivery: {
          dateOrdered: "2024-01-20",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "Australia",
          countryFlag: CountryFlag.AUSTRALIA,
          city: "Sydney",
          zipCode: 2000,
          streetName: "George Street",
          streetNumber: "42E",
          customer: "Lucy Brown",
          contactLinks: {
              email: "lucy.brown@example.com",
              linkedin: "https://linkedin.com/in/lucy-brown"
          }
      }
  },
  {
    orderId: 1239,
    status: OrderStatus.IN_TRANSIT,
    delivery: {
        dateOrdered: "2024-01-11",
        dateShipped: "2024-01-13",
        dateDelivered: ""
    },
    orderInformation: {
        country: "India",
        countryFlag: CountryFlag.INDIA,
        city: "Mumbai",
        zipCode: 400001,
        streetName: "Marine Drive",
        streetNumber: "88B",
        customer: "Ravi Patel",
        contactLinks: {
            email: "ravi.patel@example.com",
            linkedin: "https://linkedin.com/in/ravi-patel"
        }
    }
}]
}, {
    sku: "SKU1003",
    imageUrl: "assets/images/products/Apple-Magic-Mouse-Depositphotos.jpg",
    productName: "Apple Magic Mouse Depositphotos",
    category: "Accessories",
    rating: 3.5,
    unitsSold: 60,
    grossPrice: 69.99,
    netPrice: 55.99,
    salesTrendData: TREND_DATA[2],
    orders: [{
        orderId: 3,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-17",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United Kingdom",
            countryFlag: CountryFlag.UK,
            city: "London",
            zipCode: 10002,
            streetName: "Street 2",
            streetNumber: "102A",
            customer: "Customer 2",
            contactLinks: {
                email: "customer2@example.com",
                linkedin: "https://linkedin.com/in/customer2"
            }
        }
    },
    {
      orderId: 1240,
      status: OrderStatus.DELIVERED,
      delivery: {
          dateOrdered: "2024-01-15",
          dateShipped: "2024-01-17",
          dateDelivered: "2024-01-20"
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Delhi",
          zipCode: 110001,
          streetName: "Connaught Place",
          streetNumber: "12A",
          customer: "Priya Sharma",
          contactLinks: {
              email: "priya.sharma@example.com",
              linkedin: "https://linkedin.com/in/priya-sharma"
          }
      }
  },
  {
      orderId: 1241,
      status: OrderStatus.CUSTOMS,
      delivery: {
          dateOrdered: "2024-01-10",
          dateShipped: "2024-01-12",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Chennai",
          zipCode: 600001,
          streetName: "Mount Road",
          streetNumber: "45C",
          customer: "Arun Rajan",
          contactLinks: {
              email: "arun.rajan@example.com",
              linkedin: "https://linkedin.com/in/arun-rajan"
          }
      }
  },
  {
      orderId: 1242,
      status: OrderStatus.PACKED,
      delivery: {
          dateOrdered: "2024-01-09",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Kolkata",
          zipCode: 700001,
          streetName: "Park Street",
          streetNumber: "22D",
          customer: "Meera Banerjee",
          contactLinks: {
              email: "meera.banerjee@example.com",
              linkedin: "https://linkedin.com/in/meera-banerjee"
          }
      }
  },
  {
      orderId: 1243,
      status: OrderStatus.IN_TRANSIT,
      delivery: {
          dateOrdered: "2024-01-14",
          dateShipped: "2024-01-16",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Bangalore",
          zipCode: 560001,
          streetName: "MG Road",
          streetNumber: "100E",
          customer: "Kiran Nair",
          contactLinks: {
              email: "kiran.nair@example.com",
              linkedin: "https://linkedin.com/in/kiran-nair"
          }
      }
  },]
}, {
    sku: "SKU1004",
    imageUrl: "assets/images/products/ballpoint-pen.jpg",
    productName: "Ballpoint Pen",
    category: "Office Supplies",
    rating: 5.0,
    unitsSold: 80,
    grossPrice: 79.99,
    netPrice: 63.99,
    salesTrendData: TREND_DATA[3],
    orders: [{
        orderId: 4,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-18",
            dateShipped: "2024-01-19",
            dateDelivered: "2024-01-20"
        },
        orderInformation: {
            country: "Australia",
            countryFlag: CountryFlag.AUSTRALIA,
            city: "Sydney",
            zipCode: 10003,
            streetName: "Street 3",
            streetNumber: "103A",
            customer: "Customer 3",
            contactLinks: {
                email: "customer3@example.com",
                linkedin: "https://linkedin.com/in/customer3"
            }
        }
    },
    {
      orderId: 1244,
      status: OrderStatus.DELIVERED,
      delivery: {
          dateOrdered: "2024-01-08",
          dateShipped: "2024-01-10",
          dateDelivered: "2024-01-13"
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Hyderabad",
          zipCode: 500001,
          streetName: "Charminar Road",
          streetNumber: "77F",
          customer: "Anita Reddy",
          contactLinks: {
              email: "anita.reddy@example.com",
              linkedin: "https://linkedin.com/in/anita-reddy"
          }
      }
  },
  {
      orderId: 1245,
      status: OrderStatus.CUSTOMS,
      delivery: {
          dateOrdered: "2024-01-05",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Pune",
          zipCode: 411001,
          streetName: "Deccan Gymkhana",
          streetNumber: "9G",
          customer: "Rahul Deshmukh",
          contactLinks: {
              email: "rahul.deshmukh@example.com",
              linkedin: "https://linkedin.com/in/rahul-deshmukh"
          }
      }
  },
  {
      orderId: 1246,
      status: OrderStatus.PACKED,
      delivery: {
          dateOrdered: "2024-01-13",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Jaipur",
          zipCode: 302001,
          streetName: "Pink City Lane",
          streetNumber: "16B",
          customer: "Rajveer Singh",
          contactLinks: {
              email: "rajveer.singh@example.com",
              linkedin: "https://linkedin.com/in/rajveer-singh"
          }
      }
  },
  {
      orderId: 1247,
      status: OrderStatus.IN_TRANSIT,
      delivery: {
          dateOrdered: "2024-01-12",
          dateShipped: "2024-01-14",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Ahmedabad",
          zipCode: 380001,
          streetName: "Sabarmati Ashram Road",
          streetNumber: "33C",
          customer: "Sneha Patel",
          contactLinks: {
              email: "sneha.patel@example.com",
              linkedin: "https://linkedin.com/in/sneha-patel"
          }
      }
  }]
}, {
    sku: "SKU1005",
    imageUrl: "assets/images/products/Barcode-reader-Depositphotos.jpg",
    productName: "Barcode Reader Depositphotos",
    category: "Home Appliances",
    rating: 3.5,
    unitsSold: 100,
    grossPrice: 89.99,
    netPrice: 71.99,
    salesTrendData: TREND_DATA[4],
    orders: [{
        orderId: 5,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-19",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Germany",
            countryFlag: CountryFlag.GERMANY,
            city: "Berlin",
            zipCode: 10004,
            streetName: "Street 4",
            streetNumber: "104A",
            customer: "Customer 4",
            contactLinks: {
                email: "customer4@example.com",
                linkedin: "https://linkedin.com/in/customer4"
            }
        }
    },
    {
      orderId: 1248,
      status: OrderStatus.DELIVERED,
      delivery: {
          dateOrdered: "2024-01-06",
          dateShipped: "2024-01-08",
          dateDelivered: "2024-01-11"
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Goa",
          zipCode: 403001,
          streetName: "Beach Road",
          streetNumber: "44H",
          customer: "Aditi D'Souza",
          contactLinks: {
              email: "aditi.dsouza@example.com",
              linkedin: "https://linkedin.com/in/aditi-dsouza"
          }
      }
  },
  {
      orderId: 1249,
      status: OrderStatus.PACKED,
      delivery: {
          dateOrdered: "2024-01-11",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "India",
          countryFlag: CountryFlag.INDIA,
          city: "Lucknow",
          zipCode: 226001,
          streetName: "Hazratganj Lane",
          streetNumber: "55D",
          customer: "Vikram Tandon",
          contactLinks: {
              email: "vikram.tandon@example.com",
              linkedin: "https://linkedin.com/in/vikram-tandon"
          }
      }
  }]
}, {
    sku: "SKU1006",
    imageUrl: "assets/images/products/Barcode-readers-Depositphotos_10803475_L.jpg",
    productName: "Barcode Readers Depositphotos_10803475_L",
    category: "Clothing",
    rating: 5.0,
    unitsSold: 120,
    grossPrice: 99.99,
    netPrice: 79.99,
    salesTrendData: TREND_DATA[5],
    orders: [{
        orderId: 6,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-20",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "France",
            city: "Paris",
            countryFlag: CountryFlag.FRANCE,
            zipCode: 10005,
            streetName: "Street 5",
            streetNumber: "105A",
            customer: "Customer 5",
            contactLinks: {
                email: "customer5@example.com",
                linkedin: "https://linkedin.com/in/customer5"
            }
        }
    }]
}, {
    sku: "SKU1007",
    imageUrl: "assets/images/products/Black-espresso-maker-Depositphotos_166033946_L.jpg",
    productName: "Black Espresso Maker Depositphotos_166033946_L",
    category: "Gaming",
    rating: 3.5,
    unitsSold: 140,
    grossPrice: 109.99,
    netPrice: 87.99,
    salesTrendData: TREND_DATA[6],
    orders: [{
        orderId: 7,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-21",
            dateShipped: "2024-01-22",
            dateDelivered: "2024-01-23"
        },
        orderInformation: {
            country: "Japan",
            countryFlag: CountryFlag.JAPAN,
            city: "Tokyo",
            zipCode: 10006,
            streetName: "Street 6",
            streetNumber: "106A",
            customer: "Customer 6",
            contactLinks: {
                email: "customer6@example.com",
                linkedin: "https://linkedin.com/in/customer6"
            }
        }
    },
    {
      orderId: 1250,
      status: OrderStatus.IN_TRANSIT,
      delivery: {
          dateOrdered: "2024-01-15",
          dateShipped: "2024-01-17",
          dateDelivered: ""
      },
      orderInformation: {
          country: "United States",
          countryFlag: CountryFlag.US,
          city: "New York",
          zipCode: 10001,
          streetName: "Broadway",
          streetNumber: "123",
          customer: "Michael Johnson",
          contactLinks: {
              email: "michael.johnson@example.com",
              linkedin: "https://linkedin.com/in/michael-johnson"
          }
      }
  },
  {
      orderId: 1251,
      status: OrderStatus.PACKED,
      delivery: {
          dateOrdered: "2024-01-12",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "Canada",
          countryFlag: CountryFlag.CANADA,
          city: "Toronto",
          zipCode: 69923,
          streetName: "Queen Street West",
          streetNumber: "78A",
          customer: "Sophia Wilson",
          contactLinks: {
              email: "sophia.wilson@example.ca",
              linkedin: "https://linkedin.com/in/sophia-wilson"
          }
      }
  },
  {
      orderId: 1252,
      status: OrderStatus.CUSTOMS,
      delivery: {
          dateOrdered: "2024-01-10",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "Germany",
          countryFlag: CountryFlag.GERMANY,
          city: "Berlin",
          zipCode: 10115,
          streetName: "Unter den Linden",
          streetNumber: "45C",
          customer: "Maximilian Müller",
          contactLinks: {
              email: "max.mueller@example.de",
              linkedin: "https://linkedin.com/in/max-mueller"
          }
      }
  },
  {
      orderId: 1253,
      status: OrderStatus.DELIVERED,
      delivery: {
          dateOrdered: "2024-01-08",
          dateShipped: "2024-01-10",
          dateDelivered: "2024-01-12"
      },
      orderInformation: {
          country: "United Kingdom",
          countryFlag: CountryFlag.UK,
          city: "London",
          zipCode: 5372588,
          streetName: "Piccadilly",
          streetNumber: "22D",
          customer: "Olivia Brown",
          contactLinks: {
              email: "olivia.brown@example.co.uk",
              linkedin: "https://linkedin.com/in/olivia-brown"
          }
      }
  }]
}, {
    sku: "SKU1008",
    imageUrl: "assets/images/products/Canon_Depositphotos_1793394_L.jpg",
    productName: "Canon_Depositphotos_1793394_L",
    category: "Audio Devices",
    rating: 5.0,
    unitsSold: 160,
    grossPrice: 119.99,
    netPrice: 95.99,
    salesTrendData: TREND_DATA[7],
    orders: [{
        orderId: 8,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-22",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Brazil",
            city: "São Paulo",
            countryFlag: CountryFlag.BRAZIL,
            zipCode: 10007,
            streetName: "Street 7",
            streetNumber: "107A",
            customer: "Customer 7",
            contactLinks: {
                email: "customer7@example.com",
                linkedin: "https://linkedin.com/in/customer7"
            }
        }
    },
    {
      orderId: 1254,
      status: OrderStatus.IN_TRANSIT,
      delivery: {
          dateOrdered: "2024-01-14",
          dateShipped: "2024-01-16",
          dateDelivered: ""
      },
      orderInformation: {
          country: "Australia",
          countryFlag: CountryFlag.AUSTRALIA,
          city: "Sydney",
          zipCode: 2000,
          streetName: "George Street",
          streetNumber: "99B",
          customer: "Liam Taylor",
          contactLinks: {
              email: "liam.taylor@example.com.au",
              linkedin: "https://linkedin.com/in/liam-taylor"
          }
      }
  },
  {
      orderId: 1255,
      status: OrderStatus.PACKED,
      delivery: {
          dateOrdered: "2024-01-09",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "France",
          countryFlag: CountryFlag.FRANCE,
          city: "Paris",
          zipCode: 75001,
          streetName: "Rue de Rivoli",
          streetNumber: "14E",
          customer: "Emma Dupont",
          contactLinks: {
              email: "emma.dupont@example.fr",
              linkedin: "https://linkedin.com/in/emma-dupont"
          }
      }
  },
  {
      orderId: 1256,
      status: OrderStatus.CUSTOMS,
      delivery: {
          dateOrdered: "2024-01-11",
          dateShipped: "",
          dateDelivered: ""
      },
      orderInformation: {
          country: "Japan",
          countryFlag: CountryFlag.JAPAN,
          city: "Tokyo",
          zipCode: 1000001,
          streetName: "Chuo Dori",
          streetNumber: "8A",
          customer: "Hiroshi Tanaka",
          contactLinks: {
              email: "hiroshi.tanaka@example.jp",
              linkedin: "https://linkedin.com/in/hiroshi-tanaka"
          }
      }
  },
  {
    orderId: 1257,
    status: OrderStatus.DELIVERED,
    delivery: {
        dateOrdered: "2024-01-05",
        dateShipped: "2024-01-07",
        dateDelivered: "2024-01-10"
    },
    orderInformation: {
        country: "Brazil",
        countryFlag: CountryFlag.BRAZIL,
        city: "São Paulo",
        zipCode: 1000000,
        streetName: "Paulista Avenue",
        streetNumber: "333F",
        customer: "Carlos Oliveira",
        contactLinks: {
            email: "carlos.oliveira@example.com.br",
            linkedin: "https://linkedin.com/in/carlos-oliveira"
        }
    }
},
{
    orderId: 1258,
    status: OrderStatus.IN_TRANSIT,
    delivery: {
        dateOrdered: "2024-01-13",
        dateShipped: "2024-01-15",
        dateDelivered: ""
    },
    orderInformation: {
        country: "Italy",
        countryFlag: CountryFlag.ITALY,
        city: "Rome",
        zipCode: 18400,
        streetName: "Via del Corso",
        streetNumber: "25B",
        customer: "Giulia Rossi",
        contactLinks: {
            email: "giulia.rossi@example.it",
            linkedin: "https://linkedin.com/in/giulia-rossi"
        }
    }
},
{
    orderId: 1259,
    status: OrderStatus.PACKED,
    delivery: {
        dateOrdered: "2024-01-06",
        dateShipped: "",
        dateDelivered: ""
    },
    orderInformation: {
        country: "Brazil",
        countryFlag: CountryFlag.BRAZIL,
        city: "São Paulo",
        zipCode: 8001,
        streetName: "Long Street",
        streetNumber: "17D",
        customer: "Thabo Nkosi",
        contactLinks: {
            email: "thabo.nkosi@example.co.za",
            linkedin: "https://linkedin.com/in/thabo-nkosi"
        }
    }
}]
}, {
    sku: "SKU1009",
    imageUrl: "assets/images/products/climbing-boots-2558324_1920.jpg",
    productName: "Climbing Boots 2558324_1920",
    category: "Computers",
    rating: 3.5,
    unitsSold: 180,
    grossPrice: 129.99,
    netPrice: 103.99,
    salesTrendData: TREND_DATA[8],
    orders: [{
        orderId: 9,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-23",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Uruguay",
            countryFlag: CountryFlag.URUGUAY,
            city: "Montevideo",
            zipCode: 10008,
            streetName: "Street 8",
            streetNumber: "108A",
            customer: "Customer 8",
            contactLinks: {
                email: "customer8@example.com",
                linkedin: "https://linkedin.com/in/customer8"
            }
        }
    }]
}, {
    sku: "SKU1010",
    imageUrl: "assets/images/products/Crivit_jacket-2899728_1920-2.jpg",
    productName: "Crivit_Jacket 2899728_1920 2",
    category: "Photography",
    rating: 5.0,
    unitsSold: 200,
    grossPrice: 139.99,
    netPrice: 111.99,
    salesTrendData: TREND_DATA[9],
    orders: [{
        orderId: 10,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-24",
            dateShipped: "2024-01-25",
            dateDelivered: "2024-01-26"
        },
        orderInformation: {
            country: "Bulgaria",
            countryFlag: CountryFlag.BULGARIA,
            city: "Sofia",
            zipCode: 10009,
            streetName: "Street 9",
            streetNumber: "109A",
            customer: "Customer 9",
            contactLinks: {
                email: "customer9@example.com",
                linkedin: "https://linkedin.com/in/customer9"
            }
        }
    }]
}, {
    sku: "SKU1011",
    imageUrl: "assets/images/products/Down-Winter-Jacket-Depositphotos_58152061_L.jpg",
    productName: "Down Winter Jacket Depositphotos_58152061_L",
    category: "Footwear",
    rating: 3.5,
    unitsSold: 220,
    grossPrice: 149.99,
    netPrice: 119.99,
    salesTrendData: TREND_DATA[10],
    orders: [{
        orderId: 11,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-25",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "The Netherlands",
            countryFlag: CountryFlag.NETHERLANDS,
            city: "Amsterdam",
            zipCode: 10010,
            streetName: "Street 10",
            streetNumber: "110A",
            customer: "Customer 10",
            contactLinks: {
                email: "customer10@example.com",
                linkedin: "https://linkedin.com/in/customer10"
            }
        }
    }]
}, {
    sku: "SKU1012",
    imageUrl: "assets/images/products/dyson_hairdryer_Depositphotos_653422044_L.jpg",
    productName: "Dyson_Hairdryer_Depositphotos_653422044_L",
    category: "Electronics",
    rating: 5.0,
    unitsSold: 240,
    grossPrice: 159.99,
    netPrice: 127.99,
    salesTrendData: TREND_DATA[11],
    orders: [{
        orderId: 12,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-26",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Poland",
            countryFlag: CountryFlag.POLAND,
            city: "Warsaw ",
            zipCode: 10011,
            streetName: "Street 11",
            streetNumber: "111A",
            customer: "Customer 11",
            contactLinks: {
                email: "customer11@example.com",
                linkedin: "https://linkedin.com/in/customer11"
            }
        }
    }]
}, {
    sku: "SKU1013",
    imageUrl: "assets/images/products/dyson_hairdryer_Depositphotos_751409932_L.jpg",
    productName: "Dyson_Hairdryer_Depositphotos_751409932_L",
    category: "Accessories",
    rating: 3.5,
    unitsSold: 260,
    grossPrice: 169.99,
    netPrice: 135.99,
    salesTrendData: TREND_DATA[12],
    orders: [{
        orderId: 13,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-27",
            dateShipped: "2024-01-28",
            dateDelivered: "2024-01-29"
        },
        orderInformation: {
            country: "Greece",
            countryFlag: CountryFlag.GREECE,
            city: "Athens",
            zipCode: 10012,
            streetName: "Street 12",
            streetNumber: "112A",
            customer: "Customer 12",
            contactLinks: {
                email: "customer12@example.com",
                linkedin: "https://linkedin.com/in/customer12"
            }
        }
    }]
}, {
    sku: "SKU1014",
    imageUrl: "assets/images/products/dyson_vacuum_appliance-2255_1920.jpg",
    productName: "Dyson_Vacuum_Appliance 2255_1920",
    category: "Office Supplies",
    rating: 5.0,
    unitsSold: 280,
    grossPrice: 179.99,
    netPrice: 143.99,
    salesTrendData: TREND_DATA[13],
    orders: [{
        orderId: 14,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-28",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Belgium",
            countryFlag: CountryFlag.BELGIUM,
            city: "Brussels",
            zipCode: 10013,
            streetName: "Street 13",
            streetNumber: "113A",
            customer: "Customer 13",
            contactLinks: {
                email: "customer13@example.com",
                linkedin: "https://linkedin.com/in/customer13"
            }
        }
    }]
}, {
    sku: "SKU1015",
    imageUrl: "assets/images/products/earphone-2640990_1920.jpg",
    productName: "Earphone 2640990_1920",
    category: "Home Appliances",
    rating: 3.5,
    unitsSold: 300,
    grossPrice: 189.99,
    netPrice: 151.99,
    salesTrendData: TREND_DATA[14],
    orders: [{
        orderId: 15,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-29",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Denmark",
            countryFlag: CountryFlag.DENMARK,
            city: "Copenhagen ",
            zipCode: 10014,
            streetName: "Street 14",
            streetNumber: "114A",
            customer: "Customer 14",
            contactLinks: {
                email: "customer14@example.com",
                linkedin: "https://linkedin.com/in/customer14"
            }
        }
    }]
},
{
    sku: "SKU1016",
    imageUrl: "assets/images/products/EPSON_printer-1516580_1920-2.jpg",
    productName: "Epson_Printer 1516580_1920 2",
    category: "Clothing",
    rating: 5.0,
    unitsSold: 320,
    grossPrice: 199.99,
    netPrice: 159.99,
    salesTrendData: TREND_DATA[9],
    orders: [{
        orderId: 16,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-15",
            dateShipped: "2024-01-17",
            dateDelivered: "2024-01-19"
        },
        orderInformation: {
            country: "Romania",
            countryFlag: CountryFlag.ROMANIA,
            city: "Bucharest",
            zipCode: 10015,
            streetName: "Street 15",
            streetNumber: "115A",
            customer: "Customer 15",
            contactLinks: {
                email: "customer15@example.com",
                linkedin: "https://linkedin.com/in/customer15"
            }
        }
    }]
}, {
    sku: "SKU1017",
    imageUrl: "assets/images/products/Gaggia-coffee-machine-Depositphotos_171399082_L.jpg",
    productName: "Gaggia Coffee Machine Depositphotos_171399082_L",
    category: "Gaming",
    rating: 3.5,
    unitsSold: 340,
    grossPrice: 209.99,
    netPrice: 167.99,
    salesTrendData: TREND_DATA[1],
    orders: [{
        orderId: 17,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-16",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "India",
            countryFlag: CountryFlag.INDIA,
            city: "Bangalore",
            zipCode: 10016,
            streetName: "Street 16",
            streetNumber: "116A",
            customer: "Customer 16",
            contactLinks: {
                email: "customer16@example.com",
                linkedin: "https://linkedin.com/in/customer16"
            }
        }
    }]
}, {
    sku: "SKU1018",
    imageUrl: "assets/images/products/HP_laptop_black-5141242_1920.jpg",
    productName: "Hp_Laptop_Black 5141242_1920",
    category: "Audio Devices",
    rating: 5.0,
    unitsSold: 360,
    grossPrice: 219.99,
    netPrice: 175.99,
    salesTrendData: TREND_DATA[10],
    orders: [{
        orderId: 18,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-17",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Finland",
            countryFlag: CountryFlag.FINLAND,
            city: "Helsinki",
            zipCode: 10017,
            streetName: "Street 17",
            streetNumber: "117A",
            customer: "Customer 17",
            contactLinks: {
                email: "customer17@example.com",
                linkedin: "https://linkedin.com/in/customer17"
            }
        }
    }]
}, {
    sku: "SKU1019",
    imageUrl: "assets/images/products/iPad-Pro-Depositphotos_241726176_L.jpg",
    productName: "Ipad Pro Depositphotos_241726176_L",
    category: "Computers",
    rating: 3.5,
    unitsSold: 380,
    grossPrice: 229.99,
    netPrice: 183.99,
    salesTrendData: TREND_DATA[7],
    orders: [{
        orderId: 19,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-18",
            dateShipped: "2024-01-20",
            dateDelivered: "2024-01-22"
        },
        orderInformation: {
            country: "China",
            countryFlag: CountryFlag.CHINA,
            city: "Beijing",
            zipCode: 10018,
            streetName: "Street 18",
            streetNumber: "118A",
            customer: "Customer 18",
            contactLinks: {
                email: "customer18@example.com",
                linkedin: "https://linkedin.com/in/customer18"
            }
        }
    }]
}, {
    sku: "SKU1020",
    imageUrl: "assets/images/products/iPhone_X_Depositphotos_184416460_L.jpg",
    productName: "Iphone_X_Depositphotos_184416460_L",
    category: "Photography",
    rating: 5.0,
    unitsSold: 400,
    grossPrice: 239.99,
    netPrice: 191.99,
    salesTrendData: TREND_DATA[3],
    orders: [{
        orderId: 20,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-19",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Italy",
            countryFlag: CountryFlag.ITALY,
            city: "Rome",
            zipCode: 10019,
            streetName: "Street 19",
            streetNumber: "119A",
            customer: "Customer 19",
            contactLinks: {
                email: "customer19@example.com",
                linkedin: "https://linkedin.com/in/customer19"
            }
        }
    }]
}, {
    sku: "SKU1021",
    imageUrl: "assets/images/products/JBL_speaker-5800162_1920-2.jpg",
    productName: "Jbl_Speaker 5800162_1920 2",
    category: "Footwear",
    rating: 3.5,
    unitsSold: 420,
    grossPrice: 249.99,
    netPrice: 199.99,
    salesTrendData: TREND_DATA[2],
    orders: [{
        orderId: 21,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-20",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 10020,
            streetName: "Street 20",
            streetNumber: "120A",
            customer: "Customer 20",
            contactLinks: {
                email: "customer20@example.com",
                linkedin: "https://linkedin.com/in/customer20"
            }
        }
    }]
}, {
    sku: "SKU1022",
    imageUrl: "assets/images/products/Kitchen-Multicooker-Depositphotos_35751187_L.jpg",
    productName: "Kitchen Multicooker Depositphotos_35751187_L",
    category: "Electronics",
    rating: 5.0,
    unitsSold: 440,
    grossPrice: 259.99,
    netPrice: 207.99,
    salesTrendData: TREND_DATA[2],
    orders: [{
        orderId: 22,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-21",
            dateShipped: "2024-01-23",
            dateDelivered: "2024-01-25"
        },
        orderInformation: {
            country: "Romania",
            countryFlag: CountryFlag.ROMANIA,
            city: "Bucharest",
            zipCode: 10021,
            streetName: "Street 21",
            streetNumber: "121A",
            customer: "Customer 21",
            contactLinks: {
                email: "customer21@example.com",
                linkedin: "https://linkedin.com/in/customer21"
            }
        }
    }]
}, {
    sku: "SKU1023",
    imageUrl: "assets/images/products/laptop_Depositphotos_2996767_L.jpg",
    productName: "Laptop_Depositphotos_2996767_L",
    category: "Accessories",
    rating: 3.5,
    unitsSold: 460,
    grossPrice: 269.99,
    netPrice: 215.99,
    salesTrendData: TREND_DATA[0],
    orders: [{
        orderId: 23,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-22",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United Kingdom",
            countryFlag: CountryFlag.UK,
            city: "London",
            zipCode: 10022,
            streetName: "Street 22",
            streetNumber: "122A",
            customer: "Customer 22",
            contactLinks: {
                email: "customer22@example.com",
                linkedin: "https://linkedin.com/in/customer22"
            }
        }
    }]
}, {
    sku: "SKU1024",
    imageUrl: "assets/images/products/laptop_Depositphotos_6271974_L.jpg",
    productName: "Laptop_Depositphotos_6271974_L",
    category: "Office Supplies",
    rating: 5.0,
    unitsSold: 480,
    grossPrice: 279.99,
    netPrice: 223.99,
    salesTrendData: TREND_DATA[14],
    orders: [{
        orderId: 24,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-23",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Bulgaria",
            countryFlag: CountryFlag.BULGARIA,
            city: "Sofia",
            zipCode: 10023,
            streetName: "Street 23",
            streetNumber: "123A",
            customer: "Customer 23",
            contactLinks: {
                email: "customer23@example.com",
                linkedin: "https://linkedin.com/in/customer23"
            }
        }
    }]
}, {
    sku: "SKU1025",
    imageUrl: "assets/images/products/Macbook_Depositphotos_205657722_L-2.jpg",
    productName: "Macbook_Depositphotos_205657722_L 2",
    category: "Home Appliances",
    rating: 3.5,
    unitsSold: 500,
    grossPrice: 289.99,
    netPrice: 231.99,
    salesTrendData: TREND_DATA[1],
    orders: [{
        orderId: 25,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-24",
            dateShipped: "2024-01-26",
            dateDelivered: "2024-01-28"
        },
        orderInformation: {
            country: "Brazil",
            city: "São Paulo",
            countryFlag: CountryFlag.BRAZIL,
            zipCode: 10024,
            streetName: "Street 24",
            streetNumber: "124A",
            customer: "Customer 24",
            contactLinks: {
                email: "customer24@example.com",
                linkedin: "https://linkedin.com/in/customer24"
            }
        }
    }]
}, {
    sku: "SKU1026",
    imageUrl: "assets/images/products/Markers-pack-Depositphotos_113646792_L.jpg",
    productName: "Markers Pack Depositphotos_113646792_L",
    category: "Clothing",
    rating: 5.0,
    unitsSold: 520,
    grossPrice: 299.99,
    netPrice: 239.99,
    salesTrendData: TREND_DATA[10],
    orders: [{
        orderId: 26,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-25",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Brazil",
            city: "São Paulo",
            countryFlag: CountryFlag.BRAZIL,
            zipCode: 10025,
            streetName: "Street 25",
            streetNumber: "125A",
            customer: "Customer 25",
            contactLinks: {
                email: "customer25@example.com",
                linkedin: "https://linkedin.com/in/customer25"
            }
        }
    }]
}, {
    sku: "SKU1027",
    imageUrl: "assets/images/products/Merrel-shoes-584850_1920.jpg",
    productName: "Merrel Shoes 584850_1920",
    category: "Gaming",
    rating: 3.5,
    unitsSold: 540,
    grossPrice: 309.99,
    netPrice: 247.99,
    salesTrendData: TREND_DATA[4],
    orders: [{
        orderId: 27,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-26",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Belgium",
            countryFlag: CountryFlag.BELGIUM,
            city: "Brussels",
            zipCode: 10026,
            streetName: "Street 26",
            streetNumber: "126A",
            customer: "Customer 26",
            contactLinks: {
                email: "customer26@example.com",
                linkedin: "https://linkedin.com/in/customer26"
            }
        }
    }]
}, {
    sku: "SKU1028",
    imageUrl: "assets/images/products/Microwave-Depositphotos_26880443_L.jpg",
    productName: "Microwave Depositphotos_26880443_L",
    category: "Audio Devices",
    rating: 5.0,
    unitsSold: 560,
    grossPrice: 319.99,
    netPrice: 255.99,
    salesTrendData: TREND_DATA[0],
    orders: [{
        orderId: 28,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-27",
            dateShipped: "2024-01-29",
            dateDelivered: "2024-01-18"
        },
        orderInformation: {
            country: "Denmark",
            countryFlag: CountryFlag.DENMARK,
            city: "Copenhagen ",
            zipCode: 10027,
            streetName: "Street 27",
            streetNumber: "127A",
            customer: "Customer 27",
            contactLinks: {
                email: "customer27@example.com",
                linkedin: "https://linkedin.com/in/customer27"
            }
        }
    }]
}, {
    sku: "SKU1029",
    imageUrl: "assets/images/products/Monitor-curved-27inch-Depositphotos_282647566_L.jpg",
    productName: "Monitor Curved 27Inch Depositphotos_282647566_L",
    category: "Computers",
    rating: 3.5,
    unitsSold: 580,
    grossPrice: 329.99,
    netPrice: 263.99,
    salesTrendData: TREND_DATA[11],
    orders: [{
        orderId: 29,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-28",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United States",
            countryFlag: CountryFlag.US,
            city: "New York",
            zipCode: 10028,
            streetName: "Street 28",
            streetNumber: "128A",
            customer: "Customer 28",
            contactLinks: {
                email: "customer28@example.com",
                linkedin: "https://linkedin.com/in/customer28"
            }
        }
    }]
}, {
    sku: "SKU1030",
    imageUrl: "assets/images/products/Nike_Depositphotos_146077297_L.jpg",
    productName: "Nike_Depositphotos_146077297_L",
    category: "Photography",
    rating: 5.0,
    unitsSold: 600,
    grossPrice: 339.99,
    netPrice: 271.99,
    salesTrendData: TREND_DATA[13],
    orders: [{
        orderId: 30,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-29",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 10029,
            streetName: "Street 29",
            streetNumber: "129A",
            customer: "Customer 29",
            contactLinks: {
                email: "customer29@example.com",
                linkedin: "https://linkedin.com/in/customer29"
            }
        }
    }]
}, {
    sku: "SKU1031",
    imageUrl: "assets/images/products/Nike_footwear-5408643_1920.jpg",
    productName: "Nike_Footwear 5408643_1920",
    category: "Footwear",
    rating: 3.5,
    unitsSold: 620,
    grossPrice: 349.99,
    netPrice: 279.99,
    salesTrendData: TREND_DATA[2],
    orders: [{
        orderId: 31,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-15",
            dateShipped: "2024-01-18",
            dateDelivered: "2024-01-21"
        },
        orderInformation: {
            country: "Bulgaria",
            countryFlag: CountryFlag.BULGARIA,
            city: "Sofia",
            zipCode: 10030,
            streetName: "Street 30",
            streetNumber: "130A",
            customer: "Customer 30",
            contactLinks: {
                email: "customer30@example.com",
                linkedin: "https://linkedin.com/in/customer30"
            }
        }
    }]
}, {
    sku: "SKU1032",
    imageUrl: "assets/images/products/Nike_sneakers-5408646_1920.jpg",
    productName: "Nike_Sneakers 5408646_1920",
    category: "Electronics",
    rating: 5.0,
    unitsSold: 640,
    grossPrice: 359.99,
    netPrice: 287.99,
    salesTrendData: TREND_DATA[6],
    orders: [{
        orderId: 32,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-16",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United States",
            countryFlag: CountryFlag.US,
            city: "New York",
            zipCode: 10031,
            streetName: "Street 31",
            streetNumber: "131A",
            customer: "Customer 31",
            contactLinks: {
                email: "customer31@example.com",
                linkedin: "https://linkedin.com/in/customer31"
            }
        }
    }]
}, {
    sku: "SKU1033",
    imageUrl: "assets/images/products/PC-Mouse-wired-Depositphotos_12621359_L.jpg",
    productName: "Pc Mouse Wired Depositphotos_12621359_L",
    category: "Accessories",
    rating: 3.5,
    unitsSold: 660,
    grossPrice: 369.99,
    netPrice: 295.99,
    salesTrendData: TREND_DATA[14],
    orders: [{
        orderId: 33,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-17",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Germany",
            countryFlag: CountryFlag.GERMANY,
            city: "Berlin",
            zipCode: 10032,
            streetName: "Street 32",
            streetNumber: "132A",
            customer: "Customer 32",
            contactLinks: {
                email: "customer32@example.com",
                linkedin: "https://linkedin.com/in/customer32"
            }
        }
    }]
}, {
    sku: "SKU1034",
    imageUrl: "assets/images/products/Pencil-Depositphotos_293936972_L.jpg",
    productName: "Pencil Depositphotos_293936972_L",
    category: "Office Supplies",
    rating: 5.0,
    unitsSold: 680,
    grossPrice: 379.99,
    netPrice: 303.99,
    salesTrendData: TREND_DATA[1],
    orders: [{
        orderId: 34,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-18",
            dateShipped: "2024-01-21",
            dateDelivered: "2024-01-24"
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 10033,
            streetName: "Street 33",
            streetNumber: "133A",
            customer: "Customer 33",
            contactLinks: {
                email: "customer33@example.com",
                linkedin: "https://linkedin.com/in/customer33"
            }
        }
    }]
}, {
    sku: "SKU1035",
    imageUrl: "assets/images/products/Post-it-notes-Depositphotos_2275156_L.jpg",
    productName: "Post It Notes Depositphotos_2275156_L",
    category: "Home Appliances",
    rating: 3.5,
    unitsSold: 700,
    grossPrice: 389.99,
    netPrice: 311.99,
    salesTrendData: TREND_DATA[14],
    orders: [{
        orderId: 35,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-19",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United Kingdom",
            countryFlag: CountryFlag.UK,
            city: "London",
            zipCode: 10034,
            streetName: "Street 34",
            streetNumber: "134A",
            customer: "Customer 34",
            contactLinks: {
                email: "customer34@example.com",
                linkedin: "https://linkedin.com/in/customer34"
            }
        }
    }]
}, {
    sku: "SKU1036",
    imageUrl: "assets/images/products/Print-paper-Depositphotos_191385040_L.jpg",
    productName: "Print Paper Depositphotos_191385040_L",
    category: "Clothing",
    rating: 5.0,
    unitsSold: 720,
    grossPrice: 399.99,
    netPrice: 319.99,
    salesTrendData: TREND_DATA[9],
    orders: [{
        orderId: 36,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-20",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Greece",
            countryFlag: CountryFlag.GREECE,
            city: "Athens",
            zipCode: 10035,
            streetName: "Street 35",
            streetNumber: "135A",
            customer: "Customer 35",
            contactLinks: {
                email: "customer35@example.com",
                linkedin: "https://linkedin.com/in/customer35"
            }
        }
    }]
}, {
    sku: "SKU1037",
    imageUrl: "assets/images/products/Samsung-Tablet_black-4766996_1920.jpg",
    productName: "Samsung Tablet_Black 4766996_1920",
    category: "Gaming",
    rating: 3.5,
    unitsSold: 740,
    grossPrice: 409.99,
    netPrice: 327.99,
    salesTrendData: TREND_DATA[5],
    orders: [{
        orderId: 37,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-21",
            dateShipped: "2024-01-24",
            dateDelivered: "2024-01-27"
        },
        orderInformation: {
            country: "Belgium",
            countryFlag: CountryFlag.BELGIUM,
            city: "Brussels",
            zipCode: 10036,
            streetName: "Street 36",
            streetNumber: "136A",
            customer: "Customer 36",
            contactLinks: {
                email: "customer36@example.com",
                linkedin: "https://linkedin.com/in/customer36"
            }
        }
    }]
}, {
    sku: "SKU1038",
    imageUrl: "assets/images/products/Scanner-Depositphotos_7372129_XL.jpg",
    productName: "Scanner Depositphotos_7372129_Xl",
    category: "Audio Devices",
    rating: 5.0,
    unitsSold: 760,
    grossPrice: 419.99,
    netPrice: 335.99,
    salesTrendData: TREND_DATA[2],
    orders: [{
        orderId: 38,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-22",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Germany",
            countryFlag: CountryFlag.GERMANY,
            city: "Berlin",
            zipCode: 10037,
            streetName: "Street 37",
            streetNumber: "137A",
            customer: "Customer 37",
            contactLinks: {
                email: "customer37@example.com",
                linkedin: "https://linkedin.com/in/customer37"
            }
        }
    }]
}, {
    sku: "SKU1039",
    imageUrl: "assets/images/products/Sony_Alpha7_camera-275007_1920.jpg",
    productName: "Sony_Alpha7_Camera 275007_1920",
    category: "Computers",
    rating: 3.5,
    unitsSold: 780,
    grossPrice: 429.99,
    netPrice: 343.99,
    salesTrendData: TREND_DATA[10],
    orders: [{
        orderId: 39,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-23",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Poland",
            countryFlag: CountryFlag.POLAND,
            city: "Warsaw ",
            zipCode: 10038,
            streetName: "Street 38",
            streetNumber: "138A",
            customer: "Customer 38",
            contactLinks: {
                email: "customer38@example.com",
                linkedin: "https://linkedin.com/in/customer38"
            }
        }
    }]
}, {
    sku: "SKU1040",
    imageUrl: "assets/images/products/Sony_Alpha7_camera-4833557_1920-2.jpg",
    productName: "Sony_Alpha7_Camera 4833557_1920 2",
    category: "Photography",
    rating: 5.0,
    unitsSold: 800,
    grossPrice: 439.99,
    netPrice: 351.99,
    salesTrendData: TREND_DATA[8],
    orders: [{
        orderId: 40,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-24",
            dateShipped: "2024-01-27",
            dateDelivered: "2024-01-17"
        },
        orderInformation: {
            country: "The Netherlands",
            countryFlag: CountryFlag.NETHERLANDS,
            city: "Amsterdam",
            zipCode: 10039,
            streetName: "Street 39",
            streetNumber: "139A",
            customer: "Customer 39",
            contactLinks: {
                email: "customer39@example.com",
                linkedin: "https://linkedin.com/in/customer39"
            }
        }
    }]
}, {
    sku: "SKU1041",
    imageUrl: "assets/images/products/Sony_lens-274986_1920.jpg",
    productName: "Sony_Lens 274986_1920",
    category: "Footwear",
    rating: 3.5,
    unitsSold: 820,
    grossPrice: 449.99,
    netPrice: 359.99,
    salesTrendData: TREND_DATA[12],
    orders: [{
        orderId: 41,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-25",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "The Netherlands",
            countryFlag: CountryFlag.NETHERLANDS,
            city: "Amsterdam",
            zipCode: 10040,
            streetName: "Street 40",
            streetNumber: "140A",
            customer: "Customer 40",
            contactLinks: {
                email: "customer40@example.com",
                linkedin: "https://linkedin.com/in/customer40"
            }
        }
    }]
}, {
    sku: "SKU1042",
    imageUrl: "assets/images/products/Speaker_Depositphotos_252611752_L.jpg",
    productName: "Speaker_Depositphotos_252611752_L",
    category: "Electronics",
    rating: 5.0,
    unitsSold: 840,
    grossPrice: 459.99,
    netPrice: 367.99,
    salesTrendData: TREND_DATA[4],
    orders: [{
        orderId: 42,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-26",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Greece",
            countryFlag: CountryFlag.GREECE,
            city: "Athens",
            zipCode: 10041,
            streetName: "Street 41",
            streetNumber: "141A",
            customer: "Customer 41",
            contactLinks: {
                email: "customer41@example.com",
                linkedin: "https://linkedin.com/in/customer41"
            }
        }
    }]
}, {
    sku: "SKU1043",
    imageUrl: "assets/images/products/T-shirt-blue-Depositphotos_163437494_L.jpg",
    productName: "T Shirt Blue Depositphotos_163437494_L",
    category: "Accessories",
    rating: 3.5,
    unitsSold: 860,
    grossPrice: 469.99,
    netPrice: 375.99,
    salesTrendData: TREND_DATA[10],
    orders: [{
        orderId: 43,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-27",
            dateShipped: "2024-01-16",
            dateDelivered: "2024-01-20"
        },
        orderInformation: {
            country: "Australia",
            countryFlag: CountryFlag.AUSTRALIA,
            city: "Sydney",
            zipCode: 10042,
            streetName: "Street 42",
            streetNumber: "142A",
            customer: "Customer 42",
            contactLinks: {
                email: "customer42@example.com",
                linkedin: "https://linkedin.com/in/customer42"
            }
        }
    }]
}, {
    sku: "SKU1044",
    imageUrl: "assets/images/products/T-Shirt-gray-Depositphotos_138950992_L.jpg",
    productName: "T Shirt Gray Depositphotos_138950992_L",
    category: "Office Supplies",
    rating: 5.0,
    unitsSold: 880,
    grossPrice: 479.99,
    netPrice: 383.99,
    salesTrendData: TREND_DATA[13],
    orders: [{
        orderId: 44,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-28",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 10043,
            streetName: "Street 43",
            streetNumber: "143A",
            customer: "Customer 43",
            contactLinks: {
                email: "customer43@example.com",
                linkedin: "https://linkedin.com/in/customer43"
            }
        }
    }]
}, {
    sku: "SKU1045",
    imageUrl: "assets/images/products/T-Shirt-red-Depositphotos_138951004_L.jpg",
    productName: "T Shirt Red Depositphotos_138951004_L",
    category: "Home Appliances",
    rating: 3.5,
    unitsSold: 900,
    grossPrice: 489.99,
    netPrice: 391.99,
    salesTrendData: TREND_DATA[11],
    orders: [{
        orderId: 45,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-29",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Germany",
            countryFlag: CountryFlag.GERMANY,
            city: "Berlin",
            zipCode: 10044,
            streetName: "Street 44",
            streetNumber: "144A",
            customer: "Customer 44",
            contactLinks: {
                email: "customer44@example.com",
                linkedin: "https://linkedin.com/in/customer44"
            }
        }
    }]
}, {
    sku: "SKU1046",
    imageUrl: "assets/images/products/vacuum-cleaner-8114145-2.jpg",
    productName: "Vacuum Cleaner 8114145 2",
    category: "Clothing",
    rating: 5.0,
    unitsSold: 920,
    grossPrice: 499.99,
    netPrice: 399.99,
    salesTrendData: TREND_DATA[7],
    orders: [{
        orderId: 46,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-15",
            dateShipped: "2024-01-19",
            dateDelivered: "2024-01-23"
        },
        orderInformation: {
            country: "Canada",
            countryFlag: CountryFlag.CANADA,
            city: "Toronto",
            zipCode: 10045,
            streetName: "Street 45",
            streetNumber: "145A",
            customer: "Customer 45",
            contactLinks: {
                email: "customer45@example.com",
                linkedin: "https://linkedin.com/in/customer45"
            }
        }
    }]
}, {
    sku: "SKU1047",
    imageUrl: "assets/images/products/video-game-console-2202582_1920.jpg",
    productName: "Video Game Console 2202582_1920",
    category: "Gaming",
    rating: 3.5,
    unitsSold: 940,
    grossPrice: 509.99,
    netPrice: 407.99,
    salesTrendData: TREND_DATA[5],
    orders: [{
        orderId: 47,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-16",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "India",
            countryFlag: CountryFlag.INDIA,
            city: "Bangalore",
            zipCode: 10046,
            streetName: "Street 46",
            streetNumber: "146A",
            customer: "Customer 46",
            contactLinks: {
                email: "customer46@example.com",
                linkedin: "https://linkedin.com/in/customer46"
            }
        }
    }]
}, {
    sku: "SKU1048",
    imageUrl: "assets/images/products/Winter-Jacket-Depositphotos_89349846_L.jpg",
    productName: "Winter Jacket Depositphotos_89349846_L",
    category: "Audio Devices",
    rating: 5.0,
    unitsSold: 960,
    grossPrice: 519.99,
    netPrice: 415.99,
    salesTrendData: TREND_DATA[9],
    orders: [{
        orderId: 48,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-17",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "Japan",
            countryFlag: CountryFlag.JAPAN,
            city: "Tokyo",
            zipCode: 10047,
            streetName: "Street 47",
            streetNumber: "147A",
            customer: "Customer 47",
            contactLinks: {
                email: "customer47@example.com",
                linkedin: "https://linkedin.com/in/customer47"
            }
        }
    }]
}, {
    sku: "SKU1049",
    imageUrl: "assets/images/products/xbox-1200296_1920.jpg",
    productName: "Xbox 1200296_1920",
    category: "Computers",
    rating: 3.5,
    unitsSold: 980,
    grossPrice: 529.99,
    netPrice: 423.99,
    salesTrendData: TREND_DATA[2],
    orders: [{
        orderId: 49,
        status: OrderStatus.DELIVERED,
        delivery: {
            dateOrdered: "2024-01-18",
            dateShipped: "2024-01-22",
            dateDelivered: "2024-01-26"
        },
        orderInformation: {
            country: "Australia",
            countryFlag: CountryFlag.AUSTRALIA,
            city: "Sydney",
            zipCode: 10048,
            streetName: "Street 48",
            streetNumber: "148A",
            customer: "Customer 48",
            contactLinks: {
                email: "customer48@example.com",
                linkedin: "https://linkedin.com/in/customer48"
            }
        }
    }]
}, {
    sku: "SKU1050",
    imageUrl: "assets/images/products/Xbox_controller_gamepad-6646645_1920-2.jpg",
    productName: "Xbox_Controller_Gamepad 6646645_1920 2",
    category: "Photography",
    rating: 5.0,
    unitsSold: 1000,
    grossPrice: 539.99,
    netPrice: 431.99,
    salesTrendData: TREND_DATA[10],
    orders: [{
        orderId: 50,
        status: OrderStatus.PACKED,
        delivery: {
            dateOrdered: "2024-01-19",
            dateShipped: "",
            dateDelivered: ""
        },
        orderInformation: {
            country: "United Kingdom",
            countryFlag: CountryFlag.UK,
            city: "London",
            zipCode: 10049,
            streetName: "Street 49",
            streetNumber: "149A",
            customer: "Customer 49",
            contactLinks: {
                email: "customer49@example.com",
                linkedin: "https://linkedin.com/in/customer49"
            }
        }
    }]
}];
