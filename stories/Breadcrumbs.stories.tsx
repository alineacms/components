import {Breadcrumbs} from '../src/Breadcrumbs';
import {Breadcrumb, Link} from 'react-aria-components';

export const Example = (args: any) => (
  <Breadcrumbs {...args}>
    <Breadcrumb>
      <Link href="/">Home</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link href="/react-aria/">React Aria</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link>Breadcrumbs</Link>
    </Breadcrumb>
  </Breadcrumbs>
);
