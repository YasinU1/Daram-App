// Two exercise kinds, both synchronous (no execution runtime needed here):
//
// - kind:'mcq': single-select. Used for concept exercises, quiz questions,
//   lesson drills, and application questions in the drill bank.
// - kind:'tarkeeb': word-by-word grammatical labeling, drag-and-drop. Chips
//   are a controlled vocabulary (drawn from item.chips), not free text, so
//   grading is exact string equality -- no Arabic normalization needed.

export function checkMcq(item, selectedIndex) {
  return { pass: selectedIndex === item.correct };
}

// placements: array the same length as item.words, each entry either the
// chip text dropped on that slot or null if left empty.
export function checkTarkeeb(item, placements) {
  const feedback = item.words.map((word, i) => {
    const expected = item.labels[i];
    const given = placements[i] ?? null;
    return { word, expected, given, pass: given !== null && given === expected };
  });
  return { feedback, allPass: feedback.every((f) => f.pass) };
}

export function checkExercise(item, answer) {
  if (item.kind === 'tarkeeb') return checkTarkeeb(item, answer);
  return checkMcq(item, answer);
}
