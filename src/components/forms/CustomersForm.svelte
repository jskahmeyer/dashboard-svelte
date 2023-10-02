<script>
  import { nanoid } from 'nanoid'
  import moment from 'moment'
  import { CustomersStore } from '../../store'

  let first_name
  let last_name
  let email

  const handleSubmit = () => {
    const newCustomer = {
      first_name,
      last_name,
      email,
      date_joined: moment(new Date()).format('YYYY-MM-DD'),
      id: nanoid(),
    }

    console.log(newCustomer)

    CustomersStore.update((currentCustomers) => {
      return [...currentCustomers, newCustomer]
    })

    first_name = ''
    last_name = ''
    email = ''
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="name">
    <input
      type="text"
      placeholder="First Name"
      bind:value={first_name}
    />
    <input
      type="text"
      placeholder="Last Name"
      bind:value={last_name}
    />
  </div>
  <input
    type="email"
    placeholder="Email"
    bind:value={email}
  />
  <button type="submit">Submit</button>
</form>

<style>
  input {
    display: block;
    width: 100%;
    height: 20px;
    padding: 20px 10px;
    border: 1px solid var(--light);
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: var(--background);
    color: var(--dark);
  }

  button {
    background-color: var(--danger);
    color: var(--white);
    padding: 12px 20px;
    border-radius: 8px;
  }

  @media (max-width: 1200px) {
    .name {
      display: flex;
      gap: 10px;
    }
    input[type='text'] {
      flex-basis: 50%;
    }
  }
</style>
