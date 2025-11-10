// --- API URLs (DYNAMIC) ---
        const API_URLS = {
            'day': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
            'week': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
            'month': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson'
        };
        
        // --- TILE LAYER CONFIGURATION ---
        const TILE_LAYERS = {
            'dark': {
                url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
                attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a> | Data: USGS'
            },
            'standard': {
                url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a> | Data: USGS'
            }
        };

        // --- GEOGRAPHIC DATA ---
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

        // Spinner SVG (used for subsequent small loads)
        const SPINNER_SVG = `
            <svg class="spinner h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        `;
        
        // Global Variables
        let map; // Main map
        let miniMap; // Dashboard map
        let mapTileLayer, miniMapTileLayer; // References to the current tile layers
        let appLoaderEl, loadingStatusEl, errorToastEl, errorMessageEl, dashboardMessageEl;
        let langSelectEl, timeSelectEl, magSelectEl, depthSelectEl, countryInputEl, countryFilterStatusEl, basemapSelectEl; 
        
        // Button Refs
        let filterToggleBtnMobile, filterToggleTextMobile, filterToggleIconMobile;
        let filterControlsWrapperEl;
        
        let earthquakeLayer, miniMapLayer; 
        let allEarthquakeFeatures = []; // Stores all raw data from USGS
        let magnitudeChartInstance, depthChartInstance;
        let currentLang = 'en'; // Default language set to English
        
        // --- LANGUAGE TRANSLATIONS ---
        const translations = {
            'en': {
                'title': 'Seismic Monitor & Dashboard',
                'header-title': 'Seismic Monitor',
                'loading': 'Loading data...',
                'error': 'Load Error',
                'options-show': 'Show Options', // Corrected
                'options-hide': 'Hide Options', // Corrected
                'data-filters': 'Data Filters',
                'settings': 'Settings',
                'time-day': 'Last 24 hours',
                'time-week': 'Last 7 days',
                'time-month': 'Last 30 days',
                'mag-all': 'Magnitude: All',
                'depth-all': 'Depth: All',
                'depth-shallow': 'Shallow (0-30 km)',
                'depth-intermediate': 'Intermediate (30-100 km)',
                'depth-deep': 'Deep (100-300 km)',
                'depth-vdeep': 'Very Deep (+300 km)',
                'map-dark': 'Basemap: Dark',
                'map-standard': 'Basemap: Standard',
                'country-placeholder': 'Search Country (e.g., Japan)',
                'tab-map': 'Map Explorer',
                'tab-dashboard': 'Dashboard',
                'legend-mag-title': 'Magnitude (Size)',
                'legend-mag-desc': 'Circle size<br>indicates magnitude.',
                'legend-depth-title': 'Depth (Color)',
                'depth-0-30': '0 – 30 km (Shallow)',
                'depth-30-100': '30 – 100 km (Intermediate)',
                'depth-100-300': '100 – 300 km (Deep)',
                'depth-300-plus': '+300 km (Very Deep)',
                'legend-source': 'Earthquake Data: USGS',
                'dashboard-heading': 'Seismic Summary and Analysis',
                'stat-total-title': 'Total Earthquakes',
                'stat-strongest-title': 'Strongest Earthquake',
                'stat-recent-title': 'Most Recent Earthquake',
                'chart-mag-title': 'Magnitude Distribution',
                'chart-depth-title': 'Depth Distribution (km)',
                'minimap-title': 'Distribution Map',
                'popup-mag': 'Magnitude',
                'popup-place': 'Location',
                'popup-depth': 'Depth',
                'popup-date': 'Date',
                'depth-label': 'Depth',
                'filter-note-active': 'Showing global data filtered by time, magnitude, and depth.',
                'filter-note-country_valid': 'Filtering by: ',
                'filter-note-country_invalid': 'Country not recognized or no Earthquakes found. Showing global data.',
                'filter-note-country_no_data': 'For the current settings, no earthquakes were reported in: ',
                'no-data-msg': 'No earthquakes found with the active filters.',
                'chart-count': 'Earthquake Count',
                'earthquakes-available': 'earthquakes available',
                'footer-source': 'This tool is a personal experiment built for fun and learning, powered by the U.S. Geological Survey (USGS) Earthquake Hazards Program API.'
            },
            'es': {
                'title': 'Monitor Sísmico & Dashboard',
                'header-title': 'Monitor Sísmico',
                'loading': 'Cargando datos...',
                'error': 'Error de carga',
                'options-show': 'Mostrar Opciones', // Corrected
                'options-hide': 'Ocultar Opciones', // Corrected
                'data-filters': 'Filtros de Datos',
                'settings': 'Ajustes',
                'time-day': 'Últimas 24 horas',
                'time-week': 'Últimos 7 días',
                'time-month': 'Últimos 30 días',
                'mag-all': 'Magnitud: Todas',
                'depth-all': 'Profundidad: Todas',
                'depth-shallow': 'Superficial (0-30 km)',
                'depth-intermediate': 'Intermedia (30-100 km)',
                'depth-deep': 'Profunda (100-300 km)',
                'depth-vdeep': 'Muy Profunda (+300 km)',
                'map-dark': 'Mapa base: Oscuro',
                'map-standard': 'Mapa base: Estándar',
                'country-placeholder': 'Buscar País (ej: Japón)',
                'tab-map': 'Mapa de Exploración',
                'tab-dashboard': 'Panel de Control',
                'legend-mag-title': 'Magnitud (Tamaño)',
                'legend-mag-desc': 'El tamaño del círculo<br>indica la magnitud.',
                'legend-depth-title': 'Profundidad (Color)',
                'depth-0-30': '0 – 30 km (Superficial)',
                'depth-30-100': '30 – 100 km (Intermedia)',
                'depth-100-300': '100 – 300 km (Profunda)',
                'depth-300-plus': '+300 km (Muy Profunda)',
                'legend-source': 'Datos Sismos: USGS',
                'dashboard-heading': 'Resumen y Análisis Sísmico',
                'stat-total-title': 'Sismos Totales',
                'stat-strongest-title': 'Sismo Más Fuerte',
                'stat-recent-title': 'Sismo Más Reciente',
                'chart-mag-title': 'Distribución de Magnitud',
                'chart-depth-title': 'Distribución de Profundidad (km)',
                'minimap-title': 'Mapa de Distribución',
                'popup-mag': 'Magnitud',
                'popup-place': 'Lugar',
                'popup-depth': 'Profundidad',
                'popup-date': 'Fecha',
                'depth-label': 'Profundidad',
                'filter-note-active': 'Mostrando datos globales filtrados por tiempo, magnitud y profundidad.',
                'filter-note-country_valid': 'Filtrando por: ',
                'filter-note-country_invalid': 'País no reconocido o sin reportes de sismos. Mostrando datos globales.',
                'filter-note-country_no_data': 'Para la configuración actual, no se reportaron sismos en: ',
                'no-data-msg': 'No se encontraron sismos con los filtros activos.',
                'chart-count': 'Conteo de Sismos',
                'earthquakes-available': 'sismos disponibles',
                'footer-source': 'Esta herramienta es un experimento personal de diversión y aprendizaje, utilizando la API del Programa de Peligros Sísmicos del Servicio Geológico de EE. UU. (USGS).'
            }
        };

        function translate(key) {
            return translations[currentLang][key] || translations['en'][key] || key;
        }

        // Function to toggle the filter visibility and button state
        function toggleFilters() {
            const isOpen = filterControlsWrapperEl.classList.toggle('open');
            const stateKey = isOpen ? 'options-hide' : 'options-show';
            const iconKey = isOpen ? 'chevron-up' : 'chevron-down'; // Corrected logic
            
            // Update Mobile button state
            if (filterToggleTextMobile) filterToggleTextMobile.innerText = translate(stateKey); 
            if (filterToggleIconMobile) filterToggleIconMobile.setAttribute('data-lucide', iconKey);
            
            lucide.createIcons();
        }

        // --- Loader Control ---
        function hideLoader() {
            if (appLoaderEl) {
                appLoaderEl.classList.add('hidden-loader');
                setTimeout(() => {
                    if (appLoaderEl && appLoaderEl.parentNode) {
                        appLoaderEl.parentNode.removeChild(appLoaderEl);
                    }
                }, 500);
            }
        }
        
        // --- Helper functions for robust UI updates ---
        
        function safeSetText(id, textKey) {
            const el = document.getElementById(id);
            if (el) {
                el.innerText = translate(textKey);
            }
        }

        function safeSetHTML(id, htmlContent) {
            const el = document.getElementById(id);
            if (el) {
                const content = (typeof htmlContent === 'string' && htmlContent.includes('**')) 
                    ? translate(htmlContent).replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                    : translate(htmlContent);
                el.innerHTML = content;
            }
        }

        function updateUI() {
            safeSetText('app-title', 'title');
            safeSetHTML('header-title', `<i data-lucide="activity" class="h-6 w-6 text-indigo-400"></i><span>${translate('header-title')}</span>`);
            
            safeSetText('data-filters-title', 'data-filters');
            safeSetText('settings-title', 'settings');
            
            safeSetText('time-day', 'time-day');
            safeSetText('time-week', 'time-week');
            safeSetText('time-month', 'time-month');

            safeSetText('mag-all', 'mag-all');
            safeSetText('depth-all', 'depth-all');
            safeSetText('depth-shallow', 'depth-shallow');
            safeSetText('depth-intermediate', 'depth-intermediate');
            safeSetText('depth-deep', 'depth-deep');
            safeSetText('depth-vdeep', 'depth-vdeep');
            
            safeSetText('map-dark', 'map-dark');
            safeSetText('map-standard', 'map-standard');
            
            if (countryInputEl) {
                countryInputEl.placeholder = translate('country-placeholder');
            }
            
            // Update dynamic button text (handles initial load)
            const isOpen = filterControlsWrapperEl.classList.contains('open');
            const stateKey = isOpen ? 'options-hide' : 'options-show';
            const iconKey = isOpen ? 'chevron-up' : 'chevron-down';

            if (filterToggleTextMobile) filterToggleTextMobile.innerText = translate(stateKey); 
            if (filterToggleIconMobile) filterToggleIconMobile.setAttribute('data-lucide', iconKey);

            safeSetHTML('tab-map', `<i data-lucide="globe" class="inline h-4 w-4 mr-1"></i> ${translate('tab-map')}`);
            safeSetHTML('tab-dashboard', `<i data-lucide="layout-dashboard" class="inline h-4 w-4 mr-1"></i> ${translate('tab-dashboard')}`);

            safeSetText('stat-total-title', 'stat-total-title');
            safeSetText('stat-strongest-title', 'stat-strongest-title');
            safeSetText('stat-recent-title', 'stat-recent-title');
            safeSetText('minimap-title', 'minimap-title');
            safeSetText('chart-mag-title', 'chart-mag-title');
            safeSetText('chart-depth-title', 'chart-depth-title');
            
            safeSetHTML('footer-data-source', 'footer-source');

            safeSetText('legend-mag-title', 'legend-mag-title');
            safeSetHTML('legend-mag-desc', translate('legend-mag-desc'));
            safeSetText('legend-depth-title', 'legend-depth-title');
            safeSetText('depth-0-30', 'depth-0-30');
            safeSetText('depth-30-100', 'depth-30-100');
            safeSetText('depth-100-300', 'depth-100-300');
            safeSetText('depth-300-plus', 'depth-300-plus');
            safeSetText('legend-source', 'legend-source');

            applyFilters(false); 
            lucide.createIcons(); 
        }

        // --- Utility Functions (Depth, Color, Radius, TimeSince, etc. remain unchanged) ---
        
        function normalizeCountryName(name) {
            return name.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        function getCountryGeodata(countryName) {
            const normName = normalizeCountryName(countryName);
            const data = COUNTRY_GEODATA[normName];
            
            if (data) {
                return { success: true, name: data.name, bounds: data.bounds };
            }

            return { success: false, name: countryName, bounds: null };
        }
        
        function isPointInBoundingBox(lat, lon, bounds) {
            const swLat = bounds[0][0];
            const swLon = bounds[0][1];
            const neLat = bounds[1][0];
            const neLon = bounds[1][1];

            if (swLon < neLon) {
                return lat >= swLat && lat <= neLat && lon >= swLon && lon <= neLon;
            } 
            else { 
                return lat >= swLat && lat <= neLat && (lon >= swLon || lon <= neLon);
            }
        }


        function getDepthRange(value) {
            switch (value) {
                case 'shallow': return { min: 0, max: 30 };
                case 'intermediate': return { min: 30, max: 100 };
                case 'deep': return { min: 100, max: 300 };
                case 'vdeep': return { min: 300, max: Infinity };
                default: return { min: -Infinity, max: Infinity };
            }
        }

        function getColor(depth) {
            if (depth > 300) return '#3F51B5'; 
            if (depth > 100) return '#2196F3';
            if (depth > 30)  return '#FF9800';
            if (depth >= 0)  return '#FFEB3B';
            return '#FFEB3B'; 
        }

        function getRadius(mag) {
            const minMag = 2.5;
            const maxMag = 8.0; 
            const minRadius = 18000; 
            const maxRadius = 180000; 

            if (mag < minMag) return minRadius;
            if (mag > maxMag) return maxRadius;
            
            return minRadius + ((mag - minMag) / (maxMag - minMag)) * (maxRadius - minRadius) * 0.8; 
        }

        function timeSince(timestamp) {
            const now = Date.now();
            const seconds = Math.floor((now - timestamp) / 1000);
            const lang = currentLang; 
            
            let interval = seconds / 31536000;
            if (interval > 1) {
                const value = Math.floor(interval);
                const unit = lang === 'es' ? (value === 1 ? 'año' : 'años') : (value === 1 ? 'year' : 'years');
                return lang === 'es' ? `hace ${value} ${unit}` : `${value} ${unit} ago`;
            }
            interval = seconds / 2592000;
            if (interval > 1) {
                const value = Math.floor(interval);
                const unit = lang === 'es' ? (value === 1 ? 'mes' : 'meses') : (value === 1 ? 'month' : 'months');
                return lang === 'es' ? `hace ${value} ${unit}` : `${value} ${unit} ago`;
            }
            interval = seconds / 86400;
            if (interval > 1) {
                const value = Math.floor(interval);
                const unit = lang === 'es' ? (value === 1 ? 'día' : 'días') : (value === 1 ? 'day' : 'days');
                return lang === 'es' ? `hace ${value} ${unit}` : `${value} ${unit} ago`;
            }
            interval = seconds / 3600;
            if (interval > 1) {
                const value = Math.floor(interval);
                const unit = lang === 'es' ? (value === 1 ? 'hora' : 'horas') : (value === 1 ? 'hour' : 'hours');
                return lang === 'es' ? `hace ${value} ${unit}` : `${value} ${unit} ago`;
            }
            interval = seconds / 60;
            if (interval > 1) {
                const value = Math.floor(interval);
                const unit = lang === 'es' ? (value === 1 ? 'minuto' : 'minutos') : (value === 1 ? 'minute' : 'minutes');
                return lang === 'es' ? `hace ${value} ${unit}` : `${value} ${unit} ago`;
            }
            const value = Math.floor(seconds);
            const unit = lang === 'es' ? (value === 1 ? 'segundo' : 'segundos') : (value === 1 ? 'second' : 'seconds');
            return lang === 'es' ? `hace ${value} ${unit}` : `${value} ${unit} ago`;
        }

        /**
         * Formats a timestamp into a full date and time string for display.
         */
        function formatDate(timestamp, lang) {
            return new Date(timestamp).toLocaleString(lang === 'es' ? 'es-CO' : 'en-US', { 
                timeStyle: 'short', 
                dateStyle: 'medium' 
            });
        }
        
        // --- INITIALIZATION ---
        function initApp() {
            if (typeof L === 'undefined' || typeof Chart === 'undefined') {
                console.error("Critical: Leaflet or Chart.js not loaded. Cannot initialize.");
                document.body.innerHTML = '<div style="color:red;padding:20px;">Error: Mapping/Chart libraries failed to load. Please check network connection.</div>';
                return;
            }
            
            // DOM References
            appLoaderEl = document.getElementById('app-loader');
            loadingStatusEl = document.getElementById('loading-status');
            errorToastEl = document.getElementById('error-toast');
            errorMessageEl = document.getElementById('error-message');
            dashboardMessageEl = document.getElementById('dashboard-message');

            langSelectEl = document.getElementById('lang-select');
            timeSelectEl = document.getElementById('time-select');
            magSelectEl = document.getElementById('mag-select');
            depthSelectEl = document.getElementById('depth-select');
            countryInputEl = document.getElementById('country-input');
            countryFilterStatusEl = document.getElementById('country-filter-status');
            basemapSelectEl = document.getElementById('basemap-select'); 
            
            // Filter Toggle References
            filterControlsWrapperEl = document.getElementById('filter-controls-wrapper');
            
            filterToggleBtnMobile = document.getElementById('filter-toggle-btn-mobile');
            filterToggleTextMobile = document.getElementById('filter-toggle-text-mobile');
            filterToggleIconMobile = document.getElementById('filter-toggle-icon-mobile');

            currentLang = langSelectEl.value || 'en';
            
            initMaps();
            updateUI(); 
            
            loadingStatusEl.innerHTML = `${SPINNER_SVG} <span>${translate('loading')}</span>`; 

            loadEarthquakeData();

            // Set up Listeners
            langSelectEl.addEventListener('change', (e) => {
                currentLang = e.target.value;
                updateUI();
            });
            timeSelectEl.addEventListener('change', () => loadEarthquakeData(true));
            magSelectEl.addEventListener('change', () => applyFilters(false)); 
            depthSelectEl.addEventListener('change', () => applyFilters(false)); 
            basemapSelectEl.addEventListener('change', (e) => switchBasemap(e.target.value)); 
            
            // Listeners for ONLY the mobile toggle button
            if (filterToggleBtnMobile) {
                 filterToggleBtnMobile.addEventListener('click', toggleFilters);
            }
           
            let countryInputTimer;
            countryInputEl.addEventListener('input', () => {
                clearTimeout(countryInputTimer);
                countryInputTimer = setTimeout(() => {
                    applyFilters(false);
                }, 500); 
            });
            
            initTabs();
        }
        
        function initMaps() {
            const mapEl = document.getElementById('map');
            if (mapEl) {
                map = L.map('map', { zoomControl: false }).setView([20, 0], 2);
                L.control.zoom({ position: 'bottomleft' }).addTo(map);
                earthquakeLayer = L.layerGroup().addTo(map);
            } else {
                console.error("Map element not found.");
            }
            
            const miniMapEl = document.getElementById('mini-map');
            if (miniMapEl) {
                miniMap = L.map('mini-map', { 
                    zoomControl: false, attributionControl: false,
                    dragging: false, touchZoom: false, scrollWheelZoom: false, doubleClickZoom: false
                }).setView([20, 0], 2);
                miniMapLayer = L.layerGroup().addTo(miniMap);
            } else {
                console.error("Mini-Map element not found.");
            }

            const defaultLayer = TILE_LAYERS['dark'];
            if (map) {
                mapTileLayer = L.tileLayer(defaultLayer.url, {
                    attribution: defaultLayer.attribution,
                    subdomains: 'abcd', maxZoom: 20
                }).addTo(map);
            }
            if (miniMap) {
                miniMapTileLayer = L.tileLayer(defaultLayer.url, {
                    subdomains: 'abcd', maxZoom: 20
                }).addTo(miniMap);
            }
        }
        
        function switchBasemap(selectedKey) {
            const selectedLayer = TILE_LAYERS[selectedKey];
            if (!selectedLayer) return;

            if (map) {
                if (mapTileLayer) map.removeLayer(mapTileLayer);
                mapTileLayer = L.tileLayer(selectedLayer.url, {
                    attribution: selectedLayer.attribution, subdomains: 'abcd', maxZoom: 20
                }).addTo(map);
                mapTileLayer.bringToBack(); 
                map.invalidateSize();
            }

            if (miniMap) {
                if (miniMapTileLayer) miniMap.removeLayer(miniMapTileLayer);
                miniMapTileLayer = L.tileLayer(selectedLayer.url, {
                    subdomains: 'abcd', maxZoom: 20
                }).addTo(miniMap);
                miniMapTileLayer.bringToBack(); 
                miniMap.invalidateSize();
            }
        }

        function initTabs() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const targetTab = e.currentTarget.getAttribute('data-tab');
                    
                    tabButtons.forEach(btn => {
                        btn.classList.remove('text-white', 'border-indigo-500');
                        btn.classList.add('text-gray-400', 'border-transparent', 'hover:border-indigo-500');
                    });
                    
                    e.currentTarget.classList.add('text-white', 'border-indigo-500');
                    e.currentTarget.classList.remove('text-gray-400', 'border-transparent', 'hover:border-indigo-500');

                    tabContents.forEach(content => content.classList.remove('active'));
                    const contentEl = document.getElementById(targetTab);
                    if (contentEl) contentEl.classList.add('active');
                    
                    setTimeout(() => { 
                        if (targetTab === 'map-view' && map) map.invalidateSize(); 
                        else if (targetTab === 'dashboard-view' && miniMap) miniMap.invalidateSize();
                        applyFilters(false); 
                    }, 200);
                });
            });
        }
        
        // --- DATA HANDLING & FILTERING ---

        async function loadEarthquakeData(isTimeChange = false) {
            const selectedRange = timeSelectEl.value;
            const API_URL = API_URLS[selectedRange];

            loadingStatusEl.innerHTML = `${SPINNER_SVG} <span>${translate('loading')}</span>`;
            errorToastEl.classList.add('hidden');
            
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error(`${translate('error')} ${response.status}`);
                const data = await response.json();
                if (!data || !data.features) throw new Error('Invalid API response.');
                
                allEarthquakeFeatures = data.features.filter(f => f.properties.type === 'earthquake' && f.geometry.coordinates);
                await applyFilters(isTimeChange); 
                
                if (appLoaderEl && !appLoaderEl.classList.contains('hidden-loader')) {
                    hideLoader();
                }

            } catch (error) {
                console.error('Error loading earthquake data:', error);
                loadingStatusEl.innerHTML = `<span class="text-red-400">${translate('error')}</span>`;
                errorMessageEl.innerText = error.message;
                errorToastEl.classList.remove('hidden');
                setTimeout(() => errorToastEl.classList.add('hidden'), 5000);
                
                if (appLoaderEl && !appLoaderEl.classList.contains('hidden-loader')) {
                    hideLoader();
                }
            }
        }
        
        async function applyFilters(forceMapFit) {
            if (!map || !miniMap) return; 

            const selectedMagValue = magSelectEl.value;
            const selectedMag = selectedMagValue === 'all' ? 0 : parseFloat(selectedMagValue);
            
            const depthRange = getDepthRange(depthSelectEl.value);
            const rawCountryInput = countryInputEl.value.trim();
            
            let primaryFilteredFeatures = allEarthquakeFeatures.filter(feature => {
                const mag = feature.properties.mag;
                const depth = feature.geometry.coordinates[2];

                const isMagOK = mag >= selectedMag; 
                const isDepthOK = (depthSelectEl.value === 'all') || (depth >= depthRange.min && depth < depthRange.max);
                
                return isMagOK && isDepthOK;
            });
            
            let filteredFeatures = primaryFilteredFeatures; 
            let filterMessage = translate('filter-note-active');
            let countryBounds = null;
            
            const isCountryInputActive = rawCountryInput.length > 0;
            let geoResult = { success: false, name: rawCountryInput, bounds: null };

            if (isCountryInputActive) {
                geoResult = getCountryGeodata(rawCountryInput);
                
                if (geoResult.success) { 
                    countryBounds = L.latLngBounds(L.latLng(geoResult.bounds[0]), L.latLng(geoResult.bounds[1]));
                    
                    filteredFeatures = primaryFilteredFeatures.filter(feature => {
                        const coords = feature.geometry.coordinates; // [lon, lat, depth]
                        const lat = coords[1];
                        const lon = coords[0];
                        
                        return isPointInBoundingBox(lat, lon, geoResult.bounds);
                    });
                    
                    filterMessage = translate('filter-note-country_valid') + geoResult.name;
                    
                    if (filteredFeatures.length === 0) {
                        filterMessage = translate('filter-note-country_no_data') + geoResult.name;
                    }

                } else {
                    filterMessage = translate('filter-note-country_invalid');
                    filteredFeatures = primaryFilteredFeatures; 
                }
            } else { 
                filteredFeatures = primaryFilteredFeatures;
                filterMessage = translate('filter-note-active');
            }

            // --- 3. Update Views ---
            const isMapActive = document.getElementById('map-view').classList.contains('active');
            const isDashboardActive = document.getElementById('dashboard-view').classList.contains('active');
            const countToShow = filteredFeatures.length;

            plotEarthquakes(filteredFeatures, map, earthquakeLayer, false); 
            
            if (countryBounds) {
                map.fitBounds(countryBounds, { padding: [50, 50], maxZoom: 8 });
            } else if (forceMapFit || (isMapActive && !isCountryInputActive)) {
                plotEarthquakes(filteredFeatures, map, earthquakeLayer, true); 
            } else if (filteredFeatures.length === 0) {
                 map.setView([20, 0], 2);
            }
            
            plotEarthquakes(filteredFeatures, miniMap, miniMapLayer, true); 
            generateDashboard(filteredFeatures); 

            if (isDashboardActive || filteredFeatures.length > 0) { 
                const magData = calculateMagnitudeDistribution(filteredFeatures);
                const depthData = calculateDepthDistribution(filteredFeatures);
                updateCharts(magData, depthData);
            }
            
            // Update Header Status Message (near filters)
            if (countryFilterStatusEl) {
                if (!isCountryInputActive) {
                    countryFilterStatusEl.classList.add('hidden');
                } else {
                    countryFilterStatusEl.innerText = filterMessage;
                    countryFilterStatusEl.classList.remove('hidden', 'bg-red-600/30', 'border-red-500', 'bg-indigo-600/30', 'border-indigo-500');

                    if (filterMessage.includes(translate('filter-note-country_no_data')) || filterMessage.includes(translate('filter-note-country_invalid'))) {
                        countryFilterStatusEl.classList.add('bg-red-600/30', 'border-red-500');
                    } else {
                        countryFilterStatusEl.classList.add('bg-indigo-600/30', 'border-indigo-500');
                    }
                }
            }

            const countDisplay = `
                <div class="earthquake-count-display">
                    <span class="text-indigo-300">${countToShow.toLocaleString()}</span> ${translate('earthquakes-available')}
                </div>
            `;
            loadingStatusEl.innerHTML = countDisplay;
            
            lucide.createIcons();
        }


        // --- MAP VIEW UTILITIES ---

        function plotEarthquakes(features, targetMap, targetLayer, fitBounds) {
            if (!targetLayer) return; 
            
            targetLayer.clearLayers();
            const featureGroup = L.featureGroup();
            
            features.forEach(feature => {
                const props = feature.properties;
                const coords = feature.geometry.coordinates;
                const lat = coords[1], lon = coords[0], depth = coords[2], mag = props.mag;
                // Use the standard date format function for popups
                const timeStr = formatDate(props.time, currentLang);

                const popupContent = `
                    <div class="font-sans text-sm p-1">
                        <b>${translate('popup-mag')}: ${mag.toFixed(1)}</b><br>
                        <strong>${translate('popup-place')}:</strong> ${props.place || 'N/A'}<br>
                        <strong>${translate('popup-depth')}:</strong> ${depth.toFixed(1)} km<br>
                        <strong>${translate('popup-date')}:</strong> ${timeStr}
                    </div>
                `;

                const circle = L.circle([lat, lon], {
                    radius: getRadius(mag), 
                    color: getColor(depth),
                    fillColor: getColor(depth),
                    fillOpacity: 0.6,
                    weight: 1.5
                });
                
                if (targetMap === map) {
                    circle.bindPopup(popupContent, { className: 'dark-popup' });
                }

                circle.addTo(targetLayer);
                featureGroup.addLayer(circle);
            });
            
            if (fitBounds && features.length > 0) {
                try {
                    targetMap.fitBounds(featureGroup.getBounds(), { padding: [20, 20], maxZoom: 8 });
                } catch (e) {
                    targetMap.setView([features[0].geometry.coordinates[1], features[0].geometry.coordinates[0]], 5);
                }
            } else if (fitBounds && features.length === 0) {
                targetMap.setView([20, 0], 2);
            }
        }


        // --- DASHBOARD VIEW UTILITIES ---

        function generateDashboard(features) {
            const timeFilterEl = document.getElementById('time-select');
            const selectedOptionId = timeFilterEl.options[timeFilterEl.selectedIndex].id;
            const translatedTimeText = translate(selectedOptionId); 
            
            const totalTitleEl = document.getElementById('stat-total-title');
            if (totalTitleEl) {
                totalTitleEl.innerText = `${translate('stat-total-title')} (${translatedTimeText})`;
            }

            safeSetText('total-count-stat', '0');
            safeSetText('strongest-mag-stat', '0.0');
            safeSetText('strongest-place-stat', 'N/A');
            // Reset strongest time/depth stats
            document.getElementById('strongest-time-stat').innerText = 'N/A'; 
            safeSetText('strongest-depth-stat', translate('depth-label') + ': N/A');
            safeSetText('recent-mag-stat', '0.0');
            document.getElementById('recent-time-stat').innerText = 'N/A ago'; 
            
            if(dashboardMessageEl) {
                dashboardMessageEl.classList.remove('bg-red-600/20', 'text-red-300', 'border-red-500');
                dashboardMessageEl.classList.add('bg-indigo-600/20', 'text-indigo-300', 'border-indigo-500');
            }
            
            if (features.length === 0) {
                if(dashboardMessageEl) {
                    const countryStatus = countryFilterStatusEl ? countryFilterStatusEl.innerText : translate('no-data-msg');
                    
                    dashboardMessageEl.innerText = countryStatus.includes(translate('filter-note-country_no_data')) || countryStatus.includes(translate('filter-note-country_invalid')) ?
                        countryStatus : translate('no-data-msg');
                    
                    dashboardMessageEl.classList.remove('hidden');
                    dashboardMessageEl.classList.add('bg-red-600/20', 'text-red-300', 'border-red-500');
                }
                return;
            }

            if(dashboardMessageEl) dashboardMessageEl.classList.add('hidden');
            
            safeSetText('total-count-stat', features.length.toLocaleString());

            const sortedByMag = [...features].sort((a, b) => b.properties.mag - a.properties.mag);
            const recentFeature = [...features].sort((a, b) => b.properties.time - a.properties.time)[0];
            const strongestFeature = sortedByMag[0]; 

            const strongestProps = strongestFeature.properties;
            const strongestDepth = strongestFeature.geometry.coordinates[2]; 
            const recentProps = recentFeature.properties;
            
            // Format time for strongest earthquake
            const strongestTimeStr = formatDate(strongestProps.time, currentLang); 

            safeSetText('strongest-mag-stat', strongestProps.mag.toFixed(1));
            safeSetText('strongest-place-stat', strongestProps.place || 'N/A');
            // Update the new timestamp element
            document.getElementById('strongest-time-stat').innerText = strongestTimeStr; 
            safeSetText('strongest-depth-stat', `${translate('depth-label')}: ${strongestDepth.toFixed(1)} km`);

            safeSetText('recent-mag-stat', recentProps.mag.toFixed(1));
            safeSetText('recent-place-stat', recentProps.place || 'N/A');
            document.getElementById('recent-time-stat').innerText = timeSince(recentProps.time);
        }

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
            return {
                labels: Object.keys(distribution),
                counts: Object.values(distribution)
            };
        }

        function calculateDepthDistribution(features) {
            const labels = [
                translate('depth-shallow'), 
                translate('depth-intermediate'), 
                translate('depth-deep'), 
                translate('depth-vdeep')
            ];
            const distribution = [0, 0, 0, 0]; 
            const colors = ['#FFEB3B', '#FF9800', '#2196F3', '#3F51B5'];

            features.forEach(f => {
                const depth = f.geometry.coordinates[2];
                if (depth >= 300) distribution[3]++;
                else if (depth >= 100) distribution[2]++;
                else if (depth >= 30) distribution[1]++;
                else if (depth >= 0) distribution[0]++;
            });

            return { labels, counts: distribution, colors };
        }

        function updateCharts(magData, depthData) {
            if (magnitudeChartInstance) {
                magnitudeChartInstance.destroy();
                magnitudeChartInstance = null;
            }
            if (depthChartInstance) {
                depthChartInstance.destroy();
                depthChartInstance = null;
            }

            const magCtx = document.getElementById('magnitudeChart');
            const depthCtx = document.getElementById('depthChart');
            if (!magCtx || !depthCtx) return; 

            Chart.defaults.color = '#E2E8F0';
            Chart.defaults.borderColor = '#334155';

            magnitudeChartInstance = new Chart(magCtx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: magData.labels,
                    datasets: [{
                        label: translate('chart-count'),
                        data: magData.counts,
                        backgroundColor: '#6366F1',
                        borderColor: '#4338CA',
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false, 
                    scales: {
                        y: { beginAtZero: true },
                        x: { grid: { display: false } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
            
            depthChartInstance = new Chart(depthCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: depthData.labels,
                    datasets: [{
                        label: translate('chart-count'),
                        data: depthData.counts,
                        backgroundColor: depthData.colors, 
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { 
                            position: 'bottom', 
                            labels: { boxWidth: 12, padding: 15 } 
                        } 
                    }
                }
            });
        }

        window.onload = initApp;;
