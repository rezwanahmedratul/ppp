# Data and Object-Oriented System Design Principles
### Apple Keynote-Style Presentation Web Application

An animated, keynote-style interactive web presentation covering **Data and Object-Oriented System Design Principles** through the opening narrative of ordering a pizza on a food delivery app.

---

## 🎨 Design System & Aesthetics
- **Theme**: Warm whitish paper background (`#F8F4EE`), ember orange-red (`#E04E1F`), rich earth browns (`#7A4A2E`), and dark ink (`#16110E`).
- **Typography**: Variable fonts loaded locally via Fontsource:
  - **Display / Headers**: *Fraunces Variable* (editorial serif with italics)
  - **Body / Interface**: *Inter Tight Variable* (clean sans-serif)
  - **Code / Metrics**: *JetBrains Mono Variable* (monospaced)
- **Keynote Mechanics**:
  - Word-by-word masked text entry animations.
  - Self-drawing vector connectors with animated SVG data flow pulses.
  - Dynamic ambient background glow that glides across slides like Apple Magic Move.
  - Directional dissolve-and-push slide transitions with Gaussian de-blur.
  - Dynamic stage scaling preserving a 16:9 (1920×1080) layout across all monitor sizes.

---

## ⌨️ Navigation & Controls

| Key / Action | Function |
|---|---|
| <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd> / <kbd>Enter</kbd> | Next Slide |
| <kbd>←</kbd> / <kbd>PageUp</kbd> / <kbd>Backspace</kbd> | Previous Slide |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jump to First / Last Slide |
| <kbd>N</kbd> | Toggle Speaker Notes Drawer |
| <kbd>F</kbd> | Toggle Fullscreen Mode |
| **Progress Ticks** | Click any dot in the bottom bar to jump to that slide |
| **Swipe (Touch)** | Swipe left/right on mobile or touchscreen |

---

## 📂 Slide Directory (Modular Architecture)

Each slide is isolated in its own TypeScript component under `src/slides/`:

1. [Slide 01](file:///root/ppp/src/slides/Slide01.tsx): **Opening Scenario** — *A Simple Pizza Order* (Customer → Phone/App → Restaurant → Payment → Delivery)
2. [Slide 02](file:///root/ppp/src/slides/Slide02.tsx): **System Breakdown** — *What's Happening Behind the Screen?* (Hierarchical component decomposition tree)
3. [Slide 03](file:///root/ppp/src/slides/Slide03.tsx): **Foundations** — *What Is System Modeling?* (Real World → Model → Software System, Simplify/Communicate/Validate)
4. [Slide 04](file:///root/ppp/src/slides/Slide04.tsx): **Architectural Lenses** — *Data Modeling vs. Object-Oriented Modeling* (Complementary perspectives)
5. [Slide 05](file:///root/ppp/src/slides/Slide05.tsx): **Abstraction Levels** — *From Business Idea to Database* (Conceptual, Logical, Physical)
6. [Slide 06](file:///root/ppp/src/slides/Slide06.tsx): **Data Modeling** — *ERD: Mapping Data Relationships* (Customer, Order, Order Line, Pizza, Payment, Delivery)
7. [Slide 07](file:///root/ppp/src/slides/Slide07.tsx): **Cardinality** — *How Many?* (1:1, 1:N, N:M with Crow's Foot notation)
8. [Slide 08](file:///root/ppp/src/slides/Slide08.tsx): **Data Movement** — *ERD Shows Relationships. DFD Shows Movement.* (Gane-Sarson / Yourdon DFD symbols)
9. [Slide 09](file:///root/ppp/src/slides/Slide09.tsx): **Data Integrity** — *What Happens When Data Gets Messy?* (Normalization: 1NF, 2NF, 3NF)
10. [Slide 10](file:///root/ppp/src/slides/Slide10.tsx): **OO Paradigm** — *But Data Isn't the Whole Story* (Customer object: State + Behavior = Object)
11. [Slide 11](file:///root/ppp/src/slides/Slide11.tsx): **Core Concepts** — *Class ≠ Object* (Blueprint vs runtime instances)
12. [Slide 12](file:///root/ppp/src/slides/Slide12.tsx): **Four Pillars** — *The Four Pillars of Object-Oriented Design* (Encapsulation, Inheritance, Polymorphism, Reusability)
13. [Slide 13](file:///root/ppp/src/slides/Slide13.tsx): **Design Language** — *UML: A Common Language for Software Design* (Structural vs Behavioral hierarchy)
14. [Slide 14](file:///root/ppp/src/slides/Slide14.tsx): **Dynamic Modeling** — *How Does the System Behave?* (Use Case, Sequence with lifelines, Activity flows)
15. [Slide 15](file:///root/ppp/src/slides/Slide15.tsx): **Structural UML** — *Class Diagram: The Structural Backbone* (Customer, Order, ShippingInfo, Payment)
16. [Slide 16](file:///root/ppp/src/slides/Slide16.tsx): **Comparative Synthesis** — *ERD vs. Class Diagram* (Side-by-side comparison & dimension matrix)
17. [Slide 17](file:///root/ppp/src/slides/Slide17.tsx): **Grand Synthesis** — *From Real World → Working Software* (Full horizontal pipeline, inspiring conclusion & thank you)

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server with Hot Module Replacement
npm run dev

# Run TypeScript compiler verification
npx tsc -b

# Build optimized production bundle
npm run build
```

---

## 🐳 Docker & Container Deployment

A multi-stage, high-performance [Dockerfile](file:///root/ppp/Dockerfile) with Nginx 1.27 Alpine runtime and SPA fallback routing is provided.

### 1. Build and Run with Docker CLI
```bash
# Build the Docker image
docker build -t ppp-presentation:latest .

# Run the container (maps host port 8080 to container port 80)
docker run -d \
  --name ppp-presentation \
  --restart unless-stopped \
  -p 8080:80 \
  ppp-presentation:latest

# Verify health status
curl http://localhost:8080/healthz
```

### 2. Run with Docker Compose
A ready-to-use [docker-compose.yml](file:///root/ppp/docker-compose.yml) is included:
```bash
# Start container in detached mode
PORT=8080 docker compose up -d

# Check container logs
docker compose logs -f

# Stop container
docker compose down
```

---

## ▲ Deploying to Vercel

The application is fully configured for zero-config Vercel deployment via [vercel.json](file:///root/ppp/vercel.json):
- Automatic Vite framework detection
- Single-page application route rewrites to `/index.html`
- Immutable cache headers for `/assets/*`

### Method 1: GitHub Integration (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import `ppp`.
3. Vercel automatically detects Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Method 2: Vercel CLI
```bash
# Deploy preview build
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## 🔄 CI/CD Pipeline (GitHub Actions + Home Runner + SSH)

Workflow file: [.github/workflows/deploy.yml](file:///root/ppp/.github/workflows/deploy.yml)

### Architecture
```
  [git push main]
        │
        ▼
┌──────────────────────────────────────────────┐
│  GitHub-Hosted Runner (ubuntu-latest)        │
│  • Builds Docker image with Buildx           │
│  • Pushes to GitHub Container Registry       │
│    (ghcr.io/rezwanahmedratul/ppp:latest)     │
└───────────────────────┬──────────────────────┘
                        │ triggers next job
                        ▼
┌──────────────────────────────────────────────┐
│  Home Server Runner (runs-on: self-hosted)   │
│  • Listens for completed image build         │
│  • Securely connects to Production via SSH   │
└───────────────────────┬──────────────────────┘
                        │ SSH command stream
                        ▼
┌──────────────────────────────────────────────┐
│  Production Server                           │
│  • docker login to ghcr.io                   │
│  • docker pull latest image                  │
│  • Restarts ppp-presentation container       │
│  • Prunes old dangling images                │
└──────────────────────────────────────────────┘
```

### GitHub Repository Secrets

Go to **Settings** → **Secrets and variables** → **Actions** → **New repository secret** in your GitHub repository:

| Secret Name | Required? | Description | Default / Example |
|---|---|---|---|
| `PROD_HOST` | **Yes** | Hostname or Public IP address of your production server | `203.0.113.10` or `app.example.com` |
| `PROD_USER` | **Yes** | SSH user on your production server | `ubuntu` or `root` |
| `PROD_DIR` | No | Target project directory on production server | `/opt/ppp` (or custom e.g. `~/ppp`) |
| `PROD_PORT` | No | SSH port on your production server | `22` |
| `PROD_PORT_MAPPING` | No | Host:Container port mapping | `80:80` (or `8080:80`) |
| `PROD_SSH_KEY` | No *(Optional)* | Only needed if the runner does not already have an authorized SSH key | `-----BEGIN OPENSSH PRIVATE KEY-----...` |

> [!TIP]
> **Pre-configured Home Server SSH Key**: Since the SSH key of your home-server GitHub Action runner is already added to the production server's `authorized_keys`, you **do not need** to configure `PROD_SSH_KEY` in GitHub secrets. The runner will automatically use its existing key to authenticate.


