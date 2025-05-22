var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_chembur_43N_1 = new ol.format.GeoJSON();
var features_chembur_43N_1 = format_chembur_43N_1.readFeatures(json_chembur_43N_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chembur_43N_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chembur_43N_1.addFeatures(features_chembur_43N_1);
var lyr_chembur_43N_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chembur_43N_1, 
                style: style_chembur_43N_1,
                popuplayertitle: 'chembur_43N',
                interactive: true,
                title: '<img src="styles/legend/chembur_43N_1.png" /> chembur_43N'
            });
var format_hotels_2 = new ol.format.GeoJSON();
var features_hotels_2 = format_hotels_2.readFeatures(json_hotels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotels_2.addFeatures(features_hotels_2);
var lyr_hotels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hotels_2, 
                style: style_hotels_2,
                popuplayertitle: 'hotels',
                interactive: true,
                title: '<img src="styles/legend/hotels_2.png" /> hotels'
            });
var format_places_43N_3 = new ol.format.GeoJSON();
var features_places_43N_3 = format_places_43N_3.readFeatures(json_places_43N_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_places_43N_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_places_43N_3.addFeatures(features_places_43N_3);
var lyr_places_43N_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_places_43N_3, 
                style: style_places_43N_3,
                popuplayertitle: 'places_43N',
                interactive: true,
                title: '<img src="styles/legend/places_43N_3.png" /> places_43N'
            });
var format_playground_4 = new ol.format.GeoJSON();
var features_playground_4 = format_playground_4.readFeatures(json_playground_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_playground_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_playground_4.addFeatures(features_playground_4);
var lyr_playground_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_playground_4, 
                style: style_playground_4,
                popuplayertitle: 'playground',
                interactive: true,
                title: '<img src="styles/legend/playground_4.png" /> playground'
            });
var format_railway_track_projected_5 = new ol.format.GeoJSON();
var features_railway_track_projected_5 = format_railway_track_projected_5.readFeatures(json_railway_track_projected_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_track_projected_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_track_projected_5.addFeatures(features_railway_track_projected_5);
var lyr_railway_track_projected_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_track_projected_5, 
                style: style_railway_track_projected_5,
                popuplayertitle: 'railway_track_projected',
                interactive: true,
                title: '<img src="styles/legend/railway_track_projected_5.png" /> railway_track_projected'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_chembur_43N_1.setVisible(true);lyr_hotels_2.setVisible(true);lyr_places_43N_3.setVisible(true);lyr_playground_4.setVisible(true);lyr_railway_track_projected_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_chembur_43N_1,lyr_hotels_2,lyr_places_43N_3,lyr_playground_4,lyr_railway_track_projected_5];
lyr_chembur_43N_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'area_sqkm': 'area_sqkm', 'perimeter': 'perimeter', });
lyr_hotels_2.set('fieldAliases', {'Name': 'Name', 'Lat': 'Lat', 'Long': 'Long', });
lyr_places_43N_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'long': 'long', 'lat': 'lat', });
lyr_playground_4.set('fieldAliases', {'Id': 'Id', 'area': 'area', });
lyr_railway_track_projected_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'length': 'length', });
lyr_chembur_43N_1.set('fieldImages', {'OBJECTID': '', 'Id': '', 'area_sqkm': '', 'perimeter': '', });
lyr_hotels_2.set('fieldImages', {'Name': '', 'Lat': '', 'Long': '', });
lyr_places_43N_3.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Name': '', 'X': '', 'Y': '', 'long': '', 'lat': '', });
lyr_playground_4.set('fieldImages', {'Id': '', 'area': '', });
lyr_railway_track_projected_5.set('fieldImages', {'OBJECTID': '', 'Id': '', 'Shape_Leng': '', 'length': '', });
lyr_chembur_43N_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'area_sqkm': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', });
lyr_hotels_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_places_43N_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'Name': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'long': 'hidden field', 'lat': 'hidden field', });
lyr_playground_4.set('fieldLabels', {'Id': 'hidden field', 'area': 'inline label - visible with data', });
lyr_railway_track_projected_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'Shape_Leng': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_railway_track_projected_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});