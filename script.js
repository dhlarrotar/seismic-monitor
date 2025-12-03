// --- TRANSLATIONS ---
        const translations = {
            'en': {
                                '3d-loader': 'Loading 3D Visualization...',
                                '3d-title': '3D Visualization',
                                '3d-controls-rotate': 'Left Click: Rotate | Right Click: Pan',
                                '3d-controls-zoom': 'Scroll: Zoom | Height: Magnitude',
                                'legend-3d-title': '3D Visualization Legend',
                                'legend-3d-height-info': 'Bar height represents earthquake magnitude',
                                'legend-3d-note': 'Click on bars for earthquake details',
                                'click-anywhere-close': 'Click anywhere to close',
                                'guide-title': 'Seismic Monitor Quick Guide',
                                'guide-keyboard-title': 'Keyboard Shortcuts',
                                'kb-switch-dashboard': 'Switch to Dashboard',
                                'kb-switch-map': 'Switch to Map Explorer',
                                'kb-switch-3d': 'Switch to 3D Globe',
                                'kb-export': 'Export current data',
                                'kb-toggle-filters': 'Toggle filters panel',
                                'guide-understanding-text': 'Earthquake data is sourced from the USGS Earthquake Hazards Program. The app shows earthquakes with magnitude 2.5+ from the last 24 hours, 7 days, or 30 days.',
                                'guide-tip-size': '• Circle size represents earthquake magnitude',
                                'guide-tip-color': '• Color indicates depth (yellow=shallow, blue=deep)',
                                'guide-tip-3d': '• In 3D view, bar height shows magnitude',
                                'guide-tip-click': '• Click any earthquake for detailed information',
                                'guide-filtering-text': 'Use the filters to focus on specific time ranges, magnitude thresholds, depth ranges, or geographic regions.',
                                'guide-understanding-title': 'Understanding the Data',
                                'guide-visualization-title': 'Visualization Tips',
                                'guide-filtering-title': 'Filtering Options',
                                'got-it': 'Got it!',
                                'marker-mode-desc': 'Marker mode: Pixel (screen-size) or Meters (geographic). Pixel mode matches the legend; meters shows true distances.',
                                'marker-mode-label': 'Marker mode',
                                'marker-pixel': 'Pixel',
                                'marker-meters': 'Meters',
                'title': 'Seismic Monitor & Dashboard',
                'header-title': 'Seismic Monitor',
                'loading': 'Loading earthquake data...',
                'error': 'Error loading data',
                'time-day': '24 hours',
                'time-week': '7 days',
                'time-month': '30 days',
                'mag-all': 'All',
                'depth-all': 'All',
                'depth-shallow': 'Shallow',
                'depth-intermediate': 'Intermediate',
                'depth-deep': 'Deep',
                'depth-vdeep': 'Very Deep',
                'options-show': 'Show Filters',
                'options-hide': 'Hide Filters',
                'tab-map': 'Map Explorer',
                'tab-dashboard': 'Dashboard',
                'tab-3d': '3D Globe',
                'stat-total-title': 'Total Earthquakes',
                'stat-strongest-title': 'Strongest Earthquake',
                'stat-recent-title': 'Most Recent Earthquake',
                'minimap-title': 'Distribution Map',
                'chart-mag-title': 'Magnitude Distribution',
                'chart-depth-title': 'Depth Distribution (km)',
                'chart-count': 'Count',
                'footer-source': 'Earthquake Data: USGS Earthquake Hazards Program',
                'legend-mag-title': 'Magnitude Scale',
                'legend-depth-title': 'Depth (Color)',
                'depth-0-30': '0 – 30 km (Shallow)',
                'depth-30-100': '30 – 100 km (Intermediate)',
                'depth-100-300': '100 – 300 km (Deep)',
                'depth-300-plus': '+300 km (Very Deep)',
                'legend-source': 'Earthquake Data: USGS',
                'popup-mag': 'Magnitude',
                'popup-depth': 'Depth',
                'earthquakes-available': 'earthquakes available',
                'filter-note-active': 'Filters active',
                'filter-note-country_valid': 'Showing earthquakes in: ',
                'filter-note-country_no_data': 'No earthquakes found in: ',
                'filter-note-country_no_bounds': 'Country recognized but bounds not available',
                'filter-note-country_invalid': 'Country not recognized',
                'no-data-msg': 'No earthquakes match current filters',
                'depth-label': 'Depth',
                'dashboard-title-global': 'Global Earthquakes - Last {timeRange}{magPart}',
                'dashboard-title-country': '{country} Earthquakes - Last {timeRange}{magPart}',
                'notification-major': 'Major earthquake detected! M{mag} at {place}',
                'notification-strong': 'Strong earthquake detected! M{mag} at {place}',
                'export-data': 'Export',
                'quick-guide': 'Guide',
                'settings': 'Settings',
                'not-available': 'Not available'
            },
            'es': {
                                '3d-loader': 'Cargando visualización 3D...',
                                '3d-title': 'Visualización 3D',
                                '3d-controls-rotate': 'Clic izquierdo: Rotar | Clic derecho: Desplazar',
                                '3d-controls-zoom': 'Scroll: Zoom | Altura: Magnitud',
                                'legend-3d-title': 'Leyenda 3D',
                                'legend-3d-height-info': 'La altura de la barra representa la magnitud del sismo',
                                'legend-3d-note': 'Haz clic en las barras para ver detalles del sismo',
                                'click-anywhere-close': 'Haz clic en cualquier lugar para cerrar',
                                'guide-title': 'Guía rápida del Monitor Sísmico',
                                'guide-keyboard-title': 'Atajos de teclado',
                                'kb-switch-dashboard': 'Cambiar al Panel',
                                'kb-switch-map': 'Cambiar al Explorador de Mapa',
                                'kb-switch-3d': 'Cambiar al Globo 3D',
                                'kb-export': 'Exportar datos actuales',
                                'kb-toggle-filters': 'Alternar panel de filtros',
                                'guide-understanding-text': 'Los datos sísmicos provienen del Programa de Peligros Sísmicos de USGS. La aplicación muestra sismos con magnitud de 2.5+ de las últimas 24 horas, 7 días o 30 días.',
                                'guide-tip-size': '• El tamaño del círculo representa la magnitud del sismo',
                                'guide-tip-color': '• El color indica la profundidad (amarillo=superficial, azul=profundo)',
                                'guide-tip-3d': '• En la vista 3D, la altura de la barra muestra la magnitud',
                                'guide-tip-click': '• Haz clic en cualquier sismo para ver detalles',
                                'guide-filtering-text': 'Usa los filtros para enfocarte en rangos de tiempo específicos, umbrales de magnitud, rangos de profundidad o regiones geográficas.',
                                'guide-understanding-title': 'Comprendiendo los datos',
                                'guide-visualization-title': 'Consejos de visualización',
                                'guide-filtering-title': 'Opciones de filtrado',
                                'got-it': '¡Listo!',
                                'marker-mode-desc': 'Modo de marcadores: Píxeles (tamaño en pantalla) o Metros (radio geográfico). El modo Píxel corresponde a la leyenda; Metros muestra distancias reales.',
                                'marker-mode-label': 'Modo de marcadores',
                                'marker-pixel': 'Píxeles',
                                'marker-meters': 'Metros',
                'title': 'Monitor Sísmico y Panel',
                'header-title': 'Monitor Sísmico',
                'loading': 'Cargando datos sísmicos...',
                'error': 'Error cargando datos',
                'time-day': '24 hours',
                'time-week': '7 days',
                'time-month': '30 days',
                'mag-all': 'Todos',
                'depth-all': 'Todos',
                'depth-shallow': 'Superficial',
                'depth-intermediate': 'Intermedio',
                'depth-deep': 'Profundo',
                'depth-vdeep': 'Muy Profundo',
                'options-show': 'Mostrar Filtros',
                'options-hide': 'Ocultar Filtros',
                'tab-map': 'Explorador de Mapa',
                'tab-dashboard': 'Panel',
                'tab-3d': 'Globo 3D',
                'stat-total-title': 'Total de Sismos',
                'stat-strongest-title': 'Sismo Más Fuerte',
                'stat-recent-title': 'Sismo Más Reciente',
                'minimap-title': 'Mapa de Distribución',
                'chart-mag-title': 'Distribución de Magnitud',
                'chart-depth-title': 'Distribución de Profundidad (km)',
                'chart-count': 'Cantidad',
                'footer-source': 'Datos Sísmicos: USGS Programa de Riesgos Sísmicos',
                'legend-mag-title': 'Escala de Magnitud',
                'legend-depth-title': 'Profundidad (Color)',
                'depth-0-30': '0 – 30 km (Superficial)',
                'depth-30-100': '30 – 100 km (Intermedio)',
                'depth-100-300': '100 – 300 km (Profundo)',
                'depth-300-plus': '+300 km (Muy Profundo)',
                'legend-source': 'Datos Sísmicos: USGS',
                'popup-mag': 'Magnitud',
                'popup-depth': 'Profundidad',
                'earthquakes-available': 'sismos disponibles',
                'filter-note-active': 'Filtros activos',
                'filter-note-country_valid': 'Mostrando sismos en: ',
                'filter-note-country_no_data': 'No se encontraron sismos en: ',
                'filter-note-country_no_bounds': 'País reconocido pero límites no disponibles',
                'filter-note-country_invalid': 'País no reconocido',
                'no-data-msg': 'No hay sismos que coincidan con los filtros actuales',
                'depth-label': 'Profundidad',
                'dashboard-title-global': 'Sismos Globales - Últimos {timeRange}{magPart}',
                'dashboard-title-country': 'Sismos en {country} - Últimos {timeRange}{magPart}',
                'notification-major': '¡Terremoto mayor detectado! M{mag} en {place}',
                'notification-strong': '¡Terremoto fuerte detectado! M{mag} en {place}',
                'export-data': 'Exportar',
                'quick-guide': 'Guía',
                'settings': 'Configuración',
                'not-available': 'No disponible'
            }
        };

        // --- GLOBALS & CONSTANTS ---
        const API_URLS = {
            'day': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
            'week': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
            'month': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson'
        };
        const TILE_LAYERS = {
            'dark': { url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', attribution: '&copy; CARTO | USGS' },
            'standard': { url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', attribution: '&copy; CARTO | USGS' }
        };
        const COUNTRY_GEODATA = {
            'japan': { name: 'Japan', bounds: [[20.2, 128.0], [45.5, 146.0]] }, 
            'japon': { name: 'Japón', bounds: [[20.2, 128.0], [45.5, 146.0]] }, 
            'chile': { name: 'Chile', bounds: [[-56.0, -75.0], [-17.5, -66.5]] },
            'usa': { name: 'United States', bounds: [[24.5, -125.0], [50.0, -66.0]] },
            'estados unidos': { name: 'Estados Unidos', bounds: [[24.5, -125.0], [50.0, -66.0]] },
            'mexico': { name: 'Mexico', bounds: [[14.5, -118.0], [32.7, -86.5]] },
            'méxico': { name: 'México', bounds: [[14.5, -118.0], [32.7, -86.5]] },
            'indonesia': { name: 'Indonesia', bounds: [[-11.0, 95.0], [6.0, 141.0]] },
            'peru': { name: 'Perú', bounds: [[-18.3, -81.5], [-0.3, -68.6]] },
            'filipinas': { name: 'Philippines', bounds: [[4.5, 116.0], [21.0, 128.0]] },
            'philippines': { name: 'Philippines', bounds: [[4.5, 116.0], [21.0, 128.0]] },
            'turkey': { name: 'Turkey', bounds: [[35.8, 26.0], [42.1, 44.8]] },
            'turquía': { name: 'Turquía', bounds: [[35.8, 26.0], [42.1, 44.8]] },
            'iran': { name: 'Iran', bounds: [[25.0, 44.0], [40.0, 63.5]] },
            'irak': { name: 'Iraq', bounds: [[29.0, 38.0], [37.5, 48.5]] },
            'grecia': { name: 'Greece', bounds: [[34.0, 19.0], [42.0, 28.5]] },
            'greece': { name: 'Greece', bounds: [[34.0, 19.0], [42.0, 28.5]] },
            'ecuador': { name: 'Ecuador', bounds: [[-5.0, -81.0], [1.5, -75.0]] },
            'colombia': { name: 'Colombia', bounds: [[-4.0, -79.0], [13.0, -66.0]] },
            'nicaragua': { name: 'Nicaragua', bounds: [[10.0, -87.5], [15.0, -83.0]] },
            'salvador': { name: 'El Salvador', bounds: [[13.0, -90.0], [14.5, -87.5]] },
            'guatemala': { name: 'Guatemala', bounds: [[13.5, -92.5], [18.0, -88.0]] },
            'honduras': { name: 'Honduras', bounds: [[12.5, -89.5], [16.5, -83.0]] },
            'taiwan': { name: 'Taiwan', bounds: [[21.5, 119.5], [26.5, 122.0]] },
            'new zealand': { name: 'New Zealand', bounds: [[-48.0, 166.0], [-34.0, 179.0]] },
            'nueva zelanda': { name: 'Nueva Zelanda', bounds: [[-48.0, 166.0], [-34.0, 179.0]] },
            'papua new guinea': { name: 'Papua New Guinea', bounds: [[-11.0, 141.0], [0.0, 160.0]] },
            'fiji': { name: 'Fiji', bounds: [[-20.5, 177.0], [-15.0, -177.0]] }, 
            'russia': { name: 'Russia', bounds: [[41.0, 19.0], [82.0, -169.0]] }, 
            'rusia': { name: 'Rusia', bounds: [[41.0, 19.0], [82.0, -169.0]] }, 
            'china': { name: 'China', bounds: [[18.0, 73.0], [54.0, 135.0]] }
        };
        
        const COUNTRY_LIST = new Set(['afghanistan','albania','algeria','andorra','angola','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bhutan','bolivia','bosnia and herzegovina','botswana','brazil','brunei','bulgaria','burkina faso','burundi','cabo verde','cambodia','cameroon','canada','central african republic','chad','chile','china','colombia','comoros','congo','costa rica','croatia','cuba','cyprus','czech republic','denmark','djibouti','dominica','dominican republic','ecuador','egypt','el salvador','equatorial guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea-bissau','guyana','haiti','honduras','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','jamaica','japan','jordan','kazakhstan','kenya','kiribati','korea, north','korea, south','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','madagascar','malawi','malaysia','maldives','mali','malta','mexico','micronesia','moldova','monaco','mongolia','montenegro','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new zealand','nicaragua','niger','nigeria','north macedonia','norway','oman','pakistan','palau','panama','papua new guinea','paraguay','peru','philippines','poland','portugal','qatar','romania','russia','rwanda','samoa','san marino','saudi arabia','senegal','serbia','seychelles','sierra leone','singapore','slovakia','slovenia','solomon islands','somalia','south africa','south sudan','spain','sri lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','timor-leste','togo','tonga','trinidad and tobago','tunisia','turkey','turkmenistan','tuvalu','uganda','ukraine','united arab emirates','united kingdom','united states','uruguay','uzbekistan','vanuatu','vatican city','venezuela','vietnam','yemen','zambia','zimbabwe','afganistán','alemania','arabia saudita','argelia','bélgica','brasil','canadá','corea del norte','corea del sur','españa','estados unidos','etiopía','filipinas','francia','grecia','irak','irán','irlanda','italia','japón','méxico','noruega','países bajos','pakistán','panamá','perú','polonia','reino unido','rusia','sudáfrica','suiza','tailandia','turquía','ucrania']);

        const SPINNER_SVG = `<svg class="spinner h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;

        let map, miniMap, mapTileLayer, miniMapTileLayer;
        let appLoaderEl, loadingStatusEl, errorToastEl, errorMessageEl, dashboardMessageEl;
        let langSelectEl, timeSelectEl, magSelectEl, depthSelectEl, countryInputEl, countryFilterStatusEl;
        let filterToggleBtnMobile, filterToggleTextMobile, filterToggleIconMobile;
        let filterToggleBtnDesktop, filterToggleTextDesktop, filterToggleIconDesktop;
        let filterControlsWrapperEl;
        let earthquakeLayer, miniMapLayer, allEarthquakeFeatures = [];
        let magnitudeChartInstance, depthChartInstance;
        let currentLang = 'en';
        let markerMode = 'pixel'; // 'pixel' (legend-matching) or 'meters' (geographic radius)
        
        // 3D Vars
        let threeScene, threeCamera, threeRenderer, threeControls, threeEarthquakesGroup, globe;
        const EARTH_RADIUS = 50;
        // Animation and transition duration constants (easy to tweak)
        const THREE_CAMERA_ANIM_DURATION = 1800; // ms for 3D camera movement
        const MAP_FLY_DURATION = 1.5; // seconds for Leaflet map.flyTo/flyToBounds
        const MINI_MAP_FLY_DURATION = 0.9; // seconds for mini-map
        let is3DInitialized = false;
        let threeRaycaster, threeMouse;
        let threeEarthquakeMeshes = [];
        
        // New variables for enhancements
        let threeLoaderEl, exportDataBtn, helpBtn, guideModal, closeGuideBtn, gotItBtn;
        let settingsBtn, settingsPopup;
        let currentFilters = {};
        let significantEarthquakesNotified = new Set();

        // --- UTILITY FUNCTIONS ---
        function translate(key) { return translations[currentLang][key] || translations['en'][key] || key; }
        function safeSetText(id, textKey) { const el = document.getElementById(id); if (el) el.innerText = translate(textKey); }
        function safeSetHTML(id, htmlContent) { const el = document.getElementById(id); if (el) { const content = (typeof htmlContent === 'string' && htmlContent.includes('**')) ? translate(htmlContent).replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') : translate(htmlContent); el.innerHTML = content; } }
        
        function toggleFilters() {
            if (!filterControlsWrapperEl) return;
            let isHidden;
            // On larger screens, we control visibility via the 'open' class (CSS uses media queries)
            if (window.innerWidth >= 640) {
                const isNowOpen = filterControlsWrapperEl.classList.toggle('open');
                // Keep 'hidden' synchronized for cases where mobile styles are applied
                filterControlsWrapperEl.classList.toggle('hidden', !isNowOpen);
                isHidden = !isNowOpen;
            } else {
                // On mobile we toggle the 'hidden' class
                isHidden = filterControlsWrapperEl.classList.toggle('hidden');
                // Also ensure 'open' class is unset on mobile to avoid conflicting styles
                if (isHidden) filterControlsWrapperEl.classList.remove('open');
            }

            const stateKey = isHidden ? 'options-show' : 'options-hide';
            const iconKey = isHidden ? 'chevron-down' : 'chevron-up';
            if (filterToggleTextDesktop) filterToggleTextDesktop.innerText = translate(stateKey);
            if (filterToggleIconDesktop) filterToggleIconDesktop.setAttribute('data-lucide', iconKey);
            if (filterToggleTextMobile) filterToggleTextMobile.innerText = translate(stateKey);
            if (filterToggleIconMobile) filterToggleIconMobile.setAttribute('data-lucide', iconKey);
            lucide.createIcons();
        }

        function hideLoader() {
            if (appLoaderEl) { appLoaderEl.classList.add('hidden-loader'); setTimeout(() => { if (appLoaderEl && appLoaderEl.parentNode) appLoaderEl.parentNode.removeChild(appLoaderEl); }, 500); }
        }

        function normalizeCountryName(name) { return name.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
        function isValidCountry(countryName) { return COUNTRY_LIST.has(normalizeCountryName(countryName)); }
        function getCountryGeodata(countryName) {
            const normName = normalizeCountryName(countryName);
            const data = COUNTRY_GEODATA[normName];
            if (data) return { success: true, name: data.name, bounds: data.bounds };
            return { success: false, name: countryName, bounds: null };
        }
        function isPointInBoundingBox(lat, lon, bounds) {
            const swLat = bounds[0][0], swLon = bounds[0][1], neLat = bounds[1][0], neLon = bounds[1][1];
            return swLon < neLon ? (lat >= swLat && lat <= neLat && lon >= swLon && lon <= neLon) : (lat >= swLat && lat <= neLat && (lon >= swLon || lon <= neLon));
        }
        function getDepthRange(value) {
            if(value==='shallow') return {min:0,max:30}; if(value==='intermediate') return {min:30,max:100};
            if(value==='deep') return {min:100,max:300}; if(value==='vdeep') return {min:300,max:Infinity};
            return {min:-Infinity,max:Infinity};
        }
        function getColor(depth) {
            if (depth > 300) return '#3F51B5'; if (depth > 100) return '#2196F3';
            if (depth > 30) return '#FF9800'; if (depth >= 0) return '#FFEB3B'; return '#FFEB3B';
        }
        
        function getRadius(mag) {
            // Legacy helper: return physical meters radius to be used for true-meter circles.
            const minMag = 2.5, maxMag = 8.0;
            // Reduced radii for better visuals and to match legend size reductions
            const minRadius = 4000;  // Minimum visible size (meters)
            const maxRadius = 60000; // Maximum size (meters)
            
            if (mag < minMag) return minRadius;
            if (mag > maxMag) return maxRadius;
            
            // Exponential scaling for better visual differentiation
            const normalized = (mag - minMag) / (maxMag - minMag);
            const exponential = Math.pow(normalized, 1.5); // 1.5 provides good differentiation
            
            return minRadius + exponential * (maxRadius - minRadius);
        }

        function getPixelRadius(mag) {
            // Return radius in pixels for L.circleMarker so screen-size matches legend examples.
            const minMag = 2.5, maxMag = 8.0;
            const minPx = 3; // radius pixels, corresponds to 6px diameter in legend (reduced)
            const maxPx = 12; // radius pixels, corresponds to 24px diameter in legend (reduced)
            if (mag < minMag) return minPx;
            if (mag > maxMag) return maxPx;
            const normalized = (mag - minMag) / (maxMag - minMag);
            const exponential = Math.pow(normalized, 1.4);
            return Math.round(minPx + exponential * (maxPx - minPx));
        }
        
        function timeSince(timestamp) {
            const now = Date.now(), seconds = Math.floor((now - timestamp) / 1000), lang = currentLang;
            let interval = seconds / 31536000;
            if (interval > 1) { const v = Math.floor(interval); return lang === 'es' ? `hace ${v} ${v===1?'año':'años'}` : `${v} ${v===1?'year':'years'} ago`; }
            interval = seconds / 2592000;
            if (interval > 1) { const v = Math.floor(interval); return lang === 'es' ? `hace ${v} ${v===1?'mes':'meses'}` : `${v} ${v===1?'month':'months'} ago`; }
            interval = seconds / 86400;
            if (interval > 1) { const v = Math.floor(interval); return lang === 'es' ? `hace ${v} ${v===1?'día':'días'}` : `${v} ${v===1?'day':'days'} ago`; }
            interval = seconds / 3600;
            if (interval > 1) { const v = Math.floor(interval); return lang === 'es' ? `hace ${v} ${v===1?'hora':'horas'}` : `${v} ${v===1?'hour':'hours'} ago`; }
            interval = seconds / 60;
            if (interval > 1) { const v = Math.floor(interval); return lang === 'es' ? `hace ${v} ${v===1?'minuto':'minutos'}` : `${v} ${v===1?'minute':'minutes'} ago`; }
            const v = Math.floor(seconds); return lang === 'es' ? `hace ${v} ${v===1?'segundo':'segundos'}` : `${v} ${v===1?'second':'seconds'} ago`;
        }
        function formatNumber1(num) {
            try {
                const locale = currentLang === 'es' ? 'es-ES' : 'en-US';
                return Number(num).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
            } catch(e) { return Number(num).toFixed(1); }
        }
        // Format numbers with up to two decimal places for dashboard values
        function formatNumber2(num) {
            try {
                const locale = currentLang === 'es' ? 'es-ES' : 'en-US';
                return Number(num).toLocaleString(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
            } catch(e) { return Number(num).toFixed(2).replace(/\.0+$/, '').replace(/(\.[0-9]*?)0+$/, '$1'); }
        }
        function formatDate(timestamp, lang) {
            return new Date(timestamp).toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { timeStyle: 'short', dateStyle: 'medium' });
        }
        function toRad(deg) { return deg * (Math.PI / 180); }
        function geoTo3D(lat, lon, radius) {
            const phi = toRad(90 - lat); const theta = toRad(lon + 180);
            const x = -(radius * Math.sin(phi) * Math.cos(theta));
            const z = (radius * Math.sin(phi) * Math.sin(theta));
            const y = (radius * Math.cos(phi));
            return new THREE.Vector3(x, y, z);
        }

        // 3D Camera helpers: compute center from bounds and smoothly animate camera to target lat/lon
        function getLatLonCenterFromBounds(boundsArray) {
            // boundsArray is [[swLat, swLon], [neLat, neLon]]
            const swLat = boundsArray[0][0], swLon = boundsArray[0][1];
            const neLat = boundsArray[1][0], neLon = boundsArray[1][1];
            const latCenter = (swLat + neLat) / 2;
            let lonCenter;
            // Handle 180/-180 wrap and bounding boxes crossing the date line
            if (swLon <= neLon) {
                lonCenter = (swLon + neLon) / 2;
            } else {
                // Crosses the antimeridian
                const delta = ((neLon + 360) - swLon) / 2; // half distance across wrap
                lonCenter = swLon + delta;
                if (lonCenter > 180) lonCenter -= 360;
            }
            return { lat: latCenter, lon: lonCenter };
        }

        function calculateCameraDistanceForBounds(boundsArray) {
            const latDiff = Math.abs(boundsArray[1][0] - boundsArray[0][0]);
            let lonDiff = Math.abs(boundsArray[1][1] - boundsArray[0][1]);
            // Adjust lonDiff for wrap-around
            if (boundsArray[0][1] > boundsArray[1][1]) lonDiff = 360 - lonDiff;
            const maxDiff = Math.max(latDiff, lonDiff);
            // Map bounding box size to camera distances (relative to EARTH_RADIUS)
            if (maxDiff <= 2) return 20; // very small
            if (maxDiff <= 6) return 35; // small
            if (maxDiff <= 15) return 60; // medium
            if (maxDiff <= 40) return 100; // large
            return 180; // very large/broad area
        }

        function animateThreeCameraTo(lat, lon, distanceFromEarth = 120, duration = THREE_CAMERA_ANIM_DURATION) {
            if (!threeCamera || !threeControls || !threeRenderer) return;
            const targetVec = geoTo3D(lat, lon, EARTH_RADIUS);
            // Compute final camera position: normalized target * (EARTH_RADIUS + distanceFromEarth)
            const minPosDist = EARTH_RADIUS + 1.0;
            const finalCamPos = targetVec.clone().normalize().multiplyScalar(Math.max(minPosDist, EARTH_RADIUS + distanceFromEarth));
            const initialCamPos = threeCamera.position.clone();
            const initialTarget = threeControls.target.clone();
            // Keep OrbitControls target at the globe center to avoid moving the pivot point
            const finalTarget = new THREE.Vector3(0, 0, 0);
            const start = performance.now();
            const ease = (t) => (--t)*t*t+1; // easeOutCubic like

            function step(now) {
                const elapsed = now - start;
                const t = Math.min(1, elapsed / duration);
                const eased = ease(t);
                // Lerp camera position and controls target
                threeCamera.position.lerpVectors(initialCamPos, finalCamPos, eased);
                threeControls.target.lerpVectors(initialTarget, finalTarget, eased);
                threeControls.update();
                if (t < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            // Ensure camera looks at center at the end of the animation for perfect framing
            setTimeout(() => {
                threeCamera.lookAt(0,0,0);
                threeControls.target.set(0,0,0);
                threeControls.update();
            }, duration + 20);
        }

        // --- ENHANCEMENT FUNCTIONS ---
        
        // Keyboard shortcuts
        function initKeyboardShortcuts() {
            document.addEventListener('keydown', (e) => {
                // Only trigger if not focused on input elements
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
                
                switch(e.key) {
                    case '1':
                        e.preventDefault();
                        document.querySelector('[data-tab="dashboard-view"]').click();
                        break;
                    case '2':
                        e.preventDefault();
                        document.querySelector('[data-tab="map-view"]').click();
                        break;
                    case '3':
                        e.preventDefault();
                        document.querySelector('[data-tab="3d-view"]').click();
                        break;
                    case 'e':
                    case 'E':
                        e.preventDefault();
                        exportEarthquakeData();
                        break;
                    case 'f':
                    case 'F':
                        e.preventDefault();
                        toggleFilters();
                        break;
                    case '?':
                        e.preventDefault();
                        showGuideModal();
                        break;
                }
            });
        }
        
        // Data export functionality
        function exportEarthquakeData() {
            if (!allEarthquakeFeatures || allEarthquakeFeatures.length === 0) {
                showNotification('No earthquake data available to export', 'warning');
                return;
            }
            
            const filtered = applyCurrentFiltersToData(allEarthquakeFeatures);
            if (filtered.length === 0) {
                showNotification('No earthquake data matches current filters', 'warning');
                return;
            }
            
            // Convert to CSV
            const headers = ['Magnitude', 'Location', 'Latitude', 'Longitude', 'Depth (km)', 'Time', 'Date'];
            const csvData = filtered.map(f => [
                f.properties.mag.toFixed(1),
                `"${f.properties.place}"`,
                f.geometry.coordinates[1],
                f.geometry.coordinates[0],
                f.geometry.coordinates[2],
                new Date(f.properties.time).toLocaleTimeString(),
                new Date(f.properties.time).toLocaleDateString()
            ]);
            
            const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
            
            // Create and download file
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `earthquake_data_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification(`Exported ${filtered.length} earthquakes to CSV`, 'info');
        }
        
        // Apply current filters to data (for export)
        function applyCurrentFiltersToData(features) {
            const selMag = magSelectEl.value === 'all' ? 0 : parseFloat(magSelectEl.value);
            const dRange = getDepthRange(depthSelectEl.value);
            const rawCountry = countryInputEl.value.trim();
            
            let filtered = features.filter(f => {
                const mag = f.properties.mag; const depth = f.geometry.coordinates[2];
                return mag >= selMag && (depthSelectEl.value === 'all' || (depth >= dRange.min && depth < dRange.max));
            });

            // Apply country filter if specified
            if (rawCountry.length > 0) {
                const geo = getCountryGeodata(rawCountry);
                if (geo.success && geo.bounds) {
                    filtered = filtered.filter(f => isPointInBoundingBox(f.geometry.coordinates[1], f.geometry.coordinates[0], geo.bounds));
                }
            }
            
            return filtered;
        }
        
        // Notification system
        function showNotification(message, type = 'info') {
            // Remove existing notifications
            document.querySelectorAll('.notification').forEach(el => el.remove());
            
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            
            let icon = 'info';
            if (type === 'warning') icon = 'alert-triangle';
            if (type === 'info') icon = 'info';
            
            notification.innerHTML = `
                <i data-lucide="${icon}" class="h-5 w-5"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(notification);
            lucide.createIcons();
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOut 0.3s ease-in';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 5000);
            
            // Add click to dismiss
            notification.addEventListener('click', () => {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            });
        }
        
        // Check for significant earthquakes
        function checkSignificantEarthquakes(features) {
            const significant = features.filter(f => f.properties.mag >= 6.0);
            
            significant.forEach(quake => {
                const quakeId = `${quake.properties.time}-${quake.properties.mag}-${quake.properties.place}`;
                
                if (!significantEarthquakesNotified.has(quakeId)) {
                    significantEarthquakesNotified.add(quakeId);
                    
                    const magFormatted = formatNumber1(quake.properties.mag);
                    const message = quake.properties.mag >= 7.0 ? 
                        translate('notification-major').replace('{mag}', magFormatted).replace('{place}', quake.properties.place) :
                        translate('notification-strong').replace('{mag}', magFormatted).replace('{place}', quake.properties.place);
                    
                    showNotification(message, quake.properties.mag >= 7.0 ? 'warning' : 'info');
                }
            });
        }
        
        // Dynamic dashboard title
        function updateDashboardTitle(features) {
            const timeRange = timeSelectEl.options[timeSelectEl.selectedIndex].text;
            const magFilter = magSelectEl.value === 'all' ? '' : `, M${magSelectEl.value}+`;
            const country = countryInputEl.value.trim();
            
            let title = '';
            
            if (country) {
                const geo = getCountryGeodata(country);
                if (geo.success) {
                    title = translate('dashboard-title-country')
                        .replace('{country}', geo.name)
                        .replace('{timeRange}', timeRange)
                        .replace('{magPart}', magFilter);
                }
            } else {
                title = translate('dashboard-title-global')
                    .replace('{timeRange}', timeRange)
                    .replace('{magPart}', magFilter);
            }
            
            document.getElementById('dashboard-title').textContent = title;
        }
        
        // Guide modal
        function showGuideModal() {
            guideModal.classList.remove('hidden');
        }
        
        function hideGuideModal() {
            guideModal.classList.add('hidden');
        }
        
        // Settings popup
        function toggleSettingsPopup() {
            settingsPopup.classList.toggle('show');
        }
        
        // Close settings popup when clicking outside
        function initSettingsPopup() {
            document.addEventListener('click', (e) => {
                if (!settingsBtn.contains(e.target) && !settingsPopup.contains(e.target)) {
                    settingsPopup.classList.remove('show');
                }
            });
        }

        // --- DATA PROCESSING FUNCTIONS ---
        function calculateMagnitudeDistribution(features) {
            const distribution = { 'M 2.5-3.9': 0, 'M 4.0-4.9': 0, 'M 5.0-5.9': 0, 'M 6.0-6.9': 0, 'M 7.0+': 0 };
            features.forEach(f => {
                const mag = f.properties.mag;
                if (mag >= 7.0) distribution['M 7.0+']++;
                else if (mag >= 6.0) distribution['M 6.0-6.9']++;
                else if (mag >= 5.0) distribution['M 5.0-5.9']++;
                else if (mag >= 4.0) distribution['M 4.0-4.9']++;
                else if (mag >= 2.5) distribution['M 2.5-3.9']++;
            });
            return { labels: Object.keys(distribution), counts: Object.values(distribution) };
        }

        function calculateDepthDistribution(features) {
            const labels = [translate('depth-shallow'), translate('depth-intermediate'), translate('depth-deep'), translate('depth-vdeep')];
            const distribution = [0, 0, 0, 0]; 
            const colors = ['#FFEB3B', '#FF9800', '#2196F3', '#3F51B5'];
            features.forEach(f => {
                const depth = f.geometry.coordinates[2];
                if (depth >= 300) distribution[3]++; else if (depth >= 100) distribution[2]++; else if (depth >= 30) distribution[1]++; else if (depth >= 0) distribution[0]++;
            });
            return { labels, counts: distribution, colors };
        }

        function updateCharts(magData, depthData) {
            if (magnitudeChartInstance) { magnitudeChartInstance.destroy(); magnitudeChartInstance = null; }
            if (depthChartInstance) { depthChartInstance.destroy(); depthChartInstance = null; }

            const magCtx = document.getElementById('magnitudeChart');
            const depthCtx = document.getElementById('depthChart');
            if (!magCtx || !depthCtx) return; 

            Chart.defaults.color = '#E2E8F0'; Chart.defaults.borderColor = '#334155';

            magnitudeChartInstance = new Chart(magCtx.getContext('2d'), {
                type: 'bar',
                data: { labels: magData.labels, datasets: [{ label: translate('chart-count'), data: magData.counts, backgroundColor: '#6366F1', borderColor: '#4338CA', borderWidth: 1, borderRadius: 4 }] },
                options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true }, x: { grid: { display: false } } }, plugins: { legend: { display: false } } }
            });
            
            depthChartInstance = new Chart(depthCtx.getContext('2d'), {
                type: 'doughnut',
                data: { labels: depthData.labels, datasets: [{ label: translate('chart-count'), data: depthData.counts, backgroundColor: depthData.colors, hoverOffset: 4 }] },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15 } } } }
            });
        }

        function generateDashboard(f) {
            const tFilter = document.getElementById('time-select');
            const tText = translate(tFilter.options[tFilter.selectedIndex].id);
            document.getElementById('stat-total-title').innerText = `${translate('stat-total-title')} (${tText})`;

            if (f.length === 0) {
                safeSetText('total-count-stat', '0');
                document.getElementById('strongest-mag-stat').innerText = formatNumber2(0);
                document.getElementById('strongest-place-stat').innerText = translate('not-available');
                document.getElementById('strongest-time-stat').innerText = translate('not-available');
                document.getElementById('strongest-depth-stat').innerText = translate('not-available');
                document.getElementById('recent-mag-stat').innerText = formatNumber2(0);
                document.getElementById('recent-place-stat').innerText = translate('not-available');
                document.getElementById('recent-date-stat').innerText = translate('not-available');
                document.getElementById('recent-depth-stat').innerText = translate('not-available');
                document.getElementById('recent-time-stat').innerText = translate('not-available');
                if(dashboardMessageEl && countryInputEl.value.trim()) {
                     dashboardMessageEl.classList.remove('hidden'); dashboardMessageEl.innerText = translate('no-data-msg');
                }
                return;
            }
            if(dashboardMessageEl) dashboardMessageEl.classList.add('hidden');
            safeSetText('total-count-stat', f.length.toLocaleString());
            
            const sorted = [...f].sort((a,b)=>b.properties.mag - a.properties.mag);
            const recent = [...f].sort((a,b)=>b.properties.time - a.properties.time)[0];
            const strong = sorted[0];

            document.getElementById('strongest-mag-stat').innerText = formatNumber2(strong.properties.mag);
            safeSetText('strongest-place-stat', strong.properties.place);
            document.getElementById('strongest-time-stat').innerText = formatDate(strong.properties.time, currentLang);
            document.getElementById('strongest-depth-stat').innerText = `${translate('depth-label')}: ${formatNumber2(strong.geometry.coordinates[2])} km`;

            document.getElementById('recent-mag-stat').innerText = formatNumber2(recent.properties.mag);
            safeSetText('recent-place-stat', recent.properties.place);
            document.getElementById('recent-date-stat').innerText = formatDate(recent.properties.time, currentLang);
            document.getElementById('recent-depth-stat').innerText = `${translate('depth-label')}: ${formatNumber2(recent.geometry.coordinates[2])} km`;
            document.getElementById('recent-time-stat').innerText = timeSince(recent.properties.time);
            
            // Update dashboard title
            updateDashboardTitle(f);
            
            // Check for significant earthquakes
            checkSignificantEarthquakes(f);
        }

        function plotEarthquakes(features, tMap, tLayer) {
            if (!tLayer) return; tLayer.clearLayers();
            features.forEach(f => {
                const { mag, place, time } = f.properties; const [lon, lat, depth] = f.geometry.coordinates;
                if (!Number.isFinite(lat) || !Number.isFinite(lon)) { console.warn('plotEarthquakes: invalid coords', f); return; }
                const col = getColor(depth); const rad = getPixelRadius(mag);
                // Choose circle type based on markerMode: 'pixel' uses L.circleMarker with screen pixel radius, 'meters' uses L.circle with radius in meters
                let c;
                if (markerMode === 'meters') {
                    const radMeters = getRadius(mag);
                    // Reduce meters radius on miniMap to keep markers small on the overview
                    const radMetersScaled = (tMap === miniMap) ? Math.max(100, Math.round(radMeters * 0.08)) : radMeters;
                    c = L.circle([lat, lon], { radius: radMetersScaled, color: col, fillColor: col, fillOpacity: 0.45, weight: 1.0 });
                } else {
                    // Pixel-mode
                    const scaledRad = (tMap === miniMap) ? Math.max(1, Math.round(rad * 0.5)) : rad;
                    c = L.circleMarker([lat, lon], { radius: scaledRad, color: col, fillColor: col, fillOpacity: 0.6, weight: 1.5 });
                }
                if (tMap === map) c.bindPopup(`<b>${translate('popup-mag')}: ${formatNumber1(mag)}</b><br>${place}<br>${translate('popup-depth')}: ${depth}km<br>${formatDate(time, currentLang)}`, {className:'dark-popup'});
                c.addTo(tLayer);
            });
        }

        // --- 3D VIEW FUNCTIONS ---
        function init3DView() {
            if (is3DInitialized) return;
            
            // Show loader
            threeLoaderEl.classList.remove('hidden');
            
            const container = document.getElementById('globe-container');
            if (!container) return;
            
            threeScene = new THREE.Scene();
            threeCamera = new THREE.PerspectiveCamera(75, container.clientWidth/container.clientHeight, 0.1, 1000);
            // Increased initial zoom level for better visibility
            threeCamera.position.z = 120;
            threeRenderer = new THREE.WebGLRenderer({ antialias: true });
            threeRenderer.setPixelRatio(window.devicePixelRatio || 1);
            threeRenderer.setSize(container.clientWidth, container.clientHeight);
            threeRenderer.setClearColor(0x0F172A);
            container.appendChild(threeRenderer.domElement);
            
            threeScene.add(new THREE.AmbientLight(0x888888));
            const dl = new THREE.DirectionalLight(0xffffff, 0.5); dl.position.set(5,3,5); threeScene.add(dl);

            const geom = new THREE.SphereGeometry(EARTH_RADIUS, 64, 64);
            const mat = new THREE.MeshStandardMaterial({ color: 0x334155, transparent: true, opacity: 0.9, roughness: 0.8 });
            globe = new THREE.Mesh(geom, mat);
            threeScene.add(globe);
            
            // Add Wireframe
            const wf = new THREE.LineSegments(new THREE.WireframeGeometry(geom), new THREE.LineBasicMaterial({color: 0x475569, transparent:true, opacity:0.15}));
            globe.add(wf);

            threeEarthquakesGroup = new THREE.Group();
            threeScene.add(threeEarthquakesGroup);

            threeControls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
            threeControls.enableDamping = true; threeControls.dampingFactor = 0.05;
            // Limit zoom so camera stays outside the globe and prevent clipping/deformation
            threeControls.minDistance = EARTH_RADIUS + 1.0;
            threeControls.maxDistance = 1000;
            
            // Add raycaster for click detection
            threeRaycaster = new THREE.Raycaster();
            threeMouse = new THREE.Vector2();
            
            // Add click event listener
            threeRenderer.domElement.addEventListener('click', on3DClick, false);
            
            loadGeoJson();
            
            function anim() { 
                requestAnimationFrame(anim); 
                threeControls.update(); 
                threeRenderer.render(threeScene, threeCamera); 
                
                // Hide loader after first render
                if (threeLoaderEl && !threeLoaderEl.classList.contains('hidden')) {
                    setTimeout(() => {
                        threeLoaderEl.classList.add('hidden');
                    }, 500);
                }
            }
            anim();
            window.addEventListener('resize', onThreeResize);
            is3DInitialized = true;
            try { if (threeRenderer) threeRenderer.domElement.style.visibility = 'visible'; } catch(e) {}
        }

        async function loadGeoJson() {
            try {
                const res = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json');
                if(res.ok) renderBoundaries(await res.json());
            } catch(e) { console.error(e); }
        }

        function renderBoundaries(geo) {
            const mat = new THREE.LineBasicMaterial({ color: 0x10B981, transparent: true, opacity: 0.5 });
            geo.features.forEach(f => {
                const coords = f.geometry.coordinates;
                const drawPoly = (rings) => {
                    const pts = [];
                    rings[0].forEach(c => pts.push(geoTo3D(c[1], c[0], EARTH_RADIUS + 0.1)));
                    globe.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
                };
                if (f.geometry.type === 'Polygon') drawPoly(coords);
                else if (f.geometry.type === 'MultiPolygon') coords.forEach(drawPoly);
            });
        }

        function plotEarthquakes3D(features) {
            if (!threeEarthquakesGroup) return;
            
            // Show loader if 3D is active
            if (document.getElementById('3d-view').classList.contains('active')) {
                threeLoaderEl.classList.remove('hidden');
            }
            
            // Clear existing meshes
            while(threeEarthquakesGroup.children.length) {
                threeEarthquakesGroup.remove(threeEarthquakesGroup.children[0]);
            }
            threeEarthquakeMeshes = [];
            
            if (!features || !Array.isArray(features)) { console.warn('plotEarthquakes3D: no features or invalid array'); }
            features.forEach(f => {
                const { mag, place, time } = f.properties; 
                const [lon, lat, depth] = f.geometry.coordinates;
                if (!Number.isFinite(lat) || !Number.isFinite(lon) || !Number.isFinite(depth)) { console.warn('plotEarthquakes3D: invalid coords', f); return; }
                
                // Improved scaling to match legend better
                const h = Math.max(0.5, Math.pow(mag, 1.8) * 0.15); 
                const col = new THREE.Color(getColor(depth));
                
                const mesh = new THREE.Mesh(
                    new THREE.BoxGeometry(0.3, 0.3, h), 
                    new THREE.MeshBasicMaterial({color: col})
                );
                
                const pos = geoTo3D(lat, lon, EARTH_RADIUS + h/2);
                mesh.position.set(pos.x, pos.y, pos.z);
                mesh.lookAt(0,0,0);
                
                // Store earthquake data for click interactions
                mesh.userData = {
                    earthquake: f,
                    type: 'earthquake'
                };
                
                threeEarthquakesGroup.add(mesh);
                threeEarthquakeMeshes.push(mesh);
            });
            
            document.getElementById('status-3d').innerText = `${features.length} quakes loaded`;
            if (!features || features.length === 0) {
                console.info('plotEarthquakes3D: no features to plot');
            }
            
            // Hide loader after a short delay
            setTimeout(() => {
                threeLoaderEl.classList.add('hidden');
            }, 500);
        }

        function on3DClick(event) {
            if (!threeScene || !threeCamera) return;
            
            // Calculate mouse position in normalized device coordinates
            const rect = threeRenderer.domElement.getBoundingClientRect();
            threeMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            threeMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            
            // Update the raycaster
            threeRaycaster.setFromCamera(threeMouse, threeCamera);
            
            // Calculate objects intersecting the picking ray
            const intersects = threeRaycaster.intersectObjects(threeEarthquakeMeshes);
            
            if (intersects.length > 0) {
                const clickedMesh = intersects[0].object;
                const earthquakeData = clickedMesh.userData.earthquake;
                
                if (earthquakeData) {
                    show3DPopup(earthquakeData, event.clientX, event.clientY);
                }
            }
        }

        function show3DPopup(earthquake, clientX, clientY) {
            const { mag, place, time } = earthquake.properties;
            const depth = earthquake.geometry.coordinates[2];
            
            // Remove existing popup
            const existingPopup = document.getElementById('three-popup');
            if (existingPopup) {
                existingPopup.remove();
            }
            
            // Create popup
            const popup = document.createElement('div');
            popup.id = 'three-popup';
            popup.className = 'fixed z-50 bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-4 max-w-xs';
            popup.style.left = `${clientX + 10}px`;
            popup.style.top = `${clientY + 10}px`;
            
            popup.innerHTML = `
                <div class="dark-popup">
                    <b>${translate('popup-mag')}: ${formatNumber1(mag)}</b><br>
                    ${place}<br>
                    ${translate('popup-depth')}: ${depth}km<br>
                    ${formatDate(time, currentLang)}
                    <div id="three-popup-close" class="mt-2 text-xs text-gray-400">${translate('click-anywhere-close')}</div>
                </div>
            `;
            
            document.body.appendChild(popup);
            
            // Add click to close
            const closePopup = (e) => {
                if (popup && !popup.contains(e.target)) {
                    popup.remove();
                    document.removeEventListener('click', closePopup);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closePopup);
            }, 100);
        }

        function onThreeResize() {
            const c = document.getElementById('globe-container');
            if(!c || !threeRenderer) return;
            threeCamera.aspect = c.clientWidth/c.clientHeight; threeCamera.updateProjectionMatrix();
            threeRenderer.setSize(c.clientWidth, c.clientHeight);
        }

        // --- UI UPDATE ---
        function updateUI() {
            safeSetText('app-title', 'title');
            safeSetHTML('header-title', `<i data-lucide="activity" class="h-6 w-6 text-indigo-400"></i><span>${translate('header-title')}</span>`);
            safeSetText('time-day', 'time-day'); safeSetText('time-week', 'time-week'); safeSetText('time-month', 'time-month');
            safeSetText('mag-all', 'mag-all'); safeSetText('depth-all', 'depth-all'); safeSetText('depth-shallow', 'depth-shallow'); safeSetText('depth-intermediate', 'depth-intermediate'); safeSetText('depth-deep', 'depth-deep'); safeSetText('depth-vdeep', 'depth-vdeep');
            if (countryInputEl) countryInputEl.placeholder = "e.g., Japan";
            
            // Update filter toggle button text based on current state
            const isHidden = (window.innerWidth >= 640) ? !filterControlsWrapperEl.classList.contains('open') : filterControlsWrapperEl.classList.contains('hidden');
            const stateKey = isHidden ? 'options-show' : 'options-hide';
            const iconKey = isHidden ? 'chevron-down' : 'chevron-up';
            if (filterToggleTextDesktop) filterToggleTextDesktop.innerText = translate(stateKey);
            if (filterToggleIconDesktop) filterToggleIconDesktop.setAttribute('data-lucide', iconKey);
            if (filterToggleTextMobile) filterToggleTextMobile.innerText = translate(stateKey);
            if (filterToggleIconMobile) filterToggleIconMobile.setAttribute('data-lucide', iconKey);

            safeSetHTML('tab-map', `<i data-lucide="globe" class="inline h-4 w-4 mr-1"></i> ${translate('tab-map')}`);
            safeSetHTML('tab-dashboard', `<i data-lucide="layout-dashboard" class="inline h-4 w-4 mr-1"></i> ${translate('tab-dashboard')}`);
            safeSetHTML('tab-3d', `<i data-lucide="globe-2" class="inline h-4 w-4 mr-1"></i> ${translate('tab-3d')}`);

            safeSetText('stat-total-title', 'stat-total-title'); safeSetText('stat-strongest-title', 'stat-strongest-title'); safeSetText('stat-recent-title', 'stat-recent-title');
            safeSetText('minimap-title', 'minimap-title'); safeSetText('chart-mag-title', 'chart-mag-title'); safeSetText('chart-depth-title', 'chart-depth-title');
            safeSetHTML('footer-data-source', 'footer-source');
            safeSetText('legend-mag-title', 'legend-mag-title');
            safeSetText('legend-depth-title', 'legend-depth-title'); safeSetText('depth-0-30', 'depth-0-30'); safeSetText('depth-30-100', 'depth-30-100'); safeSetText('depth-100-300', 'depth-100-300'); safeSetText('depth-300-plus', 'depth-300-plus'); safeSetText('legend-source', 'legend-source');
            safeSetText('three-title', '3d-title');
            safeSetText('three-controls-rotate', '3d-controls-rotate');
            safeSetText('three-controls-zoom', '3d-controls-zoom');
            safeSetText('legend-3d-title', 'legend-3d-title');
            safeSetText('legend-3d-height-info', 'legend-3d-height-info');
            safeSetText('legend-3d-note', 'legend-3d-note');
            safeSetText('three-loader-text', '3d-loader');
            safeSetText('guide-title', 'guide-title');
            safeSetText('guide-keyboard-title', 'guide-keyboard-title');
            safeSetText('guide-understanding-title', 'guide-understanding-title');
            safeSetText('guide-visualization-title', 'guide-visualization-title');
            safeSetText('guide-filtering-title', 'guide-filtering-title');
            safeSetText('got-it-text', 'got-it');
            // Guide specifics
            safeSetText('kb-switch-dashboard', 'kb-switch-dashboard');
            safeSetText('kb-switch-map', 'kb-switch-map');
            safeSetText('kb-switch-3d', 'kb-switch-3d');
            safeSetText('kb-export', 'kb-export');
            safeSetText('kb-toggle-filters', 'kb-toggle-filters');
            safeSetText('guide-understanding-text', 'guide-understanding-text');
            safeSetText('guide-tip-size', 'guide-tip-size');
            safeSetText('guide-tip-color', 'guide-tip-color');
            safeSetText('guide-tip-3d', 'guide-tip-3d');
            safeSetText('guide-tip-click', 'guide-tip-click');
            safeSetText('guide-filtering-text', 'guide-filtering-text');
            safeSetText('three-popup-close', 'click-anywhere-close');
            safeSetText('legend-3d-depth-title', 'legend-depth-title');
            safeSetText('guide-marker-mode-desc', 'marker-mode-desc');
            
            // Update enhancement elements
            if (exportDataBtn) exportDataBtn.innerHTML = `<i data-lucide="download" class="h-4 w-4"></i> ${translate('export-data')}`;
            if (helpBtn) helpBtn.innerHTML = `<i data-lucide="help-circle" class="h-4 w-4"></i> ${translate('quick-guide')}`;
            if (settingsBtn) settingsBtn.innerHTML = `<i data-lucide="settings" class="h-4 w-4"></i> ${translate('settings')}`;

            applyFilters(false); 
            lucide.createIcons();

            // Update marker mode controls (if they exist)
            const pixelBtn = document.getElementById('marker-mode-pixel');
            const metersBtn = document.getElementById('marker-mode-meters');
            if (pixelBtn && metersBtn) {
                pixelBtn.classList.toggle('active', markerMode === 'pixel');
                metersBtn.classList.toggle('active', markerMode === 'meters');
            }
            const markerLabel = document.getElementById('marker-mode-label');
            if (markerLabel) markerLabel.innerText = translate('marker-mode-label');
            if (pixelBtn) pixelBtn.innerText = translate('marker-pixel');
            if (metersBtn) metersBtn.innerText = translate('marker-meters');

            // Ensure dashboard placeholders use translated 'Not available'
            const placeholders = ['strongest-place-stat','strongest-time-stat','strongest-depth-stat','recent-place-stat','recent-date-stat','recent-depth-stat','recent-time-stat'];
            placeholders.forEach(id => { const el = document.getElementById(id); if (el) el.innerText = translate('not-available'); });
        }

        // --- APP INIT ---
        async function initApp() {
            if (typeof L === 'undefined' || typeof Chart === 'undefined' || typeof THREE === 'undefined') {
                console.error("Critical: Libs not loaded."); return;
            }
            
            appLoaderEl = document.getElementById('app-loader');
            loadingStatusEl = document.getElementById('loading-status');
            errorToastEl = document.getElementById('error-toast'); errorMessageEl = document.getElementById('error-message'); dashboardMessageEl = document.getElementById('dashboard-message');
            langSelectEl = document.getElementById('lang-select'); timeSelectEl = document.getElementById('time-select'); magSelectEl = document.getElementById('mag-select'); depthSelectEl = document.getElementById('depth-select'); countryInputEl = document.getElementById('country-input');
            countryFilterStatusEl = document.getElementById('country-filter-status');
            filterControlsWrapperEl = document.getElementById('filter-controls-wrapper');
            filterToggleBtnDesktop = document.getElementById('filter-toggle-btn-desktop'); filterToggleTextDesktop = document.getElementById('filter-toggle-text-desktop'); filterToggleIconDesktop = document.getElementById('filter-toggle-icon-desktop');
            filterToggleBtnMobile = document.getElementById('filter-toggle-btn-mobile'); filterToggleTextMobile = document.getElementById('filter-toggle-text-mobile'); filterToggleIconMobile = document.getElementById('filter-toggle-icon-mobile');

            // Initialize enhancement elements
            threeLoaderEl = document.getElementById('three-loader');
            exportDataBtn = document.getElementById('export-data-btn');
            helpBtn = document.getElementById('help-btn');
            guideModal = document.getElementById('guide-modal');
            closeGuideBtn = document.getElementById('close-guide');
            gotItBtn = document.getElementById('got-it-btn');
            settingsBtn = document.getElementById('settings-btn');
            settingsPopup = document.getElementById('settings-popup');
            const markerModePixelBtn = document.getElementById('marker-mode-pixel');
            const markerModeMetersBtn = document.getElementById('marker-mode-meters');
            
            currentLang = langSelectEl.value || 'en';
            try { markerMode = localStorage.getItem('markerMode') || 'pixel'; } catch(e) { markerMode = 'pixel'; console.warn('localStorage disabled, defaulting markerMode to pixel'); }
            
            // Show filters by default on desktop
            if (window.innerWidth >= 640) {
                filterControlsWrapperEl.classList.remove('hidden');
                filterControlsWrapperEl.classList.add('open');
            }
            
            // Initialize maps first and wait for them to be ready before loading data
            await initMaps();
            updateUI();
            loadingStatusEl.innerHTML = `${SPINNER_SVG} <span>${translate('loading')}</span>`;

            // Show tutorial/guide modal on load
            if (guideModal) showGuideModal();

            // Now load earthquake data (this will call applyFilters and populate mini-map)
            await loadEarthquakeData();

            langSelectEl.addEventListener('change', (e) => { currentLang = e.target.value; updateUI(); });
            timeSelectEl.addEventListener('change', () => loadEarthquakeData(true));
            magSelectEl.addEventListener('change', () => applyFilters(false));
            depthSelectEl.addEventListener('change', () => applyFilters(false));
            
            // Basemap selector
            document.querySelectorAll('.basemap-option').forEach(option => {
                option.addEventListener('click', () => {
                    document.querySelectorAll('.basemap-option').forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                    switchBasemap(option.getAttribute('data-value'));
                });
            });
            
            if (filterToggleBtnDesktop) filterToggleBtnDesktop.addEventListener('click', toggleFilters);
            if (filterToggleBtnMobile) filterToggleBtnMobile.addEventListener('click', toggleFilters);

            // Marker mode toggle handling (settings)
            const setMarkerMode = (mode) => {
                markerMode = mode;
                try { localStorage.setItem('markerMode', markerMode); } catch(e) { console.warn('localStorage not available: cannot persist marker mode'); }
                if (markerModePixelBtn) markerModePixelBtn.classList.toggle('active', mode === 'pixel');
                if (markerModeMetersBtn) markerModeMetersBtn.classList.toggle('active', mode === 'meters');
                // Update plotted markers
                applyFilters(false);
            };
            if (markerModePixelBtn) markerModePixelBtn.addEventListener('click', () => setMarkerMode('pixel'));
            if (markerModeMetersBtn) markerModeMetersBtn.addEventListener('click', () => setMarkerMode('meters'));
            // Initialize UI state
            setMarkerMode(markerMode);

            let countryInputTimer;
            countryInputEl.addEventListener('input', () => { clearTimeout(countryInputTimer); countryInputTimer = setTimeout(() => { applyFilters(false); }, 500); });

            // Enhancement event listeners
            if (exportDataBtn) exportDataBtn.addEventListener('click', exportEarthquakeData);
            if (helpBtn) helpBtn.addEventListener('click', showGuideModal);
            if (closeGuideBtn) closeGuideBtn.addEventListener('click', hideGuideModal);
            if (gotItBtn) gotItBtn.addEventListener('click', hideGuideModal);
            if (settingsBtn) settingsBtn.addEventListener('click', toggleSettingsPopup);
            
            // Close modal when clicking outside
            guideModal.addEventListener('click', (e) => {
                if (e.target === guideModal) hideGuideModal();
            });

            initTabs();
            initKeyboardShortcuts();
            initSettingsPopup();
            
            // Fix: Initialize icons after DOM is ready
            setTimeout(() => {
                lucide.createIcons();
            }, 100);

            // Keep maps responsive on window resize
            window.addEventListener('resize', () => {
                if (map) try { map.invalidateSize(); } catch(e) {}
                if (miniMap) try { miniMap.invalidateSize(); } catch(e) {}
                if (threeRenderer) try { onThreeResize(); } catch(e) {}
            });
        }

        function initMaps() {
            // Return a Promise so callers can await the map initialization
            // Use a setTimeout to let layout settle, then initialize maps and resolve when they are ready
            return new Promise((resolve) => {
                setTimeout(() => {
                    map = L.map('map', { zoomControl: false }).setView([20, 0], 2);
                L.control.zoom({ position: 'bottomleft' }).addTo(map);
                
                // Fix minimap - ensure it shows whole world
                miniMap = L.map('mini-map', { 
                    zoomControl: false, 
                    attributionControl: false, 
                    dragging: false, 
                    touchZoom: false, 
                    scrollWheelZoom: false, 
                    doubleClickZoom: false 
                }).setView([0, 0], 1); // Start at zoom level 1 to see whole world
                
                    earthquakeLayer = L.layerGroup().addTo(map);
                    miniMapLayer = L.layerGroup().addTo(miniMap);

                const defaultLayer = TILE_LAYERS['dark'];
                mapTileLayer = L.tileLayer(defaultLayer.url, { attribution: defaultLayer.attribution, subdomains: 'abcd', maxZoom: 20 }).addTo(map);
                miniMapTileLayer = L.tileLayer(defaultLayer.url, { subdomains: 'abcd', maxZoom: 20 }).addTo(miniMap);
                
                    // Ensure minimap shows whole world and has correct proportions. Use fitWorld for full extent
                    setTimeout(() => {
                        if (miniMap) {
                            try { miniMap.fitWorld(); } catch(e) { miniMap.setView([0, 0], 1); }
                            miniMap.invalidateSize();
                        }
                    }, 100);

                    // Wait for both maps to signal readiness (tile layers attached and initialized)
                    let readyCount = 0;
                    const onReady = () => {
                        readyCount++;
                        if (readyCount >= 2) resolve();
                    };
                    map.whenReady(onReady);
                    miniMap.whenReady(onReady);
            }, 200);
            });
        }

        // Safe map helpers: ensure coordinates or bounds are valid before invoking Leaflet view methods
        function safeFlyTo(tMap, lat, lon, zoom, opts = {}) {
            try {
                if (!tMap) return;
                const latNum = Number(lat); const lonNum = Number(lon);
                if (!Number.isFinite(latNum) || !Number.isFinite(lonNum)) {
                    console.warn('safeFlyTo: invalid coordinates', lat, lon); return; }
                tMap.flyTo([latNum, lonNum], zoom, opts);
            } catch(e) { console.warn('safeFlyTo failed', e); }
        }

        function safeFlyToBounds(tMap, bounds, opts = {}) {
            try {
                if (!tMap || !bounds || typeof bounds.getCenter !== 'function') return;
                const c = bounds.getCenter();
                if (!Number.isFinite(c.lat) || !Number.isFinite(c.lng)) { console.warn('safeFlyToBounds: invalid bounds center', c); return; }
                tMap.flyToBounds(bounds, opts);
            } catch(e) { console.warn('safeFlyToBounds failed', e); }
        }

        function switchBasemap(selectedKey) {
            const selectedLayer = TILE_LAYERS[selectedKey];
            if (mapTileLayer) map.removeLayer(mapTileLayer);
            mapTileLayer = L.tileLayer(selectedLayer.url, { attribution: selectedLayer.attribution, subdomains: 'abcd', maxZoom: 20 }).addTo(map);
            mapTileLayer.bringToBack(); 
            if (miniMapTileLayer) miniMap.removeLayer(miniMapTileLayer);
            miniMapTileLayer = L.tileLayer(selectedLayer.url, { subdomains: 'abcd', maxZoom: 20 }).addTo(miniMap);
            miniMapTileLayer.bringToBack(); 
        }

        function ensureLayoutStabilityAfterTabSwitch(targetTab) {
            // Run several passes since layout engines and CSS transitions can cause mid-resize artifacts.
            const runs = [60, 170, 350, 700];
            runs.forEach((delay) => {
                setTimeout(() => {
                    try { if (map) map.invalidateSize(); } catch(e) {}
                    try { if (miniMap) miniMap.invalidateSize(); } catch(e) {}
                    // Refresh chart renderers if visible
                    try { if (magnitudeChartInstance) magnitudeChartInstance.update(); } catch(e) {}
                    try { if (depthChartInstance) depthChartInstance.update(); } catch(e) {}
                    // 3D adjustments
                    if (document.getElementById('3d-view').classList.contains('active') && is3DInitialized) {
                        try {
                            const c = document.getElementById('globe-container');
                            if (threeRenderer && c) {
                                threeRenderer.setPixelRatio(window.devicePixelRatio || 1);
                                threeRenderer.setSize(c.clientWidth, c.clientHeight);
                                threeControls.update();
                                threeRenderer.render(threeScene, threeCamera);
                                try { threeRenderer.domElement.style.visibility = 'visible'; } catch(e) {}
                            }
                        } catch(e) {}
                    } else {
                        // If 3D is not the active tab, hide the canvas to prevent rendering artifacts
                        try { if (threeRenderer) threeRenderer.domElement.style.visibility = 'hidden'; } catch(e) {}
                    }
                }, delay);
            });
        }

        function initTabs() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');
            tabButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const targetTab = e.currentTarget.getAttribute('data-tab');
                    tabButtons.forEach(btn => { btn.classList.remove('text-white', 'border-indigo-500'); btn.classList.add('text-gray-400', 'border-transparent', 'hover:border-indigo-500'); });
                    e.currentTarget.classList.add('text-white', 'border-indigo-500'); e.currentTarget.classList.remove('text-gray-400', 'border-transparent', 'hover:border-indigo-500');
                    tabContents.forEach(content => content.classList.remove('active'));
                    document.getElementById(targetTab).classList.add('active');
                    setTimeout(() => {
                        if (targetTab === 'map-view' && map) {
                            map.invalidateSize();
                            // Fix: Ensure map is properly displayed
                            setTimeout(() => map.invalidateSize(), 100);
                        }
                        else if (targetTab === 'dashboard-view' && miniMap) {
                            miniMap.invalidateSize();
                            // Fix: Update charts when switching to dashboard
                            if (allEarthquakeFeatures && allEarthquakeFeatures.length > 0) {
                                const filtered = applyCurrentFiltersToData(allEarthquakeFeatures);
                                updateCharts(calculateMagnitudeDistribution(filtered), calculateDepthDistribution(filtered));
                            }
                        }
                        else if (targetTab === '3d-view') { 
                            if (!is3DInitialized) init3DView(); 
                            onThreeResize(); 
                        }
                        // Stabilize layout and rendering for map and 3D after tab change (adds mild delays to handle CSS transitions)
                        ensureLayoutStabilityAfterTabSwitch(targetTab);
                        applyFilters(false);
                    }, 200);
                });
            });
        }

        async function loadEarthquakeData(isTimeChange = false) {
            const selectedRange = timeSelectEl.value;
            loadingStatusEl.innerHTML = `${SPINNER_SVG} <span>${translate('loading')}</span>`;
            try {
                const response = await fetch(API_URLS[selectedRange]);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                console.info('loadEarthquakeData: fetched', (data && data.features && data.features.length) || 0, 'features');
                allEarthquakeFeatures = (data.features || []).filter(f => f.properties && f.properties.type === 'earthquake' && f.geometry && f.geometry.coordinates && Array.isArray(f.geometry.coordinates));
                await applyFilters(isTimeChange);
                hideLoader();
            } catch (error) {
                console.error('Load Error:', error);
                loadingStatusEl.innerHTML = `<span class="text-red-400">${translate('error')}</span>`;
                hideLoader();
            }
        }

        async function applyFilters(forceMapFit) {
            const selMag = magSelectEl.value === 'all' ? 0 : parseFloat(magSelectEl.value);
            const dRange = getDepthRange(depthSelectEl.value);
            const rawCountry = countryInputEl.value.trim();
            
            let filtered = allEarthquakeFeatures.filter(f => {
                const mag = f.properties.mag; const depth = f.geometry.coordinates[2];
                return mag >= selMag && (depthSelectEl.value === 'all' || (depth >= dRange.min && depth < dRange.max));
            });

            let filterMsg = translate('filter-note-active');
            let cBounds = null;
            const isCountry = rawCountry.length > 0;

            if (isCountry) {
                const geo = getCountryGeodata(rawCountry);
                if (geo.success && geo.bounds) {
                    cBounds = L.latLngBounds(L.latLng(geo.bounds[0]), L.latLng(geo.bounds[1]));
                    filtered = filtered.filter(f => isPointInBoundingBox(f.geometry.coordinates[1], f.geometry.coordinates[0], geo.bounds));
                    filterMsg = translate('filter-note-country_valid') + geo.name;
                    if (filtered.length === 0) filterMsg = translate('filter-note-country_no_data') + geo.name;
                } else if (geo.success) {
                    filterMsg = translate('filter-note-country_no_bounds');
                } else {
                    filterMsg = translate('filter-note-country_invalid');
                }
            }

            const countToShow = filtered.length;
            // Plot on main map only if initialized
            if (map && earthquakeLayer) {
                plotEarthquakes(filtered, map, earthquakeLayer);
                if (cBounds && (forceMapFit || isCountry)) safeFlyToBounds(map, cBounds, { padding: [50,50], maxZoom: 8, duration: MAP_FLY_DURATION });
                else if (!isCountry && forceMapFit) safeFlyTo(map, 20, 0, 2, { duration: MAP_FLY_DURATION });
                else if (filtered.length === 0) safeFlyTo(map, 20, 0, 2, { duration: MAP_FLY_DURATION });
            }

            // Plot on mini-map only if initialized
            if (miniMap && miniMapLayer) {
                // Recalculate size in case layout changed
                try { miniMap.invalidateSize(); } catch(e) {}
                plotEarthquakes(filtered, miniMap, miniMapLayer);
                if (cBounds) safeFlyToBounds(miniMap, cBounds, { padding: [20,20], duration: MINI_MAP_FLY_DURATION });
                else safeFlyTo(miniMap, 20, 0, 1, { duration: MINI_MAP_FLY_DURATION });
            }

            generateDashboard(filtered);
            if (document.getElementById('dashboard-view').classList.contains('active') || filtered.length > 0) {
                updateCharts(calculateMagnitudeDistribution(filtered), calculateDepthDistribution(filtered));
            }
            if (is3DInitialized) {
                plotEarthquakes3D(filtered);
                try {
                    if (cBounds) {
                        // Build simple bounds array for use with 3D helpers
                        const sw = cBounds.getSouthWest(); const ne = cBounds.getNorthEast();
                        const boundsArray = [[sw.lat, sw.lng],[ne.lat, ne.lng]];
                        const center = getLatLonCenterFromBounds(boundsArray);
                        const distance = calculateCameraDistanceForBounds(boundsArray);
                        // Animate camera to country center and use a distance based on extent
                        animateThreeCameraTo(center.lat, center.lon, distance);
                    } else if (forceMapFit || !isCountry) {
                        // Reset to global view (default camera position used in init)
                        animateThreeCameraTo(20, 0, Math.max(120, 1.5 * EARTH_RADIUS));
                    }
                } catch (err) { console.warn('3D camera focus failed:', err); }
            }

            if (countryFilterStatusEl) {
                countryFilterStatusEl.classList.toggle('hidden', !isCountry);
                countryFilterStatusEl.innerText = filterMsg;
                countryFilterStatusEl.className = `text-sm hidden px-4 py-2 mt-3 ${filterMsg.includes('not recognized') || filterMsg.includes('no earthquakes') ? 'bg-red-600/30 border border-red-500 text-red-100' : 'bg-indigo-600/30 border border-indigo-500 text-indigo-100'}`;
                if (isCountry) countryFilterStatusEl.classList.remove('hidden');
            }
            loadingStatusEl.innerHTML = `<div class="earthquake-count-display"><span class="text-indigo-300">${countToShow.toLocaleString()}</span> ${translate('earthquakes-available')}</div>`;
            lucide.createIcons();
        }

        window.onload = initApp;;
