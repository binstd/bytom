webpackJsonp([19306244907253],{841:function(a,t){a.exports={data:{markdownRemark:{html:'<p>Use as little or as much React as you need.</p>\n<p>React has been designed from the start for gradual adoption, and <strong>you can use as little or as much React as you need</strong>. Perhaps you only want to add some “sprinkles of interactivity” to an existing page. React components are a great way to do that.</p>\n<p>The majority of websites aren’t, and don’t need to be, single-page apps. With <strong>a few lines of code and no build tooling</strong>, try React in a small part of your website. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.</p>\n<hr>\n<ul>\n<li><a href="#add-react-in-one-minute">Add React in One Minute</a></li>\n<li><a href="#optional-try-react-with-jsx">Optional: Try React with JSX</a> (no bundler necessary!)</li>\n</ul>\n<h2 id="add-react-in-one-minute"><a href="#add-react-in-one-minute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add React in One Minute</h2>\n<p>In this section, we will show how to add a React component to an existing HTML page. You can follow along with your own website, or create an empty HTML file to practice.</p>\n<p>There will be no complicated tools or install requirements — <strong>to complete this section, you only need an internet connection, and a minute of your time.</strong></p>\n<p>Optional: <a href="https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip">Download the full example (2KB zipped)</a></p>\n<h3 id="step-1-add-a-dom-container-to-the-html"><a href="#step-1-add-a-dom-container-to-the-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Add a DOM Container to the HTML</h3>\n<p>First, open the HTML page you want to edit. Add an empty <code class="gatsby-code-text">&lt;div&gt;</code> tag to mark the spot where you want to display something with React. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token comment">&lt;!-- ... existing HTML ... --></span>\n\n<span class="gatsby-highlight-code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>like_button_container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</span>\n<span class="token comment">&lt;!-- ... existing HTML ... --></span></code></pre>\n      </div>\n<p>We gave this <code class="gatsby-code-text">&lt;div&gt;</code> a unique <code class="gatsby-code-text">id</code> HTML attribute. This will allow us to find it from the JavaScript code later and display a React component inside of it.</p>\n<blockquote>\n<p>Tip</p>\n<p>You can place a “container” <code class="gatsby-code-text">&lt;div&gt;</code> like this <strong>anywhere</strong> inside the <code class="gatsby-code-text">&lt;body&gt;</code> tag. You may have as many independent DOM containers on one page as you need. They are usually empty — React will replace any existing content inside DOM containers.</p>\n</blockquote>\n<h3 id="step-2-add-the-script-tags"><a href="#step-2-add-the-script-tags" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Add the Script Tags</h3>\n<p>Next, add three <code class="gatsby-code-text">&lt;script&gt;</code> tags to the HTML page right before the closing <code class="gatsby-code-text">&lt;/body&gt;</code> tag:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html">  <span class="token comment">&lt;!-- ... other HTML ... --></span>\n\n  <span class="token comment">&lt;!-- Load React. --></span>\n  <span class="token comment">&lt;!-- Note: when deploying, replace "development.js" with "production.min.js". --></span>\n<span class="gatsby-highlight-code-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.development.js<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.development.js<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</span>\n  <span class="token comment">&lt;!-- Load our React component. --></span>\n<span class="gatsby-highlight-code-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>like_button.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>The first two tags load React. The third one will load your component code.</p>\n<h3 id="step-3-create-a-react-component"><a href="#step-3-create-a-react-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: Create a React Component</h3>\n<p>Create a file called <code class="gatsby-code-text">like_button.js</code> next to your HTML page.</p>\n<p>Open <strong><a href="https://cdn.rawgit.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js">this starter code</a></strong> and paste it into the file you created.</p>\n<blockquote>\n<p>Tip</p>\n<p>This code defines a React component called <code class="gatsby-code-text">LikeButton</code>. Don’t worry if you don’t understand it yet — we’ll cover the building blocks of React later in our <a href="/bytom/tutorial/tutorial.html">hands-on tutorial</a> and <a href="/bytom/docs/hello-world.html">main concepts guide</a>. For now, let’s just get it showing on the screen!</p>\n</blockquote>\n<p>After <strong><a href="https://cdn.rawgit.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js">the starter code</a></strong>, add two lines to the bottom of <code class="gatsby-code-text">like_button.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// ... the starter code you pasted ...</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">const</span> domContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'#like_button_container\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token function">e</span><span class="token punctuation">(</span>LikeButton<span class="token punctuation">)</span><span class="token punctuation">,</span> domContainer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></code></pre>\n      </div>\n<p>These two lines of code find the <code class="gatsby-code-text">&lt;div&gt;</code> we added to our HTML in the first step, and then display our “Like” button React component inside of it. </p>\n<h3 id="thats-it"><a href="#thats-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>That’s It!</h3>\n<p>There is no step four. <strong>You have just added the first React component to your website.</strong></p>\n<p>Check out the next sections for more tips on integrating React.</p>\n<p><strong><a href="https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605">View the full example source code</a></strong></p>\n<p><strong><a href="https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip">Download the full example (2KB zipped)</a></strong></p>\n<h3 id="tip-reuse-a-component"><a href="#tip-reuse-a-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tip: Reuse a Component</h3>\n<p>Commonly, you might want to display React components in multiple places on the HTML page. Here is an example that displays the “Like” button three times and passes some data to it:</p>\n<p><a href="https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda">View the full example source code</a></p>\n<p><a href="https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip">Download the full example (2KB zipped)</a></p>\n<blockquote>\n<p>Note</p>\n<p>This strategy is mostly useful while React-powered parts of the page are isolated from each other. Inside React code, it’s easier to use <a href="/bytom/docs/components-and-props.html#composing-components">component composition</a> instead.</p>\n</blockquote>\n<h3 id="tip-minify-javascript-for-production"><a href="#tip-minify-javascript-for-production" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tip: Minify JavaScript for Production</h3>\n<p>Before deploying your website to production, be mindful that unminifed JavaScript can significantly slow down the page for your users.</p>\n<p>If you already minify the application scripts, <strong>your site will be production-ready</strong> if you ensure that the deployed HTML loads the versions of React ending in <code class="gatsby-code-text">production.min.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>If you don’t have a minification step for your scripts, <a href="https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3">here’s one way to set it up</a>.</p>\n<h2 id="optional-try-react-with-jsx"><a href="#optional-try-react-with-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optional: Try React with JSX</h2>\n<p>In the examples above, we only relied on features that are natively supported by the browsers. This is why we used a JavaScript function call to tell React what to display:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> e <span class="token operator">=</span> React<span class="token punctuation">.</span>createElement<span class="token punctuation">;</span>\n\n<span class="token comment">// Display a "Like" &lt;button></span>\n<span class="token keyword">return</span> <span class="token function">e</span><span class="token punctuation">(</span>\n  <span class="token string">\'button\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> liked<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'Like\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>However, React also offers an option to use <a href="/bytom/docs/introducing-jsx.html">JSX</a> instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Display a "Like" &lt;button></span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> liked<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    Like\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>These two code snippets are equivalent. While <strong>JSX is <a href="/bytom/docs/react-without-jsx.html">completely optional</a></strong>, many people find it helpful for writing UI code — both with React and with other libraries.</p>\n<p>You can play with JSX using <a href="http://babeljs.io/repl#?babili=false&#x26;browsers=&#x26;build=&#x26;builtIns=false&#x26;spec=false&#x26;loose=false&#x26;code_lz=Q&#x26;debug=false&#x26;forceAllTransforms=false&#x26;shippedProposals=false&#x26;circleciRepo=&#x26;evaluate=false&#x26;fileSize=false&#x26;sourceType=module&#x26;lineWrap=true&#x26;presets=es2015%2Creact%2Cstage-2%2Cstage-3&#x26;prettier=true&#x26;targets=Node-6.12&#x26;version=6.26.0&#x26;envVersion=">this online converter</a>.</p>\n<h3 id="quickly-try-jsx"><a href="#quickly-try-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quickly Try JSX</h3>\n<p>The quickest way to try JSX in your project is to add this <code class="gatsby-code-text">&lt;script&gt;</code> tag to your page:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/babel-standalone@6/babel.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Now you can use JSX in any <code class="gatsby-code-text">&lt;script&gt;</code> tag by adding <code class="gatsby-code-text">type=&quot;text/babel&quot;</code> attribute to it. Here is <a href="https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html">an example HTML file with JSX</a> that you can download and play with.</p>\n<p>This approach is fine for learning and creating simple demos. However, it makes your website slow and <strong>isn’t suitable for production</strong>. When you’re ready to move forward, remove this new <code class="gatsby-code-text">&lt;script&gt;</code> tag and the <code class="gatsby-code-text">type=&quot;text/babel&quot;</code> attributes you’ve added. Instead, in the next section you will set up a JSX preprocessor to convert all your <code class="gatsby-code-text">&lt;script&gt;</code> tags automatically.</p>\n<h3 id="add-jsx-to-a-project"><a href="#add-jsx-to-a-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add JSX to a Project</h3>\n<p>Adding JSX to a project doesn’t require complicated tools like a bundler or a development server. Essentially, adding JSX <strong>is a lot like adding a CSS preprocessor.</strong> The only requirement is to have <a href="https://nodejs.org/">Node.js</a> installed on your computer.</p>\n<p>Go to your project folder in the terminal, and paste these two commands:</p>\n<ol>\n<li><strong>Step 1:</strong> Run <code class="gatsby-code-text">npm init -y</code> (if it fails, <a href="https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d">here’s a fix</a>)</li>\n<li><strong>Step 2:</strong> Run <code class="gatsby-code-text">npm install babel-cli@6 babel-preset-react-app@3</code></li>\n</ol>\n<blockquote>\n<p>Tip</p>\n<p>We’re <strong>using npm here only to install the JSX preprocessor;</strong> you won’t need it for anything else. Both React and the application code can stay as <code class="gatsby-code-text">&lt;script&gt;</code> tags with no changes.</p>\n</blockquote>\n<p>Congratulations! You just added a <strong>production-ready JSX setup</strong> to your project.</p>\n<h3 id="run-jsx-preprocessor"><a href="#run-jsx-preprocessor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run JSX Preprocessor</h3>\n<p>Create a folder called <code class="gatsby-code-text">src</code> and run this terminal command:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">npx babel --watch src --out-dir . --presets react-app/prod </code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p><code class="gatsby-code-text">npx</code> is not a typo — it’s a <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b">package runner tool that comes with npm 5.2+</a>.</p>\n<p>If you see an error message saying “You have mistakenly installed the <code class="gatsby-code-text">babel</code> package”, you might have missed <a href="#add-jsx-to-a-project">the previous step</a>. Perform it in the same folder, and then try again.</p>\n</blockquote>\n<p>Don’t wait for it to finish — this command starts an automated watcher for JSX.</p>\n<p>If you now create a file called <code class="gatsby-code-text">src/like_button.js</code> with this <strong><a href="https://cdn.rawgit.com/gaearon/c8e112dc74ac44aac4f673f2c39d19d1/raw/09b951c86c1bf1116af741fa4664511f2f179f0a/like_button.js">JSX starter code</a></strong>, the watcher will create a preprocessed <code class="gatsby-code-text">like_button.js</code> with the plain JavaScript code suitable for the browser. When you edit the source file with JSX, the transform will re-run automatically.</p>\n<p>As a bonus, this also lets you use modern JavaScript syntax features like classes without worrying about breaking older browsers. The tool we just used is called Babel, and you can learn more about it from <a href="http://babeljs.io/docs/en/babel-cli/">its documentation</a>.</p>\n<p>If you notice that you’re getting comfortable with build tools and want them to do more for you, <a href="/bytom/docs/create-a-new-react-app.html">the next section</a> describes some of the most popular and approachable toolchains. If not — those script tags will do just fine!</p>',frontmatter:{title:"Add React to a Website",next:"create-a-new-react-app.html",prev:"getting-started.html"},fields:{path:null,slug:"docs/add-react-to-a-website.html"}}},pathContext:{slug:"docs/add-react-to-a-website.html"}}}});
//# sourceMappingURL=path---docs-add-react-to-a-website-html-8ea376a2bea21b6ce5e7.js.map