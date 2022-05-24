/*
  Exercise
  Let's find the best Judo Olympics champions: athletes who have won at
  least 3 olympic medals in their career.

  Write a function that receives an object that contains all the Judo
  olympic athletes who have won at least a medal.
  The object has athlete names for keys and a collection of medals as
  values as in the following example:

  ```
  {
    'athlete1': {gold: 1, silver: 0, bronze: 1},
    'athlete2': {gold: 0, silver: 0, bronze: 2},
    'athlete3': {gold: 1, silver: 1, bronze: 1},
    'athlete4': {gold: 1, silver: 2, bronze: 1},
  }
  ```

  Return the names of the athletes who hav ewon at least 3 medals.
  For the above example the result should be:

  ```
  [
    'athlete3',
    'athlete4'
  ]
  ```

*/

/**
 * @param {Object.<string, {gold: number, silver: number, bronze: number}>} athletes
 * @returns {[string]}
 */
export default function champions (athletes) {
  return Object.entries(athletes)
    .filter(([athleteName, medals]) =>
      Object.values(medals)
        .reduce((prev, curr) => prev + curr, 0) >= 3)
    .map(([k, _]) => k)
}
