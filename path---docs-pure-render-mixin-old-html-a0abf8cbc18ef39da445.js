webpackJsonp([0xcb06674ec193],{897:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note</p>\n</blockquote>\n<blockquote>\n<p>The <code class="gatsby-code-text">PureRenderMixin</code> mixin predates <code class="gatsby-code-text">React.PureComponent</code>. This reference doc is provided for legacy purposes, and you should consider using <a href="/bytom/docs/react-api.html#reactpurecomponent"><code class="gatsby-code-text">React.PureComponent</code></a> instead.</p>\n</blockquote>\n<p>If your React component’s render function renders the same result given the same props and state, you can use this mixin for a performance boost in some cases.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> PureRenderMixin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-pure-render-mixin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>PureRenderMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>className<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Example using ES6 class syntax:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PureRenderMixin <span class="token keyword">from</span> <span class="token string">\'react-addons-pure-render-mixin\'</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">FooComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>shouldComponentUpdate <span class="token operator">=</span> PureRenderMixin<span class="token punctuation">.</span>shouldComponentUpdate<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>className<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Under the hood, the mixin implements <a href="/bytom/docs/component-specs.html#updating-shouldcomponentupdate">shouldComponentUpdate</a>, in which it compares the current props and state with the next ones and returns <code class="gatsby-code-text">false</code> if the equalities pass.</p>\n<blockquote>\n<p>Note:</p>\n<p>This only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only mix into components which have simple props and state, or use <code class="gatsby-code-text">forceUpdate()</code> when you know deep data structures have changed. Or, consider using <a href="https://facebook.github.io/immutable-js/">immutable objects</a> to facilitate fast comparisons of nested data.</p>\n<p>Furthermore, <code class="gatsby-code-text">shouldComponentUpdate</code> skips updates for the whole component subtree. Make sure all the children components are also “pure”.</p>\n</blockquote>',frontmatter:{title:"PureRenderMixin",next:null,prev:null},fields:{path:null,slug:"docs/pure-render-mixin-old.html"}}},pathContext:{slug:"docs/pure-render-mixin-old.html"}}}});
//# sourceMappingURL=path---docs-pure-render-mixin-old-html-a0abf8cbc18ef39da445.js.map