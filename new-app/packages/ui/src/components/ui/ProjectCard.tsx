"use client";
import { useState } from "react";
import { Card } from "./card";
import { Badge } from "./badge";
import { NewFlair } from "./Flair";

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
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <a target="_blank" href={experience?.link}>
      <Card className="group flex flex-col flex-1 p-3 gap-2 overflow-hidden h-24 md:h-28 hover:scale-[1.02] transform transition duration-y">
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
