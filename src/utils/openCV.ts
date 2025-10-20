export const openCV = (): void => {
  const cvPath = "/HARRY_GREENTREE_CV.pdf";
  const newWin = window.open(cvPath, "_blank", "noopener,noreferrer");
  if (!newWin) {
    const a = document.createElement("a");
    a.href = cvPath;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
};
