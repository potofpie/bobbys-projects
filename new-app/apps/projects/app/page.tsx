"use client";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { HomeIcon, BackpackIcon } from "@radix-ui/react-icons";
import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import { gql, useQuery } from "@apollo/client";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { ExperienceCard, Experience } from "@repo/ui/components/ui/ProjectCard";
import { useState } from "react";

const EXPERIENCES_ALL = gql`
  {
    experiences(orderBy: position_ASC, where: { AND: { show: true } }) {
      name
      description
      link
      icon {
        url
      }
      tag
    }
  }
`;

const EXPERIENCES_FILTERED = gql`
  query Experiences($tag: ExperienceTag!) {
    experiences(
      orderBy: position_ASC
      where: { AND: { show: true, tag: $tag } }
    ) {
      name
      description
      link
      icon {
        url
      }
      tag
    }
  }
`;

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-start md:items-start">
      <div className="flex flex-row md:flex-col justify-center items-center gap-4">
        <Avatar className="size-20  md:size-44 border-4 border-primary shadow-md">
          <div className="size-20  md:size-44 bg-purple-900 absolute opacity-30"></div>
          <AvatarImage src="https://github.com/potofpie.png" />
          <AvatarFallback>
            <Skeleton className="size-20 md:size-44 rounded-full bg-purple-900 opacity-30" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start items-start gap-1 ">
          <div className="text-lg md:text-2xl font-bold ">
            Bobby Christopher
          </div>

          <div className="flex flex-row justify-center items-center gap-1 text-sm md:text-md font-light text-primary">
            <BackpackIcon className="text-primary" />
            <div>Senior Software Engineer</div>
          </div>

          <div className="flex flex-row justify-center items-center gap-1 text-sm md:text-md font-light text-primary">
            <HomeIcon className="text-primary" />
            <div>Burlington, VT</div>
          </div>
        </div>
      </div>

      <p className="text-xs max-w-96 md:max-w-52 font-light text-wrap">
        👋 I am a passionate software engineer and aspiring entrepreneur.
        Interested in working together?{" "}
        <a
          className="text-xs hover:underline font-semibold"
          href="mailto:b.christopher.3rd@gmail.com"
        >
          Shoot me a message
        </a>
        ! 💌
      </p>
      {/* <div className="flex w-full flex-row gap-5 justify-center items-center">
        <GitHubLogoIcon className="size-8 text-primary hover:text-primary/80" />
        <LinkedInLogoIcon className="size-8 text-primary hover:text-primary/80" />
      </div> */}
    </div>
  );
};

const ProjectSection = () => {
  const [tag, setTag] = useState<string>();
  const { data, loading } = useQuery<{ experiences: Experience[] }>(
    tag ? EXPERIENCES_FILTERED : EXPERIENCES_ALL,
    { variables: { tag } },
  );
  return (
    <div className="p-6 flex flex-col gap-5 h-fit justify-center items-center w-full md:w-2/3">
      <Tabs
        defaultValue="all"
        className="w-[400px] flex justify-center items-center"
      >
        <TabsList className="border-2 border-primary">
          <TabsTrigger
            className="w-12"
            onClick={() => setTag(undefined)}
            value="all"
          >
            All
          </TabsTrigger>
          {/* <TabsTrigger onClick={() => setTag("active")} value="active">
            Active
          </TabsTrigger> */}
          <TabsTrigger
            className="w-16"
            onClick={() => setTag("job")}
            value="job"
          >
            Jobs
          </TabsTrigger>
          <TabsTrigger
            className="w-16"
            onClick={() => setTag("project")}
            value="project"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            className="w-16"
            onClick={() => setTag("game")}
            value="game"
          >
            Games
          </TabsTrigger>
          <TabsTrigger
            className="w-16"
            onClick={() => setTag("contract")}
            value="contract"
          >
            Contracts
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-1 w-full gap-5 flex-col overflow-y md:grid md:grid-cols-2">
        {data?.experiences?.map((e) => {
          return <ExperienceCard experience={e} />;
        })}
      </div>
    </div>
  );
};

export default function Page() {
  const httpLink = new HttpLink({
    uri: "https://api-ca-central-1.graphcms.com/v2/ckoblbf13q0sd01yz5ci89etl/master",
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });

  return (
    <main className="flex flex-col md:flex-row justify-around">
      <ApolloProvider client={client}>
        <AboutSection />
        <ProjectSection />
      </ApolloProvider>
    </main>
  );
}
