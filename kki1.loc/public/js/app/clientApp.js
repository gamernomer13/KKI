(function () {
    'use strict';
    angular.module('mds.areas', [
        "ngCookies",
        "oi.select"
    ]);
})();
(function () {
    'use strict';
    angular
        .module("mds.areas")
        .run(runapp);
    runapp.$inject =
        ['$rootScope', '$location', 'mapfactory', 'mapservice'];
    function runapp($rootScope, $location, mapfactory, mapservice) {
        getConfig();
        var url = $location.absUrl();
        var hashbangIdx = url.indexOf('#!');
        var serverStr = hashbangIdx > -1 ? url.substring(0, hashbangIdx) : url;
        var qIdx = serverStr.indexOf("?");
        var p = qIdx > -1 ? serverStr.substring(qIdx).split(/[&||?]/) : [];
        for (var i = 0; i < p.length; i += 1) {
            if (p[i].indexOf('=') > -1) {
                var param = p[i].split('=');
                $location.search(param[0], param[1]);
            }
        }
        function getConfig() {
            var getData = mapservice.getConfig();
            getData.then(function (rc) {
                emitEvent(rc.data);
            }, function (rc) {
                alert("Error. Unable to get application configuration!");
            });
        }
        function emitEvent(data) {
            $rootScope.$emit('config_loaded', data);
        }
        ;
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .component('cmd', {
        template: '<div class="container-map"><div id="Map" class="adaptive-map"></div></div>',
        controller: cmdCNTRL
    });
    angular
        .module('mds.areas')
        .controller('cmdCNTRL', cmdCNTRL);
    cmdCNTRL.$inject = ['$rootScope', '$scope', 'mapservice', 'mapfactory'];
    function cmdCNTRL($rootScope, $scope, mapservice, mapfactory) {
        ;
        var conf;
        $rootScope.$on('config_loaded', function (event, data) {
            loadCofig(data);
            activate();
        });
        function loadCofig(data) {
            conf = data;
        }
        ;
        ;
        function activate() {
            var pr = conf.MapReprojections.D_PULKOVO;
            var TORIS = L.tileLayer.wms(conf.MapLayersLinks.TORIS, {
                maxZoom: 19
            }), ZNOP_POLYGON = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:znop',
                opacity: 0,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
                crs: L.CRS.EPSG3857
            }), znop_distr = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:mo',
                opacity: 0.5,
                format: 'image/png',
                transparent: true,
                maxZoom: 19
            }), znop_gor = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:znop_gor',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), znop_mo = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:znop-local',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), znop_FACADE = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:facade',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), znop_okn = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:okn',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), znop_vo = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:vo',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), znop_mroads = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:road_mo',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), znop_roads = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:ad',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19
            }), zu_palata_polygon = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:zemuch',
                opacity: 0.5,
                format: 'image/png',
                transparent: true,
                maxZoom: 19
            }), vector = L.geoJSON(), searchlayer = L.geoJSON(), map = L.map('Map', {
                center: [59.9386300, 30.3141300],
                zoom: 14,
                maxZoom: 19,
                zoomControl: false,
                crs: L.CRS.EPSG3857,
                layers: [TORIS, ZNOP_POLYGON, znop_gor, znop_mo, vector]
            });
            var baseLayers = {
                "План": TORIS
            };
            var overlays = {
                "ЗНОП городского значения": znop_gor,
                "ЗНОП местного значения": znop_mo,
                "Фасады": znop_FACADE,
                "Объекты культурного наследия": znop_okn,
                "Водные объекты": znop_vo,
                "Дороги": znop_roads,
                "Дороги внутри муниципальных образований": znop_mroads,
                "Земельные участки и их части": zu_palata_polygon,
            };
            var al = L.control.activeLayers(baseLayers, overlays);
            al.addTo(map);
            L.control.zoom({
                zoomInTitle: "Приблизить",
                zoomOutTitle: "Отдалить"
            }).addTo(map);
            L.control.fullscreen({
                title: 'На полный экран',
                titleCancel: 'Свернуть карту'
            }).addTo(map);
            map.on("click", GetFeatureInfoWMS, ZNOP_POLYGON);
            var minTORIS = L.tileLayer.wms(conf.MapLayersLinks.MinMapToris, {
                maxZoom: 19
            });
            var miniMap = new L.Control.MiniMap(minTORIS, { toggleDisplay: true }).addTo(map);
            function GetFeatureInfoWMS(e) {
                var me = this, map = me._map, loc = e.latlng, xy = e.containerPoint, size = map.getSize(), bounds = map.getBounds(), url = me._url, crs = me.options.crs || map.options.crs, sw = crs.project(bounds.getSouthWest()), ne = crs.project(bounds.getNorthEast()), params = me.wmsParams, curl, obj = {
                    service: "WMS",
                    version: params.version,
                    request: "GetFeatureInfo",
                    layers: params.layers,
                    styles: params.styles,
                    cql_filter: "is_active = 'Y'",
                    bbox: sw.x + "," + sw.y + "," + ne.x + "," + ne.y,
                    width: size.x,
                    height: size.y,
                    query_layers: retALString(),
                    info_format: "application/json",
                    feature_count: 5,
                };
                if (parseFloat(params.version) >= 1.3) {
                    obj.crs = crs.code;
                    obj.i = xy.x;
                    obj.j = xy.y;
                }
                else {
                    obj.srs = crs.code;
                    obj.x = xy.x;
                    obj.y = xy.y;
                }
                curl = url + L.Util.getParamString(obj, url, true);
                getFIData(curl, me, loc);
            }
            ;
            function getFIData(curl, me, loc) {
                var html = "";
                var getData = mapservice.reqBBOX(curl);
                getData.then(function (rc) {
                    showPopup(rc.data, me, loc);
                }, function (rc) {
                    map.removeLayer(vector);
                    map.removeLayer(searchlayer);
                    L.popup().setLatLng(loc).setContent("Нет ответа от сервера: " + rc.data).openOn(map);
                });
            }
            function showPopup(data, me, loc) {
                var html = "";
                var features = data.features, popup;
                map.removeLayer(vector);
                map.removeLayer(searchlayer);
                if (features.length) {
                    vector = L.Proj.geoJson(data).addTo(map);
                    var counter = 0;
                    for (var i in features) {
                        var feature = features[i], attributes = feature.properties;
                        if (counter > 0) {
                            html +=
                                "<hr>";
                        }
                        var ObjectType = "";
                        var bf = "";
                        var c = '<br/><a type="button" class="btn-success-min sidebar-open-button" href="/Main/SelectionMenu/' + feature.id + '">Подать заявку по объекту</a>' +
                            "<br/>";
                        switch (attributes.obtypeuid) {
                            case "ЗНОП":
                                ObjectType = "ЗНОП городского значения";
                                bf = c;
                                break;
                            case "ОКН":
                                ObjectType = "Объекты культурного наследия";
                                break;
                            case "АД":
                                ObjectType = "Автомобильные дороги";
                                break;
                            case "Внутриквартальное озеленение":
                                ObjectType = "ЗНОП местного значения";
                                bf = c;
                                break;
                            default:
                                ObjectType = attributes.obtypeuid;
                        }
                        html +=
                            "Тип: " + ObjectType +
                                "<br/>" +
                                "Объект: " + attributes.name +
                                "<br/>";
                        html += bf;
                        counter++;
                    }
                    html += "<br/>";
                    popup = L.popup(null, me).setLatLng(loc).setContent(html).openOn(map);
                    me.on("popupclose", function () {
                        map.removeLayer(vector);
                        me.off("popupclose", function () { });
                    });
                }
                else {
                    html = "Нет данных." +
                        "<br/>";
                    popup = L.popup().setLatLng(loc).setContent(html).openOn(map);
                }
            }
            function retALString() {
                var ols = "";
                var olc = al.getActiveOverlayLayers();
                var c = 0;
                for (var ol in olc) {
                    if (olc[ol].layer.wmsParams.layers == "znop:zemuch") {
                    }
                    else {
                        if (c > 0) {
                            ols += ",";
                        }
                        ols += olc[ol].layer.wmsParams.layers;
                        c++;
                    }
                }
                return ols;
            }
            ;
            var geocoder = L.Control.geocoder({
                defaultMarkGeocode: false,
                position: 'topleft',
                placeholder: 'Введите адрес',
                errorMessage: 'Ничего не найдено',
                geocoder: new L.Control.Geocoder.Nominatim({
                    serviceUrl: conf.MapServicesParams.NominatimAddress
                })
            }).on('markgeocode', function (e) {
                var bbox = e.geocode.bbox;
                var poly = L.polygon([
                    bbox.getSouthEast(),
                    bbox.getNorthEast(),
                    bbox.getNorthWest(),
                    bbox.getSouthWest()
                ]);
                var point = [];
                point.push(e.geocode.center.lng);
                point.push(e.geocode.center.lat);
                GetSearchResult(point);
                map.fitBounds(poly.getBounds());
            }).addTo(map);
            function GetSearchResult(point) {
                var res = [];
                res.push(proj4(pr, point));
                getSFtrByPoint("Point", res);
            }
            function getSFtrByPoint(type, crds) {
                var getData = mapservice.getSRPoint(type, crds);
                getData.then(function (rc) {
                    map.removeLayer(searchlayer);
                    searchlayer = L.geoJSON(rc.data, {
                        style: sStyle
                    }).addTo(map);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            var sStyle = {
                "color": "#94b1c7",
                "weight": 5,
                "opacity": 0.85
            };
        }
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .controller('dmd_cc', dmd_cc);
    dmd_cc.$inject = ['$rootScope', '$location', '$scope', '$cookies', 'mapservice', 'mapfactory', '$filter'];
    function dmd_cc($rootScope, $location, $scope, $cookies, mapservice, mapfactory, $filter) {
        ;
        ;
        ;
        var conf;
        $rootScope.$on('config_loaded', function (event, data) {
            loadCofig(data);
            getZnSt();
            getDistricts();
            getMunicipalDistricts();
        });
        function loadCofig(data) {
            conf = data;
        }
        ;
        var fid = $location.search().featureID;
        var rqid = $location.search().rqid;
        $scope.kKIZnopRequest = {
            Id: 0,
            FullName: "",
            CorpName: "",
            MailAddres: "",
            Thelephone: "",
            Position: "",
            ObtypeUID: "",
            TypeId: null,
            Objectid: null,
            SelectedStatusId: null,
            DistrictId: null,
            MunicipalDistrictId: null,
            OIDSvyaz: null,
            OID_: null,
            Comment: "",
            Address: "",
            ObjectName: "",
            Geometry: "",
            Lat: 0,
            Lng: 0
        };
        var clickAllowed = true;
        var zpLayer = false;
        var crosshairs_enabled = false;
        var drawToolbar = {
            actions: {
                title: 'Отменить рисование',
                text: 'Отменить'
            },
            finish: {
                title: 'Завершить рисование',
                text: 'Завершить'
            },
            undo: {
                title: 'Удалить последнюю нарисованную точку',
                text: 'Удалить последнюю точку'
            },
            buttons: {
                polyline: 'Нарисовать полилинию',
                polygon: 'Создать',
                rectangle: 'Нарисовать прямоугольник',
                circle: 'Нарисовать окружность',
                marker: 'Поставить маркер',
                circlemarker: 'Поставить маркер-окружность'
            }
        };
        var drawHandlers = {
            circle: {
                tooltip: {
                    start: 'Нажмите и перетащите что бы выберать радиус.'
                },
                radius: 'Радиус'
            },
            circlemarker: {
                tooltip: {
                    start: 'Нжмите на карте для установки маркера-окружности.'
                }
            },
            marker: {
                tooltip: {
                    start: 'Нжмите на карте для установки маркера.'
                }
            },
            polygon: {
                error: '<strong>Ошибка:</strong> !',
                tooltip: {
                    start: 'Нажмите, чтобы начать рисовать полигон.',
                    cont: 'Выберете следующую точку полигона.',
                    end: 'Нажмите первую точку, чтобы замкнуть контур полигона и завершить рисование.'
                }
            },
            polyline: {
                error: '<strong>Ошибка:</strong> Края линии не могут пересекаться!',
                tooltip: {
                    start: 'Нажмите, чтобы начать рисовать полилинию.',
                    cont: 'Нажмите, чтобы продолжить рисование полилинии.',
                    end: 'Нажмите последнюю точку для завершения рисования.'
                }
            },
            rectangle: {
                tooltip: {
                    start: 'Нажмите и перетащите, чтобы нарисовать прямоугольник.'
                }
            },
            simpleshape: {
                tooltip: {
                    end: 'Отпустите мышь, чтобы закончить рисование.'
                }
            }
        };
        var editToolbar = {
            actions: {
                save: {
                    title: 'Сохранить изменения',
                    text: 'Сохранить'
                },
                cancel: {
                    title: 'Отменить редактирование и все изменения',
                    text: 'Отменить'
                },
                clearAll: {
                    title: 'Очистить всю область рисования',
                    text: 'Очистить всё'
                }
            },
            buttons: {
                edit: 'Редактировать',
                editDisabled: 'Нет слоев для редактирования',
                remove: 'Удалить',
                removeDisabled: 'Нет слоев для удаления'
            }
        };
        var editHandlers = {
            edit: {
                tooltip: {
                    text: 'Инструмент для редактирования объектов и перетаскивания маркеров',
                    subtext: 'Нажмите «Отмена», чтобы отменить изменения'
                }
            },
            remove: {
                tooltip: {
                    text: 'Нажмите на объект, чтобы удалить'
                }
            }
        };
        var local = {
            draw: {
                toolbar: drawToolbar,
                handlers: drawHandlers
            },
            edit: {
                toolbar: editToolbar,
                handlers: editHandlers
            }
        };
        mapfactory.setRqid(rqid);
        $scope.features = "";
        $scope.dmd_cc_m_formView = "/js/app/tmpl/dmd_cc/m_form.html";
        $scope.dmd_cc_m_form = $scope.dmd_cc_m_formView;
        function getDistricts() {
            var getData = mapservice.getDistricts();
            getData.then(function (rs) {
                $scope.districts = rs.data;
            }, function (rs) {
                alert("Невозможно получить данные по районам!");
            });
        }
        ;
        function getMunicipalDistricts() {
            var getData = mapservice.getMunicipalDistricts();
            getData.then(function (rs) {
                $scope.municipalDistricts = rs.data;
                activate();
            }, function (rs) {
                alert("Невозможно получить данные по муницыпальным округам!");
            });
        }
        ;
        function getZnSt() {
            var getData = mapservice.getZS();
            getData.then(function (rs) {
                $scope.znst = rs.data;
            }, function (rs) {
                alert("Невозможно получить данные по статусам ЗНОП!");
            });
        }
        ;
        function activate() {
            var pr = conf.MapReprojections.D_PULKOVO;
            getFtr(rqid, fid);
            $scope.kKIZnopRequest.TypeId = rqid;
            var TORIS = L.tileLayer.wms(conf.MapLayersLinks.TORIS, {
                maxZoom: 19
            }), ZNOP_POLYGON = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:znop',
                opacity: 0,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
                crs: L.CRS.EPSG4326,
            }), znop_distr = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:mo',
                opacity: 0.5,
                format: 'image/png',
                transparent: true,
                maxZoom: 19,
            }), znop_gor = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:znop_gor',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
                crs: L.CRS.EPSG4326,
            }), znop_mo = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:znop-local',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
            }), znop_FACADE = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:facade',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
            }), znop_okn = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:okn',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
            }), znop_vo = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:vo',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
            }), znop_mroads = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:road_mo',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
            }), znop_roads = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:ad',
                opacity: 0.5,
                format: 'image/png',
                cql_filter: "is_active = 'Y'",
                transparent: true,
                maxZoom: 19,
            }), zu_palata_polygon = L.tileLayer.wms(conf.MapLayersLinks.GeoserverWms, {
                layers: 'znop:zemuch',
                opacity: 0.5,
                format: 'image/png',
                transparent: true,
                maxZoom: 19,
            }), vector = L.geoJSON(), edLayer = L.geoJSON(), multipolygon = L.geoJson(), searchlayer = L.geoJson(), map = L.map('drawMap', {
                zoom: 14,
                maxZoom: 19,
                center: [59.9386300, 30.3141300],
                zoomControl: false,
                crs: L.CRS.EPSG3857,
                layers: [TORIS, ZNOP_POLYGON, znop_gor, znop_mo, vector, edLayer]
            });
            var baseLayers = {
                "План": TORIS,
            };
            var overlays = {
                "ЗНОП городского значения": znop_gor,
                "ЗНОП местного значения": znop_mo,
                "Фасады": znop_FACADE,
                "Объекты культурного наследия": znop_okn,
                "Водные объекты": znop_vo,
                "Дороги": znop_roads,
                "Дороги внутри муниципальных образований": znop_mroads,
                "Земельные участки и их части": zu_palata_polygon
            };
            var srLayers = "";
            var al = L.control.activeLayers(baseLayers, overlays);
            al.addTo(map);
            L.control.scale({ imperial: false }).addTo(map);
            L.control.zoom({
                zoomInTitle: "Приблизить",
                zoomOutTitle: "Отдалить"
            }).addTo(map);
            L.control.fullscreen({
                title: 'На полный экран',
                titleCancel: 'Свернуть карту'
            }).addTo(map);
            var geocoder = L.Control.geocoder({
                defaultMarkGeocode: false,
                position: 'topleft',
                placeholder: 'Введите адрес',
                errorMessage: 'Ничего не найдено',
                geocoder: new L.Control.Geocoder.Nominatim({
                    serviceUrl: conf.MapServicesParams.NominatimAddress
                })
            }).on('markgeocode', function (e) {
                var bbox = e.geocode.bbox;
                var poly = L.polygon([
                    bbox.getSouthEast(),
                    bbox.getNorthEast(),
                    bbox.getNorthWest(),
                    bbox.getSouthWest()
                ]);
                var point = [];
                point.push(e.geocode.center.lng);
                point.push(e.geocode.center.lat);
                GetSearchResult(point);
                map.fitBounds(poly.getBounds());
            }).addTo(map);
            var controlAngular = L.control.angular({
                position: 'topright',
                template: "<ng-include src='burl'></ng-include>",
                controllerAs: 'lc',
                controller: ['$scope', '$element', '$map', 'mapfactory', function ($scope, $element, $map, mapfactory) {
                        $scope.barView = "/js/app/tmpl/dmd_cc/c_bar/c_bar.html";
                        $scope.burl = $scope.barView;
                        $scope.$watch(function () {
                            return mapfactory.getRqid();
                        }, function () {
                            $scope.rqidt = mapfactory.getRqid();
                        });
                        $scope.zoom = function () {
                            $map.zoomIn();
                        };
                        $scope.zoomO = function () {
                            $map.zoomOut();
                        };
                    }]
            });
            map.addControl(controlAngular);
            map.on("click", GetFeatureInfoWMS, ZNOP_POLYGON);
            var minTORIS = L.tileLayer.wms(conf.MapLayersLinks.MinMapToris, {});
            var miniMap = new L.Control.MiniMap(minTORIS, { toggleDisplay: true }).addTo(map);
            L.drawLocal = local;
            var drawCtrl = new L.Control.Draw({
                edit: {
                    featureGroup: edLayer,
                    poly: {
                        allowIntersection: false
                    }
                },
                draw: {
                    circle: false,
                    marker: false,
                    circlemarker: false,
                    polyline: false,
                    rectangle: false,
                    polygon: {
                        allowIntersection: false,
                        showArea: true
                    }
                }
            });
            setInst(rqid, map, drawCtrl);
            map.on(L.Draw.Event.CREATED, function (e) {
                var type = e.layerType, layer = e.layer, drPol = layer.toGeoJSON(), crds, coords, res = [], ctr = [];
                mapfactory.setPolType(drPol.geometry.type);
                edLayer.addLayer(e.layer);
                var ct = edLayer.getBounds().getCenter();
                ctr = proj4(pr, [ct.lng, ct.lat]);
                mapfactory.setPolCtrWGS(ct);
                mapfactory.setPolCtr(ctr);
                mapfactory.setGeom(drPol);
                getDFIDataWFS(ctr);
                getFAddress(ct);
                switch (type) {
                    case "marker":
                        layer.bindPopup('TEST!');
                        break;
                    case "circle":
                        res.push(proj4(pr, drPol.geometry.coordinates));
                        mapfactory.setDrGeom(res);
                        layer.bindPopup(polygonPopup);
                        break;
                    case "circlemarker":
                        res.push(proj4(pr, drPol.geometry.coordinates));
                        mapfactory.setDrGeom(res);
                        layer.bindPopup(polygonPopup);
                        break;
                    case "rectangle":
                        crds = drPol.geometry.coordinates;
                        coords = crds[0];
                        coords.forEach(function (item, i, coords) {
                            res.push(proj4(pr, item));
                        });
                        mapfactory.setDrGeom(res);
                        layer.bindPopup(polygonPopup);
                        break;
                    case "polyline":
                        coords = drPol.geometry.coordinates;
                        coords.forEach(function (item, i, coords) {
                            res.push(proj4(pr, item));
                        });
                        mapfactory.setDrGeom(res);
                        layer.bindPopup(polygonPopup);
                        break;
                    case "polygon":
                        crds = drPol.geometry.coordinates;
                        coords = crds[0];
                        coords.forEach(function (item, i, coords) {
                            res.push(proj4(pr, item));
                        });
                        mapfactory.setDrGeom(res);
                        layer.bindPopup(polygonPopup);
                        break;
                    default:
                        layer.bindPopup(polygonPopup);
                }
                layer.openPopup();
                clickAllowed = true;
            });
            map.on(L.Draw.Event.DRAWSTART, function (e) {
                clickAllowed = false;
                L.DomUtil.addClass(map._container, 'crosshair-cursor-enabled');
                crosshairs_enabled = true;
            });
            map.on(L.Draw.Event.DRAWSTOP, function (e) {
                L.DomUtil.removeClass(map._container, 'crosshair-cursor-enabled');
                crosshairs_enabled = false;
            });
            map.on(L.Draw.Event.DELETED, function (e) {
                map.removeLayer(multipolygon);
                mapfactory.setDistr(null);
                mapfactory.setItemEvt(null, 0);
            });
            map.on("popupclose", function () {
                map.removeLayer(vector);
                map.off("popupclose", function () { });
            });
            function setInst(id, m, dc) {
                switch (id) {
                    case "0":
                        m.addControl(dc);
                        break;
                    case "1":
                        break;
                    case "2":
                        break;
                    case "3":
                        m.addControl(dc);
                        break;
                    default:
                        break;
                }
            }
            function SetGeomByRequestId(drPol) {
                switch (rqid) {
                    case "0":
                        if ($scope.kKIZnopRequest.Geometry) {
                            $scope.kKIZnopRequest.Geometry.features.push(drPol);
                        }
                        else {
                            $scope.kKIZnopRequest.Geometry = setNewFC(drPol);
                        }
                        break;
                    case "1":
                        break;
                    case "2":
                        break;
                    case "3":
                        if ($scope.kKIZnopRequest.Geometry) {
                            $scope.kKIZnopRequest.Geometry.features.push(drPol);
                        }
                        else {
                            $scope.kKIZnopRequest.Geometry = setNewFC(drPol);
                        }
                        break;
                    default:
                        break;
                }
            }
            function SetDGByRequestId(drPol, rid) {
                switch (rid) {
                    case "0":
                        mapfactory.setDrGeom = drPol;
                        break;
                    case "1":
                        break;
                    case "2":
                        break;
                    case "3":
                        mapfactory.setDrGeom = drPol;
                        break;
                    default:
                        break;
                }
            }
            function GetSearchResult(point) {
                var res = [];
                res.push(proj4(pr, point));
                getSFtrByPoint("Point", res);
            }
            function getSFtrByPoint(type, crds) {
                var getData = mapservice.getSRPoint(type, crds);
                getData.then(function (rc) {
                    $scope.features = rc.data.features;
                    map.removeLayer(searchlayer);
                    searchlayer = L.geoJson(rc.data, {
                        style: sStyle
                    }).addTo(map);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function GetFeatureInfoWMS(e) {
                if (clickAllowed) {
                    var me = this, map = me._map, loc = e.latlng, xy = e.containerPoint, size = map.getSize(), bounds = map.getBounds(), url = me._url, crs = me.options.crs || map.options.crs, sw = crs.project(bounds.getSouthWest()), ne = crs.project(bounds.getNorthEast()), params = me.wmsParams, obj = {
                        service: "WMS",
                        version: params.version,
                        request: "GetFeatureInfo",
                        layers: params.layers,
                        styles: params.styles,
                        cql_filter: "is_active = 'Y'",
                        bbox: sw.x + "," + sw.y + "," + ne.x + "," + ne.y,
                        width: size.x,
                        height: size.y,
                        query_layers: retALString(),
                        info_format: "application/json",
                        feature_count: 5
                    }, dobj = {
                        service: "WMS",
                        version: params.version,
                        request: "GetFeatureInfo",
                        layers: "znop:mo",
                        styles: params.styles,
                        bbox: sw.x + "," + sw.y + "," + ne.x + "," + ne.y,
                        width: size.x,
                        height: size.y,
                        propertyName: "НАЗВАНИЕ,РАЙОН",
                        query_layers: "znop:mo",
                        info_format: "application/json",
                        feature_count: 1
                    };
                    if (parseFloat(params.version) >= 1.3) {
                        obj.crs = crs.code;
                        obj.i = xy.x;
                        obj.j = xy.y;
                        dobj.crs = crs.code;
                        dobj.i = xy.x;
                        dobj.j = xy.y;
                    }
                    else {
                        obj.srs = crs.code;
                        obj.x = xy.x;
                        obj.y = xy.y;
                        dobj.srs = crs.code;
                        dobj.x = xy.x;
                        dobj.y = xy.y;
                    }
                    var curl = url + L.Util.getParamString(obj, url, true);
                    var dcurl = url + L.Util.getParamString(dobj, url, true);
                    getDFIData(dcurl);
                    getFIData(curl, me, loc);
                    zpLayer = false;
                }
            }
            function retALString() {
                var ols = "";
                var olc = al.getActiveOverlayLayers();
                var c = 0;
                for (var ol in olc) {
                    if (olc[ol].layer.wmsParams.layers === "znop:zemuch") {
                        zpLayer = true;
                    }
                    else {
                        if (c > 0) {
                            ols += ",";
                        }
                        ols += olc[ol].layer.wmsParams.layers;
                        c++;
                    }
                }
                return ols;
            }
            function getFIData(curl, me, loc) {
                var getData = mapservice.reqBBOX(curl);
                getData.then(function (rc) {
                    mapfactory.setJson(rc.data);
                    setpopupangular(me, loc);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function getDFIData(dcurl) {
                var getData = mapservice.reqBBOX(dcurl);
                getData.then(function (rc) {
                    mapfactory.setDistr(rc.data);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function getDFIDataWFS(point) {
                var getData = mapservice.getDistrBP(point);
                getData.then(function (rc) {
                    mapfactory.setDistr(rc.data);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function getFAddress(point) {
                var getData = mapservice.getAddress(point);
                getData.then(function (rc) {
                    mapfactory.setAddr(rc.data);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function getDataCascade(point, geom) {
                var getData = mapservice.getDistrBP(point);
                getData.then(function (rc) {
                    mapfactory.setDistr(rc.data);
                    mapfactory.setItemEvt(geom, 3);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function getGDPolygon(type, crds) {
                var getData = mapservice.getftrByGeom(type, crds);
                $scope.fid = mapfactory.getItem().id;
                getData.then(function (rc) {
                    mapfactory.setJson(rc.data);
                    map.removeLayer(multipolygon);
                    multipolygon = L.geoJson(rc.data, {
                        style: vStyle
                    }).addTo(map);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            function getGDPolygonDW(type, crds) {
                var getData = mapservice.getDWPolygon(type, crds);
                getData.then(function (rc) {
                    mapfactory.setJson(rc.data);
                    map.removeLayer(multipolygon);
                    multipolygon = L.geoJson(rc.data, {
                        style: vStyle
                    }).addTo(map);
                }, function (rc) {
                    alert("Нет ответа от сервера!");
                });
            }
            var dataPopup = L.popup.angular({
                template: "<ng-include src='ppurl'></ng-include>",
                controllerAs: 'dataPopup',
                controller: ['$scope', '$map', 'mapfactory', function ($scope, $map, mapfactory) {
                        var fid = mapfactory.getItem();
                        if (fid) {
                            $scope.fid = fid.id;
                        }
                        $scope.getFeature = function (ftr) {
                            mapfactory.setItemEvt(ftr, 3);
                        };
                        var data = mapfactory.getJson();
                        $scope.features = data.features;
                        $scope.rqid = mapfactory.getRqid();
                        $scope.popupView = "/js/app/tmpl/dmd_cc/m_popup/m_popup.html";
                        $scope.ppurl = $scope.popupView;
                    }]
            });
            var polygonPopup = L.popup.angular({
                template: "<ng-include src='ppurl'></ng-include>",
                controllerAs: 'drawPopup',
                controller: ['$scope', '$map', 'mapfactory', 'mapservice', function ($scope, $map, mapfactory, mapservice) {
                        $scope.popupView = "/js/app/tmpl/dmd_cc/p_popup/p_popup.html";
                        $scope.ppurl = $scope.popupView;
                        var fid = mapfactory.getItem();
                        if (fid) {
                            $scope.fid = fid.id;
                        }
                        $scope.getFeature = function (ftr) {
                            mapfactory.setItemEvt(ftr, 1);
                        };
                        $scope.gfWithRChange = function (ftr) {
                            mapfactory.setRqid("3");
                            $location.search('rqid', 3);
                            mapfactory.setItemEvt(ftr, 1);
                        };
                        $scope.clsp = function () {
                            $map.closePopup();
                        };
                        $scope.getDrawGeom = function () {
                            var geom = mapfactory.getGeom();
                            mapfactory.setItemEvt(geom, 2);
                        };
                        $scope.pushPoly = function (ftr) {
                            var item = ftr;
                            mapfactory.setItemEvt(item, 1);
                        };
                        $scope.cutPoly = function (ftr) {
                            var item = ftr;
                            mapfactory.setItemEvt(item, 4);
                        };
                        $scope.repPoly = function (ftr) {
                            var item = ftr;
                            mapfactory.setItemEvt(item, 5);
                        };
                        var type = mapfactory.getPolType();
                        var crds = mapfactory.getDrGeom();
                        $scope.rqid = mapfactory.getRqid();
                        switch ($scope.rqid) {
                            case "0":
                                getFtrByPolGeom(type, crds);
                                break;
                            case "1":
                                getFtrByPolGeom(type, crds);
                                break;
                            case "2":
                                getFtrByPolGeom(type, crds);
                                break;
                            case "3":
                                getFtrByPolGeom(type, crds);
                                break;
                            default:
                        }
                        function getFtrByPolGeom(type, crds) {
                            var getData;
                            switch (type) {
                                case "Polygon":
                                    getData = mapservice.getDWPolygon(type, crds);
                                    break;
                                case "LineString":
                                    getData = mapservice.getDWLine(type, crds);
                                    break;
                                case "Point":
                                    getData = mapservice.getDWPoint(type, crds);
                                    break;
                                default:
                                    alert("Некорректный тип геометрии!");
                                    break;
                            }
                            getData.then(function (rc) {
                                $scope.features = rc.data.features;
                                $map.removeLayer(multipolygon);
                                multipolygon = L.geoJson(rc.data, {
                                    style: vStyle
                                }).addTo($map);
                            }, function (rc) {
                                alert("Нет ответа от сервера!");
                            });
                        }
                        function setNewPol(itype, icrds) {
                            var newGeom = { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: { type: itype, coordinates: icrds } }] };
                            return newGeom;
                        }
                    }]
            });
            function setpopupangular(me, loc) {
                var data = mapfactory.getJson();
                map.removeLayer(vector);
                map.removeLayer(searchlayer);
                vector = L.Proj.geoJson(data).addTo(map);
                dataPopup.setLatLng(loc).openOn(map);
            }
            $scope.$watch(function () {
                return mapfactory.getItem();
            }, function () {
                var evt = mapfactory.getEvt();
                $scope.kKIZnopRequest.TypeId = mapfactory.getRqid();
                switch (evt) {
                    case 0:
                        mapfactory.setEvt(0);
                        break;
                    case 1:
                        pushNewObj(edLayer.toGeoJSON());
                        mapfactory.setEvt(0);
                        break;
                    case 2:
                        addNewDrObj(edLayer.toGeoJSON());
                        mapfactory.setEvt(0);
                        break;
                    case 3:
                        addNewObj();
                        break;
                    case 4:
                        cutObj(edLayer.toGeoJSON());
                        mapfactory.setEvt(0);
                        break;
                    case 5:
                        replaceObj(edLayer.toGeoJSON());
                        mapfactory.setEvt(0);
                        break;
                    default:
                        addNewObj();
                        mapfactory.setEvt(0);
                }
            });
            function addNewObj() {
                var sftr = mapfactory.getItem();
                var distr = mapfactory.getDistr();
                if (distr) {
                    var md = $filter('filter')($scope.municipalDistricts, distr.features[0].properties.НАЗВАНИЕ);
                    var d = $filter('filter')($scope.districts, distr.features[0].properties.РАЙОН);
                    $scope.kKIZnopRequest.MunicipalDistrictId = md[0].id;
                    $scope.kKIZnopRequest.DistrictId = d[0].id;
                }
                if (!sftr.properties.address) {
                    var na = mapfactory.getAddr();
                    var sp = ", ";
                    sftr.properties.address = addressCompose(na, sp);
                }
                if (sftr.properties.obtypeuid) {
                    $scope.kKIZnopRequest.SelectedStatusId = stateSelector(sftr.properties.obtypeuid);
                }
                $scope.sftr = sftr;
                $scope.kKIZnopRequest.OIDSvyaz = sftr.properties.oid_;
                $scope.kKIZnopRequest.Objectid = sftr.properties.OBJECTID;
                $scope.kKIZnopRequest.ObjectName = sftr.properties.address;
                $scope.kKIZnopRequest.Address = sftr.properties.address;
                if (sftr) {
                    var geom = setNewGeom(sftr.geometry);
                    map.removeLayer(multipolygon);
                    multipolygon = L.geoJson(geom, {
                        style: vStyle
                    }).addTo(map);
                    var ct = multipolygon.getBounds().getCenter();
                    $scope.kKIZnopRequest.Lng = ct.lng;
                    $scope.kKIZnopRequest.Lat = ct.lat;
                    map.fitBounds(multipolygon.getBounds());
                    $scope.kKIZnopRequest.Geometry = geom;
                    map.closePopup();
                }
            }
            function addNewDrObj(geom) {
                var sftr = mapfactory.getItem();
                var distr = mapfactory.getDistr();
                if (distr) {
                    var md = $filter('filter')($scope.municipalDistricts, distr.features[0].properties.НАЗВАНИЕ);
                    var d = $filter('filter')($scope.districts, distr.features[0].properties.РАЙОН);
                    $scope.kKIZnopRequest.MunicipalDistrictId = md[0].id;
                    $scope.kKIZnopRequest.DistrictId = d[0].id;
                }
                if (!sftr.properties.address) {
                    var na = mapfactory.getAddr();
                    var sp = ", ";
                    sftr.properties.address = addressCompose(na, sp);
                }
                if (sftr.properties.obtypeuid) {
                    $scope.kKIZnopRequest.SelectedStatusId = stateSelector(sftr.properties.obtypeuid);
                }
                $scope.sftr = sftr;
                $scope.kKIZnopRequest.OIDSvyaz = sftr.properties.oid_;
                $scope.kKIZnopRequest.Objectid = sftr.properties.OBJECTID;
                $scope.kKIZnopRequest.ObjectName = sftr.properties.address;
                $scope.kKIZnopRequest.Address = sftr.properties.address;
                $scope.sftr = sftr;
                if (sftr) {
                    map.removeLayer(multipolygon);
                    multipolygon = L.geoJson(geom, {
                        style: vStyle
                    }).addTo(map);
                    var ct = multipolygon.getBounds().getCenter();
                    $scope.kKIZnopRequest.Lng = ct.lng;
                    $scope.kKIZnopRequest.Lat = ct.lat;
                    map.fitBounds(multipolygon.getBounds());
                    $scope.kKIZnopRequest.Geometry = geom;
                    map.closePopup();
                }
            }
            function pushNewObj(geom) {
                map.removeLayer(multipolygon);
                var sftr = mapfactory.getItem();
                var distr = mapfactory.getDistr();
                if (distr) {
                    var md = $filter('filter')($scope.municipalDistricts, distr.features[0].properties.НАЗВАНИЕ);
                    var d = $filter('filter')($scope.districts, distr.features[0].properties.РАЙОН);
                    $scope.kKIZnopRequest.MunicipalDistrictId = md[0].id;
                    $scope.kKIZnopRequest.DistrictId = d[0].id;
                }
                if (!sftr.properties.address) {
                    var na = mapfactory.getAddr();
                    var sp = ", ";
                    sftr.properties.address = addressCompose(na, sp);
                }
                if (sftr.properties.obtypeuid) {
                    $scope.kKIZnopRequest.SelectedStatusId = stateSelector(sftr.properties.obtypeuid);
                }
                $scope.sftr = sftr;
                $scope.kKIZnopRequest.OIDSvyaz = sftr.properties.oid_;
                $scope.kKIZnopRequest.Objectid = sftr.properties.OBJECTID;
                $scope.kKIZnopRequest.ObjectName = sftr.properties.address;
                $scope.kKIZnopRequest.Address = sftr.properties.address;
                if (sftr) {
                    var sg = setNewGeom(sftr.geometry);
                    geom.features.push(setNewFtr(sftr.geometry));
                    map.removeLayer(multipolygon);
                    var part = L.geoJson(geom);
                    multipolygon = unify(part.getLayers());
                    multipolygon.addTo(map);
                    var ct = multipolygon.getBounds().getCenter();
                    $scope.kKIZnopRequest.Lng = ct.lng;
                    $scope.kKIZnopRequest.Lat = ct.lat;
                    map.fitBounds(multipolygon.getBounds());
                    $scope.kKIZnopRequest.Geometry = multiPolygonCheker(multipolygon.toGeoJSON());
                    map.closePopup();
                }
            }
            function unify(polyList) {
                var JsonList = [];
                for (var i = 0; i < polyList.length; ++i) {
                    JsonList.push(polyList[i].toGeoJSON());
                }
                var unionTemp = turf.union.apply(this, JsonList);
                return L.geoJson(unionTemp, {
                    style: vStyle
                });
            }
            function cutObj(geom) {
                map.removeLayer(multipolygon);
                var sftr = mapfactory.getItem();
                var distr = mapfactory.getDistr();
                if (distr) {
                    var md = $filter('filter')($scope.municipalDistricts, distr.features[0].properties.НАЗВАНИЕ);
                    var d = $filter('filter')($scope.districts, distr.features[0].properties.РАЙОН);
                    $scope.kKIZnopRequest.MunicipalDistrictId = md[0].id;
                    $scope.kKIZnopRequest.DistrictId = d[0].id;
                }
                if (!sftr.properties.address) {
                    var na = mapfactory.getAddr();
                    var sp = ", ";
                    sftr.properties.address = addressCompose(na, sp);
                }
                if (sftr.properties.obtypeuid) {
                    $scope.kKIZnopRequest.SelectedStatusId = stateSelector(sftr.properties.obtypeuid);
                }
                $scope.sftr = sftr;
                $scope.kKIZnopRequest.OIDSvyaz = sftr.properties.oid_;
                $scope.kKIZnopRequest.Objectid = sftr.properties.OBJECTID;
                $scope.kKIZnopRequest.ObjectName = sftr.properties.address;
                $scope.kKIZnopRequest.Address = sftr.properties.address;
                if (sftr) {
                    var sg = setNewGeom(sftr.geometry);
                    for (var i = 0; i < geom.features.length; ++i) {
                        sg.features.push(geom.features[i]);
                    }
                    map.removeLayer(multipolygon);
                    var part = L.geoJson(sg);
                    multipolygon = diff(part.getLayers());
                    multipolygon.addTo(map);
                    var ct = multipolygon.getBounds().getCenter();
                    $scope.kKIZnopRequest.Lng = ct.lng;
                    $scope.kKIZnopRequest.Lat = ct.lat;
                    map.fitBounds(multipolygon.getBounds());
                    $scope.kKIZnopRequest.Geometry = multiPolygonCheker(multipolygon.toGeoJSON());
                    map.removeLayer(edLayer);
                    edLayer = L.geoJSON();
                    edLayer.addTo(map);
                    map.closePopup();
                }
            }
            function diff(polyList) {
                var JsonList = [];
                for (var i = 0; i < polyList.length; ++i) {
                    JsonList.push(polyList[i].toGeoJSON());
                }
                var diffTemp = turf.difference.apply(this, JsonList);
                return L.geoJson(diffTemp, {
                    style: vStyle
                });
            }
            function replaceObj(geom) {
                map.removeLayer(multipolygon);
                var sftr = mapfactory.getItem();
                var distr = mapfactory.getDistr();
                if (distr) {
                    var md = $filter('filter')($scope.municipalDistricts, distr.features[0].properties.НАЗВАНИЕ);
                    var d = $filter('filter')($scope.districts, distr.features[0].properties.РАЙОН);
                    $scope.kKIZnopRequest.MunicipalDistrictId = md[0].id;
                    $scope.kKIZnopRequest.DistrictId = d[0].id;
                }
                if (!sftr.properties.address) {
                    var na = mapfactory.getAddr();
                    var sp = ", ";
                    sftr.properties.address = addressCompose(na, sp);
                }
                if (sftr.properties.obtypeuid) {
                    $scope.kKIZnopRequest.SelectedStatusId = stateSelector(sftr.properties.obtypeuid);
                }
                $scope.sftr = sftr;
                $scope.kKIZnopRequest.OIDSvyaz = sftr.properties.oid_;
                $scope.kKIZnopRequest.Objectid = sftr.properties.OBJECTID;
                $scope.kKIZnopRequest.ObjectName = sftr.properties.address;
                $scope.kKIZnopRequest.Address = sftr.properties.address;
                if (sftr) {
                    map.removeLayer(multipolygon);
                    multipolygon = L.geoJson(geom, {
                        style: vStyle
                    }).addTo(map);
                    map.fitBounds(multipolygon.getBounds());
                    $scope.kKIZnopRequest.Geometry = geom;
                    map.closePopup();
                }
            }
            function findPolygonByType(polyList, type) {
                for (var i = 0; i < polyList.length; ++i) {
                    if (polyList[i].feature.geometry.type === type) {
                        return polyList[i].toGeoJSON();
                    }
                }
                ;
                return null;
            }
            function addressCompose(na, sp) {
                var resAddr = "";
                if (na.address.town) {
                    na.address.house_number ? resAddr = "г." + na.address.town + sp + na.address.road + sp + "дом " + na.address.house_number
                        : resAddr = adrTNoNumb(na, sp);
                }
                else {
                    na.address.house_number ? resAddr = "г.Санкт-Петербург" + sp + na.address.road + sp + "дом " + na.address.house_number
                        : resAddr = adrNoNumb(na, sp);
                }
                return resAddr;
            }
            function adrTNoNumb(na, sp) {
                var resAddr = "";
                if (na.address.road) {
                    na.namedetails.name ? resAddr = "г." + na.address.town + sp + na.address.road + sp + na.namedetails.name
                        : resAddr = na.display_name;
                }
                else {
                    na.namedetails.name ? resAddr = "г." + na.address.town + sp + na.address.pedestrian + sp + na.namedetails.name
                        : resAddr = na.display_name;
                }
                return resAddr;
            }
            function adrNoNumb(na, sp) {
                var resAddr = "";
                if (na.address.road) {
                    na.namedetails.name ? resAddr = "г.Санкт-Петербург" + sp + na.address.road + sp + na.namedetails.name
                        : resAddr = na.display_name;
                }
                else {
                    na.namedetails.name ? resAddr = "г.Санкт-Петербург" + sp + na.address.pedestrian + sp + na.namedetails.name
                        : resAddr = na.display_name;
                }
                return resAddr;
            }
            function updatePoints(pts) {
                for (var p in pts) {
                    L.marker([pts[p].lat, pts[p].lng]).addTo(map);
                }
            }
            function getFtr(rqid, fid) {
                $scope.kKIZnopRequest.TypeId = rqid;
                if (fid) {
                    var getData = mapservice.getftrById(fid);
                    getData.then(function (rq) {
                        multipolygon = L.geoJson(rq.data, {
                            style: vStyle
                        }).addTo(map);
                        map.fitBounds(multipolygon.getBounds());
                        var ct = multipolygon.getBounds().getCenter();
                        var ctr = proj4(pr, [ct.lng, ct.lat]);
                        mapfactory.setPolCtr(ctr);
                        getDataCascade(ctr, rq.data.features[0]);
                        $scope.zs = stateSelector(rq.data.features[0].properties.obtypeuid);
                    }, function (rq) {
                        alert("Нет ответа от сервера!");
                    });
                }
            }
            var vStyle = {
                "color": "#fff25b",
                "weight": 5,
                "opacity": 0.65
            };
            var sStyle = {
                "color": "#94b1c7",
                "weight": 5,
                "opacity": 0.85
            };
            $scope.fileList = [];
            $scope.curFile;
            $scope.ImageProperty = {
                file: ''
            };
            var allftypes;
            allftypes = conf.AllowedFileTypes.split(",");
            $scope.setFile = function (element) {
                $scope.fileList = [];
                $scope.fileallerts = [];
                var files = element.files;
                for (var i = 0; i < files.length; i++) {
                    $scope.ImageProperty.file = files[i];
                    if (allftypes.includes($scope.ImageProperty.file.type)) {
                        $scope.fileList.push($scope.ImageProperty);
                    }
                    else {
                        var allert = $scope.ImageProperty.file.name + " - Файл имеет запрещённый тип и не будет принят. ";
                        $scope.fileallerts.push(allert);
                    }
                    $scope.ImageProperty = {};
                    $scope.$apply();
                }
            };
            $scope.UploadFile = function () {
                var token = $cookies.get('XSRF-TOKEN');
                var lenght = $scope.fileList.length;
                for (var i = 0; i < lenght; i++) {
                    $scope.UploadFileIndividual(token, $scope.fileList[i].file, $scope.fileList[i].file.name, $scope.fileList[i].file.type, $scope.fileList[i].file.size, $scope.requestkey, lenght);
                }
                $scope.isUploadNow = true;
            };
            var fuploadcont = 0;
            $scope.UploadFileIndividual = function (token, fileToUpload, name, type, size, requestkey, lenght) {
                var reqObj = new XMLHttpRequest();
                reqObj.upload.addEventListener("progress", uploadProgress, false);
                reqObj.addEventListener("load", uploadComplete, false);
                reqObj.addEventListener("error", uploadFailed, false);
                reqObj.addEventListener("abort", uploadCanceled, false);
                reqObj.open("POST", "/MapDraw/UploadFiles", true);
                reqObj.setRequestHeader("Content-Type", "multipart/form-data");
                reqObj.setRequestHeader('X-XSRF-TOKEN', token);
                reqObj.setRequestHeader('X-File-Name', encodeURIComponent(name));
                reqObj.setRequestHeader('X-File-Type', type);
                reqObj.setRequestHeader('X-File-Size', size);
                reqObj.setRequestHeader('X-File-RequestKey', requestkey);
                reqObj.send(fileToUpload);
                function uploadProgress(evt) {
                    if (evt.lengthComputable) {
                        var uploadProgressCount = Math.round(evt.loaded * 100 / evt.total);
                        if (uploadProgressCount == 100) {
                        }
                    }
                }
                function uploadComplete(evt) {
                    $scope.$apply();
                    fuploadcont++;
                    if (fuploadcont == lenght) {
                        fuploadcont = 0;
                        window.location.replace($scope.redirectUrl);
                        window.location.href;
                    }
                }
                function uploadFailed(evt) {
                    $scope.isUploadNow = false;
                }
                function uploadCanceled(evt) {
                    $scope.isUploadNow = false;
                }
            };
            $scope.addMode = true;
            $scope.toggleAdd = function () {
                $scope.addMode = !$scope.addMode;
            };
        }
        function stateSelector(s) {
            switch (s) {
                case "ЗНОП": return 1;
                case "Внутриквартальное озеленение": return 2;
                case "Резервное озеленение": return 3;
                default: return 0;
            }
        }
        function multiPolygonCheker(incomGeom) {
            if (incomGeom.features[0].geometry.type === "Polygon")
                return createMultipolygon(incomGeom);
            return incomGeom;
        }
        $scope.setNewGeom = function (incomGeom) {
            var newGeom = { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: incomGeom }] };
            return newGeom;
        };
        function setNewGeom(incomGeom) {
            var newGeom = { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: incomGeom }] };
            return newGeom;
        }
        function createMultipolygon(incomGeom) {
            var newGeom = { type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: { type: "MultiPolygon", coordinates: [incomGeom.features[0].geometry.coordinates] } }] };
            return newGeom;
        }
        function setNewFtr(incomGeom) {
            var newGeom = { type: "Feature", properties: {}, geometry: incomGeom };
            return newGeom;
        }
        function setNewFC(ftr) {
            var newGeom = { type: "FeatureCollection", features: [ftr] };
            return newGeom;
        }
        function getAreaOfLayer(drawnItems) {
            var res = 0;
            var layers = drawnItems.getLayers();
            layers.forEach(function (layer, i, layers) {
                res += L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
            });
            return res;
        }
        $scope.postZnopMapDrawCreated = function (kKIZnopRequest) {
            kKIZnopRequest.Geometry = JSON.stringify(kKIZnopRequest.Geometry);
            var getData = mapservice.postZnopMapDrawCreated(kKIZnopRequest);
            getData.then(function (rc) {
                if (0 < $scope.fileList.length) {
                    $scope.redirectUrl = rc.data.url;
                    $scope.requestkey = rc.data.requestkey;
                    $scope.UploadFile();
                }
                else {
                    window.location.replace(rc.data.url);
                    window.location.href;
                }
            }, function (rc) {
                alert("Failed to send data on server!" + rc.data.toString());
            });
        };
        $scope.checkRq = function (kKIZnopRequest) {
            if (kKIZnopRequest.Geometry && kKIZnopRequest.FullName && kKIZnopRequest.Position && kKIZnopRequest.CorpName && kKIZnopRequest.MailAddres && kKIZnopRequest.Thelephone && kKIZnopRequest.MunicipalDistrictId && kKIZnopRequest.DistrictId) {
                return false;
            }
            return true;
        };
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .controller('mds.areas.mapCtrl', mapCtrl);
    mapCtrl.$inject = ['$scope', '$http', 'mapservice'];
    function mapCtrl($scope, $http, mapservice) {
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .controller('mds.areas.mapDrawCtrl', mapDrawCtrl);
    mapDrawCtrl.$inject = ['$scope', '$http', 'mapservice', 'mapfactory'];
    function mapDrawCtrl($scope, $http, mapservice, mapfactory) {
        $scope.pointsFromController = [{ lat: 59.9586800, lng: 30.3341800 }, { lat: 59.9786900, lng: 30.3541900 }];
        $scope.requestURL = "";
        $scope.requestData = "";
        $scope.getPointsFromSomewhere = function () {
            $http.get('/Get/Points/From/Somewhere').success(function (somepoints) {
                $scope.pointsFromController = somepoints;
            });
        };
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .directive('tooltip', tooltip);
    tooltip.$inject = ['$window'];
    function tooltip($window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;
        function link(scope, element, attrs) {
            element.hover(function () {
                element.tooltip('show');
            }, function () {
                element.tooltip('hide');
            });
        }
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .factory('mapfactory', mapfactory);
    mapfactory.$inject = ['$http'];
    function mapfactory($http) {
        var myjsonObj = null;
        var item = null;
        var geom = null;
        var rqid = null;
        var distr = null;
        var drGeom = [];
        var polType = null;
        var polCtr = null;
        var polCtrWGS = null;
        var addr = null;
        var evt = 0;
        var conf = 0;
        return {
            getJson: function () {
                return myjsonObj;
            },
            setJson: function (obj) {
                myjsonObj = obj;
            },
            getItem: function () {
                return item;
            },
            setItemEvt: function (itm, e) {
                item = itm;
                evt = e;
            },
            getGeom: function () {
                return geom;
            },
            setGeom: function (sgeo) {
                geom = sgeo;
            },
            getRqid: function () {
                return rqid;
            },
            setRqid: function (rqd) {
                rqid = rqd;
            },
            getDistr: function () {
                return distr;
            },
            setDistr: function (dstr) {
                distr = dstr;
            },
            getDrGeom: function () {
                return drGeom;
            },
            setDrGeom: function (dg) {
                drGeom = dg;
            },
            getPolType: function () {
                return polType;
            },
            setPolType: function (pt) {
                polType = pt;
            },
            getPolCtr: function () {
                return polCtr;
            },
            setPolCtr: function (pc) {
                polCtr = pc;
            },
            getPolCtrWGS: function () {
                return polCtrWGS;
            },
            setPolCtrWGS: function (pw) {
                polCtrWGS = pw;
            },
            getAddr: function () {
                return addr;
            },
            setAddr: function (a) {
                addr = a;
            },
            getEvt: function () {
                return evt;
            },
            setEvt: function (ev) {
                evt = ev;
            },
            getConf: function () {
                return conf;
            },
            setConf: function (c) {
                conf = c;
            }
        };
    }
})();
(function () {
    'use strict';
    angular
        .module('mds.areas')
        .service('mapservice', mapservice);
    mapservice.$inject = ['$rootScope', '$http'];
    function mapservice($rootScope, $http) {
        ;
        var serverAddres = "";
        var nomeaddr = "";
        var serviceType = "ows";
        var service = "WFS";
        var version = "1.0.0";
        var requestType = "GetFeature";
        var maxFeatures = "1";
        var outputFormat = "application%2Fjson";
        var featureID = "";
        var srsName = "";
        var conf;
        this.getConfig = function () {
            return $http.get("/Main/Config");
        };
        function activate() {
            serverAddres = conf.MapServicesParams.GeoserverAddress;
            nomeaddr = conf.MapServicesParams.NominatimAddress;
            srsName = conf.MapServicesParams.SrsName;
        }
        ;
        $rootScope.$on('config_loaded', function (event, data) {
            conf = data;
            activate();
        });
        this.getConf = function () {
            return conf;
        };
        this.getDistricts = function () {
            return $http.get("/MapDraw/Districts");
        };
        this.getMunicipalDistricts = function () {
            return $http.get("/MapDraw/MunicipalDistricts");
        };
        this.postZnopMapDrawCreated = function (req) {
            var response = $http({
                method: "post",
                url: "/MapDraw/ZnopMapDrawCreated",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: req
            });
            return response;
        };
        this.getAllJson = function () {
            return $http.get("/Main/AllJson");
        };
        this.getCountrie = function () {
            return $http.get("/Main/CountriesGeoJson");
        };
        this.getZNOP = function () {
            return $http.get("/Main/ZNOPGeoJson");
        };
        this.getZNOPM = function () {
            return $http({
                method: 'GET',
                url: 'http://dev5002.pob.adc.spb.ru/geoserver/znop/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=znop:znop-local&maxFeatures=50&outputFormat=application%2Fjson&srsName=EPSG:4326',
                dataType: 'jsonp',
            });
        };
        this.getZNOPgor = function () {
            return $http({
                method: 'GET',
                url: 'http://dev5002.pob.adc.spb.ru/geoserver/znop/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=znop:znop_gor&outputFormat=application%2Fjson&srsName=EPSG:4326',
                dataType: 'jsonp',
            });
        };
        this.getZS = function () {
            return $http.get("/MapDraw/GetZnopStatuses");
        };
        this.getFeature = function (rqid, fid) {
            var response = $http({
                method: "post",
                url: "/MapDraw/GetFeature",
                params: {
                    rqid: rqid,
                    fid: fid
                }
            });
            return response;
        };
        this.getftrById = function (Id) {
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&maxFeatures=" + maxFeatures + "&outputFormat=" + outputFormat + "&srsName=" + srsName + "&featureID=" + Id;
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.reqBBOX = function (geturl) {
            return $http.get(geturl);
        };
        this.getNearestByPoint = function (coords) {
        };
        this.getftrByGeom = function (type, coords) {
            var maxFtr = "50";
            var SelectionLayers = "znop:znop_gor,znop:znop-local";
            var t = "Polygon";
            var cmd1 = "Intersects";
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            coords.forEach(function (item, i, coords) {
                if (i > 0) {
                    rcords += ",";
                }
                rcords += item.toString().replace(",", s);
            });
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "((" + rcords + "))) AND is_active = 'Y'";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getDWPolygon = function (type, coords) {
            var maxFtr = "3";
            var SelectionLayers = "znop:znop_gor,znop:znop-local";
            var t = "Polygon";
            var cmd1 = "DWITHIN";
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            coords.forEach(function (item, i, coords) {
                if (i > 0) {
                    rcords += ",";
                }
                rcords += item.toString().replace(",", s);
            });
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "((" + rcords + ")),15,meters) AND is_active = 'Y'";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getDWPoint = function (type, coords) {
            var maxFtr = "3";
            var SelectionLayers = "znop:znop_gor,znop:znop-local";
            var t = "Point";
            var cmd1 = "DWITHIN";
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            rcords = coords.toString().replace(",", s);
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "(" + rcords + "),15,meters) AND is_active = 'Y'";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getSRPoint = function (type, coords) {
            var maxFtr = "5";
            var SelectionLayers = "znop:znop_gor,znop:znop-local,znop:okn,znop:facade,znop:ad,znop:road_mo";
            var t = "Point";
            var cmd1 = "DWITHIN";
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            rcords = coords.toString().replace(",", s);
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "(" + rcords + "),1,meters) AND is_active = 'Y'";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getDWLine = function (type, coords) {
            var maxFtr = "3";
            var SelectionLayers = "znop:znop_gor,znop:znop-local";
            var t = "Linestring";
            var cmd1 = "DWITHIN";
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            coords.forEach(function (item, i, coords) {
                if (i > 0) {
                    rcords += ",";
                }
                rcords += item.toString().replace(",", s);
            });
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "(" + rcords + "),15,meters) AND is_active = 'Y'";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getftrByGeomXML = function (type, idata) {
            var SelectionLayers = "znop:znop_gor,znop:znop-local";
            var t = "Polygon";
            var cmd1 = "Intersects";
            var xmlns1 = "";
            var s = " ";
            var coords = idata[0];
            var rcords = coords.toString().replaceAll(",", s);
            var geturl = serverAddres + "/" + "wfs" + "?request=" + requestType + "&version=" + version + "&typeName=" + SelectionLayers + "&srsName=" + srsName + "&outputFormat=" + outputFormat + "&FILTER=<Filter xmlns='http://www.opengis.net/ogc' xmlns:gml='http://www.opengis.net/gml'><" + cmd1 + "><PropertyName>geom</PropertyName><gml:" + t + " srsName='http://www.opengis.net/def/crs/EPSG/0/26713'><gml:exterior><gml:LinearRing><gml:posList>" + rcords + "</gml:posList></gml:LinearRing></gml:exterior></gml:" + t + "></" + cmd1 + "></Filter>";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getDistrBP = function (coords) {
            var maxFtr = "1";
            var SelectionLayers = "znop:mo";
            var t = "Point";
            var cmd1 = "DWITHIN";
            var Pn = encodeURIComponent("НАЗВАНИЕ,РАЙОН");
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            rcords = coords.toString().replace(",", s);
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&propertyName=" + Pn + "&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "(" + rcords + "),15,meters)";
            return $http({
                method: 'GET',
                url: geturl
            });
        };
        this.getAddress = function (coords) {
            var ns = "reverse.php?";
            var geturl = nomeaddr + "/" + ns + "format=json&lat=" + coords.lat + "&lon=" + coords.lng + "&zoom=18" + "&addressdetails=1&namedetails=1&accept-language=ru";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getAddress_NN = function (coords) {
            var maxFtr = "1";
            var SelectionLayers = "znop:facade";
            var t = "Point";
            var cmd1 = "DWITHIN";
            var xmlns1 = "";
            var s = " ";
            var rcords = "";
            rcords = coords.toString().replace(",", s);
            var geturl = serverAddres + "/" + serviceType + "?service=" + service + "&version=" + version + "&request=" + requestType + "&typeName=" + SelectionLayers + "&maxFeatures=" + maxFtr + "&outputFormat=" + outputFormat + "&propertyName=ADDRESS&srsName=" + srsName + "&cql_filter=" + cmd1 + "(geom," + s + t + "(" + rcords + "),100,meters)";
            return $http({
                method: 'GET',
                url: geturl,
            });
        };
        this.getPrcAdr = function (coords) {
            var maxFtr = "1";
            var sl = "znop:facade";
            var t = "Point";
            var st = "wps";
            var s = " ";
            var rcords = coords.toString().replace(",", s);
            var purl = serverAddres + "/" + st;
            var pData = '<?xml version="1.0" encoding="UTF-8"?>' +
                '<wps:Execute version="1.0.0" service="WPS" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows ="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc = "http://www.opengis.net/ogc" xmlns:wcs = "http://www.opengis.net/wcs/1.1.1" xmlns:xlink = "http://www.w3.org/1999/xlink" xsi:schemaLocation = "http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">' +
                '<ows:Identifier>gs:Nearest</ows:Identifier>' +
                '<wps:DataInputs>' +
                '<wps:Input>' +
                '<ows:Identifier>features</ows:Identifier>' +
                '<wps:Reference mimeType="text/xml; subtype=wfs-collection/1.0" xlink:href="http://geoserver/wfs" method ="POST">' +
                '<wps:Body>';
            '<wfs:GetFeature service="WFS" version="1.0.0" outputFormat="application/json">' +
                '<wfs:Query typeName="' + sl + '"/>' +
                '</wfs:GetFeature>' +
                '</wps:Body>' +
                '</wps:Reference>' +
                '</wps:Input>' +
                '<wps:Input>' +
                '<ows:Identifier>point</ows:Identifier>' +
                '<wps:Data>' +
                '<wps:ComplexData mimeType="text/xml; subtype=gml/3.1.1"><![CDATA[POINT(' + rcords + ')]]></wps:ComplexData>' +
                '</wps:Data>' +
                '</wps:Input>' +
                '<wps:Input >' +
                '<ows:Identifier>crs</ows:Identifier>' +
                '<wps:Data>' +
                '<wps:LiteralData>EPSG:100064</wps:LiteralData>' +
                '</wps:Data>' +
                '</wps:Input>' +
                '</wps:DataInputs>' +
                '<wps:ResponseForm>' +
                '<wps:RawDataOutput mimeType="application/json">';
            return $http({
                method: 'POST',
                url: purl,
                data: pData,
                headers: { "Content-Type": 'application/xml' }
            });
        };
    }
})();
//# sourceMappingURL=clientApp.js.map