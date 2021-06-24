## 盒模型

---

![盒模型示意图](/static/img/box.jpg)

+ 宽度与高度——width，height
+ 内边距——padding
+ 边框——border
+ 外边距——margin

---

### 宽度/高度

--

**像素值** <!-- .element: class="emphasis" -->

```html
<div class="content">
</div>
<style>
    .content {
        width: 200px;
        height: 200px;
        background: lightpink;
    }
</style>
```

--

**百分比** <!-- .element: class="emphasis" -->

```html
<div class="content">
    <div class="box"></div>
</div>
<style>
    .content {
        width: 200px;
        height: 200px;
        background: lightpink;
    }

    .box {
        width: 50%;
        height: 25%;
        background: lightskyblue;
    }
</style>
```

--

**rem值/em值** <!-- .element: class="emphasis" -->

```html
<div class="content">
    <div class="box"></div>
</div>
<style>
    html {
        font-size: 24px;
    }
    .content {
        width: 10rem;  /* 1 rem = html元素字体大小 */
        height: 10em;  /* 1 em = 自身元素字体大小 */
        background: lightpink;
    }
    .box {
        font-size: 0.5rem;
        width: 10em;
        height: 10em;
        background:lightskyblue;
    }
</style>
```

---

### 内边距——padding

+ padding-top
+ padding-right
+ padding-bottom
+ padding-left

--

```css
p{
    padding: 10px;  /* 上右下左内边距都为10px */
}
```
等同于 <!-- .element: class="normal" -->
```css
p{
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
}
```

--

```css
p{
    padding: 10px 20px; /* top&bottom left&right */
}
```

--

```css
p{
    padding: 10px 20px 15px; /* 分别为 top left&right bottom */
}
```

--

```css
p{
    padding: 10px 20px 15px 0; /* 分别为 top right bottom left */
}
```

---

### 外边距——margin

+ margin-top
+ margin-right
+ margin-bottom
+ margin-left

---

### 边框——border

+ border-width: <length> | thin | medium | thick
+ border-style: none | 关键字
+ border-color: <color>

