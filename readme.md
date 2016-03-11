## points in a single polygon for leaflet

It is inspired by [leaflet-pip](https://github.com/mapbox/leaflet-pip),and it is its simple extension. If you prefer the software stability, you can see [leaflet-pip](https://github.com/mapbox/leaflet-pip).

**leaflet-pip** is to select a polygon from multipolygon GeoJSON based on a point feature, but my idea is that select points from points Geojson based on a polygon feature. These two geo-processings are based on the same principle, spatial query -- point in polygon (pip). Therefore, the extension for leaflet-pip comes.

####example

```
var selectedpoints = leafletPip.pointsInPolygon(L.geoJson(point.geojson),L.geoJson(singlepolygon.geojson))
```


## 利用leaflet选点在某个多边形内


这个受[leaflet-pip](https://github.com/mapbox/leaflet-pip)启发，是它的一个扩展。如果你需要稳定性，你可以先看看[leaflet-pip](https://github.com/mapbox/leaflet-pip)。

**leaflet-pip**是**通过点要素的相交关系**从多面状GeoJSON中选择一个面状，但是我的想法是**通过面要素的相交关系**从点的GeoJSON中选择多个点。这两个处理过程都基于同样的原理--空间查询。

####例子

```
var selectedpoints = leafletPip.pointsInPolygon(L.geoJson(point.geojson),L.geoJson(singlepolygon.geojson))
```