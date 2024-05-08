<template>
<div class = "grid grid-cols-4 gap-4 container mx-auto">
  <div class = "box-tracking flex-col col-span-1">
      <div class = "box-tracking-title p-4 w-full">
        Tracking code
      </div>
      <div class = "box-tracking-input flex justify-between items-center py-2 px-4 ">
        <p>1.</p>
        <input class = "w-80 input p-1"></input>
        <svg class = "justify-end" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#747592" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#747592" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class = "mt-2 flex justify-between py-2 px-4">
        2.
        <input class = "w-80"></input>
        <svg class = "justify-end" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#747592" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#747592" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class = "grid grid-cols-4 items-center px-4 gap-2 justify-center">
        <div class = "flex col-span-3">
          <button class = "button w-full">Track
            <svg class = "col-span-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.17004 7.43994L12 12.5499L20.77 7.46991" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 21.6099V12.5399" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.61 12.83V9.17C21.61 7.79 20.62 6.11002 19.41 5.44002L14.07 2.48C12.93 1.84 11.07 1.84 9.92999 2.48L4.59 5.44002C3.38 6.11002 2.39001 7.79 2.39001 9.17V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.52C10.5 21.84 11.25 22 12 22C12.75 22 13.5 21.84 14.07 21.52" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 22L22 21" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
          </button>
        </div>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" fill="white"/>
          <rect x="0.5" y="0.5" width="47" height="47" rx="11.5" stroke="#D3D8E5"/>
          <path d="M14 18H34M22 23V28M26 23V28M16 18H32L30.42 32.22C30.3658 32.7094 30.1331 33.1616 29.7663 33.49C29.3994 33.8184 28.9244 34 28.432 34H19.568C19.0756 34 18.6006 33.8184 18.2337 33.49C17.8669 33.1616 17.6342 32.7094 17.58 32.22L16 18ZM19.345 15.147C19.5068 14.804 19.7627 14.514 20.083 14.3109C20.4033 14.1078 20.7747 14 21.154 14H26.846C27.2254 13.9998 27.5971 14.1075 27.9176 14.3106C28.2381 14.5137 28.4942 14.8038 28.656 15.147L30 18H18L19.345 15.147V15.147Z" stroke="#E8173C" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
  </div>
  <div class = "col-span-3">
    <div class = "track-content">
      <UTabs background = "bg-gray-100" :items="items" class="w-full" >
        <template #default="{ item, index, selected }">
          <div class="flex items-center gap-2 relative truncate bg-white">
            {item.label}
          </div>
        </template>
        <template #item="{ item }">
          <UCard @submit.prevent="() => onSubmit(item.key === 'account' ? accountForm : passwordForm)">
            <template #header>
              <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </p>
            </template>

            <div v-if="item.key === 'account'" class="space-y-3">
              <UFormGroup label="Name" name="name">
                <UInput v-model="accountForm.name" />
              </UFormGroup>
              <UFormGroup label="Username" name="username">
                <UInput v-model="accountForm.username" />
              </UFormGroup>
            </div>
            <div v-else-if="item.key === 'password'" class="space-y-3">
              <UFormGroup label="Current Password" name="current" required>
                <UInput v-model="passwordForm.currentPassword" type="password" required />
              </UFormGroup>
              <UFormGroup label="New Password" name="new" required>
                <UInput v-model="passwordForm.newPassword" type="password" required />
              </UFormGroup>
            </div>

            <template #footer>
              <UButton type="submit" color="black">
                Save {{ item.key === 'account' ? 'account' : 'password' }}
              </UButton>
            </template>
          </UCard>
        </template>
      </UTabs>
    </div>
  </div>
</div>
</template>

<script setup>


const items = [{
  key: 'account',
  label: 'All (10)',
  description: 'Make changes to your account here. Click save when you\'re done.'
},
{
  key: 'password',
  label: 'Not found (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'dsf',
  label: 'Info Received (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'fsdf',
  label: 'In-Transit (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'fsd',
  label: 'Pick Up (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'fsd',
  label: 'Out for delivery (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'sfsd',
  label: 'Undelivered (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'fsd',
  label: 'Delivered (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
},
{
  key: 'fsd',
  label: 'Alert (0)',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}
]

const accountForm = reactive({ name: 'Benjamin', username: 'benjamincanac' })
const passwordForm = reactive({ currentPassword: '', newPassword: '' })

function onSubmit (form) {
  console.log('Submitted form:', form)
}
</script>

<style scoped>
.box-tracking{
  
  box-sizing: border-box;
  background: #FFFFFF;
  border: 0.5px solid #E5E5E5;
  border-radius: 32px;
}

/* Tracking code */
.box-tracking-title{
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #17171E;
}




.box-tracking-input {
  background: #F5F5FA;
}

.box-tracking-input .input {
  background: #F5F5FA;
  border: none;
  
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  height: 48px;
  left: 28px;
  right: 88px;
  bottom: 28px;
  background: #FF7614;
  border-radius: 12px;
}




.track-content {
  box-sizing: border-box;

  background: #FFFFFF;
  /* neu/4 */
  border: 0.5px solid #E5E5E5;
  border-radius: 32px;
}



</style>