import { PageProps } from "$fresh/server.ts";

export default function Country(props: PageProps) {
  return <div>Pais: {props.params.name}</div>;
}
