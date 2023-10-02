<script>
  import { CustomersStore } from '../../store'
  import CustomersForm from '../forms/CustomersForm.svelte'
  import Card from '../Card.svelte'
  import Table from '../Table.svelte'
  import { getAllCustomers, deleteCustomer } from '../../firebase'

  let promise = getAllCustomers()
</script>

<main>
  <h1 class="accent-line">Customers</h1>
  <div class="container">
    <div class="table-container">
      <Card fullHeight={true}>
        {#await promise}
          <p>Loading customers...</p>
        {:then}
          <Table
            data={$CustomersStore}
            deleteItem={deleteCustomer}
          />
        {:catch error}
          <p>{error.message}</p>
        {/await}
      </Card>
    </div>
    <div class="form-container">
      <Card fullHeight={false}>
        <h2>Add New Customer</h2>
        <CustomersForm />
      </Card>
    </div>
  </div>
</main>

<style>
  main {
    padding-top: 74px;
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
