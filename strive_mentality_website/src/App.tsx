import './index.css'; // Ensure Tailwind styles are imported

function App() {
  return (
    // Apply dark theme base colors directly and add 'dark' class to enable dark mode variables
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 dark">
      <header className="text-center">
        <img src="/logo.png" alt="Strive Mentality Logo" className="h-24 mx-auto mb-4" />
        {/* Use text-primary which maps to the dark red in dark mode */}
        <h1 className="text-4xl font-bold text-primary mb-2">STRIVE MENTALITY</h1> 
        {/* Use text-muted-foreground which maps to a lighter gray in dark mode */}
        <p className="text-lg text-muted-foreground">Strive. Sweat. Rise.</p>
      </header>
      {/* Add more sections here: About, Fitness, Apparel, Contact etc. */}
      <main className="mt-8 text-center">
        <p>Website development in progress...</p>
        {/* Use a standard red or the custom dark red variable if configured correctly in tailwind.config */}
        <p className="text-red-600">This is a basic structure reflecting the brand style.</p> 
      </main>
    </div>
  );
}

export default App;

