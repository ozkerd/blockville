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

## 📱 Native iOS App & Apple App Store Guide

Blockville is packaged as a high-performance native iOS application using **Capacitor 7** with native Swift bridges and Apple Taptic Engine integration:

- **Bundle ID:** `com.ozkerd.blockville`
- **App Name:** `Blockville Rush & Ride`
- **Native Haptics:** Light impacts on star pickups, medium impacts on gems & jumps, heavy impacts on vehicle mounting & obstacle crashes, and triumphant notification vibrations on Level Up & Stage Victory.
- **Full Immersion:** Status bar hidden edge-to-edge display with custom safe area adaptation.
- **Privacy Compliant:** Zero tracking SDKs, fully COPPA compliant for all ages, with privacy policy hosted at [https://ozkerd.github.io/blockville/privacy.html](https://ozkerd.github.io/blockville/privacy.html).

### iOS Development Workflow

1. **Install Dependencies & Build Bundle:**
   ```bash
   npm install
   npm run build
   ```

2. **Sync Web Assets & Plugins to Native iOS:**
   ```bash
   npm run ios:copy
   # or full sync:
   npm run ios:sync
   ```

3. **Open Project in Xcode:**
   ```bash
   npm run ios:open
   ```
   *(Opens `ios/App/App.xcworkspace` in Xcode)*

### Publishing to TestFlight & App Store

1. In Xcode, select **App** in the Project Navigator.
2. Under **Signing & Capabilities**, select your **Apple Developer Team**.
3. Select **Any iOS Device (arm64)** from the device destination menu.
4. From the top menu, choose **Product > Archive**.
5. Once the build finishes, click **Distribute App > App Store Connect** to upload directly to TestFlight and submit for App Store Review.
6. Provide the App Store Privacy Policy URL: `https://ozkerd.github.io/blockville/privacy.html`.

---

## 🚀 GitHub Pages Deployment

The repository publishes the game web app and privacy policy directly to GitHub Pages at [https://ozkerd.github.io/blockville/](https://ozkerd.github.io/blockville/).

---

## 📄 License
MIT License. Built with ❤️ and glossy toy bricks.
