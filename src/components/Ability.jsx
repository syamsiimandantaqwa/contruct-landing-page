export default function Ability(){
	return(
		<div className="bg-secondary pb-5">
		<div className="container mx-auto px-4 grid md:grid-cols-2" >
			<ul className="list-none w-[450px] h-[160px] sm:mx-auto text-white bg-primary relative -mt-[4rem] p-8 rounded-lg text-sm md:order-2">
				<li className="flex flex-start"><span className="mr-2 text-[1.2rem]"><ion-icon name="checkmark-circle"></ion-icon></span>
				Quality Control System, 100% Satisfaction Guarantee</li>
				<li className="flex flex-start"><span className="mr-2 text-[1.2rem]"><ion-icon name="checkmark-circle"></ion-icon></span>
				Highly Proffesional Staff, Accurate Testing Processes</li>
				<li className="flex flex-start"><span className="mr-2 text-[1.2rem]"><ion-icon name="checkmark-circle"></ion-icon></span>
				Unrivalled Workmanship, Proffesional and Qualified</li>
			</ul>
			<div className="mt-[2rem] grid gap-x-4 gap-y-4 grid-cols-2 md:order-1 sm:grid-cols-3">
				<p className="text-white flex flex-start gap-x-2">
					<span className="text-primary text-[2.5rem] font-semibold">25+</span>
					<span>Years of<br/> Eperience</span>
				</p>
				<p className="text-white flex flex-start gap-x-2">
					<span className="text-primary text-[2.5rem] font-semibold">378+</span>
					<span>Project<br/> Complete</span>
				</p>
				<p className="text-white flex flex-start gap-x-2">
					<span className="text-primary text-[2.5rem] font-semibold">69+</span>
					<span>Winning<br/> Global Award</span>
				</p>
			</div>
		</div>
	</div>
	)
}