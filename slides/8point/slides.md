class: center, middle

# 8 Point Grid

---

# 8 Point Grid

## What it's not...

--

```css
.thing {
  display: grid;
}
```

---

layout: true

# 8 Point Grid

---

## What it is...

--

### Using multiples of 8 to define all areas of the...

---

## ...box-model.

<img src="https://i.giphy.com/media/cmNyvXwDSo2IhwYj0W/giphy.gif" width='500px' />

---

layout: true

# box-model

---

<img src='/static/images/boxmodel.png' width='600px'>

---

<img src='/static/images/box-sizing.png' width='80%'>

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

<a href='/examples/box-model/' target="_blank">Example</a>

<img src="https://i.giphy.com/media/RCBQSWiMPTQly/giphy.gif" width='60%' />

---

layout: false

# So why?

<img src="https://i.giphy.com/media/l1ugnxfAt6mCBis4o/giphy.gif" width='70%' />

---

class: center, middle

# Code **>** Mockups

---

class: center
layout: true

# Code **>** Mockups

---

<img src="https://i.giphy.com/media/xT0GqJyFsq8ByBfEmQ/giphy.gif" width='80%' />

---

#### Design apps and prototyping tools allow us to create near perfect visions of what a UI **could** look be.

--

#### But, when it comes to digital product design (sass design, app design).

--

#### A mockup or prototype’s **sole purpose** is...

--

#### ...to communicate a **proposed** solution to stakeholders and...

--

#### ...**developers**.

--

#### In the end, only what a developer can reproduce in code **(in combination with assets)** can make it to production.

---

## In the end...

--

### ...only what a **developer** can reproduce in code **(in combination with assets)** can make it to production.

<img src="https://i.giphy.com/media/xTiTnBM1VMwMvVrJHa/giphy.gif" width='40%' />

---

## A thougth 🤷‍♂️

<img src="https://i.giphy.com/media/A4H1MCpeyWhJ6/giphy.gif" width='400px' />

---

### Let's prioritizing a reduction in time between **ideation** and coding...

<img src="https://i.giphy.com/media/l0HUpjhXKfTiscMog/giphy.gif" width='400px' />

---

### Let's prioritizing a reduction in time between **ideation** and coding...

### ...over perfect layouts and prototypes.

> In most cases 😎

---

<img src="https://i.giphy.com/media/R459x856IfF6w/giphy.gif" width='400px' />

---

layout: false
class: center

## What We do?

<img src="https://i.giphy.com/media/VJZjwxYnqce6CbXufG/giphy.gif" width='400px' />

---

# Benefits

<img src="https://i.giphy.com/media/ibXaC5vnxZlNNXVFy4/giphy.gif" width='60%' />

---

layout: true

# Benefits

---

## More time coding

--

### life > coding > things

---

## More time coding

### learning code

--

### teaching

--

### talking...

---

## More time coding

### Fewer decisions =

---

## More time coding

### Fewer decisions while coding = more time creating value (**coding**)

---

## More time coding

<img src="https://i.giphy.com/media/d2ZeJSRDqd8P4RIQ/giphy.gif" width='60%' />

---

<img src="https://i.giphy.com/media/fuPt258mumg6mpSIlI/giphy.gif" width='60%' />

---

## Consistent UI

--

### When all of our measurements follow the same rules...

--

### ...we automatically get a more consistent UI.

---

## Consistent UI

### no installs

--

### no configs

--

### no documentation

---

## NO documentation

<img src="https://i.giphy.com/media/26xBzL5fpjhJ9dQNa/giphy.gif" width='40%' />

---

## Consistent UI

### OK, some documentation..

#### It's a mindset

---

<img src="https://i.giphy.com/media/ZbB5JuzV6BmAXp43cp/giphy.gif" width='70%' />

---

layout: true

# Benefits

---

## Less cross talk

### TODO

---

layout: true

# Pixel Fitting

---

class: center, middle

---

## Ensures that all of your elements appear crisp on a user’s device.

---

<img src='/static/images/fitting.png' width='85%'>

---

## anti-aliasing??

<iframe width="560" height="315" src="https://www.youtube.com/embed/hqi0114mwtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<img src='/static/images/1.png' width='70%'>

---

### Most popular screen sizes are divisible by 8 on at least one axis

<img src='/static/images/sizes.png' width='400px'>

---

## @1x

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

layout: false

# FIN

---

layout: true
class: center

# The Goal

---

### Every UI element you create should be aligned to the pixel grid.

--
