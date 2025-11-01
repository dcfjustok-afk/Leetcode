var calcEquation = function(equations, values, queries) {
    const hashmap = new Map();

    // 构建双向图
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        if (!hashmap.has(a)) hashmap.set(a, []);
        if (!hashmap.has(b)) hashmap.set(b, []);
        hashmap.get(a).push([b, val]);
        hashmap.get(b).push([a, 1 / val]);
    }

    // DFS 搜索
    const dfs = (src, dest, visited, acc) => {
        if (!hashmap.has(src) || !hashmap.has(dest)) return -1.0;
        if (src === dest) return acc;

        visited.add(src);
        for (const [next, weight] of hashmap.get(src)) {
            if (!visited.has(next)) {
                const result = dfs(next, dest, visited, acc * weight);
                if (result !== -1.0) return result;
            }
        }
        return -1.0;
    };

    // 处理查询
    const results = [];
    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];
        const visited = new Set();
        results.push(dfs(a, b, visited, 1.0));
    }

    return results;
};
