// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user || !user.id) redirect('/auth-callback?origin=dashboard')
  return (
    <div>page</div>
  )
}

export default page;