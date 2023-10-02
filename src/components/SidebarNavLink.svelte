<script>
  export let active
  export let disabled
</script>

<div class="link {active && 'active'} {disabled && 'disabled'}">
  <slot />
</div>

<style>
  .link {
    display: flex;
    color: var(--info-dark);
    margin-left: 28px;
    gap: 14px;
    align-items: center;
    position: relative;
    height: 52px;
    transition: all 300ms ease;
  }

  .link:not(.disabled):hover {
    color: var(--primary);
  }

  .link :global(span) {
    font-size: 22px;
    transition: all 300ms ease;
  }

  .link.active {
    background: var(--light);
    color: var(--primary);
    margin-left: 0;
  }

  .link.active:before {
    content: '';
    width: 6px;
    height: 100%;
    background: var(--primary);
  }

  :global(.link.active span) {
    color: var(--primary);
    margin-left: 7px;
  }

  :global(.link:not(.disabled):hover span) {
    margin-left: 14px;
  }

  @media (max-width: 1400px) {
    .link {
      width: 78px;
    }
  }

  @media (max-width: 768px) {
    .link {
      width: 100%;
      height: 46px;
    }
  }
</style>
