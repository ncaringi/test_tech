const Box = require('../models/Box');
const Maze = require('../models/Maze');
const mongoose = require("mongoose");

exports.resolver = function (maze, start, end) {
    console.log('Resolve the path of the maze here');
    console.log('DEBUT DE LA RESOLUTION DU MAZE :');

    // Implement the path resolution logic here
    // Return the minimum number of steps required to go from start to end

    const queue = [];
    const visited = new Set();
    const distances = new Map(); // Map pour stocker les distances
    distances.set(start, 0); // La distance de départ est 0
    let neighbors = [];
    queue.push(start);
    visited.add(start);

     while (queue.length > 0) {

        const current = queue.shift();

        // Vérifie si end est atteint
        if (current.x === end.x && current.y === end.y) {
            return distances.get(current)+1;
        }

        // Récupère les voisins de la cellule courante
        neighbors = getNeighbors(current, maze); 
        

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
                distances.set(neighbor, distances.get(current) + 1); // Met à jour la distance du voisin
            }
        }
    }

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

        //DEBUG
        /* console.log("Current cell:", cell.x, cell.y);
        console.log("Direction:", direction.x, direction.y);
        console.log("Checking neighbor at:", neighborX, neighborY); */
        
        const box = maze.find(b => b.x === neighborX && b.y === neighborY);
        if (box !== undefined && box.isAllowed === true){
            neighbors.push(box);
        }        
    }

    return neighbors;
}