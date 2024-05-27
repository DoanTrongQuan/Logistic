<template>

  <div class = "max-w-[660px] max-h-[400px] flex flex-col mx-auto justify-center">
    <p class = "flex items-center justify-center text-[32px] leading-[48px] font-bold text-[#375DE2] font-mulish">ALL-IN-ONE PACKAGE TRACKING</p>
    <p class = "flex items-center justify-center text-[16px] leading-[24px] font-medium text-[#747592] font-mulish">Support 2100+ carriers and 190+ airlines worldwide</p>
    <div class = "w-full bg-white max-h-[300px] border pb-4 pt-2 border-[#EAECF3] rounded-[20px] mt-3 ">
      <div class = "h-48 overflow-y-auto px-3">
        <div v-for="(input, index) in inputs" class = "flex items-center">
          <span :style="{ color: isShowPlaceholder ? '#b3b8c2' : '#747592' }">{{ index + 1 }}. </span>
          <input 
            :placeholder="
            isShowPlaceholder ? 'Enter up to 40 numbers, one per line ': ''"
            class = "w-full p-1 border-none focus:border-none focus:outline-none"
            :ref="el => inputRefs[index] = el"
            :value="input.value"
            @input="event => { input.value = event.target.value.toUpperCase(); console.log('Input updated:', inputs[index].value,inputs); }"
            @keydown="event => handleKeydown(event, index,inputs, inputRefs)"
          />
          <img src = "/img/close.svg" @click = "removeInput(index,inputs,inputRefs)">
       </div>
       <p v-if = "isShowPlaceholder" class = "text-[#b3b8c2] pl-4">Support airline cargo tracking, format: 123 - 12345678.
        
       </p>

      <div class="input-container flex flex-col">

      </div>  
      </div>

      <div class = "flex justify-end px-12">
        <button @click="trackNumbers(inputs)" class="flex flex-row items-center justify-center text-white
         p-[12px_14px] gap-3.5 w-[144px] max-h-[48px] bg-[#FF7614] rounded-[12px] z-10 order-3" >
          Tracks
        <img src ="/img/track.svg">
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

const { handleKeydown,removeInput, inputs, inputRefs, trackNumbers } = useTracking()
    
    
const router = useRouter()
const route = useRoute()


const isShowPlaceholder = computed(()=>{
if(inputs.value.length >1) return false
if(inputs.value[0].value) return false
return true
})

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

::placeholder {
  color: #b3b8c2;
}
</style>