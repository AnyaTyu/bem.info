block('page').mod('type', 'lib').content()(function() {
    return [
        {
            block: 'header'
        },
        {
            block: 'sitemap'
        },
        {
            block: 'nav',
            mods: { type: 'lib' }
        },
        {
            block: 'content',
            content: { block: 'blocks' }
        },
        {
            block: 'footer'
        },
        {
            block: 'yandex-metrica',
            params: {
                id: '16972024',
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            }
        }
    ];
});
