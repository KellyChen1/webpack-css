import './index.css';
import Icon from './assets/icon.png';
import printMe from './print.js';
import {cube} from './math.js';

function component(){
    
    // let node = document.createElement("div"); 
    let node =document.createElement("pre")
    // node.innerText="hi, I am nuts"
    node.innerHTML=["hello, webpack", "5 cubed is equal to " + cube(5)].join(",")
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