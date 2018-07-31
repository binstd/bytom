webpackJsonp([0x72c57f92a839],{858:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Use an integrated toolchain for the best user and developer experience.</p>\n<p>This page describes a few popular React toolchains which help with tasks like:</p>\n<ul>\n<li>Scaling to many files and components.</li>\n<li>Using third-party libraries from npm.</li>\n<li>Detecting common mistakes early.</li>\n<li>Live-editing CSS and JS in development.</li>\n<li>Optimizing the output for production.</li>\n</ul>\n<p>The toolchains recommended on this page <strong>don’t require configuration to get started</strong>.</p>\n<h2 id="you-might-not-need-a-toolchain"><a href="#you-might-not-need-a-toolchain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>You Might Not Need a Toolchain</h2>\n<p>If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet, consider <a href="/bytom/docs/add-react-to-a-website.html">adding React as a plain <code class="gatsby-code-text">&lt;script&gt;</code> tag on an HTML page</a>, optionally <a href="/bytom/docs/add-react-to-a-website.html#optional-try-react-with-jsx">with JSX</a>.</p>\n<p>This is also <strong>the easiest way to integrate React into an existing website.</strong> You can always add a larger toolchain if you find it helpful!</p>\n<h2 id="recommended-toolchains"><a href="#recommended-toolchains" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Recommended Toolchains</h2>\n<p>The React team primarily recommends these solutions:</p>\n<ul>\n<li>If you’re <strong>learning React</strong> or <strong>creating a new <a href="/bytom/docs/glossary.html#single-page-application">single-page</a> app,</strong> use <a href="#create-react-app">Create React App</a>.</li>\n<li>If you’re building a <strong>server-rendered website with Node.js,</strong> try <a href="#nextjs">Next.js</a>.</li>\n<li>If you’re building a <strong>static content-oriented website,</strong> try <a href="#gatsby">Gatsby</a>.</li>\n<li>If you’re building a <strong>component library</strong> or <strong>integrating with an existing codebase</strong>, try <a href="#more-flexible-toolchains">More Flexible Toolchains</a>.</li>\n</ul>\n<h3 id="create-react-app"><a href="#create-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create React App</h3>\n<p><a href="http://github.com/facebookincubator/create-react-app">Create React App</a> is a comfortable environment for <strong>learning React</strong>, and is the best way to start building <strong>a new <a href="/bytom/docs/glossary.html#single-page-application">single-page</a> application</strong> in React.</p>\n<p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 6 and npm >= 5.2 on your machine. To create a project, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">npx create-react-app my-app\n<span class="token function">cd</span> my-app\n<span class="token function">npm</span> start</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p><code class="gatsby-code-text">npx</code> on the first line is not a typo — it’s a <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b">package runner tool that comes with npm 5.2+</a>.</p>\n</blockquote>\n<p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses <a href="http://babeljs.io/">Babel</a> and <a href="https://webpack.js.org/">webpack</a>, but you don’t need to know anything about them.</p>\n<p>When you’re ready to deploy to production, running <code class="gatsby-code-text">npm run build</code> will create an optimized build of your app in the <code class="gatsby-code-text">build</code> folder. You can learn more about Create React App <a href="https://github.com/facebookincubator/create-react-app#create-react-app-">from its README</a> and the <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">User Guide</a>.</p>\n<h3 id="nextjs"><a href="#nextjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Next.js</h3>\n<p><a href="https://nextjs.org/">Next.js</a> is a popular and lightweight framework for <strong>static and server‑rendered applications</strong> built with React. It includes <strong>styling and routing solutions</strong> out of the box, and assumes that you’re using <a href="https://nodejs.org/">Node.js</a> as the server environment.</p>\n<p>Learn Next.js from <a href="https://nextjs.org/learn/">its official guide</a>.</p>\n<h3 id="gatsby"><a href="#gatsby" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gatsby</h3>\n<p><a href="https://www.gatsbyjs.org/">Gatsby</a> is the best way to create <strong>static websites</strong> with React. It lets you use React components, but outputs pre-rendered HTML and CSS to guarantee the fastest load time.</p>\n<p>Learn Gatsby from <a href="https://www.gatsbyjs.org/docs/">its official guide</a> and a <a href="https://www.gatsbyjs.org/docs/gatsby-starters/">gallery of starter kits</a>.</p>\n<h3 id="more-flexible-toolchains"><a href="#more-flexible-toolchains" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>More Flexible Toolchains</h3>\n<p>The following toolchains offer more flexiblity and choice. We recommend them to more experienced users:</p>\n<ul>\n<li>\n<p><strong><a href="https://neutrinojs.org/">Neutrino</a></strong> combines the power of <a href="https://webpack.js.org/">webpack</a> with the simplicity of presets, and includes a preset for <a href="https://neutrinojs.org/packages/react/">React apps</a> and <a href="https://neutrinojs.org/packages/react-components/">React components</a>.</p>\n</li>\n<li>\n<p><strong><a href="https://github.com/insin/nwb">nwb</a></strong> is particularly great for <a href="https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb">publishing React components for npm</a>. It <a href="https://github.com/insin/nwb/blob/master/docs/guides/ReactApps.md#developing-react-apps-with-nwb">can be used</a> for creating React apps, too. </p>\n</li>\n<li>\n<p><strong><a href="https://parceljs.org/">Parcel</a></strong> is a fast, zero configuration web application bundler that <a href="https://parceljs.org/recipes.html#react">works with React</a>.</p>\n</li>\n<li>\n<p><strong><a href="https://github.com/jaredpalmer/razzle">Razzle</a></strong> is a server-rendering framework that doesn’t require any configuration, but offers more flexibility than Next.js.</p>\n</li>\n</ul>\n<h2 id="creating-a-toolchain-from-scratch"><a href="#creating-a-toolchain-from-scratch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a Toolchain from Scratch</h2>\n<p>A JavaScript build toolchain typically consists of:</p>\n<ul>\n<li>\n<p>A <strong>package manager</strong>, such as <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a>. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.</p>\n</li>\n<li>\n<p>A <strong>bundler</strong>, such as <a href="https://webpack.js.org/">webpack</a> or <a href="https://parceljs.org/">Parcel</a>. It lets you write modular code and bundle it together into small packages to optimize load time.</p>\n</li>\n<li>\n<p>A <strong>compiler</strong> such as <a href="http://babeljs.io/">Babel</a>. It lets you write modern JavaScript code that still works in older browsers.</p>\n</li>\n</ul>\n<p>If you prefer to set up your own JavaScript toolchain from scratch, <a href="https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658">check out this guide</a> that re-creates some of the Create React App functionality.</p>\n<p>Don’t forget to ensure your custom toolchain <a href="/bytom/docs/optimizing-performance.html#use-the-production-build">is correctly set up for production</a>.</p>',frontmatter:{title:"Create a New React App",next:"cdn-links.html",prev:"add-react-to-a-website.html"},fields:{path:null,slug:"docs/create-a-new-react-app.html"}}},pathContext:{slug:"docs/create-a-new-react-app.html"}}}});
//# sourceMappingURL=path---docs-create-a-new-react-app-html-0e1c42314becdd7fc261.js.map