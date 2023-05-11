import CustomHead from "../components/CustomHead";
import styles from "../styles/Home.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { CgSmartphoneChip } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";
import { MdMoneyOffCsred } from "react-icons/md";

const data = [
  {
    id: 1,
    icon: <IoCheckmarkDoneSharp className="text-[#F9A826]" />,
    title: "THE FINISH IS IMPORTANT",
    text: "It's all in the details. Have you ever went to a new development and been shocked by the poor finish? On your behalf, El’Terreno Projects Limited is on a mission to watch out for every little detail.",
  },
  {
    id: 2,
    icon: <CgSmartphoneChip className="text-[#F9A826]" />,
    title: "EFFICIENT LIVING",
    text: "Utilizing space and resources effectively is essential for smart houses. We therefore make a special effort to ensure that our floor layouts function effectively in actual use in addition to looking excellent on paper.",
  },
  {
    id: 3,
    icon: <GiTakeMyMoney className="text-[#F9A826]" />,
    title: "VALUE FOR MONEY",
    text: "We prioritize satisfied clients over immediate profit maximization. We provide payment plans and reasonable pricing to assist you in financing your dream house!",
  },
];
const data_2 = [
  {
    id: 1,
    icon: <BiTimer className="text-[#F9A826]" />,
    title: "TIMELY DELIVERY",
    text: "Our Nordic DNA is ingrained with the desire to finish our residences on time. Even so, there are occasions when things don't go as expected, but since you're working with Nigeria's most trustworthy real estate firm, you already know that.",
  },
  {
    id: 2,
    icon: <GiPayMoney className="text-[#F9A826]" />,
    title: "GOOD INVESTMENT",
    text: "We consider quality homes to be wise investments. We choose the locations for our initiatives based on their potential long-term worth. Our apartments are reasonably priced, which guarantees significant returns on your investment.",
  },
  {
    id: 3,
    icon: <MdMoneyOffCsred className="text-[#F9A826]" />,
    title: "NO HIDDEN FEES",
    text: "Even when it comes to price, we make every effort to be as open as possible. To avoid any unpleasant surprises, you can find all of our apartment prices and associated charges on our website.",
  },
];

const HomeCard = ({
  icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) => {
  return (
    <div className="text-center flex flex-col gap-2 items-center ">
      <div className="text-[6em]">{icon}</div>
      <h2 className="md:text-[25px] text-[18px] font-default font-[500]">
        {title}
      </h2>
      <p className="font-monts font-[500] md:text-[18px] leading-[2em]">
        {text}{" "}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead title={"Home "} />

      <main>
        <div className={`${styles.main} flex flex-col h-full`}>
          <div className="h-full w-full flex-1 backdrop-saturate-50 bg-black/50 flex justify-center items-center text-white">
            <div className="h-full flex flex-col justify-between">
              <div></div>
              <div className="font-monts text-center ">
                <h1 className=" font-default md:text-[50px] text-[36px] font-[500] ">
                  AN IMPROVED WAY OF LIFE
                </h1>
                <div className="font-[500] ">
                  <p className="leading-10">THE El’Terreno Projects Limited</p>
                  <p className="tracking-wide">
                    where functionality meets luxury...
                  </p>
                </div>
                <Link href={"/contact"}>
                  <button className="py-[8px] px-[15px] font-default text-[18px] mt-[30px] font-[500] bg-primary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
              <div className="text-center w-full text-[3em] font-[900] flex justify-center relative md:top-[2em] top-[4em] ">
                <BsChevronDoubleDown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full dark:bg-black dark:text-white bg-white text-gray-800 md:py-[5em] py-[3em] text-center">
          <div className="m-auto  ">
            <div className="lg:w-[50%] md:w-[70%] w-[90%] m-auto">
              <h1 className=" font-default md:text-[50px] text-[36px] font-[500] ">
                DON’T SETTLE FOR LESS. DEMAND QUALITY, RELIABILITY AND
                AFFORDABILITY. IT’S POSSIBLE.
              </h1>
              <p className="text-[18px] font-monts font-[500] my-[1em] leading-[2em]">
                El’Terreno Projects Limited was established for the
                straightforward reason that it was difficult to obtain
                well-designed, fairly priced apartments in Lagos. We made the
                decision to apply our knowledge of the Nordic housing industry
                to create homes that meet the same needs as Nordic buyers,
                including dependability, efficient use of space, and attention
                to schedules.
              </p>
            </div>

            <div className="md:w-[80%] w-[90%] m-auto mt-[4em]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2em]">
                {data.map((item) => (
                  <HomeCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION  */}
        <div className="w-full dark:bg-white dark:text-gray-800 bg-black text-white md:py-[5em] py-[3em] text-center">
          <div className="m-auto  ">
            <div className="lg:w-[50%] md:w-[70%] w-[90%] m-auto">
              <h1 className=" font-default md:text-[50px] text-[36px] font-[500] ">
                BENEFITS OF BUYING APARTMENTS IN LAGOS FROM El’Terreno Projects
                Limited
              </h1>
            </div>

            <div className="md:w-[80%] w-[90%] m-auto mt-[4em]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2em]">
                {data_2.map((item) => (
                  <HomeCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// return (
//   <div className={styles.container}>
//     <Head>
//       <title>Create Next App</title>
//       <meta name="description" content="Generated by create next app" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <main className={styles.main}>
//       <h1 className={styles.title}>
//         Welcome to <a href="https://nextjs.org">Next.js!</a>
//       </h1>

//       <p className={styles.description}>
//         Get started by editing{' '}
//         <code className={styles.code}>pages/index.tsx</code>
//       </p>

//       <div className={styles.grid}>
//         <a href="https://nextjs.org/docs" className={styles.card}>
//           <h2>Documentation &rarr;</h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a href="https://nextjs.org/learn" className={styles.card}>
//           <h2>Learn &rarr;</h2>
//           <p>Learn about Next.js in an interactive course with quizzes!</p>
//         </a>

//         <a
//           href="https://github.com/vercel/next.js/tree/canary/examples"
//           className={styles.card}
//         >
//           <h2>Examples &rarr;</h2>
//           <p>Discover and deploy boilerplate example Next.js projects.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.card}
//         >
//           <h2>Deploy &rarr;</h2>
//           <p>
//             Instantly deploy your Next.js site to a public URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>

//     <footer className={styles.footer}>
//       <a
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Powered by{' '}
//         <span className={styles.logo}>
//           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//         </span>
//       </a>
//     </footer>
//   </div>
// )
