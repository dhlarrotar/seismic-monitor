# 🌍 Seismic Monitor & Dashboard

**Real-time global earthquake visualization and analysis tool.**

This interactive web application provides a **Dashboard** view with statistical summaries and charts, along with a dynamic **Map Explorer** powered by Leaflet to visualize recent seismic activity from the U.S. Geological Survey (USGS) Earthquake Hazards Program.

---

## ✨ Features

* **Dynamic Data Fetching:** Fetches global earthquake data (M 2.5+) for the last 24 hours, 7 days, or 30 days from the **USGS API**.
* **Interactive Map:** Utilizes **Leaflet.js** to display earthquakes on an interactive map, with circle size indicating **magnitude** and color indicating **depth** (Shallow, Intermediate, Deep).
* **Comprehensive Filtering:** Filter earthquakes by **Time Period**, **Minimum Magnitude**, **Depth Category**, and **Country** (using predefined geographical bounds).
* **Data Dashboard:**
    * **Key Statistics:** Total earthquake count, strongest quake, and most recent quake.
    * **Visualizations:** Mini-map of the current dataset, **Magnitude Distribution Chart**, and **Depth Distribution Chart** (powered by Chart.js).
* **Customizable Display:** Toggle between **Dark** and **Standard** map base layers.
* **Multilingual Support:** Supports **English (en)** and **Spanish (es)** translations.
* **Responsive Design:** Optimized for seamless use on both mobile and desktop devices (using **Tailwind CSS** for styling).

---

## 🚀 Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Data Source** | USGS Earthquake Hazards Program API | Core earthquake data provider. |
| **Mapping** | **Leaflet.js** | Interactive map library for visualization. |
| **Data Viz** | **Chart.js** | Rendering the magnitude and depth distribution charts. |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for a responsive, modern dark-mode design. |
| **Icons** | **Lucide Icons** | Simple, consistent icons. |

---

## 🛠️ Setup and Usage

This project is a **single-file HTML application** and requires no complex build steps or server environment to run.

### 1. Local Setup

1.  **Save the file:** Save the provided code into a file named `index.html`.
2.  **Open in Browser:** Double-click `index.html` or open it with your web browser (e.g., Chrome, Firefox).

The application will load and automatically fetch the default data (Magnitude 2.5+ for the last 7 days).

### 2. Live Usage

1.  **Explore the Dashboard:** The default view shows the **Dashboard** tab, summarizing key stats and chart distributions for the current filters.
2.  **Switch to Map:** Click the **"Map Explorer"** tab to view the geographic distribution of the earthquakes.
3.  **Apply Filters:** Use the controls in the header to refine the data:
    * **Time Selector:** Change the time range (e.g., "Last 24 hours").
    * **Magnitude/Depth Selectors:** Filter by minimum magnitude or depth category.
    * **Country Search:** Enter a country name (e.g., `Japan`, `Chile`) to focus the dashboard and zoom the map to that region.
4.  **Basemap:** Use the **Settings** dropdown to switch between the **Dark** and **Standard** map styles.

---

## 🤝 Contribution

This tool is a personal experiment built for fun and learning

* **Found a bug?** Please open an issue.
* **Have a suggestion?** Feel free to reach out directly.
