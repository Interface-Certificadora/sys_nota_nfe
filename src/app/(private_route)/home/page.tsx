import Home from "@/app/components/page/home";
import AuthService from "@/modules/auth/services/auth-service";
import { ApiResponse } from "@/types/apiResponse.type";
import { JWTPayload } from "jose";
import CaptureIPClient from "./CaptureIPClient";

export default async function Page() {
  const session: ApiResponse<JWTPayload> = await AuthService.sessionUser();

  return (
    <>
      <CaptureIPClient />
      <Home card={session.data} />
    </>
  );
}
