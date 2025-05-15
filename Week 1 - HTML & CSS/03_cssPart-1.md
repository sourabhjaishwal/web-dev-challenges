# Chapter 2 - INTRODUCTION to CSS

> **Part 1:** **CSS Basics.**

#### **Intro to CSS**

CSS (Cascading Style Sheets) is used to style and layout HTML elements, enhancing the presentation of web content.
It separates content (HTML) from design (CSS).

#### **CSS Syntax**

CSS syntax consists of a selector and a declaration block containing property-value pairs.

```css
selector {
  property: value;
}
```

#### **Linking CSS - Inline, Internal, External**

CSS can be added in three ways: inline (within a tag), internal (in `<style>`), or external (linked `.css` file).

```html
<!-- Inline --> <p style="color:red;">Text</p>  
<!-- Internal -->
<style>p { color: red; }</style>  
<!-- External -->
<link rel="stylesheet" href="styles.css" />
```

#### **CSS Selectors**

Selectors target HTML elements to apply styles.

```css
/* Type */ p { }  
/* Class */ .class-name { }  
/* ID */ #id-name { }  
/* Attribute */ input[type="text"] { }
```

#### **Box Model (Content vs Border Box)**

Defines how elements are sized with content, padding, border, and margin. `box-sizing: border-box` includes padding/border in width.

```css
* { box-sizing: border-box; }
```

#### **Inline vs Block Element - Display**

`display: block` takes full width, `inline` fits content, and `inline-block` combines both.

```css
div { display: block; }  
span { display: inline; }
```

#### **Margin - Collapse Property**

Vertical margins between block elements collapse into the larger value instead of adding up.

```css
p { margin: 20px; } /* Two p's won't have 40px spacing */
```

#### **Colors, Background - Colors, Images in CSS**

You can set solid colors or use images as backgrounds.

```css
div { background-color: #f0f0f0; background-image: url('bg.jpg'); }
```

#### **Specificity and Cascade**

Specificity determines which style wins in conflicts; cascade is the order CSS is applied.

```css
/* ID > Class > Element */
#id { color: red; }
.class { color: blue; }
p { color: green; }
```

#### **Border Property**

Defines width, style, and color of an element’s border.

```css
div { border: 1px solid black; }
```

#### **Units in CSS**

CSS supports absolute (px, cm) and relative (em, rem, %, vw, vh) units.

```css
p { font-size: 16px; padding: 2em; width: 50vw; }
```

> **Part 1 Completed, Move to Next Part.** ➡️