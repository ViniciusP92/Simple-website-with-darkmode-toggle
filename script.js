const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPainel: getStyle(html,"--bg-painel"),
    colorHeadings: getStyle (html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    listColor: getStyle(html, "--list-color")

}

const darkMode = {
    bg: "#000000",
    bgPainel: "#121212",
    colorHeadings: "white",
    colorText:"white",
    listColor: "red"
}

const transformKey = key =>
 "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
        )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})