webpackJsonp([0x8ab63117c2e6],{751:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We’re happy to announce the availability of React v0.12! After over a week of baking as the release candidate, we uncovered and fixed a few small issues. Thanks to all of you who upgraded and gave us feedback!</p>\n<p>We have talked a lot about some of the bigger changes in this release. <a href="/bytom/blog/2014/10/14/introducing-react-elements.html">We introduced new terminology</a> and changed APIs to clean up and simplify some of the concepts of React. <a href="/bytom/blog/2014/10/16/react-v0.12-rc1.html">We also made several changes to JSX</a> and deprecated a few functions. We won’t go into depth about these changes again but we encourage you to read up on these changes in the linked posts. We’ll summarize these changes and discuss some of the other changes and how they may impact you below. As always, a full changelog is also included below.</p>\n<p>The release is available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.12.0.js">https://fb.me/react-0.12.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.12.0.min.js">https://fb.me/react-0.12.0.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.12.0.js">https://fb.me/react-with-addons-0.12.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.12.0.min.js">https://fb.me/react-with-addons-0.12.0.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.12.0.js">https://fb.me/JSXTransformer-0.12.0.js</a></li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.12.0</code> of the <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-tools</code> packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<h2 id="new-terminology--updated-apis"><a href="#new-terminology--updated-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Terminology &#x26; Updated APIs</h2>\n<p>v0.12 is bringing about some new terminology. <a href="/bytom/blog/2014/10/14/introducing-react-elements.html">We introduced</a> this 2 weeks ago and we’ve also documented it in <a href="/bytom/docs/glossary.html">a new section of the documentation</a>. As a part of this, we also corrected many of our top-level APIs to align with the terminology. <code class="gatsby-code-text">Component</code> has been removed from all of our <code class="gatsby-code-text">React.render*</code> methods. While at one point the argument you passed to these functions was called a Component, it no longer is. You are passing ReactElements. To align with <code class="gatsby-code-text">render</code> methods in your component classes, we decided to keep the top-level functions short and sweet. <code class="gatsby-code-text">React.renderComponent</code> is now <code class="gatsby-code-text">React.render</code>.</p>\n<p>We also corrected some other misnomers. <code class="gatsby-code-text">React.isValidComponent</code> actually determines if the argument is a ReactElement, so it has been renamed to <code class="gatsby-code-text">React.isValidElement</code>. In the same vein, <code class="gatsby-code-text">React.PropTypes.component</code> is now <code class="gatsby-code-text">React.PropTypes.element</code> and <code class="gatsby-code-text">React.PropTypes.renderable</code> is now <code class="gatsby-code-text">React.PropTypes.node</code>.</p>\n<p>The old methods will still work but will warn upon first use. They will be removed in v0.13.</p>\n<h2 id="jsx-changes"><a href="#jsx-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Changes</h2>\n<p><a href="/bytom/blog/2014/10/16/react-v0.12-rc1.html#jsx-changes">We talked more in depth about these before</a>, so here are the highlights.</p>\n<ul>\n<li>No more <code class="gatsby-code-text">/** @jsx React.DOM */</code>!</li>\n<li>We no longer transform to a straight function call. <code class="gatsby-code-text">&lt;Component/&gt;</code> now becomes <code class="gatsby-code-text">React.createElement(Component)</code></li>\n<li>DOM components don’t make use of <code class="gatsby-code-text">React.DOM</code>, instead we pass the tag name directly. <code class="gatsby-code-text">&lt;div/&gt;</code> becomes <code class="gatsby-code-text">React.createElement(&#39;div&#39;)</code></li>\n<li>We introduced spread attributes as a quick way to transfer props.</li>\n</ul>\n<h2 id="devtools-improvements-no-more-__internals"><a href="#devtools-improvements-no-more-__internals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DevTools Improvements, No More <code class="gatsby-code-text">__internals</code></h2>\n<p>For months we’ve gotten complaints about the React DevTools message. It shouldn’t have logged the up-sell message when you were already using the DevTools. Unfortunately this was because the way we implemented these tools resulted in the DevTools knowing about React, but not the reverse. We finally gave this some attention and enabled React to know if the DevTools are installed. We released an update to the devtools several weeks ago making this possible. Extensions in Chrome should auto-update so you probably already have the update installed!</p>\n<p>As a result of this update, we no longer need to expose several internal modules to the world. If you were taking advantage of this implementation detail, your code will break. <code class="gatsby-code-text">React.__internals</code> is no more.</p>\n<h2 id="license-change---bsd"><a href="#license-change---bsd" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License Change - BSD</h2>\n<p>We updated the license on React to the BSD 3-Clause license with an explicit patent grant. Previously we used the Apache 2 license. These licenses are very similar and our extra patent grant is equivalent to the grant provided in the Apache license. You can still use React with the confidence that we have granted the use of any patents covering it. This brings us in line with the same licensing we use across the majority of our open source projects at Facebook.</p>\n<p>You can read the full text of the <a href="https://github.com/facebook/react/blob/master/LICENSE">LICENSE</a> and <a href="https://github.com/facebook/react/blob/master/PATENTS"><code class="gatsby-code-text">PATENTS</code></a> files on GitHub.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li><code class="gatsby-code-text">key</code> and <code class="gatsby-code-text">ref</code> moved off props object, now accessible on the element directly</li>\n<li>React is now BSD licensed with accompanying Patents grant</li>\n<li>Default prop resolution has moved to Element creation time instead of mount time, making them effectively static</li>\n<li><code class="gatsby-code-text">React.__internals</code> is removed - it was exposed for DevTools which no longer needs access</li>\n<li>Composite Component functions can no longer be called directly - they must be wrapped with <code class="gatsby-code-text">React.createFactory</code> first. This is handled for you when using JSX.</li>\n</ul>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>Spread operator (<code class="gatsby-code-text">{...}</code>) introduced to deprecate <code class="gatsby-code-text">this.transferPropsTo</code></li>\n<li>Added support for more HTML attributes: <code class="gatsby-code-text">acceptCharset</code>, <code class="gatsby-code-text">classID</code>, <code class="gatsby-code-text">manifest</code></li>\n</ul>\n<h4 id="deprecations"><a href="#deprecations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecations</h4>\n<ul>\n<li><code class="gatsby-code-text">React.renderComponent</code> —> <code class="gatsby-code-text">React.render</code></li>\n<li><code class="gatsby-code-text">React.renderComponentToString</code> —> <code class="gatsby-code-text">React.renderToString</code></li>\n<li><code class="gatsby-code-text">React.renderComponentToStaticMarkup</code> —> <code class="gatsby-code-text">React.renderToStaticMarkup</code></li>\n<li><code class="gatsby-code-text">React.isValidComponent</code> —> <code class="gatsby-code-text">React.isValidElement</code></li>\n<li><code class="gatsby-code-text">React.PropTypes.component</code> —> <code class="gatsby-code-text">React.PropTypes.element</code></li>\n<li><code class="gatsby-code-text">React.PropTypes.renderable</code> —> <code class="gatsby-code-text">React.PropTypes.node</code></li>\n<li><strong>DEPRECATED</strong> <code class="gatsby-code-text">React.isValidClass</code></li>\n<li><strong>DEPRECATED</strong> <code class="gatsby-code-text">instance.transferPropsTo</code></li>\n<li><strong>DEPRECATED</strong> Returning <code class="gatsby-code-text">false</code> from event handlers to preventDefault</li>\n<li><strong>DEPRECATED</strong> Convenience Constructor usage as function, instead wrap with <code class="gatsby-code-text">React.createFactory</code></li>\n<li><strong>DEPRECATED</strong> use of <code class="gatsby-code-text">key={null}</code> to assign implicit keys</li>\n</ul>\n<h4 id="bug-fixes"><a href="#bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>Better handling of events and updates in nested results, fixing value restoration in “layered” controlled components</li>\n<li>Correctly treat <code class="gatsby-code-text">event.getModifierState</code> as case sensitive</li>\n<li>Improved normalization of <code class="gatsby-code-text">event.charCode</code></li>\n<li>Better error stacks when involving autobound methods</li>\n<li>Removed DevTools message when the DevTools are installed</li>\n<li>Correctly detect required language features across browsers</li>\n<li>\n<p>Fixed support for some HTML attributes:</p>\n<ul>\n<li><code class="gatsby-code-text">list</code> updates correctly now</li>\n<li><code class="gatsby-code-text">scrollLeft</code>, <code class="gatsby-code-text">scrollTop</code> removed, these should not be specified as props</li>\n</ul>\n</li>\n<li>Improved error messages</li>\n</ul>\n<h3 id="react-with-addons"><a href="#react-with-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React With Addons</h3>\n<h4 id="new-features-1"><a href="#new-features-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li><code class="gatsby-code-text">React.addons.batchedUpdates</code> added to API for hooking into update cycle</li>\n</ul>\n<h4 id="breaking-changes-1"><a href="#breaking-changes-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li><code class="gatsby-code-text">React.addons.update</code> uses <code class="gatsby-code-text">assign</code> instead of <code class="gatsby-code-text">copyProperties</code> which does <code class="gatsby-code-text">hasOwnProperty</code> checks. Properties on prototypes will no longer be updated correctly.</li>\n</ul>\n<h4 id="bug-fixes-1"><a href="#bug-fixes-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>Fixed some issues with CSS Transitions</li>\n</ul>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<h4 id="breaking-changes-2"><a href="#breaking-changes-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li>Enforced convention: lower case tag names are always treated as HTML tags, upper case tag names are always treated as composite components</li>\n<li>JSX no longer transforms to simple function calls</li>\n</ul>\n<h4 id="new-features-2"><a href="#new-features-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li><code class="gatsby-code-text">@jsx React.DOM</code> no longer required</li>\n<li>spread (<code class="gatsby-code-text">{...}</code>) operator introduced to allow easier use of props</li>\n</ul>\n<h4 id="bug-fixes-2"><a href="#bug-fixes-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>JSXTransformer: Make sourcemaps an option when using APIs directly (eg, for react-rails)</li>\n</ul>',excerpt:"We’re happy to announce the availability of React v0.12! After over a week of baking as the release candidate, we uncovered and fixed a few small issues. Thanks to all of you who upgraded and gave us feedback! We have talked a lot about some of the bigger changes in this release.  We introduced new terminology  and changed APIs to clean up and simplify some of the concepts of React.  We also made several changes to JSX  and deprecated a few functions. We won’t go into depth about these changes…",frontmatter:{title:"React v0.12",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"October 27, 2014",path:null,slug:"/blog/2014/10/28/react-v0.12.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2014/10/28/react-v0.12.html"}}}});
//# sourceMappingURL=path---blog-2014-10-28-react-v-0-12-html-56186f0d4b846b8e9d9f.js.map