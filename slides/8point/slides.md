<div style="z-index: 1; position: relative; height: 100%;">
<div style="z-index: 1; position: relative; text-align: center; padding: 3rem;">
<h1>
8 Point Grid
</h1>
<quote>
The grid. A digital frontier. I tried to picture clusters of information as they moved through the computer. What did they look like? Ships, motorcycles. With the circuits like freeways. I kept dreaming of a world I thought I'd never see. And then one day, I got in. - Kevin Flynn
</quote>
</div>

  <img style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); height: 100%; width: 100%; z-index: 0" src="https://i.giphy.com/media/Uqw7f8I9UDiuE2tu1H/giphy.gif" width='500px' />

</div>

---

# 8 Point Grid

- What is it?

--

- Why it matters.

--

- How it works

--

- Benifits

--

- Whats next?

---

# 8 Point Grid

This is the first step of many.

--

Nothing has been decided!

  <img src="https://i.giphy.com/media/smW5FBep69d3q/giphy.gif" width='500px' />

---

# 8 Point Grid

## What it's not...

--

```css
.thing {
  display: grid;
}
```

--

- layout templates

--

- framework

---

layout: true

# 8 Point Grid

---

## What IT is...

--

### Use multiples of 8px to define dimensions, padding, borders, and margin of both block and inline elements.

---

## What IT is...

Using multiples of 8px to define all areas of the...

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
class: center

# So, Why does this matters?

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

#### Design apps and prototyping tools allow us to create near perfect visions of what a UI **could** be.

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

### ...only what a **developer** can reproduce in code **(in combination with assets)** can make it to production.

<img src="https://i.giphy.com/media/xTiTnBM1VMwMvVrJHa/giphy.gif" width='40%' />

---

### We should prioritize a reduction in time between **ideation** and coding...

--

### ...over perfect layouts and prototypes.

> In most cases 😎

---

<img src="https://i.giphy.com/media/R459x856IfF6w/giphy.gif" width='400px' />

---

layout: false
class: center

## How we do this?

<img src="https://i.giphy.com/media/VJZjwxYnqce6CbXufG/giphy.gif" width='400px' />

---

class: center

# Benefits

<img src="https://i.giphy.com/media/ibXaC5vnxZlNNXVFy4/giphy.gif" width='60%' />

---

layout: true

# Benefits

---

## Consistent UI

--

### When all of our measurements follow the same rules...

--

### ...we automatically get a more consistent UI.

---

## Consistent UI

- ### no designs

--

- ### no installs

--

- ### It's a mind-set

---

## Multi-platform design

<img src='/static/images/sizes.png' width='75%'>

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

### OK, maybe some documentation 🤪

--

## It's a mind-set

---

### There's more...

<img src="https://i.giphy.com/media/0NAxDmdrb9t8aA2yh2/giphy.gif" width='40%' />

---

## More time coding

--

### Fewer decisions while coding = more time creating value (**coding**)

---

## More time coding

### learning code

--

### teaching

--

### talking...

---

layout: true

# Benefits

---

## Less cross talk

Less communication between designers and developers (no fussing over pixels).

A developer can effortlessly eyeball an 8pt increment instead of having to measure each time.

---

## Strength in brand

### clients

Consistent aesthetic to the brand they trust.

No blurry half-pixel offsets on their preferred device.

---

layout:false
class: center, middle

# Nice! Go on!!

<img src="https://i.giphy.com/media/l4JyX3V0yydvPHNBe/giphy.gif" width='100%' />

---

layout: false
class: center, middle

# Alright, Let's talk technical...

---

layout: true

# Pixel Fitting

---

---

## Ensures that all of your elements appear crisp on a user’s device.

---

## Scaling

Screen sizes and pixel densities has continued to increase making the work of asset generation more complicated for designers.

--

Utilizing an even number like 8 to size and space elements makes scaling for a wide variety of devices straightforward and consistent.

--

Devices that have a 1.5x resolution will have a hard time cleanly rendering an odd number.

--

Scaling 5px by 1.5x will result in a half pixel offset.

---

<img src='/static/images/fitting.png' width='85%'>

---

## So, what's making those pixels

### Guesses??

---

## Anti-aliasing??

<iframe width="560" height="315" src="https://www.youtube.com/embed/hqi0114mwtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<img src='/static/images/1.png' width='70%'>

---

### Most popular screen sizes are divisible by 8 on at least one axis

<img src='/static/images/sizes.png' width='400px'>

---

## A note about text

When the only contents of a block element are text (e.g. buttons), set the text to a size consistent with the rest of your UI and/or the specific platform, then use padding to determine the size of the block element. In cases of a full-width element, use padding to determine height and a consistent horizontal margin to determine width.

Text is somewhat of an outlier here as the unique metrics that allow your eyes to read letters require a little bit of the **anti-aliasing** that makes other shapes blurry.

So, don’t worry about every point of your letters aligning to the pixel grid.

The elements the text are in are the importaint part

---

layout: false

# What's next?

- Align with rest of Flex

--

- Align with Design and Product

--

- Share with Development and implement

--

- Value

---

layout: false
class: center, middle

<div style="z-index: 1; position: relative; height: 100%;">
<div style="z-index: 1; position: relative; text-align: center; padding: 3rem;">
<h1>
FIN
</h1>
<a href="https://github.com/destinio/SLIDES/blob/main/slides/8point/slides.md" style="color: #fff; display: block; margin: 0 0 2rem;">SLIDES</a>

<img src="https://i.giphy.com/media/Xj1GHC7mXPquY/giphy.gif" width='60%' />
</div>

  <img style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); height: 100%; width: 100%; z-index: 0" src="https://i.giphy.com/media/Uqw7f8I9UDiuE2tu1H/giphy.gif" width='500px' />

</div>
