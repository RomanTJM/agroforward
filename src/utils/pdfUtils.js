import { jsPDF } from 'jspdf';

export const handleDownloadPDF = (imgUrl, fileName) => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => {
        const imgWidth = 190;
        const imgHeight = (img.height * imgWidth) / img.width;

        const finalHeight = imgHeight > 270 ? 270 : imgHeight;

        doc.addImage(img, 'PNG', 10, 10, imgWidth, finalHeight);
        doc.save(`${fileName}.pdf`);
    };
};
