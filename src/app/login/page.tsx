import { Container } from "@/shared/ui/Container";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export const metadata: Metadata = {
  title: "Авторизация",
};

export default async function LoginPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const next = sp?.next ?? "/create-post";
  const error = sp?.error === "1";

  async function loginAction(formData: FormData) {
    "use server";

    const login = String(formData.get("login") ?? "");
    const password = String(formData.get("password") ?? "");

    if (
      login === process.env.ADMIN_LOGIN &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const { cookies } = await import("next/headers");

      const cookieStore = await cookies(); // ← ВАЖНО

      cookieStore.set(
        process.env.ADMIN_COOKIE_NAME!,
        process.env.ADMIN_COOKIE_VALUE!,
        {
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.NODE_ENV === "production",
          path: "/",
        },
      );

      redirect(next);
    }

    redirect(`/login?next=${encodeURIComponent(next)}&error=1`);
  }

  return (
    <section className="pt-10 pb-20 px-4 mt-(--header-height) grow">
      <Container>
        <form
          action={loginAction}
          className="w-full max-w-sm space-y-3 border rounded-xl p-4"
        >
          <h1 className="text-xl font-semibold">Вход</h1>

          {error && (
            <div className="text-sm text-red-600">
              Неверный логин или пароль
            </div>
          )}

          <input
            name="login"
            placeholder="Логин"
            className="w-full border rounded-lg px-3 py-2"
            autoComplete="username"
          />
          <input
            name="password"
            placeholder="Пароль"
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            autoComplete="current-password"
          />

          <button className="w-full rounded-lg px-3 py-2 border">Войти</button>
        </form>
      </Container>
    </section>
  );
}
