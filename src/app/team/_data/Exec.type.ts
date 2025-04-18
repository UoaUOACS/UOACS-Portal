export type ExecType = {
  name: string;
  team:
    | "Tech"
    | "Event"
    | "Design"
    | "Marketing"
    | "Founding President"
    | "Vice President"
    | "Senior Advisor"
    | "Treasurer";
  image: string;
  social: {
    linkedIn: string;
  };
  director?: boolean;
};
