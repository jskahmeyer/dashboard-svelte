<script>
  export let fullHeight
</script>

<div class="card {fullHeight === true && 'full-height'}">
  <slot />
</div>

<style>
  .card {
    background: var(--white);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 14px;
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
    max-width: 100%;
  }

  .card:hover {
    box-shadow: none;
  }

  .card.full-height {
    height: 100%;
  }
</style>
