<script>
  import { onDestroy } from 'svelte'
  import Card from './Card.svelte'

  let possibleUpdates = [
    'William Watson received his order!',
    "Emily Johnson's order has shipped!",
    "John Smith's order has been shipped!",
    'Emily Johnson received her order!',
    'Michael Davis placed a new order.',
    "Sarah Miller's order has been cancelled.",
    "Daniel Brown's order is out for delivery.",
    "Olivia Wilson's order has been processed.",
    'William Watson received his order!',
    "Sophia Lee's order is on hold.",
    "James Taylor's order has been delayed.",
    "Ava Hernandez's order has shipped!",
    'Liam Rodriguez received his order!',
    'Mia Martinez placed a new order.',
    "Benjamin Anderson's order has been cancelled.",
    "Charlotte Perez's order is out for delivery.",
    "Elijah Gonzalez's order has been processed.",
    'Amelia Lewis received her order!',
    "Henry Walker's order is on hold.",
    "Elizabeth Hall's order has been delayed.",
    "Alexander White's order has shipped!",
    'Sofia Young received her order!',
    'Matthew Moore placed a new order.',
    "Avery Turner's order has been cancelled.",
    "Grace Adams's order is out for delivery.",
    "Daniel Mitchell's order has been processed.",
    'Ella Harris received her order!',
    "William Clark's order is on hold.",
    "Olivia Baker's order has been delayed.",
    "James Lewis's order has shipped!",
    'Sophia Johnson received her order!',
    'Michael Wilson placed a new order.',
  ]

  let numPossibleProfilePics = 9

  let recentUpdates = [
    {
      message: possibleUpdates[0],
      profilePic: 'profile-1.jpg',
      timestamp: new Date(),
    },
    {
      message: possibleUpdates[1],
      profilePic: 'profile-2.jpg',
      timestamp: new Date().setMinutes(new Date().getMinutes() - 1),
    },
    {
      message: possibleUpdates[2],
      profilePic: 'profile-3.jpg',
      timestamp: new Date().setMinutes(new Date().getMinutes() - 2),
    },
  ]

  const addRandomUpdate = () => {
    const randomIndex = Math.floor(Math.random() * possibleUpdates.length)
    const randomPicIndex = Math.floor(Math.random() * numPossibleProfilePics) + 1
    console.log(randomPicIndex)
    const randomUpdate = {
      message: possibleUpdates[randomIndex],
      profilePic: `profile-${randomPicIndex}.jpg`,
      timestamp: new Date(),
    }
    recentUpdates = [randomUpdate, ...recentUpdates.slice(0, 2)]
  }

  const intervalId = setInterval(addRandomUpdate, 60000)

  onDestroy(() => {
    clearInterval(intervalId)
  })

  function timeSince(timestamp) {
    const now = new Date()
    const seconds = Math.floor((now - timestamp) / 1000)

    if (seconds < 60) {
      return 'Now'
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60)
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600)
      return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else {
      const days = Math.floor(seconds / 86400)
      return `${days} day${days > 1 ? 's' : ''} ago`
    }
  }
</script>

<div class="recent-updates">
  <h2 class="accent-line">Recent Updates</h2>
  <Card fullHeight={false}>
    <div class="updates">
      {#each recentUpdates as update}
        <div class="update">
          <div class="profile-photo">
            <img
              src={`/images/${update.profilePic}`}
              alt=""
            />
          </div>
          <div class="message">
            <p>
              {update.message}
            </p>
            <small class="text-muted">{timeSince(update.timestamp)}</small>
          </div>
        </div>
      {/each}
    </div>
  </Card>
</div>

<style>
  .recent-updates {
    margin-top: 14px;
  }

  .recent-updates h2 {
    margin-bottom: 12px;
  }

  .recent-updates .update {
    display: grid;
    grid-template-columns: 36px auto;
    gap: 14px;
    margin-bottom: 14px;
  }
</style>
