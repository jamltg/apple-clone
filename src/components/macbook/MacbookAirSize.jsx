export default function MacbookAirSize() {
  return (
    <div>
      <div className="relative h-screen flex justify-center">
        <img 
          src="https://www.apple.com/v/macbook-air/s/images/overview/design/sizes/design_sizes_endframe__ckfqlo8f44eq_large.jpg"
          alt="macbook-air-sizes"
          className="absolute h-[300px] md:h-[500px] lg:h-[80%]"
        />
        <div className="flex z-10 mt-24 gap-32 md:mt-40 lg:mt-52">
          <div className="bg-re">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">13&ldquo;</h1>
            <p className="font-semibold tracking-wide md:ml-3 lg:text-xl">display</p>
          </div>
          <div>
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">15&ldquo;</h1>
            <p className="font-semibold tracking-wide md:ml-3 lg:text-xl">display</p>
          </div>
        </div>
      </div>
      <div>Hello</div>
    </div>
  )
}
