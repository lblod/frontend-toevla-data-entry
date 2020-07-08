export default {
  initial: "collapsed",
  states: {
    collapsed: {
      on: {
        "TOGGLE_OPEN": "loading"
      }
    },
    loading: {
      entry: ["loadChildren"],
      on: {
        "LOADED": "open",
        "ERROR": "error",
        "COLLAPSE": "collapsed"
      }
    },
    open: {
      on: {
        "TOGGLE_OPEN": "collapsed"
      }
    },
    error: {}
  }
};
