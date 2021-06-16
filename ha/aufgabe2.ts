const ee = [
  [
    {
      from: "a",
      to: "b",
    },
    {
      from: "b",
      to: "c",
    },
    {
      from: "b",
      to: "d",
    },
  ],
  [
    {
      from: "a",
      to: "b",
    },
    {
      from: "b",
      to: "d",
    },
  ],
  [
    {
      from: "b",
      to: "c",
    },
    {
      from: "b",
      to: "d",
    },
  ],
];

interface Railway {
  from: string;
  to: string;
}

type Plan = Railway[][];
type Path = string[];

const ubahnBfs = (
  t: number,
  e: Plan,
  i: number,
  path: Path,
  z1: string,
  z2: string
): Path[] => {
  const last = path[path.length - 1];
  if (last === z1 || last === z2) return [path];
  if (i >= e.length) return [];

  let paths: Path[] = [];
  e.forEach((en, index) => {
    if (index >= i) {
      en.forEach((enn) => {
        if (enn.from == last) {
          let newPath = [];
          for (let j = 0; j < index - i; j++) newPath = [...newPath, last];
          paths = [
            ...paths,
            ...ubahnBfs(t, e, index + 1, [...path, ...newPath, enn.to], z1, z2),
          ];
        }
      });
    }
  });
  return paths;
};

const isCompatible = (e: Plan, s: string, z1: string, z2: string): boolean => {
  const paths = ubahnBfs(e.length, e, 0, [s], z1, z2);
  console.log(paths);
  let result = true;

  paths.forEach((path) => {
    paths.forEach((secondPath) => {
      // console.log(path, secondPath);
      if (path[path.length] === secondPath[secondPath.length]) return;
      for (let i = 1; i < Math.max(path.length, secondPath.length); i++) {
        if (path[i] == secondPath[i]) return;
      }
      result = false;
    });
    if (!result) return;
  });

  return result;
};

console.log(isCompatible(ee, "a", "c", "d"));
