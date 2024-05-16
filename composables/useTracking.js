import axios from 'axios';

export const useTracking = () => {
  const route = useRoute()
  const router = useRouter()
  
  const inputs = ref([{ value: '' }]);
  const inputRefs = ref([]);

  const tabs = ref([
    { key: 'All', label: "All", shipments: [] },
    { key: 'Delivered', label: 'Delivered', shipments: [] },
    { key: 'InTransit', label: 'In-Transit', shipments: [] },
    { key: 'NotFound', label: "Not found", shipments: [] },
    { key: 'InfoReceived', label: 'Info Received', shipments: [] },
    { key: 'AvailableForPickup', label: 'Pick Up', shipments: [] },
    { key: 'OutForDelivery', label: 'Out for delivery', shipments: [] },
    { key: 'DeliveryFailure', label: 'Undelivered', shipments: [] },
    { key: 'Exception', label: 'Alert', shipments: [] },
    { key: 'Expired', label: 'Expired', shipments: [] }
  ]);

  const openTab = ref(tabs.value[0].key);

  const toggleTabs = (tabNumber) => {
    // console.log(tabNumber);
    openTab.value = tabNumber;
    console.log(openTab.value[tabNumber].shipments.length);
    
  };

  const handleKeydown = (event, index, inputs, inputRefs) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newIndex = index + 1;
      inputs.splice(newIndex, 0, { value: '' });
      nextTick(() => {
        inputRefs[newIndex].focus();
      });
    } else if (event.key === 'Backspace' && inputs[index].value === '') {
      if (index > 0) {
        event.preventDefault();
        inputs.splice(index, 1);
        nextTick(() => {
          inputRefs[index - 1].focus();
        });
      }
    }
  };

  const removeInput = (index,inputs,inputRefs) => {
    // Chỉ cho phép xóa nếu có nhiều hơn 1 ô input
    if (inputs.length > 1) {
      inputs.splice(index, 1); // Xóa phần tử tại vị trí index
  
      nextTick(() => {
        const newIndex = index < inputs.length ? index : inputs.length - 1;
        inputRefs[newIndex].focus();
      });
    }
  };

  async function fetchData ({numbers=''}) {
    if(!numbers) return
			const response  = await axios.post('https://casso-services-49d8a051217a.herokuapp.com/logistic',{numbers: numbers.split(',')})
			
			for(let tab of tabs.value){
        tab.shipments = [];
				for(let res of response.data){
					if(tab.key === res.status){
							tab.shipments.push(res)
					}
				}
			}
      tabs.value[0].shipments = response.data
	}
  const trackNumbers = (inputs) => {
    const data = {
    numbers: inputs.reduce((acc,current)=>{
      if(current.value) acc.push(current.value.trim())
        return acc
      },[])
      .join(",")
  }
  router.replace({path:'/home',query:{...data}})
  }

  return {
    inputs,
    inputRefs,
    tabs,
    openTab,
    toggleTabs,
    handleKeydown,
    removeInput,
    fetchData,
    trackNumbers
  }
}