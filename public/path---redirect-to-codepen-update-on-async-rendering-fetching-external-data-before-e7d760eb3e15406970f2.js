webpackJsonp([22997159098297],{982:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// Before\\nclass ExampleComponent extends React.Component {\\n  state = {\\n    externalData: null,\\n  };\\n\\n  // highlight-range{1-8}\\n  componentWillMount() {\\n    this._asyncRequest = asyncLoadData().then(\\n      externalData => {\\n        this._asyncRequest = null;\\n        this.setState({externalData});\\n      }\\n    );\\n  }\\n\\n  componentWillUnmount() {\\n    if (this._asyncRequest) {\\n      this._asyncRequest.cancel();\\n    }\\n  }\\n\\n  render() {\\n    if (this.state.externalData === null) {\\n      // Render loading state ...\\n    } else {\\n      // Render real UI ...\\n    }\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-fetching-external-data-before-e7d760eb3e15406970f2.js.map