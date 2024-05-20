

function App() {


  return (
<main className="flex h-screen w-screen items-center justify-center bg-[url('https://i.imgur.com/1O8ovx1.jpeg')] bg-cover">
  <div className="group flex h-64 w-[26rem] flex-col rounded-3xl border-2 border-white/80 bg-gradient-to-br from-white/50 to-white/30 p-8 text-white shadow-lg backdrop-blur-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="flex w-full items-center">
      <h2 className="mr-auto text-2xl font-bold transition-transform delay-0 duration-200 group-hover:-translate-y-2 group-hover:drop-shadow-md">Mastercard</h2>
      <img className="delay-50 size-8 transition-transform delay-75 duration-150 group-hover:-translate-y-2 group-hover:drop-shadow-md" src="https://i.imgur.com/eLwgPd2.png" />
    </div>
    <div className="mt-auto flex w-full items-end">
      <div className="mr-auto flex w-fit flex-col gap-2">
        <div className="flex items-baseline">
          <p className="uppercase delay-150 duration-150 group-hover:-translate-y-2 group-hover:drop-shadow-md">Ruchi DWIVEDI</p>
          <p className="ml-auto font-mono delay-200 duration-150 group-hover:-translate-y-2 group-hover:drop-shadow-md">8/24</p>
        </div>
        <p className="font-mono text-lg font-bold delay-300 duration-150 group-hover:-translate-y-2 group-hover:drop-shadow-md">1234 1234 1234 1234</p>
      </div>

      <div className="w-16 rounded-md bg-white/20 p-2">
        <img src="https://i.imgur.com/GaIY1JU.png" />
      </div>
    </div>
  </div>
</main>
  )
}

export default App
