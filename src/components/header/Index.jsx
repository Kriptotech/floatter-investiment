import { DesktopHeader } from "./desktop/Index";
import { MobileHeader } from "./mobile/Index";

export function Header() {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    );
}
