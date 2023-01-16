import * as React from "react";

type CardProps = {
  title: any;
  item: string;
};

const Card = ({ title, item }: CardProps) => {
  return (
    <>
      <div className="centered-container">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {title}
              {item}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
