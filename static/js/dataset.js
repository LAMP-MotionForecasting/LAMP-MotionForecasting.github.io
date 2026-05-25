// DynaFLIP Dataset Viewer data.
// 10 entries per dataset with image / 3D-flow image / language instruction.
// Generated from /Users/jusuklee/Downloads/project_dataset_visualizer source triplets.

const DATASETS = {
  agibot: [
    { id: '01', image: './static/dataset/agibot/01_image.png', flow: './static/dataset/agibot/01_flow.png', language: 'Place the air column film into the carton on trash bag.' },
    { id: '02', image: './static/dataset/agibot/02_image.png', flow: './static/dataset/agibot/02_flow.png', language: 'Empty the water from the gray water bottle held in the left arm.' },
    { id: '03', image: './static/dataset/agibot/03_image.png', flow: './static/dataset/agibot/03_flow.png', language: 'Push the refrigerator door with the right arm.' },
    { id: '04', image: './static/dataset/agibot/04_image.png', flow: './static/dataset/agibot/04_flow.png', language: 'Grasp the cloth on the table and wipe the stain.' },
    { id: '05', image: './static/dataset/agibot/05_image.png', flow: './static/dataset/agibot/05_flow.png', language: 'Grasp the waistband of light blue denim shorts with both hands and fold it down to the legs.' },
    { id: '06', image: './static/dataset/agibot/06_image.png', flow: './static/dataset/agibot/06_flow.png', language: 'Lift the plate with the right arm.' },
    { id: '07', image: './static/dataset/agibot/07_image.png', flow: './static/dataset/agibot/07_flow.png', language: 'Scrub the water cup held in the left arm with the cup brush in the right arm.' },
    { id: '08', image: './static/dataset/agibot/08_image.png', flow: './static/dataset/agibot/08_flow.png', language: 'Lift the right arm with gray teapot.' },
    { id: '09', image: './static/dataset/agibot/09_image.png', flow: './static/dataset/agibot/09_flow.png', language: 'Pick up the napkin on the table.' },
    { id: '10', image: './static/dataset/agibot/10_image.png', flow: './static/dataset/agibot/10_flow.png', language: 'Grasp the spoon with the right arm.' }
  ],
  ego4d: [
    { id: '01', image: './static/dataset/ego4d/01_image.png', flow: './static/dataset/ego4d/01_flow.png', language: 'picks the electric iron from the ironing table with her right hand.' },
    { id: '02', image: './static/dataset/ego4d/02_image.png', flow: './static/dataset/ego4d/02_flow.png', language: 'dips the paint brush on the paint palette with his right hand' },
    { id: '03', image: './static/dataset/ego4d/03_image.png', flow: './static/dataset/ego4d/03_flow.png', language: 'pours the pepper into the pot' },
    { id: '04', image: './static/dataset/ego4d/04_image.png', flow: './static/dataset/ego4d/04_flow.png', language: 'puts a piece of dough on the sheet pan with his gloved right hand.' },
    { id: '05', image: './static/dataset/ego4d/05_image.png', flow: './static/dataset/ego4d/05_flow.png', language: 'picks up the hose part of the vacuum cleaner' },
    { id: '06', image: './static/dataset/ego4d/06_image.png', flow: './static/dataset/ego4d/06_flow.png', language: 'picks a second rod from a chair' },
    { id: '07', image: './static/dataset/ego4d/07_image.png', flow: './static/dataset/ego4d/07_flow.png', language: 'adjusts the mixture in the frying pan with the spoon in her right hand' },
    { id: '08', image: './static/dataset/ego4d/08_image.png', flow: './static/dataset/ego4d/08_flow.png', language: 'picks the chili pepper on the floor with his left hand' },
    { id: '09', image: './static/dataset/ego4d/09_image.png', flow: './static/dataset/ego4d/09_flow.png', language: 'dusts off soil in the dirt into the plant bucket in his left hand with his right hand.' },
    { id: '10', image: './static/dataset/ego4d/10_image.png', flow: './static/dataset/ego4d/10_flow.png', language: 'pushes the steel square bars on the chair with his hand' }
  ],
  droid: [
    { id: '01', image: './static/dataset/droid/01_image.png', flow: './static/dataset/droid/01_flow.png', language: 'Move the grey bowl to the left' },
    { id: '02', image: './static/dataset/droid/02_image.png', flow: './static/dataset/droid/02_flow.png', language: 'Put the pen in the mug' },
    { id: '03', image: './static/dataset/droid/03_image.png', flow: './static/dataset/droid/03_flow.png', language: 'Push on the stapler' },
    { id: '04', image: './static/dataset/droid/04_image.png', flow: './static/dataset/droid/04_flow.png', language: 'Put the black tape on the plate' },
    { id: '05', image: './static/dataset/droid/05_image.png', flow: './static/dataset/droid/05_flow.png', language: 'Move the red hat and put it on top of other hats' },
    { id: '06', image: './static/dataset/droid/06_image.png', flow: './static/dataset/droid/06_flow.png', language: 'Put the black objects on the table into the open drawer and then close the drawer' },
    { id: '07', image: './static/dataset/droid/07_image.png', flow: './static/dataset/droid/07_flow.png', language: 'Take the gray cup from the black cup and put it on the table' },
    { id: '08', image: './static/dataset/droid/08_image.png', flow: './static/dataset/droid/08_flow.png', language: 'Close the second cupboard door from the left' },
    { id: '09', image: './static/dataset/droid/09_image.png', flow: './static/dataset/droid/09_flow.png', language: 'Press the button on the right bottom of the toaster' },
    { id: '10', image: './static/dataset/droid/10_image.png', flow: './static/dataset/droid/10_flow.png', language: 'Move the bowl to the left on the table' }
  ],
  bridge: [
    { id: '01', image: './static/dataset/bridge/01_image.png', flow: './static/dataset/bridge/01_flow.png', language: 'Pick up the cloth.' },
    { id: '02', image: './static/dataset/bridge/02_image.png', flow: './static/dataset/bridge/02_flow.png', language: 'Grab the spoon.' },
    { id: '03', image: './static/dataset/bridge/03_image.png', flow: './static/dataset/bridge/03_flow.png', language: 'Pick up the red bottle.' },
    { id: '04', image: './static/dataset/bridge/04_image.png', flow: './static/dataset/bridge/04_flow.png', language: 'Pick up the small pot.' },
    { id: '05', image: './static/dataset/bridge/05_image.png', flow: './static/dataset/bridge/05_flow.png', language: 'Move the red block.' },
    { id: '06', image: './static/dataset/bridge/06_image.png', flow: './static/dataset/bridge/06_flow.png', language: 'Pick up the corn.' },
    { id: '07', image: './static/dataset/bridge/07_image.png', flow: './static/dataset/bridge/07_flow.png', language: 'Grab the pink object.' },
    { id: '08', image: './static/dataset/bridge/08_image.png', flow: './static/dataset/bridge/08_flow.png', language: 'Pick up the blue toy.' },
    { id: '09', image: './static/dataset/bridge/09_image.png', flow: './static/dataset/bridge/09_flow.png', language: 'Open the box lid.' },
    { id: '10', image: './static/dataset/bridge/10_image.png', flow: './static/dataset/bridge/10_flow.png', language: 'Pick up the green object.' }
  ],
  ssv2: [
    { id: '01', image: './static/dataset/ssv2/01_image.png', flow: './static/dataset/ssv2/01_flow.png', language: 'Press the yellow pop toy.' },
    { id: '02', image: './static/dataset/ssv2/02_image.png', flow: './static/dataset/ssv2/02_flow.png', language: 'Pick up the coin.' },
    { id: '03', image: './static/dataset/ssv2/03_image.png', flow: './static/dataset/ssv2/03_flow.png', language: 'Press the wallet button.' },
    { id: '04', image: './static/dataset/ssv2/04_image.png', flow: './static/dataset/ssv2/04_flow.png', language: 'Pick up the remote.' },
    { id: '05', image: './static/dataset/ssv2/05_image.png', flow: './static/dataset/ssv2/05_flow.png', language: 'Crumple the paper.' },
    { id: '06', image: './static/dataset/ssv2/06_image.png', flow: './static/dataset/ssv2/06_flow.png', language: 'Pick up the sock.' },
    { id: '07', image: './static/dataset/ssv2/07_image.png', flow: './static/dataset/ssv2/07_flow.png', language: 'Dip the cracker in the bowl.' },
    { id: '08', image: './static/dataset/ssv2/08_image.png', flow: './static/dataset/ssv2/08_flow.png', language: 'Unplug the power cord.' },
    { id: '09', image: './static/dataset/ssv2/09_image.png', flow: './static/dataset/ssv2/09_flow.png', language: 'Wipe the spill with paper towel.' },
    { id: '10', image: './static/dataset/ssv2/10_image.png', flow: './static/dataset/ssv2/10_flow.png', language: 'Move the bottle.' }
  ],
  oxe: [
    { id: '01', image: './static/dataset/oxe/01_image.png', flow: './static/dataset/oxe/01_flow.png', language: 'Place the cup in the bowl.' },
    { id: '02', image: './static/dataset/oxe/02_image.png', flow: './static/dataset/oxe/02_flow.png', language: 'Pick up the seasoning bottle.' },
    { id: '03', image: './static/dataset/oxe/03_image.png', flow: './static/dataset/oxe/03_flow.png', language: 'Move black bowl to sink.' },
    { id: '04', image: './static/dataset/oxe/04_image.png', flow: './static/dataset/oxe/04_flow.png', language: 'Pick up the yellow toy.' },
    { id: '05', image: './static/dataset/oxe/05_image.png', flow: './static/dataset/oxe/05_flow.png', language: 'Open the top drawer.' },
    { id: '06', image: './static/dataset/oxe/06_image.png', flow: './static/dataset/oxe/06_flow.png', language: 'Place the bag in the drawer.' },
    { id: '07', image: './static/dataset/oxe/07_image.png', flow: './static/dataset/oxe/07_flow.png', language: 'Pick up the can.' },
    { id: '08', image: './static/dataset/oxe/08_image.png', flow: './static/dataset/oxe/08_flow.png', language: 'Open the cabinet door.' },
    { id: '09', image: './static/dataset/oxe/09_image.png', flow: './static/dataset/oxe/09_flow.png', language: 'Pick up the red cube.' },
    { id: '10', image: './static/dataset/oxe/10_image.png', flow: './static/dataset/oxe/10_flow.png', language: 'Pick up the purple block.' }
  ]
};

const DATASET_ORDER = ['agibot', 'ego4d', 'droid', 'bridge', 'ssv2', 'oxe'];
const DATASET_LABELS = {
  agibot: 'Agibot',
  ego4d: 'Ego4D',
  droid: 'Droid',
  bridge: 'Bridge',
  ssv2: 'SSV2',
  oxe: 'OXE'
};
const PLACEHOLDER_SRC = './static/dataset/placeholder.png';
