let count = 0;
const cat = document.getElementById('popcat');
const counter = document.getElementById('counter');

cat.addEventListener('mousedown', () => {
  cat.src = './IMG_6688.PNG'; // ภาพแมวอ้าปาก
  count++;
  updateText()
});

cat.addEventListener('mouseup', () => {
  cat.src = 'https://pngmax.com/_next/image?url=https%3A%2F%2Fpng-max.s3.ap-south-1.amazonaws.com%2Flow%2F936505e8-677a-4a6a-af4e-e4a8c0f31dc9.png&w=1200&q=75';
});

function resetCount(){
    count = 0
    counter.innerText = `Click on the cat to make it pop! ${count} pops`
}

function updateText() {
    counter.innerText = `Click on the cat to make it pop! ${count} pops`;
  }