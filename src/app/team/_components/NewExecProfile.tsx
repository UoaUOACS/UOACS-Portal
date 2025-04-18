import Image from "next/image";
import Link from "next/link";

import { ExecType } from "../_data/Exec.type";

export const ExecProfile = (props: ExecType) => {
  return (
    <div className="relative flex flex-col">
      <Link
        className="relative size-60 overflow-hidden rounded bg-gray-200"
        href={props.social.linkedIn}
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
      <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 translate-y-1/2 flex-col gap-1 bg-foreground p-2 px-4 text-xl text-background">
        <p className="truncate">{props.name}</p>
        <p>
          {props.team} {props.director && "Director"}
        </p>
      </div>
    </div>
  );
};
