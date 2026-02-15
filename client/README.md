# Institution Analytics — Frontend

Quick scaffolded React + Vite frontend with sample charts.

Setup

```powershell
cd client
npm install
npm run dev
```

What you get
- Minimal dashboard at http://localhost:5173
- Two sample charts (enrollment and pass rates)

New pages

- Home — overview and summary cards
- Dashboard — charts (existing)
- Students — student list and details
- Courses — course list
- Reports — charts and exports
- Settings — configuration

Next steps
- Wire charts to backend APIs under `server/`
- Add authentication, filters, date ranges, and export features
 
Routing

After `npm install`, open http://localhost:5173 and use the sidebar to navigate pages.

UI polish

- Updated visual theme to a modern dark design with subtle glass surfaces.
- Smooth transitions: hover lifts for cards, buttons, and charts.
- Focus and hover effects on inputs and navigation for better feedback.
- Content now fades in for a cleaner feel.

If you want a different theme (light mode) or to integrate a UI library (Tailwind / MUI), tell me and I can switch it over.
