import { FC } from "react";

import { Header } from "../components/album/Header";
import { Footer } from "../components/board/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

export const DefaultLayout: FC = (props) => {
  return (
    <>
      <Header />
      <main>
        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};
