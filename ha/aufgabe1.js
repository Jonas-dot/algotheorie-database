var BalanceTree = /** @class */ (function () {
    function BalanceTree(vertecies, edges) {
        var _this = this;
        this.getEdges = function (vertex) {
            return _this.edges.filter(function (edge) { return edge.from === vertex || edge.to === vertex; });
        };
        this.balanceTree = function () {
            _this.balanceTreeRecursive(_this.vertecies[0], null);
            return _this.result;
        };
        this.balanceTreeRecursive = function (vertex, fromVertex) {
            var sum = 1;
            var currEdges = _this.getEdges(vertex).filter(function (currEdge) { return currEdge.from !== fromVertex && currEdge.to !== fromVertex; });
            currEdges.forEach(function (edge) {
                var currVertex = vertex === edge.from ? edge.to : edge.from;
                sum += _this.balanceTreeRecursive(currVertex, vertex);
            });
            if (!_this.result && sum >= _this.n)
                _this.result = vertex;
            return sum;
        };
        this.edges = edges;
        this.vertecies = vertecies;
        this.n = Math.ceil(vertecies.length / 2);
    }
    return BalanceTree;
}());
var v = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
];
var e = [
    {
        from: "a",
        to: "b"
    },
    {
        from: "a",
        to: "c"
    },
    {
        from: "a",
        to: "d"
    },
    {
        from: "b",
        to: "j"
    },
    {
        from: "b",
        to: "k"
    },
    {
        from: "j",
        to: "e"
    },
    {
        from: "j",
        to: "f"
    },
    {
        from: "j",
        to: "g"
    },
    {
        from: "j",
        to: "h"
    },
    {
        from: "j",
        to: "i"
    },
    {
        from: "k",
        to: "l"
    },
    {
        from: "k",
        to: "m"
    },
    {
        from: "k",
        to: "n"
    },
    {
        from: "o",
        to: "p"
    },
    {
        from: "b",
        to: "o"
    },
    {
        from: "o",
        to: "q"
    },
];
console.log(new BalanceTree(v, e).balanceTree());
