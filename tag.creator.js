function createTag(tag, attributes, filling) {
    var html = '<' + tag;
    for (var propName in attributes) {
        html += ' ' + propName + '="' + attributes[propName] + '"';
    }
    html += (filling == undefined) ? '/>' : '>' + filling + '</' + tag + '>';
    return html;
}
