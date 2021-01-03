<template>
    <div>

    </div>
</template>
<script>
    export default{
        mounted(){
            // //求数组的和
            // var arr=[2,4,5,6,];
            // //累加器
            // var sum =0;
            // //遍历数组，每遍历一个数字，就要把这个数字累加到累加器中
            // for(var i=0; i<arr.length; i++){
            //     sum+=arr[i]
            // }
            // console.log(sum);


        //     //求数组最大值和最小值
        //     var arr=[12,5,46,76,87,5,99,55];
        //     //定义两个变量，max表示当前寻找到的最大值，默认为 arr[0]
        //     //min表示当前寻找到的最小值，默认为 arr[0]
        //     var max=arr[0];
        //     var min=arr[0];
        //     //遍历数组，从下标为1的项开始遍历
        //     for(var i=1; i<arr.length; i++){
        //         //如果你遍历的这项，比当前最大值 大，那么就让它就成为当前最大项
        //         if(arr[i]>max){
        //           max=arr[i];
        //         }else if(arr[i]<min){
        //          //否则如果你遍历的这项，比当前最小值 小，那么就让它成为当前最小项  
        //          min=arr[i] ;
        //         }
        //     }
        //    console.log(max,min);


    //  //去除数组中的重复项，思路 创建一个新数组
    //  var arr=[1,1,1,3,3,45,6,77,77,6,5]
    //  //结果数组
    //  var result=[];
     
    // //  遍历原数组
    //  for(var i=0; i<arr.length; i++){
    //      //判断遍历到的这一项是否在结果数组中，如果不在就推入新数组中

    //      //includes方法用来判断某项是否在数组中
    //      if(!result.includes(arr[i])){
    //          result.push(arr[i]);
            
    //      }
    //  }
    //  console.log(result);
    



    // var arr=[3,5,6,65,4,31,3,];
    // //准备结果数组
    // var result=[]
    // //遍历数组
    //  for(var i=0; i<3; i++){
    //      //随机选择一项的下标，数组的下标0~arr.length-1;
    //      //之前学习过的  random的公式，[a,b]区间的随机数是 parseInt(Math.random()*(b-a+1)+a)
    //      var n=parseInt(Math.random()*arr.length)
    //      //把这项推入结果数组
    //      result.push(arr[n]);
    //      //删除这项，防止重复被随机到
    //      arr.splice(n,1);

    //  }
    // console.log(result);





    // //冒泡排序
    // var arr=[2,5,43,7,4,8,]
    // //一趟一趟比较，趟数序号就是i
    // for(var i=1; i<arr.length-1; i++){
    //     //内层循环负责两两比较
    //     for(var j=arr.length-1; j>=i;  j--){
    //    //判断项的大小
    //    if(arr[j]<arr[j-1]){
    //        //这一项比前一项还小，那么就要交换两个变量的位置
    //        var tem=arr[j];
    //        arr[j]=arr[j-1];
    //        arr[j-1]=tem;
    //    } console.log(arr);
    //     }
       
    // }
    // console.log(arr);





    var arr=[1,2,3,4,5,7];
    var arr2=[];
    arr2=arr2.concat(arr);
    console.log(arr2);
    console.log(arr==arr2);

     }
    }
</script>