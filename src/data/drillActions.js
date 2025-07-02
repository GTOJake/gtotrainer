export const drillActions = {
    'RFI UTG': {
    //pairs
    'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
    '99': 'raise', '88': 'raise', '77': 'raise', '66': 'raise', '55': ['fold', 'raise'], '44': 'fold', '33': 'fold', '22': 'fold',
    //suited aces
    'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise', 'A9s': 'raise', 'A8s': 'raise', 'A7s': 'raise', 'A6s': 'raise', 'A5s': 'raise', 'A4s': 'raise', 'A3s': 'raise', 'A2s': 'raise',
    //suited kings
    'KQs': 'raise', 'KJs': 'raise', 'KTs': 'raise', 'K9s': 'raise', 'K8s': 'raise', 'K7s': 'raise', 'K6s': ['fold', 'raise'], 'K5s': ['fold', 'raise'],
    //suited queens
    'QJs': 'raise', 'QTs': 'raise', 'Q9s': 'raise', 'Q8s': 'fold',
    //suited jacks
    'JTs': 'raise', 'J9s': ['fold', 'raise'],
    //suited tens and lower
    'T9s': 'raise',
    '76s': ['fold', 'raise'],
    '65s': ['fold', 'raise'],
    '54s': ['fold', 'raise'],
    //offsuit broadways
    'AKo': 'raise', 'AQo': 'raise', 'AJo': 'raise', 'ATo': 'raise',
    'KQo': 'raise', 'KJo': 'raise', 'KTo': ['fold', 'raise'],
    'QJo': ['fold', 'raise'],
    
    // Default all others to fold
  },
  'RFI LJ': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'raise', '88': 'raise', '77': 'raise', '66': 'raise', '55': 'raise', '44': ['fold', 'raise'],
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise', 'A9s': 'raise', 'A8s': 'raise', 'A7s': 'raise', 'A6s': 'raise', 'A5s': 'raise', 
     'A4s': 'raise', 'A3s': 'raise', 'A2s': 'raise',
     //suited kings
     'KQs': 'raise', 'KJs': 'raise', 'KTs': 'raise', 'K9s': 'raise', 'K8s': 'raise', 'K7s': 'raise', 'K6s': 'raise', 'K5s': 'raise', 'K4s': ['fold', 'raise'],
     //suited queens
     'QJs': 'raise', 'QTs': 'raise', 'Q9s': 'raise', 'Q8s': ['fold', 'raise'],
     //suited jacks
     'JTs': 'raise', 'J9s': 'raise', 'J8s': ['fold', 'raise'],
     //suited tens and lower
     'T9s': 'raise', 'T8s': ['fold', 'raise'],
     '98s': ['fold', 'raise'],
     '76s': ['fold', 'raise'], 
     '65s': ['fold', 'raise'],
     '54s': ['fold', 'raise'],
     //offsuit hands
     'AKo': 'raise', 'AQo': 'raise', 'AJo': 'raise', 'ATo': 'raise', 'A9o': ['fold', 'raise'],
     'KQo': 'raise', 'KJo': 'raise', 'KTo': 'raise',
     'QJo': 'raise', 'QTo': ['fold', 'raise'],
     'JTo': ['fold', 'raise'],
  },
  'RFI HJ': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'raise', '88': 'raise', '77': 'raise', '66': 'raise', '55': 'raise', '44': 'raise', 
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise', 'A9s': 'raise', 'A8s': 'raise', 'A7s': 'raise', 'A6s': 'raise', 'A5s': 'raise', 
     'A4s': 'raise', 'A3s': 'raise', 'A2s': 'raise',
     //suited kings
     'KQs': 'raise', 'KJs': 'raise', 'KTs': 'raise', 'K9s': 'raise', 'K8s': 'raise', 'K7s': 'raise', 'K6s': 'raise', 'K5s': 'raise', 'K4s': 'raise', 'K3s': ['fold', 'raise'],
     //suited queens
     'QJs': 'raise', 'QTs': 'raise', 'Q9s': 'raise', 'Q8s': 'raise', 'Q7s': ['fold', 'raise'],
     //suited jacks
     'JTs': 'raise', 'J9s': 'raise', 'J8s': 'raise',
     //suited tens and lower
     'T9s': 'raise', 'T8s': 'raise',
     '98s': 'raise',
     '76s': ['fold', 'raise'], 
     '65s': ['fold', 'raise'],
     '54s': ['fold', 'raise'],
     //offsuit hands
     'AKo': 'raise', 'AQo': 'raise', 'AJo': 'raise', 'ATo': 'raise', 'A9o': 'raise', 'A8o': ['fold', 'raise'], 'A5o': ['fold', 'raise'],  
     'KQo': 'raise', 'KJo': 'raise', 'KTo': 'raise',
     'QJo': 'raise', 'QTo': 'raise', 
     'JTo': 'raise',
  },
  'RFI CO': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'raise', '88': 'raise', '77': 'raise', '66': 'raise', '55': 'raise', '44': 'raise', '33': ['fold', 'raise'], '22': 'fold',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise', 'A9s': 'raise', 'A8s': 'raise', 'A7s': 'raise', 'A6s': 'raise', 'A5s': 'raise', 
     'A4s': 'raise', 'A3s': 'raise', 'A2s': 'raise',
     //suited kings
     'KQs': 'raise', 'KJs': 'raise', 'KTs': 'raise', 'K9s': 'raise', 'K8s': 'raise', 'K7s': 'raise', 'K6s': 'raise', 'K5s': 'raise', 'K4s': 'raise', 'K3s': 'raise', 'K2s': 'raise',
     //suited queens
     'QJs': 'raise', 'QTs': 'raise', 'Q9s': 'raise', 'Q8s': 'raise', 'Q7s': 'raise', 'Q6s': 'raise', 'Q5s': 'raise',
     //suited jacks
     'JTs': 'raise', 'J9s': 'raise', 'J8s': 'raise', 'J7s': 'raise', 
     //suited tens and lower
     'T9s': 'raise', 'T8s': 'raise', 'T7s': 'raise',
     '98s': 'raise', '97s': 'raise',
     '87s': ['fold', 'raise'], 
     '76s': ['fold', 'raise'], 
     '65s': ['fold', 'raise'],
     '54s': ['fold', 'raise'],
     //offsuit hands
     'AKo': 'raise', 'AQo': 'raise', 'AJo': 'raise', 'ATo': 'raise', 'A9o': 'raise', 'A8o': 'raise', 'A7o': 'raise', 'A6o': ['fold', 'raise'], 'A5o': 'raise', 'A4o': ['fold', 'raise'], 
     'KQo': 'raise', 'KJo': 'raise', 'KTo': 'raise', 'K9o': 'raise', 
     'QJo': 'raise', 'QTo': 'raise', 
     'JTo': 'raise', 'J9o': ['fold', 'raise'],
     'T9o': ['fold', 'raise'],
  },
  'RFI BTN': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'raise', '88': 'raise', '77': 'raise', '66': 'raise', '55': 'raise', '44': 'raise', '33': 'raise', '22': 'raise',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'raise', 'A9s': 'raise', 'A8s': 'raise', 'A7s': 'raise', 'A6s': 'raise', 'A5s': 'raise', 'A4s': 'raise', 'A3s': 'raise', 'A2s': 'raise',
     //suited kings
     'KQs': 'raise', 'KJs': 'raise', 'KTs': 'raise', 'K9s': 'raise', 'K8s': 'raise', 'K7s': 'raise', 'K6s': 'raise', 'K5s': 'raise', 'K4s': 'raise', 'K3s': 'raise', 'K2s': 'raise',
     //suited queens
     'QJs': 'raise', 'QTs': 'raise', 'Q9s': 'raise', 'Q8s': 'raise', 'Q7s': 'raise', 'Q6s': 'raise', 'Q5s': 'raise', 'Q4s': 'raise', 'Q3s': 'raise', 'Q2s': 'raise',
     //suited jacks
     'JTs': 'raise', 'J9s': 'raise', 'J8s': 'raise', 'J7s': 'raise', 'J6s': 'raise', 'J5s': 'raise', 'J4s': 'raise',
     //suited tens and lower
     'T9s': 'raise', 'T8s': 'raise', 'T7s': 'raise', 'T6s': 'raise',
     '98s': 'raise', '97s': 'raise', '96s': 'raise', 
     '87s': 'raise', '86s': 'raise',
     '76s': 'raise', '75s': ['fold', 'raise'],
     '65s': 'raise',
     '54s': 'raise',
     //offsuit hands
     'AKo': 'raise', 'AQo': 'raise', 'AJo': 'raise', 'ATo': 'raise', 'A9o': 'raise', 'A8o': 'raise', 'A7o': 'raise', 'A6o': 'raise', 'A5o': 'raise', 'A4o': 'raise', 'A3o': 'raise', 'A2o': ['fold', 'raise'],
     'KQo': 'raise', 'KJo': 'raise', 'KTo': 'raise', 'K9o': 'raise', 'K8o': 'raise', 
     'QJo': 'raise', 'QTo': 'raise', 'Q9o': 'raise', 'Q8o': ['fold', 'raise'],
     'JTo': 'raise', 'J9o': 'raise',
     'T9o': 'raise', 'T8o': 'raise', 
     '98o': ['fold', 'raise'],
    
  },
  'Facing Open LJ v UTG': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': ['call', 'raise'], 'JJ': ['call', 'raise'], 'TT': ['call', 'raise'],
     '99': ['call', 'raise'], '88': ['call', 'raise', 'fold'], '77': ['call', 'raise', 'fold'], '66': ['fold', 'call'], '55': 'fold',
     //suited aces
     'AKs': 'raise', 'AQs': ['raise', 'call'], 'AJs': ['raise', 'call'], 'ATs': ['raise', 'call'], 
     'A9s': ['raise', 'fold'], 'A8s': ['raise', 'fold'], 'A7s': ['raise', 'fold'], 'A6s': 'fold', 'A5s': ['raise', 'call'], 'A4s': ['raise', 'call'], 'A3s': ['raise', 'fold'],
     //suited kings
     'KQs': ['raise', 'call'], 'KJs': ['raise', 'call'], 'KTs': ['raise', 'call'], 'K9s': ['raise', 'fold'], 'K8s': ['raise', 'fold'], 'K7s': ['raise', 'fold'], 'K6s': 'fold',
     //suited queens
     'QJs': ['raise', 'call', 'fold'], 'QTs': 'fold',
     //suited jacks
     'JTs': ['fold', 'call'],
     //suited tens and lower
     'T9s': 'fold', 
     '98s': 'fold', 
     '87s': 'fold', 
     '76s': ['raise', 'fold'],
     '65s': ['raise', 'call', 'fold'],
     '54s': ['fold', 'call'],
     //offsuit hands
     'AKo': ['raise', 'call'], 'AQo': ['raise', 'call'], 'AJo': ['raise', 'fold'], 
     'KQo': ['raise', 'fold'], 'KJo': 'fold',
     'QJo': 'fold', 
  },
  'Facing Open BTN v UTG': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': ['call', 'raise'], 'JJ': ['call', 'raise'], 'TT': ['call', 'raise'],
     '99': 'call', '88': 'call', '77': 'call', '66': 'call', '55': 'call', '44': ['call', 'fold'], '33': ['call', 'fold'], '22': ['call', 'fold'],
     //suited aces
     'AKs': 'raise', 'AQs': 'call', 'AJs': 'call', 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': ['call', 'raise'], 'A6s': 'raise', 'A5s': ['call', 'raise'], 
     'A4s': ['call', 'raise'], 'A3s': ['call', 'raise'], 'A2s': ['call', 'raise'],
     //suited kings
     'KQs': 'call', 'KJs': 'call', 'KTs': 'call', 'K9s': ['raise', 'call'], 'K8s': ['raise', 'fold'], 'K7s': ['raise', 'fold'], 'K6s': ['raise', 'fold'], 'K5s': ['raise', 'fold'],
     //suited queens
     'QJs': 'call', 'QTs': 'call', 'Q9s': 'raise',
     //suited jacks
     'JTs': 'call',
     //suited tens and lower
     'T9s': 'call', 
     '98s': ['call', 'fold'],
     '87s': 'fold', 
     '76s': ['call', 'fold'],
     '65s': ['call', 'fold'],
     '54s': ['fold', 'call'],
     //offsuit hands
     'AKo': ['raise'], 'AQo': ['raise', 'call'], 'AJo': ['raise', 'call'], 'ATo': ['raise', 'fold'], 
     'KQo': ['raise', 'call'], 'KJo': ['raise', 'call', 'fold'],
     'QJo': 'fold', 
  },
  'Facing Open BTN v CO': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': ['call', 'raise'], '88': ['call', 'raise'], '77': 'call', '66': 'call', '55': 'call', '44': ['call', 'fold'], '33': ['call', 'fold'], '22': ['call', 'fold'],
     //suited aces
     'AKs': 'raise', 'AQs': ['call', 'raise'], 'AJs': 'call', 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': ['call', 'raise'], 'A6s': 'raise', 'A5s': ['call', 'raise'], 
     'A4s': ['call', 'raise'], 'A3s': 'raise', 'A2s': 'raise',
     //suited kings
     'KQs': 'call', 'KJs': ['call', 'raise'], 'KTs': 'call', 'K9s': 'call', 'K8s': 'raise', 'K7s': ['raise', 'fold'], 'K6s': ['raise', 'fold'], 'K5s': ['raise', 'fold'],
     //suited queens
     'QJs': 'call', 'QTs': 'call', 'Q9s': ['call', 'raise'], 'Q8s': ['raise', 'fold'],
     //suited jacks
     'JTs': 'call', 'J9s': ['call', 'fold'],
     //suited tens and lower
     'T9s': ['call', 'fold'],
     '98s': ['call', 'fold'],
     '87s': 'fold', 
     '76s': 'fold',
     '65s': ['call', 'fold'],
     '54s': ['fold', 'call'],
     //offsuit hands
     'AKo': 'raise', 'AQo': ['raise', 'call'], 'AJo': ['raise', 'call'], 'ATo': ['raise', 'call'], 'A9o': ['raise', 'fold'],
     'KQo': ['raise', 'call'], 'KJo': ['raise', 'call'], 'KTo': ['raise', 'fold'],
     'QJo': 'fold', 'QTo': ['raise', 'fold'],
  },
  'Facing Open SB v UTG': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': ['call', 'raise'], 'TT': ['call', 'raise'],
     '99': ['call', 'raise'], '88': ['call', 'raise', 'fold'], '77': ['call', 'raise', 'fold'], '66': ['call', 'raise', 'fold'], '55': ['call', 'fold'], 
     '44': 'fold', '33': 'fold', '22': 'fold',
     //suited aces
     'AKs': 'raise', 'AQs': ['call', 'raise'], 'AJs': ['call', 'raise'], 'ATs': ['call', 'raise'], 'A9s': ['call', 'raise', 'fold'], 'A8s': ['call', 'raise', 'fold'], 
     'A5s': ['call', 'raise'], 
     'A4s': ['call', 'raise'], 'A3s': ['raise', 'fold'],
     //suited kings
     'KQs': ['call', 'raise'], 'KJs': ['call', 'raise'], 'KTs': ['call', 'raise'],
     //suited queens
     'QJs': ['call', 'raise'], 'QTs': ['call', 'raise', 'fold'],
     //suited jacks
     'JTs': ['call', 'raise', 'fold'],
     //suited tens and lower
     'T9s': 'fold',
     '98s': 'fold',
     '87s': 'fold', 
     '76s': 'fold',
     '65s': ['call', 'raise', 'fold'],
     '54s': ['call', 'raise', 'fold'],
     //offsuit hands
     'AKo': ['call', 'raise', 'fold'], 'AQo': ['call', 'raise', 'fold'], 'AJo': ['raise', 'fold'],
     'KQo': ['call', 'raise', 'fold'], 
  },
  'Facing Open SB v BTN': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': ['call', 'raise'], '88': ['call', 'raise'], '77': ['call', 'raise'], '66': ['call', 'raise'], '55': 'fold',
     '44': 'fold', '33': 'fold', '22': 'fold',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': ['call', 'raise'], 'ATs': ['call', 'raise'], 'A9s': ['call', 'raise'], 'A8s': ['call', 'raise'], 'A7s': 'raise',
     'A6s': ['raise', 'fold'],  
     'A5s': 'raise', 'A4s': ['call', 'raise'], 'A3s': ['raise', 'fold', 'call'],
     //suited kings
     'KQs': ['call', 'raise'], 'KJs': 'raise', 'KTs': 'raise', 'K9s': 'raise',
     //suited queens
     'QJs': 'raise', 'QTs': 'raise', 'Q9s': 'raise',
     //suited jacks
     'JTs': 'raise', 'J9s': ['raise', 'fold'],
     //suited tens and lower
     'T9s': 'raise',
     '98s': 'fold',
     '87s': 'fold', 
     '76s': 'fold',
     '65s': ['fold'],
     '54s': ['fold'],
     //offsuit hands
     'AKo': ['raise'], 'AQo': ['raise'], 'AJo': ['raise'], 'ATo': ['raise'],
     'KQo': ['raise'], 'KJo': ['raise', 'fold'],
  },
  'Facing Open BB v UTG': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': ['call', 'raise'], 'TT': ['call', 'raise'],
     '99': 'call', '88': 'call', '77': 'call', '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': ['call', 'raise'], 'AJs': 'call', 'ATs': ['call', 'raise'], 'A9s': 'call', 'A8s': 'call', 'A7s': ['call', 'raise'], 'A6s': ['call', 'raise'], 
     'A5s': ['call', 'raise'], 'A4s': ['call', 'raise'], 'A3s': ['call', 'raise'], 'A2s': ['call', 'raise'],
     //suited kings
     'KQs': ['call', 'raise'], 'KJs': ['call', 'raise'], 'KTs': ['call', 'raise'], 'K9s': ['raise', 'call'], 'K8s': ['raise', 'fold', 'call'], 'K7s': ['raise', 'fold'],
     //suited queens
     'QJs': ['call', 'raise'], 'QTs': ['call', 'raise'], 'Q9s': ['call', 'raise', 'fold'],
     //suited jacks
     'JTs': ['call', 'raise'], 'J9s': ['call', 'raise', 'fold'],
     //suited tens and lower
     'T9s': ['call', 'raise'], 'T8s': ['call', 'raise', 'fold'], 
     '98s': ['call', 'fold'],
     '87s': ['call', 'raise', 'fold'], 
     '76s': ['call', 'fold', 'raise'],
     '65s': ['call', 'raise'],
     '54s': ['raise', 'call'],
     //offsuit hands
     'AKo': ['raise'], 'AQo': ['raise', 'call'], 'AJo': ['raise', 'call'], 'ATo': ['fold'], 
     'KQo': ['raise', 'call'], 'KJo': ['raise', 'fold'],
     'QJo': 'fold', 
  },
  'Facing Open BB v BTN': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': ['call', 'raise'], '88': ['call', 'raise'], '77': ['call', 'raise'], '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': ['call', 'raise'], 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': ['call', 'raise'], 'A6s': ['call', 'raise'], 
     'A5s': ['call', 'raise'], 'A4s': ['call', 'raise'], 'A3s': ['call', 'raise'], 'A2s': ['call', 'raise'],
     //suited kings
     'KQs': 'call', 'KJs': ['call', 'raise'], 'KTs': ['call', 'raise'], 'K9s': ['raise', 'call'], 'K8s': 'call', 'K7s': ['raise', 'call'], 'K6s': ['raise', 'call'],
     'K5s': ['raise', 'call'], 'K4s': ['raise', 'fold'],
     //suited queens
     'QJs': ['call', 'raise'], 'QTs': ['call', 'raise'], 'Q9s': ['call', 'raise'], 'Q8s': ['call', 'raise'],
     //suited jacks
     'JTs': ['call', 'raise'], 'J9s': ['call', 'raise'], 'J8s': ['call', 'raise'],
     //suited tens and lower
     'T9s': ['call', 'raise'], 'T8s': ['call', 'raise'], 
     '98s': ['call', 'raise'], '97s': ['call', 'raise', 'fold'],
     '87s': ['call', 'raise'], 
     '76s': ['call', 'fold', 'raise'],
     '65s': ['call', 'raise', 'fold'],
     '54s': ['raise', 'call', 'fold'],
     //offsuit hands
     'AKo': ['raise'], 'AQo': ['raise', 'call'], 'AJo': ['raise', 'call'], 'ATo': ['raise', 'call'], 'A9o': ['raise', 'call'],
     'KQo': ['raise'], 'KJo': ['raise', 'call'], 'KTo': ['raise', 'call'],
     'QJo': ['raise', 'call'], 'QTo': ['raise', 'call', 'fold'],
     'JTo': ['raise', 'call', 'fold'],
  },
  'Facing Open STR v UTG': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': ['call', 'raise'], 'TT': 'call',
     '99': 'call', '88': 'call', '77': 'call', '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': ['call', 'raise'], 'AJs': 'call', 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': 'call', 'A6s': ['call', 'raise'], 
     'A5s': ['call', 'raise'], 'A4s': ['call', 'raise'], 'A3s': 'call', 'A2s': 'call',
     //suited kings
     'KQs': 'call', 'KJs': ['call', 'raise'], 'KTs': 'call', 'K9s': 'call', 'K8s': 'call', 'K7s': ['raise', 'call'], 'K6s': ['raise', 'call'],
     'K5s': ['raise', 'call'], 'K4s': ['raise', 'call'], 'K3s': ['raise', 'call'], 'K2s': ['raise', 'call'],
     //suited queens
     'QJs': ['call', 'raise'], 'QTs': ['call', 'raise'], 'Q9s': ['call', 'raise'], 'Q8s': ['call', 'raise'], 'Q7s': 'call', 'Q6s': 'call', 'Q5s': 'call', 'Q4s': ['raise', 'call'], 
     'Q3s': ['call', 'raise', 'fold'],
     //suited jacks
     'JTs': 'call', 'J9s': 'call', 'J8s': 'call', 'J7s': 'call',
     //suited tens and lower
     'T9s': 'call', 'T8s': 'call', 'T7s': 'call', 'T6s': 'call', 
     '98s': 'call', '97s': 'call', '96s': 'call', '95s': 'call',
     '87s': ['call', 'raise'], '86s': 'call', '85s': 'call', 
     '76s': ['call', 'raise'], '75s': 'call', '74s': 'call', 
     '65s': ['call', 'raise'], '64s': 'call', '63s': 'call',
     '54s': ['raise', 'call'], '53s': 'call', '52s': 'call',
     '43s': ['raise', 'call'], '42s': 'call',
     '32s': ['call', 'fold'],
     //offsuit hands
     'AKo': ['raise'], 'AQo': ['raise', 'call'], 'AJo': ['raise', 'call'], 'ATo': ['raise', 'call'], 'A9o': 'call', 'A8o': ['fold', 'call'], 'A5o': ['raise', 'call'],
     'KQo': ['raise', 'call'], 'KJo': ['raise', 'call'], 'KTo': ['raise', 'call'],
     'QJo': ['raise', 'call'], 'QTo': ['call', 'fold'],
     'JTo': ['call'],
     'T9o': ['call', 'fold'],
     '65o': ['call', 'fold'],
     '54o': ['call', 'fold'],
  },
  'Facing Open STR v BTN': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'raise', '88': ['call', 'raise'], '77': ['call', 'raise'], '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': ['call', 'raise'], 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': 'call', 'A6s': 'call', 
     'A5s': ['call', 'raise'], 'A4s': 'call', 'A3s': 'call', 'A2s': 'call',
     //suited kings
     'KQs': ['call', 'raise'], 'KJs': 'call', 'KTs': 'call', 'K9s': 'call', 'K8s': 'call', 'K7s': 'call', 'K6s': 'call', 'K5s': 'call', 'K4s': 'call', 'K3s': 'call', 'K2s': 'call',
     //suited queens
     'QJs': 'call', 'QTs': 'call', 'Q9s': 'call', 'Q8s': 'call', 'Q7s': 'call', 'Q6s': 'call', 'Q5s': 'call', 'Q4s': ['raise', 'call'], 'Q3s': ['raise', 'call'], 'Q2s': 'call', 
     
     //suited jacks
     'JTs': 'call', 'J9s': 'call', 'J8s': 'call', 'J7s': 'call', 'J6s': 'call', 'J5s': 'call', 'J4s': 'call', 'J3s': 'call', 'J2s': 'call',
     //suited tens and lower
     'T9s': ['call', 'raise'], 'T8s': ['call', 'raise'], 'T7s': ['call', 'raise'], 'T6s': ['call', 'raise'], 'T5s': 'call', 'T4s': 'call', 'T3s': 'call', 'T2s': 'call', 
     '98s': ['call', 'raise'], '97s': 'call', '96s': 'call', '95s': 'call', '94s': 'call',
     '87s': ['call', 'raise'], '86s': 'call', '85s': 'call', '84s': 'call', 
     '76s': ['call', 'raise'], '75s': 'call', '74s': 'call', '73s': 'call',
     '65s': 'call', '64s': 'call', '63s': 'call', 
     '54s': ['raise', 'call'], '53s': 'call', '52s': 'call',
     '43s': 'call', '42s': 'call',
     '32s': 'call',
     //offsuit hands
     'AKo': ['raise'], 'AQo': 'raise', 'AJo': ['raise', 'call'], 'ATo': ['raise', 'call'], 'A9o': 'call', 'A8o': 'call', 'A7o': ['raise', 'call'], 'A6o': ['raise', 'call'], 
     'A5o': ['raise', 'call'], 'A4o': ['raise', 'call'], 'A3o': ['raise', 'call'], 'A2o': ['raise', 'call'],
     'KQo': ['raise', 'call'], 'KJo': 'call', 'KTo': ['raise', 'call'], 'K9o': ['raise', 'call'], 'K8o': 'call', 'K7o': 'call', 'K6o': ['raise', 'call'], 'K5o': ['raise', 'call', 'fold'],
     'QJo': ['raise', 'call'], 'QTo': ['call', 'raise'], 'Q9o': ['call', 'raise'], 'Q8o': ['call', 'raise'],
     'JTo': ['call', 'raise'], 'J9o': ['call', 'raise'], 'J8o': ['call', 'raise'],
     'T9o': ['call', 'raise'], 'T8o': ['call', 'raise'],
     '98o': 'call', '97o': ['call', 'fold'], '87o': 'call', '76o': ['call', 'fold'],
     '65o': ['call', 'fold'],
     '54o': ['call', 'fold'],
  },
  'Facing Open STR v SB': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'call', '88': 'call', '77': 'call', '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': ['call', 'raise'], 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': 'call', 'A6s': 'call', 
     'A5s': ['call', 'raise'], 'A4s': ['call', 'raise'], 'A3s': 'call', 'A2s': 'call',
     //suited kings
     'KQs': ['call', 'raise'], 'KJs': 'call', 'KTs': 'call', 'K9s': 'call', 'K8s': 'call', 'K7s': 'call', 'K6s': 'call', 'K5s': 'call', 'K4s': 'call', 'K3s': 'call', 'K2s': 'call',
     //suited queens
     'QJs': ['call', 'raise'], 'QTs': 'call', 'Q9s': 'call', 'Q8s': 'call', 'Q7s': 'call', 'Q6s': 'call', 'Q5s': 'call', 'Q4s': 'call', 'Q3s': 'call', 'Q2s': 'call', 
     
     //suited jacks
     'JTs': ['call', 'raise'], 'J9s': 'call', 'J8s': 'call', 'J7s': 'call', 'J6s': 'call', 'J5s': 'call', 'J4s': 'call', 'J3s': 'call', 'J2s': ['call', 'raise'],
     //suited tens and lower
     'T9s': ['call', 'raise'], 'T8s': 'call', 'T7s': 'call', 'T6s': 'call', 'T5s': ['call', 'raise'], 'T4s': ['call', 'raise'], 'T3s': ['call', 'raise'], 'T2s': ['call', 'raise'],
     '98s': ['call', 'raise'], '97s': 'call', '96s': 'call', '95s': 'call', '94s': ['call', 'fold'], '93s': ['call', 'fold'],
     '87s': 'call', '86s': 'call', '85s': 'call', '84s': 'call', 
     '76s': ['call', 'raise'], '75s': 'call', '74s': 'call', '73s': 'call',
     '65s': 'call', '64s': 'call', '63s': 'call', '62s': 'call',
     '54s': ['raise', 'call'], '53s': 'call', '52s': 'call',
     '43s': 'call', '42s': 'call',
     '32s': 'call',
     //offsuit hands
     'AKo': ['raise'], 'AQo': ['raise', 'call'], 'AJo': 'call', 'ATo': 'call', 'A9o': 'call', 'A8o': 'call', 'A7o': ['raise', 'call'], 'A6o': ['raise', 'call'], 
     'A5o': 'call', 'A4o': ['raise', 'call'], 'A3o': ['raise', 'call'], 'A2o': ['raise', 'call'],
     'KQo': 'call', 'KJo': 'call', 'KTo': 'call', 'K9o': ['raise', 'call'], 'K8o': ['raise', 'call'], 'K7o': ['raise', 'call'], 'K6o': ['raise', 'call', 'fold'], 
     'K5o': ['raise', 'call', 'fold'], 'K4o': ['raise', 'call', 'fold'],
     'QJo': 'call', 'QTo': 'call', 'Q9o': ['call', 'raise'], 'Q8o': ['fold', 'raise'],
     'JTo': ['call', 'raise'], 'J9o': ['call', 'raise'], 'J8o': ['call', 'raise', 'fold'],
     'T9o': 'call', 'T8o': ['call', 'raise'],
     '98o': 'call', '87o': ['call', 'fold'], '76o': ['call', 'fold'],
     '65o': ['call', 'fold'],
     '54o': ['call', 'fold'],
  },
  'Facing Open STR v SB + BB': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': 'raise', '88': 'call', '77': 'call', '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': 'raise', 'AJs': 'raise', 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': 'call', 'A6s': 'call', 
     'A5s': 'call', 'A4s': 'call', 'A3s': 'call', 'A2s': 'call',
     //suited kings
     'KQs': ['call', 'raise'], 'KJs': 'call', 'KTs': 'call', 'K9s': 'call', 'K8s': 'call', 'K7s': 'call', 'K6s': 'call', 'K5s': 'call', 'K4s': 'call', 'K3s': 'call', 'K2s': 'call',
     //suited queens
     'QJs': 'call', 'QTs': 'call', 'Q9s': 'call', 'Q8s': ['call', 'raise'], 'Q7s': 'call', 'Q6s': ['call', 'raise'], 'Q5s': 'call', 'Q4s': 'call', 'Q3s': ['call', 'raise'], 'Q2s': 'call', 
     //suited jacks
     'JTs': 'call', 'J9s': 'call', 'J8s': 'call', 'J7s': 'call', 'J6s': ['call', 'raise', 'fold'], 'J5s': ['call', 'raise', 'fold'], 'J4s': ['call', 'raise', 'fold'],
     //suited tens and lower
     'T9s': 'call', 'T8s': 'call', 'T7s': 'call', 'T6s': 'call',
     '98s': 'call',  '97s': 'call', '96s': 'call',
     '87s': 'call', '86s': 'call', '85s': 'call', 
     '76s': 'call', '75s': 'call', '74s': 'call',
     '65s': 'call', '64s': 'call', '63s': 'call',
     '54s': 'call', '53s': 'call', '52s': 'call',
     '43s': 'call', '42s': 'call',
     '32s': 'fold',
     //offsuit hands
     'AKo': ['raise'], 'AQo': 'raise', 'AJo': ['call', 'raise'], 'ATo': ['call', 'raise'], 'A9o': 'call', 'A8o': ['call', 'raise'], 'A7o': ['raise', 'fold'], 'A6o': 'fold', 
     'A5o': ['call', 'raise', 'fold'], 'A4o': ['raise', 'fold'],
     'KQo': ['call', 'raise'], 'KJo': ['call', 'raise'], 'KTo': ['call', 'raise'], 'K9o': ['raise', 'call', 'fold'], 
     'QJo': ['call', 'raise'], 'QTo': ['call', 'raise'], 'Q9o': ['call', 'raise', 'fold'], 
     'JTo': ['call', 'raise'], 'J9o': ['call', 'raise', 'fold'],
     'T9o': ['call', 'raise'], 
     '98o': ['call', 'fold'], 
     '65o': ['call', 'fold'],
  },
  'Facing 3bet UTG v LJ': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': ['call', 'raise'], 'JJ': ['call', 'raise'], 'TT': 'call',
     '99': 'call', '88': ['call', 'fold'], '77': ['call', 'fold'], '66': ['fold', 'call'], '55': 'call',
     //suited aces
     'AKs': 'raise', 'AQs': 'call', 'AJs': 'call', 'ATs': 'call', 
     'A5s': ['fold', 'call'], 'A4s': ['raise', 'call', 'fold'],
     //suited kings
     'KQs': 'call', 'KJs': ['raise', 'call'], 'KTs': ['raise', 'call', 'fold'], 'K9s': ['raise', 'fold'], 'K8s': ['raise', 'fold'], 'K7s': ['raise', 'fold'], 
     'K6s': ['raise', 'fold'],
     //suited queens
     'QJs': ['call', 'fold'],
     //suited jacks
     'JTs': 'call',
     //suited tens and lower
     'T9s': ['raise', 'fold'], 
     '98s': 'fold', 
     '87s': 'fold', 
     '76s': 'call',
     '65s': 'call',
     '54s': 'call',
     //offsuit hands
     'AKo': ['raise', 'call'], 'AQo': ['raise', 'fold', 'call'], 
     'KQo': 'fold', 'KJo': 'fold',
     'QJo': 'fold', 
  },
  'Facing 3bet CO v BTN': {
     //pairs
     'AA': 'raise', 'KK': 'raise', 'QQ': 'raise', 'JJ': 'raise', 'TT': 'raise',
     '99': ['raise', 'call'], '88': ['call', 'raise'], '77': 'call', '66': 'call', '55': ['call', 'fold'], '44': ['call', 'fold'], 
     //suited aces
     'AKs': 'raise', 'AQs': 'call', 'AJs': 'call', 'ATs': 'call', 'A9s': ['call', 'fold'], 'A8s': ['call', 'fold'],   
     'A5s': ['fold', 'call', 'raise'], 'A4s': ['raise', 'call', 'fold'], 'A3s': ['raise', 'fold'], 'A2s': ['raise', 'fold'],
     //suited kings
     'KQs': 'call', 'KJs': 'call', 'KTs': ['call', 'fold'], 
     //suited queens
     'QJs': 'call',
     //suited jacks
     'JTs': ['call', 'fold'], 
     //suited tens and lower
     'T9s': ['call', 'fold'], 
     '98s': ['call', 'fold'], 
     '87s': 'fold', 
     '76s': ['call', 'fold'], 
     '65s': 'call',
     '54s': 'call',
     //offsuit hands
     'AKo': 'raise', 'AQo': ['raise', 'call'], 'AJo': ['raise', 'fold'], 'ATo': ['raise', 'fold'], 
     'KQo': ['raise', 'call'],
  },
  'Facing 3bet BTN v SB': {
     //pairs
     'AA': ['raise', 'call'], 'KK': ['raise', 'call'], 'QQ': ['raise', 'call'], 'JJ': 'raise', 'TT': 'raise',
     '99': 'call', '88': 'call', '77': 'call', '66': 'call', '55': 'call', '44': 'call', '33': 'call', '22': ['fold', 'call'],
     //suited aces
     'AKs': 'raise', 'AQs': 'call', 'AJs': 'call', 'ATs': 'call', 'A9s': 'call', 'A8s': 'call', 'A7s': 'call', 'A6s': ['raise', 'call'],
     'A5s': ['call', 'raise'], 'A4s': 'call', 'A3s': ['raise', 'call'], 'A2s': ['raise', 'call'],
     //suited kings
     'KQs': 'call', 'KJs': ['call', 'raise'], 'KTs': ['call', 'raise'], 'K9s': 'call', 'K8s': 'call',
     //suited queens
     'QJs': 'call', 'QTs': 'call', 'Q9s': 'call',
     //suited jacks
     'JTs': 'call', 'J9s': 'call', 'J8s': ['call', 'fold'], 
     //suited tens and lower
     'T9s': 'call', 'T8s': 'call', 
     '98s': 'call', '97s': 'call',  
     '87s': 'call', 
     '76s': 'call', 
     '65s': 'call',
     '54s': 'call',
     //offsuit hands
     'AKo': 'raise', 'AQo': ['raise', 'call'], 'AJo': 'call', 'ATo': ['raise', 'fold'], 
     'KQo': 'call', 'KJ o': ['raise', 'fold', 'call'],
  },
};