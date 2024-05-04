"use client";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
};

export const CardStack = ({
                              items,
                              offset,
                              scaleFactor,
                          }: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, [cards, hoveredIndex]);

    const startFlipping = () => {
        interval = setInterval(() => {
            if (hoveredIndex === null) {
                setCards((prevCards: Card[]) => {
                    const newArray = [...prevCards];
                    newArray.unshift(newArray.pop()!);
                    return newArray;
                });
            }
        }, 5000);
    };

    const handleHover = (index: number, isHovering: boolean) => {
        if (isHovering) {
            setHoveredIndex(index);
            clearInterval(interval);
        } else {
            setHoveredIndex(null);
            startFlipping();
        }
    };

    return (
        <div className="relative h-60 w-96 md:h-60">
            {cards.map((card, index) => {
                const isStackedCard = index > 0 && index <= 3;
                const isCurrentCard = index === hoveredIndex;

                return (
                    <motion.div
                        key={card.id}
                        className={`absolute bg-white h-60 w-96 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl ${
                            isCurrentCard ? "border-4 border-slate-800 border-solid" : "" 
                        } shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between`}
                        style={{
                            transformOrigin: "top center",
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                            visibility: isStackedCard ? "visible" : "hidden",
                        }}
                        onMouseEnter={() => handleHover(index, true)}
                        onMouseLeave={() => handleHover(index, false)}
                    >
                        <div className="font-normal text-neutral-700">
                            {card.content}
                        </div>
                        <div>
                            <p className="text-neutral-500 font-medium">
                                {card.name}
                            </p>
                            <p className="text-purple-900 font-normal">
                                {card.designation}
                            </p>
                            <p className="text-neutral-500 font-medium flex justify-end">{`${card.id}/${cards.length}`}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
