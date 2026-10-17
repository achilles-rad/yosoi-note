# YOSOI NOTE

Server preview 1.4.0-rc.4: https://yosoi-note-server.onrender.com/

The server preview can retrieve product name, shop and thumbnail from a BOOTH product URL. Three real products were verified successfully on Render Free. Photos, notes, editing and image output stay in the browser. Free hosting may take about a minute to wake after inactivity. Some products may require manual registration.

Earlier static edition: https://achilles-rad.github.io/yosoi-note/
Earlier Cloudflare experiment: https://achilles-rad.github.io/yosoi-note/preview/

To move a saved note between these origins, export a project ZIP on the old site and restore it on the new site. Notes are stored per browser origin; they are not synced automatically.

Distribution files only: site/ contains static editions; server-app/ contains a built frontend and minimal Node runtime. No private references, photos, notes or credentials. Render reads the public Git URL without additional GitHub OAuth permissions. The server is a preview; process-local quotas reset on restart. No access restrictions are bypassed.

Asset reordering: drag list handles, use arrow keys on a handle, or use the selected row’s previous/next buttons. Manual card positions and connector endpoints are preserved. Undo/redo, cross-page moves and ZIP restoration are supported.

The list uses pointer dragging for in-app browser compatibility, with edge scrolling and cancellation. Verified on Chromium, Chrome, WebKit and the in-app browser; Windows and physical touch devices remain untested.
