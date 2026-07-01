'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const EXPERIENCE_DATA = [
  {
    year: '2026 – Now',
    title: 'RBIM Data Encoder',
    organization: 'LGU',
    type: 'Work',
    description: 'Data encoding and management.'
  },
  {
    year: '2026 – Now',
    title: 'OJT Intern',
    organization: 'Mindanao International Container Terminal Services Inc.',
    type: 'Work',
    description: 'On-the-job training in operations.'
  },
  {
    year: '2020 – Now',
    title: 'BS Computer Science',
    organization: 'USTP-CDO',
    type: 'Education',
    description: 'Pursuing a degree in Computer Science with a focus on software engineering and algorithms.'
  },
  {
    year: '2026',
    title: 'Certificate of Completion',
    organization: 'RBIM',
    type: 'Certificate',
    description: 'Data encoding and management certification.'
  },
  {
    year: '2026',
    title: 'Certificate of Completion',
    organization: 'Mindanao International Container Terminal Services Inc. (MICTSI)',
    type: 'Certificate',
    description: 'On-the-job training certification.'
  }
];

export function Experience() {
  const workData = EXPERIENCE_DATA.filter(item => item.type === 'Work');
  const eduData = EXPERIENCE_DATA.filter(item => item.type === 'Education');
  const certData = EXPERIENCE_DATA.filter(item => item.type === 'Certificate');

  const renderGrid = (data: typeof EXPERIENCE_DATA) => (
    <motion.div 
      className="exp-grid"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {data.map((item, i) => (
        <motion.div 
          className="exp-card" 
          key={i}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
          }}
          whileHover={{ borderColor: 'rgba(255,255,255,0.3)', y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
        >
          <div className="exp-card-header">
            <span className="exp-year">{item.year}</span>
          </div>
          <div className="exp-title">{item.title}</div>
          <div className="exp-org">{item.organization}</div>
        </motion.div>
      ))}
    </motion.div>
  );

  const ScrollHeading = ({ title }: { title: string }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start center', 'end center']
    });
    
    // Add a smooth spring to the scroll progress so it doesn't feel jerky
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
      <motion.h3 
        ref={ref}
        className="exp-sub-heading"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative' }}
      >
        <motion.div
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', backgroundColor: '#e0553c', transformOrigin: 'top', scaleY }}
        />
        {title}
      </motion.h3>
    );
  };

  const renderHeading = (title: string) => <ScrollHeading title={title} />;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        #experience-section {
          all: initial;
          display: block !important;
          width: 100% !important;
          box-sizing: border-box !important;
          margin-top: -120px !important;
          padding: 40px 24px !important;
          background: transparent !important;
          font-family: 'Inter', sans-serif !important;
        }

        .exp-main-heading {
          font-size: 52px !important;
          font-weight: 500 !important;
          letter-spacing: -0.03em !important;
          color: #f5f5f5 !important;
          margin: 0 !important;
          margin-bottom: 20px !important;
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .exp-main-heading.not-yet {
          opacity: 0;
          transform: translateX(-30px);
        }
        .exp-main-heading span {
          color: #e0553c !important;
        }

        .exp-sub-heading {
          font-size: 14px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          color: #e0553c !important;
          margin-top: 40px !important;
          margin-bottom: 20px !important;
          border-bottom: 1px solid rgba(255,255,255,0.05) !important;
          padding-bottom: 12px !important;
          padding-left: 12px !important;
        }

        .exp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
          #experience-section {
            margin-top: -80px !important;
            padding: 32px 16px !important;
          }
        }

        .exp-card {
          border: 1px solid rgba(255,255,255,0.10);
          background: transparent;
          padding: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .exp-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #e0553c, #e0553c00);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .exp-card:hover::after {
          width: 100%;
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .exp-year {
          font-size: 13px;
          color: #525252;
          font-family: "Spline Sans Mono", monospace, sans-serif;
        }

        .exp-title {
          font-size: 20px;
          font-weight: 500;
          color: #f5f5f5;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .exp-org {
          font-size: 14px;
          color: #A1A1AA;
          line-height: 1.6;
        }
      `}} />

      <div id="experience-section">
        <motion.h2 
          className="exp-main-heading"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Experience<span>.</span>
        </motion.h2>
        
        {renderHeading("Work")}
        {renderGrid(workData)}

        {renderHeading("Education")}
        {renderGrid(eduData)}

        {renderHeading("Certificates")}
        {renderGrid(certData)}
      </div>
    </>
  );
}
