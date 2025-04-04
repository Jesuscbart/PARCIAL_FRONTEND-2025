import { FreshContext, Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import axios, { AxiosHeaders } from "axios";
import { denoPlugins } from "$fresh/src/build/deps.ts";
import { TelephoneResponse, Telefono } from "../types.ts";

// <form method="get" action="/telephone">

// const headers = new AxiosHeaders({
//   'X-Api-Key': Deno.env.get("API_KEY"),
// });


// export const handler: Handlers<Telefono> = {


//   async GET(req: Request, ctx: FreshContext<TelephoneResponse>) {
//     const headers = {'X-Api-Key': Deno.env.get("API_KEY")}
//     const response = await axios.get(`https://api.api-ninjas.com/v1/validatephone?number=${telefono}`, headers);

//     return ctx.render(ctx.params);
//   },
// };

export default function Page() {
  return (
    <>
      <form method="get">
        <input type="text" name="telefono" value="" placeholder="Teléfono" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}