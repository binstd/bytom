webpackJsonp([0x80e0bc85ffba],{894:function(e,t){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p>As of React 16, <code class="gatsby-code-text">react-addons-perf</code> is not supported. Please use <a href="/bytom/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab">your browser’s profiling tools</a> to get insight into which components re-render.</p>\n</blockquote>\n<p><strong>Importing</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> Perf <span class="token keyword">from</span> <span class="token string">\'react-addons-perf\'</span><span class="token punctuation">;</span> <span class="token comment">// ES6</span>\n<span class="token keyword">var</span> Perf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-addons-perf\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ES5 with npm</span></code></pre>\n      </div>\n<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>React is usually quite fast out of the box. However, in situations where you need to squeeze every ounce of performance out of your app, it provides a <a href="/bytom/docs/react-component.html#shouldcomponentupdate">shouldComponentUpdate()</a> hook where you can add optimization hints to React’s diff algorithm.</p>\n<p>In addition to giving you an overview of your app’s overall performance, <code class="gatsby-code-text">Perf</code> is a profiling tool that tells you exactly where you need to put these hooks.</p>\n<p>See these articles for an introduction to React performance tooling:</p>\n<ul>\n<li><a href="https://medium.com/code-life/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c">“How to Benchmark React Components”</a></li>\n<li><a href="http://benchling.engineering/performance-engineering-with-react/">“Performance Engineering with React”</a></li>\n<li><a href="http://benchling.engineering/deep-dive-react-perf-debugging/">“A Deep Dive into React Perf Debugging”</a> </li>\n</ul>\n<h3 id="development-vs-production-builds"><a href="#development-vs-production-builds" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development vs. Production Builds</h3>\n<p>If you’re benchmarking or seeing performance problems in your React apps, make sure you’re testing with the <a href="/bytom/downloads.html">minified production build</a>. The development build includes extra warnings that are helpful when building your apps, but it is slower due to the extra bookkeeping it does.</p>\n<p>However, the perf tools described on this page only work when using the development build of React. Therefore, the profiler only serves to indicate the <em>relatively</em> expensive parts of your app.</p>\n<h3 id="using-perf"><a href="#using-perf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Perf</h3>\n<p>The <code class="gatsby-code-text">Perf</code> object can be used with React in development mode only. You should not include this bundle when building your app for production.</p>\n<h4 id="getting-measurements"><a href="#getting-measurements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Measurements</h4>\n<ul>\n<li><a href="#start"><code class="gatsby-code-text">start()</code></a></li>\n<li><a href="#stop"><code class="gatsby-code-text">stop()</code></a></li>\n<li><a href="#getlastmeasurements"><code class="gatsby-code-text">getLastMeasurements()</code></a></li>\n</ul>\n<h4 id="printing-results"><a href="#printing-results" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Printing Results</h4>\n<p>The following methods use the measurements returned by <a href="#getlastmeasurements"><code class="gatsby-code-text">Perf.getLastMeasurements()</code></a> to pretty-print the result.</p>\n<ul>\n<li><a href="#printinclusive"><code class="gatsby-code-text">printInclusive()</code></a></li>\n<li><a href="#printexclusive"><code class="gatsby-code-text">printExclusive()</code></a></li>\n<li><a href="#printwasted"><code class="gatsby-code-text">printWasted()</code></a></li>\n<li><a href="#printoperations"><code class="gatsby-code-text">printOperations()</code></a></li>\n<li><a href="#printdom"><code class="gatsby-code-text">printDOM()</code></a></li>\n</ul>\n<hr>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reference</h2>\n<h3 id="start"><a href="#start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">start()</code></h3>\n<h3 id="stop"><a href="#stop" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">stop()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\nPerf<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Start/stop the measurement. The React operations in-between are recorded for analyses below. Operations that took an insignificant amount of time are ignored.</p>\n<p>After stopping, you will need <a href="#getlastmeasurements"><code class="gatsby-code-text">Perf.getLastMeasurements()</code></a> to get the measurements.</p>\n<hr>\n<h3 id="getlastmeasurements"><a href="#getlastmeasurements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">getLastMeasurements()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">getLastMeasurements</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Get the opaque data structure describing measurements from the last start-stop session. You can save it and pass it to the other print methods in <a href="#printing-results"><code class="gatsby-code-text">Perf</code></a> to analyze past measurements.</p>\n<blockquote>\n<p>Note</p>\n<p>Don’t rely on the exact format of the return value because it may change in minor releases. We will update the documentation if the return value format becomes a supported part of the public API.</p>\n</blockquote>\n<hr>\n<h3 id="printinclusive"><a href="#printinclusive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">printInclusive()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">printInclusive</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Prints the overall time taken. When no arguments are passed, <code class="gatsby-code-text">printInclusive</code> defaults to all the measurements from the last recording. This prints a nicely formatted table in the console, like so:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/bytom/static/perf-inclusive-de71a97b6c44f7bd3a589a3f1d620525-f4b60.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 687px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 9.024745269286754%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAaklEQVQI1x2K7QrDIAwA+/6PWAetpNaFOk2UpYv9cFK4H3dwwxs34hITUy5uWcG85tHYyfbcQhqNA4fOo8dAnGfrLayfSIlypDz8zib1Fr3kbBwomYnB73rvR6NywKJfbd2ldi4MVfT5H/5dFHBItlJj9gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="perf inclusive"\n        title=""\n        src="/bytom/static/perf-inclusive-de71a97b6c44f7bd3a589a3f1d620525-f4b60.png"\n        srcset="/bytom/static/perf-inclusive-de71a97b6c44f7bd3a589a3f1d620525-cc80a.png 210w,\n/bytom/static/perf-inclusive-de71a97b6c44f7bd3a589a3f1d620525-2fe3d.png 420w,\n/bytom/static/perf-inclusive-de71a97b6c44f7bd3a589a3f1d620525-f4b60.png 687w"\n        sizes="(max-width: 687px) 100vw, 687px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h3 id="printexclusive"><a href="#printexclusive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">printExclusive()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">printExclusive</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>“Exclusive” times don’t include the times taken to mount the components: processing props, calling <code class="gatsby-code-text">componentWillMount</code> and <code class="gatsby-code-text">componentDidMount</code>, etc.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/bytom/static/perf-exclusive-741b84218e9be133eca2e0ab98c36e85-f4b60.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 687px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 4.657933042212519%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAPUlEQVQI1w3IwRHAIAgF0fRfoPFA4iCDfOBAC3Lbt09kJvCPF+5rKfMxs4/EYMzaJ8Ln3ACaROLecUS0qi5eSDWAzXCVfgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="perf exclusive"\n        title=""\n        src="/bytom/static/perf-exclusive-741b84218e9be133eca2e0ab98c36e85-f4b60.png"\n        srcset="/bytom/static/perf-exclusive-741b84218e9be133eca2e0ab98c36e85-cc80a.png 210w,\n/bytom/static/perf-exclusive-741b84218e9be133eca2e0ab98c36e85-2fe3d.png 420w,\n/bytom/static/perf-exclusive-741b84218e9be133eca2e0ab98c36e85-f4b60.png 687w"\n        sizes="(max-width: 687px) 100vw, 687px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h3 id="printwasted"><a href="#printwasted" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">printWasted()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">printWasted</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span></code></pre>\n      </div>\n<p><strong>The most useful part of the profiler</strong>.</p>\n<p>“Wasted” time is spent on components that didn’t actually render anything, e.g. the render stayed the same, so the DOM wasn’t touched.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/bytom/static/perf-wasted-a241eb09d0fd90eb56f48666ce9be586-f4b60.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 687px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 9.024745269286754%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAc0lEQVQI1x3KSw6DIBAAUO9/NJM2LFxJE371VyozQB1FVJqYvOWrxsmijw48hti9e8NfsuVKKAy/j3VNIxlTjGlt7Awg5KBNPzsEDA5DtR2F9ovSSUfxXwQuvBnWdK25RMot3+p6eTyXbszpLJPdKd3/9gcXKm7KLnvzaQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="perf wasted"\n        title=""\n        src="/bytom/static/perf-wasted-a241eb09d0fd90eb56f48666ce9be586-f4b60.png"\n        srcset="/bytom/static/perf-wasted-a241eb09d0fd90eb56f48666ce9be586-cc80a.png 210w,\n/bytom/static/perf-wasted-a241eb09d0fd90eb56f48666ce9be586-2fe3d.png 420w,\n/bytom/static/perf-wasted-a241eb09d0fd90eb56f48666ce9be586-f4b60.png 687w"\n        sizes="(max-width: 687px) 100vw, 687px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h3 id="printoperations"><a href="#printoperations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">printOperations()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">printOperations</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>Prints the underlying DOM manipulations, e.g. “set innerHTML” and “remove”.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/bytom/static/perf-dom-57140a9924782c02dc7aac20042cf00d-f4b60.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 687px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 4.657933042212519%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAO0lEQVQI1x2HwQ3AIAzE2H9GhBDk2lwgImzQqJYfdjGziDg/DyAiqsyOe18Are3encw1Umrdc64xUqd+ibA2kpc4qZYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="perf dom"\n        title=""\n        src="/bytom/static/perf-dom-57140a9924782c02dc7aac20042cf00d-f4b60.png"\n        srcset="/bytom/static/perf-dom-57140a9924782c02dc7aac20042cf00d-cc80a.png 210w,\n/bytom/static/perf-dom-57140a9924782c02dc7aac20042cf00d-2fe3d.png 420w,\n/bytom/static/perf-dom-57140a9924782c02dc7aac20042cf00d-f4b60.png 687w"\n        sizes="(max-width: 687px) 100vw, 687px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<hr>\n<h3 id="printdom"><a href="#printdom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">printDOM()</code></h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">Perf<span class="token punctuation">.</span><span class="token function">printDOM</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>This method has been renamed to <a href="#printoperations"><code class="gatsby-code-text">printOperations()</code></a>. Currently <code class="gatsby-code-text">printDOM()</code> still exists as an alias but it prints a deprecation warning and will eventually be removed.</p>',frontmatter:{title:"Performance Tools",next:null,prev:null},fields:{path:null,slug:"docs/perf.html"}}},pathContext:{slug:"docs/perf.html"}}}});
//# sourceMappingURL=path---docs-perf-html-e2386340dddec6b076f1.js.map