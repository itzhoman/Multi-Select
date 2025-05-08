import React, { useState, useRef, useEffect } from "react";
import styles from "./MultiSelect.module.scss";
import type { MultiSelectProps } from "./types";

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  placeholder = "Try to add...",
  className,
  maxHeight = 150,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleAddItem = (value: string) => {
    const trimmedValue = value.trim();
    if (!trimmedValue || selected.includes(trimmedValue)) return;

    const newSelected = [...selected, trimmedValue];
    setSelected(newSelected);
    onChange(newSelected);
    setInputValue("");
  };

  const handleRemoveItem = (value: string) => {
    const newSelected = selected.filter((item) => item !== value);
    setSelected(newSelected);
    onChange(newSelected);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddItem(inputValue);
    } else if (e.key === "Backspace" && !inputValue && selected.length > 0) {
      handleRemoveItem(selected[selected.length - 1]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) => !selected.includes(opt));

  return (
    <div 
      className={`${styles.wrapper} ${className || ""}`} 
      ref={wrapperRef}
      role="combobox"
      aria-expanded={dropdownOpen}
      aria-haspopup="listbox"
    >
      <div 
        className={styles.inputArea} 
        onClick={() => !disabled && setDropdownOpen(true)}
      >
        {selected.map((item) => (
          <span key={item} className={styles.tag}>
            {item}
            <button
              type="button"
              className={styles.remove}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveItem(item);
              }}
              aria-label={`Remove ${item}`}
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => !disabled && setDropdownOpen(true)}
          placeholder={selected.length === 0 ? placeholder : ""}
          disabled={disabled}
          aria-label="Try to"
        />
      </div>

      {dropdownOpen && filteredOptions.length > 0 && (
        <div 
          className={styles.dropdown}
          style={{ maxHeight: `${maxHeight}px` }}
          role="listbox"
        >
          {filteredOptions.map((opt) => (
            <div
              key={opt}
              className={styles.dropdownItem}
              onClick={() => handleAddItem(opt)}
              role="option"
              aria-selected={selected.includes(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
