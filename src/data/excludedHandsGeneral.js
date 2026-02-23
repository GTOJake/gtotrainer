import { expandHandList } from '../utils/handRangeParser';

export const EXCLUDED_HANDS_RFI = expandHandList([
  // Weak offsuit hands
  '32o', '42o-43o', '52o-54o', '62o-64o', '72o-75o', '82o-86o', '92o-97o',
  'T2o-T6o', 'J2o-J7o', 'Q2o-Q7o', 'K2o-K6o',
  // Very weak suited hands
  '72s-73s', '82s-83s', '92s-94s', 'T2s-T4s', 'J2s',
  // Premium hands excluded from random RFI drill
  'AA-TT', 'AKs', 'AKo', 'AQs', 'AQo', 'AJs', 'ATs-A4s', 'KQs', 'KJs',
]);

export const EXCLUDED_HANDS_FACING_OPEN = expandHandList([
  // Weak offsuit hands
  '32o', '42o-43o', '52o-54o', '62o-64o', '72o-75o', '82o-86o', '92o-97o',
  'T2o-T6o', 'J2o-J7o', 'Q2o-Q7o', 'K2o-K6o',
  // Very weak suited hands
  '72s-73s', '82s-83s', '92s-94s', 'T2s-T4s', 'J2s',
  // Additional offsuit hands too weak to appear in facing-open drills
  '65o', '76o', '87o', '98o', 'T7o-T9o', 'J8o-J9o', 'Q8o-Q9o', 'K7o-K9o',
  'A2o-A4o', 'A6o',
  // Additional suited hands too weak to appear in facing-open drills
  '32s', '42s-43s', '52s-53s', '62s-64s', '74s-75s', '84s-86s', '95s-96s',
  'T5s-T6s', 'J3s-J7s', 'Q2s-Q7s', 'K2s',
]);

export const EXCLUDED_HANDS_BLINDS = expandHandList([
  // Weak offsuit hands
  '32o', '42o-43o', '52o-53o', '62o-64o', '72o-74o', '82o-85o', '92o-95o',
  'T2o-T6o', 'J2o-J6o', 'Q2o-Q6o', 'K2o-K5o',
]);
