webpackJsonp([0xa3eefdc10272],{954:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"function logProps(Component) {\\n  class LogProps extends React.Component {\\n    // ...\\n  }\\n\\n  function forwardRef(props, ref) {\\n    return <LogProps {...props} forwardedRef={ref} />;\\n  }\\n\\n  // Give this component a more helpful display name in DevTools.\\n  // e.g. \\"ForwardRef(logProps(MyComponent))\\"\\n  // highlight-range{1-2}\\n  const name = Component.displayName || Component.name;\\n  forwardRef.displayName = `logProps(${name})`;\\n\\n  return React.forwardRef(forwardRef);\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-forwarding-refs-customized-display-name-bfc1ca66af67ab84aa73.js.map