import parse, { Element, attributesToProps, domToReact } from 'html-react-parser';
import type { HTMLReactParserOptions, DOMNode } from 'html-react-parser';
import { portfolioHtml } from './content';
import { TechStack } from '../components/tech-stack/TechStack';
import { AboutMe } from '../components/about/AboutMe';
import { Experience } from '../components/experience/Experience';
import { RealTimeLocation } from '../components/hero/RealTimeLocation';
import { FramerDOMController } from '../components/animations/FramerDOMController';
import { ScrollEffectsWrapper } from '../components/animations/ScrollEffectsWrapper';
import { Navbar } from '../components/nav/Navbar';
import React from 'react';

export default function PortfolioPage() {
  const parseOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs?.['data-id'] === '01dbacf') {
        return (
          <div id="stack" style={{ width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
            <TechStack />
          </div>
        );
      }

      if (domNode instanceof Element && domNode.attribs?.['data-id'] === '74d565c') {
        return <AboutMe />;
      }

      // Replace the hardcoded time with a real-time clock component
      if (domNode instanceof Element && domNode.attribs?.['data-id'] === '1eb34d8') {
        return <RealTimeLocation />;
      }

      // Replace the first Education container with our new Experience component
      if (domNode instanceof Element && domNode.attribs?.['data-id'] === '024b67c') {
        return (
          <div id="experience">
            <Experience />
          </div>
        );
      }

      // Remove the rest of the old Education, Work Experience, and Certificates containers
      if (domNode instanceof Element && [
        '7ffe1f5',
        'dc461ef',
        '4c3eccd',
        '74dec83',
        'e2cd1c6',
        'beae779',
        '090fbce',
        '12b8bab'
      ].includes(domNode.attribs?.['data-id'] ?? '')) {
        return <div style={{ display: 'none' }} key={domNode.attribs?.['data-id']} />;
      }

      if (domNode instanceof Element && ['button', 'input', 'select', 'textarea', 'form'].includes(domNode.name)) {
        const props = attributesToProps(domNode.attribs);
        props.suppressHydrationWarning = true;

        // Fix for React form field "value without onChange" error when parsing static HTML
        if (props.value !== undefined && props.onChange === undefined) {
          props.defaultValue = props.value;
          delete props.value;
        }
        if (props.checked !== undefined && props.onChange === undefined) {
          props.defaultChecked = props.checked;
          delete props.checked;
        }
        
        // Void elements like 'input' cannot have children in React
        const isVoidElement = domNode.name === 'input';
        
        if (isVoidElement) {
          return React.createElement(domNode.name, props);
        }

        return React.createElement(
          domNode.name,
          props,
          domToReact(domNode.children as DOMNode[], parseOptions)
        );
      }
    }
  };

  const content = parse(portfolioHtml, parseOptions);

  return (
    <div id="hero" className="portfolio-wrapper" suppressHydrationWarning style={{ overflowX: 'clip', width: '100%' }}>
      <Navbar />
      <FramerDOMController />
      <ScrollEffectsWrapper />
      {content}
    </div>
  );
}