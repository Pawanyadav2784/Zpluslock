import { comparisonRows, solutions, solutionTabs } from "../models/solutionsModel";

export function getSolutionTabs() {
  return solutionTabs;
}

export function getSolutionById(id) {
  return solutions[id] || solutions.android;
}

export function getComparisonRows() {
  return comparisonRows;
}
