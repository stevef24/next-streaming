"use client";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Heart,
	Smartphone,
	Laptop,
	Watch,
	Headphones,
	Tablet,
	Speaker,
} from "lucide-react";

const productIcons: Record<string, React.ElementType> = {
	Smartphone: Smartphone,
	Laptop: Laptop,
	Smartwatch: Watch,
	Headphones: Headphones,
	Tablet: Tablet,
	Speaker: Speaker,
};

export default function InfoCard({
	name,
	price,
}: {
	name: string;
	price: number;
}) {
	const [liked, setLiked] = useState(false);
	const IconComponent = productIcons[name] || Smartphone; // Fallback to Smartphone if not found

	return (
		<Card className="w-full  hover:cursor-pointer hover:shadow-md transition-all duration-200">
			<CardHeader className="flex flex-row items-center justify-between pb-2">
				<div className="text-xl font-medium">{name}</div>
				<Button
					variant="ghost"
					size="icon"
					onClick={(e) => {
						e.stopPropagation();
						setLiked(!liked);
					}}
				>
					<Heart
						className={`h-5 w-5 ${
							liked ? "fill-red-500 text-red-500" : "text-gray-500"
						}`}
					/>
				</Button>
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-center py-6">
				<IconComponent className="h-24 w-24 text-gray-600 mb-4" />
				<div className="text-2xl font-bold">${price.toFixed(2)}</div>
			</CardContent>
			<CardFooter className="bg-gray-50 dark:bg-gray-800/50 pt-2 pb-3 px-6">
				<div className="text-sm text-gray-500 dark:text-gray-400">
					Free shipping • In stock
				</div>
			</CardFooter>
		</Card>
	);
}
