export type FlexBoxType = {
  type: "start" | "center" | string,
  direction: "row" | "column" | string,
  children: React.ReactNode;
}