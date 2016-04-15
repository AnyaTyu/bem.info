block('header').content()(function() {
    var data = this.data,
        url = data.page.url;

    return [
        {
            elem: 'layout',
            content: [
                {
                    block: 'logo',
                    url: url !== '/' ? data.root + '/' : undefined
                },
                {
                    block: 'lang-switcher'
                },
                url.indexOf('/forum/') === -1 ? {
                    elem: 'forum',
                    content: this.i18n(this.block, 'forum'), // Forum
                    attrs: { href: data.root + '/forum/' }
                } : undefined
            ]
        },
        {
            block: 'search',
            mix: { block: 'header', elem: 'search' }
        },
        {
            elem: 'menu',
            content: [
                {
                    block: 'breadcrumbs',
                    mix: { block: 'header-layout', elem: 'breadcrumbs' }
                },
                url !== '/forum/' && url !== '/' ? { block: 'nav' } : undefined
            ]
        },
        {
            elem: 'toggle'
        }
    ];
});
