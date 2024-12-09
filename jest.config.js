export default async () => {
  return {
    verbose: true,
    collectCoverageFrom: ["src/**.js"],
    jest: {
      "transform": {
        "^.+\\.js$": "babel-jest"
      }
    }
  };
};