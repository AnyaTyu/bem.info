block('promo-menu').content()(function(node, ctx) {
    var data = ctx.data;

    return [
        {
            elem: 'main',
            content: [
                { elem: 'menu-title', content: 'methodology' },
                {
                    elem: 'menu',
                    elemMods: { type: 'columns' },
                    content: data.map(function(value, index) {
                        return value.type !== 'additional' && {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                attrs: { href: data.root + value.url },
                                content: [
                                    { elem: 'number', content: index + 1 },
                                    {
                                        elem: 'link-text',
                                        content: [
                                            { elem: 'title', content: value.text },
                                            { elem: 'description', content: value.description }
                                        ]
                                    }
                                ]
                            }
                        }
                    })
                }
            ]
        },
        {
            elem: 'additional',
            content: [
                { elem: 'menu-title', content: 'additional info' },
                {
                    elem: 'menu',
                    elemMods: { type: 'additional' },
                    content: data.map(function(value) {
                        return value.type === 'additional' && {
                            elem: 'item',
                            content: {
                                elem: 'link',
                                attrs: { href: data.root + value.url },
                                content: [
                                    { elem: 'title', content: value.text },
                                    { elem: 'description', content: value.description }
                                ]
                            }
                        }
                    })
                }
            ]
        }
    ]
});
