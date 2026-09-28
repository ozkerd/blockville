# 🚗💨 Blockville Rush & Ride

**A Modular 3D Toy-Box Runner & Racer** built with **TypeScript**, **Three.js**, and **Vite**.

Live Web App: [https://ozkerd.github.io/blockville/](https://ozkerd.github.io/blockville/)

---

## 🌟 Game Highlights

- **Dual-State Controller (`OnFoot` ⇄ `InVehicle`):**
  - **On Foot:** 3-lane dash, jump over toy hurdles, slide under arches, collect studs and gems.
  - **In Vehicle:** Collect the golden vehicle key to instantly hop into your ride! Smash through roadblocks, activate nitro boosts, and slam your chassis under low arches with sparking stunt ducking!
- **3 Iconic Toy Vehicles:**
  - 🍦 **Sweet-Treat Van:** Heavy chassis, smash bumper, cupcake/donut roof topper, side serving counter.
  - 🏎️ **Neon Buggy:** Wide off-road sand rail with exposed neon roll cage, oversized rear mud tires, bull-bar, and magnetic antenna.
  - 🛵 **Eco Scooter:** Classic 2-wheeled retro toy Vespa/moped with chrome handlebars, working steering fork, round retro headlight, side mirrors, and luggage rack.
- **3 Rich Modular Biomes:**
  - 🏖️ **Heartlake Boardwalk:** 7-segment curved coconut palm trees, pastel beach cottages, lifeguard towers, gelato cafe, surfboards.
  - 🏙️ **Downtown Plaza:** 4-story high-rise skyscrapers, clock tower spire, boutiques, street lamps, brick planters.
  - 🌲 **Pinecrest Forest:** Layered alpine pine trees, timber log cabins with smoking chimneys, footbridges, and mushroom clusters.
- **Arcade Progression & Feedback:**
  - Triumphant level-up notifications with fanfare and fireworks.
  - Floating 3D score popups (`+30`, `+50`, `+100 💎`, `MOUNT RIDE!`).
  - Procedural track chunk pooling for smooth 60fps performance on desktop and mobile.
  - Full touch swipe controls (mobile) and keyboard controls (desktop).

---

## 🎮 Controls

| Action | Desktop Keyboard | Mobile Touch |
| :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` or `Left` / `Right` Arrow | Swipe Left / Right |
| **Jump** | `W` or `Up` Arrow or `Space` | Swipe Up |
| **Slide / Stunt Duck** | `S` or `Down` Arrow | Swipe Down |
| **Pause Game** | `Escape` or `P` | Pause Button (Top Right) |

---

## 🛠️ Development & Build

### Prerequisites
- Node.js (v18 or newer)
- npm

### Installation
```bash
npm install
```

### Local Dev Server
```bash
npm run dev
```
Open `http://localhost:3000/` in your browser.

### Production Build
```bash
npm run build
```
Outputs static bundle to `dist/`.

---

## 🚀 GitHub Pages Deployment

The repository includes an automated GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and publishes the game directly to GitHub Pages on every push to the `main` branch.

---

## 📄 License
MIT License. Built with ❤️ and glossy toy bricks.
