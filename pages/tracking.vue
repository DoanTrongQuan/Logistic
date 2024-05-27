<template>
<GlobalLoading>
	<div class="grid grid-cols-4 gap-4 w-11/12 mx-auto h-[700px] z-1">
		<div class="relative box-tracking flex-col lg:col-span-1 col-span-4 max-h-96 py-5 lg:relative ">
			<div class="box-tracking-title p-4 w-full">
				Tracking code
			</div>
			<div class="h-48 overflow-y-auto custom-scrollbar px-3">
				<div v-for="(input, index) in inputs" class="flex items-center">
					<span :style="{ color: isShowPlaceholder ? '#b3b8c2' : '#747592' }">{{ index + 1 }}. </span>
					<input :placeholder="isShowPlaceholder ? 'Enter up to 40 numbers, one per line ' : ''"
						class="w-full p-1 border-none focus:border-none focus:outline-none" :ref="el => inputRefs[index] = el"
						:value="input.value"
						
						@input="event => { input.value = event.target.value.toUpperCase(); console.log('Input updated:', inputs[index].value, inputs); }"
						@keydown="event => handleKeydown(event, index,inputs, inputRefs)" />
					<img class = "w-[15px] h-[15px]" src="/img/close.svg" @click="removeInput(index,inputs,inputRefs)">
				</div>

				<div class="flex w-full justify-center absolute bottom-12">
					<button @click = "trackNumbers(inputs)" class="button w-9/12 text-white">Track
						<img src="/img/track.svg">
					</button>
					<div class="flex lg:justify-center ml-2">
						<img src="/img/bin.svg">
					</div>
				</div>
			 </div>
			</div>
			<div class="lg:col-span-3 col-span-4  track-content py-2 px-3">
				<div class="w-full">
					<ul class="flex mb-0 list-none flex-wrap pt-1 pb-4 flex-row">
						<li v-for="(tab, i) in tabs" :key="i" class="-mb-px mt-2 border-b xl:mr-0 last:mr-0 flex-auto text-center cursor-pointer">
							<a class="text-sm font-bold text-[#17171E] px-5 py-3  rounded block leading-normal"
								@click="toggleTabs(tab.key)"
								:class="{ 'font-bold bg-gradient-to-b from-[rgba(55,93,226,0)] to-[rgba(55,93,226,0.08)]': openTab === tab.key, 'font-normal bg-white': openTab != tab.key }">
								{{ tab.label }} ({{ tab.shipments.length }})
							</a>
						</li>
					</ul>
					<div class="relative max-h-full flex flex-col min-w-0 break-words w-full mb-6 rounded ">
						<div v-for="(tab, i) in tabs" v-show="openTab === tab.key" :key="i" class = "max-h-[600px] overflow-y-auto custom-scrollbar">
								<div v-if = "tab.shipments.length < 1">
									<p class = "text-center text-[#757575]">No tracking number.</p>
								</div>
							<div v-else v-for="(shipment, j) in tab.shipments" :key="j" class = "">
								<div class="grid grid-cols-8 py-3 justify-between">
									<div class="col-span-2 flex">
										<img src="/img/track-code-icon.svg">
										<div class="flex-col ml-2">
											<p class="font-mulish font-semibold text-16 leading-24 flex items-center text-black">{{
												shipment.number}}</p>
											<p class="font-mulish font-medium text-14 leading-20 flex items-center text-red-500">{{
												shipment.status}} </p>
										</div>
									</div>
									<div class="lg:col-span-6 my-3 col-span-8 grid grid-cols-6 gap-2 lg:gap-10">
										<div class="flex items-center justify-between md:col-span-2 col-span-4">
											<div class="flex items-center">
												<img src="/img/vietnam.svg">
												<span
													class="ml-2 font-mulish font-medium md:text-xs xl:text-sm leading-20 flex items-center text-gray-700">Vietnam</span>
											</div>
												<img src = "/img/plane.svg">
											<div class="flex items-center">
											<img src = "/img/US.svg">
												<span
													class="ml-2 font-mulish font-medium md:text-xs xl:text-sm leading-20 flex items-center text-gray-700">{{
														shipment.destCountry }}</span>

											</div>
										</div>
										<div class="md:col-span-4 col-span-5 flex items-center">
											<p class="font-mulish font-medium md:text-xs xl:text-sm flex items-center text-gray-700">
												{{ formatDateTime(shipment.events[shipment.events.length - 1].time) }} {{
													shipment.events[shipment.events.length - 1].location }} {{
													shipment.events[shipment.events.length - 1].content }}</p>
										</div>
									</div>
								</div>
								<div class="border-dashed border-2 border-blue-300 transform rotate-180 mt-3">
								</div>
								<div class="flex-col my-4">
									<p class="font-mulish font-bold text-20 leading-32 flex items-center text-gray-900">{{ shipment.status
										}}</p>
									<div v-if = "shipment.status === 'Delivered'" class="grid grid-cols-4 gap-0.5 mt-2">
										<div class="col-span-1">
											<img src = "/img/progress.svg">
										</div>
										<div class="col-span-1">
											<img src = "/img/progressing.svg">
										</div>
										<div>
											<img src = "/img/progressing.svg">
										</div>
										<div>
											<img src = "/img/progressing.svg">
										</div>
									</div>
									<div v-else  class="grid grid-cols-4 gap-0.5 mt-2">
										<div class="col-span-1">
											<img src = "/img/progress.svg">
										</div>
										<div class="col-span-1">
											<img src = "/img/progressing.svg">
										</div>
										<div>
											<img src = "/img/no-progress.svg">
										</div>
										<div>
											<img src = "/img/no-progress.svg">
										</div>
									</div>
									<p class="font-mulish font-medium text-xs leading-20 flex items-center text-blue-500 my-4">
										{{ formatDescriptionshipments(shipment.status) }}</p>
									<div class="flex mt-4">
										<span
											class="flex items-center text-[14px] leading-5 font-semibold text-[#375DE2] font-mulish ml-2">TDL</span>
										<span class="flex items-center text-[14px] leading-5 font-semibold  font-mulish ml-1">- {{
											shipment.destCountry }} - No phone </span>
										<span class="flex items-center text-xs leading-5 font-medium text-[#747592] font-mulish ml-1"> -
											Sync Time: {{ getCurrentFormattedTime() }} (GMT+07:00)</span>
									</div>
									<div class="py-4 px-2 progress-container">

										<div v-for="(event, k) in shipment.events.slice().reverse()" :key="k"
											class="flex items-center py-3">
											<svg :fill="k === 0 ? '#17171E' : '#ABB4CD'" width="8" height="8" viewBox="0 0 8 8" fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<circle cx="4" cy="4" r="4" />
											</svg>	
											<span
												:class="`px-5 flex items-center text-base font-medium font-mulish ${k === 0 ? 'text-[#17171E]' : 'text-[#ABB4CD]'}`">
												{{formatDateTime(event.time) }}</span>
										
											<span
												:class="`px-5 flex items-center text-base font-semibold font-mulish ${k === 0 ? 'text-[#17171E]' : 'text-[#ABB4CD]'}`">
												{{event.location }} {{ event.content }}</span>
													
										</div>
									</div>
									<div class="py-4">
										<div class="grid grid-cols-6">
											<div
												class="grid 2xl:grid-cols-6 sm:grid-cols-3 lg:gap-3 gap-2  xl:col-span-3 lg:col-span-4 col-span-6">
												<button
													@click = "copyLink"
													class="sm:col-span-1 2xl:col-span-2 bg-[#FF7614] mt-3 rounded-[12px] flex text-white flex-row justify-center items-center px-[14px] py-[10px] gap-[8px] ">Copy
													Link
														<img src = "/img/copy-link.svg">
												</button>
												<button
													@click = "copyDetail"
													class="sm:col-span-1 2xl:col-span-2 bg-[#E9F3FF] mt-3 border border-[#D3D8E5] rounded-[12px] flex flex-row justify-center items-center px-[14px] py-[10px] gap-[8px] box-border">Copy
													Detail
													<img src= "/img/copy-detail.svg">
												</button>
												<button
													class="sm:col-span-1 2xl:col-span-2 bg-white mt-3 border border-[#D3D8E5] rounded-[12px] flex flex-row justify-center items-center px-[14px] py-[10px] gap-[8px] box-border">More
													Info
												</button>
											</div>
											<div class="xl:col-span-3 lg:col-span-2  col-span-6 flex items-center justify-end px-14 my-4">
												<p class="flex items-center font-mulish font-normal text-[14px] leading-[20px] text-[#17171E]">
													Translate: English</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
		<button @click = "check">check</button>
</GlobalLoading>
		<!-- <button @click="check">Check</button> -->
</template>

<script setup>

const route = useRoute()
const router = useRouter()
const { 
	tabs, 
	fetchData, 
	toggleTabs, 
	openTab, 
	handleKeydown, 
	removeInput,
	copyDetail,
	trackNumbers,
	copyLink 
} = useTracking();
    
	const inputs = ref([{ value: '' }]);
	const inputRefs = ref([]);

const initInputs = () => {
	if(route.query.numbers){
		inputs.value = route.query.numbers.split(',').map(number => (
			{value:number}
		));
	}
}

initInputs()
// fetchData(route.query)

onMounted(
	() =>{ 
	}
)

watch(() => route.query.numbers, () => {
	fetchData(route.query)

}, {
	immediate: true, deep: true
})

watch(() => inputs.value, (newInputs) => {
    // Tạo chuỗi từ mảng inputs để cập nhật route
    const numbersString = newInputs.map(input => input.value).join(',');
    router.push({ query: { ...route.query, numbers: numbersString } });
}, {

});







</script>

<style scoped>
.box-tracking {

	box-sizing: border-box;
	background: #FFFFFF;
	border: 0.5px solid #E5E5E5;
	border-radius: 32px;
}

/* Tracking code */
.box-tracking-title {
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
  border: 0.5px solid #E5E5E5; 
	border-radius: 29px;
}

.progress {
	position: relative;
	width: 87px;
	height: 0px;
	left: 32px;
	top: 447px;

	/* neu/7 */
	border: 1px solid #ABB4CD;
	transform: rotate(-90deg);
}

.progress-container {
	position: relative;
	border-bottom: 1px dashed #D3D8E5;
}

.progress-container::before {
	--space-on-top: 40px;
	content: '';
	position: absolute;
	display: block;
	width: 1px;
	height: calc(100% - var(--space-on-top) * 2);
	top: var(--space-on-top);
	left: 12px;
	background-color: #ABB4CD;

}

.progress-container .items-center {
	position: relative;
	z-index: 1;
}

/* CSS để tùy chỉnh thanh cuộn */
.custom-scrollbar::-webkit-scrollbar {
    width: 3px; /* Độ rộng của thanh cuộn */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1; /* Màu nền của track */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(158, 158, 158, .6); /* Màu của thumb */
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555; /* Màu của thumb khi hover */
}
</style>