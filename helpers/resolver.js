const Box = require('../models/Box');
const Maze = require('../models/Maze');
const mongoose = require("mongoose");

exports.resolver = function (maze, start, end) {
    console.log('Resolve the path of the maze here');
    console.log('BAAAAAAAAAAAAH');
    console.log(start.x);

    // Implement the path resolution logic here
    // Return the minimum number of steps required to go from start to end

    // Example implementation:


    /* const cell = maze.find(box => box.x === 3 && box.y === 4);

    const neighbors = getNeighbors(cell, maze); 
    console.log("NEIGHBORS : ", neighbors);
}  */

    console.log("MAZE : ", maze);
    let pathLength = 0;
    const queue = [];
    const visited = new Set();
    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
        const current = queue.shift();

        // Check if we reached the end point
        if (current.x === end.x && current.y === end.y) {
            return current.steps;
        }

        // Explore the neighboring cells
        const neighbors = getNeighbors(current, maze);
        pathLength++;

        //console.log("LISTE DES VOISINS : ", neighbors)

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }

    // If no path is found, return -1 or any other appropriate value
    return -1;
}

function getNeighbors(cell, maze) {
    const neighbors = [];
    const directions = [
        { x: -1, y: 0 }, // Left
        { x: 1, y: 0 },  // Right
        { x: 0, y: -1 }, // Up
        { x: 0, y: 1 }   // Down
    ];

    for (const direction of directions) {
        const neighborX = cell.x + direction.x;
        const neighborY = cell.y + direction.y;
        
        if (isValidCell(neighborX, neighborY, maze)){
            const box = maze.find(b => b.x === neighborX && b.y === neighborY);
        
    // Check if the neighbor is within the maze boundaries and is allowed
            if (box.isAllowed) {
                neighbors.push({ box });
            }
        }
    }

    return neighbors;
}

function isValidCell(neighborX, neighborY, maze) {
    return neighborX >= 0 && neighborX < 10 && neighborY >= 0 && neighborY < 10;
}