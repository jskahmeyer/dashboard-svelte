<script>
  import { OrdersStore } from '../../store'
  import { getAllOrders, deleteOrder } from '../../firebase'
  import AddProductForm from '../forms/AddProductForm.svelte'
  import Bar from '../../charts/Bar.svelte'
  import Card from '../Card.svelte'
  import Donut from '../../charts/Donut.svelte'
  import Line from '../../charts/Line.svelte'
  import Modal from '../Modal.svelte'
  import RecentUpdates from '../RecentUpdates.svelte'
  import Table from '../Table.svelte'

  let showModal = false
  let promise = getAllOrders()
</script>

<div class="container">
  <main>
    <div class="insights">
      <div class="sales">
        <Card fullHeight={true}>
          <div class="stats-card">
            <div class="top">
              <span class="material-icons-sharp">analytics</span>
              <div>
                <h3>Traffic Acquisition</h3>
              </div>
            </div>
            <div class="middle">
              <div class="progress responsive">
                <Donut />
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
        </Card>
      </div>
      <div class="expenses">
        <Card fullHeight={true}>
          <div class="stats-card">
            <div class="top">
              <span class="material-icons-sharp">stacked_line_chart</span>
              <div>
                <h3>Total Daily Users</h3>
              </div>
            </div>
            <div class="middle">
              <div class="progress responsive">
                <Line />
              </div>
            </div>
            <small class="text-muted">Last 7 Days</small>
          </div>
        </Card>
      </div>
      <div class="income">
        <Card fullHeight={true}>
          <div class="stats-card">
            <div class="top">
              <span class="material-icons-sharp">bar_chart</span>
              <div>
                <h3>Monthly Users</h3>
              </div>
            </div>
            <div class="middle">
              <div class="progress responsive">
                <Bar />
              </div>
            </div>
            <small class="text-muted">Last 6 Months</small>
          </div>
        </Card>
      </div>
    </div>
  </main>
  <div class="right">
    <RecentUpdates />
    <!-- TODO: Extract into component, make dynamic with data -->
    <div class="sales-analytics">
      <h2 class="accent-line">Sales Analytics</h2>
      <div class="item online">
        <div class="icon">
          <span class="material-icons-sharp">shopping_cart</span>
        </div>
        <div class="right">
          <div class="info">
            <h3>ONLINE ORDERS</h3>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <h5 class="success">+39%</h5>
          <h3>3849</h3>
        </div>
      </div>
      <div class="item offline">
        <div class="icon">
          <span class="material-icons-sharp">local_mall</span>
        </div>
        <div class="right">
          <div class="info">
            <h3>OFFLINE ORDERS</h3>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <h5 class="danger">-17%</h5>
          <h3>1100</h3>
        </div>
      </div>
      <div class="item customers">
        <div class="icon">
          <span class="material-icons-sharp">local_mall</span>
        </div>
        <div class="right">
          <div class="info">
            <h3>NEW CUSTOMERS</h3>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <h5 class="success">+25%</h5>
          <h3>849</h3>
        </div>
      </div>
      <button
        on:click={() => (showModal = true)}
        class="item add-product"
      >
        <div>
          <span class="material-icons-sharp">add</span>
          <h3>Add Product</h3>
        </div>
      </button>
    </div>
  </div>
  <div class="recent-orders">
    <h2 class="accent-line">Recent Orders</h2>
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
  <Modal bind:showModal>
    <h2 class="add-new">Add New Product</h2>
    <AddProductForm />
  </Modal>
</div>

<style>
  h2.add-new {
    color: var(--dark);
    margin-bottom: 20px;
  }
  .container {
    display: grid;
    grid-template-columns: auto 322px;
    grid-template-rows: auto auto;
    gap: 25px;
  }

  main {
    grid-column: 1;
    grid-row: 1;
  }

  .insights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    max-width: 100%;
  }

  .insights span.material-icons-sharp {
    padding: 7px;
    border-radius: 50%;
    color: var(--white);
    font-size: 28px;
  }

  .insights div.sales span {
    background: var(--primary);
  }

  .insights div.expenses span {
    background: var(--danger);
  }

  .insights div.income span {
    background: var(--success);
  }

  .middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .insights h3 {
    margin: 14px 0 8px;
    font-size: 20px;
  }

  .insights .progress {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    overflow: auto;
  }

  :global(.progress.responsive canvas) {
    width: 100% !important;
    height: auto !important;
  }

  .stats-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .insights small {
    margin-top: 22px;
    display: block;
  }

  .recent-orders {
    margin-top: 28px;
    grid-column: 1;
    grid-row: 2;
  }

  .recent-orders h2 {
    margin-bottom: 12px;
  }

  .right {
    margin-top: 20px;
    grid-column: 2;
    grid-row: 1 / 3;
  }

  .sales-analytics {
    margin-top: 28px;
  }
  .sales-analytics h2 {
    margin-bottom: 12px;
  }

  .sales-analytics .item {
    background: var(--white);
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;
    padding: 20px var(--card-padding);
    border-radius: var(--border-radius-3);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
  }

  .sales-analytics .item:hover {
    box-shadow: none;
  }

  .sales-analytics .item .right {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0;
    width: 100%;
  }

  .sales-analytics .item .icon {
    padding: 8px;
    color: var(--white);
    border-radius: 50%;
    display: flex;
    background: var(--primary);
  }

  .item.offline .icon {
    background-color: var(--danger);
  }
  .item.customers .icon {
    background-color: var(--success);
  }

  .add-product {
    background: transparent;
    border: 2px dashed var(--primary);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .add-product div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .add-product h3 {
    font-weight: 600;
  }

  @media (max-width: 1400px) {
    .insights {
      grid-template-columns: 1fr;
      gap: 22px;
      grid-column: 1;
      grid-row: 1;
    }

    .progress {
      padding: 20px 0;
    }

    :global(.progress canvas) {
      max-height: 100%;
      max-width: 500px;
    }

    .recent-orders {
      grid-column: 1 / 3;
      grid-row: 2;
    }

    .right {
      grid-column: 2;
      grid-row: 1;
    }
  }

  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      padding: 0 20px 0;
    }
    .insights {
      width: 100%;
    }
    .recent-orders {
      margin: 42px 0 0;
      width: 100%;
    }

    .right {
      width: 100%;
      margin: 0 auto 56px;
    }

    .right .profile .info {
      display: none;
    }

    :global(.progress.responsive canvas) {
      width: 100% !important;
      height: auto !important;
    }
  }
</style>
