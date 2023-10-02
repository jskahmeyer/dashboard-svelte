import { writable } from 'svelte/store'

function createShowSidebar() {
  const { subscribe, update } = writable(false);

	return {
		subscribe,
    toggle: () => update(s => !s)
	};
}

export const showSidebar = createShowSidebar()

function createDarkTheme() {
  const { subscribe, update } = writable(true)

  return {
    subscribe,
    toggle: () => update(t => !t)
  }
}

export const darkTheme = createDarkTheme()

export const CustomersStore = writable(
[]
)

export const OrdersStore = writable(
  []
)
export const ProductsStore = writable(
  []
)