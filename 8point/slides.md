class: center, middle

# 8 Point Grid

---

class: center

# Pixel Fitting

## Using multiples of 8 and/or 4 to define all areas of the **box-model** 🤔

<img src="https://i.giphy.com/media/cmNyvXwDSo2IhwYj0W/giphy.gif" width='400px' />

---

layout: true

# Box-model

---

<img src='/public/boxmodel.png' width='600px'>

---

<img src='/public/box-sizing.png' width='100%'>

```css
div {
  /* default */
  box-sizing: 'content-box';
}
```

---

```css
div {
  box-sizing: border-box;
}
```

The width and height properties include the content, padding, and border, but do not include the margin.

`total element size = (w + h) + (p + b)`

---

## box-sizing

<img src='/public/box-sizing.png' width='100%'>

---

layout: false
class: center, middle

# So why?

<img src="https://i.giphy.com/media/9MITppNYL8aYtqYZ27/giphy.gif" width='100%' />

---

layout: true
class: center

# Code **>** Mockups

---

class: middle

---

<img src="https://i.giphy.com/media/91fEJqgdsnu4E/giphy.gif" width='400px' />

---

Design apps and prototyping tools allow you to create near perfect visions of what UI **could** look like.

--

But when it comes to digital product design, a mockup or prototype’s sole purpose is to communicate a **proposed** solution to stakeholders and developers.

--

In the end, only what a developer can reproduce in code **(in combination with assets)** can make it to production.

---

## Prioritize reducing time between ideation and coding **over** perfect layouts and prototypes

> In most cases 😎

---

layout: true
class: center

# The Goal

---

### Every UI element you create should be aligned to the pixel grid.

--

This is a concept known as pixel-fitting and it ensures that all of your elements appear crisp on a user’s device.

<img src='/public/fitting.png' width='400px'>

---

## anti-aliasing??

<iframe width="560" height="315" src="https://www.youtube.com/embed/hqi0114mwtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## A note about text

Text is somewhat of an outlier here as the unique metrics that allow your eyes to read letters require a little bit of the **anti-aliasing** that makes other shapes blurry.

So, don’t worry about every point of your letters aligning to the pixel grid.

The elements the text are in are the importaint part

---

layout:false
class: center, middle

# Nice! Go on!!

<img src="https://i.giphy.com/media/l4JyX3V0yydvPHNBe/giphy.gif" width='100%' />

---

layout: true

# Dev Benifits

---

class: center, middle

---

## Consistent UI

### When all of your measurements follow the same rules...

--

### ...you automatically get a more consistent UI.

--

### Fewer decisions = more time creating value (**_coding_**)

<!-- By removing 7 of every 8 spacing options, you reduce the amount of fiddling available to you and subsequently reduce speed to code. -->

---

## Multi-platform design

--

### Most popular screen sizes are divisible by 8 on at least one axis

<img src='/public/sizes.png' width='400px'>

---

<img src='/public/1.png' width='70%'>
