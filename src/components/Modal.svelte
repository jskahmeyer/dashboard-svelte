<script>
  export let showModal

  let dialog

  $: if (dialog && showModal) dialog.showModal()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <button
      autofocus
      on:click={() => dialog.close()}
      ><span class="material-icons-sharp">close</span></button
    >
    <slot />
    <!-- svelte-ignore a11y-autofocus -->
  </div>
</dialog>

<style>
  dialog {
    width: 40%;
    border-radius: var(--card-border-radius);
    border: none;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: var(--white);
    padding: var(--card-padding);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
    max-width: 100%;
    overflow: visible;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }

  dialog > div {
    padding: 20px;
    position: relative;
  }

  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
    position: absolute;
    top: -42px;
    right: -42px;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--danger);
  }

  button span {
    color: var(--white);
  }
</style>
