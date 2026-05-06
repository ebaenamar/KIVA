# KIVA - Easy Installation Fork

> **Fork of [Riverst](https://github.com/sensein/riverst)** with simplified installation scripts and comprehensive guides for the MA AI Hub x SundAI Hack Day.

![Avatar screenshot](public/fabio_says_hi.png)

## 🚀 Quick Start (Recommended)

**For Mac/Linux users** - Get KIVA running in 2 commands:

### Terminal 1 - Start Server
```bash
git clone https://github.com/ebaenamar/KIVA.git
cd KIVA
./start_server.sh
```

### Terminal 2 - Start Client
```bash
cd KIVA
./start_client.sh
```

Then open **Chrome** and go to: `http://localhost:5173`

---

## 📋 Prerequisites

- **Supported OS:**
  - ✅ Apple Silicon (M-chip) macOS
  - ✅ Ubuntu Linux
  - ❌ Not supported on Windows (use GitHub Codespaces instead)

- **Required:**
  - Python 3.11+ (conda or venv)
  - Node.js 16+
  - OpenAI API key ([get one here](https://platform.openai.com/api-keys))
  - Chrome 134+ browser

---

## 🎯 What's Different in This Fork?

This fork adds:

1. **🔧 Automated setup scripts** (`start_server.sh` and `start_client.sh`)
   - Auto-detect conda/venv
   - Auto-install dependencies
   - Verify API keys before starting
   
2. **📚 Installation guides** (in `KIVA/` folder)
   - `kiva_deploy_walkthrough.pdf` - Technical deployment guide
   - `kiva_nontechnical_walkthrough.pdf` - Non-technical user guide
   - `kiva_presession_presentation.pdf` - Complete pre-session presentation

3. **🎨 Updated avatars** - Fixed avatar configuration for faster loading

---

## 📖 Detailed Installation

### Option A: Using the Scripts (Easiest)

1. **Clone the repository**
   ```bash
   git clone https://github.com/ebaenamar/KIVA.git
   cd KIVA
   ```

2. **Set up your API key**
   ```bash
   cd src/server
   cp env.example .env
   nano .env  # Add your OPENAI_API_KEY
   cd ../..
   ```

3. **Run the server** (Terminal 1)
   ```bash
   ./start_server.sh
   ```
   The script will:
   - Create a conda environment (or venv if conda not available)
   - Install all dependencies
   - Start the server on `http://localhost:7860`

4. **Run the client** (Terminal 2)
   ```bash
   ./start_client.sh
   ```
   The script will:
   - Install npm dependencies
   - Check if server is running
   - Start the client on `http://localhost:5173`

5. **Open in browser**
   - Go to `http://localhost:5173`
   - Select an avatar
   - Try "Demo ready to go" or "Free style interaction"

### Option B: Manual Installation

See the [original Riverst README](https://github.com/sensein/riverst#getting-started) for manual setup instructions.

---

## 🎓 What is KIVA?

**KIVA** (Knowledge Integration and Vocabulary Acquisition through AI) is an interactive AI tutoring platform built on Riverst. It enables:

- **Speech-driven avatar interactions** for educational activities
- **Vocabulary training** for children and language learners
- **Audiobook experiences** with interactive avatars
- **Customizable tutoring sessions** via simple configuration

### Video Demos

| Demo | Description |
|---|---|
| [Riverst Platform](https://drive.google.com/file/d/1r2LoBGbjBx1mdDIv-fPzGeZVEYf1kLw8/view?usp=sharing) | Overview of the Riverst platform |
| [KIVA Activity](https://drive.google.com/file/d/1jTHvTXG4WWIYqgqjC4lp1LWMEnyZJQzr/view?usp=sharing) | Vocabulary teaching workflow demo |
| [Activity Summary](https://drive.google.com/file/d/1AvYnSq87neOYj_YSduYatN5D4rdO-7QG/view?usp=sharing) | Configuration and analysis features |

---

## 🛠️ How to Customize Your Session

1. On the homepage, click **"Free style interaction"**
2. Modify these key fields:
   - **Avatar System Prompt** - Define who the avatar is (e.g., "You are a friendly math tutor")
   - **Task Description** - What the avatar should do (e.g., "Help practice multiplication")
   - **Avatar Personality** - Character traits (e.g., "Patient, encouraging")
3. Click **"Run a demo"** and start talking!

See `KIVA/kiva_nontechnical_walkthrough.pdf` for detailed examples.

---

## 📁 Project Structure

```
src/
├── server/              # Bot server implementation (FastAPI)
│   ├── main.py          # Server entrypoint
│   └── requirements.txt
└── flow-builder/        # Complex conversational flow/tree builder
└── client/              # Client implementations
    └── react/           # React web client
        └── index.html   # Client main page

```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **"Failed to create session"** | Check your `OPENAI_API_KEY` in `src/server/.env` |
| **Avatar not loading** | Clear browser cache, try a different avatar |
| **No microphone** | Chrome → Settings → Privacy → Microphone → Allow |
| **"conda: command not found"** | Install [Miniconda](https://docs.conda.io/en/latest/miniconda.html) or use venv |
| **"npm: command not found"** | Install [Node.js](https://nodejs.org/) |
| **Port already in use** | Kill processes on ports 7860/5173 or restart computer |

For more help, see `KIVA/kiva_deploy_walkthrough.pdf`.

---

## 📚 Additional Resources

- **Installation Guides** (in `KIVA/` folder):
  - `kiva_deploy_walkthrough.pdf` - Step-by-step technical guide
  - `kiva_nontechnical_walkthrough.pdf` - Non-technical user guide with examples
  - `kiva_presession_presentation.pdf` - Complete presentation for workshops

- **Original Riverst Documentation**: [github.com/sensein/riverst](https://github.com/sensein/riverst)

---

## 🙏 Credits

This fork is maintained by [@ebaenamar](https://github.com/ebaenamar) for the **MA AI Hub x SundAI - Reimagining Education with AI** hack day.

**Original Riverst** by [Sensein Lab](https://github.com/sensein) builds on:
- [TalkingHead](https://github.com/met4citizen/TalkingHead) - WebGL avatar renderer
- [Pipecat](https://github.com/pipecat-ai/pipecat) - Real-time multimodal agent framework
- [senselab](https://github.com/sensein/senselab) - Speech processing and analysis

---

## 📄 License

Same as the original Riverst project. See [LICENSE](LICENSE) for details.
