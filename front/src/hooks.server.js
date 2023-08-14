export const handle = ({ event, resolve }) => {
  const { cookies, url, request, locals } = event;

  // Language
  const acceptLanguage = request.headers.get('accept-language') ?? 'en';
  const lang = {
    cookie: cookies.get('lang'),
    header: acceptLanguage.split(',').map(v=>v.split(';')[0]),
    params: url.searchParams.get('lang')
  };
  lang.set = (lang.params) ? (() => { cookies.set('lang', lang.params); return lang.params })()
           : (lang.cookie) ? lang.cookie
           : (lang.header) ? lang.header[0]
           : 'en';

  // Theme
  const theme = {
    cookie: cookies.get('theme'),
    params: url.searchParams.get('theme')
  };
  theme.set = (theme.params) ? (() => { cookies.set('theme', theme.params); return theme.params })()
            : (theme.cookie) ? theme.cookie
            : '';

  locals.lang = lang.set;
  locals.theme = theme.set;
  
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%lang%', lang.set)
          .replace('%theme%', theme.set)
  });
}