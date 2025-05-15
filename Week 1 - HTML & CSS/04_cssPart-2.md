# Chapter 2 - INTRODUCTION to CSS

> **Part 2:** **CSS Advance.**

#### **Position and Overflow in CSS**

The `position` property controls element placement; `overflow` handles content overflow.

```css
div { position: relative; top: 10px; }  
div { overflow: auto; }
```

#### **CSS Float and Clear Property**

`float` positions elements side-by-side; `clear` prevents wrapping around floated elements.

```css
img { float: left; }  
.clearfix::after { content: ""; display: block; clear: both; }
```

#### **Gradient, Shadow and Filter in CSS**

Use gradients, shadows, and filters for visual effects.

```css
div {
  background: linear-gradient(to right, red, yellow);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  filter: blur(2px);
}
```

#### **Variables and Functions in CSS**

CSS variables store values, and functions like `calc()` allow dynamic styling.

```css
:root { --main-color: #3498db; }  
div { color: var(--main-color); width: calc(100% - 50px); }
```

#### **Transform and Transition**

`transform` modifies element shape/position; `transition` animates changes over time.

```css
div {
  transform: rotate(45deg);
  transition: all 0.3s ease-in-out;
}
```

#### **Animation and Keyframes**

Use `@keyframes` to define animations; apply with the `animation` property.

```css
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
div { animation: fade 2s ease-in; }
```

#### **What is Flexbox**

Flexbox is a layout model for aligning elements along a single axis (horizontal or vertical).

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### **What is Grid**

CSS Grid is a two-dimensional layout system using rows and columns.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
```

#### **Difference Between Flexbox and Grid**

Flexbox is for one-dimensional layouts (row or column), while Grid is for two-dimensional layouts (rows *and* columns).

* Use **Flexbox** for navbars or cards, **Grid** for full-page layouts.

#### **Breakpoint and Media Queries**

Media queries apply styles based on screen size to create responsive designs.

```css
@media (max-width: 768px) {
  body { background-color: lightgray; }
}
```

Let me know if you want a cheat sheet version or ready-to-copy project structure!

> **CSS Section Completed.** 🚀