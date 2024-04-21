import {AppProps} from "next/app";
import About from "@/components/ui/about/about";

export default function Main() {
    return (
        <div className={"absolute inset-y-0 left-40 right-40 padding-20"}>
            <About/>
        </div>

    );
}