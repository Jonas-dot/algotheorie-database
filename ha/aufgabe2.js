var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var ee = [
    [
        {
            from: "a",
            to: "b"
        },
        {
            from: "b",
            to: "c"
        },
        {
            from: "b",
            to: "d"
        },
    ],
    [
        {
            from: "a",
            to: "b"
        },
        {
            from: "b",
            to: "d"
        },
    ],
    [
        {
            from: "b",
            to: "c"
        },
        {
            from: "b",
            to: "d"
        },
    ],
];
var ubahnBfs = function (t, e, i, path, z1, z2) {
    var last = path[path.length - 1];
    if (last === z1 || last === z2)
        return [path];
    if (i >= e.length)
        return [];
    var paths = [];
    e.forEach(function (en, index) {
        if (index >= i) {
            en.forEach(function (enn) {
                if (enn.from == last) {
                    var newPath = [];
                    for (var j = 0; j < index - i; j++)
                        newPath = __spreadArray(__spreadArray([], newPath), [last]);
                    paths = __spreadArray(__spreadArray([], paths), ubahnBfs(t, e, index + 1, __spreadArray(__spreadArray(__spreadArray([], path), newPath), [enn.to]), z1, z2));
                }
            });
        }
    });
    return paths;
};
var isCompatible = function (e, s, z1, z2) {
    var paths = ubahnBfs(e.length, e, 0, [s], z1, z2);
    console.log(paths);
    var result = true;
    paths.forEach(function (path) {
        paths.forEach(function (secondPath) {
            // console.log(path, secondPath);
            if (path[path.length] === secondPath[secondPath.length])
                return;
            for (var i = 1; i < Math.max(path.length, secondPath.length); i++) {
                if (path[i] == secondPath[i])
                    return;
            }
            result = false;
        });
        if (!result)
            return;
    });
    return result;
};
console.log(isCompatible(ee, "a", "c", "d"));
