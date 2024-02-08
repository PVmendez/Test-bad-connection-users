import React, { useState } from 'react';
import { CardProps, Post } from '@/app/lib/interfaces';
import NextArrow from '../../assets/icons/arrow-next.svg';
import BackArrow from '../../assets/icons/arrow-back.svg';
import Image from 'next/image';

export default function Card({ data }: CardProps) {
  const [expandedUsers, setExpandedUsers] = useState<{
    [userId: number]: boolean;
  }>({});

  const groupedData: { [userId: number]: Post[] } = data.reduce(
    (acc: { [userId: number]: Post[] }, card) => {
      if (!acc[card.userId]) {
        acc[card.userId] = [];
      }
      acc[card.userId].push(card);
      return acc;
    },
    {},
  );

  const handleToggleExpand = (userId: number) => {
    setExpandedUsers((prevExpandedUsers) => ({
      ...prevExpandedUsers,
      [userId]: !prevExpandedUsers[userId],
    }));
  };

  return (
    <div>
      {Object.keys(groupedData).map((userIdKey) => {
        const userId = parseInt(userIdKey);
        const isExpanded = expandedUsers[userId] || false;
        const userData = groupedData[userId];

        return (
          <div key={userId} className="mb-8">
            <h2 className="mb-4 mt-4 text-xl font-semibold">
              User ID: {userId}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {userData.map((card, index) => (
                <div
                  key={card.id}
                  className={`relative overflow-hidden rounded-lg bg-white shadow-md ${
                    !isExpanded && index > 2 ? 'hidden' : ''
                  }`}
                  style={{ width: '100%' }} // Asegura que la tarjeta ocupe todo el ancho disponible
                >
                  <img
                    className="h-48 w-full object-cover object-center"
                    src={`https://picsum.photos/seed/${card.id}/500/300`}
                    alt={card.title}
                  />

                  <div className="p-10">
                    <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                    <p className="text-gray-700">{card.body}</p>
                  </div>
                  {!isExpanded && index === 2 && userData.length > 3 && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                      <Image
                        className="rounded hover:bg-slate-300"
                        onClick={() => handleToggleExpand(userId)}
                        src={NextArrow}
                        alt="next-arrow"
                      />
                    </div>
                  )}
                  {index === userData.length - 1 && isExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                      <Image
                        className="rounded hover:bg-slate-300"
                        onClick={() => handleToggleExpand(userId)}
                        src={BackArrow}
                        alt="back-arrow"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
