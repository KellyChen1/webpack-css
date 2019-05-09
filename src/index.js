import './index.css';
import Icon from './assets/icon.png';
let node = document.createElement("div");
node.innerText="hi, I am kelly"
// 添加样式
node.className="red"
// 添加图片
let img = new Image()
img.src=Icon
node.appendChild(img)
document.getElementById("root").appendChild(node)       //在root里添加子元素，用appendChild