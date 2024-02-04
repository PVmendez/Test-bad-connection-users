import { CardProps, Post } from '@/app/lib/interfaces';

export const Card = ({ data }: CardProps) => {
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

  return (
    <div>
      {Object.keys(groupedData).map((userIdKey) => {
        const userId = parseInt(userIdKey);
        return (
          <div key={userId} className="mb-8">
            <h2 className="mb-4 mt-4 text-xl font-semibold">
              User ID: {userId}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {groupedData[userId].map((card) => (
                <div
                  key={card.id}
                  className="overflow-hidden rounded-lg bg-white shadow-md"
                >
                  <img
                    className="h-48 w-full object-cover object-center"
                    src={`https://picsum.photos/seed/${card.id}/500/300`}
                    alt={card.title}
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                    <p className="text-gray-700">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
