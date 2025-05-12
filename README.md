# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Since we go through all the elements to set dist values for all vertices, we have O(V) time. The outerloop goes through each vertex to mark each unvisited vertex and then finds the unvisited vertex with the smallest distance O(V). In the inner loop each selected vertex's edges are checked across all iterations of the outer loop (O(E)). So we have O(V) per iteration x V iterations which is $O(V^2)$. Then to account for the edges is $O(V^2 + E)$ but since E is at most $V^2$, the time complexity simplifies to $O(V^2)$. With the worst case being a dense graph or a V x V graph, the big $\Theta$ complexity is $\Theta(V^2)$

## Sources

[GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/#dijkstras-algorithm)

[Dijkstra in Python](https://www.algorithms-and-technologies.com/dijkstra/python)

CoPilot and Windsurf on VScode helped me turn my test code for graph search into test code for this Dijkstra implementation

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
