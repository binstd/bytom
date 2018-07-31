webpackJsonp([0xc1158121d287],{725:function(e,t){e.exports={data:{markdownRemark:{html:'<p>There have been many posts recently covering the <i>why</i> and <i>how</i> of React. This week’s community round-up includes a collection of recent articles to help you get started with React, along with a few posts that explain some of the inner workings.</p>\n<h2 id="react-in-a-nutshell"><a href="#react-in-a-nutshell" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React in a nutshell</h2>\n<p>Got five minutes to pitch React to your coworkers? John Lynch (<a href="https://twitter.com/johnrlynch">@johnrlynch</a>) put together <a href="http://slid.es/johnlynch/reactjs">this excellent and refreshing slideshow</a>:</p>\n<iframe src="//slid.es/johnlynch/reactjs/embed" width="100%" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<h2 id="reacts-diff-algorithm"><a href="#reacts-diff-algorithm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React’s diff algorithm</h2>\n<p>React core team member Christopher Chedeau (<a href="https://twitter.com/vjeux">@vjeux</a>) explores the innards of React’s tree diffing algorithm in this <a href="http://calendar.perfplanet.com/2013/diff/">extensive and well-illustrated post</a>. <figure><a href="http://calendar.perfplanet.com/2013/diff/">\n  <a\n    class="gatsby-resp-image-link"\n    href="/bytom/static/react-diff-tree-8442f993f1c4cf9edd4e4315fc6d32a5-ac841.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 486px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 45.67901234567901%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWUlEQVQoz1VRy46CQBDkp/0Bb55MPOjFeNbowegfGKLRAzG7sAQReU2GEVYeRtYBGdmG2fVRh0l19VR3ZUa4/6MsS0qpbdtRFBVFwUXGGOhBEMRxDPrpdArDEK6BCF2hfEGe57quG4YBhCt8qGmasiwriiJJ0na7TdOUd59mfg+crus+ygdgm+M45TuEhxUOjHEYRcR1vxWFq7wDQRBClmUh5Of5netvm5M03azXQK4IbRqN1ziy/Ok4CEizKYniEQhjlS7c6ycJl8tDu237PsHYRUjZ7SBFbWf9PpIkkxDbMC6zmTYe7+M444kEPttdrfT5/Hy9Es9TVdUyzSRJ6g1Zp/Oh6z6l4WJxGI2+plMvCOifuXrk81lttXaqegwCD+O9YWiadrtViSYTdzjcd7sGxrTX0wcDXRTDZ2zGkWWsKNgLoILpvp8S8kPIhdIcCPxxktD6+yv8AjWu9QDKh0U0AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="react diff tree"\n        title=""\n        src="/bytom/static/react-diff-tree-8442f993f1c4cf9edd4e4315fc6d32a5-ac841.png"\n        srcset="/bytom/static/react-diff-tree-8442f993f1c4cf9edd4e4315fc6d32a5-deb22.png 210w,\n/bytom/static/react-diff-tree-8442f993f1c4cf9edd4e4315fc6d32a5-0547d.png 420w,\n/bytom/static/react-diff-tree-8442f993f1c4cf9edd4e4315fc6d32a5-ac841.png 486w"\n        sizes="(max-width: 486px) 100vw, 486px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </a></figure></p>\n<p>While we’re talking about tree diffing: Matt Esch (<a href="https://twitter.com/MatthewEsch">@MatthewEsch</a>) created <a href="https://github.com/Matt-Esch/virtual-dom">this project</a>, which aims to implement the virtual DOM and a corresponding diff algorithm as separate modules.</p>\n<h2 id="many-many-new-introductions-to-react"><a href="#many-many-new-introductions-to-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Many, many new introductions to React!</h2>\n<p>James Padosley wrote a short post on the basics (and merits) of React: <a href="http://james.padolsey.com/javascript/what-is-react/">What is React?</a></p>\n<blockquote>\n<p>What I like most about React is that it doesn’t impose heady design patterns and data-modelling abstractions on me. […] Its opinions are so minimal and its abstractions so focused on the problem of the DOM, that you can merrily slap your design choices atop.</p>\n<p><a href="http://james.padolsey.com/javascript/what-is-react/">Read the full post…</a></p>\n</blockquote>\n<p>Taylor Lapeyre (<a href="https://twitter.com/taylorlapeyre">@taylorlapeyre</a>) wrote another nice <a href="http://words.taylorlapeyre.me/an-introduction-to-react">introduction to React</a>.</p>\n<blockquote>\n<p>React expects you to do the work of getting and pushing data from the server. This makes it very easy to implement React as a front end solution, since it simply expects you to hand it data. React does all the other work.</p>\n<p><a href="http://words.taylorlapeyre.me/an-introduction-to-react">Read the full post…</a></p>\n</blockquote>\n<p><a href="http://www.webdesignporto.com/react-js-in-pure-javascript-facebook-library/?utm_source=echojs&#x26;utm_medium=post&#x26;utm_campaign=echojs">This “Deep explanation for newbies”</a> by <a href="https://twitter.com/ProJavaScript">@ProJavaScript</a> explains how to get started building a React game without using the optional JSX syntax.</p>\n<h3 id="react-around-the-world"><a href="#react-around-the-world" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React around the world</h3>\n<p>It’s great to see the React community expand internationally. <a href="http://habrahabr.ru/post/189230/">This site</a> features a React introduction in Russian.</p>\n<h3 id="react-tutorial-series"><a href="#react-tutorial-series" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React tutorial series</h3>\n<p><a href="https://medium.com/@followchrisp">Christopher Pitt</a> explains <a href="https://medium.com/react-tutorials/828c397e3dc8">React Components</a> and <a href="https://medium.com/react-tutorials/ef11cd55caa0">React Properties</a>. The former includes a nice introduction to using JSX, while the latter focuses on adding interactivity and linking multiple components together. Also check out the <a href="https://medium.com/react-tutorials">other posts in his React Tutorial series</a>, e.g. on using <a href="https://medium.com/react-tutorials/8aaec65a546c">React + Backbone Model</a> and <a href="https://medium.com/react-tutorials/c00be0cf1592">React + Backbone Router</a>.</p>\n<h3 id="beginner-tutorial-implementing-the-board-game-go"><a href="#beginner-tutorial-implementing-the-board-game-go" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Beginner tutorial: Implementing the board game Go</h3>\n<p><a href="http://cjlarose.com/">Chris LaRose</a> walks through the steps of creating a Go app in React, showing how to separate application logic from the rendered components. Check out his <a href="http://cjlarose.com/2014/01/09/react-board-game-tutorial.html">tutorial</a> or go straight to the <a href="https://github.com/cjlarose/react-go">code</a>.</p>\n<h3 id="eggheadio-video-tutorials"><a href="#eggheadio-video-tutorials" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Egghead.io video tutorials</h3>\n<p>Joe Maddalone (<a href="https://twitter.com/joemaddalone">@joemaddalone</a>) of <a href="https://egghead.io/">egghead.io</a> created a series of React video tutorials, such as <a href="http://www.youtube-nocookie.com/v/rFvZydtmsxM">this</a> introduction to React Components. [<a href="http://www.youtube-nocookie.com/v/rFvZydtmsxM">part 1</a>], [<a href="http://www.youtube-nocookie.com/v/5yvFLrt7N8M">part 2</a>]</p>\n<h3 id="react-finally-a-great-serverclient-web-stack"><a href="#react-finally-a-great-serverclient-web-stack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>“React: Finally, a great server/client web stack”</h3>\n<p>Eric Florenzano (<a href="https://twitter.com/ericflo">@ericflo</a>) sheds some light on what makes React perfect for server rendering:</p>\n<blockquote>\n<p>[…] the ideal solution would fully render the markup on the server, deliver it to the client so that it can be shown to the user instantly. Then it would asynchronously load some JavaScript that would attach to the rendered markup, and invisibly promote the page into a full app that can render its own markup. […]</p>\n</blockquote>\n<blockquote>\n<p>What I’ve discovered is that enough of the pieces have come together, that this futuristic-sounding web environment is actually surprisingly easy to do now with React.js.</p>\n</blockquote>\n<blockquote>\n<p><a href="http://eflorenzano.com/blog/2014/01/23/react-finally-server-client/">Read the full post…</a></p>\n</blockquote>\n<h2 id="building-a-complex-react-component"><a href="#building-a-complex-react-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building a complex React component</h2>\n<p><a href="http://matt-harrison.com/">Matt Harrison</a> walks through the process of <a href="http://matt-harrison.com/building-a-complex-web-component-with-facebooks-react-library/">creating an SVG-based Resistance Calculator</a> using React. <figure><a href="http://matt-harrison.com/building-a-complex-web-component-with-facebooks-react-library/">\n  <a\n    class="gatsby-resp-image-link"\n    href="/bytom/static/resistance-calculator-d8672fc477cbb202b53c2b23b7827bd0-1e9b4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 600px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 64.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAACH0lEQVQoz2P4jw38+fv3ydMnz549e/78+dOnz168fPnnzx9MZQxo/J8/fjx6dP/Z08dPHj989PD+k8cPHj8Ckg+fPgGh379/Y9f89+9fIHn/3m13J0sHG2NvdztfL0cQ6eng7WFva2kQ5Of66eN7oJp///5BNX///v3p06ePHz9+8ODBx0+fbt28Zm2ma2Gi3dxYU1GaX1acO3P65JLCbEszXQ8X60+fPqBoBrrk1atXb968efny5fsPH4Ca7a0NTQw0TI00ba30Avzd7ayMrUz1jPXVgK5AtxkYEkDNr1+/fvPm9dev327fvGZnZehgY5STFFucU9xTUlBemp6WEWljro9F848fP548eQJ0M9BmIP/mjatOdmbpKREPT567e/nX/4tXXn26de72sZhQf2AQoGvGDDA7KwNTQw1XOzNXBxs3GxN7G0MHWyNjPVUvN1ssmv+BwV9wTAI1A/1sYaIT4OcaGuRZUV7c3dmWlZ6op6UIDPYvnz8SsBmo2dxEOzLMLz0peub0KevWrq6vrdBWl3VztgLG/+fPn9++ffvx40egenTND+7ddrIzsTLXS4wLy81MWrJo/u5dOzpaG3U05D1dbR89egCMF2DUvnjxAhhN6Jrv3rlpYqCqoyEHTCfAiE1LiSstyokM9VOWF3W2N/2MFs9wzRChd29fz545efrU/hlT+6dP6Zs6qQeIgAwgWjR/5vfvXyHWQIIJANykOqC2/Q83AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="resistance calculator"\n        title=""\n        src="/bytom/static/resistance-calculator-d8672fc477cbb202b53c2b23b7827bd0-1e9b4.png"\n        srcset="/bytom/static/resistance-calculator-d8672fc477cbb202b53c2b23b7827bd0-1cd08.png 210w,\n/bytom/static/resistance-calculator-d8672fc477cbb202b53c2b23b7827bd0-9b07a.png 420w,\n/bytom/static/resistance-calculator-d8672fc477cbb202b53c2b23b7827bd0-1e9b4.png 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </a></figure></p>\n<h2 id="random-tweets"><a href="#random-tweets" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Random Tweets</h2>\n<div><blockquote class="twitter-tweet" lang="en"><p>[#reactjs](https://twitter.com/search?q=%23reactjs&src=hash) has very simple API, but it\'s amazing how much work has been done under the hood to make it blazing fast.</p>&mdash; Anton Astashov (@anton_astashov) <a href="https://twitter.com/anton_astashov/status/417556491646693378">December 30, 2013</a></blockquote></div>\n<div><blockquote class="twitter-tweet" lang="en"><p>[#reactjs]((https://twitter.com/search?q=%23reactjs&src=hash) makes refactoring your HTML as easy & natural as refactoring your javascript [@react_js](https://twitter.com/react_js)</p>&mdash; Jared Forsyth (@jaredforsyth) <a href="https://twitter.com/jaredforsyth/status/420304083010854912">January 6, 2014</a></blockquote></div>\n<div><blockquote class="twitter-tweet" lang="en"><p>Played with react.js for an hour, so many things suddenly became stupidly simple.</p>&mdash; andrewingram (@andrewingram) <a href="https://twitter.com/andrewingram/status/422810480701620225">January 13, 2014</a></blockquote></div>\n<div><blockquote class="twitter-tweet" lang="en"><p>[@okonetchnikov](https://twitter.com/okonetchnikov) HOLY CRAP react is nice</p>&mdash; julik (@julikt) <a href="https://twitter.com/julikt/status/422843478792765440">January 13, 2014</a></blockquote></div>\n<div><blockquote class="twitter-tweet" lang="en"><p>brb rewriting everything with react\n</p>&mdash; Ben Smithett (@bensmithett) <a href="https://twitter.com/bensmithett/status/430671242186592256">February 4, 2014</a></blockquote></div>',excerpt:"There have been many posts recently covering the  why  and  how  of React. This week’s community round-up includes a collection of recent articles to help you get started with React, along with a few posts that explain some of the inner workings. React in a nutshell Got five minutes to pitch React to your coworkers? John Lynch ( @johnrlynch ) put together  this excellent and refreshing slideshow : React’s diff algorithm React core team member Christopher Chedeau ( @vjeux ) explores the innards…",frontmatter:{title:"Community Round-up #16",next:null,prev:null,author:[{frontmatter:{name:"Jonas Gebhardt",url:"https://twitter.com/jonasgebhardt"}}]},fields:{date:"February 14, 2014",path:null,slug:"/blog/2014/02/15/community-roundup-16.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2014/02/15/community-roundup-16.html"}}}});
//# sourceMappingURL=path---blog-2014-02-15-community-roundup-16-html-5ee4b48c9d620bf01b67.js.map