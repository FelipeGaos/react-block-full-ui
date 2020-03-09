import CloudDownload from '@material-ui/icons/CloudDownload';
import React from 'react';
import { renderToString } from 'react-dom/server';
import jsPDF from 'jspdf';
const renderCloudDownload = () => (<CloudDownload/>);

const printPDF = (event) => {
    const source = renderToString(event.textHTML);
    var pdf = new jsPDF('p', 'pt', 'letter');
    const margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522,
    };

    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
        },

        function (dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins);
};

const alertTwo = (event) => {
    console.log('func2');
};
export const CustomisationButtons  = [{
                    icon: renderCloudDownload,
                    functionButton: [printPDF, alertTwo],
                    description: 'imprimir',
                }];
