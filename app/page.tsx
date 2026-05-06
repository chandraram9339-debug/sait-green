import { redirect } from "next/navigation";

/** Fallback when middleware does not run (some proxies); primary locale routing is still `/[locale]`. */
export default function RootRedirectPage() {
  redirect("/en");
}
