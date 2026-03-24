import React from 'react';
import DocCard from './DocCard';
import { handleDownloadPDF } from '../../../utils/pdfUtils';

const CertificatesSection = ({ documents, onPreview }) => (
    <section id="docs" className="section bg-light" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
            <div className="section-head text-center mb-5">
                <h2 className="mb-4">Лицензии и сертификаты</h2>
                <p className="subtitle mx-auto" style={{ maxWidth: '800px' }}>Все процессы сертифицированы, продукция соответствует государственным стандартам качества ГОСТ и ТР ТС. Мы регулярно проходим проверки контролирующих органов.</p>
            </div>

            <div className="docs-grid-rich">
                {documents.map((doc, idx) => (
                    <DocCard
                        key={doc.id}
                        img={doc.img}
                        title={doc.title}
                        subtitle={doc.subtitle}
                        description={doc.description}
                        onPreview={onPreview}
                        onDownload={() => handleDownloadPDF(doc.img, doc.fileName)}
                        delay={idx * 0.05}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default CertificatesSection;
