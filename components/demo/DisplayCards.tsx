import { Suspense, use } from "react";
import { getProducts } from "@/lib/getCards";
import { v4 as uuidv4 } from "uuid";

import InfoCard from "@/components/demo/InfoCard";
import { CardProps } from "@/types";
import CardSkeleton from "./CardSkeleton";

const DisplayCard = ({ cardPromise }: { cardPromise: Promise<CardProps> }) => {
	const { name, price } = use(cardPromise);
	return <InfoCard key={name} name={name} price={price} />;
};

const DisplayCards = async () => {
	const cards = await getProducts();

	return (
		<div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 py-6">
				{cards.map((card) => (
					<Suspense fallback={<CardSkeleton />} key={uuidv4()}>
						<DisplayCard cardPromise={card} />
					</Suspense>
				))}
			</div>
		</div>
	);
};

export default DisplayCards;
