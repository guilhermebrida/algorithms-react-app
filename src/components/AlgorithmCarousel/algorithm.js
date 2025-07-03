// const algorithms = [
//   {
//     title: "Two Pointers",
//     description:
//       "The two pointers technique uses two indices moving through a data structure to solve problems efficiently. It is commonly used to find pairs that sum to a target, remove duplicates from sorted arrays, and detect subarrays with specific properties.",
//     code: `
// def two_pointers_example(arr, target):
//     left, right = 0, len(arr) - 1
//     while left < right:
//         current_sum = arr[left] + arr[right]
//         if current_sum == target:
//             return (left, right)
//         elif current_sum < target:
//             left += 1
//         else:
//             right -= 1
//     return None
//     `
//   },
//   {
//     title: "Sliding Window",
//     description:
//       "The sliding window technique maintains a window over a subset of data and slides it to process elements efficiently. It is great for problems involving fixed-size subarrays, finding maximum sums, longest substrings, and detecting patterns in sequences.",
//     code: `
// def max_sum_subarray(arr, k):
//     window_sum = sum(arr[:k])
//     max_sum = window_sum
//     for i in range(k, len(arr)):
//         window_sum += arr[i] - arr[i - k]
//         max_sum = max(max_sum, window_sum)
//     return max_sum
//     `
//   },
//   {
//     title: "Binary Search",
//     description:
//       "Binary search is a divide-and-conquer algorithm that efficiently finds elements in sorted arrays. It is used to locate a target value, determine optimal thresholds, and solve mathematical problems like root finding or search in rotated arrays.",
//     code: `
// def binary_search(arr, target):
//     left, right = 0, len(arr) - 1
//     while left <= right:
//         mid = (left + right) // 2
//         if arr[mid] == target:
//             return mid
//         elif arr[mid] < target:
//             left = mid + 1
//         else:
//             right = mid - 1
//     return -1
//     `
//   },
//   {
//     title: "DFS / BFS",
//     description:
//       "Depth-First Search (DFS) and Breadth-First Search (BFS) are fundamental graph traversal algorithms. They are essential for exploring graphs and trees, detecting cycles, finding connected components, and solving shortest path or island-count problems.",
//     code: `
// def dfs(graph, start, visited=None):
//     if visited is None:
//         visited = set()
//     visited.add(start)
//     for neighbor in graph[start]:
//         if neighbor not in visited:
//             dfs(graph, neighbor, visited)
//     return visited
//     `
//   },
//   {
//     title: "Dynamic Programming",
//     description:
//       "Dynamic programming solves problems by breaking them into overlapping subproblems and caching their results. It's used in recursive sequences like Fibonacci, optimization problems like knapsack, and decision-based problems like edit distance or pathfinding.",
//     code: `
// def fibonacci(n, memo={}):
//     if n in memo:
//         return memo[n]
//     if n <= 1:
//         return n
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
//     return memo[n]
//     `
//   },
//   {
//     title: "Greedy Algorithms",
//     description:
//       "Greedy algorithms build up a solution piece by piece, choosing the option that seems best at each step. They are efficient for problems like interval scheduling, coin change (when denominations allow), activity selection, and minimum jumps or ladders.",
//     code: `
// def greedy_activity_selection(intervals):
//     intervals.sort(key=lambda x: x[1])
//     count, end = 0, 0
//     for start, finish in intervals:
//         if start >= end:
//             count += 1
//             end = finish
//     return count
//     `
//   },
//   {
//     title: "Union Find (Disjoint Set)",
//     description:
//       "Union Find is a data structure that tracks a set of elements partitioned into disjoint subsets. It's ideal for connectivity problems, cycle detection in graphs, Kruskal’s algorithm for MST, and counting components or friend circles.",
//     code: `
// class UnionFind:
//     def __init__(self, size):
//         self.parent = list(range(size))

//     def find(self, x):
//         if self.parent[x] != x:
//             self.parent[x] = self.find(self.parent[x])
//         return self.parent[x]

//     def union(self, x, y):
//         self.parent[self.find(x)] = self.find(y)
//     `
//   },
//   {
//     title: "Backtracking",
//     description:
//       "Backtracking builds a solution incrementally and abandons a path as soon as it determines it cannot be completed. It is commonly used for constraint satisfaction problems like permutations, combinations, Sudoku solving, and N-Queens.",
//     code: `
// def backtrack(path, used, res):
//     if len(path) == len(nums):
//         res.append(path[:])
//         return
//     for i in range(len(nums)):
//         if used[i]: continue
//         used[i] = True
//         path.append(nums[i])
//         backtrack(path, used, res)
//         path.pop()
//         used[i] = False

// nums = [1, 2, 3]
// res = []
// backtrack([], [False]*len(nums), res)
// print(res)
//     `
//   },
//   {
//     title: "Topological Sort",
//     description:
//       "Topological sort orders the nodes of a directed acyclic graph (DAG) such that for every directed edge u → v, u comes before v. It's used in dependency resolution, task scheduling, and build systems.",
//     code: `
// from collections import defaultdict, deque

// def topological_sort(vertices, edges):
//     graph = defaultdict(list)
//     in_degree = {v: 0 for v in vertices}
//     for u, v in edges:
//         graph[u].append(v)
//         in_degree[v] += 1

//     queue = deque([v for v in vertices if in_degree[v] == 0])
//     order = []

//     while queue:
//         node = queue.popleft()
//         order.append(node)
//         for neighbor in graph[node]:
//             in_degree[neighbor] -= 1
//             if in_degree[neighbor] == 0:
//                 queue.append(neighbor)

//     return order if len(order) == len(vertices) else []
//     `
//   },
//   {
//     title: "Dijkstra’s Algorithm",
//     description:
//       "Dijkstra's algorithm finds the shortest paths from a source to all other vertices in a weighted graph. It’s widely used in GPS routing, network path optimization, and any problem involving minimum cost paths.",
//     code: `
// import heapq

// def dijkstra(graph, start):
//     heap = [(0, start)]
//     distances = {node: float('inf') for node in graph}
//     distances[start] = 0

//     while heap:
//         dist, node = heapq.heappop(heap)
//         if dist > distances[node]:
//             continue
//         for neighbor, weight in graph[node]:
//             new_dist = dist + weight
//             if new_dist < distances[neighbor]:
//                 distances[neighbor] = new_dist
//                 heapq.heappush(heap, (new_dist, neighbor))

//     return distances
//     `
//   }
// ];
// export default algorithms;

const algorithms = [
  {
    title: "Two Pointers",
    description:
      "Two pointers is a technique that uses two indices moving through the list, usually one from the beginning and one from the end. It's useful for problems involving sorted arrays, removing duplicates, pair sums, and checking for palindromes.",
    code: `
def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
    `
  },
  {
    title: "Sliding Window",
    description:
      "Sliding window involves moving a window (subarray) over the input to find optimal solutions in a continuous segment. It's great for finding subarrays or substrings with specific sums, averages, or other constraints.",
    code: `
def maxSumSubarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum
    `
  },
  {
    title: "Hash Map / Hash Set",
    description:
      "Hash maps and sets provide constant-time lookup and are used to count frequencies, detect duplicates, and check membership. Ideal for problems like Two Sum, Anagram detection, and frequency counters.",
    code: `
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        if target - num in seen:
            return [seen[target - num], i]
        seen[num] = i
    `
  },
  {
    title: "Binary Search",
    description:
      "Binary search divides the search space in half to find a target efficiently. It's used for sorted or monotonic arrays and in problems like finding boundaries, rotated arrays, and floors/ceilings.",
    code: `
def binarySearch(nums, target):
    left, right = 0, len(nums)-1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
    `
  },
  {
    title: "DFS (Depth-First Search)",
    description:
      "DFS explores nodes or paths to their maximum depth before backtracking. It's used to traverse graphs, trees, and grids, useful in island problems, path finding, and cycle detection.",
    code: `
def isInvalid(grid, i, j):
    return (
        i < 0 or j < 0 or
        i >= len(grid) or j >= len(grid[0]) or
        grid[i][j] != '1'
    )

def dfs(grid, i, j):
    if isInvalid(grid, i, j):
        return
    grid[i][j] = '0'
    for x, y in [(1,0), (-1,0), (0,1), (0,-1)]:
        dfs(grid, i + x, j + y)
    `
  },
  {
    title: "BFS (Breadth-First Search)",
    description:
      "BFS explores the closest nodes first, level by level. It's ideal for finding the shortest path in graphs and matrices, and is used in tree depth, maze solving, and spreading problems.",
    code: `
from collections import deque

def minDepth(root):
    if not root:
        return 0
    queue = deque([(root, 1)])
    while queue:
        node, depth = queue.popleft()
        if not node.left and not node.right:
            return depth
        if node.left:
            queue.append((node.left, depth + 1))
        if node.right:
            queue.append((node.right, depth + 1))
    `
  },
  {
    title: "Recursion & Backtracking",
    description:
      "Backtracking builds candidates and abandons them as soon as it knows they won’t lead to a valid solution. It's used in generating subsets, permutations, solving sudoku, and exploring all paths.",
    code: `
def subsets(nums):
    res = []
    def backtrack(start, path):
        res.append(path)
        for i in range(start, len(nums)):
            backtrack(i + 1, path + [nums[i]])
    backtrack(0, [])
    return res
    `
  },
  {
    title: "Dynamic Programming (DP)",
    description:
      "Dynamic Programming stores solutions to subproblems to avoid recomputation. It's powerful for problems with overlapping subproblems like Fibonacci, Knapsack, and Longest Common Subsequence.",
    code: `
def fib(n):
    if n <= 1:
        return n
    dp = [0, 1]
    for i in range(2, n+1):
        dp.append(dp[-1] + dp[-2])
    return dp[n]
    `
  },
  {
    title: "Greedy Algorithms",
    description:
      "Greedy algorithms make locally optimal choices hoping for a global optimum. They are effective for interval selection, coin change (when optimal), and minimizing steps or jumps.",
    code: `
def maxActivities(intervals):
    intervals.sort(key=lambda x: x[1])
    count = 0
    end = -1
    for start, finish in intervals:
        if start >= end:
            count += 1
            end = finish
    return count
    `
  },
  {
    title: "Union-Find (Disjoint Set)",
    description:
      "Union-Find is a data structure that keeps track of elements partitioned into disjoint sets. It's used for grouping, detecting cycles in graphs, and counting connected components.",
    code: `
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))

    def find(self, x):
        if x != self.parent[x]:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, a, b):
        pa, pb = self.find(a), self.find(b)
        if pa != pb:
            self.parent[pa] = pb
    `
  }
];

export default algorithms;