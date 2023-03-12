import { describe, expect, it } from 'vitest';

import OVH, { OVHBase, MeHandler } from '..';

describe('lib', () => {
  it('should be defined', async () => {
    expect(OVH).toBeDefined();
  });

  it('should allow to construct custom classes', () => {
    class MyOVH extends OVHBase {
      me = new MeHandler(this);
    }

    const myOVH = new MyOVH('foo', 'bar', 'baz');

    expect(myOVH).toBeDefined();
    expect(myOVH.me).toBeDefined();
    expect(myOVH.me.get).toBeDefined();
  });
});
