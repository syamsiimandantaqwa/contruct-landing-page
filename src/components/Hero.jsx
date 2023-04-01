export default function Hero(){
	return(
		<div className="min-h-screen min-w-screen relative flex items-center bg-hero-bg bg-cover bg-center hero-section">
		 <div className="container mx-auto px-4 relative z-10 flex flex-col text-white">
			<h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-semibold">We Prepare <br/> For The <span className="text-primary" >Future</span></h1>
			<p className="my-[1rem] md:my-[2rem] text-sm" >We provide the best architectural design, contruction, and <br/> building maintance services for you</p>
			<div className="flex flex-col gap-y-1 mt-[1rem] sm:flex-row sm:gap-x-3" >
				<a href="#" className="py-2 px-6 text-center rounded-lg bg-primary flex gap-x-3 items-center justify-center">Our Services <ion-icon name="arrow-forward-circle-outline"></ion-icon></a>
    			<a href="#" className="py-2 px-6 text-center rounded-lg bg-white text-black" >View Project</a>
			</div>
		  </div>
		</div>
	)
}