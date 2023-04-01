
export default function Review(){
	return(
		<div className="bg-secondary py-[4rem]">
		 <div className="container px-4 mx-auto  text-white">
		 	<h1 className="text-primary text-center mb-[1.5rem] text-[1.5rem]">What Our Client Says</h1>
		 	<div className="text-center mx-auto md:w-[50%]">
		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud </p>
				 <p className="mt-[1rem] mb-[.5rem] font-semibold ">Billie Joe Sumanto</p>
				 <p className="text-xs">CEO, Lexmark</p>
		 	</div>
		 	<div className="flex gap-x-4 justify-center mt-[2.5rem]">
	    		<button className="text-xs">{"<"} Prev</button>
	    		<div className="flex items-center gap-x-4">
    				<img className="w-[2rem] h-[2rem] grayscale rounded-full" src="https://randomuser.me/api/portraits/women/79.jpg" />
    				<img className="w-[3rem] h-[3rem] grayscale-0 border-[3px] border-black shadow-[0_0_0_3px_#FF7420] rounded-full" src="https://randomuser.me/api/portraits/men/49.jpg" />
    				<img className="w-[2rem] h-[2rem] grayscale rounded-full" src="https://randomuser.me/api/portraits/women/99.jpg" />
	    		</div>
	    		<button className="text-xs">Next {">"}</button>
		 	</div>
		 </div>
		</div>
	)
}