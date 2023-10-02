<script>
  import { showSidebar, darkTheme } from '../../store'
</script>

<div class="top">
  <button
    id="menu-btn"
    on:click={showSidebar.toggle}
  >
    <span class="material-icons-sharp">menu</span>
  </button>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="theme-toggler"
    on:click={darkTheme.toggle}
  >
    <span class="material-icons-sharp {$darkTheme === false ? 'active' : ''}"
      >light_mode</span
    >
    <span class="material-icons-sharp {$darkTheme === true ? 'active' : ''}"
      >dark_mode</span
    >
  </div>
  <div class="profile">
    <div class="info">
      <p>Hey, <strong>User</strong></p>
      <small class="text-muted">Admin</small>
    </div>
    <div class="profile-photo">
      <img
        src="/images/guest-profile.jpg"
        alt=""
      />
    </div>
  </div>
</div>

<style>
  .top {
    display: flex;
    justify-content: end;
    gap: 28px;
    padding: 20px 12px;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    background: var(--white);
    width: 100%;
    margin: 0;
    z-index: 2;
    box-shadow: 0 14px 14px var(--light);
  }

  .top button {
    display: none;
  }

  .theme-toggler {
    background: var(--light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 22px;
    width: 59px;
    cursor: pointer;
    border-radius: var(--border-radius-1);
  }

  .theme-toggler span {
    font-size: 16px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
  }

  .theme-toggler span.active {
    background-color: var(--primary);
    color: var(--white);
    border-radius: var(--border-radius-1);
  }

  .profile {
    display: flex;
    gap: 28px;
    text-align: right;
  }

  @media (max-width: 768px) {
    .top {
      padding: 20px 32px;
    }
    .top button {
      display: inline-block;
      background: transparent;
      cursor: pointer;
      color: var(--dark);
      position: absolute;
      left: 32px;
    }

    .top button span {
      font-size: 28px;
    }
  }
</style>
