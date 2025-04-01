const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Ensure PNGs are handled correctly
config.resolver.assetExts.push("png");

module.exports = withNativeWind(config, { input: './app/globals.css' });
