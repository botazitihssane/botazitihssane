const downloadCV = (): void => {
    const url: string = "/resume/CV.pdf";
    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.href = url;
    anchor.download = "CV.pdf";
    anchor.click();
};

export default downloadCV;
