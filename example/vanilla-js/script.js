(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var lr = {},
  zf = {
    get exports() {
      return lr;
    },
    set exports(e) {
      lr = e;
    },
  },
  Al = {},
  ie = {},
  Lf = {
    get exports() {
      return ie;
    },
    set exports(e) {
      ie = e;
    },
  },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr = Symbol.for("react.element"),
  Ff = Symbol.for("react.portal"),
  Df = Symbol.for("react.fragment"),
  Af = Symbol.for("react.strict_mode"),
  If = Symbol.for("react.profiler"),
  jf = Symbol.for("react.provider"),
  Mf = Symbol.for("react.context"),
  Bf = Symbol.for("react.forward_ref"),
  Uf = Symbol.for("react.suspense"),
  $f = Symbol.for("react.memo"),
  Hf = Symbol.for("react.lazy"),
  Au = Symbol.iterator;
function Vf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ea = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ta = Object.assign,
  na = {};
function Cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = na),
    (this.updater = n || ea);
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ra() {}
ra.prototype = Cn.prototype;
function zi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = na),
    (this.updater = n || ea);
}
var Li = (zi.prototype = new ra());
Li.constructor = zi;
ta(Li, Cn.prototype);
Li.isPureReactComponent = !0;
var Iu = Array.isArray,
  la = Object.prototype.hasOwnProperty,
  Fi = { current: null },
  oa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ia(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      la.call(t, r) && !oa.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: xr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Fi.current,
  };
}
function Wf(e, t) {
  return {
    $$typeof: xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Di(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function Qf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ju = /\/+/g;
function to(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qf("" + e.key)
    : t.toString(36);
}
function Xr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xr:
          case Ff:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + to(i, 0) : r),
      Iu(l)
        ? ((n = ""),
          e != null && (n = e.replace(ju, "$&/") + "/"),
          Xr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Di(l) &&
            (l = Wf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ju, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Iu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + to(o, u);
      i += Xr(o, t, n, s, l);
    }
  else if (((s = Vf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + to(o, u++)), (i += Xr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Xr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Kf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Jr = { transition: null },
  Yf = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Jr,
    ReactCurrentOwner: Fi,
  };
D.Children = {
  map: Or,
  forEach: function (e, t, n) {
    Or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Di(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Cn;
D.Fragment = Df;
D.Profiler = If;
D.PureComponent = zi;
D.StrictMode = Af;
D.Suspense = Uf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ta({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Fi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      la.call(t, s) &&
        !oa.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: xr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Mf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jf, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = ia;
D.createFactory = function (e) {
  var t = ia.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Bf, render: e };
};
D.isValidElement = Di;
D.lazy = function (e) {
  return { $$typeof: Hf, _payload: { _status: -1, _result: e }, _init: Kf };
};
D.memo = function (e, t) {
  return { $$typeof: $f, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Jr.transition;
  Jr.transition = {};
  try {
    e();
  } finally {
    Jr.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
D.useContext = function (e) {
  return ye.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
D.useId = function () {
  return ye.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return ye.current.useRef(e);
};
D.useState = function (e) {
  return ye.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return ye.current.useTransition();
};
D.version = "18.2.0";
(function (e) {
  e.exports = D;
})(Lf);
const Xf = Of(ie);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = ie,
  Gf = Symbol.for("react.element"),
  Zf = Symbol.for("react.fragment"),
  qf = Object.prototype.hasOwnProperty,
  bf = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function ua(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) qf.call(t, r) && !ed.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Gf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bf.current,
  };
}
Al.Fragment = Zf;
Al.jsx = ua;
Al.jsxs = ua;
(function (e) {
  e.exports = Al;
})(zf);
const Ai = lr.Fragment,
  T = lr.jsx,
  oe = lr.jsxs;
var Lo = {},
  Fo = {},
  td = {
    get exports() {
      return Fo;
    },
    set exports(e) {
      Fo = e;
    },
  },
  Te = {},
  Do = {},
  nd = {
    get exports() {
      return Do;
    },
    set exports(e) {
      Do = e;
    },
  },
  sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, z) {
    var F = x.length;
    x.push(z);
    e: for (; 0 < F; ) {
      var B = (F - 1) >>> 1,
        V = x[B];
      if (0 < l(V, z)) (x[B] = z), (x[F] = V), (F = B);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0],
      F = x.pop();
    if (F !== z) {
      x[0] = F;
      e: for (var B = 0, V = x.length, Xe = V >>> 1; B < Xe; ) {
        var R = 2 * (B + 1) - 1,
          mt = x[R],
          xe = R + 1,
          Je = x[xe];
        if (0 > l(mt, F))
          xe < V && 0 > l(Je, mt)
            ? ((x[B] = Je), (x[xe] = F), (B = xe))
            : ((x[B] = mt), (x[R] = F), (B = R));
        else if (xe < V && 0 > l(Je, F)) (x[B] = Je), (x[xe] = F), (B = xe);
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var F = x.sortIndex - z.sortIndex;
    return F !== 0 ? F : x.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    m = null,
    y = 3,
    w = !1,
    h = !1,
    v = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= x)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function S(x) {
    if (((v = !1), d(x), !h))
      if (n(s) !== null) (h = !0), ze(E);
      else {
        var z = n(a);
        z !== null && Le(S, z.startTime - x);
      }
  }
  function E(x, z) {
    (h = !1), v && ((v = !1), f(P), (P = -1)), (w = !0);
    var F = y;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (x && !Q()));

      ) {
        var B = m.callback;
        if (typeof B == "function") {
          (m.callback = null), (y = m.priorityLevel);
          var V = B(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof V == "function" ? (m.callback = V) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Xe = !0;
      else {
        var R = n(a);
        R !== null && Le(S, R.startTime - z), (Xe = !1);
      }
      return Xe;
    } finally {
      (m = null), (y = F), (w = !1);
    }
  }
  var _ = !1,
    C = null,
    P = -1,
    A = 5,
    O = -1;
  function Q() {
    return !(e.unstable_now() - O < A);
  }
  function re() {
    if (C !== null) {
      var x = e.unstable_now();
      O = x;
      var z = !0;
      try {
        z = C(!0, x);
      } finally {
        z ? ve() : ((_ = !1), (C = null));
      }
    } else _ = !1;
  }
  var ve;
  if (typeof c == "function")
    ve = function () {
      c(re);
    };
  else if (typeof MessageChannel < "u") {
    var Be = new MessageChannel(),
      Ye = Be.port2;
    (Be.port1.onmessage = re),
      (ve = function () {
        Ye.postMessage(null);
      });
  } else
    ve = function () {
      L(re, 0);
    };
  function ze(x) {
    (C = x), _ || ((_ = !0), ve());
  }
  function Le(x, z) {
    P = L(function () {
      x(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || w || ((h = !0), ze(E));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = y;
      }
      var F = y;
      y = z;
      try {
        return x();
      } finally {
        y = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, z) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var F = y;
      y = x;
      try {
        return z();
      } finally {
        y = F;
      }
    }),
    (e.unstable_scheduleCallback = function (x, z, F) {
      var B = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? B + F : B))
          : (F = B),
        x)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = F + V),
        (x = {
          id: p++,
          callback: z,
          priorityLevel: x,
          startTime: F,
          expirationTime: V,
          sortIndex: -1,
        }),
        F > B
          ? ((x.sortIndex = F),
            t(a, x),
            n(s) === null &&
              x === n(a) &&
              (v ? (f(P), (P = -1)) : (v = !0), Le(S, F - B)))
          : ((x.sortIndex = V), t(s, x), h || w || ((h = !0), ze(E))),
        x
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (x) {
      var z = y;
      return function () {
        var F = y;
        y = z;
        try {
          return x.apply(this, arguments);
        } finally {
          y = F;
        }
      };
    });
})(sa);
(function (e) {
  e.exports = sa;
})(nd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = ie,
  Re = Do;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ca = new Set(),
  or = {};
function Jt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) ca.add(t[e]);
}
var st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ao = Object.prototype.hasOwnProperty,
  rd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Bu = {};
function ld(e) {
  return Ao.call(Bu, e)
    ? !0
    : Ao.call(Mu, e)
    ? !1
    : rd.test(e)
    ? (Bu[e] = !0)
    : ((Mu[e] = !0), !1);
}
function od(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function id(e, t, n, r) {
  if (t === null || typeof t > "u" || od(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ii = /[\-:]([a-z])/g;
function ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ii, ji);
    se[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ii, ji);
    se[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ii, ji);
  se[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mi(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (id(t, n, l, r) && (n = null),
    r || l === null
      ? ld(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  qt = Symbol.for("react.portal"),
  bt = Symbol.for("react.fragment"),
  Bi = Symbol.for("react.strict_mode"),
  Io = Symbol.for("react.profiler"),
  fa = Symbol.for("react.provider"),
  da = Symbol.for("react.context"),
  Ui = Symbol.for("react.forward_ref"),
  jo = Symbol.for("react.suspense"),
  Mo = Symbol.for("react.suspense_list"),
  $i = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  pa = Symbol.for("react.offscreen"),
  Uu = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uu && e[Uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  no;
function Qn(e) {
  if (no === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      no = (t && t[1]) || "";
    }
  return (
    `
` +
    no +
    e
  );
}
var ro = !1;
function lo(e, t) {
  if (!e || ro) return "";
  ro = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (ro = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function ud(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = lo(e.type, !1)), e;
    case 11:
      return (e = lo(e.type.render, !1)), e;
    case 1:
      return (e = lo(e.type, !0)), e;
    default:
      return "";
  }
}
function Bo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case qt:
      return "Portal";
    case Io:
      return "Profiler";
    case Bi:
      return "StrictMode";
    case jo:
      return "Suspense";
    case Mo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case da:
        return (e.displayName || "Context") + ".Consumer";
      case fa:
        return (e._context.displayName || "Context") + ".Provider";
      case Ui:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $i:
        return (
          (t = e.displayName || null), t !== null ? t : Bo(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return Bo(e(t));
        } catch {}
    }
  return null;
}
function sd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Bo(t);
    case 8:
      return t === Bi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ma(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ad(e) {
  var t = ma(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Lr(e) {
  e._valueTracker || (e._valueTracker = ad(e));
}
function ya(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ma(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function cl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Uo(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $u(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ha(e, t) {
  (t = t.checked), t != null && Mi(e, "checked", t, !1);
}
function $o(e, t) {
  ha(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ho(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ho(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ho(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Vo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function va(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ga(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ga(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Fr,
  wa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Fr = Fr || document.createElement("div"),
          Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Fr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  cd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function Sa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ka(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Sa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var fd = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Qo(e, t) {
  if (t) {
    if (fd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ko(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yo = null;
function Hi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xo = null,
  dn = null,
  pn = null;
function Qu(e) {
  if ((e = Nr(e))) {
    if (typeof Xo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ul(t)), Xo(e.stateNode, e.type, t));
  }
}
function Ea(e) {
  dn ? (pn ? pn.push(e) : (pn = [e])) : (dn = e);
}
function xa() {
  if (dn) {
    var e = dn,
      t = pn;
    if (((pn = dn = null), Qu(e), t)) for (e = 0; e < t.length; e++) Qu(t[e]);
  }
}
function _a(e, t) {
  return e(t);
}
function Ca() {}
var oo = !1;
function Na(e, t, n) {
  if (oo) return e(t, n);
  oo = !0;
  try {
    return _a(e, t, n);
  } finally {
    (oo = !1), (dn !== null || pn !== null) && (Ca(), xa());
  }
}
function ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ul(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Jo = !1;
if (st)
  try {
    var jn = {};
    Object.defineProperty(jn, "passive", {
      get: function () {
        Jo = !0;
      },
    }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn);
  } catch {
    Jo = !1;
  }
function dd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Gn = !1,
  fl = null,
  dl = !1,
  Go = null,
  pd = {
    onError: function (e) {
      (Gn = !0), (fl = e);
    },
  };
function md(e, t, n, r, l, o, i, u, s) {
  (Gn = !1), (fl = null), dd.apply(pd, arguments);
}
function yd(e, t, n, r, l, o, i, u, s) {
  if ((md.apply(this, arguments), Gn)) {
    if (Gn) {
      var a = fl;
      (Gn = !1), (fl = null);
    } else throw Error(k(198));
    dl || ((dl = !0), (Go = a));
  }
}
function Gt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ku(e) {
  if (Gt(e) !== e) throw Error(k(188));
}
function hd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gt(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ku(l), e;
        if (o === r) return Ku(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ra(e) {
  return (e = hd(e)), e !== null ? Ta(e) : null;
}
function Ta(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ta(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Oa = Re.unstable_scheduleCallback,
  Yu = Re.unstable_cancelCallback,
  vd = Re.unstable_shouldYield,
  gd = Re.unstable_requestPaint,
  G = Re.unstable_now,
  wd = Re.unstable_getCurrentPriorityLevel,
  Vi = Re.unstable_ImmediatePriority,
  za = Re.unstable_UserBlockingPriority,
  pl = Re.unstable_NormalPriority,
  Sd = Re.unstable_LowPriority,
  La = Re.unstable_IdlePriority,
  Il = null,
  et = null;
function kd(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var We = Math.clz32 ? Math.clz32 : _d,
  Ed = Math.log,
  xd = Math.LN2;
function _d(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ed(e) / xd) | 0)) | 0;
}
var Dr = 64,
  Ar = 4194304;
function Yn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ml(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Yn(u)) : ((o &= i), o !== 0 && (r = Yn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Yn(i)) : o !== 0 && (r = Yn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - We(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Cd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - We(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Cd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fa() {
  var e = Dr;
  return (Dr <<= 1), !(Dr & 4194240) && (Dr = 64), e;
}
function io(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _r(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - We(t)),
    (e[t] = n);
}
function Pd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - We(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Wi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function Da(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Aa,
  Qi,
  Ia,
  ja,
  Ma,
  qo = !1,
  Ir = [],
  xt = null,
  _t = null,
  Ct = null,
  sr = new Map(),
  ar = new Map(),
  wt = [],
  Rd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Nr(t)), t !== null && Qi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Td(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (xt = Mn(xt, e, t, n, r, l)), !0;
    case "dragenter":
      return (_t = Mn(_t, e, t, n, r, l)), !0;
    case "mouseover":
      return (Ct = Mn(Ct, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return sr.set(o, Mn(sr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ar.set(o, Mn(ar.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ba(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = Gt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pa(n)), t !== null)) {
          (e.blockedOn = t),
            Ma(e.priority, function () {
              Ia(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Yo = r), n.target.dispatchEvent(r), (Yo = null);
    } else return (t = Nr(n)), t !== null && Qi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ju(e, t, n) {
  Gr(e) && n.delete(t);
}
function Od() {
  (qo = !1),
    xt !== null && Gr(xt) && (xt = null),
    _t !== null && Gr(_t) && (_t = null),
    Ct !== null && Gr(Ct) && (Ct = null),
    sr.forEach(Ju),
    ar.forEach(Ju);
}
function Bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qo ||
      ((qo = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Od)));
}
function cr(e) {
  function t(l) {
    return Bn(l, e);
  }
  if (0 < Ir.length) {
    Bn(Ir[0], e);
    for (var n = 1; n < Ir.length; n++) {
      var r = Ir[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && Bn(xt, e),
      _t !== null && Bn(_t, e),
      Ct !== null && Bn(Ct, e),
      sr.forEach(t),
      ar.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    Ba(n), n.blockedOn === null && wt.shift();
}
var mn = dt.ReactCurrentBatchConfig,
  yl = !0;
function zd(e, t, n, r) {
  var l = M,
    o = mn.transition;
  mn.transition = null;
  try {
    (M = 1), Ki(e, t, n, r);
  } finally {
    (M = l), (mn.transition = o);
  }
}
function Ld(e, t, n, r) {
  var l = M,
    o = mn.transition;
  mn.transition = null;
  try {
    (M = 4), Ki(e, t, n, r);
  } finally {
    (M = l), (mn.transition = o);
  }
}
function Ki(e, t, n, r) {
  if (yl) {
    var l = bo(e, t, n, r);
    if (l === null) vo(e, t, r, hl, n), Xu(e, r);
    else if (Td(l, e, t, n, r)) r.stopPropagation();
    else if ((Xu(e, r), t & 4 && -1 < Rd.indexOf(e))) {
      for (; l !== null; ) {
        var o = Nr(l);
        if (
          (o !== null && Aa(o),
          (o = bo(e, t, n, r)),
          o === null && vo(e, t, r, hl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else vo(e, t, r, null, n);
  }
}
var hl = null;
function bo(e, t, n, r) {
  if (((hl = null), (e = Hi(r)), (e = Bt(e)), e !== null))
    if (((t = Gt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hl = e), null;
}
function Ua(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wd()) {
        case Vi:
          return 1;
        case za:
          return 4;
        case pl:
        case Sd:
          return 16;
        case La:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  Yi = null,
  Zr = null;
function $a() {
  if (Zr) return Zr;
  var e,
    t = Yi,
    n = t.length,
    r,
    l = "value" in kt ? kt.value : kt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Zr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function qr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function jr() {
  return !0;
}
function Gu() {
  return !1;
}
function Oe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? jr
        : Gu),
      (this.isPropagationStopped = Gu),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = jr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = jr));
      },
      persist: function () {},
      isPersistent: jr,
    }),
    t
  );
}
var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xi = Oe(Nn),
  Cr = X({}, Nn, { view: 0, detail: 0 }),
  Fd = Oe(Cr),
  uo,
  so,
  Un,
  jl = X({}, Cr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ji,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Un &&
            (Un && e.type === "mousemove"
              ? ((uo = e.screenX - Un.screenX), (so = e.screenY - Un.screenY))
              : (so = uo = 0),
            (Un = e)),
          uo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : so;
    },
  }),
  Zu = Oe(jl),
  Dd = X({}, jl, { dataTransfer: 0 }),
  Ad = Oe(Dd),
  Id = X({}, Cr, { relatedTarget: 0 }),
  ao = Oe(Id),
  jd = X({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Md = Oe(jd),
  Bd = X({}, Nn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ud = Oe(Bd),
  $d = X({}, Nn, { data: 0 }),
  qu = Oe($d),
  Hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Vd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wd[e]) ? !!t[e] : !1;
}
function Ji() {
  return Qd;
}
var Kd = X({}, Cr, {
    key: function (e) {
      if (e.key) {
        var t = Hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Vd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ji,
    charCode: function (e) {
      return e.type === "keypress" ? qr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yd = Oe(Kd),
  Xd = X({}, jl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bu = Oe(Xd),
  Jd = X({}, Cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ji,
  }),
  Gd = Oe(Jd),
  Zd = X({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qd = Oe(Zd),
  bd = X({}, jl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ep = Oe(bd),
  tp = [9, 13, 27, 32],
  Gi = st && "CompositionEvent" in window,
  Zn = null;
st && "documentMode" in document && (Zn = document.documentMode);
var np = st && "TextEvent" in window && !Zn,
  Ha = st && (!Gi || (Zn && 8 < Zn && 11 >= Zn)),
  es = String.fromCharCode(32),
  ts = !1;
function Va(e, t) {
  switch (e) {
    case "keyup":
      return tp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function rp(e, t) {
  switch (e) {
    case "compositionend":
      return Wa(t);
    case "keypress":
      return t.which !== 32 ? null : ((ts = !0), es);
    case "textInput":
      return (e = t.data), e === es && ts ? null : e;
    default:
      return null;
  }
}
function lp(e, t) {
  if (en)
    return e === "compositionend" || (!Gi && Va(e, t))
      ? ((e = $a()), (Zr = Yi = kt = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ha && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var op = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!op[e.type] : t === "textarea";
}
function Qa(e, t, n, r) {
  Ea(r),
    (t = vl(t, "onChange")),
    0 < t.length &&
      ((n = new Xi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  fr = null;
function ip(e) {
  nc(e, 0);
}
function Ml(e) {
  var t = rn(e);
  if (ya(t)) return e;
}
function up(e, t) {
  if (e === "change") return t;
}
var Ka = !1;
if (st) {
  var co;
  if (st) {
    var fo = "oninput" in document;
    if (!fo) {
      var rs = document.createElement("div");
      rs.setAttribute("oninput", "return;"),
        (fo = typeof rs.oninput == "function");
    }
    co = fo;
  } else co = !1;
  Ka = co && (!document.documentMode || 9 < document.documentMode);
}
function ls() {
  qn && (qn.detachEvent("onpropertychange", Ya), (fr = qn = null));
}
function Ya(e) {
  if (e.propertyName === "value" && Ml(fr)) {
    var t = [];
    Qa(t, fr, e, Hi(e)), Na(ip, t);
  }
}
function sp(e, t, n) {
  e === "focusin"
    ? (ls(), (qn = t), (fr = n), qn.attachEvent("onpropertychange", Ya))
    : e === "focusout" && ls();
}
function ap(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ml(fr);
}
function cp(e, t) {
  if (e === "click") return Ml(t);
}
function fp(e, t) {
  if (e === "input" || e === "change") return Ml(t);
}
function dp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : dp;
function dr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ao.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function os(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function is(e, t) {
  var n = os(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = os(n);
  }
}
function Xa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ja() {
  for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cl(e.document);
  }
  return t;
}
function Zi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function pp(e) {
  var t = Ja(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = is(n, o));
        var i = is(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mp = st && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  ei = null,
  bn = null,
  ti = !1;
function us(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ti ||
    tn == null ||
    tn !== cl(r) ||
    ((r = tn),
    "selectionStart" in r && Zi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (bn && dr(bn, r)) ||
      ((bn = r),
      (r = vl(ei, "onSelect")),
      0 < r.length &&
        ((t = new Xi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function Mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: Mr("Animation", "AnimationEnd"),
    animationiteration: Mr("Animation", "AnimationIteration"),
    animationstart: Mr("Animation", "AnimationStart"),
    transitionend: Mr("Transition", "TransitionEnd"),
  },
  po = {},
  Ga = {};
st &&
  ((Ga = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function Bl(e) {
  if (po[e]) return po[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ga) return (po[e] = t[n]);
  return e;
}
var Za = Bl("animationend"),
  qa = Bl("animationiteration"),
  ba = Bl("animationstart"),
  ec = Bl("transitionend"),
  tc = new Map(),
  ss =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dt(e, t) {
  tc.set(e, t), Jt(t, [e]);
}
for (var mo = 0; mo < ss.length; mo++) {
  var yo = ss[mo],
    yp = yo.toLowerCase(),
    hp = yo[0].toUpperCase() + yo.slice(1);
  Dt(yp, "on" + hp);
}
Dt(Za, "onAnimationEnd");
Dt(qa, "onAnimationIteration");
Dt(ba, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(ec, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  vp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));
function as(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yd(r, t, void 0, e), (e.currentTarget = null);
}
function nc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          as(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          as(l, u, a), (o = s);
        }
    }
  }
  if (dl) throw ((e = Go), (dl = !1), (Go = null), e);
}
function $(e, t) {
  var n = t[ii];
  n === void 0 && (n = t[ii] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rc(t, e, 2, !1), n.add(r));
}
function ho(e, t, n) {
  var r = 0;
  t && (r |= 4), rc(n, e, r, t);
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function pr(e) {
  if (!e[Br]) {
    (e[Br] = !0),
      ca.forEach(function (n) {
        n !== "selectionchange" && (vp.has(n) || ho(n, !1, e), ho(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || ((t[Br] = !0), ho("selectionchange", !1, t));
  }
}
function rc(e, t, n, r) {
  switch (Ua(t)) {
    case 1:
      var l = zd;
      break;
    case 4:
      l = Ld;
      break;
    default:
      l = Ki;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function vo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Bt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Na(function () {
    var a = o,
      p = Hi(n),
      m = [];
    e: {
      var y = tc.get(e);
      if (y !== void 0) {
        var w = Xi,
          h = e;
        switch (e) {
          case "keypress":
            if (qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Yd;
            break;
          case "focusin":
            (h = "focus"), (w = ao);
            break;
          case "focusout":
            (h = "blur"), (w = ao);
            break;
          case "beforeblur":
          case "afterblur":
            w = ao;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Ad;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Gd;
            break;
          case Za:
          case qa:
          case ba:
            w = Md;
            break;
          case ec:
            w = qd;
            break;
          case "scroll":
            w = Fd;
            break;
          case "wheel":
            w = ep;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ud;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = bu;
        }
        var v = (t & 4) !== 0,
          L = !v && e === "scroll",
          f = v ? (y !== null ? y + "Capture" : null) : y;
        v = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var S = d.stateNode;
          if (
            (d.tag === 5 &&
              S !== null &&
              ((d = S),
              f !== null && ((S = ur(c, f)), S != null && v.push(mr(c, S, d)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((y = new w(y, h, null, n, p)), m.push({ event: y, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Yo &&
            (h = n.relatedTarget || n.fromElement) &&
            (Bt(h) || h[at]))
        )
          break e;
        if (
          (w || y) &&
          ((y =
            p.window === p
              ? p
              : (y = p.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          w
            ? ((h = n.relatedTarget || n.toElement),
              (w = a),
              (h = h ? Bt(h) : null),
              h !== null &&
                ((L = Gt(h)), h !== L || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((w = null), (h = a)),
          w !== h)
        ) {
          if (
            ((v = Zu),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = bu),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (L = w == null ? y : rn(w)),
            (d = h == null ? y : rn(h)),
            (y = new v(S, c + "leave", w, n, p)),
            (y.target = L),
            (y.relatedTarget = d),
            (S = null),
            Bt(p) === a &&
              ((v = new v(f, c + "enter", h, n, p)),
              (v.target = d),
              (v.relatedTarget = L),
              (S = v)),
            (L = S),
            w && h)
          )
            t: {
              for (v = w, f = h, c = 0, d = v; d; d = Zt(d)) c++;
              for (d = 0, S = f; S; S = Zt(S)) d++;
              for (; 0 < c - d; ) (v = Zt(v)), c--;
              for (; 0 < d - c; ) (f = Zt(f)), d--;
              for (; c--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                (v = Zt(v)), (f = Zt(f));
              }
              v = null;
            }
          else v = null;
          w !== null && cs(m, y, w, v, !1),
            h !== null && L !== null && cs(m, L, h, v, !0);
        }
      }
      e: {
        if (
          ((y = a ? rn(a) : window),
          (w = y.nodeName && y.nodeName.toLowerCase()),
          w === "select" || (w === "input" && y.type === "file"))
        )
          var E = up;
        else if (ns(y))
          if (Ka) E = fp;
          else {
            E = ap;
            var _ = sp;
          }
        else
          (w = y.nodeName) &&
            w.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (E = cp);
        if (E && (E = E(e, a))) {
          Qa(m, E, n, p);
          break e;
        }
        _ && _(e, y, a),
          e === "focusout" &&
            (_ = y._wrapperState) &&
            _.controlled &&
            y.type === "number" &&
            Ho(y, "number", y.value);
      }
      switch (((_ = a ? rn(a) : window), e)) {
        case "focusin":
          (ns(_) || _.contentEditable === "true") &&
            ((tn = _), (ei = a), (bn = null));
          break;
        case "focusout":
          bn = ei = tn = null;
          break;
        case "mousedown":
          ti = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ti = !1), us(m, n, p);
          break;
        case "selectionchange":
          if (mp) break;
        case "keydown":
        case "keyup":
          us(m, n, p);
      }
      var C;
      if (Gi)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        en
          ? Va(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ha &&
          n.locale !== "ko" &&
          (en || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && en && (C = $a())
            : ((kt = p),
              (Yi = "value" in kt ? kt.value : kt.textContent),
              (en = !0))),
        (_ = vl(a, P)),
        0 < _.length &&
          ((P = new qu(P, e, null, n, p)),
          m.push({ event: P, listeners: _ }),
          C ? (P.data = C) : ((C = Wa(n)), C !== null && (P.data = C)))),
        (C = np ? rp(e, n) : lp(e, n)) &&
          ((a = vl(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new qu("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: a }),
            (p.data = C)));
    }
    nc(m, t);
  });
}
function mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = ur(e, n)),
      o != null && r.unshift(mr(e, o, l)),
      (o = ur(e, t)),
      o != null && r.push(mr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Zt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = ur(n, o)), s != null && i.unshift(mr(n, s, u)))
        : l || ((s = ur(n, o)), s != null && i.push(mr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var gp = /\r\n?/g,
  wp = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gp,
      `
`
    )
    .replace(wp, "");
}
function Ur(e, t, n) {
  if (((t = fs(t)), fs(e) !== t && n)) throw Error(k(425));
}
function gl() {}
var ni = null,
  ri = null;
function li(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var oi = typeof setTimeout == "function" ? setTimeout : void 0,
  Sp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ds = typeof Promise == "function" ? Promise : void 0,
  kp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ds < "u"
      ? function (e) {
          return ds.resolve(null).then(e).catch(Ep);
        }
      : oi;
function Ep(e) {
  setTimeout(function () {
    throw e;
  });
}
function go(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), cr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  cr(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ps(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Pn,
  yr = "__reactProps$" + Pn,
  at = "__reactContainer$" + Pn,
  ii = "__reactEvents$" + Pn,
  xp = "__reactListeners$" + Pn,
  _p = "__reactHandles$" + Pn;
function Bt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[at] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ps(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = ps(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Nr(e) {
  return (
    (e = e[qe] || e[at]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ul(e) {
  return e[yr] || null;
}
var ui = [],
  ln = -1;
function At(e) {
  return { current: e };
}
function H(e) {
  0 > ln || ((e.current = ui[ln]), (ui[ln] = null), ln--);
}
function U(e, t) {
  ln++, (ui[ln] = e.current), (e.current = t);
}
var Lt = {},
  de = At(Lt),
  Se = At(!1),
  Wt = Lt;
function gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Lt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function wl() {
  H(Se), H(de);
}
function ms(e, t, n) {
  if (de.current !== Lt) throw Error(k(168));
  U(de, t), U(Se, n);
}
function lc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, sd(e) || "Unknown", l));
  return X({}, n, r);
}
function Sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
    (Wt = de.current),
    U(de, e),
    U(Se, Se.current),
    !0
  );
}
function ys(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = lc(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Se),
      H(de),
      U(de, e))
    : H(Se),
    U(Se, n);
}
var rt = null,
  $l = !1,
  wo = !1;
function oc(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Cp(e) {
  ($l = !0), oc(e);
}
function It() {
  if (!wo && rt !== null) {
    wo = !0;
    var e = 0,
      t = M;
    try {
      var n = rt;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), ($l = !1);
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), Oa(Vi, It), l);
    } finally {
      (M = t), (wo = !1);
    }
  }
  return null;
}
var on = [],
  un = 0,
  kl = null,
  El = 0,
  Fe = [],
  De = 0,
  Qt = null,
  lt = 1,
  ot = "";
function jt(e, t) {
  (on[un++] = El), (on[un++] = kl), (kl = e), (El = t);
}
function ic(e, t, n) {
  (Fe[De++] = lt), (Fe[De++] = ot), (Fe[De++] = Qt), (Qt = e);
  var r = lt;
  e = ot;
  var l = 32 - We(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - We(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (lt = (1 << (32 - We(t) + l)) | (n << l) | r),
      (ot = o + e);
  } else (lt = (1 << o) | (n << l) | r), (ot = e);
}
function qi(e) {
  e.return !== null && (jt(e, 1), ic(e, 1, 0));
}
function bi(e) {
  for (; e === kl; )
    (kl = on[--un]), (on[un] = null), (El = on[--un]), (on[un] = null);
  for (; e === Qt; )
    (Qt = Fe[--De]),
      (Fe[De] = null),
      (ot = Fe[--De]),
      (Fe[De] = null),
      (lt = Fe[--De]),
      (Fe[De] = null);
}
var Pe = null,
  Ce = null,
  W = !1,
  Ve = null;
function uc(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (Ce = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: lt, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function si(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ai(e) {
  if (W) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!hs(e, t)) {
        if (si(e)) throw Error(k(418));
        t = Nt(n.nextSibling);
        var r = Pe;
        t && hs(e, t)
          ? uc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Pe = e));
      }
    } else {
      if (si(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Pe = e);
    }
  }
}
function vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function $r(e) {
  if (e !== Pe) return !1;
  if (!W) return vs(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !li(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (si(e)) throw (sc(), Error(k(418)));
    for (; t; ) uc(e, t), (t = Nt(t.nextSibling));
  }
  if ((vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Pe ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function sc() {
  for (var e = Ce; e; ) e = Nt(e.nextSibling);
}
function wn() {
  (Ce = Pe = null), (W = !1);
}
function eu(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var Np = dt.ReactCurrentBatchConfig;
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xl = At(null),
  _l = null,
  sn = null,
  tu = null;
function nu() {
  tu = sn = _l = null;
}
function ru(e) {
  var t = xl.current;
  H(xl), (e._currentValue = t);
}
function ci(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function yn(e, t) {
  (_l = e),
    (tu = sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function je(e) {
  var t = e._currentValue;
  if (tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sn === null)) {
      if (_l === null) throw Error(k(308));
      (sn = e), (_l.dependencies = { lanes: 0, firstContext: e });
    } else sn = sn.next = e;
  return t;
}
var Ut = null;
function lu(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function ac(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), lu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ct(e, r)
  );
}
function ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function ou(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ct(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), lu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ct(e, n)
  );
}
function br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wi(e, n);
  }
}
function gs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Cl(e, t, n, r) {
  var l = e.updateQueue;
  gt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var y = u.lane,
        w = u.eventTime;
      if ((r & y) === y) {
        p !== null &&
          (p = p.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var h = e,
            v = u;
          switch (((y = t), (w = n), v.tag)) {
            case 1:
              if (((h = v.payload), typeof h == "function")) {
                m = h.call(w, m, y);
                break e;
              }
              m = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = v.payload),
                (y = typeof h == "function" ? h.call(w, m, y) : h),
                y == null)
              )
                break e;
              m = X({}, m, y);
              break e;
            case 2:
              gt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [u]) : y.push(u));
      } else
        (w = {
          eventTime: w,
          lane: y,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = w), (s = m)) : (p = p.next = w),
          (i |= y);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (y = u),
          (u = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Yt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ws(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var fc = new aa.Component().refs;
function fi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = Tt(e),
      o = it(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Qe(t, e, l, r), br(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = Tt(e),
      o = it(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Qe(t, e, l, r), br(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Tt(e),
      l = it(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Pt(e, l, r)),
      t !== null && (Qe(t, e, r, n), br(t, e, r));
  },
};
function Ss(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !dr(n, r) || !dr(l, o)
      : !0
  );
}
function dc(e, t, n) {
  var r = !1,
    l = Lt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = je(o))
      : ((l = ke(t) ? Wt : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? gn(e, l) : Lt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ks(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
}
function di(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = fc), ou(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = je(o))
    : ((o = ke(t) ? Wt : de.current), (l.context = gn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (fi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Hl.enqueueReplaceState(l, l.state, null),
      Cl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === fc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Es(e) {
  var t = e._init;
  return t(e._payload);
}
function pc(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Ot(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, S) {
    return c === null || c.tag !== 6
      ? ((c = No(d, f.mode, S)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, S) {
    var E = d.type;
    return E === bt
      ? p(f, c, d.props.children, S, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === vt &&
            Es(E) === c.type))
      ? ((S = l(c, d.props)), (S.ref = $n(f, c, d)), (S.return = f), S)
      : ((S = ol(d.type, d.key, d.props, null, f.mode, S)),
        (S.ref = $n(f, c, d)),
        (S.return = f),
        S);
  }
  function a(f, c, d, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = Po(d, f.mode, S)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function p(f, c, d, S, E) {
    return c === null || c.tag !== 7
      ? ((c = Vt(d, f.mode, S, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function m(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = No("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case zr:
          return (
            (d = ol(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = $n(f, null, c)),
            (d.return = f),
            d
          );
        case qt:
          return (c = Po(c, f.mode, d)), (c.return = f), c;
        case vt:
          var S = c._init;
          return m(f, S(c._payload), d);
      }
      if (Kn(c) || In(c))
        return (c = Vt(c, f.mode, d, null)), (c.return = f), c;
      Hr(f, c);
    }
    return null;
  }
  function y(f, c, d, S) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, S);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case zr:
          return d.key === E ? s(f, c, d, S) : null;
        case qt:
          return d.key === E ? a(f, c, d, S) : null;
        case vt:
          return (E = d._init), y(f, c, E(d._payload), S);
      }
      if (Kn(d) || In(d)) return E !== null ? null : p(f, c, d, S, null);
      Hr(f, d);
    }
    return null;
  }
  function w(f, c, d, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(d) || null), u(c, f, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case zr:
          return (f = f.get(S.key === null ? d : S.key) || null), s(c, f, S, E);
        case qt:
          return (f = f.get(S.key === null ? d : S.key) || null), a(c, f, S, E);
        case vt:
          var _ = S._init;
          return w(f, c, d, _(S._payload), E);
      }
      if (Kn(S) || In(S)) return (f = f.get(d) || null), p(c, f, S, E, null);
      Hr(c, S);
    }
    return null;
  }
  function h(f, c, d, S) {
    for (
      var E = null, _ = null, C = c, P = (c = 0), A = null;
      C !== null && P < d.length;
      P++
    ) {
      C.index > P ? ((A = C), (C = null)) : (A = C.sibling);
      var O = y(f, C, d[P], S);
      if (O === null) {
        C === null && (C = A);
        break;
      }
      e && C && O.alternate === null && t(f, C),
        (c = o(O, c, P)),
        _ === null ? (E = O) : (_.sibling = O),
        (_ = O),
        (C = A);
    }
    if (P === d.length) return n(f, C), W && jt(f, P), E;
    if (C === null) {
      for (; P < d.length; P++)
        (C = m(f, d[P], S)),
          C !== null &&
            ((c = o(C, c, P)), _ === null ? (E = C) : (_.sibling = C), (_ = C));
      return W && jt(f, P), E;
    }
    for (C = r(f, C); P < d.length; P++)
      (A = w(C, f, P, d[P], S)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? P : A.key),
          (c = o(A, c, P)),
          _ === null ? (E = A) : (_.sibling = A),
          (_ = A));
    return (
      e &&
        C.forEach(function (Q) {
          return t(f, Q);
        }),
      W && jt(f, P),
      E
    );
  }
  function v(f, c, d, S) {
    var E = In(d);
    if (typeof E != "function") throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var _ = (E = null), C = c, P = (c = 0), A = null, O = d.next();
      C !== null && !O.done;
      P++, O = d.next()
    ) {
      C.index > P ? ((A = C), (C = null)) : (A = C.sibling);
      var Q = y(f, C, O.value, S);
      if (Q === null) {
        C === null && (C = A);
        break;
      }
      e && C && Q.alternate === null && t(f, C),
        (c = o(Q, c, P)),
        _ === null ? (E = Q) : (_.sibling = Q),
        (_ = Q),
        (C = A);
    }
    if (O.done) return n(f, C), W && jt(f, P), E;
    if (C === null) {
      for (; !O.done; P++, O = d.next())
        (O = m(f, O.value, S)),
          O !== null &&
            ((c = o(O, c, P)), _ === null ? (E = O) : (_.sibling = O), (_ = O));
      return W && jt(f, P), E;
    }
    for (C = r(f, C); !O.done; P++, O = d.next())
      (O = w(C, f, P, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && C.delete(O.key === null ? P : O.key),
          (c = o(O, c, P)),
          _ === null ? (E = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        C.forEach(function (re) {
          return t(f, re);
        }),
      W && jt(f, P),
      E
    );
  }
  function L(f, c, d, S) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === bt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case zr:
          e: {
            for (var E = d.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (((E = d.type), E === bt)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = l(_, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === vt &&
                    Es(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = l(_, d.props)),
                    (c.ref = $n(f, _, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === bt
              ? ((c = Vt(d.props.children, f.mode, S, d.key)),
                (c.return = f),
                (f = c))
              : ((S = ol(d.type, d.key, d.props, null, f.mode, S)),
                (S.ref = $n(f, c, d)),
                (S.return = f),
                (f = S));
          }
          return i(f);
        case qt:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Po(d, f.mode, S)), (c.return = f), (f = c);
          }
          return i(f);
        case vt:
          return (_ = d._init), L(f, c, _(d._payload), S);
      }
      if (Kn(d)) return h(f, c, d, S);
      if (In(d)) return v(f, c, d, S);
      Hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = No(d, f.mode, S)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return L;
}
var Sn = pc(!0),
  mc = pc(!1),
  Pr = {},
  tt = At(Pr),
  hr = At(Pr),
  vr = At(Pr);
function $t(e) {
  if (e === Pr) throw Error(k(174));
  return e;
}
function iu(e, t) {
  switch ((U(vr, t), U(hr, e), U(tt, Pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wo(t, e));
  }
  H(tt), U(tt, t);
}
function kn() {
  H(tt), H(hr), H(vr);
}
function yc(e) {
  $t(vr.current);
  var t = $t(tt.current),
    n = Wo(t, e.type);
  t !== n && (U(hr, e), U(tt, n));
}
function uu(e) {
  hr.current === e && (H(tt), H(hr));
}
var K = At(0);
function Nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var So = [];
function su() {
  for (var e = 0; e < So.length; e++)
    So[e]._workInProgressVersionPrimary = null;
  So.length = 0;
}
var el = dt.ReactCurrentDispatcher,
  ko = dt.ReactCurrentBatchConfig,
  Kt = 0,
  Y = null,
  q = null,
  te = null,
  Pl = !1,
  er = !1,
  gr = 0,
  Pp = 0;
function ae() {
  throw Error(k(321));
}
function au(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function cu(e, t, n, r, l, o) {
  if (
    ((Kt = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (el.current = e === null || e.memoizedState === null ? zp : Lp),
    (e = n(r, l)),
    er)
  ) {
    o = 0;
    do {
      if (((er = !1), (gr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (te = q = null),
        (t.updateQueue = null),
        (el.current = Fp),
        (e = n(r, l));
    } while (er);
  }
  if (
    ((el.current = Rl),
    (t = q !== null && q.next !== null),
    (Kt = 0),
    (te = q = Y = null),
    (Pl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function fu() {
  var e = gr !== 0;
  return (gr = 0), e;
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (Y.memoizedState = te = e) : (te = te.next = e), te;
}
function Me() {
  if (q === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = te === null ? Y.memoizedState : te.next;
  if (t !== null) (te = t), (q = e);
  else {
    if (e === null) throw Error(k(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      te === null ? (Y.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eo(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = q,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Kt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (Y.lanes |= p),
          (Yt |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ke(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Y.lanes |= o), (Yt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xo(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ke(o, t.memoizedState) || (we = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function hc() {}
function vc(e, t) {
  var n = Y,
    r = Me(),
    l = t(),
    o = !Ke(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (we = !0)),
    (r = r.queue),
    du(Sc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sr(9, wc.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(k(349));
    Kt & 30 || gc(n, t, l);
  }
  return l;
}
function gc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), kc(t) && Ec(e);
}
function Sc(e, t, n) {
  return n(function () {
    kc(t) && Ec(e);
  });
}
function kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function Ec(e) {
  var t = ct(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function xs(e) {
  var t = Ze();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Op.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xc() {
  return Me().memoizedState;
}
function tl(e, t, n, r) {
  var l = Ze();
  (Y.flags |= e),
    (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vl(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var i = q.memoizedState;
    if (((o = i.destroy), r !== null && au(r, i.deps))) {
      l.memoizedState = Sr(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = Sr(1 | t, n, o, r));
}
function _s(e, t) {
  return tl(8390656, 8, e, t);
}
function du(e, t) {
  return Vl(2048, 8, e, t);
}
function _c(e, t) {
  return Vl(4, 2, e, t);
}
function Cc(e, t) {
  return Vl(4, 4, e, t);
}
function Nc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vl(4, 4, Nc.bind(null, t, e), n)
  );
}
function pu() {}
function Rc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && au(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tc(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && au(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Oc(e, t, n) {
  return Kt & 21
    ? (Ke(n, t) || ((n = Fa()), (Y.lanes |= n), (Yt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function Rp(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ko.transition;
  ko.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (ko.transition = r);
  }
}
function zc() {
  return Me().memoizedState;
}
function Tp(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Lc(e))
  )
    Fc(t, n);
  else if (((n = ac(e, t, n, r)), n !== null)) {
    var l = me();
    Qe(n, e, r, l), Dc(n, t, r);
  }
}
function Op(e, t, n) {
  var r = Tt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lc(e)) Fc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ke(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), lu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ac(e, t, l, r)),
      n !== null && ((l = me()), Qe(n, e, r, l), Dc(n, t, r));
  }
}
function Lc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function Fc(e, t) {
  er = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Dc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wi(e, n);
  }
}
var Rl = {
    readContext: je,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  zp = {
    readContext: je,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: je,
    useEffect: _s,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        tl(4194308, 4, Nc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ze();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ze();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Tp.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ze();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xs,
    useDebugValue: pu,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e);
    },
    useTransition: function () {
      var e = xs(!1),
        t = e[0];
      return (e = Rp.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = Ze();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(k(349));
        Kt & 30 || gc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        _s(Sc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Sr(9, wc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ze(),
        t = ne.identifierPrefix;
      if (W) {
        var n = ot,
          r = lt;
        (n = (r & ~(1 << (32 - We(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Pp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lp = {
    readContext: je,
    useCallback: Rc,
    useContext: je,
    useEffect: du,
    useImperativeHandle: Pc,
    useInsertionEffect: _c,
    useLayoutEffect: Cc,
    useMemo: Tc,
    useReducer: Eo,
    useRef: xc,
    useState: function () {
      return Eo(wr);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = Me();
      return Oc(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Eo(wr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: hc,
    useSyncExternalStore: vc,
    useId: zc,
    unstable_isNewReconciler: !1,
  },
  Fp = {
    readContext: je,
    useCallback: Rc,
    useContext: je,
    useEffect: du,
    useImperativeHandle: Pc,
    useInsertionEffect: _c,
    useLayoutEffect: Cc,
    useMemo: Tc,
    useReducer: xo,
    useRef: xc,
    useState: function () {
      return xo(wr);
    },
    useDebugValue: pu,
    useDeferredValue: function (e) {
      var t = Me();
      return q === null ? (t.memoizedState = e) : Oc(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(wr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: hc,
    useSyncExternalStore: vc,
    useId: zc,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ud(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function _o(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dp = typeof WeakMap == "function" ? WeakMap : Map;
function Ac(e, t, n) {
  (n = it(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ol || ((Ol = !0), (xi = r)), pi(e, t);
    }),
    n
  );
}
function Ic(e, t, n) {
  (n = it(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        pi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        pi(e, t),
          typeof r != "function" &&
            (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Xp.bind(null, e, t, n)), t.then(e, e));
}
function Ns(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ps(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = it(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ap = dt.ReactCurrentOwner,
  we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? mc(t, null, n, r) : Sn(t, e.child, n, r);
}
function Rs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    yn(t, l),
    (r = cu(e, t, n, r, o, l)),
    (n = fu()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && n && qi(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function Ts(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ku(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jc(e, t, o, r, l))
      : ((e = ol(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref)
    )
      return ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ot(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (dr(o, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), ft(e, t, l);
  }
  return mi(e, t, n, r, l);
}
function Mc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(cn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(cn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(cn, _e),
        (_e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(cn, _e),
      (_e |= r);
  return pe(e, t, l, n), t.child;
}
function Bc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mi(e, t, n, r, l) {
  var o = ke(n) ? Wt : de.current;
  return (
    (o = gn(t, o)),
    yn(t, l),
    (n = cu(e, t, n, r, o, l)),
    (r = fu()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && r && qi(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function Os(e, t, n, r, l) {
  if (ke(n)) {
    var o = !0;
    Sl(t);
  } else o = !1;
  if ((yn(t, l), t.stateNode === null))
    nl(e, t), dc(t, n, r), di(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = je(a))
      : ((a = ke(n) ? Wt : de.current), (a = gn(t, a)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && ks(t, i, r, a)),
      (gt = !1);
    var y = t.memoizedState;
    (i.state = y),
      Cl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || y !== s || Se.current || gt
        ? (typeof p == "function" && (fi(t, n, p, r), (s = t.memoizedState)),
          (u = gt || Ss(t, n, u, r, y, s, a))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      cc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : $e(t.type, u)),
      (i.props = a),
      (m = t.pendingProps),
      (y = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = je(s))
        : ((s = ke(n) ? Wt : de.current), (s = gn(t, s)));
    var w = n.getDerivedStateFromProps;
    (p =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || y !== s) && ks(t, i, r, s)),
      (gt = !1),
      (y = t.memoizedState),
      (i.state = y),
      Cl(t, r, i, l);
    var h = t.memoizedState;
    u !== m || y !== h || Se.current || gt
      ? (typeof w == "function" && (fi(t, n, w, r), (h = t.memoizedState)),
        (a = gt || Ss(t, n, a, r, y, h, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, h, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, h, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (i.props = r),
        (i.state = h),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yi(e, t, n, r, o, l);
}
function yi(e, t, n, r, l, o) {
  Bc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ys(t, n, !1), ft(e, t, o);
  (r = t.stateNode), (Ap.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Sn(t, e.child, null, o)), (t.child = Sn(t, null, u, o)))
      : pe(e, t, u, o),
    (t.memoizedState = r.state),
    l && ys(t, n, !0),
    t.child
  );
}
function Uc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ms(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ms(e, t.context, !1),
    iu(e, t.containerInfo);
}
function zs(e, t, n, r, l) {
  return wn(), eu(l), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var hi = { dehydrated: null, treeContext: null, retryLane: 0 };
function vi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $c(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(K, l & 1),
    e === null)
  )
    return (
      ai(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Kl(i, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = vi(n)),
              (t.memoizedState = hi),
              e)
            : mu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ip(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ot(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ot(u, o)) : ((o = Vt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? vi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = hi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ot(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function mu(e, t) {
  return (
    (t = Kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && eu(r),
    Sn(t, e.child, null, n),
    (e = mu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ip(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _o(Error(k(422)))), Vr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Kl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Vt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sn(t, e.child, null, i),
        (t.child.memoizedState = vi(i)),
        (t.memoizedState = hi),
        o);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = _o(o, r, void 0)), Vr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), we || u)) {
    if (((r = ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ct(e, l), Qe(r, e, l, -1));
    }
    return Su(), (r = _o(Error(k(421)))), Vr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ce = Nt(l.nextSibling)),
      (Pe = t),
      (W = !0),
      (Ve = null),
      e !== null &&
        ((Fe[De++] = lt),
        (Fe[De++] = ot),
        (Fe[De++] = Qt),
        (lt = e.id),
        (ot = e.overflow),
        (Qt = t)),
      (t = mu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ci(e.return, t, n);
}
function Co(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Hc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ls(e, n, t);
        else if (e.tag === 19) Ls(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Nl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Co(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Nl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Co(t, !0, n, null, o);
        break;
      case "together":
        Co(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jp(e, t, n) {
  switch (t.tag) {
    case 3:
      Uc(t), wn();
      break;
    case 5:
      yc(t);
      break;
    case 1:
      ke(t.type) && Sl(t);
      break;
    case 4:
      iu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(xl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $c(e, t, n)
          : (U(K, K.current & 1),
            (e = ft(e, t, n)),
            e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mc(e, t, n);
  }
  return ft(e, t, n);
}
var Vc, gi, Wc, Qc;
Vc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
gi = function () {};
Wc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), $t(tt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Uo(e, l)), (r = Uo(e, r)), (o = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Vo(e, l)), (r = Vo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    Qo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (or.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (or.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && $("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Qc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Mp(e, t, n) {
  var r = t.pendingProps;
  switch ((bi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return ke(t.type) && wl(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        kn(),
        H(Se),
        H(de),
        su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (Ni(Ve), (Ve = null)))),
        gi(e, t),
        ce(t),
        null
      );
    case 5:
      uu(t);
      var l = $t(vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ce(t), null;
        }
        if (((e = $t(tt.current)), $r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[qe] = t), (r[yr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Xn.length; l++) $(Xn[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              $u(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              Vu(r, o), $("invalid", r);
          }
          Qo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : or.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Lr(r), Hu(r, o, !0);
              break;
            case "textarea":
              Lr(r), Wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = gl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ga(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[qe] = t),
            (e[yr] = r),
            Vc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ko(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Xn.length; l++) $(Xn[l], e);
                l = r;
                break;
              case "source":
                $("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (l = r);
                break;
              case "details":
                $("toggle", e), (l = r);
                break;
              case "input":
                $u(e, r), (l = Uo(e, r)), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                Vu(e, r), (l = Vo(e, r)), $("invalid", e);
                break;
              default:
                l = r;
            }
            Qo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ka(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && wa(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && ir(e, s)
                    : typeof s == "number" && ir(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (or.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && $("scroll", e)
                      : s != null && Mi(e, o, s, i));
              }
            switch (n) {
              case "input":
                Lr(e), Hu(e, r, !1);
                break;
              case "textarea":
                Lr(e), Wu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? fn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Qc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = $t(vr.current)), $t(tt.current), $r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (o = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ur(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (H(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ce !== null && t.mode & 1 && !(t.flags & 128))
          sc(), wn(), (t.flags |= 98560), (o = !1);
        else if (((o = $r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[qe] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (o = !1);
        } else Ve !== null && (Ni(Ve), (Ve = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? b === 0 && (b = 3) : Su())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        kn(), gi(e, t), e === null && pr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return ru(t.type._context), ce(t), null;
    case 17:
      return ke(t.type) && wl(), ce(t), null;
    case 19:
      if ((H(K), (o = t.memoizedState), o === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Hn(o, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Nl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > xn &&
            ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Nl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return ce(t), null;
          } else
            2 * G() - o.renderingStartTime > xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Bp(e, t) {
  switch ((bi(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kn(),
        H(Se),
        H(de),
        su(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return uu(t), null;
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(K), null;
    case 4:
      return kn(), null;
    case 10:
      return ru(t.type._context), null;
    case 22:
    case 23:
      return wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  fe = !1,
  Up = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function wi(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var Fs = !1;
function $p(e, t) {
  if (((ni = yl), (e = Ja()), Zi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            m = e,
            y = null;
          t: for (;;) {
            for (
              var w;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (w = m.firstChild) !== null;

            )
              (y = m), (m = w);
            for (;;) {
              if (m === e) break t;
              if (
                (y === n && ++a === l && (u = i),
                y === o && ++p === r && (s = i),
                (w = m.nextSibling) !== null)
              )
                break;
              (m = y), (y = m.parentNode);
            }
            m = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ri = { focusedElem: e, selectionRange: n }, yl = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var v = h.memoizedProps,
                    L = h.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : $e(t.type, v),
                      L
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (h = Fs), (Fs = !1), h;
}
function tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && wi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Wl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Si(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[yr], delete t[ii], delete t[xp], delete t[_p])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Yc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Yc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ki(e, t, n), e = e.sibling; e !== null; ) ki(e, t, n), (e = e.sibling);
}
function Ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ei(e, t, n), e = e.sibling; e !== null; ) Ei(e, t, n), (e = e.sibling);
}
var le = null,
  He = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) Xc(e, t, n), (n = n.sibling);
}
function Xc(e, t, n) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || an(n, t);
    case 6:
      var r = le,
        l = He;
      (le = null),
        yt(e, t, n),
        (le = r),
        (He = l),
        le !== null &&
          (He
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (He
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? go(e.parentNode, n)
              : e.nodeType === 1 && go(e, n),
            cr(e))
          : go(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (l = He),
        (le = n.stateNode.containerInfo),
        (He = !0),
        yt(e, t, n),
        (le = r),
        (He = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && wi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          J(n, t, u);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), yt(e, t, n), (fe = r))
        : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function As(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Up()),
      t.forEach(function (r) {
        var l = Gp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (le = u.stateNode), (He = !1);
              break e;
            case 3:
              (le = u.stateNode.containerInfo), (He = !0);
              break e;
            case 4:
              (le = u.stateNode.containerInfo), (He = !0);
              break e;
          }
          u = u.return;
        }
        if (le === null) throw Error(k(160));
        Xc(o, i, l), (le = null), (He = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        J(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jc(t, e), (t = t.sibling);
}
function Jc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ge(e), r & 4)) {
        try {
          tr(3, e, e.return), Wl(3, e);
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          tr(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      Ue(t, e), Ge(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ge(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ir(l, "");
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ha(l, o),
              Ko(u, i);
            var a = Ko(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? ka(l, m)
                : p === "dangerouslySetInnerHTML"
                ? wa(l, m)
                : p === "children"
                ? ir(l, m)
                : Mi(l, p, m, a);
            }
            switch (u) {
              case "input":
                $o(l, o);
                break;
              case "textarea":
                va(l, o);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? fn(l, !!o.multiple, w, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fn(l, !!o.multiple, o.defaultValue, !0)
                      : fn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[yr] = o;
          } catch (v) {
            J(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cr(t.containerInfo);
        } catch (v) {
          J(e, e.return, v);
        }
      break;
    case 4:
      Ue(t, e), Ge(e);
      break;
    case 13:
      Ue(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (vu = G())),
        r & 4 && As(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (a = fe) || p), Ue(t, e), (fe = a)) : Ue(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (N = e, p = e.child; p !== null; ) {
            for (m = N = p; N !== null; ) {
              switch (((y = N), (w = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tr(4, y, y.return);
                  break;
                case 1:
                  an(y, y.return);
                  var h = y.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (v) {
                      J(r, n, v);
                    }
                  }
                  break;
                case 5:
                  an(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    js(m);
                    continue;
                  }
              }
              w !== null ? ((w.return = y), (N = w)) : js(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Sa("display", i)));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (v) {
                J(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ge(e), r & 4 && As(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Yc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ir(l, ""), (r.flags &= -33));
          var o = Ds(e);
          Ei(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ds(e);
          ki(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      J(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hp(e, t, n) {
  (N = e), Gc(e);
}
function Gc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Wr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || fe;
        u = Wr;
        var a = fe;
        if (((Wr = i), (fe = s) && !a))
          for (N = l; N !== null; )
            (i = N),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ms(l)
                : s !== null
                ? ((s.return = i), (N = s))
                : Ms(l);
        for (; o !== null; ) (N = o), Gc(o), (o = o.sibling);
        (N = l), (Wr = u), (fe = a);
      }
      Is(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : Is(e);
  }
}
function Is(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || Wl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ws(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ws(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && cr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        fe || (t.flags & 512 && Si(t));
      } catch (y) {
        J(t, t.return, y);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function js(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Ms(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wl(4, t);
          } catch (s) {
            J(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              J(t, l, s);
            }
          }
          var o = t.return;
          try {
            Si(t);
          } catch (s) {
            J(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Si(t);
          } catch (s) {
            J(t, i, s);
          }
      }
    } catch (s) {
      J(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var Vp = Math.ceil,
  Tl = dt.ReactCurrentDispatcher,
  yu = dt.ReactCurrentOwner,
  Ie = dt.ReactCurrentBatchConfig,
  j = 0,
  ne = null,
  Z = null,
  ue = 0,
  _e = 0,
  cn = At(0),
  b = 0,
  kr = null,
  Yt = 0,
  Ql = 0,
  hu = 0,
  nr = null,
  ge = null,
  vu = 0,
  xn = 1 / 0,
  nt = null,
  Ol = !1,
  xi = null,
  Rt = null,
  Qr = !1,
  Et = null,
  zl = 0,
  rr = 0,
  _i = null,
  rl = -1,
  ll = 0;
function me() {
  return j & 6 ? G() : rl !== -1 ? rl : (rl = G());
}
function Tt(e) {
  return e.mode & 1
    ? j & 2 && ue !== 0
      ? ue & -ue
      : Np.transition !== null
      ? (ll === 0 && (ll = Fa()), ll)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ua(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < rr) throw ((rr = 0), (_i = null), Error(k(185)));
  _r(e, n, r),
    (!(j & 2) || e !== ne) &&
      (e === ne && (!(j & 2) && (Ql |= n), b === 4 && St(e, ue)),
      Ee(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((xn = G() + 500), $l && It()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Nd(e, t);
  var r = ml(e, e === ne ? ue : 0);
  if (r === 0)
    n !== null && Yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0 ? Cp(Bs.bind(null, e)) : oc(Bs.bind(null, e)),
        kp(function () {
          !(j & 6) && It();
        }),
        (n = null);
    else {
      switch (Da(r)) {
        case 1:
          n = Vi;
          break;
        case 4:
          n = za;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = La;
          break;
        default:
          n = pl;
      }
      n = lf(n, Zc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zc(e, t) {
  if (((rl = -1), (ll = 0), j & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = ml(e, e === ne ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = j;
    j |= 2;
    var o = bc();
    (ne !== e || ue !== t) && ((nt = null), (xn = G() + 500), Ht(e, t));
    do
      try {
        Kp();
        break;
      } catch (u) {
        qc(e, u);
      }
    while (1);
    nu(),
      (Tl.current = o),
      (j = l),
      Z !== null ? (t = 0) : ((ne = null), (ue = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Zo(e)), l !== 0 && ((r = l), (t = Ci(e, l)))), t === 1)
    )
      throw ((n = kr), Ht(e, 0), St(e, r), Ee(e, G()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Wp(l) &&
          ((t = Ll(e, r)),
          t === 2 && ((o = Zo(e)), o !== 0 && ((r = o), (t = Ci(e, o)))),
          t === 1))
      )
        throw ((n = kr), Ht(e, 0), St(e, r), Ee(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Mt(e, ge, nt);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = vu + 500 - G()), 10 < t))
          ) {
            if (ml(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = oi(Mt.bind(null, e, ge, nt), t);
            break;
          }
          Mt(e, ge, nt);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - We(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = oi(Mt.bind(null, e, ge, nt), r);
            break;
          }
          Mt(e, ge, nt);
          break;
        case 5:
          Mt(e, ge, nt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ee(e, G()), e.callbackNode === n ? Zc.bind(null, e) : null;
}
function Ci(e, t) {
  var n = nr;
  return (
    e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256),
    (e = Ll(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && Ni(t)),
    e
  );
}
function Ni(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function Wp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ke(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~hu,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - We(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bs(e) {
  if (j & 6) throw Error(k(327));
  hn();
  var t = ml(e, 0);
  if (!(t & 1)) return Ee(e, G()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Zo(e);
    r !== 0 && ((t = r), (n = Ci(e, r)));
  }
  if (n === 1) throw ((n = kr), Ht(e, 0), St(e, t), Ee(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mt(e, ge, nt),
    Ee(e, G()),
    null
  );
}
function gu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((xn = G() + 500), $l && It());
  }
}
function Xt(e) {
  Et !== null && Et.tag === 0 && !(j & 6) && hn();
  var t = j;
  j |= 1;
  var n = Ie.transition,
    r = M;
  try {
    if (((Ie.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ie.transition = n), (j = t), !(j & 6) && It();
  }
}
function wu() {
  (_e = cn.current), H(cn);
}
function Ht(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sp(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((bi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wl();
          break;
        case 3:
          kn(), H(Se), H(de), su();
          break;
        case 5:
          uu(r);
          break;
        case 4:
          kn();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          ru(r.type._context);
          break;
        case 22:
        case 23:
          wu();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (Z = e = Ot(e.current, null)),
    (ue = _e = t),
    (b = 0),
    (kr = null),
    (hu = Ql = Yt = 0),
    (ge = nr = null),
    Ut !== null)
  ) {
    for (t = 0; t < Ut.length; t++)
      if (((n = Ut[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ut = null;
  }
  return e;
}
function qc(e, t) {
  do {
    var n = Z;
    try {
      if ((nu(), (el.current = Rl), Pl)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((Kt = 0),
        (te = q = Y = null),
        (er = !1),
        (gr = 0),
        (yu.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (kr = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ue),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = p.alternate;
            y
              ? ((p.updateQueue = y.updateQueue),
                (p.memoizedState = y.memoizedState),
                (p.lanes = y.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var w = Ns(i);
          if (w !== null) {
            (w.flags &= -257),
              Ps(w, i, u, o, t),
              w.mode & 1 && Cs(o, a, t),
              (t = w),
              (s = a);
            var h = t.updateQueue;
            if (h === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Cs(o, a, t), Su();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var L = Ns(i);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Ps(L, i, u, o, t),
              eu(En(s, u));
            break e;
          }
        }
        (o = s = En(s, u)),
          b !== 4 && (b = 2),
          nr === null ? (nr = [o]) : nr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ac(o, s, t);
              gs(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Ic(o, u, t);
                gs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tf(n);
    } catch (E) {
      (t = E), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function bc() {
  var e = Tl.current;
  return (Tl.current = Rl), e === null ? Rl : e;
}
function Su() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ne === null || (!(Yt & 268435455) && !(Ql & 268435455)) || St(ne, ue);
}
function Ll(e, t) {
  var n = j;
  j |= 2;
  var r = bc();
  (ne !== e || ue !== t) && ((nt = null), Ht(e, t));
  do
    try {
      Qp();
      break;
    } catch (l) {
      qc(e, l);
    }
  while (1);
  if ((nu(), (j = n), (Tl.current = r), Z !== null)) throw Error(k(261));
  return (ne = null), (ue = 0), b;
}
function Qp() {
  for (; Z !== null; ) ef(Z);
}
function Kp() {
  for (; Z !== null && !vd(); ) ef(Z);
}
function ef(e) {
  var t = rf(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? tf(e) : (Z = t),
    (yu.current = null);
}
function tf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Bp(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (Z = null);
        return;
      }
    } else if (((n = Mp(n, t, _e)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Mt(e, t, n) {
  var r = M,
    l = Ie.transition;
  try {
    (Ie.transition = null), (M = 1), Yp(e, t, n, r);
  } finally {
    (Ie.transition = l), (M = r);
  }
  return null;
}
function Yp(e, t, n, r) {
  do hn();
  while (Et !== null);
  if (j & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Pd(e, o),
    e === ne && ((Z = ne = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Qr ||
      ((Qr = !0),
      lf(pl, function () {
        return hn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ie.transition), (Ie.transition = null);
    var i = M;
    M = 1;
    var u = j;
    (j |= 4),
      (yu.current = null),
      $p(e, n),
      Jc(n, e),
      pp(ri),
      (yl = !!ni),
      (ri = ni = null),
      (e.current = n),
      Hp(n),
      gd(),
      (j = u),
      (M = i),
      (Ie.transition = o);
  } else e.current = n;
  if (
    (Qr && ((Qr = !1), (Et = e), (zl = l)),
    (o = e.pendingLanes),
    o === 0 && (Rt = null),
    kd(n.stateNode),
    Ee(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ol) throw ((Ol = !1), (e = xi), (xi = null), e);
  return (
    zl & 1 && e.tag !== 0 && hn(),
    (o = e.pendingLanes),
    o & 1 ? (e === _i ? rr++ : ((rr = 0), (_i = e))) : (rr = 0),
    It(),
    null
  );
}
function hn() {
  if (Et !== null) {
    var e = Da(zl),
      t = Ie.transition,
      n = M;
    try {
      if (((Ie.transition = null), (M = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (zl = 0), j & 6)) throw Error(k(331));
        var l = j;
        for (j |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tr(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (N = m);
                  else
                    for (; N !== null; ) {
                      p = N;
                      var y = p.sibling,
                        w = p.return;
                      if ((Kc(p), p === a)) {
                        N = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = w), (N = y);
                        break;
                      }
                      N = w;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var v = h.child;
                if (v !== null) {
                  h.child = null;
                  do {
                    var L = v.sibling;
                    (v.sibling = null), (v = L);
                  } while (v !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (N = f);
                break e;
              }
              N = o.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (N = d);
          else
            e: for (i = c; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wl(9, u);
                  }
                } catch (E) {
                  J(u, u.return, E);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (N = S);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((j = l), It(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ie.transition = t);
    }
  }
  return !1;
}
function Us(e, t, n) {
  (t = En(n, t)),
    (t = Ac(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = me()),
    e !== null && (_r(e, 1, t), Ee(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Us(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Us(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(r)))
        ) {
          (e = En(n, e)),
            (e = Ic(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = me()),
            t !== null && (_r(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (ue & n) === n &&
      (b === 4 || (b === 3 && (ue & 130023424) === ue && 500 > G() - vu)
        ? Ht(e, 0)
        : (hu |= n)),
    Ee(e, t);
}
function nf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ar), (Ar <<= 1), !(Ar & 130023424) && (Ar = 4194304))
      : (t = 1));
  var n = me();
  (e = ct(e, t)), e !== null && (_r(e, t, n), Ee(e, n));
}
function Jp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nf(e, n);
}
function Gp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), nf(e, n);
}
var rf;
rf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), jp(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), W && t.flags & 1048576 && ic(t, El, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      nl(e, t), (e = t.pendingProps);
      var l = gn(t, de.current);
      yn(t, n), (l = cu(null, t, r, e, l, n));
      var o = fu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((o = !0), Sl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ou(t),
            (l.updater = Hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            di(t, r, e, n),
            (t = yi(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && qi(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (nl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = qp(r)),
          (e = $e(r, e)),
          l)
        ) {
          case 0:
            t = mi(null, t, r, e, n);
            break e;
          case 1:
            t = Os(null, t, r, e, n);
            break e;
          case 11:
            t = Rs(null, t, r, e, n);
            break e;
          case 14:
            t = Ts(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        mi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        Os(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Uc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          cc(e, t),
          Cl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = En(Error(k(423)), t)), (t = zs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = En(Error(k(424)), t)), (t = zs(e, t, r, n, l));
            break e;
          } else
            for (
              Ce = Nt(t.stateNode.containerInfo.firstChild),
                Pe = t,
                W = !0,
                Ve = null,
                n = mc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), r === l)) {
            t = ft(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yc(t),
        e === null && ai(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        li(r, l) ? (i = null) : o !== null && li(r, o) && (t.flags |= 32),
        Bc(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ai(t), null;
    case 13:
      return $c(e, t, n);
    case 4:
      return (
        iu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        Rs(e, t, r, l, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          U(xl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ke(o.value, i)) {
            if (o.children === l.children && !Se.current) {
              t = ft(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = it(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ci(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  ci(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        yn(t, n),
        (l = je(l)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = $e(r, t.pendingProps)),
        (l = $e(r.type, l)),
        Ts(e, t, r, l, n)
      );
    case 15:
      return jc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : $e(r, l)),
        nl(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Sl(t)) : (e = !1),
        yn(t, n),
        dc(t, r, l),
        di(t, r, l, n),
        yi(null, t, r, !0, e, n)
      );
    case 19:
      return Hc(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function lf(e, t) {
  return Oa(e, t);
}
function Zp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new Zp(e, t, n, r);
}
function ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qp(e) {
  if (typeof e == "function") return ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ui)) return 11;
    if (e === $i) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ol(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ku(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case bt:
        return Vt(n.children, l, o, t);
      case Bi:
        (i = 8), (l |= 8);
        break;
      case Io:
        return (
          (e = Ae(12, n, t, l | 2)), (e.elementType = Io), (e.lanes = o), e
        );
      case jo:
        return (e = Ae(13, n, t, l)), (e.elementType = jo), (e.lanes = o), e;
      case Mo:
        return (e = Ae(19, n, t, l)), (e.elementType = Mo), (e.lanes = o), e;
      case pa:
        return Kl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fa:
              i = 10;
              break e;
            case da:
              i = 9;
              break e;
            case Ui:
              i = 11;
              break e;
            case $i:
              i = 14;
              break e;
            case vt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function Kl(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = pa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function No(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function Po(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = io(0)),
    (this.expirationTimes = io(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = io(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Eu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new bp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ae(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ou(o),
    e
  );
}
function e0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function of(e) {
  if (!e) return Lt;
  e = e._reactInternals;
  e: {
    if (Gt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return lc(e, n, t);
  }
  return t;
}
function uf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Eu(n, r, !0, e, l, o, i, u, s)),
    (e.context = of(null)),
    (n = e.current),
    (r = me()),
    (l = Tt(n)),
    (o = it(r, l)),
    (o.callback = t ?? null),
    Pt(n, o, l),
    (e.current.lanes = l),
    _r(e, l, r),
    Ee(e, r),
    e
  );
}
function Yl(e, t, n, r) {
  var l = t.current,
    o = me(),
    i = Tt(l);
  return (
    (n = of(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = it(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(l, t, i)),
    e !== null && (Qe(e, l, i, o), br(e, l, i)),
    i
  );
}
function Fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $s(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xu(e, t) {
  $s(e, t), (e = e.alternate) && $s(e, t);
}
function t0() {
  return null;
}
var sf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _u(e) {
  this._internalRoot = e;
}
Xl.prototype.render = _u.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Yl(e, t, null, null);
};
Xl.prototype.unmount = _u.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xt(function () {
      Yl(null, e, null, null);
    }),
      (t[at] = null);
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ja();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Ba(e);
  }
};
function Cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hs() {}
function n0(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Fl(i);
        o.call(a);
      };
    }
    var i = uf(t, r, e, 0, null, !1, !1, "", Hs);
    return (
      (e._reactRootContainer = i),
      (e[at] = i.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Fl(s);
      u.call(a);
    };
  }
  var s = Eu(e, 0, !1, null, null, !1, !1, "", Hs);
  return (
    (e._reactRootContainer = s),
    (e[at] = s.current),
    pr(e.nodeType === 8 ? e.parentNode : e),
    Xt(function () {
      Yl(t, s, n, r);
    }),
    s
  );
}
function Gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Fl(i);
        u.call(s);
      };
    }
    Yl(t, i, e, l);
  } else i = n0(n, t, e, l, r);
  return Fl(i);
}
Aa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yn(t.pendingLanes);
        n !== 0 &&
          (Wi(t, n | 1), Ee(t, G()), !(j & 6) && ((xn = G() + 500), It()));
      }
      break;
    case 13:
      Xt(function () {
        var r = ct(e, 1);
        if (r !== null) {
          var l = me();
          Qe(r, e, 1, l);
        }
      }),
        xu(e, 1);
  }
};
Qi = function (e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var n = me();
      Qe(t, e, 134217728, n);
    }
    xu(e, 134217728);
  }
};
Ia = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = ct(e, t);
    if (n !== null) {
      var r = me();
      Qe(n, e, t, r);
    }
    xu(e, t);
  }
};
ja = function () {
  return M;
};
Ma = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Xo = function (e, t, n) {
  switch (t) {
    case "input":
      if (($o(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ul(r);
            if (!l) throw Error(k(90));
            ya(r), $o(r, l);
          }
        }
      }
      break;
    case "textarea":
      va(e, n);
      break;
    case "select":
      (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
  }
};
_a = gu;
Ca = Xt;
var r0 = { usingClientEntryPoint: !1, Events: [Nr, rn, Ul, Ea, xa, gu] },
  Vn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  l0 = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ra(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || t0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber)
    try {
      (Il = Kr.inject(l0)), (et = Kr);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cu(t)) throw Error(k(200));
  return e0(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!Cu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = sf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Eu(e, 1, !1, null, null, n, !1, r, l)),
    (e[at] = t.current),
    pr(e.nodeType === 8 ? e.parentNode : e),
    new _u(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Ra(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return Xt(e);
};
Te.hydrate = function (e, t, n) {
  if (!Jl(t)) throw Error(k(200));
  return Gl(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!Cu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = sf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = uf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[at] = t.current),
    pr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Xl(t);
};
Te.render = function (e, t, n) {
  if (!Jl(t)) throw Error(k(200));
  return Gl(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!Jl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Xt(function () {
        Gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[at] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = gu;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Gl(e, t, n, !1, r);
};
Te.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Te);
})(td);
var Vs = Fo;
(Lo.createRoot = Vs.createRoot), (Lo.hydrateRoot = Vs.hydrateRoot);
const af = ({ size: e, style: t, className: n }) =>
    T("svg", {
      width: e ?? 24,
      height: e ?? 24,
      viewBox: "0 0 24 24",
      className: n,
      style: t,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: T("path", {
        fill: "currentColor",
        d: "M13.06 12l6.224-6.216a.76.76 0 00-1.069-1.068L12 10.94 5.784 4.716a.76.76 0 00-1.069 1.068L10.94 12l-6.225 6.216a.76.76 0 000 1.068.768.768 0 001.07 0L12 13.06l6.215 6.225a.768.768 0 001.07 0 .76.76 0 000-1.068L13.058 12z",
      }),
    }),
  o0 = ({ size: e, style: t, className: n }) =>
    T("svg", {
      width: e ?? 24,
      height: e ?? 24,
      viewBox: "0 0 24 24",
      className: n,
      style: t,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: T("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12.375 20.25H4.472a.712.712 0 01-.722-.722v-7.903A8.625 8.625 0 0112.375 3v0A8.625 8.625 0 0121 11.625v0a8.624 8.624 0 01-8.625 8.625v0zM9.375 10.5H15M9.375 13.5H15",
      }),
    }),
  i0 = ({ size: e, className: t, style: n }) =>
    oe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      enableBackground: "new 0 0 128 128",
      height: e ?? 20,
      className: t,
      style: n,
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 128 128",
      width: e ?? 20,
      xmlSpace: "preserve",
      children: [
        T("path", {
          fill: "currentColor",
          d: "M74.508,108.239c-0.772,0-1.479-0.445-1.81-1.148l-16.863-35.84L20.732,55.116c-0.734-0.337-1.193-1.083-1.164-1.891  c0.03-0.808,0.543-1.518,1.3-1.8l83.312-31.107c0.729-0.271,1.552-0.096,2.105,0.452c0.555,0.548,0.739,1.369,0.475,2.102  l-30.371,84.047c-0.274,0.761-0.98,1.28-1.788,1.318C74.569,108.238,74.538,108.239,74.508,108.239z M26.772,53.49l31.396,14.432  c0.429,0.197,0.774,0.539,0.975,0.965l15.122,32.139l27.264-75.448L26.772,53.49z",
        }),
        T("path", {
          fill: "currentColor",
          d: "M57.334,71.738c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.78-0.781-2.047,0-2.828l47.545-47.546  c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828L58.748,71.152C58.357,71.543,57.846,71.738,57.334,71.738z",
        }),
      ],
    }),
  u0 = "_choices_12j8y_18",
  s0 = "_open_12j8y_46",
  a0 = "_bouncedelay_12j8y_1",
  Ne = {
    "sarufi-chat-container": "_sarufi-chat-container_12j8y_1",
    "sarufi-left-align": "_sarufi-left-align_12j8y_14",
    choices: u0,
    "sarufi-backdrop": "_sarufi-backdrop_12j8y_22",
    "sarufi-options": "_sarufi-options_12j8y_26",
    "sarufi-right-align": "_sarufi-right-align_12j8y_30",
    open: s0,
    "sarufi-field-group": "_sarufi-field-group_12j8y_131",
    "input-group": "_input-group_12j8y_138",
    "sarufi-chat-loader": "_sarufi-chat-loader_12j8y_170",
    bouncedelay: a0,
    "sarufi-bounce1": "_sarufi-bounce1_12j8y_185",
    "sarufi-bounce2": "_sarufi-bounce2_12j8y_190",
  };
function cf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ff } = Object.prototype,
  { getPrototypeOf: Nu } = Object,
  Pu = ((e) => (t) => {
    const n = ff.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  pt = (e) => ((e = e.toLowerCase()), (t) => Pu(t) === e),
  Zl = (e) => (t) => typeof t === e,
  { isArray: Rn } = Array,
  Er = Zl("undefined");
function c0(e) {
  return (
    e !== null &&
    !Er(e) &&
    e.constructor !== null &&
    !Er(e.constructor) &&
    Ft(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const df = pt("ArrayBuffer");
function f0(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && df(e.buffer)),
    t
  );
}
const d0 = Zl("string"),
  Ft = Zl("function"),
  pf = Zl("number"),
  Ru = (e) => e !== null && typeof e == "object",
  p0 = (e) => e === !0 || e === !1,
  il = (e) => {
    if (Pu(e) !== "object") return !1;
    const t = Nu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  m0 = pt("Date"),
  y0 = pt("File"),
  h0 = pt("Blob"),
  v0 = pt("FileList"),
  g0 = (e) => Ru(e) && Ft(e.pipe),
  w0 = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        ff.call(e) === t ||
        (Ft(e.toString) && e.toString() === t))
    );
  },
  S0 = pt("URLSearchParams"),
  k0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), Rn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let u;
    for (r = 0; r < i; r++) (u = o[r]), t.call(null, e[u], u, e);
  }
}
function mf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const yf = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  hf = (e) => !Er(e) && e !== yf;
function Pi() {
  const { caseless: e } = (hf(this) && this) || {},
    t = {},
    n = (r, l) => {
      const o = (e && mf(t, l)) || l;
      il(t[o]) && il(r)
        ? (t[o] = Pi(t[o], r))
        : il(r)
        ? (t[o] = Pi({}, r))
        : Rn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Rr(arguments[r], n);
  return t;
}
const E0 = (e, t, n, { allOwnKeys: r } = {}) => (
    Rr(
      t,
      (l, o) => {
        n && Ft(l) ? (e[o] = cf(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  x0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  _0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  C0 = (e, t, n, r) => {
    let l, o, i;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0));
      e = n !== !1 && Nu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  N0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  P0 = (e) => {
    if (!e) return null;
    if (Rn(e)) return e;
    let t = e.length;
    if (!pf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  R0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Nu(Uint8Array)),
  T0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  O0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  z0 = pt("HTMLFormElement"),
  L0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  Ws = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  F0 = pt("RegExp"),
  vf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Rr(n, (l, o) => {
      t(l, o, e) !== !1 && (r[o] = l);
    }),
      Object.defineProperties(e, r);
  },
  D0 = (e) => {
    vf(e, (t, n) => {
      if (Ft(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ft(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  A0 = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return Rn(e) ? r(e) : r(String(e).split(t)), n;
  },
  I0 = () => {},
  j0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ro = "abcdefghijklmnopqrstuvwxyz",
  Qs = "0123456789",
  gf = { DIGIT: Qs, ALPHA: Ro, ALPHA_DIGIT: Ro + Ro.toUpperCase() + Qs },
  M0 = (e = 16, t = gf.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function B0(e) {
  return !!(
    e &&
    Ft(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const U0 = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Ru(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const o = Rn(r) ? [] : {};
            return (
              Rr(r, (i, u) => {
                const s = n(i, l + 1);
                !Er(s) && (o[u] = s);
              }),
              (t[l] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  g = {
    isArray: Rn,
    isArrayBuffer: df,
    isBuffer: c0,
    isFormData: w0,
    isArrayBufferView: f0,
    isString: d0,
    isNumber: pf,
    isBoolean: p0,
    isObject: Ru,
    isPlainObject: il,
    isUndefined: Er,
    isDate: m0,
    isFile: y0,
    isBlob: h0,
    isRegExp: F0,
    isFunction: Ft,
    isStream: g0,
    isURLSearchParams: S0,
    isTypedArray: R0,
    isFileList: v0,
    forEach: Rr,
    merge: Pi,
    extend: E0,
    trim: k0,
    stripBOM: x0,
    inherits: _0,
    toFlatObject: C0,
    kindOf: Pu,
    kindOfTest: pt,
    endsWith: N0,
    toArray: P0,
    forEachEntry: T0,
    matchAll: O0,
    isHTMLForm: z0,
    hasOwnProperty: Ws,
    hasOwnProp: Ws,
    reduceDescriptors: vf,
    freezeMethods: D0,
    toObjectSet: A0,
    toCamelCase: L0,
    noop: I0,
    toFiniteNumber: j0,
    findKey: mf,
    global: yf,
    isContextDefined: hf,
    ALPHABET: gf,
    generateString: M0,
    isSpecCompliantForm: B0,
    toJSONObject: U0,
  };
function I(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
g.inherits(I, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: g.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const wf = I.prototype,
  Sf = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Sf[e] = { value: e };
});
Object.defineProperties(I, Sf);
Object.defineProperty(wf, "isAxiosError", { value: !0 });
I.from = (e, t, n, r, l, o) => {
  const i = Object.create(wf);
  return (
    g.toFlatObject(
      e,
      i,
      function (s) {
        return s !== Error.prototype;
      },
      (u) => u !== "isAxiosError"
    ),
    I.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const $0 = null;
function Ri(e) {
  return g.isPlainObject(e) || g.isArray(e);
}
function kf(e) {
  return g.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ks(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = kf(l)), !n && o ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function H0(e) {
  return g.isArray(e) && !e.some(Ri);
}
const V0 = g.toFlatObject(g, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ql(e, t, n) {
  if (!g.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = g.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, L) {
        return !g.isUndefined(L[v]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || p,
    o = n.dots,
    i = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && g.isSpecCompliantForm(t);
  if (!g.isFunction(l)) throw new TypeError("visitor must be a function");
  function a(h) {
    if (h === null) return "";
    if (g.isDate(h)) return h.toISOString();
    if (!s && g.isBlob(h))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(h) || g.isTypedArray(h)
      ? s && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function p(h, v, L) {
    let f = h;
    if (h && !L && typeof h == "object") {
      if (g.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (g.isArray(h) && H0(h)) ||
        ((g.isFileList(h) || g.endsWith(v, "[]")) && (f = g.toArray(h)))
      )
        return (
          (v = kf(v)),
          f.forEach(function (d, S) {
            !(g.isUndefined(d) || d === null) &&
              t.append(
                i === !0 ? Ks([v], S, o) : i === null ? v : v + "[]",
                a(d)
              );
          }),
          !1
        );
    }
    return Ri(h) ? !0 : (t.append(Ks(L, v, o), a(h)), !1);
  }
  const m = [],
    y = Object.assign(V0, {
      defaultVisitor: p,
      convertValue: a,
      isVisitable: Ri,
    });
  function w(h, v) {
    if (!g.isUndefined(h)) {
      if (m.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      m.push(h),
        g.forEach(h, function (f, c) {
          (!(g.isUndefined(f) || f === null) &&
            l.call(t, f, g.isString(c) ? c.trim() : c, v, y)) === !0 &&
            w(f, v ? v.concat(c) : [c]);
        }),
        m.pop();
    }
  }
  if (!g.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function Ys(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Tu(e, t) {
  (this._pairs = []), e && ql(e, this, t);
}
const Ef = Tu.prototype;
Ef.append = function (t, n) {
  this._pairs.push([t, n]);
};
Ef.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ys);
      }
    : Ys;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function W0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function xf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || W0,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = g.isURLSearchParams(t) ? t.toString() : new Tu(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Q0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    g.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Xs = Q0,
  _f = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  K0 = typeof URLSearchParams < "u" ? URLSearchParams : Tu,
  Y0 = typeof FormData < "u" ? FormData : null,
  X0 = typeof Blob < "u" ? Blob : null,
  J0 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  G0 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  be = {
    isBrowser: !0,
    classes: { URLSearchParams: K0, FormData: Y0, Blob: X0 },
    isStandardBrowserEnv: J0,
    isStandardBrowserWebWorkerEnv: G0,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function Z0(e, t) {
  return ql(
    e,
    new be.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return be.isNode && g.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function q0(e) {
  return g
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function b0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Cf(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    const u = Number.isFinite(+i),
      s = o >= n.length;
    return (
      (i = !i && g.isArray(l) ? l.length : i),
      s
        ? (g.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !u)
        : ((!l[i] || !g.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && g.isArray(l[i]) && (l[i] = b0(l[i])),
          !u)
    );
  }
  if (g.isFormData(e) && g.isFunction(e.entries)) {
    const n = {};
    return (
      g.forEachEntry(e, (r, l) => {
        t(q0(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
const em = { "Content-Type": void 0 };
function tm(e, t, n) {
  if (g.isString(e))
    try {
      return (t || JSON.parse)(e), g.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const bl = {
  transitional: _f,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        o = g.isObject(t);
      if ((o && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t)))
        return l && l ? JSON.stringify(Cf(t)) : t;
      if (
        g.isArrayBuffer(t) ||
        g.isBuffer(t) ||
        g.isStream(t) ||
        g.isFile(t) ||
        g.isBlob(t)
      )
        return t;
      if (g.isArrayBufferView(t)) return t.buffer;
      if (g.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let u;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Z0(t, this.formSerializer).toString();
        if ((u = g.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return ql(
            u ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return o || l ? (n.setContentType("application/json", !1), tm(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || bl.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && g.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (i)
            throw u.name === "SyntaxError"
              ? I.from(u, I.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: be.classes.FormData, Blob: be.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
g.forEach(["delete", "get", "head"], function (t) {
  bl.headers[t] = {};
});
g.forEach(["post", "put", "patch"], function (t) {
  bl.headers[t] = g.merge(em);
});
const Ou = bl,
  nm = g.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  rm = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (l = i.indexOf(":")),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && nm[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Js = Symbol("internals");
function Wn(e) {
  return e && String(e).trim().toLowerCase();
}
function ul(e) {
  return e === !1 || e == null ? e : g.isArray(e) ? e.map(ul) : String(e);
}
function lm(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function om(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function To(e, t, n, r, l) {
  if (g.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!g.isString(t))) {
    if (g.isString(r)) return t.indexOf(r) !== -1;
    if (g.isRegExp(r)) return r.test(t);
  }
}
function im(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function um(e, t) {
  const n = g.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
class eo {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function o(u, s, a) {
      const p = Wn(s);
      if (!p) throw new Error("header name must be a non-empty string");
      const m = g.findKey(l, p);
      (!m || l[m] === void 0 || a === !0 || (a === void 0 && l[m] !== !1)) &&
        (l[m || s] = ul(u));
    }
    const i = (u, s) => g.forEach(u, (a, p) => o(a, p, s));
    return (
      g.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : g.isString(t) && (t = t.trim()) && !om(t)
        ? i(rm(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Wn(t)), t)) {
      const r = g.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return lm(l);
        if (g.isFunction(n)) return n.call(this, l, r);
        if (g.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Wn(t)), t)) {
      const r = g.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || To(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function o(i) {
      if (((i = Wn(i)), i)) {
        const u = g.findKey(r, i);
        u && (!n || To(r, r[u], u, n)) && (delete r[u], (l = !0));
      }
    }
    return g.isArray(t) ? t.forEach(o) : o(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || To(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      g.forEach(this, (l, o) => {
        const i = g.findKey(r, o);
        if (i) {
          (n[i] = ul(l)), delete n[o];
          return;
        }
        const u = t ? im(o) : String(o).trim();
        u !== o && delete n[o], (n[u] = ul(l)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      g.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && g.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((l) => r.set(l)), r;
  }
  static accessor(t) {
    const r = (this[Js] = this[Js] = { accessors: {} }).accessors,
      l = this.prototype;
    function o(i) {
      const u = Wn(i);
      r[u] || (um(l, i), (r[u] = !0));
    }
    return g.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
eo.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
g.freezeMethods(eo.prototype);
g.freezeMethods(eo);
const ut = eo;
function Oo(e, t) {
  const n = this || Ou,
    r = t || n,
    l = ut.from(r.headers);
  let o = r.data;
  return (
    g.forEach(e, function (u) {
      o = u.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function Nf(e) {
  return !!(e && e.__CANCEL__);
}
function Tr(e, t, n) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
g.inherits(Tr, I, { __CANCEL__: !0 });
function sm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          "Request failed with status code " + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const am = be.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, l, o, i, u) {
          const s = [];
          s.push(n + "=" + encodeURIComponent(r)),
            g.isNumber(l) && s.push("expires=" + new Date(l).toGMTString()),
            g.isString(o) && s.push("path=" + o),
            g.isString(i) && s.push("domain=" + i),
            u === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function cm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fm(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pf(e, t) {
  return e && !cm(t) ? fm(e, t) : t;
}
const dm = be.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = l(window.location.href)),
        function (i) {
          const u = g.isString(i) ? l(i) : i;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function pm(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function mm(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        p = r[o];
      i || (i = a), (n[l] = s), (r[l] = a);
      let m = o,
        y = 0;
      for (; m !== l; ) (y += n[m++]), (m = m % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), a - i < t)) return;
      const w = p && a - p;
      return w ? Math.round((y * 1e3) / w) : void 0;
    }
  );
}
function Gs(e, t) {
  let n = 0;
  const r = mm(50, 250);
  return (l) => {
    const o = l.loaded,
      i = l.lengthComputable ? l.total : void 0,
      u = o - n,
      s = r(u),
      a = o <= i;
    n = o;
    const p = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && i && a ? (i - o) / s : void 0,
      event: l,
    };
    (p[t ? "download" : "upload"] = !0), e(p);
  };
}
const ym = typeof XMLHttpRequest < "u",
  hm =
    ym &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const o = ut.from(e.headers).normalize(),
          i = e.responseType;
        let u;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        g.isFormData(l) &&
          (be.isStandardBrowserEnv || be.isStandardBrowserWebWorkerEnv) &&
          o.setContentType(!1);
        let a = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || "",
            h = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(w + ":" + h));
        }
        const p = Pf(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), xf(p, e.params, e.paramsSerializer), !0),
          (a.timeout = e.timeout);
        function m() {
          if (!a) return;
          const w = ut.from(
              "getAllResponseHeaders" in a && a.getAllResponseHeaders()
            ),
            v = {
              data:
                !i || i === "text" || i === "json"
                  ? a.responseText
                  : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: w,
              config: e,
              request: a,
            };
          sm(
            function (f) {
              n(f), s();
            },
            function (f) {
              r(f), s();
            },
            v
          ),
            (a = null);
        }
        if (
          ("onloadend" in a
            ? (a.onloadend = m)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 &&
                    !(a.responseURL && a.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(m);
              }),
          (a.onabort = function () {
            a &&
              (r(new I("Request aborted", I.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new I("Network Error", I.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let h = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const v = e.transitional || _f;
            e.timeoutErrorMessage && (h = e.timeoutErrorMessage),
              r(
                new I(
                  h,
                  v.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  e,
                  a
                )
              ),
              (a = null);
          }),
          be.isStandardBrowserEnv)
        ) {
          const w =
            (e.withCredentials || dm(p)) &&
            e.xsrfCookieName &&
            am.read(e.xsrfCookieName);
          w && o.set(e.xsrfHeaderName, w);
        }
        l === void 0 && o.setContentType(null),
          "setRequestHeader" in a &&
            g.forEach(o.toJSON(), function (h, v) {
              a.setRequestHeader(v, h);
            }),
          g.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          i && i !== "json" && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            a.addEventListener("progress", Gs(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            a.upload &&
            a.upload.addEventListener("progress", Gs(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (w) => {
              a &&
                (r(!w || w.type ? new Tr(null, e, a) : w),
                a.abort(),
                (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const y = pm(p);
        if (y && be.protocols.indexOf(y) === -1) {
          r(new I("Unsupported protocol " + y + ":", I.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(l || null);
      });
    },
  sl = { http: $0, xhr: hm };
g.forEach(sl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const vm = {
  getAdapter: (e) => {
    e = g.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let l = 0;
      l < t && ((n = e[l]), !(r = g.isString(n) ? sl[n.toLowerCase()] : n));
      l++
    );
    if (!r)
      throw r === !1
        ? new I(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            g.hasOwnProp(sl, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!g.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: sl,
};
function zo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Tr(null, e);
}
function Zs(e) {
  return (
    zo(e),
    (e.headers = ut.from(e.headers)),
    (e.data = Oo.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    vm
      .getAdapter(e.adapter || Ou.adapter)(e)
      .then(
        function (r) {
          return (
            zo(e),
            (r.data = Oo.call(e, e.transformResponse, r)),
            (r.headers = ut.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Nf(r) ||
              (zo(e),
              r &&
                r.response &&
                ((r.response.data = Oo.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = ut.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const qs = (e) => (e instanceof ut ? e.toJSON() : e);
function _n(e, t) {
  t = t || {};
  const n = {};
  function r(a, p, m) {
    return g.isPlainObject(a) && g.isPlainObject(p)
      ? g.merge.call({ caseless: m }, a, p)
      : g.isPlainObject(p)
      ? g.merge({}, p)
      : g.isArray(p)
      ? p.slice()
      : p;
  }
  function l(a, p, m) {
    if (g.isUndefined(p)) {
      if (!g.isUndefined(a)) return r(void 0, a, m);
    } else return r(a, p, m);
  }
  function o(a, p) {
    if (!g.isUndefined(p)) return r(void 0, p);
  }
  function i(a, p) {
    if (g.isUndefined(p)) {
      if (!g.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, p);
  }
  function u(a, p, m) {
    if (m in t) return r(a, p);
    if (m in e) return r(void 0, a);
  }
  const s = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (a, p) => l(qs(a), qs(p), !0),
  };
  return (
    g.forEach(Object.keys(e).concat(Object.keys(t)), function (p) {
      const m = s[p] || l,
        y = m(e[p], t[p], p);
      (g.isUndefined(y) && m !== u) || (n[p] = y);
    }),
    n
  );
}
const Rf = "1.3.4",
  zu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    zu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const bs = {};
zu.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      "[Axios v" +
      Rf +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, u) => {
    if (t === !1)
      throw new I(
        l(i, " has been removed" + (n ? " in " + n : "")),
        I.ERR_DEPRECATED
      );
    return (
      n &&
        !bs[i] &&
        ((bs[i] = !0),
        console.warn(
          l(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, u) : !0
    );
  };
};
function gm(e, t, n) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const u = e[o],
        s = u === void 0 || i(u, o, e);
      if (s !== !0)
        throw new I("option " + o + " must be " + s, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new I("Unknown option " + o, I.ERR_BAD_OPTION);
  }
}
const Ti = { assertOptions: gm, validators: zu },
  ht = Ti.validators;
class Dl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Xs(), response: new Xs() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = _n(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: o } = n;
    r !== void 0 &&
      Ti.assertOptions(
        r,
        {
          silentJSONParsing: ht.transitional(ht.boolean),
          forcedJSONParsing: ht.transitional(ht.boolean),
          clarifyTimeoutError: ht.transitional(ht.boolean),
        },
        !1
      ),
      l !== void 0 &&
        Ti.assertOptions(
          l,
          { encode: ht.function, serialize: ht.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i;
    (i = o && g.merge(o.common, o[n.method])),
      i &&
        g.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (h) => {
            delete o[h];
          }
        ),
      (n.headers = ut.concat(i, o));
    const u = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let p,
      m = 0,
      y;
    if (!s) {
      const h = [Zs.bind(this), void 0];
      for (
        h.unshift.apply(h, u),
          h.push.apply(h, a),
          y = h.length,
          p = Promise.resolve(n);
        m < y;

      )
        p = p.then(h[m++], h[m++]);
      return p;
    }
    y = u.length;
    let w = n;
    for (m = 0; m < y; ) {
      const h = u[m++],
        v = u[m++];
      try {
        w = h(w);
      } catch (L) {
        v.call(this, L);
        break;
      }
    }
    try {
      p = Zs.call(this, w);
    } catch (h) {
      return Promise.reject(h);
    }
    for (m = 0, y = a.length; m < y; ) p = p.then(a[m++], a[m++]);
    return p;
  }
  getUri(t) {
    t = _n(this.defaults, t);
    const n = Pf(t.baseURL, t.url);
    return xf(n, t.params, t.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function (t) {
  Dl.prototype[t] = function (n, r) {
    return this.request(
      _n(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
g.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, u) {
      return this.request(
        _n(u || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Dl.prototype[t] = n()), (Dl.prototype[t + "Form"] = n(!0));
});
const al = Dl;
class Lu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((u) => {
          r.subscribe(u), (o = u);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, u) {
        r.reason || ((r.reason = new Tr(o, i, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Lu(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const wm = Lu;
function Sm(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function km(e) {
  return g.isObject(e) && e.isAxiosError === !0;
}
const Oi = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Oi).forEach(([e, t]) => {
  Oi[t] = e;
});
const Em = Oi;
function Tf(e) {
  const t = new al(e),
    n = cf(al.prototype.request, t);
  return (
    g.extend(n, al.prototype, t, { allOwnKeys: !0 }),
    g.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Tf(_n(e, l));
    }),
    n
  );
}
const ee = Tf(Ou);
ee.Axios = al;
ee.CanceledError = Tr;
ee.CancelToken = wm;
ee.isCancel = Nf;
ee.VERSION = Rf;
ee.toFormData = ql;
ee.AxiosError = I;
ee.Cancel = ee.CanceledError;
ee.all = function (t) {
  return Promise.all(t);
};
ee.spread = Sm;
ee.isAxiosError = km;
ee.mergeConfig = _n;
ee.AxiosHeaders = ut;
ee.formToJSON = (e) => Cf(g.isHTMLForm(e) ? new FormData(e) : e);
ee.HttpStatusCode = Em;
ee.default = ee;
const xm = ee,
  _m = ({ label: e, mode: t, onClick: n, disabled: r }) =>
    T("button", {
      className: "sarufi-flex-center",
      onClick: () => {
        r || (n && n());
      },
      disabled: r ?? !1,
      style: {
        cursor: r ? "default" : "pointer",
        opacity: r ? 0.4 : 1,
        fontSize: ".9rem",
        padding: ".7rem 1rem",
        position: "absolute",
        overflow: "hidden",
        transition: ".3s linear",
        zIndex: 100001,
        right: "5px",
        border: "none",
        ...(t === "dark"
          ? { backgroundColor: "transparent", color: "white" }
          : {}),
      },
      children: e,
    }),
  Cm = ({
    disabled: e,
    autoComplete: t = "",
    value: n,
    name: r,
    onChange: l,
    required: o,
    autoFocus: i = !1,
    placeholder: u,
    maxLength: s = 1024,
    save: a,
    mode: p,
    primaryColor: m,
  }) => {
    const y = (v) => {
        v.keyCode == 13 &&
          v.shiftKey == !1 &&
          (a && v.preventDefault(), a && a(v));
      },
      [w, h] = ie.useState(!0);
    return T("div", {
      className: `${Ne["sarufi-field-group"]}`,
      style: { marginBottom: "1.5rem" },
      children: T("div", {
        className: `${Ne["input-group"]}`,
        style: { position: "relative" },
        children: T("label", {
          className: "sarufi-flex-start",
          style: {},
          children: T(
            "textarea",
            {
              onKeyDown: y,
              id: r,
              autoFocus: i,
              name: r,
              maxLength: s,
              disabled: e,
              placeholder: u,
              className: "scroll-bar",
              onChange: l,
              autoComplete: t,
              value: n,
              onFocus: () => h(!0),
              onBlur: () => h(!1),
              style: {
                padding: ".7rem .7rem",
                paddingRight: 45,
                height: 60,
                borderRadius: "0.3rem",
                fontFamily: "var(--sarufi-font-family)",
                ...(p === "dark" ? { color: "white" } : {}),
                ...(p === "dark" && w ? { borderColor: m } : {}),
              },
              required: o,
            },
            r
          ),
        }),
      }),
    });
  },
  Nm = () =>
    oe("div", {
      className: `${Ne["sarufi-chat-loader"]}`,
      children: [
        T("div", { className: Ne["sarufi-bounce1"] }),
        T("div", { className: Ne["sarufi-bounce2"] }),
        T("div", { className: Ne["sarufi-bounce3"] }),
      ],
    }),
  Pm = ({
    id: e,
    open: t,
    botId: n,
    API_URL: r,
    mode: l,
    primaryColor: o,
    token: i,
  }) => {
    const [u, s] = ie.useState([]),
      [a, p] = ie.useState(""),
      [m, y] = ie.useState(!1),
      w = ie.useRef(null),
      h = (v, L, f) => {
        v &&
          (s((c) => [...c, { message: v, sent: !0 }]),
          p(""),
          y(!0),
          xm
            .post(
              `${r}/conversation/whatsapp`,
              {
                message: f ?? v,
                chat_id: e,
                bot_id: n,
                message_type: L ?? "text",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  ...(i ? { Authorization: "Bearer " + i } : {}),
                },
              }
            )
            .then((c) => {
              s((d) => {
                var S, E, _, C, P, A, O, Q, re, ve, Be, Ye, ze, Le, x;
                return [
                  ...d,
                  {
                    message:
                      typeof ((S = c == null ? void 0 : c.data) == null
                        ? void 0
                        : S.actions) == "object" &&
                      (_ =
                        (E = c == null ? void 0 : c.data) == null
                          ? void 0
                          : E.actions[0]) != null &&
                      _.send_message
                        ? (P =
                            (C = c == null ? void 0 : c.data) == null
                              ? void 0
                              : C.actions[0]) == null
                          ? void 0
                          : P.send_message
                        : typeof ((A = c == null ? void 0 : c.data) == null
                            ? void 0
                            : A.message) == "string"
                        ? (O = c == null ? void 0 : c.data) == null
                          ? void 0
                          : O.message
                        : (re =
                            (Q = c == null ? void 0 : c.data) == null
                              ? void 0
                              : Q.message) == null
                        ? void 0
                        : re.join(`
`),
                    received: !0,
                    chat: c == null ? void 0 : c.data,
                    type:
                      (ve = c == null ? void 0 : c.data) != null && ve.actions
                        ? (ze =
                            (Ye =
                              (Be = c == null ? void 0 : c.data) == null
                                ? void 0
                                : Be.actions[0]) == null
                              ? void 0
                              : Ye.send_reply_button) == null
                          ? void 0
                          : ze.type
                        : "",
                    actions:
                      (Le = c == null ? void 0 : c.data) == null
                        ? void 0
                        : Le.actions,
                    next_state:
                      (x = c == null ? void 0 : c.data) == null
                        ? void 0
                        : x.next_state,
                  },
                ];
              }),
                y(!1);
            })
            .catch((c) => {
              s((d) => {
                var S, E, _, C, P, A, O, Q, re;
                return [
                  ...d,
                  {
                    message:
                      typeof ((E =
                        (S = c == null ? void 0 : c.response) == null
                          ? void 0
                          : S.data) == null
                        ? void 0
                        : E.detail) == "string"
                        ? (C =
                            (_ = c == null ? void 0 : c.response) == null
                              ? void 0
                              : _.data) == null
                          ? void 0
                          : C.detail
                        : typeof ((A =
                            (P = c == null ? void 0 : c.response) == null
                              ? void 0
                              : P.data) == null
                            ? void 0
                            : A.detail) == "object"
                        ? (re =
                            (Q =
                              (O = c == null ? void 0 : c.response) == null
                                ? void 0
                                : O.data) == null
                              ? void 0
                              : Q.detail[0]) == null
                          ? void 0
                          : re.msg
                        : c == null
                        ? void 0
                        : c.message,
                  },
                ];
              }),
                y(!1);
            }));
      };
    return (
      ie.useEffect(() => {
        var v;
        w.current &&
          (w.current.scrollTop =
            ((v = w.current) == null ? void 0 : v.scrollHeight) -
            w.current.clientHeight);
      }, [u]),
      ie.useEffect(() => {
        s([]), p("");
      }, [t]),
      oe(Ai, {
        children: [
          T("div", {
            ref: w,
            id: "sarufi-chat-container",
            style: {
              background: "var(--sarufi-chatbox-bg)",
              height: "calc( 100% - 100px )",
              overflowY: "auto",
              position: "relative",
            },
            className: "sarufi-scroll-bar",
            children: oe("div", {
              style: { position: "relative", padding: "1rem" },
              children: [
                T("div", {
                  className: "sarufi-message-body",
                  style: {
                    maxWidth: 280,
                    background: "var(--sarufi-received-box-bg)",
                    padding: "1rem",
                    marginTop: ".7rem",
                    position: "relative",
                    borderRadius: ".3rem",
                  },
                  children: T("p", {
                    style: { fontFamily: "var(--sarufi-font-family)" },
                    children:
                      'Send a message to initiate conversation i.e "Hello"',
                  }),
                }),
                oe("ul", {
                  children: [
                    u == null
                      ? void 0
                      : u.map((v, L) => T(Rm, { chat: v, onSubmit: h }, L)),
                    m &&
                      T("div", {
                        className: "sarufi-message-body",
                        style: {
                          background: "var(--sarufi-received-box-bg)",
                          padding: "1rem",
                          marginTop: ".7rem",
                          position: "relative",
                          borderRadius: ".3rem",
                          maxWidth: 100,
                        },
                        children: T(Nm, {}),
                      }),
                  ],
                }),
              ],
            }),
          }),
          oe("form", {
            style: {
              position: "absolute",
              background:
                l === "light" ? "white" : "var(--sarufi-primary-color)",
            },
            onSubmit: (v) => {
              v.preventDefault(), h(a);
            },
            children: [
              T(Cm, {
                value: a,
                mode: l,
                primaryColor: o,
                autoFocus: !0,
                placeholder: "Compose a message",
                save: () => h(a),
                onChange: (v) => {
                  p(v.target.value);
                },
              }),
              T(_m, {
                mode: l,
                label: T("span", {
                  className: "sarufi-flex-center",
                  children: T(i0, { size: 30 }),
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  Rm = ({ chat: e, onSubmit: t }) => {
    var u,
      s,
      a,
      p,
      m,
      y,
      w,
      h,
      v,
      L,
      f,
      c,
      d,
      S,
      E,
      _,
      C,
      P,
      A,
      O,
      Q,
      re,
      ve,
      Be,
      Ye,
      ze,
      Le,
      x,
      z,
      F,
      B,
      V,
      Xe;
    let n =
        (e == null ? void 0 : e.type) === "button"
          ? (a =
              (s =
                (u = e == null ? void 0 : e.actions[0]) == null
                  ? void 0
                  : u.send_reply_button) == null
                ? void 0
                : s.body) == null
            ? void 0
            : a.text
          : e == null
          ? void 0
          : e.message,
      r =
        (p = e == null ? void 0 : e.actions) == null
          ? void 0
          : p.find((R) => Object.keys(R)[0] === "send_button");
    const [l, o] = ie.useState(!1);
    ie.useEffect(() => {
      let R = document.getElementById("sarufi-chat-container");
      l && R && (R.style.overflowY = "hidden"),
        !l && R && (R.style.overflowY = "auto");
    }, [l]);
    const i = (R) => {
      if (R.key === "Escape") return o(!1);
    };
    return (
      ie.useEffect(
        () => (
          document.addEventListener("keydown", i, !1),
          () => {
            document.removeEventListener("keydown", i, !1);
          }
        ),
        []
      ),
      oe("li", {
        className: `${e != null && e.sent ? "sarufi-flex-end" : ""}`,
        style: { position: "relative" },
        children: [
          oe("div", {
            className: `sarufi-message-body ${
              e != null && e.sent ? "sent" : ""
            }`,
            style: {
              background:
                e != null && e.sent
                  ? "var(--sarufi-sent-box-bg)"
                  : "var(--sarufi-received-box-bg)",
              maxWidth: 280,
              padding: "1rem",
              marginTop: ".7rem",
              position: "relative",
              borderRadius: ".3rem",
            },
            children: [
              (!n || typeof n != "string") &&
                (e == null ? void 0 : e.actions) &&
                r &&
                oe(Ai, {
                  children: [
                    ((m = r.send_button) == null ? void 0 : m.header) &&
                      T(Yr, {
                        message:
                          (y = r.send_button) == null ? void 0 : y.header,
                        style: { marginBottom: "1rem" },
                      }),
                    ((w = r.send_button) == null ? void 0 : w.body) &&
                      T(Yr, {
                        message: (h = r.send_button) == null ? void 0 : h.body,
                      }),
                    ((v = r.send_button) == null ? void 0 : v.footer) &&
                      T(Yr, {
                        message:
                          (L = r.send_button) == null ? void 0 : L.footer,
                        style: {
                          marginTop: "1rem",
                          fontSize: ".9em",
                          opacity: 0.7,
                        },
                      }),
                  ],
                }),
              ((e == null ? void 0 : e.type) || n) &&
                !r &&
                T(Yr, {
                  message:
                    typeof n == "string"
                      ? n
                      : n.join(`
`),
                }),
            ],
          }),
          (e == null ? void 0 : e.type) === "button" &&
            T("ul", {
              className: "sarufi-flex-wide sarufi-flex-wrap",
              style: { maxWidth: 280 },
              children:
                (S =
                  (d =
                    (c =
                      (f = e == null ? void 0 : e.actions[0]) == null
                        ? void 0
                        : f.send_reply_button) == null
                      ? void 0
                      : c.action) == null
                    ? void 0
                    : d.buttons) == null
                  ? void 0
                  : S.map((R, mt) => {
                      var xe, Je, Tn, On, zn, Ln, Fn, Dn, An;
                      return T(
                        "li",
                        {
                          style: {
                            width:
                              ((On =
                                (Tn =
                                  (Je =
                                    (xe = e == null ? void 0 : e.actions[0]) ==
                                    null
                                      ? void 0
                                      : xe.send_reply_button) == null
                                    ? void 0
                                    : Je.action) == null
                                  ? void 0
                                  : Tn.buttons) == null
                                ? void 0
                                : On.length) === 3 ||
                              ((Dn =
                                (Fn =
                                  (Ln =
                                    (zn = e == null ? void 0 : e.actions[0]) ==
                                    null
                                      ? void 0
                                      : zn.send_reply_button) == null
                                    ? void 0
                                    : Ln.action) == null
                                  ? void 0
                                  : Fn.buttons) == null
                                ? void 0
                                : Dn.length) === 1
                                ? "100%"
                                : "calc( 50% - 0.15rem )",
                            marginTop: ".3rem",
                            background: "var(--sarufi-received-box-bg)",
                            borderRadius: ".3rem",
                          },
                          children: T("button", {
                            onClick: () => {
                              var Fu, Du;
                              return t(
                                (Fu = R == null ? void 0 : R.reply) == null
                                  ? void 0
                                  : Fu.title,
                                (e == null ? void 0 : e.type) !== "text"
                                  ? "interactive"
                                  : "text",
                                (Du = R == null ? void 0 : R.reply) == null
                                  ? void 0
                                  : Du.id
                              );
                            },
                            style: {
                              width: "100%",
                              height: "100%",
                              background: "none",
                              border: "none",
                              color: "var(--sarufi-received-box-link-color)",
                              cursor: "pointer",
                              fontSize: "inherit",
                              padding: "1rem",
                              fontFamily: "var(--sarufi-font-family)",
                            },
                            className: "sarufi-flex-center sarufi-flex-wrap",
                            children:
                              (An = R == null ? void 0 : R.reply) == null
                                ? void 0
                                : An.title,
                          }),
                        },
                        mt
                      );
                    }),
            }),
          (!n || typeof n != "string") &&
            (e == null ? void 0 : e.actions) &&
            r &&
            T("div", {
              className: "bg-neutral-0 p-1 mt-300 br-300 sarufi-flex-center",
              style: {
                maxWidth: 280,
                marginTop: ".3rem",
                background: "var(--sarufi-received-box-bg)",
                borderRadius: ".3rem",
              },
              children: T("button", {
                onClick: () => o(!0),
                className:
                  "link text-small-100 sarufi-flex-center cursor-pointer",
                style: {
                  width: "100%",
                  height: "100%",
                  background: "none",
                  border: "none",
                  color: "var(--sarufi-received-box-link-color)",
                  cursor: "pointer",
                  fontSize: "inherit",
                  padding: "1rem",
                  fontFamily: "var(--sarufi-font-family)",
                },
                children:
                  ((E = r.send_button) == null ? void 0 : E.button) ??
                  ((C = (_ = r.send_button) == null ? void 0 : _.action) == null
                    ? void 0
                    : C.button),
              }),
            }),
          (!n || typeof n != "string") &&
            (e == null ? void 0 : e.actions) &&
            r &&
            l &&
            oe("div", {
              className: ` ${Ne.choices}`,
              style: {
                position: "fixed",
                zIndex: 100004,
                transition: "0.35s linear",
              },
              children: [
                T("div", {
                  className: Ne["sarufi-backdrop"],
                  style: {
                    position: "fixed",
                    background: "rgba(0, 0, 0, 0.6)",
                    zIndex: 100004,
                    transition: "0.35s linear",
                  },
                  onClick: () => o(!1),
                }),
                oe("div", {
                  className: `${Ne["sarufi-options"]} sarufi-scroll-bar`,
                  style: {
                    zIndex: 100005,
                    background: "var(--sarufi-received-box-bg)",
                    color: "var(--sarufi-received-box-color)",
                    borderRadius: ".3rem",
                  },
                  children: [
                    oe("div", {
                      className: "sarufi-flex-start",
                      style: {
                        padding: "1rem",
                        paddingBottom: ".5rem",
                        marginBottom: "1rem",
                      },
                      children: [
                        T("button", {
                          onClick: () => o(!1),
                          style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--sarufi-received-box-color)",
                          },
                          children: T(af, { size: 18 }),
                        }),
                        ((O =
                          (A =
                            (P = r.send_button) == null ? void 0 : P.action) ==
                          null
                            ? void 0
                            : A.sections[0]) == null
                          ? void 0
                          : O.title) &&
                          T("p", {
                            style: {
                              width: "100%",
                              marginLeft: "1rem",
                              paddingRight: "2rem",
                              textAlign: "center",
                              fontFamily: "var(--sarufi-font-family)",
                            },
                            children:
                              (ve =
                                (re =
                                  (Q = r.send_button) == null
                                    ? void 0
                                    : Q.action) == null
                                  ? void 0
                                  : re.sections[0]) == null
                                ? void 0
                                : ve.title,
                          }),
                      ],
                    }),
                    T("ul", {
                      style: { padding: "1rem", paddingTop: "0" },
                      children:
                        ((x =
                          (Le =
                            (ze =
                              (Ye =
                                (Be = r.send_button) == null
                                  ? void 0
                                  : Be.action) == null
                                ? void 0
                                : Ye.sections[0]) == null
                              ? void 0
                              : ze.rows) == null
                            ? void 0
                            : Le.filter((R) =>
                                R == null ? void 0 : R.title
                              )) == null
                          ? void 0
                          : x.length) > 0 &&
                        ((Xe =
                          (V =
                            (B =
                              (F =
                                (z = r.send_button) == null
                                  ? void 0
                                  : z.action) == null
                                ? void 0
                                : F.sections[0]) == null
                              ? void 0
                              : B.rows) == null
                            ? void 0
                            : V.filter((R) =>
                                R == null ? void 0 : R.title
                              )) == null
                          ? void 0
                          : Xe.map((R) =>
                              oe(
                                "li",
                                {
                                  className: "sarufi-flex-wide ",
                                  style: {
                                    marginBottom: "1.5rem",
                                    cursor: "pointer",
                                  },
                                  onClick: () => {
                                    t(
                                      R == null ? void 0 : R.title,
                                      "interactive",
                                      R == null ? void 0 : R.id
                                    ),
                                      o(!1);
                                  },
                                  children: [
                                    oe("div", {
                                      children: [
                                        T("p", {
                                          className: "text-small-200",
                                          style: {
                                            fontFamily:
                                              "var(--sarufi-font-family)",
                                          },
                                          children:
                                            R == null ? void 0 : R.title,
                                        }),
                                        T("p", {
                                          style: {
                                            opacity: ".7",
                                            fontSize: ".9em",
                                            fontFamily:
                                              "var(--sarufi-font-family)",
                                          },
                                          children:
                                            R == null ? void 0 : R.description,
                                        }),
                                      ],
                                    }),
                                    T("div", {
                                      children: T("span", {
                                        className: "sarufi-flex-center",
                                        style: {
                                          height: 15,
                                          width: 15,
                                          borderRadius: "50%",
                                          border:
                                            "1px solid var(--sarufi-received-box-color)",
                                          marginLeft: "1rem",
                                        },
                                      }),
                                    }),
                                  ],
                                },
                                R == null ? void 0 : R.title
                              )
                            )),
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  },
  Yr = ({ message: e, className: t, style: n }) =>
    T(Ai, {
      children:
        typeof e == "string" &&
        T("p", {
          style: { fontFamily: "var(--sarufi-font-family)", ...n },
          className: t ?? "",
          dangerouslySetInnerHTML: { __html: Tm(Om(e)) },
        }),
    }),
  Tm = (e) => {
    let t =
      /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/gi;
    return e.replace(t, function (n) {
      var r = /^(?:(?:https?|ftp):\/\/)/i,
        l = r.test(n) ? n : "http://" + n;
      return '<a href="' + l + '" target="_blank">' + n + "</a>";
    });
  },
  Om = (e) => {
    var t, n, r;
    return e && typeof e == "string"
      ? (r =
          (n =
            (t =
              e == null
                ? void 0
                : e.replace(/(?:\*)([^*]*)(?:\*)/gm, "<strong>$1</strong> ")) ==
            null
              ? void 0
              : t.replace(/(?:_)([^_]*)(?:_)/gm, "<i>$1</i> ")) == null
            ? void 0
            : n.replace(/(?:~)([^~]*)(?:~)/gm, "<strike>$1</strike> ")) == null
        ? void 0
        : r.replace(/(?:```)([^```]*)(?:```)/gm, "<tt>$1</tt> ")
      : e;
  },
  zm = ({ botId: e, API_URL: t, theme: n, title: r = "Chat", token: l }) => {
    var p,
      m,
      y,
      w,
      h,
      v,
      L,
      f,
      c,
      d,
      S,
      E,
      _,
      C,
      P,
      A,
      O,
      Q,
      re,
      ve,
      Be,
      Ye,
      ze,
      Le,
      x,
      z,
      F,
      B,
      V,
      Xe,
      R,
      mt,
      xe,
      Je,
      Tn,
      On,
      zn,
      Ln,
      Fn,
      Dn,
      An;
    const [o, i] = ie.useState(!1),
      [u, s] = ie.useState(new Date().valueOf()),
      a = {
        "--sarufi-primary-color":
          ((p = window == null ? void 0 : window.style) == null
            ? void 0
            : p.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "#202C33"
            : ((m = window.style) == null ? void 0 : m.primaryColor) ??
              (n == null ? void 0 : n.primaryColor) ??
              "#2776EA",
        "--sarufi-font-size": `${
          ((y = window.style) == null ? void 0 : y.fontSize) ??
          (n == null ? void 0 : n.fontSize) ??
          14
        }px`,
        "--sarufi-font-family":
          ((w = window.style) == null ? void 0 : w.fontFamily) ===
          "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : ((h = window.style) == null ? void 0 : h.fontFamily) ===
                "InterRegular" ||
              (n == null ? void 0 : n.fontFamily) === "InterRegular"
            ? "'Inter', sans-serif"
            : (n == null ? void 0 : n.fontFamily) === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : ((v = window.style) == null ? void 0 : v.fontFamily) ===
                "inherit" || (n == null ? void 0 : n.fontFamily) === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        "--sarufi-border-color":
          ((L = window.style) == null ? void 0 : L.borderColor) ??
          (n == null ? void 0 : n.borderColor) ??
          "lightgray",
        "--sarufi-sent-box-bg":
          ((f = window == null ? void 0 : window.style) == null
            ? void 0
            : f.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "#005C4B"
            : ((c = window.style) == null ? void 0 : c.sentBoxBg) ??
              (n == null ? void 0 : n.sentBoxBg) ??
              "#D8F9D4",
        "--sarufi-received-box-bg":
          ((d = window == null ? void 0 : window.style) == null
            ? void 0
            : d.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "#202C33"
            : ((S = window.style) == null ? void 0 : S.receivedBoxBg) ??
              (n == null ? void 0 : n.receivedBoxBg) ??
              "white",
        "--sarufi-sent-box-color":
          ((E = window == null ? void 0 : window.style) == null
            ? void 0
            : E.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "white"
            : ((_ = window.style) == null ? void 0 : _.sentBoxColor) ??
              (n == null ? void 0 : n.sentBoxColor) ??
              "black",
        "--sarufi-received-box-color":
          ((C = window == null ? void 0 : window.style) == null
            ? void 0
            : C.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "white"
            : ((P = window.style) == null ? void 0 : P.receivedBoxColor) ??
              (n == null ? void 0 : n.receivedBoxColor) ??
              "black",
        "--sarufi-sent-box-link-color":
          ((A = window == null ? void 0 : window.style) == null
            ? void 0
            : A.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "#53BDEB"
            : ((O = window.style) == null ? void 0 : O.sentBoxLinkColor) ??
              (n == null ? void 0 : n.sentBoxLinkColor) ??
              "black",
        "--sarufi-received-box-link-color":
          ((Q = window == null ? void 0 : window.style) == null
            ? void 0
            : Q.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "#53BDEB"
            : ((re = window.style) == null
                ? void 0
                : re.receivedBoxLinkColor) ??
              (n == null ? void 0 : n.receivedBoxLinkColor) ??
              "black",
        "--sarufi-chatbox-bg":
          ((ve = window == null ? void 0 : window.style) == null
            ? void 0
            : ve.mode) === "dark" || (n == null ? void 0 : n.mode) === "dark"
            ? "#0B141A"
            : ((Be = window.style) == null ? void 0 : Be.chatboxBg) ??
              (n == null ? void 0 : n.chatboxBg) ??
              "#EDECE1",
        "--sarufi-chatbox-height":
          (Ye = window.style) != null && Ye.height
            ? ((ze = window.style) == null ? void 0 : ze.height) + "px"
            : n != null && n.height
            ? (n == null ? void 0 : n.height) + "px"
            : "500px",
        "--sarufi-chatbox-width":
          (Le = window.style) != null && Le.width
            ? ((x = window.style) == null ? void 0 : x.width) + "px"
            : n != null && n.width
            ? (n == null ? void 0 : n.width) + "px"
            : "400px",
      };
    return oe("div", {
      className: `${Ne["sarufi-chat-container"]} ${
        ((z = window == null ? void 0 : window.style) == null
          ? void 0
          : z.placement) === "left" ||
        (n == null ? void 0 : n.placement) === "left"
          ? Ne["sarufi-left-align"]
          : Ne["sarufi-right-align"]
      } ${o ? Ne.open : ""}
      ${o ? "sarufi-shadow-xl" : "sarufi-flex-center"}`,
      style: {
        position: "fixed",
        fontFamily:
          ((F = window.style) == null ? void 0 : F.fontFamily) ===
          "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : ((B = window.style) == null ? void 0 : B.fontFamily) ===
                "InterRegular" ||
              (n == null ? void 0 : n.fontFamily) === "InterRegular"
            ? "'Inter', sans-serif"
            : (n == null ? void 0 : n.fontFamily) === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : ((V = window.style) == null ? void 0 : V.fontFamily) ===
                "inherit" || (n == null ? void 0 : n.fontFamily) === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        ...(o
          ? {}
          : {
              height:
                ((Xe = window.style) == null ? void 0 : Xe.buttonSize) ===
                  "lg" || (n == null ? void 0 : n.buttonSize) === "lg"
                  ? "70px"
                  : "50px",
              width:
                ((R = window.style) == null ? void 0 : R.buttonSize) === "lg" ||
                (n == null ? void 0 : n.buttonSize) === "lg"
                  ? "70px"
                  : "50px",
            }),
        ...a,
      },
      children: [
        !o &&
          T("button", {
            className: "sarufi-shadow-xl",
            style: {
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
              borderRadius: "50%",
              height:
                ((mt = window.style) == null ? void 0 : mt.buttonSize) ===
                  "lg" || (n == null ? void 0 : n.buttonSize) === "lg"
                  ? "70px"
                  : ((xe = window.style) == null ? void 0 : xe.buttonSize) ===
                      "sm" || (n == null ? void 0 : n.buttonSize) === "sm"
                  ? "30px"
                  : "50px",
              width:
                ((Je = window.style) == null ? void 0 : Je.buttonSize) ===
                  "lg" || (n == null ? void 0 : n.buttonSize) === "lg"
                  ? "70px"
                  : ((Tn = window.style) == null ? void 0 : Tn.buttonSize) ===
                      "sm" || (n == null ? void 0 : n.buttonSize) === "sm"
                  ? "30px"
                  : "50px",
              background:
                ((On = window == null ? void 0 : window.style) == null
                  ? void 0
                  : On.primaryColor) ??
                (n == null ? void 0 : n.primaryColor) ??
                "#2776EA",
              color: "white",
              border: "none",
            },
            onClick: () => i(!0),
            children: T(o0, {
              size:
                ((zn = window.style) == null ? void 0 : zn.buttonSize) ===
                  "sm" || (n == null ? void 0 : n.buttonSize) === "sm"
                  ? 20
                  : 30,
            }),
          }),
        o &&
          oe("div", {
            style: {
              height: "100%",
              borderRadius: ".5rem",
              overflow: "hidden",
            },
            children: [
              oe("div", {
                className: "sarufi-flex-wide text-neutral-0",
                style: {
                  height: "42px",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  background: "var(--sarufi-primary-color)",
                  color: "white",
                },
                children: [
                  T("p", {
                    className: "sarufi-ellipsed-text",
                    style: {
                      fontWeight: 600,
                      fontFamily: "var(--sarufi-font-family)",
                      fontSize:
                        (Ln = window.style) != null && Ln.fontSize
                          ? ((Fn = window.style) == null
                              ? void 0
                              : Fn.fontSize) * 1.1
                          : n != null && n.fontSize
                          ? Number(n == null ? void 0 : n.fontSize) * 1.1
                          : "1.1em",
                    },
                    children: (window == null ? void 0 : window.botTitle) ?? r,
                  }),
                  T("button", {
                    className: "flex-center",
                    onClick: () => {
                      i(!1), s(new Date().valueOf());
                    },
                    style: {
                      border: "none",
                      background: "none",
                      color: "white",
                      cursor: "pointer",
                    },
                    children: T(af, { size: 18, className: "text-neutral-0" }),
                  }),
                ],
              }),
              T(Pm, {
                open: o,
                id: u,
                mode:
                  ((Dn = window == null ? void 0 : window.style) == null
                    ? void 0
                    : Dn.mode) ??
                  (n == null ? void 0 : n.mode) ??
                  "light",
                primaryColor:
                  ((An = window == null ? void 0 : window.style) == null
                    ? void 0
                    : An.primaryColor) ??
                  (n == null ? void 0 : n.primaryColor) ??
                  "#2776EA",
                botId: window.botId ?? e,
                API_URL: t ?? "https://api.sarufi.io",
                token: l,
              }),
            ],
          }),
      ],
    });
  };
Lo.createRoot(document.getElementById("sarufi-chatbox")).render(
  T(Xf.StrictMode, {
    children: T(zm, {
      botId: 16,
      theme: {
        buttonSize: "md",
        primaryColor: "blue",
        borderColor: "lightgray",
        fontSize: "14",
        fontFamily: "PoppinsRegular",
        sentBoxBg: "blue",
        receivedBoxBg: "white",
        sentBoxColor: "white",
        receivedBoxColor: "black",
        chatboxBg: "#EDECE1",
        receivedBoxLinkColor: "blue",
        sentBoxLinkColor: "white",
        mode: "light",
        placement: "left",
        height: 550,
        width: 450,
      },
      title: "Chat",
    }),
  })
);
