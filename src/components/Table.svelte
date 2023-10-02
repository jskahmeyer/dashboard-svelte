<script>
  export let data
  export let deleteItem

  // Sorting
  $: sortedData = data
  const tableHeaders = Object.keys(data[0])
  let selectedHeader
  let ascendingOrder = false

  $: sortIcon = ascendingOrder ? 'keyboard_arrow_down' : 'keyboard_arrow_up'

  const sortByNumber = (colHeader) => {
    sortedData = sortedData.sort((obj1, obj2) => {
      return ascendingOrder
        ? Number(obj1[colHeader]) - Number(obj2[colHeader])
        : Number(obj2[colHeader]) - Number(obj1[colHeader])
    })
    selectedHeader = colHeader
  }

  const sortByString = (colHeader) => {
    sortedData = sortedData.sort((obj1, obj2) => {
      if (obj1[colHeader] < obj2[colHeader]) {
        return -1
      } else if (obj1[colHeader] > obj2[colHeader]) {
        return 1
      }
      return 0
    })
    if (!ascendingOrder) {
      sortedData = sortedData.reverse()
    }
    selectedHeader = colHeader
  }

  // TODO: Add filtering, pagination
</script>

<table class="table-desktop">
  <thead>
    <tr>
      {#each tableHeaders as header}
        <th
          class:highlighted={selectedHeader === header}
          on:click={() =>
            header.includes('price') ||
            header.includes('total') ||
            header.includes('items')
              ? sortByNumber(header)
              : sortByString(header)}
        >
          {header.replace('_', ' ')}

          {#if header === selectedHeader}
            <button
              class="sort-icon"
              on:click={() => (ascendingOrder = !ascendingOrder)}
            >
              <span class="material-icons-sharp">{sortIcon}</span>
            </button>
          {/if}
        </th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each sortedData as datum}
      <tr>
        {#each tableHeaders as header}
          <td data-value={datum[header]}><span>{datum[header]}</span></td>
        {/each}
        <td>
          <button on:click={() => deleteItem(datum.id)}>
            <span class="material-icons-sharp delete">delete</span>
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<div class="table-mobile">
  {#each sortedData as datum}
    <table>
      <tbody>
        {#each tableHeaders as header}
          <tr>
            <th>{header.replace('_', ' ')}</th>
            <td data-value={datum[header]}>
              <span>{datum[header]}</span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
</div>

<style>
  button {
    background-color: transparent;
  }

  button .delete {
    color: var(--danger-dark);
  }

  .table-mobile {
    display: none;
  }

  .table-mobile table {
    padding: 10px 0;
    border-bottom: 1px solid var(--light);
  }

  .table-mobile table:last-child {
    border: none;
  }

  .table-mobile th {
    text-align: left;
    padding-right: 10px;
    width: 100px;
  }

  .table-mobile td {
    border: none;
    height: 20px;
  }

  th {
    position: relative;
    text-transform: capitalize;
  }

  .sort-icon {
    color: var(--dark);
    background: transparent;
    position: absolute;
    top: -3px;
  }

  :global(td[data-value='completed']),
  td[data-value='in stock'] {
    color: var(--success-dark);
  }

  :global(td[data-value='processing']) {
    color: var(--warning-dark);
  }

  :global(td[data-value='shipped']) {
    color: var(--primary-dark);
  }

  :global(td[data-value='cancelled']),
  td[data-value='out of stock'] {
    color: var(--danger-dark);
  }

  td[data-value='completed'] span,
  td[data-value='processing'] span,
  td[data-value='cancelled'] span,
  td[data-value='out of stock'] span,
  td[data-value='in stock'] span,
  td[data-value='shipped'] span {
    border-radius: 4px;
    display: inline-block;
    padding: 4px;
  }

  :global(td[data-value='completed']) span,
  td[data-value='in stock'] span {
    background-color: var(--success-light);
  }

  :global(td[data-value='processing']) span {
    background-color: var(--warning-light);
  }

  :global(td[data-value='cancelled']) span,
  td[data-value='out of stock'] span {
    background-color: var(--danger-light);
  }

  :global(td[data-value='shipped']) span {
    background-color: var(--primary-light);
  }

  @media (max-width: 768px) {
    .table-desktop {
      display: none;
    }
    .table-mobile {
      display: block;
    }
  }
</style>
