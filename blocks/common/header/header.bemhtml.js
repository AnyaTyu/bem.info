block('header')(
    js()(true),
    elem('extended-menu').tag()('span'),
    elem('toggle')(
        js()(true),
        content()(function() {
            return { elem: 'line' }
        })
    ),
    elem('line').tag()('span'),
    elem('forum').tag()('a')
);
