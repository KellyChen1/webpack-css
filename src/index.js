import './index.css';
import Icon from './assets/icon.png';
import printMe from './print.js';
let node = document.createElement("div");
node.innerText="hi, I am kelly"
// 添加样式
node.className="red"
// 添加图片
let img = new Image()
img.src=Icon
node.appendChild(img)

let btn = document.createElement("button")
btn.innerHTML="click me"
btn.onclick=printMe
node.appendChild(btn)

document.body.appendChild(node)       //在root里添加子元素，用appendChild