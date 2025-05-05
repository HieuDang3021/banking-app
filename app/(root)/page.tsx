import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedInUser = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content  px-5 sm:px-8 py-7 lg:py-12">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser.firstName || "Guest"}
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

      <RightSidebar user={loggedInUser} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;
