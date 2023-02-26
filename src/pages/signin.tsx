import { type GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";
// import { type AppProps } from "next/app";

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
          <button
            key={provider.id}
            onClick={() =>
              void signIn(provider.id, {
                callbackUrl: `${window.location.origin}`,
              })
            }
          >
            Sign in with Google
          </button>
        ))}
        {/* void (async () => {
                await signIn(provider.id, {
                  callBackUrl: `${window.location.origin}/}`,
                });
              }) */}
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
