:root {
    --bg-dark: #0a0c10;
    --card-bg: rgba(255, 255, 255, 0.03);
    --primary-glow: #00f2fe;
    --secondary-glow: #4facfe;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-dark);
    color: #ffffff;
    font-family: system-ui, -apple-system, sans-serif;
    overflow-x: hidden;
}

/* 3D Canvas Positioning */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    pointer-events: none; /* Allows mouse tracking underneath */
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(45deg, var(--primary-glow), var(--secondary-glow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
}

/* Smooth Grid & Professional Cards */
.services {
    padding: 100px 5%;
    position: relative;
    z-index: 10;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 50px;
}

/* 3D Card Hover Setup */
.card {
    background: var(--card-bg);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 40px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s;
    transform-style: preserve-3d; /* Key for true 3D tilt depth */
}

/* Dynamic glow effect that tracks cursor/touch */
.card-glow {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0,242,254,0.15) 0%, transparent 70%);
    top: var(--mouse-y, -1000px);
    left: var(--mouse-x, -1000px);
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: opacity 0.5s;
}

.card h3 {
    font-size: 1.8rem;
    margin-top: 0;
    transform: translateZ(30px); /* Pushes heading up in 3D space */
}

.card p {
    color: #8a99ad;
    line-height: 1.6;
    transform: translateZ(15px);
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    margin-top: 20px;
    box-shadow: 0 4px 15px rgba(0, 242, 254, 0.3);
    transform: translateZ(25px);
}