<template>
  <div></div>
</template>
<script>
export default {
  mounted() {
    //  var xiaoming={
    //      name:'小明',
    //      age:'18',
    //      sex:'男',
    //      hobbies:['看剧','编程'],
    //      'favorate-book':'舒克和贝塔',
    //  };
    //  console.log(xiaoming.name);
    //  console.log(xiaoming.age);
    //  console.log(xiaoming.sex);

    //  console.log(xiaoming.hobbies);
    //  console.log(xiaoming['favorate-book']);
    //  var key='sex';
    //  console.log(xiaoming[key]);

    // var obj={
    //     a:10
    // }
    // obj.a=30;
    // obj.a++;

    //         var obj={
    //             a:0,
    //         };
    // obj.b=40;

    // var xiaoming={
    //     name:'小明',
    //     age:12,
    //     sex:'男',
    //     sayHello:function(){
    //         console.log('你好，我是小明');
    //     }
    // };
    // xiaoming.sayHello();

    // var obj={
    //     a:11,
    //     b:22,
    //     c:66,
    // };
    // for(var k in obj){
    //     console.log('对象obj的属性' + k+'的值是' + obj[k]);
    // }

    // var obj1={
    //     a:1,
    //     b:2,
    //     c:[33,55,66],
    // };
    // //实现浅克隆,只克隆表层
    // var obj2={};
    // for(var k in obj1){
    //     //每遍历一个k属性，就给 obj2也添加一个同名的k 属性
    //     //值和obj1的k属性值相同
    //     obj2[k]=obj1[k];
    // };
    // //浅克隆，因为c属性的值 是引用类型值，本质上obj1和obj2的c属性 是内存中相同的一个数组
    // //并没有被克隆分开
    // obj1.c.push(77);
    // console.log(obj2);

   
   
    //实现深克隆
    var obj = {
      a: 1,
      b: 2,
      c: [
        33,
        44,
        {
          m: 55,
          n: 66,
          p: [77, 88]
        }

        
      ]
    };
    function deepClone(o) {
      //判断o是对象还是数组
      if (Array.isArray(o)) {
        //数组
        var result = [];
        for (var i = 0; i < o.length; i++) {
          result.push(deepClone(o[i]));
        }
      } else if (typeof o == "object") {
        //对象
        var result = {};
        for (var k in o) {
          result[k] = deepClone(o[k]);
        }
      } else {
        //基本类型值
        var result = o;
      }
      return result;
    }
    var obj2=deepClone(obj);
    obj.c.pop();
    console.log(obj);
    console.log(obj2);
    console.log(obj2==obj);

    // var obj1 = {
    //   a: 1,
    //   b: 2,
    //   c: [
    //     11,
    //     22,
    //     33,
    //     {
    //       m: 44,
    //       n: 66,
    //       p: [77, 88]
    //     }
    //   ]
    // };
    // function deepClone(o) {
    //   //要判断o是对象 还是数组
    //   if (Array.isArray(0)) {
    //     //数组
    //     var result = [];
    //     for (var i = 0; i < o.length; i++) {
    //       //形成递归
    //       result.push(deepClone(o[i]));
    //     }
    //   } else if (typeof o == "object") {
    //     //对象
    //     var result = {};
    //     for (var k in o) {
    //       result[k] = deepClone(o[k]);
    //     }
    //   } else {
    //     //基本类型
    //     var result = o;
    //   }
    //   return result;
    // }

    // //检测
    // var obj2 = deepClone(obj1);
    // console.log(obj2);
    // console.log(obj2 == obj1);    //false,表示不同内存地址，没有藕断丝连

    //     //全局函数
    //     function fn() {
    //       console.log(this.a + this.b);
    //     }
    //   var   obj = {
    //       a: 66,
    //       b: 33,
    //       fn: fn
    //     };
    //     obj.fn();

    // var obj1={
    //     a:1,
    //     b:2,
    //     fn:function(){
    //         console.log(this.a+this.b);
    //     }
    // };

    // var obj2={
    //     a:3,
    //     b:4,
    //     fn:obj1.fn,
    // };
    // obj2.fn();

    // function fun(){
    //     console.log(this.a+this.b);
    // };
    // var obj={
    //     a:1,
    //     b:2,
    //     c:[{
    //         a:3,
    //         b:4,
    //         c:fun,
    //     }]
    // };
    // var a=5;
    // obj.c[0].c();  //输出7

    // var obj1 = {
    //   a: 1,
    //   b: 2,
    //   fn: function() {
    //     console.log(this.a + this.b);
    //   }
    // };
    // var a=3;
    // var b=4;
    // var fun=obj1.fn;
    // fun();
  }
};
</script>
