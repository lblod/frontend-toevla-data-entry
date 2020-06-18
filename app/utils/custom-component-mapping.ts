const mapping: { [key:string]:string } = {
  "http://data.toevla.org/ef9a1497-6e8d-461e-8671-75c5ee450bd0": "tree-components/accessibility"
};

export default function customComponentMapping(uri: string | null | undefined) : string | null {
  if( uri && mapping[uri] )
    return  mapping[uri];
  return null;
}

const eMapping: { [key:string]:string } = {
  "http://data.toevla.org/d1fbdb7e-104c-4493-8275-62ef73af8460": "edit-components/wifi-availability"
};

export function editMapping( uri: string | null | undefined ) : string | null {
  if( uri && eMapping[uri] )
    return eMapping[uri];
  return null;
}
