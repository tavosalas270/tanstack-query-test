import { FC } from "react";
import useLabels from "../hooks/useLabels";
import { LoadingSpinner } from "../shared";

interface Props {
  onLabelSelected: (label: string) => void;
  selectedLabels: string[];
}

export const LabelPicker: FC<Props> = ({onLabelSelected, selectedLabels}) => {

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
        onClick={() => onLabelSelected(item.name)}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
            ${selectedLabels.includes(item.name) ? 'selected-label' : ''}
          `}
          style={{ border: `1px solid #${item.color}`, color: '#ffccd3' }}
        >
          {item.name}
        </span>
      ))}
      
    </div>
  );
};
