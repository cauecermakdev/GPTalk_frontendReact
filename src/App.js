// import React from "react";

// import styled from "styled-components";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from "./components/Menu";
// import Session from "./components/Session";
// import MovieSessions from "./components/MovieSessions";
// import AllMovies from "./components/AllMovies";
// import Success from "./components/Success";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Menu />
//       <ContainerPage>
//         <Routes>
//           <Route path="/" element={<AllMovies />} />
//           <Route path="/filme/:movieId" element={<MovieSessions />} />
//           <Route path="/sessao/:sessionID" element={<Session />} />
//           <Route path="/sucesso" element={<Success />} />
//         </Routes>
//       </ContainerPage>
//     </BrowserRouter>
//   );
// }

// const ContainerPage = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

import Enroll from "./pages/Enroll";
import SignIn from "./pages/SignIn";
//import Dashboard from "./pages/Dashboard";

//import { EventInfoProvider } from "./contexts/EventInfoContext";
import { UserProvider } from "./contexts/UserContext";

import useToken from "./hooks/useToken";
import Dashboard from "./contexts/pages/dashboard";

export default function App() {
  return (
    <>
      <StyledToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/" element={<SignIn />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>{<Dashboard />}</ProtectedRouteGuard>
              }
            >
              {/* <Route path="words" element={<Words />} /> */}
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-container {
    z-index: 9999;
    font-size: 1rem;
    position: fixed;
    top: 0;
    right: 0;
  }

  .Toastify__toast {
    border-radius: 4px;
    padding: 1rem;
  }

  .Toastify__toast--success {
    background-color: green;
    color: white;
  }

  .Toastify__toast--error {
    background-color: red;
    color: white;
  }
`;
