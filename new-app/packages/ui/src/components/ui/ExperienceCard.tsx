"use client";
import { useState } from "react";
import { Card } from "./card";
import { Badge } from "./badge";
import { NewFlair } from "./Flair";
import { Skeleton } from "./skeleton";
import ProjectLineChart from "./ProjectLineChart";

export interface Experience {
  tag?: string;
  icon: {
    url: string;
  };
  name: string;
  description: string;
  link?: string;
  show?: boolean;
  active: boolean;
  position?: number;
}

interface ExperienceCardProps {
  experience: Experience;
  chart?: boolean;
}

export const ExperienceCard = ({
  experience,
  chart = false,
}: ExperienceCardProps) => {
  return (
    <a target="_blank" href={experience?.link}>
      <Card className="group flex flex-col flex-1 p-3 gap-2 overflow-hidden h-24 md:h-28 hover:scale-[1.02] transform transition duration-y">
        {experience.name === "Controller Lab" ? <ProjectLineChart /> : <> </>}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-start items-center gap-2">
            <img
              className="w-7 h-7 group-hover:rotate-12 transform transition duration-y"
              src={experience?.icon?.url}
            />
            <div>{experience?.name}</div>
            {experience.active ? <NewFlair /> : <></>}
          </div>
          <Badge className="text-[8px] ">{experience?.tag}</Badge>
        </div>
        <div className="text-xs font-extralight px-2 text-gray-600">
          {experience?.description}
        </div>
      </Card>
    </a>
  );
};

export const ExperienceCardLoading = () => {
  return (
    <Card className="group flex flex-col flex-1 p-3 gap-2 overflow-hidden h-24 md:h-28 hover:scale-[1.02] transform transition duration-y">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-start items-center gap-2">
          <Skeleton className="rounded-full w-10 h-10" />

          <div>
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </div>
      <div className="text-xs font-extralight px-2 text-gray-600 flex gap-2 flex-col">
        <Skeleton className="h-2 w-full" />
        <Skeleton className="h-2 w-full" />
      </div>
    </Card>
  );
};
