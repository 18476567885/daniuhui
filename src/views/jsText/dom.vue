<template>
  <div>
    <!-- <div id="box1">我是盒子1</div>
    <div id="box2">我是盒子2</div> -->
    <!-- 
    <p>我是段落</p>
    <p>我是段落</p>
    <p>我是段落</p>
    <p>我是段落</p> -->
<!-- 
    <div id="box">
      <p>我是段落a</p>
      <p id="spec">
        我是段落b
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </p>
      <p>我是段落c</p>
    </div> -->

    <div id="box">

    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // var box1 = document.getElementById("box1");
    // var box2 = document.getElementById("box2");
    // console.log(box1.nodeType);
    // console.log(typeof box1);

    //得到标签的数组
    //   var ps=document.getElementsByTagName('p');
    //     console.log(ps);
    //  var the_p=document.querySelector('#box .spec');
    //  console.log(the_p);

    //子节点 childNodes
    // var box = document.getElementById("box");
    // var pre = document.getElementById("spec");
    // //所有子节点
    // console.log(box.childNodes);
    // //所有元素的子节点(ie9开始兼容)
    // console.log(box.children);

    // //第一个子节点
    // console.log(box.firstChild);
    // console.log(box.firstChild.nodeType);
    // //第一个元素子节点（IE9开始兼容）
    // console.log(box.firstElementChild);

    // //最后一个子节点·
    // console.log(box.lastChild);
    // console.log(box.lastChild.nodeType);
    // //最后一个元素子节点·
    // console.log(box.lastElementChild);

    // //父节点
    // console.log(pre.parentNode);

    // //前一个兄弟节点
    // console.log(pre.previousSibling);
    // //前一个元素兄弟节点
    // console.log(pre.previousElementSibling);

    // //后一个兄弟节点
    // console.log(pre.nextSibling);
    // //后一个元素兄弟节点
    // console.log(pre.nextElementSibling);

    // var box = document.getElementById("box");
    // var pre = document.getElementById("spec");

    // //封装一个函数，这个函数可以返回元素的所有 子元素节点（兼容到IE6）,类似children的功能
    // function getChildren(node) {
    //   //结果数组
    //   var children = [];
    //   //遍历node这个节点的所有子节点，判断每一个子节点的 nodeType属性是不是 1
    //   //如果是 1，就推入到结果数组中
    //   for (var i = 0; i < node.childNodes.length; i++) {
    //     if (node.childNodes[i].nodeType == 1) {
    //       children.unshift(node.childNodes[i]);
    //     }
    //   }
    //   return children;
    // }
    // console.log(getChildren(box));
    // console.log(getChildren(pre));

//     //封装第二个函数，这个函数可以返回元素的前一个元素兄弟节点，类似 previousElementSibling功能
//     function getElementPre(node) {
//       var o = node;
//       //使用while语句
//       while (o.previousSibling != null) {
//         if (o.previousSibling.nodeType == 1) {
//           //结束循环，找到啦
//           return o.previousSibling;
//         }
//         //让o成为它的前一个节点
//         o=o.previousSibling
//       }
//     }
//     console.log(getElementPre(pre));



// //封装第三个函数，这个函数可以返回元素的所有元素兄弟节点
// function getAllElement(node){
//   // 前面兄弟元素节点
//   var previ=[];
//   //后面的兄弟元素节点
//   var nexts=[];
//   var o=node;
//   while(o.previousSibling !=null){
//       if(o.previousSibling.nodeType==1){
//         previ.push(o.previousSibling);
//       }
//   o=o.previousSibling;
//   }
//   return previ;
// }

// var oBox= document.getElementById('box');
// //    oBox.innerHTML="  <ul> <li>牛奶</li>   <li> 咖啡 </li> </ul> " 

// oBox.innerText="  <ul> <li>牛奶</li>   <li> 咖啡 </li> </ul> "
  }
};
</script>
