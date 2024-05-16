import Layout from "@/components/layout/layout";
import { ReactElement, useEffect, useState } from "react";
import type { NextPageWithLayout } from "./_app";
import { SignInButton } from "@clerk/nextjs";

const Page: NextPageWithLayout = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const { message } = await res.json();
      setMessage(message);
    };
    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;
  return (
    <p>
      <SignInButton />
    </p>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
