import "@styles/globals.css";

import Nav from "@components/Nav";
import Providers from "@components/Providers";

export const metadata = {
  title: "Bookmarq",
  description: "Get to know the best spots around the net",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default Rootlayout;
