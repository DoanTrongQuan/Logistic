<template>
  <div class = "max-w-[660px] max-h-[400px] flex flex-col mx-auto justify-center">
    <p class = "flex items-center justify-center text-[32px] leading-[48px] font-bold text-[#375DE2] font-mulish">ALL-IN-ONE PACKAGE TRACKING</p>
    <p class = "flex items-center justify-center text-[16px] leading-[24px] font-medium text-[#747592] font-mulish">Support 2100+ carriers and 190+ airlines worldwide</p>
    <div class = "w-full bg-white max-h-[300px] border pb-4 pt-2 border-[#EAECF3] rounded-[20px] mt-3 ">
      <div class = "h-48 overflow-y-auto px-3">
        <div v-for="(input, index) in inputs" class = "flex items-center">
          <span class = "color-[#757575]">{{ index }}. </span>
          <input 
            class = "w-full p-1 border-none focus:border-none focus:outline-none"
            :ref="el => inputRefs[index] = el"
            :value="input.value"
            @input="event => input.value = event.target.value"
            @keydown="event => handleKeydown(event, index)"
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16748 4.16663L15.8334 15.8325" stroke="#747592" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.16676 15.8325L15.8326 4.16663" stroke="#747592" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
       </div>
      <div class="input-container flex flex-col">

      </div>  
      </div>

      <div class = "flex justify-end px-12">
        <button class="flex flex-row items-center justify-center text-white
         p-[12px_14px] gap-3.5 w-[144px] max-h-[48px] bg-[#FF7614] rounded-[12px] z-10 order-3" onclick="trackNumbers()">
          Tracks
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.67001 7.43994L12.5 12.5499L21.27 7.46991" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 21.6099V12.5399" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.11 12.83V9.17C22.11 7.79 21.12 6.11002 19.91 5.44002L14.57 2.48C13.43 1.84 11.57 1.84 10.43 2.48L5.09 5.44002C3.88 6.11002 2.89001 7.79 2.89001 9.17V14.83C2.89001 16.21 3.88 17.89 5.09 18.56L10.43 21.52C11 21.84 11.75 22 12.5 22C13.25 22 14 21.84 14.57 21.52" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.7 21.4C21.4673 21.4 22.9 19.9673 22.9 18.2C22.9 16.4327 21.4673 15 19.7 15C17.9327 15 16.5 16.4327 16.5 18.2C16.5 19.9673 17.9327 21.4 19.7 21.4Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.5 22L22.5 21" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
      </div>
    </div>
    <div>
      <!-- <div class = "flex items-center p-[6px_10px_6px_13px] gap-2 absolute w-[199px] h-[32px] left-[calc(50%-199px/2-230.5px)] top-[640px] bg-[#EAECF3] rounded-full">

      </div> -->
    </div>
  </div>
</template>

<script setup>


definePageMeta({
  layout:'custom-track', 
})
const inputs = ref([{ value: '' }]);
const inputRefs = ref([]);

const handleKeydown = (event, index) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const newIndex = index + 1;
    inputs.value.splice(newIndex, 0, { value: '' });
    nextTick(() => {
      inputRefs.value[newIndex].focus();
    });
  } else if (event.key === 'Backspace' && inputs.value[index].value === '') {
    if (index > 0) {
      event.preventDefault();
      inputs.value.splice(index, 1);
      nextTick(() => {
        inputRefs.value[index - 1].focus();
      });
    }
  }
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  textarea {
    width: 100%;
    padding: 0 15px;
    border-radius: 4px;
    resize: none; 
  }
  .track-button:hover {
    background-color: #e66f00;
  }
  .track-icon {
    margin-left: 8px;
    display: inline-block;
    vertical-align: middle;
  }

  #numberInput {
    border: none;
    outline: none;
}

/* Tùy chỉnh thanh cuộn cho Chrome, Edge, và Safari */
.h-48.overflow-y-auto::-webkit-scrollbar {
  width: 2px; /* Hoặc bất kỳ kích thước nào bạn muốn */
}

.h-48.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1; /* Màu nền của track */
}

.h-48.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888; /* Màu của thumb */
}

.h-48.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555; /* Màu của thumb khi hover */
}

/* Tùy chỉnh thanh cuộn cho Firefox */
.h-48.overflow-y-auto {
  scrollbar-width: thin; /* 'auto' hoặc 'thin' */
  scrollbar-color: #888 #f1f1f1; /* màu thumb và màu track */
}
</style>