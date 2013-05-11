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
    'use strict';
    var html = '<' + tag,
        propName,
        objectString = '',
        objectFieldName;
    for (propName in attributes) {
        if (attributes.hasOwnProperty(propName)) {
            switch (typeof attributes[propName]) {
            case 'string':
                html += ' ' + propName + '="' + attributes[propName] + '"';
                break;
            case 'object':
                for (objectFieldName in attributes[propName]) {
                    if (attributes[propName].hasOwnProperty(objectFieldName)) {
                        objectString += objectFieldName + ': ' + attributes[propName][objectFieldName] + '; ';
                    }
                }
                html += ' ' + propName + '="' + objectString.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '') + '"';
                break;
            default:
            }
        }

    }
    html += (filling === undefined) ? '/>' : '>' + filling + '</' + tag + '>';
    return html;
}
