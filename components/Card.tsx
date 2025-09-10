import { DataItem } from "@/types";

interface CardProps {
  item: DataItem;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-400 p-4 shadow-lg duration-300 hover:shadow-[0px_0px_25px_10px_#00000024] hover:border hover:border-black hover:scale-105 transition-all ease-in">
      <img
        src={item.photo_url}
        alt={item.patient_name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {item.patient_name} ({item.age})
        </h2>
        <p className="text-gray-600 text-sm mb-2">
          Medical Issue: {item.medical_issue}
        </p>
        {item.contact && item.contact.length > 0 && (
          <p className="text-gray-500 text-sm">
            Contact: {item.contact[0].number} | {item.contact[0].email}
          </p>
        )}
      </div>
    </div>
  );
}

