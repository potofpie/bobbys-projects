"use client";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import {
  HomeIcon,
  BackpackIcon,
  ReaderIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
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
import { cn } from "@repo/ui/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";

const EXPERIENCES_ALL = gql`
  {
    experiences(orderBy: date_DESC, where: { AND: { show: true } }) {
      name
      description
      link
      active
      icon {
        url
      }
      tag
    }
  }
`;

const EXPERIENCES_FILTERED = gql`
  query Experiences($tag: ExperienceTag!) {
    experiences(orderBy: date_DESC, where: { AND: { show: true, tag: $tag } }) {
      name
      description
      link
      active
      icon {
        url
      }
      tag
    }
  }
`;

const sortActiveProjectsFirst = (experiences?: Experience[]) => {
  if (!experiences) {
    return [];
  }
  const activeProjects = experiences.filter((experience) => experience.active);
  const inactiveProjects = experiences.filter(
    (experience) => !experience.active,
  );
  return activeProjects.concat(inactiveProjects);
};

const LinksSection = ({ className }: { className: string }) => {
  return (
    <div
      className={cn([
        "flex w-full flex-row gap-5 justify-center items-center",
        className,
      ])}
    >
      <a target="_blank" href="https://github.com/potofpie">
        <GitHubLogoIcon className="size-8 text-primary hover:text-primary/80" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/bobbychristopher/">
        <LinkedInLogoIcon className="size-8 text-primary hover:text-primary/80" />
      </a>

      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger>
            <a
              target="_blank"
              href="https://nasmi3udsrfb4kop.public.blob.vercel-storage.com/resume.pdf"
            >
              <ReaderIcon className="size-8 text-primary hover:text-primary/80" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Resumè</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

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
      <LinksSection className="collapse h-0  md:h-fit md:visible mt-2 " />
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
      <div className="flex flex-1 w-full gap-5 flex-col overflow-y lg:grid lg:grid-cols-2">
        {sortActiveProjectsFirst(data?.experiences).map((e) => {
          return <ExperienceCard experience={e} />;
        })}
      </div>

      <div className="flex w-full items-center justify-center text-xs p-4 flex-col gap-4">
        <p className="font-thin">
          Built with 💊s by Bobby Christopher © 2024{" "}
        </p>
        <LinksSection className="md:invisible md:h-0 " />
        <div></div>
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
    <main className="flex flex-col md:flex-row justify-around max-w-[1500px]">
      <ApolloProvider client={client}>
        <AboutSection />
        <ProjectSection />
      </ApolloProvider>
    </main>
  );
}
