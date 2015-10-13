"use strict";

// Used this String to represent depths because we can leverage
// the String methods
// 'indexOf()' to calculate the depth conversion (e.g. a = -1km, e = -5km, A = -27km)
// 'charAt()' to get the character to represent the new "dropped" depth
// Can use the string prop
var depthValues = '*abcdefghijklmnopqrstuvwxyz' +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports.dropVessel = function (grid) {
    return {
        mineLocations: grid.mineLocations.map(function (loc) {
            return {
                lat: loc.lat,
                lon: loc.lon,
                depth: depthValues.charAt(depthValues.indexOf(loc.depth) - 1)
            }
        })
    };
};

module.exports.getCharForAPassedMine = function() {
    // depth of 0 is considered a passed mine
    return depthValues.charAt(0);
};
