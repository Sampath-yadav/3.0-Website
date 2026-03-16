"use client";

import dynamic from "next/dynamic";

const IntroLoader = dynamic(() => import("./IntroLoader"), { ssr: false });

const IntroLoaderWrapper = () => {
  return <IntroLoader />;
};

export default IntroLoaderWrapper;
