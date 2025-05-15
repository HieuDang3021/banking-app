import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";

const Home = async () => {
  const user = await getLoggedInUser();

  // console.log(user);

  return (
    <section className="home">
      <div className="home-content  px-5 sm:px-8 py-7 lg:py-12">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={user?.name || "Guest"}
            subtext="Access and manage your account settings and transactions."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={127236.23}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={user}
        transactions={[]}
        banks={[{ currentBalance: 13435.43 }, { currentBalance: 1234.45 }]}
      />
    </section>
  );
};

export default Home;
