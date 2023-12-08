module.exports = {
    project: {
        ios: {},
        android: {}, // grouped into "project"
    },
    assets: ["./src/fonts/"], // stays the same
};

module.exports = {
    dependencies: {
      'react-native-flipper': {
        platforms: {
          android: null,
        },
      },
    },
  };