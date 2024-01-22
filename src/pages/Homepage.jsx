import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { AboutUs } from "../features/homepage/components/about_us";
import { FAQ } from "../features/homepage/components/FAQ";
import { Hero } from "../features/homepage/components/hero";
import { OtherServices } from "../features/homepage/components/other_services";
import { OurMeetings } from "../features/homepage/components/our_meetings";
import { OurServices } from "../features/homepage/components/our_services";
import { SecondRow } from "../features/homepage/components/second_row";
import { WhatsAppLogo } from "../features/homepage/components/whatsapp_logo";

export function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <AboutUs />
            <SecondRow />
            <OurServices />
            <FAQ />
            <OtherServices />
            <OurMeetings />
            <WhatsAppLogo />
            <Footer />
        </div>
    );
}
