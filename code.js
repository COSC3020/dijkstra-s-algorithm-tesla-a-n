function dijkstra(graph, sourceNode) {
    
    // Initialize distance array with Infinity for all nodes except source
    const distance = new Array(graph.length).fill(Infinity);
    distance[sourceNode] = 0;
    
    // Track which vertices are already processed
    const visited = new Array(graph.length).fill(false);

    //track verteces visited
    let visitedCount = 0;
    
    //process the vertices
    while (visitedCount < graph.length) {
        // Find the unvisited vertex with minimum distance
        let minDistance = Infinity;
        let minVertex = -1; //when no unvisited node is reachable
        
        for (let v = 0; v < graph.length; v++) {
            if (!visited[v] && distance[v] < minDistance) {
                minDistance = distance[v];
                minVertex = v;
            }
        }
        
        //break loop if no unvisited vertex found
        if (minVertex === -1) break;
        
        // mark selected vertex as visited and increment visitedCount
        visited[minVertex] = true;
        visitedCount++;
        
        //keep distance to adjacent vertices
        for (let v = 0; v < graph.length; v++) {
            // Check if an edge and the vertex hasn't been visited
            if (graph[minVertex][v] !== Infinity && graph[minVertex][v] !== 0 && !visited[v]) {
                const newDistance = distance[minVertex] + graph[minVertex][v];
                if (newDistance < distance[v]) {
                    distance[v] = newDistance;
                }
            }
        }
    }
    return distance;
}
