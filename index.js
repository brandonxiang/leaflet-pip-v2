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
    /**
     * whether the point is in the polygon object
     */
    pointInPolygon: function(point,layer){
    	return gju.pointInPolygon(point.toGeoJSON().geometry, layer.toGeoJSON().geometry);
    },
    /**
     * which the points in L.geojson layer are in the polygon object
     * return an array of points 
     */
    pointsInPolygon: function(points, layer) {
        var results = [];
        points.eachLayer(function(p) {
            if (leafletPip.pointInPolygon(p,layer)) {
                results.push(p);
            }
        });
        return results;
    },

};
module.exports = leafletPip;