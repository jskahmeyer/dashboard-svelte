<script>
  import { addProduct } from '../../firebase'

  let product_name
  let price
  let category
  let stock
  let success

  async function handleSubmit() {
    const newProduct = {
      product_name,
      price,
      category,
      stock,
    }

    try {
      addProduct(newProduct)
      success = true
    } catch {
      console.error('Error adding new order')
    }

    product_name = ''
    price = ''
    category = ''
    stock = ''

    setTimeout(() => {
      success = false
    }, 3000)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    placeholder="Product Name"
    bind:value={product_name}
  />
  <select
    class="styled-select"
    bind:value={category}
    name="category"
    id="category"
  >
    <option value="">Category</option>
    <option value="accessories">Accessories</option>
    <option value="clothing">Clothing</option>
    <option value="electronics">Electronics</option>
    <option value="toys">Toys</option>
  </select>
  <select
    class="styled-select"
    bind:value={stock}
    name="stock"
    id="stock"
  >
    <option value="">Stock</option>
    <option value="in stock">In Stock</option>
    <option value="out of stock">Out of Stock</option>
  </select>
  <input
    bind:value={price}
    type="number"
    step="0.01"
    placeholder="Price"
  />
  <div class="bottom">
    <button type="submit">Submit</button>
    {#if success}
      <span class="success">Product Created!</span>
    {/if}
  </div>
</form>

<style>
  .bottom {
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
  }

  span.success {
    color: var(--success);
    position: absolute;
    bottom: 10px;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    transition: all 300ms ease;
  }

  input {
    color: var(--dark);
    display: block;
    width: 100%;
    height: 20px;
    padding: 20px 10px;
    border: 1px solid var(--light);
    border-radius: var(--border-radius-2);
    margin-bottom: 10px;
    background-color: var(--background);
  }

  input::placeholder {
    color: var(--dark-variant);
    font-size: 14px;
  }

  select {
    appearance: none;
    /* Safari */
    -webkit-appearance: none;
  }

  option {
    background-color: var(--background);
    color: var(--dark);
  }

  button {
    background-color: var(--danger);
    color: var(--white);
    padding: 12px 20px;
    border-radius: var(--border-radius-2);
  }

  .styled-select {
    width: 100%;
    background-color: var(--background);
    color: var(--dark);
    border: 1px solid var(--light);
    border-radius: var(--border-radius-2);
    margin-bottom: 10px;
    color: var(--dark-variant);
    font-size: 14px;
    padding: 10px;
    cursor: pointer;
  }
</style>
