const mapping: { [key:string]:string } = {
  "http://data.toevla.org/ef9a1497-6e8d-461e-8671-75c5ee450bd0": "tree-components/accessibility"
};

export default function customComponentMapping(uri: string | null | undefined) : string | null {
  if( uri && mapping[uri] )
    return  mapping[uri];
  return null;
}
