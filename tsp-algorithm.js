
// Function to generate a random route
function generateRoute(numCities) {
    let route = Array.from({ length: numCities }, (_, i) => i);
    for (let i = route.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [route[i], route[j]] = [route[j], route[i]];
    }
    return route;
  }
  
  // Function to evaluate the fitness of a route (lower is better)
  function evaluateFitness(route, distanceMatrix) {
    let fitness = 0;
    for (let i = 0; i < route.length - 1; i++) {
      fitness += distanceMatrix[route[i]][route[i + 1]];
    }
    // Return to the start
    fitness += distanceMatrix[route[route.length - 1]][route[0]];
    return fitness;
  }
  
  // Function to perform crossover between two routes
  function crossover(parent1, parent2) {
    const size = parent1.length;
    const child = Array(size).fill(-1);
    const [start, end] = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)].sort((a, b) => a - b);
  
    for (let i = start; i < end; i++) {
      child[i] = parent1[i];
    }
  
    let index = end;
    for (let i = 0; i < size; i++) {
      if (!child.includes(parent2[i])) {
        child[index % size] = parent2[i];
        index++;
      }
    }
  
    return child;
  }
  
  // Function to perform mutation on a route
  function mutate(route, mutationRate) {
    if (Math.random() < mutationRate) {
      const i = Math.floor(Math.random() * route.length);
      const j = Math.floor(Math.random() * route.length);
      [route[i], route[j]] = [route[j], route[i]];
    }
  }
  
  // Genetic Algorithm
  function geneticAlgorithm(distanceMatrix, numGenerations = 1000, populationSize = 100, mutationRate = 0.01) {
    const numCities = distanceMatrix.length;
    let population = Array.from({ length: populationSize }, () => generateRoute(numCities));
  
    for (let generation = 0; generation < numGenerations; generation++) {
      let fitnessScores = population.map(route => evaluateFitness(route, distanceMatrix));
      let sortedPopulation = fitnessScores.map((_, index) => population[index]).sort((a, b) => evaluateFitness(a, distanceMatrix) - evaluateFitness(b, distanceMatrix));
  
      // Select parents
      let parents = sortedPopulation.slice(0, populationSize / 2);
      let offspring = [];
  
      // Create new routes through crossover and mutation
      for (let i = 0; i < parents.length; i += 2) {
        let parent1 = parents[i];
        let parent2 = parents[i + 1];
        let child1 = crossover(parent1, parent2);
        let child2 = crossover(parent2, parent1);
        mutate(child1, mutationRate);
        mutate(child2, mutationRate);
        offspring.push(child1, child2);
      }
  
      population = offspring;
    }
  
    // Return the best route from the final population
    return population.reduce((best, current) => evaluateFitness(current, distanceMatrix) < evaluateFitness(best, distanceMatrix) ? current : best);
  }
  
  // Example usage:
  const distanceMatrix = [
    [0, 10, 15, 20, 25],
    [10, 0, 35, 25, 10],
    [15, 35, 0, 30, 20],
    [20, 25, 30, 0, 35],
    [25, 10, 20, 35, 0]
  ];
  
  const bestRoute = geneticAlgorithm(distanceMatrix);
  
  // Styled console output
  console.log('%c Best Route:', 'color: white; background-color: darkblue; padding: 2px 4px;', bestRoute);
  console.log('%c Distance:', 'color: white; background-color: darkgreen; padding: 2px 4px;', evaluateFitness(bestRoute, distanceMatrix));
  