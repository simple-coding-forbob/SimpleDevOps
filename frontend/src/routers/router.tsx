import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

// 메뉴 등록 시 2가지 중에 1가지를 사용하세요
// 일반 로딩 사용법: import 페이지명 from "페이지경로";
// lazy 로딩 사용법: const 상수 = lazy(() => import("페이지경로"));

// 공통 로딩 컴포넌트
const loading = <div>Loading...</div>;

// 페이지 lazy 로딩
const Home = lazy(() => import("../pages/Home"));

// 부서
const DeptList = lazy(() => import("../pages/dept/DeptList"));
const AddDept = lazy(() => import("../pages/dept/AddDept"));
const DeptDetail = lazy(() => import("../pages/dept/DeptDetail"));

// 사원
const EmpList = lazy(() => import("../pages/emp/EmpList"));
const AddEmp = lazy(() => import("../pages/emp/AddEmp"));
const EmpDetail = lazy(() => import("../pages/emp/EmpDetail"));

const FaqList = lazy(() => import("../pages/faq/FaqList"));
const AddFaq = lazy(() => import("../pages/faq/AddFaq"));
const FaqDetail = lazy(() => import("../pages/faq/FaqDetail"));
// QnA
const QnaList = lazy(() => import("../pages/qna/QnaList"));
const AddQna = lazy(() => import("../pages/qna/AddQna"));
const QnaDetail = lazy(() => import("../pages/qna/QnaDetail"));

// 파일 DB
const FileDbList = lazy(() => import("../pages/filedb/FileDbList"));
const AddFileDb = lazy(() => import("../pages/filedb/AddFileDb"));

// 갤러리
const GalleryList = lazy(() => import("../pages/gallery/GalleryList"));
const AddGallery = lazy(() => import("../pages/gallery/AddGallery"));

// 예약 게시판
const MeetingRoomList = lazy(
  () => import("../pages/meetingroom/MeetingRoomList"),
);
const AddMeetingRoom = lazy(
  () => import("../pages/meetingroom/AddMeetingRoom"),
);
const MeetingRoomDetail = lazy(
  () => import("../pages/meetingroom/MeetingRoomDetail"),
);

// 공용차량
const PublicCarList = lazy(() => import("../pages/publiccar/PublicCarList"));
const AddPublicCar = lazy(() => import("../pages/publiccar/AddPublicCar"));
const PublicCarDetail = lazy(
  () => import("../pages/publiccar/PublicCarDetail"),
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={loading}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      // 부서
      { path: "dept", element: <DeptList /> },
      { path: "add-dept", element: <AddDept /> },
      { path: "dept-detail/:dno", element: <DeptDetail /> },
      // 사원
      { path: "emp", element: <EmpList /> },
      { path: "add-emp", element: <AddEmp /> },
      { path: "emp-detail/:eno", element: <EmpDetail /> },
      // faq
      { path: "faq", element: <FaqList /> },
      { path: "add-faq", element: <AddFaq /> },
      { path: "faq-detail/:fno", element: <FaqDetail /> },
      // qna
      { path: "qna", element: <QnaList /> },
      { path: "add-qna", element: <AddQna /> },
      { path: "qna-detail/:qno", element: <QnaDetail /> },

      // 파일db 업로드
      { path: "fileDb", element: <FileDbList /> },
      { path: "add-fileDb", element: <AddFileDb /> },
      // 갤러리 업로드
      { path: "gallery", element: <GalleryList /> },
      { path: "add-gallery", element: <AddGallery /> },

      // 예약 게시판
      { path: "meeting-room", element: <MeetingRoomList /> },
      { path: "add-meeting-room", element: <AddMeetingRoom /> },
      { path: "meeting-room-detail/:mid", element: <MeetingRoomDetail /> },

      // 공용차량
      { path: "public-car", element: <PublicCarList /> },
      { path: "add-public-car", element: <AddPublicCar /> },
      { path: "public-car-detail/:pid", element: <PublicCarDetail /> },
    ],
  },
]);

export default router;
