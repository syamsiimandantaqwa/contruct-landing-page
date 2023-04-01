export default function Form(){
	return(
		<div className="py-[5rem] bg-[url('/bg1.jpg')] relative bg-bottom  after:absolute after:inset-0 after:bg-gradient-to-b after:from-secondary">
		<div className="container z-10 relative px-4 mx-auto text-white">
			<h1 className="text-center font-semibold text-[1.5rem] md:text-[3rem] mb-[1.5rem]">Leading Way In Building & Civil Constrution</h1>
			<ul className="list-none flex gap-5 flex-wrap justify-center ">
				<li className="flex gap-x-3 flex-end "><span><ion-icon name="checkmark-circle"></ion-icon></span> Professional Staff</li>
				<li className="flex gap-x-3 flex-end "><span><ion-icon name="checkmark-circle"></ion-icon></span> 100% Satisfaction</li>
				<li className="flex gap-x-3 flex-end "><span><ion-icon name="checkmark-circle"></ion-icon></span> Accurate Testing</li>
				<li className="flex gap-x-3 flex-end "><span><ion-icon name="checkmark-circle"></ion-icon></span> Transparent Pricing</li>
			</ul>
			<div className="pt-[3rem] grid grid-cols-1 gap-y-4 md:grid-cols-[700px_400px] md:gap-x-9 justify-center">
				<div className="bg-primary p-6 rounded-lg text-white">
					<h1 className="mb-3 font-semibold">Request A Quote</h1>
					<p className="text-sm">Complete control ober products allow us to our costumers the best quality<br/>
					prices and services we take great pride in everything that we do in construct</p>
					<div className="grid gap-2 grid-cols-2 mt-4 text-secondary">
						<input type="text" placeholder="Name" className="rounded-lg outline-none border-0 p-3 bg-white" />
						<input type="email" placeholder="Email" className="rounded-lg outline-none border-0 p-3 bg-white" />
						<input type="number" placeholder="Phone" className="rounded-lg outline-none border-0 p-3 bg-white" />
						<input type="text" placeholder="Select Your services" className="rounded-lg outline-none border-0 p-3 bg-white" />
						<textarea className="col-span-2 rounded-lg p-3 resize-none" rows="4" placeholder="Additional Details"></textarea>
					</div>
					<button className="bg-secondary rounded-lg mt-4 w-full py-3 text-center">Submit Request</button>
				</div>
				<div className="bg-primary p-6 rounded-lg text-white">
					<h1 className="font-semibold mb-6">Contact Info</h1>
					<ul className="list-none flex flex-col gap-y-3">
						<li>
							<h2 className="text-base font-semibold">Our Location</h2>
							<p className="text-xs">19 Office BUilding 2th Floor Unit C. Jl Tb <br/>
							Pangeran Sutajaya</p>
						</li>
						<li>
							<h2 className="text-base font-semibold">Our Location</h2>
							<p className="text-xs">Email: (+62) 8978-3705-053<br/>
							call us: contruct@gmail.com</p>
						</li>
						<li>
							<h2 className="text-base font-semibold">opening hours</h2>
							<p className="text-xs">monday - friday <br/>
							09.00 AM - 06.00 PM</p>
						</li>
						<li>
							<h2 className="text-base font-semibold">Do you have any question, just <br/>
							Contact us to get help !</h2>
						</li>
						<li><button className="bg-secondary rounded-lg mt-4 w-full py-3 text-center">Contact Us</button></li>
					</ul>
				</div>
			</div>
		</div>
		</div>
		)
}