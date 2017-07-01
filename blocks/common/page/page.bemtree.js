block('page').content()(function() {
    var data = this.data,
        page = data.page,
        url = page.url;

    return [
        {
            block: 'header'
        },
        {
            block: 'sitemap'
        },
        {
            elem: 'content',
            content: [
                url !== '/forum/' && url !== '/' ? { block: 'nav' } : undefined,
                {
                    block: 'content',
                    content: (function() {
                        if (page.type) {
                            return page.type === 'bemjson.js' ? { html: page.content } : { block: page.type }
                        } else {
                            return { block: 'article-wrap' };
                        }
                    }())
                }
            ]
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
