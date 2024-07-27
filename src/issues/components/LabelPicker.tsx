import useLabels from "../hooks/useLabels";
import { LoadingSpinner } from "../shared";

export const LabelPicker = () => {

  const labelsQuery = useLabels()

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div>
      {labelsQuery.data?.map((item) => (
        <span key={item.id}
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${item.color}`, color: '#ffccd3' }}
        >
          {item.name}
        </span>
      ))}
      
    </div>
  );
};
