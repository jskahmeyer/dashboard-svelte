<script>
  import { ProductsStore } from '../../store'
  import AddProductForm from '../forms/AddProductForm.svelte'
  import Card from '../Card.svelte'
  import Table from '../Table.svelte'
  import { deleteProduct } from '../../firebase'
  import { getAllProducts } from '../../firebase'

  let promise = getAllProducts()
</script>

<main>
  <h1 class="accent-line">Products</h1>
  <div class="container">
    <div class="table-container">
      <Card>
        {#await promise}
          <p>Loading products...</p>
        {:then}
          <Table
            data={$ProductsStore}
            deleteItem={deleteProduct}
          />
        {:catch error}
          <p>{error.message}</p>
        {/await}
      </Card>
    </div>
    <div class="form-container">
      <Card>
        <h2>Add New Product</h2>
        <AddProductForm />
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
