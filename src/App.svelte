<script>
  import { Router, Route } from 'svelte-routing'
  import { darkTheme } from './store'
  import Customers from './components/pages/Customers.svelte'
  import Orders from './components/pages/Orders.svelte'
  import Dashboard from './components/pages/Dashboard.svelte'
  import Sidebar from './components/layout/Sidebar.svelte'
  import TopNav from './components/layout/TopNav.svelte'
  import Products from './components/pages/Products.svelte'

  export let url
</script>

<div
  id="dashboard"
  class={$darkTheme === true && 'dark'}
>
  <Router {url}>
    <div class="container">
      <TopNav />
      <Sidebar />
      <div class="main-container">
        <Route
          path="/"
          component={Dashboard}
        />
        <Route
          path="/customers"
          component={Customers}
        />
        <Route
          path="/orders"
          component={Orders}
        />
        <Route
          path="/products"
          component={Products}
        />
      </div>
    </div>
  </Router>
</div>

<style>
  .container {
    display: grid;
    padding: 0 30px 30px;
    gap: 25px;
    grid-template-columns: 196px auto;
  }

  .main-container {
    width: 100%;
    max-width: 100%;
    padding-top: 80px;
  }

  @media (max-width: 1200px) {
    .container {
      grid-template-columns: 98px auto;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
</style>
