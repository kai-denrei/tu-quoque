// calibrate.js — "Calibrate Yourself": guess-first, then reveal the contested range.
import { calibrate } from './data.js';
import { openOverlay } from './overlay.js';

const closeBtn = '<button class="ov-close" data-close>esc</button>';

export async function openCalibrate() {
  const { buckets, questions } = await calibrate();
  const card = openOverlay();
  let i = 0;
  const guesses = [];

  function step() {
    const it = questions[i];
    card.innerHTML = `${closeBtn}
      <div class="quiz">
        <h2 id="ovTitle">Calibrate yourself</h2>
        <p class="lead">Commit to a guess <i>before</i> you see the figure. The gap between your guess and the evidence is the lesson.</p>
        <div class="quiz-prog">${i + 1} / ${questions.length}</div>
        <div class="quiz-q">${it.prompt}<span class="era">${it.era}</span></div>
        <div class="quiz-ask">How many died?</div>
        <div class="choices">${buckets.map((b, bi) =>
          `<button class="choice" data-b="${bi}"><span class="opt">${String.fromCharCode(65 + bi)}</span>${b}</button>`).join('')}</div>
      </div>`;
    card.querySelectorAll('.choice').forEach((btn) => (btn.onclick = () => reveal(+btn.dataset.b)));
  }

  function reveal(guess) {
    const it = questions[i];
    guesses.push({ guess, it });
    const inside = guess >= it.answer_low && guess <= it.answer_high;
    const over = guess > it.answer_high;
    const verdict = inside
      ? 'Inside the contested range. Calibrated.'
      : over
        ? 'Above even the top scholarly estimate — the magnitude felt bigger than the evidence supports.'
        : 'Below the floor of the evidence.';
    card.innerHTML = `${closeBtn}
      <div class="quiz">
        <h2>Calibrate yourself</h2>
        <div class="quiz-prog">${i + 1} / ${questions.length}</div>
        <div class="quiz-q">${it.prompt}<span class="era">${it.era}</span></div>
        <div class="reveal">
          <div class="row"><span class="lab">your guess</span><span>${buckets[guess]}</span></div>
          <div class="row"><span class="lab">scholarly range</span><span class="range">${it.range}</span></div>
          <div class="row"><span class="lab">commonly repeated</span><span class="famous">${it.famous}</span></div>
          <div class="verdict">${verdict}</div>
          <div class="note">${it.note}</div>
          <button class="btn quiz-next">${i < questions.length - 1 ? 'next' : 'see how you read'}</button>
        </div>
      </div>`;
    card.querySelector('.quiz-next').onclick = () => { i++; i < questions.length ? step() : score(); };
  }

  function score() {
    let inside = 0, over = 0, ceil = 0;
    for (const g of guesses) {
      if (g.guess >= g.it.answer_low && g.guess <= g.it.answer_high) inside++;
      if (g.guess > g.it.answer_high) over++;
      if (g.guess === g.it.famous_bucket && g.it.famous_bucket > g.it.answer_high) ceil++;
    }
    const n = guesses.length;
    const pit = (cls, tag, line) => `<div class="pit ${cls}"><b>${tag}</b>${line}</div>`;
    card.innerHTML = `${closeBtn}
      <div class="quiz scorecard">
        <h2>How you read</h2>
        <div class="big">Inside the evidence on ${inside} of ${n}.</div>
        ${ceil
          ? pit('hit', 'ceiling reflex', `You landed on the famous high figure where it overshoots the scholarship, ${ceil} time${ceil > 1 ? 's' : ''}. That number tends to have a motive behind it.`)
          : pit('ok', 'ceiling reflex', 'You did not default to the loudest figure.')}
        ${over
          ? pit('hit', '&ldquo;huge&rdquo; with no referent', `You guessed past the top estimate ${over} time${over > 1 ? 's' : ''} — the sense it was vast outran the evidence.`)
          : pit('ok', 'magnitude sense', 'You did not inflate past the evidence.')}
        ${pit('ok', 'what to carry', 'Every figure in this atlas is a contested range. When one travels as a single round number, ask who keeps repeating it, and why.')}
        <button class="btn quiz-next" data-close>close</button>
      </div>`;
  }

  step();
}
