import { getProducts } from "@/lib/getCards";

import InfoCard from "@/components/demo/InfoCard";
const DisplayCards = async () => {
	const cards = await getProducts();
	const cardsWithData = await Promise.all(cards);

	return (
		<div className="w-full  max-w-4xl mx-auto px-4 sm:px-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 py-6">
				{cardsWithData.map((card) => (
					<InfoCard key={card.name} name={card.name} price={card.price} />
				))}
			</div>
		</div>
	);
};

export default DisplayCards;
