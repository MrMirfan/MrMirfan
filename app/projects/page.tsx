"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchGithubProjects } from "../_utils/get_Projects";

export default function Projects() {
  const [projects, setProjects] = useState<object[]>([]);

  useEffect(() => {
    fetchGithubProjects().then((data) => setProjects(data));
  }, []);

  return (
    <div className="mx-5 grid grid-cols-3 gap-4 *:bg-white *:rounded-md *:p-2">
      {projects.map((project) => (
        <a href={project.html_url} key={project.id} className="flex flex-row-reverse justify-between">
          <Image
            src="/images/social/GitHub.svg"
            alt="Github Icon"
            width={25}
            height={25}
          />
          <span>
            {project.name}
          </span>
        </a>
      ))}
    </div>
  );
}
