import Link from "next/link";

import { ExecType } from "../_data/Exec.type";

export const ExecProfile = (props: ExecType) => {
  return (
    <div className="flex w-32 flex-col items-center whitespace-nowrap">
      <Link href={props.social.linkedIn} target="_blank" rel="noopener noreferrer">
        <img
          src={props.image}
          alt={`${props.name} profile`}
          className="size-24 rounded-full border-4 bg-white sm:size-32"
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
