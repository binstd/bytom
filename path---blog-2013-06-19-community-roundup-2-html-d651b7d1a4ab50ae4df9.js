webpackJsonp([74052347498642],{699:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Since the launch we have received a lot of feedback and are actively working on React 0.4. In the meantime, here are the highlights of this week.</p>\n<h2 id="some-quick-thoughts-on-react"><a href="#some-quick-thoughts-on-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some quick thoughts on React</h2>\n<p><a href="http://www.andrewgreig.com/">Andrew Greig</a> made a blog post that gives a high level description of what React is.</p>\n<blockquote>\n<p>I have been using Facebooks recently released JavaScript framework called React.js for the last few days and have managed to obtain a rather high level understanding of how it works and formed a good perspective on how it fits in to the entire javascript framework ecosystem.</p>\n<p>Basically, React is not an MVC framework. It is not a replacement for Backbone or Knockout or Angular, instead it is designed to work with existing frameworks and help extend their functionality.</p>\n<p>It is designed for building big UIs. The type where you have lots of reusable components that are handling events and presenting and changing some backend data. In a traditional MVC app, React fulfils the role of the View. So you would still need to handle the Model and Controller on your own.</p>\n<p>I found the best way to utilise React was to pair it with Backbone, with React replacing the Backbone View, or to write your own Model/Data object and have React communicate with that.</p>\n<p><a href="http://www.andrewgreig.com/637/">Read the full post…</a></p>\n</blockquote>\n<h2 id="react-and-socketio-chat-application"><a href="#react-and-socketio-chat-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React and Socket.IO Chat Application</h2>\n<p><a href="https://danialk.github.io/">Danial Khosravi</a> made a real-time chat application that interacts with the back-end using Socket.IO.</p>\n<blockquote>\n<p>A week ago I was playing with AngularJS and <a href="https://github.com/btford/angular-socket-io-im">this little chat application</a> which uses socket.io and nodejs for realtime communication. Yesterday I saw a post about ReactJS in <a href="http://www.echojs.com/">EchoJS</a> and started playing with this UI library. After playing a bit with React, I decided to write and chat application using React and I used Bran Ford’s Backend for server side of this little app.</p>\n<figure><a href="https://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/">\n  <a class="gatsby-resp-image-link" href="/bytom/static/chatapp-75b8185edbfde871ee68f5bdcfb8a9e5-6a083.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 441px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 37.64172335600907%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABaElEQVQY002R3W7aQBCFN9gYZFPJUMCA7UTtRVTAzv7v7CxeQwUhN33/5+m6qZJIo9GZi+8c6QyZ6ktt20fHCpAzgU+uXSg117CxqnB6beQcfNQ6sjfkCORoHr4MWWmxA15aViIbthNTfR7jn6m6LuC+xHPGdELVlKrxix34gyGH961JMEteVGVZhWypRI595K6xvaQCtwpn2q2UKMMA2zrIBGRMZEymzEwYkuARXGukj8hWmufo4+418bfkfB/194nx61ZtqNoaUVr67Jvns/yu1ULJTJ4+4SFZi9x2cXcb20tyukbS50fxk8qFVpWja8Prk05YR/ZIfhmy1wM8GWBWu5AcYB/3b0n/GuPv8eUt5q5o1Y7JAngIKFFugVc2CDEbkhtIW/2D82pIwNrxuTGpvWXa705ih+IJ6dL037QvDN1AYCCHLmUQh/4movuoftTAh4j+6VFjokaHc9Ta/+85wENj39/2F+f1SqfA94BRAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="chatapp" title="" src="/bytom/static/chatapp-75b8185edbfde871ee68f5bdcfb8a9e5-6a083.png" srcset="/bytom/static/chatapp-75b8185edbfde871ee68f5bdcfb8a9e5-edc80.png 210w,\n/bytom/static/chatapp-75b8185edbfde871ee68f5bdcfb8a9e5-2de56.png 420w,\n/bytom/static/chatapp-75b8185edbfde871ee68f5bdcfb8a9e5-6a083.png 441w" sizes="(max-width: 441px) 100vw, 441px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<p><a href="https://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/">Read the full post…</a></p>\n</blockquote>\n<h2 id="react-and-other-frameworks"><a href="#react-and-other-frameworks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React and Other Frameworks</h2>\n<p><a href="http://www.petehunt.net/blog/">Pete Hunt</a> wrote an answer on Quora comparing React and Angular directives. At the end, he explains how you can make an Angular directive that is in fact being rendered with React.</p>\n<blockquote>\n<p>To set the record straight: React components are far more powerful than Angular templates; they should be compared with Angular’s directives instead. So I took the first Google hit for “AngularJS directive tutorial” (AngularJS Directives Tutorial - Fundoo Solutions), rewrote it in React and compared them. […]</p>\n<p>We’ve designed React from the beginning to work well with other libraries. Angular is no exception. Let’s take the original Angular example and use React to implement the fundoo-rating directive.</p>\n<p><a href="https://www.quora.com/Pete-Hunt/Posts/Facebooks-React-vs-AngularJS-A-Closer-Look">Read the full post…</a></p>\n</blockquote>\n<p>In the same vein, <a href="https://twitter.com/markov_twain/status/345702941845499906">Markov Twain</a> re-implemented the examples on the front-page <a href="http://jsbin.com/azihiw/2/edit">with Ember</a> and <a href="https://twitter.com/vla">Vlad Yazhbin</a> re-implemented the tutorial <a href="http://jsfiddle.net/vla/Cdrse/">with Angular</a>.</p>\n<h2 id="web-components-react--x-tags"><a href="#web-components-react--x-tags" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Web Components: React &#x26; x-tags</h2>\n<p>Mozilla and Google are actively working on Web Components. <a href="http://blog.vjeux.com/">Vjeux</a> wrote a proof of concept that shows how to implement them using React.</p>\n<blockquote>\n<p>Using <a href="http://www.x-tags.org/">x-tags</a> from Mozilla, we can write custom tags within the DOM. This is a great opportunity to be able to write reusable components without being tied to a particular library. I wrote <a href="https://github.com/vjeux/react-xtags/">x-react</a> to have them being rendered in React.</p>\n<figure><a href="http://blog.vjeux.com/2013/javascript/custom-components-react-x-tags.html">\n  <a class="gatsby-resp-image-link" href="/bytom/static/xreact-f9207adea125403fe928594ccb67a539-420ea.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 347px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 22.478386167146976%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQI15XGWxaCIBRAUec/t9JV9DQTskKQ9/WG0Ac5hfY6H6eSQl5Pl460bdOynnaH+n6+Ho/3y6nnwwjBwQzTNBGy32y3dd10t3ZPSN00SqnKe++8c3bNO6vBBevg+RRCWsQcQsIQjdbg57hEAED4lFzSZ1m/QkQ5TmPP2Y69u4eR0hjPuRHCcq6F0EpqRunAhhWl9DW8FVfiNeI8V6WUb/rmmBIuOebyjx+Khd5ugxNyYgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="xreact" title="" src="/bytom/static/xreact-f9207adea125403fe928594ccb67a539-420ea.png" srcset="/bytom/static/xreact-f9207adea125403fe928594ccb67a539-eac77.png 210w,\n/bytom/static/xreact-f9207adea125403fe928594ccb67a539-420ea.png 347w" sizes="(max-width: 347px) 100vw, 347px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<p><a href="http://blog.vjeux.com/2013/javascript/custom-components-react-x-tags.html">Read the full post…</a></p>\n</blockquote>\n<h2 id="react-todomvc-example"><a href="#react-todomvc-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React TodoMVC Example</h2>\n<p><a href="http://todomvc.com/">TodoMVC.com</a> is a website that collects various implementations of the same basic Todo app. <a href="http://www.petehunt.net/blog/">Pete Hunt</a> wrote an idiomatic React version.</p>\n<blockquote>\n<p>Developers these days are spoiled with choice when it comes to selecting an MV* framework for structuring and organizing their JavaScript web apps.</p>\n<p>To help solve this problem, we created TodoMVC - a project which offers the same Todo application implemented using MV* concepts in most of the popular JavaScript MV* frameworks of today.</p>\n<figure><a href="http://todomvc.com/labs/architecture-examples/react/">\n  <a class="gatsby-resp-image-link" href="/bytom/static/todomvc-d2c3b90797c16ad85c4a782bb7af4466-527d5.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 595px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 34.11764705882353%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA7UlEQVQY032O7W6DIBSGuf/bWWy2Jcvsfu0Kai0UUKdTU3QiBQt+7FibzDTpnrx5cw7ng4Penz3Q9nWzfZnl3+T5t9RbGtZ62zx9fvhlWSJOSEKP5LCnBLMjpjhkc0DAKT4wqHL2FfE7xZylaYqUUp0xP0DTNFIKUS0BuKiqVinr3J36YZBtG0URMsZ0WoNrcK2ttX3fuytLYP+4AF13gUfYPw+35/PgnJSyrmtxOsGKcRyHFeOKaZoWh3s55yhL0yzLiqKorogHQClJEkIIxphSGscxpAgWUEbhhu9/yfMcZoIg2AW7cB/CJPz3C0Khea8phbHCAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="todomvc" title="" src="/bytom/static/todomvc-d2c3b90797c16ad85c4a782bb7af4466-527d5.png" srcset="/bytom/static/todomvc-d2c3b90797c16ad85c4a782bb7af4466-2583d.png 210w,\n/bytom/static/todomvc-d2c3b90797c16ad85c4a782bb7af4466-7370c.png 420w,\n/bytom/static/todomvc-d2c3b90797c16ad85c4a782bb7af4466-527d5.png 595w" sizes="(max-width: 595px) 100vw, 595px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<p><a href="https://github.com/tastejs/todomvc/tree/gh-pages/labs/architecture-examples/react">Read the source code…</a></p>\n</blockquote>\n<h2 id="jsx-is-not-html"><a href="#jsx-is-not-html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX is not HTML</h2>\n<p>Many of you pointed out differences between JSX and HTML. In order to clear up some confusion, we have added some documentation that covers the four main differences:</p>\n<ul>\n<li><a href="/bytom/docs/jsx-is-not-html.html">Whitespace removal</a></li>\n<li><a href="/bytom/docs/jsx-is-not-html.html">HTML Entities</a></li>\n<li><a href="/bytom/docs/jsx-is-not-html.html">Comments</a></li>\n<li><a href="/bytom/docs/jsx-is-not-html.html">Custom HTML Attributes</a></li>\n</ul>',excerpt:"Since the launch we have received a lot of feedback and are actively working on React 0.4. In the meantime, here are the highlights of this week. Some quick thoughts on React Andrew Greig  made a blog post that gives a high level description of what React is. I have been using Facebooks recently released JavaScript framework called React.js for the last few days and have managed to obtain a rather high level understanding of how it works and formed a good perspective on how it fits in to the…",frontmatter:{title:"Community Round-up #2",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"June 18, 2013",path:null,slug:"/blog/2013/06/19/community-roundup-2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2013/06/19/community-roundup-2.html"}}}});
//# sourceMappingURL=path---blog-2013-06-19-community-roundup-2-html-d651b7d1a4ab50ae4df9.js.map