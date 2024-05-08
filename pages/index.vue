<template>
<div class = "grid grid-cols-4 gap-4 mx-auto mt-44">
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
  <div class = "col-span-3  track-content py-2 px-3">
      <UTabs :items="items" class="w-full bg-white" :ui="{ list: { background: '',tab: { base : 'justify-start',padding: 'px-1',
      background:''} } }" >
        <template #item="{ item }">
          <div>

            <div class = "grid grid-cols-7 justify-between">
              <div class="col-span-2 flex">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="13" fill="#E8173C"/>
                  <path d="M16.2266 21.9202L27.9999 28.7335L39.6932 21.9601" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M27.9999 40.8134V28.7201" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M40.8008 31.9601C40.8142 31.8934 40.8141 31.8401 40.8141 31.7735V24.2268C40.8141 22.3868 39.4942 20.1468 37.8808 19.2534L30.7608 15.3067C29.2408 14.4534 26.7608 14.4534 25.2408 15.3067L18.1208 19.2534C16.5075 20.1468 15.1875 22.3868 15.1875 24.2268V31.7735C15.1875 33.6135 16.5075 35.8534 18.1208 36.7468L25.2408 40.6935C26.7608 41.5468 29.2408 41.5468 30.7608 40.6935L33.2008 39.3468C33.0408 39.1601 32.8941 38.9601 32.7741 38.7468" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M32.4005 33.8575C32.2037 34.3804 32.0582 34.9624 32.0127 35.613C31.8072 38.5533 34.0211 41.1014 36.9597 41.3068C39.9044 41.5127 42.4513 39.2973 42.6568 36.357C42.8623 33.4167 40.6484 30.8686 37.7098 30.6632C36.6178 30.5869 35.5762 30.8472 34.6902 31.3528" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M34.7035 31.3286L35.9943 28.9288" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M34.7036 31.3284L36.5249 32.5361" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="flex-col ml-2">
                  <p class = "font-mulish font-semibold text-16 leading-24 flex items-center text-black">LB0070715012432422</p>
                  <p class = "font-mulish font-medium text-14 leading-20 flex items-center text-red-500">Expired (157 Days)</p>
                </div>
              </div>
              <div class="lg:col-span-5 col-span-7 grid grid-cols-5 gap-2 lg:gap-10">
                <div class="flex items-center justify-between md:col-span-2 col-span-4">
                  <div class="flex items-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_880_12428)">
                      <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#D80027"/>
                      <path d="M14 7.30432L15.5109 11.9543H20.4003L16.4447 14.8282L17.9556 19.4783L14 16.6044L10.0445 19.4783L11.5554 14.8282L7.59985 11.9543H12.4891L14 7.30432Z" fill="#FFDA44"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_880_12428">
                      <rect width="28" height="28" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <span class="ml-2 font-mulish font-medium md:text-xs xl:text-sm leading-20 flex items-center text-gray-700">Vietnam</span>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3699 20.0501L15.3799 15.3801L15.8199 14.3401C15.8999 14.1801 16.1099 14.0401 16.2899 14.0401L19.3499 14.0401C20.3099 14.0401 21.4499 13.3301 21.8899 12.4701C22.0399 12.1701 22.0399 11.8101 21.8899 11.5101C21.4499 10.6601 20.2999 9.95006 19.3399 9.95006L16.2799 9.95006C16.0999 9.95006 15.8899 9.81006 15.8099 9.65006L13.3599 3.95006C13.0999 3.32006 12.3099 2.81006 11.6299 2.81006L10.3099 2.81006C9.45994 2.81006 9.03994 3.45006 9.37994 4.24006L11.5399 9.25006C11.7099 9.64006 11.4999 9.96006 11.0699 9.96006L9.95994 9.96006L8.15994 9.96006C7.92994 9.96006 7.59994 9.83006 7.43994 9.67006L5.10994 7.35006C4.86994 7.11006 4.39994 7.00006 4.05994 7.11006L2.69994 7.56006C2.10994 7.74006 1.82994 8.41006 2.10994 8.96006L4.10994 11.3401C4.41994 11.7001 4.41994 12.2901 4.10994 12.6501L2.10994 15.0301C1.83994 15.5801 2.10994 16.2501 2.69994 16.4501L4.05994 16.9001C4.38994 17.0101 4.86994 16.9001 5.10994 16.6601L7.43994 14.3401C7.59994 14.1701 7.92994 14.0401 8.15994 14.0401L11.0699 14.0401C11.4999 14.0401 11.6999 14.3501 11.5399 14.7501L9.37994 19.7601C9.03994 20.5501 9.45994 21.1901 10.3099 21.1901L11.6299 21.1901C12.3099 21.1901 13.0999 20.6801 13.3699 20.0501Z" fill="#375DE2"/>
                  </svg>
                  <div class="flex items-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_880_12435)">
                      <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#F0F0F0"/>
                      <path d="M13.3904 13.9999H27.9991C27.9991 12.7362 27.8306 11.5121 27.5168 10.3477H13.3904V13.9999Z" fill="#D80027"/>
                      <path d="M13.3904 6.69565H25.9442C25.0872 5.29718 23.9914 4.06108 22.7138 3.04346H13.3904V6.69565Z" fill="#D80027"/>
                      <path d="M13.9999 28C17.2948 28 20.3232 26.8612 22.7147 24.9565H5.28516C7.67664 26.8612 10.7051 28 13.9999 28Z" fill="#D80027"/>
                      <path d="M2.05472 21.3043H25.9451C26.6331 20.1816 27.1667 18.9544 27.5176 17.6521H0.482178C0.833107 18.9544 1.36669 20.1816 2.05472 21.3043Z" fill="#D80027"/>
                      <path d="M6.48506 2.1863H7.76087L6.57415 3.04845L7.02745 4.44347L5.84079 3.58132L4.65412 4.44347L5.04569 3.23832C4.00083 4.10867 3.08503 5.12838 2.33034 6.26456H2.73913L1.98373 6.81335C1.86605 7.00968 1.75317 7.20912 1.645 7.41152L2.00572 8.52173L1.33273 8.03277C1.16545 8.3872 1.01243 8.74962 0.874891 9.11958L1.2723 10.3428H2.73913L1.55241 11.205L2.00572 12.6L0.819055 11.7379L0.108227 12.2543C0.0370781 12.8262 0 13.4088 0 14H14C14 6.26806 14 5.35653 14 0C11.2343 0 8.65621 0.802266 6.48506 2.1863ZM7.02745 12.6L5.84079 11.7379L4.65412 12.6L5.10743 11.205L3.92071 10.3428H5.38754L5.84079 8.94781L6.29404 10.3428H7.76087L6.57415 11.205L7.02745 12.6ZM6.57415 7.12671L7.02745 8.52173L5.84079 7.65959L4.65412 8.52173L5.10743 7.12671L3.92071 6.26456H5.38754L5.84079 4.86954L6.29404 6.26456H7.76087L6.57415 7.12671ZM12.0492 12.6L10.8625 11.7379L9.67586 12.6L10.1292 11.205L8.94244 10.3428H10.4093L10.8625 8.94781L11.3158 10.3428H12.7826L11.5959 11.205L12.0492 12.6ZM11.5959 7.12671L12.0492 8.52173L10.8625 7.65959L9.67586 8.52173L10.1292 7.12671L8.94244 6.26456H10.4093L10.8625 4.86954L11.3158 6.26456H12.7826L11.5959 7.12671ZM11.5959 3.04845L12.0492 4.44347L10.8625 3.58132L9.67586 4.44347L10.1292 3.04845L8.94244 2.1863H10.4093L10.8625 0.791273L11.3158 2.1863H12.7826L11.5959 3.04845Z" fill="#0052B4"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_880_12435">
                      <rect width="28" height="28" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                    <span class="ml-2 font-mulish font-medium md:text-xs xl:text-sm leading-20 flex items-center text-gray-700">United State</span>

                  </div>
                </div>
                <div class="md:col-span-3 col-span-5 flex items-center">
                  <p class="font-mulish font-medium md:text-xs xl:text-sm flex items-center text-gray-700">
                    2023-12-01 12:26  Hanoi, VN, Arriving at international airport to go abroad</p>
                </div>
              </div>
            </div>
            <div class="border-dashed border-2 border-blue-300 transform rotate-180 mt-3">
            </div>
            <div class="flex-col my-4">
              <p class="font-mulish font-bold text-20 leading-32 flex items-center text-gray-900">Expired</p>
              <div class="grid grid-cols-4 gap-0.5 mt-2">
                <div class = "col-span-1">
                  <svg class = "w-full" height="14" viewBox="0 0 344 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H343.25L339 14H0V0Z" fill="#E8173C"/>
                  </svg>
                </div>
                <div class = "col-span-1">
                  <svg width="w-full" height="14" viewBox="0 0 348 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 0H347.5L343.25 14H0L4.25 0Z" fill="#E8173C"/>
                  </svg>
                </div>
                <div>
                  <svg width="w-full" height="14" viewBox="0 0 352 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 0H351.5L347.25 14H0.5L4.75 0Z" fill="#EAECF3"/>
                  </svg>
                </div>
                <div>
                  <svg width="w-full" height="14" viewBox="0 0 352 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75 0H351.5L347.25 14H0.5L4.75 0Z" fill="#EAECF3"/>
                  </svg>
                </div>
              </div>
              <p class="font-mulish font-medium text-xs leading-20 flex items-center text-blue-500 my-3">
                It's been unusually long since your package was shipped. Please visit the carrier's website LionBay for more info.</p>
            </div>
          </div>
        </template>
      </UTabs>

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

.track-content {
  box-sizing: border-box;
  /* neu/1 */
  background: #FFFFFF;
  /* neu/4 */
  border: 0.5px solid #E5E5E5;
  border-radius: 29px;
}


/* Tab */



</style>