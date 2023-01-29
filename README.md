# sign-pic

> 简易电子签名、绘板

### Install | 安装
----

```bash
npm i sign-pic
```

### Use | 使用
----

```bash
1.全局引用
import Sign from 'sign-pic';
Vue.use(Sign);

2.局部加载
import Sign from 'sign-pic';
Vue.components('sign', Sign)

组件中使用：
<sign :lineWidth=2 :strokeColor="'pink'" :showBtn="true" @complete="showData" />

```

### props | 属性说明
----
字段 | 说明 | 默认值 
--|:--:|--:
width       | 画布宽度    | 300 
height      | 画布高度    | 200
lineWidth   | 线条宽度    | 2
strokeColor | 线条颜色    | 'red'
background  | 画布背景色  | 'transparent'
showBtn     | 展示按钮    | true




### events | 事件
----

事件名 | 说明 | 回调参数 
--|:--:|--:
complete       | 绘画完成时触发【showBtn为true时，点击保存的时候触发，false时绘画完成自动触发】    | 绘画完成保存的base64的图片文件(dataBase) 