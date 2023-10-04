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
},
{
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@yahoo.com",
    "date_joined": "2023-09-21",
},
{
    "first_name": "Michael",
    "last_name": "Johnson",
    "email": "michael.johnson@hotmail.com",
    "date_joined": "2023-09-20",
},
{
    "first_name": "Emily",
    "last_name": "Brown",
    "email": "emily.brown@outlook.com",
    "date_joined": "2023-09-19",
},
{
    "first_name": "William",
    "last_name": "Wilson",
    "email": "william.wilson@aol.com",
    "date_joined": "2023-09-18",
},
{
    "first_name": "Sarah",
    "last_name": "Taylor",
    "email": "sarah.taylor@gmail.com",
    "date_joined": "2023-09-17",
},
{
    "first_name": "David",
    "last_name": "Davis",
    "email": "david.davis@yahoo.com",
    "date_joined": "2023-09-16",
},
{
    "first_name": "Olivia",
    "last_name": "Johnson",
    "email": "olivia.johnson@hotmail.com",
    "date_joined": "2023-09-15",
},
{
    "first_name": "James",
    "last_name": "Smith",
    "email": "james.smith@outlook.com",
    "date_joined": "2023-09-14",
},
{
    "first_name": "Emma",
    "last_name": "Brown",
    "email": "emma.brown@aol.com",
    "date_joined": "2023-09-13",
},
{
    "first_name": "Liam",
    "last_name": "Wilson",
    "email": "liam.wilson@gmail.com",
    "date_joined": "2023-09-12",
},
{
    "first_name": "Sophia",
    "last_name": "Anderson",
    "email": "sophia.anderson@yahoo.com",
    "date_joined": "2023-09-11",
},
{
    "first_name": "Benjamin",
    "last_name": "Lee",
    "email": "benjamin.lee@hotmail.com",
    "date_joined": "2023-09-10",
},
{
    "first_name": "Ava",
    "last_name": "Martinez",
    "email": "ava.martinez@outlook.com",
    "date_joined": "2023-09-09",
},
{
    "first_name": "Mason",
    "last_name": "Wilson",
    "email": "mason.wilson@aol.com",
    "date_joined": "2023-09-08",
},
{
    "first_name": "Harper",
    "last_name": "Johnson",
    "email": "harper.johnson@gmail.com",
    "date_joined": "2023-09-07",
},
{
    "first_name": "Elijah",
    "last_name": "Davis",
    "email": "elijah.davis@yahoo.com",
    "date_joined": "2023-09-06",
},
{
    "first_name": "Amelia",
    "last_name": "Taylor",
    "email": "amelia.taylor@hotmail.com",
    "date_joined": "2023-09-05",
}
]

const ordersData =
[
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "order_total": 75.99,
    "items": 3,
    "status": "processing"
},
{
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "order_total": 149.95,
    "items": 5,
    "status": "shipped"
},
{
    "name": "Michael Johnson",
    "email": "michael.johnson@example.com",
    "order_total": 42.51,
    "items": 2,
    "status": "processing"
},
{
    "name": "Emily Brown",
    "email": "emily.brown@example.com",
    "order_total": 29.99,
    "items": 1,
    "status": "completed"
},
{
    "name": "William Wilson",
    "email": "william.wilson@example.com",
    "order_total": 89.99,
    "items": 4,
    "status": "shipped"
},
{
    "name": "Sarah Taylor",
    "email": "sarah.taylor@example.com",
    "order_total": 115.88,
    "items": 6,
    "status": "cancelled"
},
{
    "name": "David Davis",
    "email": "david.davis@example.com",
    "order_total": 59.95,
    "items": 3,
    "status": "shipped"
},
{
    "name": "Olivia Johnson",
    "email": "olivia.johnson@example.com",
    "order_total": 79.99,
    "items": 4,
    "status": "processing"
},
{
    "name": "James Smith",
    "email": "james.smith@example.com",
    "order_total": 34.99,
    "items": 1,
    "status": "completed"
},
{
    "name": "Emma Brown",
    "email": "emma.brown@example.com",
    "order_total": 199.99,
    "items": 7,
    "status": "processing"
},
{
    "name": "Liam Wilson",
    "email": "liam.wilson@example.com",
    "order_total": 55.78,
    "items": 3,
    "status": "shipped"
},
{
    "name": "Sophia Anderson",
    "email": "sophia.anderson@example.com",
    "order_total": 149.95,
    "items": 5,
    "status": "processing"
},
{
    "name": "Benjamin Lee",
    "email": "benjamin.lee@example.com",
    "order_total": 69.99,
    "items": 2,
    "status": "shipped"
},
{
    "name": "Ava Martinez",
    "email": "ava.martinez@example.com",
    "order_total": 45.54,
    "items": 3,
    "status": "completed"
},
{
    "name": "Mason Wilson",
    "email": "mason.wilson@example.com",
    "order_total": 29.99,
    "items": 1,
    "status": "shipped"
},
{
    "name": "Harper Johnson",
    "email": "harper.johnson@example.com",
    "order_total": 84.99,
    "items": 4,
    "status": "processing"
},
{
    "name": "Elijah Davis",
    "email": "elijah.davis@example.com",
    "order_total": 55.96,
    "items": 3,
    "status": "completed"
},
{
    "name": "Amelia Taylor",
    "email": "amelia.taylor@example.com",
    "order_total": 39.95,
    "items": 2,
    "status": "shipped"
},
{
    "name": "Logan Smith",
    "email": "logan.smith@example.com",
    "order_total": 199.99,
    "items": 7,
    "status": "processing"
},
{
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
},
{
    "product_name": "Smartphone Case",
    "price": 19.99,
    "category": "accessories",
    "stock": "in stock",
},
{
    "product_name": "Laptop Backpack",
    "price": 39.99,
    "category": "accessories",
    "stock": "in stock",
},
{
    "product_name": "LED Smart TV",
    "price": 599.99,
    "category": "electronics",
    "stock": "in stock",
},
{
    "product_name": "Cotton T-Shirt",
    "price": 14.99,
    "category": "clothing",
    "stock": "in stock",
},
{
    "product_name": "Toy Robot",
    "price": 29.99,
    "category": "toys",
    "stock": "out of stock",
},
{
    "product_name": "Bluetooth Speaker",
    "price": 79.99,
    "category": "electronics",
    "stock": "in stock",
},
{
    "product_name": "Leather Wallet",
    "price": 24.99,
    "category": "accessories",
    "stock": "in stock",
},
{
    "product_name": "Hooded Sweatshirt",
    "price": 34.99,
    "category": "clothing",
    "stock": "in stock",
},
{
    "product_name": "Remote Control Car",
    "price": 39.99,
    "category": "toys",
    "stock": "in stock",
},
{
    "product_name": "Bluetooth Headphones",
    "price": 69.99,
    "category": "electronics",
    "stock": "in stock",
},
{
    "product_name": "Canvas Tote Bag",
    "price": 19.99,
    "category": "accessories",
    "stock": "out of stock",
},
{
    "product_name": "Denim Jeans",
    "price": 49.99,
    "category": "clothing",
    "stock": "in stock",
},
{
    "product_name": "Board Game",
    "price": 29.99,
    "category": "toys",
    "stock": "in stock",
},
{
    "product_name": "Smartwatch",
    "price": 129.99,
    "category": "electronics",
    "stock": "out of stock",
},
{
    "product_name": "Sunglasses",
    "price": 19.99,
    "category": "accessories",
    "stock": "in stock",
},
{
    "product_name": "Winter Coat",
    "price": 79.99,
    "category": "clothing",
    "stock": "in stock",
},
{
    "product_name": "Dollhouse",
    "price": 59.99,
    "category": "toys",
    "stock": "in stock",
},
{
    "product_name": "Smart Home Camera",
    "price": 89.99,
    "category": "electronics",
    "stock": "in stock",
},
{
    "product_name": "Leather Belt",
    "price": 29.99,
    "category": "accessories",
    "stock": "in stock",
}
]

export const seedDatabase = () => {
    seedCollection('customers', customersData);
    seedCollection('orders', ordersData);
    seedCollection('products', productsData);
}