webpackJsonp([0xfcbefd132a98],{774:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This week, many people in the React community are at <a href="https://www.react-europe.org/">ReactEurope</a> in the beautiful (and very warm) city of Paris, the second React conference that’s been held to date. At our last conference, we released the first beta of React 0.13, and we figured we’d do the same today with our first beta of React 0.14, giving you something to play with if you’re not at the conference or you’re looking for something to do on the way home.</p>\n<p>With React 0.14, we’re continuing to let React mature and to make minor changes as the APIs continue to settle down. I’ll talk only about the two largest changes in this blog post; when we publish the final release we’ll be sure to update all of our documentation and include a full changelog.</p>\n<p>You can install the new beta with <code class="gatsby-code-text">npm install react@0.14.0-beta1</code> and <code class="gatsby-code-text">npm install react-dom@0.14.0-beta1</code>. As mentioned in <a href="/blog/2015/06/12/deprecating-jstransform-and-react-tools.html">Deprecating react-tools</a>, we’re no longer updating the react-tools package so this release doesn’t include a new version of it. Please try the new version out and let us know what you think, and please do file issues on our GitHub repo if you run into any problems.</p>\n<h2 id="two-packages"><a href="#two-packages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Two Packages</h2>\n<p>As we look at packages like <a href="https://github.com/facebook/react-native">react-native</a>, <a href="https://github.com/reactjs/react-art">react-art</a>, <a href="https://github.com/Flipboard/react-canvas">react-canvas</a>, and <a href="https://github.com/Izzimach/react-three">react-three</a>, it’s become clear that the beauty and essence of React has nothing to do with browsers or the DOM.</p>\n<p>We think the true foundations of React are simply ideas of components and elements: being able to describe what you want to render in a declarative way. These are the pieces shared by all of these different packages. The parts of React specific to certain rendering targets aren’t usually what we think of when we think of React. As one example, DOM diffing currently enables us to build React for the browser and make it fast enough to be useful, but if the DOM didn’t have a stateful, imperative API, we might not need diffing at all.</p>\n<p>To make this more clear and to make it easier to build more environments that React can render to, we’re splitting the main <code class="gatsby-code-text">react</code> package into two: <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-dom</code>.</p>\n<p>The <code class="gatsby-code-text">react</code> package contains <code class="gatsby-code-text">React.createElement</code>, <code class="gatsby-code-text">React.createClass</code> and <code class="gatsby-code-text">React.Component</code>, <code class="gatsby-code-text">React.PropTypes</code>, <code class="gatsby-code-text">React.Children</code>, and the other helpers related to elements and component classes. We think of these as the <a href="http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/"><em>isomorphic</em></a> or <a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9"><em>universal</em></a> helpers that you need to build components.</p>\n<p>The <code class="gatsby-code-text">react-dom</code> package contains <code class="gatsby-code-text">ReactDOM.render</code>, <code class="gatsby-code-text">ReactDOM.unmountComponentAtNode</code>, and <code class="gatsby-code-text">ReactDOM.findDOMNode</code>, and in <code class="gatsby-code-text">react-dom/server</code> we have server-side rendering support with <code class="gatsby-code-text">ReactDOMServer.renderToString</code> and <code class="gatsby-code-text">ReactDOMServer.renderToStaticMarkup</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> ReactDOM <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-dom\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We anticipate that most components will need to depend only on the <code class="gatsby-code-text">react</code> package, which is lightweight and doesn’t include any of the actual rendering logic. To start, we expect people to render DOM-based components with our <code class="gatsby-code-text">react-dom</code> package, but there’s nothing stopping someone from diving deep on performance and writing a <code class="gatsby-code-text">awesome-faster-react-dom</code> package which can render <em>the exact same DOM-based components</em>. By decoupling the component definitions from the rendering, this becomes possible.</p>\n<p>More importantly, this paves the way to writing components that can be shared between the web version of React and React Native. This isn’t yet easily possible, but we intend to make this easy in a future version so you can share React code between your website and native apps.</p>\n<p>The addons have moved to separate packages as well: <code class="gatsby-code-text">react-addons-clone-with-props</code>, <code class="gatsby-code-text">react-addons-create-fragment</code>, <code class="gatsby-code-text">react-addons-css-transition-group</code>, <code class="gatsby-code-text">react-addons-linked-state-mixin</code>, <code class="gatsby-code-text">react-addons-pure-render-mixin</code>, <code class="gatsby-code-text">react-addons-shallow-compare</code>, <code class="gatsby-code-text">react-addons-transition-group</code>, and <code class="gatsby-code-text">react-addons-update</code>, plus <code class="gatsby-code-text">ReactDOM.unstable_batchedUpdates</code> in <code class="gatsby-code-text">react-dom</code>.</p>\n<p>For now, please use the same version of <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-dom</code> in your apps to avoid versioning problems — but we plan to remove this requirement later. (This release includes the old methods in the <code class="gatsby-code-text">react</code> package with a deprecation warning, but they’ll be removed completely in 0.15.)</p>\n<h2 id="dom-node-refs"><a href="#dom-node-refs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DOM node refs</h2>\n<p>The other big change we’re making in this release is exposing refs to DOM components as the DOM node itself. That means: we looked at what you can do with a <code class="gatsby-code-text">ref</code> to a DOM component and realized that the only useful thing you can do with it is call <code class="gatsby-code-text">this.refs.giraffe.getDOMNode()</code> to get the underlying DOM node. In this release, <code class="gatsby-code-text">this.refs.giraffe</code> <em>is</em> the actual DOM node.</p>\n<p>Refs to custom component classes work exactly as before.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> Zoo <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        Giraffe\'s name<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>giraffe<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  showName<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Previously:</span>\n    <span class="token comment">// var input = this.refs.giraffe.getDOMNode();</span>\n    <span class="token keyword">var</span> input <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>giraffe<span class="token punctuation">;</span>\n\n    <span class="token function">alert</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This change also applies to the return result of <code class="gatsby-code-text">ReactDOM.render</code> when passing a DOM node as the top component. As with refs, this change does not affect custom components (eg. <code class="gatsby-code-text">&lt;MyFancyMenu&gt;</code> or <code class="gatsby-code-text">&lt;MyContextProvider&gt;</code>), which remain unaffected by this change.</p>\n<p>Along with this change, we’re also replacing <code class="gatsby-code-text">component.getDOMNode()</code> with <code class="gatsby-code-text">ReactDOM.findDOMNode(component)</code>. The <code class="gatsby-code-text">findDOMNode</code> method drills down to find which DOM node was rendered by a component, but it returns its argument when passed a DOM node so it’s safe to call on a DOM component too. We introduced this function quietly in the last release, but now we’re deprecating <code class="gatsby-code-text">.getDOMNode()</code> completely: it should be easy to change all existing calls in your code to be <code class="gatsby-code-text">ReactDOM.findDOMNode</code>. We also have an <a href="https://www.npmjs.com/package/react-codemod">automated codemod script</a> to help you with this transition. Note that the <code class="gatsby-code-text">findDOMNode</code> calls are unnecessary when you already have a DOM component ref (as in the example above), so you can (and should) skip them in most cases going forward.</p>\n<p>We hope you’re as excited about this release as we are! Let us know what you think of it.</p>',excerpt:"This week, many people in the React community are at  ReactEurope  in the beautiful (and very warm) city of Paris, the second React conference that’s been held to date. At our last conference, we released the first beta of React 0.13, and we figured we’d do the same today with our first beta of React 0.14, giving you something to play with if you’re not at the conference or you’re looking for something to do on the way home. With React 0.14, we’re continuing to let React mature and to make minor…",frontmatter:{title:"React v0.14 Beta 1",next:null,prev:null,author:[{frontmatter:{name:"Sophie Alpert",url:"https://sophiebits.com/"}}]},fields:{date:"July 02, 2015",path:null,slug:"/blog/2015/07/03/react-v0.14-beta-1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2015/07/03/react-v0.14-beta-1.html"}}}});
//# sourceMappingURL=path---blog-2015-07-03-react-v-0-14-beta-1-html-8c984c4f75c103370018.js.map