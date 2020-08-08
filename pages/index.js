import { useAuth } from "@/lib/auth";
import { Heading, Button, Text, Icon } from "@chakra-ui/core";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading>
          Fast Feedback
          <Icon name="logo" />
        </Heading>

        {auth?.user ? (
          <Button size="sm" onClick={() => auth.signout()}>
            Sign Out
          </Button>
        ) : (
          <Button size="sm" onClick={() => auth.signInWithGithub()}>
            Sign In
          </Button>
        )}
      </main>
    </div>
  );
};

export default Home;
