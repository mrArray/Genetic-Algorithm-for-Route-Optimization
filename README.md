
# Genetic Algorithm for Route Optimization

This repository contains an implementation of a genetic algorithm for solving route optimization problems, such as the Traveling Salesman Problem (TSP). The algorithm initializes a population of random routes, evaluates their fitness based on a given distance matrix, and evolves the population using crossover and mutation to find an optimal route.

## Features
- Random generation of initial routes
- Fitness evaluation based on the distance matrix
- Crossover and mutation for genetic diversity
- Configurable parameters (population size, mutation rate, number of generations)
- Outputs the best route and its total distance

## Prerequisites
- [Node.js](https://nodejs.org/) (to run the script in a terminal)
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

## Usage

### 1. Clone the Repository
```bash
git clone https://github.com/mrArray/Genetic-Algorithm-for-Route-Optimization
cd Genetic-Algorithm-for-Route-Optimization
```

### 2. Install Node.js
If Node.js is not already installed, download and install it from [Node.js](https://nodejs.org/).

### 3. Create a JavaScript File
Save the genetic algorithm code in a file named `genetic_algorithm.js`.

### 4. Run the Script
Open the terminal and execute the script using Node.js:
```bash
node genetic_algorithm.js
```

### 5. View the Output
The best route and its distance will be displayed in the terminal. The numbers in the output will be styled for better readability.

## Example
### Input
A sample distance matrix is provided in the script:
```javascript
const distanceMatrix = [
  [0, 10, 15, 20, 25],
  [10, 0, 35, 25, 10],
  [15, 35, 0, 30, 20],
  [20, 25, 30, 0, 35],
  [25, 10, 20, 35, 0]
];
```

### Output
Styled output in the terminal:
```
Best Route: 0 -> 3 -> 2 -> 1 -> 4
Distance: 85
```

## Customization
You can customize the algorithm parameters:
- **`numGenerations`**: Number of generations to run the algorithm.
- **`populationSize`**: Size of the population.
- **`mutationRate`**: Probability of mutation.

Modify these parameters in the script as needed:
```javascript
const bestRoute = geneticAlgorithm(distanceMatrix, numGenerations = 1000, populationSize = 100, mutationRate = 0.01);
```

## How It Works
1. **Initialization**:
   - Generate a random population of routes.
2. **Fitness Evaluation**:
   - Calculate the total distance for each route.
3. **Selection**:
   - Select parent routes based on fitness.
4. **Crossover**:
   - Create new routes by combining parts of parent routes.
5. **Mutation**:
   - Randomly swap cities in a route to maintain genetic diversity.
6. **Replacement**:
   - Replace the least fit routes with new ones.
7. **Output**:
   - Return the best route found after all generations.

## Acknowledgments
This project is developed by **Nura Dahiru Musa**, a Computer Science and Technology major at Wuhan Textile University, as part of an academic submission.

- **Student ID**: 2415066021
- **Faculty**: School of Computer Science and Artificial Intelligence
- **Submission Date**: December 27, 2024

---
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues/) for open issues or submit a pull request.

## Contact
For further inquiries, contact the author at [nouramousser@gmail.com](mailto:nouramousser@gmail.com).
