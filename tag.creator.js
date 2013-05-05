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
