const downloadCV = (): void => {
    const url: string = "/resume/Botazit_ihssane_CV.pdf";
    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.href = url;
    anchor.download = "Botazit_ihssane_CV.pdf";
    anchor.click();
};

export default downloadCV;
