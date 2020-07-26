const mapping={
  "http://data.toevla.org/ef9a1497-6e8d-461e-8671-75c5ee450bd0": "tree-components/accessibility"
};

export default function customComponentMapping(uri){
  if( uri && mapping[uri] )
    return  mapping[uri];
  return null;
}

const eMapping = {
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
  "https://data.toevla.org/id/concepts/1591a03f-4be5-4c2a-a192-7bd62d72fffb": { component: "edit-components/boolean", key: "pointOfInterest.parking.isPartOfLocation" },
  "https://data.toevla.org/id/concepts/078b35cc-81ce-420a-bb5b-18ba6b65caf1": { component: "edit-components/boolean", key: "pointOfInterest.parking.hasDriveOnPossibility" },
  "https://data.toevla.org/id/concepts/15e473f5-7d2f-4777-aeb9-9d551adce7eb": { component: "edit-components/boolean", key: "pointOfInterest.parking.isWellLit" },
  "https://data.toevla.org/id/concepts/4c5a3e36-28b5-4ab2-b9d6-330bd2af67c4": { component: "edit-components/boolean", key: "pointOfInterest.parking.hasDetailedRouteDescription" },
  "https://data.toevla.org/id/concepts/60031a1d-cee8-4d02-a745-930de16f7c5e": { component: "edit-components/boolean", key: "pointOfInterest.parking.detailedRouteDescriptionHasScreenReader" },
  "https://data.toevla.org/id/concepts/1015eff1-2a00-4cc5-a0ac-59eee06602fa": { component: "edit-components/boolean", key: "pointOfInterest.parking.detailedRouteDescriptionIsAvailableInFlemishSignLanguage" },
  "https://data.toevla.org/id/concepts/6a31ce16-1e0d-4d01-96b5-4a976c849bc8": { component: "edit-components/count", key: "pointOfInterest.parking.numberOfWheelchairFriendlySpots" },
  "https://data.toevla.org/id/concepts/09eacace-66b4-41b6-959d-60316e83bf6a": { component: "edit-components/boolean", key: "pointOfInterest.parking.onPublicDomain" },
  "https://data.toevla.org/id/concepts/9cf0259c-b038-4691-a113-0ae9c47ea407": { component: "edit-components/boolean", key: "pointOfInterest.parking.hasWheelchairFriendlyTerrain" },
  "https://data.toevla.org/id/concepts/2e2ce9ba-cc64-4e1c-8171-35f0915e4784": { component: "edit-components/centimeters", key: "pointOfInterest.parking.parkingSpaceWidth" },
  "https://data.toevla.org/id/concepts/4cf4c693-4217-4e90-ac3c-81ac12c68c0b": { component: "edit-components/centimeters", key: "pointOfInterest.parking.parkingSpaceLength" },
  "https://data.toevla.org/id/concepts/566b1966-811b-43a6-8c7b-7a5b628e8e21": { component: "edit-components/centimeters", key: "pointOfInterest.parking.maxVehicleHeight" },
  "https://data.toevla.org/id/concepts/14e814b5-4e0f-4d29-b92f-4027bb844ee0": { component: "edit-components/boolean", key: "pointOfInterest.parking.pathToEntrance.hasWheelchairFriendlyTerrain" },
  "https://data.toevla.org/id/concepts/de9eb3bc-46fc-452d-bfb2-c53ef3d22e25": { component: "edit-components/centimeters", key: "pointOfInterest.parking.pathToEntrance.narrowestPoint" },
  "https://data.toevla.org/id/concepts/5e3e1229-ba91-47ba-a672-fdfc11aa0a70": { component: "edit-components/centimeters", key: "pointOfInterest.parking.pathToEntrance.highestThreshold" },
  "https://data.toevla.org/id/concepts/060a522e-bb22-4e31-9220-5f8c22e616c4": { component: "edit-components/count", key: "pointOfInterest.parking.pathToEntrance.amountOfThresholds" },
  "https://data.toevla.org/id/concepts/e6a08853-59f4-4308-8211-9ba75f6404fc": { component: "edit-components/count", key: "pointOfInterest.parking.pathToEntrance.amountOfStairs" },
  "https://data.toevla.org/id/concepts/eb456081-cf65-4f5e-aaeb-92f3b91247a0": { component: "edit-components/count", key: "pointOfInterest.parking.pathToEntrance.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/ab2942e4-bfd2-4410-973a-a99d61bff979": { component: "edit-components/boolean", key: "pointOfInterest.parking.pathToEntrance.hasRamp" },

  // TOILET
  "https://data.toevla.org/id/concepts/79804c21-ba2d-4b3a-8633-447ffbc77fce": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasSimpleAndLogicalRoute" },
  "https://data.toevla.org/id/concepts/fadff95d-20b7-422f-b402-3317bd747129": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasSyntheticSpeechInElevator" },
  "https://data.toevla.org/id/concepts/7a16f2ea-abbf-4367-9e2e-33af82336928": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasClearSignalizationInBuilding" },
  "https://data.toevla.org/id/concepts/b3f68ed9-d415-4704-a3be-5f366077b80c": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasBabyNurturingTable" },
  "https://data.toevla.org/id/concepts/8c400682-6f97-410a-8791-996c498e212c": { component: "edit-components/area", key: "pointOfInterest.toilet.sizeOfElevator" },
  "https://data.toevla.org/id/concepts/f32a0e76-853b-40bb-86c8-81894cdb70bb": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.smallestPointOnRoute" },
  "https://data.toevla.org/id/concepts/bf1005f6-10f1-4afb-8bec-cd55e52fdba9": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.highestThresholdOnRoute" },
  "https://data.toevla.org/id/concepts/a70ec038-cdc7-43eb-9a52-7e6083e81947": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfThresholds" },
  "https://data.toevla.org/id/concepts/5dc312ae-d003-433b-b281-0cea6b125088": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfSlopes" },
  "https://data.toevla.org/id/concepts/8a171198-7826-4fe8-8e94-1bcae36277e8": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasRamps" },
  "https://data.toevla.org/id/concepts/8e15a179-2fb3-4c56-b81d-f82bdfe7b7f9": { component: "edit-components/area", key: "pointOfInterest.toilet.sizeOfPlateauElevator" },
  "https://data.toevla.org/id/concepts/954d684f-bba6-4e64-90bb-1e1f712a3a07": { component: "edit-components/count", key: "pointOfInterest.toilet.amountOfPlateauElevators" },
  "https://data.toevla.org/id/concepts/f1568429-0d10-41df-8fd5-a7579dc6be85": { component: "edit-components/string", key: "pointOfInterest.toilet.typeOfElevator" },
  "https://data.toevla.org/id/concepts/e7d25ab8-8660-4e7f-a1d5-aede97aa6883": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.doorWidth" },
  "https://data.toevla.org/id/concepts/b3a5395a-3a3e-42cf-a140-c456f2a52237": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.turningRadiusAtDoor" },
  "https://data.toevla.org/id/concepts/1ba08c83-b8f3-4c64-9320-fd04ee30c183": { component: "edit-components/area", key: "pointOfInterest.toilet.sizeOfToiletRoom" },
  "https://data.toevla.org/id/concepts/4a3cfa2c-ac2d-419e-a48e-a85c8bbb3c66": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.spaceInFrontOfToilet" },
  "https://data.toevla.org/id/concepts/319b7eeb-5f07-4174-8342-4e2fdb601d9d": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.spaceNextToToilet" },
  "https://data.toevla.org/id/concepts/d02bbcf1-338d-4cc1-b2be-2c7af896b13a": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.turningRadius" },
  "https://data.toevla.org/id/concepts/4bcfc144-a0d8-4461-bacb-35831af7ee4c": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasSupportBraces" },
  "https://data.toevla.org/id/concepts/35f9c08e-0b4f-4a67-8d06-36dc37fb59f0": { component: "edit-components/boolean", key: "pointOfInterest.toilet.hasWashbasin" },
  "https://data.toevla.org/id/concepts/846960af-ba55-4b56-a92a-861a88160204": { component: "edit-components/boolean", key: "pointOfInterest.toilet.canRideUnderWashbasin" },
  "https://data.toevla.org/id/concepts/36d9f853-4cb5-4021-9322-5d8f658f9b3a": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.freeHeightUnderWashbasin" },
  "https://data.toevla.org/id/concepts/eefaadc4-9732-48aa-b9da-7472f348990c": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.freeDepthUnderWashbasin" },
  "https://data.toevla.org/id/concepts/972c27b2-c27b-4b25-9fc9-93a367c23f28": { component: "edit-components/centimeters", key: "pointOfInterest.toilet.freeWidthUnderWashbasin" },

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

export function editMapping(uri){
  if( uri && eMapping[uri] )
    return eMapping[uri];
  return null;
}
