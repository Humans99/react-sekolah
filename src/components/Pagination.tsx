import React from "react";

type Link = {
  url: string | null;
  label: string;
  active: boolean;
};

type PaginationProps = {
  links: Link[];
  onPageChange: (url: string) => void;
};

const Pagination: React.FC<PaginationProps> = ({ links, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4 space-x-1">
      {links.map((link, index) => {
        return (
          <button
            key={index}
            onClick={() => link.url && onPageChange(link.url)}
            disabled={!link.url}
            className={`px-3 py-1 rounded cursor-pointer ${
              link.active
                ? "bg-brand-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            } border border-gray-300 text-sm`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
