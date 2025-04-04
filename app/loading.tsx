import CardSkeleton from "@/components/demo/CardSkeleton";
import React from "react";

const Loading = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 py-6">
					{Array.from({ length: 6 }).map((_, index) => (
						<CardSkeleton key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Loading;
