var app = angular.module("GCProtoApp",['ui-listView', 'uiGmapgoogle-maps'])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({        
        key: 'AIzaSyAimn8YL1R383fSyjL-zpTShSt1_cqqfu8', //    key: 'your api key',
        v: '3.23', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});