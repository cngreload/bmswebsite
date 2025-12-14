// app/admin/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function AdminSignInPage ()
{
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <SignIn routing="path" path="/admin/sign-in" />
        </div>
    );
}
