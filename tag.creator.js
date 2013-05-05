/**
 * Author Dmitry Vapelnik (dvapelnik@gmail.com)
 * 04.04.2013
 *
 * usages:
 * console.log(createTag('div', {id: "some id", style:{margin:"10px", display: "inline-block"}}, 'text'));
 * console.log(createTag('img', {src: "/some/image.jpg", style: {width: "10px", height: "6px"}, class: "some-class"}))
 *
 * @param tag Tag name
 * @param attributes Attributes as object with fields (style is object also)
 * @param filling Filling of tag. Can be createTg also
 * @returns {string} Constructed HTML tag with attributes and filling as string
 */
function createTag(tag, attributes, filling) {
    var html = '<' + tag;
    for (var propName in attributes) {
        switch (typeof attributes[propName]) {
            case 'string':
                html += ' ' + propName + '="' + attributes[propName] + '"';
                break;
            case 'object':
                var objectString = '';
                for (var objectFieldName in attributes[propName]) {
                    objectString += objectFieldName + ': ' + attributes[propName][objectFieldName] + '; ';
                }
                html += ' ' + propName + '="' + objectString.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '') + '"';
                break;
            default :
        }
    }
    html += (filling == undefined) ? '/>' : '>' + filling + '</' + tag + '>';
    return html;
}
