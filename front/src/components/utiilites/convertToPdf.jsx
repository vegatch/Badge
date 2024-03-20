import React from "react";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'

const ConvertToPdf = ({elementId, filename}) =>{
    const downloadBadge = () => {
        const selection = document.getElementById(elementId);
        html2canvas(selection)
            .then((canvas) =>{
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'pt', 'letter')
                pdf.addImage(imgData, 'JPEG', 10, 50);
                pdf.save(`${filename}`)
            })
    }

    return(
        <div>
            <button onClick={downloadBadge}>download your badge</button>
        </div>
    )
}

export default ConvertToPdf;