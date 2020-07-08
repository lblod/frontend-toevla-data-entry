const mapping: { [key:string]:string } = {
  "http://data.toevla.org/ef9a1497-6e8d-461e-8671-75c5ee450bd0": "tree-components/accessibility"
};

export default function customComponentMapping(uri: string | null | undefined) : string | null {
  if( uri && mapping[uri] )
    return  mapping[uri];
  return null;
}

const eMapping: { [key:string]:{component:string, key?:string} } = {
  "https://data.toevla.org/id/concepts/74837ebc-fb5f-4333-81f5-bd92db6861f2": { component: "edit-components/boolean", key: "pointOfInterest.hasClearlyRecognizableBuilding" },
  "https://data.toevla.org/id/concepts/82e3201c-60d4-4eb6-88c1-90bcc5f87910": { component: "edit-components/boolean", key: "pointOfInterest.hasClearlyRecognizableEntrance" },
  "https://data.toevla.org/id/concepts/3c06fec6-3a7c-483d-b53f-e3c0a5caf179": { component: "edit-components/boolean", key: "pointOfInterest.hasVisibleGuidelines" },
  "https://data.toevla.org/id/concepts/dd04f96d-71c9-4686-bb9f-ecf91ff6a67f": { component: "edit-components/boolean", key: "pointOfInterest.hasMarkingsOrContrastsOnGlassDoors" },
  "https://data.toevla.org/id/concepts/3aa2c3d0-6635-40ae-bfd5-ad15b6553096": { component: "edit-components/boolean", key: "pointOfInterest.extraAttentionGivenToAcoustics" },
  "https://data.toevla.org/id/concepts/ac946973-bfa8-446a-8066-05ee7185ebfb": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasMannedDesk" },
  "https://data.toevla.org/id/concepts/f0abf682-daae-4b49-bfa1-0a63da8b680b": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasTeleloopAtCounter" },
  "https://data.toevla.org/id/concepts/994e6c27-2449-4363-aa7e-cc6e899e4f55": { component: "edit-components/boolean", key: "pointOfInterest.hasAlternativeEntranceForWheelchair" },
  "https://data.toevla.org/id/concepts/4db32cec-4315-4ce1-8c2f-c752652a7f40": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.highestThreshold" },
  "https://data.toevla.org/id/concepts/0c43ed99-f7bb-4654-b1e0-a93a6d3af26f": { component: "edit-components/count", key: "pointOfInterest.entrance.amountOfStairs" },
  "https://data.toevla.org/id/concepts/6ce49390-b3d5-4b8e-9c56-d9fc193823a2": { component: "edit-components/count", key: "pointOfInterest.entrance.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/e431f79f-21f9-4b1a-95a0-6200a743fea7": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasEntranceGutters" },
  "https://data.toevla.org/id/concepts/6c49fb53-908d-4344-afe7-abaf86d3e461": { component: "edit-components/boolean", key: "pointOfInterest.entrance.hasRevolvingDoor" },
  "https://data.toevla.org/id/concepts/25e9674f-2222-4377-b115-9b4c25b67f67": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.doorWidth" },
  "https://data.toevla.org/id/concepts/10764c3c-4142-4c6c-8c75-e3723c6fae23": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.hasEntranceCheck" },
  "https://data.toevla.org/id/concepts/8a7b8177-59a8-417d-8dee-e5dcb3fedbf8": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.turningRadiusAtDoor" },
  "https://data.toevla.org/id/concepts/bba57566-133e-49e6-a151-303ae5f0ece8": { component: "edit-components/boolean", key: "pointOfInterest.entrance.forceForOpeningDoor" },
  "https://data.toevla.org/id/concepts/c0a131bb-78a4-4b16-a2e9-f2fb252fc1c9": { component: "edit-components/centimeters", key: "pointOfInterest.entrance.hasLoweredCounter" },

  // "http://data.toevla.org/d1fbdb7e-104c-4493-8275-62ef73af8460": { component: "edit-components/wifi-availability", key: "pointOfInterest.wifiAlwaysAvailable" },
  // "http://data.toevla.org/77253484-8a8d-4662-b0c9-b533ba192358": { component: "edit-components/boolean", key: "pointOfInterest.publicTransportGuidanceAvailable" },
  // "http://data.toevla.org/d1fbdb7e-104c-4493-8275-62ef73af8460": { component: "edit-components/boolean", key: "pointOfInterest.wifiAlwaysAvailable" },
  // "http://data.toevla.org/ff67e72c-0b06-4b92-884d-47665c3a443e": { component: "edit-components/boolean", key: "pointOfInterest.websiteHasAccessibleContrast" },
  // "http://data.toevla.org/8fcf7ea8-5180-482c-923c-495f783855db": { component: "edit-components/boolean", key: "pointOfInterest.websiteHasSignLanguage" },
  // "http://data.toevla.org/0a02fdb7-cde1-4795-a4e1-13e9db270ca5": { component: "edit-components/boolean", key: "pointOfInterest.websiteHasScreenreader" },
  // "http://data.toevla.org/970baa13-9bc3-4233-9bc4-2e2ea15499c7": { component: "edit-components/boolean", key: "pointOfInterest.websiteSupportsWcag2" },
  // "http://data.toevla.org/c6965262-9ce4-44cf-bb53-57f4a5fd47fc": { component: "edit-components/boolean", key: "pointOfInterest.websiteAllowsTextIncrease" },
  // "http://data.toevla.org/19783462-9921-40eb-92c8-b62116a7e359": { component: "edit-components/boolean", key: "pointOfInterest.wheelchairAvailable" },
  // "http://data.toevla.org/bebe20d0-0d82-419f-bfcd-49834a7db8a5": { component: "edit-components/electronic-payment-system-movable" },
  // "http://data.toevla.org/01d13e86-bdbb-4893-841e-d0d2aebd2b3d": { component: "edit-components/boolean", key: "pointOfInterest.assistanceForGuideDogs" },
};

export function editMapping( uri: string | null | undefined ) : { component: string, key?: string } | null {
  if( uri && eMapping[uri] )
    return eMapping[uri];
  return null;
}
