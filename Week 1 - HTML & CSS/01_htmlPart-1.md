# Chapter 1 - INTRODUCTION to HTML

> **Part 1:** **HTML Basics.**

### Anatomy of an HTML Element

An HTML element consists of an opening tag, content, and a closing tag. Attributes can be added in the opening tag to provide additional info.

```html
<p class="info">This is a paragraph.</p>
```

### Document Structure

HTML documents start with a `<!DOCTYPE html>` declaration, followed by `<html>`, `<head>`, and `<body>` tags.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

### Headings (h1 to h6)

Headings are used to define titles or subtitles, ranging from `<h1>` (largest) to `<h6>` (smallest).

```html
<h1>Main Title</h1>
<h6>Smallest Heading</h6>
```

### Paragraphs

Paragraphs are defined using the `<p>` tag and represent blocks of text content.

```html
<p>This is a paragraph.</p>
```

### Images

Images are embedded using the `<img>` tag with `src` and `alt` attributes.

```html
<img src="image.jpg" alt="A description of the image" />
```

### Links - Absolute vs Relative

Absolute URLs point to an external site; relative URLs point to local paths.

```html
<!-- Absolute -->
<a href="https://example.com">Visit</a>
<!-- Relative -->
<a href="/about.html">About</a>
```

### Lists - Ordered, Unordered, Description

Lists help organize content into bullet or numbered formats.

```html
<ul>
  <li>Item</li>
</ul>
<!-- Unordered -->
<ol>
  <li>Item</li>
</ol>
<!-- Ordered -->
<dl>
  <dt>Term</dt>
  <dd>Def</dd>
</dl>
<!-- Description -->
```

### Div vs Span (Containers)

`<div>` is a block-level container; `<span>` is an inline container for grouping content.

```html
<div>Block content</div>
<span>Inline content</span>
```

### Block vs Inline

Block elements start on a new line and take full width, while inline elements stay within the flow.

```html
<!-- Block -->
<div>This is a block</div>
<!-- Inline -->
<span>This is inline</span>
```

### Forms & Tables

Forms collect user input; tables display tabular data.

```html
<form><input type="text" /></form>
<table>
  <tr>
    <td>Cell</td>
  </tr>
</table>
```

> **Part 1 Completed, Move to Next Part.** ➡️