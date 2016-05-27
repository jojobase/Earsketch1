//		javascript code
//		script_name:
//
//		author: Jojo and Alyssa
//		description: Song for project
//

init(); 

setTempo(130); 

var beatString1 = '0123';
makeBeatSlice(HIPHOP_TRAPHOP_BEAT_002, 2, 1, beatString1, [1, 3.0625, 1.125, 1.1875])

fitMedia(TECHNO_LOOP_PART_007, 3,2,10)
fitMedia(TECHNO_LOOP_PART_003, 5,1,10)
fitMedia(TECHNO_LOOP_PART_002, 4,2,10)
fitMedia(TECHNO_LOOP_PART_002, 1,2,10)

setEffect(1, FILTER, FILTER_FREQ, 100.0, 1.0, 2000, 3.0);

var beatPattern = "0---0---0---0---";
makeBeat(HIPHOP_FUNKBEAT_001, 1, 2.0, beatPattern);

fitMedia(TECHNO_LOOP_PART_002, 3,3,10)
fitMedia(TECHNO_LOOP_PART_005, 3,5,10)
fitMedia(TECHNO_LOOP_PART_007, 4,2,10)
fitMedia(TECHNO_LOOP_PART_003, 6,1,10)

rhythmEffects(3, FILTER, FILTER_FREQ, [300, 3000, 1000], 1.0, "0+++1+++2+++1+++");

var beatPattern = "0---0---0---0---";
makeBeat(HIPHOP_FUNKBEAT_001, 1, 2.0, beatPattern);

fitMedia(TECHNO_LOOP_PART_002, 2,2,10)
fitMedia(TECHNO_LOOP_PART_002, 3,2,10)
fitMedia(TECHNO_LOOP_PART_002, 1,5,10)

var beatPattern = "0---0---0---0---";
makeBeat(HIPHOP_FUNKBEAT_001, 1, 2.0, beatPattern);

finish(); 
