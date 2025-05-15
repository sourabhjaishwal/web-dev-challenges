# Chapter 1 - INTRODUCTION to HTML

> **Part 2:** **HTML Advance.**

### Semantic Tags

Semantic tags describe the meaning of content, improving accessibility and SEO.

```html
<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="home">
    <h2>Welcome</h2>
    <p>This is the homepage content.</p>
  </section>

  <aside>
    <h2>Sidebar Content</h2>
    <p>This can be related links, ads, or additional info.</p>
  </aside>
</main>

<footer>
  <p>&copy; 2025 Your Company Name. All rights reserved.</p>
</footer>
```

#### Explanation of Semantic Tags

- `<header>`: Defines the header of a document or section, often includes logo and navigation.

- `<nav>`: Contains navigation links.

- `<main>`: Represents the main content of the page.

- `<section>`: Groups related content with a heading.

- `<article>`: Represents a self-contained piece of content (e.g., blog post, product card).

- `<aside>`: Contains content tangentially related to the main content (e.g., sidebar).

- `<footer>`: Contains footer information like copyright.

### Multimedia Tags

HTML supports media through `<audio>` and `<video>` tags.

```html
<video controls><source src="video.mp4" type="video/mp4" /></video>
```

### ARIA Labels

ARIA (Accessible Rich Internet Applications) labels improve accessibility for screen readers.

```html
<button aria-label="Close">X</button>
```

### Favicon, iframe & canvas Tags

- **Favicon** is a small icon shown in browser tabs.
- **iframe** embeds another page.
- **canvas** allows drawing graphics with JavaScript.

```html
<link rel="icon" href="favicon.ico" />
<iframe src="page.html"></iframe>
<canvas id="myCanvas"></canvas>
```

### Character Entities, code Tag

Character entities display reserved characters; `<code>` displays code snippets.

```html
<p>&lt;div&gt; is a tag</p>
<code>console.log("Hi")</code>
```

### meta Tag

`<meta>` provides metadata about the document, like character set or viewport settings.

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### What is SEO

Search Engine Optimization (SEO) is the practice of optimizing a website to rank higher in search engines. HTML helps via semantic tags, meta tags, alt text, and proper structure.

### HTML Core Web Vitals

Core Web Vitals are key metrics by Google to measure user experience in terms of speed, responsiveness, and visual stability.

#### 1. Largest Contentful Paint (LCP)

- **Measures:** Load time of the largest visible content.
- **Good Score:** < 2.5 seconds
- **Tips:**
  - Optimize images and preload important assets.
  - Reduce render-blocking scripts.

```html
<link rel="preload" href="hero.jpg" as="image" />
<img src="hero.jpg" width="800" height="400" loading="lazy" />
```

#### 2. First Input Delay (FID)

- **Measures:** Time from user interaction to browser response.
- **Good Score:** < 100 ms
- **Tips:**

  - Minimize JavaScript.
  - Use native elements for faster interactivity.

```html
<button onclick="handleClick()">Submit</button>
```

> FID will be replaced by **INP** (Interaction to Next Paint) in future updates.

#### 3. Cumulative Layout Shift (CLS)

- **Measures:** Unexpected layout movements during load.
- **Good Score:** < 0.1
- **Tips:**

  - Set width and height for all media.
  - Reserve space for dynamic content.

```html
<img src="product.jpg" width="300" height="300" />
```

#### Tools for Testing

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Chrome DevTools → Performance Tab

<br>

> **HTML Section Completed.** 🚀
