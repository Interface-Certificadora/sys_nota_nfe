import Home from "@/app/components/page/home";
import AuthService from "@/modules/auth/services/auth-service";
import { ApiResponse } from "@/types/apiResponse.type";
import { JWTPayload } from "jose";

export default async function Page() {
  const session: ApiResponse<JWTPayload> = await AuthService.sessionUser();

  return (
    <>
      <Home card={session.data} />
    </>
  );
}
