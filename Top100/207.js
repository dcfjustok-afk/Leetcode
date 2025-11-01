/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
        const [a, b] = prerequisites[i]; // 要先修 b 才能修 a
        if (!graph.get(b)) graph.set(b, []);
        graph.get(b).push(a);
    }

    let result = true;
    let canCourse = new Set(); // 已确认可修课程

    const dfs = (course, visiting = new Set()) => {
        if (!result) return;
        if (canCourse.has(course)) return;
        if (!graph.has(course)) {
            canCourse.add(course);
            return;
        }

        for (let next of graph.get(course)) {
            if (visiting.has(next)) {
                result = false; // 检测到环
                return;
            }
            visiting.add(next);
            dfs(next, visiting);
            visiting.delete(next);
        }
        canCourse.add(course);
    };

    // 遍历所有课程（防止图不连通）
    for (let i = 0; i < numCourses; i++) {
        if (!canCourse.has(i)) dfs(i);
    }

    return result;
};
