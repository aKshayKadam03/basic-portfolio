import React from "react";
import Formatter from "../../utilities/formatter";

// eslint-disable-next-line react/prop-types
function Card({ title, id, description, features, techStack, github, blog }) {
  console.log(title, "project");
  return (
    <div className="flex-1 min-w-[300px] max-w-[400px] p-2 flex flex-col justify-between">
      <h2 className="text-gray-200 text-9xl">{Formatter.number(id)}</h2>
      <h4 className="text-green-200 text-2xl mt-4">{title}</h4>
      <p className="mt-2 text-white">{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li className="list-disc text-white ml-4" key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        {techStack.map((tech) => (
          <p key={tech.id} className="my-2 text-gray-800 text-sm px-2 uppercase bg-gray-300 rounded w-fit">
            {tech.title}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-between">
        {github.trim() && (
          <a
            target="_blank"
            rel="noreferrer"
            href={github}
            className="my-2 text-white text-sm p-2 uppercase w-fit border-2 rounded hover:text-red-500 hover:bg-white"
          >
            Github
          </a>
        )}
        {blog.trim() && (
          <a
            target="_blank"
            rel="noreferrer"
            href={blog}
            className="my-2 text-white text-sm p-2 uppercase w-fit border-2 rounded hover:text-red-500 hover:bg-white"
          >
            Blog
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;

scroll; // features,
// github,
// blog,
// teamSize,
// techStack
