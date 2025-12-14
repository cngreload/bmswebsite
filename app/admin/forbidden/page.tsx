// app/admin/forbidden/page.tsx
import Link from "next/link";

export default function AdminForbiddenPage ()
{
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="max-w-xl w-full rounded-2xl border bg-white p-6">
                <h1 className="text-xl font-semibold mb-2">دسترسی غیرمجاز</h1>
                <p className="text-sm text-slate-600 mb-4">
                    این حساب اجازه ورود به پنل ادمین را ندارد.
                </p>
                <div className="flex gap-3">
                    <Link className="rounded-xl border px-4 py-2 text-sm" href="/admin/sign-in">
                        ورود با حساب ادمین
                    </Link>
                    <Link className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm" href="/">
                        برگشت به سایت
                    </Link>
                </div>
            </div>
        </div>
    );
}
