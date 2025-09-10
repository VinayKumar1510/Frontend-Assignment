import { DataItem } from "@/types";

interface RowCardProps {
  item: DataItem;
}

export default function RowCard({ item }: RowCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white border border-gray-400 rounded-xl p-4 hover:shadow-[0px_0px_25px_10px_#00000024] hover:border hover:border-black hover:scale-105 transition-all ease-in">
      {/* Patient Photo */}
      <img
        src={item.photo_url || "/placeholder.png"}
        alt={item.patient_name}
        className="w-full sm:w-32 h-32 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-4"
      />

      {/* Patient Info */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          {item.patient_name} ({item.age})
        </h2>
        <p className="text-gray-700 text-sm mb-1">
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

