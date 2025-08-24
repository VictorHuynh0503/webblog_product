import React from 'react';
import MDEditor from '@uiw/react-md-editor';

const GuidelinesPage: React.FC = () => {
  const markdownGuide = `# Writing Guidelines

## Creating High-Quality Technical Content

Welcome to our writing guide. This document will help you create engaging, informative technical content that resonates with our community.

### Article Structure

1. **Title**
   - Clear and descriptive
   - Indicates the main topic and value proposition
   - Uses relevant keywords

2. **Introduction**
   - Hook the reader with a compelling opening
   - State the problem or topic clearly
   - Preview what readers will learn

3. **Main Content**
   - Organize with clear headings
   - Use code examples where relevant
   - Include diagrams or images when helpful
   - Break complex topics into digestible sections

4. **Conclusion**
   - Summarize key points
   - Provide next steps or further reading
   - Encourage discussion

### Writing Style

- **Be Clear and Concise**
  - Use simple, direct language
  - Avoid jargon unless necessary
  - Define technical terms when first used

- **Show, Don't Tell**
  - Include practical examples
  - Provide working code snippets
  - Use real-world scenarios

- **Engage Your Readers**
  - Ask questions
  - Use analogies
  - Address common pain points

### Code Examples

\`\`\`typescript
// Bad Example
function x(a: any) {
  return a + 1;
}

// Good Example
function incrementCounter(currentValue: number): number {
  return currentValue + 1;
}
\`\`\`

### Formatting Guidelines

1. **Headers**
   - Use meaningful section headers
   - Maintain proper hierarchy (H1 → H2 → H3)
   - Keep headers concise

2. **Lists**
   - Use bullet points for related items
   - Use numbered lists for sequences
   - Keep list items parallel

3. **Code Blocks**
   - Use appropriate syntax highlighting
   - Include comments for complex code
   - Explain key concepts before and after code blocks

### Best Practices

1. **Research Thoroughly**
   - Verify facts and claims
   - Link to authoritative sources
   - Credit original authors

2. **Edit Carefully**
   - Review for technical accuracy
   - Check grammar and spelling
   - Ensure logical flow

3. **Engage with Feedback**
   - Respond to comments
   - Update content when needed
   - Address technical questions

### SEO Considerations

- Use descriptive titles
- Include relevant keywords naturally
- Structure content with proper headings
- Add meta descriptions
- Use alt text for images

### Example Article Template

\`\`\`markdown
# [Topic]: A Complete Guide

## Introduction
Brief overview and why it matters

## Prerequisites
What readers need to know

## Main Content
### Section 1
Key concepts and examples

### Section 2
Implementation details

### Section 3
Best practices and tips

## Common Pitfalls
What to watch out for

## Conclusion
Summary and next steps

## Additional Resources
Links and references
\`\`\`

### Ready to Write?

1. Choose your topic
2. Create an outline
3. Write your first draft
4. Review and edit
5. Submit for publication

Remember: Quality over quantity. Take the time to create valuable, well-researched content that helps our readers solve real problems.`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <MDEditor.Markdown source={markdownGuide} />
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;
