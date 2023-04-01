// sm:after:top-[18px] sm:after:left-[-10px] md:after:bottom-[-10px] md:after:right-[50%] md:after:translate-x-[50%]
export default function Steps(){
	return( 
		<div className="bg-primary py-[3rem]">
			<div className="container px-4 mx-auto">
				<div className="relative text-white md:w-full md:flex justify-evenly md:text-center border-l-2 md:border-l-0 md:border-b-2 border-white mx-auto w-[250px]">
					<div className="step p-5 mb-4 md:mb-0 relative flex flex-col md:flex-col-reverse">
						<span className="text-xs  md:mt-[10px]">step 1</span>
						<p className="text-base">Evaluation And Signing<br/> Of The Contract</p>
					</div>
					<div className="step p-5 mb-4 md:mb-0 relative flex flex-col md:flex-col-reverse">
						<span className="text-xs  md:mt-[10px]">step 2</span>
						<p className="text-base">Preparation Of The<br/> Work plan</p>
					</div>
					<div className="step p-5 mb-4 md:mb-0 relative flex flex-col md:flex-col-reverse">
						<span className="text-xs  md:mt-[10px]">step 3</span>
						<p className="text-base">Implementation Of<br/> Quality Works</p>
					</div>
					<div className="step p-5 mb-4 md:mb-0 relative flex flex-col md:flex-col-reverse">
						<span className="text-xs  md:mt-[10px]">step 4</span>
						<p className="text-base">Delivering The Project <br/> To The Customer</p>
					</div>
				</div>
			</div>
		</div>
	)
}
