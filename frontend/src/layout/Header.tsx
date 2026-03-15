import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // TODO: md:xxx (768px 이상에서 적용), lg:xxx (1024px 이상에서 적용), 기본은 모바일 우선 디자인
    <nav className="bg-gray-100 text-gray-800">
      <div className="bg-blue-700 text-white flex justify-between border-b items-center py-1 px-5">
        {/* Logo + 메뉴 */}
        <div className="text font-bold">simple-coding</div>

        {/* 햄버거 + 로그인 메뉴 */}
        <div className="flex items-center gap-4">
          {/* 햄버거 버튼 (모바일) */}
          <button
            aria-label="햄버거 메뉴 열기/닫기"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 모바일 메뉴: md:hidden (758px 이상에서 숨김) */}
      {/* flex-col : 세로 바꾸기  */}

      <div
        className={`flex flex-col gap-4 transition-all duration-700
                                   md:flex-row md:justify-between md:items-center
                                   ${
                                     isOpen
                                       ? "max-h-1000"
                                       : "max-h-0 overflow-hidden"
                                   }
                                   `}
      >
        <ul
          className="flex flex-col gap-4 pl-5 py-2
                              md:flex-row
          "
        >
          {/* PC 메뉴 */}
          <li>
            <Link to="/" className="hover:underline">
              홈
            </Link>
          </li>
          <li></li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              부서
            </Link>
            {/* w-[단위] */}
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/dept" className="hover:underline">
                  부서조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-dept" className="hover:underline">
                  부서추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              사원
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/emp" className="hover:underline">
                  사원조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-emp" className="hover:underline">
                  사원추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              Faq
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/faq" className="hover:underline">
                  Faq조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-faq" className="hover:underline">
                  Faq추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              Qna
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/qna" className="hover:underline">
                  Qna조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-qna" className="hover:underline">
                  Qna추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              FileDb
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/fileDb" className="hover:underline">
                  FileDb 조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-fileDb" className="hover:underline">
                  FileDb 추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              Gallery
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/gallery" className="hover:underline">
                  Gallery 조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-gallery" className="hover:underline">
                  Gallery 추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              MeetingRoom
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/meeting-room" className="hover:underline">
                  MeetingRoom 조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-meeting-room" className="hover:underline">
                  MeetingRoom 추가
                </Link>
              </li>
            </ul>
          </li>
          <li className="group md:relative">
            <Link to="#" className="hover:underline">
              PublicCar
            </Link>
            <ul
              className="md:absolute md:top-full md:left-0 md:opacity-0 md:invisible md:group-hover:opacity-100 
            md:group-hover:visible md:transition-all md:bg-white md:text-black md:w-42 md:p-2 md:rounded"
            >
              <li className="m-2">
                <Link to="/public-car" className="hover:underline">
                  PublicCar 조회
                </Link>
              </li>
              <li className="m-2">
                <Link to="/add-public-car" className="hover:underline">
                  PublicCar 추가
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
