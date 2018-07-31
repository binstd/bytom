webpackJsonp([0x8b0a0f6c754b],{779:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We’re happy to announce our first release candidate for React 0.14! We gave you a <a href="/blog/2015/07/03/react-v0.14-beta-1.html">sneak peek in July</a> at the upcoming changes but we’ve now stabilized the release more and we’d love for you to try it out before we release the final version.</p>\n<p>Let us know if you run into any problems by filing issues on our <a href="https://github.com/facebook/react">GitHub repo</a>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>We recommend using React from <code class="gatsby-code-text">npm</code> and using a tool like browserify or webpack to build your code into a single package:</p>\n<ul>\n<li><code class="gatsby-code-text">npm install --save react@0.14.0-rc1</code></li>\n<li><code class="gatsby-code-text">npm install --save react-dom@0.14.0-rc1</code></li>\n</ul>\n<p>Remember that by default, React runs extra checks and provides helpful warnings in development mode. When deploying your app, set the <code class="gatsby-code-text">NODE_ENV</code> environment variable to <code class="gatsby-code-text">production</code> to use the production build of React which does not include the development warnings and runs significantly faster.</p>\n<p>If you can’t use <code class="gatsby-code-text">npm</code> yet, we also provide pre-built browser builds for your convenience:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.14.0-rc1.js">https://fb.me/react-0.14.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.14.0-rc1.min.js">https://fb.me/react-0.14.0-rc1.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.14.0-rc1.js">https://fb.me/react-with-addons-0.14.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.14.0-rc1.min.js">https://fb.me/react-with-addons-0.14.0-rc1.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-0.14.0-rc1.js">https://fb.me/react-dom-0.14.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-0.14.0-rc1.min.js">https://fb.me/react-dom-0.14.0-rc1.min.js</a>  </li>\n</ul>\n<p>These builds are also available in the <code class="gatsby-code-text">react</code> package on bower.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="major-changes"><a href="#major-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Major changes</h3>\n<ul>\n<li>\n<h4 id="two-packages-react-and-react-dom"><a href="#two-packages-react-and-react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Two Packages: React and React DOM</h4>\n<p>As we look at packages like <a href="https://github.com/facebook/react-native">react-native</a>, <a href="https://github.com/reactjs/react-art">react-art</a>, <a href="https://github.com/Flipboard/react-canvas">react-canvas</a>, and <a href="https://github.com/Izzimach/react-three">react-three</a>, it has become clear that the beauty and essence of React has nothing to do with browsers or the DOM.</p>\n<p>To make this more clear and to make it easier to build more environments that React can render to, we’re splitting the main <code class="gatsby-code-text">react</code> package into two: <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-dom</code>. <strong>This paves the way to writing components that can be shared between the web version of React and React Native.</strong> We don’t expect all the code in an app to be shared, but we want to be able to share the components that do behave the same across platforms.</p>\n<p>The <code class="gatsby-code-text">react</code> package contains <code class="gatsby-code-text">React.createElement</code>, <code class="gatsby-code-text">.createClass</code>, <code class="gatsby-code-text">.Component</code>, <code class="gatsby-code-text">.PropTypes</code>, <code class="gatsby-code-text">.Children</code>, and the other helpers related to elements and component classes. We think of these as the <a href="http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/"><em>isomorphic</em></a> or <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9"><em>universal</em></a> helpers that you need to build components.</p>\n<p>The <code class="gatsby-code-text">react-dom</code> package has <code class="gatsby-code-text">ReactDOM.render</code>, <code class="gatsby-code-text">.unmountComponentAtNode</code>, and <code class="gatsby-code-text">.findDOMNode</code>. In <code class="gatsby-code-text">react-dom/server</code> we have server-side rendering support with <code class="gatsby-code-text">ReactDOMServer.renderToString</code> and <code class="gatsby-code-text">.renderToStaticMarkup</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> ReactDOM <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-dom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We’ve published the <a href="https://github.com/reactjs/react-codemod/blob/master/README.md">automated codemod script</a> we used at Facebook to help you with this transition.</p>\n<p>The add-ons have moved to separate packages as well: <code class="gatsby-code-text">react-addons-clone-with-props</code>, <code class="gatsby-code-text">react-addons-create-fragment</code>, <code class="gatsby-code-text">react-addons-css-transition-group</code>, <code class="gatsby-code-text">react-addons-linked-state-mixin</code>, <code class="gatsby-code-text">react-addons-perf</code>, <code class="gatsby-code-text">react-addons-pure-render-mixin</code>, <code class="gatsby-code-text">react-addons-shallow-compare</code>, <code class="gatsby-code-text">react-addons-test-utils</code>, <code class="gatsby-code-text">react-addons-transition-group</code>, and <code class="gatsby-code-text">react-addons-update</code>, plus <code class="gatsby-code-text">ReactDOM.unstable_batchedUpdates</code> in <code class="gatsby-code-text">react-dom</code>.</p>\n<p>For now, please use matching versions of <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-dom</code> in your apps to avoid versioning problems.</p>\n</li>\n<li>\n<h4 id="dom-node-refs"><a href="#dom-node-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DOM node refs</h4>\n<p>The other big change we’re making in this release is exposing refs to DOM components as the DOM node itself. That means: we looked at what you can do with a <code class="gatsby-code-text">ref</code> to a React DOM component and realized that the only useful thing you can do with it is call <code class="gatsby-code-text">this.refs.giraffe.getDOMNode()</code> to get the underlying DOM node. In this release, <code class="gatsby-code-text">this.refs.giraffe</code> <em>is</em> the actual DOM node. <strong>Note that refs to custom (user-defined) components work exactly as before; only the built-in DOM components are affected by this change.</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> Zoo <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Giraffe name<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>giraffe<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  showName<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Previously: var input = this.refs.giraffe.getDOMNode();</span>\n    <span class="token keyword">var</span> input <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>giraffe<span class="token punctuation">;</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This change also applies to the return result of <code class="gatsby-code-text">ReactDOM.render</code> when passing a DOM node as the top component. As with refs, this change does not affect custom components. With these changes, we’re deprecating <code class="gatsby-code-text">.getDOMNode()</code> and replacing it with <code class="gatsby-code-text">ReactDOM.findDOMNode</code> (see below).</p>\n</li>\n<li>\n<h4 id="stateless-function-components"><a href="#stateless-function-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stateless function components</h4>\n<p>In idiomatic React code, most of the components you write will be stateless, simply composing other components. We’re introducing a new, simpler syntax for these components where you can take <code class="gatsby-code-text">props</code> as an argument and return the element you want to render:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Using an ES2015 (ES6) arrow function:</span>\n<span class="token keyword">var</span> <span class="token function-variable function">Aquarium</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> fish <span class="token operator">=</span> <span class="token function">getFish</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>species<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tank</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>fish<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tank</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Or with destructuring and an implicit return, simply:</span>\n<span class="token keyword">var</span> <span class="token function-variable function">Aquarium</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>species<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span><span class="token function">getFish</span><span class="token punctuation">(</span>species<span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tank</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Then use: &lt;Aquarium species="rainbowfish" /></span></code></pre>\n      </div>\n<p>This pattern is designed to encourage the creation of these simple components that should comprise large portions of your apps. In the future, we’ll also be able to make performance optimizations specific to these components by avoiding unnecessary checks and memory allocations.</p>\n</li>\n<li>\n<h4 id="deprecation-of-react-tools"><a href="#deprecation-of-react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecation of react-tools</h4>\n<p>The <code class="gatsby-code-text">react-tools</code> package and <code class="gatsby-code-text">JSXTransformer.js</code> browser file <a href="/blog/2015/06/12/deprecating-jstransform-and-react-tools.html">have been deprecated</a>. You can continue using version <code class="gatsby-code-text">0.13.3</code> of both, but we no longer support them and recommend migrating to <a href="http://babeljs.io/">Babel</a>, which has built-in support for React and JSX.</p>\n</li>\n<li>\n<h4 id="compiler-optimizations"><a href="#compiler-optimizations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Compiler optimizations</h4>\n<p>React now supports two compiler optimizations that can be enabled in Babel 5.8.23 and newer. Both of these transforms <strong>should be enabled only in production</strong> (e.g., just before minifying your code) because although they improve runtime performance, they make warning messages more cryptic and skip important checks that happen in development mode, including propTypes.</p>\n<p><strong>Inlining React elements:</strong> The <code class="gatsby-code-text">optimisation.react.inlineElements</code> transform converts JSX elements to object literals like <code class="gatsby-code-text">{type: &#39;div&#39;, props: ...}</code> instead of calls to <code class="gatsby-code-text">React.createElement</code>.</p>\n<p><strong>Constant hoisting for React elements:</strong> The <code class="gatsby-code-text">optimisation.react.constantElements</code> transform hoists element creation to the top level for subtrees that are fully static, which reduces calls to <code class="gatsby-code-text">React.createElement</code> and the resulting allocations. More importantly, it tells React that the subtree hasn’t changed so React can completely skip it when reconciling.</p>\n</li>\n</ul>\n<h3 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking changes</h3>\n<p>As always, we have a few breaking changes in this release. Whenever we make large changes, we warn for at least one release so you have time to update your code. The Facebook codebase has over 15,000 React components, so on the React team, we always try to minimize the pain of breaking changes.</p>\n<p>These three breaking changes had a warning in 0.13, so you shouldn’t have to do anything if your code is already free of warnings:</p>\n<ul>\n<li>The <code class="gatsby-code-text">props</code> object is now frozen, so mutating props after creating a component element is no longer supported. In most cases, <a href="/docs/top-level-api.html#react.cloneelement"><code class="gatsby-code-text">React.cloneElement</code></a> should be used instead. This change makes your components easier to reason about and enables the compiler optimizations mentioned above.</li>\n<li>Plain objects are no longer supported as React children; arrays should be used instead. You can use the <a href="/docs/create-fragment.html"><code class="gatsby-code-text">createFragment</code></a> helper to migrate, which now returns an array.</li>\n<li>Add-Ons: <code class="gatsby-code-text">classSet</code> has been removed. Use <a href="https://github.com/JedWatson/classnames">classnames</a> instead.</li>\n</ul>\n<p>And these two changes did not warn in 0.13 but should be easy to find and clean up:</p>\n<ul>\n<li><code class="gatsby-code-text">React.initializeTouchEvents</code> is no longer necessary and has been removed completely. Touch events now work automatically.</li>\n<li>Add-Ons: Due to the DOM node refs change mentioned above, <code class="gatsby-code-text">TestUtils.findAllInRenderedTree</code> and related helpers are no longer able to take a DOM component, only a custom component.</li>\n</ul>\n<h3 id="new-deprecations-introduced-with-a-warning"><a href="#new-deprecations-introduced-with-a-warning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New deprecations, introduced with a warning</h3>\n<ul>\n<li>\n<p>Due to the DOM node refs change mentioned above, <code class="gatsby-code-text">this.getDOMNode()</code> is now deprecated and <code class="gatsby-code-text">ReactDOM.findDOMNode(this)</code> can be used instead. Note that in most cases, calling <code class="gatsby-code-text">findDOMNode</code> is now unnecessary – see the example above in the “DOM node refs” section.</p>\n<p>If you have a large codebase, you can use our <a href="https://github.com/facebook/react/blob/master/packages/react-codemod/README.md">automated codemod script</a> to change your code automatically.</p>\n</li>\n<li>\n<p><code class="gatsby-code-text">setProps</code> and <code class="gatsby-code-text">replaceProps</code> are now deprecated. Instead, call ReactDOM.render again at the top level with the new props.</p>\n</li>\n<li>\n<p>ES6 component classes must now extend <code class="gatsby-code-text">React.Component</code> in order to enable stateless function components. The <a href="/blog/2015/01/27/react-v0.13.0-beta-1.html#other-languages">ES3 module pattern</a> will continue to work.</p>\n</li>\n<li>\n<p>Reusing and mutating a <code class="gatsby-code-text">style</code> object between renders has been deprecated. This mirrors our change to freeze the <code class="gatsby-code-text">props</code> object.</p>\n</li>\n<li>\n<p>Add-Ons: <code class="gatsby-code-text">cloneWithProps</code> is now deprecated. Use <a href="/docs/top-level-api.html#react.cloneelement"><code class="gatsby-code-text">React.cloneElement</code></a> instead (unlike <code class="gatsby-code-text">cloneWithProps</code>, <code class="gatsby-code-text">cloneElement</code> does not merge <code class="gatsby-code-text">className</code> or <code class="gatsby-code-text">style</code> automatically; you can merge them manually if needed).</p>\n</li>\n<li>\n<p>Add-Ons: To improve reliability, <code class="gatsby-code-text">CSSTransitionGroup</code> will no longer listen to transition events. Instead, you should specify transition durations manually using props such as <code class="gatsby-code-text">transitionEnterTimeout={500}</code>.</p>\n</li>\n</ul>\n<h3 id="notable-enhancements"><a href="#notable-enhancements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notable enhancements</h3>\n<ul>\n<li>Added <code class="gatsby-code-text">React.Children.toArray</code> which takes a nested children object and returns a flat array with keys assigned to each child. This helper makes it easier to manipulate collections of children in your <code class="gatsby-code-text">render</code> methods, especially if you want to reorder or slice <code class="gatsby-code-text">this.props.children</code> before passing it down. In addition, <code class="gatsby-code-text">React.Children.map</code> now returns plain arrays too.</li>\n<li>React uses <code class="gatsby-code-text">console.error</code> instead of <code class="gatsby-code-text">console.warn</code> for warnings so that browsers show a full stack trace in the console. (Our warnings appear when you use patterns that will break in future releases and for code that is likely to behave unexpectedly, so we do consider our warnings to be “must-fix” errors.)</li>\n<li>Previously, including untrusted objects as React children <a href="http://danlec.com/blog/xss-via-a-spoofed-react-element">could result in an XSS security vulnerability</a>. This problem should be avoided by properly validating input at the application layer and by never passing untrusted objects around your application code. As an additional layer of protection, <a href="https://github.com/facebook/react/pull/4832">React now tags elements</a> with a specific <a href="http://www.2ality.com/2014/12/es6-symbols.html">ES2015 (ES6) <code class="gatsby-code-text">Symbol</code></a> in browsers that support it, in order to ensure that React never considers untrusted JSON to be a valid element. If this extra security protection is important to you, you should add a <code class="gatsby-code-text">Symbol</code> polyfill for older browsers, such as the one included by <a href="http://babeljs.io/docs/usage/polyfill/">Babel’s polyfill</a>.</li>\n<li>When possible, React DOM now generates XHTML-compatible markup.</li>\n<li>React DOM now supports these standard HTML attributes: <code class="gatsby-code-text">capture</code>, <code class="gatsby-code-text">challenge</code>, <code class="gatsby-code-text">inputMode</code>, <code class="gatsby-code-text">is</code>, <code class="gatsby-code-text">keyParams</code>, <code class="gatsby-code-text">keyType</code>, <code class="gatsby-code-text">minLength</code>, <code class="gatsby-code-text">summary</code>, <code class="gatsby-code-text">wrap</code>. It also now supports these non-standard attributes: <code class="gatsby-code-text">autoSave</code>, <code class="gatsby-code-text">results</code>, <code class="gatsby-code-text">security</code>.</li>\n<li>React DOM now supports these SVG attributes, which render into namespaced attributes: <code class="gatsby-code-text">xlinkActuate</code>, <code class="gatsby-code-text">xlinkArcrole</code>, <code class="gatsby-code-text">xlinkHref</code>, <code class="gatsby-code-text">xlinkRole</code>, <code class="gatsby-code-text">xlinkShow</code>, <code class="gatsby-code-text">xlinkTitle</code>, <code class="gatsby-code-text">xlinkType</code>, <code class="gatsby-code-text">xmlBase</code>, <code class="gatsby-code-text">xmlLang</code>, <code class="gatsby-code-text">xmlSpace</code>.</li>\n<li>The <code class="gatsby-code-text">image</code> SVG tag is now supported by React DOM.</li>\n<li>In React DOM, arbitrary attributes are supported on custom elements (those with a hyphen in the tag name or an <code class="gatsby-code-text">is=&quot;...&quot;</code> attribute).</li>\n<li>React DOM now supports these media events on <code class="gatsby-code-text">audio</code> and <code class="gatsby-code-text">video</code> tags: <code class="gatsby-code-text">onAbort</code>, <code class="gatsby-code-text">onCanPlay</code>, <code class="gatsby-code-text">onCanPlayThrough</code>, <code class="gatsby-code-text">onDurationChange</code>, <code class="gatsby-code-text">onEmptied</code>, <code class="gatsby-code-text">onEncrypted</code>, <code class="gatsby-code-text">onEnded</code>, <code class="gatsby-code-text">onError</code>, <code class="gatsby-code-text">onLoadedData</code>, <code class="gatsby-code-text">onLoadedMetadata</code>, <code class="gatsby-code-text">onLoadStart</code>, <code class="gatsby-code-text">onPause</code>, <code class="gatsby-code-text">onPlay</code>, <code class="gatsby-code-text">onPlaying</code>, <code class="gatsby-code-text">onProgress</code>, <code class="gatsby-code-text">onRateChange</code>, <code class="gatsby-code-text">onSeeked</code>, <code class="gatsby-code-text">onSeeking</code>, <code class="gatsby-code-text">onStalled</code>, <code class="gatsby-code-text">onSuspend</code>, <code class="gatsby-code-text">onTimeUpdate</code>, <code class="gatsby-code-text">onVolumeChange</code>, <code class="gatsby-code-text">onWaiting</code>.</li>\n<li>Many small performance improvements have been made.</li>\n<li>Many warnings show more context than before.</li>\n<li>Add-Ons: A <a href="https://github.com/facebook/react/pull/3355"><code class="gatsby-code-text">shallowCompare</code></a> add-on has been added as a migration path for <code class="gatsby-code-text">PureRenderMixin</code> in ES6 classes.</li>\n<li>Add-Ons: <code class="gatsby-code-text">CSSTransitionGroup</code> can now use <a href="https://github.com/facebook/react/blob/48942b85/docs/docs/10.1-animation.md#custom-classes">custom class names</a> instead of appending <code class="gatsby-code-text">-enter-active</code> or similar to the transition name.</li>\n</ul>\n<h3 id="new-helpful-warnings"><a href="#new-helpful-warnings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New helpful warnings</h3>\n<ul>\n<li>React DOM now warns you when nesting HTML elements invalidly, which helps you avoid surprising errors during updates.</li>\n<li>Passing <code class="gatsby-code-text">document.body</code> directly as the container to <code class="gatsby-code-text">ReactDOM.render</code> now gives a warning as doing so can cause problems with browser extensions that modify the DOM.</li>\n<li>Using multiple instances of React together is not supported, so we now warn when we detect this case to help you avoid running into the resulting problems.</li>\n</ul>\n<h3 id="notable-bug-fixes"><a href="#notable-bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notable bug fixes</h3>\n<ul>\n<li>Click events are handled by React DOM more reliably in mobile browsers, particularly in Mobile Safari.</li>\n<li>SVG elements are created with the correct namespace in more cases.</li>\n<li>React DOM now renders <code class="gatsby-code-text">&lt;option&gt;</code> elements with multiple text children properly and renders <code class="gatsby-code-text">&lt;select&gt;</code> elements on the server with the correct option selected.</li>\n<li>When two separate copies of React add nodes to the same document (including when a browser extension uses React), React DOM tries harder not to throw exceptions during event handling.</li>\n<li>Using non-lowercase HTML tag names in React DOM (e.g., <code class="gatsby-code-text">React.createElement(&#39;DIV&#39;)</code>) no longer causes problems, though we continue to recommend lowercase for consistency with the JSX tag name convention (lowercase names refer to built-in components, capitalized names refer to custom components).</li>\n<li>React DOM understands that these CSS properties are unitless and does not append “px” to their values: <code class="gatsby-code-text">animationIterationCount</code>, <code class="gatsby-code-text">boxOrdinalGroup</code>, <code class="gatsby-code-text">flexOrder</code>, <code class="gatsby-code-text">tabSize</code>, <code class="gatsby-code-text">stopOpacity</code>.</li>\n<li>Add-Ons: When using the test utils, <code class="gatsby-code-text">Simulate.mouseEnter</code> and <code class="gatsby-code-text">Simulate.mouseLeave</code> now work.</li>\n<li>Add-Ons: ReactTransitionGroup now correctly handles multiple nodes being removed simultaneously.</li>\n</ul>',
excerpt:"We’re happy to announce our first release candidate for React 0.14! We gave you a  sneak peek in July  at the upcoming changes but we’ve now stabilized the release more and we’d love for you to try it out before we release the final version. Let us know if you run into any problems by filing issues on our  GitHub repo . Installation We recommend using React from   and using a tool like browserify or webpack to build your code into a single package: Remember that by default, React runs extra…",frontmatter:{title:"React v0.14 Release Candidate",next:null,prev:null,author:[{frontmatter:{name:"Sophie Alpert",url:"https://sophiebits.com/"}}]},fields:{date:"September 09, 2015",path:null,slug:"/blog/2015/09/10/react-v0.14-rc1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2015/09/10/react-v0.14-rc1.html"}}}});
//# sourceMappingURL=path---blog-2015-09-10-react-v-0-14-rc-1-html-a75aa5155d335a256757.js.map