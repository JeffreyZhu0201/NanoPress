import { redirect } from "next/navigation";

import routerArray from "@/app/router/routerArray"

export default function Index() {
  
  redirect(routerArray[0])

  return (
    <></>
  );
}
