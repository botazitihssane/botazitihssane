import Intro from "@/app/home/intro/intro";
import About from "@/app/home/about/about";
import Projects from "@/app/home/projects/projects";
import Testimonial from "@/app/home/testimonial/testimonial";

export default function Main() {
    return (
        <div className={"absolute inset-0 padding-20 h-max"}>
            <div className="lg:w-2/3 lg:mx-auto">
                <Intro/>
                <About id="about"/>
                <Projects id="projects"/>
                <Testimonial id="testimonial"/>
            </div>
        </div>
    );
}
