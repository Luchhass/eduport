import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  // cookies() fonksiyonunu await ile çağırmamız gerekiyor
  const cookieStore = await cookies();
  const roleCookie = cookieStore.get("app_user_role");
  const role = roleCookie?.value;

  // 1. Eğer giriş yapmamışsa (cookie yoksa) login'e at
  if (!role) {
    redirect("/login");
  }

  // 2. Role göre yönlendir
  if (role === "student") {
    redirect("/dashboard/student");
  } else if (role === "educator") {
    redirect("/dashboard/educator");
  } else if (role === "institution") {
    redirect("/dashboard/institution");
  }

  // 3. Hiçbir durum eşleşmezse güvenli olarak login'e at
  redirect("/login");
}
