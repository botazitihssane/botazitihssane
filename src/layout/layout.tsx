import React, {PropsWithChildren} from "react";
import {FloatingNavbar} from "@/components/ui/navbar/navbar";
import {BackgroundBeams} from "@/components/ui/background-beams";
import {SideBarLinks} from "@/components/ui/sidebar/side-links";

const Layout = ({children}: PropsWithChildren) => {
    return (
        <div style={{position: 'relative', minHeight: '100vh'}}>
            <BackgroundBeams/>
            <FloatingNavbar/>
            {children}
            <SideBarLinks/>
        </div>
    );
};
export default Layout;
