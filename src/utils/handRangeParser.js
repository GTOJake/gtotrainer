const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const RANK_INDEX = Object.fromEntries(RANKS.map((r, i) => [r, i]));

// Expand a single notation string into an array of hand keys.
// Supports:
//   - Single hands:            'AKs', 'AKo', 'AA'
//   - Pair ranges:             'AA-TT'  → AA, KK, QQ, JJ, TT
//   - Same-high-card ranges:   'AKs-ATs' → AKs, AQs, AJs, ATs
//                              'AKo-ATo' → AKo, AQo, AJo, ATo
export function expandRange(notation) {
  if (!notation.includes('-')) {
    return [notation];
  }

  const dashIdx = notation.indexOf('-');
  const h1 = notation.slice(0, dashIdx);
  const h2 = notation.slice(dashIdx + 1);

  // Pair range: e.g. 'AA-TT'
  if (h1.length === 2 && h1[0] === h1[1] && h2.length === 2 && h2[0] === h2[1]) {
    const r1 = RANK_INDEX[h1[0]];
    const r2 = RANK_INDEX[h2[0]];
    const high = Math.max(r1, r2);
    const low = Math.min(r1, r2);
    const result = [];
    for (let i = high; i >= low; i--) {
      result.push(`${RANKS[i]}${RANKS[i]}`);
    }
    return result;
  }

  // Same-high-card range: e.g. 'AKs-ATs' or 'AKo-ATo'
  // h1 and h2 must be 3 chars: [HighCard][LowCard][suit]
  if (h1.length === 3 && h2.length === 3 && h1[0] === h2[0] && h1[2] === h2[2]) {
    const highCard = h1[0];
    const suit = h1[2];
    const low1 = RANK_INDEX[h1[1]];
    const low2 = RANK_INDEX[h2[1]];
    const high = Math.max(low1, low2);
    const low = Math.min(low1, low2);
    const result = [];
    for (let i = high; i >= low; i--) {
      if (RANKS[i] !== highCard) { // skip if low card equals high card (would be a pair)
        result.push(`${highCard}${RANKS[i]}${suit}`);
      }
    }
    return result;
  }

  // Fallback: treat as single hand (shouldn't happen with valid notation)
  console.warn(`handRangeParser: unrecognized range notation "${notation}", treating as single hand`);
  return [notation];
}

// Expand an array of range notations into a flat array of individual hand keys.
// Used for excluded hand lists.
export function expandHandList(notations) {
  const result = [];
  for (const notation of notations) {
    result.push(...expandRange(notation));
  }
  return result;
}

// Convert the compact drill data format into the flat object format used by App.js.
// Input:  array of [rangeNotation, action] pairs
// Output: { handKey: action, ... }
export function expandDrillData(pairs) {
  const result = {};
  for (const [range, action] of pairs) {
    for (const hand of expandRange(range)) {
      result[hand] = action;
    }
  }
  return result;
}
