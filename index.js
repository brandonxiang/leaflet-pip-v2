/* global L */
'use strict';
var gju = require('geojson-utils');
var leafletPip = {
    bassackwards: false,
    pointInLayer: function(p, layer, first) {
        if (p instanceof L.LatLng) p = [p.lng, p.lat];
        else if (leafletPip.bassackwards) p = p.concat().reverse();
        var results = [];
        layer.eachLayer(function(l) {
            if (first && results.length) return;
            if ((l instanceof L.MultiPolygon || l instanceof L.Polygon) && gju.pointInPolygon({
                    type: 'Point',
                    coordinates: p
                }, l.toGeoJSON().geometry)) {
                results.push(l);
            }
        });
        return results;
    },
    pointsInPolygon: function(points, layer) {
        'use strict';
        var results = [];
        points.eachLayer(function(p) {
            if (gju.pointInPolygon(p.toGeoJSON().geometry, layer.toGeoJSON().geometry)) {
                results.push(p);
            }
        });
        return results;
    }
};
module.exports = leafletPip;