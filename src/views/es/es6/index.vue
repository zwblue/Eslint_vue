<template>
    <div>
        <Card>
            <Button type='success' @click="forOfStr('zuowang')">
                for..of...字符串
            </Button>
            <Button type='error' @click="includes('zuowang')">
                includes()的用法
            </Button>
            <Button type='primary' @click="myisFinite(5,'222')">
                Number.isFinite()的作用
            </Button>
            <Button type='ghost' @click="myisInteger(23,23.5)">
                Number.isInteger()的作用
            </Button>
            <Button type='success' @click="trunc(23.33,23.36)">
                Math.trunc(num)移除小数部分
            </Button>
            <Button type='error' @click="funDefault('hello')">
                函数参数默认值
            </Button>
            <Button type='primary' @click="add(12,3,4,5,6,6,7,8,8,7,65,5,23)">
                function add(...values) 参数
            </Button>
            <Button type='ghost' @click="spread(...[{name:'zw',age:12,sex:'女'},3,4])">
                数组的扩展运算符。。。
            </Button>
            <Button type='success' @click="
                    arrayfrom([3,5,8])">
                arrayfrom的用法
            </Button>
        </Card>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    arrayfrom(array) {
      console.log(
        "将类似数组的转换成数组类型：",
        Array.from(array, n => n * n)
      );
    },
    forOfStr(str) {
      for (let val of str) {
        console.log(val);
      }
      console.log(`for (let val of str) {console.log(val);}`);
    },
    includes(str) {
      console.log(`str.includes("wan")`, str.includes("wan"));
      console.log(
        `表示从第几个位置开始计算：str.includes("wan",5)`,
        str.includes("wan", 5)
      );
    },
    myisFinite(num1, num2) {
      console.log(num1, "检测当前的参数是否是数值型：", Number.isFinite(num1));
      console.log(num2, "检测当前的参数是否是数值型：", Number.isFinite(num2));
    },
    myisInteger(num1, num2) {
      console.log(num1, "检测当前的参数是否是整数：", Number.isInteger(num1));
      console.log(num2, "检测当前的 参数是否是整数：", Number.isInteger(num2));
    },
    trunc(num1, num2) {
      console.log(num1, "移除当前数值的小数部分：", Math.trunc(num1));
      console.log(num2, "移除当前数值的小数部分：", Math.trunc(num2));
    },
    funDefault(x, y = "World") {
      console.log(x, y);
      console.log(`funDefault('hello')
        funDefault(x, y = "World") {
        console.log(x, y);
    }`);
    },
    add(...nums) {
      let count = 0;
      for (let val of nums) {
        count += val;
      }
      console.log(
        "将参数序列改成数组：",
        `add(...nums){
        let count=0;
        for(let val of nums){
            count+=val;
        }
        console.log()
    }`,
        count
      );
    },
    spread(num) {
      console.log("num.age：", num.age);
      console.log("num.name：", num.name);
      console.log("num.sex：", num.sex);
      console.log("num.sex：", num);
      console.log(...[2, 3, 4], "可以把对象或数组变为参数序列");
      let arr1 = [1, 2, 3];
      let arr2 = [4, 5, 6];
      let arr3 = [7, 8, 9];
      console.log(`合并数组：[...arr1,...arr2,...arr3]`, [
        ...arr1,
        ...arr2,
        ...arr3
      ]);
    }
  }
};
</script>
<style scoped>

</style>
