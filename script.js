// a require statement to load the Map and MapView modules.
//One of the easiest ways to select a new basemap is to use the BasemapToggle widget. This widget gives you the ability to toggle back and forth between two different basemaps. In this step you will configure the widget to toggle between the Topo and Satellite basemap.

require([
  "esri/Map",
  "esri/views/MapView",

  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function (Map, MapView, BasemapToggle, BasemapGallery)
{
  //Create a new Map and set the basemap property to topo-vector. 
  var map = new Map(
  {
    basemap: "topo-vector"
  });
  //a MapView and set its container property to viewDiv, its map property to map, and center the view on 
  // the Piatra Craiului Mountains (-118.71511,34.09042). Set the zoom property to 10
  var view = new MapView(
  {
    container: "viewDiv",
    map: map,
    center: [25.48237, 45.41998],
    zoom: 11
  });

  var basemapGallery = new BasemapGallery(
  {
    view: view,
    source:
    {
      portal:
      {
        url: "http://www.arcgis.com",
        useVectorBasemaps: true, // Load vector tile basemap group
      },
    }
  });

  view.ui.add(basemapGallery, "top-right"); // Add to the view
});