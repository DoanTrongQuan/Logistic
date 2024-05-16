
export function formatDateTime(dateTime) {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

export function formatDescriptionshipments(orderStatus){
  if(orderStatus === 'InTransit'){
    return 'Your package has shipped from the originating country and is en route to its destination.'
  } else if (orderStatus === 'Delivered'){
    return 'Your package was delivered successfully to the addressee.'
  } else if (orderStatus === 'Expired') {
    return "It's been unusually long since your package was shipped. Please visit the carrier's website LionBay for more info.";
  }
}

export function getCurrentFormattedTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Thêm '0' phía trước nếu cần
  const day = now.getDate().toString().padStart(2, '0');
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}