(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
var Gs = {
        exports: {}
    },
    nl = {},
    qs = {
        exports: {}
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn = Symbol.for("react.element"),
    ac = Symbol.for("react.portal"),
    cc = Symbol.for("react.fragment"),
    dc = Symbol.for("react.strict_mode"),
    fc = Symbol.for("react.profiler"),
    pc = Symbol.for("react.provider"),
    mc = Symbol.for("react.context"),
    hc = Symbol.for("react.forward_ref"),
    yc = Symbol.for("react.suspense"),
    vc = Symbol.for("react.memo"),
    gc = Symbol.for("react.lazy"),
    Oi = Symbol.iterator;

function xc(e) {
    return e === null || typeof e != "object" ? null : (e = Oi && e[Oi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Zs = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Js = Object.assign,
    bs = {};

function on(e, t, n) {
    this.props = e, this.context = t, this.refs = bs, this.updater = n || Zs
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function eu() {}
eu.prototype = on.prototype;

function $o(e, t, n) {
    this.props = e, this.context = t, this.refs = bs, this.updater = n || Zs
}
var Ao = $o.prototype = new eu;
Ao.constructor = $o;
Js(Ao, on.prototype);
Ao.isPureReactComponent = !0;
var Di = Array.isArray,
    tu = Object.prototype.hasOwnProperty,
    Bo = {
        current: null
    },
    nu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ru(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) tu.call(t, r) && !nu.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
        for (var u = Array(s), d = 0; d < s; d++) u[d] = arguments[d + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: Gn,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Bo.current
    }
}

function wc(e, t) {
    return {
        $$typeof: Gn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Vo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Gn
}

function kc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Fi = /\/+/g;

function kl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? kc("" + e.key) : t.toString(36)
}

function wr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Gn:
                case ac:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + kl(i, 0) : r, Di(l) ? (n = "", e != null && (n = e.replace(Fi, "$&/") + "/"), wr(l, t, n, "", function(d) {
        return d
    })) : l != null && (Vo(l) && (l = wc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Fi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Di(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var u = r + kl(o, s);
            i += wr(o, t, n, u, l)
        } else if (u = xc(e), typeof u == "function")
            for (e = u.call(e), s = 0; !(o = e.next()).done;) o = o.value, u = r + kl(o, s++), i += wr(o, t, n, u, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function nr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return wr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function Sc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var se = {
        current: null
    },
    kr = {
        transition: null
    },
    Nc = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: kr,
        ReactCurrentOwner: Bo
    };

function lu() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: nr,
    forEach: function(e, t, n) {
        nr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return nr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Vo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = on;
L.Fragment = cc;
L.Profiler = fc;
L.PureComponent = $o;
L.StrictMode = dc;
L.Suspense = yc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
L.act = lu;
L.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Js({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Bo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) tu.call(t, u) && !nu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var d = 0; d < u; d++) s[d] = arguments[d + 2];
        r.children = s
    }
    return {
        $$typeof: Gn,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
L.createContext = function(e) {
    return e = {
        $$typeof: mc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: pc,
        _context: e
    }, e.Consumer = e
};
L.createElement = ru;
L.createFactory = function(e) {
    var t = ru.bind(null, e);
    return t.type = e, t
};
L.createRef = function() {
    return {
        current: null
    }
};
L.forwardRef = function(e) {
    return {
        $$typeof: hc,
        render: e
    }
};
L.isValidElement = Vo;
L.lazy = function(e) {
    return {
        $$typeof: gc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Sc
    }
};
L.memo = function(e, t) {
    return {
        $$typeof: vc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
L.startTransition = function(e) {
    var t = kr.transition;
    kr.transition = {};
    try {
        e()
    } finally {
        kr.transition = t
    }
};
L.unstable_act = lu;
L.useCallback = function(e, t) {
    return se.current.useCallback(e, t)
};
L.useContext = function(e) {
    return se.current.useContext(e)
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
    return se.current.useDeferredValue(e)
};
L.useEffect = function(e, t) {
    return se.current.useEffect(e, t)
};
L.useId = function() {
    return se.current.useId()
};
L.useImperativeHandle = function(e, t, n) {
    return se.current.useImperativeHandle(e, t, n)
};
L.useInsertionEffect = function(e, t) {
    return se.current.useInsertionEffect(e, t)
};
L.useLayoutEffect = function(e, t) {
    return se.current.useLayoutEffect(e, t)
};
L.useMemo = function(e, t) {
    return se.current.useMemo(e, t)
};
L.useReducer = function(e, t, n) {
    return se.current.useReducer(e, t, n)
};
L.useRef = function(e) {
    return se.current.useRef(e)
};
L.useState = function(e) {
    return se.current.useState(e)
};
L.useSyncExternalStore = function(e, t, n) {
    return se.current.useSyncExternalStore(e, t, n)
};
L.useTransition = function() {
    return se.current.useTransition()
};
L.version = "18.3.1";
qs.exports = L;
var ae = qs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec = ae,
    jc = Symbol.for("react.element"),
    Cc = Symbol.for("react.fragment"),
    _c = Object.prototype.hasOwnProperty,
    Pc = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    zc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ou(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) _c.call(t, r) && !zc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: jc,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Pc.current
    }
}
nl.Fragment = Cc;
nl.jsx = ou;
nl.jsxs = ou;
Gs.exports = nl;
var a = Gs.exports,
    iu = {
        exports: {}
    },
    xe = {},
    su = {
        exports: {}
    },
    uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var T = E.length;
        E.push(P);
        e: for (; 0 < T;) {
            var H = T - 1 >>> 1,
                G = E[H];
            if (0 < l(G, P)) E[H] = P, E[T] = G, T = H;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var P = E[0],
            T = E.pop();
        if (T !== P) {
            E[0] = T;
            e: for (var H = 0, G = E.length, er = G >>> 1; H < er;) {
                var vt = 2 * (H + 1) - 1,
                    wl = E[vt],
                    gt = vt + 1,
                    tr = E[gt];
                if (0 > l(wl, T)) gt < G && 0 > l(tr, wl) ? (E[H] = tr, E[gt] = T, H = gt) : (E[H] = wl, E[vt] = T, H = vt);
                else if (gt < G && 0 > l(tr, T)) E[H] = tr, E[gt] = T, H = gt;
                else break e
            }
        }
        return P
    }

    function l(E, P) {
        var T = E.sortIndex - P.sortIndex;
        return T !== 0 ? T : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            s = i.now();
        e.unstable_now = function() {
            return i.now() - s
        }
    }
    var u = [],
        d = [],
        y = 1,
        h = null,
        m = 3,
        x = !1,
        w = !1,
        k = !1,
        z = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(E) {
        for (var P = n(d); P !== null;) {
            if (P.callback === null) r(d);
            else if (P.startTime <= E) r(d), P.sortIndex = P.expirationTime, t(u, P);
            else break;
            P = n(d)
        }
    }

    function v(E) {
        if (k = !1, p(E), !w)
            if (n(u) !== null) w = !0, gl(N);
            else {
                var P = n(d);
                P !== null && xl(v, P.startTime - E)
            }
    }

    function N(E, P) {
        w = !1, k && (k = !1, f(_), _ = -1), x = !0;
        var T = m;
        try {
            for (p(P), h = n(u); h !== null && (!(h.expirationTime > P) || E && !Pe());) {
                var H = h.callback;
                if (typeof H == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var G = H(h.expirationTime <= P);
                    P = e.unstable_now(), typeof G == "function" ? h.callback = G : h === n(u) && r(u), p(P)
                } else r(u);
                h = n(u)
            }
            if (h !== null) var er = !0;
            else {
                var vt = n(d);
                vt !== null && xl(v, vt.startTime - P), er = !1
            }
            return er
        } finally {
            h = null, m = T, x = !1
        }
    }
    var j = !1,
        C = null,
        _ = -1,
        V = 5,
        R = -1;

    function Pe() {
        return !(e.unstable_now() - R < V)
    }

    function an() {
        if (C !== null) {
            var E = e.unstable_now();
            R = E;
            var P = !0;
            try {
                P = C(!0, E)
            } finally {
                P ? cn() : (j = !1, C = null)
            }
        } else j = !1
    }
    var cn;
    if (typeof c == "function") cn = function() {
        c(an)
    };
    else if (typeof MessageChannel < "u") {
        var Ii = new MessageChannel,
            uc = Ii.port2;
        Ii.port1.onmessage = an, cn = function() {
            uc.postMessage(null)
        }
    } else cn = function() {
        z(an, 0)
    };

    function gl(E) {
        C = E, j || (j = !0, cn())
    }

    function xl(E, P) {
        _ = z(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        w || x || (w = !0, gl(N))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return m
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(E) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = m
        }
        var T = m;
        m = P;
        try {
            return E()
        } finally {
            m = T
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, P) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var T = m;
        m = E;
        try {
            return P()
        } finally {
            m = T
        }
    }, e.unstable_scheduleCallback = function(E, P, T) {
        var H = e.unstable_now();
        switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? H + T : H) : T = H, E) {
            case 1:
                var G = -1;
                break;
            case 2:
                G = 250;
                break;
            case 5:
                G = 1073741823;
                break;
            case 4:
                G = 1e4;
                break;
            default:
                G = 5e3
        }
        return G = T + G, E = {
            id: y++,
            callback: P,
            priorityLevel: E,
            startTime: T,
            expirationTime: G,
            sortIndex: -1
        }, T > H ? (E.sortIndex = T, t(d, E), n(u) === null && E === n(d) && (k ? (f(_), _ = -1) : k = !0, xl(v, T - H))) : (E.sortIndex = G, t(u, E), w || x || (w = !0, gl(N))), E
    }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(E) {
        var P = m;
        return function() {
            var T = m;
            m = P;
            try {
                return E.apply(this, arguments)
            } finally {
                m = T
            }
        }
    }
})(uu);
su.exports = uu;
var Tc = su.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = ae,
    ge = Tc;

function g(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var au = new Set,
    Rn = {};

function Lt(e, t) {
    Jt(e, t), Jt(e + "Capture", t)
}

function Jt(e, t) {
    for (Rn[e] = t, e = 0; e < t.length; e++) au.add(t[e])
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Kl = Object.prototype.hasOwnProperty,
    Rc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ui = {},
    Wi = {};

function Mc(e) {
    return Kl.call(Wi, e) ? !0 : Kl.call(Ui, e) ? !1 : Rc.test(e) ? Wi[e] = !0 : (Ui[e] = !0, !1)
}

function Ic(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Oc(e, t, n, r) {
    if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ue(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ee[e] = new ue(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ee[t] = new ue(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ee[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ee[e] = new ue(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ee[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ee[e] = new ue(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ee[e] = new ue(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ee[e] = new ue(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ee[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ho = /[\-:]([a-z])/g;

function Qo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ho, Qo);
    ee[t] = new ue(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ho, Qo);
    ee[t] = new ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ho, Qo);
    ee[t] = new ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ee.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Yo(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Oc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var qe = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rr = Symbol.for("react.element"),
    It = Symbol.for("react.portal"),
    Ot = Symbol.for("react.fragment"),
    Ko = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    cu = Symbol.for("react.provider"),
    du = Symbol.for("react.context"),
    Xo = Symbol.for("react.forward_ref"),
    Gl = Symbol.for("react.suspense"),
    ql = Symbol.for("react.suspense_list"),
    Go = Symbol.for("react.memo"),
    Je = Symbol.for("react.lazy"),
    fu = Symbol.for("react.offscreen"),
    $i = Symbol.iterator;

function dn(e) {
    return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"], typeof e == "function" ? e : null)
}
var A = Object.assign,
    Sl;

function xn(e) {
    if (Sl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Sl = t && t[1] || ""
    }
    return `
` + Sl + e
}
var Nl = !1;

function El(e, t) {
    if (!e || Nl) return "";
    Nl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s];) s--;
            for (; 1 <= i && 0 <= s; i--, s--)
                if (l[i] !== o[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--, s--, 0 > s || l[i] !== o[s]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            } while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        Nl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xn(e) : ""
}

function Dc(e) {
    switch (e.tag) {
        case 5:
            return xn(e.type);
        case 16:
            return xn("Lazy");
        case 13:
            return xn("Suspense");
        case 19:
            return xn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = El(e.type, !1), e;
        case 11:
            return e = El(e.type.render, !1), e;
        case 1:
            return e = El(e.type, !0), e;
        default:
            return ""
    }
}

function Zl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ot:
            return "Fragment";
        case It:
            return "Portal";
        case Xl:
            return "Profiler";
        case Ko:
            return "StrictMode";
        case Gl:
            return "Suspense";
        case ql:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case du:
            return (e.displayName || "Context") + ".Consumer";
        case cu:
            return (e._context.displayName || "Context") + ".Provider";
        case Xo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Go:
            return t = e.displayName || null, t !== null ? t : Zl(e.type) || "Memo";
        case Je:
            t = e._payload, e = e._init;
            try {
                return Zl(e(t))
            } catch {}
    }
    return null
}

function Fc(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return Zl(t);
        case 8:
            return t === Ko ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function pu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Uc(e) {
    var t = pu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function lr(e) {
    e._valueTracker || (e._valueTracker = Uc(e))
}

function mu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = pu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Rr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Jl(e, t) {
    var n = t.checked;
    return A({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Ai(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function hu(e, t) {
    t = t.checked, t != null && Yo(e, "checked", t, !1)
}

function bl(e, t) {
    hu(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? eo(e, t.type, n) : t.hasOwnProperty("defaultValue") && eo(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Bi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function eo(e, t, n) {
    (t !== "number" || Rr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wn = Array.isArray;

function Yt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
    return A({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Vi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(g(92));
            if (wn(n)) {
                if (1 < n.length) throw Error(g(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function yu(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Hi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function vu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function no(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var or, gu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = or.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Mn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
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
        strokeWidth: !0
    },
    Wc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    Wc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Nn[t] = Nn[e]
    })
});

function xu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}

function wu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = xu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var $c = A({
    menuitem: !0
}, {
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
    wbr: !0
});

function ro(e, t) {
    if (t) {
        if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(g(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(g(62))
    }
}

function lo(e, t) {
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
            return !0
    }
}
var oo = null;

function qo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var io = null,
    Kt = null,
    Xt = null;

function Qi(e) {
    if (e = Jn(e)) {
        if (typeof io != "function") throw Error(g(280));
        var t = e.stateNode;
        t && (t = sl(t), io(e.stateNode, e.type, t))
    }
}

function ku(e) {
    Kt ? Xt ? Xt.push(e) : Xt = [e] : Kt = e
}

function Su() {
    if (Kt) {
        var e = Kt,
            t = Xt;
        if (Xt = Kt = null, Qi(e), t)
            for (e = 0; e < t.length; e++) Qi(t[e])
    }
}

function Nu(e, t) {
    return e(t)
}

function Eu() {}
var jl = !1;

function ju(e, t, n) {
    if (jl) return e(t, n);
    jl = !0;
    try {
        return Nu(e, t, n)
    } finally {
        jl = !1, (Kt !== null || Xt !== null) && (Eu(), Su())
    }
}

function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = sl(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(g(231, t, typeof n));
    return n
}
var so = !1;
if (Ye) try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
        get: function() {
            so = !0
        }
    }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn)
} catch {
    so = !1
}

function Ac(e, t, n, r, l, o, i, s, u) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (y) {
        this.onError(y)
    }
}
var En = !1,
    Mr = null,
    Ir = !1,
    uo = null,
    Bc = {
        onError: function(e) {
            En = !0, Mr = e
        }
    };

function Vc(e, t, n, r, l, o, i, s, u) {
    En = !1, Mr = null, Ac.apply(Bc, arguments)
}

function Hc(e, t, n, r, l, o, i, s, u) {
    if (Vc.apply(this, arguments), En) {
        if (En) {
            var d = Mr;
            En = !1, Mr = null
        } else throw Error(g(198));
        Ir || (Ir = !0, uo = d)
    }
}

function Rt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Cu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Yi(e) {
    if (Rt(e) !== e) throw Error(g(188))
}

function Qc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Rt(e), t === null) throw Error(g(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Yi(l), e;
                if (o === r) return Yi(l), t;
                o = o.sibling
            }
            throw Error(g(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, s = l.child; s;) {
                if (s === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (s === r) {
                    i = !0, r = l, n = o;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = o.child; s;) {
                    if (s === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (s === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    s = s.sibling
                }
                if (!i) throw Error(g(189))
            }
        }
        if (n.alternate !== r) throw Error(g(190))
    }
    if (n.tag !== 3) throw Error(g(188));
    return n.stateNode.current === n ? e : t
}

function _u(e) {
    return e = Qc(e), e !== null ? Pu(e) : null
}

function Pu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Pu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var zu = ge.unstable_scheduleCallback,
    Ki = ge.unstable_cancelCallback,
    Yc = ge.unstable_shouldYield,
    Kc = ge.unstable_requestPaint,
    Q = ge.unstable_now,
    Xc = ge.unstable_getCurrentPriorityLevel,
    Zo = ge.unstable_ImmediatePriority,
    Tu = ge.unstable_UserBlockingPriority,
    Or = ge.unstable_NormalPriority,
    Gc = ge.unstable_LowPriority,
    Lu = ge.unstable_IdlePriority,
    rl = null,
    We = null;

function qc(e) {
    if (We && typeof We.onCommitFiberRoot == "function") try {
        We.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : bc,
    Zc = Math.log,
    Jc = Math.LN2;

function bc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Zc(e) / Jc | 0) | 0
}
var ir = 64,
    sr = 4194304;

function kn(e) {
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
            return e
    }
}

function Dr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var s = i & ~l;
        s !== 0 ? r = kn(s) : (o &= i, o !== 0 && (r = kn(o)))
    } else i = n & ~l, i !== 0 ? r = kn(i) : o !== 0 && (r = kn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function ed(e, t) {
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
            return -1
    }
}

function td(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Me(o),
            s = 1 << i,
            u = l[i];
        u === -1 ? (!(s & n) || s & r) && (l[i] = ed(s, t)) : u <= t && (e.expiredLanes |= s), o &= ~s
    }
}

function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Ru() {
    var e = ir;
    return ir <<= 1, !(ir & 4194240) && (ir = 64), e
}

function Cl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function qn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n
}

function nd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Me(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function Jo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Me(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var I = 0;

function Mu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Iu, bo, Ou, Du, Fu, co = !1,
    ur = [],
    lt = null,
    ot = null,
    it = null,
    On = new Map,
    Dn = new Map,
    et = [],
    rd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Xi(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            ot = null;
            break;
        case "mouseover":
        case "mouseout":
            it = null;
            break;
        case "pointerover":
        case "pointerout":
            On.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Dn.delete(t.pointerId)
    }
}

function pn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = Jn(t), t !== null && bo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function ld(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = pn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return ot = pn(ot, e, t, n, r, l), !0;
        case "mouseover":
            return it = pn(it, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return On.set(o, pn(On.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, Dn.set(o, pn(Dn.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Uu(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = Rt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Cu(n), t !== null) {
                    e.blockedOn = t, Fu(e.priority, function() {
                        Ou(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Sr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            oo = r, n.target.dispatchEvent(r), oo = null
        } else return t = Jn(n), t !== null && bo(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Gi(e, t, n) {
    Sr(e) && n.delete(t)
}

function od() {
    co = !1, lt !== null && Sr(lt) && (lt = null), ot !== null && Sr(ot) && (ot = null), it !== null && Sr(it) && (it = null), On.forEach(Gi), Dn.forEach(Gi)
}

function mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, co || (co = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, od)))
}

function Fn(e) {
    function t(l) {
        return mn(l, e)
    }
    if (0 < ur.length) {
        mn(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && mn(lt, e), ot !== null && mn(ot, e), it !== null && mn(it, e), On.forEach(t), Dn.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Uu(n), n.blockedOn === null && et.shift()
}
var Gt = qe.ReactCurrentBatchConfig,
    Fr = !0;

function id(e, t, n, r) {
    var l = I,
        o = Gt.transition;
    Gt.transition = null;
    try {
        I = 1, ei(e, t, n, r)
    } finally {
        I = l, Gt.transition = o
    }
}

function sd(e, t, n, r) {
    var l = I,
        o = Gt.transition;
    Gt.transition = null;
    try {
        I = 4, ei(e, t, n, r)
    } finally {
        I = l, Gt.transition = o
    }
}

function ei(e, t, n, r) {
    if (Fr) {
        var l = fo(e, t, n, r);
        if (l === null) Dl(e, t, r, Ur, n), Xi(e, r);
        else if (ld(l, e, t, n, r)) r.stopPropagation();
        else if (Xi(e, r), t & 4 && -1 < rd.indexOf(e)) {
            for (; l !== null;) {
                var o = Jn(l);
                if (o !== null && Iu(o), o = fo(e, t, n, r), o === null && Dl(e, t, r, Ur, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Dl(e, t, r, null, n)
    }
}
var Ur = null;

function fo(e, t, n, r) {
    if (Ur = null, e = qo(r), e = kt(e), e !== null)
        if (t = Rt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Cu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ur = e, null
}

function Wu(e) {
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
            switch (Xc()) {
                case Zo:
                    return 1;
                case Tu:
                    return 4;
                case Or:
                case Gc:
                    return 16;
                case Lu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    ti = null,
    Nr = null;

function $u() {
    if (Nr) return Nr;
    var e, t = ti,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return Nr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Er(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ar() {
    return !0
}

function qi() {
    return !1
}

function we(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : qi, this.isPropagationStopped = qi, this
    }
    return A(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ar)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ar)
        },
        persist: function() {},
        isPersistent: ar
    }), t
}
var sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ni = we(sn),
    Zn = A({}, sn, {
        view: 0,
        detail: 0
    }),
    ud = we(Zn),
    _l, Pl, hn, ll = A({}, Zn, {
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
        getModifierState: ri,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (_l = e.screenX - hn.screenX, Pl = e.screenY - hn.screenY) : Pl = _l = 0, hn = e), _l)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Pl
        }
    }),
    Zi = we(ll),
    ad = A({}, ll, {
        dataTransfer: 0
    }),
    cd = we(ad),
    dd = A({}, Zn, {
        relatedTarget: 0
    }),
    zl = we(dd),
    fd = A({}, sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    pd = we(fd),
    md = A({}, sn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    hd = we(md),
    yd = A({}, sn, {
        data: 0
    }),
    Ji = we(yd),
    vd = {
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
        MozPrintableKey: "Unidentified"
    },
    gd = {
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
        224: "Meta"
    },
    xd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function wd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xd[e]) ? !!t[e] : !1
}

function ri() {
    return wd
}
var kd = A({}, Zn, {
        key: function(e) {
            if (e.key) {
                var t = vd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Er(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ri,
        charCode: function(e) {
            return e.type === "keypress" ? Er(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Er(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Sd = we(kd),
    Nd = A({}, ll, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    bi = we(Nd),
    Ed = A({}, Zn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ri
    }),
    jd = we(Ed),
    Cd = A({}, sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    _d = we(Cd),
    Pd = A({}, ll, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    zd = we(Pd),
    Td = [9, 13, 27, 32],
    li = Ye && "CompositionEvent" in window,
    jn = null;
Ye && "documentMode" in document && (jn = document.documentMode);
var Ld = Ye && "TextEvent" in window && !jn,
    Au = Ye && (!li || jn && 8 < jn && 11 >= jn),
    es = " ",
    ts = !1;

function Bu(e, t) {
    switch (e) {
        case "keyup":
            return Td.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Vu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Dt = !1;

function Rd(e, t) {
    switch (e) {
        case "compositionend":
            return Vu(t);
        case "keypress":
            return t.which !== 32 ? null : (ts = !0, es);
        case "textInput":
            return e = t.data, e === es && ts ? null : e;
        default:
            return null
    }
}

function Md(e, t) {
    if (Dt) return e === "compositionend" || !li && Bu(e, t) ? (e = $u(), Nr = ti = nt = null, Dt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Au && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Id = {
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
    week: !0
};

function ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Id[e.type] : t === "textarea"
}

function Hu(e, t, n, r) {
    ku(r), t = Wr(t, "onChange"), 0 < t.length && (n = new ni("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Cn = null,
    Un = null;

function Od(e) {
    ta(e, 0)
}

function ol(e) {
    var t = Wt(e);
    if (mu(t)) return e
}

function Dd(e, t) {
    if (e === "change") return t
}
var Qu = !1;
if (Ye) {
    var Tl;
    if (Ye) {
        var Ll = "oninput" in document;
        if (!Ll) {
            var rs = document.createElement("div");
            rs.setAttribute("oninput", "return;"), Ll = typeof rs.oninput == "function"
        }
        Tl = Ll
    } else Tl = !1;
    Qu = Tl && (!document.documentMode || 9 < document.documentMode)
}

function ls() {
    Cn && (Cn.detachEvent("onpropertychange", Yu), Un = Cn = null)
}

function Yu(e) {
    if (e.propertyName === "value" && ol(Un)) {
        var t = [];
        Hu(t, Un, e, qo(e)), ju(Od, t)
    }
}

function Fd(e, t, n) {
    e === "focusin" ? (ls(), Cn = t, Un = n, Cn.attachEvent("onpropertychange", Yu)) : e === "focusout" && ls()
}

function Ud(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol(Un)
}

function Wd(e, t) {
    if (e === "click") return ol(t)
}

function $d(e, t) {
    if (e === "input" || e === "change") return ol(t)
}

function Ad(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : Ad;

function Wn(e, t) {
    if (Oe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Kl.call(t, l) || !Oe(e[l], t[l])) return !1
    }
    return !0
}

function os(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function is(e, t) {
    var n = os(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = os(n)
    }
}

function Ku(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ku(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Xu() {
    for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Rr(e.document)
    }
    return t
}

function oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Bd(e) {
    var t = Xu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ku(n.ownerDocument.documentElement, n)) {
        if (r !== null && oi(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = is(n, o);
                var i = is(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Vd = Ye && "documentMode" in document && 11 >= document.documentMode,
    Ft = null,
    po = null,
    _n = null,
    mo = !1;

function ss(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || Ft == null || Ft !== Rr(r) || (r = Ft, "selectionStart" in r && oi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), _n && Wn(_n, r) || (_n = r, r = Wr(po, "onSelect"), 0 < r.length && (t = new ni("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ft)))
}

function cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ut = {
        animationend: cr("Animation", "AnimationEnd"),
        animationiteration: cr("Animation", "AnimationIteration"),
        animationstart: cr("Animation", "AnimationStart"),
        transitionend: cr("Transition", "TransitionEnd")
    },
    Rl = {},
    Gu = {};
Ye && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation), "TransitionEvent" in window || delete Ut.transitionend.transition);

function il(e) {
    if (Rl[e]) return Rl[e];
    if (!Ut[e]) return e;
    var t = Ut[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Gu) return Rl[e] = t[n];
    return e
}
var qu = il("animationend"),
    Zu = il("animationiteration"),
    Ju = il("animationstart"),
    bu = il("transitionend"),
    ea = new Map,
    us = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    ea.set(e, t), Lt(t, [e])
}
for (var Ml = 0; Ml < us.length; Ml++) {
    var Il = us[Ml],
        Hd = Il.toLowerCase(),
        Qd = Il[0].toUpperCase() + Il.slice(1);
    mt(Hd, "on" + Qd)
}
mt(qu, "onAnimationEnd");
mt(Zu, "onAnimationIteration");
mt(Ju, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(bu, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Yd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));

function as(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Hc(r, t, void 0, e), e.currentTarget = null
}

function ta(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i],
                        u = s.instance,
                        d = s.currentTarget;
                    if (s = s.listener, u !== o && l.isPropagationStopped()) break e;
                    as(l, s, d), o = u
                } else
                    for (i = 0; i < r.length; i++) {
                        if (s = r[i], u = s.instance, d = s.currentTarget, s = s.listener, u !== o && l.isPropagationStopped()) break e;
                        as(l, s, d), o = u
                    }
        }
    }
    if (Ir) throw e = uo, Ir = !1, uo = null, e
}

function D(e, t) {
    var n = t[xo];
    n === void 0 && (n = t[xo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (na(t, e, 2, !1), n.add(r))
}

function Ol(e, t, n) {
    var r = 0;
    t && (r |= 4), na(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);

function $n(e) {
    if (!e[dr]) {
        e[dr] = !0, au.forEach(function(n) {
            n !== "selectionchange" && (Yd.has(n) || Ol(n, !1, e), Ol(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0, Ol("selectionchange", !1, t))
    }
}

function na(e, t, n, r) {
    switch (Wu(t)) {
        case 1:
            var l = id;
            break;
        case 4:
            l = sd;
            break;
        default:
            l = ei
    }
    n = l.bind(null, t, n, e), l = void 0, !so || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Dl(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var s = r.stateNode.containerInfo;
            if (s === l || s.nodeType === 8 && s.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    i = i.return
                }
            for (; s !== null;) {
                if (i = kt(s), i === null) return;
                if (u = i.tag, u === 5 || u === 6) {
                    r = o = i;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    ju(function() {
        var d = o,
            y = qo(n),
            h = [];
        e: {
            var m = ea.get(e);
            if (m !== void 0) {
                var x = ni,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Er(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = Sd;
                        break;
                    case "focusin":
                        w = "focus", x = zl;
                        break;
                    case "focusout":
                        w = "blur", x = zl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = zl;
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
                        x = Zi;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = cd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = jd;
                        break;
                    case qu:
                    case Zu:
                    case Ju:
                        x = pd;
                        break;
                    case bu:
                        x = _d;
                        break;
                    case "scroll":
                        x = ud;
                        break;
                    case "wheel":
                        x = zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = hd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = bi
                }
                var k = (t & 4) !== 0,
                    z = !k && e === "scroll",
                    f = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = d, p; c !== null;) {
                    p = c;
                    var v = p.stateNode;
                    if (p.tag === 5 && v !== null && (p = v, f !== null && (v = In(c, f), v != null && k.push(An(c, v, p)))), z) break;
                    c = c.return
                }
                0 < k.length && (m = new x(m, w, null, n, y), h.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", m && n !== oo && (w = n.relatedTarget || n.fromElement) && (kt(w) || w[Ke])) break e;
                if ((x || m) && (m = y.window === y ? y : (m = y.ownerDocument) ? m.defaultView || m.parentWindow : window, x ? (w = n.relatedTarget || n.toElement, x = d, w = w ? kt(w) : null, w !== null && (z = Rt(w), w !== z || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = d), x !== w)) {
                    if (k = Zi, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = bi, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), z = x == null ? m : Wt(x), p = w == null ? m : Wt(w), m = new k(v, c + "leave", x, n, y), m.target = z, m.relatedTarget = p, v = null, kt(y) === d && (k = new k(f, c + "enter", w, n, y), k.target = p, k.relatedTarget = z, v = k), z = v, x && w) t: {
                        for (k = x, f = w, c = 0, p = k; p; p = Mt(p)) c++;
                        for (p = 0, v = f; v; v = Mt(v)) p++;
                        for (; 0 < c - p;) k = Mt(k),
                        c--;
                        for (; 0 < p - c;) f = Mt(f),
                        p--;
                        for (; c--;) {
                            if (k === f || f !== null && k === f.alternate) break t;
                            k = Mt(k), f = Mt(f)
                        }
                        k = null
                    }
                    else k = null;
                    x !== null && cs(h, m, x, k, !1), w !== null && z !== null && cs(h, z, w, k, !0)
                }
            }
            e: {
                if (m = d ? Wt(d) : window, x = m.nodeName && m.nodeName.toLowerCase(), x === "select" || x === "input" && m.type === "file") var N = Dd;
                else if (ns(m))
                    if (Qu) N = $d;
                    else {
                        N = Ud;
                        var j = Fd
                    }
                else(x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Wd);
                if (N && (N = N(e, d))) {
                    Hu(h, N, n, y);
                    break e
                }
                j && j(e, m, d),
                e === "focusout" && (j = m._wrapperState) && j.controlled && m.type === "number" && eo(m, "number", m.value)
            }
            switch (j = d ? Wt(d) : window, e) {
                case "focusin":
                    (ns(j) || j.contentEditable === "true") && (Ft = j, po = d, _n = null);
                    break;
                case "focusout":
                    _n = po = Ft = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mo = !1, ss(h, n, y);
                    break;
                case "selectionchange":
                    if (Vd) break;
                case "keydown":
                case "keyup":
                    ss(h, n, y)
            }
            var C;
            if (li) e: {
                switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                }
                _ = void 0
            }
            else Dt ? Bu(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");_ && (Au && n.locale !== "ko" && (Dt || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Dt && (C = $u()) : (nt = y, ti = "value" in nt ? nt.value : nt.textContent, Dt = !0)), j = Wr(d, _), 0 < j.length && (_ = new Ji(_, e, null, n, y), h.push({
                event: _,
                listeners: j
            }), C ? _.data = C : (C = Vu(n), C !== null && (_.data = C)))),
            (C = Ld ? Rd(e, n) : Md(e, n)) && (d = Wr(d, "onBeforeInput"), 0 < d.length && (y = new Ji("onBeforeInput", "beforeinput", null, n, y), h.push({
                event: y,
                listeners: d
            }), y.data = C))
        }
        ta(h, t)
    })
}

function An(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = In(e, n), o != null && r.unshift(An(e, o, l)), o = In(e, t), o != null && r.push(An(e, o, l))), e = e.return
    }
    return r
}

function Mt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function cs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var s = n,
            u = s.alternate,
            d = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 && d !== null && (s = d, l ? (u = In(n, o), u != null && i.unshift(An(n, u, s))) : l || (u = In(n, o), u != null && i.push(An(n, u, s)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Kd = /\r\n?/g,
    Xd = /\u0000|\uFFFD/g;

function ds(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kd, `
`).replace(Xd, "")
}

function fr(e, t, n) {
    if (t = ds(t), ds(e) !== t && n) throw Error(g(425))
}

function $r() {}
var ho = null,
    yo = null;

function vo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var go = typeof setTimeout == "function" ? setTimeout : void 0,
    Gd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fs = typeof Promise == "function" ? Promise : void 0,
    qd = typeof queueMicrotask == "function" ? queueMicrotask : typeof fs < "u" ? function(e) {
        return fs.resolve(null).then(e).catch(Zd)
    } : go;

function Zd(e) {
    setTimeout(function() {
        throw e
    })
}

function Fl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Fn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fn(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ps(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var un = Math.random().toString(36).slice(2),
    Ue = "__reactFiber$" + un,
    Bn = "__reactProps$" + un,
    Ke = "__reactContainer$" + un,
    xo = "__reactEvents$" + un,
    Jd = "__reactListeners$" + un,
    bd = "__reactHandles$" + un;

function kt(e) {
    var t = e[Ue];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ke] || n[Ue]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ps(e); e !== null;) {
                    if (n = e[Ue]) return n;
                    e = ps(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Jn(e) {
    return e = e[Ue] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Wt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(g(33))
}

function sl(e) {
    return e[Bn] || null
}
var wo = [],
    $t = -1;

function ht(e) {
    return {
        current: e
    }
}

function F(e) {
    0 > $t || (e.current = wo[$t], wo[$t] = null, $t--)
}

function O(e, t) {
    $t++, wo[$t] = e.current, e.current = t
}
var pt = {},
    le = ht(pt),
    fe = ht(!1),
    Ct = pt;

function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function pe(e) {
    return e = e.childContextTypes, e != null
}

function Ar() {
    F(fe), F(le)
}

function ms(e, t, n) {
    if (le.current !== pt) throw Error(g(168));
    O(le, t), O(fe, n)
}

function ra(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(g(108, Fc(e) || "Unknown", l));
    return A({}, n, r)
}

function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, Ct = le.current, O(le, e), O(fe, fe.current), !0
}

function hs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(g(169));
    n ? (e = ra(e, t, Ct), r.__reactInternalMemoizedMergedChildContext = e, F(fe), F(le), O(le, e)) : F(fe), O(fe, n)
}
var Be = null,
    ul = !1,
    Ul = !1;

function la(e) {
    Be === null ? Be = [e] : Be.push(e)
}

function ef(e) {
    ul = !0, la(e)
}

function yt() {
    if (!Ul && Be !== null) {
        Ul = !0;
        var e = 0,
            t = I;
        try {
            var n = Be;
            for (I = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Be = null, ul = !1
        } catch (l) {
            throw Be !== null && (Be = Be.slice(e + 1)), zu(Zo, yt), l
        } finally {
            I = t, Ul = !1
        }
    }
    return null
}
var At = [],
    Bt = 0,
    Vr = null,
    Hr = 0,
    Se = [],
    Ne = 0,
    _t = null,
    Ve = 1,
    He = "";

function xt(e, t) {
    At[Bt++] = Hr, At[Bt++] = Vr, Vr = e, Hr = t
}

function oa(e, t, n) {
    Se[Ne++] = Ve, Se[Ne++] = He, Se[Ne++] = _t, _t = e;
    var r = Ve;
    e = He;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Me(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Me(t) + l | n << l | r, He = o + e
    } else Ve = 1 << o | n << l | r, He = e
}

function ii(e) {
    e.return !== null && (xt(e, 1), oa(e, 1, 0))
}

function si(e) {
    for (; e === Vr;) Vr = At[--Bt], At[Bt] = null, Hr = At[--Bt], At[Bt] = null;
    for (; e === _t;) _t = Se[--Ne], Se[Ne] = null, He = Se[--Ne], Se[Ne] = null, Ve = Se[--Ne], Se[Ne] = null
}
var ve = null,
    ye = null,
    U = !1,
    Re = null;

function ia(e, t) {
    var n = Ee(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ys(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, ye = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, ye = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _t !== null ? {
                id: Ve,
                overflow: He
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, ye = null, !0) : !1;
        default:
            return !1
    }
}

function ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function So(e) {
    if (U) {
        var t = ye;
        if (t) {
            var n = t;
            if (!ys(e, t)) {
                if (ko(e)) throw Error(g(418));
                t = st(n.nextSibling);
                var r = ve;
                t && ys(e, t) ? ia(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ve = e)
            }
        } else {
            if (ko(e)) throw Error(g(418));
            e.flags = e.flags & -4097 | 2, U = !1, ve = e
        }
    }
}

function vs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ve = e
}

function pr(e) {
    if (e !== ve) return !1;
    if (!U) return vs(e), U = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps)), t && (t = ye)) {
        if (ko(e)) throw sa(), Error(g(418));
        for (; t;) ia(e, t), t = st(t.nextSibling)
    }
    if (vs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ye = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ye = null
        }
    } else ye = ve ? st(e.stateNode.nextSibling) : null;
    return !0
}

function sa() {
    for (var e = ye; e;) e = st(e.nextSibling)
}

function en() {
    ye = ve = null, U = !1
}

function ui(e) {
    Re === null ? Re = [e] : Re.push(e)
}
var tf = qe.ReactCurrentBatchConfig;

function yn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(g(309));
                var r = n.stateNode
            }
            if (!r) throw Error(g(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var s = l.refs;
                i === null ? delete s[o] : s[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(g(284));
        if (!n._owner) throw Error(g(290, e))
    }
    return e
}

function mr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function gs(e) {
    var t = e._init;
    return t(e._payload)
}

function ua(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = dt(f, c), f.index = 0, f.sibling = null, f
    }

    function o(f, c, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function s(f, c, p, v) {
        return c === null || c.tag !== 6 ? (c = Ql(p, f.mode, v), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function u(f, c, p, v) {
        var N = p.type;
        return N === Ot ? y(f, c, p.props.children, v, p.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && gs(N) === c.type) ? (v = l(c, p.props), v.ref = yn(f, c, p), v.return = f, v) : (v = Lr(p.type, p.key, p.props, null, f.mode, v), v.ref = yn(f, c, p), v.return = f, v)
    }

    function d(f, c, p, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Yl(p, f.mode, v), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
    }

    function y(f, c, p, v, N) {
        return c === null || c.tag !== 7 ? (c = jt(p, f.mode, v, N), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function h(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ql("" + c, f.mode, p), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case rr:
                    return p = Lr(c.type, c.key, c.props, null, f.mode, p), p.ref = yn(f, null, c), p.return = f, p;
                case It:
                    return c = Yl(c, f.mode, p), c.return = f, c;
                case Je:
                    var v = c._init;
                    return h(f, v(c._payload), p)
            }
            if (wn(c) || dn(c)) return c = jt(c, f.mode, p, null), c.return = f, c;
            mr(f, c)
        }
        return null
    }

    function m(f, c, p, v) {
        var N = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : s(f, c, "" + p, v);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case rr:
                    return p.key === N ? u(f, c, p, v) : null;
                case It:
                    return p.key === N ? d(f, c, p, v) : null;
                case Je:
                    return N = p._init, m(f, c, N(p._payload), v)
            }
            if (wn(p) || dn(p)) return N !== null ? null : y(f, c, p, v, null);
            mr(f, p)
        }
        return null
    }

    function x(f, c, p, v, N) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(p) || null, s(c, f, "" + v, N);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case rr:
                    return f = f.get(v.key === null ? p : v.key) || null, u(c, f, v, N);
                case It:
                    return f = f.get(v.key === null ? p : v.key) || null, d(c, f, v, N);
                case Je:
                    var j = v._init;
                    return x(f, c, p, j(v._payload), N)
            }
            if (wn(v) || dn(v)) return f = f.get(p) || null, y(c, f, v, N, null);
            mr(c, v)
        }
        return null
    }

    function w(f, c, p, v) {
        for (var N = null, j = null, C = c, _ = c = 0, V = null; C !== null && _ < p.length; _++) {
            C.index > _ ? (V = C, C = null) : V = C.sibling;
            var R = m(f, C, p[_], v);
            if (R === null) {
                C === null && (C = V);
                break
            }
            e && C && R.alternate === null && t(f, C), c = o(R, c, _), j === null ? N = R : j.sibling = R, j = R, C = V
        }
        if (_ === p.length) return n(f, C), U && xt(f, _), N;
        if (C === null) {
            for (; _ < p.length; _++) C = h(f, p[_], v), C !== null && (c = o(C, c, _), j === null ? N = C : j.sibling = C, j = C);
            return U && xt(f, _), N
        }
        for (C = r(f, C); _ < p.length; _++) V = x(C, f, _, p[_], v), V !== null && (e && V.alternate !== null && C.delete(V.key === null ? _ : V.key), c = o(V, c, _), j === null ? N = V : j.sibling = V, j = V);
        return e && C.forEach(function(Pe) {
            return t(f, Pe)
        }), U && xt(f, _), N
    }

    function k(f, c, p, v) {
        var N = dn(p);
        if (typeof N != "function") throw Error(g(150));
        if (p = N.call(p), p == null) throw Error(g(151));
        for (var j = N = null, C = c, _ = c = 0, V = null, R = p.next(); C !== null && !R.done; _++, R = p.next()) {
            C.index > _ ? (V = C, C = null) : V = C.sibling;
            var Pe = m(f, C, R.value, v);
            if (Pe === null) {
                C === null && (C = V);
                break
            }
            e && C && Pe.alternate === null && t(f, C), c = o(Pe, c, _), j === null ? N = Pe : j.sibling = Pe, j = Pe, C = V
        }
        if (R.done) return n(f, C), U && xt(f, _), N;
        if (C === null) {
            for (; !R.done; _++, R = p.next()) R = h(f, R.value, v), R !== null && (c = o(R, c, _), j === null ? N = R : j.sibling = R, j = R);
            return U && xt(f, _), N
        }
        for (C = r(f, C); !R.done; _++, R = p.next()) R = x(C, f, _, R.value, v), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? _ : R.key), c = o(R, c, _), j === null ? N = R : j.sibling = R, j = R);
        return e && C.forEach(function(an) {
            return t(f, an)
        }), U && xt(f, _), N
    }

    function z(f, c, p, v) {
        if (typeof p == "object" && p !== null && p.type === Ot && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case rr:
                    e: {
                        for (var N = p.key, j = c; j !== null;) {
                            if (j.key === N) {
                                if (N = p.type, N === Ot) {
                                    if (j.tag === 7) {
                                        n(f, j.sibling), c = l(j, p.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (j.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Je && gs(N) === j.type) {
                                    n(f, j.sibling), c = l(j, p.props), c.ref = yn(f, j, p), c.return = f, f = c;
                                    break e
                                }
                                n(f, j);
                                break
                            } else t(f, j);
                            j = j.sibling
                        }
                        p.type === Ot ? (c = jt(p.props.children, f.mode, v, p.key), c.return = f, f = c) : (v = Lr(p.type, p.key, p.props, null, f.mode, v), v.ref = yn(f, c, p), v.return = f, f = v)
                    }
                    return i(f);
                case It:
                    e: {
                        for (j = p.key; c !== null;) {
                            if (c.key === j)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = Yl(p, f.mode, v),
                        c.return = f,
                        f = c
                    }
                    return i(f);
                case Je:
                    return j = p._init, z(f, c, j(p._payload), v)
            }
            if (wn(p)) return w(f, c, p, v);
            if (dn(p)) return k(f, c, p, v);
            mr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Ql(p, f.mode, v), c.return = f, f = c), i(f)) : n(f, c)
    }
    return z
}
var tn = ua(!0),
    aa = ua(!1),
    Qr = ht(null),
    Yr = null,
    Vt = null,
    ai = null;

function ci() {
    ai = Vt = Yr = null
}

function di(e) {
    var t = Qr.current;
    F(Qr), e._currentValue = t
}

function No(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function qt(e, t) {
    Yr = e, ai = Vt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null)
}

function Ce(e) {
    var t = e._currentValue;
    if (ai !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Vt === null) {
            if (Yr === null) throw Error(g(308));
            Vt = e, Yr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Vt = Vt.next = e;
    return t
}
var St = null;

function fi(e) {
    St === null ? St = [e] : St.push(e)
}

function ca(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, fi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r)
}

function Xe(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function pi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function da(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, fi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n)
}

function jr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Jo(e, n)
    }
}

function xs(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Kr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var u = s,
            d = u.next;
        u.next = null, i === null ? o = d : i.next = d, i = u;
        var y = e.alternate;
        y !== null && (y = y.updateQueue, s = y.lastBaseUpdate, s !== i && (s === null ? y.firstBaseUpdate = d : s.next = d, y.lastBaseUpdate = u))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0, y = d = u = null, s = o;
        do {
            var m = s.lane,
                x = s.eventTime;
            if ((r & m) === m) {
                y !== null && (y = y.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e,
                        k = s;
                    switch (m = t, x = n, k.tag) {
                        case 1:
                            if (w = k.payload, typeof w == "function") {
                                h = w.call(x, h, m);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = k.payload, m = typeof w == "function" ? w.call(x, h, m) : w, m == null) break e;
                            h = A({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [s] : m.push(s))
            } else x = {
                eventTime: x,
                lane: m,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, y === null ? (d = y = x, u = h) : y = y.next = x, i |= m;
            if (s = s.next, s === null) {
                if (s = l.shared.pending, s === null) break;
                m = s, s = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (y === null && (u = h), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = y, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        zt |= i, e.lanes = i, e.memoizedState = h
    }
}

function ws(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
                l.call(r)
            }
        }
}
var bn = {},
    $e = ht(bn),
    Vn = ht(bn),
    Hn = ht(bn);

function Nt(e) {
    if (e === bn) throw Error(g(174));
    return e
}

function mi(e, t) {
    switch (O(Hn, t), O(Vn, e), O($e, bn), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = no(t, e)
    }
    F($e), O($e, t)
}

function nn() {
    F($e), F(Vn), F(Hn)
}

function fa(e) {
    Nt(Hn.current);
    var t = Nt($e.current),
        n = no(t, e.type);
    t !== n && (O(Vn, e), O($e, n))
}

function hi(e) {
    Vn.current === e && (F($e), F(Vn))
}
var W = ht(0);

function Xr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Wl = [];

function yi() {
    for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0
}
var Cr = qe.ReactCurrentDispatcher,
    $l = qe.ReactCurrentBatchConfig,
    Pt = 0,
    $ = null,
    K = null,
    q = null,
    Gr = !1,
    Pn = !1,
    Qn = 0,
    nf = 0;

function te() {
    throw Error(g(321))
}

function vi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n])) return !1;
    return !0
}

function gi(e, t, n, r, l, o) {
    if (Pt = o, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cr.current = e === null || e.memoizedState === null ? sf : uf, e = n(r, l), Pn) {
        o = 0;
        do {
            if (Pn = !1, Qn = 0, 25 <= o) throw Error(g(301));
            o += 1, q = K = null, t.updateQueue = null, Cr.current = af, e = n(r, l)
        } while (Pn)
    }
    if (Cr.current = qr, t = K !== null && K.next !== null, Pt = 0, q = K = $ = null, Gr = !1, t) throw Error(g(300));
    return e
}

function xi() {
    var e = Qn !== 0;
    return Qn = 0, e
}

function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? $.memoizedState = q = e : q = q.next = e, q
}

function _e() {
    if (K === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = K.next;
    var t = q === null ? $.memoizedState : q.next;
    if (t !== null) q = t, K = e;
    else {
        if (e === null) throw Error(g(310));
        K = e, e = {
            memoizedState: K.memoizedState,
            baseState: K.baseState,
            baseQueue: K.baseQueue,
            queue: K.queue,
            next: null
        }, q === null ? $.memoizedState = q = e : q = q.next = e
    }
    return q
}

function Yn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Al(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = K,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var s = i = null,
            u = null,
            d = o;
        do {
            var y = d.lane;
            if ((Pt & y) === y) u !== null && (u = u.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var h = {
                    lane: y,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                u === null ? (s = u = h, i = r) : u = u.next = h, $.lanes |= y, zt |= y
            }
            d = d.next
        } while (d !== null && d !== o);
        u === null ? i = r : u.next = s, Oe(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, $.lanes |= o, zt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Bl(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(g(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Oe(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function pa() {}

function ma(e, t) {
    var n = $,
        r = _e(),
        l = t(),
        o = !Oe(r.memoizedState, l);
    if (o && (r.memoizedState = l, de = !0), r = r.queue, wi(va.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
        if (n.flags |= 2048, Kn(9, ya.bind(null, n, r, l, t), void 0, null), Z === null) throw Error(g(349));
        Pt & 30 || ha(n, t, l)
    }
    return l
}

function ha(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = $.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ya(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ga(t) && xa(e)
}

function va(e, t, n) {
    return n(function() {
        ga(t) && xa(e)
    })
}

function ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}

function xa(e) {
    var t = Xe(e, 1);
    t !== null && Ie(t, e, 1, -1)
}

function ks(e) {
    var t = Fe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = of.bind(null, $, e), [t.memoizedState, e]
}

function Kn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = $.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function wa() {
    return _e().memoizedState
}

function _r(e, t, n, r) {
    var l = Fe();
    $.flags |= e, l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r)
}

function al(e, t, n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (K !== null) {
        var i = K.memoizedState;
        if (o = i.destroy, r !== null && vi(r, i.deps)) {
            l.memoizedState = Kn(t, n, o, r);
            return
        }
    }
    $.flags |= e, l.memoizedState = Kn(1 | t, n, o, r)
}

function Ss(e, t) {
    return _r(8390656, 8, e, t)
}

function wi(e, t) {
    return al(2048, 8, e, t)
}

function ka(e, t) {
    return al(4, 2, e, t)
}

function Sa(e, t) {
    return al(4, 4, e, t)
}

function Na(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Ea(e, t, n) {
    return n = n != null ? n.concat([e]) : null, al(4, 4, Na.bind(null, t, e), n)
}

function ki() {}

function ja(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ca(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && vi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function _a(e, t, n) {
    return Pt & 21 ? (Oe(n, t) || (n = Ru(), $.lanes |= n, zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n)
}

function rf(e, t) {
    var n = I;
    I = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1), t()
    } finally {
        I = n, $l.transition = r
    }
}

function Pa() {
    return _e().memoizedState
}

function lf(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, za(e)) Ta(t, n);
    else if (n = ca(e, t, n, r), n !== null) {
        var l = ie();
        Ie(n, e, r, l), La(n, t, r)
    }
}

function of(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (za(e)) Ta(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                s = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = s, Oe(s, i)) {
                var u = t.interleaved;
                u === null ? (l.next = l, fi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = ca(e, t, l, r), n !== null && (l = ie(), Ie(n, e, r, l), La(n, t, r))
    }
}

function za(e) {
    var t = e.alternate;
    return e === $ || t !== null && t === $
}

function Ta(e, t) {
    Pn = Gr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function La(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Jo(e, n)
    }
}
var qr = {
        readContext: Ce,
        useCallback: te,
        useContext: te,
        useEffect: te,
        useImperativeHandle: te,
        useInsertionEffect: te,
        useLayoutEffect: te,
        useMemo: te,
        useReducer: te,
        useRef: te,
        useState: te,
        useDebugValue: te,
        useDeferredValue: te,
        useTransition: te,
        useMutableSource: te,
        useSyncExternalStore: te,
        useId: te,
        unstable_isNewReconciler: !1
    },
    sf = {
        readContext: Ce,
        useCallback: function(e, t) {
            return Fe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ce,
        useEffect: Ss,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, _r(4194308, 4, Na.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return _r(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return _r(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Fe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Fe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = lf.bind(null, $, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Fe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ks,
        useDebugValue: ki,
        useDeferredValue: function(e) {
            return Fe().memoizedState = e
        },
        useTransition: function() {
            var e = ks(!1),
                t = e[0];
            return e = rf.bind(null, e[1]), Fe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = $,
                l = Fe();
            if (U) {
                if (n === void 0) throw Error(g(407));
                n = n()
            } else {
                if (n = t(), Z === null) throw Error(g(349));
                Pt & 30 || ha(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, Ss(va.bind(null, r, o, e), [e]), r.flags |= 2048, Kn(9, ya.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Fe(),
                t = Z.identifierPrefix;
            if (U) {
                var n = He,
                    r = Ve;
                n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = nf++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    uf = {
        readContext: Ce,
        useCallback: ja,
        useContext: Ce,
        useEffect: wi,
        useImperativeHandle: Ea,
        useInsertionEffect: ka,
        useLayoutEffect: Sa,
        useMemo: Ca,
        useReducer: Al,
        useRef: wa,
        useState: function() {
            return Al(Yn)
        },
        useDebugValue: ki,
        useDeferredValue: function(e) {
            var t = _e();
            return _a(t, K.memoizedState, e)
        },
        useTransition: function() {
            var e = Al(Yn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: pa,
        useSyncExternalStore: ma,
        useId: Pa,
        unstable_isNewReconciler: !1
    },
    af = {
        readContext: Ce,
        useCallback: ja,
        useContext: Ce,
        useEffect: wi,
        useImperativeHandle: Ea,
        useInsertionEffect: ka,
        useLayoutEffect: Sa,
        useMemo: Ca,
        useReducer: Bl,
        useRef: wa,
        useState: function() {
            return Bl(Yn)
        },
        useDebugValue: ki,
        useDeferredValue: function(e) {
            var t = _e();
            return K === null ? t.memoizedState = e : _a(t, K.memoizedState, e)
        },
        useTransition: function() {
            var e = Bl(Yn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: pa,
        useSyncExternalStore: ma,
        useId: Pa,
        unstable_isNewReconciler: !1
    };

function Te(e, t) {
    if (e && e.defaultProps) {
        t = A({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Eo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : A({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Rt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ie(),
            l = ct(e),
            o = Qe(r, l);
        o.payload = t, n != null && (o.callback = n), t = ut(e, o, l), t !== null && (Ie(t, e, l, r), jr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ie(),
            l = ct(e),
            o = Qe(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ut(e, o, l), t !== null && (Ie(t, e, l, r), jr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ie(),
            r = ct(e),
            l = Qe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = ut(e, l, r), t !== null && (Ie(t, e, r, n), jr(t, e, r))
    }
};

function Ns(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, o) : !0
}

function Ra(e, t, n) {
    var r = !1,
        l = pt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ce(o) : (l = pe(t) ? Ct : le.current, r = t.contextTypes, o = (r = r != null) ? bt(e, l) : pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Es(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cl.enqueueReplaceState(t, t.state, null)
}

function jo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, pi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Ce(o) : (o = pe(t) ? Ct : le.current, l.context = bt(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Eo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && cl.enqueueReplaceState(l, l.state, null), Kr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function rn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Dc(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Vl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Co(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var cf = typeof WeakMap == "function" ? WeakMap : Map;

function Ma(e, t, n) {
    n = Qe(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Jr || (Jr = !0, Do = r), Co(e, t)
    }, n
}

function Ia(e, t, n) {
    n = Qe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Co(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Co(e, t), typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function js(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new cf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Ef.bind(null, e, t, n), t.then(e, e))
}

function Cs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function _s(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, ut(n, t, 1))), n.lanes |= 1), e)
}
var df = qe.ReactCurrentOwner,
    de = !1;

function oe(e, t, n, r) {
    t.child = e === null ? aa(t, null, n, r) : tn(t, e.child, n, r)
}

function Ps(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return qt(t, l), r = gi(e, t, n, r, o, l), n = xi(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && n && ii(t), t.flags |= 1, oe(e, t, r, l), t.child)
}

function zs(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !zi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Oa(e, t, o, r, l)) : (e = Lr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Wn, n(i, r) && e.ref === t.ref) return Ge(e, t, l)
    }
    return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Oa(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Wn(o, r) && e.ref === t.ref)
            if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
            else return t.lanes = e.lanes, Ge(e, t, l)
    }
    return _o(e, t, n, r, l)
}

function Da(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, O(Qt, he), he |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, O(Qt, he), he |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, O(Qt, he), he |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, O(Qt, he), he |= r;
    return oe(e, t, l, n), t.child
}

function Fa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function _o(e, t, n, r, l) {
    var o = pe(n) ? Ct : le.current;
    return o = bt(t, o), qt(t, l), n = gi(e, t, n, r, o, l), r = xi(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && r && ii(t), t.flags |= 1, oe(e, t, n, l), t.child)
}

function Ts(e, t, n, r, l) {
    if (pe(n)) {
        var o = !0;
        Br(t)
    } else o = !1;
    if (qt(t, l), t.stateNode === null) Pr(e, t), Ra(t, n, r), jo(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            s = t.memoizedProps;
        i.props = s;
        var u = i.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = Ce(d) : (d = pe(n) ? Ct : le.current, d = bt(t, d));
        var y = n.getDerivedStateFromProps,
            h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== d) && Es(t, i, r, d), be = !1;
        var m = t.memoizedState;
        i.state = m, Kr(t, r, i, l), u = t.memoizedState, s !== r || m !== u || fe.current || be ? (typeof y == "function" && (Eo(t, n, y, r), u = t.memoizedState), (s = be || Ns(t, n, s, r, m, u, d)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = d, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, da(e, t), s = t.memoizedProps, d = t.type === t.elementType ? s : Te(t.type, s), i.props = d, h = t.pendingProps, m = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ce(u) : (u = pe(n) ? Ct : le.current, u = bt(t, u));
        var x = n.getDerivedStateFromProps;
        (y = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== h || m !== u) && Es(t, i, r, u), be = !1, m = t.memoizedState, i.state = m, Kr(t, r, i, l);
        var w = t.memoizedState;
        s !== h || m !== w || fe.current || be ? (typeof x == "function" && (Eo(t, n, x, r), w = t.memoizedState), (d = be || Ns(t, n, d, r, m, w, u) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = d) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Po(e, t, n, r, o, l)
}

function Po(e, t, n, r, l, o) {
    Fa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && hs(t, n, !1), Ge(e, t, o);
    r = t.stateNode, df.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = tn(t, e.child, null, o), t.child = tn(t, null, s, o)) : oe(e, t, s, o), t.memoizedState = r.state, l && hs(t, n, !0), t.child
}

function Ua(e) {
    var t = e.stateNode;
    t.pendingContext ? ms(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ms(e, t.context, !1), mi(e, t.containerInfo)
}

function Ls(e, t, n, r, l) {
    return en(), ui(l), t.flags |= 256, oe(e, t, n, r), t.child
}
var zo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function To(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Wa(e, t, n) {
    var r = t.pendingProps,
        l = W.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(W, l & 1), e === null) return So(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = pl(i, r, 0, null), e = jt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = To(n), t.memoizedState = zo, e) : Si(t, i));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return ff(e, t, i, r, s, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = dt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = dt(s, o) : (o = jt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? To(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = zo, r
    }
    return o = e.child, e = o.sibling, r = dt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Si(e, t) {
    return t = pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function hr(e, t, n, r) {
    return r !== null && ui(r), tn(t, e.child, null, n), e = Si(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function ff(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Vl(Error(g(422))), hr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = pl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = jt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && tn(t, e.child, null, i), t.child.memoizedState = To(i), t.memoizedState = zo, o);
    if (!(t.mode & 1)) return hr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
        return r = s, o = Error(g(419)), r = Vl(o, r, void 0), hr(e, t, i, r)
    }
    if (s = (i & e.childLanes) !== 0, de || s) {
        if (r = Z, r !== null) {
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
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Xe(e, l), Ie(r, e, l, -1))
        }
        return Pi(), r = Vl(Error(g(421))), hr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ye = st(l.nextSibling), ve = t, U = !0, Re = null, e !== null && (Se[Ne++] = Ve, Se[Ne++] = He, Se[Ne++] = _t, Ve = e.id, He = e.overflow, _t = t), t = Si(t, r.children), t.flags |= 4096, t)
}

function Rs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), No(e.return, t, n)
}

function Hl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function $a(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (oe(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Rs(e, n, t);
            else if (e.tag === 19) Rs(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (O(W, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Xr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Hl(t, !0, n, null, o);
            break;
        case "together":
            Hl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Pr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ge(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), zt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(g(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function pf(e, t, n) {
    switch (t.tag) {
        case 3:
            Ua(t), en();
            break;
        case 5:
            fa(t);
            break;
        case 1:
            pe(t.type) && Br(t);
            break;
        case 4:
            mi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            O(Qr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (O(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wa(e, t, n) : (O(W, W.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
            O(W, W.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return $a(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(W, W.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Da(e, t, n)
    }
    return Ge(e, t, n)
}
var Aa, Lo, Ba, Va;
Aa = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Lo = function() {};
Ba = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Nt($e.current);
        var o = null;
        switch (n) {
            case "input":
                l = Jl(e, l), r = Jl(e, r), o = [];
                break;
            case "select":
                l = A({}, l, {
                    value: void 0
                }), r = A({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = to(e, l), r = to(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r)
        }
        ro(n, r);
        var i;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var s = l[d];
                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Rn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
        for (d in r) {
            var u = r[d];
            if (s = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== s && (u != null || s != null))
                if (d === "style")
                    if (s) {
                        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (o || (o = []), o.push(d, n)), n = u;
            else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Rn.hasOwnProperty(d) ? (u != null && d === "onScroll" && D("scroll", e), o || s === u || (o = [])) : (o = o || []).push(d, u))
        }
        n && (o = o || []).push("style", n);
        var d = o;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Va = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function vn(e, t) {
    if (!U) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function mf(e, t, n) {
    var r = t.pendingProps;
    switch (si(t), t.tag) {
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
            return ne(t), null;
        case 1:
            return pe(t.type) && Ar(), ne(t), null;
        case 3:
            return r = t.stateNode, nn(), F(fe), F(le), yi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Wo(Re), Re = null))), Lo(e, t), ne(t), null;
        case 5:
            hi(t);
            var l = Nt(Hn.current);
            if (n = t.type, e !== null && t.stateNode != null) Ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(g(166));
                    return ne(t), null
                }
                if (e = Nt($e.current), pr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ue] = t, r[Bn] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            D("cancel", r), D("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Sn.length; l++) D(Sn[l], r);
                            break;
                        case "source":
                            D("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", r), D("load", r);
                            break;
                        case "details":
                            D("toggle", r);
                            break;
                        case "input":
                            Ai(r, o), D("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, D("invalid", r);
                            break;
                        case "textarea":
                            Vi(r, o), D("invalid", r)
                    }
                    ro(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var s = o[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && fr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && fr(r.textContent, s, e), l = ["children", "" + s]) : Rn.hasOwnProperty(i) && s != null && i === "onScroll" && D("scroll", r)
                        } switch (n) {
                        case "input":
                            lr(r), Bi(r, o, !0);
                            break;
                        case "textarea":
                            lr(r), Hi(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = $r)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Bn] = r, Aa(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = lo(n, r), n) {
                            case "dialog":
                                D("cancel", e), D("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Sn.length; l++) D(Sn[l], e);
                                l = r;
                                break;
                            case "source":
                                D("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", e), D("load", e), l = r;
                                break;
                            case "details":
                                D("toggle", e), l = r;
                                break;
                            case "input":
                                Ai(e, r), l = Jl(e, r), D("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = A({}, r, {
                                    value: void 0
                                }), D("invalid", e);
                                break;
                            case "textarea":
                                Vi(e, r), l = to(e, r), D("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ro(n, l),
                        s = l;
                        for (o in s)
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                o === "style" ? wu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && gu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Mn(e, u) : typeof u == "number" && Mn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Rn.hasOwnProperty(o) ? u != null && o === "onScroll" && D("scroll", e) : u != null && Yo(e, o, u, i))
                            } switch (n) {
                            case "input":
                                lr(e), Bi(e, r, !1);
                                break;
                            case "textarea":
                                lr(e), Hi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Yt(e, !!r.multiple, o, !1) : r.defaultValue != null && Yt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = $r)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ne(t), null;
        case 6:
            if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
                if (n = Nt(Hn.current), Nt($e.current), pr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (o = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
                        case 3:
                            fr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r
            }
            return ne(t), null;
        case 13:
            if (F(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (U && ye !== null && t.mode & 1 && !(t.flags & 128)) sa(), en(), t.flags |= 98560, o = !1;
                else if (o = pr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(g(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(g(317));
                        o[Ue] = t
                    } else en(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ne(t), o = !1
                } else Re !== null && (Wo(Re), Re = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? X === 0 && (X = 3) : Pi())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
        case 4:
            return nn(), Lo(e, t), e === null && $n(t.stateNode.containerInfo), ne(t), null;
        case 10:
            return di(t.type._context), ne(t), null;
        case 17:
            return pe(t.type) && Ar(), ne(t), null;
        case 19:
            if (F(W), o = t.memoizedState, o === null) return ne(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) vn(o, !1);
                else {
                    if (X !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Xr(e), i !== null) {
                                for (t.flags |= 128, vn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return O(W, W.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Q() > ln && (t.flags |= 128, r = !0, vn(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Xr(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U) return ne(t), null
                    } else 2 * Q() - o.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128, r = !0, vn(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Q(), t.sibling = null, n = W.current, O(W, r ? n & 1 | 2 : n & 1), t) : (ne(t), null);
        case 22:
        case 23:
            return _i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(g(156, t.tag))
}

function hf(e, t) {
    switch (si(t), t.tag) {
        case 1:
            return pe(t.type) && Ar(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return nn(), F(fe), F(le), yi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return hi(t), null;
        case 13:
            if (F(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(g(340));
                en()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return F(W), null;
        case 4:
            return nn(), null;
        case 10:
            return di(t.type._context), null;
        case 22:
        case 23:
            return _i(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var yr = !1,
    re = !1,
    yf = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;

function Ht(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            B(e, t, r)
        } else n.current = null
}

function Ro(e, t, n) {
    try {
        n()
    } catch (r) {
        B(e, t, r)
    }
}
var Ms = !1;

function vf(e, t) {
    if (ho = Fr, e = Xu(), oi(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    s = -1,
                    u = -1,
                    d = 0,
                    y = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var x; h !== n || l !== 0 && h.nodeType !== 3 || (s = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (x = h.firstChild) !== null;) m = h, h = x;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++d === l && (s = i), m === o && ++y === r && (u = i), (x = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = x
                }
                n = s === -1 || u === -1 ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (yo = {
            focusedElem: e,
            selectionRange: n
        }, Fr = !1, S = t; S !== null;)
        if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
        else
            for (; S !== null;) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps,
                                    z = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), z);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(g(163))
                    }
                } catch (v) {
                    B(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, S = e;
                    break
                }
                S = t.return
            }
    return w = Ms, Ms = !1, w
}

function zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Ro(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function dl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Mo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ha(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ha(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Bn], delete t[xo], delete t[Jd], delete t[bd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Qa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Is(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Qa(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Io(e, t, n), e = e.sibling; e !== null;) Io(e, t, n), e = e.sibling
}

function Oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oo(e, t, n), e = e.sibling; e !== null;) Oo(e, t, n), e = e.sibling
}
var J = null,
    Le = !1;

function Ze(e, t, n) {
    for (n = n.child; n !== null;) Ya(e, t, n), n = n.sibling
}

function Ya(e, t, n) {
    if (We && typeof We.onCommitFiberUnmount == "function") try {
        We.onCommitFiberUnmount(rl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            re || Ht(n, t);
        case 6:
            var r = J,
                l = Le;
            J = null, Ze(e, t, n), J = r, Le = l, J !== null && (Le ? (e = J, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : J.removeChild(n.stateNode));
            break;
        case 18:
            J !== null && (Le ? (e = J, n = n.stateNode, e.nodeType === 8 ? Fl(e.parentNode, n) : e.nodeType === 1 && Fl(e, n), Fn(e)) : Fl(J, n.stateNode));
            break;
        case 4:
            r = J, l = Le, J = n.stateNode.containerInfo, Le = !0, Ze(e, t, n), J = r, Le = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Ro(n, t, i), l = l.next
                } while (l !== r)
            }
            Ze(e, t, n);
            break;
        case 1:
            if (!re && (Ht(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                B(n, t, s)
            }
            Ze(e, t, n);
            break;
        case 21:
            Ze(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (re = (r = re) || n.memoizedState !== null, Ze(e, t, n), re = r) : Ze(e, t, n);
            break;
        default:
            Ze(e, t, n)
    }
}

function Os(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new yf), t.forEach(function(r) {
            var l = Cf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    s = i;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            J = s.stateNode, Le = !1;
                            break e;
                        case 3:
                            J = s.stateNode.containerInfo, Le = !0;
                            break e;
                        case 4:
                            J = s.stateNode.containerInfo, Le = !0;
                            break e
                    }
                    s = s.return
                }
                if (J === null) throw Error(g(160));
                Ya(o, i, l), J = null, Le = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (d) {
                B(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Ka(t, e), t = t.sibling
}

function Ka(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(t, e), De(e), r & 4) {
                try {
                    zn(3, e, e.return), dl(3, e)
                } catch (k) {
                    B(e, e.return, k)
                }
                try {
                    zn(5, e, e.return)
                } catch (k) {
                    B(e, e.return, k)
                }
            }
            break;
        case 1:
            ze(t, e), De(e), r & 512 && n !== null && Ht(n, n.return);
            break;
        case 5:
            if (ze(t, e), De(e), r & 512 && n !== null && Ht(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Mn(l, "")
                } catch (k) {
                    B(e, e.return, k)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    s === "input" && o.type === "radio" && o.name != null && hu(l, o), lo(s, i);
                    var d = lo(s, o);
                    for (i = 0; i < u.length; i += 2) {
                        var y = u[i],
                            h = u[i + 1];
                        y === "style" ? wu(l, h) : y === "dangerouslySetInnerHTML" ? gu(l, h) : y === "children" ? Mn(l, h) : Yo(l, y, h, d)
                    }
                    switch (s) {
                        case "input":
                            bl(l, o);
                            break;
                        case "textarea":
                            yu(l, o);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var x = o.value;
                            x != null ? Yt(l, !!o.multiple, x, !1) : m !== !!o.multiple && (o.defaultValue != null ? Yt(l, !!o.multiple, o.defaultValue, !0) : Yt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Bn] = o
                } catch (k) {
                    B(e, e.return, k)
                }
            }
            break;
        case 6:
            if (ze(t, e), De(e), r & 4) {
                if (e.stateNode === null) throw Error(g(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (k) {
                    B(e, e.return, k)
                }
            }
            break;
        case 3:
            if (ze(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fn(t.containerInfo)
            } catch (k) {
                B(e, e.return, k)
            }
            break;
        case 4:
            ze(t, e), De(e);
            break;
        case 13:
            ze(t, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ji = Q())), r & 4 && Os(e);
            break;
        case 22:
            if (y = n !== null && n.memoizedState !== null, e.mode & 1 ? (re = (d = re) || y, ze(t, e), re = d) : ze(t, e), De(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !y && e.mode & 1)
                    for (S = e, y = e.child; y !== null;) {
                        for (h = S = y; S !== null;) {
                            switch (m = S, x = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    zn(4, m, m.return);
                                    break;
                                case 1:
                                    Ht(m, m.return);
                                    var w = m.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (k) {
                                            B(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Ht(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Fs(h);
                                        continue
                                    }
                            }
                            x !== null ? (x.return = m, S = x) : Fs(h)
                        }
                        y = y.sibling
                    }
                e: for (y = null, h = e;;) {
                    if (h.tag === 5) {
                        if (y === null) {
                            y = h;
                            try {
                                l = h.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = h.stateNode, u = h.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = xu("display", i))
                            } catch (k) {
                                B(e, e.return, k)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (y === null) try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (k) {
                            B(e, e.return, k)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        y === h && (y = null), h = h.return
                    }
                    y === h && (y = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            ze(t, e), De(e), r & 4 && Os(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), De(e)
    }
}

function De(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Qa(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(g(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Mn(l, ""), r.flags &= -33);
                    var o = Is(e);
                    Oo(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        s = Is(e);
                    Io(e, s, i);
                    break;
                default:
                    throw Error(g(161))
            }
        }
        catch (u) {
            B(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function gf(e, t, n) {
    S = e, Xa(e)
}

function Xa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null;) {
        var l = S,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || yr;
            if (!i) {
                var s = l.alternate,
                    u = s !== null && s.memoizedState !== null || re;
                s = yr;
                var d = re;
                if (yr = i, (re = u) && !d)
                    for (S = l; S !== null;) i = S, u = i.child, i.tag === 22 && i.memoizedState !== null ? Us(l) : u !== null ? (u.return = i, S = u) : Us(l);
                for (; o !== null;) S = o, Xa(o), o = o.sibling;
                S = l, yr = s, re = d
            }
            Ds(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, S = o) : Ds(e)
    }
}

function Ds(e) {
    for (; S !== null;) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        re || dl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !re)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && ws(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ws(t, i, n)
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
                                    u.src && (n.src = u.src)
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
                            var d = t.alternate;
                            if (d !== null) {
                                var y = d.memoizedState;
                                if (y !== null) {
                                    var h = y.dehydrated;
                                    h !== null && Fn(h)
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
                        throw Error(g(163))
                }
                re || t.flags & 512 && Mo(t)
            } catch (m) {
                B(t, t.return, m)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, S = n;
            break
        }
        S = t.return
    }
}

function Fs(e) {
    for (; S !== null;) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, S = n;
            break
        }
        S = t.return
    }
}

function Us(e) {
    for (; S !== null;) {
        var t = S;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        dl(4, t)
                    } catch (u) {
                        B(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            B(t, l, u)
                        }
                    }
                    var o = t.return;
                    try {
                        Mo(t)
                    } catch (u) {
                        B(t, o, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Mo(t)
                    } catch (u) {
                        B(t, i, u)
                    }
            }
        } catch (u) {
            B(t, t.return, u)
        }
        if (t === e) {
            S = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, S = s;
            break
        }
        S = t.return
    }
}
var xf = Math.ceil,
    Zr = qe.ReactCurrentDispatcher,
    Ni = qe.ReactCurrentOwner,
    je = qe.ReactCurrentBatchConfig,
    M = 0,
    Z = null,
    Y = null,
    b = 0,
    he = 0,
    Qt = ht(0),
    X = 0,
    Xn = null,
    zt = 0,
    fl = 0,
    Ei = 0,
    Tn = null,
    ce = null,
    ji = 0,
    ln = 1 / 0,
    Ae = null,
    Jr = !1,
    Do = null,
    at = null,
    vr = !1,
    rt = null,
    br = 0,
    Ln = 0,
    Fo = null,
    zr = -1,
    Tr = 0;

function ie() {
    return M & 6 ? Q() : zr !== -1 ? zr : zr = Q()
}

function ct(e) {
    return e.mode & 1 ? M & 2 && b !== 0 ? b & -b : tf.transition !== null ? (Tr === 0 && (Tr = Ru()), Tr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wu(e.type)), e) : 1
}

function Ie(e, t, n, r) {
    if (50 < Ln) throw Ln = 0, Fo = null, Error(g(185));
    qn(e, n, r), (!(M & 2) || e !== Z) && (e === Z && (!(M & 2) && (fl |= n), X === 4 && tt(e, b)), me(e, r), n === 1 && M === 0 && !(t.mode & 1) && (ln = Q() + 500, ul && yt()))
}

function me(e, t) {
    var n = e.callbackNode;
    td(e, t);
    var r = Dr(e, e === Z ? b : 0);
    if (r === 0) n !== null && Ki(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Ki(n), t === 1) e.tag === 0 ? ef(Ws.bind(null, e)) : la(Ws.bind(null, e)), qd(function() {
            !(M & 6) && yt()
        }), n = null;
        else {
            switch (Mu(r)) {
                case 1:
                    n = Zo;
                    break;
                case 4:
                    n = Tu;
                    break;
                case 16:
                    n = Or;
                    break;
                case 536870912:
                    n = Lu;
                    break;
                default:
                    n = Or
            }
            n = nc(n, Ga.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Ga(e, t) {
    if (zr = -1, Tr = 0, M & 6) throw Error(g(327));
    var n = e.callbackNode;
    if (Zt() && e.callbackNode !== n) return null;
    var r = Dr(e, e === Z ? b : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var o = Za();
        (Z !== e || b !== t) && (Ae = null, ln = Q() + 500, Et(e, t));
        do try {
            Sf();
            break
        } catch (s) {
            qa(e, s)
        }
        while (!0);
        ci(), Zr.current = o, M = l, Y !== null ? t = 0 : (Z = null, b = 0, t = X)
    }
    if (t !== 0) {
        if (t === 2 && (l = ao(e), l !== 0 && (r = l, t = Uo(e, l))), t === 1) throw n = Xn, Et(e, 0), tt(e, r), me(e, Q()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !wf(l) && (t = el(e, r), t === 2 && (o = ao(e), o !== 0 && (r = o, t = Uo(e, o))), t === 1)) throw n = Xn, Et(e, 0), tt(e, r), me(e, Q()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(g(345));
                case 2:
                    wt(e, ce, Ae);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = ji + 500 - Q(), 10 < t)) {
                        if (Dr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ie(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = go(wt.bind(null, e, ce, Ae), t);
                        break
                    }
                    wt(e, ce, Ae);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Me(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xf(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = go(wt.bind(null, e, ce, Ae), r);
                        break
                    }
                    wt(e, ce, Ae);
                    break;
                case 5:
                    wt(e, ce, Ae);
                    break;
                default:
                    throw Error(g(329))
            }
        }
    }
    return me(e, Q()), e.callbackNode === n ? Ga.bind(null, e) : null
}

function Uo(e, t) {
    var n = Tn;
    return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), e = el(e, t), e !== 2 && (t = ce, ce = n, t !== null && Wo(t)), e
}

function Wo(e) {
    ce === null ? ce = e : ce.push.apply(ce, e)
}

function wf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~Ei, t &= ~fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Me(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ws(e) {
    if (M & 6) throw Error(g(327));
    Zt();
    var t = Dr(e, 0);
    if (!(t & 1)) return me(e, Q()), null;
    var n = el(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ao(e);
        r !== 0 && (t = r, n = Uo(e, r))
    }
    if (n === 1) throw n = Xn, Et(e, 0), tt(e, t), me(e, Q()), n;
    if (n === 6) throw Error(g(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, ce, Ae), me(e, Q()), null
}

function Ci(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (ln = Q() + 500, ul && yt())
    }
}

function Tt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && Zt();
    var t = M;
    M |= 1;
    var n = je.transition,
        r = I;
    try {
        if (je.transition = null, I = 1, e) return e()
    } finally {
        I = r, je.transition = n, M = t, !(M & 6) && yt()
    }
}

function _i() {
    he = Qt.current, F(Qt)
}

function Et(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Gd(n)), Y !== null)
        for (n = Y.return; n !== null;) {
            var r = n;
            switch (si(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ar();
                    break;
                case 3:
                    nn(), F(fe), F(le), yi();
                    break;
                case 5:
                    hi(r);
                    break;
                case 4:
                    nn();
                    break;
                case 13:
                    F(W);
                    break;
                case 19:
                    F(W);
                    break;
                case 10:
                    di(r.type._context);
                    break;
                case 22:
                case 23:
                    _i()
            }
            n = n.return
        }
    if (Z = e, Y = e = dt(e.current, null), b = he = t, X = 0, Xn = null, Ei = fl = zt = 0, ce = Tn = null, St !== null) {
        for (t = 0; t < St.length; t++)
            if (n = St[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            } St = null
    }
    return e
}

function qa(e, t) {
    do {
        var n = Y;
        try {
            if (ci(), Cr.current = qr, Gr) {
                for (var r = $.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Gr = !1
            }
            if (Pt = 0, q = K = $ = null, Pn = !1, Qn = 0, Ni.current = null, n === null || n.return === null) {
                X = 1, Xn = t, Y = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    s = n,
                    u = t;
                if (t = b, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var d = u,
                        y = s,
                        h = y.tag;
                    if (!(y.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = y.alternate;
                        m ? (y.updateQueue = m.updateQueue, y.memoizedState = m.memoizedState, y.lanes = m.lanes) : (y.updateQueue = null, y.memoizedState = null)
                    }
                    var x = Cs(i);
                    if (x !== null) {
                        x.flags &= -257, _s(x, i, s, o, t), x.mode & 1 && js(o, d, t), t = x, u = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(u), t.updateQueue = k
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            js(o, d, t), Pi();
                            break e
                        }
                        u = Error(g(426))
                    }
                } else if (U && s.mode & 1) {
                    var z = Cs(i);
                    if (z !== null) {
                        !(z.flags & 65536) && (z.flags |= 256), _s(z, i, s, o, t), ui(rn(u, s));
                        break e
                    }
                }
                o = u = rn(u, s),
                X !== 4 && (X = 2),
                Tn === null ? Tn = [o] : Tn.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = Ma(o, u, t);
                            xs(o, f);
                            break e;
                        case 1:
                            s = u;
                            var c = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (at === null || !at.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var v = Ia(o, s, t);
                                xs(o, v);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            ba(n)
        } catch (N) {
            t = N, Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Za() {
    var e = Zr.current;
    return Zr.current = qr, e === null ? qr : e
}

function Pi() {
    (X === 0 || X === 3 || X === 2) && (X = 4), Z === null || !(zt & 268435455) && !(fl & 268435455) || tt(Z, b)
}

function el(e, t) {
    var n = M;
    M |= 2;
    var r = Za();
    (Z !== e || b !== t) && (Ae = null, Et(e, t));
    do try {
        kf();
        break
    } catch (l) {
        qa(e, l)
    }
    while (!0);
    if (ci(), M = n, Zr.current = r, Y !== null) throw Error(g(261));
    return Z = null, b = 0, X
}

function kf() {
    for (; Y !== null;) Ja(Y)
}

function Sf() {
    for (; Y !== null && !Yc();) Ja(Y)
}

function Ja(e) {
    var t = tc(e.alternate, e, he);
    e.memoizedProps = e.pendingProps, t === null ? ba(e) : Y = t, Ni.current = null
}

function ba(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = hf(n, t), n !== null) {
                n.flags &= 32767, Y = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                X = 6, Y = null;
                return
            }
        } else if (n = mf(n, t, he), n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    X === 0 && (X = 5)
}

function wt(e, t, n) {
    var r = I,
        l = je.transition;
    try {
        je.transition = null, I = 1, Nf(e, t, n, r)
    } finally {
        je.transition = l, I = r
    }
    return null
}

function Nf(e, t, n, r) {
    do Zt(); while (rt !== null);
    if (M & 6) throw Error(g(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (nd(e, o), e === Z && (Y = Z = null, b = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vr || (vr = !0, nc(Or, function() {
            return Zt(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = je.transition, je.transition = null;
        var i = I;
        I = 1;
        var s = M;
        M |= 4, Ni.current = null, vf(e, n), Ka(n, e), Bd(yo), Fr = !!ho, yo = ho = null, e.current = n, gf(n), Kc(), M = s, I = i, je.transition = o
    } else e.current = n;
    if (vr && (vr = !1, rt = e, br = l), o = e.pendingLanes, o === 0 && (at = null), qc(n.stateNode), me(e, Q()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (Jr) throw Jr = !1, e = Do, Do = null, e;
    return br & 1 && e.tag !== 0 && Zt(), o = e.pendingLanes, o & 1 ? e === Fo ? Ln++ : (Ln = 0, Fo = e) : Ln = 0, yt(), null
}

function Zt() {
    if (rt !== null) {
        var e = Mu(br),
            t = je.transition,
            n = I;
        try {
            if (je.transition = null, I = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, br = 0, M & 6) throw Error(g(331));
                var l = M;
                for (M |= 4, S = e.current; S !== null;) {
                    var o = S,
                        i = o.child;
                    if (S.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var d = s[u];
                                for (S = d; S !== null;) {
                                    var y = S;
                                    switch (y.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zn(8, y, o)
                                    }
                                    var h = y.child;
                                    if (h !== null) h.return = y, S = h;
                                    else
                                        for (; S !== null;) {
                                            y = S;
                                            var m = y.sibling,
                                                x = y.return;
                                            if (Ha(y), y === d) {
                                                S = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x, S = m;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var z = k.sibling;
                                        k.sibling = null, k = z
                                    } while (k !== null)
                                }
                            }
                            S = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, S = i;
                    else e: for (; S !== null;) {
                        if (o = S, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                zn(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, S = f;
                            break e
                        }
                        S = o.return
                    }
                }
                var c = e.current;
                for (S = c; S !== null;) {
                    i = S;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, S = p;
                    else e: for (i = c; S !== null;) {
                        if (s = S, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    dl(9, s)
                            }
                        } catch (N) {
                            B(s, s.return, N)
                        }
                        if (s === i) {
                            S = null;
                            break e
                        }
                        var v = s.sibling;
                        if (v !== null) {
                            v.return = s.return, S = v;
                            break e
                        }
                        S = s.return
                    }
                }
                if (M = l, yt(), We && typeof We.onPostCommitFiberRoot == "function") try {
                    We.onPostCommitFiberRoot(rl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            I = n, je.transition = t
        }
    }
    return !1
}

function $s(e, t, n) {
    t = rn(n, t), t = Ma(e, t, 1), e = ut(e, t, 1), t = ie(), e !== null && (qn(e, 1, t), me(e, t))
}

function B(e, t, n) {
    if (e.tag === 3) $s(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                $s(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = rn(n, e), e = Ia(t, e, 1), t = ut(t, e, 1), e = ie(), t !== null && (qn(t, 1, e), me(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Ef(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, Z === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - ji ? Et(e, 0) : Ei |= n), me(e, t)
}

function ec(e, t) {
    t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
    var n = ie();
    e = Xe(e, t), e !== null && (qn(e, t, n), me(e, n))
}

function jf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), ec(e, n)
}

function Cf(e, t) {
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
            throw Error(g(314))
    }
    r !== null && r.delete(t), ec(e, n)
}
var tc;
tc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, pf(e, t, n);
            de = !!(e.flags & 131072)
        }
    else de = !1, U && t.flags & 1048576 && oa(t, Hr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Pr(e, t), e = t.pendingProps;
            var l = bt(t, le.current);
            qt(t, n), l = gi(null, t, r, e, l, n);
            var o = xi();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, Br(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pi(t), l.updater = cl, t.stateNode = l, l._reactInternals = t, jo(t, r, e, n), t = Po(null, t, r, !0, o, n)) : (t.tag = 0, U && o && ii(t), oe(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Pr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Pf(r), e = Te(r, e), l) {
                    case 0:
                        t = _o(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ts(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ps(null, t, r, e, n);
                        break e;
                    case 14:
                        t = zs(null, t, r, Te(r.type, e), n);
                        break e
                }
                throw Error(g(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), _o(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ts(e, t, r, l, n);
        case 3:
            e: {
                if (Ua(t), e === null) throw Error(g(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                da(e, t),
                Kr(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = rn(Error(g(423)), t), t = Ls(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = rn(Error(g(424)), t), t = Ls(e, t, r, n, l);
                    break e
                } else
                    for (ye = st(t.stateNode.containerInfo.firstChild), ve = t, U = !0, Re = null, n = aa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (en(), r === l) {
                        t = Ge(e, t, n);
                        break e
                    }
                    oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return fa(t), e === null && So(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, vo(r, l) ? i = null : o !== null && vo(r, o) && (t.flags |= 32), Fa(e, t), oe(e, t, i, n), t.child;
        case 6:
            return e === null && So(t), null;
        case 13:
            return Wa(e, t, n);
        case 4:
            return mi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tn(t, null, r, n) : oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ps(e, t, r, l, n);
        case 7:
            return oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, O(Qr, r._currentValue), r._currentValue = i, o !== null)
                    if (Oe(o.value, i)) {
                        if (o.children === l.children && !fe.current) {
                            t = Ge(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var s = o.dependencies;
                            if (s !== null) {
                                i = o.child;
                                for (var u = s.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = Qe(-1, n & -n), u.tag = 2;
                                            var d = o.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var y = d.pending;
                                                y === null ? u.next = u : (u.next = y.next, y.next = u), d.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), No(o.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(g(341));
                                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), No(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                oe(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, qt(t, n), l = Ce(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), zs(e, t, r, l, n);
        case 15:
            return Oa(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Pr(e, t), t.tag = 1, pe(r) ? (e = !0, Br(t)) : e = !1, qt(t, n), Ra(t, r, l), jo(t, r, l, n), Po(null, t, r, !0, e, n);
        case 19:
            return $a(e, t, n);
        case 22:
            return Da(e, t, n)
    }
    throw Error(g(156, t.tag))
};

function nc(e, t) {
    return zu(e, t)
}

function _f(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ee(e, t, n, r) {
    return new _f(e, t, n, r)
}

function zi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Pf(e) {
    if (typeof e == "function") return zi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Xo) return 11;
        if (e === Go) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Lr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") zi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Ot:
            return jt(n.children, l, o, t);
        case Ko:
            i = 8, l |= 8;
            break;
        case Xl:
            return e = Ee(12, n, t, l | 2), e.elementType = Xl, e.lanes = o, e;
        case Gl:
            return e = Ee(13, n, t, l), e.elementType = Gl, e.lanes = o, e;
        case ql:
            return e = Ee(19, n, t, l), e.elementType = ql, e.lanes = o, e;
        case fu:
            return pl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case cu:
                    i = 10;
                    break e;
                case du:
                    i = 9;
                    break e;
                case Xo:
                    i = 11;
                    break e;
                case Go:
                    i = 14;
                    break e;
                case Je:
                    i = 16, r = null;
                    break e
            }
            throw Error(g(130, e == null ? e : typeof e, ""))
    }
    return t = Ee(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function jt(e, t, n, r) {
    return e = Ee(7, e, r, t), e.lanes = n, e
}

function pl(e, t, n, r) {
    return e = Ee(22, e, r, t), e.elementType = fu, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ql(e, t, n) {
    return e = Ee(6, e, null, t), e.lanes = n, e
}

function Yl(e, t, n) {
    return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function zf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cl(0), this.expirationTimes = Cl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ti(e, t, n, r, l, o, i, s, u) {
    return e = new zf(e, t, n, s, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ee(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, pi(o), e
}

function Tf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: It,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function rc(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (Rt(e) !== e || e.tag !== 1) throw Error(g(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(g(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n)) return ra(e, n, t)
    }
    return t
}

function lc(e, t, n, r, l, o, i, s, u) {
    return e = Ti(n, r, !0, e, l, o, i, s, u), e.context = rc(null), n = e.current, r = ie(), l = ct(n), o = Qe(r, l), o.callback = t ?? null, ut(n, o, l), e.current.lanes = l, qn(e, l, r), me(e, r), e
}

function ml(e, t, n, r) {
    var l = t.current,
        o = ie(),
        i = ct(l);
    return n = rc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ut(l, t, i), e !== null && (Ie(e, l, i, o), jr(e, l, i)), i
}

function tl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function As(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Li(e, t) {
    As(e, t), (e = e.alternate) && As(e, t)
}

function Lf() {
    return null
}
var oc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ri(e) {
    this._internalRoot = e
}
hl.prototype.render = Ri.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(g(409));
    ml(e, t, null, null)
};
hl.prototype.unmount = Ri.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tt(function() {
            ml(null, e, null, null)
        }), t[Ke] = null
    }
};

function hl(e) {
    this._internalRoot = e
}
hl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Du();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Uu(e)
    }
};

function Mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function yl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Bs() {}

function Rf(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var d = tl(i);
                o.call(d)
            }
        }
        var i = lc(t, r, e, 0, null, !1, !1, "", Bs);
        return e._reactRootContainer = i, e[Ke] = i.current, $n(e.nodeType === 8 ? e.parentNode : e), Tt(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var d = tl(u);
            s.call(d)
        }
    }
    var u = Ti(e, 0, !1, null, null, !1, !1, "", Bs);
    return e._reactRootContainer = u, e[Ke] = u.current, $n(e.nodeType === 8 ? e.parentNode : e), Tt(function() {
        ml(t, u, n, r)
    }), u
}

function vl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var s = l;
            l = function() {
                var u = tl(i);
                s.call(u)
            }
        }
        ml(t, i, e, l)
    } else i = Rf(n, t, e, l, r);
    return tl(i)
}
Iu = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = kn(t.pendingLanes);
                n !== 0 && (Jo(t, n | 1), me(t, Q()), !(M & 6) && (ln = Q() + 500, yt()))
            }
            break;
        case 13:
            Tt(function() {
                var r = Xe(e, 1);
                if (r !== null) {
                    var l = ie();
                    Ie(r, e, 1, l)
                }
            }), Li(e, 1)
    }
};
bo = function(e) {
    if (e.tag === 13) {
        var t = Xe(e, 134217728);
        if (t !== null) {
            var n = ie();
            Ie(t, e, 134217728, n)
        }
        Li(e, 134217728)
    }
};
Ou = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Xe(e, t);
        if (n !== null) {
            var r = ie();
            Ie(n, e, t, r)
        }
        Li(e, t)
    }
};
Du = function() {
    return I
};
Fu = function(e, t) {
    var n = I;
    try {
        return I = e, t()
    } finally {
        I = n
    }
};
io = function(e, t, n) {
    switch (t) {
        case "input":
            if (bl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = sl(r);
                        if (!l) throw Error(g(90));
                        mu(r), bl(r, l)
                    }
                }
            }
            break;
        case "textarea":
            yu(e, n);
            break;
        case "select":
            t = n.value, t != null && Yt(e, !!n.multiple, t, !1)
    }
};
Nu = Ci;
Eu = Tt;
var Mf = {
        usingClientEntryPoint: !1,
        Events: [Jn, Wt, sl, ku, Su, Ci]
    },
    gn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    If = {
        bundleType: gn.bundleType,
        version: gn.version,
        rendererPackageName: gn.rendererPackageName,
        rendererConfig: gn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: qe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = _u(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: gn.findFiberByHostInstance || Lf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gr.isDisabled && gr.supportsFiber) try {
        rl = gr.inject(If), We = gr
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf;
xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mi(t)) throw Error(g(200));
    return Tf(e, t, null, n)
};
xe.createRoot = function(e, t) {
    if (!Mi(e)) throw Error(g(299));
    var n = !1,
        r = "",
        l = oc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ti(e, 1, !1, null, null, n, !1, r, l), e[Ke] = t.current, $n(e.nodeType === 8 ? e.parentNode : e), new Ri(t)
};
xe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
    return e = _u(t), e = e === null ? null : e.stateNode, e
};
xe.flushSync = function(e) {
    return Tt(e)
};
xe.hydrate = function(e, t, n) {
    if (!yl(t)) throw Error(g(200));
    return vl(null, e, t, !0, n)
};
xe.hydrateRoot = function(e, t, n) {
    if (!Mi(e)) throw Error(g(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = oc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = lc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ke] = t.current, $n(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new hl(t)
};
xe.render = function(e, t, n) {
    if (!yl(t)) throw Error(g(200));
    return vl(null, e, t, !1, n)
};
xe.unmountComponentAtNode = function(e) {
    if (!yl(e)) throw Error(g(40));
    return e._reactRootContainer ? (Tt(function() {
        vl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ke] = null
        })
    }), !0) : !1
};
xe.unstable_batchedUpdates = Ci;
xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!yl(n)) throw Error(g(200));
    if (e == null || e._reactInternals === void 0) throw Error(g(38));
    return vl(e, t, n, !1, r)
};
xe.version = "18.3.1-next-f1338f8080-20240426";

function ic() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ic)
    } catch (e) {
        console.error(e)
    }
}
ic(), iu.exports = xe;
var Of = iu.exports,
    sc, Vs = Of;
sc = Vs.createRoot, Vs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Df = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    ke = (e, t) => {
        const n = ae.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: i,
            className: s = "",
            children: u,
            ...d
        }, y) => ae.createElement("svg", {
            ref: y,
            ...Df,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? Number(o) * 24 / Number(l) : o,
            className: ["lucide", `lucide-${Ff(e)}`, s].join(" "),
            ...d
        }, [...t.map(([h, m]) => ae.createElement(h, m)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = ke("ArrowUp", [
    ["path", {
        d: "m5 12 7-7 7 7",
        key: "hav0vg"
    }],
    ["path", {
        d: "M12 19V5",
        key: "x0mq9r"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = ke("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = ke("Cloud", [
    ["path", {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = ke("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = ke("Footprints", [
    ["path", {
        d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
        key: "1dudjm"
    }],
    ["path", {
        d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
        key: "l2t8xc"
    }],
    ["path", {
        d: "M16 17h4",
        key: "1dejxt"
    }],
    ["path", {
        d: "M4 13h4",
        key: "1bwh8b"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = ke("Rocket", [
    ["path", {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz"
    }],
    ["path", {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk"
    }],
    ["path", {
        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
        key: "1f8sc4"
    }],
    ["path", {
        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
        key: "qeys4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = ke("Send", [
    ["path", {
        d: "m22 2-7 20-4-9-9-4Z",
        key: "1q3vgg"
    }],
    ["path", {
        d: "M22 2 11 13",
        key: "nzbqef"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = ke("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = ke("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = ke("Target", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = ke("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = ke("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = ke("Zap", [
    ["polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        key: "45s27k"
    }]
]);

function Qf() {
    const [e, t] = ae.useState(0), [n, r] = ae.useState(!1), [l, o] = ae.useState(!1), [i, s] = ae.useState(!1), u = new Date().getFullYear(), d = ae.useRef(null), y = ae.useRef(null);
    ae.useEffect(() => {
        const z = () => {
            t(window.scrollY)
        };
        return window.addEventListener("scroll", z, {
            passive: !0
        }), () => window.removeEventListener("scroll", z)
    }, []), ae.useEffect(() => (n || l ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
        document.body.style.overflow = ""
    }), [n, l]);
    const h = z => {
            s(z.target.scrollTop > 300)
        },
        m = z => {
            z.current && z.current.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
        x = (z, f) => {
            z.target === z.currentTarget && f(!1)
        },
        w = {
            transform: `translate3d(0, ${e*.1}px, 0)`,
            backgroundPosition: "center -200px",
            backgroundSize: "140% auto",
            top: "-100px",
            height: "calc(100% + 200px)"
        },
        k = {
            transform: `translate3d(0, ${e*.05}px, 0)`,
            backgroundPosition: "center -150px",
            backgroundSize: "130% auto",
            top: "-100px",
            height: "calc(100% + 200px)"
        };
    return a.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-teal-400 to-purple-400",
        children: [a.jsx("header", {
            className: "relative pt-16 pb-32 px-4",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto text-center",
                children: [a.jsx("img", {
                    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&q=80&w=2000",
                    alt: "Misty forest background",
                    className: "absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-20 -z-10"
                }), a.jsx("img", {
                    src: "https://i.imgur.com/CUkiHil.png",
                    alt: "SaaSquatch Logo",
                    className: "w-96 mx-auto mb-8 animate-float"
                }), a.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold text-shimmer mb-6 drop-shadow-lg scale-in leading-loose px-4 py-4",
                    children: "Where Bigfoot Meets Big Ideas"
                }), a.jsx("p", {
                    className: "text-2xl text-white mb-8 italic drop-shadow scale-in",
                    children: "(And We're Definitely Real, Unlike Our Mascot's Cousin)"
                }), a.jsx(Uf, {
                    className: "w-8 h-8 mx-auto text-white animate-bounce drop-shadow-lg"
                })]
            })
        }), a.jsxs("section", {
            className: "py-20 px-4 bg-white relative overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-cover opacity-30",
                style: {
                    backgroundImage: "url(https://i.imgur.com/BK58wVg.jpeg)",
                    ...w
                }
            }), a.jsxs("div", {
                className: "max-w-4xl mx-auto text-center relative z-10",
                children: [a.jsx("h2", {
                    className: "text-4xl font-bold text-pink-500 mb-8 hover:text-pink-600 transition-colors",
                    children: "Our Mission"
                }), a.jsx("p", {
                    className: "text-lg text-gray-700 leading-relaxed mb-6 hover:text-gray-900 transition-colors backdrop-blur-sm bg-white/80 p-6 rounded-lg",
                    children: "At SaaSquatch, we believe the best software solutions aren't just built—they're unearthed. Like the elusive Sasquatch, your company's potential is out there, lurking in the foggy wilderness of the internet."
                }), a.jsx("p", {
                    className: "text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors backdrop-blur-sm bg-white/80 p-6 rounded-lg",
                    children: `We exist to turn your "Wait, does this even work?" into "Holy $#!%, we're scaling!" Because let's face it: building a SaaS is like trying to assemble IKEA furniture in the dark. We bring the flashlight (and the meatballs).`
                })]
            })]
        }), a.jsx("section", {
            className: "py-32 px-4 bg-gradient-to-br from-yellow-100 to-purple-100",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsx("h2", {
                    className: "text-4xl font-bold text-center text-teal-600 mb-16 hover:text-teal-700 transition-colors",
                    children: "How We Do It"
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-20",
                    children: [a.jsxs("div", {
                        className: "card-hover bg-white p-8 rounded-xl shadow-lg",
                        children: [a.jsx(Af, {
                            className: "w-12 h-12 text-pink-500 mb-6 transform transition-transform group-hover:rotate-12"
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-pink-500 mb-4 hover:text-pink-600 transition-colors",
                            children: "Mythical Mentorship"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4",
                            children: 'Our team of cryptid-certified developers, caffeine-addicted designers, and API shamans will guide your SaaS from "awkward beta" to "legendary beast."'
                        }), a.jsxs("ul", {
                            className: "text-gray-600 space-y-2",
                            children: [a.jsxs("li", {
                                className: "flex items-center",
                                children: [a.jsx(Ys, {
                                    className: "w-4 h-4 mr-2 text-pink-400"
                                }), a.jsx("span", {
                                    children: "1-on-1 Expert Guidance"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-center",
                                children: [a.jsx(Vf, {
                                    className: "w-4 h-4 mr-2 text-pink-400"
                                }), a.jsx("span", {
                                    children: "Strategic Planning"
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "card-hover bg-white p-8 rounded-xl shadow-lg",
                        children: [a.jsx(Wf, {
                            className: "w-12 h-12 text-teal-500 mb-6 transform transition-transform group-hover:rotate-12"
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-teal-500 mb-4 hover:text-teal-600 transition-colors",
                            children: "Cloud Whispering"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4",
                            children: "We speak fluent AWS, Google Cloud, and Existential Dread. Let us tame your server costs and exorcise your bugs."
                        }), a.jsxs("ul", {
                            className: "text-gray-600 space-y-2",
                            children: [a.jsxs("li", {
                                className: "flex items-center",
                                children: [a.jsx(Xs, {
                                    className: "w-4 h-4 mr-2 text-teal-400"
                                }), a.jsx("span", {
                                    children: "Performance Optimization"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-center",
                                children: [a.jsx(Qs, {
                                    className: "w-4 h-4 mr-2 text-teal-400"
                                }), a.jsx("span", {
                                    children: "Security Hardening"
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "card-hover bg-white p-8 rounded-xl shadow-lg",
                        children: [a.jsx(Hf, {
                            className: "w-12 h-12 text-purple-500 mb-6 transform transition-transform group-hover:rotate-12"
                        }), a.jsx("h3", {
                            className: "text-2xl font-bold text-purple-500 mb-4 hover:text-purple-600 transition-colors",
                            children: "Sasquatch-Scale Support"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4",
                            children: "Stuck? We'll stomp through your codebase like a 9-foot-tall forest creature who just discovered Red Bull."
                        }), a.jsxs("ul", {
                            className: "text-gray-600 space-y-2",
                            children: [a.jsxs("li", {
                                className: "flex items-center",
                                children: [a.jsx($f, {
                                    className: "w-4 h-4 mr-2 text-purple-400"
                                }), a.jsx("span", {
                                    children: "24/7 Technical Support"
                                })]
                            }), a.jsxs("li", {
                                className: "flex items-center",
                                children: [a.jsx(xr, {
                                    className: "w-4 h-4 mr-2 text-purple-400"
                                }), a.jsx("span", {
                                    children: "Rapid Problem Resolution"
                                })]
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",
                    children: [a.jsxs("div", {
                        className: "bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md",
                        children: [a.jsx("h4", {
                            className: "text-lg font-semibold text-teal-600 mb-3",
                            children: "Our Process"
                        }), a.jsxs("ul", {
                            className: "space-y-3",
                            children: [a.jsxs("li", {
                                className: "flex items-center text-gray-700",
                                children: [a.jsx("span", {
                                    className: "w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3",
                                    children: "1"
                                }), "Discovery & Planning"]
                            }), a.jsxs("li", {
                                className: "flex items-center text-gray-700",
                                children: [a.jsx("span", {
                                    className: "w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3",
                                    children: "2"
                                }), "Strategic Implementation"]
                            }), a.jsxs("li", {
                                className: "flex items-center text-gray-700",
                                children: [a.jsx("span", {
                                    className: "w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3",
                                    children: "3"
                                }), "Launch & Scale"]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md",
                        children: [a.jsx("h4", {
                            className: "text-lg font-semibold text-pink-600 mb-3",
                            children: "Our Guarantee"
                        }), a.jsxs("ul", {
                            className: "space-y-3",
                            children: [a.jsxs("li", {
                                className: "flex items-center text-gray-700",
                                children: [a.jsx(Ys, {
                                    className: "w-5 h-5 text-pink-400 mr-3"
                                }), "100% Satisfaction or Your Berries Back"]
                            }), a.jsxs("li", {
                                className: "flex items-center text-gray-700",
                                children: [a.jsx(Qs, {
                                    className: "w-5 h-5 text-pink-400 mr-3"
                                }), "Enterprise-Grade Security"]
                            }), a.jsxs("li", {
                                className: "flex items-center text-gray-700",
                                children: [a.jsx(Xs, {
                                    className: "w-5 h-5 text-pink-400 mr-3"
                                }), "Lightning-Fast Response Times"]
                            })]
                        })]
                    })]
                })]
            })
        }), a.jsxs("section", {
            className: "py-20 px-4 bg-white relative overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 bg-cover opacity-30",
                style: {
                    backgroundImage: "url(https://i.imgur.com/4WXMvUP.jpeg)",
                    ...k
                }
            }), a.jsxs("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: [a.jsx("h2", {
                    className: "text-4xl font-bold text-center text-teal-600 mb-16 hover:text-teal-700 transition-colors",
                    children: "Why Choose Us?"
                }), a.jsxs("div", {
                    className: "space-y-8",
                    children: [a.jsxs("div", {
                        className: "flex items-start card-hover p-4 rounded-lg bg-white/90 backdrop-blur-sm",
                        children: [a.jsx(xr, {
                            className: "w-8 h-8 text-pink-500 mt-1 flex-shrink-0"
                        }), a.jsxs("div", {
                            className: "ml-4",
                            children: [a.jsx("h3", {
                                className: "text-xl font-bold text-pink-500 mb-2 hover:text-pink-600 transition-colors",
                                children: "Footprints, Not Fingerprints"
                            }), a.jsx("p", {
                                className: "text-gray-700",
                                children: "We leave no trace... except for the trail of thriving startups."
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-start card-hover p-4 rounded-lg bg-white/90 backdrop-blur-sm",
                        children: [a.jsx(xr, {
                            className: "w-8 h-8 text-teal-500 mt-1 flex-shrink-0"
                        }), a.jsxs("div", {
                            className: "ml-4",
                            children: [a.jsx("h3", {
                                className: "text-xl font-bold text-teal-500 mb-2 hover:text-teal-600 transition-colors",
                                children: "100% Cryptid-Approved"
                            }), a.jsx("p", {
                                className: "text-gray-700",
                                children: "Our mascot, Sassy, once scared a venture capitalist into signing a term sheet. True story."
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-start card-hover p-4 rounded-lg bg-white/90 backdrop-blur-sm",
                        children: [a.jsx(xr, {
                            className: "w-8 h-8 text-purple-500 mt-1 flex-shrink-0"
                        }), a.jsxs("div", {
                            className: "ml-4",
                            children: [a.jsx("h3", {
                                className: "text-xl font-bold text-purple-500 mb-2 hover:text-purple-600 transition-colors",
                                children: "No-Nonsense (But All-Fun)"
                            }), a.jsx("p", {
                                className: "text-gray-700",
                                children: "Board meetings involve fewer spreadsheets and more interpretive dance breaks."
                            })]
                        })]
                    })]
                })]
            })]
        }), a.jsxs("section", {
            className: "py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 text-white relative overflow-hidden",
            children: [a.jsx("div", {
                className: "absolute inset-0 shimmer"
            }), a.jsxs("div", {
                className: "max-w-4xl mx-auto text-center relative z-10",
                children: [a.jsx("h2", {
                    className: "text-4xl font-bold mb-8",
                    children: "Join the Herd"
                }), a.jsx("p", {
                    className: "text-xl mb-12",
                    children: "Ready to stop chasing shadows? Let's build something your competitors will swear doesn't exist... until it's eating their lunch."
                }), a.jsxs("div", {
                    className: "max-w-md mx-auto",
                    children: [a.jsxs("div", {
                        className: "flex gap-4",
                        children: [a.jsx("input", {
                            type: "email",
                            placeholder: "Enter your email",
                            className: "flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 transition-shadow"
                        }), a.jsxs("button", {
                            className: "hover-gradient text-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 bg-yellow-400 font-bold",
                            children: [a.jsx(Bf, {
                                className: "w-5 h-5"
                            }), a.jsx("span", {
                                children: "Let's Talk"
                            })]
                        })]
                    }), a.jsx("p", {
                        className: "text-sm mt-4 text-white opacity-90",
                        children: "P.S. We also accept payment in trail mix and Yeti sighting coordinates."
                    })]
                })]
            })]
        }), a.jsx("footer", {
            className: "bg-gray-900 text-white py-12 px-4",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [a.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center mb-8",
                    children: [a.jsx("div", {
                        className: "mb-6 md:mb-0",
                        children: a.jsx("img", {
                            src: "https://i.imgur.com/CUkiHil.png",
                            alt: "SaaSquatch Logo",
                            className: "w-32 h-auto"
                        })
                    }), a.jsxs("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [a.jsx("button", {
                            onClick: () => r(!0),
                            className: "text-white hover:text-yellow-300 transition-colors",
                            children: "Terms of Service"
                        }), a.jsx("button", {
                            onClick: () => o(!0),
                            className: "text-white hover:text-yellow-300 transition-colors",
                            children: "Privacy Policy"
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "border-t border-gray-700 pt-6 text-center",
                    children: [a.jsx("p", {
                        className: "hover:scale-105 transition-transform inline-block mb-4",
                        children: "SaaSquatch: We see your vision. Even if it's blurry. 🦍✨"
                    }), a.jsxs("p", {
                        className: "text-gray-400 text-sm",
                        children: ["© ", u, " SaaSquatch Technologies. All rights reserved."]
                    })]
                })]
            })
        }), n && a.jsx("div", {
            className: "fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm transition-opacity duration-300",
            onClick: z => x(z, r),
            children: a.jsxs("div", {
                ref: d,
                className: "bg-white text-gray-800 rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto p-0 shadow-2xl transition-transform duration-300 transform scale-in w-full relative",
                onScroll: h,
                children: [a.jsxs("div", {
                    className: "sticky top-0 bg-white z-10 px-8 py-6 border-b border-gray-100 flex justify-between items-center",
                    children: [a.jsx("h2", {
                        className: "text-2xl font-bold text-teal-600",
                        children: "Terms of Service"
                    }), a.jsx("button", {
                        onClick: () => r(!1),
                        className: "text-gray-400 hover:text-teal-600 transition-colors rounded-full p-2 hover:bg-gray-100",
                        "aria-label": "Close",
                        children: a.jsx(Ks, {
                            className: "w-6 h-6"
                        })
                    })]
                }), a.jsx("div", {
                    className: "px-8 py-6",
                    children: a.jsxs("div", {
                        className: "prose max-w-none",
                        children: [a.jsxs("p", {
                            className: "text-gray-500 mb-8",
                            children: ["Last updated: ", u, "-01-01"]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "1. Acceptance of Terms"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "By accessing or using SaaSquatch's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "2. Use License"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "Permission is granted to temporarily access the materials on SaaSquatch's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:"
                        }), a.jsxs("ul", {
                            className: "list-disc pl-6 space-y-2 mb-6 text-gray-700",
                            children: [a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Modify or copy the materials"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Use the materials for any commercial purpose"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Attempt to decompile or reverse engineer any software contained on SaaSquatch's website"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Remove any copyright or other proprietary notations from the materials"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: 'Transfer the materials to another person or "mirror" the materials on any other server'
                            })]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "3. Disclaimer"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "The materials on SaaSquatch's website are provided on an 'as is' basis. SaaSquatch makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "4. Limitations"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "In no event shall SaaSquatch or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SaaSquatch's website, even if SaaSquatch or a SaaSquatch authorized representative has been notified orally or in writing of the possibility of such damage."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "5. Revisions and Errata"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "The materials appearing on SaaSquatch's website could include technical, typographical, or photographic errors. SaaSquatch does not warrant that any of the materials on its website are accurate, complete or current. SaaSquatch may make changes to the materials contained on its website at any time without notice."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "6. Links"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "SaaSquatch has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SaaSquatch of the site. Use of any such linked website is at the user's own risk."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "7. Modifications"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "SaaSquatch may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-teal-700 mt-8 mb-4",
                            children: "8. Governing Law"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
                        })]
                    })
                }), i && a.jsx("button", {
                    onClick: () => m(d),
                    className: "fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 z-50",
                    "aria-label": "Scroll to top",
                    children: a.jsx(Hs, {
                        className: "w-5 h-5"
                    })
                })]
            })
        }), l && a.jsx("div", {
            className: "fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm transition-opacity duration-300",
            onClick: z => x(z, o),
            children: a.jsxs("div", {
                ref: y,
                className: "bg-white text-gray-800 rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto p-0 shadow-2xl transition-transform duration-300 transform scale-in w-full relative",
                onScroll: h,
                children: [a.jsxs("div", {
                    className: "sticky top-0 bg-white z-10 px-8 py-6 border-b border-gray-100 flex justify-between items-center",
                    children: [a.jsx("h2", {
                        className: "text-2xl font-bold text-pink-500",
                        children: "Privacy Policy"
                    }), a.jsx("button", {
                        onClick: () => o(!1),
                        className: "text-gray-400 hover:text-pink-500 transition-colors rounded-full p-2 hover:bg-gray-100",
                        "aria-label": "Close",
                        children: a.jsx(Ks, {
                            className: "w-6 h-6"
                        })
                    })]
                }), a.jsx("div", {
                    className: "px-8 py-6",
                    children: a.jsxs("div", {
                        className: "prose max-w-none",
                        children: [a.jsxs("p", {
                            className: "text-gray-500 mb-8",
                            children: ["Last updated: ", u, "-01-01"]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "1. Introduction"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "Your privacy is important to us. It is SaaSquatch's policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "2. Information We Collect"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. We collect information in three ways: if and when you provide information to us, automatically through operating our services, and from outside sources."
                        }), a.jsx("h4", {
                            className: "text-lg font-semibold text-pink-500 mt-6 mb-3",
                            children: "2.1 Information You Provide to Us"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "We collect information that you provide to us. The amount and type of information depends on the context and how we use the information. Here are some examples:"
                        }), a.jsxs("ul", {
                            className: "list-disc pl-6 space-y-2 mb-6 text-gray-700",
                            children: [a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Basic Account Information: We ask for basic information from you in order to set up your account."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Public Profile Information: If you have an account with us, we collect the information that you provide for your public profile."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Transaction and Billing Information: If you buy something from us, you will provide additional personal and payment information that is required to process the transaction and your payment."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Communications with Us: You may also provide us information when you respond to surveys, communicate with our support team, or post a question in our public forums."
                            })]
                        }), a.jsx("h4", {
                            className: "text-lg font-semibold text-pink-500 mt-6 mb-3",
                            children: "2.2 Information We Collect Automatically"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "We also collect some information automatically:"
                        }), a.jsxs("ul", {
                            className: "list-disc pl-6 space-y-2 mb-6 text-gray-700",
                            children: [a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Log Information: Like most online service providers, we collect information that web browsers, mobile devices, and servers typically make available, such as the browser type, IP address, unique device identifiers, language preference, referring site, the date and time of access, operating system, and mobile network information."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Usage Information: We collect information about your usage of our services. We use this information to, for example, provide our services to you, as well as get insights on how people use our services, so we can make our services better."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Location Information: We may determine the approximate location of your device from your IP address. We collect and use this information to, for example, calculate how many people visit our services from certain geographic regions."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Information from Cookies & Other Technologies: A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Pixel tags (also called web beacons) are small blocks of code placed on websites and emails."
                            })]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "3. How We Use Information"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "We use information about you as mentioned above and for the purposes listed below:"
                        }), a.jsxs("ul", {
                            className: "list-disc pl-6 space-y-2 mb-6 text-gray-700",
                            children: [a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To provide our services—for example, to set up and maintain your account, host your website, backup and restore your website, or charge you for any of our paid services;"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To further develop and improve our services—for example by adding new features that we think our users will enjoy;"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To monitor and analyze trends and better understand how users interact with our services, which helps us improve our services and make them easier to use;"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To measure, gauge, and improve the effectiveness of our advertising, and better understand user retention and attrition;"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To monitor and prevent any problems with our services, protect the security of our services, detect and prevent fraudulent transactions and other illegal activities, fight spam, and protect the rights and property of SaaSquatch and others;"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To communicate with you, for example through an email, about offers and promotions offered by SaaSquatch and others we think will be of interest to you, solicit your feedback, or keep you up to date on SaaSquatch and our products; and"
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To personalize your experience using our services, provide content recommendations, target our marketing messages to groups of our users, and serve relevant advertisements."
                            })]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "4. Sharing Information"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "We do not sell our users' private personal information. We share information about you in the limited circumstances spelled out below and with appropriate safeguards on your privacy:"
                        }), a.jsxs("ul", {
                            className: "list-disc pl-6 space-y-2 mb-6 text-gray-700",
                            children: [a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Subsidiaries, Employees, and Independent Contractors: We may disclose information about you to our subsidiaries, our employees, and individuals who are our independent contractors that need to know the information in order to help us provide our services or to process the information on our behalf."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Third Party Vendors: We may share information about you with third party vendors who need to know information about you in order to provide their services to us, or to provide their services to you."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "As Required by Law: We may disclose information about you in response to a subpoena, court order, or other governmental request."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "To Protect Rights, Property, and Others: We may disclose information about you when we believe in good faith that disclosure is reasonably necessary to protect the property or rights of SaaSquatch, third parties, or the public at large."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Business Transfers: In connection with any merger, sale of company assets, or acquisition of all or a portion of our business by another company, or in the unlikely event that SaaSquatch goes out of business or enters bankruptcy, user information would likely be one of the assets that is transferred or acquired by a third party."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "With Your Consent: We may share and disclose information with your consent or at your direction."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Aggregated or De-Identified Information: We may share information that has been aggregated or reasonably de-identified, so that the information could not reasonably be used to identify you."
                            })]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "5. Security"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so, such as monitoring our services for potential vulnerabilities and attacks."
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "6. Your Rights"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-4 leading-relaxed",
                            children: "You have several choices available when it comes to information about you:"
                        }), a.jsxs("ul", {
                            className: "list-disc pl-6 space-y-2 mb-6 text-gray-700",
                            children: [a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Limit the Information that You Provide: If you have an account with us, you can choose not to provide the optional account information, profile information, and transaction and billing information."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Opt-Out of Marketing Communications: You may opt out of receiving promotional communications from us by using the unsubscribe link within each email, or by contacting us as provided below to have your contact information removed from our promotional email list or registration database."
                            }), a.jsx("li", {
                                className: "leading-relaxed",
                                children: "Close Your Account: If you no longer want to use our services, you can close your account with us. Please keep in mind that we may continue to retain your information after closing your account, as described in this Privacy Policy—for example, when that information is reasonably needed to comply with (or demonstrate our compliance with) legal obligations such as law enforcement requests, or reasonably needed for our legitimate business interests."
                            })]
                        }), a.jsx("h3", {
                            className: "text-xl font-semibold text-pink-600 mt-8 mb-4",
                            children: "7. Contact Information"
                        }), a.jsx("p", {
                            className: "text-gray-700 mb-6 leading-relaxed",
                            children: "If you have any questions about this Privacy Policy, please contact us through our website or at privacy@saasquatch.com."
                        })]
                    })
                }), i && a.jsx("button", {
                    onClick: () => m(y),
                    className: "fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 z-50",
                    "aria-label": "Scroll to top",
                    children: a.jsx(Hs, {
                        className: "w-5 h-5"
                    })
                })]
            })
        })]
    })
}
sc(document.getElementById("root")).render(a.jsx(ae.StrictMode, {
    children: a.jsx(Qf, {})
}));