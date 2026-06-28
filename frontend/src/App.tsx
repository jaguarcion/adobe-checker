import { useEffect, useState } from 'react'
import { Toaster } from "@/components/ui/sonner"
import { TokenCard } from './components/checker/TokenCard'
import { ProxyCard } from './components/checker/ProxyCard'
import { CheckerWorkspace } from './components/checker/CheckerWorkspace'
import { ResultsTable } from './components/checker/ResultsTable'

function App() {
  const [proxyCount, setProxyCount] = useState(0)

  useEffect(() => {
    fetch('/api/proxy-count')
      .then(res => res.json())
      .then(data => setProxyCount(data.count || 0))
      .catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <header className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl shadow-sm border border-slate-200 flex items-center p-6 gap-6 transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-4 border-white bg-white flex-shrink-0 relative z-10">
            <img src="/logo.png" alt="Keysoft Logo" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 flex-1">
            <h1 className="text-3xl font-black tracking-tight text-slate-800">
              Проверка Adobe ключей
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">by</span>
              <span className="text-sm font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">Keysoft</span>
              <div className="h-1.5 w-1.5 rounded-full bg-slate-300 mx-1"></div>
              <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Система автоматической валидации</span>
            </div>
          </div>
        </header>

        {/* Top Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TokenCard />
          <ProxyCard count={proxyCount} setCount={setProxyCount} />
        </div>

        {/* Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1">
             <CheckerWorkspace />
          </div>
          <div className="lg:col-span-2">
             <ResultsTable />
          </div>
        </div>

      </div>
      <Toaster position="top-right" />
    </div>
  )
}

export default App
