## 什么是E-DataV-React?

* E-DataV-React是一个基于**React**的数据可视化组件库（[Vue2版本](https://github.com/costaq/E-DataV)及[Vue3版本](https://github.com/costaq/E-DataV-Vue3)）
* 提供数据可视化大屏所需的各种组件，朋友写的[DataV](https://github.com/DataV-Team/DataV)组件库中已有的组件，我这边不会过多增加，最多是效果提升
* 因工作原因及个人比较佛系，更新会比较慢，但会持续更新


### npm安装

```shell
$ npm install e-datav-react
```

### 使用

```js

// 按需引入
import { FullScreenContainer, DigitalFlop } from 'e-datav-react';

```

### 组件介绍

#### 数字翻牌器

```js

import { DigitalFlop } from 'e-datav-react';

function Page() {

  return (
    <div>
      <DigitalFlop value={5000} />
    </div>
  )
}

export default Page
```
##### 效果演示

<img src="./images/digital-flop.gif">

##### 可选参数
字段|类型|备注
-|-|-
value|Number|数值，默认1000
decimals|Number|小数点，默认0
duration|Number|持续时间，默认3000毫秒
fontSize|Number|字体大小，默认50
fontFamily|String|字体，默认液晶字体，传空值则恢复正常浏览器字体
color|String|颜色，默认#000
separator|String|千位分隔符，默认''


#### 全屏组件

根据屏幕尺寸，自动拉伸

```js

import { FullScreenContainer, DigitalFlop } from 'e-datav-react';

function Page() {

  return (
    <div>
      <FullScreenContainer>
        <DigitalFlop value={5000} />
      </FullScreenContainer>
    </div>
  )
}

export default Page

```

##### 可选参数
字段|类型|备注
-|-|-
type|String|数值，默认'full', 其他可选类型：full（全屏拉伸） full-width（宽度拉伸 ）full-height（高度拉伸）initial （默认不拉伸）
width|Number|大屏设计稿宽度，也就是公司设计师出的效果图尺寸，默认1920
height|Number|大屏设计稿高度，默认1080


#### 边框组件

所有边框组件，根据父容器宽高自适应

边框组件1

```js

import { BorderBox1 } from 'e-datav-react';

function Page() {

  return (
      <div style={{ height: 200, width: 200 }}>
          <BorderBox1>
          </BorderBox1>
      </div>
  )
}

export default Page

```

##### 效果演示

<img src="./images/border-box-1.gif">

##### 可选参数
字段|类型|备注
-|-|-
borderRadius|Number|边框圆角，默认值3
borderWidth|Number|边框宽度，默认值3
colors|String[]|渐变颜色，默认值['#5ddcff', '#4e00c2']，只接受2个值
duration|Number|动画持续时间，默认值4，单位秒