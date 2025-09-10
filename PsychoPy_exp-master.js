/**************************** 
 * Psychopy_Exp-Master *
 ****************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'PsychoPy_exp-master';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'PROLIFIC_PID': '{{%PROLIFIC_PID%}}',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const studyFullLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(studyFullLoopBegin(studyFullLoopScheduler));
flowScheduler.add(studyFullLoopScheduler);
flowScheduler.add(studyFullLoopEnd);


flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(info_sheetRoutineBegin());
flowScheduler.add(info_sheetRoutineEachFrame());
flowScheduler.add(info_sheetRoutineEnd());
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(volume_checkRoutineBegin());
flowScheduler.add(volume_checkRoutineEachFrame());
flowScheduler.add(volume_checkRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);






flowScheduler.add(genre_exposureRoutineBegin());
flowScheduler.add(genre_exposureRoutineEachFrame());
flowScheduler.add(genre_exposureRoutineEnd());
flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // libraries:
    {'surveyLibrary': true},
    // resources:
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=XXXXXX', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["ProlificID"]}_${expInfo["participant"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var fullClock;
var goodbye;
var welcomeClock;
var welcomeSS;
var confirmText;
var mouse_welcome;
var info_sheetClock;
var infoSheetSS;
var nextText_infoSheet;
var mouse_infoSheet;
var consentClock;
var consentSS;
var consentText;
var mouse_consent;
var volume_checkClock;
var volCheckSS;
var quietTestVol;
var loudTestVol;
var playQuietTestVol;
var playLoudTestVol;
var textQuiet;
var textLoud;
var nextText_volCheck;
var mouse_volCheck;
var mouse_volCheckNEXT;
var instructionsClock;
var instrSS;
var nextText_instr;
var mouse_instr;
var clip_presentationClock;
var attnCheck;
var max_song_labels;
var progress_number;
var counterbal;
var batch_number;
var song_labels;
var study_full;
var stimuli;
var vol_icon;
var text;
var attentionCheckClock;
var foil_banana;
var textbox_attnCheck;
var nextText_attnCheck;
var mouse_attnCheck;
var debriefClock;
var debriefSS;
var endText;
var mouse_debrief;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "full"
  fullClock = new util.Clock();
  goodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'goodbye',
    text: "This study is already full!\nThank you for considering taking part.\n\n~press the 'esc' button to exit~",
    font: 'Aptos',
    units: undefined, 
    pos: [0, 0], height: 0.027,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcomeSS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'welcomeSS', units : undefined, 
    image : 'resources/SS_welcome.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 0.88],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  confirmText = new visual.TextBox({
    win: psychoJS.window,
    name: 'confirmText',
    text: 'I am using Chrome and ready to listen to some music!',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0, (- 0.33)], 
    letterHeight: 0.033,
    lineSpacing: 1.0,
    size: [0.63, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  mouse_welcome = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_welcome.mouseClock = new util.Clock();
  // Initialize components for Routine "info_sheet"
  info_sheetClock = new util.Clock();
  infoSheetSS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'infoSheetSS', units : undefined, 
    image : 'resources/SS_info.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 0.88],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  nextText_infoSheet = new visual.TextBox({
    win: psychoJS.window,
    name: 'nextText_infoSheet',
    text: 'Next>>>',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0.63, (- 0.41)], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  mouse_infoSheet = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_infoSheet.mouseClock = new util.Clock();
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consentSS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'consentSS', units : undefined, 
    image : 'resources/SS_consent.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 0.88],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  consentText = new visual.TextBox({
    win: psychoJS.window,
    name: 'consentText',
    text: 'I consent and agree to all of the above',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0.5, (- 0.41)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.45, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: true, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  mouse_consent = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_consent.mouseClock = new util.Clock();
  // Initialize components for Routine "volume_check"
  volume_checkClock = new util.Clock();
  volCheckSS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'volCheckSS', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 0.88],
    color : new util.Color([1.0, 1.0, 1.0]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  quietTestVol = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/vol_test_quiet-daniel.mp3-blurred_moon.mp3',
      secs: (- 1),
      });
  quietTestVol.setVolume(0.7);
  loudTestVol = new sound.Sound({
      win: psychoJS.window,
      value: 'resources/vol_test_loud-min_kang-lucy.mp3',
      secs: (- 1),
      });
  loudTestVol.setVolume(0.7);
  playQuietTestVol = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playQuietTestVol', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 90.0, pos: [(- 0.3), (- 0.07)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.7333), 0.0902, (- 0.7333)]),
    fillColor: new util.Color([0.2078, 0.6078, (- 0.6078)]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  playLoudTestVol = new visual.ShapeStim ({
    win: psychoJS.window, name: 'playLoudTestVol', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 90.0, pos: [0.3, (- 0.07)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.7333), (- 0.3598), (- 0.7333)]),
    fillColor: new util.Color([(- 0.7333), 0.0902, (- 0.7333)]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  textQuiet = new visual.TextStim({
    win: psychoJS.window,
    name: 'textQuiet',
    text: '^ click to play quiet example',
    font: 'Aptos',
    units: undefined, 
    pos: [(- 0.33), (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  textLoud = new visual.TextStim({
    win: psychoJS.window,
    name: 'textLoud',
    text: '^ click to play loud example',
    font: 'Aptos',
    units: undefined, 
    pos: [0.33, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  nextText_volCheck = new visual.TextBox({
    win: psychoJS.window,
    name: 'nextText_volCheck',
    text: 'Next>>>',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0.63, (- 0.41)], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  mouse_volCheck = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_volCheck.mouseClock = new util.Clock();
  mouse_volCheckNEXT = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_volCheckNEXT.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instrSS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instrSS', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 0.88],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  nextText_instr = new visual.TextBox({
    win: psychoJS.window,
    name: 'nextText_instr',
    text: 'Next>>>',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0.63, (- 0.41)], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  mouse_instr = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_instr.mouseClock = new util.Clock();
  // Initialize components for Routine "clip_presentation"
  clip_presentationClock = new util.Clock();
  // Run 'Begin Experiment' code from code_randANDattn
  attnCheck = 0;
  max_song_labels = 17;
  //batch_number = randint(1, 21);
  //song_labels = ((((max_song_labels * batch_number) - 17).toString() + ":") + (max_song_labels * batch_number).toString());
  progress_number = 0;
  
  //fetch the group from the shelf - this returns 2 things - the label of the group (accessed using thisGroup.group) and a boolean to indicate if sampling is complete (accessed using thisGroup.finished)
  counterbal = await psychoJS.shelf.counterBalanceSelect({key:['UK18to30_pilotGroups']})
  batch_number=counterbal.group
  song_labels = ((((max_song_labels * batch_number) - 17).toString() + ":") + (max_song_labels * batch_number).toString());
  // https://www.psychopy.org/online/shelf.html#counterbalancing
  
  study_full = 0;
  if (counterbal.finished) {
      study_full = 1;
  }
  
  stimuli = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  stimuli.setVolume(0.7);
  vol_icon = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vol_icon', units : undefined, 
    image : 'resources/vol_icon.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Aptos',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "attentionCheck"
  attentionCheckClock = new util.Clock();
  foil_banana = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  foil_banana.setVolume(1.0);
  textbox_attnCheck = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_attnCheck',
    text: '',
    placeholder: undefined,
    font: 'Aptos',
    pos: [0, 0], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.6, 0.3],  units: undefined, 
    color: [(- 1.0), (- 1.0), (- 1.0)], colorSpace: 'rgb',
    fillColor: undefined, borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  nextText_attnCheck = new visual.TextBox({
    win: psychoJS.window,
    name: 'nextText_attnCheck',
    text: 'Next>>>',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0.63, (- 0.41)], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  mouse_attnCheck = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attnCheck.mouseClock = new util.Clock();
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debriefSS = new visual.ImageStim({
    win : psychoJS.window,
    name : 'debriefSS', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.6, 0.88],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : 0.0 
  });
  endText = new visual.TextBox({
    win: psychoJS.window,
    name: 'endText',
    text: 'Click here to finish the study :)',
    placeholder: 'Type here...',
    font: 'Aptos',
    pos: [0.5, (- 0.41)], 
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.45, 0.1],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: [0.0902, (- 1.0), (- 1.0)], borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  mouse_debrief = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_debrief.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var studyFull;
function studyFullLoopBegin(studyFullLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    studyFull = new TrialHandler({
      psychoJS: psychoJS,
      nReps: study_full, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'studyFull'
    });
    psychoJS.experiment.addLoop(studyFull); // add the loop to the experiment
    currentLoop = studyFull;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStudyFull of studyFull) {
      snapshot = studyFull.getSnapshot();
      studyFullLoopScheduler.add(importConditions(snapshot));
      studyFullLoopScheduler.add(fullRoutineBegin(snapshot));
      studyFullLoopScheduler.add(fullRoutineEachFrame());
      studyFullLoopScheduler.add(fullRoutineEnd(snapshot));
      studyFullLoopScheduler.add(studyFullLoopEndIteration(studyFullLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function studyFullLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(studyFull);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function studyFullLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'resources/groupAssignedStimuliSet.xlsx', song_labels),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(clip_presentationRoutineBegin(snapshot));
      trialsLoopScheduler.add(clip_presentationRoutineEachFrame());
      trialsLoopScheduler.add(clip_presentationRoutineEnd(snapshot));
      trialsLoopScheduler.add(clip_responseRoutineBegin(snapshot));
      trialsLoopScheduler.add(clip_responseRoutineEachFrame());
      trialsLoopScheduler.add(clip_responseRoutineEnd(snapshot));
      const attnCheckingLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(attnCheckingLoopBegin(attnCheckingLoopScheduler, snapshot));
      trialsLoopScheduler.add(attnCheckingLoopScheduler);
      trialsLoopScheduler.add(attnCheckingLoopEnd);
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var attnChecking;
function attnCheckingLoopBegin(attnCheckingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    attnChecking = new TrialHandler({
      psychoJS: psychoJS,
      nReps: attnCheck, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'attnChecking'
    });
    psychoJS.experiment.addLoop(attnChecking); // add the loop to the experiment
    currentLoop = attnChecking;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAttnChecking of attnChecking) {
      snapshot = attnChecking.getSnapshot();
      attnCheckingLoopScheduler.add(importConditions(snapshot));
      attnCheckingLoopScheduler.add(attentionCheckRoutineBegin(snapshot));
      attnCheckingLoopScheduler.add(attentionCheckRoutineEachFrame());
      attnCheckingLoopScheduler.add(attentionCheckRoutineEnd(snapshot));
      attnCheckingLoopScheduler.add(attnCheckingLoopEndIteration(attnCheckingLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function attnCheckingLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(attnChecking);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function attnCheckingLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var fullComponents;
function fullRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'full' ---
    t = 0;
    fullClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('full.started', globalClock.getTime());
    // keep track of which components have finished
    fullComponents = [];
    fullComponents.push(goodbye);
    
    for (const thisComponent of fullComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fullRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'full' ---
    // get current time
    t = fullClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *goodbye* updates
    if (t >= 0.0 && goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goodbye.tStart = t;  // (not accounting for frame time here)
      goodbye.frameNStart = frameN;  // exact frame index
      
      goodbye.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fullComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fullRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'full' ---
    for (const thisComponent of fullComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('full.stopped', globalClock.getTime());
    // the Routine "full" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse_welcome
    mouse_welcome.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcomeSS);
    welcomeComponents.push(confirmText);
    welcomeComponents.push(mouse_welcome);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcomeSS* updates
    if (t >= 0.0 && welcomeSS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeSS.tStart = t;  // (not accounting for frame time here)
      welcomeSS.frameNStart = frameN;  // exact frame index
      
      welcomeSS.setAutoDraw(true);
    }
    
    
    // *confirmText* updates
    if (t >= 0.0 && confirmText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confirmText.tStart = t;  // (not accounting for frame time here)
      confirmText.frameNStart = frameN;  // exact frame index
      
      confirmText.setAutoDraw(true);
    }
    
    // *mouse_welcome* updates
    if (t >= 0.3 && mouse_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_welcome.tStart = t;  // (not accounting for frame time here)
      mouse_welcome.frameNStart = frameN;  // exact frame index
      
      mouse_welcome.status = PsychoJS.Status.STARTED;
      mouse_welcome.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_welcome.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_welcome.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [confirmText]) {
            if (obj.contains(mouse_welcome)) {
              gotValidClick = true;
              mouse_welcome.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var info_sheetComponents;
function info_sheetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'info_sheet' ---
    t = 0;
    info_sheetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('info_sheet.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse_infoSheet
    mouse_infoSheet.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    info_sheetComponents = [];
    info_sheetComponents.push(infoSheetSS);
    info_sheetComponents.push(nextText_infoSheet);
    info_sheetComponents.push(mouse_infoSheet);
    
    for (const thisComponent of info_sheetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function info_sheetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'info_sheet' ---
    // get current time
    t = info_sheetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *infoSheetSS* updates
    if (t >= 0.0 && infoSheetSS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      infoSheetSS.tStart = t;  // (not accounting for frame time here)
      infoSheetSS.frameNStart = frameN;  // exact frame index
      
      infoSheetSS.setAutoDraw(true);
    }
    
    
    // *nextText_infoSheet* updates
    if (t >= 0.0 && nextText_infoSheet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextText_infoSheet.tStart = t;  // (not accounting for frame time here)
      nextText_infoSheet.frameNStart = frameN;  // exact frame index
      
      nextText_infoSheet.setAutoDraw(true);
    }
    
    // *mouse_infoSheet* updates
    if (t >= 3.0 && mouse_infoSheet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_infoSheet.tStart = t;  // (not accounting for frame time here)
      mouse_infoSheet.frameNStart = frameN;  // exact frame index
      
      mouse_infoSheet.status = PsychoJS.Status.STARTED;
      mouse_infoSheet.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_infoSheet.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_infoSheet.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextText_infoSheet]) {
            if (obj.contains(mouse_infoSheet)) {
              gotValidClick = true;
              mouse_infoSheet.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of info_sheetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function info_sheetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'info_sheet' ---
    for (const thisComponent of info_sheetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('info_sheet.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "info_sheet" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('consent.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse_consent
    mouse_consent.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consentSS);
    consentComponents.push(consentText);
    consentComponents.push(mouse_consent);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentSS* updates
    if (t >= 0.0 && consentSS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentSS.tStart = t;  // (not accounting for frame time here)
      consentSS.frameNStart = frameN;  // exact frame index
      
      consentSS.setAutoDraw(true);
    }
    
    
    // *consentText* updates
    if (t >= 0.0 && consentText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentText.tStart = t;  // (not accounting for frame time here)
      consentText.frameNStart = frameN;  // exact frame index
      
      consentText.setAutoDraw(true);
    }
    
    // *mouse_consent* updates
    if (t >= 3.0 && mouse_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_consent.tStart = t;  // (not accounting for frame time here)
      mouse_consent.frameNStart = frameN;  // exact frame index
      
      mouse_consent.status = PsychoJS.Status.STARTED;
      mouse_consent.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_consent.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_consent.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [consentText]) {
            if (obj.contains(mouse_consent)) {
              gotValidClick = true;
              mouse_consent.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var volume_checkComponents;
function volume_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'volume_check' ---
    t = 0;
    volume_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('volume_check.started', globalClock.getTime());
    volCheckSS.setImage('resources/SS_volCheck.png');
    quietTestVol.setVolume(0.7);
    loudTestVol.setVolume(0.7);
    // setup some python lists for storing info about the mouse_volCheck
    mouse_volCheck.clicked_name = [];
    gotValidClick = false; // until a click is received
    // setup some python lists for storing info about the mouse_volCheckNEXT
    // current position of the mouse:
    mouse_volCheckNEXT.x = [];
    mouse_volCheckNEXT.y = [];
    mouse_volCheckNEXT.leftButton = [];
    mouse_volCheckNEXT.midButton = [];
    mouse_volCheckNEXT.rightButton = [];
    mouse_volCheckNEXT.time = [];
    mouse_volCheckNEXT.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    volume_checkComponents = [];
    volume_checkComponents.push(volCheckSS);
    volume_checkComponents.push(quietTestVol);
    volume_checkComponents.push(loudTestVol);
    volume_checkComponents.push(playQuietTestVol);
    volume_checkComponents.push(playLoudTestVol);
    volume_checkComponents.push(textQuiet);
    volume_checkComponents.push(textLoud);
    volume_checkComponents.push(nextText_volCheck);
    volume_checkComponents.push(mouse_volCheck);
    volume_checkComponents.push(mouse_volCheckNEXT);
    
    for (const thisComponent of volume_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function volume_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'volume_check' ---
    // get current time
    t = volume_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *volCheckSS* updates
    if (t >= 0.0 && volCheckSS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      volCheckSS.tStart = t;  // (not accounting for frame time here)
      volCheckSS.frameNStart = frameN;  // exact frame index
      
      volCheckSS.setAutoDraw(true);
    }
    
    // start/stop quietTestVol
    if ((mouse_volCheck.isPressedIn(playQuietTestVol)) && quietTestVol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quietTestVol.tStart = t;  // (not accounting for frame time here)
      quietTestVol.frameNStart = frameN;  // exact frame index
      
      quietTestVol.play();  // start the sound (it finishes automatically)
      quietTestVol.status = PsychoJS.Status.STARTED;
    }
    if (t >= (quietTestVol.getDuration() + quietTestVol.tStart)     && quietTestVol.status === PsychoJS.Status.STARTED) {
      quietTestVol.stop();  // stop the sound (if longer than duration)
      quietTestVol.status = PsychoJS.Status.FINISHED;
    }
    // start/stop loudTestVol
    if ((mouse_volCheck.isPressedIn(playLoudTestVol)) && loudTestVol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      loudTestVol.tStart = t;  // (not accounting for frame time here)
      loudTestVol.frameNStart = frameN;  // exact frame index
      
      loudTestVol.play();  // start the sound (it finishes automatically)
      loudTestVol.status = PsychoJS.Status.STARTED;
    }
    if (t >= (loudTestVol.getDuration() + loudTestVol.tStart)     && loudTestVol.status === PsychoJS.Status.STARTED) {
      loudTestVol.stop();  // stop the sound (if longer than duration)
      loudTestVol.status = PsychoJS.Status.FINISHED;
    }
    
    // *playQuietTestVol* updates
    if (t >= 0.0 && playQuietTestVol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playQuietTestVol.tStart = t;  // (not accounting for frame time here)
      playQuietTestVol.frameNStart = frameN;  // exact frame index
      
      playQuietTestVol.setAutoDraw(true);
    }
    
    
    // *playLoudTestVol* updates
    if (t >= 0.0 && playLoudTestVol.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      playLoudTestVol.tStart = t;  // (not accounting for frame time here)
      playLoudTestVol.frameNStart = frameN;  // exact frame index
      
      playLoudTestVol.setAutoDraw(true);
    }
    
    
    // *textQuiet* updates
    if (t >= 0.0 && textQuiet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textQuiet.tStart = t;  // (not accounting for frame time here)
      textQuiet.frameNStart = frameN;  // exact frame index
      
      textQuiet.setAutoDraw(true);
    }
    
    
    // *textLoud* updates
    if (t >= 0.0 && textLoud.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textLoud.tStart = t;  // (not accounting for frame time here)
      textLoud.frameNStart = frameN;  // exact frame index
      
      textLoud.setAutoDraw(true);
    }
    
    
    // *nextText_volCheck* updates
    if (t >= 0.0 && nextText_volCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextText_volCheck.tStart = t;  // (not accounting for frame time here)
      nextText_volCheck.frameNStart = frameN;  // exact frame index
      
      nextText_volCheck.setAutoDraw(true);
    }
    
    // *mouse_volCheckNEXT* updates
    if (t >= 3.0 && mouse_volCheckNEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_volCheckNEXT.tStart = t;  // (not accounting for frame time here)
      mouse_volCheckNEXT.frameNStart = frameN;  // exact frame index
      
      mouse_volCheckNEXT.status = PsychoJS.Status.STARTED;
      mouse_volCheckNEXT.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_volCheckNEXT.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_volCheckNEXT.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextText_volCheck]) {
            if (obj.contains(mouse_volCheckNEXT)) {
              gotValidClick = true;
              mouse_volCheckNEXT.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_volCheckNEXT.getPos();
          mouse_volCheckNEXT.x.push(_mouseXYs[0]);
          mouse_volCheckNEXT.y.push(_mouseXYs[1]);
          mouse_volCheckNEXT.leftButton.push(_mouseButtons[0]);
          mouse_volCheckNEXT.midButton.push(_mouseButtons[1]);
          mouse_volCheckNEXT.rightButton.push(_mouseButtons[2]);
          mouse_volCheckNEXT.time.push(mouse_volCheckNEXT.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of volume_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function volume_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'volume_check' ---
    for (const thisComponent of volume_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('volume_check.stopped', globalClock.getTime());
    quietTestVol.stop();  // ensure sound has stopped at end of Routine
    loudTestVol.stop();  // ensure sound has stopped at end of Routine
    // store data for psychoJS.experiment (ExperimentHandler)
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_volCheckNEXT.x) {  psychoJS.experiment.addData('mouse_volCheckNEXT.x', mouse_volCheckNEXT.x[0])};
    if (mouse_volCheckNEXT.y) {  psychoJS.experiment.addData('mouse_volCheckNEXT.y', mouse_volCheckNEXT.y[0])};
    if (mouse_volCheckNEXT.leftButton) {  psychoJS.experiment.addData('mouse_volCheckNEXT.leftButton', mouse_volCheckNEXT.leftButton[0])};
    if (mouse_volCheckNEXT.midButton) {  psychoJS.experiment.addData('mouse_volCheckNEXT.midButton', mouse_volCheckNEXT.midButton[0])};
    if (mouse_volCheckNEXT.rightButton) {  psychoJS.experiment.addData('mouse_volCheckNEXT.rightButton', mouse_volCheckNEXT.rightButton[0])};
    if (mouse_volCheckNEXT.time) {  psychoJS.experiment.addData('mouse_volCheckNEXT.time', mouse_volCheckNEXT.time[0])};
    if (mouse_volCheckNEXT.clicked_name) {  psychoJS.experiment.addData('mouse_volCheckNEXT.clicked_name', mouse_volCheckNEXT.clicked_name[0])};
    
    // the Routine "volume_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instrSS.setImage('resources/SS_instr.png');
    // setup some python lists for storing info about the mouse_instr
    mouse_instr.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instrSS);
    instructionsComponents.push(nextText_instr);
    instructionsComponents.push(mouse_instr);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrSS* updates
    if (t >= 0.0 && instrSS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrSS.tStart = t;  // (not accounting for frame time here)
      instrSS.frameNStart = frameN;  // exact frame index
      
      instrSS.setAutoDraw(true);
    }
    
    
    // *nextText_instr* updates
    if (t >= 0.0 && nextText_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextText_instr.tStart = t;  // (not accounting for frame time here)
      nextText_instr.frameNStart = frameN;  // exact frame index
      
      nextText_instr.setAutoDraw(true);
    }
    
    // *mouse_instr* updates
    if (t >= 3.0 && mouse_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_instr.tStart = t;  // (not accounting for frame time here)
      mouse_instr.frameNStart = frameN;  // exact frame index
      
      mouse_instr.status = PsychoJS.Status.STARTED;
      mouse_instr.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_instr.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_instr.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextText_instr]) {
            if (obj.contains(mouse_instr)) {
              gotValidClick = true;
              mouse_instr.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var clip_presentationComponents;
function clip_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'clip_presentation' ---
    t = 0;
    clip_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.300000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('clip_presentation.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_randANDattn
    
    progress_number = (progress_number + 1);
    attnCheck = 0;
    if ((progress_number === 8)) {
        attnCheck = 1;
    }
    
    stimuli.setValue(group1_1);
    stimuli.secs=30.0;
    stimuli.setVolume(0.7);
    text.setText((("Clip number " + progress_number) + " of 17"));
    // keep track of which components have finished
    clip_presentationComponents = [];
    clip_presentationComponents.push(stimuli);
    clip_presentationComponents.push(vol_icon);
    clip_presentationComponents.push(text);
    
    for (const thisComponent of clip_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function clip_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'clip_presentation' ---
    // get current time
    t = clip_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop stimuli
    if (t >= 0.3 && stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli.tStart = t;  // (not accounting for frame time here)
      stimuli.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ stimuli.play(); });  // screen flip
      stimuli.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.3 + 30.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= stimuli.tStart + 0.5) {
        stimuli.stop();  // stop the sound (if longer than duration)
        stimuli.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *vol_icon* updates
    if (t >= 0.3 && vol_icon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vol_icon.tStart = t;  // (not accounting for frame time here)
      vol_icon.frameNStart = frameN;  // exact frame index
      
      vol_icon.setAutoDraw(true);
    }
    
    frameRemains = 0.3 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (vol_icon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      vol_icon.setAutoDraw(false);
    }
    
    // *text* updates
    if (t >= 0.3 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.3 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of clip_presentationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function clip_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'clip_presentation' ---
    for (const thisComponent of clip_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('clip_presentation.stopped', globalClock.getTime());
    stimuli.stop();  // ensure sound has stopped at end of Routine
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var clip_response;
var clip_responseClock;
function clip_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'clip_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'clip_response' ---
    clip_response = new visual.Survey({
        win: psychoJS.window,
        name: 'clip_response',
        model: 'resources/survey_clipResp.json',
    });
    clip_responseClock = new util.Clock();
    clip_response.setAutoDraw(true);
    clip_response.status = PsychoJS.Status.STARTED;
    clip_response.isFinished = false;
    clip_response.tStart = t;  // (not accounting for frame time here)
    clip_response.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function clip_responseRoutineEachFrame() {
  return async function () {
    t = clip_responseClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if clip_response is completed, move on
    if (clip_response.isFinished) {
      clip_response.setAutoDraw(false);
      clip_response.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function clip_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'clip_response' ---
    // get data from clip_response
    const clip_responseResponse =  clip_response.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(clip_responseResponse, 'clip_response');
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var attentionCheckComponents;
function attentionCheckRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attentionCheck' ---
    t = 0;
    attentionCheckClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(20.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('attentionCheck.started', globalClock.getTime());
    foil_banana.setValue('resources/foil_banana.mp3');
    foil_banana.secs=19.7;
    foil_banana.setVolume(1.0);
    textbox_attnCheck.setText('');
    textbox_attnCheck.refresh();
    // setup some python lists for storing info about the mouse_attnCheck
    mouse_attnCheck.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    attentionCheckComponents = [];
    attentionCheckComponents.push(foil_banana);
    attentionCheckComponents.push(textbox_attnCheck);
    attentionCheckComponents.push(nextText_attnCheck);
    attentionCheckComponents.push(mouse_attnCheck);
    
    for (const thisComponent of attentionCheckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attentionCheckRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attentionCheck' ---
    // get current time
    t = attentionCheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop foil_banana
    if (t >= 0.3 && foil_banana.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      foil_banana.tStart = t;  // (not accounting for frame time here)
      foil_banana.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ foil_banana.play(); });  // screen flip
      foil_banana.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.3 + 19.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (foil_banana.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= foil_banana.tStart + 0.5) {
        foil_banana.stop();  // stop the sound (if longer than duration)
        foil_banana.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *textbox_attnCheck* updates
    if (t >= 0.3 && textbox_attnCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_attnCheck.tStart = t;  // (not accounting for frame time here)
      textbox_attnCheck.frameNStart = frameN;  // exact frame index
      
      textbox_attnCheck.setAutoDraw(true);
    }
    
    frameRemains = 0.3 + 19.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_attnCheck.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_attnCheck.setAutoDraw(false);
    }
    
    // *nextText_attnCheck* updates
    if (t >= 0.0 && nextText_attnCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextText_attnCheck.tStart = t;  // (not accounting for frame time here)
      nextText_attnCheck.frameNStart = frameN;  // exact frame index
      
      nextText_attnCheck.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (nextText_attnCheck.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      nextText_attnCheck.setAutoDraw(false);
    }
    // *mouse_attnCheck* updates
    if (t >= 3.0 && mouse_attnCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attnCheck.tStart = t;  // (not accounting for frame time here)
      mouse_attnCheck.frameNStart = frameN;  // exact frame index
      
      mouse_attnCheck.status = PsychoJS.Status.STARTED;
      mouse_attnCheck.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    frameRemains = 3.0 + 17 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_attnCheck.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_attnCheck.status = PsychoJS.Status.FINISHED;
        }
    if (mouse_attnCheck.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attnCheck.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextText_attnCheck]) {
            if (obj.contains(mouse_attnCheck)) {
              gotValidClick = true;
              mouse_attnCheck.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attentionCheckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attentionCheckRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attentionCheck' ---
    for (const thisComponent of attentionCheckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('attentionCheck.stopped', globalClock.getTime());
    foil_banana.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('textbox_attnCheck.text',textbox_attnCheck.text)
    // store data for psychoJS.experiment (ExperimentHandler)
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var genre_exposure;
var genre_exposureClock;
function genre_exposureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'genre_exposure' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'genre_exposure' ---
    genre_exposure = new visual.Survey({
        win: psychoJS.window,
        name: 'genre_exposure',
        model: 'resources/survey_genreExp.json',
    });
    genre_exposureClock = new util.Clock();
    genre_exposure.setAutoDraw(true);
    genre_exposure.status = PsychoJS.Status.STARTED;
    genre_exposure.isFinished = false;
    genre_exposure.tStart = t;  // (not accounting for frame time here)
    genre_exposure.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function genre_exposureRoutineEachFrame() {
  return async function () {
    t = genre_exposureClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if genre_exposure is completed, move on
    if (genre_exposure.isFinished) {
      genre_exposure.setAutoDraw(false);
      genre_exposure.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function genre_exposureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'genre_exposure' ---
    // get data from genre_exposure
    const genre_exposureResponse =  genre_exposure.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(genre_exposureResponse, 'genre_exposure');
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var demographics;
var demographicsClock;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'demographics' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'demographics' ---
    demographics = new visual.Survey({
        win: psychoJS.window,
        name: 'demographics',
        model: 'resources/survey_finalQs.json',
    });
    demographicsClock = new util.Clock();
    demographics.setAutoDraw(true);
    demographics.status = PsychoJS.Status.STARTED;
    demographics.isFinished = false;
    demographics.tStart = t;  // (not accounting for frame time here)
    demographics.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function demographicsRoutineEachFrame() {
  return async function () {
    t = demographicsClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if demographics is completed, move on
    if (demographics.isFinished) {
      demographics.setAutoDraw(false);
      demographics.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function demographicsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'demographics' ---
    // get data from demographics
    const demographicsResponse =  demographics.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(demographicsResponse, 'demographics');
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief' ---
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('debrief.started', globalClock.getTime());
    debriefSS.setImage('resources/SS_debrief.png');
    // setup some python lists for storing info about the mouse_debrief
    mouse_debrief.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debriefSS);
    debriefComponents.push(endText);
    debriefComponents.push(mouse_debrief);
    
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief' ---
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debriefSS* updates
    if (t >= 0.0 && debriefSS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefSS.tStart = t;  // (not accounting for frame time here)
      debriefSS.frameNStart = frameN;  // exact frame index
      
      debriefSS.setAutoDraw(true);
    }
    
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }
    
    // *mouse_debrief* updates
    if (t >= 3.0 && mouse_debrief.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_debrief.tStart = t;  // (not accounting for frame time here)
      mouse_debrief.frameNStart = frameN;  // exact frame index
      
      mouse_debrief.status = PsychoJS.Status.STARTED;
      mouse_debrief.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_debrief.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_debrief.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [endText]) {
            if (obj.contains(mouse_debrief)) {
              gotValidClick = true;
              mouse_debrief.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief' ---
    for (const thisComponent of debriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('debrief.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
