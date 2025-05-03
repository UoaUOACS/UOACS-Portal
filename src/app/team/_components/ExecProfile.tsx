import Image from "next/image";
import Link from "next/link";

import { ExecType } from "../_data/Exec.type";

export const ExecProfile = (props: ExecType) => {
  return (
    <div className="flex flex-col items-center whitespace-nowrap">
      <Link
        href={props.social.linkedIn}
        className="relative size-24 overflow-hidden rounded-full border-4 bg-white sm:size-32"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          fill
          src={props.image}
          alt={`${props.name} profile`}
          style={{ borderColor: `hsl(var(--${props.team}), 0.5)` }}
        />
      </Link>
      <p className="truncate text-xs sm:text-base">{props.name}</p>
      <p>
        {props.team} {props.director && "Director"}
      </p>
    </div>
  );
};
