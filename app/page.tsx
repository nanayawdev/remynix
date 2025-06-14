import { Button } from "@/components/ui/button"
import { Chrome, Download } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] flex flex-col">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="container mx-auto flex justify-center">
          <div className="flex items-center gap-8 backdrop-blur-sm border-2 border-gray-200 rounded-2xl px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#01c79b] flex items-center justify-center">
                <Chrome className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">Remynix</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-md cursor-pointer">
                <span>Donate</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-md cursor-pointer">
                <span>About</span>
              </div>
            </nav>

            <Button className="bg-purple-100 text-purple-700 hover:bg-purple-200 border border-purple-200 rounded-lg px-6">
              Install for free
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Pushed down more */}
      <main className="flex-1 flex flex-col justify-center px-6">
        <div className="container mx-auto max-w-4xl text-center mb-4">
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-normal mb-6 leading-tight">
            <span className="text-[#01c79b] font-semibold">Don't search,</span>{" "}
            <span className="text-black font-semibold">just save</span>
          </h1>

          {/* Subheading */}
          <p className="text-md text-gray-700 mb-4 max-w-2xl mx-auto">
            Effortless bookmark management in every browser
          </p>

          {/* Footer text */}
          <p className="text-sm text-gray-500">Available for all browsers</p>
        </div>

        {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-[#01c79b] hover:bg-purple-700 text-white rounded-lg px-8 py-3 text-md font-normal">
              <Chrome className="w-5 h-5 mr-2" />
              Download Extension
            </Button>
          </div>
      </main>

      {/* Image Section - Masked at bottom */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="relative">
            <img
              src="/remynix.jpg"
              alt="Interests Chrome Extension Interface"
              className="w-full h-64 md:h-80 object-cover rounded-t-xl shadow-lg"
            />
            {/* Bottom mask gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f5f3f0] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
