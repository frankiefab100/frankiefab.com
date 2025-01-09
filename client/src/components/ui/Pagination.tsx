// "use client";
// import { useState } from "react";

// const Pagination = () => {
//   const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10"]);
//   const [currentPage, setCurrentPage] = useState("1");

//   return (
//     <div className="max-w-screen-xl mx-auto m-12 px-4 text-gray-600">
//       <div className="hidden justify-between text-sm md:flex">
//         <div>SHOWING 1-10 OF 120</div>
//         <div className="flex items-center gap-12" aria-label="Pagination">
//           <a href="javascript:void(0)" className="hover:text-cyan-600">
//             Previous
//           </a>
//           <ul className="flex items-center gap-1">
//             {pages.map((item, idx) => (
//               <li key={item}>
//                 {item == "..." ? (
//                   <div>{item}</div>
//                 ) : (
//                   <a
//                     href="javascript:void(0)"
//                     aria-current={currentPage == item ? "page" : false}
//                     className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-cyan-600 ${
//                       currentPage == item
//                         ? "bg-cyan-600 text-white font-medium"
//                         : ""
//                     }`}
//                   >
//                     {item}
//                   </a>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <a href="javascript:void(0)" className="hover:text-cyan-600">
//             Next
//           </a>
//         </div>
//       </div>
//       {/* Mobile version */}
//       <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
//         <a
//           href="javascript:void(0)"
//           className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
//         >
//           Previous
//         </a>
//         <div className="font-medium">SHOWING 1-10 OF 120</div>
//         <a
//           href="javascript:void(0)"
//           className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
//         >
//           Next
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Pagination;

// "use client";

// interface PaginationProps {
//   totalItems: number;
//   itemsPerPage: number;
//   currentPage: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination = ({
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
// }: PaginationProps) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startItem = (currentPage - 1) * itemsPerPage + 1;
//   const endItem = Math.min(currentPage * itemsPerPage, totalItems);

//   const generatePageNumbers = () => {
//     const pages = [];
//     if (totalPages <= 7) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i.toString());
//       }
//     } else {
//       if (currentPage <= 3) {
//         pages.push("1", "2", "3", "4", "...", totalPages.toString());
//       } else if (currentPage >= totalPages - 2) {
//         pages.push(
//           "1",
//           "...",
//           (totalPages - 3).toString(),
//           (totalPages - 2).toString(),
//           (totalPages - 1).toString(),
//           totalPages.toString()
//         );
//       } else {
//         pages.push(
//           "1",
//           "...",
//           (currentPage - 1).toString(),
//           currentPage.toString(),
//           (currentPage + 1).toString(),
//           "...",
//           totalPages.toString()
//         );
//       }
//     }
//     return pages;
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto m-12 px-4 text-gray-600">
//       <div className="hidden justify-between text-sm md:flex">
//         <div>
//           SHOWING {startItem}-{endItem} OF {totalItems}
//         </div>
//         <div className="flex items-center gap-12" aria-label="Pagination">
//           <button
//             onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="hover:text-indigo-600 disabled:opacity-50 disabled:hover:text-gray-600"
//           >
//             Previous
//           </button>
//           <ul className="flex items-center gap-1">
//             {generatePageNumbers().map((item, idx) => (
//               <li key={idx}>
//                 {item === "..." ? (
//                   <div>{item}</div>
//                 ) : (
//                   <button
//                     onClick={() => onPageChange(parseInt(item))}
//                     aria-current={
//                       currentPage === parseInt(item) ? "page" : false
//                     }
//                     className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-indigo-600 ${
//                       currentPage === parseInt(item)
//                         ? "bg-indigo-600 text-white font-medium"
//                         : ""
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={() =>
//               currentPage < totalPages && onPageChange(currentPage + 1)
//             }
//             disabled={currentPage === totalPages}
//             className="hover:text-indigo-600 disabled:opacity-50 disabled:hover:text-gray-600"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       {/* Mobile version */}
//       <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
//         <button
//           onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <div className="font-medium">
//           SHOWING {startItem}-{endItem} OF {totalItems}
//         </div>
//         <button
//           onClick={() =>
//             currentPage < totalPages && onPageChange(currentPage + 1)
//           }
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;

"use client";

import { PaginationProps } from "../../../lib/types";

// const Pagination: React.FC<PaginationProps> = ({
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
//   hasNextPage,
// }) => {
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  hasNextPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i.toString());
      }
      if (hasNextPage) {
        pages.push((totalPages + 1).toString());
      }
    } else {
      if (currentPage <= 3) {
        pages.push("1", "2", "3", "4", "...", totalPages.toString());
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          "1",
          "...",
          (totalPages - 3).toString(),
          (totalPages - 2).toString(),
          (totalPages - 1).toString(),
          totalPages.toString()
        );
      } else {
        pages.push(
          "1",
          "...",
          (currentPage - 1).toString(),
          currentPage.toString(),
          (currentPage + 1).toString(),
          "...",
          totalPages.toString()
        );
      }
      if (hasNextPage && currentPage === totalPages) {
        pages.push((totalPages + 1).toString());
      }
    }
    return pages;
  };

  return (
    <div className="max-w-screen-xl mx-auto m-12 px-4 text-gray-600">
      <div className="hidden justify-between text-sm md:flex">
        <div>
          SHOWING {startItem}-{endItem} OF {totalItems}+
        </div>
        <div className="flex items-center gap-12" aria-label="Pagination">
          <button
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="hover:text-cyan-600 disabled:opacity-50 disabled:hover:text-gray-600"
          >
            Previous
          </button>
          <ul className="flex items-center gap-1">
            {generatePageNumbers().map((item, idx) => (
              <li key={idx}>
                {item === "..." ? (
                  <div>{item}</div>
                ) : (
                  <button
                    onClick={() => onPageChange(parseInt(item))}
                    aria-current={
                      currentPage === parseInt(item) ? "page" : false
                    }
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-cyan-600 ${
                      currentPage === parseInt(item)
                        ? "bg-cyan-600 text-white font-medium"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => hasNextPage && onPageChange(currentPage + 1)}
            disabled={!hasNextPage}
            className="hover:text-cyan-600 disabled:opacity-50 disabled:hover:text-gray-600"
          >
            Next
          </button>
        </div>
      </div>
      {/* Mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-200 font-medium md:hidden">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-cyan-600 hover:border-none disabled:opacity-50"
        >
          Previous
        </button>
        <div className="font-medium">
          SHOWING {startItem}-{endItem} OF {totalItems}+
        </div>
        <button
          onClick={() => hasNextPage && onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-cyan-600 hover:border-none disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
