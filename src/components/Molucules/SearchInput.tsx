import React, { VFC } from 'react';

type Props = {
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClickSearch: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

export const SearchInput: VFC<Props> = ({
  onChangeInputValue,
  value,
  onClickSearch,
}) => {
  return (
    <div className="flex mt-10 mb-5 m-auto w-3">
      <input
        value={value}
        onChange={onChangeInputValue}
        type="text"
        placeholder="Input CityName"
        className="focus:ring-indigo-500 focus:border-indigo-500  flex-1  rounded rounded-r-md sm:text-sm border-gray-300"
      />
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mx-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={onClickSearch}
        >
          <path
            className="p-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  );
};
