import Layout from "@/layout/layout";
import {AppProps} from "next/app";
import Main from "@/app/Main/page";

export default function Home({}: AppProps) {
    return (
        <Layout>
            <Main/>
        </Layout>
    );
}
