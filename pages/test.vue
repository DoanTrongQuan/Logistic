<script setup>
const providers = [
  { 
    id: 1, 
    name: 'Payoneer', 
    items: [
        { icon:'/img/usd.svg',label:'USD'},
        { icon:'/img/eur.svg',label:'EUR'},
        { icon:'/img/gbp.svg',label:'GBP'},
        { icon:'/img/aud.svg',label:'AUD'},
     ] 
   },
   { 
    id: 2, 
    name: 'PingPong', 
    items: [
        { icon:'/img/usd.svg',label:'USD PP'},
     ] 
   },
   { 
    id: 3, 
    name: 'Lian Lian', 
    items: [
        { icon:'/img/usd.svg',label:'USD'},
        { icon:'/img/eur.svg',label:'EUR'},
        { icon:'/img/gbp.svg',label:'GBP'},
     ] 
   },
   { 
    id: 4, 
    name: 'Wise', 
    items: [
        { icon:'/img/usd.svg',label:'USD'},
     ] 
   },
   { 
    id: 5, 
    name: 'Bank Transfer', 
    items: [
        { icon:'/img/vnd.svg',label:'VND'},
     ] 
   },

]

const selected = ref(providers[1])
const state=reactive({a:'hello'})
</script>

<template>
    <div class = "max-w-[300px] mx-auto">
        <USelectMenu
        v-model="selected"
        :options="providers"
        placeholder="Select a person"
        searchable
        searchable-placeholder="Search by name or color"
        option-attribute="name"
        by="id"

        :search-attributes="['name', 'items']"
    >
            <template #option="{ option: provider }">
                    <div class="w-full h-full rounded-full  my-3">
                        <span class="truncate my-3">{{ provider.name }}</span>
                        <!-- <div v-for="(curren,i) in provider.items" :key="i" class = "flex">
                            <img :src = "curren.icon">
                            <span>{{ curren.label }}</span>
                        </div>  -->
                    </div>        

            </template>
        </USelectMenu>
    </div>
  
</template>