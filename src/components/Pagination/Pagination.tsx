"use client";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { fetchUpdatePagePhotos, unsplash } from "@/store/reducers/ActionCreators";
import { useAppDispatch } from "@/hook/redux";


export default function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([1, 2, 3]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUpdatePagePhotos(currentPage));
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage === pages[pages.length - 1]) {
      const newPagePagination = [...pages, pages[pages.length - 1] + 1];
      newPagePagination.shift();
      setPages(newPagePagination);
    }
  };

  const prevPage = () => {
    if (currentPage === pages[0] && currentPage !== 1) {
      const newPagePagination = [...pages];
      newPagePagination.pop();
      newPagePagination.unshift(newPagePagination[0] - 1);
      setPages(newPagePagination);
    }
  };

  const handling = (value: boolean) => {
    if (value) {
      setCurrentPage(currentPage + 1);
      nextPage();
    } else if (!value && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      prevPage();
    }
  };

  return (
    <div className="pagination">
      <nav aria-label="Exam">
        <ul className="pagination ">
          <li className="page-item"><a className="page-link" href="#" onClick={() => handling(false)} >Last</a></li>
          {pages.map((num: number) => (
            <li key={num} className="page-item"><a className={`${currentPage === num ? `page-link active"` : 'page-link'}`} href="#" onClick={() => setCurrentPage(num)}>{num}</a></li>
          ))}
          <li className="page-item"><a className="page-link" href="#" onClick={() => handling(true)} >Next</a></li>
        </ul>
      </nav>
    </div >
  );
}
