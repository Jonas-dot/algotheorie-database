type Vertex = string;

interface Edge {
  from: Vertex;
  to: Vertex;
}

class BalanceTree {
  n: number;
  edges: Edge[];
  vertecies: Vertex[];
  result?: Vertex;

  constructor(vertecies: Vertex[], edges: Edge[]) {
    this.edges = edges;
    this.vertecies = vertecies;
    this.n = Math.ceil(vertecies.length / 2);
  }

  getEdges = (vertex: Vertex): Edge[] => {
    return this.edges.filter(
      (edge) => edge.from === vertex || edge.to === vertex
    );
  };

  balanceTree = (): Vertex => {
    this.balanceTreeRecursive(this.vertecies[0], null);
    return this.result;
  };

  balanceTreeRecursive = (vertex: Vertex, fromVertex?: Vertex): number => {
    let sum = 1;

    const currEdges = this.getEdges(vertex).filter(
      (currEdge) => currEdge.from !== fromVertex && currEdge.to !== fromVertex
    );

    currEdges.forEach((edge) => {
      const currVertex = vertex === edge.from ? edge.to : edge.from;
      sum += this.balanceTreeRecursive(currVertex, vertex);
    });

    if (!this.result && sum >= this.n) this.result = vertex;

    return sum;
  };
}

const v = [
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

const e: Edge[] = [
  {
    from: "a",
    to: "b",
  },
  {
    from: "a",
    to: "c",
  },
  {
    from: "a",
    to: "d",
  },
  {
    from: "b",
    to: "j",
  },
  {
    from: "b",
    to: "k",
  },
  {
    from: "j",
    to: "e",
  },
  {
    from: "j",
    to: "f",
  },
  {
    from: "j",
    to: "g",
  },
  {
    from: "j",
    to: "h",
  },
  {
    from: "j",
    to: "i",
  },
  {
    from: "k",
    to: "l",
  },
  {
    from: "k",
    to: "m",
  },
  {
    from: "k",
    to: "n",
  },
  {
    from: "o",
    to: "p",
  },
  {
    from: "b",
    to: "o",
  },
  {
    from: "o",
    to: "q",
  },
];

console.log(new BalanceTree(v, e).balanceTree());
