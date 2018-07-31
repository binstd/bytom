webpackJsonp([0xe5dd7aa1403c],{912:function(n,e){n.exports={data:{markdownRemark:{html:'<p><code class="gatsby-code-text">StrictMode</code> is a tool for highlighting potential problems in an application. Like <code class="gatsby-code-text">Fragment</code>, <code class="gatsby-code-text">StrictMode</code> does not render any visible UI. It activates additional checks and warnings for its descendants.</p>\n<blockquote>\n<p>Note:</p>\n<p>Strict mode checks are run in development mode only; <em>they do not impact the production build</em>.</p>\n</blockquote>\n<p>You can enable strict mode for any part of your application. For example:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ExampleApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.StrictMode</span><span class="token punctuation">></span></span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentOne</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentTwo</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.StrictMode</span><span class="token punctuation">></span></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n        </div></p>\n<p>In the above example, strict mode checks will <em>not</em> be run against the <code class="gatsby-code-text">Header</code> and <code class="gatsby-code-text">Footer</code> components. However, <code class="gatsby-code-text">ComponentOne</code> and <code class="gatsby-code-text">ComponentTwo</code>, as well as all of their descendants, will have the checks.</p>\n<p><code class="gatsby-code-text">StrictMode</code> currently helps with:</p>\n<ul>\n<li><a href="#identifying-unsafe-lifecycles">Identifying components with unsafe lifecycles</a></li>\n<li><a href="#warning-about-legacy-string-ref-api-usage">Warning about legacy string ref API usage</a></li>\n<li><a href="#detecting-unexpected-side-effects">Detecting unexpected side effects</a></li>\n<li><a href="#detecting-legacy-context-api">Detecting legacy context API</a></li>\n</ul>\n<p>Additional functionality will be added with future releases of React.</p>\n<h3 id="identifying-unsafe-lifecycles"><a href="#identifying-unsafe-lifecycles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Identifying unsafe lifecycles</h3>\n<p>As explained <a href="/blog/2018/03/27/update-on-async-rendering.html">in this blog post</a>, certain legacy lifecycle methods are unsafe for use in async React applications. However, if your application uses third party libraries, it can be difficult to ensure that these lifecycles aren’t being used. Fortunately, strict mode can help with this!</p>\n<p>When strict mode is enabled, React compiles a list of all class components using the unsafe lifecycles, and logs a warning message with information about these components, like so:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/strict-mode-unsafe-lifecycles-warning-e4fdbff774b356881123e69ad88eda88-2535d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 13.96103896103896%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAjElEQVQI112Oaw6CQAwGuf/RRBcJETWR8Fh5BNZkuUDHFkw0/pjka9NOm8jJIYcUSY87LkPOOXIpoa4R75G+h7aFpoFxhHWFGL9Y/SHBFlXA7Q7lFR4VdB5M5J977jqYJhgGlaq4qvaeoXPbMT1uJCHLWJwjFAUvFc/67ZznRPsmBGRZNixvWP6t//pvEpXgSjHsOOkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="strict mode unsafe lifecycles warning"\n        title=""\n        src="/static/strict-mode-unsafe-lifecycles-warning-e4fdbff774b356881123e69ad88eda88-acf85.png"\n        srcset="/static/strict-mode-unsafe-lifecycles-warning-e4fdbff774b356881123e69ad88eda88-c1418.png 210w,\n/static/strict-mode-unsafe-lifecycles-warning-e4fdbff774b356881123e69ad88eda88-5d5d8.png 420w,\n/static/strict-mode-unsafe-lifecycles-warning-e4fdbff774b356881123e69ad88eda88-acf85.png 840w,\n/static/strict-mode-unsafe-lifecycles-warning-e4fdbff774b356881123e69ad88eda88-2535d.png 1232w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Addressing the issues identified by strict mode <em>now</em> will make it easier for you to take advantage of async rendering in future releases of React.</p>\n<h3 id="warning-about-legacy-string-ref-api-usage"><a href="#warning-about-legacy-string-ref-api-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Warning about legacy string ref API usage</h3>\n<p>Previously, React provided two ways for managing refs: the legacy string ref API and the callback API. Although the string ref API was the more convenient of the two, it had <a href="https://github.com/facebook/react/issues/1373">several downsides</a> and so our official recommendation was to <a href="/docs/refs-and-the-dom.html#legacy-api-string-refs">use the callback form instead</a>.</p>\n<p>React 16.3 added a third option that offers the convenience of a string ref without any of the downsides:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n        </div></p>\n<p>Since object refs were largely added as a replacement for string refs, strict mode now warns about usage of string refs.</p>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>Callback refs will continue to be supported in addition to the new <code class="gatsby-code-text">createRef</code> API.</p>\n<p>You don’t need to replace callback refs in your components. They are slightly more flexible, so they will remain as an advanced feature.</p>\n</blockquote>\n<p><a href="/docs/refs-and-the-dom.html">Learn more about the new <code class="gatsby-code-text">createRef</code> API here.</a></p>\n<h3 id="detecting-unexpected-side-effects"><a href="#detecting-unexpected-side-effects" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Detecting unexpected side effects</h3>\n<p>Conceptually, React does work in two phases:</p>\n<ul>\n<li>The <strong>render</strong> phase determines what changes need to be made to e.g. the DOM. During this phase, React calls <code class="gatsby-code-text">render</code> and then compares the result to the previous render.</li>\n<li>The <strong>commit</strong> phase is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like <code class="gatsby-code-text">componentDidMount</code> and <code class="gatsby-code-text">componentDidUpdate</code> during this phase.</li>\n</ul>\n<p>The commit phase is usually very fast, but rendering can be slow. For this reason, the upcoming async mode (which is not enabled by default yet) breaks the rendering work into pieces, pausing and resuming the work to avoid blocking the browser. This means that React may invoke render phase lifecycles more than once before committing, or it may invoke them without committing at all (because of an error or a higher priority interruption).</p>\n<p>Render phase lifecycles include the following class component methods:</p>\n<ul>\n<li><code class="gatsby-code-text">constructor</code></li>\n<li><code class="gatsby-code-text">componentWillMount</code></li>\n<li><code class="gatsby-code-text">componentWillReceiveProps</code></li>\n<li><code class="gatsby-code-text">componentWillUpdate</code></li>\n<li><code class="gatsby-code-text">getDerivedStateFromProps</code></li>\n<li><code class="gatsby-code-text">shouldComponentUpdate</code></li>\n<li><code class="gatsby-code-text">render</code></li>\n<li><code class="gatsby-code-text">setState</code> updater functions (the first argument)</li>\n</ul>\n<p>Because the above methods might be called more than once, it’s important that they do not contain side-effects. Ignoring this rule can lead to a variety of problems, including memory leaks and invalid application state. Unfortunately, it can be difficult to detect these problems as they can often be <a href="https://en.wikipedia.org/wiki/Deterministic_algorithm">non-deterministic</a>.</p>\n<p>Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following methods:</p>\n<ul>\n<li>Class component <code class="gatsby-code-text">constructor</code> method</li>\n<li>The <code class="gatsby-code-text">render</code> method</li>\n<li><code class="gatsby-code-text">setState</code> updater functions (the first argument)</li>\n<li>The static <code class="gatsby-code-text">getDerivedStateFromProps</code> lifecycle</li>\n</ul>\n<blockquote>\n<p>Note:</p>\n<p>This only applies to development mode. <em>Lifecycles will not be double-invoked in production mode.</em></p>\n</blockquote>\n<p>For example, consider the following code:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">TopLevelRoute</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    SharedApplicationState<span class="token punctuation">.</span><span class="token function">recordEvent</span><span class="token punctuation">(</span><span class="token string">\'ExampleComponent\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n        </div></p>\n<p>At first glance, this code might not seem problematic. But if <code class="gatsby-code-text">SharedApplicationState.recordEvent</code> is not <a href="https://en.wikipedia.org/wiki/Idempotence#Computer_science_meaning">idempotent</a>, then instantiating this component multiple times could lead to invalid application state. This sort of subtle bug might not manifest during development, or it might do so inconsistently and so be overlooked.</p>\n<p>By intentionally double-invoking methods like the component constructor, strict mode makes patterns like this easier to spot.</p>\n<h3 id="detecting-legacy-context-api"><a href="#detecting-legacy-context-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Detecting legacy context API</h3>\n<p>The legacy context API is error-prone, and will be removed in a future major version. It still works for all 16.x releases but will show this warning message in strict mode:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/warn-legacy-context-in-strict-mode-fca5c5e1fb2ef2e2d59afb100b432c12-4b612.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 18.561872909698995%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAEABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAEDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB17A3Ij//xAAVEAEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAQABBQKv/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERIYH/2gAIAQEAAT8hwK0Qf//aAAwDAQACAAMAAAAQc9//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxBn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERcSFB/9oACAEBAAE/ELXZWCxb9NM//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="warn legacy context in strict mode"\n        title=""\n        src="/static/warn-legacy-context-in-strict-mode-fca5c5e1fb2ef2e2d59afb100b432c12-acf85.png"\n        srcset="/static/warn-legacy-context-in-strict-mode-fca5c5e1fb2ef2e2d59afb100b432c12-c1418.png 210w,\n/static/warn-legacy-context-in-strict-mode-fca5c5e1fb2ef2e2d59afb100b432c12-5d5d8.png 420w,\n/static/warn-legacy-context-in-strict-mode-fca5c5e1fb2ef2e2d59afb100b432c12-acf85.png 840w,\n/static/warn-legacy-context-in-strict-mode-fca5c5e1fb2ef2e2d59afb100b432c12-4b612.png 1196w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Read the <a href="/docs/context.html">new context API documentation</a> to help migrate to the new version.</p>',frontmatter:{title:"Strict Mode",next:null,prev:null},fields:{path:null,slug:"docs/strict-mode.html"}}},pathContext:{slug:"docs/strict-mode.html"}}}});
//# sourceMappingURL=path---docs-strict-mode-html-f5d0b62f040f3824f4ec.js.map