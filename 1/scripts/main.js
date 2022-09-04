let mySecHeading = document.querySelector('h2');
mySecHeading.textContent = 'TGA年度最佳游戏——只狼：影逝二度';

document.querySelector('div').onclick = function(){
    document.querySelector('div').textContent = "果断就会败给！";
    document.querySelector('div').style = "color:red";
    document.querySelector('div').style = "font-size:40px";
    // alert("果断就会败给！")弹窗形式
}
// document.querySelector('div').onclick = function(){}       
// 相当于 
// let bianliang =document.querySelector('div')
// bianliang.onclick = function(){}


// 把<img>元素带进变量中
let myImage = document.querySelector('img');

// 将变量的点击绑定一个函数
myImage.onclick = function(){
    // 找到img的src属性
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/只狼.png'){
        myImage.setAttribute('src','images/只狼2.png')
    }else{
        myImage.setAttribute('src','images/只狼.png')
    }
}


//抬头显示用户切换
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName(){
// prompt会像alert一样弹出窗口输入
    let myName = prompt('请输入你的名字');
// 当为null或者为空名字时
    if(!myName || myName === null){
        setUserName();
    }else{
    // localStorage API，它可以将数据存储在浏览器中供后续获取    setItem（）函数会建立一个“name”的数据项，并把myName复制给它
    localStorage.setItem('name',myName);
    }

    myHeading.textContent = '欢迎查阅，' + myName;
}


// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎查阅，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function(){
    setUserName();
}













