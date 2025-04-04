import { PageProps } from "$fresh/server.ts";

export default function City(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
