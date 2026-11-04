function B_(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const a = Object.getOwnPropertyDescriptor(r, s);
          a &&
            Object.defineProperty(
              e,
              s,
              a.get ? a : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s)
      if (a.type === "childList")
        for (const u of a.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const a = {};
    return (
      s.integrity && (a.integrity = s.integrity),
      s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const a = n(s);
    fetch(s.href, a);
  }
})();
var V_ =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function og(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var sg = { exports: {} },
  Za = {},
  ag = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = Symbol.for("react.element"),
  F_ = Symbol.for("react.portal"),
  Z_ = Symbol.for("react.fragment"),
  U_ = Symbol.for("react.strict_mode"),
  H_ = Symbol.for("react.profiler"),
  W_ = Symbol.for("react.provider"),
  $_ = Symbol.for("react.context"),
  q_ = Symbol.for("react.forward_ref"),
  G_ = Symbol.for("react.suspense"),
  K_ = Symbol.for("react.memo"),
  Y_ = Symbol.for("react.lazy"),
  Ef = Symbol.iterator;
function Q_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ef && e[Ef]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ug = Object.assign,
  cg = {};
function Er(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = cg),
    (this.updater = n || lg));
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function dg() {}
dg.prototype = Er.prototype;
function Xc(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = cg),
    (this.updater = n || lg));
}
var Jc = (Xc.prototype = new dg());
Jc.constructor = Xc;
ug(Jc, Er.prototype);
Jc.isPureReactComponent = !0;
var jf = Array.isArray,
  hg = Object.prototype.hasOwnProperty,
  ed = { current: null },
  fg = { key: !0, ref: !0, __self: !0, __source: !0 };
function pg(e, t, n) {
  var r,
    s = {},
    a = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      hg.call(t, r) && !fg.hasOwnProperty(r) && (s[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    for (var h = Array(c), p = 0; p < c; p++) h[p] = arguments[p + 2];
    s.children = h;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) s[r] === void 0 && (s[r] = c[r]);
  return {
    $$typeof: qo,
    type: e,
    key: a,
    ref: u,
    props: s,
    _owner: ed.current,
  };
}
function X_(e, t) {
  return {
    $$typeof: qo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function td(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qo;
}
function J_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mf = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? J_("" + e.key)
    : t.toString(36);
}
function Ws(e, t, n, r, s) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (a) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case qo:
          case F_:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (s = s(u)),
      (e = r === "" ? "." + $l(u, 0) : r),
      jf(s)
        ? ((n = ""),
          e != null && (n = e.replace(Mf, "$&/") + "/"),
          Ws(s, t, n, "", function (p) {
            return p;
          }))
        : s != null &&
          (td(s) &&
            (s = X_(
              s,
              n +
                (!s.key || (u && u.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Mf, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((u = 0), (r = r === "" ? "." : r + ":"), jf(e)))
    for (var c = 0; c < e.length; c++) {
      a = e[c];
      var h = r + $l(a, c);
      u += Ws(a, t, n, h, s);
    }
  else if (((h = Q_(e)), typeof h == "function"))
    for (e = h.call(e), c = 0; !(a = e.next()).done;)
      ((a = a.value), (h = r + $l(a, c++)), (u += Ws(a, t, n, h, s)));
  else if (a === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return u;
}
function ks(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Ws(e, r, "", "", function (a) {
      return t.call(n, a, s++);
    }),
    r
  );
}
function e1(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var st = { current: null },
  $s = { transition: null },
  t1 = {
    ReactCurrentDispatcher: st,
    ReactCurrentBatchConfig: $s,
    ReactCurrentOwner: ed,
  };
function mg() {
  throw Error("act(...) is not supported in production builds of React.");
}
ne.Children = {
  map: ks,
  forEach: function (e, t, n) {
    ks(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ks(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ks(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!td(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ne.Component = Er;
ne.Fragment = Z_;
ne.Profiler = H_;
ne.PureComponent = Xc;
ne.StrictMode = U_;
ne.Suspense = G_;
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t1;
ne.act = mg;
ne.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ug({}, e.props),
    s = e.key,
    a = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (u = ed.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (h in t)
      hg.call(t, h) &&
        !fg.hasOwnProperty(h) &&
        (r[h] = t[h] === void 0 && c !== void 0 ? c[h] : t[h]);
  }
  var h = arguments.length - 2;
  if (h === 1) r.children = n;
  else if (1 < h) {
    c = Array(h);
    for (var p = 0; p < h; p++) c[p] = arguments[p + 2];
    r.children = c;
  }
  return { $$typeof: qo, type: e.type, key: s, ref: a, props: r, _owner: u };
};
ne.createContext = function (e) {
  return (
    (e = {
      $$typeof: $_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: W_, _context: e }),
    (e.Consumer = e)
  );
};
ne.createElement = pg;
ne.createFactory = function (e) {
  var t = pg.bind(null, e);
  return ((t.type = e), t);
};
ne.createRef = function () {
  return { current: null };
};
ne.forwardRef = function (e) {
  return { $$typeof: q_, render: e };
};
ne.isValidElement = td;
ne.lazy = function (e) {
  return { $$typeof: Y_, _payload: { _status: -1, _result: e }, _init: e1 };
};
ne.memo = function (e, t) {
  return { $$typeof: K_, type: e, compare: t === void 0 ? null : t };
};
ne.startTransition = function (e) {
  var t = $s.transition;
  $s.transition = {};
  try {
    e();
  } finally {
    $s.transition = t;
  }
};
ne.unstable_act = mg;
ne.useCallback = function (e, t) {
  return st.current.useCallback(e, t);
};
ne.useContext = function (e) {
  return st.current.useContext(e);
};
ne.useDebugValue = function () {};
ne.useDeferredValue = function (e) {
  return st.current.useDeferredValue(e);
};
ne.useEffect = function (e, t) {
  return st.current.useEffect(e, t);
};
ne.useId = function () {
  return st.current.useId();
};
ne.useImperativeHandle = function (e, t, n) {
  return st.current.useImperativeHandle(e, t, n);
};
ne.useInsertionEffect = function (e, t) {
  return st.current.useInsertionEffect(e, t);
};
ne.useLayoutEffect = function (e, t) {
  return st.current.useLayoutEffect(e, t);
};
ne.useMemo = function (e, t) {
  return st.current.useMemo(e, t);
};
ne.useReducer = function (e, t, n) {
  return st.current.useReducer(e, t, n);
};
ne.useRef = function (e) {
  return st.current.useRef(e);
};
ne.useState = function (e) {
  return st.current.useState(e);
};
ne.useSyncExternalStore = function (e, t, n) {
  return st.current.useSyncExternalStore(e, t, n);
};
ne.useTransition = function () {
  return st.current.useTransition();
};
ne.version = "18.3.1";
ag.exports = ne;
var b = ag.exports;
const nd = og(b),
  gg = B_({ __proto__: null, default: nd }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n1 = b,
  i1 = Symbol.for("react.element"),
  r1 = Symbol.for("react.fragment"),
  o1 = Object.prototype.hasOwnProperty,
  s1 = n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  a1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function vg(e, t, n) {
  var r,
    s = {},
    a = null,
    u = null;
  (n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (u = t.ref));
  for (r in t) o1.call(t, r) && !a1.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: i1,
    type: e,
    key: a,
    ref: u,
    props: s,
    _owner: s1.current,
  };
}
Za.Fragment = r1;
Za.jsx = vg;
Za.jsxs = vg;
sg.exports = Za;
var f = sg.exports,
  Ou = {},
  yg = { exports: {} },
  _t = {},
  xg = { exports: {} },
  _g = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, q) {
    var V = z.length;
    z.push(q);
    e: for (; 0 < V;) {
      var Z = (V - 1) >>> 1,
        ee = z[Z];
      if (0 < s(ee, q)) ((z[Z] = q), (z[V] = ee), (V = Z));
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var q = z[0],
      V = z.pop();
    if (V !== q) {
      z[0] = V;
      e: for (var Z = 0, ee = z.length, Ce = ee >>> 1; Z < Ce;) {
        var ue = 2 * (Z + 1) - 1,
          re = z[ue],
          Y = ue + 1,
          He = z[Y];
        if (0 > s(re, V))
          Y < ee && 0 > s(He, re)
            ? ((z[Z] = He), (z[Y] = V), (Z = Y))
            : ((z[Z] = re), (z[ue] = V), (Z = ue));
        else if (Y < ee && 0 > s(He, V)) ((z[Z] = He), (z[Y] = V), (Z = Y));
        else break e;
      }
    }
    return q;
  }
  function s(z, q) {
    var V = z.sortIndex - q.sortIndex;
    return V !== 0 ? V : z.id - q.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var u = Date,
      c = u.now();
    e.unstable_now = function () {
      return u.now() - c;
    };
  }
  var h = [],
    p = [],
    v = 1,
    g = null,
    x = 3,
    P = !1,
    S = !1,
    C = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    k = typeof clearTimeout == "function" ? clearTimeout : null,
    _ = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(z) {
    for (var q = n(p); q !== null;) {
      if (q.callback === null) r(p);
      else if (q.startTime <= z)
        (r(p), (q.sortIndex = q.expirationTime), t(h, q));
      else break;
      q = n(p);
    }
  }
  function N(z) {
    if (((C = !1), w(z), !S))
      if (n(h) !== null) ((S = !0), ie(A));
      else {
        var q = n(p);
        q !== null && Be(N, q.startTime - z);
      }
  }
  function A(z, q) {
    ((S = !1), C && ((C = !1), k(O), (O = -1)), (P = !0));
    var V = x;
    try {
      for (
        w(q), g = n(h);
        g !== null && (!(g.expirationTime > q) || (z && !se()));
      ) {
        var Z = g.callback;
        if (typeof Z == "function") {
          ((g.callback = null), (x = g.priorityLevel));
          var ee = Z(g.expirationTime <= q);
          ((q = e.unstable_now()),
            typeof ee == "function" ? (g.callback = ee) : g === n(h) && r(h),
            w(q));
        } else r(h);
        g = n(h);
      }
      if (g !== null) var Ce = !0;
      else {
        var ue = n(p);
        (ue !== null && Be(N, ue.startTime - q), (Ce = !1));
      }
      return Ce;
    } finally {
      ((g = null), (x = V), (P = !1));
    }
  }
  var I = !1,
    B = null,
    O = -1,
    W = 5,
    $ = -1;
  function se() {
    return !(e.unstable_now() - $ < W);
  }
  function ce() {
    if (B !== null) {
      var z = e.unstable_now();
      $ = z;
      var q = !0;
      try {
        q = B(!0, z);
      } finally {
        q ? Ue() : ((I = !1), (B = null));
      }
    } else I = !1;
  }
  var Ue;
  if (typeof _ == "function")
    Ue = function () {
      _(ce);
    };
  else if (typeof MessageChannel < "u") {
    var he = new MessageChannel(),
      $t = he.port2;
    ((he.port1.onmessage = ce),
      (Ue = function () {
        $t.postMessage(null);
      }));
  } else
    Ue = function () {
      j(ce, 0);
    };
  function ie(z) {
    ((B = z), I || ((I = !0), Ue()));
  }
  function Be(z, q) {
    O = j(function () {
      z(e.unstable_now());
    }, q);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || P || ((S = !0), ie(A));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (W = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return x;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(h);
    }),
    (e.unstable_next = function (z) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = x;
      }
      var V = x;
      x = q;
      try {
        return z();
      } finally {
        x = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, q) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var V = x;
      x = z;
      try {
        return q();
      } finally {
        x = V;
      }
    }),
    (e.unstable_scheduleCallback = function (z, q, V) {
      var Z = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? Z + V : Z))
          : (V = Z),
        z)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = V + ee),
        (z = {
          id: v++,
          callback: q,
          priorityLevel: z,
          startTime: V,
          expirationTime: ee,
          sortIndex: -1,
        }),
        V > Z
          ? ((z.sortIndex = V),
            t(p, z),
            n(h) === null &&
              z === n(p) &&
              (C ? (k(O), (O = -1)) : (C = !0), Be(N, V - Z)))
          : ((z.sortIndex = ee), t(h, z), S || P || ((S = !0), ie(A))),
        z
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (z) {
      var q = x;
      return function () {
        var V = x;
        x = q;
        try {
          return z.apply(this, arguments);
        } finally {
          x = V;
        }
      };
    }));
})(_g);
xg.exports = _g;
var l1 = xg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u1 = b,
  yt = l1;
function D(e) {
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
var wg = new Set(),
  So = {};
function Ei(e, t) {
  (_r(e, t), _r(e + "Capture", t));
}
function _r(e, t) {
  for (So[e] = t, e = 0; e < t.length; e++) wg.add(t[e]);
}
var xn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Du = Object.prototype.hasOwnProperty,
  c1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Af = {},
  zf = {};
function d1(e) {
  return Du.call(zf, e)
    ? !0
    : Du.call(Af, e)
      ? !1
      : c1.test(e)
        ? (zf[e] = !0)
        : ((Af[e] = !0), !1);
}
function h1(e, t, n, r) {
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
function f1(e, t, n, r) {
  if (t === null || typeof t > "u" || h1(e, t, n, r)) return !0;
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
function at(e, t, n, r, s, a, u) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = u));
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new at(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ke[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ke[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ke[e] = new at(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ke[e] = new at(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ke[e] = new at(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ke[e] = new at(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ke[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var id = /[\-:]([a-z])/g;
function rd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(id, rd);
    Ke[t] = new at(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(id, rd);
    Ke[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(id, rd);
  Ke[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ke[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new at(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ke[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function od(e, t, n, r) {
  var s = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (f1(t, n, s, r) && (n = null),
    r || s === null
      ? d1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sn = u1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ss = Symbol.for("react.element"),
  Xi = Symbol.for("react.portal"),
  Ji = Symbol.for("react.fragment"),
  sd = Symbol.for("react.strict_mode"),
  Iu = Symbol.for("react.profiler"),
  Pg = Symbol.for("react.provider"),
  kg = Symbol.for("react.context"),
  ad = Symbol.for("react.forward_ref"),
  Bu = Symbol.for("react.suspense"),
  Vu = Symbol.for("react.suspense_list"),
  ld = Symbol.for("react.memo"),
  jn = Symbol.for("react.lazy"),
  Sg = Symbol.for("react.offscreen"),
  Rf = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rf && e[Rf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Se = Object.assign,
  ql;
function ro(e) {
  if (ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ql = (t && t[1]) || "";
    }
  return (
    `
` +
    ql +
    e
  );
}
var Gl = !1;
function Kl(e, t) {
  if (!e || Gl) return "";
  Gl = !0;
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
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var s = p.stack.split(`
`),
          a = r.stack.split(`
`),
          u = s.length - 1,
          c = a.length - 1;
        1 <= u && 0 <= c && s[u] !== a[c];
      )
        c--;
      for (; 1 <= u && 0 <= c; u--, c--)
        if (s[u] !== a[c]) {
          if (u !== 1 || c !== 1)
            do
              if ((u--, c--, 0 > c || s[u] !== a[c])) {
                var h =
                  `
` + s[u].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    h.includes("<anonymous>") &&
                    (h = h.replace("<anonymous>", e.displayName)),
                  h
                );
              }
            while (1 <= u && 0 <= c);
          break;
        }
    }
  } finally {
    ((Gl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? ro(e) : "";
}
function p1(e) {
  switch (e.tag) {
    case 5:
      return ro(e.type);
    case 16:
      return ro("Lazy");
    case 13:
      return ro("Suspense");
    case 19:
      return ro("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Kl(e.type, !1)), e);
    case 11:
      return ((e = Kl(e.type.render, !1)), e);
    case 1:
      return ((e = Kl(e.type, !0)), e);
    default:
      return "";
  }
}
function Fu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ji:
      return "Fragment";
    case Xi:
      return "Portal";
    case Iu:
      return "Profiler";
    case sd:
      return "StrictMode";
    case Bu:
      return "Suspense";
    case Vu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kg:
        return (e.displayName || "Context") + ".Consumer";
      case Pg:
        return (e._context.displayName || "Context") + ".Provider";
      case ad:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ld:
        return (
          (t = e.displayName || null),
          t !== null ? t : Fu(e.type) || "Memo"
        );
      case jn:
        ((t = e._payload), (e = e._init));
        try {
          return Fu(e(t));
        } catch {}
    }
  return null;
}
function m1(e) {
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
      return Fu(t);
    case 8:
      return t === sd ? "StrictMode" : "Mode";
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
function Yn(e) {
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
function Cg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function g1(e) {
  var t = Cg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (u) {
          ((r = "" + u), a.call(this, u));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = "" + u;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Cs(e) {
  e._valueTracker || (e._valueTracker = g1(e));
}
function Tg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Cg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zu(e, t) {
  var n = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Of(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function bg(e, t) {
  ((t = t.checked), t != null && od(e, "checked", t, !1));
}
function Uu(e, t) {
  bg(e, t);
  var n = Yn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hu(e, t.type, Yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Df(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(
      (r !== "submit" && r !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Hu(e, t, n) {
  (t !== "number" || sa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var oo = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Yn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function If(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (oo(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Yn(n) };
}
function Lg(e, t) {
  var n = Yn(t.value),
    r = Yn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Bf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ng(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $u(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ng(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ts,
  Eg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ts = Ts || document.createElement("div"),
          Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ts.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function Co(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var co = {
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
  v1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(co).forEach(function (e) {
  v1.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (co[t] = co[e]));
  });
});
function jg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (co.hasOwnProperty(e) && co[e])
      ? ("" + t).trim()
      : t + "px";
}
function Mg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = jg(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var y1 = Se(
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
  },
);
function qu(e, t) {
  if (t) {
    if (y1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Gu(e, t) {
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
var Ku = null;
function ud(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Yu = null,
  mr = null,
  gr = null;
function Vf(e) {
  if ((e = Yo(e))) {
    if (typeof Yu != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = qa(t)), Yu(e.stateNode, e.type, t));
  }
}
function Ag(e) {
  mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
}
function zg() {
  if (mr) {
    var e = mr,
      t = gr;
    if (((gr = mr = null), Vf(e), t)) for (e = 0; e < t.length; e++) Vf(t[e]);
  }
}
function Rg(e, t) {
  return e(t);
}
function Og() {}
var Yl = !1;
function Dg(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return Rg(e, t, n);
  } finally {
    ((Yl = !1), (mr !== null || gr !== null) && (Og(), zg()));
  }
}
function To(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qa(n);
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Qu = !1;
if (xn)
  try {
    var Kr = {};
    (Object.defineProperty(Kr, "passive", {
      get: function () {
        Qu = !0;
      },
    }),
      window.addEventListener("test", Kr, Kr),
      window.removeEventListener("test", Kr, Kr));
  } catch {
    Qu = !1;
  }
function x1(e, t, n, r, s, a, u, c, h) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (v) {
    this.onError(v);
  }
}
var ho = !1,
  aa = null,
  la = !1,
  Xu = null,
  _1 = {
    onError: function (e) {
      ((ho = !0), (aa = e));
    },
  };
function w1(e, t, n, r, s, a, u, c, h) {
  ((ho = !1), (aa = null), x1.apply(_1, arguments));
}
function P1(e, t, n, r, s, a, u, c, h) {
  if ((w1.apply(this, arguments), ho)) {
    if (ho) {
      var p = aa;
      ((ho = !1), (aa = null));
    } else throw Error(D(198));
    la || ((la = !0), (Xu = p));
  }
}
function ji(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ig(e) {
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
function Ff(e) {
  if (ji(e) !== e) throw Error(D(188));
}
function k1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ji(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ;) {
    var s = n.return;
    if (s === null) break;
    var a = s.alternate;
    if (a === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === a.child) {
      for (a = s.child; a;) {
        if (a === n) return (Ff(s), e);
        if (a === r) return (Ff(s), t);
        a = a.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) ((n = s), (r = a));
    else {
      for (var u = !1, c = s.child; c;) {
        if (c === n) {
          ((u = !0), (n = s), (r = a));
          break;
        }
        if (c === r) {
          ((u = !0), (r = s), (n = a));
          break;
        }
        c = c.sibling;
      }
      if (!u) {
        for (c = a.child; c;) {
          if (c === n) {
            ((u = !0), (n = a), (r = s));
            break;
          }
          if (c === r) {
            ((u = !0), (r = a), (n = s));
            break;
          }
          c = c.sibling;
        }
        if (!u) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Bg(e) {
  return ((e = k1(e)), e !== null ? Vg(e) : null);
}
function Vg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Vg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fg = yt.unstable_scheduleCallback,
  Zf = yt.unstable_cancelCallback,
  S1 = yt.unstable_shouldYield,
  C1 = yt.unstable_requestPaint,
  Ne = yt.unstable_now,
  T1 = yt.unstable_getCurrentPriorityLevel,
  cd = yt.unstable_ImmediatePriority,
  Zg = yt.unstable_UserBlockingPriority,
  ua = yt.unstable_NormalPriority,
  b1 = yt.unstable_LowPriority,
  Ug = yt.unstable_IdlePriority,
  Ua = null,
  nn = null;
function L1(e) {
  if (nn && typeof nn.onCommitFiberRoot == "function")
    try {
      nn.onCommitFiberRoot(Ua, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Zt = Math.clz32 ? Math.clz32 : j1,
  N1 = Math.log,
  E1 = Math.LN2;
function j1(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((N1(e) / E1) | 0)) | 0);
}
var bs = 64,
  Ls = 4194304;
function so(e) {
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
function ca(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    a = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var c = u & ~s;
    c !== 0 ? (r = so(c)) : ((a &= u), a !== 0 && (r = so(a)));
  } else ((u = n & ~s), u !== 0 ? (r = so(u)) : a !== 0 && (r = so(a)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (a = t & -t), s >= a || (s === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t;)
      ((n = 31 - Zt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function M1(e, t) {
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
function A1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var u = 31 - Zt(a),
      c = 1 << u,
      h = s[u];
    (h === -1
      ? (!(c & n) || c & r) && (s[u] = M1(c, t))
      : h <= t && (e.expiredLanes |= c),
      (a &= ~c));
  }
}
function Ju(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Hg() {
  var e = bs;
  return ((bs <<= 1), !(bs & 4194240) && (bs = 64), e);
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Go(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Zt(t)),
    (e[t] = n));
}
function z1(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var s = 31 - Zt(n),
      a = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~a));
  }
}
function dd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n;) {
    var r = 31 - Zt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var de = 0;
function Wg(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var $g,
  hd,
  qg,
  Gg,
  Kg,
  ec = !1,
  Ns = [],
  In = null,
  Bn = null,
  Vn = null,
  bo = new Map(),
  Lo = new Map(),
  zn = [],
  R1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Uf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      In = null;
      break;
    case "dragenter":
    case "dragleave":
      Bn = null;
      break;
    case "mouseover":
    case "mouseout":
      Vn = null;
      break;
    case "pointerover":
    case "pointerout":
      bo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lo.delete(t.pointerId);
  }
}
function Yr(e, t, n, r, s, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [s],
      }),
      t !== null && ((t = Yo(t)), t !== null && hd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function O1(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((In = Yr(In, e, t, n, r, s)), !0);
    case "dragenter":
      return ((Bn = Yr(Bn, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Vn = Yr(Vn, e, t, n, r, s)), !0);
    case "pointerover":
      var a = s.pointerId;
      return (bo.set(a, Yr(bo.get(a) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (a = s.pointerId),
        Lo.set(a, Yr(Lo.get(a) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function Yg(e) {
  var t = yi(e.target);
  if (t !== null) {
    var n = ji(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ig(n)), t !== null)) {
          ((e.blockedOn = t),
            Kg(e.priority, function () {
              qg(n);
            }));
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
function qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = tc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Ku = r), n.target.dispatchEvent(r), (Ku = null));
    } else return ((t = Yo(n)), t !== null && hd(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Hf(e, t, n) {
  qs(e) && n.delete(t);
}
function D1() {
  ((ec = !1),
    In !== null && qs(In) && (In = null),
    Bn !== null && qs(Bn) && (Bn = null),
    Vn !== null && qs(Vn) && (Vn = null),
    bo.forEach(Hf),
    Lo.forEach(Hf));
}
function Qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ec ||
      ((ec = !0),
      yt.unstable_scheduleCallback(yt.unstable_NormalPriority, D1)));
}
function No(e) {
  function t(s) {
    return Qr(s, e);
  }
  if (0 < Ns.length) {
    Qr(Ns[0], e);
    for (var n = 1; n < Ns.length; n++) {
      var r = Ns[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    In !== null && Qr(In, e),
      Bn !== null && Qr(Bn, e),
      Vn !== null && Qr(Vn, e),
      bo.forEach(t),
      Lo.forEach(t),
      n = 0;
    n < zn.length;
    n++
  )
    ((r = zn[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < zn.length && ((n = zn[0]), n.blockedOn === null);)
    (Yg(n), n.blockedOn === null && zn.shift());
}
var vr = Sn.ReactCurrentBatchConfig,
  da = !0;
function I1(e, t, n, r) {
  var s = de,
    a = vr.transition;
  vr.transition = null;
  try {
    ((de = 1), fd(e, t, n, r));
  } finally {
    ((de = s), (vr.transition = a));
  }
}
function B1(e, t, n, r) {
  var s = de,
    a = vr.transition;
  vr.transition = null;
  try {
    ((de = 4), fd(e, t, n, r));
  } finally {
    ((de = s), (vr.transition = a));
  }
}
function fd(e, t, n, r) {
  if (da) {
    var s = tc(e, t, n, r);
    if (s === null) (au(e, t, r, ha, n), Uf(e, r));
    else if (O1(s, e, t, n, r)) r.stopPropagation();
    else if ((Uf(e, r), t & 4 && -1 < R1.indexOf(e))) {
      for (; s !== null;) {
        var a = Yo(s);
        if (
          (a !== null && $g(a),
          (a = tc(e, t, n, r)),
          a === null && au(e, t, r, ha, n),
          a === s)
        )
          break;
        s = a;
      }
      s !== null && r.stopPropagation();
    } else au(e, t, r, null, n);
  }
}
var ha = null;
function tc(e, t, n, r) {
  if (((ha = null), (e = ud(r)), (e = yi(e)), e !== null))
    if (((t = ji(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ig(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ha = e), null);
}
function Qg(e) {
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
      switch (T1()) {
        case cd:
          return 1;
        case Zg:
          return 4;
        case ua:
        case b1:
          return 16;
        case Ug:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var On = null,
  pd = null,
  Gs = null;
function Xg() {
  if (Gs) return Gs;
  var e,
    t = pd,
    n = t.length,
    r,
    s = "value" in On ? On.value : On.textContent,
    a = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === s[a - r]; r++);
  return (Gs = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Ks(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Es() {
  return !0;
}
function Wf() {
  return !1;
}
function wt(e) {
  function t(n, r, s, a, u) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = u),
      (this.currentTarget = null));
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(a) : a[c]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Es
        : Wf),
      (this.isPropagationStopped = Wf),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Es));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Es));
      },
      persist: function () {},
      isPersistent: Es,
    }),
    t
  );
}
var jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  md = wt(jr),
  Ko = Se({}, jr, { view: 0, detail: 0 }),
  V1 = wt(Ko),
  Xl,
  Jl,
  Xr,
  Ha = Se({}, Ko, {
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
    getModifierState: gd,
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
        : (e !== Xr &&
            (Xr && e.type === "mousemove"
              ? ((Xl = e.screenX - Xr.screenX), (Jl = e.screenY - Xr.screenY))
              : (Jl = Xl = 0),
            (Xr = e)),
          Xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  $f = wt(Ha),
  F1 = Se({}, Ha, { dataTransfer: 0 }),
  Z1 = wt(F1),
  U1 = Se({}, Ko, { relatedTarget: 0 }),
  eu = wt(U1),
  H1 = Se({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  W1 = wt(H1),
  $1 = Se({}, jr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  q1 = wt($1),
  G1 = Se({}, jr, { data: 0 }),
  qf = wt(G1),
  K1 = {
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
  Y1 = {
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
  Q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function X1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Q1[e]) ? !!t[e] : !1;
}
function gd() {
  return X1;
}
var J1 = Se({}, Ko, {
    key: function (e) {
      if (e.key) {
        var t = K1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ks(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Y1[e.keyCode] || "Unidentified"
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
    getModifierState: gd,
    charCode: function (e) {
      return e.type === "keypress" ? Ks(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ks(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  ew = wt(J1),
  tw = Se({}, Ha, {
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
  Gf = wt(tw),
  nw = Se({}, Ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gd,
  }),
  iw = wt(nw),
  rw = Se({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ow = wt(rw),
  sw = Se({}, Ha, {
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
  aw = wt(sw),
  lw = [9, 13, 27, 32],
  vd = xn && "CompositionEvent" in window,
  fo = null;
xn && "documentMode" in document && (fo = document.documentMode);
var uw = xn && "TextEvent" in window && !fo,
  Jg = xn && (!vd || (fo && 8 < fo && 11 >= fo)),
  Kf = " ",
  Yf = !1;
function ev(e, t) {
  switch (e) {
    case "keyup":
      return lw.indexOf(t.keyCode) !== -1;
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
function tv(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var er = !1;
function cw(e, t) {
  switch (e) {
    case "compositionend":
      return tv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yf = !0), Kf);
    case "textInput":
      return ((e = t.data), e === Kf && Yf ? null : e);
    default:
      return null;
  }
}
function dw(e, t) {
  if (er)
    return e === "compositionend" || (!vd && ev(e, t))
      ? ((e = Xg()), (Gs = pd = On = null), (er = !1), e)
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
      return Jg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hw = {
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
function Qf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hw[e.type] : t === "textarea";
}
function nv(e, t, n, r) {
  (Ag(r),
    (t = fa(t, "onChange")),
    0 < t.length &&
      ((n = new md("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var po = null,
  Eo = null;
function fw(e) {
  fv(e, 0);
}
function Wa(e) {
  var t = ir(e);
  if (Tg(t)) return e;
}
function pw(e, t) {
  if (e === "change") return t;
}
var iv = !1;
if (xn) {
  var tu;
  if (xn) {
    var nu = "oninput" in document;
    if (!nu) {
      var Xf = document.createElement("div");
      (Xf.setAttribute("oninput", "return;"),
        (nu = typeof Xf.oninput == "function"));
    }
    tu = nu;
  } else tu = !1;
  iv = tu && (!document.documentMode || 9 < document.documentMode);
}
function Jf() {
  po && (po.detachEvent("onpropertychange", rv), (Eo = po = null));
}
function rv(e) {
  if (e.propertyName === "value" && Wa(Eo)) {
    var t = [];
    (nv(t, Eo, e, ud(e)), Dg(fw, t));
  }
}
function mw(e, t, n) {
  e === "focusin"
    ? (Jf(), (po = t), (Eo = n), po.attachEvent("onpropertychange", rv))
    : e === "focusout" && Jf();
}
function gw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wa(Eo);
}
function vw(e, t) {
  if (e === "click") return Wa(t);
}
function yw(e, t) {
  if (e === "input" || e === "change") return Wa(t);
}
function xw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ht = typeof Object.is == "function" ? Object.is : xw;
function jo(e, t) {
  if (Ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Du.call(t, s) || !Ht(e[s], t[s])) return !1;
  }
  return !0;
}
function ep(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function tp(e, t) {
  var n = ep(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ep(n);
  }
}
function ov(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ov(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sv() {
  for (var e = window, t = sa(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sa(e.document);
  }
  return t;
}
function yd(e) {
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
function _w(e) {
  var t = sv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ov(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          a = Math.min(r.start, s);
        ((r = r.end === void 0 ? a : Math.min(r.end, s)),
          !e.extend && a > r && ((s = r), (r = a), (a = s)),
          (s = tp(n, a)));
        var u = tp(n, r);
        s &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var ww = xn && "documentMode" in document && 11 >= document.documentMode,
  tr = null,
  nc = null,
  mo = null,
  ic = !1;
function np(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ic ||
    tr == null ||
    tr !== sa(r) ||
    ((r = tr),
    "selectionStart" in r && yd(r)
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
    (mo && jo(mo, r)) ||
      ((mo = r),
      (r = fa(nc, "onSelect")),
      0 < r.length &&
        ((t = new md("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tr))));
}
function js(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nr = {
    animationend: js("Animation", "AnimationEnd"),
    animationiteration: js("Animation", "AnimationIteration"),
    animationstart: js("Animation", "AnimationStart"),
    transitionend: js("Transition", "TransitionEnd"),
  },
  iu = {},
  av = {};
xn &&
  ((av = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nr.animationend.animation,
    delete nr.animationiteration.animation,
    delete nr.animationstart.animation),
  "TransitionEvent" in window || delete nr.transitionend.transition);
function $a(e) {
  if (iu[e]) return iu[e];
  if (!nr[e]) return e;
  var t = nr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in av) return (iu[e] = t[n]);
  return e;
}
var lv = $a("animationend"),
  uv = $a("animationiteration"),
  cv = $a("animationstart"),
  dv = $a("transitionend"),
  hv = new Map(),
  ip =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ei(e, t) {
  (hv.set(e, t), Ei(t, [e]));
}
for (var ru = 0; ru < ip.length; ru++) {
  var ou = ip[ru],
    Pw = ou.toLowerCase(),
    kw = ou[0].toUpperCase() + ou.slice(1);
  ei(Pw, "on" + kw);
}
ei(lv, "onAnimationEnd");
ei(uv, "onAnimationIteration");
ei(cv, "onAnimationStart");
ei("dblclick", "onDoubleClick");
ei("focusin", "onFocus");
ei("focusout", "onBlur");
ei(dv, "onTransitionEnd");
_r("onMouseEnter", ["mouseout", "mouseover"]);
_r("onMouseLeave", ["mouseout", "mouseover"]);
_r("onPointerEnter", ["pointerout", "pointerover"]);
_r("onPointerLeave", ["pointerout", "pointerover"]);
Ei(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ei(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ei(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ei(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ei(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ao =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));
function rp(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), P1(r, t, void 0, e), (e.currentTarget = null));
}
function fv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var c = r[u],
            h = c.instance,
            p = c.currentTarget;
          if (((c = c.listener), h !== a && s.isPropagationStopped())) break e;
          (rp(s, c, p), (a = h));
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((c = r[u]),
            (h = c.instance),
            (p = c.currentTarget),
            (c = c.listener),
            h !== a && s.isPropagationStopped())
          )
            break e;
          (rp(s, c, p), (a = h));
        }
    }
  }
  if (la) throw ((e = Xu), (la = !1), (Xu = null), e);
}
function ge(e, t) {
  var n = t[lc];
  n === void 0 && (n = t[lc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (pv(t, e, 2, !1), n.add(r));
}
function su(e, t, n) {
  var r = 0;
  (t && (r |= 4), pv(n, e, r, t));
}
var Ms = "_reactListening" + Math.random().toString(36).slice(2);
function Mo(e) {
  if (!e[Ms]) {
    ((e[Ms] = !0),
      wg.forEach(function (n) {
        n !== "selectionchange" && (Sw.has(n) || su(n, !1, e), su(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ms] || ((t[Ms] = !0), su("selectionchange", !1, t));
  }
}
function pv(e, t, n, r) {
  switch (Qg(t)) {
    case 1:
      var s = I1;
      break;
    case 4:
      s = B1;
      break;
    default:
      s = fd;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !Qu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function au(e, t, n, r, s) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var c = r.stateNode.containerInfo;
        if (c === s || (c.nodeType === 8 && c.parentNode === s)) break;
        if (u === 4)
          for (u = r.return; u !== null;) {
            var h = u.tag;
            if (
              (h === 3 || h === 4) &&
              ((h = u.stateNode.containerInfo),
              h === s || (h.nodeType === 8 && h.parentNode === s))
            )
              return;
            u = u.return;
          }
        for (; c !== null;) {
          if (((u = yi(c)), u === null)) return;
          if (((h = u.tag), h === 5 || h === 6)) {
            r = a = u;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  Dg(function () {
    var p = a,
      v = ud(n),
      g = [];
    e: {
      var x = hv.get(e);
      if (x !== void 0) {
        var P = md,
          S = e;
        switch (e) {
          case "keypress":
            if (Ks(n) === 0) break e;
          case "keydown":
          case "keyup":
            P = ew;
            break;
          case "focusin":
            ((S = "focus"), (P = eu));
            break;
          case "focusout":
            ((S = "blur"), (P = eu));
            break;
          case "beforeblur":
          case "afterblur":
            P = eu;
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
            P = $f;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            P = Z1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            P = iw;
            break;
          case lv:
          case uv:
          case cv:
            P = W1;
            break;
          case dv:
            P = ow;
            break;
          case "scroll":
            P = V1;
            break;
          case "wheel":
            P = aw;
            break;
          case "copy":
          case "cut":
          case "paste":
            P = q1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            P = Gf;
        }
        var C = (t & 4) !== 0,
          j = !C && e === "scroll",
          k = C ? (x !== null ? x + "Capture" : null) : x;
        C = [];
        for (var _ = p, w; _ !== null;) {
          w = _;
          var N = w.stateNode;
          if (
            (w.tag === 5 &&
              N !== null &&
              ((w = N),
              k !== null && ((N = To(_, k)), N != null && C.push(Ao(_, N, w)))),
            j)
          )
            break;
          _ = _.return;
        }
        0 < C.length &&
          ((x = new P(x, S, null, n, v)), g.push({ event: x, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((x = e === "mouseover" || e === "pointerover"),
          (P = e === "mouseout" || e === "pointerout"),
          x &&
            n !== Ku &&
            (S = n.relatedTarget || n.fromElement) &&
            (yi(S) || S[_n]))
        )
          break e;
        if (
          (P || x) &&
          ((x =
            v.window === v
              ? v
              : (x = v.ownerDocument)
                ? x.defaultView || x.parentWindow
                : window),
          P
            ? ((S = n.relatedTarget || n.toElement),
              (P = p),
              (S = S ? yi(S) : null),
              S !== null &&
                ((j = ji(S)), S !== j || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((P = null), (S = p)),
          P !== S)
        ) {
          if (
            ((C = $f),
            (N = "onMouseLeave"),
            (k = "onMouseEnter"),
            (_ = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((C = Gf),
              (N = "onPointerLeave"),
              (k = "onPointerEnter"),
              (_ = "pointer")),
            (j = P == null ? x : ir(P)),
            (w = S == null ? x : ir(S)),
            (x = new C(N, _ + "leave", P, n, v)),
            (x.target = j),
            (x.relatedTarget = w),
            (N = null),
            yi(v) === p &&
              ((C = new C(k, _ + "enter", S, n, v)),
              (C.target = w),
              (C.relatedTarget = j),
              (N = C)),
            (j = N),
            P && S)
          )
            t: {
              for (C = P, k = S, _ = 0, w = C; w; w = $i(w)) _++;
              for (w = 0, N = k; N; N = $i(N)) w++;
              for (; 0 < _ - w;) ((C = $i(C)), _--);
              for (; 0 < w - _;) ((k = $i(k)), w--);
              for (; _--;) {
                if (C === k || (k !== null && C === k.alternate)) break t;
                ((C = $i(C)), (k = $i(k)));
              }
              C = null;
            }
          else C = null;
          (P !== null && op(g, x, P, C, !1),
            S !== null && j !== null && op(g, j, S, C, !0));
        }
      }
      e: {
        if (
          ((x = p ? ir(p) : window),
          (P = x.nodeName && x.nodeName.toLowerCase()),
          P === "select" || (P === "input" && x.type === "file"))
        )
          var A = pw;
        else if (Qf(x))
          if (iv) A = yw;
          else {
            A = gw;
            var I = mw;
          }
        else
          (P = x.nodeName) &&
            P.toLowerCase() === "input" &&
            (x.type === "checkbox" || x.type === "radio") &&
            (A = vw);
        if (A && (A = A(e, p))) {
          nv(g, A, n, v);
          break e;
        }
        (I && I(e, x, p),
          e === "focusout" &&
            (I = x._wrapperState) &&
            I.controlled &&
            x.type === "number" &&
            Hu(x, "number", x.value));
      }
      switch (((I = p ? ir(p) : window), e)) {
        case "focusin":
          (Qf(I) || I.contentEditable === "true") &&
            ((tr = I), (nc = p), (mo = null));
          break;
        case "focusout":
          mo = nc = tr = null;
          break;
        case "mousedown":
          ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ic = !1), np(g, n, v));
          break;
        case "selectionchange":
          if (ww) break;
        case "keydown":
        case "keyup":
          np(g, n, v);
      }
      var B;
      if (vd)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        er
          ? ev(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      (O &&
        (Jg &&
          n.locale !== "ko" &&
          (er || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && er && (B = Xg())
            : ((On = v),
              (pd = "value" in On ? On.value : On.textContent),
              (er = !0))),
        (I = fa(p, O)),
        0 < I.length &&
          ((O = new qf(O, e, null, n, v)),
          g.push({ event: O, listeners: I }),
          B ? (O.data = B) : ((B = tv(n)), B !== null && (O.data = B)))),
        (B = uw ? cw(e, n) : dw(e, n)) &&
          ((p = fa(p, "onBeforeInput")),
          0 < p.length &&
            ((v = new qf("onBeforeInput", "beforeinput", null, n, v)),
            g.push({ event: v, listeners: p }),
            (v.data = B))));
    }
    fv(g, t);
  });
}
function Ao(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fa(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var s = e,
      a = s.stateNode;
    (s.tag === 5 &&
      a !== null &&
      ((s = a),
      (a = To(e, n)),
      a != null && r.unshift(Ao(e, a, s)),
      (a = To(e, t)),
      a != null && r.push(Ao(e, a, s))),
      (e = e.return));
  }
  return r;
}
function $i(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function op(e, t, n, r, s) {
  for (var a = t._reactName, u = []; n !== null && n !== r;) {
    var c = n,
      h = c.alternate,
      p = c.stateNode;
    if (h !== null && h === r) break;
    (c.tag === 5 &&
      p !== null &&
      ((c = p),
      s
        ? ((h = To(n, a)), h != null && u.unshift(Ao(n, h, c)))
        : s || ((h = To(n, a)), h != null && u.push(Ao(n, h, c)))),
      (n = n.return));
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Cw = /\r\n?/g,
  Tw = /\u0000|\uFFFD/g;
function sp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Cw,
      `
`,
    )
    .replace(Tw, "");
}
function As(e, t, n) {
  if (((t = sp(t)), sp(e) !== t && n)) throw Error(D(425));
}
function pa() {}
var rc = null,
  oc = null;
function sc(e, t) {
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
var ac = typeof setTimeout == "function" ? setTimeout : void 0,
  bw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ap = typeof Promise == "function" ? Promise : void 0,
  Lw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ap < "u"
        ? function (e) {
            return ap.resolve(null).then(e).catch(Nw);
          }
        : ac;
function Nw(e) {
  setTimeout(function () {
    throw e;
  });
}
function lu(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), No(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  No(t);
}
function Fn(e) {
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
function lp(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
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
var Mr = Math.random().toString(36).slice(2),
  tn = "__reactFiber$" + Mr,
  zo = "__reactProps$" + Mr,
  _n = "__reactContainer$" + Mr,
  lc = "__reactEvents$" + Mr,
  Ew = "__reactListeners$" + Mr,
  jw = "__reactHandles$" + Mr;
function yi(e) {
  var t = e[tn];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if ((t = n[_n] || n[tn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lp(e); e !== null;) {
          if ((n = e[tn])) return n;
          e = lp(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Yo(e) {
  return (
    (e = e[tn] || e[_n]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function qa(e) {
  return e[zo] || null;
}
var uc = [],
  rr = -1;
function ti(e) {
  return { current: e };
}
function ve(e) {
  0 > rr || ((e.current = uc[rr]), (uc[rr] = null), rr--);
}
function pe(e, t) {
  (rr++, (uc[rr] = e.current), (e.current = t));
}
var Qn = {},
  et = ti(Qn),
  dt = ti(!1),
  Ci = Qn;
function wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    a;
  for (a in n) s[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function ht(e) {
  return ((e = e.childContextTypes), e != null);
}
function ma() {
  (ve(dt), ve(et));
}
function up(e, t, n) {
  if (et.current !== Qn) throw Error(D(168));
  (pe(et, t), pe(dt, n));
}
function mv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(D(108, m1(e) || "Unknown", s));
  return Se({}, n, r);
}
function ga(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qn),
    (Ci = et.current),
    pe(et, e),
    pe(dt, dt.current),
    !0
  );
}
function cp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  (n
    ? ((e = mv(e, t, Ci)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ve(dt),
      ve(et),
      pe(et, e))
    : ve(dt),
    pe(dt, n));
}
var hn = null,
  Ga = !1,
  uu = !1;
function gv(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function Mw(e) {
  ((Ga = !0), gv(e));
}
function ni() {
  if (!uu && hn !== null) {
    uu = !0;
    var e = 0,
      t = de;
    try {
      var n = hn;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((hn = null), (Ga = !1));
    } catch (s) {
      throw (hn !== null && (hn = hn.slice(e + 1)), Fg(cd, ni), s);
    } finally {
      ((de = t), (uu = !1));
    }
  }
  return null;
}
var or = [],
  sr = 0,
  va = null,
  ya = 0,
  bt = [],
  Lt = 0,
  Ti = null,
  fn = 1,
  pn = "";
function fi(e, t) {
  ((or[sr++] = ya), (or[sr++] = va), (va = e), (ya = t));
}
function vv(e, t, n) {
  ((bt[Lt++] = fn), (bt[Lt++] = pn), (bt[Lt++] = Ti), (Ti = e));
  var r = fn;
  e = pn;
  var s = 32 - Zt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var a = 32 - Zt(t) + s;
  if (30 < a) {
    var u = s - (s % 5);
    ((a = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (s -= u),
      (fn = (1 << (32 - Zt(t) + s)) | (n << s) | r),
      (pn = a + e));
  } else ((fn = (1 << a) | (n << s) | r), (pn = e));
}
function xd(e) {
  e.return !== null && (fi(e, 1), vv(e, 1, 0));
}
function _d(e) {
  for (; e === va;)
    ((va = or[--sr]), (or[sr] = null), (ya = or[--sr]), (or[sr] = null));
  for (; e === Ti;)
    ((Ti = bt[--Lt]),
      (bt[Lt] = null),
      (pn = bt[--Lt]),
      (bt[Lt] = null),
      (fn = bt[--Lt]),
      (bt[Lt] = null));
}
var vt = null,
  gt = null,
  ye = !1,
  Ft = null;
function yv(e, t) {
  var n = Nt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function dp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (vt = e), (gt = Fn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (vt = e), (gt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ti !== null ? { id: fn, overflow: pn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (vt = e),
            (gt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dc(e) {
  if (ye) {
    var t = gt;
    if (t) {
      var n = t;
      if (!dp(e, t)) {
        if (cc(e)) throw Error(D(418));
        t = Fn(n.nextSibling);
        var r = vt;
        t && dp(e, t)
          ? yv(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (vt = e));
      }
    } else {
      if (cc(e)) throw Error(D(418));
      ((e.flags = (e.flags & -4097) | 2), (ye = !1), (vt = e));
    }
  }
}
function hp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  vt = e;
}
function zs(e) {
  if (e !== vt) return !1;
  if (!ye) return (hp(e), (ye = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !sc(e.type, e.memoizedProps))),
    t && (t = gt))
  ) {
    if (cc(e)) throw (xv(), Error(D(418)));
    for (; t;) (yv(e, t), (t = Fn(t.nextSibling)));
  }
  if ((hp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              gt = Fn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      gt = null;
    }
  } else gt = vt ? Fn(e.stateNode.nextSibling) : null;
  return !0;
}
function xv() {
  for (var e = gt; e;) e = Fn(e.nextSibling);
}
function Pr() {
  ((gt = vt = null), (ye = !1));
}
function wd(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
var Aw = Sn.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var s = r,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (u) {
            var c = s.refs;
            u === null ? delete c[a] : (c[a] = u);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function Rs(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function fp(e) {
  var t = e._init;
  return t(e._payload);
}
function _v(e) {
  function t(k, _) {
    if (e) {
      var w = k.deletions;
      w === null ? ((k.deletions = [_]), (k.flags |= 16)) : w.push(_);
    }
  }
  function n(k, _) {
    if (!e) return null;
    for (; _ !== null;) (t(k, _), (_ = _.sibling));
    return null;
  }
  function r(k, _) {
    for (k = new Map(); _ !== null;)
      (_.key !== null ? k.set(_.key, _) : k.set(_.index, _), (_ = _.sibling));
    return k;
  }
  function s(k, _) {
    return ((k = Wn(k, _)), (k.index = 0), (k.sibling = null), k);
  }
  function a(k, _, w) {
    return (
      (k.index = w),
      e
        ? ((w = k.alternate),
          w !== null
            ? ((w = w.index), w < _ ? ((k.flags |= 2), _) : w)
            : ((k.flags |= 2), _))
        : ((k.flags |= 1048576), _)
    );
  }
  function u(k) {
    return (e && k.alternate === null && (k.flags |= 2), k);
  }
  function c(k, _, w, N) {
    return _ === null || _.tag !== 6
      ? ((_ = gu(w, k.mode, N)), (_.return = k), _)
      : ((_ = s(_, w)), (_.return = k), _);
  }
  function h(k, _, w, N) {
    var A = w.type;
    return A === Ji
      ? v(k, _, w.props.children, N, w.key)
      : _ !== null &&
          (_.elementType === A ||
            (typeof A == "object" &&
              A !== null &&
              A.$$typeof === jn &&
              fp(A) === _.type))
        ? ((N = s(_, w.props)), (N.ref = Jr(k, _, w)), (N.return = k), N)
        : ((N = na(w.type, w.key, w.props, null, k.mode, N)),
          (N.ref = Jr(k, _, w)),
          (N.return = k),
          N);
  }
  function p(k, _, w, N) {
    return _ === null ||
      _.tag !== 4 ||
      _.stateNode.containerInfo !== w.containerInfo ||
      _.stateNode.implementation !== w.implementation
      ? ((_ = vu(w, k.mode, N)), (_.return = k), _)
      : ((_ = s(_, w.children || [])), (_.return = k), _);
  }
  function v(k, _, w, N, A) {
    return _ === null || _.tag !== 7
      ? ((_ = ki(w, k.mode, N, A)), (_.return = k), _)
      : ((_ = s(_, w)), (_.return = k), _);
  }
  function g(k, _, w) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return ((_ = gu("" + _, k.mode, w)), (_.return = k), _);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ss:
          return (
            (w = na(_.type, _.key, _.props, null, k.mode, w)),
            (w.ref = Jr(k, null, _)),
            (w.return = k),
            w
          );
        case Xi:
          return ((_ = vu(_, k.mode, w)), (_.return = k), _);
        case jn:
          var N = _._init;
          return g(k, N(_._payload), w);
      }
      if (oo(_) || Gr(_))
        return ((_ = ki(_, k.mode, w, null)), (_.return = k), _);
      Rs(k, _);
    }
    return null;
  }
  function x(k, _, w, N) {
    var A = _ !== null ? _.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return A !== null ? null : c(k, _, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ss:
          return w.key === A ? h(k, _, w, N) : null;
        case Xi:
          return w.key === A ? p(k, _, w, N) : null;
        case jn:
          return ((A = w._init), x(k, _, A(w._payload), N));
      }
      if (oo(w) || Gr(w)) return A !== null ? null : v(k, _, w, N, null);
      Rs(k, w);
    }
    return null;
  }
  function P(k, _, w, N, A) {
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return ((k = k.get(w) || null), c(_, k, "" + N, A));
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Ss:
          return (
            (k = k.get(N.key === null ? w : N.key) || null),
            h(_, k, N, A)
          );
        case Xi:
          return (
            (k = k.get(N.key === null ? w : N.key) || null),
            p(_, k, N, A)
          );
        case jn:
          var I = N._init;
          return P(k, _, w, I(N._payload), A);
      }
      if (oo(N) || Gr(N)) return ((k = k.get(w) || null), v(_, k, N, A, null));
      Rs(_, N);
    }
    return null;
  }
  function S(k, _, w, N) {
    for (
      var A = null, I = null, B = _, O = (_ = 0), W = null;
      B !== null && O < w.length;
      O++
    ) {
      B.index > O ? ((W = B), (B = null)) : (W = B.sibling);
      var $ = x(k, B, w[O], N);
      if ($ === null) {
        B === null && (B = W);
        break;
      }
      (e && B && $.alternate === null && t(k, B),
        (_ = a($, _, O)),
        I === null ? (A = $) : (I.sibling = $),
        (I = $),
        (B = W));
    }
    if (O === w.length) return (n(k, B), ye && fi(k, O), A);
    if (B === null) {
      for (; O < w.length; O++)
        ((B = g(k, w[O], N)),
          B !== null &&
            ((_ = a(B, _, O)),
            I === null ? (A = B) : (I.sibling = B),
            (I = B)));
      return (ye && fi(k, O), A);
    }
    for (B = r(k, B); O < w.length; O++)
      ((W = P(B, k, O, w[O], N)),
        W !== null &&
          (e && W.alternate !== null && B.delete(W.key === null ? O : W.key),
          (_ = a(W, _, O)),
          I === null ? (A = W) : (I.sibling = W),
          (I = W)));
    return (
      e &&
        B.forEach(function (se) {
          return t(k, se);
        }),
      ye && fi(k, O),
      A
    );
  }
  function C(k, _, w, N) {
    var A = Gr(w);
    if (typeof A != "function") throw Error(D(150));
    if (((w = A.call(w)), w == null)) throw Error(D(151));
    for (
      var I = (A = null), B = _, O = (_ = 0), W = null, $ = w.next();
      B !== null && !$.done;
      O++, $ = w.next()
    ) {
      B.index > O ? ((W = B), (B = null)) : (W = B.sibling);
      var se = x(k, B, $.value, N);
      if (se === null) {
        B === null && (B = W);
        break;
      }
      (e && B && se.alternate === null && t(k, B),
        (_ = a(se, _, O)),
        I === null ? (A = se) : (I.sibling = se),
        (I = se),
        (B = W));
    }
    if ($.done) return (n(k, B), ye && fi(k, O), A);
    if (B === null) {
      for (; !$.done; O++, $ = w.next())
        (($ = g(k, $.value, N)),
          $ !== null &&
            ((_ = a($, _, O)),
            I === null ? (A = $) : (I.sibling = $),
            (I = $)));
      return (ye && fi(k, O), A);
    }
    for (B = r(k, B); !$.done; O++, $ = w.next())
      (($ = P(B, k, O, $.value, N)),
        $ !== null &&
          (e && $.alternate !== null && B.delete($.key === null ? O : $.key),
          (_ = a($, _, O)),
          I === null ? (A = $) : (I.sibling = $),
          (I = $)));
    return (
      e &&
        B.forEach(function (ce) {
          return t(k, ce);
        }),
      ye && fi(k, O),
      A
    );
  }
  function j(k, _, w, N) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Ji &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ss:
          e: {
            for (var A = w.key, I = _; I !== null;) {
              if (I.key === A) {
                if (((A = w.type), A === Ji)) {
                  if (I.tag === 7) {
                    (n(k, I.sibling),
                      (_ = s(I, w.props.children)),
                      (_.return = k),
                      (k = _));
                    break e;
                  }
                } else if (
                  I.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === jn &&
                    fp(A) === I.type)
                ) {
                  (n(k, I.sibling),
                    (_ = s(I, w.props)),
                    (_.ref = Jr(k, I, w)),
                    (_.return = k),
                    (k = _));
                  break e;
                }
                n(k, I);
                break;
              } else t(k, I);
              I = I.sibling;
            }
            w.type === Ji
              ? ((_ = ki(w.props.children, k.mode, N, w.key)),
                (_.return = k),
                (k = _))
              : ((N = na(w.type, w.key, w.props, null, k.mode, N)),
                (N.ref = Jr(k, _, w)),
                (N.return = k),
                (k = N));
          }
          return u(k);
        case Xi:
          e: {
            for (I = w.key; _ !== null;) {
              if (_.key === I)
                if (
                  _.tag === 4 &&
                  _.stateNode.containerInfo === w.containerInfo &&
                  _.stateNode.implementation === w.implementation
                ) {
                  (n(k, _.sibling),
                    (_ = s(_, w.children || [])),
                    (_.return = k),
                    (k = _));
                  break e;
                } else {
                  n(k, _);
                  break;
                }
              else t(k, _);
              _ = _.sibling;
            }
            ((_ = vu(w, k.mode, N)), (_.return = k), (k = _));
          }
          return u(k);
        case jn:
          return ((I = w._init), j(k, _, I(w._payload), N));
      }
      if (oo(w)) return S(k, _, w, N);
      if (Gr(w)) return C(k, _, w, N);
      Rs(k, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        _ !== null && _.tag === 6
          ? (n(k, _.sibling), (_ = s(_, w)), (_.return = k), (k = _))
          : (n(k, _), (_ = gu(w, k.mode, N)), (_.return = k), (k = _)),
        u(k))
      : n(k, _);
  }
  return j;
}
var kr = _v(!0),
  wv = _v(!1),
  xa = ti(null),
  _a = null,
  ar = null,
  Pd = null;
function kd() {
  Pd = ar = _a = null;
}
function Sd(e) {
  var t = xa.current;
  (ve(xa), (e._currentValue = t));
}
function hc(e, t, n) {
  for (; e !== null;) {
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
function yr(e, t) {
  ((_a = e),
    (Pd = ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ct = !0), (e.firstContext = null)));
}
function At(e) {
  var t = e._currentValue;
  if (Pd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ar === null)) {
      if (_a === null) throw Error(D(308));
      ((ar = e), (_a.dependencies = { lanes: 0, firstContext: e }));
    } else ar = ar.next = e;
  return t;
}
var xi = null;
function Cd(e) {
  xi === null ? (xi = [e]) : xi.push(e);
}
function Pv(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Cd(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    wn(e, r)
  );
}
function wn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function Td(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kv(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      wn(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Cd(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    wn(e, n)
  );
}
function Ys(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), dd(e, n));
  }
}
function pp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (a === null ? (s = a = u) : (a = a.next = u), (n = n.next));
      } while (n !== null);
      a === null ? (s = a = t) : (a = a.next = t);
    } else s = a = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function wa(e, t, n, r) {
  var s = e.updateQueue;
  Mn = !1;
  var a = s.firstBaseUpdate,
    u = s.lastBaseUpdate,
    c = s.shared.pending;
  if (c !== null) {
    s.shared.pending = null;
    var h = c,
      p = h.next;
    ((h.next = null), u === null ? (a = p) : (u.next = p), (u = h));
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (c = v.lastBaseUpdate),
      c !== u &&
        (c === null ? (v.firstBaseUpdate = p) : (c.next = p),
        (v.lastBaseUpdate = h)));
  }
  if (a !== null) {
    var g = s.baseState;
    ((u = 0), (v = p = h = null), (c = a));
    do {
      var x = c.lane,
        P = c.eventTime;
      if ((r & x) === x) {
        v !== null &&
          (v = v.next =
            {
              eventTime: P,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var S = e,
            C = c;
          switch (((x = t), (P = n), C.tag)) {
            case 1:
              if (((S = C.payload), typeof S == "function")) {
                g = S.call(P, g, x);
                break e;
              }
              g = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = C.payload),
                (x = typeof S == "function" ? S.call(P, g, x) : S),
                x == null)
              )
                break e;
              g = Se({}, g, x);
              break e;
            case 2:
              Mn = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (x = s.effects),
          x === null ? (s.effects = [c]) : x.push(c));
      } else
        ((P = {
          eventTime: P,
          lane: x,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          v === null ? ((p = v = P), (h = g)) : (v = v.next = P),
          (u |= x));
      if (((c = c.next), c === null)) {
        if (((c = s.shared.pending), c === null)) break;
        ((x = c),
          (c = x.next),
          (x.next = null),
          (s.lastBaseUpdate = x),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (v === null && (h = g),
      (s.baseState = h),
      (s.firstBaseUpdate = p),
      (s.lastBaseUpdate = v),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((u |= s.lane), (s = s.next));
      while (s !== t);
    } else a === null && (s.shared.lanes = 0);
    ((Li |= u), (e.lanes = u), (e.memoizedState = g));
  }
}
function mp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(D(191, s));
        s.call(r);
      }
    }
}
var Qo = {},
  rn = ti(Qo),
  Ro = ti(Qo),
  Oo = ti(Qo);
function _i(e) {
  if (e === Qo) throw Error(D(174));
  return e;
}
function bd(e, t) {
  switch ((pe(Oo, t), pe(Ro, e), pe(rn, Qo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $u(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $u(t, e)));
  }
  (ve(rn), pe(rn, t));
}
function Sr() {
  (ve(rn), ve(Ro), ve(Oo));
}
function Sv(e) {
  _i(Oo.current);
  var t = _i(rn.current),
    n = $u(t, e.type);
  t !== n && (pe(Ro, e), pe(rn, n));
}
function Ld(e) {
  Ro.current === e && (ve(rn), ve(Ro));
}
var _e = ti(0);
function Pa(e) {
  for (var t = e; t !== null;) {
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
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var cu = [];
function Nd() {
  for (var e = 0; e < cu.length; e++)
    cu[e]._workInProgressVersionPrimary = null;
  cu.length = 0;
}
var Qs = Sn.ReactCurrentDispatcher,
  du = Sn.ReactCurrentBatchConfig,
  bi = 0,
  ke = null,
  De = null,
  Fe = null,
  ka = !1,
  go = !1,
  Do = 0,
  zw = 0;
function Ye() {
  throw Error(D(321));
}
function Ed(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ht(e[n], t[n])) return !1;
  return !0;
}
function jd(e, t, n, r, s, a) {
  if (
    ((bi = a),
    (ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? Iw : Bw),
    (e = n(r, s)),
    go)
  ) {
    a = 0;
    do {
      if (((go = !1), (Do = 0), 25 <= a)) throw Error(D(301));
      ((a += 1),
        (Fe = De = null),
        (t.updateQueue = null),
        (Qs.current = Vw),
        (e = n(r, s)));
    } while (go);
  }
  if (
    ((Qs.current = Sa),
    (t = De !== null && De.next !== null),
    (bi = 0),
    (Fe = De = ke = null),
    (ka = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Md() {
  var e = Do !== 0;
  return ((Do = 0), e);
}
function Jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Fe === null ? (ke.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe);
}
function zt() {
  if (De === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = De.next;
  var t = Fe === null ? ke.memoizedState : Fe.next;
  if (t !== null) ((Fe = t), (De = e));
  else {
    if (e === null) throw Error(D(310));
    ((De = e),
      (e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null,
      }),
      Fe === null ? (ke.memoizedState = Fe = e) : (Fe = Fe.next = e));
  }
  return Fe;
}
function Io(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hu(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = De,
    s = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (s !== null) {
      var u = s.next;
      ((s.next = a.next), (a.next = u));
    }
    ((r.baseQueue = s = a), (n.pending = null));
  }
  if (s !== null) {
    ((a = s.next), (r = r.baseState));
    var c = (u = null),
      h = null,
      p = a;
    do {
      var v = p.lane;
      if ((bi & v) === v)
        (h !== null &&
          (h = h.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action)));
      else {
        var g = {
          lane: v,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        (h === null ? ((c = h = g), (u = r)) : (h = h.next = g),
          (ke.lanes |= v),
          (Li |= v));
      }
      p = p.next;
    } while (p !== null && p !== a);
    (h === null ? (u = r) : (h.next = c),
      Ht(r, t.memoizedState) || (ct = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = h),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((a = s.lane), (ke.lanes |= a), (Li |= a), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fu(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    a = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var u = (s = s.next);
    do ((a = e(a, u.action)), (u = u.next));
    while (u !== s);
    (Ht(a, t.memoizedState) || (ct = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a));
  }
  return [a, r];
}
function Cv() {}
function Tv(e, t) {
  var n = ke,
    r = zt(),
    s = t(),
    a = !Ht(r.memoizedState, s);
  if (
    (a && ((r.memoizedState = s), (ct = !0)),
    (r = r.queue),
    Ad(Nv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Bo(9, Lv.bind(null, n, r, s, t), void 0, null),
      Ze === null)
    )
      throw Error(D(349));
    bi & 30 || bv(n, t, s);
  }
  return s;
}
function bv(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Lv(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ev(t) && jv(e));
}
function Nv(e, t, n) {
  return n(function () {
    Ev(t) && jv(e);
  });
}
function Ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ht(e, n);
  } catch {
    return !0;
  }
}
function jv(e) {
  var t = wn(e, 1);
  t !== null && Ut(t, e, 1, -1);
}
function gp(e) {
  var t = Jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Io,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dw.bind(null, ke, e)),
    [t.memoizedState, e]
  );
}
function Bo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mv() {
  return zt().memoizedState;
}
function Xs(e, t, n, r) {
  var s = Jt();
  ((ke.flags |= e),
    (s.memoizedState = Bo(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ka(e, t, n, r) {
  var s = zt();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (De !== null) {
    var u = De.memoizedState;
    if (((a = u.destroy), r !== null && Ed(r, u.deps))) {
      s.memoizedState = Bo(t, n, a, r);
      return;
    }
  }
  ((ke.flags |= e), (s.memoizedState = Bo(1 | t, n, a, r)));
}
function vp(e, t) {
  return Xs(8390656, 8, e, t);
}
function Ad(e, t) {
  return Ka(2048, 8, e, t);
}
function Av(e, t) {
  return Ka(4, 2, e, t);
}
function zv(e, t) {
  return Ka(4, 4, e, t);
}
function Rv(e, t) {
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
function Ov(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ka(4, 4, Rv.bind(null, t, e), n)
  );
}
function zd() {}
function Dv(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ed(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Iv(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ed(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bv(e, t, n) {
  return bi & 21
    ? (Ht(n, t) || ((n = Hg()), (ke.lanes |= n), (Li |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ct = !0)), (e.memoizedState = n));
}
function Rw(e, t) {
  var n = de;
  ((de = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = du.transition;
  du.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((de = n), (du.transition = r));
  }
}
function Vv() {
  return zt().memoizedState;
}
function Ow(e, t, n) {
  var r = Hn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fv(e))
  )
    Zv(t, n);
  else if (((n = Pv(e, t, n, r)), n !== null)) {
    var s = rt();
    (Ut(n, e, r, s), Uv(n, t, r));
  }
}
function Dw(e, t, n) {
  var r = Hn(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fv(e)) Zv(t, s);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var u = t.lastRenderedState,
          c = a(u, n);
        if (((s.hasEagerState = !0), (s.eagerState = c), Ht(c, u))) {
          var h = t.interleaved;
          (h === null
            ? ((s.next = s), Cd(t))
            : ((s.next = h.next), (h.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Pv(e, t, s, r)),
      n !== null && ((s = rt()), Ut(n, e, r, s), Uv(n, t, r)));
  }
}
function Fv(e) {
  var t = e.alternate;
  return e === ke || (t !== null && t === ke);
}
function Zv(e, t) {
  go = ka = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Uv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), dd(e, n));
  }
}
var Sa = {
    readContext: At,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useInsertionEffect: Ye,
    useLayoutEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useMutableSource: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    unstable_isNewReconciler: !1,
  },
  Iw = {
    readContext: At,
    useCallback: function (e, t) {
      return ((Jt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: At,
    useEffect: vp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xs(4194308, 4, Rv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Jt();
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
        (e = e.dispatch = Ow.bind(null, ke, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: gp,
    useDebugValue: zd,
    useDeferredValue: function (e) {
      return (Jt().memoizedState = e);
    },
    useTransition: function () {
      var e = gp(!1),
        t = e[0];
      return ((e = Rw.bind(null, e[1])), (Jt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ke,
        s = Jt();
      if (ye) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), Ze === null)) throw Error(D(349));
        bi & 30 || bv(r, t, n);
      }
      s.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (s.queue = a),
        vp(Nv.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Bo(9, Lv.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jt(),
        t = Ze.identifierPrefix;
      if (ye) {
        var n = pn,
          r = fn;
        ((n = (r & ~(1 << (32 - Zt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Do++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = zw++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Bw = {
    readContext: At,
    useCallback: Dv,
    useContext: At,
    useEffect: Ad,
    useImperativeHandle: Ov,
    useInsertionEffect: Av,
    useLayoutEffect: zv,
    useMemo: Iv,
    useReducer: hu,
    useRef: Mv,
    useState: function () {
      return hu(Io);
    },
    useDebugValue: zd,
    useDeferredValue: function (e) {
      var t = zt();
      return Bv(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = hu(Io)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cv,
    useSyncExternalStore: Tv,
    useId: Vv,
    unstable_isNewReconciler: !1,
  },
  Vw = {
    readContext: At,
    useCallback: Dv,
    useContext: At,
    useEffect: Ad,
    useImperativeHandle: Ov,
    useInsertionEffect: Av,
    useLayoutEffect: zv,
    useMemo: Iv,
    useReducer: fu,
    useRef: Mv,
    useState: function () {
      return fu(Io);
    },
    useDebugValue: zd,
    useDeferredValue: function (e) {
      var t = zt();
      return De === null ? (t.memoizedState = e) : Bv(t, De.memoizedState, e);
    },
    useTransition: function () {
      var e = fu(Io)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: Cv,
    useSyncExternalStore: Tv,
    useId: Vv,
    unstable_isNewReconciler: !1,
  };
function Bt(e, t) {
  if (e && e.defaultProps) {
    ((t = Se({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fc(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ya = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ji(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      s = Hn(e),
      a = gn(r, s);
    ((a.payload = t),
      n != null && (a.callback = n),
      (t = Zn(e, a, s)),
      t !== null && (Ut(t, e, s, r), Ys(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = rt(),
      s = Hn(e),
      a = gn(r, s);
    ((a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Zn(e, a, s)),
      t !== null && (Ut(t, e, s, r), Ys(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = rt(),
      r = Hn(e),
      s = gn(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Zn(e, s, r)),
      t !== null && (Ut(t, e, r, n), Ys(t, e, r)));
  },
};
function yp(e, t, n, r, s, a, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, u)
      : t.prototype && t.prototype.isPureReactComponent
        ? !jo(n, r) || !jo(s, a)
        : !0
  );
}
function Hv(e, t, n) {
  var r = !1,
    s = Qn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = At(a))
      : ((s = ht(t) ? Ci : et.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? wr(e, s) : Qn)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ya),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function xp(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ya.enqueueReplaceState(t, t.state, null));
}
function pc(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), Td(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (s.context = At(a))
    : ((a = ht(t) ? Ci : et.current), (s.context = wr(e, a))),
    (s.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (fc(e, t, a, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Ya.enqueueReplaceState(s, s.state, null),
      wa(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Cr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += p1(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (a) {
    s =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function pu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function mc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Fw = typeof WeakMap == "function" ? WeakMap : Map;
function Wv(e, t, n) {
  ((n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ta || ((Ta = !0), (Cc = r)), mc(e, t));
    }),
    n
  );
}
function $v(e, t, n) {
  ((n = gn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        mc(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        (mc(e, t),
          typeof r != "function" &&
            (Un === null ? (Un = new Set([this])) : Un.add(this)));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : "",
        });
      }),
    n
  );
}
function _p(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fw();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = t2.bind(null, e, t, n)), t.then(e, e));
}
function wp(e) {
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
function Pp(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gn(-1, 1)), (t.tag = 2), Zn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Zw = Sn.ReactCurrentOwner,
  ct = !1;
function it(e, t, n, r) {
  t.child = e === null ? wv(t, null, n, r) : kr(t, e.child, n, r);
}
function kp(e, t, n, r, s) {
  n = n.render;
  var a = t.ref;
  return (
    yr(t, s),
    (r = jd(e, t, n, r, a, s)),
    (n = Md()),
    e !== null && !ct
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Pn(e, t, s))
      : (ye && n && xd(t), (t.flags |= 1), it(e, t, r, s), t.child)
  );
}
function Sp(e, t, n, r, s) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Zd(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), qv(e, t, a, r, s))
      : ((e = na(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & s))) {
    var u = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : jo), n(u, r) && e.ref === t.ref)
    )
      return Pn(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = Wn(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qv(e, t, n, r, s) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (jo(a, r) && e.ref === t.ref)
      if (((ct = !1), (t.pendingProps = r = a), (e.lanes & s) !== 0))
        e.flags & 131072 && (ct = !0);
      else return ((t.lanes = e.lanes), Pn(e, t, s));
  }
  return gc(e, t, n, r, s);
}
function Gv(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(ur, mt),
        (mt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(ur, mt),
          (mt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        pe(ur, mt),
        (mt |= r));
    }
  else
    (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(ur, mt),
      (mt |= r));
  return (it(e, t, s, n), t.child);
}
function Kv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gc(e, t, n, r, s) {
  var a = ht(n) ? Ci : et.current;
  return (
    (a = wr(t, a)),
    yr(t, s),
    (n = jd(e, t, n, r, a, s)),
    (r = Md()),
    e !== null && !ct
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Pn(e, t, s))
      : (ye && r && xd(t), (t.flags |= 1), it(e, t, n, s), t.child)
  );
}
function Cp(e, t, n, r, s) {
  if (ht(n)) {
    var a = !0;
    ga(t);
  } else a = !1;
  if ((yr(t, s), t.stateNode === null))
    (Js(e, t), Hv(t, n, r), pc(t, n, r, s), (r = !0));
  else if (e === null) {
    var u = t.stateNode,
      c = t.memoizedProps;
    u.props = c;
    var h = u.context,
      p = n.contextType;
    typeof p == "object" && p !== null
      ? (p = At(p))
      : ((p = ht(n) ? Ci : et.current), (p = wr(t, p)));
    var v = n.getDerivedStateFromProps,
      g =
        typeof v == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((c !== r || h !== p) && xp(t, u, r, p)),
      (Mn = !1));
    var x = t.memoizedState;
    ((u.state = x),
      wa(t, r, u, s),
      (h = t.memoizedState),
      c !== r || x !== h || dt.current || Mn
        ? (typeof v == "function" && (fc(t, n, v, r), (h = t.memoizedState)),
          (c = Mn || yp(t, n, c, r, x, h, p))
            ? (g ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                  typeof u.componentWillMount != "function") ||
                (typeof u.componentWillMount == "function" &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (u.props = r),
          (u.state = h),
          (u.context = p),
          (r = c))
        : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((u = t.stateNode),
      kv(e, t),
      (c = t.memoizedProps),
      (p = t.type === t.elementType ? c : Bt(t.type, c)),
      (u.props = p),
      (g = t.pendingProps),
      (x = u.context),
      (h = n.contextType),
      typeof h == "object" && h !== null
        ? (h = At(h))
        : ((h = ht(n) ? Ci : et.current), (h = wr(t, h))));
    var P = n.getDerivedStateFromProps;
    ((v =
      typeof P == "function" ||
      typeof u.getSnapshotBeforeUpdate == "function") ||
      (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
        typeof u.componentWillReceiveProps != "function") ||
      ((c !== g || x !== h) && xp(t, u, r, h)),
      (Mn = !1),
      (x = t.memoizedState),
      (u.state = x),
      wa(t, r, u, s));
    var S = t.memoizedState;
    c !== g || x !== S || dt.current || Mn
      ? (typeof P == "function" && (fc(t, n, P, r), (S = t.memoizedState)),
        (p = Mn || yp(t, n, p, r, x, S, h) || !1)
          ? (v ||
              (typeof u.UNSAFE_componentWillUpdate != "function" &&
                typeof u.componentWillUpdate != "function") ||
              (typeof u.componentWillUpdate == "function" &&
                u.componentWillUpdate(r, S, h),
              typeof u.UNSAFE_componentWillUpdate == "function" &&
                u.UNSAFE_componentWillUpdate(r, S, h)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != "function" ||
              (c === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (u.props = r),
        (u.state = S),
        (u.context = h),
        (r = p))
      : (typeof u.componentDidUpdate != "function" ||
          (c === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vc(e, t, n, r, a, s);
}
function vc(e, t, n, r, s, a) {
  Kv(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return (s && cp(t, n, !1), Pn(e, t, a));
  ((r = t.stateNode), (Zw.current = t));
  var c =
    u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = kr(t, e.child, null, a)), (t.child = kr(t, null, c, a)))
      : it(e, t, c, a),
    (t.memoizedState = r.state),
    s && cp(t, n, !0),
    t.child
  );
}
function Yv(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? up(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && up(e, t.context, !1),
    bd(e, t.containerInfo));
}
function Tp(e, t, n, r, s) {
  return (Pr(), wd(s), (t.flags |= 256), it(e, t, n, r), t.child);
}
var yc = { dehydrated: null, treeContext: null, retryLane: 0 };
function xc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qv(e, t, n) {
  var r = t.pendingProps,
    s = _e.current,
    a = !1,
    u = (t.flags & 128) !== 0,
    c;
  if (
    ((c = u) ||
      (c = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    c
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    pe(_e, s & 1),
    e === null)
  )
    return (
      dc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (u = { mode: "hidden", children: u }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = u))
                : (a = Ja(u, r, 0, null)),
              (e = ki(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = xc(n)),
              (t.memoizedState = yc),
              e)
            : Rd(t, u))
    );
  if (((s = e.memoizedState), s !== null && ((c = s.dehydrated), c !== null)))
    return Uw(e, t, u, r, c, s, n);
  if (a) {
    ((a = r.fallback), (u = t.mode), (s = e.child), (c = s.sibling));
    var h = { mode: "hidden", children: r.children };
    return (
      !(u & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = h),
          (t.deletions = null))
        : ((r = Wn(s, h)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      c !== null ? (a = Wn(c, a)) : ((a = ki(a, u, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? xc(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (a.memoizedState = u),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = yc),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Wn(a, { mode: "visible", children: r.children })),
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
function Rd(e, t) {
  return (
    (t = Ja({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Os(e, t, n, r) {
  return (
    r !== null && wd(r),
    kr(t, e.child, null, n),
    (e = Rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uw(e, t, n, r, s, a, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pu(Error(D(422)))), Os(e, t, u, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (s = t.mode),
          (r = Ja({ mode: "visible", children: r.children }, s, 0, null)),
          (a = ki(a, s, u, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && kr(t, e.child, null, u),
          (t.child.memoizedState = xc(u)),
          (t.memoizedState = yc),
          a);
  if (!(t.mode & 1)) return Os(e, t, u, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var c = r.dgst;
    return (
      (r = c),
      (a = Error(D(419))),
      (r = pu(a, r, void 0)),
      Os(e, t, u, r)
    );
  }
  if (((c = (u & e.childLanes) !== 0), ct || c)) {
    if (((r = Ze), r !== null)) {
      switch (u & -u) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | u) ? 0 : s),
        s !== 0 &&
          s !== a.retryLane &&
          ((a.retryLane = s), wn(e, s), Ut(r, e, s, -1)));
    }
    return (Fd(), (r = pu(Error(D(421)))), Os(e, t, u, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = n2.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (gt = Fn(s.nextSibling)),
      (vt = t),
      (ye = !0),
      (Ft = null),
      e !== null &&
        ((bt[Lt++] = fn),
        (bt[Lt++] = pn),
        (bt[Lt++] = Ti),
        (fn = e.id),
        (pn = e.overflow),
        (Ti = t)),
      (t = Rd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), hc(e.return, t, n));
}
function mu(e, t, n, r, s) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = s));
}
function Xv(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    a = r.tail;
  if ((it(e, t, r.children, n), (r = _e.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && bp(e, n, t);
        else if (e.tag === 19) bp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((pe(_e, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null;)
          ((e = n.alternate),
            e !== null && Pa(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          mu(t, !1, s, n, a));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null;) {
          if (((e = s.alternate), e !== null && Pa(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        mu(t, !0, n, null, a);
        break;
      case "together":
        mu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Li |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Wn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Hw(e, t, n) {
  switch (t.tag) {
    case 3:
      (Yv(t), Pr());
      break;
    case 5:
      Sv(t);
      break;
    case 1:
      ht(t.type) && ga(t);
      break;
    case 4:
      bd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (pe(xa, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(_e, _e.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Qv(e, t, n)
            : (pe(_e, _e.current & 1),
              (e = Pn(e, t, n)),
              e !== null ? e.sibling : null);
      pe(_e, _e.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        pe(_e, _e.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Gv(e, t, n));
  }
  return Pn(e, t, n);
}
var Jv, _c, ey, ty;
Jv = function (e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
_c = function () {};
ey = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), _i(rn.current));
    var a = null;
    switch (n) {
      case "input":
        ((s = Zu(e, s)), (r = Zu(e, r)), (a = []));
        break;
      case "select":
        ((s = Se({}, s, { value: void 0 })),
          (r = Se({}, r, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((s = Wu(e, s)), (r = Wu(e, r)), (a = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pa);
    }
    qu(n, r);
    var u;
    n = null;
    for (p in s)
      if (!r.hasOwnProperty(p) && s.hasOwnProperty(p) && s[p] != null)
        if (p === "style") {
          var c = s[p];
          for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (So.hasOwnProperty(p)
              ? a || (a = [])
              : (a = a || []).push(p, null));
    for (p in r) {
      var h = r[p];
      if (
        ((c = s != null ? s[p] : void 0),
        r.hasOwnProperty(p) && h !== c && (h != null || c != null))
      )
        if (p === "style")
          if (c) {
            for (u in c)
              !c.hasOwnProperty(u) ||
                (h && h.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ""));
            for (u in h)
              h.hasOwnProperty(u) &&
                c[u] !== h[u] &&
                (n || (n = {}), (n[u] = h[u]));
          } else (n || (a || (a = []), a.push(p, n)), (n = h));
        else
          p === "dangerouslySetInnerHTML"
            ? ((h = h ? h.__html : void 0),
              (c = c ? c.__html : void 0),
              h != null && c !== h && (a = a || []).push(p, h))
            : p === "children"
              ? (typeof h != "string" && typeof h != "number") ||
                (a = a || []).push(p, "" + h)
              : p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                (So.hasOwnProperty(p)
                  ? (h != null && p === "onScroll" && ge("scroll", e),
                    a || c === h || (a = []))
                  : (a = a || []).push(p, h));
    }
    n && (a = a || []).push("style", n);
    var p = a;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
ty = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function eo(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null;)
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null;)
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null;)
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null;)
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Ww(e, t, n) {
  var r = t.pendingProps;
  switch ((_d(t), t.tag)) {
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
      return (Qe(t), null);
    case 1:
      return (ht(t.type) && ma(), Qe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Sr(),
        ve(dt),
        ve(et),
        Nd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ft !== null && (Lc(Ft), (Ft = null)))),
        _c(e, t),
        Qe(t),
        null
      );
    case 5:
      Ld(t);
      var s = _i(Oo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (ey(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return (Qe(t), null);
        }
        if (((e = _i(rn.current)), zs(t))) {
          ((r = t.stateNode), (n = t.type));
          var a = t.memoizedProps;
          switch (((r[tn] = t), (r[zo] = a), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ge("cancel", r), ge("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < ao.length; s++) ge(ao[s], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ge("error", r), ge("load", r));
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              (Of(r, a), ge("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!a.multiple }),
                ge("invalid", r));
              break;
            case "textarea":
              (If(r, a), ge("invalid", r));
          }
          (qu(n, a), (s = null));
          for (var u in a)
            if (a.hasOwnProperty(u)) {
              var c = a[u];
              u === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (a.suppressHydrationWarning !== !0 &&
                      As(r.textContent, c, e),
                    (s = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (a.suppressHydrationWarning !== !0 &&
                      As(r.textContent, c, e),
                    (s = ["children", "" + c]))
                : So.hasOwnProperty(u) &&
                  c != null &&
                  u === "onScroll" &&
                  ge("scroll", r);
            }
          switch (n) {
            case "input":
              (Cs(r), Df(r, a, !0));
              break;
            case "textarea":
              (Cs(r), Bf(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = pa);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((u = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ng(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = u.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[tn] = t),
            (e[zo] = r),
            Jv(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((u = Gu(n, r)), n)) {
              case "dialog":
                (ge("cancel", e), ge("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ge("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < ao.length; s++) ge(ao[s], e);
                s = r;
                break;
              case "source":
                (ge("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (ge("error", e), ge("load", e), (s = r));
                break;
              case "details":
                (ge("toggle", e), (s = r));
                break;
              case "input":
                (Of(e, r), (s = Zu(e, r)), ge("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = Se({}, r, { value: void 0 })),
                  ge("invalid", e));
                break;
              case "textarea":
                (If(e, r), (s = Wu(e, r)), ge("invalid", e));
                break;
              default:
                s = r;
            }
            (qu(n, s), (c = s));
            for (a in c)
              if (c.hasOwnProperty(a)) {
                var h = c[a];
                a === "style"
                  ? Mg(e, h)
                  : a === "dangerouslySetInnerHTML"
                    ? ((h = h ? h.__html : void 0), h != null && Eg(e, h))
                    : a === "children"
                      ? typeof h == "string"
                        ? (n !== "textarea" || h !== "") && Co(e, h)
                        : typeof h == "number" && Co(e, "" + h)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (So.hasOwnProperty(a)
                          ? h != null && a === "onScroll" && ge("scroll", e)
                          : h != null && od(e, a, h, u));
              }
            switch (n) {
              case "input":
                (Cs(e), Df(e, r, !1));
                break;
              case "textarea":
                (Cs(e), Bf(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? pr(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = pa);
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
      return (Qe(t), null);
    case 6:
      if (e && t.stateNode != null) ty(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = _i(Oo.current)), _i(rn.current), zs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tn] = t),
            (a = r.nodeValue !== n) && ((e = vt), e !== null))
          )
            switch (e.tag) {
              case 3:
                As(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  As(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tn] = t),
            (t.stateNode = r));
      }
      return (Qe(t), null);
    case 13:
      if (
        (ve(_e),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && gt !== null && t.mode & 1 && !(t.flags & 128))
          (xv(), Pr(), (t.flags |= 98560), (a = !1));
        else if (((a = zs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(D(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(D(317));
            a[tn] = t;
          } else
            (Pr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Qe(t), (a = !1));
        } else (Ft !== null && (Lc(Ft), (Ft = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || _e.current & 1 ? Ie === 0 && (Ie = 3) : Fd())),
          t.updateQueue !== null && (t.flags |= 4),
          Qe(t),
          null);
    case 4:
      return (
        Sr(),
        _c(e, t),
        e === null && Mo(t.stateNode.containerInfo),
        Qe(t),
        null
      );
    case 10:
      return (Sd(t.type._context), Qe(t), null);
    case 17:
      return (ht(t.type) && ma(), Qe(t), null);
    case 19:
      if ((ve(_e), (a = t.memoizedState), a === null)) return (Qe(t), null);
      if (((r = (t.flags & 128) !== 0), (u = a.rendering), u === null))
        if (r) eo(a, !1);
        else {
          if (Ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((u = Pa(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    eo(a, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (u = a.alternate),
                    u === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = u.childLanes),
                        (a.lanes = u.lanes),
                        (a.child = u.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = u.memoizedProps),
                        (a.memoizedState = u.memoizedState),
                        (a.updateQueue = u.updateQueue),
                        (a.type = u.type),
                        (e = u.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (pe(_e, (_e.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Ne() > Tr &&
            ((t.flags |= 128), (r = !0), eo(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Pa(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              eo(a, !0),
              a.tail === null && a.tailMode === "hidden" && !u.alternate && !ye)
            )
              return (Qe(t), null);
          } else
            2 * Ne() - a.renderingStartTime > Tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), eo(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = a.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (a.last = u));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ne()),
          (t.sibling = null),
          (n = _e.current),
          pe(_e, r ? (n & 1) | 2 : n & 1),
          t)
        : (Qe(t), null);
    case 22:
    case 23:
      return (
        Vd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? mt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function $w(e, t) {
  switch ((_d(t), t.tag)) {
    case 1:
      return (
        ht(t.type) && ma(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Sr(),
        ve(dt),
        ve(et),
        Nd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ld(t), null);
    case 13:
      if (
        (ve(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Pr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ve(_e), null);
    case 4:
      return (Sr(), null);
    case 10:
      return (Sd(t.type._context), null);
    case 22:
    case 23:
      return (Vd(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ds = !1,
  Je = !1,
  qw = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function lr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Te(e, t, r);
      }
    else n.current = null;
}
function wc(e, t, n) {
  try {
    n();
  } catch (r) {
    Te(e, t, r);
  }
}
var Lp = !1;
function Gw(e, t) {
  if (((rc = da), (e = sv()), yd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, a.nodeType);
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            c = -1,
            h = -1,
            p = 0,
            v = 0,
            g = e,
            x = null;
          t: for (;;) {
            for (
              var P;
              g !== n || (s !== 0 && g.nodeType !== 3) || (c = u + s),
                g !== a || (r !== 0 && g.nodeType !== 3) || (h = u + r),
                g.nodeType === 3 && (u += g.nodeValue.length),
                (P = g.firstChild) !== null;
            )
              ((x = g), (g = P));
            for (;;) {
              if (g === e) break t;
              if (
                (x === n && ++p === s && (c = u),
                x === a && ++v === r && (h = u),
                (P = g.nextSibling) !== null)
              )
                break;
              ((g = x), (x = g.parentNode));
            }
            g = P;
          }
          n = c === -1 || h === -1 ? null : { start: c, end: h };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oc = { focusedElem: e, selectionRange: n }, da = !1, U = t; U !== null;)
    if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (U = e));
    else
      for (; U !== null;) {
        t = U;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var C = S.memoizedProps,
                    j = S.memoizedState,
                    k = t.stateNode,
                    _ = k.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? C : Bt(t.type, C),
                      j,
                    );
                  k.__reactInternalSnapshotBeforeUpdate = _;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (N) {
          Te(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (U = e));
          break;
        }
        U = t.return;
      }
  return ((S = Lp), (Lp = !1), S);
}
function vo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var a = s.destroy;
        ((s.destroy = void 0), a !== void 0 && wc(t, n, a));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Qa(e, t) {
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
function Pc(e) {
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
function ny(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ny(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tn], delete t[zo], delete t[lc], delete t[Ew], delete t[jw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function iy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Np(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || iy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function kc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pa)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (kc(e, t, n), e = e.sibling; e !== null;)
      (kc(e, t, n), (e = e.sibling));
}
function Sc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sc(e, t, n), e = e.sibling; e !== null;)
      (Sc(e, t, n), (e = e.sibling));
}
var $e = null,
  Vt = !1;
function Nn(e, t, n) {
  for (n = n.child; n !== null;) (ry(e, t, n), (n = n.sibling));
}
function ry(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == "function")
    try {
      nn.onCommitFiberUnmount(Ua, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Je || lr(n, t);
    case 6:
      var r = $e,
        s = Vt;
      (($e = null),
        Nn(e, t, n),
        ($e = r),
        (Vt = s),
        $e !== null &&
          (Vt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $e.removeChild(n.stateNode)));
      break;
    case 18:
      $e !== null &&
        (Vt
          ? ((e = $e),
            (n = n.stateNode),
            e.nodeType === 8
              ? lu(e.parentNode, n)
              : e.nodeType === 1 && lu(e, n),
            No(e))
          : lu($e, n.stateNode));
      break;
    case 4:
      ((r = $e),
        (s = Vt),
        ($e = n.stateNode.containerInfo),
        (Vt = !0),
        Nn(e, t, n),
        ($e = r),
        (Vt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var a = s,
            u = a.destroy;
          ((a = a.tag),
            u !== void 0 && (a & 2 || a & 4) && wc(n, t, u),
            (s = s.next));
        } while (s !== r);
      }
      Nn(e, t, n);
      break;
    case 1:
      if (
        !Je &&
        (lr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (c) {
          Te(n, t, c);
        }
      Nn(e, t, n);
      break;
    case 21:
      Nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Je = (r = Je) || n.memoizedState !== null), Nn(e, t, n), (Je = r))
        : Nn(e, t, n);
      break;
    default:
      Nn(e, t, n);
  }
}
function Ep(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new qw()),
      t.forEach(function (r) {
        var s = i2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function It(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var a = e,
          u = t,
          c = u;
        e: for (; c !== null;) {
          switch (c.tag) {
            case 5:
              (($e = c.stateNode), (Vt = !1));
              break e;
            case 3:
              (($e = c.stateNode.containerInfo), (Vt = !0));
              break e;
            case 4:
              (($e = c.stateNode.containerInfo), (Vt = !0));
              break e;
          }
          c = c.return;
        }
        if ($e === null) throw Error(D(160));
        (ry(a, u, s), ($e = null), (Vt = !1));
        var h = s.alternate;
        (h !== null && (h.return = null), (s.return = null));
      } catch (p) {
        Te(s, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (oy(t, e), (t = t.sibling));
}
function oy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((It(t, e), Xt(e), r & 4)) {
        try {
          (vo(3, e, e.return), Qa(3, e));
        } catch (C) {
          Te(e, e.return, C);
        }
        try {
          vo(5, e, e.return);
        } catch (C) {
          Te(e, e.return, C);
        }
      }
      break;
    case 1:
      (It(t, e), Xt(e), r & 512 && n !== null && lr(n, n.return));
      break;
    case 5:
      if (
        (It(t, e),
        Xt(e),
        r & 512 && n !== null && lr(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Co(s, "");
        } catch (C) {
          Te(e, e.return, C);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var a = e.memoizedProps,
          u = n !== null ? n.memoizedProps : a,
          c = e.type,
          h = e.updateQueue;
        if (((e.updateQueue = null), h !== null))
          try {
            (c === "input" && a.type === "radio" && a.name != null && bg(s, a),
              Gu(c, u));
            var p = Gu(c, a);
            for (u = 0; u < h.length; u += 2) {
              var v = h[u],
                g = h[u + 1];
              v === "style"
                ? Mg(s, g)
                : v === "dangerouslySetInnerHTML"
                  ? Eg(s, g)
                  : v === "children"
                    ? Co(s, g)
                    : od(s, v, g, p);
            }
            switch (c) {
              case "input":
                Uu(s, a);
                break;
              case "textarea":
                Lg(s, a);
                break;
              case "select":
                var x = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!a.multiple;
                var P = a.value;
                P != null
                  ? pr(s, !!a.multiple, P, !1)
                  : x !== !!a.multiple &&
                    (a.defaultValue != null
                      ? pr(s, !!a.multiple, a.defaultValue, !0)
                      : pr(s, !!a.multiple, a.multiple ? [] : "", !1));
            }
            s[zo] = a;
          } catch (C) {
            Te(e, e.return, C);
          }
      }
      break;
    case 6:
      if ((It(t, e), Xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        ((s = e.stateNode), (a = e.memoizedProps));
        try {
          s.nodeValue = a;
        } catch (C) {
          Te(e, e.return, C);
        }
      }
      break;
    case 3:
      if (
        (It(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          No(t.containerInfo);
        } catch (C) {
          Te(e, e.return, C);
        }
      break;
    case 4:
      (It(t, e), Xt(e));
      break;
    case 13:
      (It(t, e),
        Xt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((a = s.memoizedState !== null),
          (s.stateNode.isHidden = a),
          !a ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Id = Ne())),
        r & 4 && Ep(e));
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Je = (p = Je) || v), It(t, e), (Je = p)) : It(t, e),
        Xt(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !v && e.mode & 1)
        )
          for (U = e, v = e.child; v !== null;) {
            for (g = U = v; U !== null;) {
              switch (((x = U), (P = x.child), x.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, x, x.return);
                  break;
                case 1:
                  lr(x, x.return);
                  var S = x.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    ((r = x), (n = x.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (C) {
                      Te(r, n, C);
                    }
                  }
                  break;
                case 5:
                  lr(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    Mp(g);
                    continue;
                  }
              }
              P !== null ? ((P.return = x), (U = P)) : Mp(g);
            }
            v = v.sibling;
          }
        e: for (v = null, g = e; ;) {
          if (g.tag === 5) {
            if (v === null) {
              v = g;
              try {
                ((s = g.stateNode),
                  p
                    ? ((a = s.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((c = g.stateNode),
                      (h = g.memoizedProps.style),
                      (u =
                        h != null && h.hasOwnProperty("display")
                          ? h.display
                          : null),
                      (c.style.display = jg("display", u))));
              } catch (C) {
                Te(e, e.return, C);
              }
            }
          } else if (g.tag === 6) {
            if (v === null)
              try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (C) {
                Te(e, e.return, C);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            ((g.child.return = g), (g = g.child));
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null;) {
            if (g.return === null || g.return === e) break e;
            (v === g && (v = null), (g = g.return));
          }
          (v === g && (v = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (It(t, e), Xt(e), r & 4 && Ep(e));
      break;
    case 21:
      break;
    default:
      (It(t, e), Xt(e));
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (iy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Co(s, ""), (r.flags &= -33));
          var a = Np(e);
          Sc(e, a, s);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            c = Np(e);
          kc(e, c, u);
          break;
        default:
          throw Error(D(161));
      }
    } catch (h) {
      Te(e, e.return, h);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Kw(e, t, n) {
  ((U = e), sy(e));
}
function sy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; U !== null;) {
    var s = U,
      a = s.child;
    if (s.tag === 22 && r) {
      var u = s.memoizedState !== null || Ds;
      if (!u) {
        var c = s.alternate,
          h = (c !== null && c.memoizedState !== null) || Je;
        c = Ds;
        var p = Je;
        if (((Ds = u), (Je = h) && !p))
          for (U = s; U !== null;)
            ((u = U),
              (h = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Ap(s)
                : h !== null
                  ? ((h.return = u), (U = h))
                  : Ap(s));
        for (; a !== null;) ((U = a), sy(a), (a = a.sibling));
        ((U = s), (Ds = c), (Je = p));
      }
      jp(e);
    } else
      s.subtreeFlags & 8772 && a !== null ? ((a.return = s), (U = a)) : jp(e);
  }
}
function jp(e) {
  for (; U !== null;) {
    var t = U;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Je || Qa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Je)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && mp(t, a, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                mp(t, u, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var h = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    h.autoFocus && n.focus();
                    break;
                  case "img":
                    h.src && (n.src = h.src);
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
                var p = t.alternate;
                if (p !== null) {
                  var v = p.memoizedState;
                  if (v !== null) {
                    var g = v.dehydrated;
                    g !== null && No(g);
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
              throw Error(D(163));
          }
        Je || (t.flags & 512 && Pc(t));
      } catch (x) {
        Te(t, t.return, x);
      }
    }
    if (t === e) {
      U = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (U = n));
      break;
    }
    U = t.return;
  }
}
function Mp(e) {
  for (; U !== null;) {
    var t = U;
    if (t === e) {
      U = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (U = n));
      break;
    }
    U = t.return;
  }
}
function Ap(e) {
  for (; U !== null;) {
    var t = U;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qa(4, t);
          } catch (h) {
            Te(t, n, h);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (h) {
              Te(t, s, h);
            }
          }
          var a = t.return;
          try {
            Pc(t);
          } catch (h) {
            Te(t, a, h);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Pc(t);
          } catch (h) {
            Te(t, u, h);
          }
      }
    } catch (h) {
      Te(t, t.return, h);
    }
    if (t === e) {
      U = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      ((c.return = t.return), (U = c));
      break;
    }
    U = t.return;
  }
}
var Yw = Math.ceil,
  Ca = Sn.ReactCurrentDispatcher,
  Od = Sn.ReactCurrentOwner,
  jt = Sn.ReactCurrentBatchConfig,
  ae = 0,
  Ze = null,
  Re = null,
  Ge = 0,
  mt = 0,
  ur = ti(0),
  Ie = 0,
  Vo = null,
  Li = 0,
  Xa = 0,
  Dd = 0,
  yo = null,
  ut = null,
  Id = 0,
  Tr = 1 / 0,
  dn = null,
  Ta = !1,
  Cc = null,
  Un = null,
  Is = !1,
  Dn = null,
  ba = 0,
  xo = 0,
  Tc = null,
  ea = -1,
  ta = 0;
function rt() {
  return ae & 6 ? Ne() : ea !== -1 ? ea : (ea = Ne());
}
function Hn(e) {
  return e.mode & 1
    ? ae & 2 && Ge !== 0
      ? Ge & -Ge
      : Aw.transition !== null
        ? (ta === 0 && (ta = Hg()), ta)
        : ((e = de),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qg(e.type))),
          e)
    : 1;
}
function Ut(e, t, n, r) {
  if (50 < xo) throw ((xo = 0), (Tc = null), Error(D(185)));
  (Go(e, n, r),
    (!(ae & 2) || e !== Ze) &&
      (e === Ze && (!(ae & 2) && (Xa |= n), Ie === 4 && Rn(e, Ge)),
      ft(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((Tr = Ne() + 500), Ga && ni())));
}
function ft(e, t) {
  var n = e.callbackNode;
  A1(e, t);
  var r = ca(e, e === Ze ? Ge : 0);
  if (r === 0)
    (n !== null && Zf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zf(n), t === 1))
      (e.tag === 0 ? Mw(zp.bind(null, e)) : gv(zp.bind(null, e)),
        Lw(function () {
          !(ae & 6) && ni();
        }),
        (n = null));
    else {
      switch (Wg(r)) {
        case 1:
          n = cd;
          break;
        case 4:
          n = Zg;
          break;
        case 16:
          n = ua;
          break;
        case 536870912:
          n = Ug;
          break;
        default:
          n = ua;
      }
      n = py(n, ay.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ay(e, t) {
  if (((ea = -1), (ta = 0), ae & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (xr() && e.callbackNode !== n) return null;
  var r = ca(e, e === Ze ? Ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = La(e, r);
  else {
    t = r;
    var s = ae;
    ae |= 2;
    var a = uy();
    (Ze !== e || Ge !== t) && ((dn = null), (Tr = Ne() + 500), Pi(e, t));
    do
      try {
        Jw();
        break;
      } catch (c) {
        ly(e, c);
      }
    while (!0);
    (kd(),
      (Ca.current = a),
      (ae = s),
      Re !== null ? (t = 0) : ((Ze = null), (Ge = 0), (t = Ie)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Ju(e)), s !== 0 && ((r = s), (t = bc(e, s)))), t === 1)
    )
      throw ((n = Vo), Pi(e, 0), Rn(e, r), ft(e, Ne()), n);
    if (t === 6) Rn(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Qw(s) &&
          ((t = La(e, r)),
          t === 2 && ((a = Ju(e)), a !== 0 && ((r = a), (t = bc(e, a)))),
          t === 1))
      )
        throw ((n = Vo), Pi(e, 0), Rn(e, r), ft(e, Ne()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          pi(e, ut, dn);
          break;
        case 3:
          if (
            (Rn(e, r), (r & 130023424) === r && ((t = Id + 500 - Ne()), 10 < t))
          ) {
            if (ca(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (rt(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = ac(pi.bind(null, e, ut, dn), t);
            break;
          }
          pi(e, ut, dn);
          break;
        case 4:
          if ((Rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r;) {
            var u = 31 - Zt(r);
            ((a = 1 << u), (u = t[u]), u > s && (s = u), (r &= ~a));
          }
          if (
            ((r = s),
            (r = Ne() - r),
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
                          : 1960 * Yw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ac(pi.bind(null, e, ut, dn), r);
            break;
          }
          pi(e, ut, dn);
          break;
        case 5:
          pi(e, ut, dn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return (ft(e, Ne()), e.callbackNode === n ? ay.bind(null, e) : null);
}
function bc(e, t) {
  var n = yo;
  return (
    e.current.memoizedState.isDehydrated && (Pi(e, t).flags |= 256),
    (e = La(e, t)),
    e !== 2 && ((t = ut), (ut = n), t !== null && Lc(t)),
    e
  );
}
function Lc(e) {
  ut === null ? (ut = e) : ut.push.apply(ut, e);
}
function Qw(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            a = s.getSnapshot;
          s = s.value;
          try {
            if (!Ht(a(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Rn(e, t) {
  for (
    t &= ~Dd,
      t &= ~Xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Zt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function zp(e) {
  if (ae & 6) throw Error(D(327));
  xr();
  var t = ca(e, 0);
  if (!(t & 1)) return (ft(e, Ne()), null);
  var n = La(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ju(e);
    r !== 0 && ((t = r), (n = bc(e, r)));
  }
  if (n === 1) throw ((n = Vo), Pi(e, 0), Rn(e, t), ft(e, Ne()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pi(e, ut, dn),
    ft(e, Ne()),
    null
  );
}
function Bd(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ((ae = n), ae === 0 && ((Tr = Ne() + 500), Ga && ni()));
  }
}
function Ni(e) {
  Dn !== null && Dn.tag === 0 && !(ae & 6) && xr();
  var t = ae;
  ae |= 1;
  var n = jt.transition,
    r = de;
  try {
    if (((jt.transition = null), (de = 1), e)) return e();
  } finally {
    ((de = r), (jt.transition = n), (ae = t), !(ae & 6) && ni());
  }
}
function Vd() {
  ((mt = ur.current), ve(ur));
}
function Pi(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), bw(n)), Re !== null))
    for (n = Re.return; n !== null;) {
      var r = n;
      switch ((_d(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ma());
          break;
        case 3:
          (Sr(), ve(dt), ve(et), Nd());
          break;
        case 5:
          Ld(r);
          break;
        case 4:
          Sr();
          break;
        case 13:
          ve(_e);
          break;
        case 19:
          ve(_e);
          break;
        case 10:
          Sd(r.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      n = n.return;
    }
  if (
    ((Ze = e),
    (Re = e = Wn(e.current, null)),
    (Ge = mt = t),
    (Ie = 0),
    (Vo = null),
    (Dd = Xa = Li = 0),
    (ut = yo = null),
    xi !== null)
  ) {
    for (t = 0; t < xi.length; t++)
      if (((n = xi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          a = n.pending;
        if (a !== null) {
          var u = a.next;
          ((a.next = s), (r.next = u));
        }
        n.pending = r;
      }
    xi = null;
  }
  return e;
}
function ly(e, t) {
  do {
    var n = Re;
    try {
      if ((kd(), (Qs.current = Sa), ka)) {
        for (var r = ke.memoizedState; r !== null;) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        ka = !1;
      }
      if (
        ((bi = 0),
        (Fe = De = ke = null),
        (go = !1),
        (Do = 0),
        (Od.current = null),
        n === null || n.return === null)
      ) {
        ((Ie = 1), (Vo = t), (Re = null));
        break;
      }
      e: {
        var a = e,
          u = n.return,
          c = n,
          h = t;
        if (
          ((t = Ge),
          (c.flags |= 32768),
          h !== null && typeof h == "object" && typeof h.then == "function")
        ) {
          var p = h,
            v = c,
            g = v.tag;
          if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var x = v.alternate;
            x
              ? ((v.updateQueue = x.updateQueue),
                (v.memoizedState = x.memoizedState),
                (v.lanes = x.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var P = wp(u);
          if (P !== null) {
            ((P.flags &= -257),
              Pp(P, u, c, a, t),
              P.mode & 1 && _p(a, p, t),
              (t = P),
              (h = p));
            var S = t.updateQueue;
            if (S === null) {
              var C = new Set();
              (C.add(h), (t.updateQueue = C));
            } else S.add(h);
            break e;
          } else {
            if (!(t & 1)) {
              (_p(a, p, t), Fd());
              break e;
            }
            h = Error(D(426));
          }
        } else if (ye && c.mode & 1) {
          var j = wp(u);
          if (j !== null) {
            (!(j.flags & 65536) && (j.flags |= 256),
              Pp(j, u, c, a, t),
              wd(Cr(h, c)));
            break e;
          }
        }
        ((a = h = Cr(h, c)),
          Ie !== 4 && (Ie = 2),
          yo === null ? (yo = [a]) : yo.push(a),
          (a = u));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var k = Wv(a, h, t);
              pp(a, k);
              break e;
            case 1:
              c = h;
              var _ = a.type,
                w = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof _.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (Un === null || !Un.has(w))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var N = $v(a, c, t);
                pp(a, N);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      dy(n);
    } catch (A) {
      ((t = A), Re === n && n !== null && (Re = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function uy() {
  var e = Ca.current;
  return ((Ca.current = Sa), e === null ? Sa : e);
}
function Fd() {
  ((Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
    Ze === null || (!(Li & 268435455) && !(Xa & 268435455)) || Rn(Ze, Ge));
}
function La(e, t) {
  var n = ae;
  ae |= 2;
  var r = uy();
  (Ze !== e || Ge !== t) && ((dn = null), Pi(e, t));
  do
    try {
      Xw();
      break;
    } catch (s) {
      ly(e, s);
    }
  while (!0);
  if ((kd(), (ae = n), (Ca.current = r), Re !== null)) throw Error(D(261));
  return ((Ze = null), (Ge = 0), Ie);
}
function Xw() {
  for (; Re !== null;) cy(Re);
}
function Jw() {
  for (; Re !== null && !S1();) cy(Re);
}
function cy(e) {
  var t = fy(e.alternate, e, mt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? dy(e) : (Re = t),
    (Od.current = null));
}
function dy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $w(n, t)), n !== null)) {
        ((n.flags &= 32767), (Re = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Ie = 6), (Re = null));
        return;
      }
    } else if (((n = Ww(n, t, mt)), n !== null)) {
      Re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  Ie === 0 && (Ie = 5);
}
function pi(e, t, n) {
  var r = de,
    s = jt.transition;
  try {
    ((jt.transition = null), (de = 1), e2(e, t, n, r));
  } finally {
    ((jt.transition = s), (de = r));
  }
  return null;
}
function e2(e, t, n, r) {
  do xr();
  while (Dn !== null);
  if (ae & 6) throw Error(D(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = n.lanes | n.childLanes;
  if (
    (z1(e, a),
    e === Ze && ((Re = Ze = null), (Ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Is ||
      ((Is = !0),
      py(ua, function () {
        return (xr(), null);
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    ((a = jt.transition), (jt.transition = null));
    var u = de;
    de = 1;
    var c = ae;
    ((ae |= 4),
      (Od.current = null),
      Gw(e, n),
      oy(n, e),
      _w(oc),
      (da = !!rc),
      (oc = rc = null),
      (e.current = n),
      Kw(n),
      C1(),
      (ae = c),
      (de = u),
      (jt.transition = a));
  } else e.current = n;
  if (
    (Is && ((Is = !1), (Dn = e), (ba = s)),
    (a = e.pendingLanes),
    a === 0 && (Un = null),
    L1(n.stateNode),
    ft(e, Ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ta) throw ((Ta = !1), (e = Cc), (Cc = null), e);
  return (
    ba & 1 && e.tag !== 0 && xr(),
    (a = e.pendingLanes),
    a & 1 ? (e === Tc ? xo++ : ((xo = 0), (Tc = e))) : (xo = 0),
    ni(),
    null
  );
}
function xr() {
  if (Dn !== null) {
    var e = Wg(ba),
      t = jt.transition,
      n = de;
    try {
      if (((jt.transition = null), (de = 16 > e ? 16 : e), Dn === null))
        var r = !1;
      else {
        if (((e = Dn), (Dn = null), (ba = 0), ae & 6)) throw Error(D(331));
        var s = ae;
        for (ae |= 4, U = e.current; U !== null;) {
          var a = U,
            u = a.child;
          if (U.flags & 16) {
            var c = a.deletions;
            if (c !== null) {
              for (var h = 0; h < c.length; h++) {
                var p = c[h];
                for (U = p; U !== null;) {
                  var v = U;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(8, v, a);
                  }
                  var g = v.child;
                  if (g !== null) ((g.return = v), (U = g));
                  else
                    for (; U !== null;) {
                      v = U;
                      var x = v.sibling,
                        P = v.return;
                      if ((ny(v), v === p)) {
                        U = null;
                        break;
                      }
                      if (x !== null) {
                        ((x.return = P), (U = x));
                        break;
                      }
                      U = P;
                    }
                }
              }
              var S = a.alternate;
              if (S !== null) {
                var C = S.child;
                if (C !== null) {
                  S.child = null;
                  do {
                    var j = C.sibling;
                    ((C.sibling = null), (C = j));
                  } while (C !== null);
                }
              }
              U = a;
            }
          }
          if (a.subtreeFlags & 2064 && u !== null) ((u.return = a), (U = u));
          else
            e: for (; U !== null;) {
              if (((a = U), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vo(9, a, a.return);
                }
              var k = a.sibling;
              if (k !== null) {
                ((k.return = a.return), (U = k));
                break e;
              }
              U = a.return;
            }
        }
        var _ = e.current;
        for (U = _; U !== null;) {
          u = U;
          var w = u.child;
          if (u.subtreeFlags & 2064 && w !== null) ((w.return = u), (U = w));
          else
            e: for (u = _; U !== null;) {
              if (((c = U), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qa(9, c);
                  }
                } catch (A) {
                  Te(c, c.return, A);
                }
              if (c === u) {
                U = null;
                break e;
              }
              var N = c.sibling;
              if (N !== null) {
                ((N.return = c.return), (U = N));
                break e;
              }
              U = c.return;
            }
        }
        if (
          ((ae = s), ni(), nn && typeof nn.onPostCommitFiberRoot == "function")
        )
          try {
            nn.onPostCommitFiberRoot(Ua, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((de = n), (jt.transition = t));
    }
  }
  return !1;
}
function Rp(e, t, n) {
  ((t = Cr(n, t)),
    (t = Wv(e, t, 1)),
    (e = Zn(e, t, 1)),
    (t = rt()),
    e !== null && (Go(e, 1, t), ft(e, t)));
}
function Te(e, t, n) {
  if (e.tag === 3) Rp(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Rp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Un === null || !Un.has(r)))
        ) {
          ((e = Cr(n, e)),
            (e = $v(t, e, 1)),
            (t = Zn(t, e, 1)),
            (e = rt()),
            t !== null && (Go(t, 1, e), ft(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function t2(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = rt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ze === e &&
      (Ge & n) === n &&
      (Ie === 4 || (Ie === 3 && (Ge & 130023424) === Ge && 500 > Ne() - Id)
        ? Pi(e, 0)
        : (Dd |= n)),
    ft(e, t));
}
function hy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ls), (Ls <<= 1), !(Ls & 130023424) && (Ls = 4194304))
      : (t = 1));
  var n = rt();
  ((e = wn(e, t)), e !== null && (Go(e, t, n), ft(e, n)));
}
function n2(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), hy(e, n));
}
function i2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  (r !== null && r.delete(t), hy(e, n));
}
var fy;
fy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || dt.current) ct = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ct = !1), Hw(e, t, n));
      ct = !!(e.flags & 131072);
    }
  else ((ct = !1), ye && t.flags & 1048576 && vv(t, ya, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Js(e, t), (e = t.pendingProps));
      var s = wr(t, et.current);
      (yr(t, n), (s = jd(null, t, r, e, s, n)));
      var a = Md();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ht(r) ? ((a = !0), ga(t)) : (a = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Td(t),
            (s.updater = Ya),
            (t.stateNode = s),
            (s._reactInternals = t),
            pc(t, r, e, n),
            (t = vc(null, t, r, !0, a, n)))
          : ((t.tag = 0), ye && a && xd(t), it(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Js(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = o2(r)),
          (e = Bt(r, e)),
          s)
        ) {
          case 0:
            t = gc(null, t, r, e, n);
            break e;
          case 1:
            t = Cp(null, t, r, e, n);
            break e;
          case 11:
            t = kp(null, t, r, e, n);
            break e;
          case 14:
            t = Sp(null, t, r, Bt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Bt(r, s)),
        gc(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Bt(r, s)),
        Cp(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((Yv(t), e === null)) throw Error(D(387));
        ((r = t.pendingProps),
          (a = t.memoizedState),
          (s = a.element),
          kv(e, t),
          wa(t, r, null, n));
        var u = t.memoizedState;
        if (((r = u.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ((s = Cr(Error(D(423)), t)), (t = Tp(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Cr(Error(D(424)), t)), (t = Tp(e, t, r, n, s)));
            break e;
          } else
            for (
              gt = Fn(t.stateNode.containerInfo.firstChild),
                vt = t,
                ye = !0,
                Ft = null,
                n = wv(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Pr(), r === s)) {
            t = Pn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sv(t),
        e === null && dc(t),
        (r = t.type),
        (s = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (u = s.children),
        sc(r, s) ? (u = null) : a !== null && sc(r, a) && (t.flags |= 32),
        Kv(e, t),
        it(e, t, u, n),
        t.child
      );
    case 6:
      return (e === null && dc(t), null);
    case 13:
      return Qv(e, t, n);
    case 4:
      return (
        bd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kr(t, null, r, n)) : it(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Bt(r, s)),
        kp(e, t, r, s, n)
      );
    case 7:
      return (it(e, t, t.pendingProps, n), t.child);
    case 8:
      return (it(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (it(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (a = t.memoizedProps),
          (u = s.value),
          pe(xa, r._currentValue),
          (r._currentValue = u),
          a !== null)
        )
          if (Ht(a.value, u)) {
            if (a.children === s.children && !dt.current) {
              t = Pn(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null;) {
              var c = a.dependencies;
              if (c !== null) {
                u = a.child;
                for (var h = c.firstContext; h !== null;) {
                  if (h.context === r) {
                    if (a.tag === 1) {
                      ((h = gn(-1, n & -n)), (h.tag = 2));
                      var p = a.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var v = p.pending;
                        (v === null
                          ? (h.next = h)
                          : ((h.next = v.next), (v.next = h)),
                          (p.pending = h));
                      }
                    }
                    ((a.lanes |= n),
                      (h = a.alternate),
                      h !== null && (h.lanes |= n),
                      hc(a.return, n, t),
                      (c.lanes |= n));
                    break;
                  }
                  h = h.next;
                }
              } else if (a.tag === 10) u = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((u = a.return), u === null)) throw Error(D(341));
                ((u.lanes |= n),
                  (c = u.alternate),
                  c !== null && (c.lanes |= n),
                  hc(u, n, t),
                  (u = a.sibling));
              } else u = a.child;
              if (u !== null) u.return = a;
              else
                for (u = a; u !== null;) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((a = u.sibling), a !== null)) {
                    ((a.return = u.return), (u = a));
                    break;
                  }
                  u = u.return;
                }
              a = u;
            }
        (it(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        yr(t, n),
        (s = At(s)),
        (r = r(s)),
        (t.flags |= 1),
        it(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Bt(r, t.pendingProps)),
        (s = Bt(r.type, s)),
        Sp(e, t, r, s, n)
      );
    case 15:
      return qv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Bt(r, s)),
        Js(e, t),
        (t.tag = 1),
        ht(r) ? ((e = !0), ga(t)) : (e = !1),
        yr(t, n),
        Hv(t, r, s),
        pc(t, r, s, n),
        vc(null, t, r, !0, e, n)
      );
    case 19:
      return Xv(e, t, n);
    case 22:
      return Gv(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function py(e, t) {
  return Fg(e, t);
}
function r2(e, t, n, r) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function Nt(e, t, n, r) {
  return new r2(e, t, n, r);
}
function Zd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function o2(e) {
  if (typeof e == "function") return Zd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ad)) return 11;
    if (e === ld) return 14;
  }
  return 2;
}
function Wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Nt(e.tag, t, e.key, e.mode)),
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
function na(e, t, n, r, s, a) {
  var u = 2;
  if (((r = e), typeof e == "function")) Zd(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else
    e: switch (e) {
      case Ji:
        return ki(n.children, s, a, t);
      case sd:
        ((u = 8), (s |= 8));
        break;
      case Iu:
        return (
          (e = Nt(12, n, t, s | 2)),
          (e.elementType = Iu),
          (e.lanes = a),
          e
        );
      case Bu:
        return ((e = Nt(13, n, t, s)), (e.elementType = Bu), (e.lanes = a), e);
      case Vu:
        return ((e = Nt(19, n, t, s)), (e.elementType = Vu), (e.lanes = a), e);
      case Sg:
        return Ja(n, s, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pg:
              u = 10;
              break e;
            case kg:
              u = 9;
              break e;
            case ad:
              u = 11;
              break e;
            case ld:
              u = 14;
              break e;
            case jn:
              ((u = 16), (r = null));
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Nt(u, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = a),
    t
  );
}
function ki(e, t, n, r) {
  return ((e = Nt(7, e, r, t)), (e.lanes = n), e);
}
function Ja(e, t, n, r) {
  return (
    (e = Nt(22, e, r, t)),
    (e.elementType = Sg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gu(e, t, n) {
  return ((e = Nt(6, e, null, t)), (e.lanes = n), e);
}
function vu(e, t, n) {
  return (
    (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function s2(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Ud(e, t, n, r, s, a, u, c, h) {
  return (
    (e = new s2(e, t, n, c, h)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Nt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Td(a),
    e
  );
}
function a2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function my(e) {
  if (!e) return Qn;
  e = e._reactInternals;
  e: {
    if (ji(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ht(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ht(n)) return mv(e, n, t);
  }
  return t;
}
function gy(e, t, n, r, s, a, u, c, h) {
  return (
    (e = Ud(n, r, !0, e, s, a, u, c, h)),
    (e.context = my(null)),
    (n = e.current),
    (r = rt()),
    (s = Hn(n)),
    (a = gn(r, s)),
    (a.callback = t ?? null),
    Zn(n, a, s),
    (e.current.lanes = s),
    Go(e, s, r),
    ft(e, r),
    e
  );
}
function el(e, t, n, r) {
  var s = t.current,
    a = rt(),
    u = Hn(s);
  return (
    (n = my(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gn(a, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zn(s, t, u)),
    e !== null && (Ut(e, s, u, a), Ys(e, s, u)),
    u
  );
}
function Na(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Op(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hd(e, t) {
  (Op(e, t), (e = e.alternate) && Op(e, t));
}
function l2() {
  return null;
}
var vy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wd(e) {
  this._internalRoot = e;
}
tl.prototype.render = Wd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  el(e, t, null, null);
};
tl.prototype.unmount = Wd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Ni(function () {
      el(null, e, null, null);
    }),
      (t[_n] = null));
  }
};
function tl(e) {
  this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Gg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
    (zn.splice(n, 0, e), n === 0 && Yg(e));
  }
};
function $d(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dp() {}
function u2(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var p = Na(u);
        a.call(p);
      };
    }
    var u = gy(t, r, e, 0, null, !1, !1, "", Dp);
    return (
      (e._reactRootContainer = u),
      (e[_n] = u.current),
      Mo(e.nodeType === 8 ? e.parentNode : e),
      Ni(),
      u
    );
  }
  for (; (s = e.lastChild);) e.removeChild(s);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var p = Na(h);
      c.call(p);
    };
  }
  var h = Ud(e, 0, !1, null, null, !1, !1, "", Dp);
  return (
    (e._reactRootContainer = h),
    (e[_n] = h.current),
    Mo(e.nodeType === 8 ? e.parentNode : e),
    Ni(function () {
      el(t, h, n, r);
    }),
    h
  );
}
function il(e, t, n, r, s) {
  var a = n._reactRootContainer;
  if (a) {
    var u = a;
    if (typeof s == "function") {
      var c = s;
      s = function () {
        var h = Na(u);
        c.call(h);
      };
    }
    el(t, u, e, s);
  } else u = u2(n, t, e, s, r);
  return Na(u);
}
$g = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = so(t.pendingLanes);
        n !== 0 &&
          (dd(t, n | 1), ft(t, Ne()), !(ae & 6) && ((Tr = Ne() + 500), ni()));
      }
      break;
    case 13:
      (Ni(function () {
        var r = wn(e, 1);
        if (r !== null) {
          var s = rt();
          Ut(r, e, 1, s);
        }
      }),
        Hd(e, 1));
  }
};
hd = function (e) {
  if (e.tag === 13) {
    var t = wn(e, 134217728);
    if (t !== null) {
      var n = rt();
      Ut(t, e, 134217728, n);
    }
    Hd(e, 134217728);
  }
};
qg = function (e) {
  if (e.tag === 13) {
    var t = Hn(e),
      n = wn(e, t);
    if (n !== null) {
      var r = rt();
      Ut(n, e, t, r);
    }
    Hd(e, t);
  }
};
Gg = function () {
  return de;
};
Kg = function (e, t) {
  var n = de;
  try {
    return ((de = e), t());
  } finally {
    de = n;
  }
};
Yu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Uu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = qa(r);
            if (!s) throw Error(D(90));
            (Tg(r), Uu(r, s));
          }
        }
      }
      break;
    case "textarea":
      Lg(e, n);
      break;
    case "select":
      ((t = n.value), t != null && pr(e, !!n.multiple, t, !1));
  }
};
Rg = Bd;
Og = Ni;
var c2 = { usingClientEntryPoint: !1, Events: [Yo, ir, qa, Ag, zg, Bd] },
  to = {
    findFiberByHostInstance: yi,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  d2 = {
    bundleType: to.bundleType,
    version: to.version,
    rendererPackageName: to.rendererPackageName,
    rendererConfig: to.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Bg(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: to.findFiberByHostInstance || l2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bs.isDisabled && Bs.supportsFiber)
    try {
      ((Ua = Bs.inject(d2)), (nn = Bs));
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c2;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$d(t)) throw Error(D(200));
  return a2(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!$d(e)) throw Error(D(299));
  var n = !1,
    r = "",
    s = vy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Ud(e, 1, !1, null, null, n, !1, r, s)),
    (e[_n] = t.current),
    Mo(e.nodeType === 8 ? e.parentNode : e),
    new Wd(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return ((e = Bg(t)), (e = e === null ? null : e.stateNode), e);
};
_t.flushSync = function (e) {
  return Ni(e);
};
_t.hydrate = function (e, t, n) {
  if (!nl(t)) throw Error(D(200));
  return il(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!$d(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    a = "",
    u = vy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = gy(t, null, e, 1, n ?? null, s, !1, a, u)),
    (e[_n] = t.current),
    Mo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new tl(t);
};
_t.render = function (e, t, n) {
  if (!nl(t)) throw Error(D(200));
  return il(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!nl(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Ni(function () {
        il(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[_n] = null));
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = Bd;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!nl(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return il(e, t, n, !1, r);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function yy() {
  if (!(
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
  ))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy);
    } catch (e) {
      console.error(e);
    }
}
(yy(), (yg.exports = _t));
var h2 = yg.exports,
  Ip = h2;
((Ou.createRoot = Ip.createRoot), (Ou.hydrateRoot = Ip.hydrateRoot));
/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fo.apply(null, arguments)
  );
}
var Et;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Et || (Et = {}));
const Bp = "popstate";
function f2(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ["/"], initialIndex: n, v5Compat: r = !1 } = e,
    s;
  s = t.map((P, S) =>
    v(P, typeof P == "string" ? null : P.state, S === 0 ? "default" : void 0),
  );
  let a = h(n ?? s.length - 1),
    u = Et.Pop,
    c = null;
  function h(P) {
    return Math.min(Math.max(P, 0), s.length - 1);
  }
  function p() {
    return s[a];
  }
  function v(P, S, C) {
    S === void 0 && (S = null);
    let j = Ea(s ? p().pathname : "/", P, S, C);
    return (
      rl(
        j.pathname.charAt(0) === "/",
        "relative pathnames are not supported in memory history: " +
          JSON.stringify(P),
      ),
      j
    );
  }
  function g(P) {
    return typeof P == "string" ? P : Zo(P);
  }
  return {
    get index() {
      return a;
    },
    get action() {
      return u;
    },
    get location() {
      return p();
    },
    createHref: g,
    createURL(P) {
      return new URL(g(P), "http://localhost");
    },
    encodeLocation(P) {
      let S = typeof P == "string" ? ii(P) : P;
      return {
        pathname: S.pathname || "",
        search: S.search || "",
        hash: S.hash || "",
      };
    },
    push(P, S) {
      u = Et.Push;
      let C = v(P, S);
      ((a += 1),
        s.splice(a, s.length, C),
        r && c && c({ action: u, location: C, delta: 1 }));
    },
    replace(P, S) {
      u = Et.Replace;
      let C = v(P, S);
      ((s[a] = C), r && c && c({ action: u, location: C, delta: 0 }));
    },
    go(P) {
      u = Et.Pop;
      let S = h(a + P),
        C = s[S];
      ((a = S), c && c({ action: u, location: C, delta: P }));
    },
    listen(P) {
      return (
        (c = P),
        () => {
          c = null;
        }
      );
    },
  };
}
function p2(e) {
  e === void 0 && (e = {});
  function t(s, a) {
    let {
      pathname: u = "/",
      search: c = "",
      hash: h = "",
    } = ii(s.location.hash.substr(1));
    return (
      !u.startsWith("/") && !u.startsWith(".") && (u = "/" + u),
      Ea(
        "",
        { pathname: u, search: c, hash: h },
        (a.state && a.state.usr) || null,
        (a.state && a.state.key) || "default",
      )
    );
  }
  function n(s, a) {
    let u = s.document.querySelector("base"),
      c = "";
    if (u && u.getAttribute("href")) {
      let h = s.location.href,
        p = h.indexOf("#");
      c = p === -1 ? h : h.slice(0, p);
    }
    return c + "#" + (typeof a == "string" ? a : Zo(a));
  }
  function r(s, a) {
    rl(
      s.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(a) +
        ")",
    );
  }
  return g2(t, n, r, e);
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function rl(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function m2() {
  return Math.random().toString(36).substr(2, 8);
}
function Vp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ea(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Fo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ii(t) : t,
      { state: n, key: (t && t.key) || r || m2() },
    )
  );
}
function Zo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ii(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function g2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: a = !1 } = r,
    u = s.history,
    c = Et.Pop,
    h = null,
    p = v();
  p == null && ((p = 0), u.replaceState(Fo({}, u.state, { idx: p }), ""));
  function v() {
    return (u.state || { idx: null }).idx;
  }
  function g() {
    c = Et.Pop;
    let j = v(),
      k = j == null ? null : j - p;
    ((p = j), h && h({ action: c, location: C.location, delta: k }));
  }
  function x(j, k) {
    c = Et.Push;
    let _ = Ea(C.location, j, k);
    (n && n(_, j), (p = v() + 1));
    let w = Vp(_, p),
      N = C.createHref(_);
    try {
      u.pushState(w, "", N);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      s.location.assign(N);
    }
    a && h && h({ action: c, location: C.location, delta: 1 });
  }
  function P(j, k) {
    c = Et.Replace;
    let _ = Ea(C.location, j, k);
    (n && n(_, j), (p = v()));
    let w = Vp(_, p),
      N = C.createHref(_);
    (u.replaceState(w, "", N),
      a && h && h({ action: c, location: C.location, delta: 0 }));
  }
  function S(j) {
    let k = s.location.origin !== "null" ? s.location.origin : s.location.href,
      _ = typeof j == "string" ? j : Zo(j);
    return (
      (_ = _.replace(/ $/, "%20")),
      je(
        k,
        "No window.location.(origin|href) available to create URL for href: " +
          _,
      ),
      new URL(_, k)
    );
  }
  let C = {
    get action() {
      return c;
    },
    get location() {
      return e(s, u);
    },
    listen(j) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Bp, g),
        (h = j),
        () => {
          (s.removeEventListener(Bp, g), (h = null));
        }
      );
    },
    createHref(j) {
      return t(s, j);
    },
    createURL: S,
    encodeLocation(j) {
      let k = S(j);
      return { pathname: k.pathname, search: k.search, hash: k.hash };
    },
    push: x,
    replace: P,
    go(j) {
      return u.go(j);
    },
  };
  return C;
}
var Fp;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Fp || (Fp = {}));
function v2(e, t, n) {
  return (n === void 0 && (n = "/"), y2(e, t, n));
}
function y2(e, t, n, r) {
  let s = typeof t == "string" ? ii(t) : t,
    a = qd(s.pathname || "/", n);
  if (a == null) return null;
  let u = xy(e);
  x2(u);
  let c = null,
    h = j2(a);
  for (let p = 0; c == null && p < u.length; ++p) c = L2(u[p], h);
  return c;
}
function xy(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let s = (a, u, c) => {
    let h = {
      relativePath: c === void 0 ? a.path || "" : c,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: u,
      route: a,
    };
    h.relativePath.startsWith("/") &&
      (je(
        h.relativePath.startsWith(r),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (h.relativePath = h.relativePath.slice(r.length)));
    let p = $n([r, h.relativePath]),
      v = n.concat(h);
    (a.children &&
      a.children.length > 0 &&
      (je(
        a.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".'),
      ),
      xy(a.children, t, v, p)),
      !(a.path == null && !a.index) &&
        t.push({ path: p, score: T2(p, a.index), routesMeta: v }));
  };
  return (
    e.forEach((a, u) => {
      var c;
      if (a.path === "" || !((c = a.path) != null && c.includes("?"))) s(a, u);
      else for (let h of _y(a.path)) s(a, u, h);
    }),
    t
  );
}
function _y(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    a = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [a, ""] : [a];
  let u = _y(r.join("/")),
    c = [];
  return (
    c.push(...u.map((h) => (h === "" ? a : [a, h].join("/")))),
    s && c.push(...u),
    c.map((h) => (e.startsWith("/") && h === "" ? "/" : h))
  );
}
function x2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : b2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const _2 = /^:[\w-]+$/,
  w2 = 3,
  P2 = 2,
  k2 = 1,
  S2 = 10,
  C2 = -2,
  Zp = (e) => e === "*";
function T2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Zp) && (r += C2),
    t && (r += P2),
    n
      .filter((s) => !Zp(s))
      .reduce((s, a) => s + (_2.test(a) ? w2 : a === "" ? k2 : S2), r)
  );
}
function b2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function L2(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    a = "/",
    u = [];
  for (let c = 0; c < r.length; ++c) {
    let h = r[c],
      p = c === r.length - 1,
      v = a === "/" ? t : t.slice(a.length) || "/",
      g = N2(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
        v,
      ),
      x = h.route;
    if (!g) return null;
    (Object.assign(s, g.params),
      u.push({
        params: s,
        pathname: $n([a, g.pathname]),
        pathnameBase: z2($n([a, g.pathnameBase])),
        route: x,
      }),
      g.pathnameBase !== "/" && (a = $n([a, g.pathnameBase])));
  }
  return u;
}
function N2(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = E2(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let a = s[0],
    u = a.replace(/(.)\/+$/, "$1"),
    c = s.slice(1);
  return {
    params: r.reduce((p, v, g) => {
      let { paramName: x, isOptional: P } = v;
      if (x === "*") {
        let C = c[g] || "";
        u = a.slice(0, a.length - C.length).replace(/(.)\/+$/, "$1");
      }
      const S = c[g];
      return (
        P && !S ? (p[x] = void 0) : (p[x] = (S || "").replace(/%2F/g, "/")),
        p
      );
    }, {}),
    pathname: a,
    pathnameBase: u,
    pattern: e,
  };
}
function E2(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    rl(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (u, c, h) => (
            r.push({ paramName: c, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function j2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      rl(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function qd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function M2(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: s = "",
    } = typeof e == "string" ? ii(e) : e,
    a;
  return (
    n
      ? ((n = wy(n)),
        n.startsWith("/") ? (a = Up(n.substring(1), "/")) : (a = Up(n, t)))
      : (a = t),
    { pathname: a, search: R2(r), hash: O2(s) }
  );
}
function Up(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function yu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function A2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Gd(e, t) {
  let n = A2(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kd(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = ii(e))
    : ((s = Fo({}, e)),
      je(
        !s.pathname || !s.pathname.includes("?"),
        yu("?", "pathname", "search", s),
      ),
      je(
        !s.pathname || !s.pathname.includes("#"),
        yu("#", "pathname", "hash", s),
      ),
      je(!s.search || !s.search.includes("#"), yu("#", "search", "hash", s)));
  let a = e === "" || s.pathname === "",
    u = a ? "/" : s.pathname,
    c;
  if (u == null) c = n;
  else {
    let g = t.length - 1;
    if (!r && u.startsWith("..")) {
      let x = u.split("/");
      for (; x[0] === "..";) (x.shift(), (g -= 1));
      s.pathname = x.join("/");
    }
    c = g >= 0 ? t[g] : "/";
  }
  let h = M2(s, c),
    p = u && u !== "/" && u.endsWith("/"),
    v = (a || u === ".") && n.endsWith("/");
  return (!h.pathname.endsWith("/") && (p || v) && (h.pathname += "/"), h);
}
const wy = (e) => e.replace(/\/\/+/g, "/"),
  $n = (e) => wy(e.join("/")),
  z2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  R2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  O2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function D2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Py = ["post", "put", "patch", "delete"];
new Set(Py);
const I2 = ["get", ...Py];
new Set(I2);
/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uo.apply(null, arguments)
  );
}
const Yd = b.createContext(null),
  B2 = b.createContext(null),
  ri = b.createContext(null),
  ol = b.createContext(null),
  Cn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ky = b.createContext(null);
function V2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ar() || je(!1);
  let { basename: r, navigator: s } = b.useContext(ri),
    { hash: a, pathname: u, search: c } = Cy(e, { relative: n }),
    h = u;
  return (
    r !== "/" && (h = u === "/" ? r : $n([r, u])),
    s.createHref({ pathname: h, search: c, hash: a })
  );
}
function Ar() {
  return b.useContext(ol) != null;
}
function Wt() {
  return (Ar() || je(!1), b.useContext(ol).location);
}
function Sy(e) {
  b.useContext(ri).static || b.useLayoutEffect(e);
}
function oi() {
  let { isDataRoute: e } = b.useContext(Cn);
  return e ? eP() : F2();
}
function F2() {
  Ar() || je(!1);
  let e = b.useContext(Yd),
    { basename: t, future: n, navigator: r } = b.useContext(ri),
    { matches: s } = b.useContext(Cn),
    { pathname: a } = Wt(),
    u = JSON.stringify(Gd(s, n.v7_relativeSplatPath)),
    c = b.useRef(!1);
  return (
    Sy(() => {
      c.current = !0;
    }),
    b.useCallback(
      function (p, v) {
        if ((v === void 0 && (v = {}), !c.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let g = Kd(p, JSON.parse(u), a, v.relative === "path");
        (e == null &&
          t !== "/" &&
          (g.pathname = g.pathname === "/" ? t : $n([t, g.pathname])),
          (v.replace ? r.replace : r.push)(g, v.state, v));
      },
      [t, r, u, a, e],
    )
  );
}
function Z2() {
  let { matches: e } = b.useContext(Cn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Cy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(ri),
    { matches: s } = b.useContext(Cn),
    { pathname: a } = Wt(),
    u = JSON.stringify(Gd(s, r.v7_relativeSplatPath));
  return b.useMemo(() => Kd(e, JSON.parse(u), a, n === "path"), [e, u, a, n]);
}
function U2(e, t) {
  return H2(e, t);
}
function H2(e, t, n, r) {
  Ar() || je(!1);
  let { navigator: s } = b.useContext(ri),
    { matches: a } = b.useContext(Cn),
    u = a[a.length - 1],
    c = u ? u.params : {};
  u && u.pathname;
  let h = u ? u.pathnameBase : "/";
  u && u.route;
  let p = Wt(),
    v;
  if (t) {
    var g;
    let j = typeof t == "string" ? ii(t) : t;
    (h === "/" || ((g = j.pathname) != null && g.startsWith(h)) || je(!1),
      (v = j));
  } else v = p;
  let x = v.pathname || "/",
    P = x;
  if (h !== "/") {
    let j = h.replace(/^\//, "").split("/");
    P = "/" + x.replace(/^\//, "").split("/").slice(j.length).join("/");
  }
  let S = v2(e, { pathname: P }),
    C = K2(
      S &&
        S.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, c, j.params),
            pathname: $n([
              h,
              s.encodeLocation
                ? s.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? h
                : $n([
                    h,
                    s.encodeLocation
                      ? s.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          }),
        ),
      a,
      n,
      r,
    );
  return t && C
    ? b.createElement(
        ol.Provider,
        {
          value: {
            location: Uo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              v,
            ),
            navigationType: Et.Pop,
          },
        },
        C,
      )
    : C;
}
function W2() {
  let e = J2(),
    t = D2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: s }, n) : null,
    null,
  );
}
const $2 = b.createElement(W2, null);
class q2 extends b.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          Cn.Provider,
          { value: this.props.routeContext },
          b.createElement(ky.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function G2(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = b.useContext(Yd);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Cn.Provider, { value: t }, r)
  );
}
function K2(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var a;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (a = r) != null &&
      a.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let u = e,
    c = (s = n) == null ? void 0 : s.errors;
  if (c != null) {
    let v = u.findIndex(
      (g) => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0,
    );
    (v >= 0 || je(!1), (u = u.slice(0, Math.min(u.length, v + 1))));
  }
  let h = !1,
    p = -1;
  if (n && r && r.v7_partialHydration)
    for (let v = 0; v < u.length; v++) {
      let g = u[v];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (p = v),
        g.route.id)
      ) {
        let { loaderData: x, errors: P } = n,
          S =
            g.route.loader &&
            x[g.route.id] === void 0 &&
            (!P || P[g.route.id] === void 0);
        if (g.route.lazy || S) {
          ((h = !0), p >= 0 ? (u = u.slice(0, p + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  return u.reduceRight((v, g, x) => {
    let P,
      S = !1,
      C = null,
      j = null;
    n &&
      ((P = c && g.route.id ? c[g.route.id] : void 0),
      (C = g.route.errorElement || $2),
      h &&
        (p < 0 && x === 0
          ? (tP("route-fallback"), (S = !0), (j = null))
          : p === x &&
            ((S = !0), (j = g.route.hydrateFallbackElement || null))));
    let k = t.concat(u.slice(0, x + 1)),
      _ = () => {
        let w;
        return (
          P
            ? (w = C)
            : S
              ? (w = j)
              : g.route.Component
                ? (w = b.createElement(g.route.Component, null))
                : g.route.element
                  ? (w = g.route.element)
                  : (w = v),
          b.createElement(G2, {
            match: g,
            routeContext: { outlet: v, matches: k, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (g.route.ErrorBoundary || g.route.errorElement || x === 0)
      ? b.createElement(q2, {
          location: n.location,
          revalidation: n.revalidation,
          component: C,
          error: P,
          children: _(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : _();
  }, null);
}
var Ty = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ty || {}),
  by = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(by || {});
function Y2(e) {
  let t = b.useContext(Yd);
  return (t || je(!1), t);
}
function Q2(e) {
  let t = b.useContext(B2);
  return (t || je(!1), t);
}
function X2(e) {
  let t = b.useContext(Cn);
  return (t || je(!1), t);
}
function Ly(e) {
  let t = X2(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || je(!1), n.route.id);
}
function J2() {
  var e;
  let t = b.useContext(ky),
    n = Q2(),
    r = Ly();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function eP() {
  let { router: e } = Y2(Ty.UseNavigateStable),
    t = Ly(by.UseNavigateStable),
    n = b.useRef(!1);
  return (
    Sy(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (s, a) {
        (a === void 0 && (a = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Uo({ fromRouteId: t }, a))));
      },
      [e, t],
    )
  );
}
const Hp = {};
function tP(e, t, n) {
  Hp[e] || (Hp[e] = !0);
}
function Ny(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
const nP = "startTransition",
  Wp = gg[nP];
function iP(e) {
  let {
      basename: t,
      children: n,
      initialEntries: r,
      initialIndex: s,
      future: a,
    } = e,
    u = b.useRef();
  u.current == null &&
    (u.current = f2({ initialEntries: r, initialIndex: s, v5Compat: !0 }));
  let c = u.current,
    [h, p] = b.useState({ action: c.action, location: c.location }),
    { v7_startTransition: v } = a || {},
    g = b.useCallback(
      (x) => {
        v && Wp ? Wp(() => p(x)) : p(x);
      },
      [p, v],
    );
  return (
    b.useLayoutEffect(() => c.listen(g), [c, g]),
    b.useEffect(() => Ny(a), [a]),
    b.createElement(Ey, {
      basename: t,
      children: n,
      location: h.location,
      navigationType: h.action,
      navigator: c,
      future: a,
    })
  );
}
function qn(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Ar() || je(!1);
  let { future: a, static: u } = b.useContext(ri),
    { matches: c } = b.useContext(Cn),
    { pathname: h } = Wt(),
    p = oi(),
    v = Kd(t, Gd(c, a.v7_relativeSplatPath), h, s === "path"),
    g = JSON.stringify(v);
  return (
    b.useEffect(
      () => p(JSON.parse(g), { replace: n, state: r, relative: s }),
      [p, g, s, n, r],
    ),
    null
  );
}
function Le(e) {
  je(!1);
}
function Ey(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = Et.Pop,
    navigator: a,
    static: u = !1,
    future: c,
  } = e;
  Ar() && je(!1);
  let h = t.replace(/^\/*/, "/"),
    p = b.useMemo(
      () => ({
        basename: h,
        navigator: a,
        static: u,
        future: Uo({ v7_relativeSplatPath: !1 }, c),
      }),
      [h, c, a, u],
    );
  typeof r == "string" && (r = ii(r));
  let {
      pathname: v = "/",
      search: g = "",
      hash: x = "",
      state: P = null,
      key: S = "default",
    } = r,
    C = b.useMemo(() => {
      let j = qd(v, h);
      return j == null
        ? null
        : {
            location: { pathname: j, search: g, hash: x, state: P, key: S },
            navigationType: s,
          };
    }, [h, v, g, x, P, S, s]);
  return C == null
    ? null
    : b.createElement(
        ri.Provider,
        { value: p },
        b.createElement(ol.Provider, { children: n, value: C }),
      );
}
function rP(e) {
  let { children: t, location: n } = e;
  return U2(Nc(t), n);
}
new Promise(() => {});
function Nc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, s) => {
      if (!b.isValidElement(r)) return;
      let a = [...t, s];
      if (r.type === b.Fragment) {
        n.push.apply(n, Nc(r.props.children, a));
        return;
      }
      (r.type !== Le && je(!1), !r.props.index || !r.props.children || je(!1));
      let u = {
        id: r.props.id || a.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (u.children = Nc(r.props.children, a)), n.push(u));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ec() {
  return (
    (Ec = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ec.apply(null, arguments)
  );
}
function oP(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function sP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function aP(e, t) {
  return e.button === 0 && (!t || t === "_self") && !sP(e);
}
function jc(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((s) => [n, s]) : [[n, r]]);
          }, []),
    )
  );
}
function lP(e, t) {
  let n = jc(e);
  return (
    t &&
      t.forEach((r, s) => {
        n.has(s) ||
          t.getAll(s).forEach((a) => {
            n.append(s, a);
          });
      }),
    n
  );
}
const uP = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  cP = "6";
try {
  window.__reactRouterVersion = cP;
} catch {}
const dP = "startTransition",
  $p = gg[dP];
function hP(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    a = b.useRef();
  a.current == null && (a.current = p2({ window: s, v5Compat: !0 }));
  let u = a.current,
    [c, h] = b.useState({ action: u.action, location: u.location }),
    { v7_startTransition: p } = r || {},
    v = b.useCallback(
      (g) => {
        p && $p ? $p(() => h(g)) : h(g);
      },
      [h, p],
    );
  return (
    b.useLayoutEffect(() => u.listen(v), [u, v]),
    b.useEffect(() => Ny(r), [r]),
    b.createElement(Ey, {
      basename: t,
      children: n,
      location: c.location,
      navigationType: c.action,
      navigator: u,
      future: r,
    })
  );
}
const fP =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Pe = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: a,
        replace: u,
        state: c,
        target: h,
        to: p,
        preventScrollReset: v,
        viewTransition: g,
      } = t,
      x = oP(t, uP),
      { basename: P } = b.useContext(ri),
      S,
      C = !1;
    if (typeof p == "string" && pP.test(p) && ((S = p), fP))
      try {
        let w = new URL(window.location.href),
          N = p.startsWith("//") ? new URL(w.protocol + p) : new URL(p),
          A = qd(N.pathname, P);
        N.origin === w.origin && A != null
          ? (p = A + N.search + N.hash)
          : (C = !0);
      } catch {}
    let j = V2(p, { relative: s }),
      k = mP(p, {
        replace: u,
        state: c,
        target: h,
        preventScrollReset: v,
        relative: s,
        viewTransition: g,
      });
    function _(w) {
      (r && r(w), w.defaultPrevented || k(w));
    }
    return b.createElement(
      "a",
      Ec({}, x, { href: S || j, onClick: C || a ? r : _, ref: n, target: h }),
    );
  });
var qp;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(qp || (qp = {}));
var Gp;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Gp || (Gp = {}));
function mP(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: a,
      relative: u,
      viewTransition: c,
    } = t === void 0 ? {} : t,
    h = oi(),
    p = Wt(),
    v = Cy(e, { relative: u });
  return b.useCallback(
    (g) => {
      if (aP(g, n)) {
        g.preventDefault();
        let x = r !== void 0 ? r : Zo(p) === Zo(v);
        h(e, {
          replace: x,
          state: s,
          preventScrollReset: a,
          relative: u,
          viewTransition: c,
        });
      }
    },
    [p, h, v, r, s, n, e, a, u, c],
  );
}
function gP(e) {
  let t = b.useRef(jc(e)),
    n = b.useRef(!1),
    r = Wt(),
    s = b.useMemo(() => lP(r.search, n.current ? null : t.current), [r.search]),
    a = oi(),
    u = b.useCallback(
      (c, h) => {
        const p = jc(typeof c == "function" ? c(s) : c);
        ((n.current = !0), a("?" + p, h));
      },
      [a, s],
    );
  return [s, u];
}
const jy = b.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  sl = b.createContext({}),
  al = b.createContext(null),
  ll = typeof document < "u",
  Qd = ll ? b.useLayoutEffect : b.useEffect,
  My = b.createContext({ strict: !1 }),
  Xd = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  vP = "framerAppearId",
  Ay = "data-" + Xd(vP);
function yP(e, t, n, r) {
  const { visualElement: s } = b.useContext(sl),
    a = b.useContext(My),
    u = b.useContext(al),
    c = b.useContext(jy).reducedMotion,
    h = b.useRef();
  ((r = r || a.renderer),
    !h.current &&
      r &&
      (h.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  const p = h.current;
  b.useInsertionEffect(() => {
    p && p.update(n, u);
  });
  const v = b.useRef(!!(n[Ay] && !window.HandoffComplete));
  return (
    Qd(() => {
      p &&
        (p.render(),
        v.current && p.animationState && p.animationState.animateChanges());
    }),
    b.useEffect(() => {
      p &&
        (p.updateFeatures(),
        !v.current && p.animationState && p.animationState.animateChanges(),
        v.current && ((v.current = !1), (window.HandoffComplete = !0)));
    }),
    p
  );
}
function cr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function xP(e, t, n) {
  return b.useCallback(
    (r) => {
      (r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : cr(n) && (n.current = r)));
    },
    [t],
  );
}
function Ho(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ul(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Jd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  eh = ["initial", ...Jd];
function cl(e) {
  return ul(e.animate) || eh.some((t) => Ho(e[t]));
}
function zy(e) {
  return !!(cl(e) || e.variants);
}
function _P(e, t) {
  if (cl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ho(n) ? n : void 0,
      animate: Ho(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function wP(e) {
  const { initial: t, animate: n } = _P(e, b.useContext(sl));
  return b.useMemo(() => ({ initial: t, animate: n }), [Kp(t), Kp(n)]);
}
function Kp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Yp = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Wo = {};
for (const e in Yp) Wo[e] = { isEnabled: (t) => Yp[e].some((n) => !!t[n]) };
function PP(e) {
  for (const t in e) Wo[t] = { ...Wo[t], ...e[t] };
}
const th = b.createContext({}),
  Ry = b.createContext({}),
  kP = Symbol.for("motionComponentSymbol");
function SP({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  e && PP(e);
  function a(c, h) {
    let p;
    const v = { ...b.useContext(jy), ...c, layoutId: CP(c) },
      { isStatic: g } = v,
      x = wP(c),
      P = r(c, g);
    if (!g && ll) {
      x.visualElement = yP(s, P, v, t);
      const S = b.useContext(Ry),
        C = b.useContext(My).strict;
      x.visualElement && (p = x.visualElement.loadFeatures(v, C, e, S));
    }
    return b.createElement(
      sl.Provider,
      { value: x },
      p && x.visualElement
        ? b.createElement(p, { visualElement: x.visualElement, ...v })
        : null,
      n(s, c, xP(P, x.visualElement, h), P, g, x.visualElement),
    );
  }
  const u = b.forwardRef(a);
  return ((u[kP] = s), u);
}
function CP({ layoutId: e }) {
  const t = b.useContext(th).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function TP(e) {
  function t(r, s = {}) {
    return SP(e(r, s));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s)),
  });
}
const bP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function nh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(bP.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ja = {};
function LP(e) {
  Object.assign(ja, e);
}
const Xo = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Mi = new Set(Xo);
function Oy(e, { layout: t, layoutId: n }) {
  return (
    Mi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ja[e] || e === "opacity"))
  );
}
const pt = (e) => !!(e && e.getVelocity),
  NP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  EP = Xo.length;
function jP(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  s,
) {
  let a = "";
  for (let u = 0; u < EP; u++) {
    const c = Xo[u];
    if (e[c] !== void 0) {
      const h = NP[c] || c;
      a += `${h}(${e[c]}) `;
    }
  }
  return (
    t && !e.z && (a += "translateZ(0)"),
    (a = a.trim()),
    s ? (a = s(e, r ? "" : a)) : n && r && (a = "none"),
    a
  );
}
const Dy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Iy = Dy("--"),
  Mc = Dy("var(--"),
  MP =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  AP = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Xn = (e, t, n) => Math.min(Math.max(n, e), t),
  Ai = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  _o = { ...Ai, transform: (e) => Xn(0, 1, e) },
  Vs = { ...Ai, default: 1 },
  wo = (e) => Math.round(e * 1e5) / 1e5,
  dl = /(-)?([\d]*\.?[\d])+/g,
  By =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  zP =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Jo(e) {
  return typeof e == "string";
}
const es = (e) => ({
    test: (t) => Jo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  En = es("deg"),
  on = es("%"),
  K = es("px"),
  RP = es("vh"),
  OP = es("vw"),
  Qp = {
    ...on,
    parse: (e) => on.parse(e) / 100,
    transform: (e) => on.transform(e * 100),
  },
  Xp = { ...Ai, transform: Math.round },
  Vy = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    size: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    rotate: En,
    rotateX: En,
    rotateY: En,
    rotateZ: En,
    scale: Vs,
    scaleX: Vs,
    scaleY: Vs,
    scaleZ: Vs,
    skew: En,
    skewX: En,
    skewY: En,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: _o,
    originX: Qp,
    originY: Qp,
    originZ: K,
    zIndex: Xp,
    fillOpacity: _o,
    strokeOpacity: _o,
    numOctaves: Xp,
  };
function ih(e, t, n, r) {
  const { style: s, vars: a, transform: u, transformOrigin: c } = e;
  let h = !1,
    p = !1,
    v = !0;
  for (const g in t) {
    const x = t[g];
    if (Iy(g)) {
      a[g] = x;
      continue;
    }
    const P = Vy[g],
      S = AP(x, P);
    if (Mi.has(g)) {
      if (((h = !0), (u[g] = S), !v)) continue;
      x !== (P.default || 0) && (v = !1);
    } else g.startsWith("origin") ? ((p = !0), (c[g] = S)) : (s[g] = S);
  }
  if (
    (t.transform ||
      (h || r
        ? (s.transform = jP(e.transform, n, v, r))
        : s.transform && (s.transform = "none")),
    p)
  ) {
    const { originX: g = "50%", originY: x = "50%", originZ: P = 0 } = c;
    s.transformOrigin = `${g} ${x} ${P}`;
  }
}
const rh = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Fy(e, t, n) {
  for (const r in t) !pt(t[r]) && !Oy(r, n) && (e[r] = t[r]);
}
function DP({ transformTemplate: e }, t, n) {
  return b.useMemo(() => {
    const r = rh();
    return (
      ih(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function IP(e, t, n) {
  const r = e.style || {},
    s = {};
  return (
    Fy(s, r, e),
    Object.assign(s, DP(e, t, n)),
    e.transformValues ? e.transformValues(s) : s
  );
}
function BP(e, t, n) {
  const r = {},
    s = IP(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const VP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ma(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    VP.has(e)
  );
}
let Zy = (e) => !Ma(e);
function FP(e) {
  e && (Zy = (t) => (t.startsWith("on") ? !Ma(t) : e(t)));
}
try {
  FP(require("@emotion/is-prop-valid").default);
} catch {}
function ZP(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Zy(s) ||
        (n === !0 && Ma(s)) ||
        (!t && !Ma(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function Jp(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function UP(e, t, n) {
  const r = Jp(t, e.x, e.width),
    s = Jp(n, e.y, e.height);
  return `${r} ${s}`;
}
const HP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  WP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function $P(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const a = s ? HP : WP;
  e[a.offset] = K.transform(-r);
  const u = K.transform(t),
    c = K.transform(n);
  e[a.array] = `${u} ${c}`;
}
function oh(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: a,
    pathLength: u,
    pathSpacing: c = 1,
    pathOffset: h = 0,
    ...p
  },
  v,
  g,
  x,
) {
  if ((ih(e, p, v, x), g)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: P, style: S, dimensions: C } = e;
  (P.transform && (C && (S.transform = P.transform), delete P.transform),
    C &&
      (s !== void 0 || a !== void 0 || S.transform) &&
      (S.transformOrigin = UP(
        C,
        s !== void 0 ? s : 0.5,
        a !== void 0 ? a : 0.5,
      )),
    t !== void 0 && (P.x = t),
    n !== void 0 && (P.y = n),
    r !== void 0 && (P.scale = r),
    u !== void 0 && $P(P, u, c, h, !1));
}
const Uy = () => ({ ...rh(), attrs: {} }),
  sh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function qP(e, t, n, r) {
  const s = b.useMemo(() => {
    const a = Uy();
    return (
      oh(a, t, { enableHardwareAcceleration: !1 }, sh(r), e.transformTemplate),
      { ...a.attrs, style: { ...a.style } }
    );
  }, [t]);
  if (e.style) {
    const a = {};
    (Fy(a, e.style, e), (s.style = { ...a, ...s.style }));
  }
  return s;
}
function GP(e = !1) {
  return (n, r, s, { latestValues: a }, u) => {
    const h = (nh(n) ? qP : BP)(r, a, u, n),
      v = { ...ZP(r, typeof n == "string", e), ...h, ref: s },
      { children: g } = r,
      x = b.useMemo(() => (pt(g) ? g.get() : g), [g]);
    return b.createElement(n, { ...v, children: x });
  };
}
function Hy(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const a in n) e.style.setProperty(a, n[a]);
}
const Wy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function $y(e, t, n, r) {
  Hy(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(Wy.has(s) ? s : Xd(s), t.attrs[s]);
}
function ah(e, t) {
  const { style: n } = e,
    r = {};
  for (const s in n)
    (pt(n[s]) || (t.style && pt(t.style[s])) || Oy(s, e)) && (r[s] = n[s]);
  return r;
}
function qy(e, t) {
  const n = ah(e, t);
  for (const r in e)
    if (pt(e[r]) || pt(t[r])) {
      const s =
        Xo.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[s] = e[r];
    }
  return n;
}
function lh(e, t, n, r = {}, s = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, s)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, s)),
    t
  );
}
function Gy(e) {
  const t = b.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Aa = (e) => Array.isArray(e),
  KP = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  YP = (e) => (Aa(e) ? e[e.length - 1] || 0 : e);
function ia(e) {
  const t = pt(e) ? e.get() : e;
  return KP(t) ? t.toValue() : t;
}
function QP(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  s,
  a,
) {
  const u = { latestValues: XP(r, s, a, e), renderState: t() };
  return (n && (u.mount = (c) => n(r, c, u)), u);
}
const Ky = (e) => (t, n) => {
  const r = b.useContext(sl),
    s = b.useContext(al),
    a = () => QP(e, t, r, s);
  return n ? a() : Gy(a);
};
function XP(e, t, n, r) {
  const s = {},
    a = r(e, {});
  for (const x in a) s[x] = ia(a[x]);
  let { initial: u, animate: c } = e;
  const h = cl(e),
    p = zy(e);
  t &&
    p &&
    !h &&
    e.inherit !== !1 &&
    (u === void 0 && (u = t.initial), c === void 0 && (c = t.animate));
  let v = n ? n.initial === !1 : !1;
  v = v || u === !1;
  const g = v ? c : u;
  return (
    g &&
      typeof g != "boolean" &&
      !ul(g) &&
      (Array.isArray(g) ? g : [g]).forEach((P) => {
        const S = lh(e, P);
        if (!S) return;
        const { transitionEnd: C, transition: j, ...k } = S;
        for (const _ in k) {
          let w = k[_];
          if (Array.isArray(w)) {
            const N = v ? w.length - 1 : 0;
            w = w[N];
          }
          w !== null && (s[_] = w);
        }
        for (const _ in C) s[_] = C[_];
      }),
    s
  );
}
const Ee = (e) => e;
class em {
  constructor() {
    ((this.order = []), (this.scheduled = new Set()));
  }
  add(t) {
    if (!this.scheduled.has(t))
      return (this.scheduled.add(t), this.order.push(t), !0);
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    ((this.order.length = 0), this.scheduled.clear());
  }
}
function JP(e) {
  let t = new em(),
    n = new em(),
    r = 0,
    s = !1,
    a = !1;
  const u = new WeakSet(),
    c = {
      schedule: (h, p = !1, v = !1) => {
        const g = v && s,
          x = g ? t : n;
        return (p && u.add(h), x.add(h) && g && s && (r = t.order.length), h);
      },
      cancel: (h) => {
        (n.remove(h), u.delete(h));
      },
      process: (h) => {
        if (s) {
          a = !0;
          return;
        }
        if (((s = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let p = 0; p < r; p++) {
            const v = t.order[p];
            (v(h), u.has(v) && (c.schedule(v), e()));
          }
        ((s = !1), a && ((a = !1), c.process(h)));
      },
    };
  return c;
}
const Fs = ["prepare", "read", "update", "preRender", "render", "postRender"],
  ek = 40;
function tk(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = Fs.reduce((g, x) => ((g[x] = JP(() => (n = !0))), g), {}),
    u = (g) => a[g].process(s),
    c = () => {
      const g = performance.now();
      ((n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(g - s.timestamp, ek), 1)),
        (s.timestamp = g),
        (s.isProcessing = !0),
        Fs.forEach(u),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(c)));
    },
    h = () => {
      ((n = !0), (r = !0), s.isProcessing || e(c));
    };
  return {
    schedule: Fs.reduce((g, x) => {
      const P = a[x];
      return (
        (g[x] = (S, C = !1, j = !1) => (n || h(), P.schedule(S, C, j))),
        g
      );
    }, {}),
    cancel: (g) => Fs.forEach((x) => a[x].cancel(g)),
    state: s,
    steps: a,
  };
}
const {
    schedule: me,
    cancel: kn,
    state: Xe,
    steps: xu,
  } = tk(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ee, !0),
  nk = {
    useVisualState: Ky({
      scrapeMotionValuesFromProps: qy,
      createRenderState: Uy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        (me.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          me.render(() => {
            (oh(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              sh(t.tagName),
              e.transformTemplate,
            ),
              $y(t, n));
          }));
      },
    }),
  },
  ik = {
    useVisualState: Ky({
      scrapeMotionValuesFromProps: ah,
      createRenderState: rh,
    }),
  };
function rk(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(nh(e) ? nk : ik),
    preloadedFeatures: n,
    useRender: GP(t),
    createVisualElement: r,
    Component: e,
  };
}
function mn(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const Yy = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function hl(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const ok = (e) => (t) => Yy(t) && e(t, hl(t));
function vn(e, t, n, r) {
  return mn(e, t, ok(n), r);
}
const sk = (e, t) => (n) => t(e(n)),
  Gn = (...e) => e.reduce(sk);
function Qy(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const tm = Qy("dragHorizontal"),
  nm = Qy("dragVertical");
function Xy(e) {
  let t = !1;
  if (e === "y") t = nm();
  else if (e === "x") t = tm();
  else {
    const n = tm(),
      r = nm();
    n && r
      ? (t = () => {
          (n(), r());
        })
      : (n && n(), r && r());
  }
  return t;
}
function Jy() {
  const e = Xy(!0);
  return e ? (e(), !1) : !0;
}
class si {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function im(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    s = (a, u) => {
      if (a.pointerType === "touch" || Jy()) return;
      const c = e.getProps();
      (e.animationState &&
        c.whileHover &&
        e.animationState.setActive("whileHover", t),
        c[r] && me.update(() => c[r](a, u)));
    };
  return vn(e.current, n, s, { passive: !e.getProps()[r] });
}
class ak extends si {
  mount() {
    this.unmount = Gn(im(this.node, !0), im(this.node, !1));
  }
  unmount() {}
}
class lk extends si {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Gn(
      mn(this.node.current, "focus", () => this.onFocus()),
      mn(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const e0 = (e, t) => (t ? (e === t ? !0 : e0(e, t.parentElement)) : !1);
function _u(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, hl(n));
}
class uk extends si {
  constructor() {
    (super(...arguments),
      (this.removeStartListeners = Ee),
      (this.removeEndListeners = Ee),
      (this.removeAccessibleListeners = Ee),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          a = vn(
            window,
            "pointerup",
            (c, h) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: p,
                onTapCancel: v,
                globalTapTarget: g,
              } = this.node.getProps();
              me.update(() => {
                !g && !e0(this.node.current, c.target)
                  ? v && v(c, h)
                  : p && p(c, h);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          u = vn(window, "pointercancel", (c, h) => this.cancelPress(c, h), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        ((this.removeEndListeners = Gn(a, u)), this.startPress(t, n));
      }),
      (this.startAccessiblePress = () => {
        const t = (a) => {
            if (a.key !== "Enter" || this.isPressing) return;
            const u = (c) => {
              c.key !== "Enter" ||
                !this.checkPressEnd() ||
                _u("up", (h, p) => {
                  const { onTap: v } = this.node.getProps();
                  v && me.update(() => v(h, p));
                });
            };
            (this.removeEndListeners(),
              (this.removeEndListeners = mn(this.node.current, "keyup", u)),
              _u("down", (c, h) => {
                this.startPress(c, h);
              }));
          },
          n = mn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && _u("cancel", (a, u) => this.cancelPress(a, u));
          },
          s = mn(this.node.current, "blur", r);
        this.removeAccessibleListeners = Gn(n, s);
      }));
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    (s &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && me.update(() => r(t, n)));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Jy()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && me.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = vn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = mn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Gn(n, r);
  }
  unmount() {
    (this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners());
  }
}
const Ac = new WeakMap(),
  wu = new WeakMap(),
  ck = (e) => {
    const t = Ac.get(e.target);
    t && t(e);
  },
  dk = (e) => {
    e.forEach(ck);
  };
function hk({ root: e, ...t }) {
  const n = e || document;
  wu.has(n) || wu.set(n, {});
  const r = wu.get(n),
    s = JSON.stringify(t);
  return (
    r[s] || (r[s] = new IntersectionObserver(dk, { root: e, ...t })),
    r[s]
  );
}
function fk(e, t, n) {
  const r = hk(t);
  return (
    Ac.set(e, n),
    r.observe(e),
    () => {
      (Ac.delete(e), r.unobserve(e));
    }
  );
}
const pk = { some: 0, all: 1 };
class mk extends si {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: a } = t,
      u = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : pk[s],
      },
      c = (h) => {
        const { isIntersecting: p } = h;
        if (
          this.isInView === p ||
          ((this.isInView = p), a && !p && this.hasEnteredView)
        )
          return;
        (p && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", p));
        const { onViewportEnter: v, onViewportLeave: g } = this.node.getProps(),
          x = p ? v : g;
        x && x(h);
      };
    return fk(this.node.current, u, c);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(gk(t, n)) && this.startObserver();
  }
  unmount() {}
}
function gk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const vk = {
  inView: { Feature: mk },
  tap: { Feature: uk },
  focus: { Feature: lk },
  hover: { Feature: ak },
};
function t0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function yk(e) {
  const t = {};
  return (e.values.forEach((n, r) => (t[r] = n.get())), t);
}
function xk(e) {
  const t = {};
  return (e.values.forEach((n, r) => (t[r] = n.getVelocity())), t);
}
function fl(e, t, n) {
  const r = e.getProps();
  return lh(r, t, n !== void 0 ? n : r.custom, yk(e), xk(e));
}
let uh = Ee;
const Si = (e) => e * 1e3,
  yn = (e) => e / 1e3,
  _k = { current: !1 },
  n0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function i0(e) {
  return !!(
    !e ||
    (typeof e == "string" && r0[e]) ||
    n0(e) ||
    (Array.isArray(e) && e.every(i0))
  );
}
const lo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  r0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: lo([0, 0.65, 0.55, 1]),
    circOut: lo([0.55, 0, 1, 0.45]),
    backIn: lo([0.31, 0.01, 0.66, -0.59]),
    backOut: lo([0.33, 1.53, 0.69, 0.99]),
  };
function o0(e) {
  if (e) return n0(e) ? lo(e) : Array.isArray(e) ? e.map(o0) : r0[e];
}
function wk(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s,
    repeat: a = 0,
    repeatType: u = "loop",
    ease: c,
    times: h,
  } = {},
) {
  const p = { [t]: n };
  h && (p.offset = h);
  const v = o0(c);
  return (
    Array.isArray(v) && (p.easing = v),
    e.animate(p, {
      delay: r,
      duration: s,
      easing: Array.isArray(v) ? "linear" : v,
      fill: "both",
      iterations: a + 1,
      direction: u === "reverse" ? "alternate" : "normal",
    })
  );
}
function Pk(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const s0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  kk = 1e-7,
  Sk = 12;
function Ck(e, t, n, r, s) {
  let a,
    u,
    c = 0;
  do ((u = t + (n - t) / 2), (a = s0(u, r, s) - e), a > 0 ? (n = u) : (t = u));
  while (Math.abs(a) > kk && ++c < Sk);
  return u;
}
function ts(e, t, n, r) {
  if (e === t && n === r) return Ee;
  const s = (a) => Ck(a, 0, 1, e, n);
  return (a) => (a === 0 || a === 1 ? a : s0(s(a), t, r));
}
const Tk = ts(0.42, 0, 1, 1),
  bk = ts(0, 0, 0.58, 1),
  a0 = ts(0.42, 0, 0.58, 1),
  Lk = (e) => Array.isArray(e) && typeof e[0] != "number",
  l0 = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  u0 = (e) => (t) => 1 - e(1 - t),
  ch = (e) => 1 - Math.sin(Math.acos(e)),
  c0 = u0(ch),
  Nk = l0(ch),
  d0 = ts(0.33, 1.53, 0.69, 0.99),
  dh = u0(d0),
  Ek = l0(dh),
  jk = (e) =>
    (e *= 2) < 1 ? 0.5 * dh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Mk = {
    linear: Ee,
    easeIn: Tk,
    easeInOut: a0,
    easeOut: bk,
    circIn: ch,
    circInOut: Nk,
    circOut: c0,
    backIn: dh,
    backInOut: Ek,
    backOut: d0,
    anticipate: jk,
  },
  rm = (e) => {
    if (Array.isArray(e)) {
      uh(e.length === 4);
      const [t, n, r, s] = e;
      return ts(t, n, r, s);
    } else if (typeof e == "string") return Mk[e];
    return e;
  },
  hh = (e, t) => (n) =>
    !!(
      (Jo(n) && zP.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  h0 = (e, t, n) => (r) => {
    if (!Jo(r)) return r;
    const [s, a, u, c] = r.match(dl);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(a),
      [n]: parseFloat(u),
      alpha: c !== void 0 ? parseFloat(c) : 1,
    };
  },
  Ak = (e) => Xn(0, 255, e),
  Pu = { ...Ai, transform: (e) => Math.round(Ak(e)) },
  wi = {
    test: hh("rgb", "red"),
    parse: h0("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Pu.transform(e) +
      ", " +
      Pu.transform(t) +
      ", " +
      Pu.transform(n) +
      ", " +
      wo(_o.transform(r)) +
      ")",
  };
function zk(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const zc = { test: hh("#"), parse: zk, transform: wi.transform },
  dr = {
    test: hh("hsl", "hue"),
    parse: h0("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      on.transform(wo(t)) +
      ", " +
      on.transform(wo(n)) +
      ", " +
      wo(_o.transform(r)) +
      ")",
  },
  nt = {
    test: (e) => wi.test(e) || zc.test(e) || dr.test(e),
    parse: (e) =>
      wi.test(e) ? wi.parse(e) : dr.test(e) ? dr.parse(e) : zc.parse(e),
    transform: (e) =>
      Jo(e) ? e : e.hasOwnProperty("red") ? wi.transform(e) : dr.transform(e),
  },
  we = (e, t, n) => -n * e + n * t + e;
function ku(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Rk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let s = 0,
    a = 0,
    u = 0;
  if (!t) s = a = u = n;
  else {
    const c = n < 0.5 ? n * (1 + t) : n + t - n * t,
      h = 2 * n - c;
    ((s = ku(h, c, e + 1 / 3)), (a = ku(h, c, e)), (u = ku(h, c, e - 1 / 3)));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(a * 255),
    blue: Math.round(u * 255),
    alpha: r,
  };
}
const Su = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Ok = [zc, wi, dr],
  Dk = (e) => Ok.find((t) => t.test(e));
function om(e) {
  const t = Dk(e);
  let n = t.parse(e);
  return (t === dr && (n = Rk(n)), n);
}
const f0 = (e, t) => {
  const n = om(e),
    r = om(t),
    s = { ...n };
  return (a) => (
    (s.red = Su(n.red, r.red, a)),
    (s.green = Su(n.green, r.green, a)),
    (s.blue = Su(n.blue, r.blue, a)),
    (s.alpha = we(n.alpha, r.alpha, a)),
    wi.transform(s)
  );
};
function Ik(e) {
  var t, n;
  return (
    isNaN(e) &&
    Jo(e) &&
    (((t = e.match(dl)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(By)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const p0 = { regex: MP, countKey: "Vars", token: "${v}", parse: Ee },
  m0 = { regex: By, countKey: "Colors", token: "${c}", parse: nt.parse },
  g0 = { regex: dl, countKey: "Numbers", token: "${n}", parse: Ai.parse };
function Cu(e, { regex: t, countKey: n, token: r, parse: s }) {
  const a = e.tokenised.match(t);
  a &&
    ((e["num" + n] = a.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...a.map(s)));
}
function za(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return (n.value.includes("var(--") && Cu(n, p0), Cu(n, m0), Cu(n, g0), n);
}
function v0(e) {
  return za(e).values;
}
function y0(e) {
  const { values: t, numColors: n, numVars: r, tokenised: s } = za(e),
    a = t.length;
  return (u) => {
    let c = s;
    for (let h = 0; h < a; h++)
      h < r
        ? (c = c.replace(p0.token, u[h]))
        : h < r + n
          ? (c = c.replace(m0.token, nt.transform(u[h])))
          : (c = c.replace(g0.token, wo(u[h])));
    return c;
  };
}
const Bk = (e) => (typeof e == "number" ? 0 : e);
function Vk(e) {
  const t = v0(e);
  return y0(e)(t.map(Bk));
}
const Jn = {
    test: Ik,
    parse: v0,
    createTransformer: y0,
    getAnimatableNone: Vk,
  },
  x0 = (e, t) => (n) => `${n > 0 ? t : e}`;
function _0(e, t) {
  return typeof e == "number"
    ? (n) => we(e, t, n)
    : nt.test(e)
      ? f0(e, t)
      : e.startsWith("var(")
        ? x0(e, t)
        : P0(e, t);
}
const w0 = (e, t) => {
    const n = [...e],
      r = n.length,
      s = e.map((a, u) => _0(a, t[u]));
    return (a) => {
      for (let u = 0; u < r; u++) n[u] = s[u](a);
      return n;
    };
  },
  Fk = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const s in n)
      e[s] !== void 0 && t[s] !== void 0 && (r[s] = _0(e[s], t[s]));
    return (s) => {
      for (const a in r) n[a] = r[a](s);
      return n;
    };
  },
  P0 = (e, t) => {
    const n = Jn.createTransformer(t),
      r = za(e),
      s = za(t);
    return r.numVars === s.numVars &&
      r.numColors === s.numColors &&
      r.numNumbers >= s.numNumbers
      ? Gn(w0(r.values, s.values), n)
      : x0(e, t);
  },
  $o = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  sm = (e, t) => (n) => we(e, t, n);
function Zk(e) {
  return typeof e == "number"
    ? sm
    : typeof e == "string"
      ? nt.test(e)
        ? f0
        : P0
      : Array.isArray(e)
        ? w0
        : typeof e == "object"
          ? Fk
          : sm;
}
function Uk(e, t, n) {
  const r = [],
    s = n || Zk(e[0]),
    a = e.length - 1;
  for (let u = 0; u < a; u++) {
    let c = s(e[u], e[u + 1]);
    if (t) {
      const h = Array.isArray(t) ? t[u] || Ee : t;
      c = Gn(h, c);
    }
    r.push(c);
  }
  return r;
}
function k0(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const a = e.length;
  if ((uh(a === t.length), a === 1)) return () => t[0];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const u = Uk(t, r, s),
    c = u.length,
    h = (p) => {
      let v = 0;
      if (c > 1) for (; v < e.length - 2 && !(p < e[v + 1]); v++);
      const g = $o(e[v], e[v + 1], p);
      return u[v](g);
    };
  return n ? (p) => h(Xn(e[0], e[a - 1], p)) : h;
}
function Hk(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = $o(0, t, r);
    e.push(we(n, 1, s));
  }
}
function Wk(e) {
  const t = [0];
  return (Hk(t, e.length - 1), t);
}
function $k(e, t) {
  return e.map((n) => n * t);
}
function qk(e, t) {
  return e.map(() => t || a0).splice(0, e.length - 1);
}
function Ra({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = Lk(r) ? r.map(rm) : rm(r),
    a = { done: !1, value: t[0] },
    u = $k(n && n.length === t.length ? n : Wk(t), e),
    c = k0(u, t, { ease: Array.isArray(s) ? s : qk(t, s) });
  return {
    calculatedDuration: e,
    next: (h) => ((a.value = c(h)), (a.done = h >= e), a),
  };
}
function S0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Gk = 5;
function C0(e, t, n) {
  const r = Math.max(t - Gk, 0);
  return S0(n - e(r), t - r);
}
const Tu = 0.001,
  Kk = 0.01,
  Yk = 10,
  Qk = 0.05,
  Xk = 1;
function Jk({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let s,
    a,
    u = 1 - t;
  ((u = Xn(Qk, Xk, u)),
    (e = Xn(Kk, Yk, yn(e))),
    u < 1
      ? ((s = (p) => {
          const v = p * u,
            g = v * e,
            x = v - n,
            P = Rc(p, u),
            S = Math.exp(-g);
          return Tu - (x / P) * S;
        }),
        (a = (p) => {
          const g = p * u * e,
            x = g * n + n,
            P = Math.pow(u, 2) * Math.pow(p, 2) * e,
            S = Math.exp(-g),
            C = Rc(Math.pow(p, 2), u);
          return ((-s(p) + Tu > 0 ? -1 : 1) * ((x - P) * S)) / C;
        }))
      : ((s = (p) => {
          const v = Math.exp(-p * e),
            g = (p - n) * e + 1;
          return -Tu + v * g;
        }),
        (a = (p) => {
          const v = Math.exp(-p * e),
            g = (n - p) * (e * e);
          return v * g;
        })));
  const c = 5 / e,
    h = tS(s, a, c);
  if (((e = Si(e)), isNaN(h)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const p = Math.pow(h, 2) * r;
    return { stiffness: p, damping: u * 2 * Math.sqrt(r * p), duration: e };
  }
}
const eS = 12;
function tS(e, t, n) {
  let r = n;
  for (let s = 1; s < eS; s++) r = r - e(r) / t(r);
  return r;
}
function Rc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const nS = ["duration", "bounce"],
  iS = ["stiffness", "damping", "mass"];
function am(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function rS(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!am(e, iS) && am(e, nS)) {
    const n = Jk(e);
    ((t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0));
  }
  return t;
}
function T0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const s = e[0],
    a = e[e.length - 1],
    u = { done: !1, value: s },
    {
      stiffness: c,
      damping: h,
      mass: p,
      duration: v,
      velocity: g,
      isResolvedFromDuration: x,
    } = rS({ ...r, velocity: -yn(r.velocity || 0) }),
    P = g || 0,
    S = h / (2 * Math.sqrt(c * p)),
    C = a - s,
    j = yn(Math.sqrt(c / p)),
    k = Math.abs(C) < 5;
  (n || (n = k ? 0.01 : 2), t || (t = k ? 0.005 : 0.5));
  let _;
  if (S < 1) {
    const w = Rc(j, S);
    _ = (N) => {
      const A = Math.exp(-S * j * N);
      return (
        a - A * (((P + S * j * C) / w) * Math.sin(w * N) + C * Math.cos(w * N))
      );
    };
  } else if (S === 1) _ = (w) => a - Math.exp(-j * w) * (C + (P + j * C) * w);
  else {
    const w = j * Math.sqrt(S * S - 1);
    _ = (N) => {
      const A = Math.exp(-S * j * N),
        I = Math.min(w * N, 300);
      return (
        a - (A * ((P + S * j * C) * Math.sinh(I) + w * C * Math.cosh(I))) / w
      );
    };
  }
  return {
    calculatedDuration: (x && v) || null,
    next: (w) => {
      const N = _(w);
      if (x) u.done = w >= v;
      else {
        let A = P;
        w !== 0 && (S < 1 ? (A = C0(_, w, N)) : (A = 0));
        const I = Math.abs(A) <= n,
          B = Math.abs(a - N) <= t;
        u.done = I && B;
      }
      return ((u.value = u.done ? a : N), u);
    },
  };
}
function lm({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: a = 500,
  modifyTarget: u,
  min: c,
  max: h,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const g = e[0],
    x = { done: !1, value: g },
    P = (O) => (c !== void 0 && O < c) || (h !== void 0 && O > h),
    S = (O) =>
      c === void 0
        ? h
        : h === void 0 || Math.abs(c - O) < Math.abs(h - O)
          ? c
          : h;
  let C = n * t;
  const j = g + C,
    k = u === void 0 ? j : u(j);
  k !== j && (C = k - g);
  const _ = (O) => -C * Math.exp(-O / r),
    w = (O) => k + _(O),
    N = (O) => {
      const W = _(O),
        $ = w(O);
      ((x.done = Math.abs(W) <= p), (x.value = x.done ? k : $));
    };
  let A, I;
  const B = (O) => {
    P(x.value) &&
      ((A = O),
      (I = T0({
        keyframes: [x.value, S(x.value)],
        velocity: C0(w, O, x.value),
        damping: s,
        stiffness: a,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    B(0),
    {
      calculatedDuration: null,
      next: (O) => {
        let W = !1;
        return (
          !I && A === void 0 && ((W = !0), N(O), B(O)),
          A !== void 0 && O > A ? I.next(O - A) : (!W && N(O), x)
        );
      },
    }
  );
}
const oS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => me.update(t, !0),
      stop: () => kn(t),
      now: () => (Xe.isProcessing ? Xe.timestamp : performance.now()),
    };
  },
  um = 2e4;
function cm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < um;) ((t += n), (r = e.next(t)));
  return t >= um ? 1 / 0 : t;
}
const sS = { decay: lm, inertia: lm, tween: Ra, keyframes: Ra, spring: T0 };
function Oa({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = oS,
  keyframes: r,
  type: s = "keyframes",
  repeat: a = 0,
  repeatDelay: u = 0,
  repeatType: c = "loop",
  onPlay: h,
  onStop: p,
  onComplete: v,
  onUpdate: g,
  ...x
}) {
  let P = 1,
    S = !1,
    C,
    j;
  const k = () => {
    j = new Promise((Z) => {
      C = Z;
    });
  };
  k();
  let _;
  const w = sS[s] || Ra;
  let N;
  w !== Ra &&
    typeof r[0] != "number" &&
    ((N = k0([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const A = w({ ...x, keyframes: r });
  let I;
  c === "mirror" &&
    (I = w({
      ...x,
      keyframes: [...r].reverse(),
      velocity: -(x.velocity || 0),
    }));
  let B = "idle",
    O = null,
    W = null,
    $ = null;
  A.calculatedDuration === null && a && (A.calculatedDuration = cm(A));
  const { calculatedDuration: se } = A;
  let ce = 1 / 0,
    Ue = 1 / 0;
  se !== null && ((ce = se + u), (Ue = ce * (a + 1) - u));
  let he = 0;
  const $t = (Z) => {
      if (W === null) return;
      (P > 0 && (W = Math.min(W, Z)),
        P < 0 && (W = Math.min(Z - Ue / P, W)),
        O !== null ? (he = O) : (he = Math.round(Z - W) * P));
      const ee = he - t * (P >= 0 ? 1 : -1),
        Ce = P >= 0 ? ee < 0 : ee > Ue;
      ((he = Math.max(ee, 0)), B === "finished" && O === null && (he = Ue));
      let ue = he,
        re = A;
      if (a) {
        const Ri = Math.min(he, Ue) / ce;
        let Tn = Math.floor(Ri),
          Rt = Ri % 1;
        (!Rt && Ri >= 1 && (Rt = 1),
          Rt === 1 && Tn--,
          (Tn = Math.min(Tn, a + 1)),
          !!(Tn % 2) &&
            (c === "reverse"
              ? ((Rt = 1 - Rt), u && (Rt -= u / ce))
              : c === "mirror" && (re = I)),
          (ue = Xn(0, 1, Rt) * ce));
      }
      const Y = Ce ? { done: !1, value: r[0] } : re.next(ue);
      N && (Y.value = N(Y.value));
      let { done: He } = Y;
      !Ce && se !== null && (He = P >= 0 ? he >= Ue : he <= 0);
      const qt = O === null && (B === "finished" || (B === "running" && He));
      return (g && g(Y.value), qt && z(), Y);
    },
    ie = () => {
      (_ && _.stop(), (_ = void 0));
    },
    Be = () => {
      ((B = "idle"), ie(), C(), k(), (W = $ = null));
    },
    z = () => {
      ((B = "finished"), v && v(), ie(), C());
    },
    q = () => {
      if (S) return;
      _ || (_ = n($t));
      const Z = _.now();
      (h && h(),
        O !== null ? (W = Z - O) : (!W || B === "finished") && (W = Z),
        B === "finished" && k(),
        ($ = W),
        (O = null),
        (B = "running"),
        _.start());
    };
  e && q();
  const V = {
    then(Z, ee) {
      return j.then(Z, ee);
    },
    get time() {
      return yn(he);
    },
    set time(Z) {
      ((Z = Si(Z)),
        (he = Z),
        O !== null || !_ || P === 0 ? (O = Z) : (W = _.now() - Z / P));
    },
    get duration() {
      const Z = A.calculatedDuration === null ? cm(A) : A.calculatedDuration;
      return yn(Z);
    },
    get speed() {
      return P;
    },
    set speed(Z) {
      Z === P || !_ || ((P = Z), (V.time = yn(he)));
    },
    get state() {
      return B;
    },
    play: q,
    pause: () => {
      ((B = "paused"), (O = he));
    },
    stop: () => {
      ((S = !0), B !== "idle" && ((B = "idle"), p && p(), Be()));
    },
    cancel: () => {
      ($ !== null && $t($), Be());
    },
    complete: () => {
      B = "finished";
    },
    sample: (Z) => ((W = 0), $t(Z)),
  };
  return V;
}
function aS(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const lS = aS(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  uS = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Zs = 10,
  cS = 2e4,
  dS = (e, t) => t.type === "spring" || e === "backgroundColor" || !i0(t.ease);
function hS(e, t, { onUpdate: n, onComplete: r, ...s }) {
  if (!(
    lS() &&
    uS.has(t) &&
    !s.repeatDelay &&
    s.repeatType !== "mirror" &&
    s.damping !== 0 &&
    s.type !== "inertia"
  ))
    return !1;
  let u = !1,
    c,
    h,
    p = !1;
  const v = () => {
    h = new Promise((w) => {
      c = w;
    });
  };
  v();
  let { keyframes: g, duration: x = 300, ease: P, times: S } = s;
  if (dS(t, s)) {
    const w = Oa({ ...s, repeat: 0, delay: 0 });
    let N = { done: !1, value: g[0] };
    const A = [];
    let I = 0;
    for (; !N.done && I < cS;) ((N = w.sample(I)), A.push(N.value), (I += Zs));
    ((S = void 0), (g = A), (x = I - Zs), (P = "linear"));
  }
  const C = wk(e.owner.current, t, g, { ...s, duration: x, ease: P, times: S }),
    j = () => {
      ((p = !1), C.cancel());
    },
    k = () => {
      ((p = !0), me.update(j), c(), v());
    };
  return (
    (C.onfinish = () => {
      p || (e.set(Pk(g, s)), r && r(), k());
    }),
    {
      then(w, N) {
        return h.then(w, N);
      },
      attachTimeline(w) {
        return ((C.timeline = w), (C.onfinish = null), Ee);
      },
      get time() {
        return yn(C.currentTime || 0);
      },
      set time(w) {
        C.currentTime = Si(w);
      },
      get speed() {
        return C.playbackRate;
      },
      set speed(w) {
        C.playbackRate = w;
      },
      get duration() {
        return yn(x);
      },
      play: () => {
        u || (C.play(), kn(j));
      },
      pause: () => C.pause(),
      stop: () => {
        if (((u = !0), C.playState === "idle")) return;
        const { currentTime: w } = C;
        if (w) {
          const N = Oa({ ...s, autoplay: !1 });
          e.setWithVelocity(N.sample(w - Zs).value, N.sample(w).value, Zs);
        }
        k();
      },
      complete: () => {
        p || C.finish();
      },
      cancel: k,
    }
  );
}
function fS({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const s = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ee,
      pause: Ee,
      stop: Ee,
      then: (a) => (a(), Promise.resolve()),
      cancel: Ee,
      complete: Ee,
    }
  );
  return t
    ? Oa({ keyframes: [0, 1], duration: 0, delay: t, onComplete: s })
    : s();
}
const pS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  mS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  gS = { type: "keyframes", duration: 0.8 },
  vS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  yS = (e, { keyframes: t }) =>
    t.length > 2
      ? gS
      : Mi.has(e)
        ? e.startsWith("scale")
          ? mS(t[1])
          : pS
        : vS,
  Oc = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Jn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  xS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function _S(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(dl) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let a = xS.has(t) ? 1 : 0;
  return (r !== n && (a *= 100), t + "(" + a + s + ")");
}
const wS = /([a-z-]*)\(.*?\)/g,
  Dc = {
    ...Jn,
    getAnimatableNone: (e) => {
      const t = e.match(wS);
      return t ? t.map(_S).join(" ") : e;
    },
  },
  PS = {
    ...Vy,
    color: nt,
    backgroundColor: nt,
    outlineColor: nt,
    fill: nt,
    stroke: nt,
    borderColor: nt,
    borderTopColor: nt,
    borderRightColor: nt,
    borderBottomColor: nt,
    borderLeftColor: nt,
    filter: Dc,
    WebkitFilter: Dc,
  },
  fh = (e) => PS[e];
function b0(e, t) {
  let n = fh(e);
  return (
    n !== Dc && (n = Jn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const L0 = (e) => /^0[^.\s]+$/.test(e);
function kS(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || L0(e);
}
function SS(e, t, n, r) {
  const s = Oc(t, n);
  let a;
  Array.isArray(n) ? (a = [...n]) : (a = [null, n]);
  const u = r.from !== void 0 ? r.from : e.get();
  let c;
  const h = [];
  for (let p = 0; p < a.length; p++)
    (a[p] === null && (a[p] = p === 0 ? u : a[p - 1]),
      kS(a[p]) && h.push(p),
      typeof a[p] == "string" && a[p] !== "none" && a[p] !== "0" && (c = a[p]));
  if (s && h.length && c)
    for (let p = 0; p < h.length; p++) {
      const v = h[p];
      a[v] = b0(t, c);
    }
  return a;
}
function CS({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: a,
  repeatType: u,
  repeatDelay: c,
  from: h,
  elapsed: p,
  ...v
}) {
  return !!Object.keys(v).length;
}
function ph(e, t) {
  return e[t] || e.default || e;
}
const TS = { skipAnimations: !1 },
  mh =
    (e, t, n, r = {}) =>
    (s) => {
      const a = ph(r, e) || {},
        u = a.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - Si(u);
      const h = SS(t, e, n, a),
        p = h[0],
        v = h[h.length - 1],
        g = Oc(e, p),
        x = Oc(e, v);
      let P = {
        keyframes: h,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...a,
        delay: -c,
        onUpdate: (S) => {
          (t.set(S), a.onUpdate && a.onUpdate(S));
        },
        onComplete: () => {
          (s(), a.onComplete && a.onComplete());
        },
      };
      if (
        (CS(a) || (P = { ...P, ...yS(e, P) }),
        P.duration && (P.duration = Si(P.duration)),
        P.repeatDelay && (P.repeatDelay = Si(P.repeatDelay)),
        !g || !x || _k.current || a.type === !1 || TS.skipAnimations)
      )
        return fS(P);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const S = hS(t, e, P);
        if (S) return S;
      }
      return Oa(P);
    };
function Da(e) {
  return !!(pt(e) && e.add);
}
const N0 = (e) => /^\-?\d*\.?\d+$/.test(e);
function gh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function vh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class yh {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (gh(this.subscriptions, t), () => vh(this.subscriptions, t));
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let a = 0; a < s; a++) {
          const u = this.subscriptions[a];
          u && u(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const bS = (e) => !isNaN(parseFloat(e));
class LS {
  constructor(t, n = {}) {
    ((this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        ((this.prev = this.current), (this.current = r));
        const { delta: a, timestamp: u } = Xe;
        (this.lastUpdated !== u &&
          ((this.timeDelta = a),
          (this.lastUpdated = u),
          me.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.scheduleVelocityCheck = () => me.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = bS(this.current)),
      (this.owner = n.owner));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new yh());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            me.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n), (this.prev = t), (this.timeDelta = r));
  }
  jump(t) {
    (this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? S0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function br(e, t) {
  return new LS(e, t);
}
const E0 = (e) => (t) => t.test(e),
  NS = { test: (e) => e === "auto", parse: (e) => e },
  j0 = [Ai, K, on, En, OP, RP, NS],
  no = (e) => j0.find(E0(e)),
  ES = [...j0, nt, Jn],
  jS = (e) => ES.find(E0(e));
function MS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, br(n));
}
function AS(e, t) {
  const n = fl(e, t);
  let {
    transitionEnd: r = {},
    transition: s = {},
    ...a
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  a = { ...a, ...r };
  for (const u in a) {
    const c = YP(a[u]);
    MS(e, u, c);
  }
}
function zS(e, t, n) {
  var r, s;
  const a = Object.keys(t).filter((c) => !e.hasValue(c)),
    u = a.length;
  if (u)
    for (let c = 0; c < u; c++) {
      const h = a[c],
        p = t[h];
      let v = null;
      (Array.isArray(p) && (v = p[0]),
        v === null &&
          (v =
            (s = (r = n[h]) !== null && r !== void 0 ? r : e.readValue(h)) !==
              null && s !== void 0
              ? s
              : t[h]),
        v != null &&
          (typeof v == "string" && (N0(v) || L0(v))
            ? (v = parseFloat(v))
            : !jS(v) && Jn.test(p) && (v = b0(h, p)),
          e.addValue(h, br(v, { owner: e })),
          n[h] === void 0 && (n[h] = v),
          v !== null && e.setBaseTarget(h, v)));
    }
}
function RS(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function OS(e, t, n) {
  const r = {};
  for (const s in e) {
    const a = RS(s, t);
    if (a !== void 0) r[s] = a;
    else {
      const u = n.getValue(s);
      u && (r[s] = u.get());
    }
  }
  return r;
}
function DS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function IS(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function M0(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  let {
    transition: a = e.getDefaultTransition(),
    transitionEnd: u,
    ...c
  } = e.makeTargetAnimatable(t);
  const h = e.getValue("willChange");
  r && (a = r);
  const p = [],
    v = s && e.animationState && e.animationState.getState()[s];
  for (const g in c) {
    const x = e.getValue(g),
      P = c[g];
    if (!x || P === void 0 || (v && DS(v, g))) continue;
    const S = { delay: n, elapsed: 0, ...ph(a || {}, g) };
    if (window.HandoffAppearAnimations) {
      const k = e.getProps()[Ay];
      if (k) {
        const _ = window.HandoffAppearAnimations(k, g, x, me);
        _ !== null && ((S.elapsed = _), (S.isHandoff = !0));
      }
    }
    let C = !S.isHandoff && !IS(x, P);
    if (
      (S.type === "spring" && (x.getVelocity() || S.velocity) && (C = !1),
      x.animation && (C = !1),
      C)
    )
      continue;
    x.start(mh(g, x, P, e.shouldReduceMotion && Mi.has(g) ? { type: !1 } : S));
    const j = x.animation;
    (Da(h) && (h.add(g), j.then(() => h.remove(g))), p.push(j));
  }
  return (
    u &&
      Promise.all(p).then(() => {
        u && AS(e, u);
      }),
    p
  );
}
function Ic(e, t, n = {}) {
  const r = fl(e, t, n.custom);
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const a = r ? () => Promise.all(M0(e, r, n)) : () => Promise.resolve(),
    u =
      e.variantChildren && e.variantChildren.size
        ? (h = 0) => {
            const {
              delayChildren: p = 0,
              staggerChildren: v,
              staggerDirection: g,
            } = s;
            return BS(e, t, p + h, v, g, n);
          }
        : () => Promise.resolve(),
    { when: c } = s;
  if (c) {
    const [h, p] = c === "beforeChildren" ? [a, u] : [u, a];
    return h().then(() => p());
  } else return Promise.all([a(), u(n.delay)]);
}
function BS(e, t, n = 0, r = 0, s = 1, a) {
  const u = [],
    c = (e.variantChildren.size - 1) * r,
    h = s === 1 ? (p = 0) => p * r : (p = 0) => c - p * r;
  return (
    Array.from(e.variantChildren)
      .sort(VS)
      .forEach((p, v) => {
        (p.notify("AnimationStart", t),
          u.push(
            Ic(p, t, { ...a, delay: n + h(v) }).then(() =>
              p.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(u)
  );
}
function VS(e, t) {
  return e.sortNodePosition(t);
}
function FS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((a) => Ic(e, a, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Ic(e, t, n);
  else {
    const s = typeof t == "function" ? fl(e, t, n.custom) : t;
    r = Promise.all(M0(e, s, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const ZS = [...Jd].reverse(),
  US = Jd.length;
function HS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => FS(e, n, r)));
}
function WS(e) {
  let t = HS(e);
  const n = qS();
  let r = !0;
  const s = (h, p) => {
    const v = fl(e, p);
    if (v) {
      const { transition: g, transitionEnd: x, ...P } = v;
      h = { ...h, ...P, ...x };
    }
    return h;
  };
  function a(h) {
    t = h(e);
  }
  function u(h, p) {
    const v = e.getProps(),
      g = e.getVariantContext(!0) || {},
      x = [],
      P = new Set();
    let S = {},
      C = 1 / 0;
    for (let k = 0; k < US; k++) {
      const _ = ZS[k],
        w = n[_],
        N = v[_] !== void 0 ? v[_] : g[_],
        A = Ho(N),
        I = _ === p ? w.isActive : null;
      I === !1 && (C = k);
      let B = N === g[_] && N !== v[_] && A;
      if (
        (B && r && e.manuallyAnimateOnMount && (B = !1),
        (w.protectedKeys = { ...S }),
        (!w.isActive && I === null) ||
          (!N && !w.prevProp) ||
          ul(N) ||
          typeof N == "boolean")
      )
        continue;
      let W =
          $S(w.prevProp, N) ||
          (_ === p && w.isActive && !B && A) ||
          (k > C && A),
        $ = !1;
      const se = Array.isArray(N) ? N : [N];
      let ce = se.reduce(s, {});
      I === !1 && (ce = {});
      const { prevResolvedValues: Ue = {} } = w,
        he = { ...Ue, ...ce },
        $t = (ie) => {
          ((W = !0),
            P.has(ie) && (($ = !0), P.delete(ie)),
            (w.needsAnimating[ie] = !0));
        };
      for (const ie in he) {
        const Be = ce[ie],
          z = Ue[ie];
        if (S.hasOwnProperty(ie)) continue;
        let q = !1;
        (Aa(Be) && Aa(z) ? (q = !t0(Be, z)) : (q = Be !== z),
          q
            ? Be !== void 0
              ? $t(ie)
              : P.add(ie)
            : Be !== void 0 && P.has(ie)
              ? $t(ie)
              : (w.protectedKeys[ie] = !0));
      }
      ((w.prevProp = N),
        (w.prevResolvedValues = ce),
        w.isActive && (S = { ...S, ...ce }),
        r && e.blockInitialAnimation && (W = !1),
        W &&
          (!B || $) &&
          x.push(
            ...se.map((ie) => ({ animation: ie, options: { type: _, ...h } })),
          ));
    }
    if (P.size) {
      const k = {};
      (P.forEach((_) => {
        const w = e.getBaseTarget(_);
        w !== void 0 && (k[_] = w);
      }),
        x.push({ animation: k }));
    }
    let j = !!x.length;
    return (
      r &&
        (v.initial === !1 || v.initial === v.animate) &&
        !e.manuallyAnimateOnMount &&
        (j = !1),
      (r = !1),
      j ? t(x) : Promise.resolve()
    );
  }
  function c(h, p, v) {
    var g;
    if (n[h].isActive === p) return Promise.resolve();
    ((g = e.variantChildren) === null ||
      g === void 0 ||
      g.forEach((P) => {
        var S;
        return (S = P.animationState) === null || S === void 0
          ? void 0
          : S.setActive(h, p);
      }),
      (n[h].isActive = p));
    const x = u(v, h);
    for (const P in n) n[P].protectedKeys = {};
    return x;
  }
  return {
    animateChanges: u,
    setActive: c,
    setAnimateFunction: a,
    getState: () => n,
  };
}
function $S(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !t0(t, e) : !1;
}
function hi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function qS() {
  return {
    animate: hi(!0),
    whileInView: hi(),
    whileHover: hi(),
    whileTap: hi(),
    whileDrag: hi(),
    whileFocus: hi(),
    exit: hi(),
  };
}
class GS extends si {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = WS(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    (this.unmount(), ul(t) && (this.unmount = t.subscribe(this.node)));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let KS = 0;
class YS extends si {
  constructor() {
    (super(...arguments), (this.id = KS++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === s) return;
    const a = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && a.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const QS = { animation: { Feature: GS }, exit: { Feature: YS } },
  dm = (e, t) => Math.abs(e - t);
function XS(e, t) {
  const n = dm(e.x, t.x),
    r = dm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class A0 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: a = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const g = Lu(this.lastMoveEventInfo, this.history),
          x = this.startEvent !== null,
          P = XS(g.offset, { x: 0, y: 0 }) >= 3;
        if (!x && !P) return;
        const { point: S } = g,
          { timestamp: C } = Xe;
        this.history.push({ ...S, timestamp: C });
        const { onStart: j, onMove: k } = this.handlers;
        (x ||
          (j && j(this.lastMoveEvent, g),
          (this.startEvent = this.lastMoveEvent)),
          k && k(this.lastMoveEvent, g));
      }),
      (this.handlePointerMove = (g, x) => {
        ((this.lastMoveEvent = g),
          (this.lastMoveEventInfo = bu(x, this.transformPagePoint)),
          me.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (g, x) => {
        this.end();
        const { onEnd: P, onSessionEnd: S, resumeAnimation: C } = this.handlers;
        if (
          (this.dragSnapToOrigin && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const j = Lu(
          g.type === "pointercancel"
            ? this.lastMoveEventInfo
            : bu(x, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && P && P(g, j), S && S(g, j));
      }),
      !Yy(t))
    )
      return;
    ((this.dragSnapToOrigin = a),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window));
    const u = hl(t),
      c = bu(u, this.transformPagePoint),
      { point: h } = c,
      { timestamp: p } = Xe;
    this.history = [{ ...h, timestamp: p }];
    const { onSessionStart: v } = n;
    (v && v(t, Lu(c, this.history)),
      (this.removeListeners = Gn(
        vn(this.contextWindow, "pointermove", this.handlePointerMove),
        vn(this.contextWindow, "pointerup", this.handlePointerUp),
        vn(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), kn(this.updatePoint));
  }
}
function bu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function hm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Lu({ point: e }, t) {
  return {
    point: e,
    delta: hm(e, z0(t)),
    offset: hm(e, JS(t)),
    velocity: eC(t, 0.1),
  };
}
function JS(e) {
  return e[0];
}
function z0(e) {
  return e[e.length - 1];
}
function eC(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = z0(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Si(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  const a = yn(s.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  const u = { x: (s.x - r.x) / a, y: (s.y - r.y) / a };
  return (u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u);
}
function xt(e) {
  return e.max - e.min;
}
function Bc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function fm(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = we(t.min, t.max, e.origin)),
    (e.scale = xt(n) / xt(t)),
    (Bc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = we(n.min, n.max, e.origin) - e.originPoint),
    (Bc(e.translate) || isNaN(e.translate)) && (e.translate = 0));
}
function Po(e, t, n, r) {
  (fm(e.x, t.x, n.x, r ? r.originX : void 0),
    fm(e.y, t.y, n.y, r ? r.originY : void 0));
}
function pm(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + xt(t)));
}
function tC(e, t, n) {
  (pm(e.x, t.x, n.x), pm(e.y, t.y, n.y));
}
function mm(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + xt(t)));
}
function ko(e, t, n) {
  (mm(e.x, t.x, n.x), mm(e.y, t.y, n.y));
}
function nC(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? we(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? we(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function gm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function iC(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: gm(e.x, n, s), y: gm(e.y, t, r) };
}
function vm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function rC(e, t) {
  return { x: vm(e.x, t.x), y: vm(e.y, t.y) };
}
function oC(e, t) {
  let n = 0.5;
  const r = xt(e),
    s = xt(t);
  return (
    s > r
      ? (n = $o(t.min, t.max - r, e.min))
      : r > s && (n = $o(e.min, e.max - s, t.min)),
    Xn(0, 1, n)
  );
}
function sC(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Vc = 0.35;
function aC(e = Vc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vc),
    { x: ym(e, "left", "right"), y: ym(e, "top", "bottom") }
  );
}
function ym(e, t, n) {
  return { min: xm(e, t), max: xm(e, n) };
}
function xm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _m = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  hr = () => ({ x: _m(), y: _m() }),
  wm = () => ({ min: 0, max: 0 }),
  ze = () => ({ x: wm(), y: wm() });
function Tt(e) {
  return [e("x"), e("y")];
}
function R0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function lC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function uC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Nu(e) {
  return e === void 0 || e === 1;
}
function Fc({ scale: e, scaleX: t, scaleY: n }) {
  return !Nu(e) || !Nu(t) || !Nu(n);
}
function mi(e) {
  return Fc(e) || O0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function O0(e) {
  return Pm(e.x) || Pm(e.y);
}
function Pm(e) {
  return e && e !== "0%";
}
function Ia(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function km(e, t, n, r, s) {
  return (s !== void 0 && (e = Ia(e, s, r)), Ia(e, n, r) + t);
}
function Zc(e, t = 0, n = 1, r, s) {
  ((e.min = km(e.min, t, n, r, s)), (e.max = km(e.max, t, n, r, s)));
}
function D0(e, { x: t, y: n }) {
  (Zc(e.x, t.translate, t.scale, t.originPoint),
    Zc(e.y, n.translate, n.scale, n.originPoint));
}
function cC(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let a, u;
  for (let c = 0; c < s; c++) {
    ((a = n[c]), (u = a.projectionDelta));
    const h = a.instance;
    (h && h.style && h.style.display === "contents") ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        fr(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      u && ((t.x *= u.x.scale), (t.y *= u.y.scale), D0(e, u)),
      r && mi(a.latestValues) && fr(e, a.latestValues));
  }
  ((t.x = Sm(t.x)), (t.y = Sm(t.y)));
}
function Sm(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function An(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Cm(e, t, [n, r, s]) {
  const a = t[s] !== void 0 ? t[s] : 0.5,
    u = we(e.min, e.max, a);
  Zc(e, t[n], t[r], u, t.scale);
}
const dC = ["x", "scaleX", "originX"],
  hC = ["y", "scaleY", "originY"];
function fr(e, t) {
  (Cm(e.x, t, dC), Cm(e.y, t, hC));
}
function I0(e, t) {
  return R0(uC(e.getBoundingClientRect(), t));
}
function fC(e, t, n) {
  const r = I0(e, n),
    { scroll: s } = t;
  return (s && (An(r.x, s.offset.x), An(r.y, s.offset.y)), r);
}
const B0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  pC = new WeakMap();
class mC {
  constructor(t) {
    ((this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ze()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (v) => {
        const { dragSnapToOrigin: g } = this.getProps();
        (g ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(hl(v, "page").point));
      },
      a = (v, g) => {
        const { drag: x, dragPropagation: P, onDragStart: S } = this.getProps();
        if (
          x &&
          !P &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Xy(x)),
          !this.openGlobalLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Tt((j) => {
            let k = this.getAxisMotionValue(j).get() || 0;
            if (on.test(k)) {
              const { projection: _ } = this.visualElement;
              if (_ && _.layout) {
                const w = _.layout.layoutBox[j];
                w && (k = xt(w) * (parseFloat(k) / 100));
              }
            }
            this.originPoint[j] = k;
          }),
          S && me.update(() => S(v, g), !1, !0));
        const { animationState: C } = this.visualElement;
        C && C.setActive("whileDrag", !0);
      },
      u = (v, g) => {
        const {
          dragPropagation: x,
          dragDirectionLock: P,
          onDirectionLock: S,
          onDrag: C,
        } = this.getProps();
        if (!x && !this.openGlobalLock) return;
        const { offset: j } = g;
        if (P && this.currentDirection === null) {
          ((this.currentDirection = gC(j)),
            this.currentDirection !== null && S && S(this.currentDirection));
          return;
        }
        (this.updateAxis("x", g.point, j),
          this.updateAxis("y", g.point, j),
          this.visualElement.render(),
          C && C(v, g));
      },
      c = (v, g) => this.stop(v, g),
      h = () =>
        Tt((v) => {
          var g;
          return (
            this.getAnimationState(v) === "paused" &&
            ((g = this.getAxisMotionValue(v).animation) === null || g === void 0
              ? void 0
              : g.play())
          );
        }),
      { dragSnapToOrigin: p } = this.getProps();
    this.panSession = new A0(
      t,
      {
        onSessionStart: s,
        onStart: a,
        onMove: u,
        onSessionEnd: c,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: p,
        contextWindow: B0(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && me.update(() => a(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Us(t, s, this.currentDirection)) return;
    const a = this.getAxisMotionValue(t);
    let u = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (u = nC(u, this.constraints[t], this.elastic[t])),
      a.set(u));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      a = this.constraints;
    (n && cr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
        ? (this.constraints = iC(s.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = aC(r)),
      a !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Tt((u) => {
          this.getAxisMotionValue(u) &&
            (this.constraints[u] = sC(s.layoutBox[u], this.constraints[u]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !cr(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const a = fC(r, s.root, this.visualElement.getTransformPagePoint());
    let u = rC(s.layout.layoutBox, a);
    if (n) {
      const c = n(lC(u));
      ((this.hasMutatedConstraints = !!c), c && (u = R0(c)));
    }
    return u;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: a,
        dragSnapToOrigin: u,
        onDragTransitionEnd: c,
      } = this.getProps(),
      h = this.constraints || {},
      p = Tt((v) => {
        if (!Us(v, n, this.currentDirection)) return;
        let g = (h && h[v]) || {};
        u && (g = { min: 0, max: 0 });
        const x = s ? 200 : 1e6,
          P = s ? 40 : 1e7,
          S = {
            type: "inertia",
            velocity: r ? t[v] : 0,
            bounceStiffness: x,
            bounceDamping: P,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...a,
            ...g,
          };
        return this.startAxisValueAnimation(v, S);
      });
    return Promise.all(p).then(c);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(mh(t, r, 0, n));
  }
  stopAnimation() {
    Tt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Tt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Tt((n) => {
      const { drag: r } = this.getProps();
      if (!Us(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        a = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: u, max: c } = s.layout.layoutBox[n];
        a.set(t[n] - we(u, c, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!cr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Tt((u) => {
      const c = this.getAxisMotionValue(u);
      if (c) {
        const h = c.get();
        s[u] = oC({ min: h, max: h }, this.constraints[u]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = a ? a({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Tt((u) => {
        if (!Us(u, t, null)) return;
        const c = this.getAxisMotionValue(u),
          { min: h, max: p } = this.constraints[u];
        c.set(we(h, p, s[u]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    pC.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = vn(t, "pointerdown", (h) => {
        const { drag: p, dragListener: v = !0 } = this.getProps();
        p && v && this.start(h);
      }),
      r = () => {
        const { dragConstraints: h } = this.getProps();
        cr(h) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      a = s.addEventListener("measure", r);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      r());
    const u = mn(window, "resize", () => this.scalePositionWithinConstraints()),
      c = s.addEventListener(
        "didUpdate",
        ({ delta: h, hasLayoutChanged: p }) => {
          this.isDragging &&
            p &&
            (Tt((v) => {
              const g = this.getAxisMotionValue(v);
              g &&
                ((this.originPoint[v] += h[v].translate),
                g.set(g.get() + h[v].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (u(), n(), a(), c && c());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: a = !1,
        dragElastic: u = Vc,
        dragMomentum: c = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: a,
      dragElastic: u,
      dragMomentum: c,
    };
  }
}
function Us(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function gC(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class vC extends si {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Ee),
      (this.removeListeners = Ee),
      (this.controls = new mC(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ee));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Tm = (e) => (t, n) => {
  e && me.update(() => e(t, n));
};
class yC extends si {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ee));
  }
  onPointerDown(t) {
    this.session = new A0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: B0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: Tm(t),
      onStart: Tm(n),
      onMove: r,
      onEnd: (a, u) => {
        (delete this.session, s && me.update(() => s(a, u)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = vn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
function xC() {
  const e = b.useContext(al);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    s = b.useId();
  return (b.useEffect(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0]);
}
const ra = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function bm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const io = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      const n = bm(e, t.target.x),
        r = bm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  _C = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Jn.parse(e);
      if (s.length > 5) return r;
      const a = Jn.createTransformer(e),
        u = typeof s[0] != "number" ? 1 : 0,
        c = n.x.scale * t.x,
        h = n.y.scale * t.y;
      ((s[0 + u] /= c), (s[1 + u] /= h));
      const p = we(c, h, 0.5);
      return (
        typeof s[2 + u] == "number" && (s[2 + u] /= p),
        typeof s[3 + u] == "number" && (s[3 + u] /= p),
        a(s)
      );
    },
  };
class wC extends nd.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: a } = t;
    (LP(PC),
      a &&
        (n.group && n.group.add(a),
        r && r.register && s && r.register(a),
        a.root.didUpdate(),
        a.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        a.setOptions({
          ...a.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ra.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: a,
      } = this.props,
      u = r.projection;
    return (
      u &&
        ((u.isPresent = a),
        s || t.layoutDependency !== n || n === void 0
          ? u.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== a &&
          (a
            ? u.promote()
            : u.relegate() ||
              me.postRender(() => {
                const c = u.getStack();
                (!c || !c.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function V0(e) {
  const [t, n] = xC(),
    r = b.useContext(th);
  return nd.createElement(wC, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: b.useContext(Ry),
    isPresent: t,
    safeToRemove: n,
  });
}
const PC = {
    borderRadius: {
      ...io,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: io,
    borderTopRightRadius: io,
    borderBottomLeftRadius: io,
    borderBottomRightRadius: io,
    boxShadow: _C,
  },
  F0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  kC = F0.length,
  Lm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Nm = (e) => typeof e == "number" || K.test(e);
function SC(e, t, n, r, s, a) {
  s
    ? ((e.opacity = we(0, n.opacity !== void 0 ? n.opacity : 1, CC(r))),
      (e.opacityExit = we(t.opacity !== void 0 ? t.opacity : 1, 0, TC(r))))
    : a &&
      (e.opacity = we(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let u = 0; u < kC; u++) {
    const c = `border${F0[u]}Radius`;
    let h = Em(t, c),
      p = Em(n, c);
    if (h === void 0 && p === void 0) continue;
    (h || (h = 0),
      p || (p = 0),
      h === 0 || p === 0 || Nm(h) === Nm(p)
        ? ((e[c] = Math.max(we(Lm(h), Lm(p), r), 0)),
          (on.test(p) || on.test(h)) && (e[c] += "%"))
        : (e[c] = p));
  }
  (t.rotate || n.rotate) && (e.rotate = we(t.rotate || 0, n.rotate || 0, r));
}
function Em(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const CC = Z0(0, 0.5, c0),
  TC = Z0(0.5, 0.95, Ee);
function Z0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n($o(e, t, r)));
}
function jm(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ct(e, t) {
  (jm(e.x, t.x), jm(e.y, t.y));
}
function Mm(e, t, n, r, s) {
  return (
    (e -= t),
    (e = Ia(e, 1 / n, r)),
    s !== void 0 && (e = Ia(e, 1 / s, r)),
    e
  );
}
function bC(e, t = 0, n = 1, r = 0.5, s, a = e, u = e) {
  if (
    (on.test(t) &&
      ((t = parseFloat(t)), (t = we(u.min, u.max, t / 100) - u.min)),
    typeof t != "number")
  )
    return;
  let c = we(a.min, a.max, r);
  (e === a && (c -= t),
    (e.min = Mm(e.min, t, n, c, s)),
    (e.max = Mm(e.max, t, n, c, s)));
}
function Am(e, t, [n, r, s], a, u) {
  bC(e, t[n], t[r], t[s], t.scale, a, u);
}
const LC = ["x", "scaleX", "originX"],
  NC = ["y", "scaleY", "originY"];
function zm(e, t, n, r) {
  (Am(e.x, t, LC, n ? n.x : void 0, r ? r.x : void 0),
    Am(e.y, t, NC, n ? n.y : void 0, r ? r.y : void 0));
}
function Rm(e) {
  return e.translate === 0 && e.scale === 1;
}
function U0(e) {
  return Rm(e.x) && Rm(e.y);
}
function EC(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function H0(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Om(e) {
  return xt(e.x) / xt(e.y);
}
class jC {
  constructor() {
    this.members = [];
  }
  add(t) {
    (gh(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (vh(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const a = this.members[s];
      if (a.isPresent !== !1) {
        r = a;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Dm(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    a = e.y.translate / t.y;
  if (
    ((s || a) && (r = `translate3d(${s}px, ${a}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: h, rotateX: p, rotateY: v } = n;
    (h && (r += `rotate(${h}deg) `),
      p && (r += `rotateX(${p}deg) `),
      v && (r += `rotateY(${v}deg) `));
  }
  const u = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((u !== 1 || c !== 1) && (r += `scale(${u}, ${c})`), r || "none");
}
const MC = (e, t) => e.depth - t.depth;
class AC {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (gh(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (vh(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(MC),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function zC(e, t) {
  const n = performance.now(),
    r = ({ timestamp: s }) => {
      const a = s - n;
      a >= t && (kn(r), e(a - t));
    };
  return (me.read(r, !0), () => kn(r));
}
function RC(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function OC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function DC(e, t, n) {
  const r = pt(e) ? e : br(e);
  return (r.start(mh("", r, t, n)), r.animation);
}
const Im = ["", "X", "Y", "Z"],
  IC = { visibility: "hidden" },
  Bm = 1e3;
let BC = 0;
const gi = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function W0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(u = {}, c = t == null ? void 0 : t()) {
      ((this.id = BC++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            (gi.totalNodes =
              gi.resolvedTargetDeltas =
              gi.recalculatedProjection =
                0),
            this.nodes.forEach(ZC),
            this.nodes.forEach(qC),
            this.nodes.forEach(GC),
            this.nodes.forEach(UC),
            RC(gi));
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = u),
        (this.root = c ? c.root || c : this),
        (this.path = c ? [...c.path, c] : []),
        (this.parent = c),
        (this.depth = c ? c.depth + 1 : 0));
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new AC());
    }
    addEventListener(u, c) {
      return (
        this.eventHandlers.has(u) || this.eventHandlers.set(u, new yh()),
        this.eventHandlers.get(u).add(c)
      );
    }
    notifyListeners(u, ...c) {
      const h = this.eventHandlers.get(u);
      h && h.notify(...c);
    }
    hasListeners(u) {
      return this.eventHandlers.has(u);
    }
    mount(u, c = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = OC(u)), (this.instance = u));
      const { layoutId: h, layout: p, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(u),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        c && (p || h) && (this.isLayoutDirty = !0),
        e)
      ) {
        let g;
        const x = () => (this.root.updateBlockedByResize = !1);
        e(u, () => {
          ((this.root.updateBlockedByResize = !0),
            g && g(),
            (g = zC(x, 250)),
            ra.hasAnimatedSinceResize &&
              ((ra.hasAnimatedSinceResize = !1), this.nodes.forEach(Fm)));
        });
      }
      (h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 &&
          v &&
          (h || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: x,
              hasRelativeTargetChanged: P,
              layout: S,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const C =
                  this.options.transition || v.getDefaultTransition() || JC,
                { onLayoutAnimationStart: j, onLayoutAnimationComplete: k } =
                  v.getProps(),
                _ = !this.targetLayout || !H0(this.targetLayout, S) || P,
                w = !x && P;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                w ||
                (x && (_ || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(g, w));
                const N = { ...ph(C, "layout"), onPlay: j, onComplete: k };
                ((v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((N.delay = 0), (N.type = !1)),
                  this.startAnimation(N));
              } else
                (x || Fm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = S;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const u = this.getStack();
      (u && u.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        kn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(KC),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: u } = this.options;
      return u && u.getProps().transformTemplate;
    }
    willUpdate(u = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v];
        ((g.shouldResetTransform = !0),
          g.updateScroll("snapshot"),
          g.options.layoutRoot && g.willUpdate(!1));
      }
      const { layoutId: c, layout: h } = this.options;
      if (c === void 0 && !h) return;
      const p = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = p
        ? p(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        u && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Vm));
        return;
      }
      (this.isUpdating || this.nodes.forEach(WC),
        (this.isUpdating = !1),
        this.nodes.forEach($C),
        this.nodes.forEach(VC),
        this.nodes.forEach(FC),
        this.clearAllSnapshots());
      const c = performance.now();
      ((Xe.delta = Xn(0, 1e3 / 60, c - Xe.timestamp)),
        (Xe.timestamp = c),
        (Xe.isProcessing = !0),
        xu.update.process(Xe),
        xu.preRender.process(Xe),
        xu.render.process(Xe),
        (Xe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(HC), this.sharedNodes.forEach(YC));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        me.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const u = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = ze()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: c } = this.options;
      c &&
        c.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          u ? u.layoutBox : void 0,
        );
    }
    updateScroll(u = "measure") {
      let c = !!(this.options.layoutScroll && this.instance);
      (this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === u &&
        (c = !1),
        c &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: u,
            isRoot: r(this.instance),
            offset: n(this.instance),
          }));
    }
    resetTransform() {
      if (!s) return;
      const u = this.isLayoutDirty || this.shouldResetTransform,
        c = this.projectionDelta && !U0(this.projectionDelta),
        h = this.getTransformTemplate(),
        p = h ? h(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      u &&
        (c || mi(this.latestValues) || v) &&
        (s(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(u = !0) {
      const c = this.measurePageBox();
      let h = this.removeElementScroll(c);
      return (
        u && (h = this.removeTransform(h)),
        eT(h),
        {
          animationId: this.root.animationId,
          measuredBox: c,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: u } = this.options;
      if (!u) return ze();
      const c = u.measureViewportBox(),
        { scroll: h } = this.root;
      return (h && (An(c.x, h.offset.x), An(c.y, h.offset.y)), c);
    }
    removeElementScroll(u) {
      const c = ze();
      Ct(c, u);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h],
          { scroll: v, options: g } = p;
        if (p !== this.root && v && g.layoutScroll) {
          if (v.isRoot) {
            Ct(c, u);
            const { scroll: x } = this.root;
            x && (An(c.x, -x.offset.x), An(c.y, -x.offset.y));
          }
          (An(c.x, v.offset.x), An(c.y, v.offset.y));
        }
      }
      return c;
    }
    applyTransform(u, c = !1) {
      const h = ze();
      Ct(h, u);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        (!c &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          fr(h, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          mi(v.latestValues) && fr(h, v.latestValues));
      }
      return (mi(this.latestValues) && fr(h, this.latestValues), h);
    }
    removeTransform(u) {
      const c = ze();
      Ct(c, u);
      for (let h = 0; h < this.path.length; h++) {
        const p = this.path[h];
        if (!p.instance || !mi(p.latestValues)) continue;
        Fc(p.latestValues) && p.updateSnapshot();
        const v = ze(),
          g = p.measurePageBox();
        (Ct(v, g),
          zm(c, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, v));
      }
      return (mi(this.latestValues) && zm(c, this.latestValues), c);
    }
    setTargetDelta(u) {
      ((this.targetDelta = u),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(u) {
      this.options = {
        ...this.options,
        ...u,
        crossfade: u.crossfade !== void 0 ? u.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Xe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(u = !1) {
      var c;
      const h = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = h.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== h;
      if (!(
        u ||
        (p && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        (!((c = this.parent) === null || c === void 0) &&
          c.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget
      ))
        return;
      const { layout: g, layoutId: x } = this.options;
      if (!(!this.layout || !(g || x))) {
        if (
          ((this.resolvedRelativeTargetAt = Xe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const P = this.getClosestProjectingParent();
          P && P.layout && this.animationProgress !== 1
            ? ((this.relativeParent = P),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ze()),
              (this.relativeTargetOrigin = ze()),
              ko(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                P.layout.layoutBox,
              ),
              Ct(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ze()), (this.targetWithTransforms = ze())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                tC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Ct(this.target, this.layout.layoutBox),
                  D0(this.target, this.targetDelta))
                : Ct(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const P = this.getClosestProjectingParent();
            P &&
            !!P.resumingFrom == !!this.resumingFrom &&
            !P.options.layoutScroll &&
            P.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = P),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ze()),
                (this.relativeTargetOrigin = ze()),
                ko(this.relativeTargetOrigin, this.target, P.target),
                Ct(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          gi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        Fc(this.parent.latestValues) ||
        O0(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var u;
      const c = this.getLead(),
        h = !!this.resumingFrom || this !== c;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          (!((u = this.parent) === null || u === void 0) &&
            u.isProjectionDirty)) &&
          (p = !1),
        h &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Xe.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: v, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || g))
      )
        return;
      Ct(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x,
        P = this.treeScale.y;
      (cC(this.layoutCorrected, this.treeScale, this.path, h),
        c.layout &&
          !c.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (c.target = c.layout.layoutBox));
      const { target: S } = c;
      if (!S) {
        this.projectionTransform &&
          ((this.projectionDelta = hr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = hr()),
        (this.projectionDeltaWithTransform = hr()));
      const C = this.projectionTransform;
      (Po(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
        (this.projectionTransform = Dm(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== C ||
          this.treeScale.x !== x ||
          this.treeScale.y !== P) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", S)),
        gi.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(u = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), u)) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(u, c = !1) {
      const h = this.snapshot,
        p = h ? h.latestValues : {},
        v = { ...this.latestValues },
        g = hr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !c));
      const x = ze(),
        P = h ? h.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        C = P !== S,
        j = this.getStack(),
        k = !j || j.members.length <= 1,
        _ = !!(C && !k && this.options.crossfade === !0 && !this.path.some(XC));
      this.animationProgress = 0;
      let w;
      ((this.mixTargetDelta = (N) => {
        const A = N / 1e3;
        (Zm(g.x, u.x, A),
          Zm(g.y, u.y, A),
          this.setTargetDelta(g),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ko(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            QC(this.relativeTarget, this.relativeTargetOrigin, x, A),
            w && EC(this.relativeTarget, w) && (this.isProjectionDirty = !1),
            w || (w = ze()),
            Ct(w, this.relativeTarget)),
          C &&
            ((this.animationValues = v), SC(v, p, this.latestValues, A, _, k)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = A));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(u) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (kn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = me.update(() => {
          ((ra.hasAnimatedSinceResize = !0),
            (this.currentAnimation = DC(0, Bm, {
              ...u,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), u.onUpdate && u.onUpdate(c));
              },
              onComplete: () => {
                (u.onComplete && u.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const u = this.getStack();
      (u && u.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Bm),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const u = this.getLead();
      let {
        targetWithTransforms: c,
        target: h,
        layout: p,
        latestValues: v,
      } = u;
      if (!(!c || !h || !p)) {
        if (
          this !== u &&
          this.layout &&
          p &&
          $0(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          h = this.target || ze();
          const g = xt(this.layout.layoutBox.x);
          ((h.x.min = u.target.x.min), (h.x.max = h.x.min + g));
          const x = xt(this.layout.layoutBox.y);
          ((h.y.min = u.target.y.min), (h.y.max = h.y.min + x));
        }
        (Ct(c, h),
          fr(c, v),
          Po(this.projectionDeltaWithTransform, this.layoutCorrected, c, v));
      }
    }
    registerSharedNode(u, c) {
      (this.sharedNodes.has(u) || this.sharedNodes.set(u, new jC()),
        this.sharedNodes.get(u).add(c));
      const p = c.options.initialPromotionConfig;
      c.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(c)
            : void 0,
      });
    }
    isLead() {
      const u = this.getStack();
      return u ? u.lead === this : !0;
    }
    getLead() {
      var u;
      const { layoutId: c } = this.options;
      return c
        ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var u;
      const { layoutId: c } = this.options;
      return c
        ? (u = this.getStack()) === null || u === void 0
          ? void 0
          : u.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: u } = this.options;
      if (u) return this.root.sharedNodes.get(u);
    }
    promote({ needsReset: u, transition: c, preserveFollowOpacity: h } = {}) {
      const p = this.getStack();
      (p && p.promote(this, h),
        u && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        c && this.setOptions({ transition: c }));
    }
    relegate() {
      const u = this.getStack();
      return u ? u.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: u } = this.options;
      if (!u) return;
      let c = !1;
      const { latestValues: h } = u;
      if (((h.rotate || h.rotateX || h.rotateY || h.rotateZ) && (c = !0), !c))
        return;
      const p = {};
      for (let v = 0; v < Im.length; v++) {
        const g = "rotate" + Im[v];
        h[g] && ((p[g] = h[g]), u.setStaticValue(g, 0));
      }
      u.render();
      for (const v in p) u.setStaticValue(v, p[v]);
      u.scheduleRender();
    }
    getProjectionStyles(u) {
      var c, h;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return IC;
      const p = { visibility: "" },
        v = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (p.opacity = ""),
          (p.pointerEvents = ia(u == null ? void 0 : u.pointerEvents) || ""),
          (p.transform = v ? v(this.latestValues, "") : "none"),
          p
        );
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        const C = {};
        return (
          this.options.layoutId &&
            ((C.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (C.pointerEvents = ia(u == null ? void 0 : u.pointerEvents) || "")),
          this.hasProjected &&
            !mi(this.latestValues) &&
            ((C.transform = v ? v({}, "") : "none"), (this.hasProjected = !1)),
          C
        );
      }
      const x = g.animationValues || g.latestValues;
      (this.applyTransformsToTarget(),
        (p.transform = Dm(
          this.projectionDeltaWithTransform,
          this.treeScale,
          x,
        )),
        v && (p.transform = v(x, p.transform)));
      const { x: P, y: S } = this.projectionDelta;
      ((p.transformOrigin = `${P.origin * 100}% ${S.origin * 100}% 0`),
        g.animationValues
          ? (p.opacity =
              g === this
                ? (h =
                    (c = x.opacity) !== null && c !== void 0
                      ? c
                      : this.latestValues.opacity) !== null && h !== void 0
                  ? h
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : x.opacityExit)
          : (p.opacity =
              g === this
                ? x.opacity !== void 0
                  ? x.opacity
                  : ""
                : x.opacityExit !== void 0
                  ? x.opacityExit
                  : 0));
      for (const C in ja) {
        if (x[C] === void 0) continue;
        const { correct: j, applyTo: k } = ja[C],
          _ = p.transform === "none" ? x[C] : j(x[C], g);
        if (k) {
          const w = k.length;
          for (let N = 0; N < w; N++) p[k[N]] = _;
        } else p[C] = _;
      }
      return (
        this.options.layoutId &&
          (p.pointerEvents =
            g === this
              ? ia(u == null ? void 0 : u.pointerEvents) || ""
              : "none"),
        p
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((u) => {
        var c;
        return (c = u.currentAnimation) === null || c === void 0
          ? void 0
          : c.stop();
      }),
        this.root.nodes.forEach(Vm),
        this.root.sharedNodes.clear());
    }
  };
}
function VC(e) {
  e.updateLayout();
}
function FC(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: a } = e.options,
      u = n.source !== e.layout.source;
    a === "size"
      ? Tt((g) => {
          const x = u ? n.measuredBox[g] : n.layoutBox[g],
            P = xt(x);
          ((x.min = r[g].min), (x.max = x.min + P));
        })
      : $0(a, n.layoutBox, r) &&
        Tt((g) => {
          const x = u ? n.measuredBox[g] : n.layoutBox[g],
            P = xt(r[g]);
          ((x.max = x.min + P),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[g].max = e.relativeTarget[g].min + P)));
        });
    const c = hr();
    Po(c, r, n.layoutBox);
    const h = hr();
    u ? Po(h, e.applyTransform(s, !0), n.measuredBox) : Po(h, r, n.layoutBox);
    const p = !U0(c);
    let v = !1;
    if (!e.resumeFrom) {
      const g = e.getClosestProjectingParent();
      if (g && !g.resumeFrom) {
        const { snapshot: x, layout: P } = g;
        if (x && P) {
          const S = ze();
          ko(S, n.layoutBox, x.layoutBox);
          const C = ze();
          (ko(C, r, P.layoutBox),
            H0(S, C) || (v = !0),
            g.options.layoutRoot &&
              ((e.relativeTarget = C),
              (e.relativeTargetOrigin = S),
              (e.relativeParent = g)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: h,
      layoutDelta: c,
      hasLayoutChanged: p,
      hasRelativeTargetChanged: v,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ZC(e) {
  (gi.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function UC(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function HC(e) {
  e.clearSnapshot();
}
function Vm(e) {
  e.clearMeasurements();
}
function WC(e) {
  e.isLayoutDirty = !1;
}
function $C(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Fm(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function qC(e) {
  e.resolveTargetDelta();
}
function GC(e) {
  e.calcProjection();
}
function KC(e) {
  e.resetRotation();
}
function YC(e) {
  e.removeLeadSnapshot();
}
function Zm(e, t, n) {
  ((e.translate = we(t.translate, 0, n)),
    (e.scale = we(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Um(e, t, n, r) {
  ((e.min = we(t.min, n.min, r)), (e.max = we(t.max, n.max, r)));
}
function QC(e, t, n, r) {
  (Um(e.x, t.x, n.x, r), Um(e.y, t.y, n.y, r));
}
function XC(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const JC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hm = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Wm = Hm("applewebkit/") && !Hm("chrome/") ? Math.round : Ee;
function $m(e) {
  ((e.min = Wm(e.min)), (e.max = Wm(e.max)));
}
function eT(e) {
  ($m(e.x), $m(e.y));
}
function $0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Bc(Om(t), Om(n), 0.2))
  );
}
const tT = W0({
    attachResizeListener: (e, t) => mn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Eu = { current: void 0 },
  q0 = W0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Eu.current) {
        const e = new tT({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Eu.current = e));
      }
      return Eu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  nT = {
    pan: { Feature: yC },
    drag: { Feature: vC, ProjectionNode: q0, MeasureLayout: V0 },
  },
  iT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function rT(e) {
  const t = iT.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Uc(e, t, n = 1) {
  const [r, s] = rT(e);
  if (!r) return;
  const a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    const u = a.trim();
    return N0(u) ? parseFloat(u) : u;
  } else return Mc(s) ? Uc(s, t, n + 1) : s;
}
function oT(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  (n && (n = { ...n }),
    e.values.forEach((s) => {
      const a = s.get();
      if (!Mc(a)) return;
      const u = Uc(a, r);
      u && s.set(u);
    }));
  for (const s in t) {
    const a = t[s];
    if (!Mc(a)) continue;
    const u = Uc(a, r);
    u && ((t[s] = u), n || (n = {}), n[s] === void 0 && (n[s] = a));
  }
  return { target: t, transitionEnd: n };
}
const sT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  G0 = (e) => sT.has(e),
  aT = (e) => Object.keys(e).some(G0),
  qm = (e) => e === Ai || e === K,
  Gm = (e, t) => parseFloat(e.split(", ")[t]),
  Km =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/);
      if (s) return Gm(s[1], t);
      {
        const a = r.match(/^matrix\((.+)\)$/);
        return a ? Gm(a[1], e) : 0;
      }
    },
  lT = new Set(["x", "y", "z"]),
  uT = Xo.filter((e) => !lT.has(e));
function cT(e) {
  const t = [];
  return (
    uT.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Lr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Km(4, 13),
  y: Km(5, 14),
};
Lr.translateX = Lr.x;
Lr.translateY = Lr.y;
const dT = (e, t, n) => {
    const r = t.measureViewportBox(),
      s = t.current,
      a = getComputedStyle(s),
      { display: u } = a,
      c = {};
    (u === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((p) => {
        c[p] = Lr[p](r, a);
      }),
      t.render());
    const h = t.measureViewportBox();
    return (
      n.forEach((p) => {
        const v = t.getValue(p);
        (v && v.jump(c[p]), (e[p] = Lr[p](h, a)));
      }),
      e
    );
  },
  hT = (e, t, n = {}, r = {}) => {
    ((t = { ...t }), (r = { ...r }));
    const s = Object.keys(t).filter(G0);
    let a = [],
      u = !1;
    const c = [];
    if (
      (s.forEach((h) => {
        const p = e.getValue(h);
        if (!e.hasValue(h)) return;
        let v = n[h],
          g = no(v);
        const x = t[h];
        let P;
        if (Aa(x)) {
          const S = x.length,
            C = x[0] === null ? 1 : 0;
          ((v = x[C]), (g = no(v)));
          for (let j = C; j < S && x[j] !== null; j++)
            P ? uh(no(x[j]) === P) : (P = no(x[j]));
        } else P = no(x);
        if (g !== P)
          if (qm(g) && qm(P)) {
            const S = p.get();
            (typeof S == "string" && p.set(parseFloat(S)),
              typeof x == "string"
                ? (t[h] = parseFloat(x))
                : Array.isArray(x) && P === K && (t[h] = x.map(parseFloat)));
          } else
            g != null &&
            g.transform &&
            P != null &&
            P.transform &&
            (v === 0 || x === 0)
              ? v === 0
                ? p.set(P.transform(v))
                : (t[h] = g.transform(x))
              : (u || ((a = cT(e)), (u = !0)),
                c.push(h),
                (r[h] = r[h] !== void 0 ? r[h] : t[h]),
                p.jump(x));
      }),
      c.length)
    ) {
      const h = c.indexOf("height") >= 0 ? window.pageYOffset : null,
        p = dT(t, e, c);
      return (
        a.length &&
          a.forEach(([v, g]) => {
            e.getValue(v).set(g);
          }),
        e.render(),
        ll && h !== null && window.scrollTo({ top: h }),
        { target: p, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function fT(e, t, n, r) {
  return aT(t) ? hT(e, t, n, r) : { target: t, transitionEnd: r };
}
const pT = (e, t, n, r) => {
    const s = oT(e, t, r);
    return ((t = s.target), (r = s.transitionEnd), fT(e, t, n, r));
  },
  Hc = { current: null },
  K0 = { current: !1 };
function mT() {
  if (((K0.current = !0), !!ll))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Hc.current = e.matches);
      (e.addListener(t), t());
    } else Hc.current = !1;
}
function gT(e, t, n) {
  const { willChange: r } = t;
  for (const s in t) {
    const a = t[s],
      u = n[s];
    if (pt(a)) (e.addValue(s, a), Da(r) && r.add(s));
    else if (pt(u)) (e.addValue(s, br(a, { owner: e })), Da(r) && r.remove(s));
    else if (u !== a)
      if (e.hasValue(s)) {
        const c = e.getValue(s);
        !c.hasAnimated && c.set(a);
      } else {
        const c = e.getStaticValue(s);
        e.addValue(s, br(c !== void 0 ? c : a, { owner: e }));
      }
  }
  for (const s in n) t[s] === void 0 && e.removeValue(s);
  return t;
}
const Ym = new WeakMap(),
  Y0 = Object.keys(Wo),
  vT = Y0.length,
  Qm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  yT = eh.length;
class xT {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      visualState: a,
    },
    u = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => me.render(this.render, !1, !0)));
    const { latestValues: c, renderState: h } = a;
    ((this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = h),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = u),
      (this.isControllingVariants = cl(n)),
      (this.isVariantNode = zy(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: p, ...v } = this.scrapeMotionValuesFromProps(n, {});
    for (const g in v) {
      const x = v[g];
      c[g] !== void 0 && pt(x) && (x.set(c[g], !1), Da(p) && p.add(g));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    ((this.current = t),
      Ym.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      K0.current || mT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Hc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Ym.delete(this.current),
      this.projection && this.projection.unmount(),
      kn(this.notifyUpdate),
      kn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Mi.has(t),
      s = n.on("change", (u) => {
        ((this.latestValues[t] = u),
          this.props.onUpdate && me.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      a = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      (s(), a());
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, s, a) {
    let u, c;
    for (let h = 0; h < vT; h++) {
      const p = Y0[h],
        {
          isEnabled: v,
          Feature: g,
          ProjectionNode: x,
          MeasureLayout: P,
        } = Wo[p];
      (x && (u = x),
        v(n) &&
          (!this.features[p] && g && (this.features[p] = new g(this)),
          P && (c = P)));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      u
    ) {
      this.projection = new u(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: h,
        layout: p,
        drag: v,
        dragConstraints: g,
        layoutScroll: x,
        layoutRoot: P,
      } = n;
      this.projection.setOptions({
        layoutId: h,
        layout: p,
        alwaysMeasureLayout: !!v || (g && cr(g)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof p == "string" ? p : "both",
        initialPromotionConfig: a,
        layoutScroll: x,
        layoutRoot: P,
      });
    }
    return c;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ze();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Qm.length; r++) {
      const s = Qm[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const a = t["on" + s];
      a && (this.propEventSubscriptions[s] = this.on(s, a));
    }
    ((this.prevMotionValues = gT(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial),
        r
      );
    }
    const n = {};
    for (let r = 0; r < yT; r++) {
      const s = eh[r],
        a = this.props[s];
      (Ho(a) || a === !1) && (n[s] = a);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    (n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = br(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      s =
        typeof r == "string" || typeof r == "object"
          ? (n = lh(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && s !== void 0) return s;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !pt(a)
      ? a
      : this.initialValues[t] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new yh()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Q0 extends xT {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: s },
    a,
  ) {
    let u = OS(r, t || {}, this);
    if ((s && (n && (n = s(n)), r && (r = s(r)), u && (u = s(u))), a)) {
      zS(this, r, u);
      const c = pT(this, r, u, n);
      ((n = c.transitionEnd), (r = c.target));
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function _T(e) {
  return window.getComputedStyle(e);
}
class wT extends Q0 {
  constructor() {
    (super(...arguments), (this.type = "html"));
  }
  readValueFromInstance(t, n) {
    if (Mi.has(n)) {
      const r = fh(n);
      return (r && r.default) || 0;
    } else {
      const r = _T(t),
        s = (Iy(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return I0(t, n);
  }
  build(t, n, r, s) {
    ih(t, n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return ah(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, s) {
    Hy(t, n, r, s);
  }
}
class PT extends Q0 {
  constructor() {
    (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Mi.has(n)) {
      const r = fh(n);
      return (r && r.default) || 0;
    }
    return ((n = Wy.has(n) ? n : Xd(n)), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return ze();
  }
  scrapeMotionValuesFromProps(t, n) {
    return qy(t, n);
  }
  build(t, n, r, s) {
    oh(t, n, r, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    $y(t, n, r, s);
  }
  mount(t) {
    ((this.isSVGTag = sh(t.tagName)), super.mount(t));
  }
}
const kT = (e, t) =>
    nh(e)
      ? new PT(t, { enableHardwareAcceleration: !1 })
      : new wT(t, { enableHardwareAcceleration: !0 }),
  ST = { layout: { ProjectionNode: q0, MeasureLayout: V0 } },
  CT = { ...QS, ...vk, ...nT, ...ST },
  Oe = TP((e, t) => rk(e, t, CT, kT));
function X0() {
  const e = b.useRef(!1);
  return (
    Qd(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function TT() {
  const e = X0(),
    [t, n] = b.useState(0),
    r = b.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [b.useCallback(() => me.postRender(r), [r]), t];
}
class bT extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function LT({ children: e, isPresent: t }) {
  const n = b.useId(),
    r = b.useRef(null),
    s = b.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    b.useInsertionEffect(() => {
      const { width: a, height: u, top: c, left: h } = s.current;
      if (t || !r.current || !a || !u) return;
      r.current.dataset.motionPopId = n;
      const p = document.createElement("style");
      return (
        document.head.appendChild(p),
        p.sheet &&
          p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${u}px !important;
            top: ${c}px !important;
            left: ${h}px !important;
          }
        `),
        () => {
          document.head.removeChild(p);
        }
      );
    }, [t]),
    b.createElement(
      bT,
      { isPresent: t, childRef: r, sizeRef: s },
      b.cloneElement(e, { ref: r }),
    )
  );
}
const ju = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: a,
  mode: u,
}) => {
  const c = Gy(NT),
    h = b.useId(),
    p = b.useMemo(
      () => ({
        id: h,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: (v) => {
          c.set(v, !0);
          for (const g of c.values()) if (!g) return;
          r && r();
        },
        register: (v) => (c.set(v, !1), () => c.delete(v)),
      }),
      a ? void 0 : [n],
    );
  return (
    b.useMemo(() => {
      c.forEach((v, g) => c.set(g, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    u === "popLayout" && (e = b.createElement(LT, { isPresent: n }, e)),
    b.createElement(al.Provider, { value: p }, e)
  );
};
function NT() {
  return new Map();
}
function ET(e) {
  return b.useEffect(() => () => e(), []);
}
const vi = (e) => e.key || "";
function jT(e, t) {
  e.forEach((n) => {
    const r = vi(n);
    t.set(r, n);
  });
}
function MT(e) {
  const t = [];
  return (
    b.Children.forEach(e, (n) => {
      b.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const J0 = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: s,
  presenceAffectsLayout: a = !0,
  mode: u = "sync",
}) => {
  const c = b.useContext(th).forceRender || TT()[0],
    h = X0(),
    p = MT(e);
  let v = p;
  const g = b.useRef(new Map()).current,
    x = b.useRef(v),
    P = b.useRef(new Map()).current,
    S = b.useRef(!0);
  if (
    (Qd(() => {
      ((S.current = !1), jT(p, P), (x.current = v));
    }),
    ET(() => {
      ((S.current = !0), P.clear(), g.clear());
    }),
    S.current)
  )
    return b.createElement(
      b.Fragment,
      null,
      v.map((_) =>
        b.createElement(
          ju,
          {
            key: vi(_),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: a,
            mode: u,
          },
          _,
        ),
      ),
    );
  v = [...v];
  const C = x.current.map(vi),
    j = p.map(vi),
    k = C.length;
  for (let _ = 0; _ < k; _++) {
    const w = C[_];
    j.indexOf(w) === -1 && !g.has(w) && g.set(w, void 0);
  }
  return (
    u === "wait" && g.size && (v = []),
    g.forEach((_, w) => {
      if (j.indexOf(w) !== -1) return;
      const N = P.get(w);
      if (!N) return;
      const A = C.indexOf(w);
      let I = _;
      if (!I) {
        const B = () => {
          g.delete(w);
          const O = Array.from(P.keys()).filter((W) => !j.includes(W));
          if (
            (O.forEach((W) => P.delete(W)),
            (x.current = p.filter((W) => {
              const $ = vi(W);
              return $ === w || O.includes($);
            })),
            !g.size)
          ) {
            if (h.current === !1) return;
            (c(), r && r());
          }
        };
        ((I = b.createElement(
          ju,
          {
            key: vi(N),
            isPresent: !1,
            onExitComplete: B,
            custom: t,
            presenceAffectsLayout: a,
            mode: u,
          },
          N,
        )),
          g.set(w, I));
      }
      v.splice(A, 0, I);
    }),
    (v = v.map((_) => {
      const w = _.key;
      return g.has(w)
        ? _
        : b.createElement(
            ju,
            { key: vi(_), isPresent: !0, presenceAffectsLayout: a, mode: u },
            _,
          );
    })),
    b.createElement(
      b.Fragment,
      null,
      g.size ? v : v.map((_) => b.cloneElement(_)),
    )
  );
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ex = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zT = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const RT = b.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: a,
      iconNode: u,
      ...c
    },
    h,
  ) =>
    b.createElement(
      "svg",
      {
        ref: h,
        ...zT,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: ex("lucide", s),
        ...c,
      },
      [
        ...u.map(([p, v]) => b.createElement(p, v)),
        ...(Array.isArray(a) ? a : [a]),
      ],
    ),
);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q = (e, t) => {
  const n = b.forwardRef(({ className: r, ...s }, a) =>
    b.createElement(RT, {
      ref: a,
      iconNode: t,
      className: ex(`lucide-${AT(e)}`, r),
      ...s,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OT = Q("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DT = Q("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IT = Q("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = Q("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BT = Q("Cake", [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  [
    "path",
    {
      d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
      key: "n2jgmb",
    },
  ],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h.01", key: "1bh4kh" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M17 4h.01", key: "1upcoc" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VT = Q("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FT = Q("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZT = Q("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UT = Q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HT = Q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WT = Q("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $T = Q("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = Q("Compass", [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qT = Q("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GT = Q("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KT = Q("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YT = Q("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QT = Q("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XT = Q("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JT = Q("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eb = Q("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tb = Q("LocateFixed", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nb = Q("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = Q("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ib = Q("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xh = Q("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rb = Q("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ob = Q("MicVocal", [
  [
    "path",
    {
      d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
      key: "80a601",
    },
  ],
  [
    "path",
    {
      d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
      key: "j0ngtp",
    },
  ],
  ["circle", { cx: "16", cy: "7", r: "5", key: "d08jfb" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sb = Q("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ab = Q("Music", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lb = Q("Palette", [
  [
    "circle",
    { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
  ],
  [
    "circle",
    { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
  ],
  [
    "circle",
    { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
  ],
  [
    "circle",
    { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
  ],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ub = Q("PartyPopper", [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "hbicv8",
    },
  ],
  [
    "path",
    {
      d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
      key: "1i94pl",
    },
  ],
  [
    "path",
    {
      d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
      key: "1cofks",
    },
  ],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cb = Q("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const db = Q("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hb = Q("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0",
    },
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rx = Q("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fb = Q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pb = Q("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = Q("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sx = Q("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mt = Q("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mb = Q("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gb = Q("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vb = Q("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yb = Q("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xb = Q("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = Q("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _b = Q("Utensils", [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" },
    ],
  ]),
  Wc = {};
function Ki(e, t) {
  try {
    const n = localStorage.getItem(e);
    if (n) return JSON.parse(n);
  } catch {}
  return e in Wc ? Wc[e] : t;
}
function uo(e, t) {
  Wc[e] = t;
  try {
    localStorage.setItem(e, JSON.stringify(t));
  } catch {}
}
const qi = "nexparty:users",
  Mu = "nexparty:session",
  lx = b.createContext(null);
async function Xm(e) {
  try {
    const t = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode("nexparty:" + e),
    );
    return [...new Uint8Array(t)]
      .map((n) => n.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    return "b64:" + btoa(unescape(encodeURIComponent("nexparty:" + e)));
  }
}
const Hs = ({ pass: e, ...t }) => t;
function wb({ children: e }) {
  const [t, n] = b.useState(() => {
      const a = Ki(Mu, null),
        u = a && Ki(qi, []).find((c) => c.id === a);
      return u ? Hs(u) : null;
    }),
    r = (a) => (uo(Mu, a.id), n(Hs(a)), Hs(a)),
    s = {
      user: t,
      async register({ name: a, email: u, password: c, role: h }) {
        const p = Ki(qi, []);
        if (((u = u.trim().toLowerCase()), p.some((g) => g.email === u)))
          throw new Error("Já existe uma conta com este e-mail.");
        const v = {
          id: "u" + Date.now(),
          name: a.trim(),
          email: u,
          role: h,
          pass: await Xm(c),
          created_at: new Date().toISOString(),
        };
        return (uo(qi, [...p, v]), r(v));
      },
      async login(a, u) {
        const c = Ki(qi, []).find((h) => h.email === a.trim().toLowerCase());
        if (!c || c.pass !== (await Xm(u)))
          throw new Error("E-mail ou senha incorretos.");
        return r(c);
      },
      logout() {
        (uo(Mu, null), n(null));
      },
      updateUser(a) {
        const u = Ki(qi, []).map((c) => (c.id === t.id ? { ...c, ...a } : c));
        (uo(qi, u), n(Hs(u.find((c) => c.id === t.id))));
      },
    };
  return f.jsx(lx.Provider, { value: s, children: e });
}
const zr = () => b.useContext(lx),
  Pb = () => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return !1;
    }
  },
  kb = (e) => {
    try {
      localStorage.setItem("theme", e);
    } catch {}
  };
function Sb() {
  const [e, t] = b.useState(Pb);
  return (
    b.useEffect(() => {
      (document.documentElement.classList.toggle("dark", e),
        kb(e ? "dark" : "light"));
    }, [e]),
    { isDark: e, toggleTheme: () => t((n) => !n) }
  );
}
const Cb =
    "https://horizons-cdn.hostinger.com/66529714-1076-46be-8f79-5680d423135e/logo-nexparty-y0yr5.png",
  Jm = "#ff2e7e",
  eg = [
    { to: "/", label: "Início", icon: XT },
    { to: "/explore", label: "Explorar", icon: nx },
    { to: "/avaliacoes", label: "Avaliações", icon: Mt },
    { to: "/planos", label: "Planos", icon: qT },
    { to: "/how-it-works", label: "Como Funciona", icon: $T },
    { to: "/about", label: "Sobre", icon: JT },
  ];
function tg({ list: e, scope: t, iconOnly: n }) {
  const { pathname: r } = Wt(),
    s = e.findIndex((a) => (a.to === "/" ? r === "/" : r.startsWith(a.to)));
  return f.jsx("ul", {
    className: "relative flex items-center gap-1",
    children: e.map((a, u) => {
      const c = u === s,
        h = a.icon;
      return f.jsx(
        "li",
        {
          className: "relative",
          children: f.jsxs(Pe, {
            to: a.to,
            "aria-label": a.label,
            className: `relative flex items-center justify-center gap-2 rounded-full transition-colors ${n ? "h-10 w-10" : "px-4 py-2 text-sm font-semibold whitespace-nowrap"} ${c ? "text-white" : "text-gray-600 dark:text-gray-300 hover:text-[#ff2e7e]"}`,
            children: [
              c &&
                f.jsx(f.Fragment, {
                  children: f.jsx(Oe.span, {
                    layoutId: t + "-drop",
                    transition: { type: "spring", stiffness: 380, damping: 26 },
                    className: "absolute inset-0 rounded-full",
                    style: {
                      background: `radial-gradient(circle at 30% 25%, #ff8ab4 0%, ${Jm} 45%, #e0125f 100%)`,
                      boxShadow: `0 0 22px 4px ${Jm}88, inset 0 2px 4px #ffffff88`,
                    },
                  }),
                }),
              f.jsx(h, { className: "relative z-10 h-5 w-5" }),
              !n &&
                f.jsx("span", {
                  className: "relative z-10",
                  children: a.label,
                }),
            ],
          }),
        },
        a.to,
      );
    }),
  });
}
function Tb() {
  const { isDark: e, toggleTheme: t } = Sb(),
    { user: n, logout: r } = zr(),
    s =
      "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.15)]";
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx("header", {
        className: "sticky top-0 z-50 px-3 pt-3 md:px-6",
        children: f.jsxs("nav", {
          className: `w-full mx-auto max-w-[1680px] rounded-full ${s} px-3 py-1 md:px-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3`,
          children: [
            f.jsx(Pe, {
              to: "/",
              className: "flex items-center group justify-self-start",
              children: f.jsx("img", {
                src: Cb,
                alt: "NexParty Logo",
                className:
                  "h-7 md:h-8 object-contain transition-transform group-hover:scale-105",
              }),
            }),
            f.jsx("div", {
              className: "hidden lg:block",
              children: f.jsx(tg, { list: eg, scope: "top" }),
            }),
            f.jsx("div", { className: "lg:hidden" }),
            f.jsxs("div", {
              className: "flex items-center gap-2 justify-self-end",
              children: [
                f.jsx("button", {
                  onClick: t,
                  className:
                    "h-9 w-9 rounded-full flex items-center justify-center bg-white/50 dark:bg-white/10 hover:bg-[#72cfc8]/40 transition-colors",
                  "aria-label": "Alternar tema",
                  children: e
                    ? f.jsx(mb, { className: "h-5 w-5 text-yellow-400" })
                    : f.jsx(sb, { className: "h-5 w-5 text-gray-600" }),
                }),
                n
                  ? f.jsxs(f.Fragment, {
                      children: [
                        f.jsxs(Pe, {
                          to:
                            n.role === "provider"
                              ? "/provider/dashboard"
                              : "/dashboard",
                          className:
                            "inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-full pl-1.5 pr-4 py-1.5 text-sm font-semibold text-gray-800 dark:text-gray-100 bg-white/50 dark:bg-white/10 hover:bg-[#72cfc8]/40 transition-colors",
                          children: [
                            f.jsx("span", {
                              className:
                                "h-7 w-7 rounded-full bg-[#ff2e7e] text-white flex items-center justify-center text-xs font-bold",
                              children: n.name.charAt(0).toUpperCase(),
                            }),
                            f.jsx("span", {
                              className:
                                "hidden sm:inline max-w-[110px] truncate",
                              children: n.name.split(" ")[0],
                            }),
                          ],
                        }),
                        f.jsx("button", {
                          onClick: r,
                          "aria-label": "Sair",
                          className:
                            "h-9 w-9 rounded-full flex items-center justify-center bg-white/50 dark:bg-white/10 hover:bg-[#ff2e7e] hover:text-white text-gray-600 dark:text-gray-300 transition-colors",
                          children: f.jsx(ix, { className: "h-4 w-4" }),
                        }),
                      ],
                    })
                  : f.jsxs(f.Fragment, {
                      children: [
                        f.jsx(Pe, {
                          to: "/login",
                          className:
                            "hidden md:inline-flex whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors",
                          children: "Entrar",
                        }),
                        f.jsxs(Pe, {
                          to: "/register",
                          className:
                            "inline-flex items-center gap-1 whitespace-nowrap shrink-0 rounded-full px-4 md:px-5 py-2 text-sm font-semibold text-white bg-[#e3547f] hover:bg-[#72cfc8] shadow-lg shadow-[#e3547f]/30 transition-colors",
                          children: [
                            f.jsx(db, { className: "h-4 w-4" }),
                            f.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Criar Conta Grátis",
                            }),
                            f.jsx("span", {
                              className: "sm:hidden",
                              children: "Criar",
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
      }),
      f.jsx("div", {
        className:
          "lg:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-none",
        children: f.jsx("div", {
          className: `pointer-events-auto rounded-full ${s} px-2 py-2 pb-3`,
          children: f.jsx(tg, {
            list: eg.filter((a) => a.to !== "/how-it-works"),
            scope: "bottom",
            iconOnly: !0,
          }),
        }),
      }),
    ],
  });
}
const bb =
    "https://horizons-cdn.hostinger.com/66529714-1076-46be-8f79-5680d423135e/logo-nexparty-dibRv.png",
  Lb = [
    ["/", "Início"],
    ["/about", "Sobre Nós"],
    ["/how-it-works", "Como Funciona"],
    ["/avaliacoes", "Avaliações"],
    ["/planos", "Planos e Assinaturas"],
    ["/terms-of-use", "Termos de Uso"],
    ["/privacy-policy", "Política de Privacidade"],
    ["/cancellation-policy", "Política de Cancelamento"],
  ],
  Nb = [
    "DJs & Artistas",
    "Decoração e Flores",
    "Buffets e Catering",
    "Fotografia e Vídeo",
    "Locais para Eventos",
  ],
  Eb = [
    { icon: KT, label: "Facebook", href: "https://www.facebook.com/nexparty/" },
    {
      icon: eb,
      label: "Instagram",
      href: "https://www.instagram.com/nexparty/",
    },
  ];
function jb() {
  const e = oi(),
    t =
      "text-gray-400 hover:text-[#72cfc8] transition-colors text-sm hover:translate-x-1 inline-block duration-200";
  return f.jsx("footer", {
    className:
      "bg-gray-900 text-white py-16 pb-24 md:pb-16 border-t border-gray-800",
    children: f.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        f.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12",
          children: [
            f.jsxs("div", {
              className: "space-y-4",
              children: [
                f.jsx(Pe, {
                  to: "/",
                  children: f.jsx(Oe.div, {
                    whileHover: { scale: 1.05 },
                    className: "flex items-center gap-2 mb-4",
                    children: f.jsx("img", {
                      src: bb,
                      alt: "NexParty Logo",
                      className: "h-10 object-contain brightness-0 invert",
                    }),
                  }),
                }),
                f.jsx("p", {
                  className: "text-gray-400 text-sm leading-relaxed",
                  children:
                    "A plataforma definitiva para conectar você aos melhores fornecedores de festas e eventos de São José do Rio Preto e região.",
                }),
                f.jsx("div", {
                  className: "flex gap-4 pt-4",
                  children: Eb.map(({ icon: n, label: r, href: s }) =>
                    f.jsx(
                      Oe.a,
                      {
                        href: s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        whileHover: { scale: 1.1, y: -2 },
                        "aria-label": r,
                        className:
                          "w-10 h-10 bg-gray-800 hover:bg-[#e3547f] rounded-full flex items-center justify-center transition-all group",
                        children: f.jsx(n, {
                          className:
                            "h-5 w-5 text-gray-400 group-hover:text-white transition-colors",
                        }),
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-lg font-bold mb-6 text-white/90",
                  children: "Navegação",
                }),
                f.jsx("ul", {
                  className: "space-y-3",
                  children: Lb.map(([n, r]) =>
                    f.jsx(
                      "li",
                      {
                        children: f.jsx(Pe, {
                          to: n,
                          className: t,
                          children: r,
                        }),
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-lg font-bold mb-6 text-white/90",
                  children: "Categorias",
                }),
                f.jsx("ul", {
                  className: "space-y-3",
                  children: Nb.map((n) =>
                    f.jsx(
                      "li",
                      {
                        children: f.jsx("button", {
                          onClick: () =>
                            e("/explore", { state: { category: n } }),
                          className: t + " text-left",
                          children: n,
                        }),
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-lg font-bold mb-6 text-white/90",
                  children: "Fale Conosco",
                }),
                f.jsxs("ul", {
                  className: "space-y-4",
                  children: [
                    f.jsxs("li", {
                      className: "flex items-start text-gray-400 text-sm group",
                      children: [
                        f.jsx("div", {
                          className:
                            "p-2 bg-gray-800 rounded-lg mr-3 group-hover:text-[#72cfc8] transition-colors",
                          children: f.jsx(ib, { className: "h-4 w-4" }),
                        }),
                        f.jsx("a", {
                          href: "mailto:nexparty@outlook.com",
                          className:
                            "mt-1.5 hover:text-white transition-colors",
                          children: "nexparty@outlook.com",
                        }),
                      ],
                    }),
                    f.jsxs("li", {
                      className: "flex items-start text-gray-400 text-sm group",
                      children: [
                        f.jsx("div", {
                          className:
                            "p-2 bg-gray-800 rounded-lg mr-3 group-hover:text-[#72cfc8] transition-colors",
                          children: f.jsx(xh, { className: "h-4 w-4" }),
                        }),
                        f.jsx("span", {
                          className: "mt-1.5",
                          children: "São José do Rio Preto - SP",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className:
            "border-t border-gray-800 pt-8 text-center text-gray-500 text-sm",
          children: [
            "© ",
            new Date().getFullYear(),
            " NexParty. Todos os direitos reservados.",
          ],
        }),
      ],
    }),
  });
}
function ot({ title: e, description: t, children: n }) {
  return (
    b.useEffect(() => {
      if ((e && (document.title = e), t)) {
        let r = document.querySelector("meta[name=description]");
        (r ||
          ((r = document.createElement("meta")),
          (r.name = "description"),
          document.head.appendChild(r)),
          (r.content = t));
      }
    }, [e, t]),
    f.jsxs("div", {
      className:
        "min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300",
      children: [f.jsx(Tb, {}), f.jsx("main", { children: n }), f.jsx(jb, {})],
    })
  );
}
async function Mb(e, t) {
  return t;
}
const $c = [-20.8113, -49.3758],
  Ba = [
    { key: "DJs", label: "DJs & Artistas" },
    { key: "Decoração", label: "Decoração e Flores" },
    { key: "Buffet", label: "Buffets e Catering" },
    { key: "Fotografia", label: "Fotografia e Vídeo" },
    { key: "Local", label: "Locais para Eventos" },
    { key: "Confeitaria", label: "Confeitaria e Doces" },
    { key: "Animação", label: "Animação e Shows" },
  ],
  oa = (e) => {
    var t;
    return ((t = Ba.find((n) => n.key === e)) == null ? void 0 : t.label) || e;
  },
  Ab = (e) =>
    `https://images.unsplash.com/${e}?auto=format&fit=crop&q=80&w=800`,
  zb = {
    DJs: "photo-1516450360452-9312f5e86fc7",
    Decoração: "photo-1519741497674-611481863552",
    Buffet: "photo-1555244162-803834f70033",
    Fotografia: "photo-1516035069371-29a1b244cc32",
    Local: "photo-1519167758481-83f550bb49b3",
    Confeitaria: "photo-1464349095431-e9a21285b5f3",
    Animação: "photo-1530103862676-de8c9debad1d",
  },
  ux = (e) => Ab(zb[e] || "photo-1511795409834-ef04bbd61622"),
  Rb = [
    {
      id: "p1",
      sample: !0,
      name: "DJ Pulse",
      category: "DJs",
      rating: 4.9,
      city: "São José do Rio Preto",
      lat: -20.804,
      lng: -49.382,
      price_from: 800,
      phone: "17999990001",
      description:
        "DJ para casamentos, aniversários e eventos corporativos, com som e iluminação inclusos.",
    },
    {
      id: "p2",
      sample: !0,
      name: "Atelier Flor & Festa",
      category: "Decoração",
      rating: 4.8,
      city: "São José do Rio Preto",
      lat: -20.821,
      lng: -49.37,
      price_from: 1200,
      phone: "17999990002",
      description:
        "Decoração personalizada com flores, cenografia e mobiliário para festas de todos os tamanhos.",
    },
    {
      id: "p3",
      sample: !0,
      name: "Buffet Sabor Real",
      category: "Buffet",
      rating: 4.8,
      city: "São José do Rio Preto",
      lat: -20.815,
      lng: -49.39,
      price_from: 65,
      phone: "17999990003",
      description:
        "Jantares, finger foods e churrasco com menus para restrições alimentares. Valor por pessoa.",
    },
    {
      id: "p4",
      sample: !0,
      name: "Click Eventos",
      category: "Fotografia",
      rating: 4.7,
      city: "São José do Rio Preto",
      lat: -20.796,
      lng: -49.365,
      price_from: 900,
      phone: "17999990004",
      description:
        "Cobertura fotográfica e filmagem com drone, álbum digital entregue em até 15 dias.",
    },
    {
      id: "p5",
      sample: !0,
      name: "Espaço Villa Jardim",
      category: "Local",
      rating: 4.6,
      city: "São José do Rio Preto",
      lat: -20.833,
      lng: -49.358,
      price_from: 3500,
      phone: "17999990005",
      description:
        "Salão com área verde, capacidade para 200 convidados e estacionamento.",
    },
    {
      id: "p6",
      sample: !0,
      name: "Doce Encanto",
      category: "Confeitaria",
      rating: 4.9,
      city: "São José do Rio Preto",
      lat: -20.809,
      lng: -49.379,
      price_from: 250,
      phone: "17999990006",
      description:
        "Bolos artísticos e mesas de doces para casamentos e aniversários.",
    },
    {
      id: "p7",
      sample: !0,
      name: "Magia & Cia",
      category: "Animação",
      rating: 4.5,
      city: "São José do Rio Preto",
      lat: -20.826,
      lng: -49.401,
      price_from: 450,
      phone: "17999990007",
      description: "Recreação infantil, mágicos e personagens vivos.",
    },
  ],
  cx = "nexparty:providers",
  qc = new Set(),
  dx = () => Ki(cx, []),
  Gc = () => [...dx(), ...Rb];
function Ob(e) {
  const t = dx(),
    n = t.findIndex((r) => r.id === e.id);
  (n >= 0
    ? (t[n] = { ...t[n], ...e })
    : t.unshift({ rating: 0, created_at: new Date().toISOString(), ...e }),
    uo(cx, t),
    qc.forEach((r) => r()));
}
function ns() {
  const [e, t] = b.useState(Gc);
  return (
    b.useEffect(() => {
      const n = () => t(Gc());
      return (qc.add(n), () => qc.delete(n));
    }, []),
    e
  );
}
const hx = "nexparty:reviews",
  ng = [
    {
      id: "s1",
      provider_id: "p2",
      customer_name: "Ana Silva",
      rating: 5,
      feedback_text:
        "O serviço foi incrível! A decoração estava impecável e todos os convidados amaram.",
      created_at: "2026-10-01T12:00:00Z",
      photo: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      id: "s2",
      provider_id: "p3",
      customer_name: "Carlos Souza",
      rating: 5,
      feedback_text:
        "Profissionais muito atenciosos. O buffet estava delicioso. Recomendo!",
      created_at: "2026-09-20T12:00:00Z",
      photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      id: "s3",
      provider_id: "p1",
      customer_name: "Mariana Oliveira",
      rating: 4,
      feedback_text:
        "Tudo perfeito, do início ao fim. A banda animou a festa inteira.",
      created_at: "2026-09-10T12:00:00Z",
      photo: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
  ];
let Yi = null;
const Kc = new Set();
function Va() {
  if (Yi) return Yi;
  try {
    const e = localStorage.getItem(hx);
    Yi = e ? JSON.parse(e) : ng;
  } catch {
    Yi = ng;
  }
  return Yi;
}
function fx(e) {
  Yi = e;
  try {
    localStorage.setItem(hx, JSON.stringify(e));
  } catch {}
  Kc.forEach((t) => t());
}
function Db(e) {
  const t = {
    id: "r" + Date.now(),
    created_at: new Date().toISOString(),
    ...e,
  };
  return (fx([t, ...Va()]), t);
}
function Ib(e) {
  fx(Va().filter((t) => t.id !== e));
}
function zi() {
  const [e, t] = b.useState(Va);
  return (
    b.useEffect(() => {
      const n = () => t(Va());
      return (Kc.add(n), () => Kc.delete(n));
    }, []),
    [...e].sort((n, r) => new Date(r.created_at) - new Date(n.created_at))
  );
}
function Bb(e) {
  var t;
  return (
    ((t = Gc().find((n) => n.id === e)) == null ? void 0 : t.name) || "NexParty"
  );
}
function Nr(e, t) {
  const n = t ? e.filter((u) => u.provider_id === t) : e,
    r = n.length,
    s = r ? n.reduce((u, c) => u + c.rating, 0) / r : 0,
    a = [5, 4, 3, 2, 1].map((u) => n.filter((c) => c.rating === u).length);
  return { count: r, avg: s, dist: a };
}
const Gi = [
  {
    title: "Encontre os Melhores DJs e Artistas",
    subtitle:
      "Conectamos você aos profissionais mais talentosos para garantir que a pista de dança da sua festa nunca fique vazia. De casamentos a festas corporativas, temos a trilha sonora perfeita.",
    image:
      "https://images.unsplash.com/photo-1691527385266-62295bbcabb1?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Decoração Impecável e Personalizada",
    subtitle:
      "Transforme seu evento em uma experiência visual inesquecível. Nossos decoradores parceiros criam ambientes mágicos que refletem seu estilo e encantam seus convidados.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Buffets e Gastronomia de Alta Qualidade",
    subtitle:
      "Surpreenda pelo paladar com opções de catering que vão do tradicional ao contemporâneo. Menus personalizados para satisfazer todos os gostos e restrições alimentares.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1600",
  },
];
function Vb() {
  const [e, t] = b.useState(0),
    n = oi();
  b.useEffect(() => {
    const a = setInterval(() => t((u) => (u + 1) % Gi.length), 6e3);
    return () => clearInterval(a);
  }, []);
  const r = Gi[e],
    s =
      "absolute top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-[#72cfc8] text-white backdrop-blur-sm rounded-full w-12 h-12 transition-all border border-white/10 hidden md:flex items-center justify-center";
  return f.jsx("section", {
    className: "container mx-auto px-4 py-6 md:py-8",
    children: f.jsxs("div", {
      className:
        "relative h-[550px] md:h-[650px] rounded-[16px] overflow-hidden shadow-2xl",
      children: [
        f.jsx(J0, {
          mode: "wait",
          children: f.jsxs(
            Oe.div,
            {
              initial: { opacity: 0, scale: 1.05 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.7 },
              className: "absolute inset-0",
              children: [
                f.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10",
                }),
                f.jsx("img", {
                  src: r.image,
                  alt: r.title,
                  className: "w-full h-full object-cover",
                  loading: e === 0 ? "eager" : "lazy",
                }),
                f.jsxs("div", {
                  className:
                    "absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 md:p-12",
                  children: [
                    f.jsx(Oe.h1, {
                      initial: { y: 30, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.2, duration: 0.6 },
                      className:
                        "text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg max-w-4xl",
                      children: r.title,
                    }),
                    f.jsx(Oe.p, {
                      initial: { y: 30, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.4, duration: 0.6 },
                      className:
                        "text-base md:text-xl text-white/90 mb-10 max-w-2xl drop-shadow-md leading-relaxed",
                      children: r.subtitle,
                    }),
                    f.jsxs(Oe.div, {
                      initial: { y: 30, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.6, duration: 0.6 },
                      className:
                        "flex flex-col md:flex-row items-center justify-center gap-[20px]",
                      children: [
                        f.jsxs("button", {
                          onClick: () => n("/create-event"),
                          className:
                            "w-full md:w-auto inline-flex items-center justify-center bg-[#e3547f] hover:bg-[#72cfc8] transition-colors text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl",
                          children: [
                            f.jsx(sx, { className: "mr-2 h-5 w-5" }),
                            "Criar Novo Evento",
                          ],
                        }),
                        f.jsxs("button", {
                          onClick: () => n("/explore"),
                          className:
                            "w-full md:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/50 text-white hover:bg-[#72cfc8] hover:border-[#72cfc8] px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all",
                          children: [
                            f.jsx(nx, { className: "mr-2 h-5 w-5" }),
                            "Explorar Fornecedores",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            e,
          ),
        }),
        f.jsx("button", {
          onClick: () => t((a) => (a - 1 + Gi.length) % Gi.length),
          className: s + " left-4",
          children: f.jsx(UT, { className: "h-6 w-6" }),
        }),
        f.jsx("button", {
          onClick: () => t((a) => (a + 1) % Gi.length),
          className: s + " right-4",
          children: f.jsx(HT, { className: "h-6 w-6" }),
        }),
        f.jsx("div", {
          className:
            "absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3",
          children: Gi.map((a, u) =>
            f.jsx(
              "button",
              {
                onClick: () => t(u),
                "aria-label": `Ir para o slide ${u + 1}`,
                className: `h-2 rounded-full transition-all duration-300 ${u === e ? "bg-white w-8" : "bg-white/40 hover:bg-white/60 w-2"}`,
              },
              u,
            ),
          ),
        }),
      ],
    }),
  });
}
const Fb = {
    DJs: "photo-1516450360452-9312f5e86fc7",
    Decoração: "photo-1519741497674-611481863552",
    Buffet: "photo-1555244162-803834f70033",
    Fotografia: "photo-1516035069371-29a1b244cc32",
    Local: "photo-1519167758481-83f550bb49b3",
  },
  Zb = (e) =>
    `https://images.unsplash.com/${Fb[e] || "photo-1511795409834-ef04bbd61622"}?auto=format&fit=crop&q=80&w=600`;
function Ub() {
  const e = oi(),
    t = zi(),
    n = ns(),
    r = (a) => {
      const u = Nr(t, a.id);
      return u.count ? u.avg : Number(a.rating || 0);
    },
    s = [...n].sort((a, u) => r(u) - r(a)).slice(0, 4);
  return f.jsx("section", {
    className:
      "py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300",
    children: f.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        f.jsx("h2", {
          className:
            "text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white",
          children: "Fornecedores em Destaque",
        }),
        f.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children: s.map((a) =>
            f.jsxs(
              Oe.div,
              {
                whileHover: { y: -5 },
                onClick: () => e(`/provider/${a.id}`),
                className:
                  "cursor-pointer bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700",
                children: [
                  f.jsx("img", {
                    src: a.image_url || Zb(a.category),
                    alt: a.name,
                    className: "h-44 w-full object-cover",
                    loading: "lazy",
                  }),
                  f.jsxs("div", {
                    className: "p-5",
                    children: [
                      f.jsx("h3", {
                        className:
                          "font-bold text-lg text-gray-900 dark:text-white",
                        children: a.name,
                      }),
                      f.jsx("p", {
                        className: "text-sm text-gray-500 dark:text-gray-400",
                        children: a.category,
                      }),
                      (() => {
                        const u = Nr(t, a.id);
                        return f.jsxs("div", {
                          className:
                            "flex items-center justify-between mt-3 text-sm text-gray-700 dark:text-gray-300",
                          children: [
                            f.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                f.jsx(Mt, {
                                  className:
                                    "h-4 w-4 text-yellow-400 fill-yellow-400",
                                }),
                                (u.count
                                  ? u.avg
                                  : Number(a.rating || 0)
                                ).toFixed(1),
                                f.jsxs("span", {
                                  className: "text-gray-400",
                                  children: ["(", u.count, ")"],
                                }),
                              ],
                            }),
                            f.jsx(Pe, {
                              to: "/avaliacoes",
                              onClick: (c) => c.stopPropagation(),
                              className:
                                "rounded-full bg-[#ff2e7e]/10 text-[#ff2e7e] px-3 py-1 text-xs font-semibold hover:bg-[#ff2e7e] hover:text-white transition-colors",
                              children: "Avaliar",
                            }),
                          ],
                        });
                      })(),
                    ],
                  }),
                ],
              },
              a.id,
            ),
          ),
        }),
      ],
    }),
  });
}
const Hb = [
  {
    id: "1",
    description: "Desconto de Verão",
    discount_percentage: 15,
    code: "VERAO15",
  },
  {
    id: "2",
    description: "Primeira Contratação",
    discount_percentage: 10,
    code: "BEMVINDO10",
  },
  {
    id: "3",
    description: "Pacote Completo",
    discount_percentage: 20,
    code: "FULL20",
  },
];
function Wb() {
  const [e, t] = b.useState([]);
  return (
    b.useEffect(() => {
      Mb((n) => n.from("promotions").select("*").eq("is_active", !0), Hb).then(
        t,
      );
    }, []),
    e.length
      ? f.jsx("section", {
          className:
            "py-12 bg-gradient-to-r from-[#e3547f]/5 to-[#71d0c9]/5 dark:from-[#e3547f]/10 dark:to-[#71d0c9]/10",
          children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [
              f.jsxs(Oe.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                className: "text-center mb-8",
                children: [
                  f.jsxs("div", {
                    className: "flex items-center justify-center gap-2 mb-2",
                    children: [
                      f.jsx(sx, { className: "h-5 w-5 text-[#e3547f]" }),
                      f.jsx("h2", {
                        className:
                          "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white",
                        children: "Promoções Especiais",
                      }),
                    ],
                  }),
                  f.jsx("p", {
                    className: "text-gray-600 dark:text-gray-400",
                    children:
                      "Aproveite descontos exclusivos para o seu evento",
                  }),
                ],
              }),
              f.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: e.map((n) =>
                  f.jsxs(
                    Oe.div,
                    {
                      whileHover: { scale: 1.02 },
                      className:
                        "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-[#e3547f]/20 flex flex-col items-center text-center relative overflow-hidden",
                      children: [
                        f.jsx("div", {
                          className: "absolute top-0 right-0 p-2",
                          children: f.jsxs("div", {
                            className:
                              "bg-[#e3547f] text-white text-xs font-bold px-2 py-1 rounded-bl-lg",
                            children: [n.discount_percentage, "% OFF"],
                          }),
                        }),
                        f.jsx(gb, { className: "h-8 w-8 text-[#71d0c9] mb-4" }),
                        f.jsx("h3", {
                          className:
                            "font-bold text-lg text-gray-900 dark:text-white mb-2",
                          children: n.description,
                        }),
                        f.jsxs("div", {
                          className: "mt-auto pt-4 w-full",
                          children: [
                            f.jsx("div", {
                              className:
                                "bg-gray-100 dark:bg-gray-700 rounded-lg p-3 border border-dashed border-gray-300 dark:border-gray-600",
                              children: f.jsx("span", {
                                className:
                                  "font-mono text-xl font-bold text-[#e3547f] tracking-wider",
                                children: n.code,
                              }),
                            }),
                            f.jsx("p", {
                              className: "text-xs text-gray-500 mt-2",
                              children:
                                "Use este código ao finalizar sua contratação",
                            }),
                          ],
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              }),
            ],
          }),
        })
      : null
  );
}
const $b = [
  {
    icon: ab,
    title: "DJs & Música",
    description:
      "Encontre os melhores DJs e bandas para animar sua festa. De playlists personalizadas a apresentações ao vivo, garantimos a trilha sonora ideal para seu evento.",
  },
  {
    icon: lb,
    title: "Decoração",
    description:
      "Transforme qualquer espaço em um ambiente mágico. Nossos decoradores parceiros trabalham com projetos personalizados, floristas e cenografia completa.",
  },
  {
    icon: _b,
    title: "Buffets e Catering",
    description:
      "Gastronomia de alta qualidade para todos os gostos. Opções de finger foods, jantares completos, churrascos e menus especiais para restrições alimentares.",
  },
  {
    icon: FT,
    title: "Fotografia e Vídeo",
    description:
      "Capture momentos inesquecíveis com profissionais experientes. Álbuns digitais, filmagem com drone e cobertura completa para eternizar suas memórias.",
  },
  {
    icon: BT,
    title: "Confeitaria e Doces",
    description:
      "Bolos artísticos e mesas de doces que encantam. Confeiteiros especializados em casamentos, aniversários e eventos corporativos.",
  },
  {
    icon: ob,
    title: "Animação e Shows",
    description:
      "Entretenimento garantido para todas as idades. Mágicos, recreadores, personagens vivos e atrações especiais para tornar sua festa única.",
  },
];
function qb() {
  const e = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    },
    t = {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    };
  return f.jsx("section", {
    className: "py-20 bg-white dark:bg-gray-900 transition-colors duration-300",
    children: f.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        f.jsxs(Oe.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "text-center mb-16 max-w-3xl mx-auto",
          children: [
            f.jsx("h2", {
              className:
                "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#72cfd3] to-[#e3306d] bg-clip-text text-transparent",
              children: "Nossos Serviços",
            }),
            f.jsx("p", {
              className:
                "text-lg text-gray-600 dark:text-gray-400 leading-relaxed",
              children:
                "A NexParty reúne tudo o que você precisa em um só lugar. Navegue por nossas categorias e encontre fornecedores verificados prontos para realizar o seu sonho.",
            }),
          ],
        }),
        f.jsx(Oe.div, {
          variants: e,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: $b.map(({ icon: n, title: r, description: s }) =>
            f.jsxs(
              Oe.div,
              {
                variants: t,
                whileHover: { y: -5 },
                className:
                  "bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700",
                children: [
                  f.jsx("div", {
                    className:
                      "w-16 h-16 mb-6 bg-gradient-to-r from-[#72cfd3] to-[#e3306d] rounded-2xl flex items-center justify-center shadow-lg",
                    children: f.jsx(n, { className: "h-8 w-8 text-white" }),
                  }),
                  f.jsx("h3", {
                    className:
                      "text-xl font-bold mb-3 text-gray-900 dark:text-white",
                    children: r,
                  }),
                  f.jsx("p", {
                    className:
                      "text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base",
                    children: s,
                  }),
                ],
              },
              r,
            ),
          ),
        }),
      ],
    }),
  });
}
function Gb() {
  const e = [
    { icon: VT, value: "0", label: "Eventos" },
    { icon: ax, value: "1", label: "Fornecedores" },
    { icon: yb, value: "100%", label: "Satisfação" },
  ];
  return f.jsx("section", {
    className: "py-12 bg-gray-50 dark:bg-gray-800",
    children: f.jsx("div", {
      className: "container mx-auto px-4",
      children: f.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8",
        children: e.map(({ icon: t, value: n, label: r }, s) =>
          f.jsxs(
            Oe.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: s * 0.1 },
              className:
                "bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow",
              children: [
                f.jsx("div", {
                  className:
                    "w-16 h-16 bg-[#e3547f] rounded-2xl flex items-center justify-center mb-4",
                  children: f.jsx(t, {
                    className: "h-8 w-8 text-white",
                    strokeWidth: 1.5,
                  }),
                }),
                f.jsx("div", {
                  className:
                    "text-4xl font-bold text-gray-900 dark:text-white mb-2",
                  children: n,
                }),
                f.jsx("div", {
                  className: "text-gray-500 dark:text-gray-400 font-medium",
                  children: r,
                }),
              ],
            },
            r,
          ),
        ),
      }),
    }),
  });
}
function Kb() {
  const e = zi()
      .filter((s) => s.rating >= 4)
      .slice(0, 8),
    [t, n] = b.useState(0);
  if (
    (b.useEffect(() => {
      if (e.length > 1) {
        const s = setInterval(() => n((a) => (a + 1) % e.length), 5e3);
        return () => clearInterval(s);
      }
    }, [e.length]),
    !e.length)
  )
    return null;
  const r = e[t % e.length];
  return f.jsx("section", {
    className: "py-20 bg-white dark:bg-gray-900",
    children: f.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        f.jsxs("div", {
          className: "text-center mb-12",
          children: [
            f.jsx("h2", {
              className: "text-3xl md:text-4xl font-bold mb-4 text-[#e3547f]",
              children: "O Que Dizem Nossos Clientes",
            }),
            f.jsx("p", {
              className: "text-lg text-gray-600 dark:text-gray-400",
              children: "Histórias reais de festas inesquecíveis",
            }),
          ],
        }),
        f.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: f.jsxs("div", {
            className:
              "relative bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700",
            children: [
              f.jsx(hb, {
                className: "absolute top-8 left-8 h-12 w-12 text-[#e3547f]/20",
              }),
              f.jsxs(
                Oe.div,
                {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.5 },
                  className: "flex flex-col items-center text-center",
                  children: [
                    f.jsx("div", {
                      className:
                        "h-24 w-24 mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md bg-[#e3547f] text-white text-xl font-bold flex items-center justify-center",
                      children: r.photo
                        ? f.jsx("img", {
                            src: r.photo,
                            alt: r.customer_name,
                            className: "h-full w-full object-cover",
                          })
                        : r.customer_name.charAt(0).toUpperCase(),
                    }),
                    f.jsx("div", {
                      className: "flex mb-4",
                      children: [...Array(5)].map((s, a) =>
                        f.jsx(
                          Mt,
                          {
                            className: `h-5 w-5 ${a < r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`,
                          },
                          a,
                        ),
                      ),
                    }),
                    f.jsxs("blockquote", {
                      className:
                        "text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-medium italic mb-6 leading-relaxed",
                      children: ['"', r.feedback_text, '"'],
                    }),
                    f.jsx("cite", {
                      className: "not-italic font-bold text-lg text-[#e3547f]",
                      children: r.customer_name,
                    }),
                  ],
                },
                r.id,
              ),
              f.jsx("div", {
                className: "flex justify-center gap-2 mt-8",
                children: e.map((s, a) =>
                  f.jsx(
                    "button",
                    {
                      onClick: () => n(a),
                      "aria-label": `Avaliação ${a + 1}`,
                      className: `h-2 rounded-full transition-all duration-300 ${a === t % e.length ? "w-8 bg-[#e3547f]" : "w-2 bg-gray-300 dark:bg-gray-600"}`,
                    },
                    a,
                  ),
                ),
              }),
              f.jsx("div", {
                className: "text-center mt-8",
                children: f.jsx(Pe, {
                  to: "/avaliacoes",
                  className:
                    "inline-block rounded-full bg-[#ff2e7e] hover:bg-[#72cfc8] transition-colors text-white font-semibold px-8 py-3 shadow-lg shadow-[#ff2e7e]/30",
                  children: "Ver todas e avaliar",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Yb() {
  return f.jsxs(ot, {
    title: "NexParty - Os Melhores Fornecedores para Sua Festa",
    description:
      "Encontre os melhores fornecedores de festas e eventos. DJs, decoradores, buffets e muito mais em um só lugar.",
    children: [
      f.jsx(Vb, {}),
      f.jsx("div", {
        className: "bg-gray-50 dark:bg-gray-800/50 py-16",
        children: f.jsxs("div", {
          className: "container mx-auto px-4 text-center max-w-4xl",
          children: [
            f.jsx("h2", {
              className:
                "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6",
              children: "A Plataforma Completa para seu Evento",
            }),
            f.jsx("p", {
              className:
                "text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8",
              children:
                "A NexParty simplifica o processo de organizar eventos, conectando você diretamente aos melhores profissionais do mercado. Nossa missão é garantir segurança, qualidade e praticidade, permitindo que você foque no que realmente importa: celebrar os momentos especiais. Com ferramentas de busca avançada, avaliações reais e negociação direta, somos a escolha número um para quem busca excelência.",
            }),
          ],
        }),
      }),
      f.jsx(Ub, {}),
      f.jsx(Wb, {}),
      f.jsx(qb, {}),
      f.jsx(Gb, {}),
      f.jsx(Kb, {}),
      f.jsxs("div", {
        className: "container mx-auto px-4 py-16 text-center",
        children: [
          f.jsx("h2", {
            className: "text-3xl font-bold text-gray-900 dark:text-white mb-6",
            children: "Pronto para começar?",
          }),
          f.jsx("p", {
            className:
              "text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto",
            children:
              "Junte-se a milhares de usuários que já transformaram seus eventos com a NexParty. O cadastro é gratuito e rápido.",
          }),
        ],
      }),
    ],
  });
}
const Qb = [
    [
      QT,
      "Paixão",
      "Amamos celebrar a vida",
      "bg-[#e3547f]/10 hover:bg-[#e3547f]/20",
      "text-[#e3547f]",
    ],
    [
      DT,
      "Excelência",
      "Qualidade garantida",
      "bg-[#71d0c9]/10 hover:bg-[#71d0c9]/20",
      "text-[#71d0c9]",
    ],
    [
      ax,
      "Comunidade",
      "Conexões reais",
      "bg-purple-100 dark:bg-purple-900/20",
      "text-purple-500",
    ],
    [
      ox,
      "Segurança",
      "Confiança total",
      "bg-blue-100 dark:bg-blue-900/20",
      "text-blue-500",
    ],
  ],
  Xb = [
    [
      "Foco no Cliente",
      "Desenvolvemos cada funcionalidade pensando na sua experiência. Desde a busca intuitiva até o pagamento facilitado, tudo é feito para que você tenha tranquilidade.",
    ],
    [
      "Inovação Constante",
      "Estamos sempre evoluindo. Utilizamos tecnologia de ponta para oferecer recomendações inteligentes, mapas interativos e ferramentas de gestão de eventos.",
    ],
    [
      "Transparência",
      "Sem taxas escondidas. Comunicação clara entre clientes e fornecedores. Avaliações reais. Construímos uma plataforma baseada na honestidade.",
    ],
  ];
function Jb() {
  return f.jsxs(ot, {
    title: "Sobre Nós - NexParty",
    description:
      "Conheça a história e a missão da NexParty, a plataforma que conecta clientes e fornecedores de eventos.",
    children: [
      f.jsx("section", {
        className:
          "py-20 bg-gradient-to-r from-[#e3547f]/10 to-[#71d0c9]/10 text-center",
        children: f.jsxs("div", {
          className: "container mx-auto px-4",
          children: [
            f.jsxs("h1", {
              className:
                "text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white",
              children: [
                "Sobre a ",
                f.jsx("span", {
                  className:
                    "bg-gradient-to-r from-[#72cfd3] to-[#e3306d] bg-clip-text text-transparent",
                  children: "NexParty",
                }),
              ],
            }),
            f.jsx("p", {
              className:
                "text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
              children:
                "Transformando a maneira como as pessoas celebram, conectando sonhos a realizadores.",
            }),
          ],
        }),
      }),
      f.jsx("section", {
        className: "py-20 bg-white dark:bg-gray-900",
        children: f.jsxs("div", {
          className:
            "container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-6xl",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("h2", {
                  className:
                    "text-3xl font-bold mb-6 text-gray-900 dark:text-white",
                  children: "Nossa História e Missão",
                }),
                f.jsx("p", {
                  className:
                    "text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed",
                  children:
                    "A NexParty nasceu da observação de uma necessidade latente no mercado de eventos: a dificuldade de encontrar fornecedores confiáveis e de gerenciar os múltiplos detalhes de uma festa em um só lugar. Fundada com a visão de simplificar a celebração, nossa plataforma atua como uma ponte segura e eficiente entre quem sonha e quem realiza.",
                }),
                f.jsx("p", {
                  className:
                    "text-lg text-gray-700 dark:text-gray-300 leading-relaxed",
                  children:
                    "Nossa missão é democratizar o acesso a serviços de eventos de alta qualidade, oferecendo ferramentas tecnológicas que empoderam tanto os anfitriões quanto os prestadores de serviço. Acreditamos que cada celebração é única e merece ser planejada com cuidado, transparência e alegria.",
                }),
              ],
            }),
            f.jsx("div", {
              className: "grid grid-cols-2 gap-4",
              children: Qb.map(([e, t, n, r, s]) =>
                f.jsxs(
                  Oe.div,
                  {
                    whileHover: { y: -4 },
                    className: `${r} p-6 rounded-2xl text-center transition-colors`,
                    children: [
                      f.jsx(e, { className: `h-10 w-10 ${s} mx-auto mb-3` }),
                      f.jsx("h3", {
                        className: "font-bold text-gray-900 dark:text-white",
                        children: t,
                      }),
                      f.jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: n,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      f.jsx("section", {
        className: "py-20 bg-gray-50 dark:bg-gray-800",
        children: f.jsxs("div", {
          className: "container mx-auto px-4 max-w-6xl",
          children: [
            f.jsx("h2", {
              className:
                "text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white",
              children: "Por Que Escolher a NexParty?",
            }),
            f.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: Xb.map(([e, t]) =>
                f.jsxs(
                  "div",
                  {
                    className:
                      "bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm",
                    children: [
                      f.jsx("h3", {
                        className: "text-xl font-bold mb-3 text-[#e3547f]",
                        children: e,
                      }),
                      f.jsx("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: t,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
            f.jsxs("div", {
              className: "text-center mt-16",
              children: [
                f.jsx("p", {
                  className: "font-bold text-lg text-gray-900 dark:text-white",
                  children: "Leonardo A. Almeida",
                }),
                f.jsx("p", {
                  className: "text-gray-500",
                  children: "Fundador e CEO",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const eL = [
    [
      "1. Crie sua Conta",
      "O cadastro é rápido, gratuito e seguro. Preencha seus dados básicos para acessar todas as funcionalidades da plataforma e salvar seus eventos favoritos.",
    ],
    [
      "2. Explore e Filtre",
      "Utilize nossa busca inteligente para encontrar fornecedores por categoria, localização, preço e avaliação. Veja fotos reais e leia comentários de outros clientes.",
    ],
    [
      "3. Conecte-se",
      "Entre em contato direto com os fornecedores através do nosso chat seguro. Tire dúvidas, peça orçamentos personalizados e negocie condições.",
    ],
    [
      "4. Celebre e Avalie",
      "Após o evento, avalie os serviços contratados. Seu feedback ajuda a manter a qualidade da comunidade NexParty e auxilia futuros anfitriões.",
    ],
  ],
  tL = [
    [
      "1. Cadastre seu Serviço",
      "Crie um perfil profissional atraente. Adicione fotos de alta qualidade, descreva seus serviços detalhadamente e defina sua área de atuação.",
    ],
    [
      "2. Gerencie sua Agenda",
      "Mantenha sua disponibilidade atualizada no calendário da plataforma para receber solicitações apenas nos dias em que você pode atender.",
    ],
    [
      "3. Receba Pedidos",
      "Seja notificado instantaneamente sobre novos clientes interessados. Responda rapidamente para aumentar suas chances de fechamento.",
    ],
    [
      "4. Cresça seu Negócio",
      "Utilize nossos planos premium para ganhar destaque nas buscas, acessar relatórios de desempenho e conquistar mais clientes.",
    ],
  ];
function nL() {
  const [e, t] = b.useState("client"),
    n = e === "client" ? eL : tL,
    r = (s) =>
      `px-6 py-3 rounded-full font-semibold transition-colors ${s ? "bg-[#e3547f] text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#72cfc8] hover:text-white"}`;
  return f.jsx(ot, {
    title: "Como Funciona - NexParty",
    description:
      "Guia passo a passo para clientes e fornecedores. Veja como é simples planejar ou divulgar eventos na NexParty.",
    children: f.jsx("section", {
      className: "py-20 bg-gray-50 dark:bg-gray-900",
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-5xl",
        children: [
          f.jsxs("div", {
            className: "text-center mb-12",
            children: [
              f.jsxs("h1", {
                className:
                  "text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white",
                children: [
                  "Como Funciona a ",
                  f.jsx("span", {
                    className:
                      "bg-gradient-to-r from-[#72cfd3] to-[#e3306d] bg-clip-text text-transparent",
                    children: "NexParty",
                  }),
                ],
              }),
              f.jsx("p", {
                className:
                  "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                children:
                  "A NexParty foi desenhada para facilitar a vida de quem organiza e de quem fornece. Entenda como nossa plataforma funciona para cada perfil.",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-3 justify-center mb-12",
            children: [
              f.jsx("button", {
                className: r(e === "client"),
                onClick: () => t("client"),
                children: "Quero Organizar meu Evento",
              }),
              f.jsx("button", {
                className: r(e === "provider"),
                onClick: () => t("provider"),
                children: "Quero Divulgar meus Serviços",
              }),
            ],
          }),
          f.jsx("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: n.map(([s, a], u) =>
              f.jsxs(
                Oe.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: u * 0.1 },
                  className:
                    "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700",
                  children: [
                    f.jsx("h3", {
                      className: "text-xl font-bold mb-3 text-[#e3547f]",
                      children: s,
                    }),
                    f.jsx("p", {
                      className:
                        "text-gray-600 dark:text-gray-400 leading-relaxed",
                      children: a,
                    }),
                  ],
                },
                e + u,
              ),
            ),
          }),
          f.jsxs("div", {
            className: "text-center mt-16",
            children: [
              f.jsx("h2", {
                className:
                  "text-2xl font-bold mb-3 text-gray-900 dark:text-white",
                children: "Ainda tem dúvidas?",
              }),
              f.jsx("p", {
                className: "text-gray-600 dark:text-gray-400 mb-6",
                children:
                  "Nossa equipe de suporte está pronta para ajudar você em cada etapa do processo.",
              }),
              f.jsx("a", {
                href: "mailto:nexparty@outlook.com",
                className:
                  "inline-block bg-[#e3547f] hover:bg-[#72cfc8] transition-colors text-white font-semibold px-8 py-3 rounded-full",
                children: "Fale Conosco",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const iL = [
    {
      name: "Iniciante",
      price: "R$ 10",
      description:
        "Ideal para freelancers e pequenos prestadores que estão começando.",
      features: [
        "Perfil básico na plataforma",
        "Até 5 fotos no portfólio",
        "Recebimento de até 10 orçamentos/mês",
        "Suporte por email",
        "Visibilidade local",
      ],
      color: "text-gray-900 dark:text-white",
    },
    {
      name: "Profissional",
      price: "R$ 25",
      description:
        "Perfeito para empresas em crescimento que buscam mais volume de clientes.",
      features: [
        "Destaque nos resultados de busca",
        "Até 20 fotos no portfólio",
        "Orçamentos ilimitados",
        "Selo de Fornecedor Verificado",
        "Analytics básico de visitas",
      ],
      color: "text-[#72cfd3]",
      highlight: !0,
    },
    {
      name: "Empresarial",
      price: "R$ 49",
      description:
        "A solução completa para dominar o mercado de eventos na sua região.",
      features: [
        "Topo das buscas garantido (Ads)",
        "Fotos e vídeos ilimitados",
        "Gerente de conta dedicado",
        "Destaque na Home e Newsletter",
        "Relatórios avançados de conversão",
      ],
      color: "text-[#e3306d]",
    },
  ],
  rL = [
    [
      "Posso cancelar minha assinatura a qualquer momento?",
      "Sim, nossos planos não possuem fidelidade. Você pode cancelar a qualquer momento através do seu painel de controle, e a assinatura permanecerá ativa até o fim do ciclo pago.",
    ],
    [
      "Como funciona o destaque nos resultados?",
      "Assinantes dos planos Profissional e Empresarial aparecem antes dos perfis gratuitos nas buscas. O plano Empresarial garante rotação no topo da página e na página inicial.",
    ],
    [
      "Preciso pagar comissão sobre os serviços fechados?",
      "Não! A NexParty não cobra comissão sobre os contratos fechados. O valor da assinatura é o único custo para manter seu perfil ativo e visível.",
    ],
    [
      "Posso alterar meu plano depois?",
      "Sim, o upgrade ou downgrade pode ser feito a qualquer momento. A cobrança será ajustada proporcionalmente no próximo ciclo.",
    ],
  ];
function oL() {
  const [e, t] = b.useState("");
  return f.jsx(ot, {
    title: "Planos e Preços - NexParty",
    description:
      "Confira nossos planos para fornecedores. Aumente sua visibilidade e conquiste mais clientes com a NexParty.",
    children: f.jsx("section", {
      className: "py-20 bg-gray-50 dark:bg-gray-900",
      children: f.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          f.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-16",
            children: [
              f.jsx("h1", {
                className:
                  "text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white",
                children: "Invista no Crescimento do Seu Negócio",
              }),
              f.jsx("p", {
                className: "text-lg text-gray-600 dark:text-gray-400",
                children:
                  "Milhares de clientes buscam serviços como o seu todos os dias. Escolha o plano ideal e destaque-se na maior vitrine de eventos da região.",
              }),
            ],
          }),
          f.jsx("div", {
            className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",
            children: iL.map((n, r) =>
              f.jsxs(
                Oe.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { delay: r * 0.1 },
                  className: `relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border ${n.highlight ? "border-[#72cfd3] shadow-xl md:scale-105" : "border-gray-100 dark:border-gray-700"}`,
                  children: [
                    n.highlight &&
                      f.jsx("span", {
                        className:
                          "absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e3547f] text-white text-xs font-bold px-3 py-1 rounded-full",
                        children: "Mais Popular",
                      }),
                    f.jsx("h3", {
                      className: `text-2xl font-bold ${n.color}`,
                      children: n.name,
                    }),
                    f.jsxs("div", {
                      className: "my-4",
                      children: [
                        f.jsx("span", {
                          className:
                            "text-4xl font-bold text-gray-900 dark:text-white",
                          children: n.price,
                        }),
                        f.jsx("span", {
                          className: "text-gray-500",
                          children: "/mês",
                        }),
                      ],
                    }),
                    f.jsx("p", {
                      className:
                        "text-gray-600 dark:text-gray-400 mb-6 text-sm",
                      children: n.description,
                    }),
                    f.jsx("ul", {
                      className: "space-y-3 mb-8",
                      children: n.features.map((s) =>
                        f.jsxs(
                          "li",
                          {
                            className:
                              "flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300",
                            children: [
                              f.jsx(ZT, {
                                className: "h-5 w-5 text-[#72cfc8] shrink-0",
                              }),
                              s,
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                    f.jsxs("button", {
                      onClick: () =>
                        t(
                          "Faça login ou cadastre-se como fornecedor para assinar um plano.",
                        ),
                      className: `w-full py-3 rounded-full font-semibold transition-colors ${n.highlight ? "bg-[#e3547f] hover:bg-[#72cfc8] text-white" : "border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-[#72cfc8] hover:text-white hover:border-[#72cfc8]"}`,
                      children: ["Assinar ", n.name],
                    }),
                  ],
                },
                n.name,
              ),
            ),
          }),
          e &&
            f.jsx("p", {
              className: "text-center mt-8 text-[#e3547f] font-medium",
              children: e,
            }),
          f.jsxs("div", {
            className: "max-w-3xl mx-auto mt-20 space-y-4",
            children: [
              f.jsx("h2", {
                className:
                  "text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white",
                children: "Perguntas Frequentes",
              }),
              rL.map(([n, r]) =>
                f.jsxs(
                  "details",
                  {
                    className:
                      "bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700",
                    children: [
                      f.jsx("summary", {
                        className:
                          "font-semibold cursor-pointer text-gray-900 dark:text-white",
                        children: n,
                      }),
                      f.jsx("p", {
                        className:
                          "mt-3 text-gray-600 dark:text-gray-400 text-sm",
                        children: r,
                      }),
                    ],
                  },
                  n,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function Au({ value: e, onChange: t, size: n = "h-5 w-5" }) {
  return f.jsx("div", {
    className: "flex gap-1",
    children: [1, 2, 3, 4, 5].map((r) => {
      const s = t ? "button" : "span";
      return f.jsx(
        s,
        {
          type: t ? "button" : void 0,
          onClick: t ? () => t(r) : void 0,
          "aria-label": t ? `${r} estrelas` : void 0,
          children: f.jsx(Mt, {
            className: `${n} ${r <= e ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"} ${t ? "hover:scale-125 transition-transform" : ""}`,
          }),
        },
        r,
      );
    }),
  });
}
function sL() {
  var j;
  const e = zi(),
    t = ns(),
    { user: n } = zr(),
    r = Wt(),
    [s, a] = b.useState("all"),
    [u, c] = b.useState({
      provider_id: ((j = r.state) == null ? void 0 : j.provider_id) || t[0].id,
      customer_name: (n == null ? void 0 : n.name) || "",
      rating: 5,
      feedback_text: "",
    }),
    [h, p] = b.useState(""),
    [v, g] = b.useState(!1),
    x = s === "all" ? e : e.filter((k) => k.provider_id === s),
    P = Nr(e, s === "all" ? null : s),
    S =
      "w-full rounded-2xl bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#ff2e7e]/60",
    C = (k) => {
      if ((k.preventDefault(), g(!1), u.customer_name.trim().length < 2))
        return p("Informe seu nome.");
      if (u.feedback_text.trim().length < 10)
        return p("Escreva um comentário com pelo menos 10 caracteres.");
      (p(""),
        Db({
          ...u,
          customer_name: u.customer_name.trim(),
          feedback_text: u.feedback_text.trim(),
          mine: !0,
          user_id: n == null ? void 0 : n.id,
        }),
        c({ ...u, feedback_text: "", rating: 5 }),
        g(!0));
    };
  return f.jsx(ot, {
    title: "Avaliações - NexParty",
    description:
      "Veja e publique avaliações de fornecedores de festas e eventos na NexParty.",
    children: f.jsx("section", {
      className:
        "py-16 bg-gradient-to-br from-[#e3547f]/10 via-transparent to-[#71d0c9]/10 min-h-screen",
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-6xl",
        children: [
          f.jsxs("div", {
            className: "text-center mb-12",
            children: [
              f.jsxs("h1", {
                className:
                  "text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white",
                children: [
                  "Avaliações da ",
                  f.jsx("span", {
                    className:
                      "bg-gradient-to-r from-[#72cfd3] to-[#e3306d] bg-clip-text text-transparent",
                    children: "Comunidade",
                  }),
                ],
              }),
              f.jsx("p", {
                className:
                  "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                children:
                  "Histórias reais de quem já contratou. Conte também como foi a sua experiência.",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "grid lg:grid-cols-3 gap-8",
            children: [
              f.jsxs("div", {
                className: "space-y-8 lg:sticky lg:top-28 self-start",
                children: [
                  f.jsxs("div", {
                    className:
                      "rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl p-6",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-end gap-3 mb-4",
                        children: [
                          f.jsx("span", {
                            className:
                              "text-5xl font-bold text-gray-900 dark:text-white",
                            children: P.avg ? P.avg.toFixed(1) : "–",
                          }),
                          f.jsxs("div", {
                            className: "pb-1",
                            children: [
                              f.jsx(Au, { value: Math.round(P.avg) }),
                              f.jsxs("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: [
                                  P.count,
                                  " avaliaç",
                                  P.count === 1 ? "ão" : "ões",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      [5, 4, 3, 2, 1].map((k, _) =>
                        f.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center gap-2 text-xs text-gray-500 mb-1.5",
                            children: [
                              f.jsx("span", { className: "w-3", children: k }),
                              f.jsx(Mt, {
                                className:
                                  "h-3 w-3 text-yellow-400 fill-yellow-400",
                              }),
                              f.jsx("div", {
                                className:
                                  "flex-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden",
                                children: f.jsx("div", {
                                  className: "h-full rounded-full bg-[#ff2e7e]",
                                  style: {
                                    width: P.count
                                      ? `${(P.dist[_] / P.count) * 100}%`
                                      : 0,
                                  },
                                }),
                              }),
                              f.jsx("span", {
                                className: "w-4 text-right",
                                children: P.dist[_],
                              }),
                            ],
                          },
                          k,
                        ),
                      ),
                    ],
                  }),
                  f.jsxs("form", {
                    onSubmit: C,
                    className:
                      "rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl p-6 space-y-4",
                    children: [
                      f.jsx("h2", {
                        className:
                          "text-xl font-bold text-gray-900 dark:text-white",
                        children: "Deixe sua avaliação",
                      }),
                      f.jsx("select", {
                        className: S,
                        value: u.provider_id,
                        onChange: (k) =>
                          c({ ...u, provider_id: k.target.value }),
                        children: t.map((k) =>
                          f.jsxs(
                            "option",
                            {
                              value: k.id,
                              children: [k.name, " — ", k.category],
                            },
                            k.id,
                          ),
                        ),
                      }),
                      f.jsx("input", {
                        className: S,
                        placeholder: "Seu nome",
                        maxLength: 60,
                        value: u.customer_name,
                        onChange: (k) =>
                          c({ ...u, customer_name: k.target.value }),
                      }),
                      f.jsx(Au, {
                        value: u.rating,
                        onChange: (k) => c({ ...u, rating: k }),
                        size: "h-7 w-7",
                      }),
                      f.jsx("textarea", {
                        className: S + " min-h-[110px] resize-none",
                        placeholder: "Como foi o serviço?",
                        maxLength: 500,
                        value: u.feedback_text,
                        onChange: (k) =>
                          c({ ...u, feedback_text: k.target.value }),
                      }),
                      h &&
                        f.jsx("p", {
                          className: "text-sm text-red-500",
                          children: h,
                        }),
                      v &&
                        f.jsx("p", {
                          className: "text-sm text-emerald-500",
                          children: "Avaliação publicada. Obrigado!",
                        }),
                      f.jsxs("button", {
                        className:
                          "w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#e3547f] hover:bg-[#72cfc8] transition-colors text-white font-semibold py-3 shadow-lg shadow-[#e3547f]/30",
                        children: [
                          f.jsx(pb, { className: "h-4 w-4" }),
                          "Publicar avaliação",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "lg:col-span-2",
                children: [
                  f.jsx("div", {
                    className: "flex flex-wrap gap-2 mb-6",
                    children: [{ id: "all", name: "Todos" }, ...t].map((k) =>
                      f.jsx(
                        "button",
                        {
                          onClick: () => a(k.id),
                          className: `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${s === k.id ? "bg-[#ff2e7e] text-white shadow-lg shadow-[#ff2e7e]/40" : "bg-white/60 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-[#72cfc8]/40"}`,
                          children: k.name,
                        },
                        k.id,
                      ),
                    ),
                  }),
                  f.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      f.jsx(J0, {
                        initial: !1,
                        children: x.map((k) =>
                          f.jsx(
                            Oe.article,
                            {
                              layout: !0,
                              initial: { opacity: 0, y: 16 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, scale: 0.95 },
                              className:
                                "rounded-3xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-md p-6",
                              children: f.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [
                                  f.jsx("div", {
                                    className:
                                      "h-12 w-12 shrink-0 rounded-full overflow-hidden bg-[#e3547f] text-white font-bold flex items-center justify-center",
                                    children: k.photo
                                      ? f.jsx("img", {
                                          src: k.photo,
                                          alt: "",
                                          className:
                                            "h-full w-full object-cover",
                                        })
                                      : k.customer_name.charAt(0).toUpperCase(),
                                  }),
                                  f.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      f.jsxs("div", {
                                        className:
                                          "flex flex-wrap items-center justify-between gap-2",
                                        children: [
                                          f.jsxs("div", {
                                            children: [
                                              f.jsx("p", {
                                                className:
                                                  "font-bold text-gray-900 dark:text-white",
                                                children: k.customer_name,
                                              }),
                                              f.jsxs("p", {
                                                className:
                                                  "text-xs text-gray-500",
                                                children: [
                                                  "sobre ",
                                                  f.jsx("span", {
                                                    className:
                                                      "text-[#e3547f] font-semibold",
                                                    children: Bb(k.provider_id),
                                                  }),
                                                  " · ",
                                                  new Date(
                                                    k.created_at,
                                                  ).toLocaleDateString("pt-BR"),
                                                ],
                                              }),
                                            ],
                                          }),
                                          f.jsx(Au, { value: k.rating }),
                                        ],
                                      }),
                                      f.jsx("p", {
                                        className:
                                          "mt-3 text-gray-700 dark:text-gray-300 leading-relaxed break-words",
                                        children: k.feedback_text,
                                      }),
                                      (k.mine || (n && k.user_id === n.id)) &&
                                        f.jsxs("button", {
                                          onClick: () => Ib(k.id),
                                          className:
                                            "mt-3 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-red-500",
                                          children: [
                                            f.jsx(vb, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            "Excluir minha avaliação",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            k.id,
                          ),
                        ),
                      }),
                      !x.length &&
                        f.jsx("p", {
                          className: "text-center text-gray-500 py-12",
                          children:
                            "Ainda não há avaliações para este fornecedor. Seja o primeiro!",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var Yc = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (e, t) {
  (function (n, r) {
    r(t);
  })(V_, function (n) {
    var r = "1.9.4";
    function s(i) {
      var o, l, d, m;
      for (l = 1, d = arguments.length; l < d; l++) {
        m = arguments[l];
        for (o in m) i[o] = m[o];
      }
      return i;
    }
    var a =
      Object.create ||
      (function () {
        function i() {}
        return function (o) {
          return ((i.prototype = o), new i());
        };
      })();
    function u(i, o) {
      var l = Array.prototype.slice;
      if (i.bind) return i.bind.apply(i, l.call(arguments, 1));
      var d = l.call(arguments, 2);
      return function () {
        return i.apply(o, d.length ? d.concat(l.call(arguments)) : arguments);
      };
    }
    var c = 0;
    function h(i) {
      return ("_leaflet_id" in i || (i._leaflet_id = ++c), i._leaflet_id);
    }
    function p(i, o, l) {
      var d, m, y, T;
      return (
        (T = function () {
          ((d = !1), m && (y.apply(l, m), (m = !1)));
        }),
        (y = function () {
          d
            ? (m = arguments)
            : (i.apply(l, arguments), setTimeout(T, o), (d = !0));
        }),
        y
      );
    }
    function v(i, o, l) {
      var d = o[1],
        m = o[0],
        y = d - m;
      return i === d && l ? i : ((((i - m) % y) + y) % y) + m;
    }
    function g() {
      return !1;
    }
    function x(i, o) {
      if (o === !1) return i;
      var l = Math.pow(10, o === void 0 ? 6 : o);
      return Math.round(i * l) / l;
    }
    function P(i) {
      return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
    }
    function S(i) {
      return P(i).split(/\s+/);
    }
    function C(i, o) {
      Object.prototype.hasOwnProperty.call(i, "options") ||
        (i.options = i.options ? a(i.options) : {});
      for (var l in o) i.options[l] = o[l];
      return i.options;
    }
    function j(i, o, l) {
      var d = [];
      for (var m in i)
        d.push(
          encodeURIComponent(l ? m.toUpperCase() : m) +
            "=" +
            encodeURIComponent(i[m]),
        );
      return (!o || o.indexOf("?") === -1 ? "?" : "&") + d.join("&");
    }
    var k = /\{ *([\w_ -]+) *\}/g;
    function _(i, o) {
      return i.replace(k, function (l, d) {
        var m = o[d];
        if (m === void 0)
          throw new Error("No value provided for variable " + l);
        return (typeof m == "function" && (m = m(o)), m);
      });
    }
    var w =
      Array.isArray ||
      function (i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      };
    function N(i, o) {
      for (var l = 0; l < i.length; l++) if (i[l] === o) return l;
      return -1;
    }
    var A = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function I(i) {
      return window["webkit" + i] || window["moz" + i] || window["ms" + i];
    }
    var B = 0;
    function O(i) {
      var o = +new Date(),
        l = Math.max(0, 16 - (o - B));
      return ((B = o + l), window.setTimeout(i, l));
    }
    var W = window.requestAnimationFrame || I("RequestAnimationFrame") || O,
      $ =
        window.cancelAnimationFrame ||
        I("CancelAnimationFrame") ||
        I("CancelRequestAnimationFrame") ||
        function (i) {
          window.clearTimeout(i);
        };
    function se(i, o, l) {
      if (l && W === O) i.call(o);
      else return W.call(window, u(i, o));
    }
    function ce(i) {
      i && $.call(window, i);
    }
    var Ue = {
      __proto__: null,
      extend: s,
      create: a,
      bind: u,
      get lastId() {
        return c;
      },
      stamp: h,
      throttle: p,
      wrapNum: v,
      falseFn: g,
      formatNum: x,
      trim: P,
      splitWords: S,
      setOptions: C,
      getParamString: j,
      template: _,
      isArray: w,
      indexOf: N,
      emptyImageUrl: A,
      requestFn: W,
      cancelFn: $,
      requestAnimFrame: se,
      cancelAnimFrame: ce,
    };
    function he() {}
    ((he.extend = function (i) {
      var o = function () {
          (C(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks());
        },
        l = (o.__super__ = this.prototype),
        d = a(l);
      ((d.constructor = o), (o.prototype = d));
      for (var m in this)
        Object.prototype.hasOwnProperty.call(this, m) &&
          m !== "prototype" &&
          m !== "__super__" &&
          (o[m] = this[m]);
      return (
        i.statics && s(o, i.statics),
        i.includes && ($t(i.includes), s.apply(null, [d].concat(i.includes))),
        s(d, i),
        delete d.statics,
        delete d.includes,
        d.options &&
          ((d.options = l.options ? a(l.options) : {}),
          s(d.options, i.options)),
        (d._initHooks = []),
        (d.callInitHooks = function () {
          if (!this._initHooksCalled) {
            (l.callInitHooks && l.callInitHooks.call(this),
              (this._initHooksCalled = !0));
            for (var y = 0, T = d._initHooks.length; y < T; y++)
              d._initHooks[y].call(this);
          }
        }),
        o
      );
    }),
      (he.include = function (i) {
        var o = this.prototype.options;
        return (
          s(this.prototype, i),
          i.options &&
            ((this.prototype.options = o), this.mergeOptions(i.options)),
          this
        );
      }),
      (he.mergeOptions = function (i) {
        return (s(this.prototype.options, i), this);
      }),
      (he.addInitHook = function (i) {
        var o = Array.prototype.slice.call(arguments, 1),
          l =
            typeof i == "function"
              ? i
              : function () {
                  this[i].apply(this, o);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(l),
          this
        );
      }));
    function $t(i) {
      if (!(typeof L > "u" || !L || !L.Mixin)) {
        i = w(i) ? i : [i];
        for (var o = 0; o < i.length; o++)
          i[o] === L.Mixin.Events &&
            console.warn(
              "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
              new Error().stack,
            );
      }
    }
    var ie = {
      on: function (i, o, l) {
        if (typeof i == "object") for (var d in i) this._on(d, i[d], o);
        else {
          i = S(i);
          for (var m = 0, y = i.length; m < y; m++) this._on(i[m], o, l);
        }
        return this;
      },
      off: function (i, o, l) {
        if (!arguments.length) delete this._events;
        else if (typeof i == "object") for (var d in i) this._off(d, i[d], o);
        else {
          i = S(i);
          for (var m = arguments.length === 1, y = 0, T = i.length; y < T; y++)
            m ? this._off(i[y]) : this._off(i[y], o, l);
        }
        return this;
      },
      _on: function (i, o, l, d) {
        if (typeof o != "function") {
          console.warn("wrong listener type: " + typeof o);
          return;
        }
        if (this._listens(i, o, l) === !1) {
          l === this && (l = void 0);
          var m = { fn: o, ctx: l };
          (d && (m.once = !0),
            (this._events = this._events || {}),
            (this._events[i] = this._events[i] || []),
            this._events[i].push(m));
        }
      },
      _off: function (i, o, l) {
        var d, m, y;
        if (this._events && ((d = this._events[i]), !!d)) {
          if (arguments.length === 1) {
            if (this._firingCount)
              for (m = 0, y = d.length; m < y; m++) d[m].fn = g;
            delete this._events[i];
            return;
          }
          if (typeof o != "function") {
            console.warn("wrong listener type: " + typeof o);
            return;
          }
          var T = this._listens(i, o, l);
          if (T !== !1) {
            var E = d[T];
            (this._firingCount &&
              ((E.fn = g), (this._events[i] = d = d.slice())),
              d.splice(T, 1));
          }
        }
      },
      fire: function (i, o, l) {
        if (!this.listens(i, l)) return this;
        var d = s({}, o, {
          type: i,
          target: this,
          sourceTarget: (o && o.sourceTarget) || this,
        });
        if (this._events) {
          var m = this._events[i];
          if (m) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var y = 0, T = m.length; y < T; y++) {
              var E = m[y],
                M = E.fn;
              (E.once && this.off(i, M, E.ctx), M.call(E.ctx || this, d));
            }
            this._firingCount--;
          }
        }
        return (l && this._propagateEvent(d), this);
      },
      listens: function (i, o, l, d) {
        typeof i != "string" && console.warn('"string" type argument expected');
        var m = o;
        typeof o != "function" && ((d = !!o), (m = void 0), (l = void 0));
        var y = this._events && this._events[i];
        if (y && y.length && this._listens(i, m, l) !== !1) return !0;
        if (d) {
          for (var T in this._eventParents)
            if (this._eventParents[T].listens(i, o, l, d)) return !0;
        }
        return !1;
      },
      _listens: function (i, o, l) {
        if (!this._events) return !1;
        var d = this._events[i] || [];
        if (!o) return !!d.length;
        l === this && (l = void 0);
        for (var m = 0, y = d.length; m < y; m++)
          if (d[m].fn === o && d[m].ctx === l) return m;
        return !1;
      },
      once: function (i, o, l) {
        if (typeof i == "object") for (var d in i) this._on(d, i[d], o, !0);
        else {
          i = S(i);
          for (var m = 0, y = i.length; m < y; m++) this._on(i[m], o, l, !0);
        }
        return this;
      },
      addEventParent: function (i) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[h(i)] = i),
          this
        );
      },
      removeEventParent: function (i) {
        return (this._eventParents && delete this._eventParents[h(i)], this);
      },
      _propagateEvent: function (i) {
        for (var o in this._eventParents)
          this._eventParents[o].fire(
            i.type,
            s({ layer: i.target, propagatedFrom: i.target }, i),
            !0,
          );
      },
    };
    ((ie.addEventListener = ie.on),
      (ie.removeEventListener = ie.clearAllEventListeners = ie.off),
      (ie.addOneTimeEventListener = ie.once),
      (ie.fireEvent = ie.fire),
      (ie.hasEventListeners = ie.listens));
    var Be = he.extend(ie);
    function z(i, o, l) {
      ((this.x = l ? Math.round(i) : i), (this.y = l ? Math.round(o) : o));
    }
    var q =
      Math.trunc ||
      function (i) {
        return i > 0 ? Math.floor(i) : Math.ceil(i);
      };
    z.prototype = {
      clone: function () {
        return new z(this.x, this.y);
      },
      add: function (i) {
        return this.clone()._add(V(i));
      },
      _add: function (i) {
        return ((this.x += i.x), (this.y += i.y), this);
      },
      subtract: function (i) {
        return this.clone()._subtract(V(i));
      },
      _subtract: function (i) {
        return ((this.x -= i.x), (this.y -= i.y), this);
      },
      divideBy: function (i) {
        return this.clone()._divideBy(i);
      },
      _divideBy: function (i) {
        return ((this.x /= i), (this.y /= i), this);
      },
      multiplyBy: function (i) {
        return this.clone()._multiplyBy(i);
      },
      _multiplyBy: function (i) {
        return ((this.x *= i), (this.y *= i), this);
      },
      scaleBy: function (i) {
        return new z(this.x * i.x, this.y * i.y);
      },
      unscaleBy: function (i) {
        return new z(this.x / i.x, this.y / i.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)),
          (this.y = Math.round(this.y)),
          this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)),
          (this.y = Math.floor(this.y)),
          this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (
          (this.x = Math.ceil(this.x)),
          (this.y = Math.ceil(this.y)),
          this
        );
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return ((this.x = q(this.x)), (this.y = q(this.y)), this);
      },
      distanceTo: function (i) {
        i = V(i);
        var o = i.x - this.x,
          l = i.y - this.y;
        return Math.sqrt(o * o + l * l);
      },
      equals: function (i) {
        return ((i = V(i)), i.x === this.x && i.y === this.y);
      },
      contains: function (i) {
        return (
          (i = V(i)),
          Math.abs(i.x) <= Math.abs(this.x) && Math.abs(i.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return "Point(" + x(this.x) + ", " + x(this.y) + ")";
      },
    };
    function V(i, o, l) {
      return i instanceof z
        ? i
        : w(i)
          ? new z(i[0], i[1])
          : i == null
            ? i
            : typeof i == "object" && "x" in i && "y" in i
              ? new z(i.x, i.y)
              : new z(i, o, l);
    }
    function Z(i, o) {
      if (i)
        for (var l = o ? [i, o] : i, d = 0, m = l.length; d < m; d++)
          this.extend(l[d]);
    }
    Z.prototype = {
      extend: function (i) {
        var o, l;
        if (!i) return this;
        if (i instanceof z || typeof i[0] == "number" || "x" in i) o = l = V(i);
        else if (((i = ee(i)), (o = i.min), (l = i.max), !o || !l)) return this;
        return (
          !this.min && !this.max
            ? ((this.min = o.clone()), (this.max = l.clone()))
            : ((this.min.x = Math.min(o.x, this.min.x)),
              (this.max.x = Math.max(l.x, this.max.x)),
              (this.min.y = Math.min(o.y, this.min.y)),
              (this.max.y = Math.max(l.y, this.max.y))),
          this
        );
      },
      getCenter: function (i) {
        return V(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          i,
        );
      },
      getBottomLeft: function () {
        return V(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return V(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (i) {
        var o, l;
        return (
          typeof i[0] == "number" || i instanceof z ? (i = V(i)) : (i = ee(i)),
          i instanceof Z ? ((o = i.min), (l = i.max)) : (o = l = i),
          o.x >= this.min.x &&
            l.x <= this.max.x &&
            o.y >= this.min.y &&
            l.y <= this.max.y
        );
      },
      intersects: function (i) {
        i = ee(i);
        var o = this.min,
          l = this.max,
          d = i.min,
          m = i.max,
          y = m.x >= o.x && d.x <= l.x,
          T = m.y >= o.y && d.y <= l.y;
        return y && T;
      },
      overlaps: function (i) {
        i = ee(i);
        var o = this.min,
          l = this.max,
          d = i.min,
          m = i.max,
          y = m.x > o.x && d.x < l.x,
          T = m.y > o.y && d.y < l.y;
        return y && T;
      },
      isValid: function () {
        return !!(this.min && this.max);
      },
      pad: function (i) {
        var o = this.min,
          l = this.max,
          d = Math.abs(o.x - l.x) * i,
          m = Math.abs(o.y - l.y) * i;
        return ee(V(o.x - d, o.y - m), V(l.x + d, l.y + m));
      },
      equals: function (i) {
        return i
          ? ((i = ee(i)),
            this.min.equals(i.getTopLeft()) &&
              this.max.equals(i.getBottomRight()))
          : !1;
      },
    };
    function ee(i, o) {
      return !i || i instanceof Z ? i : new Z(i, o);
    }
    function Ce(i, o) {
      if (i)
        for (var l = o ? [i, o] : i, d = 0, m = l.length; d < m; d++)
          this.extend(l[d]);
    }
    Ce.prototype = {
      extend: function (i) {
        var o = this._southWest,
          l = this._northEast,
          d,
          m;
        if (i instanceof re) ((d = i), (m = i));
        else if (i instanceof Ce) {
          if (((d = i._southWest), (m = i._northEast), !d || !m)) return this;
        } else return i ? this.extend(Y(i) || ue(i)) : this;
        return (
          !o && !l
            ? ((this._southWest = new re(d.lat, d.lng)),
              (this._northEast = new re(m.lat, m.lng)))
            : ((o.lat = Math.min(d.lat, o.lat)),
              (o.lng = Math.min(d.lng, o.lng)),
              (l.lat = Math.max(m.lat, l.lat)),
              (l.lng = Math.max(m.lng, l.lng))),
          this
        );
      },
      pad: function (i) {
        var o = this._southWest,
          l = this._northEast,
          d = Math.abs(o.lat - l.lat) * i,
          m = Math.abs(o.lng - l.lng) * i;
        return new Ce(
          new re(o.lat - d, o.lng - m),
          new re(l.lat + d, l.lng + m),
        );
      },
      getCenter: function () {
        return new re(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2,
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new re(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new re(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (i) {
        typeof i[0] == "number" || i instanceof re || "lat" in i
          ? (i = Y(i))
          : (i = ue(i));
        var o = this._southWest,
          l = this._northEast,
          d,
          m;
        return (
          i instanceof Ce
            ? ((d = i.getSouthWest()), (m = i.getNorthEast()))
            : (d = m = i),
          d.lat >= o.lat && m.lat <= l.lat && d.lng >= o.lng && m.lng <= l.lng
        );
      },
      intersects: function (i) {
        i = ue(i);
        var o = this._southWest,
          l = this._northEast,
          d = i.getSouthWest(),
          m = i.getNorthEast(),
          y = m.lat >= o.lat && d.lat <= l.lat,
          T = m.lng >= o.lng && d.lng <= l.lng;
        return y && T;
      },
      overlaps: function (i) {
        i = ue(i);
        var o = this._southWest,
          l = this._northEast,
          d = i.getSouthWest(),
          m = i.getNorthEast(),
          y = m.lat > o.lat && d.lat < l.lat,
          T = m.lng > o.lng && d.lng < l.lng;
        return y && T;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (i, o) {
        return i
          ? ((i = ue(i)),
            this._southWest.equals(i.getSouthWest(), o) &&
              this._northEast.equals(i.getNorthEast(), o))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      },
    };
    function ue(i, o) {
      return i instanceof Ce ? i : new Ce(i, o);
    }
    function re(i, o, l) {
      if (isNaN(i) || isNaN(o))
        throw new Error("Invalid LatLng object: (" + i + ", " + o + ")");
      ((this.lat = +i), (this.lng = +o), l !== void 0 && (this.alt = +l));
    }
    re.prototype = {
      equals: function (i, o) {
        if (!i) return !1;
        i = Y(i);
        var l = Math.max(
          Math.abs(this.lat - i.lat),
          Math.abs(this.lng - i.lng),
        );
        return l <= (o === void 0 ? 1e-9 : o);
      },
      toString: function (i) {
        return "LatLng(" + x(this.lat, i) + ", " + x(this.lng, i) + ")";
      },
      distanceTo: function (i) {
        return qt.distance(this, Y(i));
      },
      wrap: function () {
        return qt.wrapLatLng(this);
      },
      toBounds: function (i) {
        var o = (180 * i) / 40075017,
          l = o / Math.cos((Math.PI / 180) * this.lat);
        return ue([this.lat - o, this.lng - l], [this.lat + o, this.lng + l]);
      },
      clone: function () {
        return new re(this.lat, this.lng, this.alt);
      },
    };
    function Y(i, o, l) {
      return i instanceof re
        ? i
        : w(i) && typeof i[0] != "object"
          ? i.length === 3
            ? new re(i[0], i[1], i[2])
            : i.length === 2
              ? new re(i[0], i[1])
              : null
          : i == null
            ? i
            : typeof i == "object" && "lat" in i
              ? new re(i.lat, "lng" in i ? i.lng : i.lon, i.alt)
              : o === void 0
                ? null
                : new re(i, o, l);
    }
    var He = {
        latLngToPoint: function (i, o) {
          var l = this.projection.project(i),
            d = this.scale(o);
          return this.transformation._transform(l, d);
        },
        pointToLatLng: function (i, o) {
          var l = this.scale(o),
            d = this.transformation.untransform(i, l);
          return this.projection.unproject(d);
        },
        project: function (i) {
          return this.projection.project(i);
        },
        unproject: function (i) {
          return this.projection.unproject(i);
        },
        scale: function (i) {
          return 256 * Math.pow(2, i);
        },
        zoom: function (i) {
          return Math.log(i / 256) / Math.LN2;
        },
        getProjectedBounds: function (i) {
          if (this.infinite) return null;
          var o = this.projection.bounds,
            l = this.scale(i),
            d = this.transformation.transform(o.min, l),
            m = this.transformation.transform(o.max, l);
          return new Z(d, m);
        },
        infinite: !1,
        wrapLatLng: function (i) {
          var o = this.wrapLng ? v(i.lng, this.wrapLng, !0) : i.lng,
            l = this.wrapLat ? v(i.lat, this.wrapLat, !0) : i.lat,
            d = i.alt;
          return new re(l, o, d);
        },
        wrapLatLngBounds: function (i) {
          var o = i.getCenter(),
            l = this.wrapLatLng(o),
            d = o.lat - l.lat,
            m = o.lng - l.lng;
          if (d === 0 && m === 0) return i;
          var y = i.getSouthWest(),
            T = i.getNorthEast(),
            E = new re(y.lat - d, y.lng - m),
            M = new re(T.lat - d, T.lng - m);
          return new Ce(E, M);
        },
      },
      qt = s({}, He, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (i, o) {
          var l = Math.PI / 180,
            d = i.lat * l,
            m = o.lat * l,
            y = Math.sin(((o.lat - i.lat) * l) / 2),
            T = Math.sin(((o.lng - i.lng) * l) / 2),
            E = y * y + Math.cos(d) * Math.cos(m) * T * T,
            M = 2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E));
          return this.R * M;
        },
      }),
      Ri = 6378137,
      Tn = {
        R: Ri,
        MAX_LATITUDE: 85.0511287798,
        project: function (i) {
          var o = Math.PI / 180,
            l = this.MAX_LATITUDE,
            d = Math.max(Math.min(l, i.lat), -l),
            m = Math.sin(d * o);
          return new z(
            this.R * i.lng * o,
            (this.R * Math.log((1 + m) / (1 - m))) / 2,
          );
        },
        unproject: function (i) {
          var o = 180 / Math.PI;
          return new re(
            (2 * Math.atan(Math.exp(i.y / this.R)) - Math.PI / 2) * o,
            (i.x * o) / this.R,
          );
        },
        bounds: (function () {
          var i = Ri * Math.PI;
          return new Z([-i, -i], [i, i]);
        })(),
      };
    function Rt(i, o, l, d) {
      if (w(i)) {
        ((this._a = i[0]),
          (this._b = i[1]),
          (this._c = i[2]),
          (this._d = i[3]));
        return;
      }
      ((this._a = i), (this._b = o), (this._c = l), (this._d = d));
    }
    Rt.prototype = {
      transform: function (i, o) {
        return this._transform(i.clone(), o);
      },
      _transform: function (i, o) {
        return (
          (o = o || 1),
          (i.x = o * (this._a * i.x + this._b)),
          (i.y = o * (this._c * i.y + this._d)),
          i
        );
      },
      untransform: function (i, o) {
        return (
          (o = o || 1),
          new z((i.x / o - this._b) / this._a, (i.y / o - this._d) / this._c)
        );
      },
    };
    function Oi(i, o, l, d) {
      return new Rt(i, o, l, d);
    }
    var pl = s({}, qt, {
        code: "EPSG:3857",
        projection: Tn,
        transformation: (function () {
          var i = 0.5 / (Math.PI * Tn.R);
          return Oi(i, 0.5, -i, 0.5);
        })(),
      }),
      mx = s({}, pl, { code: "EPSG:900913" });
    function _h(i) {
      return document.createElementNS("http://www.w3.org/2000/svg", i);
    }
    function wh(i, o) {
      var l = "",
        d,
        m,
        y,
        T,
        E,
        M;
      for (d = 0, y = i.length; d < y; d++) {
        for (E = i[d], m = 0, T = E.length; m < T; m++)
          ((M = E[m]), (l += (m ? "L" : "M") + M.x + " " + M.y));
        l += o ? (H.svg ? "z" : "x") : "";
      }
      return l || "M0 0";
    }
    var ml = document.documentElement.style,
      rs = "ActiveXObject" in window,
      gx = rs && !document.addEventListener,
      Ph = "msLaunchUri" in navigator && !("documentMode" in document),
      gl = Gt("webkit"),
      kh = Gt("android"),
      Sh = Gt("android 2") || Gt("android 3"),
      vx = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      yx = kh && Gt("Google") && vx < 537 && !("AudioNode" in window),
      vl = !!window.opera,
      Ch = !Ph && Gt("chrome"),
      Th = Gt("gecko") && !gl && !vl && !rs,
      xx = !Ch && Gt("safari"),
      bh = Gt("phantom"),
      Lh = "OTransition" in ml,
      _x = navigator.platform.indexOf("Win") === 0,
      Nh = rs && "transition" in ml,
      yl =
        "WebKitCSSMatrix" in window &&
        "m11" in new window.WebKitCSSMatrix() &&
        !Sh,
      Eh = "MozPerspective" in ml,
      wx = !window.L_DISABLE_3D && (Nh || yl || Eh) && !Lh && !bh,
      Rr = typeof orientation < "u" || Gt("mobile"),
      Px = Rr && gl,
      kx = Rr && yl,
      jh = !window.PointerEvent && window.MSPointerEvent,
      Mh = !!(window.PointerEvent || jh),
      Ah = "ontouchstart" in window || !!window.TouchEvent,
      Sx = !window.L_NO_TOUCH && (Ah || Mh),
      Cx = Rr && vl,
      Tx = Rr && Th,
      bx =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Lx = (function () {
        var i = !1;
        try {
          var o = Object.defineProperty({}, "passive", {
            get: function () {
              i = !0;
            },
          });
          (window.addEventListener("testPassiveEventSupport", g, o),
            window.removeEventListener("testPassiveEventSupport", g, o));
        } catch {}
        return i;
      })(),
      Nx = (function () {
        return !!document.createElement("canvas").getContext;
      })(),
      xl = !!(document.createElementNS && _h("svg").createSVGRect),
      Ex =
        !!xl &&
        (function () {
          var i = document.createElement("div");
          return (
            (i.innerHTML = "<svg/>"),
            (i.firstChild && i.firstChild.namespaceURI) ===
              "http://www.w3.org/2000/svg"
          );
        })(),
      jx =
        !xl &&
        (function () {
          try {
            var i = document.createElement("div");
            i.innerHTML = '<v:shape adj="1"/>';
            var o = i.firstChild;
            return (
              (o.style.behavior = "url(#default#VML)"),
              o && typeof o.adj == "object"
            );
          } catch {
            return !1;
          }
        })(),
      Mx = navigator.platform.indexOf("Mac") === 0,
      Ax = navigator.platform.indexOf("Linux") === 0;
    function Gt(i) {
      return navigator.userAgent.toLowerCase().indexOf(i) >= 0;
    }
    var H = {
        ie: rs,
        ielt9: gx,
        edge: Ph,
        webkit: gl,
        android: kh,
        android23: Sh,
        androidStock: yx,
        opera: vl,
        chrome: Ch,
        gecko: Th,
        safari: xx,
        phantom: bh,
        opera12: Lh,
        win: _x,
        ie3d: Nh,
        webkit3d: yl,
        gecko3d: Eh,
        any3d: wx,
        mobile: Rr,
        mobileWebkit: Px,
        mobileWebkit3d: kx,
        msPointer: jh,
        pointer: Mh,
        touch: Sx,
        touchNative: Ah,
        mobileOpera: Cx,
        mobileGecko: Tx,
        retina: bx,
        passiveEvents: Lx,
        canvas: Nx,
        svg: xl,
        vml: jx,
        inlineSvg: Ex,
        mac: Mx,
        linux: Ax,
      },
      zh = H.msPointer ? "MSPointerDown" : "pointerdown",
      Rh = H.msPointer ? "MSPointerMove" : "pointermove",
      Oh = H.msPointer ? "MSPointerUp" : "pointerup",
      Dh = H.msPointer ? "MSPointerCancel" : "pointercancel",
      _l = { touchstart: zh, touchmove: Rh, touchend: Oh, touchcancel: Dh },
      Ih = { touchstart: Bx, touchmove: os, touchend: os, touchcancel: os },
      Di = {},
      Bh = !1;
    function zx(i, o, l) {
      return (
        o === "touchstart" && Ix(),
        Ih[o]
          ? ((l = Ih[o].bind(this, l)), i.addEventListener(_l[o], l, !1), l)
          : (console.warn("wrong event specified:", o), g)
      );
    }
    function Rx(i, o, l) {
      if (!_l[o]) {
        console.warn("wrong event specified:", o);
        return;
      }
      i.removeEventListener(_l[o], l, !1);
    }
    function Ox(i) {
      Di[i.pointerId] = i;
    }
    function Dx(i) {
      Di[i.pointerId] && (Di[i.pointerId] = i);
    }
    function Vh(i) {
      delete Di[i.pointerId];
    }
    function Ix() {
      Bh ||
        (document.addEventListener(zh, Ox, !0),
        document.addEventListener(Rh, Dx, !0),
        document.addEventListener(Oh, Vh, !0),
        document.addEventListener(Dh, Vh, !0),
        (Bh = !0));
    }
    function os(i, o) {
      if (o.pointerType !== (o.MSPOINTER_TYPE_MOUSE || "mouse")) {
        o.touches = [];
        for (var l in Di) o.touches.push(Di[l]);
        ((o.changedTouches = [o]), i(o));
      }
    }
    function Bx(i, o) {
      (o.MSPOINTER_TYPE_TOUCH &&
        o.pointerType === o.MSPOINTER_TYPE_TOUCH &&
        We(o),
        os(i, o));
    }
    function Vx(i) {
      var o = {},
        l,
        d;
      for (d in i) ((l = i[d]), (o[d] = l && l.bind ? l.bind(i) : l));
      return (
        (i = o),
        (o.type = "dblclick"),
        (o.detail = 2),
        (o.isTrusted = !1),
        (o._simulated = !0),
        o
      );
    }
    var Fx = 200;
    function Zx(i, o) {
      i.addEventListener("dblclick", o);
      var l = 0,
        d;
      function m(y) {
        if (y.detail !== 1) {
          d = y.detail;
          return;
        }
        if (!(
          y.pointerType === "mouse" ||
          (y.sourceCapabilities && !y.sourceCapabilities.firesTouchEvents)
        )) {
          var T = Wh(y);
          if (!(
            T.some(function (M) {
              return M instanceof HTMLLabelElement && M.attributes.for;
            }) &&
            !T.some(function (M) {
              return (
                M instanceof HTMLInputElement || M instanceof HTMLSelectElement
              );
            })
          )) {
            var E = Date.now();
            (E - l <= Fx ? (d++, d === 2 && o(Vx(y))) : (d = 1), (l = E));
          }
        }
      }
      return (i.addEventListener("click", m), { dblclick: o, simDblclick: m });
    }
    function Ux(i, o) {
      (i.removeEventListener("dblclick", o.dblclick),
        i.removeEventListener("click", o.simDblclick));
    }
    var wl = ls([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform",
      ]),
      Or = ls([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      Fh =
        Or === "webkitTransition" || Or === "OTransition"
          ? Or + "End"
          : "transitionend";
    function Zh(i) {
      return typeof i == "string" ? document.getElementById(i) : i;
    }
    function Dr(i, o) {
      var l = i.style[o] || (i.currentStyle && i.currentStyle[o]);
      if ((!l || l === "auto") && document.defaultView) {
        var d = document.defaultView.getComputedStyle(i, null);
        l = d ? d[o] : null;
      }
      return l === "auto" ? null : l;
    }
    function le(i, o, l) {
      var d = document.createElement(i);
      return ((d.className = o || ""), l && l.appendChild(d), d);
    }
    function xe(i) {
      var o = i.parentNode;
      o && o.removeChild(i);
    }
    function ss(i) {
      for (; i.firstChild;) i.removeChild(i.firstChild);
    }
    function Ii(i) {
      var o = i.parentNode;
      o && o.lastChild !== i && o.appendChild(i);
    }
    function Bi(i) {
      var o = i.parentNode;
      o && o.firstChild !== i && o.insertBefore(i, o.firstChild);
    }
    function Pl(i, o) {
      if (i.classList !== void 0) return i.classList.contains(o);
      var l = as(i);
      return l.length > 0 && new RegExp("(^|\\s)" + o + "(\\s|$)").test(l);
    }
    function J(i, o) {
      if (i.classList !== void 0)
        for (var l = S(o), d = 0, m = l.length; d < m; d++)
          i.classList.add(l[d]);
      else if (!Pl(i, o)) {
        var y = as(i);
        kl(i, (y ? y + " " : "") + o);
      }
    }
    function be(i, o) {
      i.classList !== void 0
        ? i.classList.remove(o)
        : kl(i, P((" " + as(i) + " ").replace(" " + o + " ", " ")));
    }
    function kl(i, o) {
      i.className.baseVal === void 0
        ? (i.className = o)
        : (i.className.baseVal = o);
    }
    function as(i) {
      return (
        i.correspondingElement && (i = i.correspondingElement),
        i.className.baseVal === void 0 ? i.className : i.className.baseVal
      );
    }
    function Pt(i, o) {
      "opacity" in i.style
        ? (i.style.opacity = o)
        : "filter" in i.style && Hx(i, o);
    }
    function Hx(i, o) {
      var l = !1,
        d = "DXImageTransform.Microsoft.Alpha";
      try {
        l = i.filters.item(d);
      } catch {
        if (o === 1) return;
      }
      ((o = Math.round(o * 100)),
        l
          ? ((l.Enabled = o !== 100), (l.Opacity = o))
          : (i.style.filter += " progid:" + d + "(opacity=" + o + ")"));
    }
    function ls(i) {
      for (var o = document.documentElement.style, l = 0; l < i.length; l++)
        if (i[l] in o) return i[l];
      return !1;
    }
    function ai(i, o, l) {
      var d = o || new z(0, 0);
      i.style[wl] =
        (H.ie3d
          ? "translate(" + d.x + "px," + d.y + "px)"
          : "translate3d(" + d.x + "px," + d.y + "px,0)") +
        (l ? " scale(" + l + ")" : "");
    }
    function Me(i, o) {
      ((i._leaflet_pos = o),
        H.any3d
          ? ai(i, o)
          : ((i.style.left = o.x + "px"), (i.style.top = o.y + "px")));
    }
    function li(i) {
      return i._leaflet_pos || new z(0, 0);
    }
    var Ir, Br, Sl;
    if ("onselectstart" in document)
      ((Ir = function () {
        X(window, "selectstart", We);
      }),
        (Br = function () {
          fe(window, "selectstart", We);
        }));
    else {
      var Vr = ls([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect",
      ]);
      ((Ir = function () {
        if (Vr) {
          var i = document.documentElement.style;
          ((Sl = i[Vr]), (i[Vr] = "none"));
        }
      }),
        (Br = function () {
          Vr && ((document.documentElement.style[Vr] = Sl), (Sl = void 0));
        }));
    }
    function Cl() {
      X(window, "dragstart", We);
    }
    function Tl() {
      fe(window, "dragstart", We);
    }
    var us, bl;
    function Ll(i) {
      for (; i.tabIndex === -1;) i = i.parentNode;
      i.style &&
        (cs(),
        (us = i),
        (bl = i.style.outlineStyle),
        (i.style.outlineStyle = "none"),
        X(window, "keydown", cs));
    }
    function cs() {
      us &&
        ((us.style.outlineStyle = bl),
        (us = void 0),
        (bl = void 0),
        fe(window, "keydown", cs));
    }
    function Uh(i) {
      do i = i.parentNode;
      while ((!i.offsetWidth || !i.offsetHeight) && i !== document.body);
      return i;
    }
    function Nl(i) {
      var o = i.getBoundingClientRect();
      return {
        x: o.width / i.offsetWidth || 1,
        y: o.height / i.offsetHeight || 1,
        boundingClientRect: o,
      };
    }
    var Wx = {
      __proto__: null,
      TRANSFORM: wl,
      TRANSITION: Or,
      TRANSITION_END: Fh,
      get: Zh,
      getStyle: Dr,
      create: le,
      remove: xe,
      empty: ss,
      toFront: Ii,
      toBack: Bi,
      hasClass: Pl,
      addClass: J,
      removeClass: be,
      setClass: kl,
      getClass: as,
      setOpacity: Pt,
      testProp: ls,
      setTransform: ai,
      setPosition: Me,
      getPosition: li,
      get disableTextSelection() {
        return Ir;
      },
      get enableTextSelection() {
        return Br;
      },
      disableImageDrag: Cl,
      enableImageDrag: Tl,
      preventOutline: Ll,
      restoreOutline: cs,
      getSizedParentNode: Uh,
      getScale: Nl,
    };
    function X(i, o, l, d) {
      if (o && typeof o == "object") for (var m in o) jl(i, m, o[m], l);
      else {
        o = S(o);
        for (var y = 0, T = o.length; y < T; y++) jl(i, o[y], l, d);
      }
      return this;
    }
    var Kt = "_leaflet_events";
    function fe(i, o, l, d) {
      if (arguments.length === 1) (Hh(i), delete i[Kt]);
      else if (o && typeof o == "object") for (var m in o) Ml(i, m, o[m], l);
      else if (((o = S(o)), arguments.length === 2))
        Hh(i, function (E) {
          return N(o, E) !== -1;
        });
      else for (var y = 0, T = o.length; y < T; y++) Ml(i, o[y], l, d);
      return this;
    }
    function Hh(i, o) {
      for (var l in i[Kt]) {
        var d = l.split(/\d/)[0];
        (!o || o(d)) && Ml(i, d, null, null, l);
      }
    }
    var El = {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      wheel: !("onwheel" in window) && "mousewheel",
    };
    function jl(i, o, l, d) {
      var m = o + h(l) + (d ? "_" + h(d) : "");
      if (i[Kt] && i[Kt][m]) return this;
      var y = function (E) {
          return l.call(d || i, E || window.event);
        },
        T = y;
      (!H.touchNative && H.pointer && o.indexOf("touch") === 0
        ? (y = zx(i, o, y))
        : H.touch && o === "dblclick"
          ? (y = Zx(i, y))
          : "addEventListener" in i
            ? o === "touchstart" ||
              o === "touchmove" ||
              o === "wheel" ||
              o === "mousewheel"
              ? i.addEventListener(
                  El[o] || o,
                  y,
                  H.passiveEvents ? { passive: !1 } : !1,
                )
              : o === "mouseenter" || o === "mouseleave"
                ? ((y = function (E) {
                    ((E = E || window.event), zl(i, E) && T(E));
                  }),
                  i.addEventListener(El[o], y, !1))
                : i.addEventListener(o, T, !1)
            : i.attachEvent("on" + o, y),
        (i[Kt] = i[Kt] || {}),
        (i[Kt][m] = y));
    }
    function Ml(i, o, l, d, m) {
      m = m || o + h(l) + (d ? "_" + h(d) : "");
      var y = i[Kt] && i[Kt][m];
      if (!y) return this;
      (!H.touchNative && H.pointer && o.indexOf("touch") === 0
        ? Rx(i, o, y)
        : H.touch && o === "dblclick"
          ? Ux(i, y)
          : "removeEventListener" in i
            ? i.removeEventListener(El[o] || o, y, !1)
            : i.detachEvent("on" + o, y),
        (i[Kt][m] = null));
    }
    function ui(i) {
      return (
        i.stopPropagation
          ? i.stopPropagation()
          : i.originalEvent
            ? (i.originalEvent._stopped = !0)
            : (i.cancelBubble = !0),
        this
      );
    }
    function Al(i) {
      return (jl(i, "wheel", ui), this);
    }
    function Fr(i) {
      return (
        X(i, "mousedown touchstart dblclick contextmenu", ui),
        (i._leaflet_disable_click = !0),
        this
      );
    }
    function We(i) {
      return (
        i.preventDefault ? i.preventDefault() : (i.returnValue = !1),
        this
      );
    }
    function ci(i) {
      return (We(i), ui(i), this);
    }
    function Wh(i) {
      if (i.composedPath) return i.composedPath();
      for (var o = [], l = i.target; l;) (o.push(l), (l = l.parentNode));
      return o;
    }
    function $h(i, o) {
      if (!o) return new z(i.clientX, i.clientY);
      var l = Nl(o),
        d = l.boundingClientRect;
      return new z(
        (i.clientX - d.left) / l.x - o.clientLeft,
        (i.clientY - d.top) / l.y - o.clientTop,
      );
    }
    var $x =
      H.linux && H.chrome
        ? window.devicePixelRatio
        : H.mac
          ? window.devicePixelRatio * 3
          : window.devicePixelRatio > 0
            ? 2 * window.devicePixelRatio
            : 1;
    function qh(i) {
      return H.edge
        ? i.wheelDeltaY / 2
        : i.deltaY && i.deltaMode === 0
          ? -i.deltaY / $x
          : i.deltaY && i.deltaMode === 1
            ? -i.deltaY * 20
            : i.deltaY && i.deltaMode === 2
              ? -i.deltaY * 60
              : i.deltaX || i.deltaZ
                ? 0
                : i.wheelDelta
                  ? (i.wheelDeltaY || i.wheelDelta) / 2
                  : i.detail && Math.abs(i.detail) < 32765
                    ? -i.detail * 20
                    : i.detail
                      ? (i.detail / -32765) * 60
                      : 0;
    }
    function zl(i, o) {
      var l = o.relatedTarget;
      if (!l) return !0;
      try {
        for (; l && l !== i;) l = l.parentNode;
      } catch {
        return !1;
      }
      return l !== i;
    }
    var qx = {
        __proto__: null,
        on: X,
        off: fe,
        stopPropagation: ui,
        disableScrollPropagation: Al,
        disableClickPropagation: Fr,
        preventDefault: We,
        stop: ci,
        getPropagationPath: Wh,
        getMousePosition: $h,
        getWheelDelta: qh,
        isExternalTarget: zl,
        addListener: X,
        removeListener: fe,
      },
      Gh = Be.extend({
        run: function (i, o, l, d) {
          (this.stop(),
            (this._el = i),
            (this._inProgress = !0),
            (this._duration = l || 0.25),
            (this._easeOutPower = 1 / Math.max(d || 0.5, 0.2)),
            (this._startPos = li(i)),
            (this._offset = o.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire("start"),
            this._animate());
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          ((this._animId = se(this._animate, this)), this._step());
        },
        _step: function (i) {
          var o = +new Date() - this._startTime,
            l = this._duration * 1e3;
          o < l
            ? this._runFrame(this._easeOut(o / l), i)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (i, o) {
          var l = this._startPos.add(this._offset.multiplyBy(i));
          (o && l._round(), Me(this._el, l), this.fire("step"));
        },
        _complete: function () {
          (ce(this._animId), (this._inProgress = !1), this.fire("end"));
        },
        _easeOut: function (i) {
          return 1 - Math.pow(1 - i, this._easeOutPower);
        },
      }),
      oe = Be.extend({
        options: {
          crs: pl,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (i, o) {
          ((o = C(this, o)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(i),
            this._initLayout(),
            (this._onResize = u(this._onResize, this)),
            this._initEvents(),
            o.maxBounds && this.setMaxBounds(o.maxBounds),
            o.zoom !== void 0 && (this._zoom = this._limitZoom(o.zoom)),
            o.center &&
              o.zoom !== void 0 &&
              this.setView(Y(o.center), o.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              Or && H.any3d && !H.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              X(this._proxy, Fh, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers));
        },
        setView: function (i, o, l) {
          if (
            ((o = o === void 0 ? this._zoom : this._limitZoom(o)),
            (i = this._limitCenter(Y(i), o, this.options.maxBounds)),
            (l = l || {}),
            this._stop(),
            this._loaded && !l.reset && l !== !0)
          ) {
            l.animate !== void 0 &&
              ((l.zoom = s({ animate: l.animate }, l.zoom)),
              (l.pan = s({ animate: l.animate, duration: l.duration }, l.pan)));
            var d =
              this._zoom !== o
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(i, o, l.zoom)
                : this._tryAnimatedPan(i, l.pan);
            if (d) return (clearTimeout(this._sizeTimer), this);
          }
          return (this._resetView(i, o, l.pan && l.pan.noMoveStart), this);
        },
        setZoom: function (i, o) {
          return this._loaded
            ? this.setView(this.getCenter(), i, { zoom: o })
            : ((this._zoom = i), this);
        },
        zoomIn: function (i, o) {
          return (
            (i = i || (H.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + i, o)
          );
        },
        zoomOut: function (i, o) {
          return (
            (i = i || (H.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - i, o)
          );
        },
        setZoomAround: function (i, o, l) {
          var d = this.getZoomScale(o),
            m = this.getSize().divideBy(2),
            y = i instanceof z ? i : this.latLngToContainerPoint(i),
            T = y.subtract(m).multiplyBy(1 - 1 / d),
            E = this.containerPointToLatLng(m.add(T));
          return this.setView(E, o, { zoom: l });
        },
        _getBoundsCenterZoom: function (i, o) {
          ((o = o || {}), (i = i.getBounds ? i.getBounds() : ue(i)));
          var l = V(o.paddingTopLeft || o.padding || [0, 0]),
            d = V(o.paddingBottomRight || o.padding || [0, 0]),
            m = this.getBoundsZoom(i, !1, l.add(d));
          if (
            ((m = typeof o.maxZoom == "number" ? Math.min(o.maxZoom, m) : m),
            m === 1 / 0)
          )
            return { center: i.getCenter(), zoom: m };
          var y = d.subtract(l).divideBy(2),
            T = this.project(i.getSouthWest(), m),
            E = this.project(i.getNorthEast(), m),
            M = this.unproject(T.add(E).divideBy(2).add(y), m);
          return { center: M, zoom: m };
        },
        fitBounds: function (i, o) {
          if (((i = ue(i)), !i.isValid()))
            throw new Error("Bounds are not valid.");
          var l = this._getBoundsCenterZoom(i, o);
          return this.setView(l.center, l.zoom, o);
        },
        fitWorld: function (i) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            i,
          );
        },
        panTo: function (i, o) {
          return this.setView(i, this._zoom, { pan: o });
        },
        panBy: function (i, o) {
          if (((i = V(i).round()), (o = o || {}), !i.x && !i.y))
            return this.fire("moveend");
          if (o.animate !== !0 && !this.getSize().contains(i))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(i)),
                this.getZoom(),
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Gh()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this,
              )),
            o.noMoveStart || this.fire("movestart"),
            o.animate !== !1)
          ) {
            J(this._mapPane, "leaflet-pan-anim");
            var l = this._getMapPanePos().subtract(i).round();
            this._panAnim.run(
              this._mapPane,
              l,
              o.duration || 0.25,
              o.easeLinearity,
            );
          } else (this._rawPanBy(i), this.fire("move").fire("moveend"));
          return this;
        },
        flyTo: function (i, o, l) {
          if (((l = l || {}), l.animate === !1 || !H.any3d))
            return this.setView(i, o, l);
          this._stop();
          var d = this.project(this.getCenter()),
            m = this.project(i),
            y = this.getSize(),
            T = this._zoom;
          ((i = Y(i)), (o = o === void 0 ? T : o));
          var E = Math.max(y.x, y.y),
            M = E * this.getZoomScale(T, o),
            R = m.distanceTo(d) || 1,
            F = 1.42,
            G = F * F;
          function te(Ae) {
            var Ps = Ae ? -1 : 1,
              R_ = Ae ? M : E,
              O_ = M * M - E * E + Ps * G * G * R * R,
              D_ = 2 * R_ * G * R,
              Wl = O_ / D_,
              Nf = Math.sqrt(Wl * Wl + 1) - Wl,
              I_ = Nf < 1e-9 ? -18 : Math.log(Nf);
            return I_;
          }
          function tt(Ae) {
            return (Math.exp(Ae) - Math.exp(-Ae)) / 2;
          }
          function Ve(Ae) {
            return (Math.exp(Ae) + Math.exp(-Ae)) / 2;
          }
          function St(Ae) {
            return tt(Ae) / Ve(Ae);
          }
          var lt = te(0);
          function Wi(Ae) {
            return E * (Ve(lt) / Ve(lt + F * Ae));
          }
          function j_(Ae) {
            return (E * (Ve(lt) * St(lt + F * Ae) - tt(lt))) / G;
          }
          function M_(Ae) {
            return 1 - Math.pow(1 - Ae, 1.5);
          }
          var A_ = Date.now(),
            bf = (te(1) - lt) / F,
            z_ = l.duration ? 1e3 * l.duration : 1e3 * bf * 0.8;
          function Lf() {
            var Ae = (Date.now() - A_) / z_,
              Ps = M_(Ae) * bf;
            Ae <= 1
              ? ((this._flyToFrame = se(Lf, this)),
                this._move(
                  this.unproject(
                    d.add(m.subtract(d).multiplyBy(j_(Ps) / R)),
                    T,
                  ),
                  this.getScaleZoom(E / Wi(Ps), T),
                  { flyTo: !0 },
                ))
              : this._move(i, o)._moveEnd(!0);
          }
          return (this._moveStart(!0, l.noMoveStart), Lf.call(this), this);
        },
        flyToBounds: function (i, o) {
          var l = this._getBoundsCenterZoom(i, o);
          return this.flyTo(l.center, l.zoom, o);
        },
        setMaxBounds: function (i) {
          return (
            (i = ue(i)),
            this.listens("moveend", this._panInsideMaxBounds) &&
              this.off("moveend", this._panInsideMaxBounds),
            i.isValid()
              ? ((this.options.maxBounds = i),
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (i) {
          var o = this.options.minZoom;
          return (
            (this.options.minZoom = i),
            this._loaded &&
            o !== i &&
            (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(i)
              : this
          );
        },
        setMaxZoom: function (i) {
          var o = this.options.maxZoom;
          return (
            (this.options.maxZoom = i),
            this._loaded &&
            o !== i &&
            (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(i)
              : this
          );
        },
        panInsideBounds: function (i, o) {
          this._enforcingBounds = !0;
          var l = this.getCenter(),
            d = this._limitCenter(l, this._zoom, ue(i));
          return (
            l.equals(d) || this.panTo(d, o),
            (this._enforcingBounds = !1),
            this
          );
        },
        panInside: function (i, o) {
          o = o || {};
          var l = V(o.paddingTopLeft || o.padding || [0, 0]),
            d = V(o.paddingBottomRight || o.padding || [0, 0]),
            m = this.project(this.getCenter()),
            y = this.project(i),
            T = this.getPixelBounds(),
            E = ee([T.min.add(l), T.max.subtract(d)]),
            M = E.getSize();
          if (!E.contains(y)) {
            this._enforcingBounds = !0;
            var R = y.subtract(E.getCenter()),
              F = E.extend(y).getSize().subtract(M);
            ((m.x += R.x < 0 ? -F.x : F.x),
              (m.y += R.y < 0 ? -F.y : F.y),
              this.panTo(this.unproject(m), o),
              (this._enforcingBounds = !1));
          }
          return this;
        },
        invalidateSize: function (i) {
          if (!this._loaded) return this;
          i = s({ animate: !1, pan: !0 }, i === !0 ? { animate: !0 } : i);
          var o = this.getSize();
          ((this._sizeChanged = !0), (this._lastCenter = null));
          var l = this.getSize(),
            d = o.divideBy(2).round(),
            m = l.divideBy(2).round(),
            y = d.subtract(m);
          return !y.x && !y.y
            ? this
            : (i.animate && i.pan
                ? this.panBy(y)
                : (i.pan && this._rawPanBy(y),
                  this.fire("move"),
                  i.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        u(this.fire, this, "moveend"),
                        200,
                      )))
                    : this.fire("moveend")),
              this.fire("resize", { oldSize: o, newSize: l }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
          );
        },
        locate: function (i) {
          if (
            ((i = this._locateOptions = s({ timeout: 1e4, watch: !1 }, i)),
            !("geolocation" in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported.",
              }),
              this
            );
          var o = u(this._handleGeolocationResponse, this),
            l = u(this._handleGeolocationError, this);
          return (
            i.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  o,
                  l,
                  i,
                ))
              : navigator.geolocation.getCurrentPosition(o, l, i),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (i) {
          if (this._container._leaflet_id) {
            var o = i.code,
              l =
                i.message ||
                (o === 1
                  ? "permission denied"
                  : o === 2
                    ? "position unavailable"
                    : "timeout");
            (this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire("locationerror", {
                code: o,
                message: "Geolocation error: " + l + ".",
              }));
          }
        },
        _handleGeolocationResponse: function (i) {
          if (this._container._leaflet_id) {
            var o = i.coords.latitude,
              l = i.coords.longitude,
              d = new re(o, l),
              m = d.toBounds(i.coords.accuracy * 2),
              y = this._locateOptions;
            if (y.setView) {
              var T = this.getBoundsZoom(m);
              this.setView(d, y.maxZoom ? Math.min(T, y.maxZoom) : T);
            }
            var E = { latlng: d, bounds: m, timestamp: i.timestamp };
            for (var M in i.coords)
              typeof i.coords[M] == "number" && (E[M] = i.coords[M]);
            this.fire("locationfound", E);
          }
        },
        addHandler: function (i, o) {
          if (!o) return this;
          var l = (this[i] = new o(this));
          return (this._handlers.push(l), this.options[i] && l.enable(), this);
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              "Map container is being reused by another instance",
            );
          try {
            (delete this._container._leaflet_id, delete this._containerId);
          } catch {
            ((this._container._leaflet_id = void 0),
              (this._containerId = void 0));
          }
          (this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            xe(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest &&
              (ce(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire("unload"));
          var i;
          for (i in this._layers) this._layers[i].remove();
          for (i in this._panes) xe(this._panes[i]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (i, o) {
          var l =
              "leaflet-pane" +
              (i ? " leaflet-" + i.replace("Pane", "") + "-pane" : ""),
            d = le("div", l, o || this._mapPane);
          return (i && (this._panes[i] = d), d);
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var i = this.getPixelBounds(),
            o = this.unproject(i.getBottomLeft()),
            l = this.unproject(i.getTopRight());
          return new Ce(o, l);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (i, o, l) {
          ((i = ue(i)), (l = V(l || [0, 0])));
          var d = this.getZoom() || 0,
            m = this.getMinZoom(),
            y = this.getMaxZoom(),
            T = i.getNorthWest(),
            E = i.getSouthEast(),
            M = this.getSize().subtract(l),
            R = ee(this.project(E, d), this.project(T, d)).getSize(),
            F = H.any3d ? this.options.zoomSnap : 1,
            G = M.x / R.x,
            te = M.y / R.y,
            tt = o ? Math.max(G, te) : Math.min(G, te);
          return (
            (d = this.getScaleZoom(tt, d)),
            F &&
              ((d = Math.round(d / (F / 100)) * (F / 100)),
              (d = o ? Math.ceil(d / F) * F : Math.floor(d / F) * F)),
            Math.max(m, Math.min(y, d))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new z(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0,
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (i, o) {
          var l = this._getTopLeftPoint(i, o);
          return new Z(l, l.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return (this._checkIfLoaded(), this._pixelOrigin);
        },
        getPixelWorldBounds: function (i) {
          return this.options.crs.getProjectedBounds(
            i === void 0 ? this.getZoom() : i,
          );
        },
        getPane: function (i) {
          return typeof i == "string" ? this._panes[i] : i;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (i, o) {
          var l = this.options.crs;
          return ((o = o === void 0 ? this._zoom : o), l.scale(i) / l.scale(o));
        },
        getScaleZoom: function (i, o) {
          var l = this.options.crs;
          o = o === void 0 ? this._zoom : o;
          var d = l.zoom(i * l.scale(o));
          return isNaN(d) ? 1 / 0 : d;
        },
        project: function (i, o) {
          return (
            (o = o === void 0 ? this._zoom : o),
            this.options.crs.latLngToPoint(Y(i), o)
          );
        },
        unproject: function (i, o) {
          return (
            (o = o === void 0 ? this._zoom : o),
            this.options.crs.pointToLatLng(V(i), o)
          );
        },
        layerPointToLatLng: function (i) {
          var o = V(i).add(this.getPixelOrigin());
          return this.unproject(o);
        },
        latLngToLayerPoint: function (i) {
          var o = this.project(Y(i))._round();
          return o._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (i) {
          return this.options.crs.wrapLatLng(Y(i));
        },
        wrapLatLngBounds: function (i) {
          return this.options.crs.wrapLatLngBounds(ue(i));
        },
        distance: function (i, o) {
          return this.options.crs.distance(Y(i), Y(o));
        },
        containerPointToLayerPoint: function (i) {
          return V(i).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (i) {
          return V(i).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (i) {
          var o = this.containerPointToLayerPoint(V(i));
          return this.layerPointToLatLng(o);
        },
        latLngToContainerPoint: function (i) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Y(i)));
        },
        mouseEventToContainerPoint: function (i) {
          return $h(i, this._container);
        },
        mouseEventToLayerPoint: function (i) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(i),
          );
        },
        mouseEventToLatLng: function (i) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(i));
        },
        _initContainer: function (i) {
          var o = (this._container = Zh(i));
          if (o) {
            if (o._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          (X(o, "scroll", this._onScroll, this), (this._containerId = h(o)));
        },
        _initLayout: function () {
          var i = this._container;
          ((this._fadeAnimated = this.options.fadeAnimation && H.any3d),
            J(
              i,
              "leaflet-container" +
                (H.touch ? " leaflet-touch" : "") +
                (H.retina ? " leaflet-retina" : "") +
                (H.ielt9 ? " leaflet-oldie" : "") +
                (H.safari ? " leaflet-safari" : "") +
                (this._fadeAnimated ? " leaflet-fade-anim" : ""),
            ));
          var o = Dr(i, "position");
          (o !== "absolute" &&
            o !== "relative" &&
            o !== "fixed" &&
            o !== "sticky" &&
            (i.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos());
        },
        _initPanes: function () {
          var i = (this._panes = {});
          ((this._paneRenderers = {}),
            (this._mapPane = this.createPane("mapPane", this._container)),
            Me(this._mapPane, new z(0, 0)),
            this.createPane("tilePane"),
            this.createPane("overlayPane"),
            this.createPane("shadowPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation ||
              (J(i.markerPane, "leaflet-zoom-hide"),
              J(i.shadowPane, "leaflet-zoom-hide")));
        },
        _resetView: function (i, o, l) {
          Me(this._mapPane, new z(0, 0));
          var d = !this._loaded;
          ((this._loaded = !0),
            (o = this._limitZoom(o)),
            this.fire("viewprereset"));
          var m = this._zoom !== o;
          (this._moveStart(m, l)._move(i, o)._moveEnd(m),
            this.fire("viewreset"),
            d && this.fire("load"));
        },
        _moveStart: function (i, o) {
          return (
            i && this.fire("zoomstart"),
            o || this.fire("movestart"),
            this
          );
        },
        _move: function (i, o, l, d) {
          o === void 0 && (o = this._zoom);
          var m = this._zoom !== o;
          return (
            (this._zoom = o),
            (this._lastCenter = i),
            (this._pixelOrigin = this._getNewPixelOrigin(i)),
            d
              ? l && l.pinch && this.fire("zoom", l)
              : ((m || (l && l.pinch)) && this.fire("zoom", l),
                this.fire("move", l)),
            this
          );
        },
        _moveEnd: function (i) {
          return (i && this.fire("zoomend"), this.fire("moveend"));
        },
        _stop: function () {
          return (
            ce(this._flyToFrame),
            this._panAnim && this._panAnim.stop(),
            this
          );
        },
        _rawPanBy: function (i) {
          Me(this._mapPane, this._getMapPanePos().subtract(i));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        _initEvents: function (i) {
          ((this._targets = {}), (this._targets[h(this._container)] = this));
          var o = i ? fe : X;
          (o(
            this._container,
            "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
            this._handleDOMEvent,
            this,
          ),
            this.options.trackResize &&
              o(window, "resize", this._onResize, this),
            H.any3d &&
              this.options.transform3DLimit &&
              (i ? this.off : this.on).call(this, "moveend", this._onMoveEnd));
        },
        _onResize: function () {
          (ce(this._resizeRequest),
            (this._resizeRequest = se(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this)));
        },
        _onScroll: function () {
          ((this._container.scrollTop = 0), (this._container.scrollLeft = 0));
        },
        _onMoveEnd: function () {
          var i = this._getMapPanePos();
          Math.max(Math.abs(i.x), Math.abs(i.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (i, o) {
          for (
            var l = [],
              d,
              m = o === "mouseout" || o === "mouseover",
              y = i.target || i.srcElement,
              T = !1;
            y;
          ) {
            if (
              ((d = this._targets[h(y)]),
              d &&
                (o === "click" || o === "preclick") &&
                this._draggableMoved(d))
            ) {
              T = !0;
              break;
            }
            if (
              (d && d.listens(o, !0) && ((m && !zl(y, i)) || (l.push(d), m))) ||
              y === this._container
            )
              break;
            y = y.parentNode;
          }
          return (
            !l.length && !T && !m && this.listens(o, !0) && (l = [this]),
            l
          );
        },
        _isClickDisabled: function (i) {
          for (; i && i !== this._container;) {
            if (i._leaflet_disable_click) return !0;
            i = i.parentNode;
          }
        },
        _handleDOMEvent: function (i) {
          var o = i.target || i.srcElement;
          if (!(
            !this._loaded ||
            o._leaflet_disable_events ||
            (i.type === "click" && this._isClickDisabled(o))
          )) {
            var l = i.type;
            (l === "mousedown" && Ll(o), this._fireDOMEvent(i, l));
          }
        },
        _mouseEvents: [
          "click",
          "dblclick",
          "mouseover",
          "mouseout",
          "contextmenu",
        ],
        _fireDOMEvent: function (i, o, l) {
          if (i.type === "click") {
            var d = s({}, i);
            ((d.type = "preclick"), this._fireDOMEvent(d, d.type, l));
          }
          var m = this._findEventTargets(i, o);
          if (l) {
            for (var y = [], T = 0; T < l.length; T++)
              l[T].listens(o, !0) && y.push(l[T]);
            m = y.concat(m);
          }
          if (m.length) {
            o === "contextmenu" && We(i);
            var E = m[0],
              M = { originalEvent: i };
            if (
              i.type !== "keypress" &&
              i.type !== "keydown" &&
              i.type !== "keyup"
            ) {
              var R = E.getLatLng && (!E._radius || E._radius <= 10);
              ((M.containerPoint = R
                ? this.latLngToContainerPoint(E.getLatLng())
                : this.mouseEventToContainerPoint(i)),
                (M.layerPoint = this.containerPointToLayerPoint(
                  M.containerPoint,
                )),
                (M.latlng = R
                  ? E.getLatLng()
                  : this.layerPointToLatLng(M.layerPoint)));
            }
            for (T = 0; T < m.length; T++)
              if (
                (m[T].fire(o, M, !0),
                M.originalEvent._stopped ||
                  (m[T].options.bubblingMouseEvents === !1 &&
                    N(this._mouseEvents, o) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (i) {
          return (
            (i = i.dragging && i.dragging.enabled() ? i : this),
            (i.dragging && i.dragging.moved()) ||
              (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var i = 0, o = this._handlers.length; i < o; i++)
            this._handlers[i].disable();
        },
        whenReady: function (i, o) {
          return (
            this._loaded
              ? i.call(o || this, { target: this })
              : this.on("load", i, o),
            this
          );
        },
        _getMapPanePos: function () {
          return li(this._mapPane) || new z(0, 0);
        },
        _moved: function () {
          var i = this._getMapPanePos();
          return i && !i.equals([0, 0]);
        },
        _getTopLeftPoint: function (i, o) {
          var l =
            i && o !== void 0
              ? this._getNewPixelOrigin(i, o)
              : this.getPixelOrigin();
          return l.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (i, o) {
          var l = this.getSize()._divideBy(2);
          return this.project(i, o)
            ._subtract(l)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (i, o, l) {
          var d = this._getNewPixelOrigin(l, o);
          return this.project(i, o)._subtract(d);
        },
        _latLngBoundsToNewLayerBounds: function (i, o, l) {
          var d = this._getNewPixelOrigin(l, o);
          return ee([
            this.project(i.getSouthWest(), o)._subtract(d),
            this.project(i.getNorthWest(), o)._subtract(d),
            this.project(i.getSouthEast(), o)._subtract(d),
            this.project(i.getNorthEast(), o)._subtract(d),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (i) {
          return this.latLngToLayerPoint(i).subtract(
            this._getCenterLayerPoint(),
          );
        },
        _limitCenter: function (i, o, l) {
          if (!l) return i;
          var d = this.project(i, o),
            m = this.getSize().divideBy(2),
            y = new Z(d.subtract(m), d.add(m)),
            T = this._getBoundsOffset(y, l, o);
          return Math.abs(T.x) <= 1 && Math.abs(T.y) <= 1
            ? i
            : this.unproject(d.add(T), o);
        },
        _limitOffset: function (i, o) {
          if (!o) return i;
          var l = this.getPixelBounds(),
            d = new Z(l.min.add(i), l.max.add(i));
          return i.add(this._getBoundsOffset(d, o));
        },
        _getBoundsOffset: function (i, o, l) {
          var d = ee(
              this.project(o.getNorthEast(), l),
              this.project(o.getSouthWest(), l),
            ),
            m = d.min.subtract(i.min),
            y = d.max.subtract(i.max),
            T = this._rebound(m.x, -y.x),
            E = this._rebound(m.y, -y.y);
          return new z(T, E);
        },
        _rebound: function (i, o) {
          return i + o > 0
            ? Math.round(i - o) / 2
            : Math.max(0, Math.ceil(i)) - Math.max(0, Math.floor(o));
        },
        _limitZoom: function (i) {
          var o = this.getMinZoom(),
            l = this.getMaxZoom(),
            d = H.any3d ? this.options.zoomSnap : 1;
          return (
            d && (i = Math.round(i / d) * d),
            Math.max(o, Math.min(l, i))
          );
        },
        _onPanTransitionStep: function () {
          this.fire("move");
        },
        _onPanTransitionEnd: function () {
          (be(this._mapPane, "leaflet-pan-anim"), this.fire("moveend"));
        },
        _tryAnimatedPan: function (i, o) {
          var l = this._getCenterOffset(i)._trunc();
          return (o && o.animate) !== !0 && !this.getSize().contains(l)
            ? !1
            : (this.panBy(l, o), !0);
        },
        _createAnimProxy: function () {
          var i = (this._proxy = le(
            "div",
            "leaflet-proxy leaflet-zoom-animated",
          ));
          (this._panes.mapPane.appendChild(i),
            this.on(
              "zoomanim",
              function (o) {
                var l = wl,
                  d = this._proxy.style[l];
                (ai(
                  this._proxy,
                  this.project(o.center, o.zoom),
                  this.getZoomScale(o.zoom, 1),
                ),
                  d === this._proxy.style[l] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd());
              },
              this,
            ),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this));
        },
        _destroyAnimProxy: function () {
          (xe(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy);
        },
        _animMoveEnd: function () {
          var i = this.getCenter(),
            o = this.getZoom();
          ai(this._proxy, this.project(i, o), this.getZoomScale(o, 1));
        },
        _catchTransitionEnd: function (i) {
          this._animatingZoom &&
            i.propertyName.indexOf("transform") >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            "leaflet-zoom-animated",
          ).length;
        },
        _tryAnimatedZoom: function (i, o, l) {
          if (this._animatingZoom) return !0;
          if (
            ((l = l || {}),
            !this._zoomAnimated ||
              l.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(o - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var d = this.getZoomScale(o),
            m = this._getCenterOffset(i)._divideBy(1 - 1 / d);
          return l.animate !== !0 && !this.getSize().contains(m)
            ? !1
            : (se(function () {
                this._moveStart(!0, l.noMoveStart || !1)._animateZoom(i, o, !0);
              }, this),
              !0);
        },
        _animateZoom: function (i, o, l, d) {
          this._mapPane &&
            (l &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = i),
              (this._animateToZoom = o),
              J(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", { center: i, zoom: o, noUpdate: d }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(u(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && be(this._mapPane, "leaflet-zoom-anim"),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire("zoom"),
            delete this._tempFireZoomEvent,
            this.fire("move"),
            this._moveEnd(!0));
        },
      });
    function Gx(i, o) {
      return new oe(i, o);
    }
    var Ot = he.extend({
        options: { position: "topright" },
        initialize: function (i) {
          C(this, i);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (i) {
          var o = this._map;
          return (
            o && o.removeControl(this),
            (this.options.position = i),
            o && o.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (i) {
          (this.remove(), (this._map = i));
          var o = (this._container = this.onAdd(i)),
            l = this.getPosition(),
            d = i._controlCorners[l];
          return (
            J(o, "leaflet-control"),
            l.indexOf("bottom") !== -1
              ? d.insertBefore(o, d.firstChild)
              : d.appendChild(o),
            this._map.on("unload", this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (xe(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off("unload", this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (i) {
          this._map &&
            i &&
            i.screenX > 0 &&
            i.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      Zr = function (i) {
        return new Ot(i);
      };
    oe.include({
      addControl: function (i) {
        return (i.addTo(this), this);
      },
      removeControl: function (i) {
        return (i.remove(), this);
      },
      _initControlPos: function () {
        var i = (this._controlCorners = {}),
          o = "leaflet-",
          l = (this._controlContainer = le(
            "div",
            o + "control-container",
            this._container,
          ));
        function d(m, y) {
          var T = o + m + " " + o + y;
          i[m + y] = le("div", T, l);
        }
        (d("top", "left"),
          d("top", "right"),
          d("bottom", "left"),
          d("bottom", "right"));
      },
      _clearControlPos: function () {
        for (var i in this._controlCorners) xe(this._controlCorners[i]);
        (xe(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer);
      },
    });
    var Kh = Ot.extend({
        options: {
          collapsed: !0,
          position: "topright",
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (i, o, l, d) {
            return l < d ? -1 : d < l ? 1 : 0;
          },
        },
        initialize: function (i, o, l) {
          (C(this, l),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1),
            (this._preventClick = !1));
          for (var d in i) this._addLayer(i[d], d);
          for (d in o) this._addLayer(o[d], d, !0);
        },
        onAdd: function (i) {
          (this._initLayout(),
            this._update(),
            (this._map = i),
            i.on("zoomend", this._checkDisabledLayers, this));
          for (var o = 0; o < this._layers.length; o++)
            this._layers[o].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function (i) {
          return (
            Ot.prototype.addTo.call(this, i),
            this._expandIfNotCollapsed()
          );
        },
        onRemove: function () {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var i = 0; i < this._layers.length; i++)
            this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        addBaseLayer: function (i, o) {
          return (this._addLayer(i, o), this._map ? this._update() : this);
        },
        addOverlay: function (i, o) {
          return (this._addLayer(i, o, !0), this._map ? this._update() : this);
        },
        removeLayer: function (i) {
          i.off("add remove", this._onLayerChange, this);
          var o = this._getLayer(h(i));
          return (
            o && this._layers.splice(this._layers.indexOf(o), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          (J(this._container, "leaflet-control-layers-expanded"),
            (this._section.style.height = null));
          var i = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            i < this._section.clientHeight
              ? (J(this._section, "leaflet-control-layers-scrollbar"),
                (this._section.style.height = i + "px"))
              : be(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return (be(this._container, "leaflet-control-layers-expanded"), this);
        },
        _initLayout: function () {
          var i = "leaflet-control-layers",
            o = (this._container = le("div", i)),
            l = this.options.collapsed;
          (o.setAttribute("aria-haspopup", !0), Fr(o), Al(o));
          var d = (this._section = le("section", i + "-list"));
          l &&
            (this._map.on("click", this.collapse, this),
            X(
              o,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this,
            ));
          var m = (this._layersLink = le("a", i + "-toggle", o));
          ((m.href = "#"),
            (m.title = "Layers"),
            m.setAttribute("role", "button"),
            X(
              m,
              {
                keydown: function (y) {
                  y.keyCode === 13 && this._expandSafely();
                },
                click: function (y) {
                  (We(y), this._expandSafely());
                },
              },
              this,
            ),
            l || this.expand(),
            (this._baseLayersList = le("div", i + "-base", d)),
            (this._separator = le("div", i + "-separator", d)),
            (this._overlaysList = le("div", i + "-overlays", d)),
            o.appendChild(d));
        },
        _getLayer: function (i) {
          for (var o = 0; o < this._layers.length; o++)
            if (this._layers[o] && h(this._layers[o].layer) === i)
              return this._layers[o];
        },
        _addLayer: function (i, o, l) {
          (this._map && i.on("add remove", this._onLayerChange, this),
            this._layers.push({ layer: i, name: o, overlay: l }),
            this.options.sortLayers &&
              this._layers.sort(
                u(function (d, m) {
                  return this.options.sortFunction(
                    d.layer,
                    m.layer,
                    d.name,
                    m.name,
                  );
                }, this),
              ),
            this.options.autoZIndex &&
              i.setZIndex &&
              (this._lastZIndex++, i.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed());
        },
        _update: function () {
          if (!this._container) return this;
          (ss(this._baseLayersList),
            ss(this._overlaysList),
            (this._layerControlInputs = []));
          var i,
            o,
            l,
            d,
            m = 0;
          for (l = 0; l < this._layers.length; l++)
            ((d = this._layers[l]),
              this._addItem(d),
              (o = o || d.overlay),
              (i = i || !d.overlay),
              (m += d.overlay ? 0 : 1));
          return (
            this.options.hideSingleBase &&
              ((i = i && m > 1),
              (this._baseLayersList.style.display = i ? "" : "none")),
            (this._separator.style.display = o && i ? "" : "none"),
            this
          );
        },
        _onLayerChange: function (i) {
          this._handlingClick || this._update();
          var o = this._getLayer(h(i.target)),
            l = o.overlay
              ? i.type === "add"
                ? "overlayadd"
                : "overlayremove"
              : i.type === "add"
                ? "baselayerchange"
                : null;
          l && this._map.fire(l, o);
        },
        _createRadioElement: function (i, o) {
          var l =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              i +
              '"' +
              (o ? ' checked="checked"' : "") +
              "/>",
            d = document.createElement("div");
          return ((d.innerHTML = l), d.firstChild);
        },
        _addItem: function (i) {
          var o = document.createElement("label"),
            l = this._map.hasLayer(i.layer),
            d;
          (i.overlay
            ? ((d = document.createElement("input")),
              (d.type = "checkbox"),
              (d.className = "leaflet-control-layers-selector"),
              (d.defaultChecked = l))
            : (d = this._createRadioElement(
                "leaflet-base-layers_" + h(this),
                l,
              )),
            this._layerControlInputs.push(d),
            (d.layerId = h(i.layer)),
            X(d, "click", this._onInputClick, this));
          var m = document.createElement("span");
          m.innerHTML = " " + i.name;
          var y = document.createElement("span");
          (o.appendChild(y), y.appendChild(d), y.appendChild(m));
          var T = i.overlay ? this._overlaysList : this._baseLayersList;
          return (T.appendChild(o), this._checkDisabledLayers(), o);
        },
        _onInputClick: function () {
          if (!this._preventClick) {
            var i = this._layerControlInputs,
              o,
              l,
              d = [],
              m = [];
            this._handlingClick = !0;
            for (var y = i.length - 1; y >= 0; y--)
              ((o = i[y]),
                (l = this._getLayer(o.layerId).layer),
                o.checked ? d.push(l) : o.checked || m.push(l));
            for (y = 0; y < m.length; y++)
              this._map.hasLayer(m[y]) && this._map.removeLayer(m[y]);
            for (y = 0; y < d.length; y++)
              this._map.hasLayer(d[y]) || this._map.addLayer(d[y]);
            ((this._handlingClick = !1), this._refocusOnMap());
          }
        },
        _checkDisabledLayers: function () {
          for (
            var i = this._layerControlInputs,
              o,
              l,
              d = this._map.getZoom(),
              m = i.length - 1;
            m >= 0;
            m--
          )
            ((o = i[m]),
              (l = this._getLayer(o.layerId).layer),
              (o.disabled =
                (l.options.minZoom !== void 0 && d < l.options.minZoom) ||
                (l.options.maxZoom !== void 0 && d > l.options.maxZoom)));
        },
        _expandIfNotCollapsed: function () {
          return (this._map && !this.options.collapsed && this.expand(), this);
        },
        _expandSafely: function () {
          var i = this._section;
          ((this._preventClick = !0), X(i, "click", We), this.expand());
          var o = this;
          setTimeout(function () {
            (fe(i, "click", We), (o._preventClick = !1));
          });
        },
      }),
      Kx = function (i, o, l) {
        return new Kh(i, o, l);
      },
      Rl = Ot.extend({
        options: {
          position: "topleft",
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: "Zoom in",
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: "Zoom out",
        },
        onAdd: function (i) {
          var o = "leaflet-control-zoom",
            l = le("div", o + " leaflet-bar"),
            d = this.options;
          return (
            (this._zoomInButton = this._createButton(
              d.zoomInText,
              d.zoomInTitle,
              o + "-in",
              l,
              this._zoomIn,
            )),
            (this._zoomOutButton = this._createButton(
              d.zoomOutText,
              d.zoomOutTitle,
              o + "-out",
              l,
              this._zoomOut,
            )),
            this._updateDisabled(),
            i.on("zoomend zoomlevelschange", this._updateDisabled, this),
            l
          );
        },
        onRemove: function (i) {
          i.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function () {
          return ((this._disabled = !0), this._updateDisabled(), this);
        },
        enable: function () {
          return ((this._disabled = !1), this._updateDisabled(), this);
        },
        _zoomIn: function (i) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (i.shiftKey ? 3 : 1),
            );
        },
        _zoomOut: function (i) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (i.shiftKey ? 3 : 1),
            );
        },
        _createButton: function (i, o, l, d, m) {
          var y = le("a", l, d);
          return (
            (y.innerHTML = i),
            (y.href = "#"),
            (y.title = o),
            y.setAttribute("role", "button"),
            y.setAttribute("aria-label", o),
            Fr(y),
            X(y, "click", ci),
            X(y, "click", m, this),
            X(y, "click", this._refocusOnMap, this),
            y
          );
        },
        _updateDisabled: function () {
          var i = this._map,
            o = "leaflet-disabled";
          (be(this._zoomInButton, o),
            be(this._zoomOutButton, o),
            this._zoomInButton.setAttribute("aria-disabled", "false"),
            this._zoomOutButton.setAttribute("aria-disabled", "false"),
            (this._disabled || i._zoom === i.getMinZoom()) &&
              (J(this._zoomOutButton, o),
              this._zoomOutButton.setAttribute("aria-disabled", "true")),
            (this._disabled || i._zoom === i.getMaxZoom()) &&
              (J(this._zoomInButton, o),
              this._zoomInButton.setAttribute("aria-disabled", "true")));
        },
      });
    (oe.mergeOptions({ zoomControl: !0 }),
      oe.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new Rl()), this.addControl(this.zoomControl));
      }));
    var Yx = function (i) {
        return new Rl(i);
      },
      Yh = Ot.extend({
        options: {
          position: "bottomleft",
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (i) {
          var o = "leaflet-control-scale",
            l = le("div", o),
            d = this.options;
          return (
            this._addScales(d, o + "-line", l),
            i.on(d.updateWhenIdle ? "moveend" : "move", this._update, this),
            i.whenReady(this._update, this),
            l
          );
        },
        onRemove: function (i) {
          i.off(
            this.options.updateWhenIdle ? "moveend" : "move",
            this._update,
            this,
          );
        },
        _addScales: function (i, o, l) {
          (i.metric && (this._mScale = le("div", o, l)),
            i.imperial && (this._iScale = le("div", o, l)));
        },
        _update: function () {
          var i = this._map,
            o = i.getSize().y / 2,
            l = i.distance(
              i.containerPointToLatLng([0, o]),
              i.containerPointToLatLng([this.options.maxWidth, o]),
            );
          this._updateScales(l);
        },
        _updateScales: function (i) {
          (this.options.metric && i && this._updateMetric(i),
            this.options.imperial && i && this._updateImperial(i));
        },
        _updateMetric: function (i) {
          var o = this._getRoundNum(i),
            l = o < 1e3 ? o + " m" : o / 1e3 + " km";
          this._updateScale(this._mScale, l, o / i);
        },
        _updateImperial: function (i) {
          var o = i * 3.2808399,
            l,
            d,
            m;
          o > 5280
            ? ((l = o / 5280),
              (d = this._getRoundNum(l)),
              this._updateScale(this._iScale, d + " mi", d / l))
            : ((m = this._getRoundNum(o)),
              this._updateScale(this._iScale, m + " ft", m / o));
        },
        _updateScale: function (i, o, l) {
          ((i.style.width = Math.round(this.options.maxWidth * l) + "px"),
            (i.innerHTML = o));
        },
        _getRoundNum: function (i) {
          var o = Math.pow(10, (Math.floor(i) + "").length - 1),
            l = i / o;
          return (
            (l = l >= 10 ? 10 : l >= 5 ? 5 : l >= 3 ? 3 : l >= 2 ? 2 : 1),
            o * l
          );
        },
      }),
      Qx = function (i) {
        return new Yh(i);
      },
      Xx =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      Ol = Ot.extend({
        options: {
          position: "bottomright",
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (H.inlineSvg ? Xx + " " : "") +
            "Leaflet</a>",
        },
        initialize: function (i) {
          (C(this, i), (this._attributions = {}));
        },
        onAdd: function (i) {
          ((i.attributionControl = this),
            (this._container = le("div", "leaflet-control-attribution")),
            Fr(this._container));
          for (var o in i._layers)
            i._layers[o].getAttribution &&
              this.addAttribution(i._layers[o].getAttribution());
          return (
            this._update(),
            i.on("layeradd", this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (i) {
          i.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function (i) {
          i.layer.getAttribution &&
            (this.addAttribution(i.layer.getAttribution()),
            i.layer.once(
              "remove",
              function () {
                this.removeAttribution(i.layer.getAttribution());
              },
              this,
            ));
        },
        setPrefix: function (i) {
          return ((this.options.prefix = i), this._update(), this);
        },
        addAttribution: function (i) {
          return i
            ? (this._attributions[i] || (this._attributions[i] = 0),
              this._attributions[i]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (i) {
          return i
            ? (this._attributions[i] &&
                (this._attributions[i]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var i = [];
            for (var o in this._attributions)
              this._attributions[o] && i.push(o);
            var l = [];
            (this.options.prefix && l.push(this.options.prefix),
              i.length && l.push(i.join(", ")),
              (this._container.innerHTML = l.join(
                ' <span aria-hidden="true">|</span> ',
              )));
          }
        },
      });
    (oe.mergeOptions({ attributionControl: !0 }),
      oe.addInitHook(function () {
        this.options.attributionControl && new Ol().addTo(this);
      }));
    var Jx = function (i) {
      return new Ol(i);
    };
    ((Ot.Layers = Kh),
      (Ot.Zoom = Rl),
      (Ot.Scale = Yh),
      (Ot.Attribution = Ol),
      (Zr.layers = Kx),
      (Zr.zoom = Yx),
      (Zr.scale = Qx),
      (Zr.attribution = Jx));
    var Yt = he.extend({
      initialize: function (i) {
        this._map = i;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    Yt.addTo = function (i, o) {
      return (i.addHandler(o, this), this);
    };
    var e_ = { Events: ie },
      Qh = H.touch ? "touchstart mousedown" : "mousedown",
      bn = Be.extend({
        options: { clickTolerance: 3 },
        initialize: function (i, o, l, d) {
          (C(this, d),
            (this._element = i),
            (this._dragStartTarget = o || i),
            (this._preventOutline = l));
        },
        enable: function () {
          this._enabled ||
            (X(this._dragStartTarget, Qh, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (bn._dragging === this && this.finishDrag(!0),
            fe(this._dragStartTarget, Qh, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (i) {
          if (
            this._enabled &&
            ((this._moved = !1), !Pl(this._element, "leaflet-zoom-anim"))
          ) {
            if (i.touches && i.touches.length !== 1) {
              bn._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(
                bn._dragging ||
                i.shiftKey ||
                (i.which !== 1 && i.button !== 1 && !i.touches)
              ) &&
              ((bn._dragging = this),
              this._preventOutline && Ll(this._element),
              Cl(),
              Ir(),
              !this._moving)
            ) {
              this.fire("down");
              var o = i.touches ? i.touches[0] : i,
                l = Uh(this._element);
              ((this._startPoint = new z(o.clientX, o.clientY)),
                (this._startPos = li(this._element)),
                (this._parentScale = Nl(l)));
              var d = i.type === "mousedown";
              (X(document, d ? "mousemove" : "touchmove", this._onMove, this),
                X(
                  document,
                  d ? "mouseup" : "touchend touchcancel",
                  this._onUp,
                  this,
                ));
            }
          }
        },
        _onMove: function (i) {
          if (this._enabled) {
            if (i.touches && i.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var o = i.touches && i.touches.length === 1 ? i.touches[0] : i,
              l = new z(o.clientX, o.clientY)._subtract(this._startPoint);
            (!l.x && !l.y) ||
              Math.abs(l.x) + Math.abs(l.y) < this.options.clickTolerance ||
              ((l.x /= this._parentScale.x),
              (l.y /= this._parentScale.y),
              We(i),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                J(document.body, "leaflet-dragging"),
                (this._lastTarget = i.target || i.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                J(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(l)),
              (this._moving = !0),
              (this._lastEvent = i),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var i = { originalEvent: this._lastEvent };
          (this.fire("predrag", i),
            Me(this._element, this._newPos),
            this.fire("drag", i));
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (i) {
          (be(document.body, "leaflet-dragging"),
            this._lastTarget &&
              (be(this._lastTarget, "leaflet-drag-target"),
              (this._lastTarget = null)),
            fe(document, "mousemove touchmove", this._onMove, this),
            fe(document, "mouseup touchend touchcancel", this._onUp, this),
            Tl(),
            Br());
          var o = this._moved && this._moving;
          ((this._moving = !1),
            (bn._dragging = !1),
            o &&
              this.fire("dragend", {
                noInertia: i,
                distance: this._newPos.distanceTo(this._startPos),
              }));
        },
      });
    function Xh(i, o, l) {
      var d,
        m = [1, 4, 2, 8],
        y,
        T,
        E,
        M,
        R,
        F,
        G,
        te;
      for (y = 0, F = i.length; y < F; y++) i[y]._code = di(i[y], o);
      for (E = 0; E < 4; E++) {
        for (G = m[E], d = [], y = 0, F = i.length, T = F - 1; y < F; T = y++)
          ((M = i[y]),
            (R = i[T]),
            M._code & G
              ? R._code & G ||
                ((te = ds(R, M, G, o, l)), (te._code = di(te, o)), d.push(te))
              : (R._code & G &&
                  ((te = ds(R, M, G, o, l)),
                  (te._code = di(te, o)),
                  d.push(te)),
                d.push(M)));
        i = d;
      }
      return i;
    }
    function Jh(i, o) {
      var l, d, m, y, T, E, M, R, F;
      if (!i || i.length === 0) throw new Error("latlngs not passed");
      kt(i) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (i = i[0]));
      var G = Y([0, 0]),
        te = ue(i),
        tt =
          te.getNorthWest().distanceTo(te.getSouthWest()) *
          te.getNorthEast().distanceTo(te.getNorthWest());
      tt < 1700 && (G = Dl(i));
      var Ve = i.length,
        St = [];
      for (l = 0; l < Ve; l++) {
        var lt = Y(i[l]);
        St.push(o.project(Y([lt.lat - G.lat, lt.lng - G.lng])));
      }
      for (E = M = R = 0, l = 0, d = Ve - 1; l < Ve; d = l++)
        ((m = St[l]),
          (y = St[d]),
          (T = m.y * y.x - y.y * m.x),
          (M += (m.x + y.x) * T),
          (R += (m.y + y.y) * T),
          (E += T * 3));
      E === 0 ? (F = St[0]) : (F = [M / E, R / E]);
      var Wi = o.unproject(V(F));
      return Y([Wi.lat + G.lat, Wi.lng + G.lng]);
    }
    function Dl(i) {
      for (var o = 0, l = 0, d = 0, m = 0; m < i.length; m++) {
        var y = Y(i[m]);
        ((o += y.lat), (l += y.lng), d++);
      }
      return Y([o / d, l / d]);
    }
    var t_ = {
      __proto__: null,
      clipPolygon: Xh,
      polygonCenter: Jh,
      centroid: Dl,
    };
    function ef(i, o) {
      if (!o || !i.length) return i.slice();
      var l = o * o;
      return ((i = r_(i, l)), (i = i_(i, l)), i);
    }
    function tf(i, o, l) {
      return Math.sqrt(Ur(i, o, l, !0));
    }
    function n_(i, o, l) {
      return Ur(i, o, l);
    }
    function i_(i, o) {
      var l = i.length,
        d = typeof Uint8Array < "u" ? Uint8Array : Array,
        m = new d(l);
      ((m[0] = m[l - 1] = 1), Il(i, m, o, 0, l - 1));
      var y,
        T = [];
      for (y = 0; y < l; y++) m[y] && T.push(i[y]);
      return T;
    }
    function Il(i, o, l, d, m) {
      var y = 0,
        T,
        E,
        M;
      for (E = d + 1; E <= m - 1; E++)
        ((M = Ur(i[E], i[d], i[m], !0)), M > y && ((T = E), (y = M)));
      y > l && ((o[T] = 1), Il(i, o, l, d, T), Il(i, o, l, T, m));
    }
    function r_(i, o) {
      for (var l = [i[0]], d = 1, m = 0, y = i.length; d < y; d++)
        o_(i[d], i[m]) > o && (l.push(i[d]), (m = d));
      return (m < y - 1 && l.push(i[y - 1]), l);
    }
    var nf;
    function rf(i, o, l, d, m) {
      var y = d ? nf : di(i, l),
        T = di(o, l),
        E,
        M,
        R;
      for (nf = T; ;) {
        if (!(y | T)) return [i, o];
        if (y & T) return !1;
        ((E = y || T),
          (M = ds(i, o, E, l, m)),
          (R = di(M, l)),
          E === y ? ((i = M), (y = R)) : ((o = M), (T = R)));
      }
    }
    function ds(i, o, l, d, m) {
      var y = o.x - i.x,
        T = o.y - i.y,
        E = d.min,
        M = d.max,
        R,
        F;
      return (
        l & 8
          ? ((R = i.x + (y * (M.y - i.y)) / T), (F = M.y))
          : l & 4
            ? ((R = i.x + (y * (E.y - i.y)) / T), (F = E.y))
            : l & 2
              ? ((R = M.x), (F = i.y + (T * (M.x - i.x)) / y))
              : l & 1 && ((R = E.x), (F = i.y + (T * (E.x - i.x)) / y)),
        new z(R, F, m)
      );
    }
    function di(i, o) {
      var l = 0;
      return (
        i.x < o.min.x ? (l |= 1) : i.x > o.max.x && (l |= 2),
        i.y < o.min.y ? (l |= 4) : i.y > o.max.y && (l |= 8),
        l
      );
    }
    function o_(i, o) {
      var l = o.x - i.x,
        d = o.y - i.y;
      return l * l + d * d;
    }
    function Ur(i, o, l, d) {
      var m = o.x,
        y = o.y,
        T = l.x - m,
        E = l.y - y,
        M = T * T + E * E,
        R;
      return (
        M > 0 &&
          ((R = ((i.x - m) * T + (i.y - y) * E) / M),
          R > 1
            ? ((m = l.x), (y = l.y))
            : R > 0 && ((m += T * R), (y += E * R))),
        (T = i.x - m),
        (E = i.y - y),
        d ? T * T + E * E : new z(m, y)
      );
    }
    function kt(i) {
      return !w(i[0]) || (typeof i[0][0] != "object" && typeof i[0][0] < "u");
    }
    function of(i) {
      return (
        console.warn(
          "Deprecated use of _flat, please use L.LineUtil.isFlat instead.",
        ),
        kt(i)
      );
    }
    function sf(i, o) {
      var l, d, m, y, T, E, M, R;
      if (!i || i.length === 0) throw new Error("latlngs not passed");
      kt(i) ||
        (console.warn("latlngs are not flat! Only the first ring will be used"),
        (i = i[0]));
      var F = Y([0, 0]),
        G = ue(i),
        te =
          G.getNorthWest().distanceTo(G.getSouthWest()) *
          G.getNorthEast().distanceTo(G.getNorthWest());
      te < 1700 && (F = Dl(i));
      var tt = i.length,
        Ve = [];
      for (l = 0; l < tt; l++) {
        var St = Y(i[l]);
        Ve.push(o.project(Y([St.lat - F.lat, St.lng - F.lng])));
      }
      for (l = 0, d = 0; l < tt - 1; l++) d += Ve[l].distanceTo(Ve[l + 1]) / 2;
      if (d === 0) R = Ve[0];
      else
        for (l = 0, y = 0; l < tt - 1; l++)
          if (
            ((T = Ve[l]),
            (E = Ve[l + 1]),
            (m = T.distanceTo(E)),
            (y += m),
            y > d)
          ) {
            ((M = (y - d) / m),
              (R = [E.x - M * (E.x - T.x), E.y - M * (E.y - T.y)]));
            break;
          }
      var lt = o.unproject(V(R));
      return Y([lt.lat + F.lat, lt.lng + F.lng]);
    }
    var s_ = {
        __proto__: null,
        simplify: ef,
        pointToSegmentDistance: tf,
        closestPointOnSegment: n_,
        clipSegment: rf,
        _getEdgeIntersection: ds,
        _getBitCode: di,
        _sqClosestPointOnSegment: Ur,
        isFlat: kt,
        _flat: of,
        polylineCenter: sf,
      },
      Bl = {
        project: function (i) {
          return new z(i.lng, i.lat);
        },
        unproject: function (i) {
          return new re(i.y, i.x);
        },
        bounds: new Z([-180, -90], [180, 90]),
      },
      Vl = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Z(
          [-2003750834279e-5, -1549657073972e-5],
          [2003750834279e-5, 1876465623138e-5],
        ),
        project: function (i) {
          var o = Math.PI / 180,
            l = this.R,
            d = i.lat * o,
            m = this.R_MINOR / l,
            y = Math.sqrt(1 - m * m),
            T = y * Math.sin(d),
            E =
              Math.tan(Math.PI / 4 - d / 2) /
              Math.pow((1 - T) / (1 + T), y / 2);
          return (
            (d = -l * Math.log(Math.max(E, 1e-10))),
            new z(i.lng * o * l, d)
          );
        },
        unproject: function (i) {
          for (
            var o = 180 / Math.PI,
              l = this.R,
              d = this.R_MINOR / l,
              m = Math.sqrt(1 - d * d),
              y = Math.exp(-i.y / l),
              T = Math.PI / 2 - 2 * Math.atan(y),
              E = 0,
              M = 0.1,
              R;
            E < 15 && Math.abs(M) > 1e-7;
            E++
          )
            ((R = m * Math.sin(T)),
              (R = Math.pow((1 - R) / (1 + R), m / 2)),
              (M = Math.PI / 2 - 2 * Math.atan(y * R) - T),
              (T += M));
          return new re(T * o, (i.x * o) / l);
        },
      },
      a_ = { __proto__: null, LonLat: Bl, Mercator: Vl, SphericalMercator: Tn },
      l_ = s({}, qt, {
        code: "EPSG:3395",
        projection: Vl,
        transformation: (function () {
          var i = 0.5 / (Math.PI * Vl.R);
          return Oi(i, 0.5, -i, 0.5);
        })(),
      }),
      af = s({}, qt, {
        code: "EPSG:4326",
        projection: Bl,
        transformation: Oi(1 / 180, 1, -1 / 180, 0.5),
      }),
      u_ = s({}, He, {
        projection: Bl,
        transformation: Oi(1, 0, -1, 0),
        scale: function (i) {
          return Math.pow(2, i);
        },
        zoom: function (i) {
          return Math.log(i) / Math.LN2;
        },
        distance: function (i, o) {
          var l = o.lng - i.lng,
            d = o.lat - i.lat;
          return Math.sqrt(l * l + d * d);
        },
        infinite: !0,
      });
    ((He.Earth = qt),
      (He.EPSG3395 = l_),
      (He.EPSG3857 = pl),
      (He.EPSG900913 = mx),
      (He.EPSG4326 = af),
      (He.Simple = u_));
    var Dt = Be.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (i) {
        return (i.addLayer(this), this);
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (i) {
        return (i && i.removeLayer(this), this);
      },
      getPane: function (i) {
        return this._map.getPane(i ? this.options[i] || i : this.options.pane);
      },
      addInteractiveTarget: function (i) {
        return ((this._map._targets[h(i)] = this), this);
      },
      removeInteractiveTarget: function (i) {
        return (delete this._map._targets[h(i)], this);
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (i) {
        var o = i.target;
        if (o.hasLayer(this)) {
          if (
            ((this._map = o),
            (this._zoomAnimated = o._zoomAnimated),
            this.getEvents)
          ) {
            var l = this.getEvents();
            (o.on(l, this),
              this.once(
                "remove",
                function () {
                  o.off(l, this);
                },
                this,
              ));
          }
          (this.onAdd(o),
            this.fire("add"),
            o.fire("layeradd", { layer: this }));
        }
      },
    });
    oe.include({
      addLayer: function (i) {
        if (!i._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var o = h(i);
        return this._layers[o]
          ? this
          : ((this._layers[o] = i),
            (i._mapToAdd = this),
            i.beforeAdd && i.beforeAdd(this),
            this.whenReady(i._layerAdd, i),
            this);
      },
      removeLayer: function (i) {
        var o = h(i);
        return this._layers[o]
          ? (this._loaded && i.onRemove(this),
            delete this._layers[o],
            this._loaded &&
              (this.fire("layerremove", { layer: i }), i.fire("remove")),
            (i._map = i._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (i) {
        return h(i) in this._layers;
      },
      eachLayer: function (i, o) {
        for (var l in this._layers) i.call(o, this._layers[l]);
        return this;
      },
      _addLayers: function (i) {
        i = i ? (w(i) ? i : [i]) : [];
        for (var o = 0, l = i.length; o < l; o++) this.addLayer(i[o]);
      },
      _addZoomLimit: function (i) {
        (!isNaN(i.options.maxZoom) || !isNaN(i.options.minZoom)) &&
          ((this._zoomBoundLayers[h(i)] = i), this._updateZoomLevels());
      },
      _removeZoomLimit: function (i) {
        var o = h(i);
        this._zoomBoundLayers[o] &&
          (delete this._zoomBoundLayers[o], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var i = 1 / 0,
          o = -1 / 0,
          l = this._getZoomSpan();
        for (var d in this._zoomBoundLayers) {
          var m = this._zoomBoundLayers[d].options;
          ((i = m.minZoom === void 0 ? i : Math.min(i, m.minZoom)),
            (o = m.maxZoom === void 0 ? o : Math.max(o, m.maxZoom)));
        }
        ((this._layersMaxZoom = o === -1 / 0 ? void 0 : o),
          (this._layersMinZoom = i === 1 / 0 ? void 0 : i),
          l !== this._getZoomSpan() && this.fire("zoomlevelschange"),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom));
      },
    });
    var Vi = Dt.extend({
        initialize: function (i, o) {
          (C(this, o), (this._layers = {}));
          var l, d;
          if (i) for (l = 0, d = i.length; l < d; l++) this.addLayer(i[l]);
        },
        addLayer: function (i) {
          var o = this.getLayerId(i);
          return (
            (this._layers[o] = i),
            this._map && this._map.addLayer(i),
            this
          );
        },
        removeLayer: function (i) {
          var o = i in this._layers ? i : this.getLayerId(i);
          return (
            this._map &&
              this._layers[o] &&
              this._map.removeLayer(this._layers[o]),
            delete this._layers[o],
            this
          );
        },
        hasLayer: function (i) {
          var o = typeof i == "number" ? i : this.getLayerId(i);
          return o in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (i) {
          var o = Array.prototype.slice.call(arguments, 1),
            l,
            d;
          for (l in this._layers)
            ((d = this._layers[l]), d[i] && d[i].apply(d, o));
          return this;
        },
        onAdd: function (i) {
          this.eachLayer(i.addLayer, i);
        },
        onRemove: function (i) {
          this.eachLayer(i.removeLayer, i);
        },
        eachLayer: function (i, o) {
          for (var l in this._layers) i.call(o, this._layers[l]);
          return this;
        },
        getLayer: function (i) {
          return this._layers[i];
        },
        getLayers: function () {
          var i = [];
          return (this.eachLayer(i.push, i), i);
        },
        setZIndex: function (i) {
          return this.invoke("setZIndex", i);
        },
        getLayerId: function (i) {
          return h(i);
        },
      }),
      c_ = function (i, o) {
        return new Vi(i, o);
      },
      an = Vi.extend({
        addLayer: function (i) {
          return this.hasLayer(i)
            ? this
            : (i.addEventParent(this),
              Vi.prototype.addLayer.call(this, i),
              this.fire("layeradd", { layer: i }));
        },
        removeLayer: function (i) {
          return this.hasLayer(i)
            ? (i in this._layers && (i = this._layers[i]),
              i.removeEventParent(this),
              Vi.prototype.removeLayer.call(this, i),
              this.fire("layerremove", { layer: i }))
            : this;
        },
        setStyle: function (i) {
          return this.invoke("setStyle", i);
        },
        bringToFront: function () {
          return this.invoke("bringToFront");
        },
        bringToBack: function () {
          return this.invoke("bringToBack");
        },
        getBounds: function () {
          var i = new Ce();
          for (var o in this._layers) {
            var l = this._layers[o];
            i.extend(l.getBounds ? l.getBounds() : l.getLatLng());
          }
          return i;
        },
      }),
      d_ = function (i, o) {
        return new an(i, o);
      },
      Fi = he.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (i) {
          C(this, i);
        },
        createIcon: function (i) {
          return this._createIcon("icon", i);
        },
        createShadow: function (i) {
          return this._createIcon("shadow", i);
        },
        _createIcon: function (i, o) {
          var l = this._getIconUrl(i);
          if (!l) {
            if (i === "icon")
              throw new Error(
                "iconUrl not set in Icon options (see the docs).",
              );
            return null;
          }
          var d = this._createImg(l, o && o.tagName === "IMG" ? o : null);
          return (
            this._setIconStyles(d, i),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (d.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            d
          );
        },
        _setIconStyles: function (i, o) {
          var l = this.options,
            d = l[o + "Size"];
          typeof d == "number" && (d = [d, d]);
          var m = V(d),
            y = V(
              (o === "shadow" && l.shadowAnchor) ||
                l.iconAnchor ||
                (m && m.divideBy(2, !0)),
            );
          ((i.className = "leaflet-marker-" + o + " " + (l.className || "")),
            y &&
              ((i.style.marginLeft = -y.x + "px"),
              (i.style.marginTop = -y.y + "px")),
            m && ((i.style.width = m.x + "px"), (i.style.height = m.y + "px")));
        },
        _createImg: function (i, o) {
          return ((o = o || document.createElement("img")), (o.src = i), o);
        },
        _getIconUrl: function (i) {
          return (
            (H.retina && this.options[i + "RetinaUrl"]) ||
            this.options[i + "Url"]
          );
        },
      });
    function h_(i) {
      return new Fi(i);
    }
    var Hr = Fi.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (i) {
          return (
            typeof Hr.imagePath != "string" &&
              (Hr.imagePath = this._detectIconPath()),
            (this.options.imagePath || Hr.imagePath) +
              Fi.prototype._getIconUrl.call(this, i)
          );
        },
        _stripUrl: function (i) {
          var o = function (l, d, m) {
            var y = d.exec(l);
            return y && y[m];
          };
          return (
            (i = o(i, /^url\((['"])?(.+)\1\)$/, 2)),
            i && o(i, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var i = le("div", "leaflet-default-icon-path", document.body),
            o = Dr(i, "background-image") || Dr(i, "backgroundImage");
          if ((document.body.removeChild(i), (o = this._stripUrl(o)), o))
            return o;
          var l = document.querySelector('link[href$="leaflet.css"]');
          return l ? l.href.substring(0, l.href.length - 11 - 1) : "";
        },
      }),
      lf = Yt.extend({
        initialize: function (i) {
          this._marker = i;
        },
        addHooks: function () {
          var i = this._marker._icon;
          (this._draggable || (this._draggable = new bn(i, i, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this,
              )
              .enable(),
            J(i, "leaflet-marker-draggable"));
        },
        removeHooks: function () {
          (this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this,
            )
            .disable(),
            this._marker._icon &&
              be(this._marker._icon, "leaflet-marker-draggable"));
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (i) {
          var o = this._marker,
            l = o._map,
            d = this._marker.options.autoPanSpeed,
            m = this._marker.options.autoPanPadding,
            y = li(o._icon),
            T = l.getPixelBounds(),
            E = l.getPixelOrigin(),
            M = ee(T.min._subtract(E).add(m), T.max._subtract(E).subtract(m));
          if (!M.contains(y)) {
            var R = V(
              (Math.max(M.max.x, y.x) - M.max.x) / (T.max.x - M.max.x) -
                (Math.min(M.min.x, y.x) - M.min.x) / (T.min.x - M.min.x),
              (Math.max(M.max.y, y.y) - M.max.y) / (T.max.y - M.max.y) -
                (Math.min(M.min.y, y.y) - M.min.y) / (T.min.y - M.min.y),
            ).multiplyBy(d);
            (l.panBy(R, { animate: !1 }),
              this._draggable._newPos._add(R),
              this._draggable._startPos._add(R),
              Me(o._icon, this._draggable._newPos),
              this._onDrag(i),
              (this._panRequest = se(this._adjustPan.bind(this, i))));
          }
        },
        _onDragStart: function () {
          ((this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart"));
        },
        _onPreDrag: function (i) {
          this._marker.options.autoPan &&
            (ce(this._panRequest),
            (this._panRequest = se(this._adjustPan.bind(this, i))));
        },
        _onDrag: function (i) {
          var o = this._marker,
            l = o._shadow,
            d = li(o._icon),
            m = o._map.layerPointToLatLng(d);
          (l && Me(l, d),
            (o._latlng = m),
            (i.latlng = m),
            (i.oldLatLng = this._oldLatLng),
            o.fire("move", i).fire("drag", i));
        },
        _onDragEnd: function (i) {
          (ce(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", i));
        },
      }),
      hs = Dt.extend({
        options: {
          icon: new Hr(),
          interactive: !0,
          keyboard: !0,
          title: "",
          alt: "Marker",
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: "markerPane",
          shadowPane: "shadowPane",
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (i, o) {
          (C(this, o), (this._latlng = Y(i)));
        },
        onAdd: function (i) {
          ((this._zoomAnimated =
            this._zoomAnimated && i.options.markerZoomAnimation),
            this._zoomAnimated && i.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update());
        },
        onRemove: function (i) {
          (this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && i.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow());
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (i) {
          var o = this._latlng;
          return (
            (this._latlng = Y(i)),
            this.update(),
            this.fire("move", { oldLatLng: o, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (i) {
          return ((this.options.zIndexOffset = i), this.update());
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (i) {
          return (
            (this.options.icon = i),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var i = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(i);
          }
          return this;
        },
        _initIcon: function () {
          var i = this.options,
            o = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
            l = i.icon.createIcon(this._icon),
            d = !1;
          (l !== this._icon &&
            (this._icon && this._removeIcon(),
            (d = !0),
            i.title && (l.title = i.title),
            l.tagName === "IMG" && (l.alt = i.alt || "")),
            J(l, o),
            i.keyboard &&
              ((l.tabIndex = "0"), l.setAttribute("role", "button")),
            (this._icon = l),
            i.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              X(l, "focus", this._panOnFocus, this));
          var m = i.icon.createShadow(this._shadow),
            y = !1;
          (m !== this._shadow && (this._removeShadow(), (y = !0)),
            m && (J(m, o), (m.alt = "")),
            (this._shadow = m),
            i.opacity < 1 && this._updateOpacity(),
            d && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            m && y && this.getPane(i.shadowPane).appendChild(this._shadow));
        },
        _removeIcon: function () {
          (this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              fe(this._icon, "focus", this._panOnFocus, this),
            xe(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null));
        },
        _removeShadow: function () {
          (this._shadow && xe(this._shadow), (this._shadow = null));
        },
        _setPos: function (i) {
          (this._icon && Me(this._icon, i),
            this._shadow && Me(this._shadow, i),
            (this._zIndex = i.y + this.options.zIndexOffset),
            this._resetZIndex());
        },
        _updateZIndex: function (i) {
          this._icon && (this._icon.style.zIndex = this._zIndex + i);
        },
        _animateZoom: function (i) {
          var o = this._map
            ._latLngToNewLayerPoint(this._latlng, i.zoom, i.center)
            .round();
          this._setPos(o);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (J(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            lf)
          ) {
            var i = this.options.draggable;
            (this.dragging &&
              ((i = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new lf(this)),
              i && this.dragging.enable());
          }
        },
        setOpacity: function (i) {
          return (
            (this.options.opacity = i),
            this._map && this._updateOpacity(),
            this
          );
        },
        _updateOpacity: function () {
          var i = this.options.opacity;
          (this._icon && Pt(this._icon, i),
            this._shadow && Pt(this._shadow, i));
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var i = this._map;
          if (i) {
            var o = this.options.icon.options,
              l = o.iconSize ? V(o.iconSize) : V(0, 0),
              d = o.iconAnchor ? V(o.iconAnchor) : V(0, 0);
            i.panInside(this._latlng, {
              paddingTopLeft: d,
              paddingBottomRight: l.subtract(d),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function f_(i, o) {
      return new hs(i, o);
    }
    var Ln = Dt.extend({
        options: {
          stroke: !0,
          color: "#3388ff",
          weight: 3,
          opacity: 1,
          lineCap: "round",
          lineJoin: "round",
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: "evenodd",
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (i) {
          this._renderer = i.getRenderer(this);
        },
        onAdd: function () {
          (this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this));
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return (this._map && this._renderer._updatePath(this), this);
        },
        setStyle: function (i) {
          return (
            C(this, i),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                i &&
                Object.prototype.hasOwnProperty.call(i, "weight") &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return (this._renderer && this._renderer._bringToFront(this), this);
        },
        bringToBack: function () {
          return (this._renderer && this._renderer._bringToBack(this), this);
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          (this._project(), this._update());
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      fs = Ln.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (i, o) {
          (C(this, o),
            (this._latlng = Y(i)),
            (this._radius = this.options.radius));
        },
        setLatLng: function (i) {
          var o = this._latlng;
          return (
            (this._latlng = Y(i)),
            this.redraw(),
            this.fire("move", { oldLatLng: o, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (i) {
          return ((this.options.radius = this._radius = i), this.redraw());
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (i) {
          var o = (i && i.radius) || this._radius;
          return (Ln.prototype.setStyle.call(this, i), this.setRadius(o), this);
        },
        _project: function () {
          ((this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds());
        },
        _updateBounds: function () {
          var i = this._radius,
            o = this._radiusY || i,
            l = this._clickTolerance(),
            d = [i + l, o + l];
          this._pxBounds = new Z(this._point.subtract(d), this._point.add(d));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (i) {
          return (
            i.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function p_(i, o) {
      return new fs(i, o);
    }
    var Fl = fs.extend({
      initialize: function (i, o, l) {
        if (
          (typeof o == "number" && (o = s({}, l, { radius: o })),
          C(this, o),
          (this._latlng = Y(i)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (i) {
        return ((this._mRadius = i), this.redraw());
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var i = [this._radius, this._radiusY || this._radius];
        return new Ce(
          this._map.layerPointToLatLng(this._point.subtract(i)),
          this._map.layerPointToLatLng(this._point.add(i)),
        );
      },
      setStyle: Ln.prototype.setStyle,
      _project: function () {
        var i = this._latlng.lng,
          o = this._latlng.lat,
          l = this._map,
          d = l.options.crs;
        if (d.distance === qt.distance) {
          var m = Math.PI / 180,
            y = this._mRadius / qt.R / m,
            T = l.project([o + y, i]),
            E = l.project([o - y, i]),
            M = T.add(E).divideBy(2),
            R = l.unproject(M).lat,
            F =
              Math.acos(
                (Math.cos(y * m) - Math.sin(o * m) * Math.sin(R * m)) /
                  (Math.cos(o * m) * Math.cos(R * m)),
              ) / m;
          ((isNaN(F) || F === 0) && (F = y / Math.cos((Math.PI / 180) * o)),
            (this._point = M.subtract(l.getPixelOrigin())),
            (this._radius = isNaN(F) ? 0 : M.x - l.project([R, i - F]).x),
            (this._radiusY = M.y - T.y));
        } else {
          var G = d.unproject(
            d.project(this._latlng).subtract([this._mRadius, 0]),
          );
          ((this._point = l.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - l.latLngToLayerPoint(G).x));
        }
        this._updateBounds();
      },
    });
    function m_(i, o, l) {
      return new Fl(i, o, l);
    }
    var ln = Ln.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (i, o) {
        (C(this, o), this._setLatLngs(i));
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (i) {
        return (this._setLatLngs(i), this.redraw());
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (i) {
        for (
          var o = 1 / 0, l = null, d = Ur, m, y, T = 0, E = this._parts.length;
          T < E;
          T++
        )
          for (var M = this._parts[T], R = 1, F = M.length; R < F; R++) {
            ((m = M[R - 1]), (y = M[R]));
            var G = d(i, m, y, !0);
            G < o && ((o = G), (l = d(i, m, y)));
          }
        return (l && (l.distance = Math.sqrt(o)), l);
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return sf(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (i, o) {
        return (
          (o = o || this._defaultShape()),
          (i = Y(i)),
          o.push(i),
          this._bounds.extend(i),
          this.redraw()
        );
      },
      _setLatLngs: function (i) {
        ((this._bounds = new Ce()), (this._latlngs = this._convertLatLngs(i)));
      },
      _defaultShape: function () {
        return kt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (i) {
        for (var o = [], l = kt(i), d = 0, m = i.length; d < m; d++)
          l
            ? ((o[d] = Y(i[d])), this._bounds.extend(o[d]))
            : (o[d] = this._convertLatLngs(i[d]));
        return o;
      },
      _project: function () {
        var i = new Z();
        ((this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, i),
          this._bounds.isValid() &&
            i.isValid() &&
            ((this._rawPxBounds = i), this._updateBounds()));
      },
      _updateBounds: function () {
        var i = this._clickTolerance(),
          o = new z(i, i);
        this._rawPxBounds &&
          (this._pxBounds = new Z([
            this._rawPxBounds.min.subtract(o),
            this._rawPxBounds.max.add(o),
          ]));
      },
      _projectLatlngs: function (i, o, l) {
        var d = i[0] instanceof re,
          m = i.length,
          y,
          T;
        if (d) {
          for (T = [], y = 0; y < m; y++)
            ((T[y] = this._map.latLngToLayerPoint(i[y])), l.extend(T[y]));
          o.push(T);
        } else for (y = 0; y < m; y++) this._projectLatlngs(i[y], o, l);
      },
      _clipPoints: function () {
        var i = this._renderer._bounds;
        if (
          ((this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(i)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var o = this._parts,
            l,
            d,
            m,
            y,
            T,
            E,
            M;
          for (l = 0, m = 0, y = this._rings.length; l < y; l++)
            for (M = this._rings[l], d = 0, T = M.length; d < T - 1; d++)
              ((E = rf(M[d], M[d + 1], i, d, !0)),
                E &&
                  ((o[m] = o[m] || []),
                  o[m].push(E[0]),
                  (E[1] !== M[d + 1] || d === T - 2) &&
                    (o[m].push(E[1]), m++)));
        }
      },
      _simplifyPoints: function () {
        for (
          var i = this._parts,
            o = this.options.smoothFactor,
            l = 0,
            d = i.length;
          l < d;
          l++
        )
          i[l] = ef(i[l], o);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (i, o) {
        var l,
          d,
          m,
          y,
          T,
          E,
          M = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
        for (l = 0, y = this._parts.length; l < y; l++)
          for (
            E = this._parts[l], d = 0, T = E.length, m = T - 1;
            d < T;
            m = d++
          )
            if (!(!o && d === 0) && tf(i, E[m], E[d]) <= M) return !0;
        return !1;
      },
    });
    function g_(i, o) {
      return new ln(i, o);
    }
    ln._flat = of;
    var Zi = ln.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        return Jh(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (i) {
        var o = ln.prototype._convertLatLngs.call(this, i),
          l = o.length;
        return (
          l >= 2 && o[0] instanceof re && o[0].equals(o[l - 1]) && o.pop(),
          o
        );
      },
      _setLatLngs: function (i) {
        (ln.prototype._setLatLngs.call(this, i),
          kt(this._latlngs) && (this._latlngs = [this._latlngs]));
      },
      _defaultShape: function () {
        return kt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var i = this._renderer._bounds,
          o = this.options.weight,
          l = new z(o, o);
        if (
          ((i = new Z(i.min.subtract(l), i.max.add(l))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(i)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var d = 0, m = this._rings.length, y; d < m; d++)
            ((y = Xh(this._rings[d], i, !0)), y.length && this._parts.push(y));
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (i) {
        var o = !1,
          l,
          d,
          m,
          y,
          T,
          E,
          M,
          R;
        if (!this._pxBounds || !this._pxBounds.contains(i)) return !1;
        for (y = 0, M = this._parts.length; y < M; y++)
          for (
            l = this._parts[y], T = 0, R = l.length, E = R - 1;
            T < R;
            E = T++
          )
            ((d = l[T]),
              (m = l[E]),
              d.y > i.y != m.y > i.y &&
                i.x < ((m.x - d.x) * (i.y - d.y)) / (m.y - d.y) + d.x &&
                (o = !o));
        return o || ln.prototype._containsPoint.call(this, i, !0);
      },
    });
    function v_(i, o) {
      return new Zi(i, o);
    }
    var un = an.extend({
      initialize: function (i, o) {
        (C(this, o), (this._layers = {}), i && this.addData(i));
      },
      addData: function (i) {
        var o = w(i) ? i : i.features,
          l,
          d,
          m;
        if (o) {
          for (l = 0, d = o.length; l < d; l++)
            ((m = o[l]),
              (m.geometries || m.geometry || m.features || m.coordinates) &&
                this.addData(m));
          return this;
        }
        var y = this.options;
        if (y.filter && !y.filter(i)) return this;
        var T = ps(i, y);
        return T
          ? ((T.feature = vs(i)),
            (T.defaultOptions = T.options),
            this.resetStyle(T),
            y.onEachFeature && y.onEachFeature(i, T),
            this.addLayer(T))
          : this;
      },
      resetStyle: function (i) {
        return i === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((i.options = s({}, i.defaultOptions)),
            this._setLayerStyle(i, this.options.style),
            this);
      },
      setStyle: function (i) {
        return this.eachLayer(function (o) {
          this._setLayerStyle(o, i);
        }, this);
      },
      _setLayerStyle: function (i, o) {
        i.setStyle &&
          (typeof o == "function" && (o = o(i.feature)), i.setStyle(o));
      },
    });
    function ps(i, o) {
      var l = i.type === "Feature" ? i.geometry : i,
        d = l ? l.coordinates : null,
        m = [],
        y = o && o.pointToLayer,
        T = (o && o.coordsToLatLng) || Zl,
        E,
        M,
        R,
        F;
      if (!d && !l) return null;
      switch (l.type) {
        case "Point":
          return ((E = T(d)), uf(y, i, E, o));
        case "MultiPoint":
          for (R = 0, F = d.length; R < F; R++)
            ((E = T(d[R])), m.push(uf(y, i, E, o)));
          return new an(m);
        case "LineString":
        case "MultiLineString":
          return (
            (M = ms(d, l.type === "LineString" ? 0 : 1, T)),
            new ln(M, o)
          );
        case "Polygon":
        case "MultiPolygon":
          return ((M = ms(d, l.type === "Polygon" ? 1 : 2, T)), new Zi(M, o));
        case "GeometryCollection":
          for (R = 0, F = l.geometries.length; R < F; R++) {
            var G = ps(
              {
                geometry: l.geometries[R],
                type: "Feature",
                properties: i.properties,
              },
              o,
            );
            G && m.push(G);
          }
          return new an(m);
        case "FeatureCollection":
          for (R = 0, F = l.features.length; R < F; R++) {
            var te = ps(l.features[R], o);
            te && m.push(te);
          }
          return new an(m);
        default:
          throw new Error("Invalid GeoJSON object.");
      }
    }
    function uf(i, o, l, d) {
      return i ? i(o, l) : new hs(l, d && d.markersInheritOptions && d);
    }
    function Zl(i) {
      return new re(i[1], i[0], i[2]);
    }
    function ms(i, o, l) {
      for (var d = [], m = 0, y = i.length, T; m < y; m++)
        ((T = o ? ms(i[m], o - 1, l) : (l || Zl)(i[m])), d.push(T));
      return d;
    }
    function Ul(i, o) {
      return (
        (i = Y(i)),
        i.alt !== void 0
          ? [x(i.lng, o), x(i.lat, o), x(i.alt, o)]
          : [x(i.lng, o), x(i.lat, o)]
      );
    }
    function gs(i, o, l, d) {
      for (var m = [], y = 0, T = i.length; y < T; y++)
        m.push(o ? gs(i[y], kt(i[y]) ? 0 : o - 1, l, d) : Ul(i[y], d));
      return (!o && l && m.length > 0 && m.push(m[0].slice()), m);
    }
    function Ui(i, o) {
      return i.feature ? s({}, i.feature, { geometry: o }) : vs(o);
    }
    function vs(i) {
      return i.type === "Feature" || i.type === "FeatureCollection"
        ? i
        : { type: "Feature", properties: {}, geometry: i };
    }
    var Hl = {
      toGeoJSON: function (i) {
        return Ui(this, {
          type: "Point",
          coordinates: Ul(this.getLatLng(), i),
        });
      },
    };
    (hs.include(Hl),
      Fl.include(Hl),
      fs.include(Hl),
      ln.include({
        toGeoJSON: function (i) {
          var o = !kt(this._latlngs),
            l = gs(this._latlngs, o ? 1 : 0, !1, i);
          return Ui(this, {
            type: (o ? "Multi" : "") + "LineString",
            coordinates: l,
          });
        },
      }),
      Zi.include({
        toGeoJSON: function (i) {
          var o = !kt(this._latlngs),
            l = o && !kt(this._latlngs[0]),
            d = gs(this._latlngs, l ? 2 : o ? 1 : 0, !0, i);
          return (
            o || (d = [d]),
            Ui(this, { type: (l ? "Multi" : "") + "Polygon", coordinates: d })
          );
        },
      }),
      Vi.include({
        toMultiPoint: function (i) {
          var o = [];
          return (
            this.eachLayer(function (l) {
              o.push(l.toGeoJSON(i).geometry.coordinates);
            }),
            Ui(this, { type: "MultiPoint", coordinates: o })
          );
        },
        toGeoJSON: function (i) {
          var o =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if (o === "MultiPoint") return this.toMultiPoint(i);
          var l = o === "GeometryCollection",
            d = [];
          return (
            this.eachLayer(function (m) {
              if (m.toGeoJSON) {
                var y = m.toGeoJSON(i);
                if (l) d.push(y.geometry);
                else {
                  var T = vs(y);
                  T.type === "FeatureCollection"
                    ? d.push.apply(d, T.features)
                    : d.push(T);
                }
              }
            }),
            l
              ? Ui(this, { geometries: d, type: "GeometryCollection" })
              : { type: "FeatureCollection", features: d }
          );
        },
      }));
    function cf(i, o) {
      return new un(i, o);
    }
    var y_ = cf,
      ys = Dt.extend({
        options: {
          opacity: 1,
          alt: "",
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: "",
          zIndex: 1,
          className: "",
        },
        initialize: function (i, o, l) {
          ((this._url = i), (this._bounds = ue(o)), C(this, l));
        },
        onAdd: function () {
          (this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (J(this._image, "leaflet-interactive"),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset());
        },
        onRemove: function () {
          (xe(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image));
        },
        setOpacity: function (i) {
          return (
            (this.options.opacity = i),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (i) {
          return (i.opacity && this.setOpacity(i.opacity), this);
        },
        bringToFront: function () {
          return (this._map && Ii(this._image), this);
        },
        bringToBack: function () {
          return (this._map && Bi(this._image), this);
        },
        setUrl: function (i) {
          return ((this._url = i), this._image && (this._image.src = i), this);
        },
        setBounds: function (i) {
          return ((this._bounds = ue(i)), this._map && this._reset(), this);
        },
        getEvents: function () {
          var i = { zoom: this._reset, viewreset: this._reset };
          return (this._zoomAnimated && (i.zoomanim = this._animateZoom), i);
        },
        setZIndex: function (i) {
          return ((this.options.zIndex = i), this._updateZIndex(), this);
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var i = this._url.tagName === "IMG",
            o = (this._image = i ? this._url : le("img"));
          if (
            (J(o, "leaflet-image-layer"),
            this._zoomAnimated && J(o, "leaflet-zoom-animated"),
            this.options.className && J(o, this.options.className),
            (o.onselectstart = g),
            (o.onmousemove = g),
            (o.onload = u(this.fire, this, "load")),
            (o.onerror = u(this._overlayOnError, this, "error")),
            (this.options.crossOrigin || this.options.crossOrigin === "") &&
              (o.crossOrigin =
                this.options.crossOrigin === !0
                  ? ""
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            i)
          ) {
            this._url = o.src;
            return;
          }
          ((o.src = this._url), (o.alt = this.options.alt));
        },
        _animateZoom: function (i) {
          var o = this._map.getZoomScale(i.zoom),
            l = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              i.zoom,
              i.center,
            ).min;
          ai(this._image, l, o);
        },
        _reset: function () {
          var i = this._image,
            o = new Z(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
            ),
            l = o.getSize();
          (Me(i, o.min),
            (i.style.width = l.x + "px"),
            (i.style.height = l.y + "px"));
        },
        _updateOpacity: function () {
          Pt(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire("error");
          var i = this.options.errorOverlayUrl;
          i && this._url !== i && ((this._url = i), (this._image.src = i));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      x_ = function (i, o, l) {
        return new ys(i, o, l);
      },
      df = ys.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var i = this._url.tagName === "VIDEO",
            o = (this._image = i ? this._url : le("video"));
          if (
            (J(o, "leaflet-image-layer"),
            this._zoomAnimated && J(o, "leaflet-zoom-animated"),
            this.options.className && J(o, this.options.className),
            (o.onselectstart = g),
            (o.onmousemove = g),
            (o.onloadeddata = u(this.fire, this, "load")),
            i)
          ) {
            for (
              var l = o.getElementsByTagName("source"), d = [], m = 0;
              m < l.length;
              m++
            )
              d.push(l[m].src);
            this._url = l.length > 0 ? d : [o.src];
            return;
          }
          (w(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(o.style, "objectFit") &&
              (o.style.objectFit = "fill"),
            (o.autoplay = !!this.options.autoplay),
            (o.loop = !!this.options.loop),
            (o.muted = !!this.options.muted),
            (o.playsInline = !!this.options.playsInline));
          for (var y = 0; y < this._url.length; y++) {
            var T = le("source");
            ((T.src = this._url[y]), o.appendChild(T));
          }
        },
      });
    function __(i, o, l) {
      return new df(i, o, l);
    }
    var hf = ys.extend({
      _initImage: function () {
        var i = (this._image = this._url);
        (J(i, "leaflet-image-layer"),
          this._zoomAnimated && J(i, "leaflet-zoom-animated"),
          this.options.className && J(i, this.options.className),
          (i.onselectstart = g),
          (i.onmousemove = g));
      },
    });
    function w_(i, o, l) {
      return new hf(i, o, l);
    }
    var Qt = Dt.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: "",
      },
      initialize: function (i, o) {
        (i && (i instanceof re || w(i))
          ? ((this._latlng = Y(i)), C(this, o))
          : (C(this, i), (this._source = o)),
          this.options.content && (this._content = this.options.content));
      },
      openOn: function (i) {
        return (
          (i = arguments.length ? i : this._source._map),
          i.hasLayer(this) || i.addLayer(this),
          this
        );
      },
      close: function () {
        return (this._map && this._map.removeLayer(this), this);
      },
      toggle: function (i) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = i) : (i = this._source),
              this._prepareOpen(),
              this.openOn(i._map)),
          this
        );
      },
      onAdd: function (i) {
        ((this._zoomAnimated = i._zoomAnimated),
          this._container || this._initLayout(),
          i._fadeAnimated && Pt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          i._fadeAnimated && Pt(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (J(this._container, "leaflet-interactive"),
            this.addInteractiveTarget(this._container)));
      },
      onRemove: function (i) {
        (i._fadeAnimated
          ? (Pt(this._container, 0),
            (this._removeTimeout = setTimeout(
              u(xe, void 0, this._container),
              200,
            )))
          : xe(this._container),
          this.options.interactive &&
            (be(this._container, "leaflet-interactive"),
            this.removeInteractiveTarget(this._container)));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (i) {
        return (
          (this._latlng = Y(i)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (i) {
        return ((this._content = i), this.update(), this);
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var i = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return (this._zoomAnimated && (i.zoomanim = this._animateZoom), i);
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return (this._map && Ii(this._container), this);
      },
      bringToBack: function () {
        return (this._map && Bi(this._container), this);
      },
      _prepareOpen: function (i) {
        var o = this._source;
        if (!o._map) return !1;
        if (o instanceof an) {
          o = null;
          var l = this._source._layers;
          for (var d in l)
            if (l[d]._map) {
              o = l[d];
              break;
            }
          if (!o) return !1;
          this._source = o;
        }
        if (!i)
          if (o.getCenter) i = o.getCenter();
          else if (o.getLatLng) i = o.getLatLng();
          else if (o.getBounds) i = o.getBounds().getCenter();
          else throw new Error("Unable to get source layer LatLng.");
        return (this.setLatLng(i), this._map && this.update(), !0);
      },
      _updateContent: function () {
        if (this._content) {
          var i = this._contentNode,
            o =
              typeof this._content == "function"
                ? this._content(this._source || this)
                : this._content;
          if (typeof o == "string") i.innerHTML = o;
          else {
            for (; i.hasChildNodes();) i.removeChild(i.firstChild);
            i.appendChild(o);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var i = this._map.latLngToLayerPoint(this._latlng),
            o = V(this.options.offset),
            l = this._getAnchor();
          this._zoomAnimated
            ? Me(this._container, i.add(l))
            : (o = o.add(i).add(l));
          var d = (this._containerBottom = -o.y),
            m = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + o.x);
          ((this._container.style.bottom = d + "px"),
            (this._container.style.left = m + "px"));
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    (oe.include({
      _initOverlay: function (i, o, l, d) {
        var m = o;
        return (
          m instanceof i || (m = new i(d).setContent(o)),
          l && m.setLatLng(l),
          m
        );
      },
    }),
      Dt.include({
        _initOverlay: function (i, o, l, d) {
          var m = l;
          return (
            m instanceof i
              ? (C(m, d), (m._source = this))
              : ((m = o && !d ? o : new i(d, this)), m.setContent(l)),
            m
          );
        },
      }));
    var xs = Qt.extend({
        options: {
          pane: "popupPane",
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: "",
        },
        openOn: function (i) {
          return (
            (i = arguments.length ? i : this._source._map),
            !i.hasLayer(this) &&
              i._popup &&
              i._popup.options.autoClose &&
              i.removeLayer(i._popup),
            (i._popup = this),
            Qt.prototype.openOn.call(this, i)
          );
        },
        onAdd: function (i) {
          (Qt.prototype.onAdd.call(this, i),
            i.fire("popupopen", { popup: this }),
            this._source &&
              (this._source.fire("popupopen", { popup: this }, !0),
              this._source instanceof Ln || this._source.on("preclick", ui)));
        },
        onRemove: function (i) {
          (Qt.prototype.onRemove.call(this, i),
            i.fire("popupclose", { popup: this }),
            this._source &&
              (this._source.fire("popupclose", { popup: this }, !0),
              this._source instanceof Ln || this._source.off("preclick", ui)));
        },
        getEvents: function () {
          var i = Qt.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (i.preclick = this.close),
            this.options.keepInView && (i.moveend = this._adjustPan),
            i
          );
        },
        _initLayout: function () {
          var i = "leaflet-popup",
            o = (this._container = le(
              "div",
              i +
                " " +
                (this.options.className || "") +
                " leaflet-zoom-animated",
            )),
            l = (this._wrapper = le("div", i + "-content-wrapper", o));
          if (
            ((this._contentNode = le("div", i + "-content", l)),
            Fr(o),
            Al(this._contentNode),
            X(o, "contextmenu", ui),
            (this._tipContainer = le("div", i + "-tip-container", o)),
            (this._tip = le("div", i + "-tip", this._tipContainer)),
            this.options.closeButton)
          ) {
            var d = (this._closeButton = le("a", i + "-close-button", o));
            (d.setAttribute("role", "button"),
              d.setAttribute("aria-label", "Close popup"),
              (d.href = "#close"),
              (d.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              X(
                d,
                "click",
                function (m) {
                  (We(m), this.close());
                },
                this,
              ));
          }
        },
        _updateLayout: function () {
          var i = this._contentNode,
            o = i.style;
          ((o.width = ""), (o.whiteSpace = "nowrap"));
          var l = i.offsetWidth;
          ((l = Math.min(l, this.options.maxWidth)),
            (l = Math.max(l, this.options.minWidth)),
            (o.width = l + 1 + "px"),
            (o.whiteSpace = ""),
            (o.height = ""));
          var d = i.offsetHeight,
            m = this.options.maxHeight,
            y = "leaflet-popup-scrolled";
          (m && d > m ? ((o.height = m + "px"), J(i, y)) : be(i, y),
            (this._containerWidth = this._container.offsetWidth));
        },
        _animateZoom: function (i) {
          var o = this._map._latLngToNewLayerPoint(
              this._latlng,
              i.zoom,
              i.center,
            ),
            l = this._getAnchor();
          Me(this._container, o.add(l));
        },
        _adjustPan: function () {
          if (this.options.autoPan) {
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            ) {
              this._autopanning = !1;
              return;
            }
            var i = this._map,
              o = parseInt(Dr(this._container, "marginBottom"), 10) || 0,
              l = this._container.offsetHeight + o,
              d = this._containerWidth,
              m = new z(this._containerLeft, -l - this._containerBottom);
            m._add(li(this._container));
            var y = i.layerPointToContainerPoint(m),
              T = V(this.options.autoPanPadding),
              E = V(this.options.autoPanPaddingTopLeft || T),
              M = V(this.options.autoPanPaddingBottomRight || T),
              R = i.getSize(),
              F = 0,
              G = 0;
            (y.x + d + M.x > R.x && (F = y.x + d - R.x + M.x),
              y.x - F - E.x < 0 && (F = y.x - E.x),
              y.y + l + M.y > R.y && (G = y.y + l - R.y + M.y),
              y.y - G - E.y < 0 && (G = y.y - E.y),
              (F || G) &&
                (this.options.keepInView && (this._autopanning = !0),
                i.fire("autopanstart").panBy([F, G])));
          }
        },
        _getAnchor: function () {
          return V(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0],
          );
        },
      }),
      P_ = function (i, o) {
        return new xs(i, o);
      };
    (oe.mergeOptions({ closePopupOnClick: !0 }),
      oe.include({
        openPopup: function (i, o, l) {
          return (this._initOverlay(xs, i, o, l).openOn(this), this);
        },
        closePopup: function (i) {
          return (
            (i = arguments.length ? i : this._popup),
            i && i.close(),
            this
          );
        },
      }),
      Dt.include({
        bindPopup: function (i, o) {
          return (
            (this._popup = this._initOverlay(xs, this._popup, i, o)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (i) {
          return (
            this._popup &&
              (this instanceof an || (this._popup._source = this),
              this._popup._prepareOpen(i || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return (this._popup && this._popup.close(), this);
        },
        togglePopup: function () {
          return (this._popup && this._popup.toggle(this), this);
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (i) {
          return (this._popup && this._popup.setContent(i), this);
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (i) {
          if (!(!this._popup || !this._map)) {
            ci(i);
            var o = i.layer || i.target;
            if (this._popup._source === o && !(o instanceof Ln)) {
              this._map.hasLayer(this._popup)
                ? this.closePopup()
                : this.openPopup(i.latlng);
              return;
            }
            ((this._popup._source = o), this.openPopup(i.latlng));
          }
        },
        _movePopup: function (i) {
          this._popup.setLatLng(i.latlng);
        },
        _onKeyPress: function (i) {
          i.originalEvent.keyCode === 13 && this._openPopup(i);
        },
      }));
    var _s = Qt.extend({
        options: {
          pane: "tooltipPane",
          offset: [0, 0],
          direction: "auto",
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (i) {
          (Qt.prototype.onAdd.call(this, i),
            this.setOpacity(this.options.opacity),
            i.fire("tooltipopen", { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire("tooltipopen", { tooltip: this }, !0)));
        },
        onRemove: function (i) {
          (Qt.prototype.onRemove.call(this, i),
            i.fire("tooltipclose", { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire("tooltipclose", { tooltip: this }, !0)));
        },
        getEvents: function () {
          var i = Qt.prototype.getEvents.call(this);
          return (this.options.permanent || (i.preclick = this.close), i);
        },
        _initLayout: function () {
          var i = "leaflet-tooltip",
            o =
              i +
              " " +
              (this.options.className || "") +
              " leaflet-zoom-" +
              (this._zoomAnimated ? "animated" : "hide");
          ((this._contentNode = this._container = le("div", o)),
            this._container.setAttribute("role", "tooltip"),
            this._container.setAttribute("id", "leaflet-tooltip-" + h(this)));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (i) {
          var o,
            l,
            d = this._map,
            m = this._container,
            y = d.latLngToContainerPoint(d.getCenter()),
            T = d.layerPointToContainerPoint(i),
            E = this.options.direction,
            M = m.offsetWidth,
            R = m.offsetHeight,
            F = V(this.options.offset),
            G = this._getAnchor();
          (E === "top"
            ? ((o = M / 2), (l = R))
            : E === "bottom"
              ? ((o = M / 2), (l = 0))
              : E === "center"
                ? ((o = M / 2), (l = R / 2))
                : E === "right"
                  ? ((o = 0), (l = R / 2))
                  : E === "left"
                    ? ((o = M), (l = R / 2))
                    : T.x < y.x
                      ? ((E = "right"), (o = 0), (l = R / 2))
                      : ((E = "left"), (o = M + (F.x + G.x) * 2), (l = R / 2)),
            (i = i
              .subtract(V(o, l, !0))
              .add(F)
              .add(G)),
            be(m, "leaflet-tooltip-right"),
            be(m, "leaflet-tooltip-left"),
            be(m, "leaflet-tooltip-top"),
            be(m, "leaflet-tooltip-bottom"),
            J(m, "leaflet-tooltip-" + E),
            Me(m, i));
        },
        _updatePosition: function () {
          var i = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(i);
        },
        setOpacity: function (i) {
          ((this.options.opacity = i),
            this._container && Pt(this._container, i));
        },
        _animateZoom: function (i) {
          var o = this._map._latLngToNewLayerPoint(
            this._latlng,
            i.zoom,
            i.center,
          );
          this._setPosition(o);
        },
        _getAnchor: function () {
          return V(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0],
          );
        },
      }),
      k_ = function (i, o) {
        return new _s(i, o);
      };
    (oe.include({
      openTooltip: function (i, o, l) {
        return (this._initOverlay(_s, i, o, l).openOn(this), this);
      },
      closeTooltip: function (i) {
        return (i.close(), this);
      },
    }),
      Dt.include({
        bindTooltip: function (i, o) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(_s, this._tooltip, i, o)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (i) {
          if (!(!i && this._tooltipHandlersAdded)) {
            var o = i ? "off" : "on",
              l = { remove: this.closeTooltip, move: this._moveTooltip };
            (this._tooltip.options.permanent
              ? (l.add = this._openTooltip)
              : ((l.mouseover = this._openTooltip),
                (l.mouseout = this.closeTooltip),
                (l.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (l.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (l.mousemove = this._moveTooltip),
              this[o](l),
              (this._tooltipHandlersAdded = !i));
          }
        },
        openTooltip: function (i) {
          return (
            this._tooltip &&
              (this instanceof an || (this._tooltip._source = this),
              this._tooltip._prepareOpen(i) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return (this._tooltip && this._tooltip.toggle(this), this);
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (i) {
          return (this._tooltip && this._tooltip.setContent(i), this);
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (i) {
          var o = typeof i.getElement == "function" && i.getElement();
          o &&
            (X(
              o,
              "focus",
              function () {
                ((this._tooltip._source = i), this.openTooltip());
              },
              this,
            ),
            X(o, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (i) {
          var o = typeof i.getElement == "function" && i.getElement();
          o && o.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function (i) {
          if (!(!this._tooltip || !this._map)) {
            if (
              this._map.dragging &&
              this._map.dragging.moving() &&
              !this._openOnceFlag
            ) {
              this._openOnceFlag = !0;
              var o = this;
              this._map.once("moveend", function () {
                ((o._openOnceFlag = !1), o._openTooltip(i));
              });
              return;
            }
            ((this._tooltip._source = i.layer || i.target),
              this.openTooltip(
                this._tooltip.options.sticky ? i.latlng : void 0,
              ));
          }
        },
        _moveTooltip: function (i) {
          var o = i.latlng,
            l,
            d;
          (this._tooltip.options.sticky &&
            i.originalEvent &&
            ((l = this._map.mouseEventToContainerPoint(i.originalEvent)),
            (d = this._map.containerPointToLayerPoint(l)),
            (o = this._map.layerPointToLatLng(d))),
            this._tooltip.setLatLng(o));
        },
      }));
    var ff = Fi.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon",
      },
      createIcon: function (i) {
        var o = i && i.tagName === "DIV" ? i : document.createElement("div"),
          l = this.options;
        if (
          (l.html instanceof Element
            ? (ss(o), o.appendChild(l.html))
            : (o.innerHTML = l.html !== !1 ? l.html : ""),
          l.bgPos)
        ) {
          var d = V(l.bgPos);
          o.style.backgroundPosition = -d.x + "px " + -d.y + "px";
        }
        return (this._setIconStyles(o, "icon"), o);
      },
      createShadow: function () {
        return null;
      },
    });
    function S_(i) {
      return new ff(i);
    }
    Fi.Default = Hr;
    var Wr = Dt.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: H.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (i) {
        C(this, i);
      },
      onAdd: function () {
        (this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView());
      },
      beforeAdd: function (i) {
        i._addZoomLimit(this);
      },
      onRemove: function (i) {
        (this._removeAllTiles(),
          xe(this._container),
          i._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0));
      },
      bringToFront: function () {
        return (
          this._map && (Ii(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (Bi(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (i) {
        return ((this.options.opacity = i), this._updateOpacity(), this);
      },
      setZIndex: function (i) {
        return ((this.options.zIndex = i), this._updateZIndex(), this);
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var i = this._clampZoom(this._map.getZoom());
          (i !== this._tileZoom && ((this._tileZoom = i), this._updateLevels()),
            this._update());
        }
        return this;
      },
      getEvents: function () {
        var i = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = p(
                this._onMoveEnd,
                this.options.updateInterval,
                this,
              )),
            (i.move = this._onMove)),
          this._zoomAnimated && (i.zoomanim = this._animateZoom),
          i
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var i = this.options.tileSize;
        return i instanceof z ? i : new z(i, i);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (i) {
        for (
          var o = this.getPane().children,
            l = -i(-1 / 0, 1 / 0),
            d = 0,
            m = o.length,
            y;
          d < m;
          d++
        )
          ((y = o[d].style.zIndex),
            o[d] !== this._container && y && (l = i(l, +y)));
        isFinite(l) &&
          ((this.options.zIndex = l + i(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !H.ielt9) {
          Pt(this._container, this.options.opacity);
          var i = +new Date(),
            o = !1,
            l = !1;
          for (var d in this._tiles) {
            var m = this._tiles[d];
            if (!(!m.current || !m.loaded)) {
              var y = Math.min(1, (i - m.loaded) / 200);
              (Pt(m.el, y),
                y < 1
                  ? (o = !0)
                  : (m.active ? (l = !0) : this._onOpaqueTile(m),
                    (m.active = !0)));
            }
          }
          (l && !this._noPrune && this._pruneTiles(),
            o &&
              (ce(this._fadeFrame),
              (this._fadeFrame = se(this._updateOpacity, this))));
        }
      },
      _onOpaqueTile: g,
      _initContainer: function () {
        this._container ||
          ((this._container = le(
            "div",
            "leaflet-layer " + (this.options.className || ""),
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var i = this._tileZoom,
          o = this.options.maxZoom;
        if (i !== void 0) {
          for (var l in this._levels)
            ((l = Number(l)),
              this._levels[l].el.children.length || l === i
                ? ((this._levels[l].el.style.zIndex = o - Math.abs(i - l)),
                  this._onUpdateLevel(l))
                : (xe(this._levels[l].el),
                  this._removeTilesAtZoom(l),
                  this._onRemoveLevel(l),
                  delete this._levels[l]));
          var d = this._levels[i],
            m = this._map;
          return (
            d ||
              ((d = this._levels[i] = {}),
              (d.el = le(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container,
              )),
              (d.el.style.zIndex = o),
              (d.origin = m
                .project(m.unproject(m.getPixelOrigin()), i)
                .round()),
              (d.zoom = i),
              this._setZoomTransform(d, m.getCenter(), m.getZoom()),
              g(d.el.offsetWidth),
              this._onCreateLevel(d)),
            (this._level = d),
            d
          );
        }
      },
      _onUpdateLevel: g,
      _onRemoveLevel: g,
      _onCreateLevel: g,
      _pruneTiles: function () {
        if (this._map) {
          var i,
            o,
            l = this._map.getZoom();
          if (l > this.options.maxZoom || l < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (i in this._tiles) ((o = this._tiles[i]), (o.retain = o.current));
          for (i in this._tiles)
            if (((o = this._tiles[i]), o.current && !o.active)) {
              var d = o.coords;
              this._retainParent(d.x, d.y, d.z, d.z - 5) ||
                this._retainChildren(d.x, d.y, d.z, d.z + 2);
            }
          for (i in this._tiles) this._tiles[i].retain || this._removeTile(i);
        }
      },
      _removeTilesAtZoom: function (i) {
        for (var o in this._tiles)
          this._tiles[o].coords.z === i && this._removeTile(o);
      },
      _removeAllTiles: function () {
        for (var i in this._tiles) this._removeTile(i);
      },
      _invalidateAll: function () {
        for (var i in this._levels)
          (xe(this._levels[i].el),
            this._onRemoveLevel(Number(i)),
            delete this._levels[i]);
        (this._removeAllTiles(), (this._tileZoom = void 0));
      },
      _retainParent: function (i, o, l, d) {
        var m = Math.floor(i / 2),
          y = Math.floor(o / 2),
          T = l - 1,
          E = new z(+m, +y);
        E.z = +T;
        var M = this._tileCoordsToKey(E),
          R = this._tiles[M];
        return R && R.active
          ? ((R.retain = !0), !0)
          : (R && R.loaded && (R.retain = !0),
            T > d ? this._retainParent(m, y, T, d) : !1);
      },
      _retainChildren: function (i, o, l, d) {
        for (var m = 2 * i; m < 2 * i + 2; m++)
          for (var y = 2 * o; y < 2 * o + 2; y++) {
            var T = new z(m, y);
            T.z = l + 1;
            var E = this._tileCoordsToKey(T),
              M = this._tiles[E];
            if (M && M.active) {
              M.retain = !0;
              continue;
            } else M && M.loaded && (M.retain = !0);
            l + 1 < d && this._retainChildren(m, y, l + 1, d);
          }
      },
      _resetView: function (i) {
        var o = i && (i.pinch || i.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), o, o);
      },
      _animateZoom: function (i) {
        this._setView(i.center, i.zoom, !0, i.noUpdate);
      },
      _clampZoom: function (i) {
        var o = this.options;
        return o.minNativeZoom !== void 0 && i < o.minNativeZoom
          ? o.minNativeZoom
          : o.maxNativeZoom !== void 0 && o.maxNativeZoom < i
            ? o.maxNativeZoom
            : i;
      },
      _setView: function (i, o, l, d) {
        var m = Math.round(o);
        (this.options.maxZoom !== void 0 && m > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && m < this.options.minZoom)
          ? (m = void 0)
          : (m = this._clampZoom(m));
        var y = this.options.updateWhenZooming && m !== this._tileZoom;
        ((!d || y) &&
          ((this._tileZoom = m),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          m !== void 0 && this._update(i),
          l || this._pruneTiles(),
          (this._noPrune = !!l)),
          this._setZoomTransforms(i, o));
      },
      _setZoomTransforms: function (i, o) {
        for (var l in this._levels)
          this._setZoomTransform(this._levels[l], i, o);
      },
      _setZoomTransform: function (i, o, l) {
        var d = this._map.getZoomScale(l, i.zoom),
          m = i.origin
            .multiplyBy(d)
            .subtract(this._map._getNewPixelOrigin(o, l))
            .round();
        H.any3d ? ai(i.el, m, d) : Me(i.el, m);
      },
      _resetGrid: function () {
        var i = this._map,
          o = i.options.crs,
          l = (this._tileSize = this.getTileSize()),
          d = this._tileZoom,
          m = this._map.getPixelWorldBounds(this._tileZoom);
        (m && (this._globalTileRange = this._pxBoundsToTileRange(m)),
          (this._wrapX = o.wrapLng &&
            !this.options.noWrap && [
              Math.floor(i.project([0, o.wrapLng[0]], d).x / l.x),
              Math.ceil(i.project([0, o.wrapLng[1]], d).x / l.y),
            ]),
          (this._wrapY = o.wrapLat &&
            !this.options.noWrap && [
              Math.floor(i.project([o.wrapLat[0], 0], d).y / l.x),
              Math.ceil(i.project([o.wrapLat[1], 0], d).y / l.y),
            ]));
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (i) {
        var o = this._map,
          l = o._animatingZoom
            ? Math.max(o._animateToZoom, o.getZoom())
            : o.getZoom(),
          d = o.getZoomScale(l, this._tileZoom),
          m = o.project(i, this._tileZoom).floor(),
          y = o.getSize().divideBy(d * 2);
        return new Z(m.subtract(y), m.add(y));
      },
      _update: function (i) {
        var o = this._map;
        if (o) {
          var l = this._clampZoom(o.getZoom());
          if (
            (i === void 0 && (i = o.getCenter()), this._tileZoom !== void 0)
          ) {
            var d = this._getTiledPixelBounds(i),
              m = this._pxBoundsToTileRange(d),
              y = m.getCenter(),
              T = [],
              E = this.options.keepBuffer,
              M = new Z(
                m.getBottomLeft().subtract([E, -E]),
                m.getTopRight().add([E, -E]),
              );
            if (!(
              isFinite(m.min.x) &&
              isFinite(m.min.y) &&
              isFinite(m.max.x) &&
              isFinite(m.max.y)
            ))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var R in this._tiles) {
              var F = this._tiles[R].coords;
              (F.z !== this._tileZoom || !M.contains(new z(F.x, F.y))) &&
                (this._tiles[R].current = !1);
            }
            if (Math.abs(l - this._tileZoom) > 1) {
              this._setView(i, l);
              return;
            }
            for (var G = m.min.y; G <= m.max.y; G++)
              for (var te = m.min.x; te <= m.max.x; te++) {
                var tt = new z(te, G);
                if (((tt.z = this._tileZoom), !!this._isValidTile(tt))) {
                  var Ve = this._tiles[this._tileCoordsToKey(tt)];
                  Ve ? (Ve.current = !0) : T.push(tt);
                }
              }
            if (
              (T.sort(function (lt, Wi) {
                return lt.distanceTo(y) - Wi.distanceTo(y);
              }),
              T.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var St = document.createDocumentFragment();
              for (te = 0; te < T.length; te++) this._addTile(T[te], St);
              this._level.el.appendChild(St);
            }
          }
        }
      },
      _isValidTile: function (i) {
        var o = this._map.options.crs;
        if (!o.infinite) {
          var l = this._globalTileRange;
          if (
            (!o.wrapLng && (i.x < l.min.x || i.x > l.max.x)) ||
            (!o.wrapLat && (i.y < l.min.y || i.y > l.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var d = this._tileCoordsToBounds(i);
        return ue(this.options.bounds).overlaps(d);
      },
      _keyToBounds: function (i) {
        return this._tileCoordsToBounds(this._keyToTileCoords(i));
      },
      _tileCoordsToNwSe: function (i) {
        var o = this._map,
          l = this.getTileSize(),
          d = i.scaleBy(l),
          m = d.add(l),
          y = o.unproject(d, i.z),
          T = o.unproject(m, i.z);
        return [y, T];
      },
      _tileCoordsToBounds: function (i) {
        var o = this._tileCoordsToNwSe(i),
          l = new Ce(o[0], o[1]);
        return (this.options.noWrap || (l = this._map.wrapLatLngBounds(l)), l);
      },
      _tileCoordsToKey: function (i) {
        return i.x + ":" + i.y + ":" + i.z;
      },
      _keyToTileCoords: function (i) {
        var o = i.split(":"),
          l = new z(+o[0], +o[1]);
        return ((l.z = +o[2]), l);
      },
      _removeTile: function (i) {
        var o = this._tiles[i];
        o &&
          (xe(o.el),
          delete this._tiles[i],
          this.fire("tileunload", {
            tile: o.el,
            coords: this._keyToTileCoords(i),
          }));
      },
      _initTile: function (i) {
        J(i, "leaflet-tile");
        var o = this.getTileSize();
        ((i.style.width = o.x + "px"),
          (i.style.height = o.y + "px"),
          (i.onselectstart = g),
          (i.onmousemove = g),
          H.ielt9 && this.options.opacity < 1 && Pt(i, this.options.opacity));
      },
      _addTile: function (i, o) {
        var l = this._getTilePos(i),
          d = this._tileCoordsToKey(i),
          m = this.createTile(this._wrapCoords(i), u(this._tileReady, this, i));
        (this._initTile(m),
          this.createTile.length < 2 &&
            se(u(this._tileReady, this, i, null, m)),
          Me(m, l),
          (this._tiles[d] = { el: m, coords: i, current: !0 }),
          o.appendChild(m),
          this.fire("tileloadstart", { tile: m, coords: i }));
      },
      _tileReady: function (i, o, l) {
        o && this.fire("tileerror", { error: o, tile: l, coords: i });
        var d = this._tileCoordsToKey(i);
        ((l = this._tiles[d]),
          l &&
            ((l.loaded = +new Date()),
            this._map._fadeAnimated
              ? (Pt(l.el, 0),
                ce(this._fadeFrame),
                (this._fadeFrame = se(this._updateOpacity, this)))
              : ((l.active = !0), this._pruneTiles()),
            o ||
              (J(l.el, "leaflet-tile-loaded"),
              this.fire("tileload", { tile: l.el, coords: i })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire("load"),
              H.ielt9 || !this._map._fadeAnimated
                ? se(this._pruneTiles, this)
                : setTimeout(u(this._pruneTiles, this), 250))));
      },
      _getTilePos: function (i) {
        return i.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (i) {
        var o = new z(
          this._wrapX ? v(i.x, this._wrapX) : i.x,
          this._wrapY ? v(i.y, this._wrapY) : i.y,
        );
        return ((o.z = i.z), o);
      },
      _pxBoundsToTileRange: function (i) {
        var o = this.getTileSize();
        return new Z(
          i.min.unscaleBy(o).floor(),
          i.max.unscaleBy(o).ceil().subtract([1, 1]),
        );
      },
      _noTilesToLoad: function () {
        for (var i in this._tiles) if (!this._tiles[i].loaded) return !1;
        return !0;
      },
    });
    function C_(i) {
      return new Wr(i);
    }
    var Hi = Wr.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (i, o) {
        ((this._url = i),
          (o = C(this, o)),
          o.detectRetina && H.retina && o.maxZoom > 0
            ? ((o.tileSize = Math.floor(o.tileSize / 2)),
              o.zoomReverse
                ? (o.zoomOffset--,
                  (o.minZoom = Math.min(o.maxZoom, o.minZoom + 1)))
                : (o.zoomOffset++,
                  (o.maxZoom = Math.max(o.minZoom, o.maxZoom - 1))),
              (o.minZoom = Math.max(0, o.minZoom)))
            : o.zoomReverse
              ? (o.minZoom = Math.min(o.maxZoom, o.minZoom))
              : (o.maxZoom = Math.max(o.minZoom, o.maxZoom)),
          typeof o.subdomains == "string" &&
            (o.subdomains = o.subdomains.split("")),
          this.on("tileunload", this._onTileRemove));
      },
      setUrl: function (i, o) {
        return (
          this._url === i && o === void 0 && (o = !0),
          (this._url = i),
          o || this.redraw(),
          this
        );
      },
      createTile: function (i, o) {
        var l = document.createElement("img");
        return (
          X(l, "load", u(this._tileOnLoad, this, o, l)),
          X(l, "error", u(this._tileOnError, this, o, l)),
          (this.options.crossOrigin || this.options.crossOrigin === "") &&
            (l.crossOrigin =
              this.options.crossOrigin === !0 ? "" : this.options.crossOrigin),
          typeof this.options.referrerPolicy == "string" &&
            (l.referrerPolicy = this.options.referrerPolicy),
          (l.alt = ""),
          (l.src = this.getTileUrl(i)),
          l
        );
      },
      getTileUrl: function (i) {
        var o = {
          r: H.retina ? "@2x" : "",
          s: this._getSubdomain(i),
          x: i.x,
          y: i.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var l = this._globalTileRange.max.y - i.y;
          (this.options.tms && (o.y = l), (o["-y"] = l));
        }
        return _(this._url, s(o, this.options));
      },
      _tileOnLoad: function (i, o) {
        H.ielt9 ? setTimeout(u(i, this, null, o), 0) : i(null, o);
      },
      _tileOnError: function (i, o, l) {
        var d = this.options.errorTileUrl;
        (d && o.getAttribute("src") !== d && (o.src = d), i(l, o));
      },
      _onTileRemove: function (i) {
        i.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var i = this._tileZoom,
          o = this.options.maxZoom,
          l = this.options.zoomReverse,
          d = this.options.zoomOffset;
        return (l && (i = o - i), i + d);
      },
      _getSubdomain: function (i) {
        var o = Math.abs(i.x + i.y) % this.options.subdomains.length;
        return this.options.subdomains[o];
      },
      _abortLoading: function () {
        var i, o;
        for (i in this._tiles)
          if (
            this._tiles[i].coords.z !== this._tileZoom &&
            ((o = this._tiles[i].el),
            (o.onload = g),
            (o.onerror = g),
            !o.complete)
          ) {
            o.src = A;
            var l = this._tiles[i].coords;
            (xe(o),
              delete this._tiles[i],
              this.fire("tileabort", { tile: o, coords: l }));
          }
      },
      _removeTile: function (i) {
        var o = this._tiles[i];
        if (o)
          return (
            o.el.setAttribute("src", A),
            Wr.prototype._removeTile.call(this, i)
          );
      },
      _tileReady: function (i, o, l) {
        if (!(!this._map || (l && l.getAttribute("src") === A)))
          return Wr.prototype._tileReady.call(this, i, o, l);
      },
    });
    function pf(i, o) {
      return new Hi(i, o);
    }
    var mf = Hi.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (i, o) {
        this._url = i;
        var l = s({}, this.defaultWmsParams);
        for (var d in o) d in this.options || (l[d] = o[d]);
        o = C(this, o);
        var m = o.detectRetina && H.retina ? 2 : 1,
          y = this.getTileSize();
        ((l.width = y.x * m), (l.height = y.y * m), (this.wmsParams = l));
      },
      onAdd: function (i) {
        ((this._crs = this.options.crs || i.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version)));
        var o = this._wmsVersion >= 1.3 ? "crs" : "srs";
        ((this.wmsParams[o] = this._crs.code),
          Hi.prototype.onAdd.call(this, i));
      },
      getTileUrl: function (i) {
        var o = this._tileCoordsToNwSe(i),
          l = this._crs,
          d = ee(l.project(o[0]), l.project(o[1])),
          m = d.min,
          y = d.max,
          T = (
            this._wmsVersion >= 1.3 && this._crs === af
              ? [m.y, m.x, y.y, y.x]
              : [m.x, m.y, y.x, y.y]
          ).join(","),
          E = Hi.prototype.getTileUrl.call(this, i);
        return (
          E +
          j(this.wmsParams, E, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          T
        );
      },
      setParams: function (i, o) {
        return (s(this.wmsParams, i), o || this.redraw(), this);
      },
    });
    function T_(i, o) {
      return new mf(i, o);
    }
    ((Hi.WMS = mf), (pf.wms = T_));
    var cn = Dt.extend({
        options: { padding: 0.1 },
        initialize: function (i) {
          (C(this, i), h(this), (this._layers = this._layers || {}));
        },
        onAdd: function () {
          (this._container ||
            (this._initContainer(),
            J(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this));
        },
        onRemove: function () {
          (this.off("update", this._updatePaths, this),
            this._destroyContainer());
        },
        getEvents: function () {
          var i = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return (this._zoomAnimated && (i.zoomanim = this._onAnimZoom), i);
        },
        _onAnimZoom: function (i) {
          this._updateTransform(i.center, i.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (i, o) {
          var l = this._map.getZoomScale(o, this._zoom),
            d = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            m = this._map.project(this._center, o),
            y = d
              .multiplyBy(-l)
              .add(m)
              .subtract(this._map._getNewPixelOrigin(i, o));
          H.any3d ? ai(this._container, y, l) : Me(this._container, y);
        },
        _reset: function () {
          (this._update(), this._updateTransform(this._center, this._zoom));
          for (var i in this._layers) this._layers[i]._reset();
        },
        _onZoomEnd: function () {
          for (var i in this._layers) this._layers[i]._project();
        },
        _updatePaths: function () {
          for (var i in this._layers) this._layers[i]._update();
        },
        _update: function () {
          var i = this.options.padding,
            o = this._map.getSize(),
            l = this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();
          ((this._bounds = new Z(l, l.add(o.multiplyBy(1 + i * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom()));
        },
      }),
      gf = cn.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var i = cn.prototype.getEvents.call(this);
          return ((i.viewprereset = this._onViewPreReset), i);
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          (cn.prototype.onAdd.call(this), this._draw());
        },
        _initContainer: function () {
          var i = (this._container = document.createElement("canvas"));
          (X(i, "mousemove", this._onMouseMove, this),
            X(
              i,
              "click dblclick mousedown mouseup contextmenu",
              this._onClick,
              this,
            ),
            X(i, "mouseout", this._handleMouseOut, this),
            (i._leaflet_disable_events = !0),
            (this._ctx = i.getContext("2d")));
        },
        _destroyContainer: function () {
          (ce(this._redrawRequest),
            delete this._ctx,
            xe(this._container),
            fe(this._container),
            delete this._container);
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var i;
            this._redrawBounds = null;
            for (var o in this._layers) ((i = this._layers[o]), i._update());
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            cn.prototype._update.call(this);
            var i = this._bounds,
              o = this._container,
              l = i.getSize(),
              d = H.retina ? 2 : 1;
            (Me(o, i.min),
              (o.width = d * l.x),
              (o.height = d * l.y),
              (o.style.width = l.x + "px"),
              (o.style.height = l.y + "px"),
              H.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-i.min.x, -i.min.y),
              this.fire("update"));
          }
        },
        _reset: function () {
          (cn.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths()));
        },
        _initPath: function (i) {
          (this._updateDashArray(i), (this._layers[h(i)] = i));
          var o = (i._order = { layer: i, prev: this._drawLast, next: null });
          (this._drawLast && (this._drawLast.next = o),
            (this._drawLast = o),
            (this._drawFirst = this._drawFirst || this._drawLast));
        },
        _addPath: function (i) {
          this._requestRedraw(i);
        },
        _removePath: function (i) {
          var o = i._order,
            l = o.next,
            d = o.prev;
          (l ? (l.prev = d) : (this._drawLast = d),
            d ? (d.next = l) : (this._drawFirst = l),
            delete i._order,
            delete this._layers[h(i)],
            this._requestRedraw(i));
        },
        _updatePath: function (i) {
          (this._extendRedrawBounds(i),
            i._project(),
            i._update(),
            this._requestRedraw(i));
        },
        _updateStyle: function (i) {
          (this._updateDashArray(i), this._requestRedraw(i));
        },
        _updateDashArray: function (i) {
          if (typeof i.options.dashArray == "string") {
            var o = i.options.dashArray.split(/[, ]+/),
              l = [],
              d,
              m;
            for (m = 0; m < o.length; m++) {
              if (((d = Number(o[m])), isNaN(d))) return;
              l.push(d);
            }
            i.options._dashArray = l;
          } else i.options._dashArray = i.options.dashArray;
        },
        _requestRedraw: function (i) {
          this._map &&
            (this._extendRedrawBounds(i),
            (this._redrawRequest =
              this._redrawRequest || se(this._redraw, this)));
        },
        _extendRedrawBounds: function (i) {
          if (i._pxBounds) {
            var o = (i.options.weight || 0) + 1;
            ((this._redrawBounds = this._redrawBounds || new Z()),
              this._redrawBounds.extend(i._pxBounds.min.subtract([o, o])),
              this._redrawBounds.extend(i._pxBounds.max.add([o, o])));
          }
        },
        _redraw: function () {
          ((this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null));
        },
        _clear: function () {
          var i = this._redrawBounds;
          if (i) {
            var o = i.getSize();
            this._ctx.clearRect(i.min.x, i.min.y, o.x, o.y);
          } else
            (this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height,
              ),
              this._ctx.restore());
        },
        _draw: function () {
          var i,
            o = this._redrawBounds;
          if ((this._ctx.save(), o)) {
            var l = o.getSize();
            (this._ctx.beginPath(),
              this._ctx.rect(o.min.x, o.min.y, l.x, l.y),
              this._ctx.clip());
          }
          this._drawing = !0;
          for (var d = this._drawFirst; d; d = d.next)
            ((i = d.layer),
              (!o || (i._pxBounds && i._pxBounds.intersects(o))) &&
                i._updatePath());
          ((this._drawing = !1), this._ctx.restore());
        },
        _updatePoly: function (i, o) {
          if (this._drawing) {
            var l,
              d,
              m,
              y,
              T = i._parts,
              E = T.length,
              M = this._ctx;
            if (E) {
              for (M.beginPath(), l = 0; l < E; l++) {
                for (d = 0, m = T[l].length; d < m; d++)
                  ((y = T[l][d]), M[d ? "lineTo" : "moveTo"](y.x, y.y));
                o && M.closePath();
              }
              this._fillStroke(M, i);
            }
          }
        },
        _updateCircle: function (i) {
          if (!(!this._drawing || i._empty())) {
            var o = i._point,
              l = this._ctx,
              d = Math.max(Math.round(i._radius), 1),
              m = (Math.max(Math.round(i._radiusY), 1) || d) / d;
            (m !== 1 && (l.save(), l.scale(1, m)),
              l.beginPath(),
              l.arc(o.x, o.y / m, d, 0, Math.PI * 2, !1),
              m !== 1 && l.restore(),
              this._fillStroke(l, i));
          }
        },
        _fillStroke: function (i, o) {
          var l = o.options;
          (l.fill &&
            ((i.globalAlpha = l.fillOpacity),
            (i.fillStyle = l.fillColor || l.color),
            i.fill(l.fillRule || "evenodd")),
            l.stroke &&
              l.weight !== 0 &&
              (i.setLineDash &&
                i.setLineDash((o.options && o.options._dashArray) || []),
              (i.globalAlpha = l.opacity),
              (i.lineWidth = l.weight),
              (i.strokeStyle = l.color),
              (i.lineCap = l.lineCap),
              (i.lineJoin = l.lineJoin),
              i.stroke()));
        },
        _onClick: function (i) {
          for (
            var o = this._map.mouseEventToLayerPoint(i),
              l,
              d,
              m = this._drawFirst;
            m;
            m = m.next
          )
            ((l = m.layer),
              l.options.interactive &&
                l._containsPoint(o) &&
                (!(i.type === "click" || i.type === "preclick") ||
                  !this._map._draggableMoved(l)) &&
                (d = l));
          this._fireEvent(d ? [d] : !1, i);
        },
        _onMouseMove: function (i) {
          if (!(
            !this._map ||
            this._map.dragging.moving() ||
            this._map._animatingZoom
          )) {
            var o = this._map.mouseEventToLayerPoint(i);
            this._handleMouseHover(i, o);
          }
        },
        _handleMouseOut: function (i) {
          var o = this._hoveredLayer;
          o &&
            (be(this._container, "leaflet-interactive"),
            this._fireEvent([o], i, "mouseout"),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (i, o) {
          if (!this._mouseHoverThrottled) {
            for (var l, d, m = this._drawFirst; m; m = m.next)
              ((l = m.layer),
                l.options.interactive && l._containsPoint(o) && (d = l));
            (d !== this._hoveredLayer &&
              (this._handleMouseOut(i),
              d &&
                (J(this._container, "leaflet-interactive"),
                this._fireEvent([d], i, "mouseover"),
                (this._hoveredLayer = d))),
              this._fireEvent(
                this._hoveredLayer ? [this._hoveredLayer] : !1,
                i,
              ),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                u(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32,
              ));
          }
        },
        _fireEvent: function (i, o, l) {
          this._map._fireDOMEvent(o, l || o.type, i);
        },
        _bringToFront: function (i) {
          var o = i._order;
          if (o) {
            var l = o.next,
              d = o.prev;
            if (l) l.prev = d;
            else return;
            (d ? (d.next = l) : l && (this._drawFirst = l),
              (o.prev = this._drawLast),
              (this._drawLast.next = o),
              (o.next = null),
              (this._drawLast = o),
              this._requestRedraw(i));
          }
        },
        _bringToBack: function (i) {
          var o = i._order;
          if (o) {
            var l = o.next,
              d = o.prev;
            if (d) d.next = l;
            else return;
            (l ? (l.prev = d) : d && (this._drawLast = d),
              (o.prev = null),
              (o.next = this._drawFirst),
              (this._drawFirst.prev = o),
              (this._drawFirst = o),
              this._requestRedraw(i));
          }
        },
      });
    function vf(i) {
      return H.canvas ? new gf(i) : null;
    }
    var $r = (function () {
        try {
          return (
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function (i) {
              return document.createElement("<lvml:" + i + ' class="lvml">');
            }
          );
        } catch {}
        return function (i) {
          return document.createElement(
            "<" + i + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
          );
        };
      })(),
      b_ = {
        _initContainer: function () {
          this._container = le("div", "leaflet-vml-container");
        },
        _update: function () {
          this._map._animatingZoom ||
            (cn.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function (i) {
          var o = (i._container = $r("shape"));
          (J(o, "leaflet-vml-shape " + (this.options.className || "")),
            (o.coordsize = "1 1"),
            (i._path = $r("path")),
            o.appendChild(i._path),
            this._updateStyle(i),
            (this._layers[h(i)] = i));
        },
        _addPath: function (i) {
          var o = i._container;
          (this._container.appendChild(o),
            i.options.interactive && i.addInteractiveTarget(o));
        },
        _removePath: function (i) {
          var o = i._container;
          (xe(o), i.removeInteractiveTarget(o), delete this._layers[h(i)]);
        },
        _updateStyle: function (i) {
          var o = i._stroke,
            l = i._fill,
            d = i.options,
            m = i._container;
          ((m.stroked = !!d.stroke),
            (m.filled = !!d.fill),
            d.stroke
              ? (o || (o = i._stroke = $r("stroke")),
                m.appendChild(o),
                (o.weight = d.weight + "px"),
                (o.color = d.color),
                (o.opacity = d.opacity),
                d.dashArray
                  ? (o.dashStyle = w(d.dashArray)
                      ? d.dashArray.join(" ")
                      : d.dashArray.replace(/( *, *)/g, " "))
                  : (o.dashStyle = ""),
                (o.endcap = d.lineCap.replace("butt", "flat")),
                (o.joinstyle = d.lineJoin))
              : o && (m.removeChild(o), (i._stroke = null)),
            d.fill
              ? (l || (l = i._fill = $r("fill")),
                m.appendChild(l),
                (l.color = d.fillColor || d.color),
                (l.opacity = d.fillOpacity))
              : l && (m.removeChild(l), (i._fill = null)));
        },
        _updateCircle: function (i) {
          var o = i._point.round(),
            l = Math.round(i._radius),
            d = Math.round(i._radiusY || l);
          this._setPath(
            i,
            i._empty()
              ? "M0 0"
              : "AL " +
                  o.x +
                  "," +
                  o.y +
                  " " +
                  l +
                  "," +
                  d +
                  " 0," +
                  65535 * 360,
          );
        },
        _setPath: function (i, o) {
          i._path.v = o;
        },
        _bringToFront: function (i) {
          Ii(i._container);
        },
        _bringToBack: function (i) {
          Bi(i._container);
        },
      },
      ws = H.vml ? $r : _h,
      qr = cn.extend({
        _initContainer: function () {
          ((this._container = ws("svg")),
            this._container.setAttribute("pointer-events", "none"),
            (this._rootGroup = ws("g")),
            this._container.appendChild(this._rootGroup));
        },
        _destroyContainer: function () {
          (xe(this._container),
            fe(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize);
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            cn.prototype._update.call(this);
            var i = this._bounds,
              o = i.getSize(),
              l = this._container;
            ((!this._svgSize || !this._svgSize.equals(o)) &&
              ((this._svgSize = o),
              l.setAttribute("width", o.x),
              l.setAttribute("height", o.y)),
              Me(l, i.min),
              l.setAttribute("viewBox", [i.min.x, i.min.y, o.x, o.y].join(" ")),
              this.fire("update"));
          }
        },
        _initPath: function (i) {
          var o = (i._path = ws("path"));
          (i.options.className && J(o, i.options.className),
            i.options.interactive && J(o, "leaflet-interactive"),
            this._updateStyle(i),
            (this._layers[h(i)] = i));
        },
        _addPath: function (i) {
          (this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(i._path),
            i.addInteractiveTarget(i._path));
        },
        _removePath: function (i) {
          (xe(i._path),
            i.removeInteractiveTarget(i._path),
            delete this._layers[h(i)]);
        },
        _updatePath: function (i) {
          (i._project(), i._update());
        },
        _updateStyle: function (i) {
          var o = i._path,
            l = i.options;
          o &&
            (l.stroke
              ? (o.setAttribute("stroke", l.color),
                o.setAttribute("stroke-opacity", l.opacity),
                o.setAttribute("stroke-width", l.weight),
                o.setAttribute("stroke-linecap", l.lineCap),
                o.setAttribute("stroke-linejoin", l.lineJoin),
                l.dashArray
                  ? o.setAttribute("stroke-dasharray", l.dashArray)
                  : o.removeAttribute("stroke-dasharray"),
                l.dashOffset
                  ? o.setAttribute("stroke-dashoffset", l.dashOffset)
                  : o.removeAttribute("stroke-dashoffset"))
              : o.setAttribute("stroke", "none"),
            l.fill
              ? (o.setAttribute("fill", l.fillColor || l.color),
                o.setAttribute("fill-opacity", l.fillOpacity),
                o.setAttribute("fill-rule", l.fillRule || "evenodd"))
              : o.setAttribute("fill", "none"));
        },
        _updatePoly: function (i, o) {
          this._setPath(i, wh(i._parts, o));
        },
        _updateCircle: function (i) {
          var o = i._point,
            l = Math.max(Math.round(i._radius), 1),
            d = Math.max(Math.round(i._radiusY), 1) || l,
            m = "a" + l + "," + d + " 0 1,0 ",
            y = i._empty()
              ? "M0 0"
              : "M" +
                (o.x - l) +
                "," +
                o.y +
                m +
                l * 2 +
                ",0 " +
                m +
                -l * 2 +
                ",0 ";
          this._setPath(i, y);
        },
        _setPath: function (i, o) {
          i._path.setAttribute("d", o);
        },
        _bringToFront: function (i) {
          Ii(i._path);
        },
        _bringToBack: function (i) {
          Bi(i._path);
        },
      });
    H.vml && qr.include(b_);
    function yf(i) {
      return H.svg || H.vml ? new qr(i) : null;
    }
    oe.include({
      getRenderer: function (i) {
        var o =
          i.options.renderer ||
          this._getPaneRenderer(i.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          o || (o = this._renderer = this._createRenderer()),
          this.hasLayer(o) || this.addLayer(o),
          o
        );
      },
      _getPaneRenderer: function (i) {
        if (i === "overlayPane" || i === void 0) return !1;
        var o = this._paneRenderers[i];
        return (
          o === void 0 &&
            ((o = this._createRenderer({ pane: i })),
            (this._paneRenderers[i] = o)),
          o
        );
      },
      _createRenderer: function (i) {
        return (this.options.preferCanvas && vf(i)) || yf(i);
      },
    });
    var xf = Zi.extend({
      initialize: function (i, o) {
        Zi.prototype.initialize.call(this, this._boundsToLatLngs(i), o);
      },
      setBounds: function (i) {
        return this.setLatLngs(this._boundsToLatLngs(i));
      },
      _boundsToLatLngs: function (i) {
        return (
          (i = ue(i)),
          [
            i.getSouthWest(),
            i.getNorthWest(),
            i.getNorthEast(),
            i.getSouthEast(),
          ]
        );
      },
    });
    function L_(i, o) {
      return new xf(i, o);
    }
    ((qr.create = ws),
      (qr.pointsToPath = wh),
      (un.geometryToLayer = ps),
      (un.coordsToLatLng = Zl),
      (un.coordsToLatLngs = ms),
      (un.latLngToCoords = Ul),
      (un.latLngsToCoords = gs),
      (un.getFeature = Ui),
      (un.asFeature = vs),
      oe.mergeOptions({ boxZoom: !0 }));
    var _f = Yt.extend({
      initialize: function (i) {
        ((this._map = i),
          (this._container = i._container),
          (this._pane = i._panes.overlayPane),
          (this._resetStateTimeout = 0),
          i.on("unload", this._destroy, this));
      },
      addHooks: function () {
        X(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function () {
        fe(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        (xe(this._pane), delete this._pane);
      },
      _resetState: function () {
        ((this._resetStateTimeout = 0), (this._moved = !1));
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (i) {
        if (!i.shiftKey || (i.which !== 1 && i.button !== 1)) return !1;
        (this._clearDeferredResetState(),
          this._resetState(),
          Ir(),
          Cl(),
          (this._startPoint = this._map.mouseEventToContainerPoint(i)),
          X(
            document,
            {
              contextmenu: ci,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this,
          ));
      },
      _onMouseMove: function (i) {
        (this._moved ||
          ((this._moved = !0),
          (this._box = le("div", "leaflet-zoom-box", this._container)),
          J(this._container, "leaflet-crosshair"),
          this._map.fire("boxzoomstart")),
          (this._point = this._map.mouseEventToContainerPoint(i)));
        var o = new Z(this._point, this._startPoint),
          l = o.getSize();
        (Me(this._box, o.min),
          (this._box.style.width = l.x + "px"),
          (this._box.style.height = l.y + "px"));
      },
      _finish: function () {
        (this._moved &&
          (xe(this._box), be(this._container, "leaflet-crosshair")),
          Br(),
          Tl(),
          fe(
            document,
            {
              contextmenu: ci,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this,
          ));
      },
      _onMouseUp: function (i) {
        if (
          !(i.which !== 1 && i.button !== 1) &&
          (this._finish(), !!this._moved)
        ) {
          (this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              u(this._resetState, this),
              0,
            )));
          var o = new Ce(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point),
          );
          this._map.fitBounds(o).fire("boxzoomend", { boxZoomBounds: o });
        }
      },
      _onKeyDown: function (i) {
        i.keyCode === 27 &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    (oe.addInitHook("addHandler", "boxZoom", _f),
      oe.mergeOptions({ doubleClickZoom: !0 }));
    var wf = Yt.extend({
      addHooks: function () {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function (i) {
        var o = this._map,
          l = o.getZoom(),
          d = o.options.zoomDelta,
          m = i.originalEvent.shiftKey ? l - d : l + d;
        o.options.doubleClickZoom === "center"
          ? o.setZoom(m)
          : o.setZoomAround(i.containerPoint, m);
      },
    });
    (oe.addInitHook("addHandler", "doubleClickZoom", wf),
      oe.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      }));
    var Pf = Yt.extend({
      addHooks: function () {
        if (!this._draggable) {
          var i = this._map;
          ((this._draggable = new bn(i._mapPane, i._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this,
            ),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            i.options.worldCopyJump &&
              (this._draggable.on("predrag", this._onPreDragWrap, this),
              i.on("zoomend", this._onZoomEnd, this),
              i.whenReady(this._onZoomEnd, this)));
        }
        (J(this._map._container, "leaflet-grab leaflet-touch-drag"),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []));
      },
      removeHooks: function () {
        (be(this._map._container, "leaflet-grab"),
          be(this._map._container, "leaflet-touch-drag"),
          this._draggable.disable());
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var i = this._map;
        if (
          (i._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var o = ue(this._map.options.maxBounds);
          ((this._offsetLimit = ee(
            this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(o.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize()),
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity),
            )));
        } else this._offsetLimit = null;
        (i.fire("movestart").fire("dragstart"),
          i.options.inertia && ((this._positions = []), (this._times = [])));
      },
      _onDrag: function (i) {
        if (this._map.options.inertia) {
          var o = (this._lastTime = +new Date()),
            l = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          (this._positions.push(l),
            this._times.push(o),
            this._prunePositions(o));
        }
        this._map.fire("move", i).fire("drag", i);
      },
      _prunePositions: function (i) {
        for (; this._positions.length > 1 && i - this._times[0] > 50;)
          (this._positions.shift(), this._times.shift());
      },
      _onZoomEnd: function () {
        var i = this._map.getSize().divideBy(2),
          o = this._map.latLngToLayerPoint([0, 0]);
        ((this._initialWorldOffset = o.subtract(i).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x));
      },
      _viscousLimit: function (i, o) {
        return i - (i - o) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var i = this._draggable._newPos.subtract(this._draggable._startPos),
            o = this._offsetLimit;
          (i.x < o.min.x && (i.x = this._viscousLimit(i.x, o.min.x)),
            i.y < o.min.y && (i.y = this._viscousLimit(i.y, o.min.y)),
            i.x > o.max.x && (i.x = this._viscousLimit(i.x, o.max.x)),
            i.y > o.max.y && (i.y = this._viscousLimit(i.y, o.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(i)));
        }
      },
      _onPreDragWrap: function () {
        var i = this._worldWidth,
          o = Math.round(i / 2),
          l = this._initialWorldOffset,
          d = this._draggable._newPos.x,
          m = ((d - o + l) % i) + o - l,
          y = ((d + o + l) % i) - o - l,
          T = Math.abs(m + l) < Math.abs(y + l) ? m : y;
        ((this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = T));
      },
      _onDragEnd: function (i) {
        var o = this._map,
          l = o.options,
          d = !l.inertia || i.noInertia || this._times.length < 2;
        if ((o.fire("dragend", i), d)) o.fire("moveend");
        else {
          this._prunePositions(+new Date());
          var m = this._lastPos.subtract(this._positions[0]),
            y = (this._lastTime - this._times[0]) / 1e3,
            T = l.easeLinearity,
            E = m.multiplyBy(T / y),
            M = E.distanceTo([0, 0]),
            R = Math.min(l.inertiaMaxSpeed, M),
            F = E.multiplyBy(R / M),
            G = R / (l.inertiaDeceleration * T),
            te = F.multiplyBy(-G / 2).round();
          !te.x && !te.y
            ? o.fire("moveend")
            : ((te = o._limitOffset(te, o.options.maxBounds)),
              se(function () {
                o.panBy(te, {
                  duration: G,
                  easeLinearity: T,
                  noMoveStart: !0,
                  animate: !0,
                });
              }));
        }
      },
    });
    (oe.addInitHook("addHandler", "dragging", Pf),
      oe.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }));
    var kf = Yt.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (i) {
        ((this._map = i),
          this._setPanDelta(i.options.keyboardPanDelta),
          this._setZoomDelta(i.options.zoomDelta));
      },
      addHooks: function () {
        var i = this._map._container;
        (i.tabIndex <= 0 && (i.tabIndex = "0"),
          X(
            i,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this,
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this,
          ));
      },
      removeHooks: function () {
        (this._removeHooks(),
          fe(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this,
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this,
          ));
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var i = document.body,
            o = document.documentElement,
            l = i.scrollTop || o.scrollTop,
            d = i.scrollLeft || o.scrollLeft;
          (this._map._container.focus(), window.scrollTo(d, l));
        }
      },
      _onFocus: function () {
        ((this._focused = !0), this._map.fire("focus"));
      },
      _onBlur: function () {
        ((this._focused = !1), this._map.fire("blur"));
      },
      _setPanDelta: function (i) {
        var o = (this._panKeys = {}),
          l = this.keyCodes,
          d,
          m;
        for (d = 0, m = l.left.length; d < m; d++) o[l.left[d]] = [-1 * i, 0];
        for (d = 0, m = l.right.length; d < m; d++) o[l.right[d]] = [i, 0];
        for (d = 0, m = l.down.length; d < m; d++) o[l.down[d]] = [0, i];
        for (d = 0, m = l.up.length; d < m; d++) o[l.up[d]] = [0, -1 * i];
      },
      _setZoomDelta: function (i) {
        var o = (this._zoomKeys = {}),
          l = this.keyCodes,
          d,
          m;
        for (d = 0, m = l.zoomIn.length; d < m; d++) o[l.zoomIn[d]] = i;
        for (d = 0, m = l.zoomOut.length; d < m; d++) o[l.zoomOut[d]] = -i;
      },
      _addHooks: function () {
        X(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function () {
        fe(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function (i) {
        if (!(i.altKey || i.ctrlKey || i.metaKey)) {
          var o = i.keyCode,
            l = this._map,
            d;
          if (o in this._panKeys) {
            if (!l._panAnim || !l._panAnim._inProgress)
              if (
                ((d = this._panKeys[o]),
                i.shiftKey && (d = V(d).multiplyBy(3)),
                l.options.maxBounds &&
                  (d = l._limitOffset(V(d), l.options.maxBounds)),
                l.options.worldCopyJump)
              ) {
                var m = l.wrapLatLng(
                  l.unproject(l.project(l.getCenter()).add(d)),
                );
                l.panTo(m);
              } else l.panBy(d);
          } else if (o in this._zoomKeys)
            l.setZoom(l.getZoom() + (i.shiftKey ? 3 : 1) * this._zoomKeys[o]);
          else if (o === 27 && l._popup && l._popup.options.closeOnEscapeKey)
            l.closePopup();
          else return;
          ci(i);
        }
      },
    });
    (oe.addInitHook("addHandler", "keyboard", kf),
      oe.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      }));
    var Sf = Yt.extend({
      addHooks: function () {
        (X(this._map._container, "wheel", this._onWheelScroll, this),
          (this._delta = 0));
      },
      removeHooks: function () {
        fe(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function (i) {
        var o = qh(i),
          l = this._map.options.wheelDebounceTime;
        ((this._delta += o),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(i)),
          this._startTime || (this._startTime = +new Date()));
        var d = Math.max(l - (+new Date() - this._startTime), 0);
        (clearTimeout(this._timer),
          (this._timer = setTimeout(u(this._performZoom, this), d)),
          ci(i));
      },
      _performZoom: function () {
        var i = this._map,
          o = i.getZoom(),
          l = this._map.options.zoomSnap || 0;
        i._stop();
        var d = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          m = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(d))))) / Math.LN2,
          y = l ? Math.ceil(m / l) * l : m,
          T = i._limitZoom(o + (this._delta > 0 ? y : -y)) - o;
        ((this._delta = 0),
          (this._startTime = null),
          T &&
            (i.options.scrollWheelZoom === "center"
              ? i.setZoom(o + T)
              : i.setZoomAround(this._lastMousePos, o + T)));
      },
    });
    oe.addInitHook("addHandler", "scrollWheelZoom", Sf);
    var N_ = 600;
    oe.mergeOptions({
      tapHold: H.touchNative && H.safari && H.mobile,
      tapTolerance: 15,
    });
    var Cf = Yt.extend({
      addHooks: function () {
        X(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function () {
        fe(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function (i) {
        if ((clearTimeout(this._holdTimeout), i.touches.length === 1)) {
          var o = i.touches[0];
          ((this._startPos = this._newPos = new z(o.clientX, o.clientY)),
            (this._holdTimeout = setTimeout(
              u(function () {
                (this._cancel(),
                  this._isTapValid() &&
                    (X(document, "touchend", We),
                    X(
                      document,
                      "touchend touchcancel",
                      this._cancelClickPrevent,
                    ),
                    this._simulateEvent("contextmenu", o)));
              }, this),
              N_,
            )),
            X(document, "touchend touchcancel contextmenu", this._cancel, this),
            X(document, "touchmove", this._onMove, this));
        }
      },
      _cancelClickPrevent: function i() {
        (fe(document, "touchend", We), fe(document, "touchend touchcancel", i));
      },
      _cancel: function () {
        (clearTimeout(this._holdTimeout),
          fe(document, "touchend touchcancel contextmenu", this._cancel, this),
          fe(document, "touchmove", this._onMove, this));
      },
      _onMove: function (i) {
        var o = i.touches[0];
        this._newPos = new z(o.clientX, o.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (i, o) {
        var l = new MouseEvent(i, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: o.screenX,
          screenY: o.screenY,
          clientX: o.clientX,
          clientY: o.clientY,
        });
        ((l._simulated = !0), o.target.dispatchEvent(l));
      },
    });
    (oe.addInitHook("addHandler", "tapHold", Cf),
      oe.mergeOptions({ touchZoom: H.touch, bounceAtZoomLimits: !0 }));
    var Tf = Yt.extend({
      addHooks: function () {
        (J(this._map._container, "leaflet-touch-zoom"),
          X(this._map._container, "touchstart", this._onTouchStart, this));
      },
      removeHooks: function () {
        (be(this._map._container, "leaflet-touch-zoom"),
          fe(this._map._container, "touchstart", this._onTouchStart, this));
      },
      _onTouchStart: function (i) {
        var o = this._map;
        if (!(
          !i.touches ||
          i.touches.length !== 2 ||
          o._animatingZoom ||
          this._zooming
        )) {
          var l = o.mouseEventToContainerPoint(i.touches[0]),
            d = o.mouseEventToContainerPoint(i.touches[1]);
          ((this._centerPoint = o.getSize()._divideBy(2)),
            (this._startLatLng = o.containerPointToLatLng(this._centerPoint)),
            o.options.touchZoom !== "center" &&
              (this._pinchStartLatLng = o.containerPointToLatLng(
                l.add(d)._divideBy(2),
              )),
            (this._startDist = l.distanceTo(d)),
            (this._startZoom = o.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            o._stop(),
            X(document, "touchmove", this._onTouchMove, this),
            X(document, "touchend touchcancel", this._onTouchEnd, this),
            We(i));
        }
      },
      _onTouchMove: function (i) {
        if (!(!i.touches || i.touches.length !== 2 || !this._zooming)) {
          var o = this._map,
            l = o.mouseEventToContainerPoint(i.touches[0]),
            d = o.mouseEventToContainerPoint(i.touches[1]),
            m = l.distanceTo(d) / this._startDist;
          if (
            ((this._zoom = o.getScaleZoom(m, this._startZoom)),
            !o.options.bounceAtZoomLimits &&
              ((this._zoom < o.getMinZoom() && m < 1) ||
                (this._zoom > o.getMaxZoom() && m > 1)) &&
              (this._zoom = o._limitZoom(this._zoom)),
            o.options.touchZoom === "center")
          ) {
            if (((this._center = this._startLatLng), m === 1)) return;
          } else {
            var y = l._add(d)._divideBy(2)._subtract(this._centerPoint);
            if (m === 1 && y.x === 0 && y.y === 0) return;
            this._center = o.unproject(
              o.project(this._pinchStartLatLng, this._zoom).subtract(y),
              this._zoom,
            );
          }
          (this._moved || (o._moveStart(!0, !1), (this._moved = !0)),
            ce(this._animRequest));
          var T = u(
            o._move,
            o,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0,
          );
          ((this._animRequest = se(T, this, !0)), We(i));
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        ((this._zooming = !1),
          ce(this._animRequest),
          fe(document, "touchmove", this._onTouchMove, this),
          fe(document, "touchend touchcancel", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap,
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom),
              ));
      },
    });
    (oe.addInitHook("addHandler", "touchZoom", Tf),
      (oe.BoxZoom = _f),
      (oe.DoubleClickZoom = wf),
      (oe.Drag = Pf),
      (oe.Keyboard = kf),
      (oe.ScrollWheelZoom = Sf),
      (oe.TapHold = Cf),
      (oe.TouchZoom = Tf),
      (n.Bounds = Z),
      (n.Browser = H),
      (n.CRS = He),
      (n.Canvas = gf),
      (n.Circle = Fl),
      (n.CircleMarker = fs),
      (n.Class = he),
      (n.Control = Ot),
      (n.DivIcon = ff),
      (n.DivOverlay = Qt),
      (n.DomEvent = qx),
      (n.DomUtil = Wx),
      (n.Draggable = bn),
      (n.Evented = Be),
      (n.FeatureGroup = an),
      (n.GeoJSON = un),
      (n.GridLayer = Wr),
      (n.Handler = Yt),
      (n.Icon = Fi),
      (n.ImageOverlay = ys),
      (n.LatLng = re),
      (n.LatLngBounds = Ce),
      (n.Layer = Dt),
      (n.LayerGroup = Vi),
      (n.LineUtil = s_),
      (n.Map = oe),
      (n.Marker = hs),
      (n.Mixin = e_),
      (n.Path = Ln),
      (n.Point = z),
      (n.PolyUtil = t_),
      (n.Polygon = Zi),
      (n.Polyline = ln),
      (n.Popup = xs),
      (n.PosAnimation = Gh),
      (n.Projection = a_),
      (n.Rectangle = xf),
      (n.Renderer = cn),
      (n.SVG = qr),
      (n.SVGOverlay = hf),
      (n.TileLayer = Hi),
      (n.Tooltip = _s),
      (n.Transformation = Rt),
      (n.Util = Ue),
      (n.VideoOverlay = df),
      (n.bind = u),
      (n.bounds = ee),
      (n.canvas = vf),
      (n.circle = m_),
      (n.circleMarker = p_),
      (n.control = Zr),
      (n.divIcon = S_),
      (n.extend = s),
      (n.featureGroup = d_),
      (n.geoJSON = cf),
      (n.geoJson = y_),
      (n.gridLayer = C_),
      (n.icon = h_),
      (n.imageOverlay = x_),
      (n.latLng = Y),
      (n.latLngBounds = ue),
      (n.layerGroup = c_),
      (n.map = Gx),
      (n.marker = f_),
      (n.point = V),
      (n.polygon = v_),
      (n.polyline = g_),
      (n.popup = P_),
      (n.rectangle = L_),
      (n.setOptions = C),
      (n.stamp = h),
      (n.svg = yf),
      (n.svgOverlay = w_),
      (n.tileLayer = pf),
      (n.tooltip = k_),
      (n.transformation = Oi),
      (n.version = r),
      (n.videoOverlay = __));
    var E_ = window.L;
    ((n.noConflict = function () {
      return ((window.L = E_), this);
    }),
      (window.L = n));
  });
})(Yc, Yc.exports);
var aL = Yc.exports;
const Qi = og(aL),
  sn =
    "bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl",
  qe =
    "w-full rounded-full bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 py-3 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#ff2e7e]/60",
  Kn =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#e3547f] hover:bg-[#72cfc8] transition-colors text-white font-semibold px-6 py-3 shadow-lg shadow-[#e3547f]/30",
  Qc =
    "inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-100 hover:bg-[#72cfc8] hover:text-white hover:border-[#72cfc8] transition-colors font-semibold px-6 py-3",
  is = "bg-gradient-to-br from-[#e3547f]/10 via-transparent to-[#71d0c9]/10",
  lL = (e) =>
    Qi.divIcon({
      className: "",
      html: `<div style="width:${e ? 38 : 30}px;height:${e ? 38 : 30}px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:radial-gradient(circle at 30% 25%,#ff8ab4,#ff2e7e 50%,#e0125f);box-shadow:0 0 ${e ? 18 : 10}px #ff2e7e99;border:2px solid #fff;display:flex;align-items:center;justify-content:center"><div style="width:10px;height:10px;border-radius:50%;background:#fff"></div></div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -30],
    }),
  zu = (e) =>
    String(e).replace(
      /[&<>"']/g,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[t],
    );
function uL() {
  var k;
  const e = Wt(),
    t = ns(),
    n = zi(),
    r =
      ((k = Ba.find((_) => {
        var w;
        return _.label === ((w = e.state) == null ? void 0 : w.category);
      })) == null
        ? void 0
        : k.key) || "all",
    [s, a] = b.useState(r),
    [u, c] = b.useState(""),
    [h, p] = b.useState(null),
    v = b.useRef(null),
    g = b.useRef(null),
    x = b.useRef(null),
    P = b.useRef({}),
    S = b.useMemo(
      () =>
        t
          .filter(
            (_) =>
              _.lat &&
              _.lng &&
              (s === "all" || _.category === s) &&
              `${_.name} ${_.description || ""} ${oa(_.category)}`
                .toLowerCase()
                .includes(u.toLowerCase()),
          )
          .map((_) => {
            const w = Nr(n, _.id);
            return { ..._, avg: w.count ? w.avg : _.rating, count: w.count };
          })
          .sort((_, w) => w.avg - _.avg),
      [t, n, s, u],
    );
  (b.useEffect(() => {
    if (!(g.current || !v.current))
      return (
        (g.current = Qi.map(v.current, { scrollWheelZoom: !0 }).setView(
          $c,
          12,
        )),
        Qi.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: "© OpenStreetMap",
        }).addTo(g.current),
        (x.current = Qi.layerGroup().addTo(g.current)),
        () => {
          (g.current.remove(), (g.current = null));
        }
      );
  }, []),
    b.useEffect(() => {
      g.current &&
        (x.current.clearLayers(),
        (P.current = {}),
        S.forEach((_) => {
          const w = Qi.marker([_.lat, _.lng], { icon: lL(_.id === h) })
            .addTo(x.current)
            .bindPopup(
              `<strong>${zu(_.name)}</strong><br>${zu(oa(_.category))}<br>⭐ ${_.avg.toFixed(1)}<br><a href="#/provider/${zu(_.id)}">Ver detalhes</a>`,
            );
          (w.on("click", () => p(_.id)), (P.current[_.id] = w));
        }),
        S.length &&
          g.current.fitBounds(
            Qi.latLngBounds(S.map((_) => [_.lat, _.lng])).pad(0.25),
            { maxZoom: 14 },
          ));
    }, [S, h]));
  const C = (_) => {
      var w, N;
      (p(_.id),
        (w = g.current) == null || w.flyTo([_.lat, _.lng], 15),
        (N = P.current[_.id]) == null || N.openPopup());
    },
    j = (_) =>
      `rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${_ ? "bg-[#ff2e7e] text-white shadow-lg shadow-[#ff2e7e]/40" : "bg-white/60 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-[#72cfc8]/40"}`;
  return f.jsx(ot, {
    title: "Explorar Eventos e Fornecedores - NexParty",
    description:
      "Explore fornecedores e eventos no mapa. Encontre tudo o que você precisa para sua festa com nossa busca detalhada.",
    children: f.jsx("section", {
      className:
        "py-8 min-h-screen bg-gradient-to-br from-[#e3547f]/10 via-transparent to-[#71d0c9]/10",
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-7xl",
        children: [
          f.jsxs("h1", {
            className:
              "text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white",
            children: [
              "Explorar ",
              f.jsx("span", {
                className:
                  "bg-gradient-to-r from-[#72cfd3] to-[#e3306d] bg-clip-text text-transparent",
                children: "Fornecedores",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "relative mb-4",
            children: [
              f.jsx(fb, {
                className:
                  "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400",
              }),
              f.jsx("input", {
                className: qe + " pl-11",
                placeholder: "Buscar por nome, serviço ou descrição",
                value: u,
                onChange: (_) => c(_.target.value),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex gap-2 overflow-x-auto pb-3 mb-4",
            children: [
              f.jsx("button", {
                className: j(s === "all"),
                onClick: () => a("all"),
                children: "Todos",
              }),
              Ba.map((_) =>
                f.jsx(
                  "button",
                  {
                    className: j(s === _.key),
                    onClick: () => a(_.key),
                    children: _.label,
                  },
                  _.key,
                ),
              ),
            ],
          }),
          f.jsxs("div", {
            className: "grid lg:grid-cols-5 gap-6",
            children: [
              f.jsxs("div", {
                className:
                  "lg:col-span-2 space-y-3 lg:max-h-[620px] lg:overflow-y-auto pr-1 order-2 lg:order-1",
                children: [
                  f.jsxs("p", {
                    className: "text-sm text-gray-500",
                    children: [
                      S.length,
                      " fornecedor",
                      S.length === 1 ? "" : "es",
                      " encontrado",
                      S.length === 1 ? "" : "s",
                    ],
                  }),
                  S.map((_) =>
                    f.jsxs(
                      "article",
                      {
                        onClick: () => C(_),
                        className: `${sn} rounded-3xl p-3 flex gap-3 cursor-pointer transition-all ${h === _.id ? "ring-2 ring-[#ff2e7e]" : "hover:-translate-y-0.5"}`,
                        children: [
                          f.jsx("img", {
                            src: _.image_url || ux(_.category),
                            alt: _.name,
                            loading: "lazy",
                            className:
                              "h-24 w-24 rounded-2xl object-cover shrink-0",
                          }),
                          f.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              f.jsx("h3", {
                                className:
                                  "font-bold text-gray-900 dark:text-white truncate",
                                children: _.name,
                              }),
                              f.jsx("p", {
                                className:
                                  "text-xs text-[#e3547f] font-semibold",
                                children: oa(_.category),
                              }),
                              f.jsxs("p", {
                                className:
                                  "text-xs text-gray-500 flex items-center gap-1 mt-1",
                                children: [
                                  f.jsx(xh, { className: "h-3 w-3" }),
                                  _.city,
                                ],
                              }),
                              f.jsxs("div", {
                                className:
                                  "flex items-center justify-between mt-2",
                                children: [
                                  f.jsxs("span", {
                                    className:
                                      "text-sm flex items-center gap-1 text-gray-700 dark:text-gray-300",
                                    children: [
                                      f.jsx(Mt, {
                                        className:
                                          "h-4 w-4 text-yellow-400 fill-yellow-400",
                                      }),
                                      _.avg.toFixed(1),
                                      " ",
                                      f.jsxs("span", {
                                        className: "text-gray-400",
                                        children: ["(", _.count, ")"],
                                      }),
                                    ],
                                  }),
                                  f.jsx(Pe, {
                                    to: `/provider/${_.id}`,
                                    onClick: (w) => w.stopPropagation(),
                                    className:
                                      "rounded-full bg-[#ff2e7e]/10 text-[#ff2e7e] px-3 py-1 text-xs font-semibold hover:bg-[#ff2e7e] hover:text-white transition-colors",
                                    children: "Ver perfil",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      _.id,
                    ),
                  ),
                  !S.length &&
                    f.jsx("p", {
                      className: "text-center text-gray-500 py-10",
                      children:
                        "Nenhum fornecedor encontrado com esses filtros.",
                    }),
                ],
              }),
              f.jsx("div", {
                className: "lg:col-span-3 order-1 lg:order-2",
                children: f.jsx("div", {
                  ref: v,
                  className:
                    "h-[380px] lg:h-[620px] rounded-3xl overflow-hidden shadow-xl border border-white/50 relative z-0",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function cL() {
  const { id: e } = Z2(),
    t = ns().find((c) => c.id === e),
    n = zi();
  if (!t)
    return f.jsx(ot, {
      title: "Fornecedor - NexParty",
      children: f.jsxs("div", {
        className: "container mx-auto px-4 py-32 text-center",
        children: [
          f.jsx("h1", {
            className: "text-2xl font-bold mb-6 text-gray-900 dark:text-white",
            children: "Fornecedor não encontrado",
          }),
          f.jsx(Pe, {
            to: "/explore",
            className: Kn,
            children: "Voltar a Explorar",
          }),
        ],
      }),
    });
  const r = n.filter((c) => c.provider_id === e),
    s = Nr(n, e),
    a = s.count ? s.avg : t.rating,
    u = t.phone
      ? `https://wa.me/55${String(t.phone).replace(/\D/g, "")}`
      : null;
  return f.jsx(ot, {
    title: `${t.name} - NexParty`,
    description: t.description,
    children: f.jsx("section", {
      className: `py-10 ${is} min-h-screen`,
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-5xl",
        children: [
          f.jsxs(Pe, {
            to: "/explore",
            className:
              "inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-[#e3547f] mb-6",
            children: [f.jsx(OT, { className: "h-4 w-4" }), "Voltar"],
          }),
          f.jsxs("div", {
            className: `${sn} rounded-3xl overflow-hidden`,
            children: [
              f.jsx("img", {
                src: t.image_url || ux(t.category),
                alt: t.name,
                className: "h-64 md:h-80 w-full object-cover",
              }),
              f.jsxs("div", {
                className: "p-6 md:p-10 grid md:grid-cols-3 gap-8",
                children: [
                  f.jsxs("div", {
                    className: "md:col-span-2",
                    children: [
                      f.jsx("p", {
                        className: "text-sm font-semibold text-[#e3547f]",
                        children: oa(t.category),
                      }),
                      f.jsx("h1", {
                        className:
                          "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-1",
                        children: t.name,
                      }),
                      f.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-4 mt-3 text-gray-600 dark:text-gray-300",
                        children: [
                          f.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              f.jsx(Mt, {
                                className:
                                  "h-5 w-5 text-yellow-400 fill-yellow-400",
                              }),
                              Number(a).toFixed(1),
                              " (",
                              s.count,
                              " avaliaç",
                              s.count === 1 ? "ão" : "ões",
                              ")",
                            ],
                          }),
                          f.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              f.jsx(xh, { className: "h-4 w-4" }),
                              t.city,
                            ],
                          }),
                        ],
                      }),
                      f.jsx("p", {
                        className:
                          "mt-6 text-gray-700 dark:text-gray-300 leading-relaxed",
                        children: t.description,
                      }),
                    ],
                  }),
                  f.jsxs("aside", {
                    className: "space-y-3",
                    children: [
                      t.price_from > 0 &&
                        f.jsxs("div", {
                          className:
                            "rounded-3xl bg-[#e3547f]/10 p-5 text-center",
                          children: [
                            f.jsx("p", {
                              className: "text-xs text-gray-500",
                              children: "A partir de",
                            }),
                            f.jsxs("p", {
                              className: "text-3xl font-bold text-[#e3547f]",
                              children: [
                                "R$ ",
                                Number(t.price_from).toLocaleString("pt-BR"),
                              ],
                            }),
                          ],
                        }),
                      u &&
                        f.jsxs("a", {
                          href: u,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: Kn + " w-full",
                          children: [
                            f.jsx(rb, { className: "h-4 w-4" }),
                            "Chamar no WhatsApp",
                          ],
                        }),
                      t.phone &&
                        f.jsxs("a", {
                          href: `tel:${t.phone}`,
                          className:
                            "inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 dark:border-white/20 py-3 font-semibold text-gray-800 dark:text-gray-100 hover:bg-[#72cfc8] hover:text-white transition-colors",
                          children: [
                            f.jsx(cb, { className: "h-4 w-4" }),
                            "Ligar",
                          ],
                        }),
                      f.jsx(Pe, {
                        to: "/avaliacoes",
                        state: { provider_id: t.id },
                        className:
                          "inline-flex w-full items-center justify-center rounded-full bg-[#ff2e7e]/10 text-[#ff2e7e] py-3 font-semibold hover:bg-[#ff2e7e] hover:text-white transition-colors",
                        children: "Avaliar este fornecedor",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsx("h2", {
            className:
              "text-2xl font-bold mt-12 mb-5 text-gray-900 dark:text-white",
            children: "Avaliações",
          }),
          f.jsxs("div", {
            className: "space-y-4",
            children: [
              r.map((c) =>
                f.jsxs(
                  "article",
                  {
                    className: `${sn} rounded-3xl p-5`,
                    children: [
                      f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          f.jsx("p", {
                            className:
                              "font-bold text-gray-900 dark:text-white",
                            children: c.customer_name,
                          }),
                          f.jsx("span", {
                            className: "flex",
                            children: [1, 2, 3, 4, 5].map((h) =>
                              f.jsx(
                                Mt,
                                {
                                  className: `h-4 w-4 ${h <= c.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`,
                                },
                                h,
                              ),
                            ),
                          }),
                        ],
                      }),
                      f.jsx("p", {
                        className:
                          "mt-2 text-gray-700 dark:text-gray-300 break-words",
                        children: c.feedback_text,
                      }),
                      f.jsx("p", {
                        className: "text-xs text-gray-400 mt-2",
                        children: new Date(c.created_at).toLocaleDateString(
                          "pt-BR",
                        ),
                      }),
                    ],
                  },
                  c.id,
                ),
              ),
              !r.length &&
                f.jsx("p", {
                  className: "text-gray-500",
                  children: "Este fornecedor ainda não tem avaliações.",
                }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Fa = (e) =>
    e.role === "provider" ? "/provider/dashboard" : "/dashboard",
  px = ({ title: e, sub: t, children: n, foot: r }) =>
    f.jsx("section", {
      className: `py-16 ${is} min-h-screen`,
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-md",
        children: [
          f.jsxs("div", {
            className: `${sn} rounded-[2rem] p-8`,
            children: [
              f.jsx("h1", {
                className:
                  "text-3xl font-bold text-center text-gray-900 dark:text-white",
                children: e,
              }),
              f.jsx("p", {
                className: "text-center text-gray-500 mt-2 mb-6 text-sm",
                children: t,
              }),
              n,
            ],
          }),
          f.jsx("p", {
            className: "text-center text-sm text-gray-500 mt-6",
            children: r,
          }),
        ],
      }),
    });
function dL() {
  var g;
  const { user: e, login: t } = zr(),
    n = oi(),
    r = Wt(),
    [s, a] = b.useState({ email: "", password: "" }),
    [u, c] = b.useState(""),
    [h, p] = b.useState(!1);
  if (e)
    return f.jsx(qn, {
      to: ((g = r.state) == null ? void 0 : g.from) || Fa(e),
      replace: !0,
    });
  const v = async (x) => {
    var P;
    (x.preventDefault(), p(!0), c(""));
    try {
      const S = await t(s.email, s.password);
      n(((P = r.state) == null ? void 0 : P.from) || Fa(S), { replace: !0 });
    } catch (S) {
      c(S.message);
    }
    p(!1);
  };
  return f.jsx(ot, {
    title: "Entrar - NexParty",
    children: f.jsx(px, {
      title: "Entrar",
      sub: "Acesse sua conta NexParty",
      foot: f.jsxs(f.Fragment, {
        children: [
          "Ainda não tem conta? ",
          f.jsx(Pe, {
            to: "/register",
            className: "text-[#e3547f] font-semibold",
            children: "Criar conta grátis",
          }),
        ],
      }),
      children: f.jsxs("form", {
        onSubmit: v,
        className: "space-y-4",
        children: [
          f.jsx("input", {
            className: qe,
            type: "email",
            required: !0,
            placeholder: "E-mail",
            autoComplete: "email",
            value: s.email,
            onChange: (x) => a({ ...s, email: x.target.value }),
          }),
          f.jsx("input", {
            className: qe,
            type: "password",
            required: !0,
            placeholder: "Senha",
            autoComplete: "current-password",
            value: s.password,
            onChange: (x) => a({ ...s, password: x.target.value }),
          }),
          u &&
            f.jsx("p", {
              className: "text-sm text-red-500 text-center",
              children: u,
            }),
          f.jsxs("button", {
            disabled: h,
            className: Kn + " w-full disabled:opacity-60",
            children: [
              f.jsx(nb, { className: "h-4 w-4" }),
              h ? "Entrando..." : "Entrar",
            ],
          }),
        ],
      }),
    }),
  });
}
function hL() {
  const { user: e, register: t } = zr(),
    n = oi(),
    [r] = gP(),
    [s, a] = b.useState({
      name: "",
      email: "",
      password: "",
      confirm: "",
      role: r.get("role") === "provider" ? "provider" : "client",
      terms: !1,
    }),
    [u, c] = b.useState(""),
    [h, p] = b.useState(!1);
  if (e) return f.jsx(qn, { to: Fa(e), replace: !0 });
  const v = async (x) => {
      if ((x.preventDefault(), c(""), s.name.trim().length < 2))
        return c("Informe seu nome.");
      if (s.password.length < 6)
        return c("A senha deve ter pelo menos 6 caracteres.");
      if (s.password !== s.confirm) return c("As senhas não conferem.");
      if (!s.terms)
        return c("Aceite os Termos de Uso e a Política de Privacidade.");
      p(!0);
      try {
        const P = await t(s);
        n(Fa(P), { replace: !0 });
      } catch (P) {
        c(P.message);
      }
      p(!1);
    },
    g = (x, P, S) =>
      f.jsxs("button", {
        type: "button",
        onClick: () => a({ ...s, role: x }),
        className: `flex-1 rounded-full py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors ${s.role === x ? "bg-[#ff2e7e] text-white shadow-lg shadow-[#ff2e7e]/40" : "bg-white/60 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-[#72cfc8]/40"}`,
        children: [f.jsx(P, { className: "h-4 w-4" }), S],
      });
  return f.jsx(ot, {
    title: "Cadastrar - NexParty",
    children: f.jsx(px, {
      title: "Criar Conta Grátis",
      sub: "Cadastro rápido e seguro",
      foot: f.jsxs(f.Fragment, {
        children: [
          "Já tem conta? ",
          f.jsx(Pe, {
            to: "/login",
            className: "text-[#e3547f] font-semibold",
            children: "Entrar",
          }),
        ],
      }),
      children: f.jsxs("form", {
        onSubmit: v,
        className: "space-y-4",
        children: [
          f.jsxs("div", {
            className: "flex gap-2",
            children: [
              g("client", ub, "Quero contratar"),
              g("provider", tx, "Sou fornecedor"),
            ],
          }),
          f.jsx("input", {
            className: qe,
            required: !0,
            placeholder: "Nome completo",
            autoComplete: "name",
            value: s.name,
            onChange: (x) => a({ ...s, name: x.target.value }),
          }),
          f.jsx("input", {
            className: qe,
            type: "email",
            required: !0,
            placeholder: "E-mail",
            autoComplete: "email",
            value: s.email,
            onChange: (x) => a({ ...s, email: x.target.value }),
          }),
          f.jsx("input", {
            className: qe,
            type: "password",
            required: !0,
            placeholder: "Senha (mín. 6 caracteres)",
            autoComplete: "new-password",
            value: s.password,
            onChange: (x) => a({ ...s, password: x.target.value }),
          }),
          f.jsx("input", {
            className: qe,
            type: "password",
            required: !0,
            placeholder: "Confirmar senha",
            autoComplete: "new-password",
            value: s.confirm,
            onChange: (x) => a({ ...s, confirm: x.target.value }),
          }),
          f.jsxs("label", {
            className:
              "flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400",
            children: [
              f.jsx("input", {
                type: "checkbox",
                className: "mt-0.5 accent-[#ff2e7e]",
                checked: s.terms,
                onChange: (x) => a({ ...s, terms: x.target.checked }),
              }),
              f.jsxs("span", {
                children: [
                  "Li e aceito os ",
                  f.jsx(Pe, {
                    to: "/terms-of-use",
                    className: "text-[#e3547f] font-semibold",
                    children: "Termos de Uso",
                  }),
                  " e a ",
                  f.jsx(Pe, {
                    to: "/privacy-policy",
                    className: "text-[#e3547f] font-semibold",
                    children: "Política de Privacidade",
                  }),
                  ".",
                ],
              }),
            ],
          }),
          u &&
            f.jsx("p", {
              className: "text-sm text-red-500 text-center",
              children: u,
            }),
          f.jsxs("button", {
            disabled: h,
            className: Kn + " w-full disabled:opacity-60",
            children: [
              f.jsx(xb, { className: "h-4 w-4" }),
              h ? "Criando..." : "Criar conta",
            ],
          }),
        ],
      }),
    }),
  });
}
const en = ({ children: e }) =>
  f.jsx("label", {
    className: "block text-xs font-semibold text-gray-500 mb-1.5 ml-3",
    children: e,
  });
function fL() {
  const { user: e } = zr(),
    t = ns(),
    n = zi(),
    r = e && t.find((S) => S.owner_id === e.id),
    [s, a] = b.useState(() => ({
      name:
        (r == null ? void 0 : r.name) || (e == null ? void 0 : e.name) || "",
      category: (r == null ? void 0 : r.category) || "DJs",
      city: (r == null ? void 0 : r.city) || "São José do Rio Preto",
      description: (r == null ? void 0 : r.description) || "",
      phone: (r == null ? void 0 : r.phone) || "",
      price_from: (r == null ? void 0 : r.price_from) || "",
      lat: (r == null ? void 0 : r.lat) ?? $c[0],
      lng: (r == null ? void 0 : r.lng) ?? $c[1],
    })),
    [u, c] = b.useState("");
  if (!e)
    return f.jsx(qn, {
      to: "/login",
      state: { from: "/provider/dashboard" },
      replace: !0,
    });
  if (e.role !== "provider")
    return f.jsx(ot, {
      title: "Painel - NexParty",
      children: f.jsxs("div", {
        className: "container mx-auto px-4 py-32 text-center",
        children: [
          f.jsx("h1", {
            className: "text-2xl font-bold mb-3 text-gray-900 dark:text-white",
            children: "Área exclusiva para fornecedores",
          }),
          f.jsx("p", {
            className: "text-gray-500 mb-6",
            children:
              "Sua conta é de cliente. Crie uma conta de fornecedor para divulgar seus serviços.",
          }),
          f.jsx(Pe, {
            to: "/register?role=provider",
            className: Kn,
            children: "Cadastrar como fornecedor",
          }),
        ],
      }),
    });
  const h = Nr(n, r == null ? void 0 : r.id),
    p = r ? n.filter((S) => S.provider_id === r.id) : [],
    v = (S) => (C) => a({ ...s, [S]: C.target.value }),
    g = () => {
      var S;
      return (S = navigator.geolocation) == null
        ? void 0
        : S.getCurrentPosition(
            (C) =>
              a((j) => ({
                ...j,
                lat: +C.coords.latitude.toFixed(5),
                lng: +C.coords.longitude.toFixed(5),
              })),
            () => c("Não foi possível obter sua localização."),
          );
    },
    x = (S) => {
      if ((S.preventDefault(), s.name.trim().length < 2))
        return c("Informe o nome do seu negócio.");
      if (s.description.trim().length < 20)
        return c("Descreva seus serviços com pelo menos 20 caracteres.");
      (Ob({
        id: (r == null ? void 0 : r.id) || "c" + Date.now(),
        owner_id: e.id,
        ...s,
        name: s.name.trim(),
        description: s.description.trim(),
        price_from: Number(s.price_from) || 0,
        lat: Number(s.lat),
        lng: Number(s.lng),
        phone: s.phone.replace(/\D/g, ""),
      }),
        c("Perfil salvo e publicado em Explorar!"));
    },
    P = (S, C, j) =>
      f.jsxs("div", {
        className: `${sn} rounded-3xl p-5 text-center`,
        children: [
          f.jsx(S, { className: "h-6 w-6 mx-auto text-[#e3547f] mb-2" }),
          f.jsx("p", {
            className: "text-3xl font-bold text-gray-900 dark:text-white",
            children: C,
          }),
          f.jsx("p", { className: "text-xs text-gray-500", children: j }),
        ],
      });
  return f.jsx(ot, {
    title: "Painel do Fornecedor - NexParty",
    children: f.jsx("section", {
      className: `py-10 ${is} min-h-screen`,
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-6xl",
        children: [
          f.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-3 mb-8",
            children: [
              f.jsxs("div", {
                children: [
                  f.jsx("h1", {
                    className:
                      "text-3xl font-bold text-gray-900 dark:text-white",
                    children: "Painel do Fornecedor",
                  }),
                  f.jsxs("p", {
                    className: "text-gray-500",
                    children: ["Olá, ", e.name],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "flex gap-2",
                children: [
                  r &&
                    f.jsxs(Pe, {
                      to: `/provider/${r.id}`,
                      className: Qc + " !py-2.5",
                      children: [
                        f.jsx(GT, { className: "h-4 w-4" }),
                        "Ver meu perfil",
                      ],
                    }),
                  f.jsx(Pe, {
                    to: "/planos",
                    className: Kn + " !py-2.5",
                    children: "Planos",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
            children: [
              P(WT, r ? "Publicado" : "Rascunho", "Status do perfil"),
              P(Mt, h.count ? h.avg.toFixed(1) : "–", "Nota média"),
              P(Mt, h.count, "Avaliações"),
              P(tx, "Gratuito", "Plano atual"),
            ],
          }),
          f.jsxs("div", {
            className: "grid lg:grid-cols-5 gap-8",
            children: [
              f.jsxs("form", {
                onSubmit: x,
                className: `${sn} rounded-[2rem] p-6 md:p-8 lg:col-span-3 space-y-4`,
                children: [
                  f.jsx("h2", {
                    className:
                      "text-xl font-bold text-gray-900 dark:text-white",
                    children: "Perfil do negócio",
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx(en, { children: "Nome do negócio" }),
                      f.jsx("input", {
                        className: qe,
                        value: s.name,
                        onChange: v("name"),
                        maxLength: 80,
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "grid sm:grid-cols-2 gap-4",
                    children: [
                      f.jsxs("div", {
                        children: [
                          f.jsx(en, { children: "Categoria" }),
                          f.jsx("select", {
                            className: qe,
                            value: s.category,
                            onChange: v("category"),
                            children: Ba.map((S) =>
                              f.jsx(
                                "option",
                                { value: S.key, children: S.label },
                                S.key,
                              ),
                            ),
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx(en, { children: "Cidade" }),
                          f.jsx("input", {
                            className: qe,
                            value: s.city,
                            onChange: v("city"),
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx(en, { children: "WhatsApp / telefone" }),
                          f.jsx("input", {
                            className: qe,
                            inputMode: "tel",
                            placeholder: "17999999999",
                            value: s.phone,
                            onChange: v("phone"),
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx(en, { children: "Preço a partir de (R$)" }),
                          f.jsx("input", {
                            className: qe,
                            type: "number",
                            min: "0",
                            value: s.price_from,
                            onChange: v("price_from"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx(en, { children: "Descrição dos serviços" }),
                      f.jsx("textarea", {
                        className:
                          qe + " !rounded-3xl min-h-[120px] resize-none",
                        maxLength: 600,
                        value: s.description,
                        onChange: v("description"),
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "grid sm:grid-cols-3 gap-4 items-end",
                    children: [
                      f.jsxs("div", {
                        children: [
                          f.jsx(en, { children: "Latitude" }),
                          f.jsx("input", {
                            className: qe,
                            type: "number",
                            step: "any",
                            value: s.lat,
                            onChange: v("lat"),
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        children: [
                          f.jsx(en, { children: "Longitude" }),
                          f.jsx("input", {
                            className: qe,
                            type: "number",
                            step: "any",
                            value: s.lng,
                            onChange: v("lng"),
                          }),
                        ],
                      }),
                      f.jsxs("button", {
                        type: "button",
                        onClick: g,
                        className: Qc + " !py-3",
                        children: [
                          f.jsx(tb, { className: "h-4 w-4" }),
                          "Usar minha localização",
                        ],
                      }),
                    ],
                  }),
                  u &&
                    f.jsx("p", {
                      className: `text-sm ${u.startsWith("Perfil") ? "text-emerald-500" : "text-red-500"}`,
                      children: u,
                    }),
                  f.jsxs("button", {
                    className: Kn + " w-full",
                    children: [
                      f.jsx(rx, { className: "h-4 w-4" }),
                      r ? "Salvar alterações" : "Publicar perfil",
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "lg:col-span-2 space-y-4",
                children: [
                  f.jsx("h2", {
                    className:
                      "text-xl font-bold text-gray-900 dark:text-white",
                    children: "Avaliações recebidas",
                  }),
                  p.map((S) =>
                    f.jsxs(
                      "article",
                      {
                        className: `${sn} rounded-3xl p-5`,
                        children: [
                          f.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              f.jsx("p", {
                                className:
                                  "font-bold text-gray-900 dark:text-white",
                                children: S.customer_name,
                              }),
                              f.jsx("span", {
                                className: "flex",
                                children: [1, 2, 3, 4, 5].map((C) =>
                                  f.jsx(
                                    Mt,
                                    {
                                      className: `h-4 w-4 ${C <= S.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`,
                                    },
                                    C,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          f.jsx("p", {
                            className:
                              "text-sm mt-2 text-gray-700 dark:text-gray-300 break-words",
                            children: S.feedback_text,
                          }),
                        ],
                      },
                      S.id,
                    ),
                  ),
                  !p.length &&
                    f.jsx("p", {
                      className: "text-gray-500 text-sm",
                      children: r
                        ? "Você ainda não recebeu avaliações."
                        : "Publique seu perfil para começar a receber avaliações.",
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function ig() {
  const { user: e, logout: t, updateUser: n } = zr(),
    r = zi(),
    [s, a] = b.useState((e == null ? void 0 : e.name) || ""),
    [u, c] = b.useState(!1);
  if (!e)
    return f.jsx(qn, {
      to: "/login",
      state: { from: "/dashboard" },
      replace: !0,
    });
  if (e.role === "provider")
    return f.jsx(qn, { to: "/provider/dashboard", replace: !0 });
  const h = r.filter((p) => p.user_id === e.id);
  return f.jsx(ot, {
    title: "Minha Conta - NexParty",
    children: f.jsx("section", {
      className: `py-10 ${is} min-h-screen`,
      children: f.jsxs("div", {
        className: "container mx-auto px-4 max-w-3xl space-y-6",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-bold text-gray-900 dark:text-white",
            children: "Minha Conta",
          }),
          f.jsxs("form", {
            onSubmit: (p) => {
              (p.preventDefault(),
                s.trim().length > 1 && (n({ name: s.trim() }), c(!0)));
            },
            className: `${sn} rounded-[2rem] p-6 space-y-4`,
            children: [
              f.jsxs("div", {
                children: [
                  f.jsx(en, { children: "Nome" }),
                  f.jsx("input", {
                    className: qe,
                    value: s,
                    onChange: (p) => {
                      (a(p.target.value), c(!1));
                    },
                  }),
                ],
              }),
              f.jsxs("div", {
                children: [
                  f.jsx(en, { children: "E-mail" }),
                  f.jsx("input", {
                    className: qe + " opacity-70",
                    value: e.email,
                    disabled: !0,
                  }),
                ],
              }),
              u &&
                f.jsx("p", {
                  className: "text-sm text-emerald-500",
                  children: "Dados atualizados.",
                }),
              f.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  f.jsxs("button", {
                    className: Kn,
                    children: [f.jsx(rx, { className: "h-4 w-4" }), "Salvar"],
                  }),
                  f.jsxs("button", {
                    type: "button",
                    onClick: t,
                    className: Qc,
                    children: [f.jsx(ix, { className: "h-4 w-4" }), "Sair"],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              f.jsx("h2", {
                className: "text-xl font-bold text-gray-900 dark:text-white",
                children: "Minhas avaliações",
              }),
              f.jsx(Pe, {
                to: "/explore",
                className: "text-sm font-semibold text-[#e3547f]",
                children: "Explorar fornecedores",
              }),
            ],
          }),
          h.map((p) =>
            f.jsxs(
              "article",
              {
                className: `${sn} rounded-3xl p-5`,
                children: [
                  f.jsx("p", {
                    className: "flex items-center gap-1 text-sm",
                    children: [1, 2, 3, 4, 5].map((v) =>
                      f.jsx(
                        Mt,
                        {
                          className: `h-4 w-4 ${v <= p.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`,
                        },
                        v,
                      ),
                    ),
                  }),
                  f.jsx("p", {
                    className:
                      "mt-2 text-gray-700 dark:text-gray-300 break-words",
                    children: p.feedback_text,
                  }),
                ],
              },
              p.id,
            ),
          ),
          !h.length &&
            f.jsxs("p", {
              className: "text-gray-500 text-sm",
              children: [
                "Você ainda não publicou avaliações. ",
                f.jsx(Pe, {
                  to: "/avaliacoes",
                  className: "text-[#e3547f] font-semibold",
                  children: "Avaliar um fornecedor",
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
const pL = [
    {
      title: "1. Regras de Uso da Plataforma",
      paras: [
        "A NexParty atua exclusivamente como uma plataforma tecnológica de intermediação (marketplace), conectando clientes (contratantes) a fornecedores de serviços para eventos (contratados). Não somos fornecedores diretos dos serviços listados e não possuímos vínculo empregatício com os profissionais cadastrados. Ao utilizar a plataforma, você reconhece que a NexParty é facilitadora da relação comercial, mas não parte direta na prestação do serviço final.",
      ],
      items: [],
    },
    {
      title: "2. Responsabilidades do Usuário",
      paras: [],
      items: [
        [
          "Clientes:",
          " Devem fornecer informações verdadeiras, realizar pagamentos nos prazos estipulados e tratar os fornecedores com respeito e profissionalismo. É responsabilidade do cliente ler atentamente as descrições dos serviços antes da contratação.",
        ],
        [
          "Fornecedores:",
          " Devem manter seus calendários atualizados, cumprir rigorosamente o acordado nas propostas, possuir capacidade técnica e legal para prestar os serviços e responder prontamente aos clientes.",
        ],
      ],
    },
    {
      title: "3. Responsabilidades do Fornecedor",
      paras: [
        "Os fornecedores cadastrados na NexParty comprometem-se a manter altos padrões de qualidade e entrega. O não cumprimento dos serviços contratados, atrasos injustificados ou conduta inadequada podem resultar na suspensão ou banimento da plataforma, sem prejuízo das reparações legais devidas ao cliente.",
      ],
      items: [],
    },
    {
      title: "4. Política de Cancelamento e Reembolso",
      paras: ["Em conformidade com o Código de Defesa do Consumidor (CDC):"],
      items: [
        [
          "Direito de Arrependimento (7 Dias):",
          " O cliente tem o direito de cancelar a contratação em até 7 (sete) dias corridos após a confirmação do pedido, com reembolso integral (100%) do valor pago, desde que o evento não tenha ocorrido neste período.",
        ],
        [
          "Cancelamento Após 7 Dias:",
          " Para cancelamentos solicitados após o prazo de arrependimento, será aplicada uma multa de 15% sobre o valor total contratado a título de taxas administrativas e reserva de data. O valor remanescente será reembolsado conforme as condições contratuais específicas de cada fornecedor.",
        ],
        [
          "Cancelamento Próximo ao Evento:",
          " Cancelamentos com menos de 48 horas de antecedência podem estar sujeitos à retenção total do valor, dependendo da política individual do fornecedor, para cobrir custos operacionais já incorridos.",
        ],
      ],
    },
    {
      title: "5. Resolução de Disputas",
      paras: [
        "A NexParty incentiva a resolução amigável de conflitos. Em caso de divergência entre cliente e fornecedor, a plataforma oferece um canal de mediação inicial. Caso não haja acordo, as partes concordam em submeter a disputa primeiramente à mediação extrajudicial antes de recorrer à via judicial ou arbitral. O foro de eleição é a comarca de São José do Rio Preto - SP.",
      ],
      items: [],
    },
    {
      title: "6. Limitação de Responsabilidade",
      paras: [
        "A responsabilidade da NexParty limita-se ao funcionamento da plataforma tecnológica. Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais resultantes da prestação dos serviços pelos fornecedores, incluindo, mas não se limitando a, qualidade da comida, atrasos de atrações ou falhas em equipamentos de terceiros.",
      ],
      items: [],
    },
    {
      title: "7. Modificações do Serviço",
      paras: [
        "Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto da plataforma a qualquer momento, incluindo a disponibilidade de quaisquer recursos, banco de dados ou conteúdo, mediante aviso prévio razoável aos usuários sempre que possível.",
      ],
      items: [],
    },
  ],
  mL = [
    {
      title: "1. Coleta de Dados",
      paras: [
        "Coletamos apenas as informações essenciais para a prestação dos nossos serviços. Isso inclui: dados de identificação pessoal (nome, CPF), informações de contato (e-mail, telefone), dados de pagamento (processados de forma segura por gateways parceiros) e detalhes do evento (data, local, preferências) para conectar você aos fornecedores ideais.",
      ],
      items: [],
    },
    {
      title: "2. Uso dos Dados",
      paras: [
        "Seus dados são utilizados para: (a) facilitar o planejamento do seu evento; (b) realizar o 'match' com fornecedores compatíveis; (c) processar transações financeiras; (d) enviar comunicações importantes sobre sua conta ou eventos; e (e) aprimorar nossos serviços através de análises estatísticas anonimizadas.",
      ],
      items: [],
    },
    {
      title: "3. Proteção de Dados (LGPD)",
      paras: [
        "Estamos em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Adotamos medidas técnicas e administrativas rigorosas de segurança, incluindo criptografia de ponta a ponta e controle de acesso restrito, para proteger suas informações contra acessos não autorizados, perda ou alteração.",
      ],
      items: [],
    },
    {
      title: "4. Direitos do Usuário",
      paras: [
        "Você tem o direito de, a qualquer momento: confirmar a existência de tratamento de dados; acessar seus dados; corrigir dados incompletos, inexatos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação de dados desnecessários; e solicitar a portabilidade dos seus dados a outro fornecedor de serviço.",
      ],
      items: [],
    },
    {
      title: "5. Cookies e Rastreamento",
      paras: [
        "Utilizamos cookies para melhorar sua experiência de navegação, lembrar suas preferências e entender como você utiliza nossa plataforma. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador, mas note que algumas funcionalidades do site podem ser afetadas.",
      ],
      items: [],
    },
    {
      title: "6. Compartilhamento com Terceiros",
      paras: [
        "Compartilhamos seus dados estritamente quando necessário para a execução do serviço: com os fornecedores que você escolhe contratar e com processadores de pagamento para efetuar transações. Não vendemos nem alugamos suas informações pessoais para terceiros para fins de marketing.",
      ],
      items: [],
    },
    {
      title: "7. Retenção de Dados",
      paras: [
        "Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, inclusive para fins de cumprimento de obrigações legais, contratuais, de prestação de contas ou requisição de autoridades competentes.",
      ],
      items: [],
    },
    {
      title: "8. Contato e Privacidade",
      paras: [
        "Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos relacionados aos seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail: privacidade@nexparty.com.br.",
      ],
      items: [],
    },
  ],
  gL = [
    {
      title: "Direito de Arrependimento (CDC)",
      subtitle: "7 dias com 100% de reembolso",
      paras: [
        "De acordo com o Código de Defesa do Consumidor (CDC), você tem o direito de cancelar sua contratação em até 7 dias corridos após a confirmação do pedido, com devolução integral (100%) do valor pago. Este direito é garantido por lei e não está sujeito a multas ou penalidades.",
      ],
      items: [],
    },
    {
      title: "Multa Proporcional",
      subtitle: "15% de penalidade após 7 dias",
      paras: [
        "Cancelamentos realizados após o período de 7 dias do direito de arrependimento e até a data do evento estão sujeitos a uma multa de 15% sobre o valor total contratado. O valor restante (85%) será reembolsado de acordo com as condições contratuais estabelecidas com o fornecedor.",
      ],
      items: [],
    },
    {
      title: "Cancelamento Próximo ao Evento",
      subtitle: "Menos de 48 horas antes",
      paras: [
        "Cancelamentos realizados com menos de 48 horas de antecedência da data do evento podem estar sujeitos a condições específicas do fornecedor contratado. Recomendamos entrar em contato diretamente com o fornecedor para negociar as melhores condições possíveis.",
      ],
      items: [],
    },
    {
      title: "Cláusula Contratual",
      subtitle: "Termos e condições",
      paras: [
        "Ao confirmar a contratação de qualquer serviço através da NexParty, você concorda com os termos desta política de cancelamento. Cada fornecedor pode estabelecer condições adicionais específicas que serão informadas no momento da contratação. É responsabilidade do contratante ler e compreender todos os termos antes de finalizar o pedido.",
      ],
      items: [],
    },
  ],
  vL = { terms: pL, privacy: mL, cancel: gL },
  yL = {
    terms: {
      title: "Termos de Uso",
      icon: YT,
      sub: "Bem-vindo à NexParty. Ao utilizar nossa plataforma, você concorda com os termos abaixo, elaborados para garantir segurança e transparência para todos.",
      foot: "Última atualização: 06 de Fevereiro de 2026. Ao continuar utilizando a plataforma, você confirma que leu e aceitou estes termos.",
      desc: "Leia os Termos de Uso da NexParty. Regras, responsabilidades e políticas para clientes e fornecedores.",
    },
    privacy: {
      title: "Política de Privacidade",
      icon: ox,
      sub: "Sua privacidade é nossa prioridade. Entenda de forma transparente como cuidamos das suas informações pessoais.",
      foot: "Esta política é efetiva a partir de Fevereiro de 2026. Reservamo-nos o direito de atualizar nossa política de privacidade a qualquer momento.",
      desc: "Saiba como a NexParty coleta, usa e protege seus dados pessoais conforme a LGPD.",
    },
    cancel: {
      title: "Política de Cancelamento",
      icon: IT,
      sub: "Transparência e segurança nas suas contratações",
      foot: "Última atualização: Fevereiro de 2026",
      desc: "Conheça nossa política de cancelamento, direitos de arrependimento e condições de reembolso para serviços contratados pela NexParty.",
    },
  };
function Ru({ kind: e }) {
  const t = yL[e],
    n = t.icon;
  return f.jsx(ot, {
    title: `${t.title} - NexParty`,
    description: t.desc,
    children: f.jsx("section", {
      className: `py-16 ${is}`,
      children: f.jsxs(Oe.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "container mx-auto px-4 max-w-4xl",
        children: [
          f.jsxs("div", {
            className: "text-center mb-12",
            children: [
              f.jsx("div", {
                className:
                  "mx-auto mb-5 h-16 w-16 rounded-full bg-[#e3547f] flex items-center justify-center shadow-lg shadow-[#e3547f]/30",
                children: f.jsx(n, { className: "h-8 w-8 text-white" }),
              }),
              f.jsx("h1", {
                className: "text-4xl md:text-5xl font-bold mb-4 text-[#e3547f]",
                children: t.title,
              }),
              f.jsx("p", {
                className:
                  "text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto",
                children: t.sub,
              }),
            ],
          }),
          f.jsx("div", {
            className: "space-y-5",
            children: vL[e].map((r) =>
              f.jsxs(
                "article",
                {
                  className: `${sn} rounded-3xl p-6 md:p-8`,
                  children: [
                    f.jsx("h2", {
                      className:
                        "text-xl font-bold text-gray-900 dark:text-white",
                      children: r.title,
                    }),
                    r.subtitle &&
                      f.jsx("p", {
                        className: "text-sm font-semibold text-[#e3547f] mt-1",
                        children: r.subtitle,
                      }),
                    f.jsxs("div", {
                      className:
                        "mt-3 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed",
                      children: [
                        r.paras.map((s, a) => f.jsx("p", { children: s }, a)),
                        r.items.length > 0 &&
                          f.jsx("ul", {
                            className: "list-disc pl-5 space-y-2",
                            children: r.items.map(([s, a], u) =>
                              f.jsxs(
                                "li",
                                {
                                  children: [
                                    s && f.jsx("strong", { children: s }),
                                    a,
                                  ],
                                },
                                u,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                },
                r.title,
              ),
            ),
          }),
          f.jsx("p", {
            className: "text-center text-sm text-gray-500 mt-10",
            children: t.foot,
          }),
          f.jsxs("p", {
            className: "text-center text-sm text-gray-500 mt-2",
            children: [
              "Dúvidas? ",
              f.jsx("a", {
                className: "text-[#e3547f] font-semibold",
                href: "mailto:nexparty@outlook.com",
                children: "nexparty@outlook.com",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function rg() {
  const { pathname: e } = Wt();
  return f.jsx(ot, {
    title: "NexParty",
    children: f.jsxs("div", {
      className: "container mx-auto px-4 py-32 text-center",
      children: [
        f.jsx("h1", {
          className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white",
          children: "Página em reconstrução",
        }),
        f.jsxs("p", {
          className: "text-gray-600 dark:text-gray-400 mb-8",
          children: [
            "A rota ",
            f.jsx("code", { children: e }),
            " depende do backend (Supabase) e ainda não foi reconstruída.",
          ],
        }),
        f.jsx(Pe, {
          to: "/",
          className:
            "inline-block bg-[#e3547f] hover:bg-[#72cfc8] transition-colors text-white font-semibold px-8 py-3 rounded-full",
          children: "Voltar ao início",
        }),
      ],
    }),
  });
}
const NPK = "nexparty:events", NPO = "nexparty:orders";
const h = b.createElement;
const npId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const npBRL = (v) => Number(v || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const npTypes = ["Aniversário", "Casamento", "Formatura", "Corporativo", "Chá de bebê", "Outro"];
const npCats = ["Buffet", "DJ e Música", "Decoração", "Local", "Bolos e Doces", "Fotografia"];
const npFade = (i = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.08, duration: 0.5 } });
const npDate = (d) => (d ? new Date(d + "T00:00").toLocaleDateString("pt-BR", { dateStyle: "full" }) : "");
const npPkgs = [
  { id: "essencial", name: "Essencial", price: 0, items: ["1 evento ativo", "Busca de fornecedores", "Checklist de tarefas"] },
  { id: "completo", name: "Completo", price: 49, items: ["Até 5 eventos", "Controle de orçamento", "Cotação com fornecedores", "Suporte por e-mail"] },
  { id: "premium", name: "Premium", price: 99, items: ["Eventos ilimitados", "Tudo do Completo", "Destaque nas buscas", "Atendimento prioritário"] },
];
function NpShell({ title, children }) {
  return h(ot, { title: title + " - NexParty" }, h("div", { className: "np-wrap" }, children));
}
function NpField({ label, children }) {
  return h("label", { className: "np-field" }, h("span", { className: "np-label" }, label), children);
}
function NpCreate() {
  const { user } = zr(), nav = oi(), loc = Wt();
  const [s, setS] = b.useState({ name: "", type: npTypes[0], date: "", time: "", venue: "", guests: "", budget: "", notes: "", cats: [] });
  const [err, setErr] = b.useState("");
  if (!user) return h(qn, { to: "/login", state: { from: loc.pathname }, replace: !0 });
  const set = (k, v) => setS((o) => ({ ...o, [k]: v }));
  const inp = (k, p = {}) => h("input", { className: "np-input", value: s[k], onChange: (e) => set(k, e.target.value), ...p });
  const toggle = (c) => set("cats", s.cats.includes(c) ? s.cats.filter((x) => x !== c) : [...s.cats, c]);
  const mine = Ki(NPK, []).filter((e) => e.owner === user.id);
  const submit = (e) => {
    e.preventDefault();
    if (!s.name.trim() || !s.date) return setErr("Informe o nome e a data do evento.");
    const ev = { ...s, name: s.name.trim(), id: npId(), owner: user.id, guests: +s.guests || 0, budget: +s.budget || 0, tasks: [], expenses: [], created_at: new Date().toISOString() };
    uo(NPK, [...Ki(NPK, []), ev]);
    nav("/event/" + ev.id);
  };
  return h(NpShell, { title: "Criar evento" },
    h(Oe.h1, { ...npFade(0), className: "np-title" }, "Criar novo evento"),
    h(Oe.p, { ...npFade(1), className: "np-muted", style: { marginBottom: "1.5rem" } }, "Conte como será a sua festa e organize tudo em um só lugar."),
    h(Oe.form, { ...npFade(2), className: "np-card", onSubmit: submit },
      h("div", { className: "np-row" },
        h(NpField, { label: "Nome do evento" }, inp("name", { placeholder: "Ex.: Aniversário da Ana" })),
        h(NpField, { label: "Tipo" }, h("select", { className: "np-input", value: s.type, onChange: (e) => set("type", e.target.value) }, npTypes.map((t) => h("option", { key: t }, t)))),
        h(NpField, { label: "Data" }, inp("date", { type: "date" })),
        h(NpField, { label: "Horário" }, inp("time", { type: "time" })),
        h(NpField, { label: "Local" }, inp("venue", { placeholder: "Salão, chácara, endereço..." })),
        h(NpField, { label: "Convidados" }, inp("guests", { type: "number", min: 0 })),
        h(NpField, { label: "Orçamento (R$)" }, inp("budget", { type: "number", min: 0 }))),
      h("div", { style: { margin: "1.25rem 0" } },
        h("span", { className: "np-label" }, "Fornecedores que você precisa"),
        h("div", { className: "np-chips" }, npCats.map((c) => h("button", { type: "button", key: c, className: "np-chip" + (s.cats.includes(c) ? " on" : ""), onClick: () => toggle(c) }, c)))),
      h(NpField, { label: "Observações" }, h("textarea", { className: "np-input", rows: 3, value: s.notes, onChange: (e) => set("notes", e.target.value) })),
      err && h("p", { className: "np-err" }, err),
      h("div", { style: { marginTop: "1.25rem" } }, h("button", { className: "np-btn", type: "submit" }, "Criar evento"))),
    mine.length > 0 && h("h2", { className: "np-sub" }, "Meus eventos"),
    h("div", { className: "np-grid" }, mine.map((e, i) =>
      h(Oe.div, { key: e.id, ...npFade(i) }, h(Pe, { to: "/event/" + e.id, className: "np-card", style: { display: "block" } },
        h("strong", null, e.name), h("p", { className: "np-muted" }, e.type + " • " + npDate(e.date)), h("p", { className: "np-muted" }, e.guests + " convidados • " + npBRL(e.budget)))))));
}
function NpEvent() {
  const { user } = zr(), { id } = Z2(), nav = oi(), loc = Wt();
  const [, tick] = b.useState(0), [task, setTask] = b.useState(""), [exp, setExp] = b.useState({ label: "", value: "" });
  if (!user) return h(qn, { to: "/login", state: { from: loc.pathname }, replace: !0 });
  const all = Ki(NPK, []), ev = all.find((e) => e.id === id && e.owner === user.id);
  if (!ev) return h(NpShell, { title: "Evento" }, h("h1", { className: "np-title" }, "Evento não encontrado"), h(Pe, { to: "/create-event", className: "np-btn", style: { marginTop: "1rem" } }, "Voltar"));
  const save = (fn) => { uo(NPK, all.map((e) => (e.id === id ? fn(e) : e))); tick((n) => n + 1); };
  const tasks = ev.tasks || [], exps = ev.expenses || [];
  const spent = exps.reduce((a, x) => a + x.value, 0), pct = ev.budget ? Math.min(100, (spent / ev.budget) * 100) : 0;
  const days = Math.ceil((new Date(ev.date + "T00:00") - new Date()) / 864e5);
  const addTask = (e) => { e.preventDefault(); if (!task.trim()) return; save((v) => ({ ...v, tasks: [...tasks, { id: npId(), text: task.trim(), done: !1 }] })); setTask(""); };
  const addExp = (e) => { e.preventDefault(); if (!exp.label.trim() || !+exp.value) return; save((v) => ({ ...v, expenses: [...exps, { id: npId(), label: exp.label.trim(), value: +exp.value }] })); setExp({ label: "", value: "" }); };
  const del = () => { if (confirm("Excluir este evento?")) { uo(NPK, all.filter((e) => e.id !== id)); nav("/create-event"); } };
  return h(NpShell, { title: ev.name },
    h(Oe.h1, { ...npFade(0), className: "np-title" }, ev.name),
    h(Oe.p, { ...npFade(1), className: "np-muted" }, ev.type + " • " + npDate(ev.date) + (ev.time ? " às " + ev.time : "") + (ev.venue ? " • " + ev.venue : "")),
    h("div", { className: "np-grid", style: { margin: "1.5rem 0" } },
      [["Faltam", days > 0 ? days + " dias" : days === 0 ? "É hoje!" : "Já aconteceu"], ["Convidados", ev.guests], ["Tarefas", tasks.filter((t) => t.done).length + "/" + tasks.length]].map(([k, v], i) =>
        h(Oe.div, { key: k, ...npFade(i + 2), className: "np-card" }, h("p", { className: "np-muted" }, k), h("strong", { className: "np-big" }, String(v))))),
    h("div", { className: "np-two" },
      h(Oe.div, { ...npFade(5), className: "np-card" }, h("h2", { className: "np-sub" }, "Checklist"),
        h("form", { onSubmit: addTask, className: "np-inline" }, h("input", { className: "np-input", placeholder: "Nova tarefa", value: task, onChange: (e) => setTask(e.target.value) }), h("button", { className: "np-btn", type: "submit" }, "+")),
        tasks.map((t) => h("div", { key: t.id, className: "np-item" },
          h("label", null, h("input", { type: "checkbox", checked: t.done, onChange: () => save((v) => ({ ...v, tasks: tasks.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)) })) }), " ", h("span", { style: { textDecoration: t.done ? "line-through" : "none" } }, t.text)),
          h("button", { className: "np-x", onClick: () => save((v) => ({ ...v, tasks: tasks.filter((x) => x.id !== t.id) })) }, "×")))),
      h(Oe.div, { ...npFade(6), className: "np-card" }, h("h2", { className: "np-sub" }, "Orçamento"),
        h("p", { className: "np-muted" }, npBRL(spent) + " de " + npBRL(ev.budget)), h("div", { className: "np-bar" }, h("i", { style: { width: pct + "%" } })),
        h("form", { onSubmit: addExp, className: "np-inline", style: { marginTop: "1rem" } },
          h("input", { className: "np-input", placeholder: "Despesa", value: exp.label, onChange: (e) => setExp({ ...exp, label: e.target.value }) }),
          h("input", { className: "np-input", type: "number", placeholder: "R$", style: { maxWidth: "7rem" }, value: exp.value, onChange: (e) => setExp({ ...exp, value: e.target.value }) }),
          h("button", { className: "np-btn", type: "submit" }, "+")),
        exps.map((x) => h("div", { key: x.id, className: "np-item" }, h("span", null, x.label + " — " + npBRL(x.value)), h("button", { className: "np-x", onClick: () => save((v) => ({ ...v, expenses: exps.filter((y) => y.id !== x.id) })) }, "×"))))),
    (ev.cats || []).length > 0 && h("div", { style: { marginTop: "1.5rem" } }, h("h2", { className: "np-sub" }, "Fornecedores procurados"), h("div", { className: "np-chips" }, ev.cats.map((c) => h(Pe, { key: c, to: "/explore", className: "np-chip on" }, c)))),
    ev.notes && h("p", { className: "np-muted", style: { marginTop: "1rem" } }, ev.notes),
    h("div", { className: "np-actions" }, h(Pe, { to: "/explore", className: "np-btn" }, "Buscar fornecedores"), h(Pe, { to: "/packages?event=" + ev.id, className: "np-btn ghost" }, "Ver pacotes"), h("button", { className: "np-btn ghost", onClick: del }, "Excluir evento")));
}
function NpPackages() {
  const { search: q } = Wt(), ev = new URLSearchParams(q).get("event");
  return h(NpShell, { title: "Pacotes" },
    h(Oe.h1, { ...npFade(0), className: "np-title" }, "Pacotes NexParty"),
    h(Oe.p, { ...npFade(1), className: "np-muted", style: { marginBottom: "1.5rem" } }, "Escolha o plano ideal para organizar seus eventos. Valores de exemplo, sem cobrança real."),
    h("div", { className: "np-grid" }, npPkgs.map((p, i) => h(Oe.div, { key: p.id, ...npFade(i + 2), className: "np-card" },
      h("h2", { className: "np-sub" }, p.name), h("strong", { className: "np-big" }, p.price ? npBRL(p.price) : "Grátis"),
      h("ul", { className: "np-list" }, p.items.map((t) => h("li", { key: t }, "✓ " + t))),
      h(Pe, { to: "/checkout?pkg=" + p.id + (ev ? "&event=" + ev : ""), className: "np-btn" }, "Escolher")))));
}
function NpCheckout() {
  const { user } = zr(), nav = oi(), loc = Wt();
  const [f1, setF] = b.useState({ name: user ? user.name : "", email: user ? user.email : "", phone: "" });
  if (!user) return h(qn, { to: "/login", state: { from: loc.pathname + loc.search }, replace: !0 });
  const q = new URLSearchParams(loc.search), pkg = npPkgs.find((p) => p.id === q.get("pkg"));
  if (!pkg) return h(qn, { to: "/packages", replace: !0 });
  const submit = (e) => {
    e.preventDefault();
    const o = { id: npId(), owner: user.id, pkg: pkg.id, event: q.get("event") || "", ...f1, total: pkg.price, created_at: new Date().toISOString() };
    uo(NPO, [...Ki(NPO, []), o]);
    nav("/confirmation?id=" + o.id);
  };
  const fld = (k, l, p = {}) => h(NpField, { label: l }, h("input", { className: "np-input", required: !0, value: f1[k], onChange: (e) => setF({ ...f1, [k]: e.target.value }), ...p }));
  return h(NpShell, { title: "Checkout" },
    h(Oe.h1, { ...npFade(0), className: "np-title" }, "Finalizar pedido"),
    h(Oe.form, { ...npFade(1), className: "np-card", style: { maxWidth: "560px", marginTop: "1.5rem" }, onSubmit: submit },
      h("p", null, h("strong", null, "Pacote " + pkg.name), " — " + (pkg.price ? npBRL(pkg.price) : "Grátis")),
      h("p", { className: "np-muted", style: { marginBottom: "1rem" } }, "Simulação: nenhum pagamento é processado."),
      fld("name", "Nome"), fld("email", "E-mail", { type: "email" }), fld("phone", "Telefone"),
      h("button", { className: "np-btn", type: "submit", style: { marginTop: "1.25rem" } }, "Confirmar pedido")));
}
function NpConfirm() {
  const { search: q } = Wt(), o = Ki(NPO, []).find((x) => x.id === new URLSearchParams(q).get("id")), p = o && npPkgs.find((x) => x.id === o.pkg);
  return h(NpShell, { title: "Confirmação" },
    h(Oe.div, { ...npFade(0), className: "np-card", style: { maxWidth: "560px", margin: "0 auto", textAlign: "center" } },
      o ? h(b.Fragment, null, h("div", { className: "np-ok" }, "✓"), h("h1", { className: "np-title" }, "Pedido confirmado!"),
        h("p", { className: "np-muted" }, "Pacote " + p.name + " • pedido #" + o.id.toUpperCase()), h("p", { className: "np-muted" }, "Enviaremos os detalhes para " + o.email + "."))
      : h("h1", { className: "np-title" }, "Pedido não encontrado"),
      h("div", { className: "np-actions", style: { justifyContent: "center" } }, h(Pe, { to: "/create-event", className: "np-btn" }, "Meus eventos"), h(Pe, { to: "/", className: "np-btn ghost" }, "Início"))));
}

const xL = [
  "/admin",
  "/admin/subscriptions",
  "/admin/testimonials",
  "/admin/cadastro-fornecedores",
];
function _L() {
  return f.jsxs(rP, {
    children: [
      f.jsx(Le, { path: "/", element: f.jsx(Yb, {}) }),
      f.jsx(Le, {
        path: "/home",
        element: f.jsx(qn, { to: "/", replace: !0 }),
      }),
      f.jsx(Le, { path: "/about", element: f.jsx(Jb, {}) }),
      f.jsx(Le, { path: "/how-it-works", element: f.jsx(nL, {}) }),
      f.jsx(Le, { path: "/planos", element: f.jsx(oL, {}) }),
      f.jsx(Le, { path: "/avaliacoes", element: f.jsx(sL, {}) }),
      f.jsx(Le, { path: "/explore", element: f.jsx(uL, {}) }),
      f.jsx(Le, { path: "/provider/dashboard", element: f.jsx(fL, {}) }),
      f.jsx(Le, { path: "/provider/:id", element: f.jsx(cL, {}) }),
      f.jsx(Le, {
        path: "/provider-registration",
        element: f.jsx(qn, { to: "/register?role=provider", replace: !0 }),
      }),
      f.jsx(Le, { path: "/login", element: f.jsx(dL, {}) }),
      f.jsx(Le, { path: "/register", element: f.jsx(hL, {}) }),
      f.jsx(Le, { path: "/dashboard", element: f.jsx(ig, {}) }),
      f.jsx(Le, { path: "/profile", element: f.jsx(ig, {}) }),
      f.jsx(Le, {
        path: "/termos",
        element: f.jsx(qn, { to: "/terms-of-use", replace: !0 }),
      }),
      f.jsx(Le, {
        path: "/terms-of-use",
        element: f.jsx(Ru, { kind: "terms" }),
      }),
      f.jsx(Le, {
        path: "/privacy-policy",
        element: f.jsx(Ru, { kind: "privacy" }),
      }),
      f.jsx(Le, {
        path: "/cancellation-policy",
        element: f.jsx(Ru, { kind: "cancel" }),
      }),
      f.jsx(Le, { path: "/create-event", element: f.jsx(NpCreate, {}) }),
      f.jsx(Le, { path: "/event/:id", element: f.jsx(NpEvent, {}) }),
      f.jsx(Le, { path: "/packages", element: f.jsx(NpPackages, {}) }),
      f.jsx(Le, { path: "/checkout", element: f.jsx(NpCheckout, {}) }),
      f.jsx(Le, { path: "/confirmation", element: f.jsx(NpConfirm, {}) }),
      xL.map((e) => f.jsx(Le, { path: e, element: f.jsx(rg, {}) }, e)),
      f.jsx(Le, { path: "*", element: f.jsx(rg, {}) }),
    ],
  });
}
const wL = ["http:", "https:", "file:"].includes(window.location.protocol),
  PL = wL ? hP : iP;
Ou.createRoot(document.getElementById("root")).render(
  f.jsx(PL, { children: f.jsx(wb, { children: f.jsx(_L, {}) }) }),
);
