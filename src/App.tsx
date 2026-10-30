import ShapeWaves from './components/ShapeWaves';
import Home from './pages/Home';

function App() {
  return (
    <div className="relative min-h-screen text-slate-200">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ShapeWaves
          text="</>"
          fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
          fontWeight={500}
          textSize={0.6}
          shapes="mixed"
          cellSize={10}
          dotSize={0.75}
          color="#334155"
          hoverColor="#38bdf8"
          backgroundColor="#0f172a"
          speed={1}
          scale={1}
          contrast={1}
          brightness={0.4}
          flow={0}
          direction={0}
          fade={0.25}
          interactive
          splashRadius={40}
          splashStrength={0.4}
          glow={0.35}
          intro
          introDuration={1.6}
          paused={false}
        />
      </div>
      <Home />
    </div>
  )
}

export default App
