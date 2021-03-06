import { rangeFrom } from "../util";

// Credit: https://github.com/ganeshmani/react-piano-hooks/blob/master/src/constants/note.js
export default function createNotes() {
  const OCTAVES = [...rangeFrom(1, 4)];
  const NOTE_NAMES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const result = OCTAVES.reduce((notes, octaveNum) => {
    const notesInOctave = NOTE_NAMES.map(noteName => {
      return {
        name: noteName,
        octave: octaveNum,
      };
    });
    return [...notes, ...notesInOctave];
  }, []);
  return result;
}
