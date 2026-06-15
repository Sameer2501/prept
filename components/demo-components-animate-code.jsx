'use client';

import {
  Code,
  CodeBlock,
  CodeHeader,
} from '@/components/animate-ui/components/animate/code';
// import ReactIcon from '@/components/icons/react-icon';
import { File } from 'lucide-react';
import { Code2 } from "lucide-react";


export const CodeDemo = ({
  duration,
  delay,
  writing,
  cursor,
}) => {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="w-full sm:w-110 h-120 border-none"
      code={`'use client';
 
import * as React from 'react';
  
type MyComponentProps = {
  myProps: string;
} & React.ComponentProps<'div'>;
  
function MyComponent(props: MyComponentProps) {
  return (
    <div {...props}>
      <p>My Component</p>
    </div>
  );
}

export { MyComponent, type MyComponentProps };`}
    >
      <CodeHeader icon={Code2} copyButton>
        use.fetch.jsx
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="tsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
};