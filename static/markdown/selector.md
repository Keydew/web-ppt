## 选择器

---

 1. ID选择器
 2. 类选择器  <!-- .element: class="fragment fade-up" data-fragment-index="1" -->
 3. 属性选择器  <!-- .element: class="fragment fade-up" data-fragment-index="2" -->
 4. 伪类选择器  <!-- .element: class="fragment fade-up" data-fragment-index="3" -->
 5. 伪元素选择器  <!-- .element: class="fragment fade-up" data-fragment-index="4" -->
 6. 标签选择器  <!-- .element: class="fragment fade-up" data-fragment-index="5" -->
 7. 关系选择器  <!-- .element: class="fragment fade-up" data-fragment-index="6" -->
 8. 通配符  <!-- .element: class="fragment fade-up" data-fragment-index="7" -->

---

### ID选择器

**#** <!-- .element: class="emphasis" --> + **元素ID** 

--

```html
<p id="red">红色的字</p>

<style>
#red {
    color: red;
}
</style>
```

---

### 类选择器

**.** <!-- .element: class="emphasis" --> + **元素class**

--

```html [|1-2,5-7|2,8-10]
<p class="red">红色的字</p>
<p class="red font20">红色的20px大小的文字</p>

<style>
    .red{
        color: red;
    }
    .font20{
        font-size: 20px;
    }
</style>
```

---

### 属性选择器

[ **判断条件**<!-- .element: class="emphasis" --> ]

--

```html [|3,8-10|1-5,11-13|1,3,14-16|2-3,5,17-19|2-5,20-22|5,23-25]
<p name="one">name为one的一段文字</p>
<p name="onetwo">name为onetwo的一段文字</p>
<p name="one-two">name为one-two一段文字</p>
<p name="onetwothree">name为onetwothree的一段文字</p>
<p name="one two">name包含one,two的一段文字</p>

<style>
    [name="one-two"] {  /* name属性值等于one-two */
        color: red;
    }
    [name^="one"] {  /* name属性值以one开头 */
        color: green;
    }
    [name|="one"] {  /* name属性值以one-开头或等于one */
        color: slategray;
    }
    [name$="two"] {  /* name属性值以two结尾 */
        color: blue;
    }
    [name*="two"] {  /* name属性值包含two子串 */
        color: lightcoral;
    }
    [name~="two"] {  /* name属性值包含two这一项 */
        color: orange;
    }
</style>
```

---

### 伪类选择器

>添加到选择器的关键字，指定要选择的元素的特殊状态  <!-- .element: class="normal" -->

**:** <!-- .element: class="emphasis" --> + **伪类名**

--

```html
<p class="text">一段文字</p>
<style>
  .text:hover {  /* 鼠标停在文字上方时文字变橘，呈现悬浮效果 */
      color: orange;
      background: #f7f7f7;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
      border-radius: 10px;
      cursor: pointer;
  }
  .text {
      padding: 20px;
      margin: 20px;
  }
</style>
```

--

```html [|2,12-14|3,15-17|4,18-20|5,21-23|9,24-26]
<ul>
    <li>第一个是橘色</li>
    <li>第二个是绿色</li>
    <li>倒数第二个是浅绿色</li>
    <li>最后一个是天蓝色</li>
</ul>
<br>
<ul>
    <li>唯一一行</li>
</ul>
<style>
    li:first-child {
    color: orangered;
    }
    li:nth-child(2) {
    color: green;
    }
    li:nth-last-child(2) {
    color: mediumseagreen;
    }
    li:last-child {
    color: lightskyblue;
    }
    li:only-child {
    color: orchid;
    }
</style>
```

--

```html
<p class="text1">text1的文字</p>
<p class="text2">text2的文字</p>
<style>
    p:not(.text1) {
    color: orange;
    }
</style>
```

---

### 伪元素选择器

>附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式  <!-- .element: class="normal" -->

**::** <!-- .element: class="emphasis" --> + **伪元素名**

--

```html
<p class="selection">一段可以高亮选中文本的段落啊啦啦啦啦</p>
<p>普通段落</p>
<style>
    .selection::selection {  /* 匹配元素文本被鼠标选中的部分 */
        background: rgb(255, 222, 211);
    }
</style>
```

--

```html
<p>这可能不是你每天都会使用的功能，但是确实有一些有趣的用例。例如，
    假设你正在为一个文件系统应用程序创建一个用户界面，
    并且希望动态添加路径，你可以这样做：</p>
<style>
    p::first-letter {  /* 匹配文本内容第一个字 */
        font-size: 30px;
    }
</style>
```

--

```html
<button class="btn-confirm">提交</button>
<button class="btn-cancel">取消</button>
<style>
    .btn-confirm::before {  /* 在匹配元素下添加一个伪元素作为第一个子元素 */
        content: '*';
    }
    .btn-cancel::after {  /* 在匹配元素下添加一个伪元素作为最后一子元素 */
        content: '&';
        background: #ff9347;
    }
</style>
```

---

### 标签选择器

**标签名** <!-- .element: class="emphasis" -->


---

### 关系选择器

根据文档内容元素的位置关系  <!-- .element: class="normal" -->

--

子元素选择器： a **>** <!-- .element: class="emphasis" -->  b

```html [|5]
<div class="main">
    <div class="sub">
        <p>这是后代元素p</p>
    </div>
    <p>这是子元素p</p>
</div>
<style>
    .main > p {
        color: orange;
    }
</style>
```

--

后代选择器： a **[空格]** <!-- .element: class="emphasis" --> b

```html [|3,5]
<div class="main">
    <div class="sub">
        <p>这是后代元素p</p>
    </div>
    <p>这是子元素p</p>
</div>
<style>
    .main p {
        color: orange;
    }
</style>
```

--

邻接兄弟选择器： a **+**  <!-- .element: class="emphasis" --> b

```html [|4]
<div class="main">
    <p>我是sub前一段</p>
    <p class="sub">我就是sub</p>
    <p>我是sub后一段</p>
    <p>我是最后一段</p>
</div>
<style>
    .sub + p {
        color: orange;
    }
</style>
```

--

通用兄弟选择器： a **~**  <!-- .element: class="emphasis" --> b  

```html [|4-5]
<div class="main">
    <p>我是sub前一段</p>
    <p class="sub">我就是sub</p>
    <p>我是sub后一段</p>
    <p>我是最后一段</p>
</div>
<style>
    .sub ~ p {
        color: orange;
    }
</style>
```

---

### 通配符

**\***  <!-- .element: class="emphasis" -->

--

```css
* {  /* 初始消除元素默认样式的间隙 */
    margin: 0;
    padding: 0;
}
```

---

### 权值比较

--

 + 内联样式 - 1000
 + ID选择器 - 100  <!-- .element: class="fragment fade-up" data-fragment-index="1" -->
 + 类选择器/伪类选择器 - 10  <!-- .element: class="fragment fade-up" data-fragment-index="2" -->
 + 标签选择器/伪元素选择器 - 1  <!-- .element: class="fragment fade-up" data-fragment-index="3" -->
 + 通配符/关系选择器 - 0  <!-- .element: class="fragment fade-up" data-fragment-index="4" -->
