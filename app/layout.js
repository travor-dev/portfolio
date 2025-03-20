import { Outfit, Ovo} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight:["400", "500", "600", "700"]
});

const ovo = Ovo({
  
  subsets: ["latin"], weight:["400"]
});



export const metadata = {
  title: "Travor dev",
  description: "Web site desiner in Uganda | Full-stack developer | Make a websit | travor dev",
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth ' lang="en">
      <body
        className={`${outfit.className} ${ovo.className} dark:bg-cyan-950 bg-slate-50 antialiased leading-8 overflow-x-hidden  `}
      >
        {children}
      </body>
    </html>
  );
}
