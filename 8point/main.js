const slideshow = remark.create({
  sourceUrl: './slides.md',
  highlightLanguage: 'javascript',
  highlightStyle: 'monokai',
  highlightLines: true,
  navigation: {
    scroll: false,
  },
})

console.log(slideshow)
