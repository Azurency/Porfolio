export function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function addDynamicCssRule (rule) {
    const style = document.createElement('style')
    if (style.styleSheet) {
        style.styleSheet.cssText = rule
    } else {
        style.appendChild(document.createTextNode(rule))
    }
    document.getElementsByTagName('head')[0].appendChild(style)
}

export function cumulativeOffset (element) {
    var top = 0
    var left = 0
    do {
        top += element.offsetTop || 0
        left += element.offsetLeft || 0
        element = element.offsetParent
    } while (element)

    return {
        top: top,
        left: left
    }
}
