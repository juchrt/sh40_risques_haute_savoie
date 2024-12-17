var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_REGION_1 = new ol.format.GeoJSON();
var features_REGION_1 = format_REGION_1.readFeatures(json_REGION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_1.addFeatures(features_REGION_1);
var lyr_REGION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGION_1, 
                style: style_REGION_1,
                popuplayertitle: 'REGION',
                interactive: true,
                title: '<img src="styles/legend/REGION_1.png" /> REGION'
            });
var format_DEPARTEMENT_2 = new ol.format.GeoJSON();
var features_DEPARTEMENT_2 = format_DEPARTEMENT_2.readFeatures(json_DEPARTEMENT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTEMENT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTEMENT_2.addFeatures(features_DEPARTEMENT_2);
var lyr_DEPARTEMENT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTEMENT_2, 
                style: style_DEPARTEMENT_2,
                popuplayertitle: 'DEPARTEMENT',
                interactive: true,
                title: '<img src="styles/legend/DEPARTEMENT_2.png" /> DEPARTEMENT'
            });
var format_COMMUNE_3 = new ol.format.GeoJSON();
var features_COMMUNE_3 = format_COMMUNE_3.readFeatures(json_COMMUNE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_3.addFeatures(features_COMMUNE_3);
var lyr_COMMUNE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_3, 
                style: style_COMMUNE_3,
                popuplayertitle: 'COMMUNE',
                interactive: true,
                title: '<img src="styles/legend/COMMUNE_3.png" /> COMMUNE'
            });

        var lyr_ESRIShadedRelief_4 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_haute_savoie_fond_5 = new ol.format.GeoJSON();
var features_haute_savoie_fond_5 = format_haute_savoie_fond_5.readFeatures(json_haute_savoie_fond_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_haute_savoie_fond_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_haute_savoie_fond_5.addFeatures(features_haute_savoie_fond_5);
var lyr_haute_savoie_fond_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_haute_savoie_fond_5, 
                style: style_haute_savoie_fond_5,
                popuplayertitle: 'haute_savoie_fond',
                interactive: true,
                title: '<img src="styles/legend/haute_savoie_fond_5.png" /> haute_savoie_fond'
            });
var format_COURS_D_EAU_6 = new ol.format.GeoJSON();
var features_COURS_D_EAU_6 = format_COURS_D_EAU_6.readFeatures(json_COURS_D_EAU_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COURS_D_EAU_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COURS_D_EAU_6.addFeatures(features_COURS_D_EAU_6);
var lyr_COURS_D_EAU_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COURS_D_EAU_6, 
                style: style_COURS_D_EAU_6,
                popuplayertitle: 'COURS_D_EAU',
                interactive: true,
                title: '<img src="styles/legend/COURS_D_EAU_6.png" /> COURS_D_EAU'
            });
var format_PLAN_D_EAU_7 = new ol.format.GeoJSON();
var features_PLAN_D_EAU_7 = format_PLAN_D_EAU_7.readFeatures(json_PLAN_D_EAU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLAN_D_EAU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLAN_D_EAU_7.addFeatures(features_PLAN_D_EAU_7);
var lyr_PLAN_D_EAU_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLAN_D_EAU_7, 
                style: style_PLAN_D_EAU_7,
                popuplayertitle: 'PLAN_D_EAU',
                interactive: true,
                title: '<img src="styles/legend/PLAN_D_EAU_7.png" /> PLAN_D_EAU'
            });
var format_haute_savoie_contour_8 = new ol.format.GeoJSON();
var features_haute_savoie_contour_8 = format_haute_savoie_contour_8.readFeatures(json_haute_savoie_contour_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_haute_savoie_contour_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_haute_savoie_contour_8.addFeatures(features_haute_savoie_contour_8);
var lyr_haute_savoie_contour_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_haute_savoie_contour_8, 
                style: style_haute_savoie_contour_8,
                popuplayertitle: 'haute_savoie_contour',
                interactive: true,
                title: '<img src="styles/legend/haute_savoie_contour_8.png" /> haute_savoie_contour'
            });
var group_hydro_reliefs_74 = new ol.layer.Group({
                                layers: [lyr_ESRIShadedRelief_4,lyr_haute_savoie_fond_5,lyr_COURS_D_EAU_6,lyr_PLAN_D_EAU_7,lyr_haute_savoie_contour_8,],
                                fold: "open",
                                title: 'hydro_reliefs_74'});
var group_autres = new ol.layer.Group({
                                layers: [lyr_REGION_1,lyr_DEPARTEMENT_2,lyr_COMMUNE_3,],
                                fold: "open",
                                title: 'autres'});

lyr_ESRINationalGeographic_0.setVisible(true);lyr_REGION_1.setVisible(true);lyr_DEPARTEMENT_2.setVisible(true);lyr_COMMUNE_3.setVisible(true);lyr_ESRIShadedRelief_4.setVisible(true);lyr_haute_savoie_fond_5.setVisible(true);lyr_COURS_D_EAU_6.setVisible(true);lyr_PLAN_D_EAU_7.setVisible(true);lyr_haute_savoie_contour_8.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,group_autres,group_hydro_reliefs_74];
lyr_REGION_1.set('fieldAliases', {'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_DEPARTEMENT_2.set('fieldAliases', {'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_COMMUNE_3.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_haute_savoie_fond_5.set('fieldAliases', {'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_COURS_D_EAU_6.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'STATUT': 'STATUT', 'MAREE': 'MAREE', 'PERMANENT': 'PERMANENT', 'COMMENT': 'COMMENT', });
lyr_PLAN_D_EAU_7.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'NATURE': 'NATURE', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'STATUT': 'STATUT', 'MAREE': 'MAREE', 'PERMANENT': 'PERMANENT', 'Z_MOY': 'Z_MOY', 'REF_Z_MOY': 'REF_Z_MOY', 'MODE_Z_MOY': 'MODE_Z_MOY', 'PREC_Z_MOY': 'PREC_Z_MOY', 'HAUT_MAX': 'HAUT_MAX', 'OBT_HT_MAX': 'OBT_HT_MAX', 'COMMENT': 'COMMENT', });
lyr_haute_savoie_contour_8.set('fieldAliases', {'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_REGION_1.set('fieldImages', {'ID': '', 'INSEE_REG': '', 'NOM': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'ID_AUT_ADM': '', 'CODE_SIREN': '', });
lyr_DEPARTEMENT_2.set('fieldImages', {'ID': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'NOM': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'ID_AUT_ADM': '', 'CODE_SIREN': '', });
lyr_COMMUNE_3.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_haute_savoie_fond_5.set('fieldImages', {'ID': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_COURS_D_EAU_6.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'STATUT': 'TextEdit', 'MAREE': 'TextEdit', 'PERMANENT': 'TextEdit', 'COMMENT': 'TextEdit', });
lyr_PLAN_D_EAU_7.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'NATURE': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'STATUT': 'TextEdit', 'MAREE': 'TextEdit', 'PERMANENT': 'TextEdit', 'Z_MOY': 'TextEdit', 'REF_Z_MOY': 'TextEdit', 'MODE_Z_MOY': 'TextEdit', 'PREC_Z_MOY': 'TextEdit', 'HAUT_MAX': 'TextEdit', 'OBT_HT_MAX': 'TextEdit', 'COMMENT': 'TextEdit', });
lyr_haute_savoie_contour_8.set('fieldImages', {'ID': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_REGION_1.set('fieldLabels', {'ID': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_DEPARTEMENT_2.set('fieldLabels', {'ID': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_COMMUNE_3.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_haute_savoie_fond_5.set('fieldLabels', {'ID': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_COURS_D_EAU_6.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'TOPONYME': 'no label', 'STATUT_TOP': 'no label', 'IMPORTANCE': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'STATUT': 'no label', 'MAREE': 'no label', 'PERMANENT': 'no label', 'COMMENT': 'no label', });
lyr_PLAN_D_EAU_7.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'NATURE': 'no label', 'TOPONYME': 'no label', 'STATUT_TOP': 'no label', 'IMPORTANCE': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'STATUT': 'no label', 'MAREE': 'no label', 'PERMANENT': 'no label', 'Z_MOY': 'no label', 'REF_Z_MOY': 'no label', 'MODE_Z_MOY': 'no label', 'PREC_Z_MOY': 'no label', 'HAUT_MAX': 'no label', 'OBT_HT_MAX': 'no label', 'COMMENT': 'no label', });
lyr_haute_savoie_contour_8.set('fieldLabels', {'ID': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_haute_savoie_contour_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});