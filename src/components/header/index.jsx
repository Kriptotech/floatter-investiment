import { DesktopHeader } from "./desktop";
import { MobileHeader } from "./mobile";

export function Header() {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    );
}
