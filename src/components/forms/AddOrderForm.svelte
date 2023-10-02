<script>
  import { addOrder } from '../../firebase'

  let name
  let email
  let order_total
  let items
  let status
  let success

  async function handleSubmit() {
    const newOrder = {
      name,
      email,
      order_total,
      items,
      status,
    }

    try {
      addOrder(newOrder)
      success = true
    } catch {
      console.error('Error adding new order')
    }

    name = ''
    email = ''
    order_total = ''
    items = ''
    status = ''

    setTimeout(() => {
      success = false
    }, 3000)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    placeholder="Customer Name"
    bind:value={name}
  />
  <input
    type="email"
    placeholder="Customer Email"
    bind:value={email}
  />
  <input
    type="number"
    step="0.01"
    placeholder="Order Total"
    bind:value={order_total}
  />
  <input
    type="number"
    step="1"
    placeholder="Items"
    bind:value={items}
  />
  <select
    class="styled-select"
    bind:value={status}
    name="category"
    id="category"
  >
    <option value="">Order Status</option>
    <option value="processing">Processing</option>
    <option value="shipped">Shipped</option>
    <option value="completed">Completed</option>
    <option value="cancelled">Cancelled</option>
  </select>
  <div class="bottom">
    <button type="submit">Submit</button>
    {#if success}
      <span class="success">Order Created!</span>
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
