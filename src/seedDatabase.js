import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase'

async function seedCollection(collectionName, data) {
    const collectionRef = collection(db, collectionName);
  
    for (const item of data) {
      try {
        await addDoc(collectionRef, item);
        console.log(`Document added with ID: ${item.id}`);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  }
    
const customersData = [
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@gmail.com",
    "date_joined": "2023-09-22",
    "id": "aL9KsP2zFh"
},
{
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@yahoo.com",
    "date_joined": "2023-09-21",
    "id": "pV7qHzA1iD"
},
{
    "first_name": "Michael",
    "last_name": "Johnson",
    "email": "michael.johnson@hotmail.com",
    "date_joined": "2023-09-20",
    "id": "iZ1oWfR4jP"
},
{
    "first_name": "Emily",
    "last_name": "Brown",
    "email": "emily.brown@outlook.com",
    "date_joined": "2023-09-19",
    "id": "gV4eNtM5pK"
},
{
    "first_name": "William",
    "last_name": "Wilson",
    "email": "william.wilson@aol.com",
    "date_joined": "2023-09-18",
    "id": "oX3fDrVzPm"
},
{
    "first_name": "Sarah",
    "last_name": "Taylor",
    "email": "sarah.taylor@gmail.com",
    "date_joined": "2023-09-17",
    "id": "zR5kSmGtOp"
},
{
    "first_name": "David",
    "last_name": "Davis",
    "email": "david.davis@yahoo.com",
    "date_joined": "2023-09-16",
    "id": "jP6gXwXtLs"
},
{
    "first_name": "Olivia",
    "last_name": "Johnson",
    "email": "olivia.johnson@hotmail.com",
    "date_joined": "2023-09-15",
    "id": "rV2sPtTbNm"
},
{
    "first_name": "James",
    "last_name": "Smith",
    "email": "james.smith@outlook.com",
    "date_joined": "2023-09-14",
    "id": "wZ9dYwYxKr"
},
{
    "first_name": "Emma",
    "last_name": "Brown",
    "email": "emma.brown@aol.com",
    "date_joined": "2023-09-13",
    "id": "dG8hRpRvUj"
},
{
    "first_name": "Liam",
    "last_name": "Wilson",
    "email": "liam.wilson@gmail.com",
    "date_joined": "2023-09-12",
    "id": "bNt6ZpFhU7"
},
{
    "first_name": "Sophia",
    "last_name": "Anderson",
    "email": "sophia.anderson@yahoo.com",
    "date_joined": "2023-09-11",
    "id": "a9P8TmPvGy"
},
{
    "first_name": "Benjamin",
    "last_name": "Lee",
    "email": "benjamin.lee@hotmail.com",
    "date_joined": "2023-09-10",
    "id": "qY8jNzB6fT"
},
{
    "first_name": "Ava",
    "last_name": "Martinez",
    "email": "ava.martinez@outlook.com",
    "date_joined": "2023-09-09",
    "id": "hP6gXwXtLs"
},
{
    "first_name": "Mason",
    "last_name": "Wilson",
    "email": "mason.wilson@aol.com",
    "date_joined": "2023-09-08",
    "id": "sP7qHzZiDx"
},
{
    "first_name": "Harper",
    "last_name": "Johnson",
    "email": "harper.johnson@gmail.com",
    "date_joined": "2023-09-07",
    "id": "eQ3kUxMqXt"
},
{
    "first_name": "Elijah",
    "last_name": "Davis",
    "email": "elijah.davis@yahoo.com",
    "date_joined": "2023-09-06",
    "id": "kVr3zBzD2E"
},
{
    "first_name": "Amelia",
    "last_name": "Taylor",
    "email": "amelia.taylor@hotmail.com",
    "date_joined": "2023-09-05",
    "id": "sP7qHzZiDx"
}
]

const ordersData =
[
{
    "id": "aL9KsP2zFh",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "order_total": 75.99,
    "items": 3,
    "status": "processing"
},
{
    "id": "pV7qHzA1iD",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "order_total": 149.95,
    "items": 5,
    "status": "shipped"
},
{
    "id": "iZ1oWfR4jP",
    "name": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "order_total": 42.51,
    "items": 2,
    "status": "processing"
},
{
    "id": "gV4eNtM5pK",
    "name": "Emily Brown",
    "email": "emily.brown@example.com",
    "order_total": 29.99,
    "items": 1,
    "status": "completed"
},
{
    "id": "oX3fDrVzPm",
    "name": "William Wilson",
    "email": "william.wilson@example.com",
    "order_total": 89.99,
    "items": 4,
    "status": "shipped"
},
{
    "id": "zR5kSmGtOp",
    "name": "Sarah Taylor",
    "email": "sarah.taylor@example.com",
    "order_total": 115.88,
    "items": 6,
    "status": "cancelled"
},
{
    "id": "jP6gXwXtLs",
    "name": "David Davis",
    "email": "david.davis@example.com",
    "order_total": 59.95,
    "items": 3,
    "status": "shipped"
},
{
    "id": "rV2sPtTbNm",
    "name": "Olivia Johnson",
    "email": "olivia.johnson@example.com",
    "order_total": 79.99,
    "items": 4,
    "status": "processing"
},
{
    "id": "wZ9dYwYxKr",
    "name": "James Smith",
    "email": "james.smith@example.com",
    "order_total": 34.99,
    "items": 1,
    "status": "completed"
},
{
    "id": "dG8hRpRvUj",
    "name": "Emma Brown",
    "email": "emma.brown@example.com",
    "order_total": 199.99,
    "items": 7,
    "status": "processing"
},
{
    "id": "bNt6ZpFhU7",
    "name": "Liam Wilson",
    "email": "liam.wilson@example.com",
    "order_total": 55.78,
    "items": 3,
    "status": "shipped"
},
{
    "id": "a9P8TmPvGy",
    "name": "Sophia Anderson",
    "email": "sophia.anderson@example.com",
    "order_total": 149.95,
    "items": 5,
    "status": "processing"
},
{
    "id": "qY8jNzB6fT",
    "name": "Benjamin Lee",
    "email": "benjamin.lee@example.com",
    "order_total": 69.99,
    "items": 2,
    "status": "shipped"
},
{
    "id": "hP6gXwXtLs",
    "name": "Ava Martinez",
    "email": "ava.martinez@example.com",
    "order_total": 45.54,
    "items": 3,
    "status": "completed"
},
{
    "id": "sP7qHzZiDx",
    "name": "Mason Wilson",
    "email": "mason.wilson@example.com",
    "order_total": 29.99,
    "items": 1,
    "status": "shipped"
},
{
    "id": "eQ3kUxMqXt",
    "name": "Harper Johnson",
    "email": "harper.johnson@example.com",
    "order_total": 84.99,
    "items": 4,
    "status": "processing"
},
{
    "id": "kVr3zBzD2E",
    "name": "Elijah Davis",
    "email": "elijah.davis@example.com",
    "order_total": 55.96,
    "items": 3,
    "status": "completed"
},
{
    "id": "sP7qHzZiDx",
    "name": "Amelia Taylor",
    "email": "amelia.taylor@example.com",
    "order_total": 39.95,
    "items": 2,
    "status": "shipped"
},
{
    "id": "iZ1oWfWjPz",
    "name": "Logan Smith",
    "email": "logan.smith@example.com",
    "order_total": 199.99,
    "items": 7,
    "status": "processing"
},
{
    "id": "vB4eNt5pKy",
    "name": "Ella Martin",
    "email": "ella.martin@example.com",
    "order_total": 45.32,
    "items": 3,
    "status": "shipped"
}
]

const productsData = [
{
    "product_name": "Wireless Earbuds",
    "price": 49.99,
    "category": "electronics",
    "stock": "in stock",
    "id": "RnS1BwBwCmRdF3hNwTcLnZ1"
},
{
    "product_name": "Smartphone Case",
    "price": 19.99,
    "category": "accessories",
    "stock": "in stock",
    "id": "Jc4gRfFz3h9a7C6m1w6M"
},
{
    "product_name": "Laptop Backpack",
    "price": 39.99,
    "category": "accessories",
    "stock": "in stock",
    "id": "tGvdgEq2tC9i5w2n7oPcK"
},
{
    "product_name": "LED Smart TV",
    "price": 599.99,
    "category": "electronics",
    "stock": "in stock",
    "id": "1dX0Yjz3r8aT1n9g6eIz"
},
{
    "product_name": "Cotton T-Shirt",
    "price": 14.99,
    "category": "clothing",
    "stock": "in stock",
    "id": "a9P8TmPvGy1c9v2uP7jS"
},
{
    "product_name": "Toy Robot",
    "price": 29.99,
    "category": "toys",
    "stock": "out of stock",
    "id": "kVr3zBzD2E3j4a5nT4oR"
},
{
    "product_name": "Bluetooth Speaker",
    "price": 79.99,
    "category": "electronics",
    "stock": "in stock",
    "id": "Mj7dKcPm8H1a2b3c"
},
{
    "product_name": "Leather Wallet",
    "price": 24.99,
    "category": "accessories",
    "stock": "in stock",
    "id": "bNt6ZpFhU71c9d8e9f0"
},
{
    "product_name": "Hooded Sweatshirt",
    "price": 34.99,
    "category": "clothing",
    "stock": "in stock",
    "id": "TgF0LwYyB41d2"
},
{
    "product_name": "Remote Control Car",
    "price": 39.99,
    "category": "toys",
    "stock": "in stock",
    "id": "sP7qHzZiDx1a2"
},
{
    "product_name": "Bluetooth Headphones",
    "price": 69.99,
    "category": "electronics",
    "stock": "in stock",
    "id": "vB4eNt5pKy1b2"
},
{
    "product_name": "Canvas Tote Bag",
    "price": 19.99,
    "category": "accessories",
    "stock": "out of stock",
    "id": "uX3fDrVzPm9i3"
},
{
    "product_name": "Denim Jeans",
    "price": 49.99,
    "category": "clothing",
    "stock": "in stock",
    "id": "qY8jNz6fBt3j4"
},
{
    "product_name": "Board Game",
    "price": 29.99,
    "category": "toys",
    "stock": "in stock",
    "id": "iZ1oWfWjPz7i"
},
{
    "product_name": "Smartwatch",
    "price": 129.99,
    "category": "electronics",
    "stock": "out of stock",
    "id": "rV2sPtTbNm2i"
},
{
    "product_name": "Sunglasses",
    "price": 19.99,
    "category": "accessories",
    "stock": "in stock",
    "id": "hP6gXwXtLs3i"
},
{
    "product_name": "Winter Coat",
    "price": 79.99,
    "category": "clothing",
    "stock": "in stock",
    "id": "eQ3kUxMqXt8i3"
},
{
    "product_name": "Dollhouse",
    "price": 59.99,
    "category": "toys",
    "stock": "in stock",
    "id": "wZ9dYwYxKr7i4"
},
{
    "product_name": "Smart Home Camera",
    "price": 89.99,
    "category": "electronics",
    "stock": "in stock",
    "id": "zR5kSmGtOp6i5"
},
{
    "product_name": "Leather Belt",
    "price": 29.99,
    "category": "accessories",
    "stock": "in stock",
    "id": "dG8hRpRvUj9i6"
}
]

export const seedDatabase = () => {
    seedCollection('customers', customersData);
    seedCollection('orders', ordersData);
    seedCollection('products', productsData);
}