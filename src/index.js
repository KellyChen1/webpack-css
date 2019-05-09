import './index.css';
let node = document.createElement("div");
node.innerText="hi"
node.className="red"
document.getElementById("root").appendChild(node)       //在root里添加子元素，用appendChild