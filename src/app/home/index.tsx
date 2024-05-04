import Intro from "@/components/ui/into/intro";
import About from "@/app/home/about/about";
import Projects from "@/app/home/projects/projects";
import Testimonial from "@/app/home/testimonial/testimonial";

export default function Main() {
    return (
        <div className={"absolute inset-y-0 left-40 right-40 padding-20"}>
            <Intro/>
            <About id="about"/>
            <Projects id="projects"/>
            <Testimonial id="testimonial"/>
        </div>
    );
}
