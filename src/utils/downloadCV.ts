export const downloadCV = (
  cvPath = '/HARRY_GREENTREE_CV.pdf',
  downloadName = 'HARRY_GREENTREE_CV.pdf'
): void => {
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  link.remove();
};
