"use client";

import dynamic from "next/dynamic";

const WavyBgAnimator = dynamic(() => import("./WavyBgAnimator"), { ssr: false });

const WavyBgAnimatorWrapper = () => {
  return <WavyBgAnimator />;
};

export default WavyBgAnimatorWrapper;
