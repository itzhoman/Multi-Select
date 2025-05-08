export interface MultiSelectProps {
  options: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  maxHeight?: number;
  disabled?: boolean;
}
