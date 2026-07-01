const fs = require('fs');
let html = fs.readFileSync('src/app/content.ts', 'utf8');

const expHeading = 'Experience, Education &amp; Certificates<span';
const expHeadingIdx = html.indexOf(expHeading);
if (expHeadingIdx !== -1) {
    // Find the timeline widget right after the heading
    const timelineWidgetStart = html.indexOf('data-widget_type=wpr-posts-timeline.default', expHeadingIdx);
    if (timelineWidgetStart !== -1) {
        const widgetContainerStart = html.lastIndexOf('<div class="elementor-element', timelineWidgetStart);
        
        // Find where this widget ends.
        // Let's find the next major elementor-element that is outside this widget.
        // Alternatively, since the file is large and nested divs are tricky, we can just replace the entire `div.elementor-widget-container` content!
        const widgetInnerStart = html.indexOf('<div class=elementor-widget-container>', widgetContainerStart) + '<div class=elementor-widget-container>'.length;
        
        // Find the next widget by looking for `<div class="elementor-element elementor-element-` after the timeline
        let nextWidgetStart = html.indexOf('<div class="elementor-element elementor-element-', widgetInnerStart + 100);
        // Wait, a better way is to just replace the inner contents of the widget container so we don't break the parent div tags!
        // The inner contents start at widgetInnerStart. The widget ends at some closing div.
        // Actually, replacing the whole widget block is safest if we can find the end.
        // Let's just find the next e-con e-parent, which is the start of the next slide!
        // No wait, this is the Experience slide. The widget is the last thing in the slide.
        const nextSlideStart = html.indexOf('e-con e-parent', widgetInnerStart);
        let widgetEnd = html.lastIndexOf('</div>', nextSlideStart);
        // Since we don't know the exact div depth, let's just use string replacement on the widget's container div!
        const widgetOuterEnd = html.indexOf('<div class="elementor-element', widgetInnerStart);
        
        const customLayout = `
<div style="display: flex; flex-direction: row; gap: 40px; justify-content: space-between; flex-wrap: wrap; width: 100%; margin-top: 40px;">
  
  <div style="flex: 1; min-width: 250px; background: #111; padding: 30px; border-radius: 10px; border-left: 3px solid #DE5E91; color: white;">
    <h3 style="color: #DE5E91; font-size: 24px; margin-bottom: 20px;">Experience</h3>
    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 18px; margin-bottom: 5px;">Software Engineer Intern</h4>
      <p style="color: #aaa; font-size: 14px;">Tech Company Inc. | 2024 - Present</p>
    </div>
    <div>
      <h4 style="font-size: 18px; margin-bottom: 5px;">Freelance Developer</h4>
      <p style="color: #aaa; font-size: 14px;">Self-Employed | 2022 - 2024</p>
    </div>
  </div>

  <div style="flex: 1; min-width: 250px; background: #111; padding: 30px; border-radius: 10px; border-left: 3px solid #DE5E91; color: white;">
    <h3 style="color: #DE5E91; font-size: 24px; margin-bottom: 20px;">Education</h3>
    <div>
      <h4 style="font-size: 18px; margin-bottom: 5px;">B.S. Computer Science</h4>
      <p style="color: #aaa; font-size: 14px;">University Name | 2022 - 2026</p>
      <p style="color: #888; font-size: 14px; margin-top: 10px;">Relevant Coursework: Data Structures, Algorithms, Web Development, Databases.</p>
    </div>
  </div>

  <div style="flex: 1; min-width: 250px; background: #111; padding: 30px; border-radius: 10px; border-left: 3px solid #DE5E91; color: white;">
    <h3 style="color: #DE5E91; font-size: 24px; margin-bottom: 20px;">Certificates</h3>
    <ul style="list-style-type: none; padding: 0;">
      <li style="margin-bottom: 15px;">
        <h4 style="font-size: 18px; margin-bottom: 5px;">AWS Cloud Practitioner</h4>
        <p style="color: #aaa; font-size: 14px;">Amazon Web Services</p>
      </li>
      <li>
        <h4 style="font-size: 18px; margin-bottom: 5px;">Meta Front-End Developer</h4>
        <p style="color: #aaa; font-size: 14px;">Coursera</p>
      </li>
    </ul>
  </div>

</div>
</div></div></div></div>`;

        // Replace the widget container
        html = html.substring(0, widgetContainerStart) + customLayout + html.substring(widgetOuterEnd > widgetInnerStart ? widgetOuterEnd : widgetInnerStart + 5000);
        console.log('Replaced timeline widget with custom layout.');
    }
}

fs.writeFileSync('src/app/content.ts', html);
console.log('Done!');
