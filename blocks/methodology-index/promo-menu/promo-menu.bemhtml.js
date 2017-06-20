block('promo-menu')(
    content()(function() {
        return [
            {
                block: 'legos',
                mods: { color: 'white' }
            },
            applyNext()
        ];
    }),
    elem('menu').tag()('ul'),
    elem('item').tag()('li'),
    elem('link').tag()('a')
);
