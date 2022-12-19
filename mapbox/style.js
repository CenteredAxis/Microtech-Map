
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "CorrectOrientationDisplacementMapstandardscale6_00xgigapixel_modified_0": {
            "type": "image",
            "url": "./data/CorrectOrientationDisplacementMapstandardscale6_00xgigapixel_modified_0.png",
            "coordinates": [
                [-180.000000, -90.008950],
                [180.017900, -90.008950],
                [180.017900, 90.000000],
                [-180.000000, 90.000000]
            ]
        },
        "Contours_1": {
            "type": "geojson",
            "data": json_Contours_1
        }
                    ,
        "POI_2": {
            "type": "geojson",
            "data": json_POI_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_CorrectOrientationDisplacementMapstandardscale6_00xgigapixel_modified_0_0",
            "type": "raster",
            "source": "CorrectOrientationDisplacementMapstandardscale6_00xgigapixel_modified_0",
            "minzoom": 0,
            "maxzoom": 22
        },
        {
            "id": "lyr_Contours_1_0",
            "type": "line",
            "source": "Contours_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#b3b3b3'}
        }
,
        {
            "id": "lyr_Contours_1_1",
            "type": "symbol",
            "source": "Contours_1",
            "layout": {'text-offset': 0.0, 'text-field': ['get', 'ELEV'], 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#323232'}
        }
,
        {
            "id": "lyr_POI_2_0",
            "type": "circle",
            "source": "POI_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#db1e2a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_POI_2_1",
            "type": "symbol",
            "source": "POI_2",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'label'], 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#323232'}
        }
],
}