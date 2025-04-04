import type { CardProps } from "../types";
import InfoCard from "@/components/demo/InfoCard";

const PRODUCTS = [
	"Smartphone",
	"Laptop",
	"Smartwatch",
	"Headphones",
	"Tablet",
	"Speaker",
];

async function generateFakeData(
	name: string,
	delay: number
): Promise<CardProps> {
	await new Promise((resolve) =>
		setTimeout(resolve, Math.random() * delay + 1000)
	);

	const price = Math.random() * 1000 + 100;
	return {
		name,
		price,
		ui: <InfoCard name={name} price={price} />,
	};
}

export const getProducts = async () => {
	"use server";
	return PRODUCTS.map((id) => generateFakeData(id, 3000));
};
