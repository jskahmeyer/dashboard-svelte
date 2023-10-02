import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig'
import { collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore'
import { CustomersStore, ProductsStore, OrdersStore } from './store'
import { seedDatabase } from './seedDatabase'

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)

// seedDatabase()

export async function getAllCustomers() {
    const querySnapshot = await getDocs(collection(db, 'customers'))
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    CustomersStore.set(data)
  }

  export async function addCustomer(newCustomer){
    try {
        await addDoc(collection(db, 'customers'), newCustomer)
        const updatedQuerySnapshot = await getDocs(collection(db, 'customers'))
        const updatedData = updatedQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        CustomersStore.set(updatedData)
    } catch (e) {
        console.error('Error adding document: ', e)
      }
}

  export async function deleteCustomer(itemId) {
    try {
      await deleteDoc(doc(db, 'customers', itemId))
      const updatedQuerySnapshot = await getDocs(collection(db, 'customers'))
      const updatedData = updatedQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      CustomersStore.set(updatedData)
    } catch (error) {
      console.error('Error deleting item:', error)
    }
}
export async function getAllProducts() {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    ProductsStore.set(data)
  }

  export async function addProduct(newProduct){
    try {
        await addDoc(collection(db, 'products'), newProduct)
        const updatedQuerySnapshot = await getDocs(collection(db, 'products'))
        const updatedData = updatedQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        ProductsStore.set(updatedData)
    } catch (e) {
        console.error('Error adding document: ', e)
      }
}

  export async function deleteProduct(itemId) {
    try {
      await deleteDoc(doc(db, 'products', itemId))
      const updatedQuerySnapshot = await getDocs(collection(db, 'products'))
      const updatedProductData = updatedQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      ProductsStore.set(updatedProductData)
    } catch (error) {
      console.error('Error deleting item:', error)
    }
}

export async function getAllOrders() {
    const querySnapshot = await getDocs(collection(db, 'orders'))
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    OrdersStore.set(data)
  }

export async function addOrder(newOrder){
    try {
        await addDoc(collection(db, 'orders'), newOrder)
        const updatedQuerySnapshot = await getDocs(collection(db, 'orders'))
        const updatedData = updatedQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        OrdersStore.set(updatedData)
        return success = true
    } catch (e) {
        console.error('Error adding document: ', e)
      }
}

  export async function deleteOrder(itemId) {
    try {
      await deleteDoc(doc(db, 'orders', itemId))
      const updatedQuerySnapshot = await getDocs(collection(db, 'orders'))
      const updatedData = updatedQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      OrdersStore.set(updatedData)
    } catch (error) {
      console.error('Error deleting item:', error)
    }
}