import { GetServerSideProps, type NextPage } from "next";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { type AppProps } from "next/app";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
};

type SigninProps = {
  providers: Record<string, Provider>;
};

const Signin = ({ providers }: SigninProps) => {
  console.log(providers);
  return (
    <>
      <h1>Signin</h1>
      <div>
        {Object.values(providers).map((provider) => (
          <button key={provider.id}>Sign in with Google</button>
        ))}
      </div>
    </>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
