<script>
import moment from 'moment'
import { isEmail } from '../../utils'
import { addCustomer } from '../../firebase'

  let first_name
  let last_name
  let email
  let success = false

  let firstNameError = '';
  let lastNameError = '';
  let emailError = '';

  const handleSubmit = () => {
    firstNameError = '';
    lastNameError = '';
    emailError = '';

    if (!first_name) {
      firstNameError = 'First Name is required';
    }

    if (!last_name) {
      lastNameError = 'Last Name is required';
    }

    if (!email) {
      emailError = 'Email is required';
    } else if (!isEmail(email)) {
      emailError = 'Invalid email format';
    }

    if (firstNameError || lastNameError || emailError) {
      return;
    }

    const newCustomer = {
      first_name,
      last_name,
      email,
      date_joined: moment(new Date()).format('YYYY-MM-DD'),
    }

    try {
      addCustomer(newCustomer)
      success = true
    } catch {
      console.error('Error adding new customer')
    }

    first_name = ''
    last_name = ''
    email = ''

    setTimeout(() => {
      success = false
    }, 3000)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="name">
    <input
      type="text"
      placeholder="First Name"
      bind:value={first_name}
      class={firstNameError && 'error'}
    />
    <input
      type="text"
      placeholder="Last Name"
      bind:value={last_name}
      class={lastNameError && 'error'}
    />
  </div>
  <input
    type="email"
    placeholder="Email"
    bind:value={email}
    class={emailError && 'error'}
  />
  <button type="submit">Submit</button>
</form>
<div class="form-message-container">
  {#if success}
  <span class="success">Customer Created!</span>
  {/if}
  {#if firstNameError}<span class="error">{firstNameError}</span>{/if}
  {#if lastNameError}<span class="error">{lastNameError}</span>{/if}
  {#if emailError}<span class="error">{emailError}</span>{/if}
</div>

<style>
    button[type="submit"]{
    margin-top: 10px;
  } 

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
