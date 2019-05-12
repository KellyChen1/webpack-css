import './index.css';
import Icon from './assets/icon.png';
import printMe from './print.js';
function component(){
    
    let node = document.createElement("div");
    node.innerText="hi, I am nuts"
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
    return node;
    
}

let element=component()
document.body.appendChild(element)       //在root里添加子元素，用appendChild
if(module.hot){
    module.hot.accept("./print.js",() => {
        console.log("Accepting the updated print me module!")
        document.body.removeChild(element);
        element = component()
        document.body.appendChild(element)
        printMe();
    })
}