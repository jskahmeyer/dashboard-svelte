<script>
  // @ts-nocheck

  import { Link } from 'svelte-routing'
  import { showSidebar } from '../../store'
  import SidebarNavLink from '../SidebarNavLink.svelte'
  import { tooltip } from '../../utils'
</script>

<div class="sidebar {$showSidebar === true ? 'show' : ''}">
  <div class="top">
    <Link to="/">
      <div class="logo">
        <span class="material-icons-sharp">view_kanban</span>
        <h2>Dashboard</h2>
      </div>
    </Link>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button
      class="close"
      id="btn-close"
      on:click={showSidebar.toggle}
    >
      <span class="material-icons-sharp">close</span>
    </button>
  </div>
  <nav>
    <ul>
      <li>
        <Link
          to="/"
          let:active
        >
          <SidebarNavLink
            {active}
            disabled={false}
          >
            <span class="material-icons-sharp">dashboard</span>
            <h3>Dashboard</h3>
          </SidebarNavLink>
        </Link>
      </li>
      <li>
        <Link
          to="/customers"
          let:active
        >
          <SidebarNavLink
            {active}
            disabled={false}
          >
            <span class="nav-link material-icons-sharp">people</span>
            <h3 class="nav-link">Customers</h3>
          </SidebarNavLink>
        </Link>
      </li>
      <li>
        <Link
          to="/orders"
          let:active
        >
          <SidebarNavLink
            {active}
            disabled={false}
          >
            <span class="material-icons-sharp">receipt_long</span>
            <h3>Orders</h3>
          </SidebarNavLink>
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          let:active
        >
          <SidebarNavLink
            {active}
            disabled={false}
          >
            <span class="material-icons-sharp">inventory</span>
            <h3>Products</h3>
          </SidebarNavLink>
        </Link>
      </li>
      <!-- TODO: Build out remaining pages, swap out tooltips for links -->
      <li use:tooltip={'Coming soon!'}>
        <!-- <Link
          to="/analytics"
          let:active
        > -->
        <SidebarNavLink
          active={false}
          disabled={true}
        >
          <span class="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </SidebarNavLink>
        <!-- </Link> -->
      </li>
      <li use:tooltip={'Coming soon!'}>
        <!-- <Link
          to="/messages"
          let:active
        > -->
        <SidebarNavLink
          active={false}
          disabled={true}
        >
          <span class="material-icons-sharp">mail_outline</span>
          <h3>Messages</h3>
          <span class="message-count">26</span>
        </SidebarNavLink>
        <!-- </Link> -->
      </li>
      <li use:tooltip={'Coming soon!'}>
        <!-- <Link
          to="/reports"
          let:active
        > -->
        <SidebarNavLink
          active={false}
          disabled={true}
        >
          <span class="material-icons-sharp">description</span>
          <h3>Reports</h3>
        </SidebarNavLink>
        <!-- </Link> -->
      </li>
      <li use:tooltip={'Coming soon!'}>
        <!-- <Link
          to="/settings"
          let:active
        > -->
        <SidebarNavLink
          active={false}
          disabled={true}
        >
          <span class="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </SidebarNavLink>
        <!-- </Link> -->
      </li>
      <li use:tooltip={'Coming soon!'}>
        <!-- <Link
          to="/logout"
          let:active
        > -->
        <SidebarNavLink
          active={false}
          disabled={true}
        >
          <span class="material-icons-sharp">logout</span>
          <h3>Log out</h3>
        </SidebarNavLink>
        <!-- </Link> -->
      </li>
    </ul>
  </nav>
</div>

<style>
  .sidebar {
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 42px;
    padding-top: 77px;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  .logo {
    color: var(--dark);
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .logo h2 {
    color: var(--dark);
  }

  nav {
    height: 100%;
    position: relative;
  }

  li:last-of-type {
    position: absolute;
    bottom: 28px;
  }

  #btn-close {
    display: none;
  }

  h3 {
    font-weight: 500;
  }

  span.message-count {
    background: var(--danger);
    color: var(--white);
    padding: 2px 10px;
    font-size: 11px;
    border-radius: var(--border-radius-1);
  }

  @media (max-width: 1400px) {
    .logo h2 {
      display: none;
    }

    h3 {
      display: none;
    }

    li:last-child {
      position: relative;
      margin-top: 25px;
    }
  }

  @media (max-width: 1200px) {
    .logo h2 {
      display: none;
    }
    .logo span {
      font-size: 40px;
    }
  }

  @media (max-width: 768px) {
    nav {
      padding-top: 20px;
    }
    .sidebar {
      position: fixed;
      left: 0;
      background: var(--white);
      width: 250px;
      z-index: 3;
      box-shadow: 14px 42px 56px var(--light);
      height: 100vh;
      padding-right: var(--card-padding);
      display: none;
      padding-top: 0;
    }

    .sidebar.show {
      display: block;
    }

    .logo {
      margin-left: 14px;
    }

    .logo span {
      font-size: 24px;
    }

    h2 {
      display: inline;
    }

    h3 {
      display: inline;
    }

    li:last-of-type {
      position: absolute;
      bottom: 70px;
    }

    #btn-close {
      display: inline-block;
      background-color: transparent;
      color: var(--dark);
    }
  }
</style>
