import graphql from './graphql';

const configurations = {
  graphql
};

const configFor = configFile => {
  let configForEnvironment = configurations[configFile];
  return configForEnvironment[process.env.NODE_ENV];
};

export default configFor;
