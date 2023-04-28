(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var nr = {},
  ed = {
    get exports() {
      return nr;
    },
    set exports(e) {
      nr = e;
    },
  },
  Ml = {},
  A = {},
  td = {
    get exports() {
      return A;
    },
    set exports(e) {
      A = e;
    },
  },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Er = Symbol.for("react.element"),
  nd = Symbol.for("react.portal"),
  rd = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  sd = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  ad = Symbol.for("react.suspense"),
  cd = Symbol.for("react.memo"),
  fd = Symbol.for("react.lazy"),
  bs = Symbol.iterator;
function dd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bs && e[bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ka = Object.assign,
  Ea = {};
function Rn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ea),
    (this.updater = n || Sa);
}
Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Rn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xa() {}
xa.prototype = Rn.prototype;
function zo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ea),
    (this.updater = n || Sa);
}
var Do = (zo.prototype = new xa());
Do.constructor = zo;
ka(Do, Rn.prototype);
Do.isPureReactComponent = !0;
var eu = Array.isArray,
  _a = Object.prototype.hasOwnProperty,
  Fo = { current: null },
  Ca = { key: !0, ref: !0, __self: !0, __source: !0 };
function Na(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      _a.call(t, r) && !Ca.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Er,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Fo.current,
  };
}
function pd(e, t) {
  return {
    $$typeof: Er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Er;
}
function md(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var tu = /\/+/g;
function ni(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? md("" + e.key)
    : t.toString(36);
}
function Yr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Er:
          case nd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ni(o, 0) : r),
      eu(l)
        ? ((n = ""),
          e != null && (n = e.replace(tu, "$&/") + "/"),
          Yr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Mo(l) &&
            (l = pd(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(tu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), eu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + ni(i, s);
      o += Yr(i, t, n, u, l);
    }
  else if (((u = dd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + ni(i, s++)), (o += Yr(i, t, n, u, l));
  else if (i === "object")
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
  return o;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Yr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function hd(e) {
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
var xe = { current: null },
  Xr = { transition: null },
  yd = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Xr,
    ReactCurrentOwner: Fo,
  };
U.Children = {
  map: Rr,
  forEach: function (e, t, n) {
    Rr(
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
      Rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Rn;
U.Fragment = rd;
U.Profiler = id;
U.PureComponent = zo;
U.StrictMode = ld;
U.Suspense = ad;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ka({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Fo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      _a.call(t, u) &&
        !Ca.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Er, type: e.type, key: l, ref: i, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: sd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: od, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Na;
U.createFactory = function (e) {
  var t = Na.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
U.isValidElement = Mo;
U.lazy = function (e) {
  return { $$typeof: fd, _payload: { _status: -1, _result: e }, _init: hd };
};
U.memo = function (e, t) {
  return { $$typeof: cd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Xr.transition;
  Xr.transition = {};
  try {
    e();
  } finally {
    Xr.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return xe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
U.useId = function () {
  return xe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return xe.current.useRef(e);
};
U.useState = function (e) {
  return xe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return xe.current.useTransition();
};
U.version = "18.2.0";
(function (e) {
  e.exports = U;
})(td);
const gd = wa(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd = A,
  wd = Symbol.for("react.element"),
  Sd = Symbol.for("react.fragment"),
  kd = Object.prototype.hasOwnProperty,
  Ed = vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pa(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) kd.call(t, r) && !xd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wd,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ed.current,
  };
}
Ml.Fragment = Sd;
Ml.jsx = Pa;
Ml.jsxs = Pa;
(function (e) {
  e.exports = Ml;
})(ed);
const Ne = nr.Fragment,
  v = nr.jsx,
  I = nr.jsxs;
var zi = {},
  al = {},
  _d = {
    get exports() {
      return al;
    },
    set exports(e) {
      al = e;
    },
  },
  Ie = {},
  Di = {},
  Cd = {
    get exports() {
      return Di;
    },
    set exports(e) {
      Di = e;
    },
  },
  Ta = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, F) {
    var M = T.length;
    T.push(F);
    e: for (; 0 < M; ) {
      var j = (M - 1) >>> 1,
        V = T[j];
      if (0 < l(V, F)) (T[j] = F), (T[M] = V), (M = j);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var F = T[0],
      M = T.pop();
    if (M !== F) {
      T[0] = M;
      e: for (var j = 0, V = T.length, Oe = V >>> 1; j < Oe; ) {
        var X = 2 * (j + 1) - 1,
          it = T[X],
          ne = X + 1,
          ye = T[ne];
        if (0 > l(it, M))
          ne < V && 0 > l(ye, it)
            ? ((T[j] = ye), (T[ne] = M), (j = ne))
            : ((T[j] = it), (T[X] = M), (j = X));
        else if (ne < V && 0 > l(ye, M)) (T[j] = ye), (T[ne] = M), (j = ne);
        else break e;
      }
    }
    return F;
  }
  function l(T, F) {
    var M = T.sortIndex - F.sortIndex;
    return M !== 0 ? M : T.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    a = [],
    d = 1,
    h = null,
    g = 3,
    E = !1,
    w = !1,
    S = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= T)
        r(a), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(a);
    }
  }
  function m(T) {
    if (((S = !1), p(T), !w))
      if (n(u) !== null) (w = !0), oe(N);
      else {
        var F = n(a);
        F !== null && K(m, F.startTime - T);
      }
  }
  function N(T, F) {
    (w = !1), S && ((S = !1), f(L), (L = -1)), (E = !0);
    var M = g;
    try {
      for (
        p(F), h = n(u);
        h !== null && (!(h.expirationTime > F) || (T && !W()));

      ) {
        var j = h.callback;
        if (typeof j == "function") {
          (h.callback = null), (g = h.priorityLevel);
          var V = j(h.expirationTime <= F);
          (F = e.unstable_now()),
            typeof V == "function" ? (h.callback = V) : h === n(u) && r(u),
            p(F);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var Oe = !0;
      else {
        var X = n(a);
        X !== null && K(m, X.startTime - F), (Oe = !1);
      }
      return Oe;
    } finally {
      (h = null), (g = M), (E = !1);
    }
  }
  var R = !1,
    P = null,
    L = -1,
    B = 5,
    k = -1;
  function W() {
    return !(e.unstable_now() - k < B);
  }
  function Z() {
    if (P !== null) {
      var T = e.unstable_now();
      k = T;
      var F = !0;
      try {
        F = P(!0, T);
      } finally {
        F ? x() : ((R = !1), (P = null));
      }
    } else R = !1;
  }
  var x;
  if (typeof c == "function")
    x = function () {
      c(Z);
    };
  else if (typeof MessageChannel < "u") {
    var y = new MessageChannel(),
      le = y.port2;
    (y.port1.onmessage = Z),
      (x = function () {
        le.postMessage(null);
      });
  } else
    x = function () {
      D(Z, 0);
    };
  function oe(T) {
    (P = T), R || ((R = !0), x());
  }
  function K(T, F) {
    L = D(function () {
      T(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || E || ((w = !0), oe(N));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = g;
      }
      var M = g;
      g = F;
      try {
        return T();
      } finally {
        g = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, F) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var M = g;
      g = T;
      try {
        return F();
      } finally {
        g = M;
      }
    }),
    (e.unstable_scheduleCallback = function (T, F, M) {
      var j = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? j + M : j))
          : (M = j),
        T)
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
        (V = M + V),
        (T = {
          id: d++,
          callback: F,
          priorityLevel: T,
          startTime: M,
          expirationTime: V,
          sortIndex: -1,
        }),
        M > j
          ? ((T.sortIndex = M),
            t(a, T),
            n(u) === null &&
              T === n(a) &&
              (S ? (f(L), (L = -1)) : (S = !0), K(m, M - j)))
          : ((T.sortIndex = V), t(u, T), w || E || ((w = !0), oe(N))),
        T
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (T) {
      var F = g;
      return function () {
        var M = g;
        g = F;
        try {
          return T.apply(this, arguments);
        } finally {
          g = M;
        }
      };
    });
})(Ta);
(function (e) {
  e.exports = Ta;
})(Cd);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra = A,
  Me = Di;
function C(e) {
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
var La = new Set(),
  rr = {};
function qt(e, t) {
  kn(e, t), kn(e + "Capture", t);
}
function kn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) La.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Fi = Object.prototype.hasOwnProperty,
  Nd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  nu = {},
  ru = {};
function Pd(e) {
  return Fi.call(ru, e)
    ? !0
    : Fi.call(nu, e)
    ? !1
    : Nd.test(e)
    ? (ru[e] = !0)
    : ((nu[e] = !0), !1);
}
function Td(e, t, n, r) {
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
function Rd(e, t, n, r) {
  if (t === null || typeof t > "u" || Td(e, t, n, r)) return !0;
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
function _e(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Io = /[\-:]([a-z])/g;
function Ao(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Io, Ao);
    he[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Io, Ao);
    he[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Io, Ao);
  he[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bo(e, t, n, r) {
  var l = he.hasOwnProperty(t) ? he[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rd(t, n, l, r) && (n = null),
    r || l === null
      ? Pd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var yt = Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  nn = Symbol.for("react.portal"),
  rn = Symbol.for("react.fragment"),
  jo = Symbol.for("react.strict_mode"),
  Mi = Symbol.for("react.profiler"),
  Oa = Symbol.for("react.provider"),
  za = Symbol.for("react.context"),
  Uo = Symbol.for("react.forward_ref"),
  Ii = Symbol.for("react.suspense"),
  Ai = Symbol.for("react.suspense_list"),
  $o = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Da = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  ri;
function Wn(e) {
  if (ri === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ri = (t && t[1]) || "";
    }
  return (
    `
` +
    ri +
    e
  );
}
var li = !1;
function ii(e, t) {
  if (!e || li) return "";
  li = !0;
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
          i = r.stack.split(`
`),
          o = l.length - 1,
          s = i.length - 1;
        1 <= o && 0 <= s && l[o] !== i[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (l[o] !== i[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || l[o] !== i[s])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (li = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
}
function Ld(e) {
  switch (e.tag) {
    case 5:
      return Wn(e.type);
    case 16:
      return Wn("Lazy");
    case 13:
      return Wn("Suspense");
    case 19:
      return Wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ii(e.type, !1)), e;
    case 11:
      return (e = ii(e.type.render, !1)), e;
    case 1:
      return (e = ii(e.type, !0)), e;
    default:
      return "";
  }
}
function Bi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case Mi:
      return "Profiler";
    case jo:
      return "StrictMode";
    case Ii:
      return "Suspense";
    case Ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case za:
        return (e.displayName || "Context") + ".Consumer";
      case Oa:
        return (e._context.displayName || "Context") + ".Provider";
      case Uo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case $o:
        return (
          (t = e.displayName || null), t !== null ? t : Bi(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Bi(e(t));
        } catch {}
    }
  return null;
}
function Od(e) {
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
      return Bi(t);
    case 8:
      return t === jo ? "StrictMode" : "Mode";
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
function Ft(e) {
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
function Fa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zd(e) {
  var t = Fa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = zd(e));
}
function Ma(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fa(e) ? (e.checked ? "true" : "false") : e.value),
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
function ji(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ia(e, t) {
  (t = t.checked), t != null && Bo(e, "checked", t, !1);
}
function Ui(e, t) {
  Ia(e, t);
  var n = Ft(t.value),
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
    ? $i(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $i(e, t.type, Ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ou(e, t, n) {
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
function $i(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Vn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function Aa(e, t) {
  var n = Ft(t.value),
    r = Ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ba(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ba(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var zr,
  ja = (function (e) {
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
        zr = zr || document.createElement("div"),
          zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yn = {
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
  Dd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yn).forEach(function (e) {
  Dd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
  });
});
function Ua(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
    ? ("" + t).trim()
    : t + "px";
}
function $a(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ua(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Fd = te(
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
function Vi(e, t) {
  if (t) {
    if (Fd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Qi(e, t) {
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
var Ki = null;
function Ho(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yi = null,
  yn = null,
  gn = null;
function au(e) {
  if ((e = Cr(e))) {
    if (typeof Yi != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ul(t)), Yi(e.stateNode, e.type, t));
  }
}
function Ha(e) {
  yn ? (gn ? gn.push(e) : (gn = [e])) : (yn = e);
}
function Wa() {
  if (yn) {
    var e = yn,
      t = gn;
    if (((gn = yn = null), au(e), t)) for (e = 0; e < t.length; e++) au(t[e]);
  }
}
function Va(e, t) {
  return e(t);
}
function Qa() {}
var oi = !1;
function Ka(e, t, n) {
  if (oi) return e(t, n);
  oi = !0;
  try {
    return Va(e, t, n);
  } finally {
    (oi = !1), (yn !== null || gn !== null) && (Qa(), Wa());
  }
}
function ir(e, t) {
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Xi = !1;
if (dt)
  try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", {
      get: function () {
        Xi = !0;
      },
    }),
      window.addEventListener("test", Fn, Fn),
      window.removeEventListener("test", Fn, Fn);
  } catch {
    Xi = !1;
  }
function Md(e, t, n, r, l, i, o, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Xn = !1,
  fl = null,
  dl = !1,
  Ji = null,
  Id = {
    onError: function (e) {
      (Xn = !0), (fl = e);
    },
  };
function Ad(e, t, n, r, l, i, o, s, u) {
  (Xn = !1), (fl = null), Md.apply(Id, arguments);
}
function Bd(e, t, n, r, l, i, o, s, u) {
  if ((Ad.apply(this, arguments), Xn)) {
    if (Xn) {
      var a = fl;
      (Xn = !1), (fl = null);
    } else throw Error(C(198));
    dl || ((dl = !0), (Ji = a));
  }
}
function bt(e) {
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
function Ya(e) {
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
function cu(e) {
  if (bt(e) !== e) throw Error(C(188));
}
function jd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = bt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return cu(l), e;
        if (i === r) return cu(l), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, s = l.child; s; ) {
        if (s === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = i.child; s; ) {
          if (s === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Xa(e) {
  return (e = jd(e)), e !== null ? Ja(e) : null;
}
function Ja(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ja(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ga = Me.unstable_scheduleCallback,
  fu = Me.unstable_cancelCallback,
  Ud = Me.unstable_shouldYield,
  $d = Me.unstable_requestPaint,
  ie = Me.unstable_now,
  Hd = Me.unstable_getCurrentPriorityLevel,
  Wo = Me.unstable_ImmediatePriority,
  Za = Me.unstable_UserBlockingPriority,
  pl = Me.unstable_NormalPriority,
  Wd = Me.unstable_LowPriority,
  qa = Me.unstable_IdlePriority,
  Il = null,
  rt = null;
function Vd(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(Il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Yd,
  Qd = Math.log,
  Kd = Math.LN2;
function Yd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Qd(e) / Kd) | 0)) | 0;
}
var Dr = 64,
  Fr = 4194304;
function Qn(e) {
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
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~l;
    s !== 0 ? (r = Qn(s)) : ((i &= o), i !== 0 && (r = Qn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Qn(o)) : i !== 0 && (r = Qn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Xd(e, t) {
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
function Jd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Xe(i),
      s = 1 << o,
      u = l[o];
    u === -1
      ? (!(s & n) || s & r) && (l[o] = Xd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Gi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ba() {
  var e = Dr;
  return (Dr <<= 1), !(Dr & 4194240) && (Dr = 64), e;
}
function si(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function Gd(e, t) {
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
    var l = 31 - Xe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Vo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Q = 0;
function ec(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var tc,
  Qo,
  nc,
  rc,
  lc,
  Zi = !1,
  Mr = [],
  Nt = null,
  Pt = null,
  Tt = null,
  or = new Map(),
  sr = new Map(),
  Et = [],
  Zd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function du(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function Mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Cr(t)), t !== null && Qo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function qd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Nt = Mn(Nt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Pt = Mn(Pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Tt = Mn(Tt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return or.set(i, Mn(or.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), sr.set(i, Mn(sr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ic(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ya(n)), t !== null)) {
          (e.blockedOn = t),
            lc(e.priority, function () {
              nc(n);
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
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ki = r), n.target.dispatchEvent(r), (Ki = null);
    } else return (t = Cr(n)), t !== null && Qo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function pu(e, t, n) {
  Jr(e) && n.delete(t);
}
function bd() {
  (Zi = !1),
    Nt !== null && Jr(Nt) && (Nt = null),
    Pt !== null && Jr(Pt) && (Pt = null),
    Tt !== null && Jr(Tt) && (Tt = null),
    or.forEach(pu),
    sr.forEach(pu);
}
function In(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zi ||
      ((Zi = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, bd)));
}
function ur(e) {
  function t(l) {
    return In(l, e);
  }
  if (0 < Mr.length) {
    In(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && In(Nt, e),
      Pt !== null && In(Pt, e),
      Tt !== null && In(Tt, e),
      or.forEach(t),
      sr.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    ic(n), n.blockedOn === null && Et.shift();
}
var vn = yt.ReactCurrentBatchConfig,
  hl = !0;
function ep(e, t, n, r) {
  var l = Q,
    i = vn.transition;
  vn.transition = null;
  try {
    (Q = 1), Ko(e, t, n, r);
  } finally {
    (Q = l), (vn.transition = i);
  }
}
function tp(e, t, n, r) {
  var l = Q,
    i = vn.transition;
  vn.transition = null;
  try {
    (Q = 4), Ko(e, t, n, r);
  } finally {
    (Q = l), (vn.transition = i);
  }
}
function Ko(e, t, n, r) {
  if (hl) {
    var l = qi(e, t, n, r);
    if (l === null) gi(e, t, r, yl, n), du(e, r);
    else if (qd(l, e, t, n, r)) r.stopPropagation();
    else if ((du(e, r), t & 4 && -1 < Zd.indexOf(e))) {
      for (; l !== null; ) {
        var i = Cr(l);
        if (
          (i !== null && tc(i),
          (i = qi(e, t, n, r)),
          i === null && gi(e, t, r, yl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var yl = null;
function qi(e, t, n, r) {
  if (((yl = null), (e = Ho(r)), (e = Ht(e)), e !== null))
    if (((t = bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ya(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (yl = e), null;
}
function oc(e) {
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
      switch (Hd()) {
        case Wo:
          return 1;
        case Za:
          return 4;
        case pl:
        case Wd:
          return 16;
        case qa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null,
  Yo = null,
  Gr = null;
function sc() {
  if (Gr) return Gr;
  var e,
    t = Yo,
    n = t.length,
    r,
    l = "value" in _t ? _t.value : _t.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Gr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ir() {
  return !0;
}
function mu() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ir
        : mu),
      (this.isPropagationStopped = mu),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ir));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ir));
      },
      persist: function () {},
      isPersistent: Ir,
    }),
    t
  );
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xo = Ae(Ln),
  _r = te({}, Ln, { view: 0, detail: 0 }),
  np = Ae(_r),
  ui,
  ai,
  An,
  Al = te({}, _r, {
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
    getModifierState: Jo,
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
        : (e !== An &&
            (An && e.type === "mousemove"
              ? ((ui = e.screenX - An.screenX), (ai = e.screenY - An.screenY))
              : (ai = ui = 0),
            (An = e)),
          ui);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  hu = Ae(Al),
  rp = te({}, Al, { dataTransfer: 0 }),
  lp = Ae(rp),
  ip = te({}, _r, { relatedTarget: 0 }),
  ci = Ae(ip),
  op = te({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sp = Ae(op),
  up = te({}, Ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ap = Ae(up),
  cp = te({}, Ln, { data: 0 }),
  yu = Ae(cp),
  fp = {
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
  dp = {
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
  pp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function mp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pp[e]) ? !!t[e] : !1;
}
function Jo() {
  return mp;
}
var hp = te({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = fp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dp[e.keyCode] || "Unidentified"
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
    getModifierState: Jo,
    charCode: function (e) {
      return e.type === "keypress" ? Zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yp = Ae(hp),
  gp = te({}, Al, {
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
  gu = Ae(gp),
  vp = te({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jo,
  }),
  wp = Ae(vp),
  Sp = te({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kp = Ae(Sp),
  Ep = te({}, Al, {
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
  xp = Ae(Ep),
  _p = [9, 13, 27, 32],
  Go = dt && "CompositionEvent" in window,
  Jn = null;
dt && "documentMode" in document && (Jn = document.documentMode);
var Cp = dt && "TextEvent" in window && !Jn,
  uc = dt && (!Go || (Jn && 8 < Jn && 11 >= Jn)),
  vu = String.fromCharCode(32),
  wu = !1;
function ac(e, t) {
  switch (e) {
    case "keyup":
      return _p.indexOf(t.keyCode) !== -1;
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
function cc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function Np(e, t) {
  switch (e) {
    case "compositionend":
      return cc(t);
    case "keypress":
      return t.which !== 32 ? null : ((wu = !0), vu);
    case "textInput":
      return (e = t.data), e === vu && wu ? null : e;
    default:
      return null;
  }
}
function Pp(e, t) {
  if (ln)
    return e === "compositionend" || (!Go && ac(e, t))
      ? ((e = sc()), (Gr = Yo = _t = null), (ln = !1), e)
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
      return uc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tp = {
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
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tp[e.type] : t === "textarea";
}
function fc(e, t, n, r) {
  Ha(r),
    (t = gl(t, "onChange")),
    0 < t.length &&
      ((n = new Xo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gn = null,
  ar = null;
function Rp(e) {
  Ec(e, 0);
}
function Bl(e) {
  var t = un(e);
  if (Ma(t)) return e;
}
function Lp(e, t) {
  if (e === "change") return t;
}
var dc = !1;
if (dt) {
  var fi;
  if (dt) {
    var di = "oninput" in document;
    if (!di) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"),
        (di = typeof ku.oninput == "function");
    }
    fi = di;
  } else fi = !1;
  dc = fi && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  Gn && (Gn.detachEvent("onpropertychange", pc), (ar = Gn = null));
}
function pc(e) {
  if (e.propertyName === "value" && Bl(ar)) {
    var t = [];
    fc(t, ar, e, Ho(e)), Ka(Rp, t);
  }
}
function Op(e, t, n) {
  e === "focusin"
    ? (Eu(), (Gn = t), (ar = n), Gn.attachEvent("onpropertychange", pc))
    : e === "focusout" && Eu();
}
function zp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bl(ar);
}
function Dp(e, t) {
  if (e === "click") return Bl(t);
}
function Fp(e, t) {
  if (e === "input" || e === "change") return Bl(t);
}
function Mp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ge = typeof Object.is == "function" ? Object.is : Mp;
function cr(e, t) {
  if (Ge(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Fi.call(t, l) || !Ge(e[l], t[l])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = xu(e);
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
    n = xu(n);
  }
}
function mc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hc() {
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
function Zo(e) {
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
function Ip(e) {
  var t = hc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zo(n)) {
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = _u(n, i));
        var o = _u(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var Ap = dt && "documentMode" in document && 11 >= document.documentMode,
  on = null,
  bi = null,
  Zn = null,
  eo = !1;
function Cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eo ||
    on == null ||
    on !== cl(r) ||
    ((r = on),
    "selectionStart" in r && Zo(r)
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
    (Zn && cr(Zn, r)) ||
      ((Zn = r),
      (r = gl(bi, "onSelect")),
      0 < r.length &&
        ((t = new Xo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd"),
  },
  pi = {},
  yc = {};
dt &&
  ((yc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function jl(e) {
  if (pi[e]) return pi[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yc) return (pi[e] = t[n]);
  return e;
}
var gc = jl("animationend"),
  vc = jl("animationiteration"),
  wc = jl("animationstart"),
  Sc = jl("transitionend"),
  kc = new Map(),
  Nu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function At(e, t) {
  kc.set(e, t), qt(t, [e]);
}
for (var mi = 0; mi < Nu.length; mi++) {
  var hi = Nu[mi],
    Bp = hi.toLowerCase(),
    jp = hi[0].toUpperCase() + hi.slice(1);
  At(Bp, "on" + jp);
}
At(gc, "onAnimationEnd");
At(vc, "onAnimationIteration");
At(wc, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(Sc, "onTransitionEnd");
kn("onMouseEnter", ["mouseout", "mouseover"]);
kn("onMouseLeave", ["mouseout", "mouseover"]);
kn("onPointerEnter", ["pointerout", "pointerover"]);
kn("onPointerLeave", ["pointerout", "pointerover"]);
qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Up = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function Pu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Bd(r, t, void 0, e), (e.currentTarget = null);
}
function Ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          Pu(l, s, a), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          Pu(l, s, a), (i = u);
        }
    }
  }
  if (dl) throw ((e = Ji), (dl = !1), (Ji = null), e);
}
function J(e, t) {
  var n = t[io];
  n === void 0 && (n = t[io] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xc(t, e, 2, !1), n.add(r));
}
function yi(e, t, n) {
  var r = 0;
  t && (r |= 4), xc(n, e, r, t);
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Br]) {
    (e[Br] = !0),
      La.forEach(function (n) {
        n !== "selectionchange" && (Up.has(n) || yi(n, !1, e), yi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || ((t[Br] = !0), yi("selectionchange", !1, t));
  }
}
function xc(e, t, n, r) {
  switch (oc(t)) {
    case 1:
      var l = ep;
      break;
    case 4:
      l = tp;
      break;
    default:
      l = Ko;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Xi ||
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
function gi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Ht(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ka(function () {
    var a = i,
      d = Ho(n),
      h = [];
    e: {
      var g = kc.get(e);
      if (g !== void 0) {
        var E = Xo,
          w = e;
        switch (e) {
          case "keypress":
            if (Zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = yp;
            break;
          case "focusin":
            (w = "focus"), (E = ci);
            break;
          case "focusout":
            (w = "blur"), (E = ci);
            break;
          case "beforeblur":
          case "afterblur":
            E = ci;
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
            E = hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = lp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = wp;
            break;
          case gc:
          case vc:
          case wc:
            E = sp;
            break;
          case Sc:
            E = kp;
            break;
          case "scroll":
            E = np;
            break;
          case "wheel":
            E = xp;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = ap;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = gu;
        }
        var S = (t & 4) !== 0,
          D = !S && e === "scroll",
          f = S ? (g !== null ? g + "Capture" : null) : g;
        S = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var m = p.stateNode;
          if (
            (p.tag === 5 &&
              m !== null &&
              ((p = m),
              f !== null && ((m = ir(c, f)), m != null && S.push(dr(c, m, p)))),
            D)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((g = new E(g, w, null, n, d)), h.push({ event: g, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Ki &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ht(w) || w[pt]))
        )
          break e;
        if (
          (E || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          E
            ? ((w = n.relatedTarget || n.toElement),
              (E = a),
              (w = w ? Ht(w) : null),
              w !== null &&
                ((D = bt(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((E = null), (w = a)),
          E !== w)
        ) {
          if (
            ((S = hu),
            (m = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = gu),
              (m = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (D = E == null ? g : un(E)),
            (p = w == null ? g : un(w)),
            (g = new S(m, c + "leave", E, n, d)),
            (g.target = D),
            (g.relatedTarget = p),
            (m = null),
            Ht(d) === a &&
              ((S = new S(f, c + "enter", w, n, d)),
              (S.target = p),
              (S.relatedTarget = D),
              (m = S)),
            (D = m),
            E && w)
          )
            t: {
              for (S = E, f = w, c = 0, p = S; p; p = tn(p)) c++;
              for (p = 0, m = f; m; m = tn(m)) p++;
              for (; 0 < c - p; ) (S = tn(S)), c--;
              for (; 0 < p - c; ) (f = tn(f)), p--;
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = tn(S)), (f = tn(f));
              }
              S = null;
            }
          else S = null;
          E !== null && Tu(h, g, E, S, !1),
            w !== null && D !== null && Tu(h, D, w, S, !0);
        }
      }
      e: {
        if (
          ((g = a ? un(a) : window),
          (E = g.nodeName && g.nodeName.toLowerCase()),
          E === "select" || (E === "input" && g.type === "file"))
        )
          var N = Lp;
        else if (Su(g))
          if (dc) N = Fp;
          else {
            N = zp;
            var R = Op;
          }
        else
          (E = g.nodeName) &&
            E.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (N = Dp);
        if (N && (N = N(e, a))) {
          fc(h, N, n, d);
          break e;
        }
        R && R(e, g, a),
          e === "focusout" &&
            (R = g._wrapperState) &&
            R.controlled &&
            g.type === "number" &&
            $i(g, "number", g.value);
      }
      switch (((R = a ? un(a) : window), e)) {
        case "focusin":
          (Su(R) || R.contentEditable === "true") &&
            ((on = R), (bi = a), (Zn = null));
          break;
        case "focusout":
          Zn = bi = on = null;
          break;
        case "mousedown":
          eo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (eo = !1), Cu(h, n, d);
          break;
        case "selectionchange":
          if (Ap) break;
        case "keydown":
        case "keyup":
          Cu(h, n, d);
      }
      var P;
      if (Go)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        ln
          ? ac(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (uc &&
          n.locale !== "ko" &&
          (ln || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && ln && (P = sc())
            : ((_t = d),
              (Yo = "value" in _t ? _t.value : _t.textContent),
              (ln = !0))),
        (R = gl(a, L)),
        0 < R.length &&
          ((L = new yu(L, e, null, n, d)),
          h.push({ event: L, listeners: R }),
          P ? (L.data = P) : ((P = cc(n)), P !== null && (L.data = P)))),
        (P = Cp ? Np(e, n) : Pp(e, n)) &&
          ((a = gl(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new yu("onBeforeInput", "beforeinput", null, n, d)),
            h.push({ event: d, listeners: a }),
            (d.data = P)));
    }
    Ec(h, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = ir(e, n)),
      i != null && r.unshift(dr(e, i, l)),
      (i = ir(e, t)),
      i != null && r.push(dr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      l
        ? ((u = ir(n, i)), u != null && o.unshift(dr(n, u, s)))
        : l || ((u = ir(n, i)), u != null && o.push(dr(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var $p = /\r\n?/g,
  Hp = /\u0000|\uFFFD/g;
function Ru(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $p,
      `
`
    )
    .replace(Hp, "");
}
function jr(e, t, n) {
  if (((t = Ru(t)), Ru(e) !== t && n)) throw Error(C(425));
}
function vl() {}
var to = null,
  no = null;
function ro(e, t) {
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
var lo = typeof setTimeout == "function" ? setTimeout : void 0,
  Wp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lu = typeof Promise == "function" ? Promise : void 0,
  Vp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lu < "u"
      ? function (e) {
          return Lu.resolve(null).then(e).catch(Qp);
        }
      : lo;
function Qp(e) {
  setTimeout(function () {
    throw e;
  });
}
function vi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ur(t);
}
function Rt(e) {
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
function Ou(e) {
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
var On = Math.random().toString(36).slice(2),
  tt = "__reactFiber$" + On,
  pr = "__reactProps$" + On,
  pt = "__reactContainer$" + On,
  io = "__reactEvents$" + On,
  Kp = "__reactListeners$" + On,
  Yp = "__reactHandles$" + On;
function Ht(e) {
  var t = e[tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[pt] || n[tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[tt])) return n;
          e = Ou(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cr(e) {
  return (
    (e = e[tt] || e[pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ul(e) {
  return e[pr] || null;
}
var oo = [],
  an = -1;
function Bt(e) {
  return { current: e };
}
function G(e) {
  0 > an || ((e.current = oo[an]), (oo[an] = null), an--);
}
function Y(e, t) {
  an++, (oo[an] = e.current), (e.current = t);
}
var Mt = {},
  Se = Bt(Mt),
  Te = Bt(!1),
  Yt = Mt;
function En(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function wl() {
  G(Te), G(Se);
}
function zu(e, t, n) {
  if (Se.current !== Mt) throw Error(C(168));
  Y(Se, t), Y(Te, n);
}
function _c(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, Od(e) || "Unknown", l));
  return te({}, n, r);
}
function Sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (Yt = Se.current),
    Y(Se, e),
    Y(Te, Te.current),
    !0
  );
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = _c(e, t, Yt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Te),
      G(Se),
      Y(Se, e))
    : G(Te),
    Y(Te, n);
}
var st = null,
  $l = !1,
  wi = !1;
function Cc(e) {
  st === null ? (st = [e]) : st.push(e);
}
function Xp(e) {
  ($l = !0), Cc(e);
}
function jt() {
  if (!wi && st !== null) {
    wi = !0;
    var e = 0,
      t = Q;
    try {
      var n = st;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), ($l = !1);
    } catch (l) {
      throw (st !== null && (st = st.slice(e + 1)), Ga(Wo, jt), l);
    } finally {
      (Q = t), (wi = !1);
    }
  }
  return null;
}
var cn = [],
  fn = 0,
  kl = null,
  El = 0,
  Be = [],
  je = 0,
  Xt = null,
  ut = 1,
  at = "";
function Ut(e, t) {
  (cn[fn++] = El), (cn[fn++] = kl), (kl = e), (El = t);
}
function Nc(e, t, n) {
  (Be[je++] = ut), (Be[je++] = at), (Be[je++] = Xt), (Xt = e);
  var r = ut;
  e = at;
  var l = 32 - Xe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Xe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (ut = (1 << (32 - Xe(t) + l)) | (n << l) | r),
      (at = i + e);
  } else (ut = (1 << i) | (n << l) | r), (at = e);
}
function qo(e) {
  e.return !== null && (Ut(e, 1), Nc(e, 1, 0));
}
function bo(e) {
  for (; e === kl; )
    (kl = cn[--fn]), (cn[fn] = null), (El = cn[--fn]), (cn[fn] = null);
  for (; e === Xt; )
    (Xt = Be[--je]),
      (Be[je] = null),
      (at = Be[--je]),
      (Be[je] = null),
      (ut = Be[--je]),
      (Be[je] = null);
}
var Fe = null,
  De = null,
  q = !1,
  Ye = null;
function Pc(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (De = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: ut, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function so(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uo(e) {
  if (q) {
    var t = De;
    if (t) {
      var n = t;
      if (!Fu(e, t)) {
        if (so(e)) throw Error(C(418));
        t = Rt(n.nextSibling);
        var r = Fe;
        t && Fu(e, t)
          ? Pc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (Fe = e));
      }
    } else {
      if (so(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (Fe = e);
    }
  }
}
function Mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Ur(e) {
  if (e !== Fe) return !1;
  if (!q) return Mu(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ro(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (so(e)) throw (Tc(), Error(C(418)));
    for (; t; ) Pc(e, t), (t = Rt(t.nextSibling));
  }
  if ((Mu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Fe ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Tc() {
  for (var e = De; e; ) e = Rt(e.nextSibling);
}
function xn() {
  (De = Fe = null), (q = !1);
}
function es(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Jp = yt.ReactCurrentBatchConfig;
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xl = Bt(null),
  _l = null,
  dn = null,
  ts = null;
function ns() {
  ts = dn = _l = null;
}
function rs(e) {
  var t = xl.current;
  G(xl), (e._currentValue = t);
}
function ao(e, t, n) {
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
function wn(e, t) {
  (_l = e),
    (ts = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (ts !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (_l === null) throw Error(C(308));
      (dn = e), (_l.dependencies = { lanes: 0, firstContext: e });
    } else dn = dn.next = e;
  return t;
}
var Wt = null;
function ls(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function Rc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ls(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    mt(e, r)
  );
}
function mt(e, t) {
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
var kt = !1;
function is(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lc(e, t) {
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
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      mt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ls(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    mt(e, n)
  );
}
function qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
  kt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), o === null ? (i = a) : (o.next = a), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== o &&
        (s === null ? (d.firstBaseUpdate = a) : (s.next = a),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (d = a = u = null), (s = i);
    do {
      var g = s.lane,
        E = s.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: E,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((g = t), (E = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                h = w.call(E, h, g);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (g = typeof w == "function" ? w.call(E, h, g) : w),
                g == null)
              )
                break e;
              h = te({}, h, g);
              break e;
            case 2:
              kt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [s]) : g.push(s));
      } else
        (E = {
          eventTime: E,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = E), (u = h)) : (d = d.next = E),
          (o |= g);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (g = s),
          (s = g.next),
          (g.next = null),
          (l.lastBaseUpdate = g),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Gt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var Oc = new Ra.Component().refs;
function co(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      l = zt(e),
      i = ct(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Lt(e, i, l)),
      t !== null && (Je(t, e, l, r), qr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      l = zt(e),
      i = ct(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Lt(e, i, l)),
      t !== null && (Je(t, e, l, r), qr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = zt(e),
      l = ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Lt(e, l, r)),
      t !== null && (Je(t, e, r, n), qr(t, e, r));
  },
};
function Bu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(l, i)
      : !0
  );
}
function zc(e, t, n) {
  var r = !1,
    l = Mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = He(i))
      : ((l = Re(t) ? Yt : Se.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? En(e, l) : Mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
}
function fo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Oc), is(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = He(i))
    : ((i = Re(t) ? Yt : Se.current), (l.context = En(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (co(e, t, i, n), (l.state = e.memoizedState)),
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
function Bn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var s = l.refs;
            s === Oc && (s = l.refs = {}),
              o === null ? delete s[i] : (s[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function $r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Dc(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
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
    return (f = Dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, m) {
    return c === null || c.tag !== 6
      ? ((c = Ni(p, f.mode, m)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function u(f, c, p, m) {
    var N = p.type;
    return N === rn
      ? d(f, c, p.props.children, m, p.key)
      : c !== null &&
        (c.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === St &&
            Uu(N) === c.type))
      ? ((m = l(c, p.props)), (m.ref = Bn(f, c, p)), (m.return = f), m)
      : ((m = ll(p.type, p.key, p.props, null, f.mode, m)),
        (m.ref = Bn(f, c, p)),
        (m.return = f),
        m);
  }
  function a(f, c, p, m) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Pi(p, f.mode, m)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function d(f, c, p, m, N) {
    return c === null || c.tag !== 7
      ? ((c = Kt(p, f.mode, m, N)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ni("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return (
            (p = ll(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Bn(f, null, c)),
            (p.return = f),
            p
          );
        case nn:
          return (c = Pi(c, f.mode, p)), (c.return = f), c;
        case St:
          var m = c._init;
          return h(f, m(c._payload), p);
      }
      if (Vn(c) || Dn(c))
        return (c = Kt(c, f.mode, p, null)), (c.return = f), c;
      $r(f, c);
    }
    return null;
  }
  function g(f, c, p, m) {
    var N = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : s(f, c, "" + p, m);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Lr:
          return p.key === N ? u(f, c, p, m) : null;
        case nn:
          return p.key === N ? a(f, c, p, m) : null;
        case St:
          return (N = p._init), g(f, c, N(p._payload), m);
      }
      if (Vn(p) || Dn(p)) return N !== null ? null : d(f, c, p, m, null);
      $r(f, p);
    }
    return null;
  }
  function E(f, c, p, m, N) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (f = f.get(p) || null), s(c, f, "" + m, N);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Lr:
          return (f = f.get(m.key === null ? p : m.key) || null), u(c, f, m, N);
        case nn:
          return (f = f.get(m.key === null ? p : m.key) || null), a(c, f, m, N);
        case St:
          var R = m._init;
          return E(f, c, p, R(m._payload), N);
      }
      if (Vn(m) || Dn(m)) return (f = f.get(p) || null), d(c, f, m, N, null);
      $r(c, m);
    }
    return null;
  }
  function w(f, c, p, m) {
    for (
      var N = null, R = null, P = c, L = (c = 0), B = null;
      P !== null && L < p.length;
      L++
    ) {
      P.index > L ? ((B = P), (P = null)) : (B = P.sibling);
      var k = g(f, P, p[L], m);
      if (k === null) {
        P === null && (P = B);
        break;
      }
      e && P && k.alternate === null && t(f, P),
        (c = i(k, c, L)),
        R === null ? (N = k) : (R.sibling = k),
        (R = k),
        (P = B);
    }
    if (L === p.length) return n(f, P), q && Ut(f, L), N;
    if (P === null) {
      for (; L < p.length; L++)
        (P = h(f, p[L], m)),
          P !== null &&
            ((c = i(P, c, L)), R === null ? (N = P) : (R.sibling = P), (R = P));
      return q && Ut(f, L), N;
    }
    for (P = r(f, P); L < p.length; L++)
      (B = E(P, f, L, p[L], m)),
        B !== null &&
          (e && B.alternate !== null && P.delete(B.key === null ? L : B.key),
          (c = i(B, c, L)),
          R === null ? (N = B) : (R.sibling = B),
          (R = B));
    return (
      e &&
        P.forEach(function (W) {
          return t(f, W);
        }),
      q && Ut(f, L),
      N
    );
  }
  function S(f, c, p, m) {
    var N = Dn(p);
    if (typeof N != "function") throw Error(C(150));
    if (((p = N.call(p)), p == null)) throw Error(C(151));
    for (
      var R = (N = null), P = c, L = (c = 0), B = null, k = p.next();
      P !== null && !k.done;
      L++, k = p.next()
    ) {
      P.index > L ? ((B = P), (P = null)) : (B = P.sibling);
      var W = g(f, P, k.value, m);
      if (W === null) {
        P === null && (P = B);
        break;
      }
      e && P && W.alternate === null && t(f, P),
        (c = i(W, c, L)),
        R === null ? (N = W) : (R.sibling = W),
        (R = W),
        (P = B);
    }
    if (k.done) return n(f, P), q && Ut(f, L), N;
    if (P === null) {
      for (; !k.done; L++, k = p.next())
        (k = h(f, k.value, m)),
          k !== null &&
            ((c = i(k, c, L)), R === null ? (N = k) : (R.sibling = k), (R = k));
      return q && Ut(f, L), N;
    }
    for (P = r(f, P); !k.done; L++, k = p.next())
      (k = E(P, f, L, k.value, m)),
        k !== null &&
          (e && k.alternate !== null && P.delete(k.key === null ? L : k.key),
          (c = i(k, c, L)),
          R === null ? (N = k) : (R.sibling = k),
          (R = k));
    return (
      e &&
        P.forEach(function (Z) {
          return t(f, Z);
        }),
      q && Ut(f, L),
      N
    );
  }
  function D(f, c, p, m) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === rn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Lr:
          e: {
            for (var N = p.key, R = c; R !== null; ) {
              if (R.key === N) {
                if (((N = p.type), N === rn)) {
                  if (R.tag === 7) {
                    n(f, R.sibling),
                      (c = l(R, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  R.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === St &&
                    Uu(N) === R.type)
                ) {
                  n(f, R.sibling),
                    (c = l(R, p.props)),
                    (c.ref = Bn(f, R, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, R);
                break;
              } else t(f, R);
              R = R.sibling;
            }
            p.type === rn
              ? ((c = Kt(p.props.children, f.mode, m, p.key)),
                (c.return = f),
                (f = c))
              : ((m = ll(p.type, p.key, p.props, null, f.mode, m)),
                (m.ref = Bn(f, c, p)),
                (m.return = f),
                (f = m));
          }
          return o(f);
        case nn:
          e: {
            for (R = p.key; c !== null; ) {
              if (c.key === R)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
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
            (c = Pi(p, f.mode, m)), (c.return = f), (f = c);
          }
          return o(f);
        case St:
          return (R = p._init), D(f, c, R(p._payload), m);
      }
      if (Vn(p)) return w(f, c, p, m);
      if (Dn(p)) return S(f, c, p, m);
      $r(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Ni(p, f.mode, m)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return D;
}
var _n = Dc(!0),
  Fc = Dc(!1),
  Nr = {},
  lt = Bt(Nr),
  mr = Bt(Nr),
  hr = Bt(Nr);
function Vt(e) {
  if (e === Nr) throw Error(C(174));
  return e;
}
function os(e, t) {
  switch ((Y(hr, t), Y(mr, e), Y(lt, Nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wi(t, e));
  }
  G(lt), Y(lt, t);
}
function Cn() {
  G(lt), G(mr), G(hr);
}
function Mc(e) {
  Vt(hr.current);
  var t = Vt(lt.current),
    n = Wi(t, e.type);
  t !== n && (Y(mr, e), Y(lt, n));
}
function ss(e) {
  mr.current === e && (G(lt), G(mr));
}
var b = Bt(0);
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
var Si = [];
function us() {
  for (var e = 0; e < Si.length; e++)
    Si[e]._workInProgressVersionPrimary = null;
  Si.length = 0;
}
var br = yt.ReactCurrentDispatcher,
  ki = yt.ReactCurrentBatchConfig,
  Jt = 0,
  ee = null,
  ue = null,
  fe = null,
  Pl = !1,
  qn = !1,
  yr = 0,
  Gp = 0;
function ge() {
  throw Error(C(321));
}
function as(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ge(e[n], t[n])) return !1;
  return !0;
}
function cs(e, t, n, r, l, i) {
  if (
    ((Jt = i),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (br.current = e === null || e.memoizedState === null ? em : tm),
    (e = n(r, l)),
    qn)
  ) {
    i = 0;
    do {
      if (((qn = !1), (yr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (fe = ue = null),
        (t.updateQueue = null),
        (br.current = nm),
        (e = n(r, l));
    } while (qn);
  }
  if (
    ((br.current = Tl),
    (t = ue !== null && ue.next !== null),
    (Jt = 0),
    (fe = ue = ee = null),
    (Pl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function fs() {
  var e = yr !== 0;
  return (yr = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function We() {
  if (ue === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = fe === null ? ee.memoizedState : fe.next;
  if (t !== null) (fe = t), (ue = e);
  else {
    if (e === null) throw Error(C(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ei(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ue,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      a = i;
    do {
      var d = a.lane;
      if ((Jt & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (o = r)) : (u = u.next = h),
          (ee.lanes |= d),
          (Gt |= d);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (o = r) : (u.next = s),
      Ge(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ee.lanes |= i), (Gt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xi(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ge(i, t.memoizedState) || (Pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ic() {}
function Ac(e, t) {
  var n = ee,
    r = We(),
    l = t(),
    i = !Ge(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Pe = !0)),
    (r = r.queue),
    ds(Uc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vr(9, jc.bind(null, n, r, l, t), void 0, null),
      de === null)
    )
      throw Error(C(349));
    Jt & 30 || Bc(n, t, l);
  }
  return l;
}
function Bc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function jc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $c(t) && Hc(e);
}
function Uc(e, t, n) {
  return n(function () {
    $c(t) && Hc(e);
  });
}
function $c(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ge(e, n);
  } catch {
    return !0;
  }
}
function Hc(e) {
  var t = mt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function $u(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bp.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function vr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wc() {
  return We().memoizedState;
}
function el(e, t, n, r) {
  var l = et();
  (ee.flags |= e),
    (l.memoizedState = vr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wl(e, t, n, r) {
  var l = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (((i = o.destroy), r !== null && as(r, o.deps))) {
      l.memoizedState = vr(t, n, i, r);
      return;
    }
  }
  (ee.flags |= e), (l.memoizedState = vr(1 | t, n, i, r));
}
function Hu(e, t) {
  return el(8390656, 8, e, t);
}
function ds(e, t) {
  return Wl(2048, 8, e, t);
}
function Vc(e, t) {
  return Wl(4, 2, e, t);
}
function Qc(e, t) {
  return Wl(4, 4, e, t);
}
function Kc(e, t) {
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
function Yc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wl(4, 4, Kc.bind(null, t, e), n)
  );
}
function ps() {}
function Xc(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && as(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jc(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && as(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gc(e, t, n) {
  return Jt & 21
    ? (Ge(n, t) || ((n = ba()), (ee.lanes |= n), (Gt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Zp(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ki.transition;
  ki.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (ki.transition = r);
  }
}
function Zc() {
  return We().memoizedState;
}
function qp(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qc(e))
  )
    bc(t, n);
  else if (((n = Rc(e, t, n, r)), n !== null)) {
    var l = Ee();
    Je(n, e, r, l), ef(n, t, r);
  }
}
function bp(e, t, n) {
  var r = zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qc(e)) bc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ge(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), ls(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rc(e, t, l, r)),
      n !== null && ((l = Ee()), Je(n, e, r, l), ef(n, t, r));
  }
}
function qc(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function bc(e, t) {
  qn = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ef(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vo(e, n);
  }
}
var Tl = {
    readContext: He,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  em = {
    readContext: He,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        el(4194308, 4, Kc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return el(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return el(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
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
        (e = e.dispatch = qp.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: ps,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = Zp.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        l = et();
      if (q) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(C(349));
        Jt & 30 || Bc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Hu(Uc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        vr(9, jc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = de.identifierPrefix;
      if (q) {
        var n = at,
          r = ut;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Gp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tm = {
    readContext: He,
    useCallback: Xc,
    useContext: He,
    useEffect: ds,
    useImperativeHandle: Yc,
    useInsertionEffect: Vc,
    useLayoutEffect: Qc,
    useMemo: Jc,
    useReducer: Ei,
    useRef: Wc,
    useState: function () {
      return Ei(gr);
    },
    useDebugValue: ps,
    useDeferredValue: function (e) {
      var t = We();
      return Gc(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ei(gr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Ac,
    useId: Zc,
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: He,
    useCallback: Xc,
    useContext: He,
    useEffect: ds,
    useImperativeHandle: Yc,
    useInsertionEffect: Vc,
    useLayoutEffect: Qc,
    useMemo: Jc,
    useReducer: xi,
    useRef: Wc,
    useState: function () {
      return xi(gr);
    },
    useDebugValue: ps,
    useDeferredValue: function (e) {
      var t = We();
      return ue === null ? (t.memoizedState = e) : Gc(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = xi(gr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Ic,
    useSyncExternalStore: Ac,
    useId: Zc,
    unstable_isNewReconciler: !1,
  };
function Nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ld(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function _i(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function po(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rm = typeof WeakMap == "function" ? WeakMap : Map;
function tf(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ll || ((Ll = !0), (xo = r)), po(e, t);
    }),
    n
  );
}
function nf(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        po(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        po(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = gm.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
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
function Qu(e, t, n, r, l) {
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
              : ((t = ct(-1, 1)), (t.tag = 2), Lt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lm = yt.ReactCurrentOwner,
  Pe = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Fc(t, null, n, r) : _n(t, e.child, n, r);
}
function Ku(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    wn(t, l),
    (r = cs(e, t, n, r, i, l)),
    (n = fs()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ht(e, t, l))
      : (q && n && qo(t), (t.flags |= 1), ke(e, t, r, l), t.child)
  );
}
function Yu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ks(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), rf(e, t, i, r, l))
      : ((e = ll(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cr), n(o, r) && e.ref === t.ref)
    )
      return ht(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function rf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (cr(i, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), ht(e, t, l);
  }
  return mo(e, t, n, r, l);
}
function lf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(mn, ze),
        (ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(mn, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(mn, ze),
        (ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(mn, ze),
      (ze |= r);
  return ke(e, t, l, n), t.child;
}
function of(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mo(e, t, n, r, l) {
  var i = Re(n) ? Yt : Se.current;
  return (
    (i = En(t, i)),
    wn(t, l),
    (n = cs(e, t, n, r, i, l)),
    (r = fs()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ht(e, t, l))
      : (q && r && qo(t), (t.flags |= 1), ke(e, t, n, l), t.child)
  );
}
function Xu(e, t, n, r, l) {
  if (Re(n)) {
    var i = !0;
    Sl(t);
  } else i = !1;
  if ((wn(t, l), t.stateNode === null))
    tl(e, t), zc(t, n, r), fo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = He(a))
      : ((a = Re(n) ? Yt : Se.current), (a = En(t, a)));
    var d = n.getDerivedStateFromProps,
      h =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && ju(t, o, r, a)),
      (kt = !1);
    var g = t.memoizedState;
    (o.state = g),
      Cl(t, r, o, l),
      (u = t.memoizedState),
      s !== r || g !== u || Te.current || kt
        ? (typeof d == "function" && (co(t, n, d, r), (u = t.memoizedState)),
          (s = kt || Bu(t, n, s, r, g, u, a))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = a),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Lc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Qe(t.type, s)),
      (o.props = a),
      (h = t.pendingProps),
      (g = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = He(u))
        : ((u = Re(n) ? Yt : Se.current), (u = En(t, u)));
    var E = n.getDerivedStateFromProps;
    (d =
      typeof E == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== h || g !== u) && ju(t, o, r, u)),
      (kt = !1),
      (g = t.memoizedState),
      (o.state = g),
      Cl(t, r, o, l);
    var w = t.memoizedState;
    s !== h || g !== w || Te.current || kt
      ? (typeof E == "function" && (co(t, n, E, r), (w = t.memoizedState)),
        (a = kt || Bu(t, n, a, r, g, w, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ho(e, t, n, r, i, l);
}
function ho(e, t, n, r, l, i) {
  of(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Du(t, n, !1), ht(e, t, i);
  (r = t.stateNode), (lm.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = _n(t, e.child, null, i)), (t.child = _n(t, null, s, i)))
      : ke(e, t, s, i),
    (t.memoizedState = r.state),
    l && Du(t, n, !0),
    t.child
  );
}
function sf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && zu(e, t.context, !1),
    os(e, t.containerInfo);
}
function Ju(e, t, n, r, l) {
  return xn(), es(l), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
function go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function uf(e, t, n) {
  var r = t.pendingProps,
    l = b.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Y(b, l & 1),
    e === null)
  )
    return (
      uo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Kl(o, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = go(n)),
              (t.memoizedState = yo),
              e)
            : ms(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return im(e, t, o, r, s, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Dt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = Dt(s, i)) : ((i = Kt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? go(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = yo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dt(i, { mode: "visible", children: r.children })),
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
function ms(e, t) {
  return (
    (t = Kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hr(e, t, n, r) {
  return (
    r !== null && es(r),
    _n(t, e.child, null, n),
    (e = ms(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function im(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _i(Error(C(422)))), Hr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Kl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Kt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && _n(t, e.child, null, o),
        (t.child.memoizedState = go(o)),
        (t.memoizedState = yo),
        i);
  if (!(t.mode & 1)) return Hr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = _i(i, r, void 0)), Hr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), Pe || s)) {
    if (((r = de), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), mt(e, l), Je(r, e, l, -1));
    }
    return Ss(), (r = _i(Error(C(421)))), Hr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (De = Rt(l.nextSibling)),
      (Fe = t),
      (q = !0),
      (Ye = null),
      e !== null &&
        ((Be[je++] = ut),
        (Be[je++] = at),
        (Be[je++] = Xt),
        (ut = e.id),
        (at = e.overflow),
        (Xt = t)),
      (t = ms(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ao(e.return, t, n);
}
function Ci(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function af(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ke(e, t, r.children, n), (r = b.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gu(e, n, t);
        else if (e.tag === 19) Gu(e, n, t);
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
  if ((Y(b, r), !(t.mode & 1))) t.memoizedState = null;
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
          Ci(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Nl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ci(t, !0, n, null, i);
        break;
      case "together":
        Ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function om(e, t, n) {
  switch (t.tag) {
    case 3:
      sf(t), xn();
      break;
    case 5:
      Mc(t);
      break;
    case 1:
      Re(t.type) && Sl(t);
      break;
    case 4:
      os(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Y(xl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(b, b.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? uf(e, t, n)
          : (Y(b, b.current & 1),
            (e = ht(e, t, n)),
            e !== null ? e.sibling : null);
      Y(b, b.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return af(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Y(b, b.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lf(e, t, n);
  }
  return ht(e, t, n);
}
var cf, vo, ff, df;
cf = function (e, t) {
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
vo = function () {};
ff = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Vt(lt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ji(e, l)), (r = ji(e, r)), (i = []);
        break;
      case "select":
        (l = te({}, l, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Hi(e, l)), (r = Hi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vl);
    }
    Vi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var s = l[a];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (rr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (rr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && J("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
df = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!q)
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
function ve(e) {
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
function sm(e, t, n) {
  var r = t.pendingProps;
  switch ((bo(t), t.tag)) {
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
      return ve(t), null;
    case 1:
      return Re(t.type) && wl(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cn(),
        G(Te),
        G(Se),
        us(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ur(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (No(Ye), (Ye = null)))),
        vo(e, t),
        ve(t),
        null
      );
    case 5:
      ss(t);
      var l = Vt(hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ff(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ve(t), null;
        }
        if (((e = Vt(lt.current)), Ur(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[tt] = t), (r[pr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Kn.length; l++) J(Kn[l], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              iu(r, i), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              su(r, i), J("invalid", r);
          }
          Vi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      jr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : rr.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              Or(r), ou(r, i, !0);
              break;
            case "textarea":
              Or(r), uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = vl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ba(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[tt] = t),
            (e[pr] = r),
            cf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Qi(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kn.length; l++) J(Kn[l], e);
                l = r;
                break;
              case "source":
                J("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (l = r);
                break;
              case "details":
                J("toggle", e), (l = r);
                break;
              case "input":
                iu(e, r), (l = ji(e, r)), J("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = te({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                su(e, r), (l = Hi(e, r)), J("invalid", e);
                break;
              default:
                l = r;
            }
            Vi(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? $a(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && ja(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && lr(e, u)
                    : typeof u == "number" && lr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (rr.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && J("scroll", e)
                      : u != null && Bo(e, i, u, o));
              }
            switch (n) {
              case "input":
                Or(e), ou(e, r, !1);
                break;
              case "textarea":
                Or(e), uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? hn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = vl);
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
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Vt(hr.current)), Vt(lt.current), Ur(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tt] = t),
            (i = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tt] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (G(b),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && De !== null && t.mode & 1 && !(t.flags & 128))
          Tc(), xn(), (t.flags |= 98560), (i = !1);
        else if (((i = Ur(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[tt] = t;
          } else
            xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (i = !1);
        } else Ye !== null && (No(Ye), (Ye = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || b.current & 1 ? ae === 0 && (ae = 3) : Ss())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        Cn(), vo(e, t), e === null && fr(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return rs(t.type._context), ve(t), null;
    case 17:
      return Re(t.type) && wl(), ve(t), null;
    case 19:
      if ((G(b), (i = t.memoizedState), i === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) jn(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Nl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    jn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(b, (b.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ie() > Pn &&
            ((t.flags |= 128), (r = !0), jn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Nl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !q)
            )
              return ve(t), null;
          } else
            2 * ie() - i.renderingStartTime > Pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ie()),
          (t.sibling = null),
          (n = b.current),
          Y(b, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        ws(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function um(e, t) {
  switch ((bo(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && wl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cn(),
        G(Te),
        G(Se),
        us(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ss(t), null;
    case 13:
      if ((G(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(b), null;
    case 4:
      return Cn(), null;
    case 10:
      return rs(t.type._context), null;
    case 22:
    case 23:
      return ws(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  we = !1,
  am = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function wo(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Zu = !1;
function cm(e, t) {
  if (((to = hl), (e = hc()), Zo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            a = 0,
            d = 0,
            h = e,
            g = null;
          t: for (;;) {
            for (
              var E;
              h !== n || (l !== 0 && h.nodeType !== 3) || (s = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (u = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (E = h.firstChild) !== null;

            )
              (g = h), (h = E);
            for (;;) {
              if (h === e) break t;
              if (
                (g === n && ++a === l && (s = o),
                g === i && ++d === r && (u = o),
                (E = h.nextSibling) !== null)
              )
                break;
              (h = g), (g = h.parentNode);
            }
            h = E;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (no = { focusedElem: e, selectionRange: n }, hl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Qe(t.type, S),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (m) {
          re(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (w = Zu), (Zu = !1), w;
}
function bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && wo(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Vl(e, t) {
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
function So(e) {
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
function pf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[pr], delete t[io], delete t[Kp], delete t[Yp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mf(e.return)) return null;
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
function ko(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = vl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ko(e, t, n), e = e.sibling; e !== null; ) ko(e, t, n), (e = e.sibling);
}
function Eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Eo(e, t, n), e = e.sibling; e !== null; ) Eo(e, t, n), (e = e.sibling);
}
var pe = null,
  Ke = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) hf(e, t, n), (n = n.sibling);
}
function hf(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(Il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || pn(n, t);
    case 6:
      var r = pe,
        l = Ke;
      (pe = null),
        vt(e, t, n),
        (pe = r),
        (Ke = l),
        pe !== null &&
          (Ke
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (Ke
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? vi(e.parentNode, n)
              : e.nodeType === 1 && vi(e, n),
            ur(e))
          : vi(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (l = Ke),
        (pe = n.stateNode.containerInfo),
        (Ke = !0),
        vt(e, t, n),
        (pe = r),
        (Ke = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && wo(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          re(n, t, s);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), vt(e, t, n), (we = r))
        : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new am()),
      t.forEach(function (r) {
        var l = wm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ve(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (pe = s.stateNode), (Ke = !1);
              break e;
            case 3:
              (pe = s.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (pe = s.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          s = s.return;
        }
        if (pe === null) throw Error(C(160));
        hf(i, o, l), (pe = null), (Ke = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (a) {
        re(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yf(t, e), (t = t.sibling);
}
function yf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ve(t, e), be(e), r & 4)) {
        try {
          bn(3, e, e.return), Vl(3, e);
        } catch (S) {
          re(e, e.return, S);
        }
        try {
          bn(5, e, e.return);
        } catch (S) {
          re(e, e.return, S);
        }
      }
      break;
    case 1:
      Ve(t, e), be(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (
        (Ve(t, e),
        be(e),
        r & 512 && n !== null && pn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          lr(l, "");
        } catch (S) {
          re(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Ia(l, i),
              Qi(s, o);
            var a = Qi(s, i);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                h = u[o + 1];
              d === "style"
                ? $a(l, h)
                : d === "dangerouslySetInnerHTML"
                ? ja(l, h)
                : d === "children"
                ? lr(l, h)
                : Bo(l, d, h, a);
            }
            switch (s) {
              case "input":
                Ui(l, i);
                break;
              case "textarea":
                Aa(l, i);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var E = i.value;
                E != null
                  ? hn(l, !!i.multiple, E, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? hn(l, !!i.multiple, i.defaultValue, !0)
                      : hn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[pr] = i;
          } catch (S) {
            re(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Ve(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          re(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Ve(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (S) {
          re(e, e.return, S);
        }
      break;
    case 4:
      Ve(t, e), be(e);
      break;
    case 13:
      Ve(t, e),
        be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (gs = ie())),
        r & 4 && bu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (a = we) || d), Ve(t, e), (we = a)) : Ve(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (z = e, d = e.child; d !== null; ) {
            for (h = z = d; z !== null; ) {
              switch (((g = z), (E = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bn(4, g, g.return);
                  break;
                case 1:
                  pn(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      re(r, n, S);
                    }
                  }
                  break;
                case 5:
                  pn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    ta(h);
                    continue;
                  }
              }
              E !== null ? ((E.return = g), (z = E)) : ta(h);
            }
            d = d.sibling;
          }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Ua("display", o)));
              } catch (S) {
                re(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (d === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (S) {
                re(e, e.return, S);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), (h = h.return);
          }
          d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ve(t, e), be(e), r & 4 && bu(e);
      break;
    case 21:
      break;
    default:
      Ve(t, e), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (lr(l, ""), (r.flags &= -33));
          var i = qu(e);
          Eo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = qu(e);
          ko(e, s, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fm(e, t, n) {
  (z = e), gf(e);
}
function gf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Wr;
      if (!o) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || we;
        s = Wr;
        var a = we;
        if (((Wr = o), (we = u) && !a))
          for (z = l; z !== null; )
            (o = z),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? na(l)
                : u !== null
                ? ((u.return = o), (z = u))
                : na(l);
        for (; i !== null; ) (z = i), gf(i), (i = i.sibling);
        (z = l), (Wr = s), (we = a);
      }
      ea(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : ea(e);
  }
}
function ea(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Au(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Au(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                  var d = a.memoizedState;
                  if (d !== null) {
                    var h = d.dehydrated;
                    h !== null && ur(h);
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
              throw Error(C(163));
          }
        we || (t.flags & 512 && So(t));
      } catch (g) {
        re(t, t.return, g);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function ta(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function na(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, l, u);
            }
          }
          var i = t.return;
          try {
            So(t);
          } catch (u) {
            re(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            So(t);
          } catch (u) {
            re(t, o, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (z = s);
      break;
    }
    z = t.return;
  }
}
var dm = Math.ceil,
  Rl = yt.ReactCurrentDispatcher,
  hs = yt.ReactCurrentOwner,
  $e = yt.ReactCurrentBatchConfig,
  H = 0,
  de = null,
  se = null,
  me = 0,
  ze = 0,
  mn = Bt(0),
  ae = 0,
  wr = null,
  Gt = 0,
  Ql = 0,
  ys = 0,
  er = null,
  Ce = null,
  gs = 0,
  Pn = 1 / 0,
  ot = null,
  Ll = !1,
  xo = null,
  Ot = null,
  Vr = !1,
  Ct = null,
  Ol = 0,
  tr = 0,
  _o = null,
  nl = -1,
  rl = 0;
function Ee() {
  return H & 6 ? ie() : nl !== -1 ? nl : (nl = ie());
}
function zt(e) {
  return e.mode & 1
    ? H & 2 && me !== 0
      ? me & -me
      : Jp.transition !== null
      ? (rl === 0 && (rl = ba()), rl)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oc(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < tr) throw ((tr = 0), (_o = null), Error(C(185)));
  xr(e, n, r),
    (!(H & 2) || e !== de) &&
      (e === de && (!(H & 2) && (Ql |= n), ae === 4 && xt(e, me)),
      Le(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((Pn = ie() + 500), $l && jt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Jd(e, t);
  var r = ml(e, e === de ? me : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? Xp(ra.bind(null, e)) : Cc(ra.bind(null, e)),
        Vp(function () {
          !(H & 6) && jt();
        }),
        (n = null);
    else {
      switch (ec(r)) {
        case 1:
          n = Wo;
          break;
        case 4:
          n = Za;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = qa;
          break;
        default:
          n = pl;
      }
      n = Cf(n, vf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vf(e, t) {
  if (((nl = -1), (rl = 0), H & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n) return null;
  var r = ml(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var i = Sf();
    (de !== e || me !== t) && ((ot = null), (Pn = ie() + 500), Qt(e, t));
    do
      try {
        hm();
        break;
      } catch (s) {
        wf(e, s);
      }
    while (1);
    ns(),
      (Rl.current = i),
      (H = l),
      se !== null ? (t = 0) : ((de = null), (me = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Gi(e)), l !== 0 && ((r = l), (t = Co(e, l)))), t === 1)
    )
      throw ((n = wr), Qt(e, 0), xt(e, r), Le(e, ie()), n);
    if (t === 6) xt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !pm(l) &&
          ((t = zl(e, r)),
          t === 2 && ((i = Gi(e)), i !== 0 && ((r = i), (t = Co(e, i)))),
          t === 1))
      )
        throw ((n = wr), Qt(e, 0), xt(e, r), Le(e, ie()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          $t(e, Ce, ot);
          break;
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = gs + 500 - ie()), 10 < t))
          ) {
            if (ml(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = lo($t.bind(null, e, Ce, ot), t);
            break;
          }
          $t(e, Ce, ot);
          break;
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Xe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ie() - r),
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
                : 1960 * dm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = lo($t.bind(null, e, Ce, ot), r);
            break;
          }
          $t(e, Ce, ot);
          break;
        case 5:
          $t(e, Ce, ot);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Le(e, ie()), e.callbackNode === n ? vf.bind(null, e) : null;
}
function Co(e, t) {
  var n = er;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = zl(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && No(t)),
    e
  );
}
function No(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ge(i(), l)) return !1;
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
function xt(e, t) {
  for (
    t &= ~ys,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ra(e) {
  if (H & 6) throw Error(C(327));
  Sn();
  var t = ml(e, 0);
  if (!(t & 1)) return Le(e, ie()), null;
  var n = zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gi(e);
    r !== 0 && ((t = r), (n = Co(e, r)));
  }
  if (n === 1) throw ((n = wr), Qt(e, 0), xt(e, t), Le(e, ie()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $t(e, Ce, ot),
    Le(e, ie()),
    null
  );
}
function vs(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((Pn = ie() + 500), $l && jt());
  }
}
function Zt(e) {
  Ct !== null && Ct.tag === 0 && !(H & 6) && Sn();
  var t = H;
  H |= 1;
  var n = $e.transition,
    r = Q;
  try {
    if ((($e.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), ($e.transition = n), (H = t), !(H & 6) && jt();
  }
}
function ws() {
  (ze = mn.current), G(mn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wp(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((bo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wl();
          break;
        case 3:
          Cn(), G(Te), G(Se), us();
          break;
        case 5:
          ss(r);
          break;
        case 4:
          Cn();
          break;
        case 13:
          G(b);
          break;
        case 19:
          G(b);
          break;
        case 10:
          rs(r.type._context);
          break;
        case 22:
        case 23:
          ws();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (se = e = Dt(e.current, null)),
    (me = ze = t),
    (ae = 0),
    (wr = null),
    (ys = Ql = Gt = 0),
    (Ce = er = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function wf(e, t) {
  do {
    var n = se;
    try {
      if ((ns(), (br.current = Tl), Pl)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((Jt = 0),
        (fe = ue = ee = null),
        (qn = !1),
        (yr = 0),
        (hs.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (wr = t), (se = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = me),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            d = s,
            h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var E = Vu(o);
          if (E !== null) {
            (E.flags &= -257),
              Qu(E, o, s, i, t),
              E.mode & 1 && Wu(i, a, t),
              (t = E),
              (u = a);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Wu(i, a, t), Ss();
              break e;
            }
            u = Error(C(426));
          }
        } else if (q && s.mode & 1) {
          var D = Vu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Qu(D, o, s, i, t),
              es(Nn(u, s));
            break e;
          }
        }
        (i = u = Nn(u, s)),
          ae !== 4 && (ae = 2),
          er === null ? (er = [i]) : er.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = tf(i, u, t);
              Iu(i, f);
              break e;
            case 1:
              s = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var m = nf(i, s, t);
                Iu(i, m);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ef(n);
    } catch (N) {
      (t = N), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Sf() {
  var e = Rl.current;
  return (Rl.current = Tl), e === null ? Tl : e;
}
function Ss() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    de === null || (!(Gt & 268435455) && !(Ql & 268435455)) || xt(de, me);
}
function zl(e, t) {
  var n = H;
  H |= 2;
  var r = Sf();
  (de !== e || me !== t) && ((ot = null), Qt(e, t));
  do
    try {
      mm();
      break;
    } catch (l) {
      wf(e, l);
    }
  while (1);
  if ((ns(), (H = n), (Rl.current = r), se !== null)) throw Error(C(261));
  return (de = null), (me = 0), ae;
}
function mm() {
  for (; se !== null; ) kf(se);
}
function hm() {
  for (; se !== null && !Ud(); ) kf(se);
}
function kf(e) {
  var t = _f(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ef(e) : (se = t),
    (hs.current = null);
}
function Ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = um(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (se = null);
        return;
      }
    } else if (((n = sm(n, t, ze)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function $t(e, t, n) {
  var r = Q,
    l = $e.transition;
  try {
    ($e.transition = null), (Q = 1), ym(e, t, n, r);
  } finally {
    ($e.transition = l), (Q = r);
  }
  return null;
}
function ym(e, t, n, r) {
  do Sn();
  while (Ct !== null);
  if (H & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Gd(e, i),
    e === de && ((se = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vr ||
      ((Vr = !0),
      Cf(pl, function () {
        return Sn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = $e.transition), ($e.transition = null);
    var o = Q;
    Q = 1;
    var s = H;
    (H |= 4),
      (hs.current = null),
      cm(e, n),
      yf(n, e),
      Ip(no),
      (hl = !!to),
      (no = to = null),
      (e.current = n),
      fm(n),
      $d(),
      (H = s),
      (Q = o),
      ($e.transition = i);
  } else e.current = n;
  if (
    (Vr && ((Vr = !1), (Ct = e), (Ol = l)),
    (i = e.pendingLanes),
    i === 0 && (Ot = null),
    Vd(n.stateNode),
    Le(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ll) throw ((Ll = !1), (e = xo), (xo = null), e);
  return (
    Ol & 1 && e.tag !== 0 && Sn(),
    (i = e.pendingLanes),
    i & 1 ? (e === _o ? tr++ : ((tr = 0), (_o = e))) : (tr = 0),
    jt(),
    null
  );
}
function Sn() {
  if (Ct !== null) {
    var e = ec(Ol),
      t = $e.transition,
      n = Q;
    try {
      if ((($e.transition = null), (Q = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), (Ol = 0), H & 6)) throw Error(C(331));
        var l = H;
        for (H |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (z = a; z !== null; ) {
                  var d = z;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bn(8, d, i);
                  }
                  var h = d.child;
                  if (h !== null) (h.return = d), (z = h);
                  else
                    for (; z !== null; ) {
                      d = z;
                      var g = d.sibling,
                        E = d.return;
                      if ((pf(d), d === a)) {
                        z = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = E), (z = g);
                        break;
                      }
                      z = E;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var D = S.sibling;
                    (S.sibling = null), (S = D);
                  } while (S !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (z = f);
                break e;
              }
              z = i.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          o = z;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (z = p);
          else
            e: for (o = c; z !== null; ) {
              if (((s = z), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, s);
                  }
                } catch (N) {
                  re(s, s.return, N);
                }
              if (s === o) {
                z = null;
                break e;
              }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (z = m);
                break e;
              }
              z = s.return;
            }
        }
        if (
          ((H = l), jt(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(Il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), ($e.transition = t);
    }
  }
  return !1;
}
function la(e, t, n) {
  (t = Nn(n, t)),
    (t = tf(e, t, 1)),
    (e = Lt(e, t, 1)),
    (t = Ee()),
    e !== null && (xr(e, 1, t), Le(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) la(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        la(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          (e = Nn(n, e)),
            (e = nf(t, e, 1)),
            (t = Lt(t, e, 1)),
            (e = Ee()),
            t !== null && (xr(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (ae === 4 || (ae === 3 && (me & 130023424) === me && 500 > ie() - gs)
        ? Qt(e, 0)
        : (ys |= n)),
    Le(e, t);
}
function xf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fr), (Fr <<= 1), !(Fr & 130023424) && (Fr = 4194304))
      : (t = 1));
  var n = Ee();
  (e = mt(e, t)), e !== null && (xr(e, t, n), Le(e, n));
}
function vm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xf(e, n);
}
function wm(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), xf(e, n);
}
var _f;
_f = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), om(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), q && t.flags & 1048576 && Nc(t, El, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      tl(e, t), (e = t.pendingProps);
      var l = En(t, Se.current);
      wn(t, n), (l = cs(null, t, r, e, l, n));
      var i = fs();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((i = !0), Sl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            is(t),
            (l.updater = Hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            fo(t, r, e, n),
            (t = ho(null, t, r, !0, i, n)))
          : ((t.tag = 0), q && i && qo(t), ke(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (tl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = km(r)),
          (e = Qe(r, e)),
          l)
        ) {
          case 0:
            t = mo(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = Yu(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        mo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Xu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((sf(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Lc(e, t),
          Cl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Nn(Error(C(423)), t)), (t = Ju(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Nn(Error(C(424)), t)), (t = Ju(e, t, r, n, l));
            break e;
          } else
            for (
              De = Rt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                q = !0,
                Ye = null,
                n = Fc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((xn(), r === l)) {
            t = ht(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mc(t),
        e === null && uo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        ro(r, l) ? (o = null) : i !== null && ro(r, i) && (t.flags |= 32),
        of(e, t),
        ke(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && uo(t), null;
    case 13:
      return uf(e, t, n);
    case 4:
      return (
        os(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _n(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        Ku(e, t, r, l, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          Y(xl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ge(i.value, o)) {
            if (i.children === l.children && !Te.current) {
              t = ht(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                o = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = ct(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      ao(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  ao(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ke(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        wn(t, n),
        (l = He(l)),
        (r = r(l)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Qe(r, t.pendingProps)),
        (l = Qe(r.type, l)),
        Yu(e, t, r, l, n)
      );
    case 15:
      return rf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Qe(r, l)),
        tl(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), Sl(t)) : (e = !1),
        wn(t, n),
        zc(t, r, l),
        fo(t, r, l, n),
        ho(null, t, r, !0, e, n)
      );
    case 19:
      return af(e, t, n);
    case 22:
      return lf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Cf(e, t) {
  return Ga(e, t);
}
function Sm(e, t, n, r) {
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
function Ue(e, t, n, r) {
  return new Sm(e, t, n, r);
}
function ks(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function km(e) {
  if (typeof e == "function") return ks(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Uo)) return 11;
    if (e === $o) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
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
function ll(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ks(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case rn:
        return Kt(n.children, l, i, t);
      case jo:
        (o = 8), (l |= 8);
        break;
      case Mi:
        return (
          (e = Ue(12, n, t, l | 2)), (e.elementType = Mi), (e.lanes = i), e
        );
      case Ii:
        return (e = Ue(13, n, t, l)), (e.elementType = Ii), (e.lanes = i), e;
      case Ai:
        return (e = Ue(19, n, t, l)), (e.elementType = Ai), (e.lanes = i), e;
      case Da:
        return Kl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Oa:
              o = 10;
              break e;
            case za:
              o = 9;
              break e;
            case Uo:
              o = 11;
              break e;
            case $o:
              o = 14;
              break e;
            case St:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Kt(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Kl(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = Da),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ni(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Pi(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Em(e, t, n, r, l) {
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
    (this.eventTimes = si(0)),
    (this.expirationTimes = si(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = si(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Es(e, t, n, r, l, i, o, s, u) {
  return (
    (e = new Em(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ue(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    is(i),
    e
  );
}
function xm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Nf(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (bt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return _c(e, n, t);
  }
  return t;
}
function Pf(e, t, n, r, l, i, o, s, u) {
  return (
    (e = Es(n, r, !0, e, l, i, o, s, u)),
    (e.context = Nf(null)),
    (n = e.current),
    (r = Ee()),
    (l = zt(n)),
    (i = ct(r, l)),
    (i.callback = t ?? null),
    Lt(n, i, l),
    (e.current.lanes = l),
    xr(e, l, r),
    Le(e, r),
    e
  );
}
function Yl(e, t, n, r) {
  var l = t.current,
    i = Ee(),
    o = zt(l);
  return (
    (n = Nf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ct(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Lt(l, t, o)),
    e !== null && (Je(e, l, o, i), qr(e, l, o)),
    o
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ia(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xs(e, t) {
  ia(e, t), (e = e.alternate) && ia(e, t);
}
function _m() {
  return null;
}
var Tf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _s(e) {
  this._internalRoot = e;
}
Xl.prototype.render = _s.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Yl(e, t, null, null);
};
Xl.prototype.unmount = _s.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zt(function () {
      Yl(null, e, null, null);
    }),
      (t[pt] = null);
  }
};
function Xl(e) {
  this._internalRoot = e;
}
Xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && ic(e);
  }
};
function Cs(e) {
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
function oa() {}
function Cm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = Dl(o);
        i.call(a);
      };
    }
    var o = Pf(t, r, e, 0, null, !1, !1, "", oa);
    return (
      (e._reactRootContainer = o),
      (e[pt] = o.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Zt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Dl(u);
      s.call(a);
    };
  }
  var u = Es(e, 0, !1, null, null, !1, !1, "", oa);
  return (
    (e._reactRootContainer = u),
    (e[pt] = u.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Zt(function () {
      Yl(t, u, n, r);
    }),
    u
  );
}
function Gl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = Dl(o);
        s.call(u);
      };
    }
    Yl(t, o, e, l);
  } else o = Cm(n, t, e, l, r);
  return Dl(o);
}
tc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qn(t.pendingLanes);
        n !== 0 &&
          (Vo(t, n | 1), Le(t, ie()), !(H & 6) && ((Pn = ie() + 500), jt()));
      }
      break;
    case 13:
      Zt(function () {
        var r = mt(e, 1);
        if (r !== null) {
          var l = Ee();
          Je(r, e, 1, l);
        }
      }),
        xs(e, 1);
  }
};
Qo = function (e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      Je(t, e, 134217728, n);
    }
    xs(e, 134217728);
  }
};
nc = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = mt(e, t);
    if (n !== null) {
      var r = Ee();
      Je(n, e, t, r);
    }
    xs(e, t);
  }
};
rc = function () {
  return Q;
};
lc = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
Yi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ui(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            if (!l) throw Error(C(90));
            Ma(r), Ui(r, l);
          }
        }
      }
      break;
    case "textarea":
      Aa(e, n);
      break;
    case "select":
      (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
  }
};
Va = vs;
Qa = Zt;
var Nm = { usingClientEntryPoint: !1, Events: [Cr, un, Ul, Ha, Wa, vs] },
  Un = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pm = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || _m,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qr.isDisabled && Qr.supportsFiber)
    try {
      (Il = Qr.inject(Pm)), (rt = Qr);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nm;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cs(t)) throw Error(C(200));
  return xm(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Cs(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = Tf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Es(e, 1, !1, null, null, n, !1, r, l)),
    (e[pt] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new _s(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Xa(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return Zt(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Jl(t)) throw Error(C(200));
  return Gl(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Cs(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Tf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Pf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[pt] = t.current),
    fr(e),
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
Ie.render = function (e, t, n) {
  if (!Jl(t)) throw Error(C(200));
  return Gl(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Jl(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Zt(function () {
        Gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[pt] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = vs;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Gl(e, t, n, !1, r);
};
Ie.version = "18.2.0-next-9e3b772b8-20220608";
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
  t(), (e.exports = Ie);
})(_d);
const Tm = wa(al);
var sa = al;
(zi.createRoot = sa.createRoot), (zi.hydrateRoot = sa.hydrateRoot);
function Rf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Lf } = Object.prototype,
  { getPrototypeOf: Ns } = Object,
  Ps = ((e) => (t) => {
    const n = Lf.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  gt = (e) => ((e = e.toLowerCase()), (t) => Ps(t) === e),
  Zl = (e) => (t) => typeof t === e,
  { isArray: zn } = Array,
  Sr = Zl("undefined");
function Rm(e) {
  return (
    e !== null &&
    !Sr(e) &&
    e.constructor !== null &&
    !Sr(e.constructor) &&
    It(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Of = gt("ArrayBuffer");
function Lm(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Of(e.buffer)),
    t
  );
}
const Om = Zl("string"),
  It = Zl("function"),
  zf = Zl("number"),
  Ts = (e) => e !== null && typeof e == "object",
  zm = (e) => e === !0 || e === !1,
  il = (e) => {
    if (Ps(e) !== "object") return !1;
    const t = Ns(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Dm = gt("Date"),
  Fm = gt("File"),
  Mm = gt("Blob"),
  Im = gt("FileList"),
  Am = (e) => Ts(e) && It(e.pipe),
  Bm = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        Lf.call(e) === t ||
        (It(e.toString) && e.toString() === t))
    );
  },
  jm = gt("URLSearchParams"),
  Um = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, l;
  if ((typeof e != "object" && (e = [e]), zn(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let s;
    for (r = 0; r < o; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function Df(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
const Ff = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Mf = (e) => !Sr(e) && e !== Ff;
function Po() {
  const { caseless: e } = (Mf(this) && this) || {},
    t = {},
    n = (r, l) => {
      const i = (e && Df(t, l)) || l;
      il(t[i]) && il(r)
        ? (t[i] = Po(t[i], r))
        : il(r)
        ? (t[i] = Po({}, r))
        : zn(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, l = arguments.length; r < l; r++)
    arguments[r] && Pr(arguments[r], n);
  return t;
}
const $m = (e, t, n, { allOwnKeys: r } = {}) => (
    Pr(
      t,
      (l, i) => {
        n && It(l) ? (e[i] = Rf(l, n)) : (e[i] = l);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Hm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Wm = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Vm = (e, t, n, r) => {
    let l, i, o;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), i = l.length; i-- > 0; )
        (o = l[i]), (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
      e = n !== !1 && Ns(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Qm = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Km = (e) => {
    if (!e) return null;
    if (zn(e)) return e;
    let t = e.length;
    if (!zf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ym = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ns(Uint8Array)),
  Xm = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  Jm = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Gm = gt("HTMLFormElement"),
  Zm = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  ua = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  qm = gt("RegExp"),
  If = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Pr(n, (l, i) => {
      t(l, i, e) !== !1 && (r[i] = l);
    }),
      Object.defineProperties(e, r);
  },
  bm = (e) => {
    If(e, (t, n) => {
      if (It(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (It(r)) {
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
  e0 = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((i) => {
          n[i] = !0;
        });
      };
    return zn(e) ? r(e) : r(String(e).split(t)), n;
  },
  t0 = () => {},
  n0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ti = "abcdefghijklmnopqrstuvwxyz",
  aa = "0123456789",
  Af = { DIGIT: aa, ALPHA: Ti, ALPHA_DIGIT: Ti + Ti.toUpperCase() + aa },
  r0 = (e = 16, t = Af.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function l0(e) {
  return !!(
    e &&
    It(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const i0 = (e) => {
    const t = new Array(10),
      n = (r, l) => {
        if (Ts(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[l] = r;
            const i = zn(r) ? [] : {};
            return (
              Pr(r, (o, s) => {
                const u = n(o, l + 1);
                !Sr(u) && (i[s] = u);
              }),
              (t[l] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  _ = {
    isArray: zn,
    isArrayBuffer: Of,
    isBuffer: Rm,
    isFormData: Bm,
    isArrayBufferView: Lm,
    isString: Om,
    isNumber: zf,
    isBoolean: zm,
    isObject: Ts,
    isPlainObject: il,
    isUndefined: Sr,
    isDate: Dm,
    isFile: Fm,
    isBlob: Mm,
    isRegExp: qm,
    isFunction: It,
    isStream: Am,
    isURLSearchParams: jm,
    isTypedArray: Ym,
    isFileList: Im,
    forEach: Pr,
    merge: Po,
    extend: $m,
    trim: Um,
    stripBOM: Hm,
    inherits: Wm,
    toFlatObject: Vm,
    kindOf: Ps,
    kindOfTest: gt,
    endsWith: Qm,
    toArray: Km,
    forEachEntry: Xm,
    matchAll: Jm,
    isHTMLForm: Gm,
    hasOwnProperty: ua,
    hasOwnProp: ua,
    reduceDescriptors: If,
    freezeMethods: bm,
    toObjectSet: e0,
    toCamelCase: Zm,
    noop: t0,
    toFiniteNumber: n0,
    findKey: Df,
    global: Ff,
    isContextDefined: Mf,
    ALPHABET: Af,
    generateString: r0,
    isSpecCompliantForm: l0,
    toJSONObject: i0,
  };
function $(e, t, n, r, l) {
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
_.inherits($, Error, {
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
      config: _.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Bf = $.prototype,
  jf = {};
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
  jf[e] = { value: e };
});
Object.defineProperties($, jf);
Object.defineProperty(Bf, "isAxiosError", { value: !0 });
$.from = (e, t, n, r, l, i) => {
  const o = Object.create(Bf);
  return (
    _.toFlatObject(
      e,
      o,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    $.call(o, e.message, t, n, r, l),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const o0 = null;
function To(e) {
  return _.isPlainObject(e) || _.isArray(e);
}
function Uf(e) {
  return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ca(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, i) {
          return (l = Uf(l)), !n && i ? "[" + l + "]" : l;
        })
        .join(n ? "." : "")
    : t;
}
function s0(e) {
  return _.isArray(e) && !e.some(To);
}
const u0 = _.toFlatObject(_, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ql(e, t, n) {
  if (!_.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = _.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (S, D) {
        return !_.isUndefined(D[S]);
      }
    ));
  const r = n.metaTokens,
    l = n.visitor || d,
    i = n.dots,
    o = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t);
  if (!_.isFunction(l)) throw new TypeError("visitor must be a function");
  function a(w) {
    if (w === null) return "";
    if (_.isDate(w)) return w.toISOString();
    if (!u && _.isBlob(w))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return _.isArrayBuffer(w) || _.isTypedArray(w)
      ? u && typeof Blob == "function"
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function d(w, S, D) {
    let f = w;
    if (w && !D && typeof w == "object") {
      if (_.endsWith(S, "{}"))
        (S = r ? S : S.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (_.isArray(w) && s0(w)) ||
        ((_.isFileList(w) || _.endsWith(S, "[]")) && (f = _.toArray(w)))
      )
        return (
          (S = Uf(S)),
          f.forEach(function (p, m) {
            !(_.isUndefined(p) || p === null) &&
              t.append(
                o === !0 ? ca([S], m, i) : o === null ? S : S + "[]",
                a(p)
              );
          }),
          !1
        );
    }
    return To(w) ? !0 : (t.append(ca(D, S, i), a(w)), !1);
  }
  const h = [],
    g = Object.assign(u0, {
      defaultVisitor: d,
      convertValue: a,
      isVisitable: To,
    });
  function E(w, S) {
    if (!_.isUndefined(w)) {
      if (h.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      h.push(w),
        _.forEach(w, function (f, c) {
          (!(_.isUndefined(f) || f === null) &&
            l.call(t, f, _.isString(c) ? c.trim() : c, S, g)) === !0 &&
            E(f, S ? S.concat(c) : [c]);
        }),
        h.pop();
    }
  }
  if (!_.isObject(e)) throw new TypeError("data must be an object");
  return E(e), t;
}
function fa(e) {
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
function Rs(e, t) {
  (this._pairs = []), e && ql(e, this, t);
}
const $f = Rs.prototype;
$f.append = function (t, n) {
  this._pairs.push([t, n]);
};
$f.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, fa);
      }
    : fa;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + "=" + n(l[1]);
    }, "")
    .join("&");
};
function a0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Hf(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || a0,
    l = n && n.serialize;
  let i;
  if (
    (l
      ? (i = l(t, n))
      : (i = _.isURLSearchParams(t) ? t.toString() : new Rs(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class c0 {
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
    _.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const da = c0,
  Wf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  f0 = typeof URLSearchParams < "u" ? URLSearchParams : Rs,
  d0 = typeof FormData < "u" ? FormData : null,
  p0 = typeof Blob < "u" ? Blob : null,
  m0 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  h0 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  nt = {
    isBrowser: !0,
    classes: { URLSearchParams: f0, FormData: d0, Blob: p0 },
    isStandardBrowserEnv: m0,
    isStandardBrowserWebWorkerEnv: h0,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function y0(e, t) {
  return ql(
    e,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, i) {
          return nt.isNode && _.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function g0(e) {
  return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function v0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let i;
  for (r = 0; r < l; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Vf(e) {
  function t(n, r, l, i) {
    let o = n[i++];
    const s = Number.isFinite(+o),
      u = i >= n.length;
    return (
      (o = !o && _.isArray(l) ? l.length : o),
      u
        ? (_.hasOwnProp(l, o) ? (l[o] = [l[o], r]) : (l[o] = r), !s)
        : ((!l[o] || !_.isObject(l[o])) && (l[o] = []),
          t(n, r, l[o], i) && _.isArray(l[o]) && (l[o] = v0(l[o])),
          !s)
    );
  }
  if (_.isFormData(e) && _.isFunction(e.entries)) {
    const n = {};
    return (
      _.forEachEntry(e, (r, l) => {
        t(g0(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
const w0 = { "Content-Type": void 0 };
function S0(e, t, n) {
  if (_.isString(e))
    try {
      return (t || JSON.parse)(e), _.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const bl = {
  transitional: Wf,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        l = r.indexOf("application/json") > -1,
        i = _.isObject(t);
      if ((i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t)))
        return l && l ? JSON.stringify(Vf(t)) : t;
      if (
        _.isArrayBuffer(t) ||
        _.isBuffer(t) ||
        _.isStream(t) ||
        _.isFile(t) ||
        _.isBlob(t)
      )
        return t;
      if (_.isArrayBufferView(t)) return t.buffer;
      if (_.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return y0(t, this.formSerializer).toString();
        if ((s = _.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return ql(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return i || l ? (n.setContentType("application/json", !1), S0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || bl.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === "json";
      if (t && _.isString(t) && ((r && !this.responseType) || l)) {
        const o = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (o)
            throw s.name === "SyntaxError"
              ? $.from(s, $.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
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
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
_.forEach(["delete", "get", "head"], function (t) {
  bl.headers[t] = {};
});
_.forEach(["post", "put", "patch"], function (t) {
  bl.headers[t] = _.merge(w0);
});
const Ls = bl,
  k0 = _.toObjectSet([
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
  E0 = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (l = o.indexOf(":")),
              (n = o.substring(0, l).trim().toLowerCase()),
              (r = o.substring(l + 1).trim()),
              !(!n || (t[n] && k0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  pa = Symbol("internals");
function $n(e) {
  return e && String(e).trim().toLowerCase();
}
function ol(e) {
  return e === !1 || e == null ? e : _.isArray(e) ? e.map(ol) : String(e);
}
function x0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function _0(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Ri(e, t, n, r, l) {
  if (_.isFunction(r)) return r.call(this, t, n);
  if ((l && (t = n), !!_.isString(t))) {
    if (_.isString(r)) return t.indexOf(r) !== -1;
    if (_.isRegExp(r)) return r.test(t);
  }
}
function C0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function N0(e, t) {
  const n = _.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, i, o) {
        return this[r].call(this, t, l, i, o);
      },
      configurable: !0,
    });
  });
}
class ei {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const l = this;
    function i(s, u, a) {
      const d = $n(u);
      if (!d) throw new Error("header name must be a non-empty string");
      const h = _.findKey(l, d);
      (!h || l[h] === void 0 || a === !0 || (a === void 0 && l[h] !== !1)) &&
        (l[h || u] = ol(s));
    }
    const o = (s, u) => _.forEach(s, (a, d) => i(a, d, u));
    return (
      _.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : _.isString(t) && (t = t.trim()) && !_0(t)
        ? o(E0(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = $n(t)), t)) {
      const r = _.findKey(this, t);
      if (r) {
        const l = this[r];
        if (!n) return l;
        if (n === !0) return x0(l);
        if (_.isFunction(n)) return n.call(this, l, r);
        if (_.isRegExp(n)) return n.exec(l);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = $n(t)), t)) {
      const r = _.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ri(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let l = !1;
    function i(o) {
      if (((o = $n(o)), o)) {
        const s = _.findKey(r, o);
        s && (!n || Ri(r, r[s], s, n)) && (delete r[s], (l = !0));
      }
    }
    return _.isArray(t) ? t.forEach(i) : i(t), l;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      l = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ri(this, this[i], i, t, !0)) && (delete this[i], (l = !0));
    }
    return l;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      _.forEach(this, (l, i) => {
        const o = _.findKey(r, i);
        if (o) {
          (n[o] = ol(l)), delete n[i];
          return;
        }
        const s = t ? C0(i) : String(i).trim();
        s !== i && delete n[i], (n[s] = ol(l)), (r[s] = !0);
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
      _.forEach(this, (r, l) => {
        r != null && r !== !1 && (n[l] = t && _.isArray(r) ? r.join(", ") : r);
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
    const r = (this[pa] = this[pa] = { accessors: {} }).accessors,
      l = this.prototype;
    function i(o) {
      const s = $n(o);
      r[s] || (N0(l, o), (r[s] = !0));
    }
    return _.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ei.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
_.freezeMethods(ei.prototype);
_.freezeMethods(ei);
const ft = ei;
function Li(e, t) {
  const n = this || Ls,
    r = t || n,
    l = ft.from(r.headers);
  let i = r.data;
  return (
    _.forEach(e, function (s) {
      i = s.call(n, i, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    i
  );
}
function Qf(e) {
  return !!(e && e.__CANCEL__);
}
function Tr(e, t, n) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
_.inherits(Tr, $, { __CANCEL__: !0 });
function P0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new $(
          "Request failed with status code " + n.status,
          [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const T0 = nt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, l, i, o, s) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            _.isNumber(l) && u.push("expires=" + new Date(l).toGMTString()),
            _.isString(i) && u.push("path=" + i),
            _.isString(o) && u.push("domain=" + o),
            s === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
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
function R0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function L0(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Kf(e, t) {
  return e && !R0(t) ? L0(e, t) : t;
}
const O0 = nt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function l(i) {
        let o = i;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
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
        function (o) {
          const s = _.isString(o) ? l(o) : o;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function z0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function D0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        d = r[i];
      o || (o = a), (n[l] = u), (r[l] = a);
      let h = i,
        g = 0;
      for (; h !== l; ) (g += n[h++]), (h = h % e);
      if (((l = (l + 1) % e), l === i && (i = (i + 1) % e), a - o < t)) return;
      const E = d && a - d;
      return E ? Math.round((g * 1e3) / E) : void 0;
    }
  );
}
function ma(e, t) {
  let n = 0;
  const r = D0(50, 250);
  return (l) => {
    const i = l.loaded,
      o = l.lengthComputable ? l.total : void 0,
      s = i - n,
      u = r(s),
      a = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && o && a ? (o - i) / u : void 0,
      event: l,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const F0 = typeof XMLHttpRequest < "u",
  M0 =
    F0 &&
    function (e) {
      return new Promise(function (n, r) {
        let l = e.data;
        const i = ft.from(e.headers).normalize(),
          o = e.responseType;
        let s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        _.isFormData(l) &&
          (nt.isStandardBrowserEnv || nt.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let a = new XMLHttpRequest();
        if (e.auth) {
          const E = e.auth.username || "",
            w = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(E + ":" + w));
        }
        const d = Kf(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), Hf(d, e.params, e.paramsSerializer), !0),
          (a.timeout = e.timeout);
        function h() {
          if (!a) return;
          const E = ft.from(
              "getAllResponseHeaders" in a && a.getAllResponseHeaders()
            ),
            S = {
              data:
                !o || o === "text" || o === "json"
                  ? a.responseText
                  : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: E,
              config: e,
              request: a,
            };
          P0(
            function (f) {
              n(f), u();
            },
            function (f) {
              r(f), u();
            },
            S
          ),
            (a = null);
        }
        if (
          ("onloadend" in a
            ? (a.onloadend = h)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 &&
                    !(a.responseURL && a.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (a.onabort = function () {
            a &&
              (r(new $("Request aborted", $.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new $("Network Error", $.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let w = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const S = e.transitional || Wf;
            e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
              r(
                new $(
                  w,
                  S.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
                  e,
                  a
                )
              ),
              (a = null);
          }),
          nt.isStandardBrowserEnv)
        ) {
          const E =
            (e.withCredentials || O0(d)) &&
            e.xsrfCookieName &&
            T0.read(e.xsrfCookieName);
          E && i.set(e.xsrfHeaderName, E);
        }
        l === void 0 && i.setContentType(null),
          "setRequestHeader" in a &&
            _.forEach(i.toJSON(), function (w, S) {
              a.setRequestHeader(S, w);
            }),
          _.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          o && o !== "json" && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            a.addEventListener("progress", ma(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            a.upload &&
            a.upload.addEventListener("progress", ma(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (E) => {
              a &&
                (r(!E || E.type ? new Tr(null, e, a) : E),
                a.abort(),
                (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const g = z0(d);
        if (g && nt.protocols.indexOf(g) === -1) {
          r(new $("Unsupported protocol " + g + ":", $.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(l || null);
      });
    },
  sl = { http: o0, xhr: M0 };
_.forEach(sl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const I0 = {
  getAdapter: (e) => {
    e = _.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let l = 0;
      l < t && ((n = e[l]), !(r = _.isString(n) ? sl[n.toLowerCase()] : n));
      l++
    );
    if (!r)
      throw r === !1
        ? new $(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            _.hasOwnProp(sl, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!_.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: sl,
};
function Oi(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Tr(null, e);
}
function ha(e) {
  return (
    Oi(e),
    (e.headers = ft.from(e.headers)),
    (e.data = Li.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    I0.getAdapter(e.adapter || Ls.adapter)(e).then(
      function (r) {
        return (
          Oi(e),
          (r.data = Li.call(e, e.transformResponse, r)),
          (r.headers = ft.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Qf(r) ||
            (Oi(e),
            r &&
              r.response &&
              ((r.response.data = Li.call(e, e.transformResponse, r.response)),
              (r.response.headers = ft.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const ya = (e) => (e instanceof ft ? e.toJSON() : e);
function Tn(e, t) {
  t = t || {};
  const n = {};
  function r(a, d, h) {
    return _.isPlainObject(a) && _.isPlainObject(d)
      ? _.merge.call({ caseless: h }, a, d)
      : _.isPlainObject(d)
      ? _.merge({}, d)
      : _.isArray(d)
      ? d.slice()
      : d;
  }
  function l(a, d, h) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(a)) return r(void 0, a, h);
    } else return r(a, d, h);
  }
  function i(a, d) {
    if (!_.isUndefined(d)) return r(void 0, d);
  }
  function o(a, d) {
    if (_.isUndefined(d)) {
      if (!_.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, d);
  }
  function s(a, d, h) {
    if (h in t) return r(a, d);
    if (h in e) return r(void 0, a);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (a, d) => l(ya(a), ya(d), !0),
  };
  return (
    _.forEach(Object.keys(e).concat(Object.keys(t)), function (d) {
      const h = u[d] || l,
        g = h(e[d], t[d], d);
      (_.isUndefined(g) && h !== s) || (n[d] = g);
    }),
    n
  );
}
const Yf = "1.3.4",
  Os = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Os[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const ga = {};
Os.transitional = function (t, n, r) {
  function l(i, o) {
    return (
      "[Axios v" +
      Yf +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, s) => {
    if (t === !1)
      throw new $(
        l(o, " has been removed" + (n ? " in " + n : "")),
        $.ERR_DEPRECATED
      );
    return (
      n &&
        !ga[o] &&
        ((ga[o] = !0),
        console.warn(
          l(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, s) : !0
    );
  };
};
function A0(e, t, n) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const i = r[l],
      o = t[i];
    if (o) {
      const s = e[i],
        u = s === void 0 || o(s, i, e);
      if (u !== !0)
        throw new $("option " + i + " must be " + u, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const Ro = { assertOptions: A0, validators: Os },
  wt = Ro.validators;
class Fl {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new da(), response: new da() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Tn(this.defaults, n));
    const { transitional: r, paramsSerializer: l, headers: i } = n;
    r !== void 0 &&
      Ro.assertOptions(
        r,
        {
          silentJSONParsing: wt.transitional(wt.boolean),
          forcedJSONParsing: wt.transitional(wt.boolean),
          clarifyTimeoutError: wt.transitional(wt.boolean),
        },
        !1
      ),
      l !== void 0 &&
        Ro.assertOptions(
          l,
          { encode: wt.function, serialize: wt.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = i && _.merge(i.common, i[n.method])),
      o &&
        _.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (w) => {
            delete i[w];
          }
        ),
      (n.headers = ft.concat(o, i));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (S) {
      (typeof S.runWhen == "function" && S.runWhen(n) === !1) ||
        ((u = u && S.synchronous), s.unshift(S.fulfilled, S.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (S) {
      a.push(S.fulfilled, S.rejected);
    });
    let d,
      h = 0,
      g;
    if (!u) {
      const w = [ha.bind(this), void 0];
      for (
        w.unshift.apply(w, s),
          w.push.apply(w, a),
          g = w.length,
          d = Promise.resolve(n);
        h < g;

      )
        d = d.then(w[h++], w[h++]);
      return d;
    }
    g = s.length;
    let E = n;
    for (h = 0; h < g; ) {
      const w = s[h++],
        S = s[h++];
      try {
        E = w(E);
      } catch (D) {
        S.call(this, D);
        break;
      }
    }
    try {
      d = ha.call(this, E);
    } catch (w) {
      return Promise.reject(w);
    }
    for (h = 0, g = a.length; h < g; ) d = d.then(a[h++], a[h++]);
    return d;
  }
  getUri(t) {
    t = Tn(this.defaults, t);
    const n = Kf(t.baseURL, t.url);
    return Hf(n, t.params, t.paramsSerializer);
  }
}
_.forEach(["delete", "get", "head", "options"], function (t) {
  Fl.prototype[t] = function (n, r) {
    return this.request(
      Tn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
_.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, s) {
      return this.request(
        Tn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (Fl.prototype[t] = n()), (Fl.prototype[t + "Form"] = n(!0));
});
const ul = Fl;
class zs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let i;
        const o = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(l);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, s) {
        r.reason || ((r.reason = new Tr(i, o, s)), n(r.reason));
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
      token: new zs(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
const B0 = zs;
function j0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function U0(e) {
  return _.isObject(e) && e.isAxiosError === !0;
}
const Lo = {
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
Object.entries(Lo).forEach(([e, t]) => {
  Lo[t] = e;
});
const $0 = Lo;
function Xf(e) {
  const t = new ul(e),
    n = Rf(ul.prototype.request, t);
  return (
    _.extend(n, ul.prototype, t, { allOwnKeys: !0 }),
    _.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Xf(Tn(e, l));
    }),
    n
  );
}
const ce = Xf(Ls);
ce.Axios = ul;
ce.CanceledError = Tr;
ce.CancelToken = B0;
ce.isCancel = Qf;
ce.VERSION = Yf;
ce.toFormData = ql;
ce.AxiosError = $;
ce.Cancel = ce.CanceledError;
ce.all = function (t) {
  return Promise.all(t);
};
ce.spread = j0;
ce.isAxiosError = U0;
ce.mergeConfig = Tn;
ce.AxiosHeaders = ft;
ce.formToJSON = (e) => Vf(_.isHTMLForm(e) ? new FormData(e) : e);
ce.HttpStatusCode = $0;
ce.default = ce;
const Jf = ce,
  Ds = ({ size: e, style: t, className: n }) =>
    v("svg", {
      width: e ?? 24,
      height: e ?? 24,
      viewBox: "0 0 24 24",
      className: n,
      style: t,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: v("path", {
        fill: "currentColor",
        d: "M13.06 12l6.224-6.216a.76.76 0 00-1.069-1.068L12 10.94 5.784 4.716a.76.76 0 00-1.069 1.068L10.94 12l-6.225 6.216a.76.76 0 000 1.068.768.768 0 001.07 0L12 13.06l6.215 6.225a.768.768 0 001.07 0 .76.76 0 000-1.068L13.058 12z",
      }),
    }),
  H0 = ({ size: e, style: t, className: n }) =>
    v("svg", {
      width: e ?? 24,
      height: e ?? 24,
      viewBox: "0 0 24 24",
      className: n,
      style: t,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: v("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12.375 20.25H4.472a.712.712 0 01-.722-.722v-7.903A8.625 8.625 0 0112.375 3v0A8.625 8.625 0 0121 11.625v0a8.624 8.624 0 01-8.625 8.625v0zM9.375 10.5H15M9.375 13.5H15",
      }),
    }),
  W0 = ({ size: e, className: t, style: n }) =>
    I("svg", {
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
        v("path", {
          fill: "currentColor",
          d: "M74.508,108.239c-0.772,0-1.479-0.445-1.81-1.148l-16.863-35.84L20.732,55.116c-0.734-0.337-1.193-1.083-1.164-1.891  c0.03-0.808,0.543-1.518,1.3-1.8l83.312-31.107c0.729-0.271,1.552-0.096,2.105,0.452c0.555,0.548,0.739,1.369,0.475,2.102  l-30.371,84.047c-0.274,0.761-0.98,1.28-1.788,1.318C74.569,108.238,74.538,108.239,74.508,108.239z M26.772,53.49l31.396,14.432  c0.429,0.197,0.774,0.539,0.975,0.965l15.122,32.139l27.264-75.448L26.772,53.49z",
        }),
        v("path", {
          fill: "currentColor",
          d: "M57.334,71.738c-0.512,0-1.023-0.195-1.414-0.586c-0.781-0.78-0.781-2.047,0-2.828l47.545-47.546  c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828L58.748,71.152C58.357,71.543,57.846,71.738,57.334,71.738z",
        }),
      ],
    }),
  Gf = ({ className: e, size: t }) =>
    I("svg", {
      className: e,
      width: t ?? "7",
      height: t ?? "14",
      viewBox: "0 0 7 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        v("path", {
          d: "M1 14L1 -4.02383e-07",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        v("path", {
          d: "M6.24615 14V1.26655e-06",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
      ],
    }),
  Oo = ({ className: e, size: t }) =>
    v("svg", {
      width: t ?? "12",
      height: t ?? "16",
      className: e,
      viewBox: "0 0 12 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: v("path", {
        d: "M10.7391 6.92845C11.3389 7.31537 11.3519 8.18793 10.7639 8.59253L1.56691 14.9217C0.903442 15.3783 -5.96046e-08 14.9033 -5.96046e-08 14.0979L-5.96046e-08 1.83521C-5.96046e-08 1.04331 0.876694 0.565606 1.54212 0.994914L10.7391 6.92845Z",
        fill: "currentColor",
      }),
    }),
  V0 = ({ className: e, size: t }) =>
    v("svg", {
      width: t ?? "23",
      height: t ?? "23",
      className: e,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: v("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M2 7V2h5m15 5V2h-5M7 22H2v-5m15 5h5v-5",
      }),
    }),
  Q0 = ({ className: e, size: t }) =>
    I("svg", {
      viewBox: "0 0 34 34",
      height: t ?? "34",
      width: t ?? "34",
      className: e,
      preserveAspectRatio: "xMidYMid meet",
      version: "1.1",
      x: "0px",
      y: "0px",
      enableBackground: "new 0 0 34 34",
      xmlSpace: "preserve",
      children: [
        v("path", {
          fill: "currentColor",
          d: "M17,2c8.3,0,15,6.7,15,15s-6.7,15-15,15S2,25.3,2,17S8.7,2,17,2 M17,1C8.2,1,1,8.2,1,17 s7.2,16,16,16s16-7.2,16-16S25.8,1,17,1L17,1z",
        }),
        v("path", {
          fill: "currentColor",
          d: "M22.4,17.5h-3.2v-6.8c0-0.4-0.3-0.7-0.7-0.7h-3.2c-0.4,0-0.7,0.3-0.7,0.7v6.8h-3.2 c-0.6,0-0.8,0.4-0.4,0.8l5,5.3c0.5,0.7,1,0.5,1.5,0l5-5.3C23.2,17.8,23,17.5,22.4,17.5z",
        }),
      ],
    });
const K0 = ({ label: e, mode: t, onClick: n, disabled: r }) =>
    v("button", {
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
  Y0 = ({
    disabled: e,
    autoComplete: t = "",
    value: n,
    name: r,
    onChange: l,
    required: i,
    autoFocus: o = !1,
    placeholder: s,
    maxLength: u = 1024,
    save: a,
    mode: d,
    primaryColor: h,
  }) => {
    const g = (S) => {
        S.keyCode == 13 &&
          S.shiftKey == !1 &&
          (a && S.preventDefault(), a && a(S));
      },
      [E, w] = A.useState(!0);
    return v("div", {
      className: "sarufi-field-group",
      style: { marginBottom: "1.5rem" },
      children: v("div", {
        className: "input-group",
        style: { position: "relative" },
        children: v("label", {
          className: "sarufi-flex-start",
          style: {},
          children: v(
            "textarea",
            {
              onKeyDown: g,
              id: r,
              autoFocus: o,
              name: r,
              maxLength: u,
              disabled: e,
              placeholder: s,
              className: "scroll-bar sarufi-textarea",
              onChange: l,
              autoComplete: t,
              value: n,
              onFocus: () => w(!0),
              onBlur: () => w(!1),
              style: {
                padding: ".7rem .7rem",
                paddingRight: 45,
                height: 60,
                minHeight: 60,
                maxHeight: 60,
                borderRadius: "0.3rem",
                fontFamily: "var(--sarufi-font-family)",
                ...(d === "dark" ? { color: "white" } : {}),
                ...(d === "dark" && E ? { borderColor: h } : {}),
              },
              required: i,
            },
            r
          ),
        }),
      }),
    });
  },
  kr = ({ fromPlay: e }) =>
    I("div", {
      className: "sarufi-chat-loader",
      children: [
        v("div", { className: "sarufi-bounce1" }),
        v("div", { className: "sarufi-bounce2" }),
        !e && v("div", { className: "sarufi-bounce3" }),
      ],
    }),
  Zf = ({ closeWithBackdrop: e, close: t, open: n, children: r, mode: l }) => (
    A.useLayoutEffect(() => {
      n
        ? document.body.classList.add("sarufi-no-scrolling")
        : document.body.classList.remove("sarufi-no-scrolling");
    }, [n]),
    Tm.createPortal(
      I("div", {
        className: `sarufi-modal ${n ? "open" : ""}  sarufi-flex-center`,
        style: { zIndex: 2e5 },
        children: [
          n &&
            v("div", {
              className: `sarufi-modal-backdrop ${n ? "open" : ""}`,
              onClick: () => {
                e && t();
              },
            }),
          I("div", {
            className: `sarufi-container ${n ? "open" : ""} sarufi-scroll-bar`,
            style: {
              color: l === "dark" ? "rgba(255,255,255,.7)" : "rgba(0,0,0,.7)",
            },
            onClick: () => {
              e && t();
            },
            children: [
              v("div", {
                className: "sarufi-flex-end sarufi-close-modal",
                style: {
                  position: "absolute",
                  left: 0,
                  width: "100vw",
                  height: "50px",
                },
                children: v("button", {
                  onClick: (i) => {
                    i.stopPropagation(),
                      i.nativeEvent.stopImmediatePropagation(),
                      t();
                  },
                  title: "Close",
                  className: "sarufi-cursor-pointer",
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,.8)",
                    padding: "1rem 2rem",
                  },
                  children: v(Ds, {}),
                }),
              }),
              v("div", {
                className: "sarufi-flex-center",
                style: { height: "100%", width: "100%" },
                children: v("div", {
                  onClick: (i) => {
                    i.stopPropagation(),
                      i.nativeEvent.stopImmediatePropagation();
                  },
                  style: { width: "max-content" },
                  children: r,
                }),
              }),
            ],
          }),
        ],
      }),
      document.getElementById("sarufi-modal")
    )
  ),
  X0 = ({ url: e, fontSize: t, mediaId: n, mode: r }) => {
    var y, le, oe, K, T;
    const [l, i] = A.useState(!1),
      [o, s] = A.useState(0),
      [u, a] = A.useState(0),
      [d, h] = A.useState(0),
      [g, E] = A.useState(0),
      [w, S] = A.useState(0),
      [D, f] = A.useState(0),
      [c, p] = A.useState(0),
      [m, N] = A.useState(!1),
      [R, P] = A.useState(0),
      [L, B] = A.useState(!0),
      k = document.querySelector(`audio#${n}`),
      W = () => {
        if (k && c)
          if (k.paused) {
            k.play(), i(!0);
            const F = document.getElementsByTagName("audio");
            for (let j = 0; j < F.length; j++) {
              let V = F[j];
              V.id !== n && V.pause();
            }
            const M = document.getElementsByTagName("video");
            for (let j = 0; j < M.length; j++) M[j].pause();
          } else k.pause(), i(!1);
      },
      Z = (F) => {
        let { value: M } = F.target;
        f(M / 1e3), k && c && (k.currentTime = M / 1e3);
      };
    A.useEffect(() => {
      P((D / c) * 100);
    }, [D]),
      A.useEffect(() => {
        k &&
          ((k.onwaiting = () => {
            N(!0);
          }),
          (k.onplaying = () => {
            N(!1);
          }),
          (k.onerror = () => {
            B(!1);
          }),
          (k.onloadeddata = () => {
            s(k.currentTime % 60),
              a((k.currentTime / 60) % 60),
              E(k.duration % 60),
              S((k.duration / 60) % 60),
              p(k.duration),
              f(k.currentTime),
              B(!1),
              N(!1);
          }),
          (k.ontimeupdate = () => {
            var F, M;
            k &&
              k.currentTime &&
              (s(k.currentTime % 60),
              a((k.currentTime / 60) % 60),
              f(k.currentTime),
              P((D / c) * 100)),
              k &&
                k.duration &&
                (E((k == null ? void 0 : k.duration) % 60),
                S(((k == null ? void 0 : k.duration) / 60) % 60),
                p(k.duration),
                h(
                  (M = k == null ? void 0 : k.buffered) == null
                    ? void 0
                    : M.end(
                        ((F = k == null ? void 0 : k.buffered) == null
                          ? void 0
                          : F.length) - 1
                      )
                ));
          }),
          (k.onended = () => {
            f(0), s(0), a(0), P(0), h(0), i(!1);
          }));
      }, [l, k]),
      A.useEffect(() => {
        k && (k.played && i(!0), k.paused && i(!1));
      }, [k == null ? void 0 : k.played, k == null ? void 0 : k.paused]);
    const x = {
      "--sarufi-audio-seek-before-width": R + "%",
      "--sarufi-audio-buffer-before-width": (d / c) * 100 + "%",
    };
    return I(Ne, {
      children: [
        L
          ? v("div", {
              style: {
                padding: ".5rem",
                fontSize: 14,
                display: "flex",
                justifyContent: "center",
              },
              children: v(kr, {}),
            })
          : null,
        k != null &&
        k.duration &&
        !((y = k == null ? void 0 : k.error) != null && y.code) &&
        !L
          ? v("div", {
              style: { ...x },
              className: "sarufi-audio-player",
              children: I("div", {
                style: { margin: ".5rem 0 .5rem", width: "100%" },
                className: "sarufi-flex-start",
                children: [
                  v("button", {
                    className: "sarufi-flex-start sarufi-button",
                    onClick: W,
                    style: {
                      background: "none",
                      border: "none",
                      height: "40px",
                      width: "40px",
                      color: "var(--sarufi-sent-boxt-color)",
                      cursor: "pointer",
                    },
                    accessKey: "Space",
                    type: "button",
                    children: v("span", {
                      title: l ? "Pause" : "Play",
                      children: m
                        ? v(Ne, { children: v(kr, { fromPlay: !0 }) })
                        : v(Ne, { children: l ? v(Gf, {}) : v(Oo, {}) }),
                    }),
                  }),
                  I("div", {
                    style: { width: "calc( 100% - 50px )" },
                    children: [
                      v("div", {
                        className: "sarufi-bar sarufi-duration__bar",
                        children: v("input", {
                          type: "range",
                          id: "progress",
                          disabled: !c,
                          step: 1e-4,
                          value: D && D * 1e3,
                          max: c && c * 1e3,
                          onChange: Z,
                        }),
                      }),
                      c > 0 &&
                        v("div", {
                          className: "",
                          style: { fontSize: Number(t) * 0.8 },
                          children: I("div", {
                            className: "sarufi-flex-wide sarufi-duration",
                            children: [
                              l &&
                                I("div", {
                                  children: [
                                    v("span", {
                                      children:
                                        u < 10
                                          ? `0${Math.floor(u)}`
                                          : Math.floor(u),
                                    }),
                                    " : ",
                                    v("span", {
                                      children:
                                        o < 10
                                          ? `0${Math.floor(o)}`
                                          : `${Math.floor(o)}`,
                                    }),
                                  ],
                                }),
                              !l &&
                                I("div", {
                                  children: [
                                    v("span", {
                                      children:
                                        w < 10
                                          ? `0${Math.floor(w)}`
                                          : Math.floor(w),
                                    }),
                                    " : ",
                                    v("span", {
                                      children:
                                        g < 10
                                          ? `0${Math.floor(g)}`
                                          : `${Math.floor(g)}`,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            })
          : null,
        (k == null ? void 0 : k.error) &&
          !(k != null && k.duration) &&
          !L &&
          v("div", {
            style: {
              color: r === "dark" ? "#e76262" : "red",
              borderRadius: ".3rem",
              padding: ".3rem 0",
              fontSize: 14,
            },
            children:
              ((le = k == null ? void 0 : k.error) == null
                ? void 0
                : le.code) === 1
                ? "Loading audio resorces was aborted"
                : ((oe = k == null ? void 0 : k.error) == null
                    ? void 0
                    : oe.code) === 2
                ? "Failed to play audio due to network error"
                : ((K = k == null ? void 0 : k.error) == null
                    ? void 0
                    : K.code) === 3
                ? "Failed to decode audio resorces"
                : ((T = k == null ? void 0 : k.error) == null
                    ? void 0
                    : T.code) === 4
                ? "Audio resources not supported"
                : "Failed to load audio resources",
          }),
        v("audio", { id: n, src: e ?? "", style: { display: "none" } }, e),
      ],
    });
  },
  J0 = ({
    url: e,
    caption: t,
    fontFamily: n,
    fontSize: r,
    mediaId: l,
    mode: i,
  }) => {
    var M, j, V, Oe, X, it;
    const [o, s] = A.useState(!1),
      [u, a] = A.useState(0),
      [d, h] = A.useState(0),
      [g, E] = A.useState(0),
      [w, S] = A.useState(0),
      [D, f] = A.useState(0),
      [c, p] = A.useState(0),
      [m, N] = A.useState(!1),
      [R, P] = A.useState(0),
      [L, B] = A.useState(0),
      [k, W] = A.useState(!0),
      [Z, x] = A.useState(!0),
      y = document.querySelector(`video#${l}-preview`),
      le = () => {
        if (!m && y) {
          N(!0), y.play();
          const ne = document.getElementsByTagName("video");
          for (let Ze = 0; Ze < ne.length; Ze++) {
            let en = ne[Ze];
            en.id !== l && en.pause();
          }
          const ye = document.getElementsByTagName("audio");
          for (let Ze = 0; Ze < ye.length; Ze++) ye[Ze].pause();
          return;
        }
        y &&
          c &&
          (y != null && y.paused
            ? (y == null || y.play(), s(!0))
            : (y == null || y.pause(), s(!1)));
      },
      oe = (ne) => {
        let { value: ye } = ne.target;
        y && (f(ye / 1e3), (y.currentTime = ye / 1e3));
      },
      K = () => {
        y && (N(!m), y == null || y.requestFullscreen());
      };
    A.useEffect(() => {
      P((D / c) * 100);
    }, [D]),
      A.useEffect(() => {
        y &&
          ((y.onerror = () => {
            W(!1);
          }),
          (y.onwaiting = () => {
            x(!0);
          }),
          (y.onplaying = () => {
            x(!1);
          }),
          (y.onloadeddata = () => {
            a((y == null ? void 0 : y.currentTime) % 60),
              h(((y == null ? void 0 : y.currentTime) / 60) % 60),
              E((y == null ? void 0 : y.duration) % 60),
              S(((y == null ? void 0 : y.duration) / 60) % 60),
              p(y == null ? void 0 : y.duration),
              f(y == null ? void 0 : y.currentTime),
              W(!1),
              x(!1);
          }),
          (y.ontimeupdate = () => {
            y &&
              y != null &&
              y.currentTime &&
              (a((y == null ? void 0 : y.currentTime) % 60),
              h(((y == null ? void 0 : y.currentTime) / 60) % 60),
              f(y == null ? void 0 : y.currentTime),
              P((y.currentTime / y.duration) * 100)),
              y &&
                y != null &&
                y.duration &&
                (E((y == null ? void 0 : y.duration) % 60),
                S(((y == null ? void 0 : y.duration) / 60) % 60),
                p(y == null ? void 0 : y.duration));
          }),
          (y.onended = () => {
            f(0), a(0), h(0), P(0), B(0), s(!1);
          }));
      }, [o, y]),
      A.useEffect(() => {
        y && (y != null && y.played && s(!0), y != null && y.paused && s(!1));
      }, [y == null ? void 0 : y.played, y == null ? void 0 : y.paused, m]),
      A.useEffect(() => {
        if (!m && y) {
          s(!1), y.pause();
          return;
        } else m && y && y.play();
      }, [m]);
    const T = {
        "--sarufi-video-seek-before-width": R + "%",
        "--sarufi-video-buffer-before-width": (L / c) * 100 + "%",
        "--sarufi-font-family":
          n === "InterRegular"
            ? "'Inter', sans-serif"
            : n === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : n === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        "--sarufi-font-size": r,
      },
      F = ({ showBottomControllers: ne }) => {
        var ye;
        return v(Ne, {
          children:
            y != null &&
            y.duration &&
            !((ye = y == null ? void 0 : y.error) != null && ye.code) &&
            !k
              ? I("div", {
                  className: "sarufi-video-controls",
                  onClick: () => {
                    m || le();
                  },
                  style: {
                    height: m ? "50px" : "100%",
                    position: m ? "relative" : "absolute",
                    ...(m
                      ? { backgroundColor: "rgba(0, 0, 0, .6)" }
                      : { top: 0, left: 0, cursor: "pointer" }),
                  },
                  children: [
                    !ne &&
                      v("div", {
                        className: `sarufi-center-controls ${
                          o ? "" : "sarufi-video-not-playing"
                        }`,
                        children: v(Ne, {
                          children: v("button", {
                            title: o ? "Pause" : "Play",
                            style: {
                              background: "rgba(11,20,26,.35)",
                              border: "none",
                              color: "white",
                              borderRadius: "50%",
                              height: "30px",
                              width: "30px",
                              cursor: "pointer",
                            },
                            onClick: le,
                            className: "sarufi-flex-center sarufi-button",
                            children: v(Oo, { size: 20 }),
                          }),
                        }),
                      }),
                    ne &&
                      v("div", {
                        className: "sarufi-video-more-controls",
                        children: I("div", {
                          className: "sarufi-more-controls-container",
                          children: [
                            I("div", {
                              className: "sarufi-flex-wide",
                              style: { padding: "0 .5rem" },
                              children: [
                                I("div", {
                                  className:
                                    "sarufi-video-time-controls sarufi-flex-start",
                                  children: [
                                    v("button", {
                                      title: o ? "Pause" : "Play",
                                      style: {
                                        background: "rgba(11,20,26,.35)",
                                        border: "none",
                                        color: "white",
                                        borderRadius: "50%",
                                        height: "30px",
                                        width: "30px",
                                        cursor: "pointer",
                                        "--sarufi-received-box-color": "white",
                                      },
                                      onClick: le,
                                      className:
                                        "sarufi-flex-center sarufi-button",
                                      children: Z
                                        ? v(Ne, {
                                            children: v(kr, { fromPlay: !0 }),
                                          })
                                        : v(Ne, {
                                            children: o
                                              ? v(Gf, { size: 14 })
                                              : v(Oo, { size: 14 }),
                                          }),
                                    }),
                                    v("span", {
                                      style: { transform: "scale(0.8)" },
                                      children:
                                        d < 10
                                          ? `0${Math.floor(d)}`
                                          : Math.floor(d),
                                    }),
                                    " : ",
                                    v("span", {
                                      style: { transform: "scale(0.8)" },
                                      children:
                                        u < 10
                                          ? `0${Math.floor(u)}`
                                          : `${Math.floor(u)}`,
                                    }),
                                    " / ",
                                    v("span", {
                                      style: { transform: "scale(0.8)" },
                                      children:
                                        w < 10
                                          ? `0${Math.floor(w)}`
                                          : Math.floor(w),
                                    }),
                                    " : ",
                                    v("span", {
                                      style: { transform: "scale(0.8)" },
                                      children:
                                        g < 10
                                          ? `0${Math.floor(g)}`
                                          : `${Math.floor(g)}`,
                                    }),
                                  ],
                                }),
                                v("button", {
                                  className:
                                    "sarufi-video-full-screen-toggle sarufi-button",
                                  onClick: K,
                                  style: {
                                    cursor: "pointer",
                                    background: "none",
                                    border: "none",
                                    color: "currentcolor",
                                  },
                                  children: v(V0, { size: 14 }),
                                }),
                              ],
                            }),
                            v("div", {
                              style: { ...T },
                              className: "sarufi-bar sarufi-duration__bar",
                              children: v("input", {
                                type: "range",
                                id: "progress",
                                disabled: !c,
                                step: 1e-4,
                                value: D && D * 1e3,
                                max: c && c * 1e3,
                                onChange: oe,
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                })
              : null,
        });
      };
    return I(Ne, {
      children: [
        k
          ? v("div", {
              style: {
                background:
                  i === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
                borderRadius: ".3rem",
                padding: ".5rem",
                fontSize: 14,
                display: "flex",
                justifyContent: "center",
              },
              children: v(kr, {}),
            })
          : null,
        I("div", {
          className: "sarufi-video-player",
          style: { ...T },
          children: [
            I(
              "video",
              {
                id: l,
                disablePictureInPicture: !0,
                controlsList: "nodownload",
                src: e,
                onContextMenu: (ne) => {
                  ne.preventDefault();
                },
                style: {
                  maxWidth: "100%",
                  height:
                    k ||
                    !(y != null && y.duration) ||
                    ((M = y == null ? void 0 : y.error) != null && M.code) ||
                    !y
                      ? "0"
                      : "auto",
                  display:
                    k ||
                    !(y != null && y.duration) ||
                    ((j = y == null ? void 0 : y.error) != null && j.code) ||
                    !y
                      ? "none"
                      : "block",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: ".3rem",
                },
                children: [
                  v("source", { src: e, type: "video/mp4" }),
                  v("span", {
                    children: "Your Browser does not support this video format",
                  }),
                ],
              },
              e
            ),
            y != null && y.duration
              ? v(F, { showBottomControllers: !1 })
              : null,
            v(Zf, {
              mode: i ?? "light",
              open: m,
              close: () => N(!1),
              closeWithBackdrop: !0,
              children: I("div", {
                className: "sarufi-video-player",
                style: {
                  maxWidth: "calc( 100vw - 30px )",
                  maxHeight: "calc( 100vh - 180px )",
                  width: "100%",
                  height: "auto",
                  ...T,
                },
                children: [
                  I(
                    "video",
                    {
                      id: l + "-preview",
                      disablePictureInPicture: !0,
                      controlsList: "nodownload",
                      src: e,
                      onContextMenu: (ne) => {
                        ne.preventDefault();
                      },
                      onClick: le,
                      style: {
                        maxWidth: "calc( 100vw - 30px )",
                        maxHeight: "calc( 100vh - 180px )",
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                      },
                      children: [
                        v("source", { src: e, type: "video/mp4" }),
                        v("span", {
                          children:
                            "Your Browser does not support this video format",
                        }),
                      ],
                    },
                    e
                  ),
                  v(F, { showBottomControllers: !0 }),
                  v("div", {
                    className: "sarufi-flex-center",
                    children: v("div", {
                      style: {
                        textAlign: "center",
                        fontFamily:
                          n === "InterRegular"
                            ? "'Inter', sans-serif"
                            : n === "PoppinsRegular"
                            ? "'Poppins', sans-serif"
                            : n === "inherit"
                            ? "inherit"
                            : "'Inter', sans-serif",
                        fontSize: r,
                        color: "white",
                        marginTop: ".3rem",
                      },
                      children: t,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        (y == null ? void 0 : y.error) &&
          !(y != null && y.duration) &&
          !k &&
          v("div", {
            style: {
              color: i === "dark" ? "#e76262" : "red",
              background:
                i === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
              borderRadius: ".3rem",
              padding: ".5rem",
              fontSize: 14,
            },
            children:
              ((V = y == null ? void 0 : y.error) == null ? void 0 : V.code) ===
              1
                ? "Loading video resorces was aborted"
                : ((Oe = y == null ? void 0 : y.error) == null
                    ? void 0
                    : Oe.code) === 2
                ? "Failed to play video due to network error"
                : ((X = y == null ? void 0 : y.error) == null
                    ? void 0
                    : X.code) === 3
                ? "Failed to decode video resorces"
                : ((it = y == null ? void 0 : y.error) == null
                    ? void 0
                    : it.code) === 4
                ? "Video resources not supported"
                : "Failed to load video resources",
          }),
      ],
    });
  },
  va = ({
    url: e,
    caption: t,
    openFullScreen: n,
    isFullScreen: r,
    fontFamily: l,
    fontSize: i,
  }) =>
    v("div", {
      style: {
        "--sarufi-font-family":
          l === "InterRegular"
            ? "'Inter', sans-serif"
            : l === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : l === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        "--sarufi-font-size": i,
      },
      children: I("figure", {
        style: {
          marginInlineStart: 0,
          marginInlineEnd: 0,
          marginBlockStart: 0,
          marginBlockEnd: 0,
        },
        children: [
          v("picture", {
            className: "sarufi-flex-center",
            onClick: n,
            tabIndex: 0,
            children: v("img", {
              src: e,
              alt: "Preview Image",
              style: {
                borderRadius: ".3rem",
                ...(r
                  ? {
                      maxHeight: "calc( 100vh - 180px )",
                      maxWidth: "calc( 100vw - 30px )",
                      objectFit: "contain",
                    }
                  : { width: "100%", height: "auto", objectFit: "cover" }),
              },
            }),
          }),
          t &&
            r &&
            v("figcaption", {
              className: `${r ? "sarufi-flex-center" : ""}`,
              style: { marginTop: ".5rem" },
              children: v("span", {
                style: { textAlign: r ? "center" : "left", color: "white" },
                children: t,
              }),
            }),
        ],
      }),
    });
const Hn = ({
    type: e,
    url: t = "",
    caption: n = "",
    mode: r,
    fontFamily: l,
    fontSize: i,
    index: o,
    chat: s,
    mediaId: u,
    location: a,
    showArrow: d,
    style: h,
  }) => {
    const [g, E] = A.useState(!1),
      w = ["images", "stickers", "videos", "audios", "documents", "locations"],
      S = w.findIndex((f) => f === e),
      D = w.findIndex((f) => {
        var c, p, m, N, R, P, L, B, k, W, Z, x, y, le, oe;
        return (f === "images" &&
          ((m =
            (p =
              (c = s == null ? void 0 : s.actions) == null
                ? void 0
                : c.find((K) => K.send_images)) == null
              ? void 0
              : p.send_images) == null
            ? void 0
            : m.length) > 0) ||
          (f === "stickers" &&
            ((P =
              (R =
                (N = s == null ? void 0 : s.actions) == null
                  ? void 0
                  : N.find((K) => K.send_stickers)) == null
                ? void 0
                : R.send_stickers) == null
              ? void 0
              : P.length) > 0) ||
          (f === "audios" &&
            ((k =
              (B =
                (L = s == null ? void 0 : s.actions) == null
                  ? void 0
                  : L.find((K) => K.send_audios)) == null
                ? void 0
                : B.send_audios) == null
              ? void 0
              : k.length) > 0) ||
          (f === "videos" &&
            ((x =
              (Z =
                (W = s == null ? void 0 : s.actions) == null
                  ? void 0
                  : W.find((K) => K.send_videos)) == null
                ? void 0
                : Z.send_videos) == null
              ? void 0
              : x.length) > 0)
          ? !0
          : f === "documents" &&
              ((oe =
                (le =
                  (y = s == null ? void 0 : s.actions) == null
                    ? void 0
                    : y.find((K) => K.send_documents)) == null
                  ? void 0
                  : le.send_documents) == null
                ? void 0
                : oe.length) > 0;
      });
    return I("div", {
      className: `sarufi-media-preview sarufi-message-body ${
        (S <= D && !o) || d ? "sarufi-message-body-w-arrow" : ""
      }`,
      style: {
        background: "var(--sarufi-received-box-bg)",
        maxWidth: 280,
        padding: "6px 8px 8px 9px",
        marginTop: S <= D && !o ? ".7rem" : "0",
        marginBottom: ".3rem",
        position: "relative",
        borderTopLeftRadius: S <= D ? "7.5px" : "0",
        borderTopRightRadius: S <= D ? "7.5px" : "0",
        ...h,
      },
      children: [
        I(Ne, {
          children: [
            (e === "images" || e === "stickers") &&
              v(va, {
                url: t,
                caption: n,
                openFullScreen: () => E(!0),
                isFullScreen: !1,
                fontFamily: l,
                fontSize: i,
              }),
            e === "audios" &&
              v("div", {
                style: {
                  background:
                    r === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
                  borderRadius: ".3rem",
                  padding: ".1rem .5rem",
                },
                children: v(X0, { url: t, fontSize: i, mode: r, mediaId: u }),
              }),
            e === "videos" &&
              v(J0, {
                url: t,
                caption: n,
                fontFamily: l,
                fontSize: i,
                mediaId: u,
                mode: r,
              }),
            e === "documents" &&
              v("div", {
                style: {
                  background:
                    r === "dark" ? "rgba(255, 255, 255, .1)" : "rgba(0,0,0,.1)",
                  borderRadius: ".3rem",
                  padding: ".1rem .5rem",
                },
                children: v(G0, { url: t }),
              }),
            e === "locations" &&
              I("div", {
                style: { margin: ".5rem" },
                children: [
                  v("div", {
                    style: { marginBottom: ".4rem" },
                    children: "Location:",
                  }),
                  I("div", {
                    children: [
                      (a == null ? void 0 : a.latitude) &&
                        v("div", {
                          children: I("p", {
                            style: {},
                            children: [
                              v("span", {
                                style: { opacity: 0.7 },
                                children: "Latitude:",
                              }),
                              " ",
                              a == null ? void 0 : a.latitude,
                            ],
                          }),
                        }),
                      (a == null ? void 0 : a.longitude) &&
                        v("div", {
                          children: I("p", {
                            style: { marginTop: ".2rem" },
                            children: [
                              v("span", {
                                style: { opacity: 0.7 },
                                children: "Longitude:",
                              }),
                              " ",
                              a == null ? void 0 : a.longitude,
                            ],
                          }),
                        }),
                      (a == null ? void 0 : a.name) &&
                        v("div", {
                          children: I("p", {
                            style: { marginTop: ".2rem" },
                            children: [
                              v("span", {
                                style: { opacity: 0.7 },
                                children: "Name:",
                              }),
                              " ",
                              a == null ? void 0 : a.name,
                            ],
                          }),
                        }),
                      (a == null ? void 0 : a.address) &&
                        v("div", {
                          children: I("p", {
                            style: { marginTop: ".2rem" },
                            children: [
                              v("span", {
                                style: { opacity: 0.7 },
                                children: "Address:",
                              }),
                              " ",
                              a == null ? void 0 : a.address,
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        v(Zf, {
          close: () => E(!1),
          open: g,
          closeWithBackdrop: !0,
          mode: r,
          children: v(Ne, {
            children:
              (e === "images" || e === "stickers") &&
              v(va, {
                url: t,
                caption: n,
                openFullScreen: () => E(!0),
                isFullScreen: g,
                fontFamily: l,
                fontSize: i,
              }),
          }),
        }),
        n &&
          v("p", {
            style: {
              margin: ".5rem 0 .7rem",
              color: "var(--sarufi-received-box-color)",
              fontFamily: "var(--sarufi-font-family)",
            },
            children: bf(qf(n)),
          }),
      ],
    });
  },
  G0 = ({ url: e }) =>
    I("div", {
      style: { margin: ".5rem .5rem .5rem 0rem" },
      className: "sarufi-flex-wide",
      children: [
        v("div", {
          style: { width: "calc( 100% - 50px )", transform: "scale(0.9)" },
          children: v("span", {
            className: "sarufi-flex-start",
            style: {
              width: "100%",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            },
            children: v("span", { children: e }),
          }),
        }),
        v("button", {
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--sent-box-text-color)",
          },
          className: "sarufi-button",
          onClick: () => Z0(e),
          children: v(Q0, {}),
        }),
      ],
    });
function Z0(e) {
  const t = document.createElement("a");
  (t.href = e),
    (t.download = "sarufi_document"),
    (t.download = e.replace(/^.*[\\\/]/, "")),
    document.body.appendChild(t),
    t.click(),
    t.remove();
}
const q0 = ({
    chat: e,
    mode: t,
    fontFamily: n,
    fontSize: r,
    messageIndex: l,
  }) => {
    var i, o, s, u, a, d, h, g, E, w, S, D, f, c, p, m, N, R, P, L, B, k, W, Z;
    return I(Ne, {
      children: [
        ((i = e == null ? void 0 : e.actions) == null
          ? void 0
          : i.find((x) => (x == null ? void 0 : x.send_images))) &&
          ((u =
            (s =
              (o = e == null ? void 0 : e.actions) == null
                ? void 0
                : o.find((x) => (x == null ? void 0 : x.send_images))) == null
              ? void 0
              : s.send_images) == null
            ? void 0
            : u.map((x, y) =>
                v(
                  Hn,
                  {
                    url: x.link,
                    caption: (x == null ? void 0 : x.caption) ?? "",
                    type: "images",
                    mode: t,
                    fontFamily: n,
                    fontSize: r,
                    index: y,
                    mediaId: `sarufi-images-player-${l}-${y}`,
                    chat: e,
                  },
                  y
                )
              )),
        ((a = e == null ? void 0 : e.actions) == null
          ? void 0
          : a.find((x) => (x == null ? void 0 : x.send_stickers))) &&
          ((g =
            (h =
              (d = e == null ? void 0 : e.actions) == null
                ? void 0
                : d.find((x) => (x == null ? void 0 : x.send_stickers))) == null
              ? void 0
              : h.send_stickers) == null
            ? void 0
            : g.map((x, y) =>
                v(
                  Hn,
                  {
                    url: x.link,
                    caption: (x == null ? void 0 : x.caption) ?? "",
                    type: "stickers",
                    mode: t,
                    fontFamily: n,
                    fontSize: r,
                    index: y,
                    mediaId: `sarufi-stickers-player-${l}-${y}`,
                    chat: e,
                  },
                  y
                )
              )),
        ((E = e == null ? void 0 : e.actions) == null
          ? void 0
          : E.find((x) => (x == null ? void 0 : x.send_videos))) &&
          ((D =
            (S =
              (w = e == null ? void 0 : e.actions) == null
                ? void 0
                : w.find((x) => (x == null ? void 0 : x.send_videos))) == null
              ? void 0
              : S.send_videos) == null
            ? void 0
            : D.map((x, y) =>
                v(
                  Hn,
                  {
                    url: x.link,
                    caption: (x == null ? void 0 : x.caption) ?? "",
                    type: "videos",
                    mode: t,
                    fontFamily: n,
                    fontSize: r,
                    index: y,
                    mediaId: `sarufi-videos-player-${l}-${y}`,
                    chat: e,
                  },
                  y
                )
              )),
        ((f = e == null ? void 0 : e.actions) == null
          ? void 0
          : f.find((x) => (x == null ? void 0 : x.send_audios))) &&
          ((m =
            (p =
              (c = e == null ? void 0 : e.actions) == null
                ? void 0
                : c.find((x) => (x == null ? void 0 : x.send_audios))) == null
              ? void 0
              : p.send_audios) == null
            ? void 0
            : m.map((x, y) =>
                v(
                  Hn,
                  {
                    url: x.link,
                    caption: (x == null ? void 0 : x.caption) ?? "",
                    type: "audios",
                    mode: t,
                    fontFamily: n,
                    fontSize: r,
                    index: y,
                    mediaId: `sarufi-audios-player-${l}-${y}`,
                    chat: e,
                  },
                  y
                )
              )),
        ((N = e == null ? void 0 : e.actions) == null
          ? void 0
          : N.find((x) => (x == null ? void 0 : x.send_documents))) &&
          ((L =
            (P =
              (R = e == null ? void 0 : e.actions) == null
                ? void 0
                : R.find((x) => (x == null ? void 0 : x.send_documents))) ==
            null
              ? void 0
              : P.send_documents) == null
            ? void 0
            : L.map((x, y) =>
                v(
                  Hn,
                  {
                    url: x.link,
                    caption: (x == null ? void 0 : x.caption) ?? "",
                    type: "documents",
                    mode: t,
                    fontFamily: n,
                    fontSize: r,
                    index: y,
                    mediaId: `sarufi-documents-player-${l}-${y}`,
                    chat: e,
                  },
                  y
                )
              )),
        ((B = e == null ? void 0 : e.actions) == null
          ? void 0
          : B.find((x) => (x == null ? void 0 : x.send_locations))) &&
          ((Z =
            (W =
              (k = e == null ? void 0 : e.actions) == null
                ? void 0
                : k.find((x) => (x == null ? void 0 : x.send_locations))) ==
            null
              ? void 0
              : W.send_locations) == null
            ? void 0
            : Z.map((x, y) =>
                v(
                  "div",
                  {
                    style: {
                      fontSize: "calc(var(--sarufi-font-size) * 0.9 )",
                      background:
                        t === "dark"
                          ? "rgba(255, 255, 255, .1)"
                          : "rgba(0,0,0,.1)",
                      borderRadius: ".3rem",
                      padding: ".1rem .5rem",
                    },
                    children: I("div", {
                      style: { margin: ".5rem" },
                      children: [
                        v("div", {
                          style: { marginBottom: ".4rem" },
                          children: "Location:",
                        }),
                        I("div", {
                          children: [
                            (x == null ? void 0 : x.latitude) &&
                              v("div", {
                                children: I("p", {
                                  style: { marginTop: ".2rem" },
                                  children: [
                                    v("span", {
                                      style: { opacity: 0.7 },
                                      children: "Latitude:",
                                    }),
                                    " ",
                                    x == null ? void 0 : x.latitude,
                                  ],
                                }),
                              }),
                            (x == null ? void 0 : x.longitude) &&
                              v("div", {
                                children: I("p", {
                                  style: { marginTop: ".2rem" },
                                  children: [
                                    v("span", {
                                      style: { opacity: 0.7 },
                                      children: "Longitude:",
                                    }),
                                    " ",
                                    x == null ? void 0 : x.longitude,
                                  ],
                                }),
                              }),
                            (x == null ? void 0 : x.name) &&
                              v("div", {
                                children: I("p", {
                                  style: { marginTop: ".2rem" },
                                  children: [
                                    v("span", {
                                      style: { opacity: 0.7 },
                                      children: "Name:",
                                    }),
                                    " ",
                                    x == null ? void 0 : x.name,
                                  ],
                                }),
                              }),
                            (x == null ? void 0 : x.address) &&
                              v("div", {
                                children: I("p", {
                                  style: { marginTop: ".2rem" },
                                  children: [
                                    v("span", {
                                      style: { opacity: 0.7 },
                                      children: "Address:",
                                    }),
                                    " ",
                                    x == null ? void 0 : x.address,
                                  ],
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  },
                  y
                )
              )),
      ],
    });
  },
  b0 = ({
    id: e,
    open: t,
    botId: n,
    API_URL: r,
    mode: l,
    primaryColor: i,
    token: o,
    fontFamily: s,
    fontSize: u,
  }) => {
    const [a, d] = A.useState([]),
      [h, g] = A.useState(""),
      [E, w] = A.useState(!1),
      S = A.useRef(null),
      D = (f, c, p) => {
        f &&
          (d((m) => [...m, { message: f, sent: !0 }]),
          g(""),
          w(!0),
          Jf.post(
            `${r}${o ? "/conversation/whatsapp" : "/plugin/conversation/" + n}`,
            {
              message: p ?? f,
              chat_id: e,
              bot_id: n,
              message_type: c ?? "text",
            },
            {
              headers: {
                "Content-Type": "application/json",
                ...(o ? { Authorization: "Bearer " + o } : {}),
              },
            }
          )
            .then((m) => {
              d((N) => {
                var R, P, L, B, k, W, Z, x, y, le, oe, K, T, F, M, j, V, Oe;
                return [
                  ...N,
                  {
                    message:
                      typeof ((R = m == null ? void 0 : m.data) == null
                        ? void 0
                        : R.actions) == "object" &&
                      (B =
                        (L =
                          (P = m == null ? void 0 : m.data) == null
                            ? void 0
                            : P.actions) == null
                          ? void 0
                          : L.find((X) =>
                              X == null ? void 0 : X.send_message
                            )) != null &&
                      B.send_message
                        ? (Z =
                            (W =
                              (k = m == null ? void 0 : m.data) == null
                                ? void 0
                                : k.actions) == null
                              ? void 0
                              : W.find((X) =>
                                  X == null ? void 0 : X.send_message
                                )) == null
                          ? void 0
                          : Z.send_message
                        : typeof ((x = m == null ? void 0 : m.data) == null
                            ? void 0
                            : x.message) == "string"
                        ? (y = m == null ? void 0 : m.data) == null
                          ? void 0
                          : y.message
                        : (oe =
                            (le = m == null ? void 0 : m.data) == null
                              ? void 0
                              : le.message) == null
                        ? void 0
                        : oe.join(`
`),
                    received: !0,
                    chat: m == null ? void 0 : m.data,
                    type:
                      (K = m == null ? void 0 : m.data) != null && K.actions
                        ? (j =
                            (M =
                              (F =
                                (T = m == null ? void 0 : m.data) == null
                                  ? void 0
                                  : T.actions) == null
                                ? void 0
                                : F.find((X) =>
                                    X == null ? void 0 : X.send_reply_button
                                  )) == null
                              ? void 0
                              : M.send_reply_button) == null
                          ? void 0
                          : j.type
                        : "",
                    actions:
                      (V = m == null ? void 0 : m.data) == null
                        ? void 0
                        : V.actions,
                    next_state:
                      (Oe = m == null ? void 0 : m.data) == null
                        ? void 0
                        : Oe.next_state,
                  },
                ];
              }),
                w(!1);
            })
            .catch((m) => {
              d((N) => {
                var R, P, L, B, k, W, Z, x, y, le, oe, K, T;
                return [
                  ...N,
                  {
                    message:
                      typeof ((P =
                        (R = m == null ? void 0 : m.response) == null
                          ? void 0
                          : R.data) == null
                        ? void 0
                        : P.detail) == "string"
                        ? (B =
                            (L = m == null ? void 0 : m.response) == null
                              ? void 0
                              : L.data) == null
                          ? void 0
                          : B.detail
                        : typeof ((W =
                            (k = m == null ? void 0 : m.response) == null
                              ? void 0
                              : k.data) == null
                            ? void 0
                            : W.detail) == "object"
                        ? (y =
                            (x =
                              (Z = m == null ? void 0 : m.response) == null
                                ? void 0
                                : Z.data) == null
                              ? void 0
                              : x.detail[0]) == null
                          ? void 0
                          : y.msg
                        : typeof ((oe =
                            (le = m == null ? void 0 : m.response) == null
                              ? void 0
                              : le.data) == null
                            ? void 0
                            : oe.message) == "string"
                        ? (T =
                            (K = m == null ? void 0 : m.response) == null
                              ? void 0
                              : K.data) == null
                          ? void 0
                          : T.message
                        : m == null
                        ? void 0
                        : m.message,
                  },
                ];
              }),
                w(!1);
            }));
      };
    return (
      A.useEffect(() => {
        var f;
        S.current &&
          (S.current.scrollTop =
            ((f = S.current) == null ? void 0 : f.scrollHeight) -
            S.current.clientHeight);
      }, [a]),
      A.useEffect(() => {
        d([]), g("");
      }, [t]),
      I(Ne, {
        children: [
          v("div", {
            ref: S,
            id: "sarufi-chat-container",
            style: {
              background: "var(--sarufi-chatbox-bg)",
              height: "calc( 100% - 100px )",
              overflowY: "auto",
              position: "relative",
            },
            className: "sarufi-scroll-bar",
            children: I("div", {
              style: { position: "relative", padding: "1rem" },
              children: [
                v("div", {
                  className: "sarufi-message-body sarufi-message-body-w-arrow",
                  style: {
                    maxWidth: 280,
                    background: "var(--sarufi-received-box-bg)",
                    padding: "6px 8px 8px 9px",
                    marginTop: ".7rem",
                    position: "relative",
                    borderRadius: ".3rem",
                  },
                  children: v("p", {
                    style: { fontFamily: "var(--sarufi-font-family)" },
                    children:
                      'Send a message to initiate conversation i.e "Hello"',
                  }),
                }),
                I("ul", {
                  children: [
                    a == null
                      ? void 0
                      : a.map((f, c) =>
                          v(
                            eh,
                            {
                              chat: f,
                              onSubmit: D,
                              mode: l,
                              fontFamily: s,
                              fontSize: u,
                              index: c,
                            },
                            c
                          )
                        ),
                    E &&
                      v("div", {
                        className:
                          "sarufi-message-body sarufi-message-body-w-arrow",
                        style: {
                          background: "var(--sarufi-received-box-bg)",
                          padding: "6px 8px 8px 9px",
                          marginTop: ".7rem",
                          position: "relative",
                          borderRadius: ".3rem",
                          maxWidth: 100,
                        },
                        children: v(kr, {}),
                      }),
                  ],
                }),
              ],
            }),
          }),
          I("form", {
            style: {
              position: "absolute",
              background:
                l === "light" ? "white" : "var(--sarufi-primary-color)",
            },
            onSubmit: (f) => {
              f.preventDefault(), D(h);
            },
            children: [
              v(Y0, {
                value: h,
                mode: l,
                primaryColor: i,
                autoFocus: !0,
                placeholder: "Compose a message",
                save: () => D(h),
                onChange: (f) => {
                  g(f.target.value);
                },
              }),
              v(K0, {
                mode: l,
                label: v("span", {
                  className: "sarufi-flex-center",
                  children: v(W0, { size: 30 }),
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  eh = ({
    chat: e,
    onSubmit: t,
    mode: n,
    fontFamily: r,
    fontSize: l,
    index: i,
  }) => {
    var g,
      E,
      w,
      S,
      D,
      f,
      c,
      p,
      m,
      N,
      R,
      P,
      L,
      B,
      k,
      W,
      Z,
      x,
      y,
      le,
      oe,
      K,
      T,
      F,
      M,
      j,
      V,
      Oe,
      X,
      it,
      ne,
      ye,
      Ze,
      en,
      Fs,
      Ms,
      Is,
      As,
      Bs,
      js,
      Us;
    let o =
        (e == null ? void 0 : e.type) === "button"
          ? (S =
              (w =
                (E =
                  (g = e == null ? void 0 : e.actions) == null
                    ? void 0
                    : g.find((O) =>
                        O == null ? void 0 : O.send_reply_button
                      )) == null
                  ? void 0
                  : E.send_reply_button) == null
                ? void 0
                : w.body) == null
            ? void 0
            : S.text
          : e == null
          ? void 0
          : e.message,
      s =
        (D = e == null ? void 0 : e.actions) == null
          ? void 0
          : D.find((O) => Object.keys(O)[0] === "send_button");
    const [u, a] = A.useState(!1);
    A.useEffect(() => {
      let O = document.getElementById("sarufi-chat-container");
      u && O && (O.style.overflowY = "hidden"),
        !u && O && (O.style.overflowY = "auto");
    }, [u]);
    const d = (O) => {
      if (O.key === "Escape") return a(!1);
    };
    A.useEffect(
      () => (
        document.addEventListener("keydown", d, !1),
        () => {
          document.removeEventListener("keydown", d, !1);
        }
      ),
      []
    );
    let h = !1;
    return (
      (f = e == null ? void 0 : e.actions) != null &&
        f.find(
          (O) =>
            (O.send_audios && O.send_audios.length > 0) ||
            (O.send_images && O.send_images.length > 0) ||
            (O.send_videos && O.send_videos.length > 0) ||
            (O.send_documents && O.send_documents.length > 0) ||
            (O.send_stickers && O.send_stickers.length > 0) ||
            (O.send_locations && O.send_locations.length > 0)
        ) &&
        (h = !0),
      I("li", {
        className: `${e != null && e.sent ? "sarufi-flex-end" : ""}`,
        style: { position: "relative" },
        children: [
          !(e != null && e.sent) &&
            v("div", {
              style: { maxWidth: 280, width: "80%" },
              children: v(q0, {
                chat: e,
                mode: n,
                fontFamily: r,
                fontSize: l,
                messageIndex: i,
              }),
            }),
          I("div", {
            className: `sarufi-message-body ${
              h ? "" : "sarufi-message-body-w-arrow"
            } ${e != null && e.sent ? "sent" : ""}`,
            style: {
              background:
                e != null && e.sent
                  ? "var(--sarufi-sent-box-bg)"
                  : "var(--sarufi-received-box-bg)",
              maxWidth: 280,
              width: h ? "100%" : "auto",
              minWidth: "50px",
              padding: "6px 8px 8px 9px",
              marginTop: h ? "0" : "12px",
              position: "relative",
              borderRadius:
                ((R =
                  (N =
                    (m =
                      (p =
                        (c = e == null ? void 0 : e.actions) == null
                          ? void 0
                          : c.find((O) =>
                              O == null ? void 0 : O.send_reply_button
                            )) == null
                        ? void 0
                        : p.send_reply_button) == null
                      ? void 0
                      : m.action) == null
                    ? void 0
                    : N.buttons) == null
                  ? void 0
                  : R.length) > 0 ||
                ((!o || typeof o != "string") && e != null && e.actions && s)
                  ? "0rem"
                  : ".3rem",
              ...(!h && !(e != null && e.sent)
                ? { borderTopRightRadius: ".3rem" }
                : {}),
            },
            children: [
              (!o || typeof o != "string") &&
                (e == null ? void 0 : e.actions) &&
                s &&
                I(Ne, {
                  children: [
                    ((P = s.send_button) == null ? void 0 : P.header) &&
                      v(Kr, {
                        message:
                          (L = s.send_button) == null ? void 0 : L.header,
                        style: { marginBottom: "1rem" },
                      }),
                    ((B = s.send_button) == null ? void 0 : B.body) &&
                      v(Kr, {
                        message: (k = s.send_button) == null ? void 0 : k.body,
                      }),
                    ((W = s.send_button) == null ? void 0 : W.footer) &&
                      v(Kr, {
                        message:
                          (Z = s.send_button) == null ? void 0 : Z.footer,
                        style: {
                          marginTop: "1rem",
                          fontSize: ".9em",
                          opacity: 0.7,
                        },
                      }),
                  ],
                }),
              ((e == null ? void 0 : e.type) || o) &&
                !s &&
                v(Kr, {
                  message:
                    typeof o == "string"
                      ? o
                      : o == null
                      ? void 0
                      : o.join(`
`),
                }),
            ],
          }),
          (e == null ? void 0 : e.type) === "button" &&
            v("ul", {
              className: "sarufi-flex-wide sarufi-flex-wrap",
              style: { maxWidth: 280 },
              children:
                (K =
                  (oe =
                    (le =
                      (y =
                        (x = e == null ? void 0 : e.actions) == null
                          ? void 0
                          : x.find((O) =>
                              O == null ? void 0 : O.send_reply_button
                            )) == null
                        ? void 0
                        : y.send_reply_button) == null
                      ? void 0
                      : le.action) == null
                    ? void 0
                    : oe.buttons) == null
                  ? void 0
                  : K.map((O, ti) => {
                      var $s, Hs, Ws, Vs, Qs, Ks, Ys, Xs, Js, Gs, Zs;
                      return v(
                        "li",
                        {
                          style: {
                            width: "100%",
                            marginTop: "2px",
                            background: "var(--sarufi-received-box-bg)",
                            borderBottomLeftRadius:
                              ti ===
                              ((Qs =
                                (Vs =
                                  (Ws =
                                    (Hs =
                                      ($s = e == null ? void 0 : e.actions) ==
                                      null
                                        ? void 0
                                        : $s.find((qe) =>
                                            qe == null
                                              ? void 0
                                              : qe.send_reply_button
                                          )) == null
                                      ? void 0
                                      : Hs.send_reply_button) == null
                                    ? void 0
                                    : Ws.action) == null
                                  ? void 0
                                  : Vs.buttons) == null
                                ? void 0
                                : Qs.length) -
                                1
                                ? ".3rem"
                                : "0",
                            borderBottomRightRadius:
                              ti ===
                              ((Gs =
                                (Js =
                                  (Xs =
                                    (Ys =
                                      (Ks = e == null ? void 0 : e.actions) ==
                                      null
                                        ? void 0
                                        : Ks.find((qe) =>
                                            qe == null
                                              ? void 0
                                              : qe.send_reply_button
                                          )) == null
                                      ? void 0
                                      : Ys.send_reply_button) == null
                                    ? void 0
                                    : Xs.action) == null
                                  ? void 0
                                  : Js.buttons) == null
                                ? void 0
                                : Gs.length) -
                                1
                                ? ".3rem"
                                : "0",
                          },
                          children: v("button", {
                            onClick: () => {
                              var qe, qs;
                              return t(
                                (qe = O == null ? void 0 : O.reply) == null
                                  ? void 0
                                  : qe.title,
                                (e == null ? void 0 : e.type) !== "text"
                                  ? "interactive"
                                  : "text",
                                (qs = O == null ? void 0 : O.reply) == null
                                  ? void 0
                                  : qs.id
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
                              padding: "10px",
                              fontFamily: "var(--sarufi-font-family)",
                            },
                            className: "sarufi-flex-center sarufi-flex-wrap",
                            children:
                              (Zs = O == null ? void 0 : O.reply) == null
                                ? void 0
                                : Zs.title,
                          }),
                        },
                        ti
                      );
                    }),
            }),
          (!o || typeof o != "string") &&
            (e == null ? void 0 : e.actions) &&
            s &&
            v("div", {
              className: "bg-neutral-0 sarufi-flex-center",
              style: {
                maxWidth: 280,
                marginTop: "2px",
                background: "var(--sarufi-received-box-bg)",
                borderBottomLeftRadius: ".3rem",
                borderBottomRightRadius: ".3rem",
              },
              children: v("button", {
                onClick: () => a(!0),
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
                  padding: "10px",
                  fontFamily: "var(--sarufi-font-family)",
                },
                children:
                  ((T = s.send_button) == null ? void 0 : T.button) ??
                  ((M = (F = s.send_button) == null ? void 0 : F.action) == null
                    ? void 0
                    : M.button),
              }),
            }),
          (!o || typeof o != "string") &&
            (e == null ? void 0 : e.actions) &&
            s &&
            u &&
            I("div", {
              className: "choices",
              style: {
                position: "fixed",
                zIndex: 100004,
                transition: "0.35s linear",
              },
              children: [
                v("div", {
                  className: "sarufi-backdrop",
                  style: {
                    position: "fixed",
                    background: "rgba(0, 0, 0, 0.6)",
                    zIndex: 100004,
                    transition: "0.35s linear",
                  },
                  onClick: () => a(!1),
                }),
                I("div", {
                  className: "sarufi-options sarufi-scroll-bar",
                  style: {
                    zIndex: 100005,
                    background: "var(--sarufi-received-box-bg)",
                    color: "var(--sarufi-received-box-color)",
                    borderRadius: ".3rem",
                  },
                  children: [
                    I("div", {
                      className: "sarufi-flex-start",
                      style: {
                        padding: "1rem",
                        paddingBottom: ".5rem",
                        marginBottom: "1rem",
                      },
                      children: [
                        v("button", {
                          onClick: () => a(!1),
                          style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--sarufi-received-box-color)",
                          },
                          className: "sarufi-button",
                          children: v(Ds, { size: 18 }),
                        }),
                        ((Oe =
                          (V =
                            (j = s.send_button) == null ? void 0 : j.action) ==
                          null
                            ? void 0
                            : V.sections[0]) == null
                          ? void 0
                          : Oe.title) &&
                          v("p", {
                            style: {
                              width: "100%",
                              marginLeft: "1rem",
                              paddingRight: "2rem",
                              textAlign: "center",
                              fontFamily: "var(--sarufi-font-family)",
                            },
                            children:
                              (ne =
                                (it =
                                  (X = s.send_button) == null
                                    ? void 0
                                    : X.action) == null
                                  ? void 0
                                  : it.sections[0]) == null
                                ? void 0
                                : ne.title,
                          }),
                      ],
                    }),
                    v("ul", {
                      style: { padding: "1rem", paddingTop: "0" },
                      children:
                        ((Ms =
                          (Fs =
                            (en =
                              (Ze =
                                (ye = s.send_button) == null
                                  ? void 0
                                  : ye.action) == null
                                ? void 0
                                : Ze.sections[0]) == null
                              ? void 0
                              : en.rows) == null
                            ? void 0
                            : Fs.filter((O) =>
                                O == null ? void 0 : O.title
                              )) == null
                          ? void 0
                          : Ms.length) > 0 &&
                        ((Us =
                          (js =
                            (Bs =
                              (As =
                                (Is = s.send_button) == null
                                  ? void 0
                                  : Is.action) == null
                                ? void 0
                                : As.sections[0]) == null
                              ? void 0
                              : Bs.rows) == null
                            ? void 0
                            : js.filter((O) =>
                                O == null ? void 0 : O.title
                              )) == null
                          ? void 0
                          : Us.map((O) =>
                              I(
                                "li",
                                {
                                  className: "sarufi-flex-wide ",
                                  style: {
                                    marginBottom: "1.5rem",
                                    cursor: "pointer",
                                  },
                                  onClick: () => {
                                    t(
                                      O == null ? void 0 : O.title,
                                      "interactive",
                                      O == null ? void 0 : O.id
                                    ),
                                      a(!1);
                                  },
                                  children: [
                                    I("div", {
                                      children: [
                                        v("p", {
                                          className: "text-small-200",
                                          style: {
                                            fontFamily:
                                              "var(--sarufi-font-family)",
                                          },
                                          children:
                                            O == null ? void 0 : O.title,
                                        }),
                                        v("p", {
                                          style: {
                                            opacity: ".7",
                                            fontSize: ".9em",
                                            fontFamily:
                                              "var(--sarufi-font-family)",
                                          },
                                          children:
                                            O == null ? void 0 : O.description,
                                        }),
                                      ],
                                    }),
                                    v("div", {
                                      children: v("span", {
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
                                O == null ? void 0 : O.title
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
  Kr = ({ message: e, className: t, style: n }) =>
    v(Ne, {
      children:
        typeof e == "string" &&
        v("p", {
          style: {
            fontFamily: "var(--sarufi-font-family)",
            width: "100%",
            ...n,
          },
          className: t ?? "",
          dangerouslySetInnerHTML: { __html: qf(bf(e)) },
        }),
    }),
  qf = (e) => {
    const t =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    let n = [];
    return (
      e.split(" ").forEach((l) => {
        let i = l.split(`
`),
          o = [];
        i.forEach((s) => {
          if (!s.includes(".")) return (o = [...o, s]);
          if (!t.test(s)) return (o = [...o, s]);
          const a = /^(?:(?:https?|ftp):\/\/)/i.test(s) ? s : "http://" + s;
          return (o = [
            ...o,
            '<a href="' + a + '" target="_blank">' + s + "</a>",
          ]);
        }),
          (n = [
            ...n,
            o.join(`
`),
          ]);
      }),
      n.join(" ")
    );
  },
  bf = (e) => {
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
  th = ({ botId: e, token: t, theme: n }) => {
    const [r, l] = A.useState(!1),
      [i, o] = A.useState(new Date().valueOf()),
      [s, u] = A.useState({
        primaryColor: "#2776EA",
        borderColor: "lightgray",
        fontSize: "14",
        fontFamily: "InterRegular",
        sentBoxBg: "#D8F9D4",
        receivedBoxBg: "white",
        sentBoxColor: "black",
        receivedBoxColor: "black",
        chatboxBg: "#EDECE1",
        receivedBoxLinkColor: "blue",
        sentBoxLinkColor: "white",
        buttonSize: "md",
        mode: "light",
        title: "Chat",
        placement: "right",
        height: 500,
        width: 400,
      }),
      a = "https://api.sarufi.io",
      d = document.createElement("div");
    (d.id = "sarufi-modal"),
      document.getElementById("sarufi-modal") || document.body.appendChild(d);
    const h = async () => {
      if (n) return u(n);
      try {
        const { data: E } = await Jf.get(
          `${a}/plugin/${
            (window == null ? void 0 : window.botId) ?? e
          }/unauthenticated`
        );
        u(E == null ? void 0 : E.theme_config);
      } catch {}
    };
    A.useEffect(() => {
      h();
    }, [n]);
    const g = {
      "--sarufi-primary-color":
        (s == null ? void 0 : s.mode) === "dark"
          ? "#202C33"
          : (s == null ? void 0 : s.primaryColor) ?? "#2776EA",
      "--sarufi-font-size": `${(s == null ? void 0 : s.fontSize) ?? 14}px`,
      "--sarufi-font-family":
        (s == null ? void 0 : s.fontFamily) === "InterRegular"
          ? "'Inter', sans-serif"
          : (s == null ? void 0 : s.fontFamily) === "PoppinsRegular"
          ? "'Poppins', sans-serif"
          : (s == null ? void 0 : s.fontFamily) === "inherit"
          ? "inherit"
          : "'Inter', sans-serif",
      "--sarufi-border-color":
        (s == null ? void 0 : s.borderColor) ?? "lightgray",
      "--sarufi-sent-box-bg":
        (s == null ? void 0 : s.mode) === "dark"
          ? "#005C4B"
          : (s == null ? void 0 : s.sentBoxBg) ?? "#D8F9D4",
      "--sarufi-received-box-bg":
        (s == null ? void 0 : s.mode) === "dark"
          ? "#202C33"
          : (s == null ? void 0 : s.receivedBoxBg) ?? "white",
      "--sarufi-sent-box-color":
        (s == null ? void 0 : s.mode) === "dark"
          ? "white"
          : (s == null ? void 0 : s.sentBoxColor) ?? "black",
      "--sarufi-received-box-color":
        (s == null ? void 0 : s.mode) === "dark"
          ? "white"
          : (s == null ? void 0 : s.receivedBoxColor) ?? "black",
      "--sarufi-sent-box-link-color":
        (s == null ? void 0 : s.mode) === "dark"
          ? "#53BDEB"
          : (s == null ? void 0 : s.sentBoxLinkColor) ?? "black",
      "--sarufi-received-box-link-color":
        (s == null ? void 0 : s.mode) === "dark"
          ? "#53BDEB"
          : (s == null ? void 0 : s.receivedBoxLinkColor) ?? "black",
      "--sarufi-chatbox-bg":
        (s == null ? void 0 : s.mode) === "dark"
          ? "#0B141A"
          : (s == null ? void 0 : s.chatboxBg) ?? "#EDECE1",
      "--sarufi-chatbox-height":
        s != null && s.height
          ? (s == null ? void 0 : s.height) + "px"
          : "500px",
      "--sarufi-chatbox-width":
        s != null && s.width ? (s == null ? void 0 : s.width) + "px" : "400px",
    };
    return I("div", {
      className: `sarufi-chat-container ${
        (s == null ? void 0 : s.placement) === "left"
          ? "sarufi-left-align"
          : "sarufi-right-align"
      } ${r ? "open" : ""}
      ${r ? "sarufi-shadow-xl" : "sarufi-flex-center"}`,
      style: {
        position: "fixed",
        fontFamily:
          (s == null ? void 0 : s.fontFamily) === "InterRegular"
            ? "'Inter', sans-serif"
            : (s == null ? void 0 : s.fontFamily) === "PoppinsRegular"
            ? "'Poppins', sans-serif"
            : (s == null ? void 0 : s.fontFamily) === "inherit"
            ? "inherit"
            : "'Inter', sans-serif",
        ...(r
          ? {}
          : {
              height:
                (s == null ? void 0 : s.buttonSize) === "lg" ? "70px" : "50px",
              width:
                (s == null ? void 0 : s.buttonSize) === "lg" ? "70px" : "50px",
            }),
        ...g,
      },
      children: [
        !r &&
          v("button", {
            className: "sarufi-shadow-xl sarufi-button",
            style: {
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              cursor: "pointer",
              borderRadius: "50%",
              height:
                (s == null ? void 0 : s.buttonSize) === "lg"
                  ? "70px"
                  : (s == null ? void 0 : s.buttonSize) === "sm"
                  ? "30px"
                  : "50px",
              width:
                (s == null ? void 0 : s.buttonSize) === "lg"
                  ? "70px"
                  : (s == null ? void 0 : s.buttonSize) === "sm"
                  ? "30px"
                  : "50px",
              background: (s == null ? void 0 : s.primaryColor) ?? "#2776EA",
              color: "white",
              border: "none",
            },
            onClick: () => l(!0),
            children: v(H0, {
              size: (s == null ? void 0 : s.buttonSize) === "sm" ? 20 : 30,
            }),
          }),
        r &&
          I("div", {
            style: {
              height: "100%",
              borderRadius: ".5rem",
              overflow: "hidden",
            },
            children: [
              I("div", {
                className: "sarufi-flex-wide text-neutral-0",
                style: {
                  height: "42px",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  background: "var(--sarufi-primary-color)",
                  color: "white",
                },
                children: [
                  v("p", {
                    className: "sarufi-ellipsed-text",
                    style: {
                      fontWeight: 600,
                      fontFamily: "var(--sarufi-font-family)",
                      fontSize:
                        s != null && s.fontSize
                          ? Number(s == null ? void 0 : s.fontSize) * 1.1
                          : "1.1em",
                    },
                    children: s == null ? void 0 : s.title,
                  }),
                  v("button", {
                    className: "flex-center sarufi-button",
                    onClick: () => {
                      l(!1), o(new Date().valueOf());
                    },
                    style: {
                      border: "none",
                      background: "none",
                      color: "white",
                      cursor: "pointer",
                    },
                    children: v(Ds, { size: 18, className: "text-neutral-0" }),
                  }),
                ],
              }),
              v(b0, {
                open: r,
                id: i,
                mode: (s == null ? void 0 : s.mode) ?? "light",
                primaryColor:
                  (s == null ? void 0 : s.primaryColor) ?? "#2776EA",
                fontFamily: s.fontFamily ?? "inherit",
                fontSize: s.fontSize ?? 16,
                botId: (window == null ? void 0 : window.botId) ?? e,
                token: t,
                API_URL: a,
              }),
            ],
          }),
      ],
    });
  };
zi.createRoot(document.getElementById("sarufi-chatbox")).render(
  v(gd.StrictMode, {
    children: v(th, { botId: (window == null ? void 0 : window.botId) ?? 16 }),
  })
);
