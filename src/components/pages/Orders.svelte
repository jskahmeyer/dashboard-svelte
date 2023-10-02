<script>
  import { OrdersStore } from '../../store'
  import AddOrderForm from '../forms/AddOrderForm.svelte'
  import Card from '../Card.svelte'
  import Table from '../Table.svelte'
  import { getAllOrders, deleteOrder } from '../../firebase'

  let promise = getAllOrders()
</script>

<main>
  <h1 class="accent-line">Orders</h1>
  <div class="container">
    <div class="table-container">
      <Card>
        {#await promise}
          <p>Loading orders...</p>
        {:then}
          <Table
            data={$OrdersStore}
            deleteItem={deleteOrder}
          />
        {:catch error}
          <p>{error.message}</p>
        {/await}
      </Card>
    </div>
    <div class="form-container">
      <Card>
        <h2>Add New Order</h2>
        <AddOrderForm />
      </Card>
    </div>
  </div>
</main>

<style>
  main {
    padding-top: 5.3rem;
  }

  .container {
    display: flex;
    gap: 30px;
  }
  .table-container {
    flex-basis: 67%;
  }
  .form-container {
    flex-basis: 33%;
  }
  .form-container h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    .container {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 768px) {
    main {
      margin-top: 28px;
      padding: 22px;
    }
  }
</style>
