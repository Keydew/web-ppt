## 书写规则

**选择器**<!-- .element: class="emphasis" --> + **一组声明**<!-- .element: style="color:#5555ff;" -->

 - 选择器：指定匹配元素<!-- .element: class="normal" -->
 - 声明：指定样式<!-- .element: class="normal" -->

```css
p {
    color: #ff3333;  /* 每条声明由键值对形式组成，分号隔开 */
    font-size: 20px;
}
```

---

## 引入方式

--

1.内联式（行内样式）
```html 
<p style="color:#ff3333;font-size:20px;">这是20px大小的红色的文字</p>
```

这是20px大小的红色的文字 <!-- .element: style="color:#ff3333;font-size:20px;" -->  

--

2.嵌入式（style标签）
```html [5-10,13]
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <style>
        .red {
            color: #ff3333;
            font-size: 20px;
        }
    </style>
  </head>
  <body>
      <p class="red"></p>
  </body>
</html>
```

--

3.外部式（link标签）
```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <link href="./style.css" rel="stylesheet" />
  </head>
  <body>
      <p class="red"></p>
  </body>
</html>
```  

```css
.red {
    color: #ff3333;
    font-size: 20px;
}
```

--

### 样式权重

**内联式** > **嵌入式**&**外部式**  

**嵌入式**和**外部式**根据就近原则决定（后覆盖前）
