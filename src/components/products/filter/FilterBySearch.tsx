import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { setSearch } from "../../../redux/features/filterProducts/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const FilterBySearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filter = useAppSelector((state) => state.filter);
  console.log(filter);

  // Refactored debounce function to handle setting state after delay
  const debounceHandler = (fn: (value: string) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout | null = null;

    return (value: string) => {
      clearTimeout(timeoutId as NodeJS.Timeout);
      timeoutId = setTimeout(() => {
        fn(value);
      }, delay);
    };
  };

  const handleSearchTerm = debounceHandler((value: string) => {
    dispatch(setSearch(value)); // Dispatch search action after debounce delay
  }, 500);

  // Handle input change and trigger debounce logic
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value); // Update local state immediately
    handleSearchTerm(value); // Trigger debounce logic after every change
  };

  return (
    <div className="ui-input-container">
      <input
        required
        placeholder="Search Product..."
        className="ui-input"
        type="text"
        value={searchTerm}
        onChange={handleChange} // Use handleChange for input onChange event
      />
      <div className="ui-input-underline"></div>
      <div className="ui-input-highlight"></div>
      <div className="ui-input-icon">
        <HiOutlineMagnifyingGlass />
      </div>
    </div>
  );
};

export default FilterBySearch;
