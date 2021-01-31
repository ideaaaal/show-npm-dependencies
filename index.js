const jsonFile = require(`${process.cwd()}/package.json`);

class Dependency {
  constructor(packageName, version) {
    this.packageName = packageName;
    this.version = version;
  }
};

exports.getAll = () => {
  if (!jsonFile || !jsonFile.dependencies) {
    return null;
  }
  return Object.entries(jsonFile.dependencies).map(d => new Dependency(d[0], d[1]));
};

exports.getVersion = packageName => {
  const dependencies = this.getAll();
  if (!dependencies && !packageName) {
    return null;
  }
  return dependencies.find(d => d.packageName === packageName);
};
