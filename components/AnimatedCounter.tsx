"use client";
import React from "react";
import CountUp from "react-countup";

type props = {
  amount: number;
};

const AnimatedCounter = ({ amount }: props) => {
  return (
    <div className="w-full">
      <CountUp
        start={amount / 10}
        end={amount}
        duration={1.5}
        decimals={2}
        decimal="."
        prefix="$"
        useEasing={true}
      />
    </div>
  );
};

export default AnimatedCounter;
